const admin = require('firebase-admin');

/**
 * Middleware para verificar a validade do token JWT enviado no cabeçalho Authorization.
 * Se o token for válido, os dados decodificados do usuário são anexados ao objeto `req`.
 */
const isAuthenticated = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token de autenticação ausente ou malformado.' });
  }

  const token = authorization.split('Bearer ')[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    
    // Anexa o UID e o email ao objeto de requisição para uso posterior nos endpoints
    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email
    };
    
    return next();
  } catch (err) {
    console.error('Erro na verificação do token:', err);
    return res.status(401).json({ error: 'Token inválido ou expirado. Acesso não autorizado.' });
  }
};

module.exports = isAuthenticated;
