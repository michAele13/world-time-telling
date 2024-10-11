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



updateTime();
setInterval(updateTime, 1000);