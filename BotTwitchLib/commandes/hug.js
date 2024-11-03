
module.exports = {
	
    //execute cmd.
    cmdPlayer: require('./../libCmdPlayer.js'),

    //get params of a cmd.
    messageParams: require('./../libFuncMessageParams.js'),

	//function call when commande say in chat.
	func: function(target, context, msg, client){

        //play yuuki kiss.
        //this.cmdPlayer.playMp3('/home/faouzi/Téléchargements/susMp3/yuukiMp3/yuukiKiss.mp3', 30);


        let allParamsCmd = this.messageParams.func(msg); //get all word after cmd.

        let targetOfHug = ((allParamsCmd.length > 0)? allParamsCmd[0]: 'quelqu\'un'); //placeholder if no target.

        targetOfHug = targetOfHug.replace(/^[@]/, ''); //erase if it's a tag.

        let reponces = [ //all patern responce.
            `${context.username} donne un calin à ${targetOfHug} ! :3`,
            `${targetOfHug} ce fait calliner par ${context.username} ! >w<`,
            `${context.username} effectue un calin bien mérité à ${targetOfHug} ! èwé`,
            `${targetOfHug} subit l'étreinte de ${context.username} ! owo`
        ];

        //reponce.
        client.say(target, reponces[ Math.floor(Math.random() * reponces.length) ]);
	
	}
}