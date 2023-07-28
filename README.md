@head.js/snippet
==

The only script in your `<head>`.

```html
<html>
  <head>
    <script>
    /* @head.js/snippet-init 0.0.0 */
    head = {};
    /* @head.js/snippet-env 0.0.0 */
    head.env = { mode: '', profile: '' };
    /* @head.js/snippet-profile 0.0.0 */
    head.profile = { svc: {} };
    </script>
  </head>
  <body>
    <div id="root"></div>

    <script>
    /* @head.js/snippet-emitter 0.0.0 */
    head.emitter.on = (evt: String, fn: Function) => {};
    head.emitter.emit = (evt: String, payload: Json) => {};
    /* @head.js/snippet-require 0.0.0 */
    head.require = (assets: Array<String>, done: Function) => {};
    /* @head.js/snippet-bridge 0.0.0 */
    head.bridge.register = (name: String, register: Function) => {};
    head.bridge.ready = async (name: String): Sdk => {};
    </script>

    <script>
    /* @head.js/snippet-container 0.0.0 */
    </script>

    <script src="umi.js">
      head.require([ 'http://cdn.example.com/a.css', 'http://cdn.example.com/b.js' ], () => {});

      head.bridge.register('com.example.sdk@1.0.0', (register) => {
        head.require([ 'http://cdn.example.com/sdk-1.0.0.css', 'http://cdn.example.com/sdk-1.0.0.js' ], () => {
          const { SdkFactory } = window;
          const sdk = new SdkFactory();
          register(sdk);
        });
      });
    </script>
    <script src="chunk-1.js">
      const [ sdk ] = await head.bridge.ready(['com.example.sdk@1.0.0']);
      sdk.do();
    </script>

    <script src="config-2.js">
      const id = 'c-id';

      function onClick(evt) { console.log(evt); }
      head.container.script(id, 'onClick', onClick);

      function onSelect(evt) { throw new Error('NotImplementedException'); }
      head.container.script(id, 'onSelect', onSelect);
    </script>
    <script src="component-2.js">
      import { on } from '@head/container';
      const id = 'c-id';
      <Button onClick={on(options.id, 'onClick')}>Click</Button>
    </script>
  </body>
</html>
```
