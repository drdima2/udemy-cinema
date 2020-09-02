//const array1 = [1, 4, 9, 16];
const array1 = [
  {
    id: 1,
    number: 1
  },
  {
    id: 2,
    number: 2
  },
  {
    id: 3,
    number: 3
  },
  {
    id: 4,
    number: 4
  }
];

// pass a function to map
//const map1 = array1.map(x => x * 2);
const map1 = array1.map(x => console.log(x));

//console.log(map1);
// expected output: Array [2, 8, 18, 32]
