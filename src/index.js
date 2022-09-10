import './SCSS/style.scss';
import loadMeals from './modules/loaDeals.js';
import { idList } from './modules/db.js';
import commentPopup from './modules/commentPopupUI.js';

loadMeals(idList);

const allCommentBtns = document.querySelectorAll('.comment-button');
allCommentBtns.forEach((eachCommentBtn) => {
  eachCommentBtn.addEventListener('click', () => {
    commentPopup(eachCommentBtn.id);
  });
});