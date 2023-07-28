/* @head.js/snippet-init 0.3.0 */
var head=function(){"use strict";return{}}();
/* @head.js/snippet-env 0.3.0 */
this.head=this.head||{},this.head.env=function(){"use strict";var _={mode:"{{ __mode__ }}",profile:"{{ __profile__ }}",
version:"{{ __version__ }}",agent:"{{ __agent__ }}",context:"{{ __context__ }}"};return _}();
/* @head.js/snippet-profile 0.3.0 */
this.head=this.head||{},this.head.profile=function(){"use strict";return"{{ __profile_vars__ }}"}();