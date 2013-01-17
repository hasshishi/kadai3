enchant();

var picNumber = 18;

window.onload = function(){
    var x = 2;
    var y = 0;
    var game = new Game(320, 480); //…④
    game.preload('http://enchantjs.com/assets/images/chara5.gif'); //…⑤
    game.onload = function() { //…⑥
        var bear = new Sprite(32, 32); //…⑦
        bear.rotate(45);
        bear.image = //…⑧
            game.assets['http://enchantjs.com/assets/images/chara5.gif'];
        bear.frame = 12; //…⑨
        bear.addEventListener(Event.ENTER_FRAME, function() { //…⑩
            picNumber++; //…⑪
            if (picNumber >26 ) { //…⑫
                picNumber = 18;
                x +=1;
                y +=1;
                if( x > 5){
                	x -= 5;
                }
                if( y > 5){
                    y -= 5;
                }
            }
            bear.frame = picNumber; //…⑬
            bear.x += x; //…⑭
            bear.y += y;
        });
        game.rootScene.addChild(bear);
    };
    
    game.start();
};