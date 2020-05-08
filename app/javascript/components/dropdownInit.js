const dropdownInit = () => {


  const triggerBtn = document.getElementById('show-pet-list-trigger');
  if(!triggerBtn) return;
  const listContainer = document.querySelector('.pet-list-container');
  const dd1 = document.getElementById('show-pet-list');

  triggerBtn.addEventListener('click', (event) => {
    listContainer.style.display = "block";
    console.log("I show");
  });

  window.addEventListener('click', (event) => {
    console.log(event.target);
    if(event.target == listContainer){
      listContainer.style.display = "none";
      console.log("I close");
    }
  });





}

export{dropdownInit};
