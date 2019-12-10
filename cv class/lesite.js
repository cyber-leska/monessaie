
$("#accueil").on('click', function () {
    $('.corps').empty()

    $.get('accueil.html', function (mars) {
        $('.corps').html(mars);

    });
});
$("#profils").on('click', function () {
    $('.corps').empty()

    $.get('profil.html', function (mars) {
        $('.corps').html(mars);

    });
});
$("#contact").on('click', function () {
    $('.corps').empty()

    $.get('contact.html', function (mars) {
        $('.corps').html(mars);


    });
});
$("#inscription").on('click', function () {
    $('.corps').empty()

    $.get('incription.html', function (mars) {
        $('.corps').html(mars);


    });
});
$("#connexion").on('click', function () {
    $('.corps').empty()

    $.get('connexion.html', function (mars) {
        $('.corps').html(mars);


    });
});



