const newVideo = () => {
  const confModal = document.getElementById('video-confirmation');
  if(!confModal) return;
  const actionBtn = document.getElementById("action-button");
  const fileUpload = document.getElementById("file-upload");

  const openModal = () => {
    confModal.style.display = "block";
  }

  actionBtn.addEventListener('click', (event) => {
    if(!actionBtn.classList.contains('action-pushed')){
      fileUpload.click();
      openModal();
    }
  })

  window.addEventListener('click', (event) => {
    if(event.target == confModal)
      confModal.style.display = "none";
  })

}


export{newVideo};

