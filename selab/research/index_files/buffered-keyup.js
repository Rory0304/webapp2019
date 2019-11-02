(function ($) {
  $(document).keyup(function (event) {
    var $target = $(event.target);

    var timeoutId = $target.data('bufferedKeyupTimeoutId');
    if (timeoutId !== undefined) {
      window.clearTimeout(timeoutId);
    }

    timeoutId = window.setTimeout(function () {
      $target.trigger('bufferedKeyup');
    }, 200);

    $target.data('bufferedKeyupTimeoutId', timeoutId);
  });
})(jQuery);