const btn = document.querySelector(".dropdown-toggle");
const navigation= document.querySelector("header .navigation");

btn.addEventListener("click", () => {
    if(navigation.classList.contains("active")){
        navigation.classList.remove("active")
    } else {
        navigation.classList.add("active")
    }
})