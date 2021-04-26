const Discord = require('discord.js');
const bot = new Discord.Client();

const Canvas = require('canvas')

const token = 'ODI2NDc0NTEzOTQ0NDEyMjEx.YGNAXw.Hp0BX2epDO03ROjWbEmXumCx1oo';

const prefix = '$';

bot.on('ready' , () =>{
    console.log("IM READY.")
    bot.user.setActivity("Im Here - $help", {type : "WATCHING"})
///    bot.user.setStatus("online")
})

bot.on('guildMemberAdd', async member=> {

const canvas = Canvas.createCanvas(700, 250);

const ctx = canvas.getContext('2d');

const background = await Canvas.loadImage('./wallpaper.jpg');

ctx.drawImage(background, 0, 0, canvas.width, canvas.height);  

ctx.font = "35px sans-serif"

ctx.fillStyle = "#ffffff"

ctx.fillText("welcome to our server" , canvas.width / 2.5, canvas.height / 3.5)

    const applyText = (canvas, Text) => {
        const ctx = canvas.getContext('2d');

        let fontsize = 70;

        do {
            ctx.font = `${fontsize -= 10}px sans-serif`
        } while (ctx.measureText(Text).with > canvas.width - 300);

        return ctx.font;
    }

    ctx.font = applyText(canvas, `${member.displayAvatarURL}!`);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8)

ctx.beginPath();

ctx.arc(125, 125, 100, 0, Math.PI * 2, true);

ctx.closePath();

ctx.clip()

const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg'}));

ctx.drawImage(avatar, 25, 25, 200, 200)

const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome.png');




bot.channels.cache.get("827322405420531743").send(`${member} be server [P S C D] khosh omadi !`, attachment)
    
})

