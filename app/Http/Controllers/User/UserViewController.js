

export default async function UserViewController(request, response) {

    return response.render("users", {
        header: "Aula 06 - V de Views, SSR, SSG, ISR"
    });

};
