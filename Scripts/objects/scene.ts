module objects{
    //scene class
    export class Scene extends createjs.Container {
        constructor()
        {
            super();
            this.start();
        }
        
        //add game object to my scene 
        public start():void{
            stage.addChild(this);
        }
        
        //update a game object in my scene
        public update():void{
            
        }
    }
}