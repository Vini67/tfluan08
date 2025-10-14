import { Router } from 'express';
import express from 'express';
import path from 'path';
import swaggerUi from 'swagger-ui-express';

import ListPublicFilesController from '../app/Http/Controllers/ListPublicFilesController.js';
import swaggerGenerate from '../Core/SwaggerCore/swaggerGenerate.js';
import { UserViewController } from '../app/Http/Controllers/User/UserViewController.js';
import JwtVerifyViewMiddleware from '../app/Http/Middlewares/JwtVerifyViewMiddleware.js';
import SSRController from '../app/Http/Controllers/SSRController.js';

// Defina ou importe CONSTANTS.DIR corretamente
const CONSTANTS = {
    DIR: path.resolve()
};

export default (function () {
    const router = Router();

    // Rota protegida para users (SSR)
    router.get('/users', JwtVerifyViewMiddleware, UserViewController.index);

    router.get('/ssr', SSRController);

    // Servir arquivos estáticos da pasta public
    router.use(express.static(path.join(CONSTANTS.DIR, 'public')));

    // Rota para listar arquivos na pasta 'public'
    router.get('/', ListPublicFilesController);

    // Documentação Swagger
    router.use('/docs', swaggerUi.serve, swaggerGenerate);

    return router;
})();


