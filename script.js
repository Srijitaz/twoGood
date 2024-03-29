function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    
      // for tablet smooth
      tablet: { smooth: true },
    
      // for mobile
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
    
      // follwoing line is not required to work pinning on touch screen
    
        pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update()); 
    ScrollTrigger.refresh();
}
locomotiveAnimation();

function navAnimation(){
    gsap.to("#nav-part1 svg",{
        transform: "translateY(-100%)",
        scrollTrigger:{
            triggrt :"#firstpage",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: true
        }
    } )
    
    gsap.to("#nav-part2 #links",{
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger:{
            triggrt :"#firstpage",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: true
        }
    } )
}

navAnimation();
function videoViewAnimation(){
    gsap.registerPlugin(CSSPlugin);
    var videoView = document.querySelector("#video-box");
    var playBtn = document.querySelector("#play");
    videoView.addEventListener('mouseenter', function(){
        gsap.to(playBtn,{
        scale: 1,
        opacity: 1,
    });
});
    videoView.addEventListener("mouseleave",function(){
        gsap.to(playBtn,{
        scale: 0,
        opacity: 0,
    });
});
    videoView.addEventListener("mousemove",function(dets){
        gsap.to(playBtn,{
        left: dets.x - 70,
        top: dets.y - 80,
    });
});
}
videoViewAnimation();

function loadingAniamtion(){
    gsap.registerPlugin(CSSPlugin);

    gsap.from("#firstPage h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.2
    });

    gsap.from("#firstPage #video-box", {
       scale : 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.3,
    });
}
loadingAniamtion();
gsap.registerPlugin(CSSPlugin);

function cursorAnimation(){
    gsap.registerPlugin(CSSPlugin);
    document.addEventListener("mousemove" , function(dets){
        gsap.to("#cursor" ,{
        left: dets.x,
        top: dets.y
    });
});
document.querySelectorAll(".sub").forEach(function(part){
    part.addEventListener("mouseenter",function(){
        gsap.to("#cursor",{ 
            transform: "translate(-50% ,-50%) scale(0)",
        });
    });
    part.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{ 
            transform: "translate(-50% ,-50%) scale(1)",
        });
    });
    });
}
cursorAnimation();



