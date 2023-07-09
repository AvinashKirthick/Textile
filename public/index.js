

// alert("Hello");
let Preview = document.querySelector('.preview');
let PopUpSmall = document.querySelectorAll('.pop');
let Preview2 = document.querySelector('.preview-2');
let PopUpLarge = document.querySelectorAll('.pop-lg');
let hero = document.querySelector('hero-section');
let button = document.querySelectorAll('button-1');
let link = document.querySelectorAll(".link-sidebar");

document.querySelectorAll('.button-1').forEach(button =>{
    button.onclick = () =>{
        Preview.style.display = 'flex'
        let name = button.getAttribute('data-name');
        
        PopUpSmall.forEach(pop =>{
        let target = pop.getAttribute('data-target');
        if(name == target){
            pop.classList.add('active');
            document.body.style.overflowY = "hidden";
            document.body.style.overflowY = "hidden";
        }
        });
    }
});

console.log(PopUpSmall);
PopUpSmall.forEach(babu=>{
    console.log(babu.querySelector('.fa-times'));
    babu.querySelector('.fa-times').onclick=()=>{
        babu.classList.remove('active');
        Preview.style.display = 'none'
        document.body.style.overflowY = "auto";
        document.body.style.overflowY = "auto";
    }
});


document.querySelectorAll('.clickable-img').forEach(img =>{
    img.onclick = () =>{
        Preview.style.display = 'flex'
        let name = img.getAttribute('data-name1');
        
        PopUpLarge.forEach(poplg =>{
        let target = poplg.getAttribute('data-target1');
        console.log(target);
        if(name == target){
            PopUpSmall.forEach(popsm =>{
                Preview2.style.display = 'flex';
                popsm.classList.remove('active');
            });
            poplg.classList.add('active');
            // let makingActive = document.querySelector('.product');
            // makingActive.classList.add('heading-active');
            // let active = document.querySelector('.heading-active').innerHTML;
            // console.log(active);
            // document.querySelector('.none').innerHTML = active;
            // let product = document.querySelector('.none');
            console.log(product);
            document.body.style.overflowY = "hidden";
            document.body.style.overflowY = "hidden";
        }
        });
    }
});

PopUpLarge.forEach(pop=>{
    pop.querySelector('.fa-times').onclick=()=>{
        pop.classList.remove('active');
        Preview2.style.display = 'none';
        Preview.style.display = 'none';
        document.body.style.overflowY = "auto";
        document.body.style.overflowY = "auto";
    }
});

PopUpLarge.forEach(pop=>{
    pop.querySelector('.button-1').onclick=()=>{
       alert("Hey! Thanks for Ordering. Our team will contact you soon");
       location = window.location;
    }
});

document.querySelector("#btn").onclick=()=>{
    document.querySelector(".check").checked = true;
    document.body.style.overflowY = "hidden";
}

document.querySelector(".ham-cross").onclick=()=>{
    document.querySelector(".check").checked = false;
    document.body.style.overflowY = "auto";
}

link.forEach(link=>{
    link.onclick=()=>{
        document.querySelector(".check").checked = false;
        document.body.style.overflowY = "auto";
    }
});


const slides=document.querySelector(".slider-testimonials").children;
const indicatorImages=document.querySelector(".slider-indicator").children;

 for(let i=0; i<indicatorImages.length; i++){
     indicatorImages[i].addEventListener("click",function(){
      
        for(let j=0; j<indicatorImages.length; j++){
          indicatorImages[j].classList.remove("active");
        }
         this.classList.add("active");
         const id=this.getAttribute("data-id");
        for(let j=0; j<slides.length; j++){
            slides[j].classList.remove("active");
        }

         slides[id].classList.add("active");

     })
 }
