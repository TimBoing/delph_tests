const clWidget = () => {
  const widgetBtn = document.getElementById("upload_widget");
  if(!widgetBtn) return;

  let myWidget = cloudinary.createUploadWidget({
  cloudName: 'dt7illrfh',
  uploadPreset: 'my_preset'}, (error, result) => {
    if (!error && result && result.event === "success") {
      console.log('Done! Here is the image info: ', result.info);
    }
  }
)

widgetBtn.addEventListener("click", function(){
    myWidget.open();
  }, false);
}

export{clWidget};
