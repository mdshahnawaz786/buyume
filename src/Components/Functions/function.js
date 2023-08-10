export const apiFetching = async (setstate) => {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();
  // console.log(data);
  setstate(data);
};
