(function ($) {

  Backdrop.behaviors.simpleiTinycon = {
    attach: function (context, settings) {
      if (typeof(settings.simplei) != 'undefined' &&
          typeof(settings.simplei.addFavicon) != 'undefined' &&
          settings.simplei.addFavicon) {
        //Draw favicon label
        Tinycon.setBubble(settings.simplei.faviconLabel);
        Tinycon.setOptions({
          background: settings.simplei.faviconColor,
          colour: settings.simplei.faviconTextColor
        });
      }
    }
  }

})(jQuery);
