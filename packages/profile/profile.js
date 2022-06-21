(function (win, doc) {
  var head = window.head || {};

  head.profile = '{{ __profile__ }}';

  window.head = head;
}(window, document));