bot.on('message', message => {
    //if (message.author.bot) return;
    if (message.author.id === "826474513944412211") return;
    let args = message.content.substring(prefix.length).split(" ")

    if (message.content.startsWith(prefix)) {
///        if (args[0] === "ping"){
///            message.channel.send("5000 (Just kidding)")
///        }

        if (args[0] === "link"){
            message.channel.send("https://discord.gg/HK4fxDHEzw")
        }

        if (args[0] === "report"){
            const report = new Discord.MessageEmbed()
            .setTitle("Report Embed !")
            .addField("field 1", "shof shof")
            .setThumbnail("https://cdn.discordapp.com/attachments/614434875730296848/828801690567966720/test.jpg")
            .setAuthor("Author : Wonderboy")
            .setColor("c3ff00")
            message.reply(report)
        }

        if (args[0] === "test") {
            bot.emit('guildMemberAdd', message.member);
        }

        if (args[0] === "ping"){
            message.channel.send("pinging...").then(m =>{
            var ping = m.createdTimestamp - message.createdTimestamp;
            var botPing = Math.round(bot.pi);

            message.reply(`Bot's ping time: ${ping}ms`);
            });
        }

        if (args[0] === "mafia-game"){
            const mafiagame = new Discord.MessageEmbed()
            .setTitle("Mafia Game Embed !")
            .addField("$step1-mafia", "Gap roz aval", true)
            .addField("$step2-mafia", "Raygiri", true)
            .addField("$step3-mafia", "Defaeiye", true)
            .addField("$step4-mafia", "Raygiri nahayi", true)
            .addField("step5-mafia", "Shab mishe", true)
            .addField("step6-mafia", "aza mafia", true)
            .addField("step7-mafia", "doctor", true)
            .addField("step8-mafia", "kar agah", true)
            .addField("step9-mafia", "Roz mishe", true)
            .addField("step10-mafia", "natije nahayi roz ghabl")
            .setThumbnail("https://cdn.discordapp.com/attachments/826502131880165407/831095119029076008/images.jpg")
            .setFooter(message.author.username, message.author.avatarURL())
            .setColor("010040")
            
            message.channel.send(mafiagame)
        }

        if (args[0] === "step1-mafia"){
            const step1 = new Discord.MessageEmbed()
            .setTitle("Step 1 [mafia mission] !")
            .addField("Shoma 1 min time harf zadan darid !", "bara time giri roye gif zir zarbe bezanid - payam be tor khodkar bad az 65 sanie delete mishavad ")
            .setThumbnail("https://cdn.discordapp.com/attachments/826502131880165407/831095119029076008/images.jpg")
            .setColor("010040")
            message.channel.send(step1).then(msg =>{
                function autodel() {
                    msg.delete()
                }

                setTimeout(autodel, 65 * 1000)
            })
        }    

        if (args[0] === "step1-mafia"){
            const gif = "https://gfycat.com/downrightparchedlarva-the-16th-cavern-countdown-minutes"
            message.channel.send(gif).then(msg =>{
                function autodel() {
                    msg.delete()
                }

                setTimeout(autodel, 65 * 1000)
            })
        }

        if (args[0] === "step2-mafia"){
            const step2 = new Discord.MessageEmbed()
            .setTitle("𝐑𝐚𝐲𝐠𝐢𝐫𝐢 𝐄𝐦𝐛𝐞𝐝 !")
            .addField("Sepehr 1️⃣", "/", true)
            .addField("Soroush 2️⃣", "/", true)
            .addField("Mmd 3️⃣", "/", true)
            .addField("Alireza 4️⃣", "/", true)
            .addField("Mahan 5️⃣", "/", true)
            .addField("iliya zh 6️⃣", "/", true)
            .addField("iliya img 7️⃣", "/", true)
            .addField("Hesam 8️⃣", "/", true)
            .addField("Morty 9️⃣", "/", true)
            .addField("Arman 🔟", "/", true)
            .addField("kiarash 0️⃣", "/", true)
            .setThumbnail("https://media.discordapp.net/attachments/826502128947298334/831669175139041300/unnamed.png?width=315&height=463")
            .setColor("00ff6a")
            message.channel.send(step2)
        }

        if (args[0] === "nude"){
            const nude = new Discord.MessageEmbed()
            .setTitle("NUDE 𝐄𝐦𝐛𝐞𝐝 !")
            .addField("$girls-nude", ".")
            .addField("$boys-nude", ".")
            .setColor("00ff6a")
            message.channel.send(nude)
            
        }

        if (args[0] === "boys-nude"){
            const boysnude = new 
            message.channel.send(boysnude)
            
        }

        if (args[0] === "games"){
            const games = new Discord.MessageEmbed()
            .setTitle("Games Content Embed !")
            .addField("$mafia-game", "Are you ready for the challenge? (comming soon...)")
            .addField("$sex-chat", "if you are -18 don`t use this !")
            .setThumbnail("https://cdn.discordapp.com/attachments/826502131880165407/831099258685227038/5e2286e02a8d3a65558ad3adf7534670.jpg")
            .setColor("00ff6a")
            message.channel.send(games)
        }
            

        

        if (args[0] === "help") {
            const help = new Discord.MessageEmbed()
            .setTitle("Help Embed !")
            .addField("🚑  $help", "If you need help type this command!")
            .addField("🌍  $ping", "To get bot`s ping!")
            .addField("🔗  $link", "To get discord`s link!")
            .addField("🎭  $rules", "𝐏𝐒𝐂𝐃 𝐬𝐞𝐫𝐯𝐞𝐫 𝐫𝐮𝐥𝐞𝐬!")
            .addField("📢  $send", "To send announce! (Comming soon...)")
            .addField("🎮 $games", "View games list !")
            .setThumbnail("https://cdn.discordapp.com/attachments/614434875730296848/826949107666124850/1603191425265_pscd.jpg")
///            .setImage("")
            .setFooter(message.author.username, message.author.avatarURL())
            .setAuthor("Author : King Hesam")
            .setColor("c70092")
            message.channel.send(help)
        }

        if (args[0] === "rules") {
            const rules = new Discord.MessageEmbed()
            .setTitle("𝐏𝐒𝐂𝐃 𝐬𝐞𝐫𝐯𝐞𝐫 𝐫𝐮𝐥𝐞𝐬")
            .addField("(1)", "احترام لازمه و شرط اول پس به همدیگه احترام بگذارید !")
            .addField("(2)", "از هرگونه شاخ و شونه کشیدن و حرفای بیا وان وی وان و غیره دوری کنید !")
            .addField("(3)", "به گرایش جنسیتی , نژاد و همچنین اعتقادات همدیگه احترام بگذارید !")
            .addField("(4)", "اگر دچار هر مشکلی در سرور شدید با تیم استف ارتباط برقرار کنید !")
            .setThumbnail("https://cdn.discordapp.com/attachments/614434875730296848/828801559999414282/image0.jpg")
///            .setFooter("Let`s Enjoy Together")
///            .setFooter(message.author.username, message.author.avatarURL())
///            .setAuthor("Author : King Hesam")
            .setColor("a60029")
            message.channel.send(rules)
        }

        if (args[0] === "clear") {
            if (args[1]) {}
            let check = isNaN(args[1])
            if (!check) {
                if (message.member.hasPermission("MANAGE_MESSAGES")) {
                    if (message.guild.me.hasPermission("MANAGE_MESSAGES")) {
                        let number = args[1]
                        number++
                        message.channel.bulkDelete(number)

                        const result = new Discord.MessageEmbed()
                        .setTitle("successful")
                        .addField("The following messages have been deleted.", args[1])
                        .setColor("42ffcd")
                        .setFooter("This message will be deleted automatically!!!")
                        message.channel.send(result).then(msg =>{
                            function autodel() {
                                msg.delete()
                            }

                            setTimeout(autodel, 5 * 1000)
                        })
                    }
                } 
            }
        }    

    } 
    
    else {
        if (message.content === "salam"){
            message.reply("salam gogoli :)")
        }    

        if (message.content === "slm"){
            message.reply("salam ghashangam :)")
        }   
        
        if (message.content === "khobi?"){
            message.reply("merc to khobi? :)")
        }   

        if (message.content === "khobi"){
            message.reply("merc to khobi? :)")
        }   

        if (message.content === "che khabar?"){
            message.reply("salamti to che khabar?")
        }   

        if (message.content === "che khabar"){
            message.reply("salamti to che khabar?")
        }   

        if (message.content === "shab bekheyr"){
            message.reply("shab bekheyr soltan")
        }   

        if (message.content === "shab khosh"){
            message.reply("shab khosh soltan")
        }   

        if (message.content === "shab shik"){
            message.reply("shab shik soltan")
        }   

        if (message.content === "sho bekheyr"){
            message.reply("sho bekheyr baby")
        }   

        if (message.content === "hesam"){
            message.channel.send("The king of the world.")
        }

        if (message.content === "iliya"){
            message.channel.send("I think he is simp sag.")
        }

        if (message.content === "sepehr"){
            message.channel.send("He always has zero ping , but he is very noob.")
        }

        if (message.content === "alireza"){
            message.channel.send("I think he likes to be like me, but i say stfu bitch :)")
        }

        if (message.content === "mmd"){
            message.channel.send("He is always like a hungry shark :|")
        }

        if (message.content === "mahan"){
            message.channel.send("He thinks he is very smart but kir manam nist.")
        }

        if (message.content === "kiarash"){
            message.channel.send("I think he's gay but he doesn't want anyone to understand -_-")
        }

        if (message.content === "hamid pr"){
            message.channel.send("I think he's a pedophilia but he doesn't want anyone to understand 🤠")
        }

        

///        if (message.content === "javabesh"){
///            message.channel.send("aha")
///        }

///        if (message.content === "goh nakhor ha bache"){
///            message.channel.send("bebakhshid king havasam nabod shomaei :((")
///        }

///        if (message.content === "dafe akharete bar badi ban mishi"){
///            message.channel.send("merc ke behem forsat dadi :))")
///        }
    }
})


bot.login(token)