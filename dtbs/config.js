/*

# Base By 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
# Owner ? : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
!- do not delete this credit

*/

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['254796519826']
global.ownMain = '254796519826'
global.NamaOwner = '𝕶𝖎𝖓𝖌 𝕾𝖆𝖒' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = '𝐑𝐏𝐕' //
global.author = '𝕶𝖎𝖓𝖌 𝕾𝖆𝖒' //
global.packname = '𝐑𝐏𝐕' //
global.url1 = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e' //global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.url2 = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e' //
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.linkgc = 'https://whatsapp.com/channel/0029VaaqaSp0LKZDuwe5SI3e'
global.delayjpm = 3500
//Panel
global.domain = '' // your admin panel domian
global.apikey = '' // Your admin panel apikey
global.capikey = '' // Your admin panel capikey
global.egg = '15' // 
global.location = '1' // 
global.thumbnailpanel = 'https://i.imgur.com/N1zWDRi.jpeg'

global.mess = { // 
owner: 'You are not owner.',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.'
}

global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})
