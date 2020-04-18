Menu = function(game){}

Menu.prototype = {
    preload : function(){        
        this.load.image("bgLayer1","assets/images/bgLayer1.png");
        this.load.image("bgWelcome","assets/images/bgWelcome.jpg");
        this.load.spritesheet("candy","assets/images/candy.png", 82, 98);
        this.load.image("gameover","assets/images/gameover.png");
        this.load.spritesheet("hero","assets/images/hero.png", 155, 77);
        this.load.image("loading-bar","assets/images/loading-bar.png");
        this.load.image("welcome_aboutButton","assets/images/welcome_aboutButton.png");
        this.load.image("welcome_Hero","assets/images/welcome_Hero.png");
        this.load.image("welcome_playButton", "assets/images/welcome_playButton.png")
        this.load.image("welcome_title", "assets/images/welcome_title.png")
	},
	create:function(){

        this.gw = this.game.width;
        this.gh = this.game.height;

        this.bg = this.game.add.sprite(0,0,"bgWelcome");

        this.playButton = this.game.add.sprite(0,0,"welcome_playButton");
        this.playButton.anchor.setTo(0.5);
        this.playButton.x = this.gw * 1/4;
        this.playButton.y = this.gh * 3/4;
        this.playButton.inputEnabled = true;
		this.playButton.events.onInputDown.add(this.goPlay, this);
        
        this.aboutButton = this.game.add.sprite(0,0,"welcome_aboutButton");
        this.aboutButton.anchor.setTo(0.5);
        this.aboutButton.x = this.gw * 3/4;
        this.aboutButton.y = this.gh * 3/4;

        this.welcomeHero = this.game.add.sprite(0,0,"welcome_Hero");
        this.welcomeHero.anchor.setTo(0.5);
        this.welcomeHero.x = this.gw * 2/4;
        this.welcomeHero.y = this.gh * 2/4;

        this.welcomeTitle = this.game.add.sprite(0,0,"welcome_title");
        this.welcomeTitle.anchor.setTo(0.5);
        this.welcomeTitle.x = this.gw * 2/4;
        this.welcomeTitle.y = this.gh * 1/10;
    },	
	update:function(){
        
    },
    goPlay:function(sprite){
        this.state.start("Game");
    }
}