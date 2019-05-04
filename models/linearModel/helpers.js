const { errorFn, processNode } = require("../utils");

/*
 * Returns a predicted output
 * It handles the weight updation during backward propagation
 * weight updation depends upon 3 factors -> error from previous iteration, learning rate of the model, input provided
 * deltaW = x * loss & weight_updated = weight - deltaW * learningRate
 * Here I assume that the learningRate to be kept in between (0 - 1), to have minimal oscillations in error value if possible
 */
const guessFn = ({ weights, currIndex, error, nodes, hiddenLayers, learningRate }) => {
  for (let i = 1; i <= hiddenLayers; i++) {
    let deltaW = 0;
    if (currIndex != 0) {
      deltaW = nodes[i][currIndex - 1] * error;
    }

    weights[i] = weights[i] - deltaW * learningRate;

    const input = nodes[i - 1][currIndex];
    nodes[i].push(processNode(weights[i], input));
  }

  return nodes[hiddenLayers - 1][currIndex];
};

/*
 * Maintains two tasks and returns a calculated error/loss as a result
 * First - Predicting the result depending upon the weights and inputs
 * Second - Calculating an error on the basis of actual and predicted output
 */
exports.trainModel = params => {
  const { outputs, currIndex } = params;
  const guessResult = guessFn(params);
  return errorFn(outputs[currIndex], guessResult);
};

/*
 * Given the number of hidden layers generates random weights for it's edges
 */
exports.generateRandomWeights = hiddenLayers => {
  let weights = [];
  for (let i = 0; i <= hiddenLayers; i++) {
    weights.push(Math.random());
  }
  return weights;
};
