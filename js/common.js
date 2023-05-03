// 스크롤 모션
const scrollElements = document.querySelectorAll(".scroll-enter");
function ScrollEnterMain(targetArray) {
    if(targetArray) {
        const elementInView = (el,dividend = 1) => {
            const elementTop = el.getBoundingClientRect().top;
            return(elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
        };
        // section enter 시
        const elementOutofView = (el) =>{
            const elementTop = el.getBoundingClientRect().top;
            return(elementTop > ( window.innerHeight || document.documentElement.clientHeight));
        };
        //section out 시
        const displayScrollElement = (element) => {
            element.classList.add("animated");
        };
        const hideScrollElement = (element) => {
            element.classList.remove("animated");
        };
        const handleScrollAnimation = () => {
            targetArray.forEach((el) => {
                if(elementInView(el, 1.25)) {
                    displayScrollElement(el);
                }else if(elementOutofView(el)) {
                    hideScrollElement(el);
                }
            });
        };
        window.addEventListener("scroll", () => {
            handleScrollAnimation();
        });

    }
   

}
ScrollEnterMain(scrollElements);
///// === 스크롤 모션
// 위 아래 구분을 위한 스크립트
let lastScrollTop = 0;
window.addEventListener('scroll',scrollEventManage);

function scrollEventManage(){
    const Yoffset = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector(".header");
    const keyvisual = document.querySelector(".key-visual");


    if (Yoffset > lastScrollTop){
        // downscroll code
        if(header){
            header.classList.remove('up', 'top')
            header.classList.add('down');
        }        
        
        // console.log('down');

    } else {
        // upscroll code
        // console.log('up');
        if(header){
            header.classList.remove('down', 'top');
            header.classList.add('up');
        } 
        // if(keyvisual){
        //     const keyviHeight = keyvisual.offsetHeight * 0.7;

        // }

    }
    if(document.documentElement.scrollTop == 0 ) {
        if(header){
            header.classList.remove('up', 'down')
            header.classList.add('top')
        }  
    }
    
    lastScrollTop = Yoffset <= 0 ? 0 : Yoffset;
    // 위 아래 구분을 위한 스크립트====================
}

function csBtnEvent () {
    const csBtnParent = document.querySelector('.fixed-cs');
    if(csBtnParent.classList.contains('open')){
        csBtnParent.classList.remove('open')
    }else {
        csBtnParent.classList.add('open')
    }
}
function guideBtnEvent (target) {
    if(target.classList.contains('on')){
        target.classList.remove('on')
    }else {
        target.classList.add('on')
    }
}


