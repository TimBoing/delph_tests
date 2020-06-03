const newUserPhoto = () => {
  const triggerBtn = document.getElementById('new-user-pic-button');
  if(!triggerBtn) return;
  const hiddenBtn = document.getElementById('user_photo');
  const validationIcon = document.getElementById('valid-user-pic');
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

export{newUserPhoto};


