(function($) {
    $.fn.placekitten = function() {
        this.find('img,a,div').each( function(i,element) {
            var w, h;
            switch(element.nodeName) {
                case 'IMG':
                    w = element.width;
                    h = element.height;
                    if(w&&h) {
                        var src='http://placekitten.com/'+w+'/'+h;
                        element.src=src;
                    }
                    break;
                case 'A':
                case 'DIV':
                    var background = $(element).css("background-image");
                    if(background.indexOf('url(') > -1) {
                        w = $(element).width();
                        h = $(element).height();
                        $(element).css("background-image", "url(http://placekitten.com/"+w+"/"+h+")");
                    }
                    break;
            }
        });
    };
})(jQuery);
