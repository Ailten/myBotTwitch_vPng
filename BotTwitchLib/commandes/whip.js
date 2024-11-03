
module.exports = {

    //execute cmd.
    cmdPlayer: require('./../libCmdPlayer.js'),

    //get params of a cmd.
    messageParams: require('./../libFuncMessageParams.js'),

	//function call when commande say in chat.
	func: function(target, context, msg, client){

        //play audio.
        this.cmdPlayer.playMp3(`/home/faouzi/Téléchargements/susMp3/whip.mp3`, 15);

        let allParamsCmd = this.messageParams.func(msg); //get all word after cmd.

        let targetOfCmd = ((allParamsCmd.length > 0)? allParamsCmd[0]: 'quelqu\'un'); //placeholder if no target.

        targetOfCmd = targetOfCmd.replace(/^[@]/, ''); //erase if it's a tag.

        //reponce.
        client.say(target, `${context.username} fouette ${targetOfCmd} ! >:3`);
	
	}
}