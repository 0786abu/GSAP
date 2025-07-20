document.addEventListener("DOMContentLoaded",()=>{
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#home",
            start:"50% 50%",
            end:"+=600",
            scrub:1,
            pin:true
        }
    })
    tl.to(".img-container",{
        width:"100%",
    });

    gsap.timeline().from(".hero-head",{
        x:-150,
        opacity:0,
        filter:"blur(2px)",
        duration:2
    }).from(".hero-para",{
        x:-150,
        opacity:0,
        filter:"blur(2px)",
        duration:2
    },"-=1.5").from(".hero-foot",{
        x:-150,
        opacity:0,
        filter:"blur(2px)",
        duration:2
    },"-=1.5");

    gsap.from("#main",{
        x:150,
        opacity:0,
        duration:2
    });

    const scroll = gsap.timeline({
        scrollTrigger:{
            trigger:"#about",
            start:"0% 70%",
            end:"+=400",
            scrub:1
        }
    });
    scroll.from(".left",{
        x:400,
    },"same");
    scroll.from(".right",{
        x:-400,
    },"same");

    // header
    gsap.from("header",{
        opacity:0,
        filter:"blur(4px)",
        duration:2
    });

    // services
    const services = gsap.timeline({
        scrollTrigger:{
            trigger:"#services",
            start:"0% 50%",
            end:"+=200",
            scrub:1
        }
    });
    services.from(".services div",{
        opacity:0.5,
        filter:"blured(2px)",
        duration:2,
        stagger:{
            grid:[3,1],
            start:"center",
            axis:"y",
            amount:0.4
        }
    });

    // skills
    const skills = gsap.timeline({
        scrollTrigger:{
            trigger:"#skills",
            start:"0% 75%",
            end:"+=300",
            scrub:1
        }
    });
    skills.from(".skills span",{
        opacity:0.5,
        filter:"blur(2px)",
        duration:3,
        stagger:{
            grid:[5,1],
            start:"center",
            amount:0.4
        }
    })
});
