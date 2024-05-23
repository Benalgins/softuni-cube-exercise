const cuid = require('cuid');

let cubes = [];

exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {
  const newCube = {
    id: cuid(),
    ...cubeData,
  };
  cubes.push(newCube);
  console.log(cubes);
  return newCube;
};
