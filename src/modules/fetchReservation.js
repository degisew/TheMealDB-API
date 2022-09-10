/* eslint-disable */
import reserve from "./addReservation.js";
import countReservations from "./countReservation.js";
import { apiBaseUrl } from "./db.js";
import grabber from "./grabber.js";

const form = document.forms.reservationForm;

const fetchReservations = async (url, id) => {
  grabber("reserve").addEventListener("click", () => {
    if (form.username.value === "") {
      alert("Please add text");
    } else {
      const data = {
        item_id: id,
        username: form.username.value,
        date_start: form.reservationSDate.value,
        date_end: form.reservationEDate.value,
      };
      reserve(url, data);
    }
  });

  const response1 = await fetch(apiBaseUrl + id);
  const { meals } = await response1.json();
  const info = meals[0];
  grabber("m-image").src = info.strMealThumb;
  grabber("mealTitle").innerText = info.strMeal;
  const apiArr = [url, id];
  const apiUrl = apiArr.join("?item_id=");
  const response = await fetch(apiUrl);
  const data = await response.json();

  
   grabber("list-contents").innerHTML = "";
  const container = document.createElement("ul");
  container.classList = "border border-dark p-0 m-0 list ";
  data.forEach((item) => {
    const resArr = [item.date_start, "to", item.date_end, "by", item.username];
    const element = document.createElement("li");
    element.classList = "d-flex justify-content-around";

    const resHolder = document.createElement("p");
    resHolder.innerText = resArr.join(" ");

    element.appendChild(resHolder);
    container.appendChild(element);
  });
  grabber("list-contents").appendChild(container);
  const reservationNumber=countReservations();
  const resCount2 = [reservationNumber, "Reservations"];
  grabber("reservationModalLongTitle").innerText = resCount2.join(" ");
 };

export default fetchReservations;
