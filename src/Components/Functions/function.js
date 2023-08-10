export const apiFetching = async (setstate) => {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();
  // console.log(data);
  setstate(data);
};

export function filterText(context) {
  context.setSearch(
    context.state.filter((ele) => {
      if (ele.body.toLowerCase().includes(context.stateOne.toLowerCase())) {
        return ele;
      }
    })
  );
}