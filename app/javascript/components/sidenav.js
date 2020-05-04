const initSideNav = () => {

  const actionBtn = document.getElementById("action-button");
  if(!actionBtn) return;
  const sideNav = document.querySelector('.tim-sidenav');
  const sideNavBackground = document.querySelector('.tim-sidenav-background');
  const botBar = document.querySelector('.bottom-action-bar');
  const actionBtnIco = document.querySelector("#action-button i");
  const actionBtnImg = document.querySelector("#action-button img");
  const optionsMenu = document.getElementById("options-menu");

  const slidingContent = () => {
    sideNav.style.width = "80%";
    actionBtn.classList.add('action-pushed');
    botBar.classList.add('pushed');
    actionBtnImg.style.display = "none";
    actionBtnIco.style.display = "block";
  }

  const unslideContent = () => {
    sideNavBackground.style.display = "none";
    sideNav.style.width = 0;
    actionBtn.classList.remove('action-pushed');
    botBar.classList.remove('pushed');
    actionBtnImg.style.display = "flex";
    actionBtnIco.style.display = "none";

  }

  optionsMenu.addEventListener('click', (event) => {
    sideNavBackground.style.display = "block";
    slidingContent();
  });

  actionBtn.addEventListener('click', (event) => {
    if(actionBtn.classList.contains('action-pushed')){
      unslideContent();
    }
  });

  sideNavBackground.addEventListener('click', (event) => {
    unslideContent();
  });
}

export{initSideNav};

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

