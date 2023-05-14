const fs = require('fs');
const {parse,transformText} = require('./src/parse.js');

const main = function() {
  const raw = fs.readFileSync('./resource/input.txt', 'utf-8');

  const letters = parse(raw);
  const toDisplay = transformText(letters);
  
  console.log(toDisplay.join('\n'));
};

main();