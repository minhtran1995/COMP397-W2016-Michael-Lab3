module config {

    // State Constants
    export const MENU_STATE: number = 0;
    export const PLAY_STATE: number = 1;
    export const OVER_STATE: number = 2;
    
    //screen constant
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X = 320;
        public static CENTER_Y = 240;
    }
    
    
    //game constant
    export class Game{
        public static FPS:number = 60;
    }

}