import loadScript from './loadScript';
import loadStylesheet from './loadStylesheet';


const CSS_REGEXP = new RegExp('\\.css');

function load(assets, done, options) { // eslint-disable-line no-unused-vars
  let url;
  let css = 0;
  let js = 0;

  function doneStylesheet(event) { // eslint-disable-line no-unused-vars
    css -= 1;
    if (css === 0 && js === 0) {
      done();
    }
  }

  function doneScript(event) { // eslint-disable-line no-unused-vars
    js -= 1;
    if (css === 0 && js === 0) {
      done();
    }
  }

  for (let i = 0; i < assets.length; i += 1) {
    url = assets[i];
    if (CSS_REGEXP.test(url)) {
      css += 1;
      loadStylesheet(url, doneStylesheet);
    } else {
      js += 1;
      loadScript(url, doneScript);
    }
  }
}

export default load;
