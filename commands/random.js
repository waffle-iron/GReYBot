exports.commands = [
	'date_fact',
	'year_fact',
	'math_fact',
	'chucknorris',
	'cat_fact',
	'dog_fact',
	'bacon',
	'smifffact',
	'gitgud',
	'8ball',
	'choose'
]

var factsData = GReYBot.require('/extras/data.js');

exports.math_fact = {
	usage: '<random math>',
	description: 'Gives a Random Math Fact',
	process: (msg, suffix) => {
		require('request')('http://numbersapi.com/random/math?json',
			function (err, res, body) {
				var data = JSON.parse(body);
				if (data && data.text) {
					msg.channel.send(data.text);
				}
			});
	}
},

exports.year_fact = {
	description: 'Gives a Random Year Fact',
	process: (msg, suffix) => {
		require('request')('http://numbersapi.com/random/year?json',
			function (err, res, body) {
				var data = JSON.parse(body);
				if (data && data.text) {
					msg.channel.send(data.text);
				}
			});
	}
},

exports.date_fact = {
	description: 'Gives a Random Date Fact',
	process: (msg, suffix) => {
		require('request')('http://numbersapi.com/random/date?json',
			function (err, res, body) {
				var data = JSON.parse(body);
				if (data && data.text) {
					msg.channel.send(data.text);
				}
			});
	}
},

exports.chucknorris = {
	description: 'Gives a Random Chuck Norris Joke',
	process: (msg, suffix) => {
		require('request')('http://api.icndb.com/jokes/random',
			function (err, res, body) {
				var data = JSON.parse(body);
				if (data && data.value && data.value.joke) {
					msg.channel.send(data.value.joke);
				}
			});
	}
},

exports.cat_fact = {
	description: 'Gives a Random Cat Fact',
	process: (msg, suffix) => {
		require('request')('https://catfact.ninja/fact',
			function (err, res, body) {
				var data = JSON.parse(body);
				if (data && data.fact) {
					msg.channel.send(data.fact);
				}
			});
	}
},

exports.dog_fact = {
	description: 'Gives a Random Dog Fact',
	process: (msg, suffix) => {
		require('request')('https://dog-api.kinduff.com/api/facts',
			function (err, res, body) {
				var data = JSON.parse(body);
				if (data && data.facts && data.facts[0]) {
					msg.channel.send(data.facts[0]);
				}
			});
	}
},

exports.bacon = {
	description: 'Gives You Bacon; Bacon Makes Everything Better...',
	process: (msg, suffix) => {
		var randomnumber = Math.floor(Math.random() * (factsData.bacon.length - 1 + 1)) + 1;
		msg.channel.send('',{ file: factsData.bacon[randomnumber] });
	}
},

exports.smifffact = {
	description: 'Blesses you with a fact about Will Smith.',
	process: (msg, suffix) => {
		var randomnumber = Math.floor(Math.random() * (factsData.smiff.length - 1 + 1)) + 1;
		msg.channel.send(factsData.smiff[randomnumber]);
	}
}

exports.gitgud = {
	usage: '<someone (optional)>',
	description: 'Tell someone (or everyone) to git gud.',
	process: (msg, suffix) => {
		msg.channel.send(suffix, { file: 'http://i.imgur.com/NqpPXHu.jpg' });
	}
}

exports['8ball'] = {
	usage: '<Question>',
	description: 'Ask the magic 8 ball a question.',
	process: (msg, suffix) => {
		let response = 'Not even I have an answer to a question not asked.';
		if (suffix) {
			response = 'I don\'t know what to tell you. I\'m all out of answers.';
			if (factsData.eightBall && factsData.eightBall.length) {
				response = factsData.eightBall[Math.floor(Math.random() * factsData.eightBall.length)];
			}
		}

		msg.channel.send({embed: {
			color: GReYBotConfig.defaultEmbedColor,
			title: `:8ball: **${response}**`,
		}});
	}
}

exports.choose = {
	usage: '<Choices (comma seperated)>',
	description: 'Let the bot choose for you.',
	process: (msg, suffix) => {
		let response = 'Sounds like you\'re out of options.';
		if (suffix) {
			let options = suffix.split(',');
			response = `I choose ${options[Math.floor(Math.random() * options.length)].trim()}`;
		}

		msg.channel.send({embed: {
			color: GReYBotConfig.defaultEmbedColor,
			title: `:thinking: **${response}**`,
		}});
	}
}