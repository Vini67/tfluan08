import jwt from 'jsonwebtoken';

export default function JwtVerifyViewMiddleware(request, response, next) {
    const { token } = request.cookies;

    console.log(request.cookies);

    if (!token) {
        return response.render("login", {
            header: "Aula 06 - V de Views, SSR, SSG, ISR"
        });
    }

    try {
        const userDecoded = jwt.verify(token, process.env.JWT_SECRET);

        request.user = userDecoded;
        return next();
    } catch (err) {
        return response.render("login", {
            header: "Aula 06 - V de Views, SSR, SSG, ISR"
        });
    }

}