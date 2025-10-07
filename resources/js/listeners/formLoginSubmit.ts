import callLoginApi from "../callLoginApi";

export default async function submitLoginHandler(event: SubmitEvent) {
    event.preventDefault();
    const currentElement = event.currentTarget as HTMLFormElement;

    const emailElement = currentElement.querySelector("#email") as HTMLInputElement;

    const passwordElement = currentElement.querySelector("#password") as HTMLInputElement;

    const data = await callLoginApi(emailElement.value, passwordElement.value);



    if ("error" in data) {
        document.getElementById("loginErrorCard")?.classList.remove("d-none");

        setTimeout(() => {
            document.getElementById("loginErrorCard")?.classList.add("d-none");
        }, 5000);

        return;
    }

    location.assign("/users");

}