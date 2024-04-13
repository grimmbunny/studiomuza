/* ---------------------------------------------
 jquery.easing.js
 --------------------------------------------- */
!(function (n) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (e) {
        return n(e);
      })
    : "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = n(require("jquery")))
    : n(jQuery);
})(function (n) {
  function e(n) {
    var e = 7.5625,
      t = 2.75;
    return n < 1 / t
      ? e * n * n
      : n < 2 / t
      ? e * (n -= 1.5 / t) * n + 0.75
      : n < 2.5 / t
      ? e * (n -= 2.25 / t) * n + 0.9375
      : e * (n -= 2.625 / t) * n + 0.984375;
  }
  void 0 !== n.easing && (n.easing.jswing = n.easing.swing);
  var t = Math.pow,
    u = Math.sqrt,
    r = Math.sin,
    i = Math.cos,
    a = Math.PI,
    o = 1.70158,
    c = 1.525 * o,
    s = (2 * a) / 3,
    f = (2 * a) / 4.5;
  return (
    n.extend(n.easing, {
      def: "easeOutQuad",
      swing: function (e) {
        return n.easing[n.easing.def](e);
      },
      easeInQuad: function (n) {
        return n * n;
      },
      easeOutQuad: function (n) {
        return 1 - (1 - n) * (1 - n);
      },
      easeInOutQuad: function (n) {
        return n < 0.5 ? 2 * n * n : 1 - t(-2 * n + 2, 2) / 2;
      },
      easeInCubic: function (n) {
        return n * n * n;
      },
      easeOutCubic: function (n) {
        return 1 - t(1 - n, 3);
      },
      easeInOutCubic: function (n) {
        return n < 0.5 ? 4 * n * n * n : 1 - t(-2 * n + 2, 3) / 2;
      },
      easeInQuart: function (n) {
        return n * n * n * n;
      },
      easeOutQuart: function (n) {
        return 1 - t(1 - n, 4);
      },
      easeInOutQuart: function (n) {
        return n < 0.5 ? 8 * n * n * n * n : 1 - t(-2 * n + 2, 4) / 2;
      },
      easeInQuint: function (n) {
        return n * n * n * n * n;
      },
      easeOutQuint: function (n) {
        return 1 - t(1 - n, 5);
      },
      easeInOutQuint: function (n) {
        return n < 0.5 ? 16 * n * n * n * n * n : 1 - t(-2 * n + 2, 5) / 2;
      },
      easeInSine: function (n) {
        return 1 - i((n * a) / 2);
      },
      easeOutSine: function (n) {
        return r((n * a) / 2);
      },
      easeInOutSine: function (n) {
        return -(i(a * n) - 1) / 2;
      },
      easeInExpo: function (n) {
        return 0 === n ? 0 : t(2, 10 * n - 10);
      },
      easeOutExpo: function (n) {
        return 1 === n ? 1 : 1 - t(2, -10 * n);
      },
      easeInOutExpo: function (n) {
        return 0 === n
          ? 0
          : 1 === n
          ? 1
          : n < 0.5
          ? t(2, 20 * n - 10) / 2
          : (2 - t(2, -20 * n + 10)) / 2;
      },
      easeInCirc: function (n) {
        return 1 - u(1 - t(n, 2));
      },
      easeOutCirc: function (n) {
        return u(1 - t(n - 1, 2));
      },
      easeInOutCirc: function (n) {
        return n < 0.5
          ? (1 - u(1 - t(2 * n, 2))) / 2
          : (u(1 - t(-2 * n + 2, 2)) + 1) / 2;
      },
      easeInElastic: function (n) {
        return 0 === n
          ? 0
          : 1 === n
          ? 1
          : -t(2, 10 * n - 10) * r((10 * n - 10.75) * s);
      },
      easeOutElastic: function (n) {
        return 0 === n
          ? 0
          : 1 === n
          ? 1
          : t(2, -10 * n) * r((10 * n - 0.75) * s) + 1;
      },
      easeInOutElastic: function (n) {
        return 0 === n
          ? 0
          : 1 === n
          ? 1
          : n < 0.5
          ? (-t(2, 20 * n - 10) * r((20 * n - 11.125) * f)) / 2
          : (t(2, -20 * n + 10) * r((20 * n - 11.125) * f)) / 2 + 1;
      },
      easeInBack: function (n) {
        return 2.70158 * n * n * n - o * n * n;
      },
      easeOutBack: function (n) {
        return 1 + 2.70158 * t(n - 1, 3) + o * t(n - 1, 2);
      },
      easeInOutBack: function (n) {
        return n < 0.5
          ? (t(2 * n, 2) * (7.189819 * n - c)) / 2
          : (t(2 * n - 2, 2) * ((c + 1) * (2 * n - 2) + c) + 2) / 2;
      },
      easeInBounce: function (n) {
        return 1 - e(1 - n);
      },
      easeOutBounce: e,
      easeInOutBounce: function (n) {
        return n < 0.5 ? (1 - e(1 - 2 * n)) / 2 : (1 + e(2 * n - 1)) / 2;
      },
    }),
    n
  );
});

/* ---------------------------------------------
 jquery.scrollTo.min.js
 --------------------------------------------- */
/**
 * Copyright (c) 2007 Ariel Flesler - aflesler ○ gmail • com | https://github.com/flesler
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 */
(function (f) {
  "use strict";
  "function" === typeof define && define.amd
    ? define(["jquery"], f)
    : "undefined" !== typeof module && module.exports
    ? (module.exports = f(require("jquery")))
    : f(jQuery);
})(function ($) {
  "use strict";
  function n(a) {
    return (
      !a.nodeName ||
      -1 !==
        $.inArray(a.nodeName.toLowerCase(), [
          "iframe",
          "#document",
          "html",
          "body",
        ])
    );
  }
  function h(a) {
    return $.isFunction(a) || $.isPlainObject(a) ? a : { top: a, left: a };
  }
  var p = ($.scrollTo = function (a, d, b) {
    return $(window).scrollTo(a, d, b);
  });
  p.defaults = { axis: "xy", duration: 0, limit: !0 };
  $.fn.scrollTo = function (a, d, b) {
    "object" === typeof d && ((b = d), (d = 0));
    "function" === typeof b && (b = { onAfter: b });
    "max" === a && (a = 9e9);
    b = $.extend({}, p.defaults, b);
    d = d || b.duration;
    var u = b.queue && 1 < b.axis.length;
    u && (d /= 2);
    b.offset = h(b.offset);
    b.over = h(b.over);
    return this.each(function () {
      function k(a) {
        var k = $.extend({}, b, {
          queue: !0,
          duration: d,
          complete:
            a &&
            function () {
              a.call(q, e, b);
            },
        });
        r.animate(f, k);
      }
      if (null !== a) {
        var l = n(this),
          q = l ? this.contentWindow || window : this,
          r = $(q),
          e = a,
          f = {},
          t;
        switch (typeof e) {
          case "number":
          case "string":
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) {
              e = h(e);
              break;
            }
            e = l ? $(e) : $(e, q);
          case "object":
            if (e.length === 0) return;
            if (e.is || e.style) t = (e = $(e)).offset();
        }
        var v = ($.isFunction(b.offset) && b.offset(q, e)) || b.offset;
        $.each(b.axis.split(""), function (a, c) {
          var d = "x" === c ? "Left" : "Top",
            m = d.toLowerCase(),
            g = "scroll" + d,
            h = r[g](),
            n = p.max(q, c);
          t
            ? ((f[g] = t[m] + (l ? 0 : h - r.offset()[m])),
              b.margin &&
                ((f[g] -= parseInt(e.css("margin" + d), 10) || 0),
                (f[g] -= parseInt(e.css("border" + d + "Width"), 10) || 0)),
              (f[g] += v[m] || 0),
              b.over[m] &&
                (f[g] += e["x" === c ? "width" : "height"]() * b.over[m]))
            : ((d = e[m]),
              (f[g] =
                d.slice && "%" === d.slice(-1)
                  ? (parseFloat(d) / 100) * n
                  : d));
          b.limit &&
            /^\d+$/.test(f[g]) &&
            (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], n));
          !a &&
            1 < b.axis.length &&
            (h === f[g] ? (f = {}) : u && (k(b.onAfterFirst), (f = {})));
        });
        k(b.onAfter);
      }
    });
  };
  p.max = function (a, d) {
    var b = "x" === d ? "Width" : "Height",
      h = "scroll" + b;
    if (!n(a)) return a[h] - $(a)[b.toLowerCase()]();
    var b = "client" + b,
      k = a.ownerDocument || a.document,
      l = k.documentElement,
      k = k.body;
    return Math.max(l[h], k[h]) - Math.min(l[b], k[b]);
  };
  $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = {
    get: function (a) {
      return $(a.elem)[a.prop]();
    },
    set: function (a) {
      var d = this.get(a);
      if (a.options.interrupt && a._last && a._last !== d)
        return $(a.elem).stop();
      var b = Math.round(a.now);
      d !== b && ($(a.elem)[a.prop](b), (a._last = this.get(a)));
    },
  };
  return p;
});

/* ---------------------------------------------
 jquery.localScroll.min.js
 --------------------------------------------- */
/**
 * Copyright (c) 2007 Ariel Flesler - aflesler<a>gmail<d>com | https://github.com/flesler
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.0.0
 */
!(function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
})(function (e) {
  function t(t, o, n) {
    var i = o.hash.slice(1),
      a = document.getElementById(i) || document.getElementsByName(i)[0];
    if (a) {
      t && t.preventDefault();
      var l = e(n.target);
      if (
        !(
          (n.lock && l.is(":animated")) ||
          (n.onBefore && !1 === n.onBefore(t, a, l))
        )
      ) {
        if ((n.stop && l.stop(!0), n.hash)) {
          var r = a.id === i ? "id" : "name",
            s = e("<a> </a>")
              .attr(r, i)
              .css({
                position: "absolute",
                top: e(window).scrollTop(),
                left: e(window).scrollLeft(),
              });
          (a[r] = ""),
            e("body").prepend(s),
            (location.hash = o.hash),
            s.remove(),
            (a[r] = i);
        }
        l.scrollTo(a, n).trigger("notify.serialScroll", [a]);
      }
    }
  }
  var o = location.href.replace(/#.*/, ""),
    n = (e.localScroll = function (t) {
      e("body").localScroll(t);
    });
  return (
    (n.defaults = {
      duration: 1e3,
      axis: "y",
      event: "click",
      stop: !0,
      target: window,
      autoscroll: !0,
    }),
    (e.fn.localScroll = function (i) {
      function a() {
        return (
          !!this.href &&
          !!this.hash &&
          this.href.replace(this.hash, "") === o &&
          (!i.filter || e(this).is(i.filter))
        );
      }
      return (
        (i = e.extend({}, n.defaults, i)).autoscroll &&
          i.hash &&
          location.hash &&
          (i.target && window.scrollTo(0, 0), t(0, location, i)),
        i.lazy
          ? this.on(i.event, "a,area", function (e) {
              a.call(this) && t(e, this, i);
            })
          : this.find("a,area")
              .filter(a)
              .bind(i.event, function (e) {
                t(e, this, i);
              })
              .end()
              .end()
      );
    }),
    (n.hash = function () {}),
    n
  );
});

/* ---------------------------------------------
 jquery.viewport.mini.js
 --------------------------------------------- */
(function ($) {
  $.belowthefold = function (element, settings) {
    var fold = $(window).height() + $(window).scrollTop();
    return fold <= $(element).offset().top - settings.threshold;
  };
  $.abovethetop = function (element, settings) {
    var top = $(window).scrollTop();
    return (
      top >= $(element).offset().top + $(element).height() - settings.threshold
    );
  };
  $.rightofscreen = function (element, settings) {
    var fold = $(window).width() + $(window).scrollLeft();
    return fold <= $(element).offset().left - settings.threshold;
  };
  $.leftofscreen = function (element, settings) {
    var left = $(window).scrollLeft();
    return (
      left >= $(element).offset().left + $(element).width() - settings.threshold
    );
  };
  $.inviewport = function (element, settings) {
    return (
      !$.rightofscreen(element, settings) &&
      !$.leftofscreen(element, settings) &&
      !$.belowthefold(element, settings) &&
      !$.abovethetop(element, settings)
    );
  };
  $.extend($.expr[":"], {
    "below-the-fold": function (a, i, m) {
      return $.belowthefold(a, { threshold: 0 });
    },
    "above-the-top": function (a, i, m) {
      return $.abovethetop(a, { threshold: 0 });
    },
    "left-of-screen": function (a, i, m) {
      return $.leftofscreen(a, { threshold: 0 });
    },
    "right-of-screen": function (a, i, m) {
      return $.rightofscreen(a, { threshold: 0 });
    },
    "in-viewport": function (a, i, m) {
      return $.inviewport(a, { threshold: 0 });
    },
  });
})(jQuery);

/* ---------------------------------------------
 jquery.parallax-1.1.3.js
 --------------------------------------------- */
(function (e) {
  var t = e(window);
  var n = t.height();
  t.resize(function () {
    n = t.height();
  });
  e.fn.parallax = function (r, i, s) {
    function l() {
      var s = t.scrollTop();
      o.each(function () {
        var t = e(this);
        var f = t.offset().top;
        var l = u(t);
        if (f + l < s || f > s + n) {
          return;
        }
        o.css("backgroundPosition", r + " " + Math.round((a - s) * i) + "px");
      });
    }
    var o = e(this);
    var u;
    var a;
    var f = 0;
    o.each(function () {
      a = o.offset().top;
    });
    if (s) {
      u = function (e) {
        return e.outerHeight(true);
      };
    } else {
      u = function (e) {
        return e.height();
      };
    }
    if (arguments.length < 1 || r === null) r = "50%";
    if (arguments.length < 2 || i === null) i = 0.1;
    if (arguments.length < 3 || s === null) s = true;
    t.bind("scroll", l).resize(l);
    l();
  };
})(jQuery);

/* ---------------------------------------------
 jquery.fitvids.js
 --------------------------------------------- */
/*!
 * FitVids 1.1
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 */
!(function (t) {
  "use strict";
  t.fn.fitVids = function (e) {
    var i = { customSelector: null, ignore: null };
    if (!document.getElementById("fit-vids-style")) {
      var r = document.head || document.getElementsByTagName("head")[0],
        d = document.createElement("div");
      (d.innerHTML =
        '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>'),
        r.appendChild(d.childNodes[1]);
    }
    return (
      e && t.extend(i, e),
      this.each(function () {
        var e = [
          'iframe[src*="player.vimeo.com"]',
          'iframe[src*="youtube.com"]',
          'iframe[src*="youtube-nocookie.com"]',
          'iframe[src*="kickstarter.com"][src*="video.html"]',
          "object",
          "embed",
        ];
        i.customSelector && e.push(i.customSelector);
        var r = ".fitvidsignore";
        i.ignore && (r = r + ", " + i.ignore);
        var d = t(this).find(e.join(","));
        (d = (d = d.not("object object")).not(r)).each(function (e) {
          var i = t(this);
          if (
            !(i.parents(r).length > 0) &&
            ("embed" !== this.tagName.toLowerCase() ||
              !i.parent("object").length) &&
            !i.parent(".fluid-width-video-wrapper").length
          ) {
            !i.css("height") &&
              !i.css("width") &&
              (isNaN(i.attr("height")) || isNaN(i.attr("width"))) &&
              (i.attr("height", 9), i.attr("width", 16));
            var d =
                "object" === this.tagName.toLowerCase() ||
                (i.attr("height") && !isNaN(parseInt(i.attr("height"), 10)))
                  ? parseInt(i.attr("height"), 10)
                  : i.height(),
              a = isNaN(parseInt(i.attr("width"), 10))
                ? i.width()
                : parseInt(i.attr("width"), 10);
            i.attr("id") || i.attr("id", "fitvid" + e),
              i
                .wrap('<div class="fluid-width-video-wrapper"></div>')
                .parent(".fluid-width-video-wrapper")
                .css("padding-top", 100 * (d / a) + "%"),
              i.removeAttr("height").removeAttr("width");
          }
        });
      })
    );
  };
})(window.jQuery || window.Zepto);

/* ---------------------------------------------
 owl.carousel.min.js
 --------------------------------------------- */
if (typeof Object.create !== "function") {
  Object.create = function (e) {
    function t() {}
    t.prototype = e;
    return new t();
  };
}
(function (e, t, n) {
  var r = {
    init: function (t, n) {
      var r = this;
      r.$elem = e(n);
      r.options = e.extend({}, e.fn.owlCarousel.options, r.$elem.data(), t);
      r.userOptions = t;
      r.loadContent();
    },
    loadContent: function () {
      function r(e) {
        var n,
          r = "";
        if (typeof t.options.jsonSuccess === "function") {
          t.options.jsonSuccess.apply(this, [e]);
        } else {
          for (n in e.owl) {
            if (e.owl.hasOwnProperty(n)) {
              r += e.owl[n].item;
            }
          }
          t.$elem.html(r);
        }
        t.logIn();
      }
      var t = this,
        n;
      if (typeof t.options.beforeInit === "function") {
        t.options.beforeInit.apply(this, [t.$elem]);
      }
      if (typeof t.options.jsonPath === "string") {
        n = t.options.jsonPath;
        e.getJSON(n, r);
      } else {
        t.logIn();
      }
    },
    logIn: function () {
      var e = this;
      e.$elem.data("owl-originalStyles", e.$elem.attr("style"));
      e.$elem.data("owl-originalClasses", e.$elem.attr("class"));
      e.$elem.css({ opacity: 0 });
      e.orignalItems = e.options.items;
      e.checkBrowser();
      e.wrapperWidth = 0;
      e.checkVisible = null;
      e.setVars();
    },
    setVars: function () {
      var e = this;
      if (e.$elem.children().length === 0) {
        return false;
      }
      e.baseClass();
      e.eventTypes();
      e.$userItems = e.$elem.children();
      e.itemsAmount = e.$userItems.length;
      e.wrapItems();
      e.$owlItems = e.$elem.find(".owl-item");
      e.$owlWrapper = e.$elem.find(".owl-wrapper");
      e.playDirection = "next";
      e.prevItem = 0;
      e.prevArr = [0];
      e.currentItem = 0;
      e.customEvents();
      e.onStartup();
    },
    onStartup: function () {
      var e = this;
      e.updateItems();
      e.calculateAll();
      e.buildControls();
      e.updateControls();
      e.response();
      e.moveEvents();
      e.stopOnHover();
      e.owlStatus();
      if (e.options.transitionStyle !== false) {
        e.transitionTypes(e.options.transitionStyle);
      }
      if (e.options.autoPlay === true) {
        e.options.autoPlay = 5e3;
      }
      e.play();
      e.$elem.find(".owl-wrapper").css("display", "block");
      if (!e.$elem.is(":visible")) {
        e.watchVisibility();
      } else {
        e.$elem.css("opacity", 1);
      }
      e.onstartup = false;
      e.eachMoveUpdate();
      if (typeof e.options.afterInit === "function") {
        e.options.afterInit.apply(this, [e.$elem]);
      }
    },
    eachMoveUpdate: function () {
      var e = this;
      if (e.options.lazyLoad === true) {
        e.lazyLoad();
      }
      if (e.options.autoHeight === true) {
        e.autoHeight();
      }
      e.onVisibleItems();
      if (typeof e.options.afterAction === "function") {
        e.options.afterAction.apply(this, [e.$elem]);
      }
    },
    updateVars: function () {
      var e = this;
      if (typeof e.options.beforeUpdate === "function") {
        e.options.beforeUpdate.apply(this, [e.$elem]);
      }
      e.watchVisibility();
      e.updateItems();
      e.calculateAll();
      e.updatePosition();
      e.updateControls();
      e.eachMoveUpdate();
      if (typeof e.options.afterUpdate === "function") {
        e.options.afterUpdate.apply(this, [e.$elem]);
      }
    },
    reload: function () {
      var e = this;
      t.setTimeout(function () {
        e.updateVars();
      }, 0);
    },
    watchVisibility: function () {
      var e = this;
      if (e.$elem.is(":visible") === false) {
        e.$elem.css({ opacity: 0 });
        t.clearInterval(e.autoPlayInterval);
        t.clearInterval(e.checkVisible);
      } else {
        return false;
      }
      e.checkVisible = t.setInterval(function () {
        if (e.$elem.is(":visible")) {
          e.reload();
          e.$elem.animate({ opacity: 1 }, 200);
          t.clearInterval(e.checkVisible);
        }
      }, 500);
    },
    wrapItems: function () {
      var e = this;
      e.$userItems
        .wrapAll('<div class="owl-wrapper">')
        .wrap('<div class="owl-item"></div>');
      e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
      e.wrapperOuter = e.$elem.find(".owl-wrapper-outer");
      e.$elem.css("display", "block");
    },
    baseClass: function () {
      var e = this,
        t = e.$elem.hasClass(e.options.baseClass),
        n = e.$elem.hasClass(e.options.theme);
      if (!t) {
        e.$elem.addClass(e.options.baseClass);
      }
      if (!n) {
        e.$elem.addClass(e.options.theme);
      }
    },
    updateItems: function () {
      var t = this,
        n,
        r;
      if (t.options.responsive === false) {
        return false;
      }
      if (t.options.singleItem === true) {
        t.options.items = t.orignalItems = 1;
        t.options.itemsCustom = false;
        t.options.itemsDesktop = false;
        t.options.itemsDesktopSmall = false;
        t.options.itemsTablet = false;
        t.options.itemsTabletSmall = false;
        t.options.itemsMobile = false;
        return false;
      }
      n = e(t.options.responsiveBaseWidth).width();
      if (n > (t.options.itemsDesktop[0] || t.orignalItems)) {
        t.options.items = t.orignalItems;
      }
      if (t.options.itemsCustom !== false) {
        t.options.itemsCustom.sort(function (e, t) {
          return e[0] - t[0];
        });
        for (r = 0; r < t.options.itemsCustom.length; r += 1) {
          if (t.options.itemsCustom[r][0] <= n) {
            t.options.items = t.options.itemsCustom[r][1];
          }
        }
      } else {
        if (
          n <= t.options.itemsDesktop[0] &&
          t.options.itemsDesktop !== false
        ) {
          t.options.items = t.options.itemsDesktop[1];
        }
        if (
          n <= t.options.itemsDesktopSmall[0] &&
          t.options.itemsDesktopSmall !== false
        ) {
          t.options.items = t.options.itemsDesktopSmall[1];
        }
        if (n <= t.options.itemsTablet[0] && t.options.itemsTablet !== false) {
          t.options.items = t.options.itemsTablet[1];
        }
        if (
          n <= t.options.itemsTabletSmall[0] &&
          t.options.itemsTabletSmall !== false
        ) {
          t.options.items = t.options.itemsTabletSmall[1];
        }
        if (n <= t.options.itemsMobile[0] && t.options.itemsMobile !== false) {
          t.options.items = t.options.itemsMobile[1];
        }
      }
      if (t.options.items > t.itemsAmount && t.options.itemsScaleUp === true) {
        t.options.items = t.itemsAmount;
      }
    },
    response: function () {
      var n = this,
        r,
        i;
      if (n.options.responsive !== true) {
        return false;
      }
      i = e(t).width();
      n.resizer = function () {
        if (e(t).width() !== i) {
          if (n.options.autoPlay !== false) {
            t.clearInterval(n.autoPlayInterval);
          }
          t.clearTimeout(r);
          r = t.setTimeout(function () {
            i = e(t).width();
            n.updateVars();
          }, n.options.responsiveRefreshRate);
        }
      };
      e(t).resize(n.resizer);
    },
    updatePosition: function () {
      var e = this;
      e.jumpTo(e.currentItem);
      if (e.options.autoPlay !== false) {
        e.checkAp();
      }
    },
    appendItemsSizes: function () {
      var t = this,
        n = 0,
        r = t.itemsAmount - t.options.items;
      t.$owlItems.each(function (i) {
        var s = e(this);
        s.css({ width: t.itemWidth }).data("owl-item", Number(i));
        if (i % t.options.items === 0 || i === r) {
          if (!(i > r)) {
            n += 1;
          }
        }
        s.data("owl-roundPages", n);
      });
    },
    appendWrapperSizes: function () {
      var e = this,
        t = e.$owlItems.length * e.itemWidth;
      e.$owlWrapper.css({ width: t * 2, left: 0 });
      e.appendItemsSizes();
    },
    calculateAll: function () {
      var e = this;
      e.calculateWidth();
      e.appendWrapperSizes();
      e.loops();
      e.max();
    },
    calculateWidth: function () {
      var e = this;
      e.itemWidth = Math.round(e.$elem.width() / e.options.items);
    },
    max: function () {
      var e = this,
        t = (e.itemsAmount * e.itemWidth - e.options.items * e.itemWidth) * -1;
      if (e.options.items > e.itemsAmount) {
        e.maximumItem = 0;
        t = 0;
        e.maximumPixels = 0;
      } else {
        e.maximumItem = e.itemsAmount - e.options.items;
        e.maximumPixels = t;
      }
      return t;
    },
    min: function () {
      return 0;
    },
    loops: function () {
      var t = this,
        n = 0,
        r = 0,
        i,
        s,
        o;
      t.positionsInArray = [0];
      t.pagesInArray = [];
      for (i = 0; i < t.itemsAmount; i += 1) {
        r += t.itemWidth;
        t.positionsInArray.push(-r);
        if (t.options.scrollPerPage === true) {
          s = e(t.$owlItems[i]);
          o = s.data("owl-roundPages");
          if (o !== n) {
            t.pagesInArray[n] = t.positionsInArray[i];
            n = o;
          }
        }
      }
    },
    buildControls: function () {
      var t = this;
      if (t.options.navigation === true || t.options.pagination === true) {
        t.owlControls = e('<div class="owl-controls"/>')
          .toggleClass("clickable", !t.browser.isTouch)
          .appendTo(t.$elem);
      }
      if (t.options.pagination === true) {
        t.buildPagination();
      }
      if (t.options.navigation === true) {
        t.buildButtons();
      }
    },
    buildButtons: function () {
      var t = this,
        n = e('<div class="owl-buttons"/>');
      t.owlControls.append(n);
      t.buttonPrev = e("<div/>", {
        class: "owl-prev",
        html: t.options.navigationText[0] || "",
      });
      t.buttonNext = e("<div/>", {
        class: "owl-next",
        html: t.options.navigationText[1] || "",
      });
      n.append(t.buttonPrev).append(t.buttonNext);
      n.on(
        "touchstart.owlControls mousedown.owlControls",
        'div[class^="owl"]',
        function (e) {
          e.preventDefault();
        }
      );
      n.on(
        "touchend.owlControls mouseup.owlControls",
        'div[class^="owl"]',
        function (n) {
          n.preventDefault();
          if (e(this).hasClass("owl-next")) {
            t.next();
          } else {
            t.prev();
          }
        }
      );
    },
    buildPagination: function () {
      var t = this;
      t.paginationWrapper = e('<div class="owl-pagination"/>');
      t.owlControls.append(t.paginationWrapper);
      t.paginationWrapper.on(
        "touchend.owlControls mouseup.owlControls",
        ".owl-page",
        function (n) {
          n.preventDefault();
          if (Number(e(this).data("owl-page")) !== t.currentItem) {
            t.goTo(Number(e(this).data("owl-page")), true);
          }
        }
      );
    },
    updatePagination: function () {
      var t = this,
        n,
        r,
        i,
        s,
        o,
        u;
      if (t.options.pagination === false) {
        return false;
      }
      t.paginationWrapper.html("");
      n = 0;
      r = t.itemsAmount - (t.itemsAmount % t.options.items);
      for (s = 0; s < t.itemsAmount; s += 1) {
        if (s % t.options.items === 0) {
          n += 1;
          if (r === s) {
            i = t.itemsAmount - t.options.items;
          }
          o = e("<div/>", { class: "owl-page" });
          u = e("<span></span>", {
            text: t.options.paginationNumbers === true ? n : "",
            class: t.options.paginationNumbers === true ? "owl-numbers" : "",
          });
          o.append(u);
          o.data("owl-page", r === s ? i : s);
          o.data("owl-roundPages", n);
          t.paginationWrapper.append(o);
        }
      }
      t.checkPagination();
    },
    checkPagination: function () {
      var t = this;
      if (t.options.pagination === false) {
        return false;
      }
      t.paginationWrapper.find(".owl-page").each(function () {
        if (
          e(this).data("owl-roundPages") ===
          e(t.$owlItems[t.currentItem]).data("owl-roundPages")
        ) {
          t.paginationWrapper.find(".owl-page").removeClass("active");
          e(this).addClass("active");
        }
      });
    },
    checkNavigation: function () {
      var e = this;
      if (e.options.navigation === false) {
        return false;
      }
      if (e.options.rewindNav === false) {
        if (e.currentItem === 0 && e.maximumItem === 0) {
          e.buttonPrev.addClass("disabled");
          e.buttonNext.addClass("disabled");
        } else if (e.currentItem === 0 && e.maximumItem !== 0) {
          e.buttonPrev.addClass("disabled");
          e.buttonNext.removeClass("disabled");
        } else if (e.currentItem === e.maximumItem) {
          e.buttonPrev.removeClass("disabled");
          e.buttonNext.addClass("disabled");
        } else if (e.currentItem !== 0 && e.currentItem !== e.maximumItem) {
          e.buttonPrev.removeClass("disabled");
          e.buttonNext.removeClass("disabled");
        }
      }
    },
    updateControls: function () {
      var e = this;
      e.updatePagination();
      e.checkNavigation();
      if (e.owlControls) {
        if (e.options.items >= e.itemsAmount) {
          e.owlControls.hide();
        } else {
          e.owlControls.show();
        }
      }
    },
    destroyControls: function () {
      var e = this;
      if (e.owlControls) {
        e.owlControls.remove();
      }
    },
    next: function (e) {
      var t = this;
      if (t.isTransition) {
        return false;
      }
      t.currentItem += t.options.scrollPerPage === true ? t.options.items : 1;
      if (
        t.currentItem >
        t.maximumItem +
          (t.options.scrollPerPage === true ? t.options.items - 1 : 0)
      ) {
        if (t.options.rewindNav === true) {
          t.currentItem = 0;
          e = "rewind";
        } else {
          t.currentItem = t.maximumItem;
          return false;
        }
      }
      t.goTo(t.currentItem, e);
    },
    prev: function (e) {
      var t = this;
      if (t.isTransition) {
        return false;
      }
      if (
        t.options.scrollPerPage === true &&
        t.currentItem > 0 &&
        t.currentItem < t.options.items
      ) {
        t.currentItem = 0;
      } else {
        t.currentItem -= t.options.scrollPerPage === true ? t.options.items : 1;
      }
      if (t.currentItem < 0) {
        if (t.options.rewindNav === true) {
          t.currentItem = t.maximumItem;
          e = "rewind";
        } else {
          t.currentItem = 0;
          return false;
        }
      }
      t.goTo(t.currentItem, e);
    },
    goTo: function (e, n, r) {
      var i = this,
        s;
      if (i.isTransition) {
        return false;
      }
      if (typeof i.options.beforeMove === "function") {
        i.options.beforeMove.apply(this, [i.$elem]);
      }
      if (e >= i.maximumItem) {
        e = i.maximumItem;
      } else if (e <= 0) {
        e = 0;
      }
      i.currentItem = i.owl.currentItem = e;
      if (
        i.options.transitionStyle !== false &&
        r !== "drag" &&
        i.options.items === 1 &&
        i.browser.support3d === true
      ) {
        i.swapSpeed(0);
        if (i.browser.support3d === true) {
          i.transition3d(i.positionsInArray[e]);
        } else {
          i.css2slide(i.positionsInArray[e], 1);
        }
        i.afterGo();
        i.singleItemTransition();
        return false;
      }
      s = i.positionsInArray[e];
      if (i.browser.support3d === true) {
        i.isCss3Finish = false;
        if (n === true) {
          i.swapSpeed("paginationSpeed");
          t.setTimeout(function () {
            i.isCss3Finish = true;
          }, i.options.paginationSpeed);
        } else if (n === "rewind") {
          i.swapSpeed(i.options.rewindSpeed);
          t.setTimeout(function () {
            i.isCss3Finish = true;
          }, i.options.rewindSpeed);
        } else {
          i.swapSpeed("slideSpeed");
          t.setTimeout(function () {
            i.isCss3Finish = true;
          }, i.options.slideSpeed);
        }
        i.transition3d(s);
      } else {
        if (n === true) {
          i.css2slide(s, i.options.paginationSpeed);
        } else if (n === "rewind") {
          i.css2slide(s, i.options.rewindSpeed);
        } else {
          i.css2slide(s, i.options.slideSpeed);
        }
      }
      i.afterGo();
    },
    jumpTo: function (e) {
      var t = this;
      if (typeof t.options.beforeMove === "function") {
        t.options.beforeMove.apply(this, [t.$elem]);
      }
      if (e >= t.maximumItem || e === -1) {
        e = t.maximumItem;
      } else if (e <= 0) {
        e = 0;
      }
      t.swapSpeed(0);
      if (t.browser.support3d === true) {
        t.transition3d(t.positionsInArray[e]);
      } else {
        t.css2slide(t.positionsInArray[e], 1);
      }
      t.currentItem = t.owl.currentItem = e;
      t.afterGo();
    },
    afterGo: function () {
      var e = this;
      e.prevArr.push(e.currentItem);
      e.prevItem = e.owl.prevItem = e.prevArr[e.prevArr.length - 2];
      e.prevArr.shift(0);
      if (e.prevItem !== e.currentItem) {
        e.checkPagination();
        e.checkNavigation();
        e.eachMoveUpdate();
        if (e.options.autoPlay !== false) {
          e.checkAp();
        }
      }
      if (
        typeof e.options.afterMove === "function" &&
        e.prevItem !== e.currentItem
      ) {
        e.options.afterMove.apply(this, [e.$elem]);
      }
    },
    stop: function () {
      var e = this;
      e.apStatus = "stop";
      t.clearInterval(e.autoPlayInterval);
    },
    checkAp: function () {
      var e = this;
      if (e.apStatus !== "stop") {
        e.play();
      }
    },
    play: function () {
      var e = this;
      e.apStatus = "play";
      if (e.options.autoPlay === false) {
        return false;
      }
      t.clearInterval(e.autoPlayInterval);
      e.autoPlayInterval = t.setInterval(function () {
        e.next(true);
      }, e.options.autoPlay);
    },
    swapSpeed: function (e) {
      var t = this;
      if (e === "slideSpeed") {
        t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed));
      } else if (e === "paginationSpeed") {
        t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed));
      } else if (typeof e !== "string") {
        t.$owlWrapper.css(t.addCssSpeed(e));
      }
    },
    addCssSpeed: function (e) {
      return {
        "-webkit-transition": "all " + e + "ms ease",
        "-moz-transition": "all " + e + "ms ease",
        "-o-transition": "all " + e + "ms ease",
        transition: "all " + e + "ms ease",
      };
    },
    removeTransition: function () {
      return {
        "-webkit-transition": "",
        "-moz-transition": "",
        "-o-transition": "",
        transition: "",
      };
    },
    doTranslate: function (e) {
      return {
        "-webkit-transform": "translate3d(" + e + "px, 0px, 0px)",
        "-moz-transform": "translate3d(" + e + "px, 0px, 0px)",
        "-o-transform": "translate3d(" + e + "px, 0px, 0px)",
        "-ms-transform": "translate3d(" + e + "px, 0px, 0px)",
        transform: "translate3d(" + e + "px, 0px,0px)",
      };
    },
    transition3d: function (e) {
      var t = this;
      t.$owlWrapper.css(t.doTranslate(e));
    },
    css2move: function (e) {
      var t = this;
      t.$owlWrapper.css({ left: e });
    },
    css2slide: function (e, t) {
      var n = this;
      n.isCssFinish = false;
      n.$owlWrapper.stop(true, true).animate(
        { left: e },
        {
          duration: t || n.options.slideSpeed,
          complete: function () {
            n.isCssFinish = true;
          },
        }
      );
    },
    checkBrowser: function () {
      var e = this,
        r = "translate3d(0px, 0px, 0px)",
        i = n.createElement("div"),
        s,
        o,
        u,
        a,
        f = n.documentElement.style;
      i.style.cssText =
        "  -moz-transform:" +
        r +
        "; -ms-transform:" +
        r +
        "; -o-transform:" +
        r +
        "; -webkit-transform:" +
        r +
        "; transform:" +
        r;
      s = /translate3d\(0px, 0px, 0px\)/g;
      o = i.style.cssText.match(s);
      u =
        f.webkitTransition !== undefined ||
        f.MozTransition !== undefined ||
        f.OTransition !== undefined ||
        f.transition !== undefined;
      a = "ontouchstart" in t || t.navigator.msMaxTouchPoints;
      e.browser = { support3d: u, isTouch: a };
    },
    moveEvents: function () {
      var e = this;
      if (e.options.mouseDrag !== false || e.options.touchDrag !== false) {
        e.gestures();
        e.disabledEvents();
      }
    },
    eventTypes: function () {
      var e = this,
        t = ["s", "e", "x"];
      e.ev_types = {};
      if (e.options.mouseDrag === true && e.options.touchDrag === true) {
        t = [
          "touchstart.owl mousedown.owl",
          "touchmove.owl mousemove.owl",
          "touchend.owl touchcancel.owl mouseup.owl",
        ];
      } else if (
        e.options.mouseDrag === false &&
        e.options.touchDrag === true
      ) {
        t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"];
      } else if (
        e.options.mouseDrag === true &&
        e.options.touchDrag === false
      ) {
        t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"];
      }
      e.ev_types.start = t[0];
      e.ev_types.move = t[1];
      e.ev_types.end = t[2];
    },
    disabledEvents: function () {
      var t = this;
      t.$elem.on("dragstart.owl", function (e) {
        e.preventDefault();
      });
      t.$elem.on("mousedown.disableTextSelect", function (t) {
        return e(t.target).is("input, textarea, select, option");
      });
    },
    gestures: function () {
      function s(e) {
        if (e.touches !== undefined) {
          return { x: e.touches[0].pageX, y: e.touches[0].pageY };
        }
        if (e.touches === undefined) {
          if (e.pageX !== undefined) {
            return { x: e.pageX, y: e.pageY };
          }
          if (e.pageX === undefined) {
            return { x: e.clientX, y: e.clientY };
          }
        }
      }
      function o(t) {
        if (t === "on") {
          e(n).on(r.ev_types.move, a);
          e(n).on(r.ev_types.end, f);
        } else if (t === "off") {
          e(n).off(r.ev_types.move);
          e(n).off(r.ev_types.end);
        }
      }
      function u(n) {
        var u = n.originalEvent || n || t.event,
          a;
        if (u.which === 3) {
          return false;
        }
        if (r.itemsAmount <= r.options.items) {
          return;
        }
        if (r.isCssFinish === false && !r.options.dragBeforeAnimFinish) {
          return false;
        }
        if (r.isCss3Finish === false && !r.options.dragBeforeAnimFinish) {
          return false;
        }
        if (r.options.autoPlay !== false) {
          t.clearInterval(r.autoPlayInterval);
        }
        if (r.browser.isTouch !== true && !r.$owlWrapper.hasClass("grabbing")) {
          r.$owlWrapper.addClass("grabbing");
        }
        r.newPosX = 0;
        r.newRelativeX = 0;
        e(this).css(r.removeTransition());
        a = e(this).position();
        i.relativePos = a.left;
        i.offsetX = s(u).x - a.left;
        i.offsetY = s(u).y - a.top;
        o("on");
        i.sliding = false;
        i.targetElement = u.target || u.srcElement;
      }
      function a(o) {
        var u = o.originalEvent || o || t.event,
          a,
          f;
        r.newPosX = s(u).x - i.offsetX;
        r.newPosY = s(u).y - i.offsetY;
        r.newRelativeX = r.newPosX - i.relativePos;
        if (
          typeof r.options.startDragging === "function" &&
          i.dragging !== true &&
          r.newRelativeX !== 0
        ) {
          i.dragging = true;
          r.options.startDragging.apply(r, [r.$elem]);
        }
        if (
          (r.newRelativeX > 8 || r.newRelativeX < -8) &&
          r.browser.isTouch === true
        ) {
          if (u.preventDefault !== undefined) {
            u.preventDefault();
          } else {
            u.returnValue = false;
          }
          i.sliding = true;
        }
        if ((r.newPosY > 10 || r.newPosY < -10) && i.sliding === false) {
          e(n).off("touchmove.owl");
        }
        a = function () {
          return r.newRelativeX / 5;
        };
        f = function () {
          return r.maximumPixels + r.newRelativeX / 5;
        };
        r.newPosX = Math.max(Math.min(r.newPosX, a()), f());
        if (r.browser.support3d === true) {
          r.transition3d(r.newPosX);
        } else {
          r.css2move(r.newPosX);
        }
      }
      function f(n) {
        var s = n.originalEvent || n || t.event,
          u,
          a,
          f;
        s.target = s.target || s.srcElement;
        i.dragging = false;
        if (r.browser.isTouch !== true) {
          r.$owlWrapper.removeClass("grabbing");
        }
        if (r.newRelativeX < 0) {
          r.dragDirection = r.owl.dragDirection = "left";
        } else {
          r.dragDirection = r.owl.dragDirection = "right";
        }
        if (r.newRelativeX !== 0) {
          u = r.getNewPosition();
          r.goTo(u, false, "drag");
          if (i.targetElement === s.target && r.browser.isTouch !== true) {
            e(s.target).on("click.disable", function (t) {
              t.stopImmediatePropagation();
              t.stopPropagation();
              t.preventDefault();
              e(t.target).off("click.disable");
            });
            a = e._data(s.target, "events").click;
            f = a.pop();
            a.splice(0, 0, f);
          }
        }
        o("off");
      }
      var r = this,
        i = {
          offsetX: 0,
          offsetY: 0,
          baseElWidth: 0,
          relativePos: 0,
          position: null,
          minSwipe: null,
          maxSwipe: null,
          sliding: null,
          dargging: null,
          targetElement: null,
        };
      r.isCssFinish = true;
      r.$elem.on(r.ev_types.start, ".owl-wrapper", u);
    },
    getNewPosition: function () {
      var e = this,
        t = e.closestItem();
      if (t > e.maximumItem) {
        e.currentItem = e.maximumItem;
        t = e.maximumItem;
      } else if (e.newPosX >= 0) {
        t = 0;
        e.currentItem = 0;
      }
      return t;
    },
    closestItem: function () {
      var t = this,
        n =
          t.options.scrollPerPage === true
            ? t.pagesInArray
            : t.positionsInArray,
        r = t.newPosX,
        i = null;
      e.each(n, function (s, o) {
        if (
          r - t.itemWidth / 20 > n[s + 1] &&
          r - t.itemWidth / 20 < o &&
          t.moveDirection() === "left"
        ) {
          i = o;
          if (t.options.scrollPerPage === true) {
            t.currentItem = e.inArray(i, t.positionsInArray);
          } else {
            t.currentItem = s;
          }
        } else if (
          r + t.itemWidth / 20 < o &&
          r + t.itemWidth / 20 > (n[s + 1] || n[s] - t.itemWidth) &&
          t.moveDirection() === "right"
        ) {
          if (t.options.scrollPerPage === true) {
            i = n[s + 1] || n[n.length - 1];
            t.currentItem = e.inArray(i, t.positionsInArray);
          } else {
            i = n[s + 1];
            t.currentItem = s + 1;
          }
        }
      });
      return t.currentItem;
    },
    moveDirection: function () {
      var e = this,
        t;
      if (e.newRelativeX < 0) {
        t = "right";
        e.playDirection = "next";
      } else {
        t = "left";
        e.playDirection = "prev";
      }
      return t;
    },
    customEvents: function () {
      var e = this;
      e.$elem.on("owl.next", function () {
        e.next();
      });
      e.$elem.on("owl.prev", function () {
        e.prev();
      });
      e.$elem.on("owl.play", function (t, n) {
        e.options.autoPlay = n;
        e.play();
        e.hoverStatus = "play";
      });
      e.$elem.on("owl.stop", function () {
        e.stop();
        e.hoverStatus = "stop";
      });
      e.$elem.on("owl.goTo", function (t, n) {
        e.goTo(n);
      });
      e.$elem.on("owl.jumpTo", function (t, n) {
        e.jumpTo(n);
      });
    },
    stopOnHover: function () {
      var e = this;
      if (
        e.options.stopOnHover === true &&
        e.browser.isTouch !== true &&
        e.options.autoPlay !== false
      ) {
        e.$elem.on("mouseover", function () {
          e.stop();
        });
        e.$elem.on("mouseout", function () {
          if (e.hoverStatus !== "stop") {
            e.play();
          }
        });
      }
    },
    lazyLoad: function () {
      var t = this,
        n,
        r,
        i,
        s,
        o;
      if (t.options.lazyLoad === false) {
        return false;
      }
      for (n = 0; n < t.itemsAmount; n += 1) {
        r = e(t.$owlItems[n]);
        if (r.data("owl-loaded") === "loaded") {
          continue;
        }
        i = r.data("owl-item");
        s = r.find(".lazyOwl");
        if (typeof s.data("src") !== "string") {
          r.data("owl-loaded", "loaded");
          continue;
        }
        if (r.data("owl-loaded") === undefined) {
          s.hide();
          r.addClass("loading").data("owl-loaded", "checked");
        }
        if (t.options.lazyFollow === true) {
          o = i >= t.currentItem;
        } else {
          o = true;
        }
        if (o && i < t.currentItem + t.options.items && s.length) {
          t.lazyPreload(r, s);
        }
      }
    },
    lazyPreload: function (e, n) {
      function o() {
        e.data("owl-loaded", "loaded").removeClass("loading");
        n.removeAttr("data-src");
        if (r.options.lazyEffect === "fade") {
          n.fadeIn(400);
        } else {
          n.show();
        }
        if (typeof r.options.afterLazyLoad === "function") {
          r.options.afterLazyLoad.apply(this, [r.$elem]);
        }
      }
      function u() {
        i += 1;
        if (r.completeImg(n.get(0)) || s === true) {
          o();
        } else if (i <= 100) {
          t.setTimeout(u, 100);
        } else {
          o();
        }
      }
      var r = this,
        i = 0,
        s;
      if (n.prop("tagName") === "DIV") {
        n.css("background-image", "url(" + n.data("src") + ")");
        s = true;
      } else {
        n[0].src = n.data("src");
      }
      u();
    },
    autoHeight: function () {
      function s() {
        var r = e(n.$owlItems[n.currentItem]).height();
        n.wrapperOuter.css("height", r + "px");
        if (!n.wrapperOuter.hasClass("autoHeight")) {
          t.setTimeout(function () {
            n.wrapperOuter.addClass("autoHeight");
          }, 0);
        }
      }
      function o() {
        i += 1;
        if (n.completeImg(r.get(0))) {
          s();
        } else if (i <= 100) {
          t.setTimeout(o, 100);
        } else {
          n.wrapperOuter.css("height", "");
        }
      }
      var n = this,
        r = e(n.$owlItems[n.currentItem]).find("img"),
        i;
      if (r.get(0) !== undefined) {
        i = 0;
        o();
      } else {
        s();
      }
    },
    completeImg: function (e) {
      var t;
      if (!e.complete) {
        return false;
      }
      t = typeof e.naturalWidth;
      if (t !== "undefined" && e.naturalWidth === 0) {
        return false;
      }
      return true;
    },
    onVisibleItems: function () {
      var t = this,
        n;
      if (t.options.addClassActive === true) {
        t.$owlItems.removeClass("active");
      }
      t.visibleItems = [];
      for (n = t.currentItem; n < t.currentItem + t.options.items; n += 1) {
        t.visibleItems.push(n);
        if (t.options.addClassActive === true) {
          e(t.$owlItems[n]).addClass("active");
        }
      }
      t.owl.visibleItems = t.visibleItems;
    },
    transitionTypes: function (e) {
      var t = this;
      t.outClass = "owl-" + e + "-out";
      t.inClass = "owl-" + e + "-in";
    },
    singleItemTransition: function () {
      function a(e) {
        return { position: "relative", left: e + "px" };
      }
      var e = this,
        t = e.outClass,
        n = e.inClass,
        r = e.$owlItems.eq(e.currentItem),
        i = e.$owlItems.eq(e.prevItem),
        s =
          Math.abs(e.positionsInArray[e.currentItem]) +
          e.positionsInArray[e.prevItem],
        o = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2,
        u = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
      e.isTransition = true;
      e.$owlWrapper.addClass("owl-origin").css({
        "-webkit-transform-origin": o + "px",
        "-moz-perspective-origin": o + "px",
        "perspective-origin": o + "px",
      });
      i.css(a(s, 10))
        .addClass(t)
        .on(u, function () {
          e.endPrev = true;
          i.off(u);
          e.clearTransStyle(i, t);
        });
      r.addClass(n).on(u, function () {
        e.endCurrent = true;
        r.off(u);
        e.clearTransStyle(r, n);
      });
    },
    clearTransStyle: function (e, t) {
      var n = this;
      e.css({ position: "", left: "" }).removeClass(t);
      if (n.endPrev && n.endCurrent) {
        n.$owlWrapper.removeClass("owl-origin");
        n.endPrev = false;
        n.endCurrent = false;
        n.isTransition = false;
      }
    },
    owlStatus: function () {
      var e = this;
      e.owl = {
        userOptions: e.userOptions,
        baseElement: e.$elem,
        userItems: e.$userItems,
        owlItems: e.$owlItems,
        currentItem: e.currentItem,
        prevItem: e.prevItem,
        visibleItems: e.visibleItems,
        isTouch: e.browser.isTouch,
        browser: e.browser,
        dragDirection: e.dragDirection,
      };
    },
    clearEvents: function () {
      var r = this;
      r.$elem.off(".owl owl mousedown.disableTextSelect");
      e(n).off(".owl owl");
      e(t).off("resize", r.resizer);
    },
    unWrap: function () {
      var e = this;
      if (e.$elem.children().length !== 0) {
        e.$owlWrapper.unwrap();
        e.$userItems.unwrap().unwrap();
        if (e.owlControls) {
          e.owlControls.remove();
        }
      }
      e.clearEvents();
      e.$elem
        .attr("style", e.$elem.data("owl-originalStyles") || "")
        .attr("class", e.$elem.data("owl-originalClasses"));
    },
    destroy: function () {
      var e = this;
      e.stop();
      t.clearInterval(e.checkVisible);
      e.unWrap();
      e.$elem.removeData();
    },
    reinit: function (t) {
      var n = this,
        r = e.extend({}, n.userOptions, t);
      n.unWrap();
      n.init(r, n.$elem);
    },
    addItem: function (e, t) {
      var n = this,
        r;
      if (!e) {
        return false;
      }
      if (n.$elem.children().length === 0) {
        n.$elem.append(e);
        n.setVars();
        return false;
      }
      n.unWrap();
      if (t === undefined || t === -1) {
        r = -1;
      } else {
        r = t;
      }
      if (r >= n.$userItems.length || r === -1) {
        n.$userItems.eq(-1).after(e);
      } else {
        n.$userItems.eq(r).before(e);
      }
      n.setVars();
    },
    removeItem: function (e) {
      var t = this,
        n;
      if (t.$elem.children().length === 0) {
        return false;
      }
      if (e === undefined || e === -1) {
        n = -1;
      } else {
        n = e;
      }
      t.unWrap();
      t.$userItems.eq(n).remove();
      t.setVars();
    },
  };
  e.fn.owlCarousel = function (t) {
    return this.each(function () {
      if (e(this).data("owl-init") === true) {
        return false;
      }
      e(this).data("owl-init", true);
      var n = Object.create(r);
      n.init(t, this);
      e.data(this, "owlCarousel", n);
    });
  };
  e.fn.owlCarousel.options = {
    items: 5,
    itemsCustom: false,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
    singleItem: false,
    itemsScaleUp: false,
    slideSpeed: 200,
    paginationSpeed: 800,
    rewindSpeed: 1e3,
    autoPlay: false,
    stopOnHover: false,
    navigation: false,
    navigationText: ["prev", "next"],
    rewindNav: true,
    scrollPerPage: false,
    pagination: true,
    paginationNumbers: false,
    responsive: true,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: t,
    baseClass: "owl-carousel",
    theme: "owl-theme",
    lazyLoad: false,
    lazyFollow: true,
    lazyEffect: "fade",
    autoHeight: false,
    jsonPath: false,
    jsonSuccess: false,
    dragBeforeAnimFinish: true,
    mouseDrag: true,
    touchDrag: true,
    addClassActive: false,
    transitionStyle: false,
    beforeUpdate: false,
    afterUpdate: false,
    beforeInit: false,
    afterInit: false,
    beforeMove: false,
    afterMove: false,
    afterAction: false,
    startDragging: false,
    afterLazyLoad: false,
  };
})(jQuery, window, document);

