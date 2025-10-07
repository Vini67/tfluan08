
import axios from "axios";
import formLoginSubmit from "./listeners/formLoginSubmit";

document.addEventListener("DOMContentLoaded", async () => {


    const formLoginElement = document.getElementById("form-login") as HTMLFormElement | null;

    formLoginElement?.addEventListener("submit", formLoginSubmit);

    const { data } = await axios.get("/api/users");

    console.log(data);

    document.getElementById("btn-sair")?.addEventListener("click", (event) => {
        document.cookie = "token=; Max-Age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        window.location.reload();
    });


});
