
module.exports = {

    //execute cmd.
    cmdPlayer: require('./../libCmdPlayer.js'),

	//function call when commande say in chat.
	func: function(target, context, msg, client){

        // 5% chance to play uwu from axo.
        let rng = Math.random() * 100;
        if(rng <= 5){
            this.cmdPlayer.playMp3(`/home/faouzi/Téléchargements/susMp3/axoMp3/axoUwu.mp3`, 20);
            return;
        }

        //play audio.
        this.cmdPlayer.playMp3(`/home/faouzi/Téléchargements/susMp3/uwu.mp3`, 20);

    }
	
}
