
module.exports = {

    //execute cmd.
    cmdPlayer: require('./../libCmdPlayer.js'),

	//function call when commande say in chat.
	func: function(target, context, msg, client){

        //play audio.
        this.cmdPlayer.playMp3(`/home/faouzi/Téléchargements/susMp3/uwu.mp3`, 20);

    }
	
}