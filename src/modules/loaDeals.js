import getMealInfoArray from './getMealInfoArray.js';
import heart from '../asset/images/heart-regular.svg';
import addLike from './addLike.js';
import counter from './counter.js';
import displayReservation from './displayReservation.js';
import commentPopup from './commentPopupUI.js';

const loadMeals = () => {
  const myPromise = new Promise((myResolve) => {
    myResolve(getMealInfoArray());
  });
  myPromise.then((result) => {
    result.mealInfo.sort((a, b) => parseInt(a.idMeal, 10) - parseInt(b.idMeal, 10));
    result.likes.sort((a, b) => parseInt(a.item_id, 10) - parseInt(b.item_id, 10));

    let cards = '';

    result.mealInfo.forEach((el, index) => {
      const card = `<div class="card">
        <img class="meal-image" src=${el.strMealThumb} alt="img">
        <div class="name-like">
           
       
           <span>${el.strMeal}</span>
           
         <div class='like'>
       
       <img src=${heart} class="heart" alt=""> 
       <p>${result.likes[index].likes}</p>
       <p>Likes</p>
       </div> 

       </div>
       <button id=${el.idMeal} class="comment-button">comment</button>
       <button class="reservation-button">Reservation</button>
   </div>`;
      cards += card;
    });

    document.querySelector('.container').innerHTML = cards;
    const itemNumber = counter();
    document.querySelector('.counter h1').innerHTML = `Total number of items : ${itemNumber} `;
    const commentButtons = Array.from(document.querySelectorAll('.comment-button'));
    commentButtons.forEach((el) => {
      el.addEventListener('click', () => {
        commentPopup(el.id);
      });
    });
    const reservationButtons = Array.from(document.querySelectorAll('.reservation-button'));
    reservationButtons.forEach((el) => {
      el.onclick = displayReservation;
    });
    const element = Array.from(document.querySelectorAll('.heart'));
    element.forEach((el) => {
      el.addEventListener('click', (e) => {
        addLike(e.target.parentNode.parentNode.parentNode.querySelector('.comment-button').getAttribute('id'));
        const numOfLikes = e.target.parentNode.querySelector('p').innerHTML;
        const parsevValue = parseInt(numOfLikes, 10);
        e.target.parentNode.querySelector('p').innerHTML = `${parsevValue + 1}`;
      });
    });
  });
};

export default loadMeals;