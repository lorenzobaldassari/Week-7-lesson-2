const saveButton = document.getElementById(`saveButton`);
const deleteButton = document.getElementById(`deleteButton`);
const savedNamePosition = document.getElementById(`savedName`);
const nameInput = document.getElementById(`inputName`);
const name = `name`;
const namePosition = document.createElement(`p`);

saveButton.addEventListener(`click`, function (event) {
  event.preventDefault();
  if (nameInput.value) {
    localStorage.setItem(name, nameInput.value);
    writeName();
    nameInput.value = ``;
    alert(`Nome salvato`);
  } else {
    alert(`non c'e nulla da salvare! compila il campo con un nome prima!`);
  }
});

deleteButton.addEventListener(`click`, function (event) {
  event.preventDefault();
  if (localStorage.getItem(name)) {
    localStorage.removeItem(name);
    namePosition.innerText = localStorage.getItem(name);
    nameInput.value = ``;
    alert(`Nome eliminato`);
  } else {
    alert(`salva un nome prima! `);
  }
});

const writeName = () => {
  namePosition.innerText = localStorage.getItem(name);
  console.log(namePosition.value);
  console.log(namePosition);
  savedNamePosition.appendChild(namePosition);
};

//esercizio 2

let timer = document.getElementById(`timer`);

if (sessionStorage.getItem(`time`)) {
  setInterval(() => {
    let time = sessionStorage.getItem(`time`);
    timer.innerText = time;
    time++;
    sessionStorage.setItem(`time`, time);
  }, 1000);
} else {
  let timeZero = 0;
  sessionStorage.setItem(`time`, timeZero);
  setInterval(() => {
    timer.innerText = sessionStorage.getItem(`time`);
    console.log(sessionStorage.getItem(`time`));
    timeZero++;
    sessionStorage.setItem(`time`, timeZero);
  }, 1000);
}
