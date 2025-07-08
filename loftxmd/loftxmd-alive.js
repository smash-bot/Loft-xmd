const settings = require("../settings");
async function aliveCommand(sock, chatId, message) {
    try {
        const aliveCaption = `
╔═══════════════════╗
> █░░█ █▀█ █▀█ ▀▀█
> █▄▄█ █▄█ █▄█ █▄█     
╚═══════════════════╝
STATUS: [ ONLINE ]
MODE:   [ PUBLIC ]
VERSION: ${settings.version}
═════════════════════
⚡ FEATURES ⚡
- Group Management
- Antilink Protection
- Fun Commands
- And more!
═════════════════════
Type *.menu* for full command list
`;

        // Tuma picha na caption ya jedwali la alive
        await sock.sendMessage(chatId, {
            image: { url: 'https://raw.githubusercontent.com/smash-bot/Loft-xmd/main/loft-image/smash.jpeg' },
            caption: aliveCaption
        }, { quoted: message });

        // Tuma audio kama voice note (ptt)
        await sock.sendMessage(chatId, {
            audio: { url: 'https://raw.githubusercontent.com/smash-bot/Loft-xmd/main/loft-image/auraa.mp3' },
            mimetype: 'audio/mpeg',
            ptt: true
        }, { quoted: message });

    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;
