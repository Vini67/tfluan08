

export default async function UserViewController(request, response) {

    return response.render("users", {
        header: "Aula 07 - V de Views, SSR e SSG",
        user: request.user
    });

};
