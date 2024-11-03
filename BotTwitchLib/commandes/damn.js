
module.exports = {

    //execute cmd.
    cmdPlayer: require('./../libCmdPlayer.js'),

	//function call when commande say in chat.
	func: function(target, context, msg, client){

        let rand = Math.ceil(Math.random() * 5);

        this.cmdPlayer.playMp3(`/home/faouzi/Téléchargements/susMp3/riaMp3/damn${rand}.mp3`, 30);
	
	}
}
