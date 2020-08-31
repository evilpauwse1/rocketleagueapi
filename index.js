process.env.tk = ""
exports.token = function(token) {
    if(/\s/.test(token)) {
        console.error(`Invalid token specified. Please double check the token you entered.`);
        return process.exit()
    }
    return process.env.tk = token.trim();
    //Token set
}
exports.getRank = function(player, platform) {
    require("./Paths/fetchPlayer").run(player,platform)
}
