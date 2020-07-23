exports.run = (client, message, args) => {
var coin = ['You fliped a tails!', "You fliped a heads!"];
    message.channel.sendMessage(coin[Math.floor(Math.random () * coin.length)]);
}