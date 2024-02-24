const changeTheme = ()=>{
    if(localStorage.getItem("theme") === "corporate"){
        localStorage.setItem("theme", "night");
    }else{
        localStorage.setItem("theme", "corporate");
    }
} 