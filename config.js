/**
   * Create By Hyper Mod.
   * Contact Me on wa.me/94767043432
   * Follow https://github.com/HYPER-MOD
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '56bee960fa',
}

// Other
global.owner = ['94713195756','94767043432','94753943957']
global.packname = 'HYPER MOD'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    admin: 'සමූහ පරිපාලක විශේෂ විශේෂාංග!',
    botAdmin: 'Bot පළමුව admin විය යුතුය!',
    owner: 'හිමිකරු බොට්ගේ විශේෂ ලක්ෂණ',
    group: 'විශේෂාංගය කණ්ඩායම් සඳහා පමණක් භාවිතා වේ!',
    private: 'පුද්ගලික කතාබස් සඳහා පමණක් භාවිතා කරන විශේෂාංග!',
	bot: 'බොට් අංකය පරිශීලක විශේෂ විශේෂාංග',
    wait: 'කරුණා කර මොහොතක් රැදි හිටපන් හරිතේ 👍',
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
