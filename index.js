
const phoneDB = 9391596462;            
const passDB  = "Sravanthi";          

function login() {
  const enteredPhone = document.getElementById("num").value.trim();
  const enteredPass  = document.getElementById("pass").value.trim();
  const resultEl     = document.getElementById("res");

  
  resultEl.textContent = "";
  resultEl.className   = "mt-3 text-center";

  checkPhone(Number(enteredPhone))  
    .then(() => checkPass(enteredPass))
    .then(() => {
      resultEl.textContent = "Login successful!";
      resultEl.classList.add("text-success");
    })
    .catch(msg => {
      resultEl.textContent = msg;
      resultEl.classList.add("text-danger");
    });
}

function checkPhone(n) {
  return new Promise((resolve, reject) => {
    n === phoneDB ? resolve(true) : reject("Invalid user");
  });
}

function checkPass(p) {
  return new Promise((resolve, reject) => {
    p === passDB ? resolve(true) : reject("Invalid password");
  });
}
