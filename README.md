# GReYBot
A chat bot for the GReY Discord Server based on [Chalda's DiscordBot](https://github.com/chalda/DiscordBot) and [martindale's Snarl Bot](https://github.com/martindale/snarl), using [discord.js](https://github.com/hydrabolt/discord.js/)

[![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg?style=flat-square)](https://raw.githubusercontent.com/naterchrdsn/GReYBot/master/LICENSE.md)

Invite the bot to your server [here.](https://discordapp.com/oauth2/authorize?client_id=283636170741514250&scope=bot&permissions=66186303)


# Features:

- !brew *query* => returns a summary of a specific beer or brewery

- !roll 1d20 => roll for initiative! Or something else, using whatever combo of dice.

- !unshorten *shortlink* => unshorten a shortened link, so you can see if it's shady or not.

- !lmgtfy *query* => googles something for an idiot!

- !say *text* => echos text

- !cat_fact

- !dog_fact

- !bacon gifs!

- !smifffact => facts about Will Smith!

- !gitgud *optional @mention* => tell someone to get gud!

- ask the magic !8ball stuff!

- !choose *optional number of items, comma separated* => ask the bot to decide things for you!

- !wiki *query* => returns the summary of the first search result on Wikipedia

- !urban *query* => returns result from Urban Dictionary

- !xkcd *optional comic number*

- !topic => passive-aggressively remind your users of the channel topic!

Commands requiring permissions
- !prune *optional number* => prunes a number of messages from the channel.

MUSIC!
- !play most audio sources
- !skip songs
- !queue and !dequeue songs
- !pause !resume and adjust the !volume

- !alias => create custom shorthand commands in channel!
- @botname => responds when @mentioned

And more! Try !help to get a full list of available commands


# Installation

Written on Node.JS.

1. Clone the repo
2. Run ```npm install``` in the repo directory

## Windows Users
Please note that you must have a working C compiler and Python in your path for
`npm install` to work. The bot has been tested to work on Windows using Visual Studio 2015 Community and Python 2.7.
* [Installing Node on Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)
* [npm errors on Windows](http://stackoverflow.com/questions/21365714/nodejs-error-installing-with-npm)
* [Visual Studio Community 2015](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx)
* [Python 2.7](https://www.python.org/downloads/)

## Customization
The examples directory contains example files for the configs, as well as some example commands, rss feeds, and more!


# Running
Before first run you will need to create an `auth.json` file. A bot token is required. The other credentials are not required for the bot to run, but highly recommended as commands that depend on them will malfunction. See `auth.json.example`.

To start the bot just run
`node greybot.js`.


# Updates
If you update the bot, please run `npm update` before starting it again. If you have
issues with this, you can try deleting your node_modules folder and then running
`npm install` again. Please see [Installation](#Installation).


# ToDo:
Check out our the [issues area](https://github.com/naterchrdsn/GReYBot/issues)

[![Stories in Ready](https://badge.waffle.io/naterchrdsn/GReYBot.png?label=ready&title=Ready)](https://waffle.io/naterchrdsn/GReYBot?utm_source=badge) [![GitHub issues](https://img.shields.io/github/issues/naterchrdsn/GReYBot.svg?style=flat-square)](https://github.com/naterchrdsn/GReYBot/issues)

# Help
If you need help join us on [discord](https://discord.gg/A8a2yeP).
