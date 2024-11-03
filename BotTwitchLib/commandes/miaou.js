
module.exports = {
	
    //execute cmd.
    cmdPlayer: require('./../libCmdPlayer.js'),

	//function call when commande say in chat.
	func: function(target, context, msg, client){

        this.cmdPlayer.playMp3('/home/faouzi/Téléchargements/susMp3/yuukiMp3/yuukiMiaou.mp3', 30);
	
	}
}