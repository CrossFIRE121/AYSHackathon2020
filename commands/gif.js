var GphApiClient = require('giphy-js-sdk-core')
giphy = GphApiClient("p5l1h8Td14QqYRy84VAhndU8CgfmJjVc")

exports.run = (client, message, args) => {
giphy.search('gifs', { "q": message.content.substring(5) }).then((response) => {
    var totalResponses = response.data.length;
    var responseIndex = Math.floor((Math.random() * 100) + 1) % totalResponses;
    var finalResponse = response.data[responseIndex]; //same thing with the youtube thing as to here, uses the api so spit back the query you searched

  
    message.channel.send("", { files: [finalResponse.images.fixed_height.url] })
}).catch(() => {
    message.channel.send("Error finding gif...");
})
};