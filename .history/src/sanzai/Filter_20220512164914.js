const Filter = (arr, value) => {
  return arr.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );
};
export default Filter;
