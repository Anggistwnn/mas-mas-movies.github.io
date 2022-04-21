// membuat api connecton menggunakan ajax agar lebih mudah dari pada jsnya sendiri karna parameter aslinya json adalah ajax
function searchMovie() {
    $('#movie-list').html('');

    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '21cf67eb',
            's': $('#search-input').val()
        },
        success: function (result) {
            if (result.Response == "True") {
                const movies = result.Search;

                $.each(movies, function (i, data) {

                    $('#movie-list').append(`
                    <div class="col-md-4">
                        <div class="card mb-3" style="width: 18rem;">
                            <img src="` + data.Poster + `" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">` + data.Title + `</h5>
                                <h6 class="card-subtitle mb-2 text-muted">` + data.Year + `</h6>
                                <a href="#" class="card-link" data-toggle="modal" data-target="#exampleModal">See Detail</a>
                            </div>
                        </div>
                    </div>
                    `)

                })

                $('#search-input').val('');

            } else {
                $('#movie-list').html(`
                <div class"col">
                     <h1 class="text-center">` + result.Error + `</h1>
                </div>
                `)
            }
        }
    });
}
$('#search-button').on('click', function () {
    searchMovie();
});

$('#search-input').on('keyup', function (e) {
    if (e.which === 13) {
        searchMovie();

    };

});