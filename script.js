const saveButton = document.getElementById(`saveButton`);
const deleteButton = document.getElementById(`deleteButton`);
const savedNamePosition = document.getElementById(`savedName`);
const nameInput = document.getElementById(`inputName`);
const name = `name`;
const namePosition = document.createElement(`p`);
// const saveName = (event) => {
//   event.preventDefault();
//   localStorage.getItem(name, nameInput);
// };

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

// const timer = () => {
//   time.innerText = i;
// };
let time = 0;
setInterval(() => {
  time++;
  sessionStorage.setItem(`time`, time);

  timer.innerText = sessionStorage.getItem(`time`);
  console.log(sessionStorage.getItem(`time`));
}, 1000);
//   actualTime = new Date().getTime();
