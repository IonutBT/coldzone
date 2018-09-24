const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "cz!"

client.on('ready', () => {
  client.user.setGame('COLDZONE / cz!help ', 'https://www.twitch.tv/')
})   

  client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "say")) {
    message.delete()
    const embed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor('RANDOM')
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "help")) {
    const embed = new Discord.RichEmbed()
    .setTitle('BOT INFO')
    .setDescription(`•prefix --> e!
BOT COMMANDS
• || e!mass || e!support || e!info || e!say || e!ping || e!serverinfo || e!restart || e!invite || e!botinfo || `)
    .setColor('RANDOM')
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message => {
    if (message.author.id == '419472407816830986') {
    if (message.content.startsWith(`e!restart`)) {
            resetBot(message.channel);
    }
  }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Restarting...')
    .then(msg => bot.destroy())
    .then(() => bot.login(process.env.TOKEN));
}

 

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if ( message.content.startsWith(prefix+ "ping")) {
    let embed = new Discord.RichEmbed()
            .setTitle('Ping')
            .setDescription(`\`\`\`md\nPing :${client.ping}ms\`\`\``)
            .setColor('RANDOM')
            .setFooter('Bot pinged')
            .setTimestamp()
        
        message.channel.send(embed);
  }
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'serverinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('Members', message.guild.memberCount, true)
  embed.addField('Name', message.guild.name, true)
  embed.addField('Region', message.guild.region, true)
  embed.addField('Owner', message.guild.owner, true)
  embed.addField('ID', message.guild.id, true)
  embed.setColor('RANDOM')
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'botinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('BOT INFO')
  embed.addField('Name', 'COLD ZONE', true)
  embed.addField('Prefix', 'cz!', true)
  embed.addField('Tag:', '6777', true)
  embed.addField('Created at:', '2018-06-13 12:52:59.660000', true)
  embed.addField('ID', '300268467322486785', true)
  embed.addField('Made with:', 'Node')
  embed.addField('Creator', '@Yonly#4995', true)
  embed.setColor('RANDOM')
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith("https://discord.gg")) {
    message.delete()
    let embed = new Discord.RichEmbed()
            .setTitle('No Invite Link')
            .setColor('RANDOM')
            .setFooter('No invite link!')
            .setTimestamp()
        
        message.channel.send(embed);
  }

});    
   
  client.on('message', message => {    
    if(message.content.startsWith('e!mass')) {
    if(message.author.id === "300268467322486785" ||
message.author.id === "405337137735663618"){
       let args = message.content.split(" ").slice(1);         
       var argresult = args.join(" ")      
const argsresult = args.join(" ")         
       let reason = args.join(" ")                   
    if(!args[1]) {  }  
    if(args[1]) { 
message.channel.guild.members.forEach(member => {{ 
member.send(reason)
message.delete() }})}}} });

client.on('message', msg => {
    if (msg.content === 'cz!invite') {
      msg.channel.send('Invite the bot from this link -> **** https://discordapp.com/api/oauth2/authorize?client_id=493848536316903426&permissions=8&scope=bot  :tada:');
    }
  });

client.on('message', msg => {
    if (msg.content === 'cz!steamowner') {
      msg.channel.send('Steam owner is here -> https://steamcommunity.com/id/yonlyidle !');
    }
  });

client.on('message', msg => {
    if (msg.content === 'cz!steamgroup') {
      msg.channel.send('The steam group is here -> ');
    }
  });

client.on('message', msg => {
    if (msg.content === 'cz!owner') {
      msg.channel.send('My owner is -> @Yonly#4995 !');
    }
  });

client.on('guildMemberAdd', member => {
    var joinrole = member.guild.roles.find('name', '|| 𝕰lite Membru ||');
    member.addRole(joinrole);
    let channel  = member.guild.channels.find('name', '↪welcome-goodbye↩');
    let memberavatar  = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Welcome', `**Welcome to our server of discord! do not forget to read carefully the 📃rules!**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', '↪welcome-goodbye↩');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Bye -', `**He left our server! I hope to see you again!**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});


client.login(process.env.TOKEN);
