const commentCounter = require('../modules/commentCounter.js');

test('should return total comments', () => {
  // arrange
  document.body.innerHTML = `
  <div class="comment-container">
  <p><b>:</b> <br></p>
  <p><b>degisew:</b> Delicious<br></p>
  <p><b>daviian:</b> so good<br></p>
  <p><b>yasen:</b> tasty<br></p>
  <p><b>deg:</b> it is mouse watering<br></p>
  <p><b>Ali:</b> nince<br></p>
  <p><b>daviian:</b> good<br></p>
  </div>`;
  // act
  const comments = commentCounter();
  // assert
  expect(comments).toBe(7);
});
