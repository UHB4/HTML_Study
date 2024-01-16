$(document).ready(function() {
    let currentIndex1 = 0;
    let currentIndex2 = 0;
    let currentIndex3 = 0;
    let currentIndex4 = 0;



    function showSlide(index, slider) {
        $(slider).find(".slide").removeClass("show");
        $(slider).find(".slide").eq(index).addClass("show");
    }

    function nextSlide(index, slider) {
        const currentIndex = index;
        currentIndex1 = (currentIndex + 1) % $(".slider .slide").length;
        showSlide(currentIndex, slider);
    }

    setInterval(function() {
        nextSlide(currentIndex1, ".slider1");
        currentIndex2 = (currentIndex1 + 1) % $(".slider1 .slide").length;
    }, 2000);

    setInterval(function() {
        nextSlide(currentIndex2, ".slider2");
        currentIndex3 = (currentIndex2 + 1) % $(".slider2 .slide").length;
    }, 2000);

    setInterval(function() {
        nextSlide(currentIndex3, ".slider3");
        currentIndex4 = (currentIndex3 + 1) % $(".slider3 .slide").length;
    }, 2000);
    setInterval(function() {
        nextSlide(currentIndex3, ".slider4");
        currentIndex4 = (currentIndex3 + 1) % $(".slider4 .slide").length;
    }, 2000);
    setInterval(function() {
        nextSlide(currentIndex3, ".slider5");
        currentIndex4 = (currentIndex3 + 1) % $(".slider5 .slide").length;
    }, 2000);
    setInterval(function() {
        nextSlide(currentIndex3, ".slider6");
        currentIndex4 = (currentIndex3 + 1) % $(".slider6 .slide").length;
    }, 2000);
    setInterval(function() {
        nextSlide(currentIndex3, ".slider7");
        currentIndex4 = (currentIndex3 + 1) % $(".slider7 .slide").length;
    }, 2000);
    setInterval(function() {
        nextSlide(currentIndex3, ".slider8");
        currentIndex4 = (currentIndex3 + 1) % $(".slider8 .slide").length;
    }, 2000);
    setInterval(function() {
        nextSlide(currentIndex3, ".slider9");
        currentIndex4 = (currentIndex3 + 1) % $(".slider8 .slide").length;
    }, 2000);  setInterval(function() {
        nextSlide(currentIndex3, ".slider10");
        currentIndex4 = (currentIndex3 + 1) % $(".slider8 .slide").length;
    }, 2000);  setInterval(function() {
        nextSlide(currentIndex3, ".slider11");
        currentIndex4 = (currentIndex3 + 1) % $(".slider8 .slide").length;
    }, 2000);  setInterval(function() {
        nextSlide(currentIndex3, ".slider12");
        currentIndex4 = (currentIndex3 + 1) % $(".slider8 .slide").length;
    }, 2000);  setInterval(function() {
        nextSlide(currentIndex3, ".slider13");
        currentIndex4 = (currentIndex3 + 1) % $(".slider8 .slide").length;
    }, 2000);  setInterval(function() {
        nextSlide(currentIndex3, ".slider14");
        currentIndex4 = (currentIndex3 + 1) % $(".slider8 .slide").length;
    }, 2000);  setInterval(function() {
        nextSlide(currentIndex3, ".slider15");
        currentIndex4 = (currentIndex3 + 1) % $(".slider8 .slide").length;
    }, 2000);  setInterval(function() {
        nextSlide(currentIndex3, ".slider16");
        currentIndex4 = (currentIndex3 + 1) % $(".slider8 .slide").length;
    }, 2000);  setInterval(function() {
        nextSlide(currentIndex3, ".slider17");
        currentIndex4 = (currentIndex3 + 1) % $(".slider8 .slide").length;
    },
        2000);
    // setInterval(function() {
    //     nextSlide(currentIndex3, ".slider18");
    //     currentIndex4 = (currentIndex3 + 1) % $(".slider8 .slide").length;
    // }, 2000);  setInterval(function() {
    //     nextSlide(currentIndex3, ".slider19");
    //     currentIndex4 = (currentIndex3 + 1) % $(".slider8 .slide").length;
    // }, 2000);  setInterval(function() {
    //     nextSlide(currentIndex3, ".slider20");
    //     currentIndex4 = (currentIndex3 + 1) % $(".slider8 .slide").length;
    // }, 2000);
    $(document).ready(function () {
        var header = $("header");
        var menu = $(".cbp-hrmenu");
        var sideMenu = $("#product_side_menu");
        var footerMenu = $(".footer_fix_menu");
        // var menuHeight = menu.outerHeight();


        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                header.css("top", "-100px");
                menu.css("top", "0");
                // sideMenu.css("top", "10")
                footerMenu.css("right","10px")}
                // }else if (scroll >=200){
            //     footerMenu.css("right","60px")}

            else {
                header.css("top", "0");
                menu.css("top", "130px");
                // sideMenu.css("top","10 px");
                footerMenu.css("right","-100px");
            }
        });
    });
    //
    $(document).ready(function () {
        var sideMenu = $("#product_side_menu");
        var scrollTrigger = 1500; // 스크롤 위치가 얼마나 내려가면 특정 동작을 할지 결정

        $(window).scroll(function () {
            var scrollPosition = $(window).scrollTop();

            if (scrollPosition >= scrollTrigger) {
                sideMenu.css({
                    'position': 'absolute',
                    'top': scrollTrigger + 'px'
                });
            } else {
                sideMenu.css({
                    'position': 'fixed',
                    'top': '280px'
                });
            }
        });
    });

    document.getElementById('scrollToTop').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });





});