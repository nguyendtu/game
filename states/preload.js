function Preload() {};

Preload.prototype = {
	preload: function(){
		// load all images, sound, etc.
		this.load.image('cherry', 'assets/cherry.png');
		this.load.image('theme', 'assets/theme.jpg');
		this.load.image('rectangle', 'assets/rectangle.png');
		this.load.image('mango', 'assets/mango.png');
		this.load.image('carrot', 'assets/carrot.png');
		this.load.image('banana', 'assets/banana.png');
		this.load.image('watermelon', 'assets/watermelon.png');
		this.load.image('apple', 'assets/apple.png');
		this.load.image('melone', 'assets/melone.png');
		this.load.image('apricot', 'assets/apricot.png');
		this.load.image('papaye', 'assets/papaye.png');
		this.load.image('plum', 'assets/plum.png');
		this.load.image('fig', 'assets/fig.png');
		this.load.image('avocado', 'assets/avocado.png');
		this.load.image('jack-fruit-wh', 'assets/jack-fruit-wh.jpg');
		this.load.image('pomogranate', 'assets/pomogranate.png');
		this.load.image('raspberry', 'assets/raspberry.jpg');
		this.load.image('Mulberry', 'assets/Mulberry.jpg');
		this.load.image('grape', 'assets/grape.png');
	},

	create: function(){
		this.game.state.start('main-menu');
	}
};