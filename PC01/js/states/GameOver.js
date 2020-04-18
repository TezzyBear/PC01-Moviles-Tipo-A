GameOver = function(game){}

GameOver.prototype = {
	create:function(){

        this.gw = this.game.width;
        this.gh = this.game.height;

        this.bg = this.game.add.sprite(0,0,"bgWelcome");

        this.playButton = this.game.add.sprite(0,0,"welcome_playButton");
        this.playButton.anchor.setTo(0.5);
        this.playButton.x = this.gw * 2/4;
        this.playButton.y = this.gh * 3/4;
        this.playButton.inputEnabled = true;
		this.playButton.events.onInputDown.add(this.goPlay, this);
               
    },	
	update:function(){
        
    },
    goPlay:function(sprite){
        this.state.start("Game");
    }   
}