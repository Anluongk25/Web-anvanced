fetch("https://dummyjson.com/users")
.then(function(response){
    return response.json()

})
.then(function(result){
    console.log(result)
result.users.forEach(function(item,index){
const table = document.createElement('table')
const firstName= document.createElement("h4")
const lastName= document.createElement("h4")
const age= document.createElement("h4")
const email= document.createElement("h4")



})
})
.catch(function(error){
    console.log(error)})