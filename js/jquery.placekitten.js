(function($) {
    $.fn.placekitten = function() {
       this.find('img').each(function(i,img) {
           var w = img.width;
           var h = img.height;
           if (w && h) {
               var src =  'http://placekitten.com/'+w+'/'+h;
               img.src = src;
           }
       });
    };
})(jQuery);
