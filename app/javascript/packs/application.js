// import "bootstrap";
import {initSideNav} from '../components/sidenav.js'
import {test} from '../components/bottom-bar.js'
// import {clWidget} from '../components/cloudinaryWidget.js'
import {newVideo} from '../components/newVideo.js'
import {initForms} from '../components/forms.js'
import {dropdownInit} from '../components/dropdownInit.js'
import {gcharts} from '../components/gcharts.js'
import {newUserPhoto} from '../components/newUserPhoto.js'
import {newPetPhoto} from '../components/newPetPhoto.js'
import {initIntro} from '../components/intro.js'
import {welcomeTyped} from '../components/welcome.js'
import {scaleIn} from '../components/scaleIn.js'
import {editPetPicture} from '../components/editPetPicture.js'
import {editUserPhoto} from '../components/editUserPhoto.js'

initIntro();
initSideNav();
newVideo();
initForms();
dropdownInit();
gcharts();
// clWidget();
// test();
newUserPhoto();
newPetPhoto();
welcomeTyped();
scaleIn();
editPetPicture();
editUserPhoto();
