$(document).ready(function() {
    let endpoint = 'https://api.themoviedb.org/3/movie/now_playing'
    let apiKey = '3e4d90cc981994d2cf858de33c365791'
    let poster_path = 'https://image.tmdb.org/t/p/w500' // + poster_path
    let backdrop_path = 'https://image.tmdb.org/t/p/w500' // + backdrop_path
    var referencia_actual = ""

    $(document).on("click", ".boton_info" , function() {
        $( "#listado_peliculas" ).hide()
        referencia_actual = "#"+$(this).attr("referencia_oculta")
        $( referencia_actual ).show()
        // 1. Crear un boton que nos permita volver atras:
        //info_peliculas.append boton o
        var boton = '<br><button type="button" class="btn btn-secondary boton_atras">Atrás</button>'
        $("#info_peliculas").append( boton )
        console.log(result.results)
    });

    $(document).on("click", ".boton_atras" , function() {
        $( "#listado_peliculas" ).show()
        $(this).remove()
        $( referencia_actual ).hide()
    })


    $.ajax({
        url: endpoint + "?api_key=" + apiKey + '&language=es-ES',
        contentType: "application/json",
        dataType: 'json',
        success: function(result){

           var lista_peliculas = result.results

           for(var item=0; item<lista_peliculas.length; item++){
                var pelicula_actual = lista_peliculas[item]
                console.log(result.results)
                // https://getbootstrap.com/docs/4.5/components/card/
                $( "#listado_peliculas" ).append(
                    '<div class="col-12 col-sm-6 col-md-4 col-xl-3">' +
                        '<div class="card mt-3">' +
                          '<img src="' + poster_path + pelicula_actual.poster_path + '" class="card-img-top img_card" alt="...">' +
                          '<div class="card-body">' +
                            '<h5 class="card-title">' + pelicula_actual.title +'</h5>' +
                            //'<p class="card-text pelicula_card_overview">' + pelicula_actual.overview +'</p>' +
                            '<a href="#" class="btn btn-secondary boton_info" referencia_oculta="peli'+item+'">Información</a>' +
                          '</div>' +
                        '</div>' +
                    '</div>');

                    $( "#info_peliculas" ).append(
                      "<div style='display:none' id='peli"+item+"'>" +
                        "<h1>"+pelicula_actual.title+"</h1>" +
                        '<h5 id="titl" class="card-title">' + pelicula_actual.title +'</h5>' +
                        "<p id='over'>"+pelicula_actual.overview+ "</p>" +
                        '<img src="' + backdrop_path + pelicula_actual.backdrop_path + '" class="img-responsive" alt="...">' +
                      "</div>"
                    );

           }

        }
    })

});
