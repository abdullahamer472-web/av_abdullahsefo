const themeButton = document.getElementById("themeBtn");

const currentTheme = localStorage.getItem("theme");

if(currentTheme === "dark"){

    document.body.classList.add("dark-mode");

    themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

themeButton.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }else{

        localStorage.setItem("theme","light");

        themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});

