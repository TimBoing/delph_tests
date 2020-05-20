const scaleIn = () => {
  const scaleMe = document.getElementById('scale-me');
  if(!scaleMe) return;
  let popupInterval;

  const scaleEffect = () => {
    scaleMe.classList.add('scale-in');
  }

  const initEffect = () => {
    popupInterval = setTimeout(scaleEffect, 100);
  }

  document.onload = initEffect();
}

export{scaleIn};
