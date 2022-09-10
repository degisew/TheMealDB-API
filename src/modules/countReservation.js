const countReservations = () => {
  const counter = document.querySelectorAll('.list li').length || 0;
  return counter;
};
export default countReservations;