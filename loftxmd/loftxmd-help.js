const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
─────────────  
*LOFT-XMD*   
─────────────  

✨ Name: I'M LOFT  
🛠️ Total: 700+ Features  
📶 Network: LTE  
🧪 Version: BETA  
👑 Owner: Sir loft  
📱 Number: 255778018545  
💻 Hoster: loft Platform  
🔒 Mode: Unknown  
🔤 Prefix: Multi-Prefix  
⏱️ Uptime: 18:30  
📅 Today's Date: 23,10,2006  
⏰ Current Time: unknown  
🌐 X: x.com/@loft  
─────────────  

—𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀—  

🛡️ GENERAL COMMAND 🛡️  
📋.help or.menu  
🏓.ping  
💡.alive  
🔊.tts <text>  
👤.owner  
😂.joke  
💬.quote  
📚.fact  
🌦️.weather <city>  
📰.news  
🎨.attp <text>  
🎶.lyrics <song_title>  
🎱.8ball <question>  
👥.groupinfo  
🧑‍💼.staff or.admins  
🔎.vv  
🌐.trt <text> <lang>  
📸.ss <link>  
🆔.jid  

⚙️ ADMIN COMMANDS ⚙️  
🚫.ban @user  
⬆️.promote @user  
⬇️.demote @user  
🔕.mute <minutes>  
🔔.unmute  
🗑️.delete or.del  
👢.kick @user  
⚠️.warnings @user  
❗.warn @user  
🔗.antilink  
🚫.antibadword  
♻️.clear  
🏷️.tag <message>  
📢.tagall  
🤖.chatbot  
🔄.resetlink  
👋.welcome <on/off>  
👋.goodbye <on/off>  

👑 OWNER COMMANDS 👑  
🔀.mode  
📶.autostatus  
🧹.clearsession  
🛡️.antidelete  
🧹.cleartmp  
🖼️.setpp <reply to image>  
😆.autoreact  

🎨 IMAGE/STICKER COMMANDS 🎨  
🌫️.blur <image>  
🖼️.simage <reply to sticker>  
🖼️.sticker <reply to image>  
🔗.tgsticker <Link>  
😂.meme  
📦.take <packname>  
🌀.emojimix <emj1>+<emj2>  

🎮⚡ GAME COMMAND ⚡🎮  
⭕.tictactoe @user  
🔤.hangman  
🔡.guess <letter>  
❓.trivia  
✅.answer <answer>  
🗣️.truth  
🎲.dare  

🤖✨ AI COMMAND ✨🤖  
💬.gpt <question>  
💡.gemini <question>  
🖌️.imagine <prompt>  
🌈.flux <prompt>  

😂🎉 FUN COMMAND 🎉😂  
🌟.compliment @user  
😜.insult @user  
😍.flirt  
📝.shayari  
🌙.goodnight  
🌹.roseday  
🧑‍🎤.character @user  
😵.wasted @user  
💞.ship @user  
😏.simp @user  
🤪.stupid @user [text]  

🔤 TEXT MAKER  
🪙.metallic <text>  
❄️.ice <text>  
☃️.snow <text>  
✨.impressive <text>  
🟩.matrix <text>  
💡.light <text>  
🌟.neon <text>  
😈.devil <text>  
💜.purple <text>  
⚡.thunder <text>  
🍃.leaves <text>  
🎬.1917 <text>  
🏟️.arena <text>  
👨‍💻.hacker <text>  
🏖️.sand <text>  
🎀.blackpink <text>  
🌀.glitch <text>  
🔥.fire <text>  

⏬⚡ DOWNLOAD COMMANDS ⚡⏬  
▶️.play <song_name>  
🎵.song <song_name>  
📸.instagram <link>  
📘.facebook <link>  
🎥.tiktok <link>  
🎬.video <song name>  
📥.ytmp4 <Link>  

🔗📂 GITHUB MENU 📂🔗  
🐙.git  
💻.github  
📜.sc  
📄.script  
📁.repo  

🧑‍💻 CREATOR  
💸.loftpay  
👑.loft  
💬.loftquotes  
📜.loftmenu  
─────────────  
*LOFT-XMD*   
─────────────
ENJOY YOUR JOURNEY 😄:`;

    try {
        // Send image with caption
        await sock.sendMessage(chatId, {
            image: { url: 'https://raw.githubusercontent.com/smash-bot/Loft-xmd/main/loft-image/smash.jpeg' },
            caption: helpMessage,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363398106360290@newsletter',
                    newsletterName: '*LOFT* 💥',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });

        // Send audio
        await sock.sendMessage(chatId, {
            audio: { url: 'https://raw.githubusercontent.com/smash-bot/Smash-v1/main/assets/loft.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: message });

    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }

}

module.exports = helpCommand;
