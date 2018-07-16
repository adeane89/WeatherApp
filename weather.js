var placeEntered;

function onSubmitForm() {
    placeEntered = document.getElementsByName("placeEntered")[0].value;
    weather();
    return false;
}

function weather(){
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + placeEntered + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", (jsonData) => {
        $(".title").html(jsonData.query.results.channel.description);
        $(".forecast").html(jsonData.query.results.channel.item.description);
    });
}
