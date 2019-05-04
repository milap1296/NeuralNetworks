/*
 * Initializes hidden layer nodes with the first dimension being the inputs itself
 * Rest being empty values which will be filled and updated continuously during training
 * @param {number} hiddenLayer total hiddenLayers present
 * @param {array} first entry for hiddenLayer nodes being an input array
 */
exports.initHiddenLayerNodes = (hiddenLayers, inputs) => {
  const nodes = [inputs];
  for (let i = 0; i <= hiddenLayers; i++) {
    nodes.push([]);
  }
  return nodes;
};

/*
 * Error/Loss function to calculate the loss/difference between the predicted and actualValue
 */
exports.errorFn = (trueValue, predictedValue) => {
  console.log('predVal', predictedValue);
  console.log('trueVal', trueValue);
  return Math.log1p(Math.abs(predictedValue)) - Math.log1p(Math.abs(trueValue));
};

/*
 * Processes/Fills each hidden layer node on the basis of input and weight
 */
exports.processNode = (weight, input) => weight * input;
