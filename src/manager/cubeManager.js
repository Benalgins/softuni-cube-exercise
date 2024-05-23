const cuid = require('cuid');

let cubes = [
  {
    id: 'clwjiowd3000060vaegak81gt',
    name: 'Rubik Cube',
    description: 'this is easy cube',
    imageUrl:
      'https://m.media-amazon.com/images/I/81XkUCfu0mL._AC_UF894,1000_QL80_.jpg',
    difficultyLevel: 1,
  },
  {
    id: 'clwjiowd3dd400060vaegak81gt',
    name: '8sided Cube',
    description: 'This cube is difficult',
    imageUrl:
      'https://ae01.alicdn.com/kf/S7b1bab3d24af4517b95995dc415732366.jpg_640x640Q90.jpg_.webp',
    difficultyLevel: 4,
  },
];

exports.getAll = (search, from, to) => {
  let result = cubes.slice();
  if (search) {
    result = result.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (from) {
    result = result.filter((cube) => cube.difficultyLevel >= Number(from));
  }
  if (to) {
    result = result.filter((cube) => cube.difficultyLevel <= Number(to));
  }
  return result;
};

exports.create = (cubeData) => {
  const newCube = {
    id: cuid(),
    ...cubeData,
  };
  cubes.push(newCube);
  return newCube;
};
