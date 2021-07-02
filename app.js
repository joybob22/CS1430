let data;

const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://type.fit/api/quotes",
    "method": "GET"
}

$.ajax(settings).done(function (response) {
    data = JSON.parse(response);
    let randomNum = Math.floor(Math.random() * data.length);
    $('#quote').text(data[randomNum].text)
    if (data[randomNum].author) {
        $('#author').text(`- ${data[randomNum].author}`);
    } else {
        $('#author').text(`- Unknown`);
    }
});

$('.quoteBtn').on('click', function () {
    let randomNum = Math.floor(Math.random() * data.length);
    $('#quote').text(data[randomNum].text)
    if (data[randomNum].author) {
        $('#author').text(`- ${data[randomNum].author}`);
    } else {
        $('#author').text(`- Unknown`);
    }
})
