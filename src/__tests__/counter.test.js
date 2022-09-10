// The function to be tested
const counter = () => {
  const itemNumber = document.querySelectorAll('.card').length;
  return itemNumber;
};

test('item number must be equal to 10', () => {
  document.body.innerHTML = `
<section class="main-container">
    <header id="header">
        <div class="logo">
            <img src="Photo_1662550377880.png" alt="">
        </div>
        <div class="counter">
            <h1>Total number of items : 10 </h1>
        </div>
        <div class="nav-links">
            <a href="#">Home</a>
            <a href="#">Contact</a>
        </div>
    </header>
    <div class="container"><div class="card">
    <img class="meal-image" src="https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg" alt="img">
    <div class="name-like">
       
   
       <span>Tandoori chicken</span>
       
     <div class="like">
   
   <img src="http://127.0.0.1:5500/dist/heart-regular.svg" class="heart" alt=""> 
   <p>127</p>
   <p>Likes</p>
   </div> 

   </div>
   <button id="52806" class="comment-button">comment</button>
   <button class="reservation-button">Reservation</button>
</div><div class="card">
    <img class="meal-image" src="https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg" alt="img">
    <div class="name-like">
       
   
       <span>Chicken &amp; mushroom Hotpot</span>
       
     <div class="like">
   
   <img src="http://127.0.0.1:5500/dist/heart-regular.svg" class="heart" alt=""> 
   <p>91</p>
   <p>Likes</p>
   </div> 

   </div>
   <button id="52846" class="comment-button">comment</button>
   <button class="reservation-button">Reservation</button>
</div><div class="card">
    <img class="meal-image" src="https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg" alt="img">
    <div class="name-like">
       
   
       <span>Pancakes</span>
       
     <div class="like">
   
   <img src="http://127.0.0.1:5500/dist/heart-regular.svg" class="heart" alt=""> 
   <p>141</p>
   <p>Likes</p>
   </div> 

   </div>
   <button id="52854" class="comment-button">comment</button>
   <button class="reservation-button">Reservation</button>
</div><div class="card">
    <img class="meal-image" src="https://www.themealdb.com/images/media/meals/qtuuys1511387068.jpg" alt="img">
    <div class="name-like">
       
   
       <span>Peanut Butter Cheesecake</span>
       
     <div class="like">
   
   <img src="http://127.0.0.1:5500/dist/heart-regular.svg" class="heart" alt=""> 
   <p>136</p>
   <p>Likes</p>
   </div> 

   </div>
   <button id="52861" class="comment-button">comment</button>
   <button class="reservation-button">Reservation</button>
</div><div class="card">
    <img class="meal-image" src="https://www.themealdb.com/images/media/meals/qysyss1511558054.jpg" alt="img">
    <div class="name-like">
       
   
       <span>Steak and Kidney Pie</span>
       
     <div class="like">
   
   <img src="http://127.0.0.1:5500/dist/heart-regular.svg" class="heart" alt=""> 
   <p>127</p>
   <p>Likes</p>
   </div> 

   </div>
   <button id="52881" class="comment-button">comment</button>
   <button class="reservation-button">Reservation</button>
</div><div class="card">
    <img class="meal-image" src="https://www.themealdb.com/images/media/meals/xqqqtu1511637379.jpg" alt="img">
    <div class="name-like">
       
   
       <span>Sticky Toffee Pudding</span>
       
     <div class="like">
   
   <img src="http://127.0.0.1:5500/dist/heart-regular.svg" class="heart" alt=""> 
   <p>96</p>
   <p>Likes</p>
   </div> 

   </div>
   <button id="52883" class="comment-button">comment</button>
   <button class="reservation-button">Reservation</button>
</div><div class="card">
    <img class="meal-image" src="https://www.themealdb.com/images/media/meals/sxwquu1511793428.jpg" alt="img">
    <div class="name-like">
       
   
       <span>Three-cheese souffles</span>
       
     <div class="like">
   
   <img src="http://127.0.0.1:5500/dist/heart-regular.svg" class="heart" alt=""> 
   <p>71</p>
   <p>Likes</p>
   </div> 

   </div>
   <button id="52912" class="comment-button">comment</button>
   <button class="reservation-button">Reservation</button>
</div><div class="card">
    <img class="meal-image" src="https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg" alt="img">
    <div class="name-like">
       
   
       <span>Montreal Smoked Meat</span>
       
     <div class="like">
   
   <img src="http://127.0.0.1:5500/dist/heart-regular.svg" class="heart" alt=""> 
   <p>80</p>
   <p>Likes</p>
   </div> 

   </div>
   <button id="52927" class="comment-button">comment</button>
   <button class="reservation-button">Reservation</button>
</div><div class="card">
    <img class="meal-image" src="https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg" alt="img">
    <div class="name-like">
       
   
       <span>BeaverTails</span>
       
     <div class="like">
   
   <img src="http://127.0.0.1:5500/dist/heart-regular.svg" class="heart" alt=""> 
   <p>69</p>
   <p>Likes</p>
   </div> 

   </div>
   <button id="52928" class="comment-button">comment</button>
   <button class="reservation-button">Reservation</button>
</div><div class="card">
    <img class="meal-image" src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg" alt="img">
    <div class="name-like">
       
   
       <span>Spaghetti alla Carbonara</span>
       
     <div class="like">
   
   <img src="http://127.0.0.1:5500/dist/heart-regular.svg" class="heart" alt=""> 
   <p>175</p>
   <p>Likes</p>
   </div> 

   </div>
   <button id="52982" class="comment-button">comment</button>
   <button class="reservation-button">Reservation</button>
</div></div>

    <footer>
        <p><b>Copyright</b>&nbsp;&nbsp;&nbsp;Developed by Davian, Yasin and Degisew</p>
    </footer>


`;
  const itemNumber = counter();
  expect(itemNumber).toBe(10);
});
