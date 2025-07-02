
module.exports = {
	
    //execute cmd.
    cmdPlayer: require('./../libCmdPlayer.js'),

	//function call when commande say in chat.
	func: function(target, context, msg, client){

        const arrayMp3 = [
            {path: '/home/faouzi/Téléchargements/susMp3/blacaMp3/blacaMiaou.mp3', volume: 30},
            {path: '/home/faouzi/Téléchargements/susMp3/nahrenggMp3/nahrenggMiaou.mp3', volume: 30}
        ];

        let randomCel = arrayMp3[Math.floor(Math.random() * arrayMp3.length)];

        this.cmdPlayer.playMp3(randomCel.path, randomCel.volume);
	
	}
}
