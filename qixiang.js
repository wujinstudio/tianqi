$(function () {
    let weather="";
    $.ajax({
        url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
        dataType:"jsonp",
        success:function (res) {
            console.log(res);
            weather=res.data.weather;
            console.log(weather);
            myweather(weather);
        }
    })
    function myweather(obj) {
        $(".text").html(obj.city_name);
        $(".qu").html(obj.quality_level);
        $("h1").html(obj.current_temperature+"°");
        $("h2").html(obj.current_condition);
        $(".dat_low_temperature").html(obj.dat_low_temperature+"C°");
        $(".dat_high_temperature").html(obj.dat_high_temperature);
        $(".qing").html(obj.current_condition);
        $(".tyy").css("background-image",` url("img/${obj.dat_weather_icon_id}.png")`);
        $(".tomorrow_high_temperature").html(obj.tomorrow_high_temperature);
        $(".tomorrow_low_temperature").html(obj.tomorrow_low_temperature+"C°");
        $(".qzdy").html(obj.tomorrow_condition);
        $(".vl").css("background-image",` url("img/${obj.tomorrow_weather_icon_id}.png")`);
        obj.hourly_forecast.forEach(function (element) {
            let  str=`
        <li>
            <p class="time">${element.hour}:00</p>
                <div class="tu" style="background-image: url(img/${element.weather_icon_id}.png);background-position: center;">
                    <img src="" alt="">
                </div>
                <div class="ssd">${element.temperature}C°</div>
        </li>`
            $(".big .shijian").append(str);
        })
        obj.forecast_list.slice(0,6).forEach(function (value) {
            let date=`<li>
                <div class="tianqi">
                    昨天
                </div>
                <p class="riqi">${value.date.slice(5,7)}/${value.date.slice(9,11)}</p>
                <p class="zhuan">${value.condition}</p>
                <div class="tuu" style="background-image: url(img/${value.weather_icon_id}.png);background-position: center;">
                </div>
            </li>`
            let dates=`
<li>
                <div class="tuu1" style="background-image: url(img/${value.weather_icon_id}.png);background-position: center;">
                    <img src="" alt="">
                </div>
                <p class="zhuan1">${value.condition}</p>
                <div class="feng">
                    ${value.wind_direction}
                </div>
                <p class="su">${value.wind_level}级</p>
            </li>
            `
            $(".abc .shishi").append(date);
            $(".xx .fengx").append(dates);
            console.log();
        })

    }
})