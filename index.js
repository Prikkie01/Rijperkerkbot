const discord = require("discord.js");
const botConfig = require("./botconfig.json"); 

const bot = new discord.Client();

bot.on("ready", async () => {  

    console.log(`${bot.user.username} is online!`);

    bot.user.setActivity("Rijperkerk",{ type: "Listening"});

});

bot.on('message', message=>{
   
  if (message.channel.name === "suggesties") {
    if(message.author.bot) return;
    let embed = new discord.MessageEmbed()
    .setAuthor(message.member.nickname ? message.member.nickname : message.author.tag,message.author.displayAvatarURL())
    .setColor(0x2894C2)
    .setTitle('Suggestie')
    .setDescription(message.content)
    .setTimestamp(new Date());
    message.channel.send(embed).then((send) => {
      send.react('👍').then(() => {
        send.react('👎').then(() => {
        }).catch(console.error);
      }).catch(console.error);
    }).catch(console.error);
    message.delete()                    
}  
   

    }
)

bot.login(process.env.token);