/* ---------------------------------------------
 isotope.pkgd.min.js
 --------------------------------------------- */
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
    function u(t, e, o) {
      var n,
        s = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, u) {
          var h = a.data(u, i);
          if (!h)
            return void r(
              i + " not initialized. Cannot call methods, i.e. " + s
            );
          var d = h[e];
          if (!d || "_" == e.charAt(0))
            return void r(s + " is not a valid method");
          var l = d.apply(h, o);
          n = void 0 === n ? l : n;
        }),
        void 0 !== n ? n : t
      );
    }
    function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (s.prototype.option ||
          (s.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = n.call(arguments, 1);
            return u(this, t, e);
          }
          return h(this, t), this;
        }),
        o(a));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var n = Array.prototype.slice,
    s = t.console,
    r =
      "undefined" == typeof s
        ? function () {}
        : function (t) {
            s.error(t);
          };
  return o(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            o = (i[t] = i[t] || []);
          return o.indexOf(e) == -1 && o.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            o = (i[t] = i[t] || {});
          return (o[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = i.indexOf(e);
          return o != -1 && i.splice(o, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var o = this._onceEvents && this._onceEvents[t], n = 0;
            n < i.length;
            n++
          ) {
            var s = i[n],
              r = o && o[s];
            r && (this.off(t, s), delete o[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        e < h;
        e++
      ) {
        var i = u[e];
        t[i] = 0;
      }
      return t;
    }
    function o(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function n() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var n = o(e);
        (r = 200 == Math.round(t(n.width))),
          (s.isBoxSizeOuter = r),
          i.removeChild(e);
      }
    }
    function s(e) {
      if (
        (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var s = o(e);
        if ("none" == s.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0;
          l < h;
          l++
        ) {
          var f = u[l],
            c = s[f],
            m = parseFloat(c);
          a[f] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          I = d && r,
          x = t(s.width);
        x !== !1 && (a.width = x + (I ? 0 : p + _));
        var S = t(s.height);
        return (
          S !== !1 && (a.height = S + (I ? 0 : y + z)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (y + z)),
          (a.outerWidth = a.width + g),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var r,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      u = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      h = u.length,
      d = !1;
    return s;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var o = e[i],
          n = o + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      });
    var o = Array.prototype.slice;
    (i.makeArray = function (t) {
      if (Array.isArray(t)) return t;
      if (null === t || void 0 === t) return [];
      var e = "object" == typeof t && "number" == typeof t.length;
      return e ? o.call(t) : [t];
    }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!o) return void n.push(t);
              e(t, o) && n.push(t);
              for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                n.push(i[s]);
            }
          }),
          n
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
          n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          clearTimeout(t);
          var e = arguments,
            s = this;
          this[n] = setTimeout(function () {
            o.apply(s, e), delete s[n];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var s = i.toDashed(o),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            u = document.querySelectorAll(".js-" + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + "-options",
            l = t.jQuery;
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s);
            } catch (a) {
              return void (
                n &&
                n.error("Error parsing " + r + " on " + t.className + ": " + a)
              );
            }
            var u = new e(t, i);
            l && l.data(t, o, u);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function o(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function n(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[r],
      h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay",
      },
      d = (o.prototype = Object.create(t.prototype));
    (d.constructor = o),
      (d._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var o = h[i] || i;
          e[o] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = t[e ? "left" : "right"],
          n = t[i ? "top" : "bottom"],
          s = parseFloat(o),
          r = parseFloat(n),
          a = this.layout.size;
        o.indexOf("%") != -1 && (s = (s / 100) * a.width),
          n.indexOf("%") != -1 && (r = (r / 100) * a.height),
          (s = isNaN(s) ? 0 : s),
          (r = isNaN(r) ? 0 : r),
          (s -= e ? a.paddingLeft : a.paddingRight),
          (r -= i ? a.paddingTop : a.paddingBottom),
          (this.position.x = s),
          (this.position.y = r);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[n];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var u = o ? "paddingTop" : "paddingBottom",
          h = o ? "top" : "bottom",
          d = o ? "bottom" : "top",
          l = this.position.y + t[u];
        (e[h] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = t == this.position.x && e == this.position.y;
        if ((this.setPosition(t, e), n && !this.isTransitioning))
          return void this.layoutPosition();
        var s = t - i,
          r = e - o,
          a = {};
        (a.transform = this.getTranslate(s, r)),
          this.transition({
            to: a,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = o ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var o = this.element.offsetHeight;
          o = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + n(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(u, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var f = { "-webkit-transform": "transform" };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          o = f[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[o],
          i(e.ingProperties) && this.disableTransition(),
          o in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[o]),
          o in e.onEnd)
        ) {
          var n = e.onEnd[o];
          n.call(this), delete e.onEnd[o];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(u, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var c = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(c);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      o
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, o, n, s) {
            return e(t, i, o, n, s);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, o, n) {
    "use strict";
    function s(t, e) {
      var i = o.getQueryElement(t);
      if (!i)
        return void (
          u &&
          u.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        h && (this.$element = h(this.element)),
        (this.options = o.extend({}, this.constructor.defaults)),
        this.option(e);
      var n = ++l;
      (this.element.outlayerGUID = n), (f[n] = this), this._create();
      var s = this._getOption("initLayout");
      s && this.layout();
    }
    function r(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var n = m[o] || 1;
      return i * n;
    }
    var u = t.console,
      h = t.jQuery,
      d = function () {},
      l = 0,
      f = {};
    (s.namespace = "outlayer"),
      (s.Item = n),
      (s.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var c = s.prototype;
    o.extend(c, e.prototype),
      (c.option = function (t) {
        o.extend(this.options, t);
      }),
      (c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (c._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (c.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (c._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            o = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var s = e[n],
            r = new i(s, this);
          o.push(r);
        }
        return o;
      }),
      (c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
      }),
      (c.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (c.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (c._init = c.layout),
      (c._resetLayout = function () {
        this.getSize();
      }),
      (c.getSize = function () {
        this.size = i(this.element);
      }),
      (c._getMeasurement = function (t, e) {
        var o,
          n = this.options[t];
        n
          ? ("string" == typeof n
              ? (o = this.element.querySelector(n))
              : n instanceof HTMLElement && (o = n),
            (this[t] = o ? i(o)[e] : n))
          : (this[t] = 0);
      }),
      (c.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (c._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var o = this._getItemLayoutPosition(t);
            (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (c._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (c._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (c._postLayout = function () {
        this.resizeContainer();
      }),
      (c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (c._getContainerSize = d),
      (c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (c._emitCompleteOnItems = function (t, e) {
        function i() {
          n.dispatchEvent(t + "Complete", null, [e]);
        }
        function o() {
          r++, r == s && i();
        }
        var n = this,
          s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
          e.once(t, o);
        });
      }),
      (c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, o), h))
          if (((this.$element = this.$element || h(this.element)), e)) {
            var n = h.Event(e);
            (n.type = t), this.$element.trigger(n, i);
          } else this.$element.trigger(t, i);
      }),
      (c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (c.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (c.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              o.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (c._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = o.makeArray(t))
          );
      }),
      (c._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (c._manageStamp = d),
      (c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(t),
          s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom,
          };
        return s;
      }),
      (c.handleEvent = o.handleEvent),
      (c.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (c.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (c.onresize = function () {
        this.resize();
      }),
      o.debounceMethod(s, "onresize", 100),
      (c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (c.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (c.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (c.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (c.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (c.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), o.removeFrom(this.items, t);
            }, this);
      }),
      (c.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
          delete this.element.outlayerGUID,
          h && h.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      }),
      (s.create = function (t, e) {
        var i = r(s);
        return (
          (i.defaults = o.extend({}, s.defaults)),
          o.extend(i.defaults, e),
          (i.compatOptions = o.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = r(n)),
          o.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (s.Item = n), s;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      o = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var o = e[i];
            this.sortData[i] = o(this.element, this);
          }
        }
      });
    var n = i.destroy;
    return (
      (i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var o = i.prototype,
      n = [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ];
    return (
      n.forEach(function (t) {
        o[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
          i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
      }),
      (o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (o.getSegmentSize = function (t, e) {
        var i = t + e,
          o = "outer" + e;
        if ((this._getMeasurement(i, o), !this[i])) {
          var n = this.getFirstItemSize();
          this[i] = (n && n[o]) || this.isotope.size["inner" + e];
        }
      }),
      (o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (o.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = Object.create(o)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return (
      (o._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (o.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var o = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - (n % o),
          a = r && r < 1 ? "round" : "floor";
        (s = Math[a](s)), (this.cols = Math.max(s, 1));
      }),
      (o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          o = e(i);
        this.containerWidth = o && o.innerWidth;
      }),
      (o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && e < 1 ? "round" : "ceil",
          o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (
          var n = this.options.horizontalOrder
              ? "_getHorizontalColPosition"
              : "_getTopColPosition",
            s = this[n](o, t),
            r = { x: this.columnWidth * s.col, y: s.y },
            a = s.y + t.size.outerHeight,
            u = o + s.col,
            h = s.col;
          h < u;
          h++
        )
          this.colYs[h] = a;
        return r;
      }),
      (o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
          e[o] = this._getColGroupY(o, t);
        return e;
      }),
      (o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = n ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (o._manageStamp = function (t) {
        var i = e(t),
          o = this._getElementOffset(t),
          n = this._getOption("originLeft"),
          s = n ? o.left : o.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
        for (
          var h = this._getOption("originTop"),
            d = (h ? o.top : o.bottom) + i.outerHeight,
            l = a;
          l <= u;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      o = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = o._getOption;
    return (
      (o._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var o = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          o
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
      return function (i, o) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s];
          if (r > a || r < a) {
            var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
            return (r > a ? 1 : -1) * h;
          }
        }
        return 0;
      };
    }
    var u = t.jQuery,
      h = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (d.Item = s), (d.LayoutMode = r);
    var l = d.prototype;
    (l._create = function () {
      (this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ["original-order"]);
      for (var t in r.modes) this._initLayoutMode(t);
    }),
      (l.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (l._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          var o = t[i];
          o.id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (l._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? n.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (l._init = l.arrange),
      (l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (l._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            o &&
            n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }
        var e,
          i,
          o,
          n = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (o = !0), t();
          });
      }),
      (l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            u && i.push(a),
              u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
          }
        }
        return { matches: i, needReveal: o, needHide: n };
      }),
      (l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering
          ? function (e) {
              return u(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return o(e.element, t);
            };
      }),
      (l.updateSortData = function (t) {
        var e;
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i);
        }
      }),
      (l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          var o = t[i];
          o.updateSortData();
        }
      });
    var f = (function () {
      function t(t) {
        if ("string" != typeof t) return t;
        var i = h(t).split(" "),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]];
        return (t = a
          ? function (t) {
              return t && a(r(t));
            }
          : function (t) {
              return t && r(t);
            });
      }
      function e(t, e) {
        return t
          ? function (e) {
              return e.getAttribute(t);
            }
          : function (t) {
              var i = t.querySelector(e);
              return i && i.textContent;
            };
      }
      return t;
    })();
    (d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (l._sort = function () {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory));
          var e = a(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      }),
      (l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (l._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (l._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            o,
            n = e.length;
          for (i = 0; i < n; i++)
            (o = e[i]), this.element.appendChild(o.element);
          var s = this._filter(e).matches;
          for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
          this.reveal(s);
        }
      });
    var c = l.remove;
    return (
      (l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var s = e[o];
          n.removeFrom(this.filteredItems, s);
        }
      }),
      (l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return (this.options.transitionDuration = i), o;
      }),
      (l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      d
    );
  });

/* ---------------------------------------------
 imagesloaded.pkgd.min.js
 --------------------------------------------- */
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function () {
  function e() {}
  function t(e, t) {
    for (var n = e.length; n--; ) if (e[n].listener === t) return n;
    return -1;
  }
  function n(e) {
    return function () {
      return this[e].apply(this, arguments);
    };
  }
  var i = e.prototype,
    r = this,
    o = r.EventEmitter;
  (i.getListeners = function (e) {
    var t,
      n,
      i = this._getEvents();
    if ("object" == typeof e) {
      t = {};
      for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
    } else t = i[e] || (i[e] = []);
    return t;
  }),
    (i.flattenListeners = function (e) {
      var t,
        n = [];
      for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
      return n;
    }),
    (i.getListenersAsObject = function (e) {
      var t,
        n = this.getListeners(e);
      return n instanceof Array && ((t = {}), (t[e] = n)), t || n;
    }),
    (i.addListener = function (e, n) {
      var i,
        r = this.getListenersAsObject(e),
        o = "object" == typeof n;
      for (i in r)
        r.hasOwnProperty(i) &&
          -1 === t(r[i], n) &&
          r[i].push(o ? n : { listener: n, once: !1 });
      return this;
    }),
    (i.on = n("addListener")),
    (i.addOnceListener = function (e, t) {
      return this.addListener(e, { listener: t, once: !0 });
    }),
    (i.once = n("addOnceListener")),
    (i.defineEvent = function (e) {
      return this.getListeners(e), this;
    }),
    (i.defineEvents = function (e) {
      for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
      return this;
    }),
    (i.removeListener = function (e, n) {
      var i,
        r,
        o = this.getListenersAsObject(e);
      for (r in o)
        o.hasOwnProperty(r) &&
          ((i = t(o[r], n)), -1 !== i && o[r].splice(i, 1));
      return this;
    }),
    (i.off = n("removeListener")),
    (i.addListeners = function (e, t) {
      return this.manipulateListeners(!1, e, t);
    }),
    (i.removeListeners = function (e, t) {
      return this.manipulateListeners(!0, e, t);
    }),
    (i.manipulateListeners = function (e, t, n) {
      var i,
        r,
        o = e ? this.removeListener : this.addListener,
        s = e ? this.removeListeners : this.addListeners;
      if ("object" != typeof t || t instanceof RegExp)
        for (i = n.length; i--; ) o.call(this, t, n[i]);
      else
        for (i in t)
          t.hasOwnProperty(i) &&
            (r = t[i]) &&
            ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
      return this;
    }),
    (i.removeEvent = function (e) {
      var t,
        n = typeof e,
        i = this._getEvents();
      if ("string" === n) delete i[e];
      else if ("object" === n)
        for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
      else delete this._events;
      return this;
    }),
    (i.removeAllListeners = n("removeEvent")),
    (i.emitEvent = function (e, t) {
      var n,
        i,
        r,
        o,
        s = this.getListenersAsObject(e);
      for (r in s)
        if (s.hasOwnProperty(r))
          for (i = s[r].length; i--; )
            (n = s[r][i]),
              n.once === !0 && this.removeListener(e, n.listener),
              (o = n.listener.apply(this, t || [])),
              o === this._getOnceReturnValue() &&
                this.removeListener(e, n.listener);
      return this;
    }),
    (i.trigger = n("emitEvent")),
    (i.emit = function (e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return this.emitEvent(e, t);
    }),
    (i.setOnceReturnValue = function (e) {
      return (this._onceReturnValue = e), this;
    }),
    (i._getOnceReturnValue = function () {
      return this.hasOwnProperty("_onceReturnValue")
        ? this._onceReturnValue
        : !0;
    }),
    (i._getEvents = function () {
      return this._events || (this._events = {});
    }),
    (e.noConflict = function () {
      return (r.EventEmitter = o), e;
    }),
    "function" == typeof define && define.amd
      ? define("eventEmitter/EventEmitter", [], function () {
          return e;
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e)
      : (this.EventEmitter = e);
}).call(this),
  (function (e) {
    function t(t) {
      var n = e.event;
      return (n.target = n.target || n.srcElement || t), n;
    }
    var n = document.documentElement,
      i = function () {};
    n.addEventListener
      ? (i = function (e, t, n) {
          e.addEventListener(t, n, !1);
        })
      : n.attachEvent &&
        (i = function (e, n, i) {
          (e[n + i] = i.handleEvent
            ? function () {
                var n = t(e);
                i.handleEvent.call(i, n);
              }
            : function () {
                var n = t(e);
                i.call(e, n);
              }),
            e.attachEvent("on" + n, e[n + i]);
        });
    var r = function () {};
    n.removeEventListener
      ? (r = function (e, t, n) {
          e.removeEventListener(t, n, !1);
        })
      : n.detachEvent &&
        (r = function (e, t, n) {
          e.detachEvent("on" + t, e[t + n]);
          try {
            delete e[t + n];
          } catch (i) {
            e[t + n] = void 0;
          }
        });
    var o = { bind: i, unbind: r };
    "function" == typeof define && define.amd
      ? define("eventie/eventie", o)
      : (e.eventie = o);
  })(this),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(
          ["eventEmitter/EventEmitter", "eventie/eventie"],
          function (n, i) {
            return t(e, n, i);
          }
        )
      : "object" == typeof exports
      ? (module.exports = t(
          e,
          require("wolfy87-eventemitter"),
          require("eventie")
        ))
      : (e.imagesLoaded = t(e, e.EventEmitter, e.eventie));
  })(window, function (e, t, n) {
    function i(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function r(e) {
      return "[object Array]" === d.call(e);
    }
    function o(e) {
      var t = [];
      if (r(e)) t = e;
      else if ("number" == typeof e.length)
        for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
      else t.push(e);
      return t;
    }
    function s(e, t, n) {
      if (!(this instanceof s)) return new s(e, t);
      "string" == typeof e && (e = document.querySelectorAll(e)),
        (this.elements = o(e)),
        (this.options = i({}, this.options)),
        "function" == typeof t ? (n = t) : i(this.options, t),
        n && this.on("always", n),
        this.getImages(),
        a && (this.jqDeferred = new a.Deferred());
      var r = this;
      setTimeout(function () {
        r.check();
      });
    }
    function f(e) {
      this.img = e;
    }
    function c(e) {
      (this.src = e), (v[e] = this);
    }
    var a = e.jQuery,
      u = e.console,
      h = u !== void 0,
      d = Object.prototype.toString;
    (s.prototype = new t()),
      (s.prototype.options = {}),
      (s.prototype.getImages = function () {
        this.images = [];
        for (var e = 0, t = this.elements.length; t > e; e++) {
          var n = this.elements[e];
          "IMG" === n.nodeName && this.addImage(n);
          var i = n.nodeType;
          if (i && (1 === i || 9 === i || 11 === i))
            for (
              var r = n.querySelectorAll("img"), o = 0, s = r.length;
              s > o;
              o++
            ) {
              var f = r[o];
              this.addImage(f);
            }
        }
      }),
      (s.prototype.addImage = function (e) {
        var t = new f(e);
        this.images.push(t);
      }),
      (s.prototype.check = function () {
        function e(e, r) {
          return (
            t.options.debug && h && u.log("confirm", e, r),
            t.progress(e),
            n++,
            n === i && t.complete(),
            !0
          );
        }
        var t = this,
          n = 0,
          i = this.images.length;
        if (((this.hasAnyBroken = !1), !i)) return this.complete(), void 0;
        for (var r = 0; i > r; r++) {
          var o = this.images[r];
          o.on("confirm", e), o.check();
        }
      }),
      (s.prototype.progress = function (e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
        var t = this;
        setTimeout(function () {
          t.emit("progress", t, e),
            t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e);
        });
      }),
      (s.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var t = this;
        setTimeout(function () {
          if ((t.emit(e, t), t.emit("always", t), t.jqDeferred)) {
            var n = t.hasAnyBroken ? "reject" : "resolve";
            t.jqDeferred[n](t);
          }
        });
      }),
      a &&
        (a.fn.imagesLoaded = function (e, t) {
          var n = new s(this, e, t);
          return n.jqDeferred.promise(a(this));
        }),
      (f.prototype = new t()),
      (f.prototype.check = function () {
        var e = v[this.img.src] || new c(this.img.src);
        if (e.isConfirmed)
          return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
        if (this.img.complete && void 0 !== this.img.naturalWidth)
          return (
            this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0
          );
        var t = this;
        e.on("confirm", function (e, n) {
          return t.confirm(e.isLoaded, n), !0;
        }),
          e.check();
      }),
      (f.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emit("confirm", this, t);
      });
    var v = {};
    return (
      (c.prototype = new t()),
      (c.prototype.check = function () {
        if (!this.isChecked) {
          var e = new Image();
          n.bind(e, "load", this),
            n.bind(e, "error", this),
            (e.src = this.src),
            (this.isChecked = !0);
        }
      }),
      (c.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (c.prototype.onload = function (e) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(e);
      }),
      (c.prototype.onerror = function (e) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(e);
      }),
      (c.prototype.confirm = function (e, t) {
        (this.isConfirmed = !0),
          (this.isLoaded = e),
          this.emit("confirm", this, t);
      }),
      (c.prototype.unbindProxyEvents = function (e) {
        n.unbind(e.target, "load", this), n.unbind(e.target, "error", this);
      }),
      s
    );
  });

/* ---------------------------------------------
 masonry.pkgd.min.js
 --------------------------------------------- */
/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, r, a) {
    function h(t, e, n) {
      var o,
        r = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, h) {
          var u = a.data(h, i);
          if (!u)
            return void s(
              i + " not initialized. Cannot call methods, i.e. " + r
            );
          var d = u[e];
          if (!d || "_" == e.charAt(0))
            return void s(r + " is not a valid method");
          var l = d.apply(u, n);
          o = void 0 === o ? l : o;
        }),
        void 0 !== o ? o : t
      );
    }
    function u(t, e) {
      t.each(function (t, n) {
        var o = a.data(n, i);
        o ? (o.option(e), o._init()) : ((o = new r(n, e)), a.data(n, i, o));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (r.prototype.option ||
          (r.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = o.call(arguments, 1);
            return h(this, t, e);
          }
          return u(this, t), this;
        }),
        n(a));
  }
  function n(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var o = Array.prototype.slice,
    r = t.console,
    s =
      "undefined" == typeof r
        ? function () {}
        : function (t) {
            r.error(t);
          };
  return n(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return -1 == n.indexOf(e) && n.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            n = (i[t] = i[t] || {});
          return (n[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var n = this._onceEvents && this._onceEvents[t], o = 0;
            o < i.length;
            o++
          ) {
            var r = i[o],
              s = n && n[r];
            s && (this.off(t, r), delete n[r]), r.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = -1 == t.indexOf("%") && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        u > e;
        e++
      ) {
        var i = h[e];
        t[i] = 0;
      }
      return t;
    }
    function n(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function o() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var o = n(e);
        (s = 200 == Math.round(t(o.width))),
          (r.isBoxSizeOuter = s),
          i.removeChild(e);
      }
    }
    function r(e) {
      if (
        (o(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var r = n(e);
        if ("none" == r.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == r.boxSizing), l = 0;
          u > l;
          l++
        ) {
          var c = h[l],
            f = r[c],
            m = parseFloat(f);
          a[c] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          g = a.paddingTop + a.paddingBottom,
          y = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          E = d && s,
          b = t(r.width);
        b !== !1 && (a.width = b + (E ? 0 : p + _));
        var x = t(r.height);
        return (
          x !== !1 && (a.height = x + (E ? 0 : g + z)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (g + z)),
          (a.outerWidth = a.width + y),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var s,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      h = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      u = h.length,
      d = !1;
    return r;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i],
          o = n + "MatchesSelector";
        if (t[o]) return o;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      });
    var n = Array.prototype.slice;
    (i.makeArray = function (t) {
      if (Array.isArray(t)) return t;
      if (null === t || void 0 === t) return [];
      var e = "object" == typeof t && "number" == typeof t.length;
      return e ? n.call(t) : [t];
    }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, n) {
        t = i.makeArray(t);
        var o = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!n) return void o.push(t);
              e(t, n) && o.push(t);
              for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                o.push(i[r]);
            }
          }),
          o
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var n = t.prototype[e],
          o = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[o];
          clearTimeout(t);
          var e = arguments,
            r = this;
          this[o] = setTimeout(function () {
            n.apply(r, e), delete r[o];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var o = t.console;
    return (
      (i.htmlInit = function (e, n) {
        i.docReady(function () {
          var r = i.toDashed(n),
            s = "data-" + r,
            a = document.querySelectorAll("[" + s + "]"),
            h = document.querySelectorAll(".js-" + r),
            u = i.makeArray(a).concat(i.makeArray(h)),
            d = s + "-options",
            l = t.jQuery;
          u.forEach(function (t) {
            var i,
              r = t.getAttribute(s) || t.getAttribute(d);
            try {
              i = r && JSON.parse(r);
            } catch (a) {
              return void (
                o &&
                o.error("Error parsing " + s + " on " + t.className + ": " + a)
              );
            }
            var h = new e(t, i);
            l && l.data(t, n, h);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function n(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function o(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var r = document.documentElement.style,
      s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
      h = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[s],
      u = {
        transform: a,
        transition: s,
        transitionDuration: s + "Duration",
        transitionProperty: s + "Property",
        transitionDelay: s + "Delay",
      },
      d = (n.prototype = Object.create(t.prototype));
    (d.constructor = n),
      (d._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var n = u[i] || i;
          e[n] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          n = t[e ? "left" : "right"],
          o = t[i ? "top" : "bottom"],
          r = parseFloat(n),
          s = parseFloat(o),
          a = this.layout.size;
        -1 != n.indexOf("%") && (r = (r / 100) * a.width),
          -1 != o.indexOf("%") && (s = (s / 100) * a.height),
          (r = isNaN(r) ? 0 : r),
          (s = isNaN(s) ? 0 : s),
          (r -= e ? a.paddingLeft : a.paddingRight),
          (s -= i ? a.paddingTop : a.paddingBottom),
          (this.position.x = r),
          (this.position.y = s);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          o = i ? "paddingLeft" : "paddingRight",
          r = i ? "left" : "right",
          s = i ? "right" : "left",
          a = this.position.x + t[o];
        (e[r] = this.getXValue(a)), (e[s] = "");
        var h = n ? "paddingTop" : "paddingBottom",
          u = n ? "top" : "bottom",
          d = n ? "bottom" : "top",
          l = this.position.y + t[h];
        (e[u] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          n = this.position.y,
          o = t == this.position.x && e == this.position.y;
        if ((this.setPosition(t, e), o && !this.isTransitioning))
          return void this.layoutPosition();
        var r = t - i,
          s = e - n,
          a = {};
        (a.transform = this.getTranslate(r, s)),
          this.transition({
            to: a,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = n ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var n = this.element.offsetHeight;
          n = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + o(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(h, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var c = { "-webkit-transform": "transform" };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          n = c[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[n],
          i(e.ingProperties) && this.disableTransition(),
          n in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
          n in e.onEnd)
        ) {
          var o = e.onEnd[n];
          o.call(this), delete e.onEnd[n];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(h, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var f = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(f);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return s && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      n
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, n, o, r) {
            return e(t, i, n, o, r);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, n, o) {
    "use strict";
    function r(t, e) {
      var i = n.getQueryElement(t);
      if (!i)
        return void (
          h &&
          h.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        u && (this.$element = u(this.element)),
        (this.options = n.extend({}, this.constructor.defaults)),
        this.option(e);
      var o = ++l;
      (this.element.outlayerGUID = o), (c[o] = this), this._create();
      var r = this._getOption("initLayout");
      r && this.layout();
    }
    function s(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        n = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var o = m[n] || 1;
      return i * o;
    }
    var h = t.console,
      u = t.jQuery,
      d = function () {},
      l = 0,
      c = {};
    (r.namespace = "outlayer"),
      (r.Item = o),
      (r.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var f = r.prototype;
    n.extend(f, e.prototype),
      (f.option = function (t) {
        n.extend(this.options, t);
      }),
      (f._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (f._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (f.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (f._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            n = [],
            o = 0;
          o < e.length;
          o++
        ) {
          var r = e[o],
            s = new i(r, this);
          n.push(s);
        }
        return n;
      }),
      (f._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector);
      }),
      (f.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (f.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (f._init = f.layout),
      (f._resetLayout = function () {
        this.getSize();
      }),
      (f.getSize = function () {
        this.size = i(this.element);
      }),
      (f._getMeasurement = function (t, e) {
        var n,
          o = this.options[t];
        o
          ? ("string" == typeof o
              ? (n = this.element.querySelector(o))
              : o instanceof HTMLElement && (n = o),
            (this[t] = n ? i(n)[e] : o))
          : (this[t] = 0);
      }),
      (f.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (f._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (f._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var n = this._getItemLayoutPosition(t);
            (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (f._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (f._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (f.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (f._positionItem = function (t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
      }),
      (f._postLayout = function () {
        this.resizeContainer();
      }),
      (f.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (f._getContainerSize = d),
      (f._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (f._emitCompleteOnItems = function (t, e) {
        function i() {
          o.dispatchEvent(t + "Complete", null, [e]);
        }
        function n() {
          s++, s == r && i();
        }
        var o = this,
          r = e.length;
        if (!e || !r) return void i();
        var s = 0;
        e.forEach(function (e) {
          e.once(t, n);
        });
      }),
      (f.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), u))
          if (((this.$element = this.$element || u(this.element)), e)) {
            var o = u.Event(e);
            (o.type = t), this.$element.trigger(o, i);
          } else this.$element.trigger(t, i);
      }),
      (f.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (f.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (f.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (f.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              n.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (f._find = function (t) {
        return t
          ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = n.makeArray(t)))
          : void 0;
      }),
      (f._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (f._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (f._manageStamp = d),
      (f._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect,
          o = i(t),
          r = {
            left: e.left - n.left - o.marginLeft,
            top: e.top - n.top - o.marginTop,
            right: n.right - e.right - o.marginRight,
            bottom: n.bottom - e.bottom - o.marginBottom,
          };
        return r;
      }),
      (f.handleEvent = n.handleEvent),
      (f.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (f.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (f.onresize = function () {
        this.resize();
      }),
      n.debounceMethod(r, "onresize", 100),
      (f.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (f.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (f.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (f.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (f.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (f.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (f.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (f.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (f.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (f.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (f.getItems = function (t) {
        t = n.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (f.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), n.removeFrom(this.items, t);
            }, this);
      }),
      (f.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete c[e],
          delete this.element.outlayerGUID,
          u && u.removeData(this.element, this.constructor.namespace);
      }),
      (r.data = function (t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && c[e];
      }),
      (r.create = function (t, e) {
        var i = s(r);
        return (
          (i.defaults = n.extend({}, r.defaults)),
          n.extend(i.defaults, e),
          (i.compatOptions = n.extend({}, r.compatOptions)),
          (i.namespace = t),
          (i.data = r.data),
          (i.Item = s(o)),
          n.htmlInit(i, t),
          u && u.bridget && u.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (r.Item = o), r;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return (
      (n._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (n.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var n = (this.columnWidth += this.gutter),
          o = this.containerWidth + this.gutter,
          r = o / n,
          s = n - (o % n),
          a = s && 1 > s ? "round" : "floor";
        (r = Math[a](r)), (this.cols = Math.max(r, 1));
      }),
      (n.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          n = e(i);
        this.containerWidth = n && n.innerWidth;
      }),
      (n._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && 1 > e ? "round" : "ceil",
          n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (
          var o = this.options.horizontalOrder
              ? "_getHorizontalColPosition"
              : "_getTopColPosition",
            r = this[o](n, t),
            s = { x: this.columnWidth * r.col, y: r.y },
            a = r.y + t.size.outerHeight,
            h = n + r.col,
            u = r.col;
          h > u;
          u++
        )
          this.colYs[u] = a;
        return s;
      }),
      (n._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (n._getTopColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++)
          e[n] = this._getColGroupY(n, t);
        return e;
      }),
      (n._getColGroupY = function (t, e) {
        if (2 > e) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (n._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          n = t > 1 && i + t > this.cols;
        i = n ? 0 : i;
        var o = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = o ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (n._manageStamp = function (t) {
        var i = e(t),
          n = this._getElementOffset(t),
          o = this._getOption("originLeft"),
          r = o ? n.left : n.right,
          s = r + i.outerWidth,
          a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var h = Math.floor(s / this.columnWidth);
        (h -= s % this.columnWidth ? 0 : 1), (h = Math.min(this.cols - 1, h));
        for (
          var u = this._getOption("originTop"),
            d = (u ? n.top : n.bottom) + i.outerHeight,
            l = a;
          h >= l;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (n._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (n._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (n.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  });

/*! Magnific Popup - v1.0.0 - 2015-01-03
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2015 Dmitry Semenov; */
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : e(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (e) {
  var t,
    n,
    i,
    o,
    a,
    r,
    s = "Close",
    l = "BeforeClose",
    c = "MarkupParse",
    d = "Open",
    u = "Change",
    p = ".mfp",
    f = "mfp-ready",
    m = "mfp-removing",
    g = "mfp-prevent-close",
    h = function () {},
    v = !!window.jQuery,
    y = e(window),
    C = function (e, n) {
      t.ev.on("mfp" + e + p, n);
    },
    w = function (t, n, i, o) {
      var a = document.createElement("div");
      return (
        (a.className = "mfp-" + t),
        i && (a.innerHTML = i),
        o ? n && n.appendChild(a) : ((a = e(a)), n && a.appendTo(n)),
        a
      );
    },
    b = function (n, i) {
      t.ev.triggerHandler("mfp" + n, i),
        t.st.callbacks &&
          ((n = n.charAt(0).toLowerCase() + n.slice(1)),
          t.st.callbacks[n] &&
            t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
    },
    I = function (n) {
      return (
        (n === r && t.currTemplate.closeBtn) ||
          ((t.currTemplate.closeBtn = e(
            t.st.closeMarkup.replace("%title%", t.st.tClose)
          )),
          (r = n)),
        t.currTemplate.closeBtn
      );
    },
    x = function () {
      e.magnificPopup.instance ||
        ((t = new h()).init(), (e.magnificPopup.instance = t));
    };
  (h.prototype = {
    constructor: h,
    init: function () {
      var n = navigator.appVersion;
      (t.isIE7 = -1 !== n.indexOf("MSIE 7.")),
        (t.isIE8 = -1 !== n.indexOf("MSIE 8.")),
        (t.isLowIE = t.isIE7 || t.isIE8),
        (t.isAndroid = /android/gi.test(n)),
        (t.isIOS = /iphone|ipad|ipod/gi.test(n)),
        (t.supportsTransition = (function () {
          var e = document.createElement("p").style,
            t = ["ms", "O", "Moz", "Webkit"];
          if (void 0 !== e.transition) return !0;
          for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
          return !1;
        })()),
        (t.probablyMobile =
          t.isAndroid ||
          t.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (i = e(document)),
        (t.popupsCache = {});
    },
    open: function (n) {
      if (!1 === n.isObj) {
        (t.items = n.items.toArray()), (t.index = 0);
        var o,
          r,
          s = n.items;
        for (o = 0; o < s.length; o++)
          if (((r = s[o]).parsed && (r = r.el[0]), r === n.el[0])) {
            t.index = o;
            break;
          }
      } else
        (t.items = e.isArray(n.items) ? n.items : [n.items]),
          (t.index = n.index || 0);
      if (!t.isOpen) {
        (t.types = []),
          (a = ""),
          (t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : i),
          n.key
            ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}),
              (t.currTemplate = t.popupsCache[n.key]))
            : (t.currTemplate = {}),
          (t.st = e.extend(!0, {}, e.magnificPopup.defaults, n)),
          (t.fixedContentPos =
            "auto" === t.st.fixedContentPos
              ? !t.probablyMobile
              : t.st.fixedContentPos),
          t.st.modal &&
            ((t.st.closeOnContentClick = !1),
            (t.st.closeOnBgClick = !1),
            (t.st.showCloseBtn = !1),
            (t.st.enableEscapeKey = !1)),
          t.bgOverlay ||
            ((t.bgOverlay = w("bg").on("click" + p, function () {
              t.close();
            })),
            (t.wrap = w("wrap")
              .attr("tabindex", -1)
              .on("click" + p, function (e) {
                t._checkIfClose(e.target) && t.close();
              })),
            (t.container = w("container", t.wrap))),
          (t.contentContainer = w("content")),
          t.st.preloader &&
            (t.preloader = w("preloader", t.container, t.st.tLoading));
        var l = e.magnificPopup.modules;
        for (o = 0; o < l.length; o++) {
          var u = l[o];
          t["init" + (u = u.charAt(0).toUpperCase() + u.slice(1))].call(t);
        }
        b("BeforeOpen"),
          t.st.showCloseBtn &&
            (t.st.closeBtnInside
              ? (C(c, function (e, t, n, i) {
                  n.close_replaceWith = I(i.type);
                }),
                (a += " mfp-close-btn-in"))
              : t.wrap.append(I())),
          t.st.alignTop && (a += " mfp-align-top"),
          t.wrap.css(
            t.fixedContentPos
              ? {
                  overflow: t.st.overflowY,
                  overflowX: "hidden",
                  overflowY: t.st.overflowY,
                }
              : { top: y.scrollTop(), position: "absolute" }
          ),
          (!1 !== t.st.fixedBgPos &&
            ("auto" !== t.st.fixedBgPos || t.fixedContentPos)) ||
            t.bgOverlay.css({ height: i.height(), position: "absolute" }),
          t.st.enableEscapeKey &&
            i.on("keyup" + p, function (e) {
              27 === e.keyCode && t.close();
            }),
          y.on("resize" + p, function () {
            t.updateSize();
          }),
          t.st.closeOnContentClick || (a += " mfp-auto-cursor"),
          a && t.wrap.addClass(a);
        var m = (t.wH = y.height()),
          g = {};
        if (t.fixedContentPos && t._hasScrollBar(m)) {
          var h = t._getScrollbarSize();
          h && (g.marginRight = h);
        }
        t.fixedContentPos &&
          (t.isIE7
            ? e("body, html").css("overflow", "hidden")
            : (g.overflow = "hidden"));
        var v = t.st.mainClass;
        return (
          t.isIE7 && (v += " mfp-ie7"),
          v && t._addClassToMFP(v),
          t.updateItemHTML(),
          b("BuildControls"),
          e("html").css(g),
          t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)),
          (t._lastFocusedEl = document.activeElement),
          setTimeout(function () {
            t.content
              ? (t._addClassToMFP(f), t._setFocus())
              : t.bgOverlay.addClass(f),
              i.on("focusin" + p, t._onFocusIn);
          }, 16),
          (t.isOpen = !0),
          t.updateSize(m),
          b(d),
          n
        );
      }
      t.updateItemHTML();
    },
    close: function () {
      t.isOpen &&
        (b(l),
        (t.isOpen = !1),
        t.st.removalDelay && !t.isLowIE && t.supportsTransition
          ? (t._addClassToMFP(m),
            setTimeout(function () {
              t._close();
            }, t.st.removalDelay))
          : t._close());
    },
    _close: function () {
      b(s);
      var n = m + " " + f + " ";
      if (
        (t.bgOverlay.detach(),
        t.wrap.detach(),
        t.container.empty(),
        t.st.mainClass && (n += t.st.mainClass + " "),
        t._removeClassFromMFP(n),
        t.fixedContentPos)
      ) {
        var o = { marginRight: "" };
        t.isIE7 ? e("body, html").css("overflow", "") : (o.overflow = ""),
          e("html").css(o);
      }
      i.off("keyup.mfp focusin" + p),
        t.ev.off(p),
        t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        t.bgOverlay.attr("class", "mfp-bg"),
        t.container.attr("class", "mfp-container"),
        !t.st.showCloseBtn ||
          (t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type]) ||
          (t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach()),
        t._lastFocusedEl && e(t._lastFocusedEl).focus(),
        (t.currItem = null),
        (t.content = null),
        (t.currTemplate = null),
        (t.prevHeight = 0),
        b("AfterClose");
    },
    updateSize: function (e) {
      if (t.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
          i = window.innerHeight * n;
        t.wrap.css("height", i), (t.wH = i);
      } else t.wH = e || y.height();
      t.fixedContentPos || t.wrap.css("height", t.wH), b("Resize");
    },
    updateItemHTML: function () {
      var n = t.items[t.index];
      t.contentContainer.detach(),
        t.content && t.content.detach(),
        n.parsed || (n = t.parseEl(t.index));
      var i = n.type;
      if (
        (b("BeforeChange", [t.currItem ? t.currItem.type : "", i]),
        (t.currItem = n),
        !t.currTemplate[i])
      ) {
        var a = !!t.st[i] && t.st[i].markup;
        b("FirstMarkupParse", a), (t.currTemplate[i] = !a || e(a));
      }
      o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
      var r = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](
        n,
        t.currTemplate[i]
      );
      t.appendContent(r, i),
        (n.preloaded = !0),
        b(u, n),
        (o = n.type),
        t.container.prepend(t.contentContainer),
        b("AfterChange");
    },
    appendContent: function (e, n) {
      (t.content = e),
        e
          ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n]
            ? t.content.find(".mfp-close").length || t.content.append(I())
            : (t.content = e)
          : (t.content = ""),
        b("BeforeAppend"),
        t.container.addClass("mfp-" + n + "-holder"),
        t.contentContainer.append(t.content);
    },
    parseEl: function (n) {
      var i,
        o = t.items[n];
      if (
        (o.tagName
          ? (o = { el: e(o) })
          : ((i = o.type), (o = { data: o, src: o.src })),
        o.el)
      ) {
        for (var a = t.types, r = 0; r < a.length; r++)
          if (o.el.hasClass("mfp-" + a[r])) {
            i = a[r];
            break;
          }
        (o.src = o.el.attr("data-mfp-src")),
          o.src || (o.src = o.el.attr("href"));
      }
      return (
        (o.type = i || t.st.type || "inline"),
        (o.index = n),
        (o.parsed = !0),
        (t.items[n] = o),
        b("ElementParse", o),
        t.items[n]
      );
    },
    addGroup: function (e, n) {
      var i = function (i) {
        (i.mfpEl = this), t._openClick(i, e, n);
      };
      n || (n = {});
      var o = "click.magnificPopup";
      (n.mainEl = e),
        n.items
          ? ((n.isObj = !0), e.off(o).on(o, i))
          : ((n.isObj = !1),
            n.delegate
              ? e.off(o).on(o, n.delegate, i)
              : ((n.items = e), e.off(o).on(o, i)));
    },
    _openClick: function (n, i, o) {
      if (
        (void 0 !== o.midClick
          ? o.midClick
          : e.magnificPopup.defaults.midClick) ||
        (2 !== n.which && !n.ctrlKey && !n.metaKey)
      ) {
        var a =
          void 0 !== o.disableOn
            ? o.disableOn
            : e.magnificPopup.defaults.disableOn;
        if (a)
          if (e.isFunction(a)) {
            if (!a.call(t)) return !0;
          } else if (y.width() < a) return !0;
        n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()),
          (o.el = e(n.mfpEl)),
          o.delegate && (o.items = i.find(o.delegate)),
          t.open(o);
      }
    },
    updateStatus: function (e, i) {
      if (t.preloader) {
        n !== e && t.container.removeClass("mfp-s-" + n),
          i || "loading" !== e || (i = t.st.tLoading);
        var o = { status: e, text: i };
        b("UpdateStatus", o),
          (e = o.status),
          (i = o.text),
          t.preloader.html(i),
          t.preloader.find("a").on("click", function (e) {
            e.stopImmediatePropagation();
          }),
          t.container.addClass("mfp-s-" + e),
          (n = e);
      }
    },
    _checkIfClose: function (n) {
      if (!e(n).hasClass(g)) {
        var i = t.st.closeOnContentClick,
          o = t.st.closeOnBgClick;
        if (
          (i && o) ||
          !t.content ||
          e(n).hasClass("mfp-close") ||
          (t.preloader && n === t.preloader[0])
        )
          return !0;
        if (n === t.content[0] || e.contains(t.content[0], n)) {
          if (i) return !0;
        } else if (o && e.contains(document, n)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    },
    _removeClassFromMFP: function (e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    },
    _hasScrollBar: function (e) {
      return (
        (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || y.height())
      );
    },
    _setFocus: function () {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
    },
    _onFocusIn: function (n) {
      return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target)
        ? void 0
        : (t._setFocus(), !1);
    },
    _parseMarkup: function (t, n, i) {
      var o;
      i.data && (n = e.extend(i.data, n)),
        b(c, [t, n, i]),
        e.each(n, function (e, n) {
          if (void 0 === n || !1 === n) return !0;
          if ((o = e.split("_")).length > 1) {
            var i = t.find(p + "-" + o[0]);
            if (i.length > 0) {
              var a = o[1];
              "replaceWith" === a
                ? i[0] !== n[0] && i.replaceWith(n)
                : "img" === a
                ? i.is("img")
                  ? i.attr("src", n)
                  : i.replaceWith(
                      '<img src="' + n + '" class="' + i.attr("class") + '" />'
                    )
                : i.attr(o[1], n);
            }
          } else t.find(p + "-" + e).html(n);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");
        (e.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(e),
          (t.scrollbarSize = e.offsetWidth - e.clientWidth),
          document.body.removeChild(e);
      }
      return t.scrollbarSize;
    },
  }),
    (e.magnificPopup = {
      instance: null,
      proto: h.prototype,
      modules: [],
      open: function (t, n) {
        return (
          x(),
          ((t = t ? e.extend(!0, {}, t) : {}).isObj = !0),
          (t.index = n || 0),
          this.instance.open(t)
        );
      },
      close: function () {
        return e.magnificPopup.instance && e.magnificPopup.instance.close();
      },
      registerModule: function (t, n) {
        n.options && (e.magnificPopup.defaults[t] = n.options),
          e.extend(this.proto, n.proto),
          this.modules.push(t);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&times;<span class="visually-hidden">Close</span></button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
      },
    }),
    (e.fn.magnificPopup = function (n) {
      x();
      var i = e(this);
      if ("string" == typeof n)
        if ("open" === n) {
          var o,
            a = v ? i.data("magnificPopup") : i[0].magnificPopup,
            r = parseInt(arguments[1], 10) || 0;
          a.items
            ? (o = a.items[r])
            : ((o = i), a.delegate && (o = o.find(a.delegate)), (o = o.eq(r))),
            t._openClick({ mfpEl: o }, i, a);
        } else
          t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
      else
        (n = e.extend(!0, {}, n)),
          v ? i.data("magnificPopup", n) : (i[0].magnificPopup = n),
          t.addGroup(i, n);
      return i;
    });
  var k,
    T,
    E,
    _ = "inline",
    S = function () {
      E && (T.after(E.addClass(k)).detach(), (E = null));
    };
  e.magnificPopup.registerModule(_, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        t.types.push(_),
          C(s + "." + _, function () {
            S();
          });
      },
      getInline: function (n, i) {
        if ((S(), n.src)) {
          var o = t.st.inline,
            a = e(n.src);
          if (a.length) {
            var r = a[0].parentNode;
            r &&
              r.tagName &&
              (T || ((T = w((k = o.hiddenClass))), (k = "mfp-" + k)),
              (E = a.after(T).detach().removeClass(k))),
              t.updateStatus("ready");
          } else t.updateStatus("error", o.tNotFound), (a = e("<div>"));
          return (n.inlineElement = a), a;
        }
        return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
      },
    },
  });
  var P,
    O = "ajax",
    z = function () {
      P && e(document.body).removeClass(P);
    },
    M = function () {
      z(), t.req && t.req.abort();
    };
  e.magnificPopup.registerModule(O, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        t.types.push(O),
          (P = t.st.ajax.cursor),
          C(s + "." + O, M),
          C("BeforeChange." + O, M);
      },
      getAjax: function (n) {
        P && e(document.body).addClass(P), t.updateStatus("loading");
        var i = e.extend(
          {
            url: n.src,
            success: function (i, o, a) {
              var r = { data: i, xhr: a };
              b("ParseAjax", r),
                t.appendContent(e(r.data), O),
                (n.finished = !0),
                z(),
                t._setFocus(),
                setTimeout(function () {
                  t.wrap.addClass(f);
                }, 16),
                t.updateStatus("ready"),
                b("AjaxContentAdded");
            },
            error: function () {
              z(),
                (n.finished = n.loadError = !0),
                t.updateStatus(
                  "error",
                  t.st.ajax.tError.replace("%url%", n.src)
                );
            },
          },
          t.st.ajax.settings
        );
        return (t.req = e.ajax(i)), "";
      },
    },
  });
  var B,
    F,
    H = function (n) {
      if (n.data && void 0 !== n.data.title) return n.data.title;
      var i = t.st.image.titleSrc;
      if (i) {
        if (e.isFunction(i)) return i.call(t, n);
        if (n.el) return n.el.attr(i) || "";
      }
      return "";
    };
  e.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var n = t.st.image,
          i = ".image";
        t.types.push("image"),
          C(d + i, function () {
            "image" === t.currItem.type &&
              n.cursor &&
              e(document.body).addClass(n.cursor);
          }),
          C(s + i, function () {
            n.cursor && e(document.body).removeClass(n.cursor),
              y.off("resize" + p);
          }),
          C("Resize" + i, t.resizeImage),
          t.isLowIE && C("AfterChange", t.resizeImage);
      },
      resizeImage: function () {
        var e = t.currItem;
        if (e && e.img && t.st.image.verticalFit) {
          var n = 0;
          t.isLowIE &&
            (n =
              parseInt(e.img.css("padding-top"), 10) +
              parseInt(e.img.css("padding-bottom"), 10)),
            e.img.css("max-height", t.wH - n);
        }
      },
      _onImageHasSize: function (e) {
        e.img &&
          ((e.hasSize = !0),
          B && clearInterval(B),
          (e.isCheckingImgSize = !1),
          b("ImageHasSize", e),
          e.imgHidden &&
            (t.content && t.content.removeClass("mfp-loading"),
            (e.imgHidden = !1)));
      },
      findImageSize: function (e) {
        var n = 0,
          i = e.img[0],
          o = function (a) {
            B && clearInterval(B),
              (B = setInterval(function () {
                return i.naturalWidth > 0
                  ? void t._onImageHasSize(e)
                  : (n > 200 && clearInterval(B),
                    void (3 == ++n
                      ? o(10)
                      : 40 === n
                      ? o(50)
                      : 100 === n && o(500)));
              }, a));
          };
        o(1);
      },
      getImage: function (n, i) {
        var o = 0,
          a = function () {
            n &&
              (n.img[0].complete
                ? (n.img.off(".mfploader"),
                  n === t.currItem &&
                    (t._onImageHasSize(n), t.updateStatus("ready")),
                  (n.hasSize = !0),
                  (n.loaded = !0),
                  b("ImageLoadComplete"))
                : 200 > ++o
                ? setTimeout(a, 100)
                : r());
          },
          r = function () {
            n &&
              (n.img.off(".mfploader"),
              n === t.currItem &&
                (t._onImageHasSize(n),
                t.updateStatus("error", s.tError.replace("%url%", n.src))),
              (n.hasSize = !0),
              (n.loaded = !0),
              (n.loadError = !0));
          },
          s = t.st.image,
          l = i.find(".mfp-img");
        if (l.length) {
          var c = document.createElement("img");
          (c.className = "mfp-img"),
            n.el &&
              n.el.find("img").length &&
              (c.alt = n.el.find("img").attr("alt")),
            (n.img = e(c).on("load.mfploader", a).on("error.mfploader", r)),
            (c.src = n.src),
            l.is("img") && (n.img = n.img.clone()),
            (c = n.img[0]).naturalWidth > 0
              ? (n.hasSize = !0)
              : c.width || (n.hasSize = !1);
        }
        return (
          t._parseMarkup(i, { title: H(n), img_replaceWith: n.img }, n),
          t.resizeImage(),
          n.hasSize
            ? (B && clearInterval(B),
              n.loadError
                ? (i.addClass("mfp-loading"),
                  t.updateStatus("error", s.tError.replace("%url%", n.src)))
                : (i.removeClass("mfp-loading"), t.updateStatus("ready")),
              i)
            : (t.updateStatus("loading"),
              (n.loading = !0),
              n.hasSize ||
                ((n.imgHidden = !0),
                i.addClass("mfp-loading"),
                t.findImageSize(n)),
              i)
        );
      },
    },
  }),
    e.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function (e) {
          return e.is("img") ? e : e.find("img");
        },
      },
      proto: {
        initZoom: function () {
          var e,
            n = t.st.zoom,
            i = ".zoom";
          if (n.enabled && t.supportsTransition) {
            var o,
              a,
              r = n.duration,
              c = function (e) {
                var t = e
                    .clone()
                    .removeAttr("style")
                    .removeAttr("class")
                    .addClass("mfp-animated-image"),
                  i = "all " + n.duration / 1e3 + "s " + n.easing,
                  o = {
                    position: "fixed",
                    zIndex: 9999,
                    left: 0,
                    top: 0,
                    "-webkit-backface-visibility": "hidden",
                  },
                  a = "transition";
                return (
                  (o["-webkit-" + a] =
                    o["-moz-" + a] =
                    o["-o-" + a] =
                    o[a] =
                      i),
                  t.css(o),
                  t
                );
              },
              d = function () {
                t.content.css("visibility", "visible");
              };
            C("BuildControls" + i, function () {
              if (t._allowZoom()) {
                if (
                  (clearTimeout(o),
                  t.content.css("visibility", "hidden"),
                  !(e = t._getItemToZoom()))
                )
                  return void d();
                (a = c(e)).css(t._getOffset()),
                  t.wrap.append(a),
                  (o = setTimeout(function () {
                    a.css(t._getOffset(!0)),
                      (o = setTimeout(function () {
                        d(),
                          setTimeout(function () {
                            a.remove(), (e = a = null), b("ZoomAnimationEnded");
                          }, 16);
                      }, r));
                  }, 16));
              }
            }),
              C(l + i, function () {
                if (t._allowZoom()) {
                  if ((clearTimeout(o), (t.st.removalDelay = r), !e)) {
                    if (!(e = t._getItemToZoom())) return;
                    a = c(e);
                  }
                  a.css(t._getOffset(!0)),
                    t.wrap.append(a),
                    t.content.css("visibility", "hidden"),
                    setTimeout(function () {
                      a.css(t._getOffset());
                    }, 16);
                }
              }),
              C(s + i, function () {
                t._allowZoom() && (d(), a && a.remove(), (e = null));
              });
          }
        },
        _allowZoom: function () {
          return "image" === t.currItem.type;
        },
        _getItemToZoom: function () {
          return !!t.currItem.hasSize && t.currItem.img;
        },
        _getOffset: function (n) {
          var i,
            o = (i = n
              ? t.currItem.img
              : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
            a = parseInt(i.css("padding-top"), 10),
            r = parseInt(i.css("padding-bottom"), 10);
          o.top -= e(window).scrollTop() - a;
          var s = {
            width: i.width(),
            height: (v ? i.innerHeight() : i[0].offsetHeight) - r - a,
          };
          return (
            void 0 === F &&
              (F = void 0 !== document.createElement("p").style.MozTransform),
            F
              ? (s["-moz-transform"] = s.transform =
                  "translate(" + o.left + "px," + o.top + "px)")
              : ((s.left = o.left), (s.top = o.top)),
            s
          );
        },
      },
    });
  var L = "iframe",
    A = function (e) {
      if (t.currTemplate[L]) {
        var n = t.currTemplate[L].find("iframe");
        n.length &&
          (e || (n[0].src = "//about:blank"),
          t.isIE8 && n.css("display", e ? "block" : "none"));
      }
    };
  e.magnificPopup.registerModule(L, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "https://www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        t.types.push(L),
          C("BeforeChange", function (e, t, n) {
            t !== n && (t === L ? A() : n === L && A(!0));
          }),
          C(s + "." + L, function () {
            A();
          });
      },
      getIframe: function (n, i) {
        var o = n.src,
          a = t.st.iframe;
        e.each(a.patterns, function () {
          return o.indexOf(this.index) > -1
            ? (this.id &&
                (o =
                  "string" == typeof this.id
                    ? o.substr(
                        o.lastIndexOf(this.id) + this.id.length,
                        o.length
                      )
                    : this.id.call(this, o)),
              (o = this.src.replace("%id%", o)),
              !1)
            : void 0;
        });
        var r = {};
        return (
          a.srcAction && (r[a.srcAction] = o),
          t._parseMarkup(i, r, n),
          t.updateStatus("ready"),
          i
        );
      },
    },
  });
  var j = function (e) {
      var n = t.items.length;
      return e > n - 1 ? e - n : 0 > e ? n + e : e;
    },
    N = function (e, t, n) {
      return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
    };
  e.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><span class="visually-hidden">%title%</span></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var n = t.st.gallery,
          o = ".mfp-gallery",
          r = Boolean(e.fn.mfpFastClick);
        return (
          (t.direction = !0),
          !!n &&
            !!n.enabled &&
            ((a += " mfp-gallery"),
            C(d + o, function () {
              n.navigateByImgClick &&
                t.wrap.on("click" + o, ".mfp-img", function () {
                  return t.items.length > 1 ? (t.next(), !1) : void 0;
                }),
                i.on("keydown" + o, function (e) {
                  37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
                });
            }),
            C("UpdateStatus" + o, function (e, n) {
              n.text && (n.text = N(n.text, t.currItem.index, t.items.length));
            }),
            C(c + o, function (e, i, o, a) {
              var r = t.items.length;
              o.counter = r > 1 ? N(n.tCounter, a.index, r) : "";
            }),
            C("BuildControls" + o, function () {
              if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                var i = n.arrowMarkup,
                  o = (t.arrowLeft = e(
                    i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")
                  ).addClass(g)),
                  a = (t.arrowRight = e(
                    i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")
                  ).addClass(g)),
                  s = r ? "mfpFastClick" : "click";
                o[s](function () {
                  t.prev();
                }),
                  a[s](function () {
                    t.next();
                  }),
                  t.isIE7 &&
                    (w("b", o[0], !1, !0),
                    w("a", o[0], !1, !0),
                    w("b", a[0], !1, !0),
                    w("a", a[0], !1, !0)),
                  t.container.append(o.add(a));
              }
            }),
            C(u + o, function () {
              t._preloadTimeout && clearTimeout(t._preloadTimeout),
                (t._preloadTimeout = setTimeout(function () {
                  t.preloadNearbyImages(), (t._preloadTimeout = null);
                }, 16));
            }),
            void C(s + o, function () {
              i.off(o),
                t.wrap.off("click" + o),
                t.arrowLeft &&
                  r &&
                  t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),
                (t.arrowRight = t.arrowLeft = null);
            }))
        );
      },
      next: function () {
        (t.direction = !0), (t.index = j(t.index + 1)), t.updateItemHTML();
      },
      prev: function () {
        (t.direction = !1), (t.index = j(t.index - 1)), t.updateItemHTML();
      },
      goTo: function (e) {
        (t.direction = e >= t.index), (t.index = e), t.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var e,
          n = t.st.gallery.preload,
          i = Math.min(n[0], t.items.length),
          o = Math.min(n[1], t.items.length);
        for (e = 1; e <= (t.direction ? o : i); e++)
          t._preloadItem(t.index + e);
        for (e = 1; e <= (t.direction ? i : o); e++)
          t._preloadItem(t.index - e);
      },
      _preloadItem: function (n) {
        if (((n = j(n)), !t.items[n].preloaded)) {
          var i = t.items[n];
          i.parsed || (i = t.parseEl(n)),
            b("LazyLoad", i),
            "image" === i.type &&
              (i.img = e('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  i.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (i.hasSize = !0), (i.loadError = !0), b("LazyLoadError", i);
                })
                .attr("src", i.src)),
            (i.preloaded = !0);
        }
      },
    },
  });
  var W,
    R,
    Z,
    q = "retina";
  e.magnificPopup.registerModule(q, {
    options: {
      replaceSrc: function (e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
            n = e.ratio;
          (n = isNaN(n) ? n() : n) > 1 &&
            (C("ImageHasSize." + q, function (e, t) {
              t.img.css({
                "max-width": t.img[0].naturalWidth / n,
                width: "100%",
              });
            }),
            C("ElementParse." + q, function (t, i) {
              i.src = e.replaceSrc(i, n);
            }));
        }
      },
    },
  }),
    (W = "ontouchstart" in window),
    (R = function () {
      y.off("touchmove" + Z + " touchend" + Z);
    }),
    (Z = ".mfpFastClick"),
    (e.fn.mfpFastClick = function (t) {
      return e(this).each(function () {
        var n,
          i,
          o,
          a,
          r,
          s,
          l,
          c = e(this);
        W &&
          c.on("touchstart" + Z, function (e) {
            (a = !1),
              (s = 1),
              (i = (r = e.originalEvent
                ? e.originalEvent.touches[0]
                : e.touches[0]).clientX),
              (o = r.clientY),
              y
                .on("touchmove" + Z, function (e) {
                  (s = (r = e.originalEvent
                    ? e.originalEvent.touches
                    : e.touches).length),
                    (r = r[0]),
                    (Math.abs(r.clientX - i) > 10 ||
                      Math.abs(r.clientY - o) > 10) &&
                      ((a = !0), R());
                })
                .on("touchend" + Z, function (e) {
                  R(),
                    a ||
                      s > 1 ||
                      ((l = !0),
                      e.preventDefault(),
                      clearTimeout(n),
                      (n = setTimeout(function () {
                        l = !1;
                      }, 1e3)),
                      t());
                });
          }),
          c.on("click" + Z, function () {
            l || t();
          });
      });
    }),
    (e.fn.destroyMfpFastClick = function () {
      e(this).off("touchstart" + Z + " click" + Z),
        W && y.off("touchmove" + Z + " touchend" + Z);
    }),
    x();
});

/* ---------------------------------------------
 jquery.lazyload.min.js
 --------------------------------------------- */
/*! Lazy Load 1.9.7 - MIT license - Copyright 2010-2015 Mika Tuupola */
!(function (a, b, c, d) {
  var e = a(b);
  (a.fn.lazyload = function (f) {
    function g() {
      var b = 0;
      i.each(function () {
        var c = a(this);
        if (!j.skip_invisible || c.is(":visible"))
          if (a.abovethetop(this, j) || a.leftofbegin(this, j));
          else if (a.belowthefold(this, j) || a.rightoffold(this, j)) {
            if (++b > j.failure_limit) return !1;
          } else c.trigger("appear"), (b = 0);
      });
    }
    var h,
      i = this,
      j = {
        threshold: 0,
        failure_limit: 0,
        event: "scroll",
        effect: "show",
        container: b,
        data_attribute: "original",
        skip_invisible: !1,
        appear: null,
        load: null,
        placeholder:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
      };
    return (
      f &&
        (d !== f.failurelimit &&
          ((f.failure_limit = f.failurelimit), delete f.failurelimit),
        d !== f.effectspeed &&
          ((f.effect_speed = f.effectspeed), delete f.effectspeed),
        a.extend(j, f)),
      (h = j.container === d || j.container === b ? e : a(j.container)),
      0 === j.event.indexOf("scroll") &&
        h.bind(j.event, function () {
          return g();
        }),
      this.each(function () {
        var b = this,
          c = a(b);
        (b.loaded = !1),
          (c.attr("src") === d || c.attr("src") === !1) &&
            c.is("img") &&
            c.attr("src", j.placeholder),
          c.one("appear", function () {
            if (!this.loaded) {
              if (j.appear) {
                var d = i.length;
                j.appear.call(b, d, j);
              }
              a("<img />")
                .bind("load", function () {
                  var d = c.attr("data-" + j.data_attribute);
                  c.hide(),
                    c.is("img")
                      ? c.attr("src", d)
                      : c.css("background-image", "url('" + d + "')"),
                    c[j.effect](j.effect_speed),
                    (b.loaded = !0);
                  var e = a.grep(i, function (a) {
                    return !a.loaded;
                  });
                  if (((i = a(e)), j.load)) {
                    var f = i.length;
                    j.load.call(b, f, j);
                  }
                })
                .attr("src", c.attr("data-" + j.data_attribute));
            }
          }),
          0 !== j.event.indexOf("scroll") &&
            c.bind(j.event, function () {
              b.loaded || c.trigger("appear");
            });
      }),
      e.bind("resize", function () {
        g();
      }),
      /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) &&
        e.bind("pageshow", function (b) {
          b.originalEvent &&
            b.originalEvent.persisted &&
            i.each(function () {
              a(this).trigger("appear");
            });
        }),
      a(c).ready(function () {
        g();
      }),
      this
    );
  }),
    (a.belowthefold = function (c, f) {
      var g;
      return (
        (g =
          f.container === d || f.container === b
            ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop()
            : a(f.container).offset().top + a(f.container).height()),
        g <= a(c).offset().top - f.threshold
      );
    }),
    (a.rightoffold = function (c, f) {
      var g;
      return (
        (g =
          f.container === d || f.container === b
            ? e.width() + e.scrollLeft()
            : a(f.container).offset().left + a(f.container).width()),
        g <= a(c).offset().left - f.threshold
      );
    }),
    (a.abovethetop = function (c, f) {
      var g;
      return (
        (g =
          f.container === d || f.container === b
            ? e.scrollTop()
            : a(f.container).offset().top),
        g >= a(c).offset().top + f.threshold + a(c).height()
      );
    }),
    (a.leftofbegin = function (c, f) {
      var g;
      return (
        (g =
          f.container === d || f.container === b
            ? e.scrollLeft()
            : a(f.container).offset().left),
        g >= a(c).offset().left + f.threshold + a(c).width()
      );
    }),
    (a.inviewport = function (b, c) {
      return !(
        a.rightoffold(b, c) ||
        a.leftofbegin(b, c) ||
        a.belowthefold(b, c) ||
        a.abovethetop(b, c)
      );
    }),
    a.extend(a.expr[":"], {
      "below-the-fold": function (b) {
        return a.belowthefold(b, { threshold: 0 });
      },
      "above-the-top": function (b) {
        return !a.belowthefold(b, { threshold: 0 });
      },
      "right-of-screen": function (b) {
        return a.rightoffold(b, { threshold: 0 });
      },
      "left-of-screen": function (b) {
        return !a.rightoffold(b, { threshold: 0 });
      },
      "in-viewport": function (b) {
        return a.inviewport(b, { threshold: 0 });
      },
      "above-the-fold": function (b) {
        return !a.belowthefold(b, { threshold: 0 });
      },
      "right-of-fold": function (b) {
        return a.rightoffold(b, { threshold: 0 });
      },
      "left-of-fold": function (b) {
        return !a.rightoffold(b, { threshold: 0 });
      },
    });
})(jQuery, window, document);

/* ---------------------------------------------
 wow.min.js
 --------------------------------------------- */
/*! WOW wow.js - v1.3.0 - 2016-10-04
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT */
!(function (t, e) {
  if ("function" == typeof define && define.amd)
    define(["module", "exports"], e);
  else if ("undefined" != typeof exports) e(module, exports);
  else {
    var n = { exports: {} };
    e(n, n.exports), (t.WOW = n.exports);
  }
})(this, function (t, e) {
  "use strict";
  function n(t, e) {
    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function");
  }
  function i(t, e) {
    return e.indexOf(t) >= 0;
  }
  function s(t, e, n) {
    null != t.addEventListener
      ? t.addEventListener(e, n, !1)
      : null != t.attachEvent
      ? t.attachEvent("on" + e, n)
      : (t[e] = n);
  }
  function o(t, e, n) {
    null != t.removeEventListener
      ? t.removeEventListener(e, n, !1)
      : null != t.detachEvent
      ? t.detachEvent("on" + e, n)
      : delete t[e];
  }
  Object.defineProperty(e, "__esModule", { value: !0 });
  var a,
    r,
    l = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    })(),
    u =
      window.WeakMap ||
      window.MozWeakMap ||
      (function () {
        function t() {
          n(this, t), (this.keys = []), (this.values = []);
        }
        return (
          l(t, [
            {
              key: "get",
              value: function (t) {
                for (var e = 0; e < this.keys.length; e++)
                  if (this.keys[e] === t) return this.values[e];
              },
            },
            {
              key: "set",
              value: function (t, e) {
                for (var n = 0; n < this.keys.length; n++)
                  if (this.keys[n] === t) return (this.values[n] = e), this;
                return this.keys.push(t), this.values.push(e), this;
              },
            },
          ]),
          t
        );
      })(),
    h =
      window.MutationObserver ||
      window.WebkitMutationObserver ||
      window.MozMutationObserver ||
      ((r = a =
        (function () {
          function t() {
            n(this, t),
              "undefined" != typeof console &&
                null !== console &&
                (console.warn(
                  "MutationObserver is not supported by your browser."
                ),
                console.warn(
                  "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                ));
          }
          return l(t, [{ key: "observe", value: function () {} }]), t;
        })()),
      (a.notSupported = !0),
      r),
    c =
      window.getComputedStyle ||
      function (t) {
        var e = /(\-([a-z]){1})/g;
        return {
          getPropertyValue: function (n) {
            "float" === n && (n = "styleFloat"),
              e.test(n) &&
                n.replace(e, function (t, e) {
                  return e.toUpperCase();
                });
            var i = t.currentStyle;
            return (null != i ? i[n] : void 0) || null;
          },
        };
      },
    f = (function () {
      function t() {
        var e =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
        n(this, t),
          (this.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 50,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null,
            resetAnimation: !0,
          }),
          (this.animate =
            "requestAnimationFrame" in window
              ? function (t) {
                  return window.requestAnimationFrame(t);
                }
              : function (t) {
                  return t();
                }),
          (this.vendors = ["moz", "webkit"]),
          (this.start = this.start.bind(this)),
          (this.resetAnimation = this.resetAnimation.bind(this)),
          (this.scrollHandler = this.scrollHandler.bind(this)),
          (this.scrollCallback = this.scrollCallback.bind(this)),
          (this.scrolled = !0),
          (this.config = (function t(e, n) {
            for (var i in n)
              if (null == e[i]) {
                var s = n[i];
                e[i] = s;
              }
            return e;
          })(e, this.defaults)),
          null != e.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              e.scrollContainer
            )),
          (this.animationNameCache = new u()),
          (this.wowEvent = (function t(e) {
            var n =
                !(arguments.length <= 1) &&
                void 0 !== arguments[1] &&
                arguments[1],
              i =
                !(arguments.length <= 2) &&
                void 0 !== arguments[2] &&
                arguments[2],
              s =
                arguments.length <= 3 || void 0 === arguments[3]
                  ? null
                  : arguments[3],
              o = void 0;
            return (
              null != document.createEvent
                ? (o = document.createEvent("CustomEvent")).initCustomEvent(
                    e,
                    n,
                    i,
                    s
                  )
                : null != document.createEventObject
                ? ((o = document.createEventObject()).eventType = e)
                : (o.eventName = e),
              o
            );
          })(this.config.boxClass));
      }
      return (
        l(t, [
          {
            key: "init",
            value: function () {
              (this.element = window.document.documentElement),
                i(document.readyState, ["interactive", "complete"])
                  ? this.start()
                  : s(document, "DOMContentLoaded", this.start),
                (this.finished = []);
            },
          },
          {
            key: "start",
            value: function () {
              var t = this;
              if (
                ((this.stopped = !1),
                (this.boxes = [].slice.call(
                  this.element.querySelectorAll("." + this.config.boxClass)
                )),
                (this.all = this.boxes.slice(0)),
                this.boxes.length)
              ) {
                if (this.disabled()) this.resetStyle();
                else
                  for (var e = 0; e < this.boxes.length; e++) {
                    var n = this.boxes[e];
                    this.applyStyle(n, !0);
                  }
              }
              this.disabled() ||
                (s(
                  this.config.scrollContainer || window,
                  "scroll",
                  this.scrollHandler
                ),
                s(window, "resize", this.scrollHandler),
                (this.interval = setInterval(this.scrollCallback, 50))),
                this.config.live &&
                  new h(function (e) {
                    for (var n = 0; n < e.length; n++)
                      for (var i = e[n], s = 0; s < i.addedNodes.length; s++) {
                        var o = i.addedNodes[s];
                        t.doSync(o);
                      }
                  }).observe(document.body, { childList: !0, subtree: !0 });
            },
          },
          {
            key: "stop",
            value: function () {
              (this.stopped = !0),
                o(
                  this.config.scrollContainer || window,
                  "scroll",
                  this.scrollHandler
                ),
                o(window, "resize", this.scrollHandler),
                null != this.interval && clearInterval(this.interval);
            },
          },
          {
            key: "sync",
            value: function () {
              h.notSupported && this.doSync(this.element);
            },
          },
          {
            key: "doSync",
            value: function (t) {
              if ((null != t || (t = this.element), 1 === t.nodeType)) {
                t = t.parentNode || t;
                for (
                  var e = t.querySelectorAll("." + this.config.boxClass), n = 0;
                  n < e.length;
                  n++
                ) {
                  var s = e[n];
                  i(s, this.all) ||
                    (this.boxes.push(s),
                    this.all.push(s),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(s, !0),
                    (this.scrolled = !0));
                }
              }
            },
          },
          {
            key: "show",
            value: function (t) {
              var e, n;
              return (
                this.applyStyle(t),
                (t.className = t.className + " " + this.config.animateClass),
                null != this.config.callback && this.config.callback(t),
                (e = t),
                (n = this.wowEvent),
                null != e.dispatchEvent
                  ? e.dispatchEvent(n)
                  : n in (null != e)
                  ? e[n]()
                  : "on" + n in (null != e) && e["on" + n](),
                this.config.resetAnimation &&
                  (s(t, "animationend", this.resetAnimation),
                  s(t, "oanimationend", this.resetAnimation),
                  s(t, "webkitAnimationEnd", this.resetAnimation),
                  s(t, "MSAnimationEnd", this.resetAnimation)),
                t
              );
            },
          },
          {
            key: "applyStyle",
            value: function (t, e) {
              var n = this,
                i = t.getAttribute("data-wow-duration"),
                s = t.getAttribute("data-wow-delay"),
                o = t.getAttribute("data-wow-iteration");
              return this.animate(function () {
                return n.customStyle(t, e, i, s, o);
              });
            },
          },
          {
            key: "resetStyle",
            value: function () {
              for (var t = 0; t < this.boxes.length; t++)
                this.boxes[t].style.visibility = "visible";
            },
          },
          {
            key: "resetAnimation",
            value: function (t) {
              t.type.toLowerCase().indexOf("animationend") >= 0 &&
                (t.target || t.srcElement);
            },
          },
          {
            key: "customStyle",
            value: function (t, e, n, i, s) {
              return (
                e && this.cacheAnimationName(t),
                (t.style.visibility = "visible"),
                n && this.vendorSet(t.style, { animationDuration: n }),
                i && this.vendorSet(t.style, { animationDelay: i }),
                s && this.vendorSet(t.style, { animationIterationCount: s }),
                this.vendorSet(t.style, {
                  animationName: e ? "none" : this.cachedAnimationName(t),
                }),
                t
              );
            },
          },
          {
            key: "vendorSet",
            value: function (t, e) {
              for (var n in e)
                if (e.hasOwnProperty(n)) {
                  var i = e[n];
                  t["" + n] = i;
                  for (var s = 0; s < this.vendors.length; s++)
                    t[
                      "" +
                        this.vendors[s] +
                        n.charAt(0).toUpperCase() +
                        n.substr(1)
                    ] = i;
                }
            },
          },
          {
            key: "vendorCSS",
            value: function (t, e) {
              for (
                var n = c(t), i = n.getPropertyCSSValue(e), s = 0;
                s < this.vendors.length;
                s++
              ) {
                var o = this.vendors[s];
                i = i || n.getPropertyCSSValue("-" + o + "-" + e);
              }
              return i;
            },
          },
          {
            key: "animationName",
            value: function (t) {
              var e = void 0;
              try {
                e = this.vendorCSS(t, "animation-name").cssText;
              } catch (n) {
                e = c(t).getPropertyValue("animation-name");
              }
              return "none" === e ? "" : e;
            },
          },
          {
            key: "cacheAnimationName",
            value: function (t) {
              return this.animationNameCache.set(t, this.animationName(t));
            },
          },
          {
            key: "cachedAnimationName",
            value: function (t) {
              return this.animationNameCache.get(t);
            },
          },
          {
            key: "scrollHandler",
            value: function () {
              this.scrolled = !0;
            },
          },
          {
            key: "scrollCallback",
            value: function () {
              if (this.scrolled) {
                this.scrolled = !1;
                for (var t = [], e = 0; e < this.boxes.length; e++) {
                  var n = this.boxes[e];
                  if (n) {
                    if (this.isVisible(n)) {
                      this.show(n);
                      continue;
                    }
                    t.push(n);
                  }
                }
                (this.boxes = t),
                  this.boxes.length || this.config.live || this.stop();
              }
            },
          },
          {
            key: "offsetTop",
            value: function (t) {
              for (; void 0 === t.offsetTop; ) t = t.parentNode;
              for (var e = t.offsetTop; t.offsetParent; )
                e += (t = t.offsetParent).offsetTop;
              return e;
            },
          },
          {
            key: "isVisible",
            value: function (t) {
              var e = t.getAttribute("data-wow-offset") || this.config.offset,
                n =
                  (this.config.scrollContainer &&
                    this.config.scrollContainer.scrollTop) ||
                  window.pageYOffset,
                i =
                  n +
                  Math.min(
                    this.element.clientHeight,
                    "innerHeight" in window
                      ? window.innerHeight
                      : document.documentElement.clientHeight
                  ) -
                  e,
                s = this.offsetTop(t),
                o = s + t.clientHeight;
              return i >= s && o >= n;
            },
          },
          {
            key: "disabled",
            value: function () {
              var t;
              return (
                !this.config.mobile &&
                ((t = navigator.userAgent),
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  t
                ))
              );
            },
          },
        ]),
        t
      );
    })();
  (e.default = f), (t.exports = e.default);
});

/* ---------------------------------------------
 morphext.js
 --------------------------------------------- */
/*! Morphext - v2.4.7 - 2016-11-04 */ !(function (a) {
  "use strict";
  function b(b, c) {
    (this.element = a(b)),
      (this.settings = a.extend({}, d, c)),
      (this._defaults = d),
      this._init();
  }
  var c = "Morphext",
    d = { animation: "bounceIn", separator: ",", speed: 2e3, complete: a.noop };
  (b.prototype = {
    _init: function () {
      var b = this;
      (this.phrases = []),
        this.element.addClass("morphext"),
        a.each(
          this.element.text().split(this.settings.separator),
          function (c, d) {
            b.phrases.push(a.trim(d));
          }
        ),
        (this.index = -1),
        this.animate(),
        this.start();
    },
    animate: function () {
      (this.index = ++this.index % this.phrases.length),
        (this.element[0].innerHTML =
          '<span class="animated ' +
          this.settings.animation +
          '">' +
          this.phrases[this.index] +
          "</span>"),
        a.isFunction(this.settings.complete) &&
          this.settings.complete.call(this);
    },
    start: function () {
      var a = this;
      this._interval = setInterval(function () {
        a.animate();
      }, this.settings.speed);
    },
    stop: function () {
      this._interval = clearInterval(this._interval);
    },
  }),
    (a.fn[c] = function (d) {
      return this.each(function () {
        a.data(this, "plugin_" + c) ||
          a.data(this, "plugin_" + c, new b(this, d));
      });
    });
})(jQuery);

/* ---------------------------------------------
 typewrite.js
 --------------------------------------------- */
var TxtType = function (t, e, i) {
  (this.toRotate = e),
    (this.el = t),
    (this.loopNum = 0),
    (this.period = parseInt(i, 10) || 2e3),
    (this.txt = ""),
    this.tick(),
    (this.isDeleting = !1);
};
function typewriter() {
  for (
    var t = document.getElementsByClassName("typewrite"), e = 0;
    e < t.length;
    e++
  ) {
    var i = t[e].getAttribute("data-type"),
      s = t[e].getAttribute("data-period");
    i && new TxtType(t[e], JSON.parse(i), s);
  }
  var n = document.createElement("style");
  (n.type = "text/css"),
    (n.innerHTML = ".typewrite > .wrap:after {content: '|'}"),
    document.body.appendChild(n);
}
(TxtType.prototype.tick = function () {
  var t = this.loopNum % this.toRotate.length,
    e = this.toRotate[t];
  this.isDeleting
    ? (this.txt = e.substring(0, this.txt.length - 1))
    : (this.txt = e.substring(0, this.txt.length + 1)),
    (this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>");
  var i = this,
    s = 120 - 100 * Math.random();
  this.isDeleting && (s /= 5),
    this.isDeleting || this.txt !== e
      ? this.isDeleting &&
        "" === this.txt &&
        ((this.isDeleting = !1), this.loopNum++, (s = 500))
      : ((s = this.period), (this.isDeleting = !0)),
    setTimeout(function () {
      i.tick();
    }, s);
}),
  (window.onload = typewriter());

/* ---------------------------------------------
 rellax.min.js
 --------------------------------------------- */
(function (q, g) {
  "function" === typeof define && define.amd
    ? define([], g)
    : "object" === typeof module && module.exports
    ? (module.exports = g())
    : (q.Rellax = g());
})("undefined" !== typeof window ? window : global, function () {
  var q = function (g, u) {
    function C() {
      if (
        3 === a.options.breakpoints.length &&
        Array.isArray(a.options.breakpoints)
      ) {
        var f = !0,
          c = !0,
          b;
        a.options.breakpoints.forEach(function (a) {
          "number" !== typeof a && (c = !1);
          null !== b && a < b && (f = !1);
          b = a;
        });
        if (f && c) return;
      }
      a.options.breakpoints = [576, 768, 1201];
      console.warn(
        "Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted"
      );
    }
    var a = Object.create(q.prototype),
      l = 0,
      v = 0,
      m = 0,
      n = 0,
      d = [],
      w = !0,
      A =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function (a) {
          return setTimeout(a, 1e3 / 60);
        },
      p = null,
      x = !1;
    try {
      var k = Object.defineProperty({}, "passive", {
        get: function () {
          x = !0;
        },
      });
      window.addEventListener("testPassive", null, k);
      window.removeEventListener("testPassive", null, k);
    } catch (f) {}
    var D =
        window.cancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        clearTimeout,
      E =
        window.transformProp ||
        (function () {
          var a = document.createElement("div");
          if (null === a.style.transform) {
            var c = ["Webkit", "Moz", "ms"],
              b;
            for (b in c)
              if (void 0 !== a.style[c[b] + "Transform"])
                return c[b] + "Transform";
          }
          return "transform";
        })();
    a.options = {
      speed: -2,
      verticalSpeed: null,
      horizontalSpeed: null,
      breakpoints: [576, 768, 1201],
      center: !1,
      wrapper: null,
      relativeToWrapper: !1,
      round: !0,
      vertical: !0,
      horizontal: !1,
      verticalScrollAxis: "y",
      horizontalScrollAxis: "x",
      callback: function () {},
    };
    u &&
      Object.keys(u).forEach(function (d) {
        a.options[d] = u[d];
      });
    u && u.breakpoints && C();
    g || (g = ".rellax");
    k = "string" === typeof g ? document.querySelectorAll(g) : [g];
    if (0 < k.length) {
      a.elems = k;
      if (a.options.wrapper && !a.options.wrapper.nodeType)
        if ((k = document.querySelector(a.options.wrapper)))
          a.options.wrapper = k;
        else {
          console.warn(
            "Rellax: The wrapper you're trying to use doesn't exist."
          );
          return;
        }
      var F,
        B = function () {
          for (var f = 0; f < d.length; f++)
            a.elems[f].style.cssText = d[f].style;
          d = [];
          v = window.innerHeight;
          n = window.innerWidth;
          f = a.options.breakpoints;
          F =
            n < f[0]
              ? "xs"
              : n >= f[0] && n < f[1]
              ? "sm"
              : n >= f[1] && n < f[2]
              ? "md"
              : "lg";
          H();
          for (f = 0; f < a.elems.length; f++) {
            var c = void 0,
              b = a.elems[f],
              e = b.getAttribute("data-rellax-percentage"),
              y = b.getAttribute("data-rellax-speed"),
              t = b.getAttribute("data-rellax-xs-speed"),
              g = b.getAttribute("data-rellax-mobile-speed"),
              h = b.getAttribute("data-rellax-tablet-speed"),
              k = b.getAttribute("data-rellax-desktop-speed"),
              l = b.getAttribute("data-rellax-vertical-speed"),
              m = b.getAttribute("data-rellax-horizontal-speed"),
              p = b.getAttribute("data-rellax-vertical-scroll-axis"),
              q = b.getAttribute("data-rellax-horizontal-scroll-axis"),
              u = b.getAttribute("data-rellax-zindex") || 0,
              x = b.getAttribute("data-rellax-min"),
              A = b.getAttribute("data-rellax-max"),
              C = b.getAttribute("data-rellax-min-x"),
              D = b.getAttribute("data-rellax-max-x"),
              E = b.getAttribute("data-rellax-min-y"),
              L = b.getAttribute("data-rellax-max-y"),
              r = !0;
            t || g || h || k ? (c = { xs: t, sm: g, md: h, lg: k }) : (r = !1);
            t = a.options.wrapper
              ? a.options.wrapper.scrollTop
              : window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            a.options.relativeToWrapper &&
              (t =
                (window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop) - a.options.wrapper.offsetTop);
            var z = a.options.vertical ? (e || a.options.center ? t : 0) : 0,
              I = a.options.horizontal
                ? e || a.options.center
                  ? a.options.wrapper
                    ? a.options.wrapper.scrollLeft
                    : window.pageXOffset ||
                      document.documentElement.scrollLeft ||
                      document.body.scrollLeft
                  : 0
                : 0;
            t = z + b.getBoundingClientRect().top;
            g = b.clientHeight || b.offsetHeight || b.scrollHeight;
            h = I + b.getBoundingClientRect().left;
            k = b.clientWidth || b.offsetWidth || b.scrollWidth;
            z = e ? e : (z - t + v) / (g + v);
            e = e ? e : (I - h + n) / (k + n);
            a.options.center && (z = e = 0.5);
            c = r && null !== c[F] ? Number(c[F]) : y ? y : a.options.speed;
            l = l ? l : a.options.verticalSpeed;
            m = m ? m : a.options.horizontalSpeed;
            p = p ? p : a.options.verticalScrollAxis;
            q = q ? q : a.options.horizontalScrollAxis;
            y = J(e, z, c, l, m);
            b = b.style.cssText;
            r = "";
            if ((e = /transform\s*:/i.exec(b)))
              (r = b.slice(e.index)),
                (r = (e = r.indexOf(";"))
                  ? " " + r.slice(11, e).replace(/\s/g, "")
                  : " " + r.slice(11).replace(/\s/g, ""));
            d.push({
              baseX: y.x,
              baseY: y.y,
              top: t,
              left: h,
              height: g,
              width: k,
              speed: c,
              verticalSpeed: l,
              horizontalSpeed: m,
              verticalScrollAxis: p,
              horizontalScrollAxis: q,
              style: b,
              transform: r,
              zindex: u,
              min: x,
              max: A,
              minX: C,
              maxX: D,
              minY: E,
              maxY: L,
            });
          }
          K();
          w && (window.addEventListener("resize", B), (w = !1), G());
        },
        H = function () {
          var d = l,
            c = m;
          l = a.options.wrapper
            ? a.options.wrapper.scrollTop
            : (
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollTop || window.pageYOffset;
          m = a.options.wrapper
            ? a.options.wrapper.scrollLeft
            : (
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollLeft || window.pageXOffset;
          a.options.relativeToWrapper &&
            (l =
              ((
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollTop || window.pageYOffset) - a.options.wrapper.offsetTop);
          return (d != l && a.options.vertical) ||
            (c != m && a.options.horizontal)
            ? !0
            : !1;
        },
        J = function (d, c, b, e, g) {
          var f = {};
          d = 100 * (g ? g : b) * (1 - d);
          c = 100 * (e ? e : b) * (1 - c);
          f.x = a.options.round ? Math.round(d) : Math.round(100 * d) / 100;
          f.y = a.options.round ? Math.round(c) : Math.round(100 * c) / 100;
          return f;
        },
        h = function () {
          window.removeEventListener("resize", h);
          window.removeEventListener("orientationchange", h);
          (a.options.wrapper ? a.options.wrapper : window).removeEventListener(
            "scroll",
            h
          );
          (a.options.wrapper
            ? a.options.wrapper
            : document
          ).removeEventListener("touchmove", h);
          p = A(G);
        },
        G = function () {
          H() && !1 === w
            ? (K(), (p = A(G)))
            : ((p = null),
              window.addEventListener("resize", h),
              window.addEventListener("orientationchange", h),
              (a.options.wrapper ? a.options.wrapper : window).addEventListener(
                "scroll",
                h,
                x ? { passive: !0 } : !1
              ),
              (a.options.wrapper
                ? a.options.wrapper
                : document
              ).addEventListener("touchmove", h, x ? { passive: !0 } : !1));
        },
        K = function () {
          for (var f, c = 0; c < a.elems.length; c++) {
            var b = d[c].verticalScrollAxis.toLowerCase(),
              e = d[c].horizontalScrollAxis.toLowerCase();
            f = -1 != b.indexOf("x") ? l : 0;
            b = -1 != b.indexOf("y") ? l : 0;
            var g = -1 != e.indexOf("x") ? m : 0;
            e = -1 != e.indexOf("y") ? m : 0;
            f = J(
              (f + g - d[c].left + n) / (d[c].width + n),
              (b + e - d[c].top + v) / (d[c].height + v),
              d[c].speed,
              d[c].verticalSpeed,
              d[c].horizontalSpeed
            );
            e = f.y - d[c].baseY;
            b = f.x - d[c].baseX;
            null !== d[c].min &&
              (a.options.vertical &&
                !a.options.horizontal &&
                (e = e <= d[c].min ? d[c].min : e),
              a.options.horizontal &&
                !a.options.vertical &&
                (b = b <= d[c].min ? d[c].min : b));
            null != d[c].minY && (e = e <= d[c].minY ? d[c].minY : e);
            null != d[c].minX && (b = b <= d[c].minX ? d[c].minX : b);
            null !== d[c].max &&
              (a.options.vertical &&
                !a.options.horizontal &&
                (e = e >= d[c].max ? d[c].max : e),
              a.options.horizontal &&
                !a.options.vertical &&
                (b = b >= d[c].max ? d[c].max : b));
            null != d[c].maxY && (e = e >= d[c].maxY ? d[c].maxY : e);
            null != d[c].maxX && (b = b >= d[c].maxX ? d[c].maxX : b);
            a.elems[c].style[E] =
              "translate3d(" +
              (a.options.horizontal ? b : "0") +
              "px," +
              (a.options.vertical ? e : "0") +
              "px," +
              d[c].zindex +
              "px) " +
              d[c].transform;
          }
          a.options.callback(f);
        };
      a.destroy = function () {
        for (var f = 0; f < a.elems.length; f++)
          a.elems[f].style.cssText = d[f].style;
        w || (window.removeEventListener("resize", B), (w = !0));
        D(p);
        p = null;
      };
      B();
      a.refresh = B;
      return a;
    }
    console.warn("Rellax: The elements you're trying to select don't exist.");
  };
  return q;
});

/* ---------------------------------------------
 SmoothScroll.js
 --------------------------------------------- */
!(function () {
  var e,
    t,
    o,
    n,
    r = {
      frameRate: 150,
      animationTime: 500,
      stepSize: 100,
      pulseAlgorithm: !0,
      pulseScale: 4,
      pulseNormalize: 1,
      accelerationDelta: 50,
      accelerationMax: 3,
      keyboardSupport: !0,
      arrowScroll: 50,
      fixedBackground: !0,
      excluded: "",
    },
    a = r,
    l = !1,
    i = !1,
    c = { x: 0, y: 0 },
    u = !1,
    s = document.documentElement,
    d = [],
    f = /^Mac/.test(navigator.platform),
    m = {
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      spacebar: 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36,
    },
    h = { 37: 1, 38: 1, 39: 1, 40: 1 };
  function w() {
    if (!u && document.body) {
      u = !0;
      var n = document.body,
        r = document.documentElement,
        c = window.innerHeight,
        d = n.scrollHeight;
      if (
        ((s = document.compatMode.indexOf("CSS") >= 0 ? r : n),
        (e = n),
        a.keyboardSupport && A("keydown", S),
        top != self)
      )
        i = !0;
      else if (Z && d > c && (n.offsetHeight <= c || r.offsetHeight <= c)) {
        var f,
          m = document.createElement("div");
        (m.style.cssText =
          "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" +
          s.scrollHeight +
          "px"),
          document.body.appendChild(m),
          (o = function () {
            f ||
              (f = setTimeout(function () {
                l ||
                  ((m.style.height = "0"),
                  (m.style.height = s.scrollHeight + "px"),
                  (f = null));
              }, 500));
          }),
          setTimeout(o, 10),
          A("resize", o);
        if (
          ((t = new q(o)).observe(n, {
            attributes: !0,
            childList: !0,
            characterData: !1,
          }),
          s.offsetHeight <= c)
        ) {
          var h = document.createElement("div");
          (h.style.clear = "both"), n.appendChild(h);
        }
      }
      a.fixedBackground ||
        l ||
        ((n.style.backgroundAttachment = "scroll"),
        (r.style.backgroundAttachment = "scroll"));
    }
  }
  var p = [],
    v = !1,
    y = Date.now();
  function b(e, t, o) {
    var n, r;
    if (
      ((n = (n = t) > 0 ? 1 : -1),
      (r = (r = o) > 0 ? 1 : -1),
      (c.x !== n || c.y !== r) && ((c.x = n), (c.y = r), (p = []), (y = 0)),
      1 != a.accelerationMax)
    ) {
      var l = Date.now() - y;
      if (l < a.accelerationDelta) {
        var i = (1 + 50 / l) / 2;
        i > 1 && ((i = Math.min(i, a.accelerationMax)), (t *= i), (o *= i));
      }
      y = Date.now();
    }
    if (
      (p.push({
        x: t,
        y: o,
        lastX: t < 0 ? 0.99 : -0.99,
        lastY: o < 0 ? 0.99 : -0.99,
        start: Date.now(),
      }),
      !v)
    ) {
      var u = V(),
        s = e === u || e === document.body;
      null == e.$scrollBehavior &&
        (function (e) {
          var t = M(e);
          if (null == B[t]) {
            var o = getComputedStyle(e, "")["scroll-behavior"];
            B[t] = "smooth" == o;
          }
          return B[t];
        })(e) &&
        ((e.$scrollBehavior = e.style.scrollBehavior),
        (e.style.scrollBehavior = "auto"));
      var d = function (n) {
        for (var r = Date.now(), l = 0, i = 0, c = 0; c < p.length; c++) {
          var u = p[c],
            f = r - u.start,
            m = f >= a.animationTime,
            h = m ? 1 : f / a.animationTime;
          a.pulseAlgorithm && (h = I(h));
          var w = (u.x * h - u.lastX) >> 0,
            y = (u.y * h - u.lastY) >> 0;
          (l += w),
            (i += y),
            (u.lastX += w),
            (u.lastY += y),
            m && (p.splice(c, 1), c--);
        }
        s
          ? window.scrollBy(l, i)
          : (l && (e.scrollLeft += l), i && (e.scrollTop += i)),
          t || o || (p = []),
          p.length
            ? R(d, e, 1e3 / a.frameRate + 1)
            : ((v = !1),
              null != e.$scrollBehavior &&
                ((e.style.scrollBehavior = e.$scrollBehavior),
                (e.$scrollBehavior = null)));
      };
      R(d, e, 0), (v = !0);
    }
  }
  function g(t) {
    u || w();
    var o = t.target;
    if (t.defaultPrevented || t.ctrlKey) return !0;
    if (
      K(e, "embed") ||
      (K(o, "embed") && /\.pdf/i.test(o.src)) ||
      K(e, "object") ||
      o.shadowRoot
    )
      return !0;
    var r = -t.wheelDeltaX || t.deltaX || 0,
      l = -t.wheelDeltaY || t.deltaY || 0;
    f &&
      (t.wheelDeltaX &&
        P(t.wheelDeltaX, 120) &&
        (r = (t.wheelDeltaX / Math.abs(t.wheelDeltaX)) * -120),
      t.wheelDeltaY &&
        P(t.wheelDeltaY, 120) &&
        (l = (t.wheelDeltaY / Math.abs(t.wheelDeltaY)) * -120)),
      r || l || (l = -t.wheelDelta || 0),
      1 === t.deltaMode && ((r *= 40), (l *= 40));
    var c = L(o);
    return c
      ? !!(function (e) {
          if (!e) return;
          d.length || (d = [e, e, e]);
          (e = Math.abs(e)),
            d.push(e),
            d.shift(),
            clearTimeout(n),
            (n = setTimeout(function () {
              try {
                localStorage.SS_deltaBuffer = d.join(",");
              } catch (e) {}
            }, 1e3));
          var t = e > 120 && $(e);
          return !$(120) && !$(100) && !t;
        })(l) ||
          (Math.abs(r) > 1.2 && (r *= a.stepSize / 120),
          Math.abs(l) > 1.2 && (l *= a.stepSize / 120),
          b(c, r, l),
          t.preventDefault(),
          void C())
      : !i ||
          !U ||
          (Object.defineProperty(t, "target", { value: window.frameElement }),
          parent.wheel(t));
  }
  function S(t) {
    var o = t.target,
      n =
        t.ctrlKey ||
        t.altKey ||
        t.metaKey ||
        (t.shiftKey && t.keyCode !== m.spacebar);
    document.body.contains(e) || (e = document.activeElement);
    var r = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if (
      t.defaultPrevented ||
      /^(textarea|select|embed|object)$/i.test(o.nodeName) ||
      (K(o, "input") && !r.test(o.type)) ||
      K(e, "video") ||
      (function (e) {
        var t = e.target,
          o = !1;
        if (-1 != document.URL.indexOf("www.youtube.com/watch"))
          do {
            if (
              (o = t.classList && t.classList.contains("html5-video-controls"))
            )
              break;
          } while ((t = t.parentNode));
        return o;
      })(t) ||
      o.isContentEditable ||
      n
    )
      return !0;
    if (
      (K(o, "button") || (K(o, "input") && r.test(o.type))) &&
      t.keyCode === m.spacebar
    )
      return !0;
    if (K(o, "input") && "radio" == o.type && h[t.keyCode]) return !0;
    var l = 0,
      c = 0,
      u = L(e);
    if (!u) return !i || !U || parent.keydown(t);
    var s = u.clientHeight;
    switch ((u == document.body && (s = window.innerHeight), t.keyCode)) {
      case m.up:
        c = -a.arrowScroll;
        break;
      case m.down:
        c = a.arrowScroll;
        break;
      case m.spacebar:
        c = -(t.shiftKey ? 1 : -1) * s * 0.9;
        break;
      case m.pageup:
        c = 0.9 * -s;
        break;
      case m.pagedown:
        c = 0.9 * s;
        break;
      case m.home:
        u == document.body &&
          document.scrollingElement &&
          (u = document.scrollingElement),
          (c = -u.scrollTop);
        break;
      case m.end:
        var d = u.scrollHeight - u.scrollTop - s;
        c = d > 0 ? d + 10 : 0;
        break;
      case m.left:
        l = -a.arrowScroll;
        break;
      case m.right:
        l = a.arrowScroll;
        break;
      default:
        return !0;
    }
    b(u, l, c), t.preventDefault(), C();
  }
  function x(t) {
    e = t.target;
  }
  var k,
    D,
    M =
      ((k = 0),
      function (e) {
        return e.uniqueID || (e.uniqueID = k++);
      }),
    E = {},
    T = {},
    B = {};
  function C() {
    clearTimeout(D),
      (D = setInterval(function () {
        E = T = B = {};
      }, 1e3));
  }
  function H(e, t, o) {
    for (var n = o ? E : T, r = e.length; r--; ) n[M(e[r])] = t;
    return t;
  }
  function z(e, t) {
    return (t ? E : T)[M(e)];
  }
  function L(e) {
    var t = [],
      o = document.body,
      n = s.scrollHeight;
    do {
      var r = z(e, !1);
      if (r) return H(t, r);
      if ((t.push(e), n === e.scrollHeight)) {
        var a = (X(s) && X(o)) || Y(s);
        if ((i && O(s)) || (!i && a)) return H(t, V());
      } else if (O(e) && Y(e)) return H(t, e);
    } while ((e = e.parentElement));
  }
  function O(e) {
    return e.clientHeight + 10 < e.scrollHeight;
  }
  function X(e) {
    return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y");
  }
  function Y(e) {
    var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
    return "scroll" === t || "auto" === t;
  }
  function A(e, t, o) {
    window.addEventListener(e, t, o || !1);
  }
  function N(e, t, o) {
    window.removeEventListener(e, t, o || !1);
  }
  function K(e, t) {
    return e && (e.nodeName || "").toLowerCase() === t.toLowerCase();
  }
  if (window.localStorage && localStorage.SS_deltaBuffer)
    try {
      d = localStorage.SS_deltaBuffer.split(",");
    } catch (e) {}
  function P(e, t) {
    return Math.floor(e / t) == e / t;
  }
  function $(e) {
    return P(d[0], e) && P(d[1], e) && P(d[2], e);
  }
  var j,
    R =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (e, t, o) {
        window.setTimeout(e, o || 1e3 / 60);
      },
    q =
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver,
    V =
      ((j = document.scrollingElement),
      function () {
        if (!j) {
          var e = document.createElement("div");
          (e.style.cssText = "height:10000px;width:1px;"),
            document.body.appendChild(e);
          var t = document.body.scrollTop;
          document.documentElement.scrollTop,
            window.scrollBy(0, 3),
            (j =
              document.body.scrollTop != t
                ? document.body
                : document.documentElement),
            window.scrollBy(0, -3),
            document.body.removeChild(e);
        }
        return j;
      });
  function F(e) {
    var t, o;
    return (
      (e *= a.pulseScale) < 1
        ? (t = e - (1 - Math.exp(-e)))
        : ((e -= 1), (t = (o = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - o))),
      t * a.pulseNormalize
    );
  }
  function I(e) {
    return e >= 1
      ? 1
      : e <= 0
      ? 0
      : (1 == a.pulseNormalize && (a.pulseNormalize /= F(1)), F(e));
  }
  var _ = window.navigator.userAgent,
    W = /Edge/.test(_),
    U = /chrome/i.test(_) && !W,
    G = /safari/i.test(_) && !W,
    J = /mobile/i.test(_),
    Q = /Windows NT 6.1/i.test(_) && /rv:11/i.test(_),
    Z = G && (/Version\/8/i.test(_) || /Version\/9/i.test(_)),
    ee = (U || G || Q) && !J,
    te = !1;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          te = !0;
        },
      })
    );
  } catch (e) {}
  var oe = !!te && { passive: !1 },
    ne = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
  function re(e) {
    for (var t in e) r.hasOwnProperty(t) && (a[t] = e[t]);
  }
  ne && ee && (A(ne, g, oe), A("mousedown", x), A("load", w)),
    (re.destroy = function () {
      t && t.disconnect(),
        N(ne, g),
        N("mousedown", x),
        N("keydown", S),
        N("resize", o),
        N("load", w);
    }),
    window.SmoothScrollOptions && re(window.SmoothScrollOptions),
    "function" == typeof define && define.amd
      ? define(function () {
          return re;
        })
      : "object" == typeof exports
      ? (module.exports = re)
      : (window.SmoothScroll = re);
})();

/* ---------------------------------------------
 splitting.min.js
 --------------------------------------------- */
!(function (n, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (n.Splitting = t());
})(this, function () {
  "use strict";
  var o = document,
    l = o.createTextNode.bind(o);
  function d(n, t, e) {
    n.style.setProperty(t, e);
  }
  function f(n, t) {
    return n.appendChild(t);
  }
  function p(n, t, e, r) {
    var i = o.createElement("span");
    return (
      t && (i.className = t),
      e && (!r && i.setAttribute("data-" + t, e), (i.textContent = e)),
      (n && f(n, i)) || i
    );
  }
  function h(n, t) {
    return n.getAttribute("data-" + t);
  }
  function m(n, t) {
    return n && 0 != n.length
      ? n.nodeName
        ? [n]
        : [].slice.call(n[0].nodeName ? n : (t || o).querySelectorAll(n))
      : [];
  }
  function u(n) {
    for (var t = []; n--; ) t[n] = [];
    return t;
  }
  function v(n, t) {
    n && n.some(t);
  }
  function c(t) {
    return function (n) {
      return t[n];
    };
  }
  var a = {};
  function n(n, t, e, r) {
    return { by: n, depends: t, key: e, split: r };
  }
  function r(n) {
    return (function t(e, n, r) {
      var i = r.indexOf(e);
      if (-1 == i) {
        r.unshift(e);
        var o = a[e];
        if (!o) throw new Error("plugin not loaded: " + e);
        v(o.depends, function (n) {
          t(n, e, r);
        });
      } else {
        var u = r.indexOf(n);
        r.splice(i, 1), r.splice(u, 0, e);
      }
      return r;
    })(n, 0, []).map(c(a));
  }
  function t(n) {
    a[n.by] = n;
  }
  function g(n, r, i, o, u) {
    n.normalize();
    var c = [],
      a = document.createDocumentFragment();
    o && c.push(n.previousSibling);
    var s = [];
    return (
      m(n.childNodes).some(function (n) {
        if (!n.tagName || n.hasChildNodes()) {
          if (n.childNodes && n.childNodes.length)
            return s.push(n), void c.push.apply(c, g(n, r, i, o, u));
          var t = n.wholeText || "",
            e = t.trim();
          e.length &&
            (" " === t[0] && s.push(l(" ")),
            v(e.split(i), function (n, t) {
              t && u && s.push(p(a, "whitespace", " ", u));
              var e = p(a, r, n);
              c.push(e), s.push(e);
            }),
            " " === t[t.length - 1] && s.push(l(" ")));
        } else s.push(n);
      }),
      v(s, function (n) {
        f(a, n);
      }),
      (n.innerHTML = ""),
      f(n, a),
      c
    );
  }
  var s = 0;
  var i = "words",
    e = n(i, s, "word", function (n) {
      return g(n, "word", /\s+/, 0, 1);
    }),
    y = "chars",
    w = n(y, [i], "char", function (n, e, t) {
      var r = [];
      return (
        v(t[i], function (n, t) {
          r.push.apply(r, g(n, "char", "", e.whitespace && t));
        }),
        r
      );
    });
  function b(e) {
    var f = (e = e || {}).key;
    return m(e.target || "[data-splitting]").map(function (a) {
      var s = a["🍌"];
      if (!e.force && s) return s;
      s = a["🍌"] = { el: a };
      var n = e.by || h(a, "splitting");
      (n && "true" != n) || (n = y);
      var t = r(n),
        l = (function (n, t) {
          for (var e in t) n[e] = t[e];
          return n;
        })({}, e);
      return (
        v(t, function (n) {
          if (n.split) {
            var t = n.by,
              e = (f ? "-" + f : "") + n.key,
              r = n.split(a, l, s);
            e &&
              ((i = a),
              (c = (u = "--" + e) + "-index"),
              v((o = r), function (n, t) {
                Array.isArray(n)
                  ? v(n, function (n) {
                      d(n, c, t);
                    })
                  : d(n, c, t);
              }),
              d(i, u + "-total", o.length)),
              (s[t] = r),
              a.classList.add(t);
          }
          var i, o, u, c;
        }),
        a.classList.add("splitting"),
        s
      );
    });
  }
  function N(n, t, e) {
    var r = m(t.matching || n.children, n),
      i = {};
    return (
      v(r, function (n) {
        var t = Math.round(n[e]);
        (i[t] || (i[t] = [])).push(n);
      }),
      Object.keys(i).map(Number).sort(x).map(c(i))
    );
  }
  function x(n, t) {
    return n - t;
  }
  (b.html = function (n) {
    var t = ((n = n || {}).target = p());
    return (t.innerHTML = n.content), b(n), t.outerHTML;
  }),
    (b.add = t);
  var T = n("lines", [i], "line", function (n, t, e) {
      return N(n, { matching: e[i] }, "offsetTop");
    }),
    L = n("items", s, "item", function (n, t) {
      return m(t.matching || n.children, n);
    }),
    k = n("rows", s, "row", function (n, t) {
      return N(n, t, "offsetTop");
    }),
    A = n("cols", s, "col", function (n, t) {
      return N(n, t, "offsetLeft");
    }),
    C = n("grid", ["rows", "cols"]),
    M = "layout",
    S = n(M, s, s, function (n, t) {
      var e = (t.rows = +(t.rows || h(n, "rows") || 1)),
        r = (t.columns = +(t.columns || h(n, "columns") || 1));
      if (
        ((t.image = t.image || h(n, "image") || n.currentSrc || n.src), t.image)
      ) {
        var i = m("img", n)[0];
        t.image = i && (i.currentSrc || i.src);
      }
      t.image && d(n, "background-image", "url(" + t.image + ")");
      for (var o = e * r, u = [], c = p(s, "cell-grid"); o--; ) {
        var a = p(c, "cell");
        p(a, "cell-inner"), u.push(a);
      }
      return f(n, c), u;
    }),
    H = n("cellRows", [M], "row", function (n, t, e) {
      var r = t.rows,
        i = u(r);
      return (
        v(e[M], function (n, t, e) {
          i[Math.floor(t / (e.length / r))].push(n);
        }),
        i
      );
    }),
    O = n("cellColumns", [M], "col", function (n, t, e) {
      var r = t.columns,
        i = u(r);
      return (
        v(e[M], function (n, t) {
          i[t % r].push(n);
        }),
        i
      );
    }),
    j = n("cells", ["cellRows", "cellColumns"], "cell", function (n, t, e) {
      return e[M];
    });
  return t(e), t(w), t(T), t(L), t(k), t(A), t(C), t(S), t(H), t(O), t(j), b;
});

/* ---------------------------------------------
 jquery.mb.YTPlayer
 --------------------------------------------- */
/*jquery.mb.YTPlayer 12-01-2022
 _ jquery.mb.components 
 _ email: matbicoc@gmail.com 
 _ Copyright (c) 2001-2022. Matteo Bicocchi (Pupunzi); 
 _ blog: http://pupunzi.open-lab.com 
 _ Open Lab s.r.l., Florence - Italy 
 */

var ytp = ytp || {};
let YTPRndSuffix = new Date().getTime(),
  YTPTimerLabels = {
    init: "YTPlayerInit_" + YTPRndSuffix,
    startPlaying: "YTPlayerStartPlay_" + YTPRndSuffix,
  };
function onYouTubeIframeAPIReady() {
  ytp.YTAPIReady ||
    ((ytp.YTAPIReady = !0), jQuery(document).trigger("YTAPIReady"));
}
let getYTPVideoID = function (e) {
  let r, t;
  return (
    e.indexOf("youtu.be") > 0 || e.indexOf("youtube.com/embed") > 0
      ? (r = (t =
          (r = e.substr(e.lastIndexOf("/") + 1, e.length)).indexOf("?list=") > 0
            ? r.substr(r.lastIndexOf("="), r.length)
            : null)
          ? r.substr(0, r.lastIndexOf("?"))
          : r)
      : e.indexOf("http") > -1
      ? ((r = e.match(/[\\?&]v=([^&#]*)/)[1]),
        (t = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null))
      : (t = (r = e.length > 15 ? null : e) ? null : e),
    { videoID: r, playlistID: t }
  );
};
!(function (jQuery, ytp) {
  (jQuery.mbYTPlayer = {
    name: "jquery.mb.YTPlayer",
    version: "3.3.9",
    build: "7619",
    author: "Matteo Bicocchi (pupunzi)",
    apiKey: "",
    defaults: {
      videoURL: null,
      containment: "body",
      ratio: "auto",
      fadeOnStartTime: 1e3,
      startAt: 0,
      stopAt: 0,
      autoPlay: !0,
      delayAtStart: 1e3,
      coverImage: !1,
      loop: !0,
      addRaster: !1,
      mask: !1,
      opacity: 1,
      quality: "hd1080",
      vol: 50,
      mute: !1,
      showControls: !0,
      anchor: "center,center",
      showAnnotations: !1,
      cc_load_policy: !1,
      showYTLogo: !0,
      useOnMobile: !0,
      playOnlyIfVisible: !1,
      onScreenPercentage: 30,
      goFullScreenOnPlay: !1,
      stopMovieOnBlur: !0,
      realFullscreen: !0,
      optimizeDisplay: !0,
      abundance: 0.3,
      gaTrack: !0,
      remember_last_time: !1,
      addFilters: !1,
      useNoCookie: !0,
      onReady: function (e) {},
      onError: function (e, r) {},
      onEnd: function () {},
    },
    controls: {
      play: "P",
      pause: "p",
      mute: "M",
      unmute: "A",
      onlyYT: "O",
      showSite: "R",
      ytLogo: "Y",
    },
    controlBar: null,
    locationProtocol: "https:",
    defaultFilters: {
      grayscale: { value: 0, unit: "%" },
      hue_rotate: { value: 0, unit: "deg" },
      invert: { value: 0, unit: "%" },
      opacity: { value: 0, unit: "%" },
      saturate: { value: 0, unit: "%" },
      sepia: { value: 0, unit: "%" },
      brightness: { value: 0, unit: "%" },
      contrast: { value: 0, unit: "%" },
      blur: { value: 0, unit: "px" },
    },
    buildPlayer: function (options) {
      if (ytp.YTAPIReady || void 0 !== window.YT)
        setTimeout(function () {
          jQuery(document).trigger("YTAPIReady"), (ytp.YTAPIReady = !0);
        }, 100);
      else {
        jQuery("#YTAPI").remove();
        let e = jQuery("<script>").attr({
          src: "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
          id: "YTAPI",
          async: "async",
          defer: !0,
        });
        jQuery("head").append(e);
      }
      function isIframe() {
        let e = !1;
        try {
          self.location.href !== top.location.href && (e = !0);
        } catch (r) {
          e = !0;
        }
        return e;
      }
      return this.each(function () {
        let YTPlayer = this,
          $YTPlayer = jQuery(YTPlayer);
        $YTPlayer.hide(),
          (YTPlayer.loop = 0),
          (YTPlayer.state = 0),
          (YTPlayer.filters = jQuery.extend(
            !0,
            {},
            jQuery.mbYTPlayer.defaultFilters
          )),
          (YTPlayer.filtersEnabled = !0),
          (YTPlayer.id = YTPlayer.id || "YTP_" + new Date().getTime()),
          $YTPlayer.addClass("mb_YTPlayer");
        let property =
          $YTPlayer.data("property") &&
          "string" == typeof $YTPlayer.data("property")
            ? eval("(" + $YTPlayer.data("property") + ")")
            : $YTPlayer.data("property");
        "object" != typeof property && (property = {}),
          (YTPlayer.opt = jQuery.extend(
            !0,
            {},
            jQuery.mbYTPlayer.defaults,
            YTPlayer.opt,
            options,
            property
          )),
          (YTPRndSuffix = getYTPVideoID(YTPlayer.opt.videoURL).videoID),
          (YTPTimerLabels = {
            init: "YTPlayerInit_" + YTPRndSuffix,
            startPlaying: "YTPlayerStartPlay_" + YTPRndSuffix,
          }),
          console.time(YTPTimerLabels.init),
          console.time(YTPTimerLabels.startPlaying),
          (YTPlayer.opt.elementId = YTPlayer.id),
          0 === YTPlayer.opt.vol &&
            ((YTPlayer.opt.vol = 1), (YTPlayer.opt.mute = !0)),
          YTPlayer.opt.loop &&
            "boolean" == typeof YTPlayer.opt.loop &&
            (YTPlayer.opt.loop = 9999);
        let fullScreenAvailable =
          document.fullscreenEnabled ||
          document.webkitFullscreenEnabled ||
          document.mozFullScreenEnabled ||
          document.msFullscreenEnabled;
        (YTPlayer.opt.realFullscreen =
          !(isIframe() || !fullScreenAvailable) && YTPlayer.opt.realFullscreen),
          (YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations
            ? "1"
            : "3"),
          (YTPlayer.opt.cc_load_policy = YTPlayer.opt.cc_load_policy
            ? "1"
            : "0"),
          (YTPlayer.opt.coverImage =
            YTPlayer.opt.coverImage || YTPlayer.opt.backgroundImage),
          (YTPlayer.opt.quality = "hd1080"),
          jQuery.mbBrowser.msie &&
            jQuery.mbBrowser.version < 9 &&
            (YTPlayer.opt.opacity = 1),
          (YTPlayer.opt.containment =
            "self" === YTPlayer.opt.containment
              ? $YTPlayer
              : jQuery(YTPlayer.opt.containment)),
          (YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1),
          (YTPlayer.opt.ratio =
            "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio),
          (YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio));
        let origContainmentBackground =
          YTPlayer.opt.containment.css("background-image");
        (origContainmentBackground =
          "none" === origContainmentBackground
            ? null
            : origContainmentBackground),
          (YTPlayer.orig_containment_background = origContainmentBackground),
          $YTPlayer.attr("id") ||
            $YTPlayer.attr("id", "ytp_" + new Date().getTime()),
          (YTPlayer.playerID = "iframe_" + YTPlayer.id),
          (YTPlayer.isAlone = !1),
          (YTPlayer.hasFocus = !0),
          (YTPlayer.videoID = YTPlayer.opt.videoURL
            ? getYTPVideoID(YTPlayer.opt.videoURL).videoID
            : !!$YTPlayer.attr("href") &&
              getYTPVideoID($YTPlayer.attr("href")).videoID),
          (YTPlayer.playlistID = YTPlayer.opt.videoURL
            ? getYTPVideoID(YTPlayer.opt.videoURL).playlistID
            : !!$YTPlayer.attr("href") &&
              getYTPVideoID($YTPlayer.attr("href")).playlistID);
        let start_from_last = 0;
        if (
          (jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID) &&
            (start_from_last = parseFloat(
              jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID)
            )),
          YTPlayer.opt.remember_last_time &&
            start_from_last &&
            ((YTPlayer.start_from_last = start_from_last),
            jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID)),
          (YTPlayer.isPlayer = $YTPlayer.is(YTPlayer.opt.containment)),
          (YTPlayer.isBackground = YTPlayer.opt.containment.is("body")),
          YTPlayer.isBackground && ytp.backgroundIsInited)
        )
          return;
        if (
          (YTPlayer.isPlayer && $YTPlayer.show(),
          (YTPlayer.overlay = jQuery("<div/>")
            .css({
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            })
            .addClass("YTPOverlay")),
          $YTPlayer.changeCoverImage(),
          (YTPlayer.wrapper = jQuery("<div/>")
            .attr("id", "wrapper_" + YTPlayer.id)
            .css({
              position: "absolute",
              zIndex: 0,
              minWidth: "100%",
              minHeight: "100%",
              left: 0,
              top: 0,
              overflow: "hidden",
              opacity: 0,
            })
            .addClass("mbYTP_wrapper")),
          YTPlayer.isPlayer)
        ) {
          let e = jQuery.mbBrowser.mobile
            ? "inlinePlayButtonMobile"
            : "inlinePlayButton";
          (YTPlayer.inlinePlayButton = jQuery("<div/>")
            .addClass("inlinePlayButton")
            .html(jQuery.mbYTPlayer.controls.play)),
            $YTPlayer.append(YTPlayer.inlinePlayButton),
            YTPlayer.inlinePlayButton.on("click", function (e) {
              $YTPlayer.YTPPlay(),
                YTPlayer.inlinePlayButton.hide(),
                YTPlayer.opt.goFullScreenOnPlay && $YTPlayer.YTPFullscreen(),
                e.stopPropagation();
            }),
            YTPlayer.opt.autoPlay && YTPlayer.inlinePlayButton.hide(),
            YTPlayer.overlay
              .on("click", function () {
                $YTPlayer.YTPTogglePlay(),
                  YTPlayer.opt.goFullScreenOnPlay && $YTPlayer.YTPFullscreen();
              })
              .css({ cursor: "pointer" });
        }
        let playerBox = jQuery("<div/>")
          .attr("id", YTPlayer.playerID)
          .addClass("playerBox");
        if (
          (playerBox.css({
            position: "absolute",
            zIndex: 0,
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            overflow: "hidden",
            opacity: 1,
          }),
          YTPlayer.wrapper.append(playerBox),
          playerBox.after(YTPlayer.overlay),
          YTPlayer.isPlayer &&
            ((YTPlayer.inlineWrapper =
              jQuery("<div/>").addClass("inline-YTPlayer")),
            YTPlayer.inlineWrapper.css({
              position: "relative",
              maxWidth: YTPlayer.opt.containment.css("width"),
            }),
            YTPlayer.opt.containment.css({
              position: "relative",
              paddingBottom: "56.25%",
              overflow: "hidden",
              height: 0,
            }),
            YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper)),
          YTPlayer.opt.containment
            .children()
            .not("script, style")
            .each(function () {
              "static" === jQuery(this).css("position") &&
                jQuery(this).css("position", "relative");
            }),
          YTPlayer.isBackground
            ? (jQuery("body").css({ boxSizing: "border-box" }),
              YTPlayer.wrapper.css({
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 0,
              }))
            : "static" === YTPlayer.opt.containment.css("position") &&
              (YTPlayer.opt.containment.css({ position: "relative" }),
              $YTPlayer.show()),
          YTPlayer.opt.containment.prepend(YTPlayer.wrapper),
          YTPlayer.isBackground ||
            YTPlayer.overlay
              .on("mouseenter", function () {
                YTPlayer.controlBar &&
                  YTPlayer.controlBar.length &&
                  YTPlayer.controlBar.addClass("visible");
              })
              .on("mouseleave", function () {
                YTPlayer.controlBar &&
                  YTPlayer.controlBar.length &&
                  YTPlayer.controlBar.removeClass("visible");
              }),
          jQuery.mbBrowser.mobile && !YTPlayer.opt.useOnMobile)
        )
          return (
            YTPlayer.opt.coverImage &&
              (YTPlayer.wrapper.css({
                backgroundImage: "url(" + YTPlayer.opt.coverImage + ")",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                opacity: 1,
              }),
              YTPlayer.wrapper.css({ opacity: 1 })),
            $YTPlayer
          );
        jQuery.mbBrowser.mobile &&
          YTPlayer.opt.autoPlay &&
          YTPlayer.opt.useOnMobile &&
          jQuery("body").one("touchstart", function () {
            YTPlayer.player.playVideo();
          }),
          jQuery(document).one("YTAPIReady", function () {
            $YTPlayer.trigger("YTAPIReady_" + YTPlayer.id),
              (ytp.YTAPIReady = !0);
          }),
          (YTPlayer.isOnScreen = jQuery.mbYTPlayer.isOnScreen(
            YTPlayer,
            YTPlayer.opt.onScreenPercentage
          )),
          $YTPlayer.one("YTAPIReady_" + YTPlayer.id, function () {
            let e = this,
              r = jQuery(e);
            (e.isBackground && ytp.backgroundIsInited) ||
              e.isInit ||
              (e.isBackground && (ytp.backgroundIsInited = !0),
              (e.opt.autoPlay =
                void 0 === e.opt.autoPlay ? !!e.isBackground : e.opt.autoPlay),
              (e.opt.vol = e.opt.vol ? e.opt.vol : 100),
              jQuery.mbYTPlayer.getDataFromAPI(e),
              jQuery(e).on("YTPChanged", function (t) {
                if (e.isInit) return;
                e.isInit = !0;
                let a = {
                  modestbranding: 1,
                  autoplay: 0,
                  controls: 0,
                  showinfo: 0,
                  rel: 0,
                  enablejsapi: 1,
                  version: 3,
                  playerapiid: e.playerID,
                  origin: "*",
                  allowfullscreen: !0,
                  wmode: "transparent",
                  iv_load_policy: e.opt.showAnnotations,
                  cc_load_policy: e.opt.cc_load_policy,
                  playsinline: jQuery.mbBrowser.mobile && !e.isPlayer ? 1 : 0,
                  html5: document.createElement("video").canPlayType ? 1 : 0,
                };
                new YT.Player(e.playerID, {
                  host: e.opt.useNoCookie
                    ? "https://www.youtube-nocookie.com"
                    : "https://www.youtube.com",
                  playerVars: a,
                  events: {
                    onReady: function (t) {
                      (e.player = t.target),
                        e.player.loadVideoById({
                          videoId: e.videoID.toString(),
                          suggestedQuality: e.opt.quality,
                        }),
                        r.trigger("YTPlayerIsReady_" + e.id);
                    },
                    onStateChange: function (r) {
                      if ("function" != typeof r.target.getPlayerState) return;
                      let t,
                        a = r.target.getPlayerState();
                      if (e.preventTrigger || e.isStarting)
                        return void (e.preventTrigger = !1);
                      switch (
                        ((e.state = a),
                        r.data === YT.PlayerState.PLAYING &&
                          r.target.setPlaybackQuality(e.opt.quality),
                        a)
                      ) {
                        case -1:
                          t = "YTPUnstarted";
                          break;
                        case 0:
                          t = "YTPRealEnd";
                          break;
                        case 1:
                          (t = "YTPPlay"),
                            e.controlBar.length &&
                              e.controlBar
                                .find(".mb_YTPPlayPause")
                                .html(jQuery.mbYTPlayer.controls.pause),
                            e.isPlayer && e.inlinePlayButton.hide(),
                            jQuery(document).off("mousedown.YTPstart");
                          break;
                        case 2:
                          (t = "YTPPause"),
                            e.controlBar.length &&
                              e.controlBar
                                .find(".mb_YTPPlayPause")
                                .html(jQuery.mbYTPlayer.controls.play),
                            e.isPlayer && e.inlinePlayButton.show();
                          break;
                        case 3:
                          e.player.setPlaybackQuality(e.opt.quality),
                            (t = "YTPBuffering"),
                            e.controlBar.length &&
                              e.controlBar
                                .find(".mb_YTPPlayPause")
                                .html(jQuery.mbYTPlayer.controls.play);
                          break;
                        case 5:
                          t = "YTPCued";
                      }
                      let o = jQuery.Event(t);
                      (o.time = e.currentTime), jQuery(e).trigger(o);
                    },
                    onPlaybackQualityChange: function (r) {
                      let t = r.target.getPlaybackQuality(),
                        a = jQuery.Event("YTPQualityChange");
                      (a.quality = t), jQuery(e).trigger(a);
                    },
                    onError: function (t) {
                      switch (
                        ("function" == typeof e.opt.onError &&
                          e.opt.onError(r, t),
                        console.debug("error:", t),
                        t.data)
                      ) {
                        case 2:
                          console.error(
                            "video ID:: " +
                              e.videoID +
                              ": The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks."
                          );
                          break;
                        case 5:
                          console.error(
                            "video ID:: " +
                              e.videoID +
                              ": The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred."
                          );
                          break;
                        case 100:
                          console.error(
                            "video ID:: " +
                              e.videoID +
                              ": The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private."
                          );
                          break;
                        case 101:
                        case 150:
                          console.error(
                            "video ID:: " +
                              e.videoID +
                              ": The video doesn't exist or The owner does not allow it to be played in embedded players."
                          );
                      }
                      e.isList && jQuery(e).YTPPlayNext();
                    },
                  },
                }),
                  r.on("YTPlayerIsReady_" + e.id, function () {
                    if (e.isReady) return this;
                    (e.playerEl = e.player.getIframe()),
                      jQuery(e.playerEl).unselectable(),
                      r.optimizeDisplay(),
                      jQuery(window)
                        .off("resize.YTP_" + e.id)
                        .on("resize.YTP_" + e.id, function () {
                          r.optimizeDisplay();
                        }),
                      jQuery(window)
                        .off("orientationchange.YTP_" + e.id)
                        .on("orientationchange.YTP_" + e.id, function () {
                          r.optimizeDisplay();
                        }),
                      e.opt.remember_last_time &&
                        jQuery(window).on("unload.YTP_" + e.id, function () {
                          let r = e.player.getCurrentTime();
                          jQuery.mbCookie.set(
                            "YTPlayer_start_from" + e.videoID,
                            r,
                            0
                          );
                        }),
                      r.YTPCheckForState();
                  });
              }));
          }),
          $YTPlayer.off("YTPTime.mask"),
          jQuery.mbYTPlayer.applyMask(YTPlayer),
          console.timeEnd(YTPTimerLabels.init),
          setTimeout(function () {
            ytp.YTAPIReady ||
              "object" != typeof window.YT ||
              (jQuery(document).trigger("YTAPIReady"),
              (ytp.YTAPIReady = !0),
              console.error(
                "YTPlayer: More then a call to the YT API has been detected"
              ));
          }, YTPlayer.opt.delayAtStart);
      });
    },
    isOnScreen: function (e, r) {
      r = r || 10;
      let t = e.wrapper,
        a = jQuery(window).scrollTop(),
        o = a + jQuery(window).height(),
        n = (t.height() * r) / 100,
        i = t.offset().top + n;
      return t.offset().top + (t.height() - n) <= o && i >= a;
    },
    getDataFromAPI: function (e) {
      (e.videoData = jQuery.mbStorage.get("YTPlayer_data_" + e.videoID)),
        e.videoData
          ? (setTimeout(function () {
              e.dataReceived = !0;
              let r = jQuery.Event("YTPChanged");
              (r.time = e.currentTime),
                (r.videoId = e.videoID),
                (r.opt = e.opt),
                jQuery(e).trigger(r);
              let t = jQuery.Event("YTPData");
              t.prop = {};
              for (let r in e.videoData)
                e.videoData.hasOwnProperty(r) && (t.prop[r] = e.videoData[r]);
              jQuery(e).trigger(t);
            }, e.opt.fadeOnStartTime),
            (e.hasData = !0))
          : jQuery.mbYTPlayer.apiKey
          ? jQuery
              .getJSON(
                "https://www.googleapis.com/youtube/v3/videos?id=" +
                  e.videoID +
                  "&key=" +
                  jQuery.mbYTPlayer.apiKey +
                  "&part=snippet",
                function (r) {
                  e.dataReceived = !0;
                  let t = jQuery.Event("YTPChanged");
                  (t.time = e.currentTime),
                    (t.videoId = e.videoID),
                    jQuery(e).trigger(t),
                    r.items[0]
                      ? (!(function (r) {
                          (e.videoData = {}),
                            (e.videoData.id = e.videoID),
                            (e.videoData.channelTitle = r.channelTitle),
                            (e.videoData.title = r.title),
                            (e.videoData.description =
                              r.description.length < 400
                                ? r.description
                                : r.description.substring(0, 400) + " ..."),
                            (e.videoData.thumb_max = r.thumbnails.maxres
                              ? r.thumbnails.maxres.url
                              : null),
                            (e.videoData.thumb_high = r.thumbnails.high
                              ? r.thumbnails.high.url
                              : null),
                            (e.videoData.thumb_medium = r.thumbnails.medium
                              ? r.thumbnails.medium.url
                              : null),
                            jQuery.mbStorage.set(
                              "YTPlayer_data_" + e.videoID,
                              e.videoData
                            );
                        })(r.items[0].snippet),
                        (e.hasData = !0))
                      : ((e.videoData = {}), (e.hasData = !1));
                  let a = jQuery.Event("YTPData");
                  a.prop = {};
                  for (let r in e.videoData) a.prop[r] = e.videoData[r];
                  jQuery(e).trigger(a);
                }
              )
              .fail(function (r) {
                console.error("YT data error:: ", r), (e.hasData = !1);
                let t = jQuery.Event("YTPChanged");
                (t.time = e.currentTime),
                  (t.videoId = e.videoID),
                  jQuery(e).trigger(t);
              })
          : (setTimeout(function () {
              let r = jQuery.Event("YTPChanged");
              (r.time = e.currentTime),
                (r.videoId = e.videoID),
                jQuery(e).trigger(r);
            }, 10),
            (e.videoData = null)),
        (e.opt.ratio = "auto" == e.opt.ratio ? 16 / 9 : e.opt.ratio),
        e.isPlayer &&
          !e.opt.autoPlay &&
          ((e.loading = jQuery("<div/>")
            .addClass("loading")
            .html("Loading")
            .hide()),
          jQuery(e).append(e.loading),
          e.loading.fadeIn());
    },
    removeStoredData: function () {
      jQuery.mbStorage.remove();
    },
    getVideoData: function () {
      return this.get(0).videoData;
    },
    getVideoID: function () {
      return this.get(0).videoID || !1;
    },
    getPlaylistID: function () {
      return this.get(0).playlistID || !1;
    },
    setVideoQuality: function (e) {
      let r = this.get(0),
        t = r.player.getCurrentTime();
      return (
        jQuery(r).YTPPause(),
        (r.opt.quality = e),
        r.player.setPlaybackQuality(e),
        r.player.seekTo(t),
        jQuery(r).YTPPlay(),
        this
      );
    },
    getVideoQuality: function () {
      return this.get(0).player.getPlaybackQuality();
    },
    playlist: function (e, r, t) {
      let a = this.get(0);
      return (
        (a.isList = !0),
        r && (e = jQuery.shuffle(e)),
        a.videoID ||
          ((a.videos = e),
          (a.videoCounter = 1),
          (a.videoLength = e.length),
          jQuery(a).data("property", e[0]),
          jQuery(a).YTPlayer()),
        "function" == typeof t &&
          jQuery(a).on("YTPChanged", function () {
            t(a);
          }),
        jQuery(a).on("YTPEnd", function () {
          jQuery(a).YTPPlayNext();
        }),
        this
      );
    },
    playNext: function () {
      let e = this.get(0);
      return (
        e.videoCounter++,
        e.videoCounter > e.videoLength && (e.videoCounter = 1),
        jQuery(e).YTPPlayIndex(e.videoCounter),
        this
      );
    },
    playPrev: function () {
      let e = this.get(0);
      return (
        e.videoCounter--,
        e.videoCounter <= 0 && (e.videoCounter = e.videoLength),
        jQuery(e).YTPPlayIndex(e.videoCounter),
        this
      );
    },
    playIndex: function (e) {
      let r = this.get(0);
      r.checkForStartAt &&
        (clearInterval(r.checkForStartAt), clearInterval(r.getState)),
        (r.videoCounter = e),
        r.videoCounter >= r.videoLength && (r.videoCounter = r.videoLength);
      let t = r.videos[r.videoCounter - 1];
      return jQuery(r).YTPChangeVideo(t), this;
    },
    changeVideo: function (e) {
      let r = this,
        t = r.get(0);
      (t.opt.startAt = 0),
        (t.opt.stopAt = 0),
        (t.opt.mask = !1),
        (t.opt.mute = !0),
        (t.opt.autoPlay = !0),
        (t.opt.addFilters = !1),
        (t.opt.coverImage = !1),
        (t.hasData = !1),
        (t.hasChanged = !0),
        (t.player.loopTime = void 0),
        e && jQuery.extend(t.opt, e),
        (t.videoID = getYTPVideoID(t.opt.videoURL).videoID),
        t.opt.loop && "boolean" == typeof t.opt.loop && (t.opt.loop = 9999),
        t.wrapper.css({ background: "none" }),
        jQuery(t.playerEl).CSSAnimate(
          { opacity: 0 },
          t.opt.fadeOnStartTime,
          function () {
            jQuery.mbYTPlayer.getDataFromAPI(t),
              r.YTPGetPlayer().loadVideoById({
                videoId: t.videoID,
                suggestedQuality: t.opt.quality,
              }),
              r.YTPPause(),
              r.optimizeDisplay(),
              t.checkForStartAt &&
                (clearInterval(t.checkForStartAt), clearInterval(t.getState)),
              r.YTPCheckForState();
          }
        );
      let a = jQuery.Event("YTPChangeVideo");
      return (
        (a.time = t.currentTime),
        jQuery(t).trigger(a),
        jQuery.mbYTPlayer.applyMask(t),
        this
      );
    },
    getPlayer: function () {
      let e = this.get(0);
      return e.isReady ? e.player : null;
    },
    playerDestroy: function () {
      let e = this.get(0);
      return e.isReady
        ? ((ytp.YTAPIReady = !0),
          (ytp.backgroundIsInited = !1),
          (e.isInit = !1),
          (e.videoID = null),
          (e.isReady = !1),
          e.wrapper.remove(),
          jQuery("#controlBar_" + e.id).remove(),
          clearInterval(e.checkForStartAt),
          clearInterval(e.getState),
          this)
        : this;
    },
    fullscreen: function (real) {
      let YTPlayer = this.get(0);
      void 0 === real && (real = eval(YTPlayer.opt.realFullscreen));
      let controls = jQuery("#controlBar_" + YTPlayer.id),
        fullScreenBtn = controls.find(".mb_OnlyYT"),
        videoWrapper = YTPlayer.isPlayer
          ? YTPlayer.opt.containment
          : YTPlayer.wrapper;
      if (real) {
        let e = jQuery.mbBrowser.mozilla
          ? "mozfullscreenchange"
          : jQuery.mbBrowser.webkit
          ? "webkitfullscreenchange"
          : "fullscreenchange";
        jQuery(document)
          .off(e)
          .on(e, function () {
            RunPrefixMethod(document, "IsFullScreen") ||
            RunPrefixMethod(document, "FullScreen")
              ? jQuery(YTPlayer).trigger("YTPFullScreenStart")
              : ((YTPlayer.isAlone = !1),
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
                jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),
                videoWrapper.removeClass("YTPFullscreen"),
                videoWrapper.CSSAnimate(
                  { opacity: YTPlayer.opt.opacity },
                  YTPlayer.opt.fadeOnStartTime
                ),
                videoWrapper.css({ zIndex: 0 }),
                YTPlayer.isBackground
                  ? jQuery("body").after(controls)
                  : YTPlayer.wrapper.before(controls),
                jQuery(window).resize(),
                jQuery(YTPlayer).trigger("YTPFullScreenEnd"));
          });
      }
      if (YTPlayer.isAlone)
        jQuery(document).off("mousemove.YTPlayer"),
          clearTimeout(YTPlayer.hideCursor),
          YTPlayer.overlay.css({ cursor: "auto" }),
          real
            ? cancelFullscreen()
            : (videoWrapper.CSSAnimate(
                { opacity: YTPlayer.opt.opacity },
                YTPlayer.opt.fadeOnStartTime
              ),
              videoWrapper.css({ zIndex: 0 })),
          fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
          (YTPlayer.isAlone = !1);
      else {
        function hideMouse() {
          YTPlayer.overlay.css({ cursor: "none" });
        }
        jQuery(document).on("mousemove.YTPlayer", function (e) {
          YTPlayer.overlay.css({ cursor: "auto" }),
            clearTimeout(YTPlayer.hideCursor),
            jQuery(e.target).parents().is(".mb_YTPBar") ||
              (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3));
        }),
          hideMouse(),
          real
            ? (videoWrapper.css({ opacity: 0 }),
              videoWrapper.addClass("YTPFullscreen"),
              launchFullscreen(videoWrapper.get(0)),
              setTimeout(function () {
                videoWrapper.CSSAnimate(
                  { opacity: 1 },
                  2 * YTPlayer.opt.fadeOnStartTime
                ),
                  videoWrapper.append(controls),
                  jQuery(YTPlayer).optimizeDisplay(),
                  YTPlayer.player.seekTo(
                    YTPlayer.player.getCurrentTime() + 0.1,
                    !0
                  );
              }, YTPlayer.opt.fadeOnStartTime))
            : videoWrapper
                .css({ zIndex: 1e4 })
                .CSSAnimate({ opacity: 1 }, 2 * YTPlayer.opt.fadeOnStartTime),
          fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),
          (YTPlayer.isAlone = !0);
      }
      function RunPrefixMethod(e, r) {
        let t,
          a,
          o = ["webkit", "moz", "ms", "o", ""],
          n = 0;
        for (; n < o.length && !e[t]; ) {
          if (
            ((t = r),
            "" === o[n] && (t = t.substr(0, 1).toLowerCase() + t.substr(1)),
            "undefined" != (a = typeof e[(t = o[n] + t)]))
          )
            return (o = [o[n]]), "function" == a ? e[t]() : e[t];
          n++;
        }
      }
      function launchFullscreen(e) {
        RunPrefixMethod(e, "RequestFullScreen");
      }
      function cancelFullscreen() {
        (RunPrefixMethod(document, "FullScreen") ||
          RunPrefixMethod(document, "IsFullScreen")) &&
          RunPrefixMethod(document, "CancelFullScreen");
      }
      return this;
    },
    toggleLoops: function () {
      let e = this.get(0),
        r = e.opt;
      return (
        1 == r.loop
          ? (r.loop = 0)
          : (r.startAt ? e.player.seekTo(r.startAt) : e.player.playVideo(),
            (r.loop = 1)),
        this
      );
    },
    play: function () {
      let e = this.get(0),
        r = jQuery(e);
      return e.isReady
        ? (setTimeout(function () {
            r.YTPSetAbundance(e.opt.abundance);
          }, 300),
          e.player.playVideo(),
          jQuery(e.playerEl).css({ opacity: 1 }),
          e.wrapper.css({ backgroundImage: "none" }),
          e.wrapper.CSSAnimate(
            { opacity: e.isAlone ? 1 : e.opt.opacity },
            e.opt.fadeOnStartTime
          ),
          jQuery("#controlBar_" + e.id)
            .find(".mb_YTPPlayPause")
            .html(jQuery.mbYTPlayer.controls.pause),
          (e.state = 1),
          this)
        : this;
    },
    togglePlay: function (e) {
      let r = this.get(0);
      return r.isReady
        ? (1 === r.state ? this.YTPPause() : this.YTPPlay(),
          "function" == typeof e && e(r.state),
          this)
        : this;
    },
    stop: function () {
      let e = this.get(0);
      return e.isReady
        ? (jQuery("#controlBar_" + e.id)
            .find(".mb_YTPPlayPause")
            .html(jQuery.mbYTPlayer.controls.play),
          e.player.stopVideo(),
          this)
        : this;
    },
    pause: function () {
      let e = this.get(0);
      return e.isReady
        ? (e.opt.abundance < 0.2 && this.YTPSetAbundance(0.2),
          e.player.pauseVideo(),
          (e.state = 2),
          this)
        : this;
    },
    seekTo: function (e) {
      let r = this.get(0);
      return r.isReady ? (r.player.seekTo(e, !0), this) : this;
    },
    getPlaybackRate: function () {
      let e = this.get(0);
      return e.isReady ? e.player.getPlaybackRate() : this;
    },
    setPlaybackRate: function (e) {
      let r = this.get(0);
      return r.isReady ? (r.player.setPlaybackRate(e), this) : this;
    },
    setVolume: function (e) {
      let r = this.get(0);
      return r.isReady
        ? ((r.opt.vol = e),
          this.YTPUnmute(),
          r.player.setVolume(r.opt.vol),
          r.volumeBar && r.volumeBar.length && r.volumeBar.updateSliderVal(e),
          this)
        : this;
    },
    getVolume: function () {
      let e = this.get(0);
      return e.isReady ? e.player.getVolume() : this;
    },
    toggleVolume: function () {
      let e = this.get(0);
      return e.isReady
        ? (e.isMute
            ? (jQuery.mbBrowser.mobile || this.YTPSetVolume(e.opt.vol),
              this.YTPUnmute())
            : this.YTPMute(),
          this)
        : this;
    },
    mute: function () {
      let e = this.get(0);
      if (!e.isReady) return this;
      if (e.isMute) return this;
      e.player.mute(),
        (e.isMute = !0),
        e.player.setVolume(0),
        e.volumeBar &&
          e.volumeBar.length &&
          e.volumeBar.width() > 10 &&
          e.volumeBar.updateSliderVal(0),
        jQuery("#controlBar_" + e.id)
          .find(".mb_YTPMuteUnmute")
          .html(jQuery.mbYTPlayer.controls.unmute),
        jQuery(e).addClass("isMuted"),
        e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
      let r = jQuery.Event("YTPMuted");
      return (
        (r.time = e.currentTime), e.preventTrigger || jQuery(e).trigger(r), this
      );
    },
    unmute: function () {
      let e = this.get(0);
      if (!e.isReady) return this;
      if (!e.isMute) return this;
      e.player.unMute(),
        (e.isMute = !1),
        jQuery(e).YTPSetVolume(e.opt.vol),
        e.volumeBar &&
          e.volumeBar.length &&
          e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10),
        jQuery("#controlBar_" + e.id)
          .find(".mb_YTPMuteUnmute")
          .html(jQuery.mbYTPlayer.controls.mute),
        jQuery(e).removeClass("isMuted"),
        e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
      let r = jQuery.Event("YTPUnmuted");
      return (
        (r.time = e.currentTime), e.preventTrigger || jQuery(e).trigger(r), this
      );
    },
    applyFilter: function (e, r) {
      let t = this.get(0);
      if (!t.isReady) return this;
      (t.filters[e].value = r), t.filtersEnabled && this.YTPEnableFilters();
    },
    applyFilters: function (e) {
      let r = this,
        t = r.get(0);
      if (!t.isReady)
        return (
          jQuery(t).on("YTPReady", function () {
            r.YTPApplyFilters(e);
          }),
          this
        );
      for (let t in e) r.YTPApplyFilter(t, e[t]);
      r.trigger("YTPFiltersApplied");
    },
    toggleFilter: function (e, r) {
      let t = this.get(0);
      return t.isReady
        ? (t.filters[e].value
            ? (t.filters[e].value = 0)
            : (t.filters[e].value = r),
          t.filtersEnabled && jQuery(t).YTPEnableFilters(),
          this)
        : this;
    },
    toggleFilters: function (e) {
      let r = this.get(0);
      return r.isReady
        ? (r.filtersEnabled
            ? (jQuery(r).trigger("YTPDisableFilters"),
              jQuery(r).YTPDisableFilters())
            : (jQuery(r).YTPEnableFilters(),
              jQuery(r).trigger("YTPEnableFilters")),
          "function" == typeof e && e(r.filtersEnabled),
          this)
        : this;
    },
    disableFilters: function () {
      let e = this.get(0);
      if (!e.isReady) return this;
      let r = jQuery(e.playerEl);
      return (
        r.css("-webkit-filter", ""),
        r.css("filter", ""),
        (e.filtersEnabled = !1),
        this
      );
    },
    enableFilters: function () {
      let e = this.get(0);
      if (!e.isReady) return this;
      let r = jQuery(e.playerEl),
        t = "";
      for (let r in e.filters)
        e.filters[r].value &&
          (t +=
            r.replace("_", "-") +
            "(" +
            e.filters[r].value +
            e.filters[r].unit +
            ") ");
      return (
        r.css("-webkit-filter", t),
        r.css("filter", t),
        (e.filtersEnabled = !0),
        this
      );
    },
    removeFilter: function (e, r) {
      let t = this,
        a = t.get(0);
      if (!a.isReady) return this;
      if (("function" == typeof e && ((r = e), (e = null)), e))
        t.YTPApplyFilter(e, 0), "function" == typeof r && r(e);
      else {
        for (let e in a.filters)
          a.filters.hasOwnProperty(e) &&
            (t.YTPApplyFilter(e, 0), "function" == typeof r && r(e));
        a.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters);
      }
      let o = jQuery.Event("YTPFiltersApplied");
      return t.trigger(o), this;
    },
    getFilters: function () {
      let e = this.get(0);
      return e.isReady ? e.filters : this;
    },
    addMask: function (e) {
      let r = this.get(0);
      e || (e = r.actualMask);
      let t = jQuery("<img/>")
        .attr("src", e)
        .on("load", function () {
          r.overlay.CSSAnimate(
            { opacity: 0 },
            r.opt.fadeOnStartTime,
            function () {
              (r.hasMask = !0),
                t.remove(),
                r.overlay.css({
                  backgroundImage: "url(" + e + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }),
                r.overlay.CSSAnimate({ opacity: 1 }, r.opt.fadeOnStartTime);
            }
          );
        });
      return this;
    },
    removeMask: function () {
      let e = this.get(0);
      return (
        e.overlay.CSSAnimate(
          { opacity: 0 },
          e.opt.fadeOnStartTime,
          function () {
            (e.hasMask = !1),
              e.overlay.css({
                backgroundImage: "",
                backgroundRepeat: "",
                backgroundPosition: "",
                backgroundSize: "",
              }),
              e.overlay.CSSAnimate({ opacity: 1 }, e.opt.fadeOnStartTime);
          }
        ),
        this
      );
    },
    applyMask: function (e) {
      let r = jQuery(e);
      if ((r.off("YTPTime.mask"), e.opt.mask))
        if ("string" == typeof e.opt.mask)
          r.YTPAddMask(e.opt.mask), (e.actualMask = e.opt.mask);
        else if ("object" == typeof e.opt.mask) {
          for (let r in e.opt.mask)
            e.opt.mask[r] &&
              (img = jQuery("<img/>").attr("src", e.opt.mask[r]));
          e.opt.mask[0] && r.YTPAddMask(e.opt.mask[0]),
            r.on("YTPTime.mask", function (t) {
              for (let a in e.opt.mask)
                t.time === a &&
                  (e.opt.mask[a]
                    ? (r.YTPAddMask(e.opt.mask[a]),
                      (e.actualMask = e.opt.mask[a]))
                    : r.YTPRemoveMask());
            });
        }
    },
    toggleMask: function () {
      let e = this.get(0),
        r = jQuery(e);
      return e.hasMask ? r.YTPRemoveMask() : r.YTPAddMask(), this;
    },
    manageProgress: function () {
      let e = this.get(0),
        r = jQuery("#controlBar_" + e.id),
        t = r.find(".mb_YTPProgress"),
        a = r.find(".mb_YTPLoaded"),
        o = r.find(".mb_YTPseekbar"),
        n = t.outerWidth(),
        i = Math.floor(e.player.getCurrentTime()),
        l = Math.floor(e.player.getDuration()),
        s = (i * n) / l,
        u = 100 * e.player.getVideoLoadedFraction();
      return (
        a.css({ left: 0, width: u + "%" }),
        o.css({ left: 0, width: s }),
        { totalTime: l, currentTime: i }
      );
    },
    buildControls: function (YTPlayer) {
      if (
        (jQuery("#controlBar_" + YTPlayer.id).remove(),
        !YTPlayer.opt.showControls)
      )
        return void (YTPlayer.controlBar = !1);
      if (
        ((YTPlayer.opt.showYTLogo =
          YTPlayer.opt.showYTLogo || YTPlayer.opt.printUrl),
        jQuery("#controlBar_" + YTPlayer.id).length)
      )
        return;
      YTPlayer.controlBar = jQuery("<div/>")
        .attr("id", "controlBar_" + YTPlayer.id)
        .addClass("mb_YTPBar")
        .css({
          whiteSpace: "noWrap",
          position: YTPlayer.isBackground ? "fixed" : "absolute",
          zIndex: YTPlayer.isBackground ? 1e4 : 1e3,
        })
        .hide()
        .on("click", function (e) {
          e.stopPropagation();
        });
      let buttonBar = jQuery("<div/>").addClass("buttonBar"),
        playpause = jQuery(
          "<span>" + jQuery.mbYTPlayer.controls.play + "</span>"
        )
          .addClass("mb_YTPPlayPause ytpicon")
          .on("click", function (e) {
            e.stopPropagation(), jQuery(YTPlayer).YTPTogglePlay();
          }),
        MuteUnmute = jQuery(
          "<span>" + jQuery.mbYTPlayer.controls.mute + "</span>"
        )
          .addClass("mb_YTPMuteUnmute ytpicon")
          .on("click", function (e) {
            e.stopPropagation(), jQuery(YTPlayer).YTPToggleVolume();
          }),
        volumeBar = jQuery("<div/>")
          .addClass("mb_YTPVolumeBar")
          .css({ display: "inline-block" });
      YTPlayer.volumeBar = volumeBar;
      let idx = jQuery("<span/>").addClass("mb_YTPTime"),
        vURL = YTPlayer.opt.videoURL ? YTPlayer.opt.videoURL : "";
      vURL.indexOf("http") < 0 &&
        (vURL = "https://www.youtube.com/watch?v=" + YTPlayer.opt.videoURL);
      let movieUrl = jQuery("<span/>")
          .html(jQuery.mbYTPlayer.controls.ytLogo)
          .addClass("mb_YTPUrl ytpicon")
          .attr("title", "view on YouTube")
          .on("click", function () {
            window.open(vURL, "viewOnYT");
          }),
        onlyVideo = jQuery("<span/>")
          .html(jQuery.mbYTPlayer.controls.onlyYT)
          .addClass("mb_OnlyYT ytpicon")
          .on("click", function (e) {
            e.stopPropagation(),
              jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realFullscreen);
          }),
        progressBar = jQuery("<div/>")
          .addClass("mb_YTPProgress")
          .css("position", "absolute")
          .on("click", function (e) {
            e.stopPropagation(),
              timeBar.css({ width: e.clientX - timeBar.offset().left }),
              (YTPlayer.timeW = e.clientX - timeBar.offset().left),
              YTPlayer.controlBar.find(".mb_YTPLoaded").css({ width: 0 });
            let r = Math.floor(YTPlayer.player.getDuration());
            (YTPlayer.goto =
              (timeBar.outerWidth() * r) / progressBar.outerWidth()),
              YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0),
              YTPlayer.controlBar.find(".mb_YTPLoaded").css({ width: 0 });
          }),
        loadedBar = jQuery("<div/>")
          .addClass("mb_YTPLoaded")
          .css("position", "absolute"),
        timeBar = jQuery("<div/>")
          .addClass("mb_YTPseekbar")
          .css("position", "absolute");
      progressBar.append(loadedBar).append(timeBar),
        buttonBar
          .append(playpause)
          .append(MuteUnmute)
          .append(volumeBar)
          .append(idx),
        YTPlayer.opt.showYTLogo && buttonBar.append(movieUrl),
        (YTPlayer.isBackground ||
          (eval(YTPlayer.opt.realFullscreen) && !YTPlayer.isBackground)) &&
          buttonBar.append(onlyVideo),
        YTPlayer.controlBar.append(buttonBar).append(progressBar),
        YTPlayer.isBackground
          ? jQuery("body").after(YTPlayer.controlBar)
          : (YTPlayer.controlBar.addClass("inlinePlayer"),
            YTPlayer.wrapper.before(YTPlayer.controlBar)),
        volumeBar.simpleSlider({
          initialval: YTPlayer.opt.vol,
          scale: 100,
          orientation: "h",
          callback: function (e) {
            0 === e.value
              ? jQuery(YTPlayer).YTPMute()
              : jQuery(YTPlayer).YTPUnmute(),
              YTPlayer.player.setVolume(e.value),
              YTPlayer.isMute || (YTPlayer.opt.vol = e.value);
          },
        });
    },
    changeCoverImage: function (e) {
      let r = this.get(0);
      if (r.opt.coverImage || r.orig_containment_background) {
        let t =
          e ||
          (r.opt.coverImage
            ? "url(" + r.opt.coverImage + ") center center"
            : r.orig_containment_background);
        t &&
          r.opt.containment.css({
            background: t,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          });
      }
      return this;
    },
    checkForState: function () {
      let YTPlayer = this.get(0),
        $YTPlayer = jQuery(YTPlayer);
      clearInterval(YTPlayer.getState);
      let interval = 100;
      if (!jQuery.contains(document, YTPlayer))
        return (
          $YTPlayer.YTPPlayerDestroy(),
          clearInterval(YTPlayer.getState),
          void clearInterval(YTPlayer.checkForStartAt)
        );
      jQuery.mbYTPlayer.checkForStart(YTPlayer),
        (YTPlayer.getState = setInterval(function () {
          let $YTPlayer = jQuery(YTPlayer);
          if (!YTPlayer.isReady) return;
          let prog = jQuery(YTPlayer).YTPManageProgress(),
            stopAt =
              YTPlayer.opt.stopAt > YTPlayer.opt.startAt
                ? YTPlayer.opt.stopAt
                : 0;
          if (
            ((stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0),
            YTPlayer.currentTime !== prog.currentTime)
          ) {
            let e = jQuery.Event("YTPTime");
            (e.time = YTPlayer.currentTime), jQuery(YTPlayer).trigger(e);
          }
          if (
            ((YTPlayer.currentTime = prog.currentTime),
            (YTPlayer.totalTime = YTPlayer.player.getDuration()),
            0 === YTPlayer.player.getVolume()
              ? $YTPlayer.addClass("isMuted")
              : $YTPlayer.removeClass("isMuted"),
            YTPlayer.opt.showControls &&
              (prog.totalTime
                ? YTPlayer.controlBar
                    .find(".mb_YTPTime")
                    .html(
                      jQuery.mbYTPlayer.formatTime(prog.currentTime) +
                        " / " +
                        jQuery.mbYTPlayer.formatTime(prog.totalTime)
                    )
                : YTPlayer.controlBar
                    .find(".mb_YTPTime")
                    .html("-- : -- / -- : --")),
            eval(YTPlayer.opt.stopMovieOnBlur) &&
              (document.hasFocus()
                ? document.hasFocus() &&
                  !YTPlayer.hasFocus &&
                  -1 !== YTPlayer.state &&
                  0 !== YTPlayer.state &&
                  ((YTPlayer.hasFocus = !0),
                  (YTPlayer.preventTrigger = !0),
                  $YTPlayer.YTPPlay())
                : 1 == YTPlayer.state &&
                  ((YTPlayer.hasFocus = !1),
                  (YTPlayer.preventTrigger = !0),
                  $YTPlayer.YTPPause())),
            YTPlayer.opt.playOnlyIfVisible)
          ) {
            let e = jQuery.mbYTPlayer.isOnScreen(
              YTPlayer,
              YTPlayer.opt.onScreenPercentage
            );
            e || 1 !== YTPlayer.state
              ? e &&
                !YTPlayer.isOnScreen &&
                ((YTPlayer.isOnScreen = !0), YTPlayer.player.playVideo())
              : ((YTPlayer.isOnScreen = !1), $YTPlayer.YTPPause());
          }
          if (
            (YTPlayer.controlBar.length &&
            YTPlayer.controlBar.outerWidth() <= 400 &&
            !YTPlayer.isCompact
              ? (YTPlayer.controlBar.addClass("compact"),
                (YTPlayer.isCompact = !0),
                !YTPlayer.isMute &&
                  YTPlayer.volumeBar &&
                  YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol))
              : YTPlayer.controlBar.length &&
                YTPlayer.controlBar.outerWidth() > 400 &&
                YTPlayer.isCompact &&
                (YTPlayer.controlBar.removeClass("compact"),
                (YTPlayer.isCompact = !1),
                !YTPlayer.isMute &&
                  YTPlayer.volumeBar &&
                  YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),
            YTPlayer.player.getPlayerState() > 0 &&
              (parseFloat(
                YTPlayer.player.getDuration() -
                  YTPlayer.opt.fadeOnStartTime / 1e3
              ) < YTPlayer.player.getCurrentTime() ||
                (stopAt > 0 &&
                  parseFloat(YTPlayer.player.getCurrentTime()) >= stopAt)))
          ) {
            if (YTPlayer.isEnded) return;
            if (
              ((YTPlayer.isEnded = !0),
              setTimeout(function () {
                YTPlayer.isEnded = !1;
              }, 1e3),
              YTPlayer.isList)
            ) {
              if (
                !YTPlayer.opt.loop ||
                (YTPlayer.opt.loop > 0 &&
                  YTPlayer.player.loopTime === YTPlayer.opt.loop - 1)
              ) {
                (YTPlayer.player.loopTime = void 0),
                  clearInterval(YTPlayer.getState);
                let e = jQuery.Event("YTPEnd");
                return (
                  (e.time = YTPlayer.currentTime),
                  void jQuery(YTPlayer).trigger(e)
                );
              }
            } else if (
              !YTPlayer.opt.loop ||
              (YTPlayer.opt.loop > 0 &&
                YTPlayer.player.loopTime === YTPlayer.opt.loop - 1)
            )
              return (
                (YTPlayer.player.loopTime = void 0),
                (YTPlayer.state = 2),
                $YTPlayer.changeCoverImage(YTPlayer),
                jQuery(YTPlayer).YTPPause(),
                void YTPlayer.wrapper.CSSAnimate(
                  { opacity: 0 },
                  YTPlayer.opt.fadeOnStartTime,
                  function () {
                    YTPlayer.controlBar.length &&
                      YTPlayer.controlBar
                        .find(".mb_YTPPlayPause")
                        .html(jQuery.mbYTPlayer.controls.play),
                      $YTPlayer.changeCoverImage();
                    let e = jQuery.Event("YTPEnd");
                    (e.time = YTPlayer.currentTime),
                      jQuery(YTPlayer).trigger(e),
                      YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0);
                  }
                )
              );
            (YTPlayer.player.loopTime = YTPlayer.player.loopTime
              ? ++YTPlayer.player.loopTime
              : 1),
              (YTPlayer.opt.startAt = YTPlayer.opt.startAt || 1),
              (YTPlayer.preventTrigger = !0),
              (YTPlayer.state = 2),
              YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0);
          }
        }, interval));
    },
    checkForStart: function (YTPlayer) {
      let $YTPlayer = jQuery(YTPlayer);
      if (!jQuery.contains(document, YTPlayer))
        return void $YTPlayer.YTPPlayerDestroy();
      if ((jQuery.mbYTPlayer.buildControls(YTPlayer), YTPlayer.overlay))
        if (YTPlayer.opt.addRaster) {
          let e = "dot" === YTPlayer.opt.addRaster ? "raster-dot" : "raster";
          YTPlayer.overlay.addClass(YTPlayer.isRetina ? e + " retina" : e);
        } else
          YTPlayer.overlay.removeClass(function (e, r) {
            let t = r.split(" "),
              a = [];
            return (
              jQuery.each(t, function (e, r) {
                /raster.*/.test(r) && a.push(r);
              }),
              a.push("retina"),
              a.join(" ")
            );
          });
      (YTPlayer.preventTrigger = !0),
        (YTPlayer.state = 2),
        (YTPlayer.preventTrigger = !0),
        YTPlayer.player.mute(),
        YTPlayer.player.playVideo(),
        (YTPlayer.isStarting = !0);
      let startAt = YTPlayer.start_from_last
        ? YTPlayer.start_from_last
        : YTPlayer.opt.startAt
        ? YTPlayer.opt.startAt
        : 1;
      return (
        (YTPlayer.preventTrigger = !0),
        (YTPlayer.checkForStartAt = setInterval(function () {
          YTPlayer.player.mute(), YTPlayer.player.seekTo(startAt, !0);
          let canPlayVideo =
            YTPlayer.player.getVideoLoadedFraction() >=
            startAt / YTPlayer.player.getDuration();
          if (
            (jQuery.mbBrowser.mobile && (canPlayVideo = !0),
            YTPlayer.player.getDuration() > 0 &&
              YTPlayer.player.getCurrentTime() >= startAt &&
              canPlayVideo)
          ) {
            (YTPlayer.start_from_last = null),
              (YTPlayer.preventTrigger = !0),
              $YTPlayer.YTPPause(),
              clearInterval(YTPlayer.checkForStartAt),
              "function" == typeof YTPlayer.opt.onReady &&
                YTPlayer.opt.onReady(YTPlayer),
              (YTPlayer.isReady = !0),
              $YTPlayer.YTPRemoveFilter(),
              YTPlayer.opt.addFilters
                ? $YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters)
                : $YTPlayer.YTPApplyFilters(),
              $YTPlayer.YTPEnableFilters();
            let YTPready = jQuery.Event("YTPReady");
            if (
              ((YTPready.time = YTPlayer.currentTime),
              $YTPlayer.trigger(YTPready),
              (YTPlayer.state = 2),
              YTPlayer.opt.mute
                ? $YTPlayer.YTPMute()
                : YTPlayer.opt.autoPlay
                ? (console.debug(
                    "We muted the audio to make the video 'auto-play' according with the latest vendor policy. The audio will unmute at the first user interaction with the page"
                  ),
                  YTPlayer.player.mute(),
                  (YTPlayer.forcedMuted = !0),
                  jQuery(document).on("mousedown.YTPstartAudio", function () {
                    YTPlayer.forcedMuted &&
                      (console.debug("AAAAAAA"),
                      YTPlayer.player.unMute(),
                      (YTPlayer.forcedMuted = !1),
                      jQuery(document).off("mousedown.YTPstartAudio"));
                  }),
                  jQuery(window).on("scroll", function () {}))
                : YTPlayer.player.unMute(),
              "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack)
                ? _gaq.push([
                    "_trackEvent",
                    "YTPlayer",
                    "Play",
                    YTPlayer.hasData
                      ? YTPlayer.videoData.title
                      : YTPlayer.videoID.toString(),
                  ])
                : "undefined" != typeof ga &&
                  eval(YTPlayer.opt.gaTrack) &&
                  ga(
                    "send",
                    "event",
                    "YTPlayer",
                    "play",
                    YTPlayer.hasData
                      ? YTPlayer.videoData.title
                      : YTPlayer.videoID.toString()
                  ),
              YTPlayer.opt.autoPlay)
            ) {
              let e = jQuery.Event("YTPStart");
              (e.time = YTPlayer.currentTime),
                jQuery(YTPlayer).trigger(e),
                (YTPlayer.isStarting = !1),
                "mac" === jQuery.mbBrowser.os.name &&
                  jQuery.mbBrowser.safari &&
                  jQuery("body").one("mousedown.YTPstart", function () {
                    $YTPlayer.YTPPlay();
                  }),
                $YTPlayer.YTPPlay(),
                console.timeEnd(YTPTimerLabels.startPlaying);
            } else
              (YTPlayer.preventTrigger = !0),
                $YTPlayer.YTPPause(),
                YTPlayer.start_from_last && YTPlayer.player.seekTo(startAt, !0),
                setTimeout(function () {
                  (YTPlayer.preventTrigger = !0),
                    $YTPlayer.YTPPause(),
                    YTPlayer.isPlayer ||
                      (YTPlayer.opt.coverImage
                        ? (YTPlayer.wrapper.css({ opacity: 0 }),
                          setTimeout(function () {
                            $YTPlayer.changeCoverImage();
                          }, YTPlayer.opt.fadeOnStartTime))
                        : (jQuery(YTPlayer.playerEl).CSSAnimate(
                            { opacity: 1 },
                            YTPlayer.opt.fadeOnStartTime
                          ),
                          YTPlayer.wrapper.CSSAnimate(
                            {
                              opacity: YTPlayer.isAlone
                                ? 1
                                : YTPlayer.opt.opacity,
                            },
                            YTPlayer.opt.fadeOnStartTime
                          ))),
                    (YTPlayer.isStarting = !1);
                }, 500),
                YTPlayer.controlBar.length &&
                  YTPlayer.controlBar
                    .find(".mb_YTPPlayPause")
                    .html(jQuery.mbYTPlayer.controls.play);
            YTPlayer.isPlayer &&
              !YTPlayer.opt.autoPlay &&
              YTPlayer.loading &&
              YTPlayer.loading.length &&
              (YTPlayer.loading.html("Ready"),
              setTimeout(function () {
                YTPlayer.loading.fadeOut();
              }, 100)),
              YTPlayer.controlBar &&
                YTPlayer.controlBar.length &&
                YTPlayer.controlBar.slideDown(1e3);
          }
          "mac" === jQuery.mbBrowser.os.name &&
            jQuery.mbBrowser.safari &&
            (YTPlayer.player.playVideo(),
            startAt >= 0 && YTPlayer.player.seekTo(startAt, !0));
        }, 100)),
        $YTPlayer
      );
    },
    getTime: function () {
      let e = this.get(0);
      return jQuery.mbYTPlayer.formatTime(e.currentTime);
    },
    getTotalTime: function () {
      let e = this.get(0);
      return jQuery.mbYTPlayer.formatTime(e.totalTime);
    },
    formatTime: function (e) {
      let r = Math.floor(e / 60),
        t = Math.floor(e - 60 * r);
      return (r <= 9 ? "0" + r : r) + " : " + (t <= 9 ? "0" + t : t);
    },
    setAnchor: function (e) {
      this.optimizeDisplay(e);
    },
    getAnchor: function () {
      return this.get(0).opt.anchor;
    },
    setAbundance: function (e, r) {
      let t = this.get(0);
      return (
        r && (t.opt.abundance = e), this.optimizeDisplay(t.opt.anchor, e), this
      );
    },
    getAbundance: function () {
      return this.get(0).opt.abundance;
    },
    setOption: function (e, r) {
      return (this.get(0).opt[e] = r), this;
    },
  }),
    (jQuery.fn.optimizeDisplay = function (anchor, abundanceX) {
      let YTPlayer = this.get(0),
        vid = {},
        el = YTPlayer.wrapper,
        iframe = jQuery(YTPlayer.playerEl);
      (YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor),
        (YTPlayer.opt.anchor =
          "undefined " != typeof YTPlayer.opt.anchor
            ? YTPlayer.opt.anchor
            : "center,center");
      let YTPAlign = YTPlayer.opt.anchor.split(","),
        ab = abundanceX || YTPlayer.opt.abundance;
      if (YTPlayer.opt.optimizeDisplay) {
        let abundance = el.height() * ab,
          win = {};
        (win.width = el.outerWidth()),
          (win.height = el.outerHeight() + abundance),
          (YTPlayer.opt.ratio =
            "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio),
          (YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio)),
          (vid.width = win.width + abundance),
          (vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio)),
          (vid.marginTop = Math.ceil(
            -(vid.height - win.height + abundance) / 2
          )),
          (vid.marginLeft = -abundance / 2);
        let lowest = vid.height < win.height;
        lowest &&
          ((vid.height = win.height + abundance),
          (vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio)),
          (vid.marginTop = -abundance / 2),
          (vid.marginLeft = Math.ceil(-(vid.width - win.width) / 2)));
        for (let e in YTPAlign)
          if (YTPAlign.hasOwnProperty(e)) {
            let r = YTPAlign[e].replace(/ /g, "");
            switch (r) {
              case "top":
                vid.marginTop = -abundance;
                break;
              case "bottom":
                vid.marginTop = Math.ceil(
                  -(vid.height - win.height) - abundance / 2
                );
                break;
              case "left":
                vid.marginLeft = -abundance;
                break;
              case "right":
                vid.marginLeft = Math.ceil(
                  -(vid.width - win.width) + abundance / 2
                );
            }
          }
      } else
        (vid.width = "100%"),
          (vid.height = "100%"),
          (vid.marginTop = 0),
          (vid.marginLeft = 0);
      iframe.css({
        width: vid.width,
        height: vid.height,
        marginTop: vid.marginTop,
        marginLeft: vid.marginLeft,
        maxWidth: "initial",
      });
    }),
    (jQuery.shuffle = function (e) {
      let r = e.slice(),
        t = r.length,
        a = t;
      for (; a--; ) {
        let e = parseInt(Math.random() * t),
          o = r[a];
        (r[a] = r[e]), (r[e] = o);
      }
      return r;
    }),
    (jQuery.fn.unselectable = function () {
      return this.each(function () {
        jQuery(this)
          .css({
            "-moz-user-select": "none",
            "-webkit-user-select": "none",
            "user-select": "none",
          })
          .attr("unselectable", "on");
      });
    }),
    (jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer),
    (jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer),
    (jQuery.fn.YTPCheckForState = jQuery.mbYTPlayer.checkForState),
    (jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer),
    (jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID),
    (jQuery.fn.YTPGetPlaylistID = jQuery.mbYTPlayer.getPlaylistID),
    (jQuery.fn.YTPChangeVideo = jQuery.fn.YTPChangeMovie =
      jQuery.mbYTPlayer.changeVideo),
    (jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy),
    (jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play),
    (jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay),
    (jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop),
    (jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause),
    (jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo),
    (jQuery.fn.YTPGetPlaybackRate = jQuery.mbYTPlayer.getPlaybackRate),
    (jQuery.fn.YTPSetPlaybackRate = jQuery.mbYTPlayer.setPlaybackRate),
    (jQuery.fn.changeCoverImage = jQuery.mbYTPlayer.changeCoverImage),
    (jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist),
    (jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext),
    (jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev),
    (jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex),
    (jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute),
    (jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute),
    (jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume),
    (jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume),
    (jQuery.fn.YTPGetVolume = jQuery.mbYTPlayer.getVolume),
    (jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData),
    (jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen),
    (jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops),
    (jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress),
    (jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality),
    (jQuery.fn.YTPGetVideoQuality = jQuery.mbYTPlayer.getVideoQuality),
    (jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter),
    (jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters),
    (jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter),
    (jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters),
    (jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter),
    (jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters),
    (jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters),
    (jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters),
    (jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime),
    (jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime),
    (jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask),
    (jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask),
    (jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask),
    (jQuery.fn.YTPGetAbundance = jQuery.mbYTPlayer.getAbundance),
    (jQuery.fn.YTPSetAbundance = jQuery.mbYTPlayer.setAbundance),
    (jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor),
    (jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor),
    (jQuery.fn.YTPSetOption = jQuery.mbYTPlayer.setOption);
})(jQuery, ytp);
var nAgt = navigator.userAgent;
function isTouchSupported() {
  var e = nAgt.msMaxTouchPoints,
    r = "ontouchstart" in document.createElement("div");
  return !(!e && !r);
}
(jQuery.browser = jQuery.browser || {}),
  (jQuery.browser.mozilla = !1),
  (jQuery.browser.webkit = !1),
  (jQuery.browser.opera = !1),
  (jQuery.browser.safari = !1),
  (jQuery.browser.chrome = !1),
  (jQuery.browser.androidStock = !1),
  (jQuery.browser.msie = !1),
  (jQuery.browser.edge = !1),
  (jQuery.browser.ua = nAgt);
var getOS = function () {
    var e = { version: "Unknown version", name: "Unknown OS" };
    return (
      -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"),
      -1 != navigator.appVersion.indexOf("Mac") &&
        0 > navigator.appVersion.indexOf("Mobile") &&
        (e.name = "Mac"),
      -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"),
      /Mac OS X/.test(nAgt) &&
        !/Mobile/.test(nAgt) &&
        ((e.version = /Mac OS X ([\._\d]+)/.exec(nAgt)[1]),
        (e.version = e.version.replace(/_/g, ".").substring(0, 5))),
      /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"),
      /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"),
      /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"),
      /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"),
      /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"),
      /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"),
      /Linux/.test(nAgt) &&
        /Linux/.test(nAgt) &&
        (e.version = "Unknown.Unknown"),
      (e.name = e.name.toLowerCase()),
      (e.major_version = "Unknown"),
      (e.minor_version = "Unknown"),
      "Unknown.Unknown" != e.version &&
        ((e.major_version = parseFloat(e.version.split(".")[0])),
        (e.minor_version = parseFloat(e.version.split(".")[1]))),
      e
    );
  },
  nameOffset,
  verOffset,
  ix;
if (
  ((jQuery.browser.os = getOS()),
  (jQuery.browser.hasTouch = isTouchSupported()),
  (jQuery.browser.name = navigator.appName),
  (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion)),
  (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)),
  -1 != (verOffset = nAgt.indexOf("Opera")))
)
  (jQuery.browser.opera = !0),
    (jQuery.browser.name = "Opera"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 6)),
    -1 != (verOffset = nAgt.indexOf("Version")) &&
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR")))
  (jQuery.browser.opera = !0),
    (jQuery.browser.name = "Opera"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 4));
