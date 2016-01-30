// MENU scene
module scene {

    export class Menu extends objects.Scene {
        
        //Private instance var
        private _helloLabel: createjs.Text;
        private _startButton: objects.Button;
        constructor() {
            super();
        }

        public start(): void {
            console.log("Game Started !");
            this._helloLabel = new createjs.Text("Press To Start", "60px Arial", "#248f24");
            this._helloLabel.regX = this._helloLabel.getMeasuredWidth() * 0.5;
            this._helloLabel.regY = this._helloLabel.getMeasuredHeight() * 0.5;
            this._helloLabel.x = config.Screen.CENTER_X;
            this._helloLabel.y = CScreen.CENTER_Y;


            this._startButton = new objects.Button("StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 50)
            this.addChild(this._startButton);
            
            // start button event listener
            this._startButton.on("click",this._startButtonclick,this);
            
            
            //container
            this.addChild(this._helloLabel);

            //all container to the stage
            stage.addChild(this);
        }
        
        // menu scene update here
        public update(): void {
            //this._helloLabel.rotation += 60;
        }
        //Event handler
        private _startButtonclick(event:createjs.MouseEvent){
            this._helloLabel.text = 'Game Started !';
            
            
        }
    }

}