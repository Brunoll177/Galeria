const search = document.querySelector(".search")
const names = document.querySelectorAll(".image")
const noResults = document.querySelector(".nada")
search.addEventListener("input", function(e){
    let hasResults = false;
    const value = e.target.value
    names.forEach(name => {
        if(format(name.textContent).indexOf(format(value)) !== -1 ){
            name.style.display = "block"
             hasResults = true;
        }else{
            name.style.display = "none"
        }
    })
    console.log(hasResults)
    if(hasResults){
         noResults.style.display = "none"
    }else{
         noResults.style.display = "block"
    }
})
function format(v){
    return v.toLowerCase().trim()
}