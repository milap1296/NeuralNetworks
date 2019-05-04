exports.generateRandomNumbers = (offset, multiplier, numbers, isInteger) => {
  const randomNumbers = [];
  for(let i=0; i<numbers; i++) {
    const num = offset + multiplier * Math.random();
    randomNumbers.push(isInteger ? Math.floor(num) : num);
  }
  return randomNumbers;
};

/*
 * Loops over every input and the multiplies it with the weightsProduct
 */
exports.calculatePredictionResults = (weights, inputs) => {
  const weightsProd = weights.reduce((output, weight) =>{
    output = output * weight;
    return output;
  }, 1);
  inputs.forEach(input => {
    console.log('Input was', input);
    console.log('Predicted Output is', weightsProd * input);
  });
};
