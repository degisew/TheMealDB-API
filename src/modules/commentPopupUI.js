/* eslint-disable */
import { postComment, fetchComment } from "./comment.js";

import { apiBaseUrl } from "./db.js";

const mainDiv = document.querySelector(".comment-popup");
const backdrop = document.querySelector(".comment-backdrop");
const commentPopup = async (Id) => {
  const fetchedComments = await fetchComment(Id);
  const response = await fetch(apiBaseUrl + Id, {});
  const meal = await response.json();
  mainDiv.innerHTML = "";
  const headerDiv = document.createElement("div");
  headerDiv.className = "header-div";
  const headerImage = document.createElement("img");
  headerImage.className = "header-image";
  headerImage.src = `${meal.meals[0].strMealThumb}`;
  const closeBtn = document.createElement("span");
  closeBtn.id = Id;
  closeBtn.className = "close-btn";
  closeBtn.textContent = "X";
  const title = document.createElement("p");
  title.id = "title";
  title.textContent = `${meal.meals[0].strMeal}`;
  // append header div items
  headerDiv.append(headerImage);
  //
  const aboutDiv = document.createElement("div");
  aboutDiv.className = "about-div";
  const mealCategory = document.createElement("b");
  mealCategory.textContent = `Category: ${meal.meals[0].strCategory}`;
  const mealArea = document.createElement("b");
  mealArea.textContent = `Area: ${meal.meals[0].strArea}`;
  aboutDiv.append(mealCategory, mealArea);
  // comments list
  const commentDiv = document.createElement("div");
  commentDiv.className = "comment-container";
  const commentTitle = document.createElement("h2");
  commentTitle.className = "comment-title";
  commentTitle.textContent = `Comments(${
    fetchedComments.length > 0 ? fetchedComments.length : 0
  })`;
  // fetch comments and itterate throght them and display
  commentDiv.append(commentTitle);
  if (fetchedComments.length > 0) {
    for (const comment of fetchedComments) {
      const commentParagraph = document.createElement("p");
      commentParagraph.innerHTML += `<b>${comment.username}:</b> ${comment.comment}<br>`;
      commentDiv.append(commentParagraph);
    }
  } else {
    commentDiv.appendChild = "No comments yet.";
  }
  // comment
  const addCommentDiv = document.createElement("div");

  const addCommentTitle = document.createElement("h2");
  addCommentTitle.textContent = "Add a comment";
  // form
  const commentForm = document.createElement("form");
  commentForm.id = "form";
  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.id = "name-input";
  textInput.className = "comment-input";
  textInput.placeholder = "Your name";
  const textArea = document.createElement("textarea");
  textArea.placeholder = "Your insights";
  textArea.className = "comment-input";
  const error = document.createElement("span");
  error.id = "error";
  error.style.color = "red";
  const commentBn = document.createElement("button");
  commentBn.id = `${meal.meals[0].idMeal}`;
  commentBn.className = "add-comment-btn";
  commentBn.type = "submit";
  commentBn.textContent = "Comment";
  // add everything to form
  commentForm.append(textInput, textArea, error, commentBn);
  // append form to formDiv
  addCommentDiv.append(addCommentTitle, commentForm);

  mainDiv.append(
    closeBtn,
    headerDiv,
    title,
    aboutDiv,
    commentDiv,
    addCommentDiv
  );
  backdrop.classList.add("visible");
  mainDiv.classList.add("visible");
  document.body.style.overflow = "hidden";
  return meal;
};

backdrop.addEventListener("click", () => {
  backdrop.classList.remove("visible");
  mainDiv.classList.remove("visible");
  mainDiv.innerHTML = "";
  document.body.style.overflow = "scroll";
});

mainDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-btn")) {
    mainDiv.classList.remove("visible");
    backdrop.classList.remove("visible");
    mainDiv.innerHTML = "";
    document.body.style.overflow = "scroll";
  } else if (e.target.classList.contains("add-comment-btn")) {
    e.preventDefault();

    if (
      document.getElementById("name-input").value !== "" &&
      document.querySelector("textarea").value !== ""
    ) {
      document.getElementById("error").innerHTML = "";
      postComment({
        item_id: e.target.id,
        username: document.getElementById("name-input").value,
        comment: document.querySelector("textarea").value,
      });
      const name = document.getElementById("name-input").value;
      const comment = document.querySelector("textarea").value;
      const p = document.createElement("p");
      p.innerHTML = `<b>${name}:</b>  ${comment}`;
      document.querySelector(".comment-container").appendChild(p);
      const commentCounter = document.querySelectorAll(
        ".comment-container p"
      ).length;
      document.querySelector(
        ".comment-title"
      ).innerHTML = `Comments(${commentCounter})`;
      document.getElementById("name-input").value = "";
      document.querySelector("textarea").value = "";
    } else {
      document.getElementById("error").innerHTML = "Fields can't be empty";
    }
  }
});
export default commentPopup;
