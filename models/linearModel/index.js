const { initHiddenLayerNodes } = require("../utils");
const { trainModel, generateRandomWeights } = require("./helpers");

/*
 *  builds a model by executing tasks sequentially, and returns the values of weights generated over iterations
 *  @param: {hiddenLayers} Total hidden layers in the model
 *  @param: {inputs} training set's input
 *  @param: {outputs} actual training set's output
 *  @param: {errorThreshold} min error diff for the model's convergence
 *  @param: {minimalTrainingRequired} requires this amount to be used for weights generation
 */
const buildModel = params => {
  const { hiddenLayers, inputs, errorThreshold, minimalTrainingRequired } = params;
  let weights = generateRandomWeights(hiddenLayers);
  const nodes = initHiddenLayerNodes(hiddenLayers, inputs);
  let currError = 0;

  console.log('Initial weights', weights);
  let iteratorIndex = 0;

  while (true) {
    const currIndex = iteratorIndex % inputs.length;
    currError = trainModel({
      ...params,
      weights,
      nodes,
      currIndex,
      error: currError,
    });
    console.log('error', currError);

    // This condition is to save model from being under trained since it may be possible thar error is minimal for certain sample but won't be for all
    if (Math.abs(currError) <= errorThreshold && iteratorIndex >= minimalTrainingRequired) {
      console.log('########################', iteratorIndex);
      console.log('########################', currIndex);
      break;
    }
    iteratorIndex++;
  }

  console.log('Training weights', weights);
  return weights;
};

exports.buildModel = buildModel;
