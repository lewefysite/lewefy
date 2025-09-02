const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

// Inicializa o Firebase Admin SDK
admin.initializeApp();

const app = express();

// Aplica o middleware de CORS para permitir requisições do seu frontend
app.use(cors({ origin: true }));
app.use(express.json()); // Middleware para parsear o body das requisições como JSON

// Roteadores para cada módulo da aplicação
const authRoutes = require("./auth/auth.routes");
const professionalRoutes = require("./professionals/professionals.routes");
const postRoutes = require("./posts/posts.routes");
const profileRoutes = require("./profile/profile.routes");

// Define a base da API com versionamento
const apiRouter = express.Router();
apiRouter.use("/auth", authRoutes);
apiRouter.use("/professionals", professionalRoutes);
apiRouter.use("/posts", postRoutes);
apiRouter.use("/profile", profileRoutes);

app.use("/v1", apiRouter);

// Exporta a aplicação Express como uma única Cloud Function
exports.api = functions.https.onRequest(app);
