const form = document.querySelector(".form");
const userName = document.querySelector("#name");
const surname = document.querySelector("#secondName");
const email = document.querySelector("#email");
const mobile = document.querySelector("#phone");
const personalData = document.querySelector("#agree");
const clear = document.querySelector("#clear");


form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    const itemName = userName.value;
    const itemSurname = surname.value;
    const itemEmail = email.value;
    const itemMobile = mobile.value;


    const objForm = { name: itemName, secondName: itemSurname, email: itemEmail, phone: itemMobile, agree: personalData.checked };


    if (personalData.checked == true) {
        fetch('https://polinashneider.space/user', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer: nast0yka'
                },
                body: JSON.stringify(objForm)
            })
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                form.reset();
                alert("Внесите данные снова")
            })
            .finally(() => {
                form.reset();
                alert("Успешно отправлено!")
            })

    }
    // Здесь твой код
});


clear.addEventListener("click", (event) => {
    form.reset();
});