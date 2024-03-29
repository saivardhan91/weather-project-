let img1=document.querySelector(".weather-details img");
let btn=document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let search=document.querySelector("input");

    let response= await fetch(`http://api.weatherapi.com/v1/current.json?key=d9909d0a6cd14085822141851240302&q=${search.value}&aqi=no`);
   
    let data=await response.json();
    console.log(data);
    let humidity=document.querySelector(".humidity h1");
    humidity.innerHTML=`${data.current.humidity}%`;
    let wind=document.querySelector(".wind h1");
    wind.innerHTML=`${Math.round(data.current.wind_kph)}km/h`;
    let city =document.querySelector(".weather-details .city-name");
    city.innerHTML=`${search.value.toUpperCase()}`;
    let t=Math.round(data.current.temp_c);
 let temp =document.querySelector(".temp");
 temp.innerHTML=`${t}°C`;
    if(data.current.condition.text== "Smoke")
    {
        
        img1.src= "smoke.jpg";
    }
    else if(data.current.condition.text == "Overcast")
    {
        img1.src= "overcast.jpg";
    }
    else if(data.current.condition.text == "Partly cloudy")
    {
        img1.src= "drizzle.jpg";
    }
    else if(data.current.condition.text=="Snow")
    {
        img1.src= "snow.jpg";
    }
    else if(data.current.condition.text== "Rain")
    {
        img1.src= "rain.jpg";
    
    }
    else if(data.current.condition.text== "Drizzle")
    {
        img1.src= "rain.jpg";
    
    }
    else if(data.current.condition.text == "Haze")
    {
        img1.src= "haze.jpg";
    
    }
    else if(data.current.condition.text== "Mist")
    {
        img1.src= "mist.jpg";
    
    }
    else 
    {
        
        img1.src= "clear.jpg";
    }
});