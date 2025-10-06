
import formLoginSubmit from "./listeners/formLoginSubmit";

document.addEventListener("DOMContentLoaded", async () => {


    const formLoginElement = document.getElementById("form-login") as HTMLFormElement;

    formLoginElement.addEventListener("submit", formLoginSubmit);


});
