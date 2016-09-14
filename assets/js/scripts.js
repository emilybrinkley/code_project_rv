(function() {
        var path = '//easy.myfonts.net/v2/js?sid=148510(font-family=Proxima+Nova+Regular)&sid=148547(font-family=Proxima+Nova+SemiBold)&sid=148550(font-family=Proxima+Nova+Light)&sid=270169(font-family=Proxima+Nova+Medium)&key=pdLUcHpRCg',
            protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
            trial = document.createElement('script');
        trial.type = 'text/javascript';
        trial.async = true;
        trial.src = protocol + path;
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(trial);
    })();

  
    function callback(event){
        var items = event.item.count;     // Number of items
        var item  = (event.item.index + 1) - event.relatedTarget._clones.length / 2;  
        $('.num').html(''+item+'/'+items+'');
    }
    
    $('#carousel').owlCarousel();