else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
  (jQuery.browser.msie = !0),
    (jQuery.browser.name = "Microsoft Internet Explorer"),
    (jQuery.browser.fullVersion = nAgt.substring(verOffset + 5));
else if (-1 != nAgt.indexOf("Trident")) {
  (jQuery.browser.msie = !0),
    (jQuery.browser.name = "Microsoft Internet Explorer");
  var start = nAgt.indexOf("rv:") + 3,
    end = start + 4;
  jQuery.browser.fullVersion = nAgt.substring(start, end);
} else
  -1 != (verOffset = nAgt.indexOf("Edge"))
    ? ((jQuery.browser.edge = !0),
      (jQuery.browser.name = "Microsoft Edge"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)))
    : -1 != (verOffset = nAgt.indexOf("Chrome"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.chrome = !0),
      (jQuery.browser.name = "Chrome"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 < nAgt.indexOf("mozilla/5.0") &&
      -1 < nAgt.indexOf("android ") &&
      -1 < nAgt.indexOf("applewebkit") &&
      !(-1 < nAgt.indexOf("chrome"))
    ? ((verOffset = nAgt.indexOf("Chrome")),
      (jQuery.browser.webkit = !0),
      (jQuery.browser.androidStock = !0),
      (jQuery.browser.name = "androidStock"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 != (verOffset = nAgt.indexOf("Safari"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.safari = !0),
      (jQuery.browser.name = "Safari"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf("Version")) &&
        (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("AppleWebkit"))
    ? ((jQuery.browser.webkit = !0),
      (jQuery.browser.safari = !0),
      (jQuery.browser.name = "Safari"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf("Version")) &&
        (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("Firefox"))
    ? ((jQuery.browser.mozilla = !0),
      (jQuery.browser.name = "Firefox"),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
    : (nameOffset = nAgt.lastIndexOf(" ") + 1) <
        (verOffset = nAgt.lastIndexOf("/")) &&
      ((jQuery.browser.name = nAgt.substring(nameOffset, verOffset)),
      (jQuery.browser.fullVersion = nAgt.substring(verOffset + 1)),
      jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() &&
        (jQuery.browser.name = navigator.appName));
function uncamel(e) {
  return e.replace(/([A-Z])/g, function (e) {
    return "-" + e.toLowerCase();
  });
}
function setUnit(e, r) {
  return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + r : e;
}
function setFilter(e, r, t) {
  var a = uncamel(r),
    o = jQuery.mbBrowser.mozilla ? "" : jQuery.CSS.sfx;
  (e[o + "filter"] = e[o + "filter"] || ""),
    (t = setUnit(
      t > jQuery.CSS.filters[r].max ? jQuery.CSS.filters[r].max : t,
      jQuery.CSS.filters[r].unit
    )),
    (e[o + "filter"] += a + "(" + t + ") "),
    delete e[r];
}
-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) &&
  (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
  -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) &&
    (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
  (jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10)),
  isNaN(jQuery.browser.majorVersion) &&
    ((jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion)),
    (jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10))),
  (jQuery.browser.version = jQuery.browser.majorVersion),
  (jQuery.browser.android = /Android/i.test(nAgt)),
  (jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt)),
  (jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt)),
  (jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt)),
  (jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt)),
  (jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt)),
  (jQuery.browser.mobile =
    jQuery.browser.android ||
    jQuery.browser.blackberry ||
    jQuery.browser.ios ||
    jQuery.browser.windowsMobile ||
    jQuery.browser.operaMobile ||
    jQuery.browser.kindle),
  (jQuery.isMobile = jQuery.browser.mobile),
  (jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width()),
  (jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt)),
  (jQuery.mbBrowser = jQuery.browser),
  (jQuery.browser.versionCompare = function (e, r) {
    if ("stringstring" != typeof e + typeof r) return !1;
    for (
      var t = e.split("."),
        a = r.split("."),
        o = 0,
        n = Math.max(t.length, a.length);
      o < n;
      o++
    ) {
      if (
        (t[o] && !a[o] && 0 < parseInt(t[o])) ||
        parseInt(t[o]) > parseInt(a[o])
      )
        return 1;
      if (
        (a[o] && !t[o] && 0 < parseInt(a[o])) ||
        parseInt(t[o]) < parseInt(a[o])
      )
        return -1;
    }
    return 0;
  }),
  (jQuery.support.CSStransition = (function () {
    var e = (document.body || document.documentElement).style;
    return (
      void 0 !== e.transition ||
      void 0 !== e.WebkitTransition ||
      void 0 !== e.MozTransition ||
      void 0 !== e.MsTransition ||
      void 0 !== e.OTransition
    );
  })()),
  (jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
      blur: { min: 0, max: 100, unit: "px" },
      brightness: { min: 0, max: 400, unit: "%" },
      contrast: { min: 0, max: 400, unit: "%" },
      grayscale: { min: 0, max: 100, unit: "%" },
      hueRotate: { min: 0, max: 360, unit: "deg" },
      invert: { min: 0, max: 100, unit: "%" },
      saturate: { min: 0, max: 400, unit: "%" },
      sepia: { min: 0, max: 100, unit: "%" },
    },
    normalizeCss: function (e) {
      var r = jQuery.extend(!0, {}, e);
      for (var t in (jQuery.mbBrowser.webkit || jQuery.mbBrowser.opera
        ? (jQuery.CSS.sfx = "-webkit-")
        : jQuery.mbBrowser.mozilla
        ? (jQuery.CSS.sfx = "-moz-")
        : jQuery.mbBrowser.msie && (jQuery.CSS.sfx = "-ms-"),
      (jQuery.CSS.sfx = ""),
      r)) {
        if (
          ("transform" === t &&
            ((r[jQuery.CSS.sfx + "transform"] = r[t]), delete r[t]),
          "transform-origin" === t &&
            ((r[jQuery.CSS.sfx + "transform-origin"] = e[t]), delete r[t]),
          "filter" !== t ||
            jQuery.mbBrowser.mozilla ||
            ((r[jQuery.CSS.sfx + "filter"] = e[t]), delete r[t]),
          "blur" === t && setFilter(r, "blur", e[t]),
          "brightness" === t && setFilter(r, "brightness", e[t]),
          "contrast" === t && setFilter(r, "contrast", e[t]),
          "grayscale" === t && setFilter(r, "grayscale", e[t]),
          "hueRotate" === t && setFilter(r, "hueRotate", e[t]),
          "invert" === t && setFilter(r, "invert", e[t]),
          "saturate" === t && setFilter(r, "saturate", e[t]),
          "sepia" === t && setFilter(r, "sepia", e[t]),
          "x" === t)
        ) {
          var a = jQuery.CSS.sfx + "transform";
          (r[a] = r[a] || ""),
            (r[a] += " translateX(" + setUnit(e[t], "px") + ")"),
            delete r[t];
        }
        "y" === t &&
          ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
          (r[a] += " translateY(" + setUnit(e[t], "px") + ")"),
          delete r[t]),
          "z" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " translateZ(" + setUnit(e[t], "px") + ")"),
            delete r[t]),
          "rotate" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " rotate(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "rotateX" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " rotateX(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "rotateY" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " rotateY(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "rotateZ" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " rotateZ(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "scale" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " scale(" + setUnit(e[t], "") + ")"),
            delete r[t]),
          "scaleX" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " scaleX(" + setUnit(e[t], "") + ")"),
            delete r[t]),
          "scaleY" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " scaleY(" + setUnit(e[t], "") + ")"),
            delete r[t]),
          "scaleZ" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " scaleZ(" + setUnit(e[t], "") + ")"),
            delete r[t]),
          "skew" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " skew(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "skewX" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " skewX(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "skewY" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " skewY(" + setUnit(e[t], "deg") + ")"),
            delete r[t]),
          "perspective" === t &&
            ((r[(a = jQuery.CSS.sfx + "transform")] = r[a] || ""),
            (r[a] += " perspective(" + setUnit(e[t], "px") + ")"),
            delete r[t]);
      }
      return r;
    },
    getProp: function (e) {
      var r,
        t = [];
      for (r in e) 0 > t.indexOf(r) && t.push(uncamel(r));
      return t.join(",");
    },
    animate: function (e, r, t, a, o) {
      return this.each(function () {
        function n() {
          (i.called = !0),
            (i.CSSAIsRunning = !1),
            l.off(jQuery.CSS.transitionEnd + "." + i.id),
            clearTimeout(i.timeout),
            l.css(jQuery.CSS.sfx + "transition", ""),
            "function" == typeof o && o.apply(i),
            "function" == typeof i.CSSqueue &&
              (i.CSSqueue(), (i.CSSqueue = null));
        }
        var i = this,
          l = jQuery(this);
        i.id = i.id || "CSSA_" + new Date().getTime();
        var s = s || { type: "noEvent" };
        if (
          i.CSSAIsRunning &&
          i.eventType == s.type &&
          !jQuery.mbBrowser.msie &&
          9 >= jQuery.mbBrowser.version
        )
          i.CSSqueue = function () {
            l.CSSAnimate(e, r, t, a, o);
          };
        else if (
          ((i.CSSqueue = null), (i.eventType = s.type), 0 !== l.length && e)
        ) {
          if (
            ((e = jQuery.normalizeCss(e)),
            (i.CSSAIsRunning = !0),
            "function" == typeof r &&
              ((o = r), (r = jQuery.fx.speeds._default)),
            "function" == typeof t && ((a = t), (t = 0)),
            "string" == typeof t && ((o = t), (t = 0)),
            "function" == typeof a &&
              ((o = a), (a = "cubic-bezier(0.65,0.03,0.36,0.72)")),
            "string" == typeof r)
          )
            for (var u in jQuery.fx.speeds) {
              if (r == u) {
                r = jQuery.fx.speeds[u];
                break;
              }
              r = jQuery.fx.speeds._default;
            }
          if (
            (r || (r = jQuery.fx.speeds._default),
            "string" == typeof o && ((a = o), (o = null)),
            jQuery.support.CSStransition)
          ) {
            var y = {
              default: "ease",
              in: "ease-in",
              out: "ease-out",
              "in-out": "ease-in-out",
              snap: "cubic-bezier(0,1,.5,1)",
              easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
              easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
              easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
              easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
              easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
              easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
              easeOutExpo: "cubic-bezier(.19,1,.22,1)",
              easeInOutExpo: "cubic-bezier(1,0,0,1)",
              easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
              easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
              easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
              easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
              easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
              easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
              easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
              easeOutQuint: "cubic-bezier(.23,1,.32,1)",
              easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
              easeInSine: "cubic-bezier(.47,0,.745,.715)",
              easeOutSine: "cubic-bezier(.39,.575,.565,1)",
              easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
              easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
              easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
              easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
            };
            y[a] && (a = y[a]),
              l.off(jQuery.CSS.transitionEnd + "." + i.id),
              (y = jQuery.CSS.getProp(e));
            var d = {};
            jQuery.extend(d, e),
              (d[jQuery.CSS.sfx + "transition-property"] = y),
              (d[jQuery.CSS.sfx + "transition-duration"] = r + "ms"),
              (d[jQuery.CSS.sfx + "transition-delay"] = t + "ms"),
              (d[jQuery.CSS.sfx + "transition-timing-function"] = a),
              setTimeout(function () {
                l.one(jQuery.CSS.transitionEnd + "." + i.id, n), l.css(d);
              }, 1),
              (i.timeout = setTimeout(function () {
                i.called || !o
                  ? ((i.called = !1), (i.CSSAIsRunning = !1))
                  : (l.css(jQuery.CSS.sfx + "transition", ""),
                    o.apply(i),
                    (i.CSSAIsRunning = !1),
                    "function" == typeof i.CSSqueue &&
                      (i.CSSqueue(), (i.CSSqueue = null)));
              }, r + t + 10));
          } else {
            for (y in e)
              "transform" === y && delete e[y],
                "filter" === y && delete e[y],
                "transform-origin" === y && delete e[y],
                "auto" === e[y] && delete e[y],
                "x" === y && ((s = e[y]), (e[(u = "left")] = s), delete e[y]),
                "y" === y && ((s = e[y]), (e[(u = "top")] = s), delete e[y]),
                ("-ms-transform" !== y && "-ms-filter" !== y) || delete e[y];
            l.delay(t).animate(e, r, o);
          }
        }
      });
    },
  }),
  (jQuery.fn.CSSAnimate = jQuery.CSS.animate),
  (jQuery.normalizeCss = jQuery.CSS.normalizeCss),
  (jQuery.fn.css3 = function (e) {
    return this.each(function () {
      var r = jQuery(this),
        t = jQuery.normalizeCss(e);
      r.css(t);
    });
  }),
  (function (e) {
    (e.simpleSlider = {
      defaults: {
        initialval: 0,
        maxval: 100,
        orientation: "h",
        readonly: !1,
        callback: !1,
      },
      events: {
        start: e.browser.mobile ? "touchstart" : "mousedown",
        end: e.browser.mobile ? "touchend" : "mouseup",
        move: e.browser.mobile ? "touchmove" : "mousemove",
      },
      init: function (r) {
        return this.each(function () {
          var t = this,
            a = e(t);
          a.addClass("simpleSlider"),
            (t.opt = {}),
            e.extend(t.opt, e.simpleSlider.defaults, r),
            e.extend(t.opt, a.data());
          var o = "h" === t.opt.orientation ? "horizontal" : "vertical";
          (o = e("<div/>").addClass("level").addClass(o)),
            a.prepend(o),
            (t.level = o),
            a.css({ cursor: "default" }),
            "auto" == t.opt.maxval && (t.opt.maxval = e(t).outerWidth()),
            a.updateSliderVal(),
            t.opt.readonly ||
              (a.on(e.simpleSlider.events.start, function (r) {
                e.browser.mobile && (r = r.changedTouches[0]),
                  (t.canSlide = !0),
                  a.updateSliderVal(r),
                  "h" === t.opt.orientation
                    ? a.css({ cursor: "col-resize" })
                    : a.css({ cursor: "row-resize" }),
                  (t.lastVal = t.val),
                  e.browser.mobile || (r.preventDefault(), r.stopPropagation());
              }),
              e(document)
                .on(e.simpleSlider.events.move, function (r) {
                  e.browser.mobile && (r = r.changedTouches[0]),
                    t.canSlide &&
                      (e(document).css({ cursor: "default" }),
                      a.updateSliderVal(r),
                      e.browser.mobile ||
                        (r.preventDefault(), r.stopPropagation()));
                })
                .on(e.simpleSlider.events.end, function () {
                  e(document).css({ cursor: "auto" }),
                    (t.canSlide = !1),
                    a.css({ cursor: "auto" });
                }));
        });
      },
      updateSliderVal: function (r) {
        var t = this.get(0);
        if (t.opt) {
          t.opt.initialval =
            "number" == typeof t.opt.initialval
              ? t.opt.initialval
              : t.opt.initialval(t);
          var a = e(t).outerWidth(),
            o = e(t).outerHeight();
          (t.x =
            "object" == typeof r
              ? r.clientX + document.body.scrollLeft - this.offset().left
              : "number" == typeof r
              ? (r * a) / t.opt.maxval
              : (t.opt.initialval * a) / t.opt.maxval),
            (t.y =
              "object" == typeof r
                ? r.clientY + document.body.scrollTop - this.offset().top
                : "number" == typeof r
                ? ((t.opt.maxval - t.opt.initialval - r) * o) / t.opt.maxval
                : (t.opt.initialval * o) / t.opt.maxval),
            (t.y = this.outerHeight() - t.y),
            (t.scaleX = (t.x * t.opt.maxval) / a),
            (t.scaleY = (t.y * t.opt.maxval) / o),
            (t.outOfRangeX =
              t.scaleX > t.opt.maxval
                ? t.scaleX - t.opt.maxval
                : 0 > t.scaleX
                ? t.scaleX
                : 0),
            (t.outOfRangeY =
              t.scaleY > t.opt.maxval
                ? t.scaleY - t.opt.maxval
                : 0 > t.scaleY
                ? t.scaleY
                : 0),
            (t.outOfRange =
              "h" === t.opt.orientation ? t.outOfRangeX : t.outOfRangeY),
            (t.value =
              void 0 !== r
                ? "h" === t.opt.orientation
                  ? t.x >= this.outerWidth()
                    ? t.opt.maxval
                    : 0 >= t.x
                    ? 0
                    : t.scaleX
                  : t.y >= this.outerHeight()
                  ? t.opt.maxval
                  : 0 >= t.y
                  ? 0
                  : t.scaleY
                : "h" === t.opt.orientation
                ? t.scaleX
                : t.scaleY),
            "h" === t.opt.orientation
              ? t.level.width(Math.floor((100 * t.x) / a) + "%")
              : t.level.height(Math.floor((100 * t.y) / o)),
            (t.lastVal === t.value &&
              (("h" === t.opt.orientation &&
                (t.x >= this.outerWidth() || 0 >= t.x)) ||
                ("h" !== t.opt.orientation &&
                  (t.y >= this.outerHeight() || 0 >= t.y)))) ||
              ("function" == typeof t.opt.callback && t.opt.callback(t),
              (t.lastVal = t.value));
        }
      },
    }),
      (e.fn.simpleSlider = e.simpleSlider.init),
      (e.fn.updateSliderVal = e.simpleSlider.updateSliderVal);
  })(jQuery),
  (function (e) {
    (e.mbCookie = {
      set: function (e, r, t, a) {
        "object" == typeof r && (r = JSON.stringify(r)),
          (a = a ? "; domain=" + a : "");
        var o = new Date(),
          n = "";
        0 < t &&
          (o.setTime(o.getTime() + 864e5 * t),
          (n = "; expires=" + o.toGMTString())),
          (document.cookie = e + "=" + r + n + "; path=/" + a);
      },
      get: function (e) {
        e += "=";
        for (var r = document.cookie.split(";"), t = 0; t < r.length; t++) {
          for (var a = r[t]; " " == a.charAt(0); ) a = a.substring(1, a.length);
          if (0 == a.indexOf(e))
            try {
              return JSON.parse(a.substring(e.length, a.length));
            } catch (r) {
              return a.substring(e.length, a.length);
            }
        }
        return null;
      },
      remove: function (r) {
        e.mbCookie.set(r, "", -1);
      },
    }),
      (e.mbStorage = {
        set: function (e, r) {
          "object" == typeof r && (r = JSON.stringify(r)),
            localStorage.setItem(e, r);
        },
        get: function (e) {
          if (!localStorage[e]) return null;
          try {
            return JSON.parse(localStorage[e]);
          } catch (r) {
            return localStorage[e];
          }
        },
        remove: function (e) {
          e ? localStorage.removeItem(e) : localStorage.clear();
        },
      });
  })(jQuery);
