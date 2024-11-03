

module.exports = {
    
    libPngTuber: require('./../../PngTuber/libPngTuber.js'),

	//function call when commande say in chat.
	func: function(target, context, msg, client){

        this.libPngTuber.editTypeLayer('axoHat');
	
	}

}