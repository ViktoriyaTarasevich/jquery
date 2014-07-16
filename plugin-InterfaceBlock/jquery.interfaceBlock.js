(function ($) {
    jQuery.fn.interfaceBlock = function (text, delay, options) {
        var element = this;
        options = $.extend({
            backgroundColor: '#DCDCDC',
            textColor: '000000',
            textAlign: 'auto',
            opacityElement: 0.7,
            type: ''
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
                .removeAttr('style')
                .removeAttr('disabled');
        }

        var newEl = element.prepend(textInsideBlock);
        $('.textInsideBlock').text(text).css('text-align', options.textAlign);
        if ($(element)[0] === document){
            element = $('html');
        }
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