var nAgt = navigator.userAgent;
function isTouchSupported() {
  var e = nAgt.msMaxTouchPoints,
    r = "ontouchstart" in document.createElement("div");
  return !(!e && !r);
}
(jQuery.mbBrowser = {}),
  (jQuery.mbBrowser.mozilla = !1),
  (jQuery.mbBrowser.webkit = !1),
  (jQuery.mbBrowser.opera = !1),
  (jQuery.mbBrowser.safari = !1),
  (jQuery.mbBrowser.chrome = !1),
  (jQuery.mbBrowser.androidStock = !1),
  (jQuery.mbBrowser.msie = !1),
  (jQuery.mbBrowser.edge = !1),
  (jQuery.mbBrowser.ua = nAgt);
var getOS = function () {
    var e = { version: "Unknown version", name: "Unknown OS" };
    return (
      -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"),
      -1 != navigator.appVersion.indexOf("Mac") &&
        0 > navigator.appVersion.indexOf("Mobile") &&
        (e.name = "Mac"),
      -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"),
      /Mac OS X/.test(nAgt) &&
        !/Mobile/.test(nAgt) &&
        ((e.version = /Mac OS X ([\._\d]+)/.exec(nAgt)[1]),
        (e.version = e.version.replace(/_/g, ".").substring(0, 5))),
      /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"),
      /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"),
      /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"),
      /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"),
      /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"),
      /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"),
      /Linux/.test(nAgt) &&
        /Linux/.test(nAgt) &&
        (e.version = "Unknown.Unknown"),
      (e.name = e.name.toLowerCase()),
      (e.major_version = "Unknown"),
      (e.minor_version = "Unknown"),
      "Unknown.Unknown" != e.version &&
        ((e.major_version = parseFloat(e.version.split(".")[0])),
        (e.minor_version = parseFloat(e.version.split(".")[1]))),
      e
    );
  },
  nameOffset,
  verOffset,
  ix;
