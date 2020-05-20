const newPetPhoto = () => {
  const triggerBtn = document.getElementById('new-pet-photo-button');
  if(!triggerBtn) return;
  const hiddenBtn = document.getElementById('pet_photo');
  const validationIcon = document.getElementById('valid-pet-photo');
  let myInterval;

  const checkFile = () => {
    if(hiddenBtn.files.length > 0){
      clearInterval(myInterval);
      triggerBtn.style.display = "none";
      validationIcon.style.display = "block";

    }
  }

  triggerBtn.addEventListener('click', (event) => {
    hiddenBtn.click();
    myInterval = setInterval(checkFile, 250);
  });



}

export{newPetPhoto};

