export const getMeals = () => {
  const url = "https://alcormeals-api.herokuapp.com/meals";
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
