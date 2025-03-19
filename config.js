const fs = require('fs')
//~~~~~~~~~SETTING BOT~~~~~~~~~~//
global.owner = "6285697173542"
global.nama = "traser official"
global.ch = 'https://whatsapp.com/channel/0029Vay3CZ14o7qSIBCEMv26'
global.status = true
//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "085789955563"
global.ovo = "Tidak Tersedia"
global.qris = "https://files.catbox.moe/pt8dwl.jpg"
//====== [ THEME URL & URL ] ========//
global.thumb = fs.readFileSync('./traser.jpg'); // Buffer Image
global.thumbnail = 'https://files.catbox.moe/pt8dwl.jpg'
global.Url = '-'
global.logodana = "https://img100.pixhost.to/images/667/540082364_skyzopedia.jpg", 
global.logoovo = "https://img100.pixhost.to/images/667/540082774_skyzopedia.jpg", 

global.mess = {
    owner: "no, this is for owners only",
    group: "this is for groups only",
    private: "this is specifically for private chat"
}

global.packname = 'traser'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'

global.pairing = "TRASER"

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
