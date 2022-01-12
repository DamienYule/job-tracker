export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3333"
    : "https://infinite-reaches-15244.herokuapp.com";
};
