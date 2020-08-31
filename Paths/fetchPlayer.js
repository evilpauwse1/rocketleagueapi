exports.run = function(player,platform) {
    let request = require("request");
    if(process.env.tk === "" || process.env.tk === undefined) {
        console.error(`Missing token, please set a token with rocketleagueapi.token("TOKEN HERE")`);
        return process.exit(1);
    }
    let params = [player,platform];
    try { 
        params[0] = params[0].toString();
        params[1] = params[1].toString();
    } catch(e) {
        return console.error("Invalid parameters, Player and Platform must be strings.");
    }
    let options = {
        'method': 'GET',
        'url': `api.rocketleague.com/api/v1/${platform}/playerskills/${player}`,
        'headers': {
          'Authorization': `Token ${process.env.tk}`
        }
    }
    request(options, function(err, res) {
        if(err) return err;
        return res.body
    })
}