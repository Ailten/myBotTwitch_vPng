

module.exports = {
    
    libPngTuber: require('./../../PngTuber/libPngTuber.js'),

    isActive: false,

	//function call when commande say in chat.
	func: function(target, context, msg, client){

        this.isActive = !this.isActive;

        if(this.isActive){

            this.libPngTuber.setVisibilityToATypeLayer('hat', false);
            this.libPngTuber.setVisibilityToATypeLayer('tronc', false);
            this.libPngTuber.setVisibilityToATypeLayer('maid', true);

            return;
        }

        this.libPngTuber.setVisibilityToATypeLayer('maid', false);
        this.libPngTuber.setVisibilityToATypeLayer('defaultTronc', true);
	
	}

}