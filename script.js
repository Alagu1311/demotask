let api=("https://anapioficeandfire.com/api/characters/583.")
console.log(api)
fetch(api)
function getdata(){
    fetch((api,{
        method:"GET"
    
    })).then((res)=>res.json())
    .then((data)=>console.log(data))
    data.forEach((element)=>{
        let obj={
            ...element,
            name:ele.name,
            culture:ele.culture,
            books:ele.books,
            url:ele.url,

        }
        newobj(obj)
    })
}
getdata()
function createobj(element){
    let newele=document.querySelector("#inhtml")
    newele.innerHTML+=`
    <div>Name:${element.name}</div>
    <div>culture:${element.culture}</div>
    <div>Books:${element.books}</div>
    <div>Url:${element.url}</div>`
}
createobj()