
//Add the 4 trivial functions READ, EVAL, PRINT, and rep (read-eval-print).

var READ = function(line) {
  return line;
};


var EVAL = function(line) {
  return line;
};


var PRINT = function(line) {
  return line;
};


var rep = function(line) {
  var processedLine = READ(line);
  processedLine = EVAL(line);
  processedLine = PRINT(line);
  return processedLine;
};


// Main loop, sort of
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt('> ');
rl.prompt();


rl.on('line', function(line) {
  result = rep(line);
  console.log(result);
  rl.prompt();
}).on('close', function() {
  console.log('Have a great day!');
  process.exit(0);
});
