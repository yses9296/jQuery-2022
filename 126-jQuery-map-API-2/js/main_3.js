$( function() {
//Tab Menu
    $( "#tabs" ).tabs({
        // case 2: jqueryui API
        create: function( event, ui ) {
            //ui.panel == $(this)
            var targetLat = ui.panel.attr('data-lat');
            var targetLng = ui.panel.attr('data-lng');
            var targetDiv = ui.panel.find('div').attr('id');

            seoulMap(targetLat, targetLng, targetDiv);
        },
        activate: function( event, ui ) {
            
            var targetLat = ui.newPanel.attr('data-lat');
            var targetLng = ui.newPanel.attr('data-lng');
            var targetDiv = ui.newPanel.find('div').attr('id');

            seoulMap(targetLat, targetLng, targetDiv);
        }
    });//tabs

//MAP API - TAB
    function seoulMap(lat, lng, field){
        var mapContainer = document.getElementById(field),
        mapOption = { 
            // center: new kakao.maps.LatLng(location), 
            center: new kakao.maps.LatLng(lat, lng), 
            level: 3 
        };
    
        var map = new kakao.maps.Map(mapContainer, mapOption); 
        
    }//seoulMap
    
//ACCORDION
    $( "#accordion" ).accordion({
        create: function( event, ui ) {
            var targetLat = ui.panel.attr('data-lat');
            var targetLng = ui.panel.attr('data-lng');
            var targetDiv = ui.panel.attr('id');
            accordionMap(targetLat, targetLng, targetDiv);
        },
        activate: function( event, ui ) {
            var targetLat = ui.newPanel.attr('data-lat');
            var targetLng = ui.newPanel.attr('data-lng');
            var targetDiv = ui.newPanel.attr('id');
            accordionMap(targetLat, targetLng, targetDiv);
        }
    });//accordion

//MAP API - ACCORDION
    function accordionMap(lat, lng, field){
        var mapContainer = document.getElementById(field),
        mapOption = { 
            // center: new kakao.maps.LatLng(location), 
            center: new kakao.maps.LatLng(lat, lng), 
            level: 3 
        };
    
        var map = new kakao.maps.Map(mapContainer, mapOption); 
        
    }//accordionMap



});