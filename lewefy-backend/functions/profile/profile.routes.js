const { Router } = require('express');
const admin = require('firebase-admin');
const isAuthenticated = require('../utils/isAuthenticated');
const Joi = require('joi');

const db = admin.firestore();
const router = Router();

// Todas as rotas de perfil requerem autenticação
router.use(isAuthenticated);

const profileSchema = Joi.object({
    name: Joi.string().min(2).max(50).optional(),
    bio: Joi.string().max(500).allow('').optional(), // Permite bio vazia
});

// Endpoint PROFILE_004: Atualizar perfil do usuário logado
router.put('/', async (req, res) => {
    try {
        const { error, value } = profileSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { uid } = req.user;
        const userRef = db.collection('users').doc(uid);
        
        await userRef.update(value);
        
        // Atualiza o display name no Firebase Auth se o nome foi alterado
        if (value.name) {
            await admin.auth().updateUser(uid, { displayName: value.name });
        }

        const updatedUserDoc = await userRef.get();
        return res.status(200).json({ id: updatedUserDoc.id, ...updatedUserDoc.data() });

    } catch (error) {
        console.error("Erro ao atualizar perfil: ", error);
        return res.status(500).json({ error: "Erro interno ao atualizar o perfil." });
    }
});

// Endpoint para buscar o perfil do usuário logado
router.get('/me', async (req, res) => {
    try {
        const { uid } = req.user;
        const userDoc = await db.collection('users').doc(uid).get();

        if(!userDoc.exists){
            return res.status(404).json({ error: "Perfil não encontrado."});
        }
        
        return res.status(200).json({ id: userDoc.id, ...userDoc.data() });

    } catch (error) {
        console.error("Erro ao buscar perfil: ", error);
        return res.status(500).json({ error: "Erro ao buscar perfil." });
    }
});


module.exports = router;
