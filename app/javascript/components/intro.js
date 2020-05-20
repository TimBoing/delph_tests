const initIntro = () => {
  // const introContainer = document.getElementById('intro-container');
  const arrowAddPet = document.getElementById('arrow-down-3');
  if(!arrowAddPet) return;
  console.log("i m in");
  // const wishWelcome = () => {
  //   // introContainer.insertAdjacentHTML('afterbegin', "<h3>Welcome to Interpet!</h3>")
  // }

  const animateArrowAddPet = () =>{
    arrowAddPet.classList.add('lowerit');
  }

  arrowAddPet.addEventListener('transitionend', (event) => {
    // event.propertyName;
    if(arrowAddPet.classList.contains('lowerit')){
      arrowAddPet.classList.remove('lowerit');
    }else{
      arrowAddPet.classList.add('lowerit');
    }

  });

  document.onload = animateArrowAddPet();

}

export{initIntro};
