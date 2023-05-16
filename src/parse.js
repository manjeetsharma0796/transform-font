const parse = function (raw) {
  const lookUp = {
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
    h: [],
    i: [],
    j: [],
    k: [],
    l: [],
    m: [],
    n: [],
    o: [],
    p: [],
    q: [],
    r: [],
    s: [],
    t: [],
    u: [],
    v: [],
    w: [],
    x: [],
    y: [],
    z: [],
  };

  const lines = raw.split('\n');
  
  lines.forEach(function (singleColumn) {
    const splitedFirstLine = chunk(singleColumn, 4);
    let currentLetter = 0;

    for (const letter in lookUp) {
      lookUp[letter].push(splitedFirstLine[currentLetter]);
      currentLetter++;
    }
  });

  return lookUp;
};

const chunk = function (list, size, overlap = 0) {
  if (list.length === 0) return list;
  if (list.length <= overlap) return [list];

  const currentChunk = list.slice(0, size);
  const remaining = list.slice(size - overlap);
  return [currentChunk].concat(chunk(remaining, size, overlap));
};

const transformText = function (lookUp, text) {
  const transformed = [];
  const letters = text.trim().split('');

  for (let currentLine = 0; currentLine < 5; currentLine++) {
    let accumulator = letters.reduce(function (context, char) {
       return context.concat(lookUp[char][currentLine]);
    },'');
    
    transformed.push(accumulator);
  }

  return transformed;
}

exports.parse = parse;
exports.transformText = transformText;