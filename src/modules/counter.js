const counter = () => {
  const itemNumber = document.querySelectorAll('.card').length;
  return itemNumber;
};

export default counter;