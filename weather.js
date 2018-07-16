var placeEntered;

function onSubmitForm() {
    placeEntered = document.getElementsByName("placeEntered")[0].value;
    weather();
    return false;
}

function weather(){
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + placeEntered + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", (jsonData) => {
        $(".title").html(jsonData.query.results.channel.description);
        //$(".forecast").html(jsonData.query.results.channel.item.description);

        jsonData.query.results.channel.item.forecast.forEach(function(e, i, a) {
            $("#results").append("<div class= \"card text-white mx-auto border-secondary mb-3\" style = \"width: auto; height: auto; align-items: center; background-color: #414749; display:inline-block;\"><img class=\"card-img-top\" src =\"http://l.yimg.com/a/i/us/we/52/" +e.code + ".gif\"><p class = \"card-title\">" + e.day +"</p><p class=\"card-body\">" + e.high +"</p><p class=\"card-body\">" + e.low + "</p></div>");
        console.log(e.day, e.code, e.high, e.low);
        });
    });
}
