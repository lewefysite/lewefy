const { Router } = require('express');
const admin = require('firebase-admin');
const isAuthenticated = require('../utils/isAuthenticated');
// Validação e Schemas seriam adicionados em um arquivo Joi separado

const db = admin.firestore();
const router = Router();


// Rotas públicas (não precisam de token de autenticação)
// Endpoint PROFESSIONALS_001, 002, 003: Listar e Filtrar Profissionais Aprovados
router.get('/', async (req, res) => {
    try {
        const { search, specialization } = req.query;
        let query = db.collection('professionals').where('status', '==', 'approved');

        if (specialization) {
            query = query.where('specialization', '==', specialization);
        }
        if (search) {
             query = query.orderBy('name').startAt(search).endAt(search + '\uf8ff');
        }

        const snapshot = await query.get();
        const professionals = snapshot.docs.map(doc => {
            const data = doc.data();
            delete data.cpf; // Sempre remover dados sensíveis
            delete data.password; // Garantir que senha nunca seja exposta
            return { id: doc.id, ...data };
        });

        return res.status(200).json(professionals);
    } catch(error) {
        console.error("Erro ao listar profissionais: ", error);
        return res.status(500).json({ error: "Erro ao buscar profissionais." });
    }
});


// Rotas que exigem autenticação do usuário ou do profissional
router.use(isAuthenticated);

// Endpoint MATCH_003: Usuário solicita um Match
router.post('/match', async (req, res) => {
    const { professionalId, message } = req.body;
    const { uid: userId } = req.user;

    if (!professionalId || !message) {
        return res.status(400).json({ error: 'ID do profissional e mensagem são obrigatórios.' });
    }

    try {
        const matchData = {
            userId,
            professionalId,
            message,
            status: 'pending',
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        };
        const matchRef = await db.collection('matchRequests').add(matchData);
        
        return res.status(201).json({ id: matchRef.id, ...matchData });
    } catch(error) {
        console.error("Erro ao solicitar match: ", error);
        return res.status(500).json({ error: "Erro ao criar solicitação de match." });
    }
});


// Endpoint MATCH_004: Usuário visualiza seus matches
router.get('/my-matches', async (req, res) => {
    const { uid: userId } = req.user;
    try {
        const snapshot = await db.collection('matchRequests').where('userId', '==', userId).orderBy('createdAt', 'desc').get();
        const matches = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return res.status(200).json(matches);
    } catch(error) {
        console.error("Erro ao listar matches: ", error);
        return res.status(500).json({ error: "Erro ao buscar seus matches." });
    }
});


// (Endpoints de login e registro profissional estariam aqui, similares ao auth.routes.js)

module.exports = router;
