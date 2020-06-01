let myIntervalPetPic;
let fileUploadPetPic;
let confModalPetPic;

const editPetPicture = () => {
  confModalPetPic = document.getElementById('pet-edit-picture-confirmation');
  if(!confModalPetPic) return;
  const uploadBtnPetPic = document.getElementById("edit-pet-pic");
  const confirmPicUpload = document.getElementById("confirm-pic-upload");

  const checkFilePetPic = () => {
    if(fileUploadPetPic.files.length > 0){
      clearInterval(myIntervalPetPic);
      confirmPicUpload.click();
    }
  }

  uploadBtnPetPic.addEventListener('click', (event) => {
    event.preventDefault();
    fileUploadPetPic = document.getElementById("pet_photo");
    if(fileUploadPetPic){
      fileUploadPetPic.click();
      myIntervalPetPic = setInterval(checkFilePetPic, 250);
    }
  });

}

export{editPetPicture};
