let myInterval;
let fileUpload;
let confModal;

const newVideo = () => {
  confModal = document.getElementById('video-confirmation');
  if(!confModal) return;
  const actionBtn = document.getElementById("action-button");
  const uploadBtn = document.getElementById("upload-button");
  const cancelBtn = document.getElementById("cancel-upload");
  const uploadProgress = document.getElementById("upload-progress");
  const uploadForm = document.getElementById('new_video');

  window.addEventListener('click', (event) => {
    if(event.target == confModal)
      confModal.style.display = "none";
  });

  uploadBtn.addEventListener('click', (event) => {
    uploadForm.style.display="none";
    uploadProgress.style.display="block";
  });

  cancelBtn.addEventListener('click', (event) => {
    confModal.style.display = "none";
  });
}

const openModal = () => {
  confModal.style.display = "block";
}

const checkFile = () => {
  if(fileUpload.files.length > 0){
    clearInterval(myInterval);
    openModal();
  }
}

const actionBtnVideo = () => {
  fileUpload = document.getElementById("file-upload");
  if(fileUpload){
    fileUpload.click();
    myInterval = setInterval(checkFile, 250);
  }

}

export{newVideo};
export{actionBtnVideo};



