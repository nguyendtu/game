function Begin(){};

Begin.prototype = {

	init: function(selec){
		selecData = selec;
		console.log(selecData);
	},

	create: function(){	///https://www.youtube.com/watch?v=V1Tr1qCHwq4			/// https://www.youtube.com/watch?v=xi7ab375XGI
		win = this.add.group();
		fail = this.add.group();
		selec = selecData;
		// theme
		//var image = this.add.sprite(0, 0, 'theme');
		//image.scale.setTo(2);

		data = [ // use between ['thiếu vitamin a', 'thiếu Fe', 'thiế Zn', 'suy dinh dưỡng', 'béo phì']
			{key:"cherry", scale:0.45, use:"sat"},
			{key:"mango", scale:2,use:"vitamin_a bep_phi"},
			{key:"carrot", scale:0.04, use:"vitamin_a sat"},
			{key:"banana", scale:0.033, use:"suy_dinh_duong"},
			{key:"watermelon", scale:0.05, use:"sat"},
			{key:"melone", scale:0.35, use:"vitamin_a"},
			{key:"pomogranate", scale:0.3, use:"kem"},
			{key:"papaye", scale:0.45, use:"vitamin_a"},
			{key:"apple", scale:0.15, use:"sat"},
			{key:"fig", scale:0.5, use:"suy_dinh_duong"},
			{key:"Plum", scale:0.45, use:"sat"},
			{key:"jack-fruit-wh", scale:0.11, use:"sat"},
			{key:"raspberry", scale:0.1, use:"kem"},
			{key:"Mulberry", scale:0.3, use:"kem"},
			{key:"avocado", scale:0.15, use:"suy_dinh_duong"},
			{key:"apricot", scale:0.15, use:"vitamin_a"},
			{key:"grape", scale:0.1, use:"sat"},
			{key:"pineapple", use:""},
			{key:"pineapple", use:""},
			{key:"pineapple", use:""},
			{key:"pineapple", use:""},
			{key:"pineapple", use:""},
			{key:"pineapple", use:""},
			{key:"pineapple", use:""},
			{key:"pineapple", use:""},
		];

		var graphics = this.add.graphics(830, 150);
		//graphics.beginFill(0xFF3300);
		graphics.lineStyle(5, 0xffd900, 1);

		graphics.moveTo(0,0);
		graphics.lineTo(60, 130);
		graphics.lineTo(210, 130);
		graphics.lineTo(270, 0);

		//////////////////////////////////////////////////////////
		fruits = this.add.group();
		var fruit;
			    //var myjson = game.cache.getJSON('data');
			    //game.add.sprite(fruit[0].x, fruit[0].y, fruit[0].name);
		var game = this;
		var delay = 0;
		var i = j = 0;

	    data.forEach(function(element){
	    	fruit = fruits.create(i, -600, element.key);
	    	console.log('sd');
	    	fruit.scale.setTo(element.scale);
console.log('sd');
	    	var ftween = game.add.tween(fruit);
	    	console.log('sd');
	    	ftween.to({y: j}, 1000, Phaser.Easing.Sinusoidal.Out, true, delay);
	    	delay += 200;
	    	//this.add.tween(fruit).to({ y: j }, 1000, Phaser.Easing.Sinusoidal.Out, true, 200, 1000, false);
console.log('sd');
	    	i += 140;
	    	if(i > 560){
	    		j += 140;
	    		i = 0;
	    	}

	    	fruit.key = element.key;
	    	fruit.use = element.use;

	    	// enable input detection, then it's possible be dragged
	    	fruit.inputEnabled = true;

	    	// make this item draggable
	    	fruit.input.enableDrag();

	    	// snap
	    	fruit.input.enableSnap(140, 140, false, true);

	    });

	    fruits.forEach(this.getData);
	},

	getData: function(value, index, fruits, selec){
		
	    value.events.onDragStart.add(function startFunc(){
	    	itemX = value.x;
	    	
			itemY = value.y;

	    }, this);
	    value.events.onDragStop.add(function fixLocation(win, fail){
	    	if (value.x < 830 || value.x > 1100 || value.y > 150) {
	    		console.log(value.x);
			console.log(value.y);
				value.x = itemX;
				value.y = itemY;
			}

			else{
				console.log(value.use);
				console.log(selecData);
				if(value.use.search(selecData) != -1){
					this.win.addChild(value);
				}
				else
					this.fail.addChild(value);
			}
			
			
			
	    }, this);
	},
	update: function(){
		
		if((win.length + fail.length) == 5){
			if(win.length == 5){
				var text = this.add.text(900, 370, 'WIN');
				text.setStyle({font:'bold 50pt Arial', backgroundColor:'green', fill:'yellow', align:'center',});
			}
			else{
				var text = this.add.text(900, 370, 'FAIL');
				text.setStyle({font:'bold 50pt Arial', backgroundColor:'red', fill:'red', align:'center',});
			}
		}

	}
};



/*vitamin a: đu đủ - dưa gang - xoài - cà rốt -  trái mơ
sắt: dưa hấu - dâu tây - chà là - mận - nho - táo - mít
kẽm: bo - việt quốc - dâu tằm đỏ - lựu - măm xôi
béo phì: chuối - quả sung - hồng xiêm - xoài -  bơ */





















