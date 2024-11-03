
module.exports = {
	
	//send call.
	//http: require('./../libHttp.js'),

    //execute cmd.
    cmdPlayer: require('./../libCmdPlayer.js'),

	//function call when commande say in chat.
	func: function(target, context, msg, client){

        //this.http.sendToReplObsLayerMp4(
        //    'axo', //name file.
        //    1.0, //volume.
        //    11000 //delay to stay play.
        //);

        let rand = Math.ceil(Math.random() * 6);

        this.cmdPlayer.playMp3(`/home/faouzi/Téléchargements/susMp3/axoMp3/waf${rand}.mp3`, 30);
	
	}
}