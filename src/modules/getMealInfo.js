import { apiBaseUrl } from './db.js';

const getMealInfo = async (id) => {
  const response = await fetch(apiBaseUrl + id);
  const { meals } = await response.json();
  return meals[0];
};

export default getMealInfo;