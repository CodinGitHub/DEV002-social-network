import { stateFirebase, searchNameById, readUserData } from '../firebase/auth.js';
import { auth } from '../firebase/init.js';

export const profileUser = async () => {
  const newPostLabel = document.querySelector('#newPostLabel');
  const actualUserid = await stateFirebase(auth);
  const userName = await searchNameById(actualUserid)
  newPostLabel.innerText = `En que estás pensando ${userName}?`;
};
