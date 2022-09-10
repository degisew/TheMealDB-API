// The function to be tested
const countReservations = () => {
  const counter = document.querySelectorAll('.list li').length || 0;
  return counter;
};

test('Expect five reservations to be found', () => {
  document.body.innerHTML = `<ul class="border border-dark p-0 m-0 list ">
      <li class="d-flex justify-content-around"><p>2022-09-19 to 2022-09-19 by second test</p></li>
      <li class="d-flex justify-content-around"><p>2022-09-10 to 2022-09-10 by new</p></li>
      <li class="d-flex justify-content-around"><p>2022-09-10 to 2022-09-10 by new</p></li>
      <li class="d-flex justify-content-around"><p>2022-09-01 to 2022-09-01 by Ali</p></li>
      <li class="d-flex justify-content-around"><p>2022-09-01 to 2022-09-01 by Ali</p></li>
         </ul>`;
  const reservationNumber = countReservations();
  expect(reservationNumber).toBe(5);
});
