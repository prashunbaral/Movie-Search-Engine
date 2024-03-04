if (navigator.onLine){
    form()
    getmovie()
}


async function getmovie(){
    
    var name = document.querySelector(".input").value || "Lucifer"
    var res = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=3aa6fbd5`)
    var data = await res.json()
        console.log(data);
        localStorage.setItem(data.Title,JSON.stringify(data))
     
if(data.Response === 'False'){
    document.querySelector(".poster").src = `error.png`
    
}
    
    document.querySelector(".poster").src = data.Poster;
    document.querySelector(".title").innerHTML = data.Title;
    document.querySelector(".year").innerHTML = data.Year;
    document.querySelector(".time").innerHTML = data.Runtime;
    document.querySelector(".plot").innerHTML = data.Plot;
    document.querySelector(".type").innerHTML = data.Type;
    document.querySelector(".country").innerHTML = data.Country;
    document.querySelector(".genre").innerHTML = data.Genre;
    document.querySelector(".actors").innerHTML = data.Actors;
    document.querySelector(".release").innerHTML = data.Released;
    document.querySelector(".director").innerHTML = data.Director;
    document.querySelector(".rated").innerHTML = data.Rated;
    document.querySelector(".rate").innerHTML = data.imdbRating;
    document.querySelector(".language").innerHTML = data.Language;
}
var x = document.querySelector(".welcome")
var btn=document.querySelector(".btn")
var movie=document.querySelector(".input")
var netflix=document.querySelector(".netflix")


document.querySelector(".input").addEventListener("keyup",(Event)=>{
    if(Event.key === "Enter"){
      if(navigator.onLine){
        if(document.querySelector(".input").value.length===0){
            alert("Please enter a movie name!");
        }
        else{
        x.style.display = "none"
        getmovie()
      }
      
    }else{
        getlocal(movie.value)
        console.log('hello');
    }
        
    }
})

btn.addEventListener("click",()=>{
    if(movie.value.length===0){
        alert("Please enter a movie name!");
    }
    else{
        x.style.display="none";
        getmovie(movie.value);
    }
})

var y=document.querySelector(".login-form")
y.style.display = "none"


function  getlocal(movie){
    const data = JSON.parse(localStorage.getItem(movie));
  if(data){
    console.log("FOUND");
    document.querySelector(".poster").src = data.Poster;
    document.querySelector(".title").innerHTML = data.Title;
    document.querySelector(".year").innerHTML = data.Year;
    document.querySelector(".time").innerHTML = data.Runtime;
    document.querySelector(".plot").innerHTML = data.Plot;
    document.querySelector(".type").innerHTML = data.Type;
    document.querySelector(".country").innerHTML = data.Country;
    document.querySelector(".genre").innerHTML = data.Genre;
    document.querySelector(".actors").innerHTML = data.Actors;
    document.querySelector(".release").innerHTML = data.Released;
    document.querySelector(".director").innerHTML = data.Director;
    document.querySelector(".rated").innerHTML = data.Rated;
    document.querySelector(".rate").innerHTML = data.imdbRating;
    document.querySelector(".language").innerHTML = data.Language;
  } else{
    console.log("not found in localstorage")
  }
}
