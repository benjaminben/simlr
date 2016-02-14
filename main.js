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

    $("#tooFar").css("opacity",
        1 - ( scrollTop > 1100 ? ((scrollTop-1100)/100) : 0 )
    )


    if ( isScrolledIn($("#aboutSection"), $("#joinUs")) || isScrolledIn($("#geoSection"), $("#joinUs")) ) {
        $("#joinUs").css({
            "color": "#4657f2",
            "border": "1px solid #4657f2",
            "background": "white"
        }).on("mouseover", function() {
            $("#joinUs").css({
                "color": "white",
                "border": "1px solid white",
                "background": "#4657f2"
            })
        }).on("mouseleave", function() {
            $("#joinUs").css({
                "color": "#4657f2",
                "border": "1px solid #4657f2",
                "background": "white"
            })
        });
    } else {
        $("#joinUs").css({
            "color": "white",
            "border": "1px solid white",
            "background": "#4657f2"
        }).on("mouseover", function() {
            $("#joinUs").css({
                "color": "#4657f2",
                "border": "1px solid #4657f2",
                "background": "white"
            })
        }).on("mouseleave", function() {
            $("#joinUs").css({
                "color": "white",
                "border": "1px solid white",
                "background": "#4657f2"
            })
        });;
    }

}

function isScrolledIn(biggerThing, littleThing) {

  var littleThingTop = littleThing.offset().top;
  var littleThingBottom = littleThing.offset().top + littleThing.height();
  var biggerThingTop = biggerThing.offset().top;
  var biggerThingBottom = biggerThing.offset().top+biggerThing.height();

  if (biggerThingTop < littleThingTop && biggerThingBottom > littleThingBottom) {
    return true
  } else {
    return false
  }
}
