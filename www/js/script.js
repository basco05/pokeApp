$(document).on('pageinit', '#details', function(){  
    console.log("reached details page");    
    var url = "http://pokeapi.co/api/v2/pokemon/1";    
     
    $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon/" + 1,
        dataType: "json",
        async: true,
        success: function (result) {
            console.log(result);
            console.log("success");
        },
        error: function (request,error) {
            alert('Network error has occurred please try again!');
        }
    });         
});

$(document).on('pageinit', '#pokedex', function(){  
    console.log("reached pokedex page");    
    var url = "http://pokeapi.co/api/v2/pokemon/?limit=251&offset=0";
   
                      $('#pageLoader').show( "slow", function() { }); 
                      $('#pageLoader').html('<img src="images/loader.gif" />');  
                      console.log("waiting");   
       
     
    $.ajax({
        url: url,
        dataType: "json",
        async: true,
        success: function (result) {

        console.log(result);
        jQuery.each(result.results, function(index,value){
            console.log(value.name);
            fillPokemon(index,value);
        })
        console.log("success");
        },
        error: function (request,error) {
            alert('Network error has occurred please try again!');
        }
    });         
});

 
var fillPokemon = function(index,value){
     $("#pokelistdata").append(
                    "<li>" +
                    "<a href ='#details'>" +
                    "<img src='img/pokemon/" + (index + 1) + ".png'>"+
                    "<h1>" + value.name + "</h1>" +
                    "</a>" +
                    "</li>"

     );
}
