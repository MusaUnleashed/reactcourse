d=new function(){
    /*the first function that the coumputer goes into */
    this.extend = function (me, o) /*this Merge the contents of two or more objects together into the first object.*/ {
        for (k in o) { /* the first loop makes me undifined so the value is unknown*/  /*the loop for the second time goes 6 times and then merge all of the functions inside me: 'me = { links: { � }, extend: �, t: �, button: �, addLink: �, � } = me = { links: { � }, extend: �, t: �, button: �, addLink: �, � }, o = { links: { � }, t: �, button: �, addLink: �, sfield: �, � }*/


		me[k]=o[k];
	} 
    }; /*after the merging we go out of this function into another function */
    var me = this; /*after this action the value of me become extanded so me{ undifined } = me{ extend,random function }*/
this.extend(this,{
	links: {}, /*after the first time we go back to the top of this page*/
	t:function(tag, text, p){return "<"+tag+(p?' '+p:'')+">"+(text?text:'')+"</"+tag+">";	},
	button: function(value,onclick){
		me.links[value]=onclick;
		return '<input type="button" class="btn" name="'+value+'" value="'+value+'"/>';
	},
	addLink: function(){
		for(link in me.links){
			console.log(link);
			document.getElementsByName(link)[0].addEventListener("click", me.links[link]);
		}
	},
	sfield: function(field, input){
		return '<div class="centered"><label>'+field+': </label>'+
				'<select name="'+input+'"> <option>Human</option><option>Computer</option></select></div>';
	},
	label: function(title, value){
		return '<div class="centered"><label>'+title+': </label>'+
				'<span>'+value+' </span></div>';
	},
	pushForm: function(o){
		for(var key in o){
			var elts = document.getElementsByName(key);
			for(var i=0;i<elts.length;i++){
				elts[i].value=o[key];
			}
		}
    },
    //this function set values for the players, he gets the value from elts for the player that is going to play 
    //then sets the player as computer or human
    //so if you have both computer and beforehand you had human and computer 
    //and now you have computer and computer so the value that function gets is: o = {player1: "Human", player2: "Computer"}
    // and then key gets the vakue of the player we want to change for instance player1
    //then elts gets a value of key from the html, for instance the computer value in the option.js
    //then it changes the value of the current Human to Computer as following
    // o = {player1: "Computer", player2: "Computer"}
    //then go back to option.js and updates the values of the players 

	pullForm: function(o){
		for(var key in o){
			var elts = document.getElementsByName(key);
			for(var i=0;i<elts.length;i++){
				o[key]=elts[i].value;
			}
		}
	}

		
		
});
return this;
}

//we go out of this fucntion into build.js

