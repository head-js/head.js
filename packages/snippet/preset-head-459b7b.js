/* @head.js/snippet-init 0.5.0 */
var head=window.head||{};
/* @head.js/snippet-env 0.5.0 */
this.head=this.head||{},this.head.env=function(){const _={mode:"{{ __mode__ }}",profile:"{{ __profile__ }}",
version:"{{ __version__ }}",agent:"{{ __agent__ }}",context:"{{ __context__ }}"};return _}();
/* @head.js/snippet-profile 0.5.0 */
this.head=this.head||{},this.head.profile="{{ __profile_vars__ }}";