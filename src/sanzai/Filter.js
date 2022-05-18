const Filter = (arr, value) => {
  return arr.filter(
    (item) =>
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.password.toLowerCase().includes(value.toLowerCase())
  );
};
export default Filter;
