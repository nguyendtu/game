function MainMenu(){};

MainMenu.prototype = {

	init: function(selec){
		this.selecData = selec;
	},

	// selected.
	create: function(){

		// theme.
		var image = this.add.sprite(0, 0, 'theme');
		image.scale.setTo(2);

		// x = 200
		this.graphic = this.add.graphics(200, 20);
		this.graphic.lineStyle(2, 0xFFFFFF);
		this.graphic.beginFill(0x33FF33, 2);
		this.graphic.drawRect(0, 0, 220, 300);

		this.sprite = this.add.sprite(0, 0, null);
		this.sprite.inputEnabled = true;
		this.sprite.addChild(this.graphic);
		this.sprite.hitArea = new Phaser.Rectangle(this.graphic.x, this.graphic.y, 220, 300);
		console.log(this.sprite);
		this.sprite.events.onInputDown.add(function(){ this.selecData = this.down_200(); this.nextState(); }, this);

		var text = this.add.text(215, 75, 'Thieu');
		text.setStyle({font:'bold 40pt Melt', fill:'white', align:'center',});
		text.setShadow(3, 2, "#098fad");
		text = this.add.text(215, 155, 'Vitamin-A');
		text.setStyle({font:'bold 30pt Melt', fill:'white', align:'center',});
		text.setShadow(3, 2, "#098fad");


		// x = 480
		this.graphic = this.add.graphics(480, 20);
		this.graphic.lineStyle(2, 0xFFFFFF);
		this.graphic.beginFill(0x33FF33, 2);
		this.graphic.drawRect(0, 0, 220, 300);

		this.sprite = this.add.sprite(0, 0, null);
		this.sprite.inputEnabled = true;
		this.sprite.addChild(this.graphic);
		this.sprite.hitArea = new Phaser.Rectangle(this.graphic.x, this.graphic.y, 220, 300);
		console.log(this.sprite);
		this.sprite.events.onInputDown.add(function(){ this.selecData = this.down_480(); this.nextState(); }, this);


		var text = this.add.text(495, 75, 'Thieu');
		text.setStyle({font:'bold 40pt Melt', fill:'white', align:'center',});
		text.setShadow(3, 2, "#098fad");
		text = this.add.text(555, 155, 'SAT');
		text.setStyle({font:'bold 30pt Melt', fill:'white', align:'center',});
		text.setShadow(3, 2, "#098fad");

		// x = 760
		this.graphic = this.add.graphics(760, 20);
		this.graphic.lineStyle(2, 0xFFFFFF);
		this.graphic.beginFill(0x33FF33, 2);
		this.graphic.drawRect(0, 0, 220, 300);

		this.sprite = this.add.sprite(0, 0, null);
		this.sprite.inputEnabled = true;
		this.sprite.addChild(this.graphic);
		this.sprite.hitArea = new Phaser.Rectangle(this.graphic.x, this.graphic.y, 220, 300);
		console.log(this.sprite);
		this.sprite.events.onInputDown.add(function(){ this.selecData = this.down_760(); this.nextState(); }, this);


		var text = this.add.text(775, 75, 'Thieu');
		text.setStyle({font:'bold 40pt Melt', fill:'white', align:'center',});
		text.setShadow(3, 2, "#098fad");
		text = this.add.text(855, 155, 'KEM');
		text.setStyle({font:'bold 30pt Melt', fill:'white', align:'center',});
		text.setShadow(3, 2, "#098fad");


		// x = 350
		this.graphic = this.add.graphics(340, 355);
		this.graphic.lineStyle(2, 0xFFFFFF);
		this.graphic.beginFill(0x33FF33, 2);
		this.graphic.drawRect(0, 0, 220, 300);

		this.sprite = this.add.sprite(0, 0, null);
		this.sprite.inputEnabled = true;
		this.sprite.addChild(this.graphic);
		this.sprite.hitArea = new Phaser.Rectangle(this.graphic.x, this.graphic.y, 220, 300);
		console.log(this.sprite);
		this.sprite.events.onInputDown.add(function(){ this.selecData = this.down_340(); this.nextState(); }, this);


		var text = this.add.text(395, 410, 'SUY');
		text.setStyle({font:'bold 40pt Melt', fill:'white', align:'center',});
		text.setShadow(3, 2, "#098fad");
		text = this.add.text(340, 490, 'DINH DUONG');
		text.setStyle({font:'bold 24pt Melt', fill:'white', align:'center',});
		text.setShadow(3, 2, "#098fad");


		// x = 620
		this.graphic = this.add.graphics(620, 355);
		this.graphic.lineStyle(2, 0xFFFFFF);
		this.graphic.beginFill(0x33FF33, 2);
		this.graphic.drawRect(0, 0, 220, 300);

		this.sprite = this.add.sprite(0, 0, null);
		this.sprite.inputEnabled = true;
		this.sprite.addChild(this.graphic);
		this.sprite.hitArea = new Phaser.Rectangle(this.graphic.x, this.graphic.y, 220, 300);
		console.log(this.sprite);
		this.sprite.events.onInputDown.add(function(){ this.selecData = this.down_620(); this.nextState(); }, this);


		var text = this.add.text(635, 480, 'BEO PHI');
		text.setStyle({font:'bold 35pt Melt', fill:'white', align:'center',});
		text.setShadow(3, 2, "#098fad");
		text.setShadow(3, 2, "#098fad");
	},

	update: function(){
	},

	down_200: function(){
		var tween = this.add.tween(this.graphics).to({ alpha: 0 }, 1000);
		return 'vitamin_a';
	},

	down_480: function(){
		//var tween = this.add.tween(this.graphics).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
		return 'sat';
	},

	down_760: function(){
		//var tween = this.add.tween(this.graphics).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
		return 'kem';
	},

	down_340: function(){
		//var tween = this.add.tween(this.graphics).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
		return 'suy_dinh_duong';
	},

	down_620: function(){
		//var tween = this.add.tween(this.graphics).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
		return 'beo_phi';
	},

	nextState: function(obj){
		this.game.state.start('begin', true, false, this.selecData);
	}
};