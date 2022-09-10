const commentCounter = () => {
  const cCounter = document.querySelectorAll('.comment-container p').length;

  return cCounter;
};

module.exports = commentCounter;