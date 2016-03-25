//retouneerd een async result, gebruik een promise in de code om deze te benaderen
var getApiCall = function(url)
{
   return $.ajax({
            url: url,
            dataType: "json",
            async: true,          
        });        
}

$(document).ready(function(){
console.log("ready");
$('ul.pokelist').on("tap", 'li a' ,function() {
    $.mobile.loading( 'show');
  var promise = getApiCall($(this).data("link"))
  promise.success(function (result) {
                console.log(result);
                    $.mobile.loading( 'hide');
                    console.log("success");
    }); 
    console.log("clicked");
});   

});

$(document).on('pageinit', '#details', function(){  
    console.log("reached details page");    
  /*  var url = "http://pokeapi.co/api/v2/pokemon/1";    
     
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
    });   */      
});

            $(document).on('pageshow', '#pokedex', function(){        
                $.mobile.loading( 'show');          
            }); 

$(document).on('pageinit', '#pokedex', function(){  
       
    console.log("reached pokedex page");    
    var url = "http://pokeapi.co/api/v2/pokemon/?limit=251&offset=0";
   
   console.log("waiting");   
                var promise = getApiCall(url);
                promise.success(function (result) {
                console.log(result);
                    jQuery.each(result.results, function(index,value){
                        console.log(value.name);
                        fillPokemon(index,value);
                    })
                    console.log("success");
                    $.mobile.loading( 'hide'); 

                });
                promise.error(function (request,error) {
                        alert('Network error has occurred please try again!');
                    }); 
  
});

 
var fillPokemon = function(index,value){
     $("#pokelistdata").append(
                    "<li>" +
                    "<a class='pokedetail' data-link ='"+ value.url + "'>" +
                    "<img src='img/pokemon/" + (index + 1) + ".png'>"+
                    "<h1>" + value.name + "</h1>" +
                    "</a>" +
                    "</li>"

     );
}
