const { Router } = require('express');
const admin = require('firebase-admin');
const db = admin.firestore();

const router = Router();

// Endpoint REGISTER_005: Registrar um novo usuário
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Nome, email e senha são obrigatórios.' });
    }

    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: name,
    });

    // Cria o documento correspondente no Firestore
    await db.collection('users').doc(userRecord.uid).set({
      name,
      email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      bio: '' // Inicia com bio vazia
    });

    // Gera um token para login imediato (simulação simplificada, o client-side SDK é preferível)
    const token = await admin.auth().createCustomToken(userRecord.uid);
    return res.status(201).json({ token, user: { uid: userRecord.uid, email: userRecord.email, name } });
  
  } catch (error) {
    console.error("Erro no registro: ", error);
    if (error.code === 'auth/email-already-exists') {
        return res.status(409).json({ error: 'O email fornecido já está em uso.' });
    }
    return res.status(500).json({ error: 'Erro interno ao registrar usuário.' });
  }
});

// Endpoint LOGIN_003: Login de usuário (endpoint para cenários sem SDK client-side)
// Na prática, a validação de senha ocorreria via uma API externa ou SDK.
// Para este projeto, vamos simular a geração de token a partir do email.
router.post('/login', async (req, res) => {
    const { email, password } = req.body; // Password não é usado aqui, apenas para seguir o contrato

    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
    }

    try {
        const userRecord = await admin.auth().getUserByEmail(email);
        const token = await admin.auth().createCustomToken(userRecord.uid);
        res.status(200).json({ token, user: { uid: userRecord.uid, email: userRecord.email, name: userRecord.displayName } });
    } catch (error) {
        res.status(401).json({ error: 'Credenciais inválidas.' });
    }
});


// Endpoint FORGOT_002: Enviar link de recuperação de senha
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    if(!email) {
        return res.status(400).json({ error: 'O email é obrigatório.' });
    }

    try {
        const link = await admin.auth().generatePasswordResetLink(email);
        // Em um projeto real, aqui você usaria um serviço de email (ex: SendGrid, Nodemailer)
        // para enviar o `link` para o email do usuário.
        console.log("Link de recuperação gerado (enviar por email):", link);
        res.status(200).json({ message: 'Se o email estiver cadastrado, um link de recuperação foi enviado.' });
    } catch (error) {
        console.error("Erro ao gerar link de recuperação:", error);
        res.status(500).json({ error: 'Erro ao processar a solicitação.' });
    }
});


module.exports = router;
