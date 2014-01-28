/**
 * Keycode extensions to jquery ui keycode object
 */
(function($){
    if ($.ui && $.ui.keyCode){
        $.extend($.ui.keyCode, {
            LOWER_W:119,
            UPPER_W:87,
            LOWER_A:97,
            UPPER_A:65,
            LOWER_S:115,
            UPPER_S:83,
            LOWER_D:100,
            UPPER_D:68

        });
    }

})(jQuery);
