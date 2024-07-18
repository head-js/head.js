import { declare } from '@babel/helper-plugin-utils'; // eslint-disable-line import/no-extraneous-dependencies


export default declare((api, options) => { // eslint-disable-line no-unused-vars
  api.assertVersion(7);

  const { types: t } = api;

  function _pretty(path, state, object, alias, property, style) {
    if (t.isMemberExpression(path.node.callee)
      && t.isIdentifier(path.node.callee.object, { name: object })
      && t.isIdentifier(path.node.callee.property, { name: alias })) {
      const args = path.node.arguments;
      // console.log(args);

      if (args.length > 0) {
        const pretty = [
          t.stringLiteral('%c%s'),
          t.stringLiteral(style),
        ];

        if (!t.isLiteral(args[0])) {
          pretty.push(t.stringLiteral('    '));
        }

        args.forEach((arg) => {
          pretty.push(arg);
        });

        path.replaceWith(
          t.callExpression(
            t.memberExpression(t.identifier(object), t.identifier(property)),
            pretty,
          ),
        );
        path.skip();
      }
    } else {
      // console.log(path.node.callee);
    }
  }

  return {
    name: '@head.js/babel-plugin-console',

    visitor: {
      // Identifier(path, args) { // eslint-disable-line no-unused-vars
      //   const name = path.node.name; // eslint-disable-line prefer-destructuring
      //   console.log('[Identifier]', name);
      // },

      CallExpression(path, state) {
        _pretty(path, state, 'console', 'debug', 'debug', 'background-color: #f0f9ff');
        _pretty(path, state, 'console', 'verbose', 'debug', 'color: #727272');
      },
    },
  };
});
