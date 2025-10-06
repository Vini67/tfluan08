import jwt from 'jsonwebtoken';

export default function VerifyJwtViewMiddleware(request, response, next) {
    const token = request.cookies?.token;

    console.log(request.cookies);

    if (!token) {
        return response.redirect('/');
    }
    try {
        const userDecoded = jwt.verify(token, process.env.JWT_SECRET);
        request.user = userDecoded;
        return next();
    } catch (err) {
        return response.redirect("/");
    }

}