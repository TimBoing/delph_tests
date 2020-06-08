const editUserPhoto = () => {
  const triggerBtn = document.getElementById('edit-user-pic-button');
  if(!triggerBtn) return;
  const hiddenBtn = document.getElementById('user_photo');
  const validationIcon = document.getElementById('valid-user-pic');
  const submitBtn = document.getElementById('edit-user-submit');
  const passField = document.getElementById('user_current_password');

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

  submitBtn.addEventListener('click', (event) => {
    if(passField.value === ""){
      event.preventDefault();
      alert("Please provide your current password")
    }else{
    }
  });



}

export{editUserPhoto};
