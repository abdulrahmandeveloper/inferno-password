const pasinput = document.querySelector("#password");

const passlength = 16;

const capitalletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallleters = "abcdefghijklmnopqrstuvwxyz";

const numbers = "1234567890";

const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

const allcharacters = capitalletters + smallleters + numbers + symbols;

console.log(allcharacters);

function generatepassword() {
  let password = "";

  while (passlength > password.length) {
    password += allcharacters[Math.floor(Math.random() * allcharacters.length)];
  }

  pasinput.value = password;
}

function copypassword() {
  pasinput.select();
  navigator.clipboard.writeText(pasinput.value);
}
