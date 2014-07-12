(function($){
    jQuery.fn.interfaceBlock = function(text,delay,options){
        options = $.extend({
            backgroundColor : "#DCDCDC",
            textColor : "#000000"
        }, options);
        var element = this;

        function setBlock() {
            var el = $(this);


            el.addClass('frozen_element');
            $('.frozen_element')
                .css({
                    'background-color': options.backgroundColor,
                    'color': options.textColor
                });
            el.prop('disabled', true);

        }

        function deleteBlock(){
            $(this).removeClass('frozen_element');
            $(this).removeAttr('style');
            $(this).removeAttr('disabled');
            $(this).bind('click');
        }
        if ($(element)[0] === document)
            element = $('html');
        element.each(setBlock);
        element.append('<p class ="text_from_plugin">'+text+'</p>');
        var allChildren = element.find('*');
        allChildren.each(setBlock);
        setTimeout(function()
                    {element.find('.text_from_plugin').remove();
                     allChildren.each(deleteBlock);
                     element.each(deleteBlock);
                    },delay);

    };
})(jQuery);