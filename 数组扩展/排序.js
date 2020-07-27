
const arr = [
  'peach',
  'straw',
  'apple',
  'spork'
];

const stableSorting = (s1, s2) => {
  if (s1[0] <= s2[0]) return -1;
  return 1;
};

arr.sort(stableSorting)
console.log(arr)