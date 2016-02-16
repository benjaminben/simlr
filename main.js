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

    if ( scrollTop < 1600 ) {
        $("#logoEtc").css({
            "width": 150 + ( scrollTop > 100 ? (scrollTop-100) : 0 ) + "px"
        })
        $("#icon").css({
            "bottom": ( scrollTop > 100 && scrollTop < 600 ? (scrollTop-100) : $("#icon").css("bottom") ) + "px"
        })
    } else if ( scrollTop < 2000 ) {
        $("#logoEtc").css("width",
            $("#logoEtc").width() - ( scrollTop - 1600 ) + "px"
        );
        $("#icon").css({
            "top": ( scrollTop > 100 && scrollTop < 600 ? (scrollTop-100) : $("#icon").css("top") ) + "px",
            "bottom": 0
        });
        $("#titleContent").css({
            "position": "fixed",
            "top": ""
        });
    } else {
        $("#titleContent").css({
            "position": "absolute",
            "top": 2000
        });
    }

    $("#aboutGold").css("right",
         scrollTop > 2500 ? (50 + "%") : (100 + "%")
    );

    $("#aboutBrief").css({
        "opacity": scrollTop > 2650 ? 1 : 0,
        "margin-left": scrollTop > 2650 ? 0 + "px" : -20 + "px"
    })

    $("#aboutLong").css({
        "opacity": scrollTop > 2800 ? 1 : 0,
    })

    $("#phone").css("top",
        scrollTop > 2900 ? (70 + "%") : (100 + "%")
    )


    console.log(scrollTop)

    $("#tooFar").css("opacity",
        1 - ( scrollTop > 1400 ? ((scrollTop-1400)/100) : 0 )
    )

    if ( isScrolledIn($("#aboutSection"), $("#joinUs")) ) {
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
    } else if ( isScrolledIn($("#geoSection"), $("#joinUs")) ) {
        $("#joinUs").css({
            "color": "#4657f2",
            "border": "1px solid #4657f2",
            "background": "rgba(0, 0, 0, 0)"
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
                "background": "rgba(0, 0, 0, 0)"
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

function isScrolledIntoWindow(thing) {
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
