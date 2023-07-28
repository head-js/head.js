@head/snippet-bridge
==

Simple
==

```javascript
// umi.js
function $http() {}

head.bridge.register('$http', (register) => {
  register($http);
});

// chunk-1.js
const [ $http ] = await head.bridge.initialize(['$http']);

// chunk-2.js
// Sugar
const $http = head.bridge.ready('$http');
```

Standard
==

```javascript
// umi.js
head.bridge.register('com.example.sdk@1.0.0', (register) => {
  head.require([ 'http://cdn.example.com/sdk-1.0.0.css', 'http://cdn.example.com/sdk-1.0.0.js' ], () => {
    const { SdkFactory } = window;
    const sdk = new SdkFactory();
    register(sdk);
  });
});

// chunk-1.js
const [ sdk ] = await head.bridge.initialize(['com.example.sdk@1.0.0']);
sdk.do();
```

Weak Version
==

```javascript
// umi.js
head.bridge.register('com.example.sdk', (register) => {
  head.require([ 'http://cdn.example.com/sdk-1.0.0.css', 'http://cdn.example.com/sdk-1.0.0.js' ], () => {
    const { SdkFactory } = window;
    const sdk = new SdkFactory();
    register(sdk);
  });
});

// chunk-1.js
const [ sdk ] = await head.bridge.initialize(['com.example.sdk@_']); // the default key _
sdk.do();

// chunk-2.js
const [ sdk ] = await head.bridge.initialize(['com.example.sdk']); // the default key _
sdk.do();
```

Multi Version is currently not supported
==

```javascript
// umi.js
head.bridge.register('com.example.sdk@1.0.0', (register) => {
  head.require([ 'http://cdn.example.com/sdk-1.0.0.css', 'http://cdn.example.com/sdk-1.0.0.js' ], () => {
    const { SdkFactory } = window;
    const sdk = new SdkFactory();
    register(sdk);
  });
});

head.bridge.register('com.example.sdk@2.0.0', (register) => {
  // will return upper; will not arrive here
  head.require([ 'http://cdn.example.com/sdk-2.0.0.css', 'http://cdn.example.com/sdk-2.0.0.js' ], () => {
    const { SdkFactory } = window;
    const sdk = new SdkFactory();
    register(sdk);
  });
});

// chunk-1.js
const [ sdk ] = await head.bridge.initialize(['com.example.sdk@1.0.0']);
sdk.do();

// chunk-2.js
const [ sdk ] = await head.bridge.initialize(['com.example.sdk@2.0.0']); // always the 1st registerd, i.e. 1.0.0 in this case
sdk.do();
```

Sugar Require
==

```javascript
// umi.js
head.bridge.require('com.example.sdk@1.0.0', [ 'http://cdn.example.com/sdk-1.0.0.css', 'http://cdn.example.com/sdk-1.0.0.js' ], (register) => {
  const { SdkFactory } = window;
  const sdk = new SdkFactory();
  register(sdk);
});

// chunk-1.js
const [ sdk ] = await head.bridge.initialize(['com.example.sdk@1.0.0']);
sdk.do();
```
