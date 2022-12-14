const quarterOf = (month) => {
  if (month === between(1, 3)) {
    return 1;
  }
  if (month === between(4, 6)) {
    return 2;
  }
  if (month === between(7, 9)) {
    return 3;
  }
  if (month === between(10, 12)) {
    return 4;
  }
};

console.log(quarterOf(3));
