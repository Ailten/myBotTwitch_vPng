
module.exports = {

    //execute cmd.
    cmdPlayer: require('./../libCmdPlayer.js'),

    allPseudo: [ //'ailten', 'somendadidi'
    
        //*
        'axolootl_vt',
        {pseudoTwitch:'i3abulle', memo:'babulle'},

        'homu_vt',
        'slazaa',
        {pseudoTwitch:'madame_poutre', memo:'lodos'},
        'harlyne_q',
        'minetane',
        'mikenlos',
        'berry_noko',
        {pseudoTwitch:'fowenart', memo:'dessinateur de berry'},
        'echorosen',
        'katchanvt',
        'lun_ally',
        {pseudoTwitch:'anya_rosegold', memo:'shubby racoon de ika'},
        'blacacia',
        'ekyuvt',
        'drahalan',
        'barbak_vt',
        'rianoxia',
        'megumikotoha',
        'chlow_',
        'chatouillekotoha',
        'xanthe_tv',
        'orlae_san',
        'nahrengg',
        'kxsato',
        {pseudoTwitch:'tentacular_ikemen', memo:'ikayaki (skwi-skwi)'},
        'darumanico',
        'yuuki_vt',

        'toya_le_bg_du_bled',
        'aluneo_',
        'somendadidi',
        'kamishishi',
        'dr_jester974',
        'laubergiste_vt',
        'lyouna29',
        'black_moonwalk',
        {pseudoTwitch:'doctesla_vt', memo:'edward'},
        'aquilios_',
        'just1chat',
        'shubbley',
        'edogi',
        'lapyon_',
        'leirionlys',
        'kaponay',
        'clive_vt',
        'kokoroneon',
        'meliodas__vt',
        {pseudoTwitch:'shiholitchi', memo:'la dessinatrice cheveux blanc + voix'},
        {pseudoTwitch:'s_iroh', memo:'siro president nyasobi'},
        'julien_060',
        {pseudoTwitch:'shadow_atlantide', memo:'shadow pipou (comu babulle)'},
        'lady_shanoa',
        'angeceleste',
        //*/

        /*///---
        {pseudoTwitch:'athemosvt', memo:'drama pedo'},
        {pseudoTwitch:'yuiicky', memo:'drama avatar homu'},
        {pseudoTwitch:'misssillica', memo:'drama avatar homu (groupie)'},
        //*///---
    ],

    allPseudoAlreadyCom: [],

	//function call when commande say in chat.
	func: function(pseudo){

        //find an row match.
        let indexPseudoMatch = this.allPseudo.findIndex((e) => {

            if(typeof e === 'string') //if is string.
                return (e === pseudo);

            return (e.pseudoTwitch === pseudo); //if is obj.
                
        });

        //no row match.
        if(indexPseudoMatch === -1)
            return;

        //get row from array allPseudo.
        let pseudoFind = this.allPseudo[indexPseudoMatch];

        //*/// --- pop logique v2.
        let isPseudoAlreadyCom = this.allPseudoAlreadyCom.map((e) => {

            if(typeof e === 'string')
                return e;
            return e.pseudoTwitch;

        }).includes((typeof pseudoFind === 'string')? pseudoFind: pseudoFind.pseudoTwitch);
        if(isPseudoAlreadyCom)
            return;
        this.allPseudoAlreadyCom.push(pseudoFind);
        //*/// ---

        //if is an object.
        if(typeof pseudoFind !== 'string')
            pseudoFind = pseudoFind.memo;

        let currentDateTimeStr = (new Date()).toLocaleString('fr'); //"27/10/2024 17:10:45".
        let currentHoursStr = (/[ ]{1}[0-9]{2}[:]{1}[0-9]{2}/).exec(currentDateTimeStr)[0].substring(1); //get "hh:mm".

        //write pseudo find in console.
        console.log(`le viewer [${pseudoFind}] a rejoin le chat ! [${currentHoursStr}]`);
	
	}
}
