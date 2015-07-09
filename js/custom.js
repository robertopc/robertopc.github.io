$(document).ready(function(){

    var d       = document,
        w       = window,
        canvas  = $('#estrelas'),
        context = canvas[0].getContext('2d');

    /* ESTRELAS */
        canvas.attr( 'width', $( d ).width() );
        canvas.attr( 'height', $( d ).height() );

        for( var i = 0; i < 600; i++ ) {

            x = Math.round( Math.random() * $( d ).width() );
            y = Math.round( Math.random() * $( d ).height() );

            // estrelas desenhadas apenas nas margens
            if(x < $( d ).width() * 0.2 || x > ( $( d ).width() * 0.8 ) ) {

                context.fillStyle = "#ffffff";
                context.fillRect( x, y, 1, 1 );
            }
        }

/* FORMULÁRIO DE CONTATO */
    $('#contato-form').submit(function(event){
        // previne o envio do form
        event.preventDefault();

        // desabilita submit e adiciona msg de "enviando..."
        $(this).find('[type="submit"]').attr('disabled','true').html('Enviando...');

        $.ajax({
            url: 'http://robertopc.net/contato.php',
            type: 'post',
            crossDomain: true,
            data: $('#contato-form').serializeArray(),
            success: function( msg ) {
                console.log( "Request success: "+ msg );
            },
            error: function( jqXHR, textStatus ) {
                console.log( "Request failed: "+ textStatus );
            },
            complete: function( jqXHR, textStatus ) {

            console.log( "Request complete: "+ textStatus );

                // reseta formulário
                $('#contato-form')[0].reset();

                // habilita submit e adiciona msg de enviar
                $('#contato-form [type="submit"]').removeAttr('disabled').html('Enviar');
                $('#msg-form').html('Mensagem enviada!');
            }
        });
    });

/* ON RESIZE */
    $(w).resize(function(e) {

        /* ESTRELAS */

        // limpa canvas
        context.clearRect(0, 0, canvas.width(), canvas.height());

        for( var i = 0; i < 600; i++ ) {

            x = Math.round( Math.random() * canvas.width() );
            y = Math.round( Math.random() * canvas.height() );

            // estrelas desenhadas apenas nas margens
            if(x < $( w ).width() * 0.2 || x > ( $( w ).width() * 0.8 ) ) {

                context.fillStyle = "#ffffff";
                context.fillRect( x, y, 1, 1 );
            }
        }
    });
});
