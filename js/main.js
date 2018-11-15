let stream = (playerID, divId)=>{
                var player = dacast(playerID,divId,{
                   
                });

                return player;
            }

let delay = ( () => {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();