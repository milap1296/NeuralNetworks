const { EXAMPLE_INPUTS, EXAMPLE_OUTPUTS } = require('./data');
const { buildModel } = require('../../models/linearModel');
const { calculatePredictionResults} = require('../utils');

const HIDDEN_LAYERS = 4;
const ERROR_THRESHOLD = 0.03;
const LEARNING_RATE = 0.001;
const MINIMAL_TRAINING_REQUIRED = 1000;

const trainedWeights = buildModel({
  hiddenLayers: HIDDEN_LAYERS,
  inputs: EXAMPLE_INPUTS,
  outputs: EXAMPLE_OUTPUTS,
  errorThreshold: ERROR_THRESHOLD,
  learningRate: LEARNING_RATE,
  minimalTrainingRequired: MINIMAL_TRAINING_REQUIRED,
});

calculatePredictionResults(trainedWeights, EXAMPLE_INPUTS.slice(0,20));
