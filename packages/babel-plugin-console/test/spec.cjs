const babel = require('@babel/core');
const plugin = require('../dist/plugin.cjs');


const PREV = `
function Button() {
  console.debug('clicked');
  console.debug('clicked', { k1: 'v1' });
  console.debug({ k1: 'v1' });

  console.verbose('clicked');
  console.verbose('clicked', { k1: 'v1' });
  console.verbose({ k1: 'v1' });
}

function Select() {
  console.debug('selected');
  console.debug('selected', { k2: 'v2' });
}

class Card {
  constructor() {
    console.debug('constructed');
  }

  destroy() {
    console.debug('destroyed');
  }
}
`;


const NEXT = babel.transform(PREV, { plugins: [ plugin ] }).code;
console.log(NEXT);
