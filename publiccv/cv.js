$(document).ready(function(){
    $('#profile__ripple').ripples({
        resolution:512,
        dropRadius:10
    })

    const bars = document.querySelectorAll('.progress__bar');
    bars.forEach((curbar)=>{
        let percentage = curbar.dataset.percent;
        const tooltip = curbar.children[0];
        tooltip.innerHTML = `${percentage}%`;
        curbar.style.width = `${percentage}%`;
    })

    ///// counter

    const countersel = document.querySelectorAll('.counter');
    function runcounter() {
        countersel.forEach(counter => {
            let targetcount = +counter.dataset.count;
            let step = targetcount / 50;
            let countit = function(){
                let displayedcount = +counter.innerText;
                if(displayedcount < targetcount){
                    counter.innerText = Math.ceil(displayedcount+step);
                    setTimeout(countit,1); 
                }else{
                    counter.innerText = targetcount+'+';
                }
            }
            countit();
        })
    }

   

    let counterSection = document.querySelector('.counter__secction');

    let options = {
        rootMargin : '0px 0px -200px 0px'
    }

    let done = 0; 

    const sectionObserver = new IntersectionObserver(function(entries){

        if(entries[0].isIntersecting && done !== 1) {
            done = 1;
            runcounter();
        }
    })

    sectionObserver.observe(counterSection);


    //// image filter
    // let portfoliowrapperel = $('.protfolio__wrapper');
    // portfoliowrapperel.isotope({
    //     filter : '*',
    //     layoutMode : 'masonry',
    //     animationOptions : {
    //         duration: 750,
    //         easing: 'linear'
    //     }
    // });
})