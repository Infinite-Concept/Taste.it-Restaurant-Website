// Home carousel

$('.home-carousel').owlCarousel(
    {
        loop: true,
        margin: 0,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'fadeOut',
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    }
)

// Navbar
window.addEventListener('scroll', function(){
    let navbar = this.document.getElementById('navbar');
    // toggles fixed class in navbar on scroll
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})

// Nav Buttons

let menuBtn = document.querySelector('.menu-btn');
let searchBtn = document.querySelector('.searchbtn');
let cartBtn = document.querySelector('.cartbtn');
let darkBtn = document.querySelector('.darkbtn');
let signImg = document.getElementById('signImg');

menuBtn.onclick = function(){
    // toggles active Class In Nav items On Click
    document.getElementById("nav-items").classList.toggle('active')

    // changes icon on click

    if(document.getElementById("nav-items").classList.contains('active')){
        menuBtn.classList.remove("bx-menu")
        menuBtn.classList.add("bx-x")
    }else{
        menuBtn.classList.remove("bx-x")
        menuBtn.classList.add("bx-menu")
    }
}

searchBtn.onclick = function(){
    // toggles active Class In Search Form On Click
    document.getElementById("search-form").classList.toggle('active')

    // changes icon on click

    if(document.getElementById("search-form").classList.contains('active')){
        searchBtn.classList.remove("bx-search-alt-2")
        searchBtn.classList.add("bx-x")
    }else{
        searchBtn.classList.remove("bx-x")
        searchBtn.classList.add("bx-search-alt-2")
    }
}

cartBtn.onclick = function(){
    // toggles active Class In Search Form On Click
    document.getElementById("cart").classList.toggle('active')

    // changes icon on click

    if(document.getElementById("cart").classList.contains('active')){
        cartBtn.classList.remove("bx-cart")
        cartBtn.classList.add("bx-x")
    }else{
        cartBtn.classList.remove("bx-x")
        cartBtn.classList.add("bx-cart")
    }
}

darkBtn.onclick = function(){
    // toggles dark mode class to body On Click
    document.body.classList.toggle('dark-mode')

    // if body contains dark mode class

    if(document.body.classList.contains('dark-mode')){

        // changes dark mode button icon to sun
        darkBtn.classList.remove("bx-moon")
        darkBtn.classList.add("bx-sun")

        // changes Sign img for Dark bacground
        signImg.src = 'Images/sign/sign-dark.png'
    }
        // if body does not contains dark mode class
    else{
        // changes dark mode button icon to moon
        darkBtn.classList.remove("bx-sun")
        darkBtn.classList.add("bx-moon")

        // changes Sign img for light bacground
        signImg.src = 'Images/sign/sign-light.png'
    }
}

// Menu section
let menuTabs = document.querySelector('.menu-tabs')
menuTabs.addEventListener('click', function(e){
    
    //if clicked Tab does not contains active class
    if(e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')){

        // gets data attribute
        const target = e.target.getAttribute('data-target')

        // removes Active class from active Tab
        menuTabs.querySelector('.active').classList.remove('active');

        //Add active class from clicked tab
        e.target.classList.add('active')

        let menuSection = document.querySelector('.menu-section');

        //Removes show class from active  tab content 
        menuSection.querySelector(".menu-tab-content.show").classList.remove("show");

        //Add show class to clicked tab content
        menuSection.querySelector(target).classList.add("show");
    }

    // if clicked Tab contains active class
    else{
        return // return Nothing
    }
})

// events carousel
$('.events-carousel').owlCarousel(
    {
        loop: true,
        margin: 30,
        dots: true,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            750:{
                items:2
            },
            1000:{
                items:2
            }
        }
    }
)

// team carousel
$('.team-carousel').owlCarousel(
    {
        loop: true,
        margin: 20,
        dots: true,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    }
)

// reviews carousel
$('.review-carousel').owlCarousel(
    {
        loop: true,
        margin: 10,
        dots: false,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    }
)

// blogs carousel
$('.blog-carousel').owlCarousel(
    {
        loop: true,
        margin: 5,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    }
)