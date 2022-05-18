const Filter = (arr, value) => {
  arr.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
};
