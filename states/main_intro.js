function MainIntro(){};

MainIntro.prototype = {
	// display assets.
	create: function(){

		// draw 5 circle
		var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xff0000);
		graphics.drawCircle(300, 200, 100);

		this.obj = this.add.sprite(260, 120, 'pineapple');
		this.obj.scale.setTo(0.35);
		this.nextState();
	},

	nextState: function(obj){
		//var tween = this.add.tween(obj).to({}, 2000, Phaser.Easing.Bounce.Out, true);
		//tween.onComplete.add(function(){
		//this.game.state.start('main-menu', false);
		//}, this);
	}
};