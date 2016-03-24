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
    var url = "http://pokeapi.co/api/v2/pokemon";    
     
    $.ajax({
        url: "http://pokeapi.co/api/v2/pokemon",
        dataType: "json",
        async: true,
        success: function (result) {

        console.log(result);
        jQuery.each(result.results, function(index,value){
            console.log(value.name);
        })
        console.log("success");
        },
        error: function (request,error) {
            alert('Network error has occurred please try again!');
        }
    });         
});

 
