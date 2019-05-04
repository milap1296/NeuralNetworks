let inputs = [], number = 0;
while(number <= 200) {
  inputs.push(number);
  number++;
}

exports.EXAMPLE_INPUTS = inputs;
exports.EXAMPLE_OUTPUTS = inputs.map(input => Math.pow(input, 2));
