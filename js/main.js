function stream(playerID, divId){
                var player = dacast(playerID,divId,{
                   
                });

                return player;
            }

function delay( function() => {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
}();