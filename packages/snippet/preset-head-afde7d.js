/* @head.js/snippet-init 0.5.1 */
!function(){const n=window||__hlobal__;n.head=function(o,_,a){a||(a=_,_=o,o="head"),n[o][_]=a}}();
/* @head.js/snippet-env 0.5.1 */
!function(){const _={mode:"{{ __mode__ }}",profile:"{{ __profile__ }}",version:"{{ __version__ }}",
agent:"{{ __agent__ }}",context:"{{ __context__ }}"};head("env",_)}();
/* @head.js/snippet-profile 0.5.1 */
head("profile","{{ __profile_vars__ }}");