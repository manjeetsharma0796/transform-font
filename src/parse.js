const parse = function (raw) {
  const letters = {
    accumulator: [],
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
    currentLine: [],
  };

  raw.split('\n').forEach(function (singleColumn) {
    ;

    const splitedFirstLine = chunk(singleColumn, 4, 0);
    let currentLetter = 0;

    for (const letter in letters) {
      letters[letter].push(splitedFirstLine[currentLetter]);
      currentLetter++;
    }
  })

  return letters
};

const chunk = function (list, size, overlap = 0) {
  if (list.length === 0) return list;
  if (list.length <= overlap) return [list];

  const currentChunk = list.slice(0, size);
  const remaining = list.slice(size - overlap);
  return [currentChunk].concat(chunk(remaining, size, overlap));
};

const transformText = function (letters) {
  const transformed = [];
  const letsee = 'thisiscool'.trim().split('');

  for (let currentLine = 0; currentLine < 5; currentLine++) {
    let accumulator = letsee.reduce(function (context, char) {
       return context.concat(letters[char][currentLine]);
    },'');
    
    transformed.push(accumulator);
  }

  return transformed;
}

exports.parse = parse;
exports.transformText = transformText;