// https://github.com/webpack/webpack/blob/v5.75.0/lib/css/CssLoadingRuntimeModule.js
const loadingAttribute = 'data-head-require-loading';

export default function load(url, done) {
  let link;
  let needAttach;

  const links = document.getElementsByTagName('link');
  for (let i = 0; i < links.length; i += 1) {
    const l = links[i];
    if (l.rel === 'stylesheet' && (l.href === url || l.getAttribute('href') === url)) { link = l; break; }
  }
  if (!done) return link;

  if (!link) {
    needAttach = true;
    link = document.createElement('link');
    link.setAttribute(loadingAttribute, 1);
    link.rel = 'stylesheet';
    link.href = url;
  }

  let timeout;

  function onLinkComplete(prev, event) {
    link.onerror = link.onload = null; // eslint-disable-line no-multi-assign
    link.removeAttribute(loadingAttribute);
    clearTimeout(timeout);
    if (event && event.type !== 'load') link.parentNode.removeChild(link);
    done(event);
    if (prev) return prev(event);
  }

  if (link.getAttribute(loadingAttribute)) {
    timeout = setTimeout(onLinkComplete.bind(null, undefined, { type: 'timeout', target: link }), 30 * 1000);
    link.onerror = onLinkComplete.bind(null, link.onerror);
    link.onload = onLinkComplete.bind(null, link.onload);
  } else {
    onLinkComplete(undefined, { type: 'load', target: link });
  }

  needAttach && document.head.appendChild(link); // eslint-disable-line no-unused-expressions
  return link;
}
