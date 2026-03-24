import { checkRules } from './passwordRules.js';

function checkPassword() {
    let password = document.getElementById("password").value;
    let result = checkRules(password);

    document.getElementById("result").innerText = result;
}
