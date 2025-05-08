
module.exports = {
    //execute cmd.
    cmdPlayer: require('./../libCmdPlayer.js'),

	//function call when commande say in chat.
	func: function(target, context, msg, client){
        
        //array of mp3.
        const arrayMp3 = [
            {
                path: '/home/faouzi/Téléchargements/susMp3/blacaMp3/blacaPetitPas.mp3',
                volume: 60,
                intencityRng: 95
            },
            {
                path: '/home/faouzi/Téléchargements/susMp3/blacaMp3/blacaGasm.mp3',
                volume: 30,
                intencityRng: 5
            }
        ];

        let totalIntencityRng = arrayMp3.map((e) => e.intencityRng).reduce((accumulator, currentValue) => {  //eval total intencity.
            return accumulator + currentValue 
        }, 0);
        let randomNumber = Math.floor(Math.random() * totalIntencityRng); //generate a random number.
        let indexFind = 0; //index find in array.
        let intencityRngCumul = 0; //cumul all intencityRng browse.

        for(indexFind=0; indexFind<arrayMp3.length; indexFind++){ //loop until find index based on randomNumber.
            intencityRngCumul;
            let intencityRngCumulNext = intencityRngCumul + arrayMp3[indexFind].intencityRng;
            if(randomNumber >= intencityRngCumul && randomNumber < intencityRngCumulNext){
                break;
            }
            intencityRngCumul = intencityRngCumulNext;
        }

        let celFind = arrayMp3[indexFind]; //get cel.

        this.cmdPlayer.playMp3(celFind.path, celFind.volume); //play mp3.
	
	}
}
