// membuat api connecton menggunakan ajax agar lebih mudah dari pada jsnya sendiri karna parameter aslinya json adalah ajax

$('#search-button').on('click', function () {
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '21cf67eb',
            's': $('#search-input').val()
        },
        success: function (result) {
            console.log(result);
        }
    });
});