/* ============================================================
   Snappy playful-premium interactions — springy, energetic
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- tickers ---------- */
  var t1items = ["KAFKA", "✦", "NODE.JS", "✦", "AWS", "✦", "TYPESCRIPT", "✦", "EVENT-DRIVEN", "✦", "DATABRICKS", "✦", "KUBERNETES", "✦"];
  var t2items = ["100K+ EVENTS/HR", "✦", "ZERO-DOWNTIME DEploys", "✦", "6+ YEARS", "✦", "OPEN TO WORK", "✦"];
  function fillTicker(id, items) {
    var el = document.getElementById(id);
    if (!el) return;
    var half = items.map(function (t) { return "<span>" + t + "</span>"; }).join("");
    el.innerHTML = half + half; // duplicate for seamless loop
  }
  fillTicker("ticker1", t1items.map(function(s){return s.toUpperCase();}));
  fillTicker("ticker2", t2items);

  /* ---------- nav scroll state + progress ---------- */
  var nav = document.getElementById("nav");
  var progress = document.getElementById("progress");
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    nav.classList.toggle("scrolled", y > 40);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById("hamburger");
  var links = document.getElementById("navLinks");
  burger.addEventListener("click", function () {
    burger.classList.toggle("open");
    links.classList.toggle("open");
    document.body.style.overflow = links.classList.contains("open") ? "hidden" : "";
  });
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      burger.classList.remove("open");
      links.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  /* ---------- reveal on scroll ---------- */
  var rvEls = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    rvEls.forEach(function (el) { io.observe(el); });
  } else {
    rvEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- animated counters ---------- */
  var counters = document.querySelectorAll(".count");
  function animateCount(el) {
    var to = parseInt(el.getAttribute("data-to"), 10) || 0;
    if (reduceMotion) { el.textContent = to; return; }
    var dur = 1200, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          animateCount(e.target);
          cio.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { cio.observe(c); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---------- custom cursor (fine pointers only) ---------- */
  var fine = window.matchMedia("(pointer: fine)").matches;
  if (fine && !reduceMotion) {
    var dot = document.getElementById("cursor-dot");
    var ring = document.getElementById("cursor-ring");
    var mx = -100, my = -100, rx = -100, ry = -100;
    document.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + "px"; dot.style.top = my + "px";
    });
    (function loop() {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll("a, button, .pill2, .polaroid").forEach(function (el) {
      el.addEventListener("mouseenter", function () { document.body.classList.add("link-hover"); });
      el.addEventListener("mouseleave", function () { document.body.classList.remove("link-hover"); });
    });
  } else {
    var d = document.getElementById("cursor-dot");
    var r = document.getElementById("cursor-ring");
    if (d) d.style.display = "none";
    if (r) r.style.display = "none";
  }

  /* ---------- magnetic buttons (fine pointers only) ---------- */
  if (fine && !reduceMotion) {
    document.querySelectorAll(".magnetic").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = "translate(" + x * 0.25 + "px," + y * 0.3 + "px)";
      });
      btn.addEventListener("mouseleave", function () {
        btn.style.transform = "";
      });
    });
  }

  /* ---------- sticker parallax on hero ---------- */
  var polaroid = document.querySelector(".polaroid");
  if (polaroid && fine && !reduceMotion) {
    document.querySelector(".hero").addEventListener("mousemove", function (e) {
      var x = (e.clientX / window.innerWidth - 0.5) * 14;
      var y = (e.clientY / window.innerHeight - 0.5) * 10;
      polaroid.style.translate = x + "px " + y + "px";
    });
  }
})();
