//get current date
var m_names = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var d_names = new Array("", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
var fullDate = new Date();
$("#time").append(d_names[fullDate.getDay()] + ", " + m_names[fullDate.getMonth()] + " " + fullDate.getDate());


//get current data: temp, icon index from API
$.ajax({
    type: "POST",
    dataType: "jsonp",
    url: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk',
    timeout: 25000,
    success: function (data, status) {
        var temp = Math.round(data.main.temp - 273.15);
        $("#number").append(temp + "° ");

        var icon = data.weather[0].icon.substring(0, 2);
        $("#wicon").attr("src", "images/" + icon + ".png");
    },
    error: function () {

    }
});

$.ajax({
    type: "POST",
    dataType: "jsonp",
    url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=London,uk',
    timeout: 25000,
    success: function (data, status) {

        //set tomorrow index
        d_names = new Array("", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun");

        var fullDate = new Date();
        var day = fullDate.getDay();
        var ind = 0;
        for (var i = 0; i < 7;i++)
        {
            var date = new Date(data.list[i].dt * 1000);
            var daytmp = date.getDay();
            if (daytmp == day)
            {
                ind = i+1;
                break;
            }
                
        }
        var daytemp = Math.round(data.list[ind].temp.day - 273.15);
        $("#lday").append(daytemp + "° ");
        var nighttemp = Math.round(data.list[ind].temp.night - 273.15);
        $("#lnight").append(nighttemp + "° ");
        var date = new Date(data.list[ind].dt * 1000);
        var i = date.getDay();
        $("#ldate").append(d_names[i]);
        var icon = data.list[ind].weather[0].icon.substring(0, 2);
        $("#licon").attr("src", "images/" + icon + ".png");

        ind = checkDay(ind);

        date = new Date(data.list[ind].dt * 1000);
         i = date.getDay();
         $("#cdate").append(d_names[i]);
         icon = data.list[ind].weather[0].icon.substring(0, 2);
        
         daytemp = Math.round(data.list[ind].temp.day - 273.15);
         $("#cday").append(daytemp + "° " );
         nighttemp = Math.round(data.list[ind].temp.night - 273.15);
         $("#cnight").append(nighttemp + "° ");
         $("#cicon").attr("src", "images/" + icon + ".png");

         ind = checkDay(ind);

        date = new Date(data.list[ind].dt * 1000);
         i = date.getDay();
         $("#rdate").append(d_names[i]);
         icon = data.list[ind].weather[0].icon.substring(0, 2);
         
         daytemp = Math.round(data.list[ind].temp.day - 273.15);
         $("#rday").append(daytemp + "° ");
         nighttemp = Math.round(data.list[ind].temp.night - 273.15);
         $("#rnight").append(nighttemp + "° ");
         $("#ricon").attr("src", "images/" + icon + ".png");

    },
    error: function () {

    }
});
function checkDay(ind)
{
    if (ind == 7) {
        ind = 1;
    }
    else {
        ind = ind+1;
    }
    return ind;
}



