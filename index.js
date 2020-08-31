exports.tk = "";
exports.token = function(token) {
    if(/\s/.test(token)) {
        console.error(`Invalid token specified. Please double check the token you entered.`);
        return process.exit()
    }
    return tk = token.trim();
    //Token set
}
exports.getRank = function(player, platform) {
    require("./Paths/fetchPlayer").run(player,platform)
}
if(tk === "" || tk === undefined) {
    console.error(`Missing token, please set a token with rocketleagueapi.token("TOKEN HERE")`);
    return process.exit(1);
}