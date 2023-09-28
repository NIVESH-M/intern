let tabs=document.querySelectorAll(".tabs h3");
let tabContents=document.querySelectorAll(".tab-content div");
const parentContainer=document.querySelector('.read-more-container');
tabs.forEach((day, index)=>{
    day.addEventListener("click",()=>{
        tabContents.forEach((content)=>{
            content.classList.remove("active");
        });
        tabs.forEach((day)=>{
            day.classList.remove("active");
        });
        tabContents[index].classList.add("active");
        tabs[index].classList.add("active");
    });
});

function val1(){
    if(true){
        window.location.href="day1.html"
    }
}
function val2(){
    if(true){
        window.location.href="day2.html"
    }
}

function val3(){
    if(true){
        window.location.href="day3.html"
    }
}

function val4(){
    if(true){
        window.location.href="day4.html"
    }
}

function val5(){
    if(true){
        window.location.href="day5.html"
    }
}

function val6(){
    if(true){
        window.location.href="day6.html"
    }
}