
const temp = document.getElementById("tempo");
const temp_form = document.getElementById("temp_form");
const city_name = document.getElementById("city_name");
const da = document.getElementById("day");
const today = document.getElementById("today_date");
const tempStatus = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");

temp_form.addEventListener("submit",async function(event){
    event.preventDefault()
    
    var cityval = await document.getElementById("cityName").value;
    console.log(cityval);
    if(cityval=="")
    {   
        city_name.innerText = "please enter the city name";
        datahide.classList.add("data_hide");
    }
    else{
        console.log("inside else");
        try{
            console.log("inside try");
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=fab06712903012737c54286f9cef692b`;

            const response = await fetch(url);
            const dataa = await response.json();
            city_name.innerText = `${dataa.name} , ${dataa.sys.country}`;
            let f=dataa.main.temp;
            let d = f-273.15;
            let deg = Math.round(d);
            temp.innerHTML = `${deg}`;
            
            da.innerText  = "thus";
            let status = dataa.weather[0].main;
           
            if(status=="Clouds"){
                tempStatus.innerHTML = await '<i class="fa-solid fa-4x fa-cloud style="background-color:#b1b2b4;"></i>';
            }
            else if(status=="Clear"){
                tempStatus.innerHTML = await '<i class="fa-solid fa-4x fa-sun style="color:#eccc68;""></i>';
            }
            else if(status=="Rain"){
                tempStatus.innerHTML = await '<i class="fa-solid fa-4x fa-cloud-drizzle style="color:#a4b0be;"></i>';
            }
            const date = await new Date();
            console.log(date.getDay());

            let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let day = days[date.getDay()];
            let dat = date.getDate();
            let month = months[date.getMonth()];
            da.innerText = `${day}`;
            today.innerText = `${dat} ${month}`;
               
            
            
            datahide.classList.remove("data_hide");
                
        }catch{
            console.log("inside catch");
            city_name.innerText = "enter valid city name";
            datahide.classList.add("data_hide");
        }

        cityval="";
    }
})









/*const temp_form = document.getElementsByClassName('temp_form');
let cityval = document.getElementById("cityName").value;
const city_name = document.getElementById("city_name");

console.log(cityval);
const getinfo = (event) => {
     //event.preventDefault();
   
    if(cityval!=="")
    {   
        city_name.innerText = "please enter the city name";
    }
    else{
        
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=pune&appid=fab06712903012737c54286f9cef692b`;

            const response =  fetch(url);
            const data =  response.json();
            console.log(data);
           
            
            
        }catch{
            city_name.innerText = "enter valid city name";
        }

        cityval="";
    }

    
}
temp_form.addEventListener("submit",getinfo());*/