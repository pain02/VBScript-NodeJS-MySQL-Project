const Discord = require('discord.js');
var mysql = require('mysql');
var result;
var number;
var someVar = [];
const bot = new Discord.Client();

const token = '4565764574876798';

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}.`);
  bot.user.setStatus('invisible')
});

var con = mysql.createConnection({
  host: "localhost",
  port: "1051",
  user: "root",
  password: "pass",
  database: "mydby"
});

con.query("SELECT post FROM data", function (err, result, fields){
  if(err) {
    throw err;
  } else {
    setValue(result);
  }
});

function setValue(Value){
  someVar = value;
  console.log(someVar);
}

bot.on('message', function(message,value){
  if (message.author.bot) return;
  if (message.content.startsWith(".send")){
    final = someVar;
    message.channel.send(final[0].post);
  }
});

bot.login(token);
