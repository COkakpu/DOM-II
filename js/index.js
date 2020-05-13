// Your code goes here
//* [ ] `mouseover`
//	* [ ] `keydown`
//	* [ ] `wheel`
	// * [ ] `drag / drop`
	// * [ ] `load`
	// * [ ] `focus`
	// * [ ] `resize`
	// * [ ] `scroll`
	// * [ ] `select`
    // * [ ] `dblclick`
    
    let mainNav = document.querySelector('.main-navigation');
    mainNav.addEventListener('mouseover', function (){
        mainNav.style.color = 'green';
    })
    const contHome = document.querySelectorAll("p");
    contHome[0].addEventListener('dblclick', ()=>{
        contHome[1].style.color = 'purple';
    })
   const contSect = document.querySelector(".content-section");
    const imgCont = document.querySelector(".img-content");
    const invCont = document.querySelector('.inverse-content');
    const contDes = document.querySelector(".content-destination");
    const imgFluid = document.querySelector('.img-fluid rounded');
    const contPic = document.querySelector(".content-pick");
    const destiny = document.querySelector(".destination");
    const foot = document.querySelector('.footer');
    let myToo = document.querySelector('body');
    
    // let myBody = document.querySelector('body');
    // myBody.style.backgroundColor = 'orange';
    // let myNav = document.querySelector('.main-navigation');
    // myNav.style.color = 'purple';