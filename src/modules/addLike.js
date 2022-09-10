const addLike = async (idMeal) => {
  const responce = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tGV16CMoj3AJeC9Xh2Mu/likes/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: idMeal,
    }),
  });
  return responce;
};

export default addLike;