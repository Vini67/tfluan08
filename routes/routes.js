import express from 'express';

import web from './web.js';
import fileUpload from 'express-fileupload';
import CorsMiddleware from '../app/Http/Middlewares/CorsMiddleware.js';
import JwtMiddleware from '../app/Http/Middlewares/JwtMiddleware.js';
import LoginController from '../app/Http/Controllers/Api/LoginController.js';
import path from "path";
import ejsMate from "ejs-mate";
import usersApi from './usersApi.js';
import cookieParser from 'cookie-parser';

export default (function () {

    const app = express();

    /** Usado para servir json */
    app.use(express.json());

    /** Usado para pode utilizar cookies */
    app.use(cookieParser());

    /** Usado para usar view, com a lib ejs */
    app.engine("ejs", ejsMate)
    app.set("view engine", "ejs");
    app.set("views", path.join(process.cwd(), "resources/views"));

    app.use(express.urlencoded({ extended: true }));

    app.use(fileUpload());

    // Login
    app.post("/login", LoginController);

    //Users
    app.use("/api/users", JwtMiddleware, CorsMiddleware, usersApi);

    //// Views
    app.use('/', web);

    /** Se nenhuma rota for encontrada, 404 neles! */
    app.use((request, response) => {
        response.status(CONSTANTS.HTTP.NOT_FOUND).json({ error: "Not found" });
    });

    return app;

})();
