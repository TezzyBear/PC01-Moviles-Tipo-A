window.onload =function(){
	let game = new Phaser.Game(1024, 768,Phaser.AUTO);
	game.state.add("Menu", Menu);
	game.state.add("Game", Game);
	game.state.add("GameOver", GameOver);
	game.state.start("Menu");
}