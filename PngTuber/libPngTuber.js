
module.exports = {

    //lib for get decibel mic in real time.
    libMicrophone: require('./libMicrophone'),

    //lib raylib.
    raylib: require('raylib-node'),

    layersPngTuber: [],

    async init(){

        //echantillon mic.
        setInterval(() => {
            this.libMicrophone.doEchantillonMic();
        }, 100);

        //draw scene with raylib.
	    await this.mainLoopWindow();

    },

    async mainLoopWindow(){

        //init window.
        this.raylib.InitWindow(
            400, //width.
            600, //height.
            "Pngtuber NodeJS" //title window.
        );
        this.raylib.SetTargetFPS(30); //fps.


        const funcAnimeHead = (raylib, layer, iCurve) => {
            raylib.DrawTexturePro(
                layer.sprite,
                raylib.Rectangle( //rect source.
                    0, 0, 400, 600
                ),
                raylib.Rectangle( //rect dest.
                    0, iCurve * 10, 
                    400, 600
                ),
                raylib.Vector2(0, 0), //orgin.
                0, //rotate.
                raylib.WHITE
            );
        };

        //sprite : obj //png load from file (use to draw, can't be undefined).
        //dbMin, dbMax : 0.0 //parameters for range decibel to print (no one equal to draw all time).
        //isBlink : false //parameter for draw if is in blink time (no one equal to draw all time).
        //funcDrawAnimated : (raylib, layer, iCurve)=>{} //function for draw with pro paameters (rect source, dest, origin, rotate) (no one equal to draw texture default).
        //typeLayer : "..." //type de layer for enable/disable with cmd.
        //isHide : false //for skip layer hide in render process.

        //load all layers.
        const pathSprite = '/home/faouzi/Documents/myBotTwitch_vPngTuber/PngTuber/sprites/newOC2/';
        var layers = [
            {
                sprite: this.raylib.LoadTexture(pathSprite + 'axoHat2.png'),
                typeLayer: "axoHat",
                funcDrawAnimated: funcAnimeHead,
                isHide: true
            },
            {
                sprite: this.raylib.LoadTexture(pathSprite + 'couetteLeft.png'),
                funcDrawAnimated: (raylib, layer, iCurve) => {

                    raylib.DrawTexturePro(
                        layer.sprite,
                        raylib.Rectangle( //rect source.
                            0, 200, 400, 400
                        ),
                        raylib.Rectangle( //rect dest.
                            75, 510, 
                            400, 400
                        ),
                        raylib.Vector2(100, 300), //origin.
                        raylib.Lerp(-10, 5, iCurve), //rotate.
                        raylib.WHITE
                    );

                }
            },
            {
                sprite: this.raylib.LoadTexture(pathSprite + 'couetteRight.png'),
                funcDrawAnimated: (raylib, layer, iCurve) => {

                    raylib.DrawTexturePro(
                        layer.sprite,
                        raylib.Rectangle( //rect source.
                            0, 200, 400, 400
                        ),
                        raylib.Rectangle( //rect dest.
                            285, 495, 
                            400, 400
                        ),
                        raylib.Vector2(290, 290), //origin.
                        raylib.Lerp(10, -5, iCurve), //rotate.
                        raylib.WHITE
                    );

                }
            },
            {
                sprite: this.raylib.LoadTexture(pathSprite + 'couetteUpLeft.png'),
                funcDrawAnimated: (raylib, layer, iCurve) => {

                    raylib.DrawTexturePro(
                        layer.sprite,
                        raylib.Rectangle( //rect source.
                            0, 200, 400, 400
                        ),
                        raylib.Rectangle( //rect dest.
                            150, 370 + (iCurve * 20), 
                            400, 400
                        ),
                        raylib.Vector2(150, 170 + (iCurve * 20)), //origin.
                        raylib.Lerp(-5, 0, iCurve), //rotate.
                        raylib.WHITE
                    );

                }
            },
            {
                sprite: this.raylib.LoadTexture(pathSprite + 'tronc.png')
            },
            {
                sprite: this.raylib.LoadTexture(pathSprite + 'face.png'),
                funcDrawAnimated: funcAnimeHead
            },
            {
                sprite: this.raylib.LoadTexture(pathSprite + 'couetteUpRight.png'),
                funcDrawAnimated: (raylib, layer, iCurve) => {

                    raylib.DrawTexturePro(
                        layer.sprite,
                        raylib.Rectangle( //rect source.
                            0, 200, 400, 400
                        ),
                        raylib.Rectangle( //rect dest.
                            250, 370 + (iCurve * 20), 
                            400, 400
                        ),
                        raylib.Vector2(250, 170 + (iCurve * 20)), //origin.
                        raylib.Lerp(5, 0, iCurve), //rotate.
                        raylib.WHITE
                    );

                }
            },

            //mouth.
            {
                sprite: this.raylib.LoadTexture(pathSprite + 'mouth.png'),
                dbMin: 0.0,
                dbMax: 0.5,
                funcDrawAnimated: funcAnimeHead
            },
            {
                sprite: this.raylib.LoadTexture(pathSprite + 'mouthOpenMid.png'),
                dbMin: 0.6,
                dbMax: 1.0,
                funcDrawAnimated: funcAnimeHead
            },
            {
                sprite: this.raylib.LoadTexture(pathSprite + 'mouthOpen.png'),
                dbMin: 1.1,
                dbMax: 100.0,
                funcDrawAnimated: funcAnimeHead
            },

            //eyes.
            {
                sprite: this.raylib.LoadTexture(pathSprite + 'eyes.png'),
                isBlink: false,
                funcDrawAnimated: funcAnimeHead
            },
            {
                sprite: this.raylib.LoadTexture(pathSprite + 'eyesClose.png'),
                isBlink: true,
                funcDrawAnimated: funcAnimeHead
            },
            {
                sprite: this.raylib.LoadTexture(pathSprite + 'hairTop.png'),
                funcDrawAnimated: funcAnimeHead
            },
            {
                sprite: this.raylib.LoadTexture(pathSprite + 'eyesBorder.png'),
                isBlink: false,
                funcDrawAnimated: funcAnimeHead
            },
            {
                sprite: this.raylib.LoadTexture(pathSprite + 'axoHat1.png'),
                typeLayer: "axoHat",
                funcDrawAnimated: funcAnimeHead,
                isHide: true
            }
        ];


        this.layersPngTuber = layers;



        //loop update.
        while(!this.raylib.WindowShouldClose()){

            this.raylib.BeginDrawing();
            this.raylib.ClearBackground(this.raylib.BLUE);

            //render of all layers.
            this.layersPngTuber.filter((l) => //filter all layer hide.
                l.isHide === undefined || 
                l.isHide === false
            ).forEach((layer) => {

                const db = this.libMicrophone.decibelRealTime;
                const t = this.raylib.GetTime();

                //skip layer if is not in right range decibel.
                if( db < (layer.dbMin || db) || db > (layer.dbMax || db) )
                    return;

                //skip layer if brinking is not matching.
                if(layer.isBlink !== undefined){
                    const isBlink = (t % 5.0) < 0.2;
                    if(isBlink != layer.isBlink)
                        return;
                }

                //draw with animation function.
                if(layer.funcDrawAnimated !== undefined){
                    const animeLoopSize = 2.5;
                    const iAnime = (t % animeLoopSize) /animeLoopSize;
                    const iCurve = (Math.cos(iAnime * Math.PI * 2) +1.0) /2.0;
                    layer.funcDrawAnimated(this.raylib, layer, iCurve);
                    return;
                }

                //draw (default).
                this.raylib.DrawTexture(
                    layer.sprite,
                    0, 0, //position.
                    this.raylib.WHITE //color aditional.
                );

            });

            this.raylib.EndDrawing();

            //wait.
            await new Promise(resolve => setTimeout(resolve, 0));

        }

        //unload all sprites.
        this.layersPngTuber.forEach((layer) => {
            this.raylib.UnloadTexture(layer.sprite);
        });

        //close window.
        this.raylib.CloseWindow();

    },

    
    editTypeLayer: function(typeLayer){

        this.layersPngTuber.filter((l) => 
            l.typeLayer != undefined && l.typeLayer == typeLayer
        ).forEach((l) => {

            if(l.isHide === undefined)
                l.isHide = true;
            else
                l.isHide = !l.isHide;

        });

    }

};
