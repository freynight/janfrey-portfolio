const message = document.getElementById("message")
const Buttonone = document.getElementById("Btnone")
const Buttontwo = document.getElementById("Btntwo")

const profile = document.getElementById("profile");
const grades = document.getElementById("grades");
const schedules = document.getElementById("schedules");


Buttonone.addEventListener("click", function(){

    Buttonone.style.backgroundColor = "royalblue"
    Buttontwo.style.backgroundColor = "royalblue"

    message.innerHTML = "Starting....";
    profile.innerHTML = "Loading Assets....";
    grades.innerHTML = "Loading Resources....";
    schedules.innerHTML = "Please Wait....";

    message.style.color = "green"
    profile.style.color = "blue"
    grades.style.color = "Violet"
    schedules.style.color = "red"

    const profilePromise = new Promise(function(resolve){

        setTimeout(function(){
            profile.innerHTML = "Assets: Loaded";

            resolve();
        },1000)
    })
    
    const gradesPromise = new Promise(function(resolve){

        setTimeout(function(){
            grades.innerHTML = "Resources: Loaded";

            resolve();
        },2000)
    })

    const schedulesPromise = new Promise(function(resolve){

        setTimeout(function(){
            schedules.innerHTML = "Loaded";

            resolve();
        },3000)
    })
    
    Promise.all([profilePromise, gradesPromise, schedulesPromise])

    .then(function(){
        message.innerHTML = "DASHBOARD READY!!!"
    },4000)
    
})

Buttontwo.addEventListener("click", function(){

    message.style.color = "black"
    profile.style.color = "black"
    grades.style.color = "black"
    schedules.style.color = "black"

    message.innerHTML = "Loading DashBoard....";
    profile.innerHTML = "Profile: Waiting....";
    grades.innerHTML = "Grades: Waiting....";
    schedules.innerHTML = "Schedules: Waiting....";

    Buttonone.style.backgroundColor = "pink"
    Buttontwo.style.backgroundColor = "lightgreen"

    const profilePromise = new Promise(function(resolve){

        setTimeout(function(){
            profile.innerHTML = "Profile: Loaded";

            resolve();
        },1000)
    })
    
    const gradesPromise = new Promise(function(resolve){

        setTimeout(function(){
            grades.innerHTML = "Grades: Loaded";

            resolve();
        },2000)
    })

    const schedulesPromise = new Promise(function(resolve){

        setTimeout(function(){
            schedules.innerHTML = "Schedules: Loaded";

            resolve();
        },3000)
    })
    
    Promise.all([profilePromise, gradesPromise, schedulesPromise])

    .then(function(){
        message.innerHTML = "DASHBOARD READY!!!"
    },4000)
    
})