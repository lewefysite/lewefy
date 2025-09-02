const { Router } = require('express');
const admin = require('firebase-admin');
const isAuthenticated = require('../utils/isAuthenticated');
const Joi = require('joi');

const db = admin.firestore();
const router = Router();

// Todas as rotas de posts requerem autenticação
router.use(isAuthenticated);

const postSchema = Joi.object({
  title: Joi.string().min(3).max(150).required(),
  content: Joi.string().min(10).required(),
  isAnonymous: Joi.boolean().required(),
  category: Joi.string().required(),
});

const commentSchema = Joi.object({
    content: Joi.string().min(1).max(1000).required()
});


// Endpoint POST_CREATE_005: Criar um novo post
router.post('/', async (req, res) => {
    try {
        const { error, value } = postSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        
        const userDoc = await db.collection('users').doc(req.user.uid).get();
        if (!userDoc.exists) throw new Error("Usuário não encontrado no Firestore");

        const postData = { ...value, authorId: req.user.uid, authorName: value.isAnonymous ? 'Anônimo' : userDoc.data().name, likesCount: 0, commentsCount: 0, createdAt: admin.firestore.FieldValue.serverTimestamp() };
        const postRef = await db.collection('posts').add(postData);

        res.status(201).json({ id: postRef.id, ...postData });
    } catch(err) {
        console.error("Erro ao criar post:", err);
        res.status(500).json({ error: 'Erro interno ao criar desabafo.' });
    }
});

// Endpoint POST_DETAIL_003: Adicionar um comentário
router.post('/:postId/comments', async (req, res) => {
    try {
        const { error, value } = commentSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const userDoc = await db.collection('users').doc(req.user.uid).get();

        const commentData = { 
            content: value.content,
            authorId: req.user.uid,
            authorName: userDoc.data().name, // Comentários não podem ser anônimos
            postId: req.params.postId,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        };

        const postRef = db.collection('posts').doc(req.params.postId);
        const commentRef = await db.collection('comments').add(commentData);
        
        // Atualiza o contador de comentários no post
        await postRef.update({ commentsCount: admin.firestore.FieldValue.increment(1) });
        
        res.status(201).json({ id: commentRef.id, ...commentData });

    } catch(err) {
        console.error("Erro ao comentar:", err);
        res.status(500).json({ error: "Erro ao adicionar comentário." });
    }
});

// (Outros endpoints como DELETE, GET, LIKE iriam aqui, como já definidos anteriormente)

module.exports = router;
