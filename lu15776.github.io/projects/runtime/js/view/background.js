var background = function (window) {
    'use strict';
     var tree;
                 var buildings = [];
            var buildingHeight = 100;
            var building;
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'black');
            background.addChild(backgroundFill);
            var shape = draw.circle(50, 'yellow', 'orange', 10);
            background.addChild(shape);
            
            // TODO: 3 - Add a moon and starfield
            var rectangle;
            for (var i = 0; i < 10; i++)
            {
                rectangle = draw.rect(10, 10, 'orange', 'orange', 10);
                rectangle.x = canvasWidth * Math.random();
                rectangle.y = groundY -150
                background.addChild(rectangle);
            }
            var moon = draw.bitmap('img/moon.jfif');
            moon.x = 700;
            moon.y = 25;
            moon.scaleX = 1.0;
            moon.scaleY = 1.0;
            background.addChild(moon);
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            //var buildings = [];
           //// var buildingHeight = 300;
         //   var building;
            for (var i = 0; i < 5; ++i)
            {
                building = draw.rect(75, buildingHeight, 'LightGray', 'Black', 1);
                building.x = 200 *i;
                building.y = groundY-buildingHeight;
                background.addChild(building);
                buildings.push(building);
            }
            
            // TODO 4: Part 1 - Add a tree
           
            tree = draw.bitmap('data:image/jpeg;base64,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');
            tree.x = 0;
            tree.y = groundY-243;
            background.addChild(tree);
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
          
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x -1;
              if(tree.x < -200)
            {
                tree.x = canvasWidth;
            }
            
            // TODO 5: Part 2 - Parallax
             
             building.x = building.x -1;
              if(building.x < -200)
            {
                building.x = canvasWidth;
            }
        


        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
