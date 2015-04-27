function Game(){};

Game.prototype = {

	// load all states
	start: function(){
		var game = new Phaser.Game(1200, 700, Phaser.AUTO, 'game-area');

		game.state.add('preload', Preload);
		game.state.add('main-intro', MainIntro);
		game.state.add('main-menu', MainMenu);
		game.state.add('begin', Begin);
		//game.state.add('result', Result);

		game.state.start('preload');
	}
};