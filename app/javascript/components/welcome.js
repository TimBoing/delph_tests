import Typed from 'typed.js';

const welcomeTyped = () => {
  const welcomeMessage = document.getElementById('welcome-message');
  if(!welcomeMessage) return;
  const username = welcomeMessage.dataset.username;
  let timeOut;

  const btnAppear = () => {
    const addPetBtn = document.getElementById('icon-welcome');
    addPetBtn.classList.add('scale-in');
  }


  const moveTextUp = () => {

    const addPetMessage = document.getElementById('add-pet-message');
    // addPetBtn.style.display = "flex";
    // addPetBtn.classList.remove('scale-out');
    addPetMessage.classList.add('scale-in');
    // addPetMessage.style.transform = "translateY(-100px)";
    timeOut = setTimeout(btnAppear, 1000);
  }

  const afterTyping = () => {
    console.log("yo");
    welcomeMessage.innerText = "";
    timeOut = setTimeout(moveTextUp, 1000);
  }

  new Typed('#welcome-message', {
    strings: ["WELCOME TO INTERPET", `${username}!`],
    typeSpeed: 30,
    loop: false,
    // fadeOut: true,
    showCursor: false,
    onComplete: (self) => {
      timeOut = setTimeout(afterTyping, 1000);
    },
  });


}

export { welcomeTyped };
