var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU scene
var scene;
(function (scene) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.start = function () {
            console.log("Game Started !");
            this._helloLabel = new createjs.Text("Press To Start", "60px Arial", "#248f24");
            this._helloLabel.regX = this._helloLabel.getMeasuredWidth() * 0.5;
            this._helloLabel.regY = this._helloLabel.getMeasuredHeight() * 0.5;
            this._helloLabel.x = config.Screen.CENTER_X;
            this._helloLabel.y = CScreen.CENTER_Y;
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 50);
            this.addChild(this._startButton);
            // start button event listener
            this._startButton.on("click", this._startButtonclick, this);
            //container
            this.addChild(this._helloLabel);
            //all container to the stage
            stage.addChild(this);
        };
        // menu scene update here
        Menu.prototype.update = function () {
            //this._helloLabel.rotation += 60;
        };
        //Event handler
        Menu.prototype._startButtonclick = function (event) {
            this._helloLabel.text = 'Game Started !';
            var menu1 = new objects.Scene();
            var gameLabel;
            gameLabel = new createjs.Text("game game", "60px Arial", "#248f24");
            menu1.addChild(gameLabel);
            stage.addChild(menu1);
        };
        return Menu;
    })(objects.Scene);
    scene.Menu = Menu;
})(scene || (scene = {}));
//# sourceMappingURL=menu.js.map