exports.commands = [
	'wiki'
]

var Wiki = require('wikijs');

exports.wiki = {
	usage: '<search terms>',
	description: 'Returns the summary of the first matching search result from Wikipedia',
	process: (msg, suffix) => {
		var query = suffix;
		if(!query) {
			msg.channel.send(`Usage: ${GReYBotConfig.commandPrefix}wiki search terms`);
			return;
		}
		
		new Wiki().search(query,1).then(function(data) {
			new Wiki().page(data.results[0]).then(function(page) {
				page.summary().then(function(summary) {
					var sumText = summary.toString().split('\n');
					var continuation = function() {
						var paragraph = sumText.shift();
						if(paragraph){
							msg.channel.send(paragraph,continuation);
						}
					};
					continuation();
				});
			});
		}, function(err){
			msg.channel.send(err);
		});
	}
}
