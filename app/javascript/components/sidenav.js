const initSideNav = () => {

  const actionBtn = document.getElementById("action-button");
  if(!actionBtn) return;
  const sideNav = document.querySelector('.tim-sidenav');
  const sideNavBackground = document.querySelector('.tim-sidenav-background');
  const botBar = document.querySelector('.bottom-action-bar');
  const actionBtnIco = document.querySelector("#action-button i");

  const slidingContent = () => {
    sideNav.style.width = "80%";
    actionBtn.classList.add('action-pushed');
    botBar.classList.add('pushed');
    actionBtnIco.innerText = "chevron_left";
  }

  const unslideContent = () => {
    sideNavBackground.style.display = "none";
    sideNav.style.width = 0;
    actionBtn.classList.remove('action-pushed');
    botBar.classList.remove('pushed');
    actionBtnIco.innerText = "add";
  }

  actionBtn.addEventListener('click', (event) => {

    if(!actionBtn.classList.contains('action-pushed')){
      sideNavBackground.style.display = "block";
      slidingContent();
    }else{
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
