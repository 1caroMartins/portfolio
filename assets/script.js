//menu superior
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
            $('.scroll-up-whatsapp a').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
            $('.scroll-up-whatsapp a').removeClass("show");
        }
    });

    //owl carousel script
    $('.last').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
//slide up
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0})
});

//animação sidebar
document.querySelectorAll("#close-menu").forEach(function(element) {
    element.addEventListener("click", () =>{
        document.querySelector("body").classList.toggle("show-menu")
    })
})

//animação typed
var typed = new Typed(".typing", {
    strings: ["Analista de Dados", "Engenheiro de Produção"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

var typed = new Typed(".typing-2", {
    strings: ["Analista de Dados", "Engenheiro de Produção"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})


//Filtro de categoria
$(document).ready(function(){
    $(".filter .category").click(function(){
        $(this).addClass("active").siblings().removeClass("active")

        $(".itens").fadeOut()
        setTimeout(function(){
            $(".itens").fadeIn()
        }, 400)

        let value = $(this).attr("data-filter")

        setTimeout(function(){
            if(value === "all"){
                $(".itens .card").show("500")
            }else{
                $(".itens .card").not("." + value).hide("500")
                $(".itens .card").filter("." + value).show("500")
            }
        }, 200)
    })
})

//debounce
function debounce(fn, waitTime) {
	let timer = null
  
	return function() {
		clearTimeout(timer)
		timer = setTimeout(fn, waitTime)
	}
}

//animação scroll
const target = document.querySelectorAll("[data-anime]")

const animationClass = "animate"

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
        
    })
}

if(target.length) {
    window.addEventListener('scroll', debounce(function() {
        animeScroll()
    },10))
}

//Mensagem formulário
function message(){
    var Name = document.getElementsByName('name');
    var email = document.getElementsByName('email');
    var subject = document.getElementByName('_subject');
    var msg = document.getElementByName('message');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || email.value === '' || subject.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            subject.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }

    
}