var placeEntered;

function onSubmitForm() {
    placeEntered = document.getElementsByName("placeEntered")[0].value;
    weather();
    return false;
}

function weather(){
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + placeEntered + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", (jsonData) => {
        $(".current").html(jsonData.query.results.channel.item.condition.temp)
        $(".currentCondition").html(jsonData.query.results.channel.item.condition.text);
        console.log(jsonData.query.results.channel.item.condition.temp);
        $(".forecast").html(jsonData.query.results.channel.location.city);
        console.log(jsonData.query.results.channel.location.city);

        jsonData.query.results.channel.item.forecast.forEach(function(e, i, a) {
            $("#results").append("<div class=\"card text-white mx-auto\" style = \"width: auto; height: 0; align-items: center; display:inline-block; border: 0;\"><p class = \"card-title\"><p>" + e.day + "</p><img class=\"card-img-top-sm\" src =\"http://l.yimg.com/a/i/us/we/52/" + e.code + ".gif\"></p><p class=\"card-body\">" + e.high + "<span id=\"add_here\">&deg; /</span>" +  e.low + "<span id=\"add_here\">&deg;</span></p></div>");
        console.log(e.day, e.code, e.high, e.low);
        });
    });
}
