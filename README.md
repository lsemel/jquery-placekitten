# Placekitten jQuery Plugin

[Placekitten](http://placekitten.com) is a quick and simple service for getting pictures of kittens for use as placeholders in your designs or code.

This highly useful, long-sought-after plugin allows you to dynamically change any or all of your images to placeholder kittens with just a single line of jQuery magic.

# Detailed example:

    $('body').placekitten();

# Bookmarklet

A useful bookmarklet is now available below.  Simply drag it to your browser toolbar to use Placekitten on any page.  Please note that this bookmarklet is highly experimental and should not be used as part of production code.

<a href="javascript:var%20complete=function(){(function($){$.fn.placekitten=function(){this.find('img').each(function(i,img){var%20w=img.width;var%20h=img.height;if(w&&h){var%20src='http://placekitten.com/'+w+'/'+h;im
g.src=src;}});};})(jQuery);$(function(){$('body').placekitten()});};%20if(typeof%20jQuery=='undefined'){var%20jQ=document.createElement('script');jQ.type='text/javascript';jQ.onload=complete;jQ.src='http://ajax.googleapis.c
om/ajax/libs/jquery/1/jquery.min.js';document.body.appendChild(jQ);}else{complete();};void(0)">Kittify page!</a>


# History

* 2011-02-27: Initial alpha release.

