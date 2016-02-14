var ogPinPosition;
var ogPinWidth = 150;

(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    throttle ("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function() {
    update();

});

function update() {
    var scrollTop = $(window).scrollTop();

    $("#joinUs").css("opacity",
        0 + ( scrollTop > 100 ? ((scrollTop - 100) / 100) : 0 )
    )

    $("#logo").css("opacity",
        1 - scrollTop / 100
    )

    $("#mouseBox").css("opacity",
        1 - scrollTop / 100
    )

    if ( scrollTop < 2020 ) {
        $("#logoEtc").css("width",
            150 + ( scrollTop > 100 ? (scrollTop-100) : 0 ) + "px"
        )
    } else if ( scrollTop < 2330 ) {
        $("#logoEtc").css("width",
            420 - ( scrollTop - 2020 ) + "px"
        )
        $("#titleContent").css({
            "position": "fixed",
            "top": ""
        });
    } else {
        $("#titleContent").css({
            "position": "absolute",
            "top": 2330
        });

    }

    // else {
    //     $("#logoEtc").css({
    //         position: "absolute";
    //     })
    // }

    $("#tooFar").css("opacity",
        1 - ( scrollTop > 1100 ? ((scrollTop-1100)/100) : 0 )
    )

    if ( scrollTop > 1200 ) {

    }

    // if (scrollTop > 1200) {
    //     console.log((scrollTop-1200)/100)
    // }

    console.log(scrollTop)
    // console.log( $("#tooFar") )
    // console.log( $("#tooFar").offset().top )


    // $("#joinUs").css("opacity",
    //     1 - scrollTop / 100
    // )

    // if ( scrollTop > 100 ) {
    //     $("#icon").css({
    //         "position": "fixed",
    //         "top": "110px"
    //     })
    // }

    // if ( isScrolledIn($("#tooFar")) ) {
    //     $("#tooFar").animate({
    //         opacity: 1
    //     }, 500)
    // }

    // console.log($("#tooFar").offset().top, scrollTop)

    // if ( scrollTop > $("#tooFar").offset().top / 1.5 ) {
    //     // $("#tooFar").animate({opacity: 0}, 500);
    //     $("#tooFar").css("visibility", "hidden");

    // }

    // if ( isScrolledIn($("#aboutSection")) ) {
    //     console.log("lawg");

    // }

    // if ( isScrolledIn($("#aboutLong")) ) {
    //     $("#phone").animate({
    //         top: 55 + "%"
    //     }, 500)
    // }

}

function isScrolledIn(thing) {
  var thingTop = thing.offset().top;
  var thingBottom = thing.offset().top + thing.height();
  var winTop = window.pageYOffset;
  var winBottom = window.pageYOffset+window.innerHeight;

  if (winTop < thingTop && winBottom > thingBottom) {
    return true
  } else {
    return false
  }
}
