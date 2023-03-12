// https://github.com/webpack/webpack/blob/v5.75.0/lib/runtime/LoadScriptRuntimeModule.js
const inProgress = {};

export default function load(url, done) {
  if (inProgress[url]) { inProgress[url].push(done); return; }

  let script;
  let needAttach;

  const scripts = document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i += 1) {
    const s = scripts[i];
    if (s.getAttribute('src') === url) { script = s; break; }
  }
  if (!done) return script;

  if (!script) {
    needAttach = true;
    script = document.createElement('script');
    script.timeout = 30;
    script.src = url;
    script.async = true;
  }

  inProgress[url] = [done];

  let timeout;

  function onScriptComplete(prev, event) {
    // avoid mem leaks in IE.
    script.onerror = script.onload = null; // eslint-disable-line no-multi-assign
    clearTimeout(timeout);
    const doneFns = inProgress[url];
    delete inProgress[url];
    if (event && event.type !== 'load') script.parentNode && script.parentNode.removeChild(script); // eslint-disable-line no-unused-expressions
    doneFns && doneFns.forEach((fn) => (fn(event))); // eslint-disable-line no-unused-expressions
    if (prev) return prev(event);
  }

  timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 30 * 1000);
  script.onerror = onScriptComplete.bind(null, script.onerror);
  script.onload = onScriptComplete.bind(null, script.onload);

  needAttach && document.head.appendChild(script); // eslint-disable-line no-unused-expressions
}
