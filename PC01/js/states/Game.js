Game = function(game){}

Game.prototype = {
	create:function(){
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.bg = this.game.add.sprite(0,0,"bgLayer1");
        this.createPlayer();
        this.candySpawnRate = 4000;
        this.candyTimer = 0;
        
        this.candies = this.game.add.group();
                
    },	
	update:function(){
        if(this.keys.up.isDown){ 
            if(this.player.y - 5 - this.player.height/2 < 0 ){

            }else{
                this.player.y -= 5;
            }     
        }
        if(this.keys.down.isDown){ 
            if(this.player.y + 5 + this.player.height/2 > this.game.world.height){

            }else{
                this.player.y += 5;
            }             
        }
        
        this.physics.arcade.overlap(this.player, this.candies, null, this.playerHit, this);

        this.candies.forEach(function(element){
			if(element.x <= -50){
				element.kill();
			}
		},this);

        this.candyTimer += this.game.time.elapsed;
        if(this.candyTimer >= this.candySpawnRate) {
            this.candyTimer = 0;
            this.createCandy();
        }

        if(this.player.hp <= 0){
            this.state.start("GameOver");
        }
    },
    createPlayer:function(){
        this.player = this.game.add.sprite(0,0,"hero")
        this.player.anchor.setTo(0.5);
        this.physics.arcade.enable(this.player);
        this.player.x = this.game.world.width/2;
        this.player.y = this.game.world.height/2;
        this.player.animations.add("hero", [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 20, true);
        this.player.animations.play("hero");
        this.player.hp = 1;
        this.keys = this.input.keyboard.createCursorKeys();
    },
    createCandy(){
        let candy = this.candies.getFirstDead();
        let rndSpawnY = this.game.rnd.integerInRange(0,this.game.world.height);
        if(candy != null){
            candy.reset(this.game.width, rndSpawnY);
        }else{
            candy = this.game.add.sprite(0,0,"candy")
            candy.anchor.setTo(0.5);
            this.physics.arcade.enable(candy);
            candy.x = this.game.world.width/2;
            candy.y = this.game.world.height/2;            
            candy.animations.add("candy", [0], 10, true);
            
        }         
        candy.y = rndSpawnY;  
        candy.x = this.game.width-100;   
        let rndCandyFrame = this.game.rnd.integerInRange(0,4);
        candy.frame = rndCandyFrame;
        candy.body.velocity.x = -100;
        this.candies.add(candy)
    },
    playerHit(player, candy){
        if(candy.frame == 1 || candy.frame == 2){
            player.hp -= 2;
        }else if(candy.frame == 3){
            player.hp += 1
        }else if(candy.frame == 4){
            player.hp -= 1
        }
        candy.kill()
        console.log("VIDA: " + player.hp);
    }
}