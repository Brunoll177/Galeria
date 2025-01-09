const search = document.querySelector(".search")
const names = document.querySelectorAll(".image")
search.addEventListener("input", function(e){
    const value = e.target.value
    names.forEach(name => {
        if(format(name.textContent).indexOf(format(value)) !== -1 ){
            name.style.display = "block"
        }else{
            name.style.display = "none"
        }
    })
})
function format(v){
    return v.toLowerCase().trim()
}