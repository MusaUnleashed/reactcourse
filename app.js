
var app={
	params:{
		player1:localStorage.player1|| 'Human', 
		player2:localStorage.player2|| 'Computer'
	},
	game:{
		started:false,
		over: false
	},
	scores:{
		Human:{
			win:localStorage.scoresWinHuman|| 0,
			lost:localStorage.scoresLostHuman||0
		},
		Computer:{
			win:localStorage.scoresWinComputer||0,
			lost:localStorage.scoresLostComputer||0
		}
	}
	
};



function pageLoaded(){
	doHash();
	app.addLink();
    board.outprintappend("Start");
}

function doHash(){
	if (window.location.hash=="#options"){
		if( ! window0) param();
	}
}
app.addLink= function(){
	d.links.restart=board.restart;
	d.links.options=param;
	d.addLink();
}


window.onhashchange=doHash;
