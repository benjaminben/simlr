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

window.addEventListener("scroll", function() {
    update();
});

function update() {
    var scrollTop = $(window).scrollTop();
    var scrollBottom = $(window).scrollTop() + $(window).height();

    $("#joinUs").css("opacity",
        0 + ( scrollTop > 100 ? ((scrollTop - 100) / 100) : 0 )
    )

    $("#logo").css("opacity",
        1 - scrollTop / 100
    )

    $("#mouseBox").css("opacity",
        1 - scrollTop / 100
    )

    var afterTag1 = $("#tooFar").offset().top + $("#tooFar").height();
    var afterTag2 = $("#tag").offset().top + $("#tag").height();

    var iconPassedTag1 = $("#icon").offset().top >=
                        ($("#tooFar").offset().top + $("#tooFar").height());
    var iconPassedTag2 = $("#icon").offset().top >=
                        ($("#tag").offset().top + $("#tag").height());

    if ( scrollTop < 1600 ) {
        $("#logoEtc").css({
            "width": 150 + ( scrollTop > 100 ? (scrollTop-100) : 0 ) + "px"
        })
        $("#titleContent").css({
            "top": scrollTop > 100 ? -(scrollTop-100)/3 : 0
        })
    } else if ( scrollTop < 2000 ) {
        $("#logoEtc").css("width",
            500 - ( scrollTop - 1600 )*1.2 + "px"
        )
        $("#titleContent").css({
            "position": "fixed",
            "top": -(500) + (scrollTop-1600)*3
        });
    } else {
        $("#titleContent").css({
            "position": "absolute",
            "top": 2730
        });
    }

    $("#tooFar").css("opacity",
        1 - ( scrollTop > 1500 ? ((scrollTop-1500)/100) : 0 )
    )

    $("#aboutGold").css("right",
         scrollTop > 2500 ? (50 + "%") : (0 + "%")
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


    if ( isScrolledIn($("#aboutSection"), $("#joinUs")) ) {
        $("#joinUs").css({
            "color": "#4657f2",
            "border": "1px solid #4657f2"
        }).on("mouseover", function() {
            $("#joinUs").css({
                "color": "white",
                "border": "1px solid #4657f2",
                "background": "#4657f2"
            })
        }).on("mouseleave", function() {
            $("#joinUs").css({
                "color": "#4657f2",
                "border": "1px solid #4657f2",
                "background": "rgba(0, 0, 0, 0)"
            })
        });
    } else if ( isScrolledIn($("#geoSection"), $("#joinUs")) ) {
        $("#joinUs").css({
            "color": "#4657f2",
            "border": "1px solid #4657f2"
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
            "border": "1px solid white"
        }).on("mouseover", function() {
            $("#joinUs").css({
                "color": "#4657f2",
                "border": "1px solid white",
                "background": "white"
            })
        }).on("mouseleave", function() {
            $("#joinUs").css({
                "color": "white",
                "border": "1px solid white",
                "background": "rgba(70,87,242,0)"
            })
        });;
    }

}

function isScrolledIn(biggerThing, littleThing) {

  var littleThingTop = littleThing.offset().top;
  var littleThingBottom = littleThing.offset().top + littleThing.height();
  var biggerThingTop = biggerThing.offset().top;
  var biggerThingBottom = biggerThing.offset().top+biggerThing.height();

  if (biggerThingTop < littleThingTop && biggerThingBottom > littleThingBottom){
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
