exports.commands = [
    'brew'
]

exports.brew = {
    usage: '[brew | brewery]',
    description: 'Used to retrieve specific information about a brewery or brew.',
    process: (msg, suffix) => {
        var url = 'http://api.brewerydb.com/v2/search?q=';
        if (!suffix) {
            msg.channel.send('How about asking for something in specific?');
        }
        url += encodeURIComponent(suffix);
        url += `&key=${GReYBotAuth.brewerydb_api_key}`;
        require('request')(url, function(err, res, body) {
            var response = JSON.parse(body);
            if (typeof(response.data) !== 'undefined' && response.data.length > 0) {
                var result = response.data[0];
                if (typeof(result.description) !== 'undefined') {
                    msg.channel.send(
                        result.name + `\n${result.description}`);
                } else {
                    msg.channel.send(`${response.data[0].name} is a good beer, but I don\'t have a good way to describe it.`);
                }
            } else {
                msg.channel.send('Damn, I\'ve never heard of that.  Where do I need to go to find it?');
            }
        });
    }
}