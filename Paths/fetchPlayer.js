exports.run = function(player,platform) {
    console.log(tk);
    let params = [player,platform];
    try { 
        params[0] = params[0].toString();
        params[1] = params[1].toString();
    } catch(e) {
        return console.error("Invalid parameters, Player and Platform must be strings.");
    }

}