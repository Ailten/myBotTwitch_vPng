
module.exports = {

	//get parameters in commande.
	paramsManager: require('./../libFuncMessageParams.js'),
	
	//crud in file local.
	fileCRUD: require('./../libFileCRUD.js'),
	
	//function call when commande say in chat.
	func: function(target, context, msg, client){

        let patBlock = this;

        //pat.
        setTimeout(function(){
            patBlock.fileCRUD.writeBufferPngTuber(
                "patpat", //name_layer.
                "activ_layer" //cmd.
            );
        }, 0);
        setTimeout(function(){
            patBlock.fileCRUD.writeBufferPngTuber(
                "patpatPouce", //name_layer.
                "activ_layer" //cmd.
            );
        }, 40);
        setTimeout(function(){
            patBlock.fileCRUD.writeBufferPngTuber(
                "yeuxChapoChapo", //name_layer.
                "activ_layer" //cmd.
            );
        }, 80);

        //undo pat.
        setTimeout(function(){

            setTimeout(function(){
                patBlock.fileCRUD.writeBufferPngTuber(
                    "cheveux", //name_layer.
                    "activ_layer" //cmd.
                );
            }, 0);
            setTimeout(function(){
                patBlock.fileCRUD.writeBufferPngTuber(
                    "patpatPouce", //name_layer.
                    "activ_layer" //cmd.
                );
            }, 40);
            setTimeout(function(){
                patBlock.fileCRUD.writeBufferPngTuber(
                    "yeux", //name_layer.
                    "activ_layer" //cmd.
                );
            }, 80);

        }, 5000);

    }

}