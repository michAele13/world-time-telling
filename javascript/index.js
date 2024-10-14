function updateTime() {
let sanMarcosElement = document.querySelector("#san-marcos");
let sanMarcosDateElement = sanMarcosElement.querySelector(".date");
let sanMarcosTimeElement = sanMarcosElement.querySelector(".time");

let sanMarcosTime = moment().tz("America/Ojinaga");

sanMarcosDateElement.innerHTML = sanMarcosTime.format("MMMM Do YYYY");
sanMarcosTimeElement.innerHTML = sanMarcosTime.format("h:mm:ss [<small>]A[</small>]");


    let shanghaiElement = document.querySelector("#shanghai");
    let shanghaiDateElement = shanghaiElement.querySelector(".date");
    let shanghaiTimeElement = shanghaiElement.querySelector(".time");
    
    let shanghaiTime = moment().tz("Asia/Shanghai");
    
    shanghaiDateElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
    shanghaiTimeElement.innerHTML = shanghaiTime.format("h:mm:ss [<small>]A[</small>]");

}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
     <div class="city">
        <div>
        <h3>${cityName}</h3>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>  </div>
    </div>`;
}



updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);