const newVideo = () => {
  const confModal = document.getElementById('video-confirmation');
  if(!confModal) return;
  const actionBtn = document.getElementById("action-button");
  const fileUpload = document.getElementById("file-upload");
  const uploadBtn = document.getElementById("upload-button");
  const cancelBtn = document.getElementById("cancel-upload");
  const uploadProgress = document.getElementById("upload-progress");
  let myInterval;

  const openModal = () => {
    confModal.style.display = "block";
  }

  const checkFile = () => {
    if(fileUpload.files.length > 0){
      clearInterval(myInterval);
      openModal();
    }
  }

  actionBtn.addEventListener('click', (event) => {
    if(!actionBtn.classList.contains('action-pushed')){
      fileUpload.click();
      myInterval = setInterval(checkFile, 250);
    }
  });

  window.addEventListener('click', (event) => {
    if(event.target == confModal)
      confModal.style.display = "none";
  });


  uploadBtn.addEventListener('click', (event) => {
    cancelBtn.style.display="none";
    uploadProgress.style.display="block";
  });

  cancelBtn.addEventListener('click', (event) => {
      confModal.style.display = "none";
  });

}


export{newVideo};

