(function ($) {
    jQuery.fn.interfaceBlock = function (text, delay, options) {
        var element = this;
        options = $.extend({
            type: 'defaultBlock'
        }, options);
        var textInsideBlock = '<p class ="textInsideBlock"></p>';

        function setBlock() {
            $(this)
                .addClass(options.type)
                .prop('disabled', true);
        }

        function deleteBlock() {
            $(this)
                .removeClass(options.type)
                .prop('disabled', false);
        }

        if (element.get(0) === document) {
            element = $('body');
        }

        element.prepend(textInsideBlock);
        $('.textInsideBlock').text(text);

        element.each(setBlock);
        var allChildren = element.find('*');
        allChildren.each(setBlock);
        setTimeout(function () {
            element.find('.textInsideBlock').remove();
            allChildren.each(deleteBlock);
            element.each(deleteBlock);
        }, delay);

    };
})(jQuery);