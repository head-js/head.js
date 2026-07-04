@head.js/snippet-modernizr
==

```bash
npx gulp
```

```html
<script src="modernizr.js"></script>
<script src="modernizr-<hash>.js"></script>

<script>
head.modernizr((M) => {
  M['es6/promises'];      // true | false
  M['img/webp/alpha'];
  M['extra/http2'];
});
</script>
```
