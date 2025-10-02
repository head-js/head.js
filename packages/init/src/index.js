const g = window || __hlobal__; // eslint-disable-line no-undef

g.head = function def(h, name, snippet) {
  if (!snippet) {
    snippet = name; // eslint-disable-line no-param-reassign
    name = h; // eslint-disable-line no-param-reassign
    h = 'head'; // eslint-disable-line no-param-reassign
  }

  g[h][name] = snippet;
};
