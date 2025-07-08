const moment = require('moment-timezone');
const fetch = require('node-fetch');

async function githubCommand(sock, chatId, message) {
  try {
    const res = await fetch('https://api.github.com/repos/smash-bot/loft-xmd');
    if (!res.ok) throw new Error('Error fetching repository data');
    const json = await res.json();

    let txt = `*乂  *LOFT-XMD* 🐛  乂*\n\n`;
    txt += `✩  *Name*: ${json.name}\n`;
    txt += `✩  *Watchers*: ${json.watchers_count}\n`;
    txt += `✩  *Size*: ${(json.size / 1024).toFixed(2)} MB\n`;
    txt += `✩  *Last Updated*: ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`;
    txt += `✩  *URL*: ${json.html_url}\n`;
    txt += `✩  *Forks*: ${json.forks_count}\n`;
    txt += `✩  *Stars*: ${json.stargazers_count}\n\n`;
    txt += `*LOFT-XMD* 🐛`;

    await sock.sendMessage(chatId, { 
      image: { url: 'https://raw.githubusercontent.com/smash-bot/Loft-xmd/main/loft-image/smash.jpeg' }, 
      caption: txt 
    }, { quoted: message });
  } catch (error) {
    await sock.sendMessage(chatId, { text: '❌ Error fetching repository information.' }, { quoted: message });
  }
}

module.exports = githubCommand;