if (
  ((jQuery.mbBrowser.os = getOS()),
  (jQuery.mbBrowser.hasTouch = isTouchSupported()),
  (jQuery.mbBrowser.name = navigator.appName),
  (jQuery.mbBrowser.fullVersion = "" + parseFloat(navigator.appVersion)),
  (jQuery.mbBrowser.majorVersion = parseInt(navigator.appVersion, 10)),
  -1 != (verOffset = nAgt.indexOf("Opera")))
)
  (jQuery.mbBrowser.opera = !0),
    (jQuery.mbBrowser.name = "Opera"),
    (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 6)),
    -1 != (verOffset = nAgt.indexOf("Version")) &&
      (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR")))
  (jQuery.mbBrowser.opera = !0),
    (jQuery.mbBrowser.name = "Opera"),
    (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 4));
else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
  (jQuery.mbBrowser.msie = !0),
    (jQuery.mbBrowser.name = "Microsoft Internet Explorer"),
    (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 5));
else if (-1 != nAgt.indexOf("Trident")) {
  (jQuery.mbBrowser.msie = !0),
    (jQuery.mbBrowser.name = "Microsoft Internet Explorer");
  var start = nAgt.indexOf("rv:") + 3,
    end = start + 4;
  jQuery.mbBrowser.fullVersion = nAgt.substring(start, end);
} else
  -1 != (verOffset = nAgt.indexOf("Edge"))
    ? ((jQuery.mbBrowser.edge = !0),
      (jQuery.mbBrowser.name = "Microsoft Edge"),
      (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 5)))
    : -1 != (verOffset = nAgt.indexOf("Chrome"))
    ? ((jQuery.mbBrowser.webkit = !0),
      (jQuery.mbBrowser.chrome = !0),
      (jQuery.mbBrowser.name = "Chrome"),
      (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 < nAgt.indexOf("mozilla/5.0") &&
      -1 < nAgt.indexOf("android ") &&
      -1 < nAgt.indexOf("applewebkit") &&
      !(-1 < nAgt.indexOf("chrome"))
    ? ((verOffset = nAgt.indexOf("Chrome")),
      (jQuery.mbBrowser.webkit = !0),
      (jQuery.mbBrowser.androidStock = !0),
      (jQuery.mbBrowser.name = "androidStock"),
      (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 7)))
    : -1 != (verOffset = nAgt.indexOf("Safari"))
    ? ((jQuery.mbBrowser.webkit = !0),
      (jQuery.mbBrowser.safari = !0),
      (jQuery.mbBrowser.name = "Safari"),
      (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf("Version")) &&
        (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("AppleWebkit"))
    ? ((jQuery.mbBrowser.webkit = !0),
      (jQuery.mbBrowser.safari = !0),
      (jQuery.mbBrowser.name = "Safari"),
      (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 7)),
      -1 != (verOffset = nAgt.indexOf("Version")) &&
        (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("Firefox"))
    ? ((jQuery.mbBrowser.mozilla = !0),
      (jQuery.mbBrowser.name = "Firefox"),
      (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 8)))
    : (nameOffset = nAgt.lastIndexOf(" ") + 1) <
        (verOffset = nAgt.lastIndexOf("/")) &&
      ((jQuery.mbBrowser.name = nAgt.substring(nameOffset, verOffset)),
      (jQuery.mbBrowser.fullVersion = nAgt.substring(verOffset + 1)),
      jQuery.mbBrowser.name.toLowerCase() ==
        jQuery.mbBrowser.name.toUpperCase() &&
        (jQuery.mbBrowser.name = navigator.appName));
-1 != (ix = jQuery.mbBrowser.fullVersion.indexOf(";")) &&
  (jQuery.mbBrowser.fullVersion = jQuery.mbBrowser.fullVersion.substring(
    0,
    ix
  )),
  -1 != (ix = jQuery.mbBrowser.fullVersion.indexOf(" ")) &&
    (jQuery.mbBrowser.fullVersion = jQuery.mbBrowser.fullVersion.substring(
      0,
      ix
    )),
  (jQuery.mbBrowser.majorVersion = parseInt(
    "" + jQuery.mbBrowser.fullVersion,
    10
  )),
  isNaN(jQuery.mbBrowser.majorVersion) &&
    ((jQuery.mbBrowser.fullVersion = "" + parseFloat(navigator.appVersion)),
    (jQuery.mbBrowser.majorVersion = parseInt(navigator.appVersion, 10))),
  (jQuery.mbBrowser.version = jQuery.mbBrowser.majorVersion),
  (jQuery.mbBrowser.android = /Android/i.test(nAgt)),
  (jQuery.mbBrowser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt)),
  (jQuery.mbBrowser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt)),
  (jQuery.mbBrowser.operaMobile = /Opera Mini/i.test(nAgt)),
  (jQuery.mbBrowser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt)),
  (jQuery.mbBrowser.kindle = /Kindle|Silk/i.test(nAgt)),
  (jQuery.mbBrowser.mobile =
    jQuery.mbBrowser.android ||
    jQuery.mbBrowser.blackberry ||
    jQuery.mbBrowser.ios ||
    jQuery.mbBrowser.windowsMobile ||
    jQuery.mbBrowser.operaMobile ||
    jQuery.mbBrowser.kindle),
  (jQuery.isMobile = jQuery.mbBrowser.mobile),
  (jQuery.isTablet = jQuery.mbBrowser.mobile && 765 < jQuery(window).width()),
  (jQuery.isAndroidDefault = jQuery.mbBrowser.android && !/chrome/i.test(nAgt)),
  (jQuery.mbBrowser = jQuery.mbBrowser),
  (jQuery.mbBrowser.versionCompare = function (e, r) {
    if ("stringstring" != typeof e + typeof r) return !1;
    for (
      var t = e.split("."),
        a = r.split("."),
        o = 0,
        n = Math.max(t.length, a.length);
      o < n;
      o++
    ) {
      if (
        (t[o] && !a[o] && 0 < parseInt(t[o])) ||
        parseInt(t[o]) > parseInt(a[o])
      )
        return 1;
      if (
        (a[o] && !t[o] && 0 < parseInt(a[o])) ||
        parseInt(t[o]) < parseInt(a[o])
      )
        return -1;
    }
    return 0;
  });
