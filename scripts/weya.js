!function(i) {
    i(window).load((function() {
        i(".load").fadeOut(500)
    }
    )),
    i(window).on("resize load", (function() {
        var e, n;
        e = i(".sub-menu li").length,
        n = i(window).width() / e,
        i(".sub-menu li").css("width", n),
        i(window).width() < 3e3 && 0 == i("#mobile-btn").length && (0 === i("#mobile-btn").length && i("body").append('<div id="mobile-btn"><div class="toggle-box"><span></span></div></div><div class="accordion-nav mobile-menu" id="mobile"></div><div class="mobile-bg"></div>'),
        i(".accordion-nav dd").hide(),
        i.get(url, (function(e) {
            i("#mobile").append(e)
        }
        )),
        i("#mobile-btn").click((function() {
            i(".menu a").on("click", (function(e) {
                var n = i(this).attr("href").split("#")[1];
                if (n.length > 0) {
                    var o = i("#" + n);
                    o.length > 0 && (e.preventDefault(),
                    i("html,body").animate({
                        scrollTop: o.offset().top
                    }, "slow"))
                }
            }
            )),
            i(".mobile-bg").hide(),
            i(".mobile-menu").hasClass("btn-open") ? (i(".mobile-menu").removeClass("btn-open"),
            i("#mobile-btn").removeClass("active")) : (i(".mobile-menu").addClass("btn-open"),
            i("#mobile-btn").addClass("active"),
            i(".mobile-bg").fadeIn())
        }
        )),
        i(".mobile-bg").click((function() {
            i(".mobile-bg").hide(),
            i(".mobile-menu").removeClass("btn-open"),
            i("#mobile-btn").removeClass("active")
        }
        )))
    }
    )),
    i((function() {
        (new WOW).init(),
        i(".mobile-bg").click((function() {
            i(".mobile-menu").animate({
                right: -300
            }, 300).removeClass("btn-open"),
            i("#mobile-btn").addClass("word"),
            i(this).fadeOut()
        }
        )),
        i(".accordion-nav dd").hide(),
        i(".accordion-nav .active").next("dd").show(),
        i("body").on("click", ".accordion-nav dt", (function() {
            i(this).next("dd").length && (i(this).next("dd").slideToggle("500").siblings("dd:visible").slideUp("500"),
            i(this).toggleClass("active"),
            i(this).siblings("dt").removeClass("active"))
        }
        )),
        i(".lang-open").hide(),
        i(".langs a").click((function() {
            i(this).next("div").slideToggle("slow")
        }
        )),
        i("#top").hide().click((function() {
            return i("body,html").animate({
                scrollTop: 0
            }, 800),
            !1
        }
        )),
        i(window).scroll((function() {
            i(this).scrollTop() > 10 ? i("#top").fadeIn() : i("#top").fadeOut()
        }
        )),
        i(".lazy").lazyload({
            effect: "fadeIn",
            threshold: 400
        }),
        i(window).bind("scroll", (function() {
            var e;
            e = i(window).scrollTop(),
            i(".pa-layer1").css("margin-top", "-" + .2 * e + "px"),
            i(".pa-layer2").css("margin-top", "-" + .18 * e + "px"),
            i(".pa-layer3").css("margin-top", "-" + .15 * e + "px"),
            i(".pa-layer4").css("margin-top", "-" + .12 * e + "px")
        }
        ))
    }
    ))
}(jQuery);
