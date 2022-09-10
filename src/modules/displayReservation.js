import fetchReservations from './fetchReservation.js';
import grabber from './grabber.js';

const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tGV16CMoj3AJeC9Xh2Mu/reservations';
const displayReservation = (e) => {
  const { id } = e.target.parentNode.querySelector('.comment-button');
  fetchReservations(apiUrl, id);
  grabber('resButton').click();
};

export default displayReservation;