(function (win, doc) {
  var head = window.head || {};

  head.env = {};
  head.env.mode = '{{ __mode__ }}';
  head.env.profile = '{{ __profile__ }}';
  head.env.version = '{{ __version__ }}';
  head.env.agent = '{{ __agent__ }}';
  head.env.context = '{{ __context__ }}';

  window.head = head;
}(window, document));
