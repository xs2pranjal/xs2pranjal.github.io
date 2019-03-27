!function e(t,n,a){function i(o,c){if(!n[o]){if(!t[o]){var r="function"==typeof require&&require;if(!c&&r)return r(o,!0);if(s)return s(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[o]={exports:{}};t[o][0].call(d.exports,function(e){var n=t[o][1][e];return i(n?n:e)},d,d.exports,e,t,n,a)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<a.length;o++)i(a[o]);return i}({1:[function(e,t,n){"use strict";var a=e("./main.js"),i=e("./pages/home.js"),s=e("./pages/examples.js"),o=e("./pages/api.js");$(document).on("DOMContentLoaded",function(){switch(pageId){default:case"homepage":i.init();break;case"examples":a.init(),s.init();break;case"api":a.init(),o.init()}})},{"./main.js":2,"./pages/api.js":3,"./pages/examples.js":4,"./pages/home.js":5}],2:[function(e,t,n){"use strict";t.exports={init:function(){this.logoAnimation(),this.hamburgerIcon(),this.setActiveClassOnCurrentNav()},logoAnimation:function(){setTimeout(function(){new Granim({element:"#logo-canvas",direction:"left-right",opacity:[1,1],states:{"default-state":{gradients:[["#EB3349","#F45C43"],["#FF8008","#FFC837"],["#4CB8C4","#3CD3AD"],["#24C6DC","#514A9D"],["#FF512F","#DD2476"],["#DA22FF","#9733EE"]],transitionSpeed:3500}}});$(".main-header .bloc-logo").css({display:"none",visibility:"visible"}).fadeIn()},500)},hamburgerIcon:function(){$(".hamburger-icon").click(function(){$(this).toggleClass("open"),$(".main-nav").toggleClass("open")})},setActiveClassOnCurrentNav:function(){$("#nav-"+pageId).addClass("active")}}},{}],3:[function(e,t,n){"use strict";var a=location.hostname.indexOf("localhost")!==-1?"":"granim.js/";t.exports={init:function(){this.setDefaultVersionOnDropDown(),this.HandleVersionDropDown()},setDefaultVersionOnDropDown:function(){var e=location.pathname.split("/"),t=e[e.length-1];$("#version-select option").each(function(e,n){n.value===t&&$(n).attr({selected:!0})})},HandleVersionDropDown:function(){$("#version-select").on("change",function(e){$(location).attr({pathname:a+$(this).val()})})}}},{}],4:[function(e,t,n){"use strict";var a=e("../utils/codeTemplate.js"),i=location.hostname.indexOf("localhost")!==-1?"":"granim.js/";t.exports={init:function(){this.examples.init()},examples:{init:function(){this.basic(),this.complex(),this.imageBlending(),this.imageMask(),this.interactive()},basic:function(){var e=new Granim({element:"#canvas-basic",direction:"left-right",customDirection:{x0:"40%",y0:"10px",x1:"60%",y1:"50%"},isPausedWhenNotInView:!0,states:{"default-state":{gradients:[["#ff9966","#ff5e62"],["#00F260","#0575E6"],["#e1eec3","#f05053"]]}}});$("#select-direction").on("change",function(){var t=$(this).val();e.changeDirection(t),$("#canvas-basic-bloc .language-js").html($(a.basic({direction:t}))),Prism.highlightAll()})},complex:function(){new Granim({element:"#canvas-complex",direction:"left-right",isPausedWhenNotInView:!0,states:{"default-state":{gradients:[[{color:"#833ab4",pos:.2},{color:"#fd1d1d",pos:.8},{color:"#38ef7d",pos:1}],[{color:"#40e0d0",pos:0},{color:"#ff8c00",pos:.2},{color:"#ff0080",pos:.75}]]}}})},imageBlending:function(){var e=new Granim({element:"#canvas-image-blending",direction:"top-bottom",isPausedWhenNotInView:!0,image:{source:"../"+i+"assets/img/bg-forest.jpg",position:["center","center"],stretchMode:["stretch-if-smaller","stretch-if-bigger"],blendingMode:"multiply"},states:{"default-state":{gradients:[["#29323c","#485563"],["#FF6B6B","#556270"],["#80d3fe","#7ea0c4"],["#f0ab51","#eceba3"]],transitionSpeed:7e3}}});$("#select-blending-mode").on("change",function(){var t=$(this).val();e.changeBlendingMode(t),$("#canvas-image-blending-bloc .language-js").html($(a.blendingMode({blendingMode:t}))),Prism.highlightAll()})},imageMask:function(){new Granim({element:"#canvas-image-mask",direction:"left-right",isPausedWhenNotInView:!0,states:{"default-state":{gradients:[["#EB3349","#F45C43"],["#FF8008","#FFC837"],["#4CB8C4","#3CD3AD"],["#24C6DC","#514A9D"],["#FF512F","#DD2476"],["#DA22FF","#9733EE"]],transitionSpeed:2e3}}});$(".canvas-image-wrapper .logo-mask").on("click",function(e){e.preventDefault()})},interactive:function(){function e(e){$(".canvas-interactive-wrapper a").removeClass("active"),$(e).addClass("active")}var t=new Granim({element:"#canvas-interactive",name:"interactive-gradient",elToSetClassOn:".canvas-interactive-wrapper",direction:"diagonal",isPausedWhenNotInView:!0,stateTransitionSpeed:500,states:{"default-state":{gradients:[["#B3FFAB","#12FFF7"],["#ADD100","#7B920A"],["#1A2980","#26D0CE"]],transitionSpeed:1e4},"violet-state":{gradients:[["#9D50BB","#6E48AA"],["#4776E6","#8E54E9"]],transitionSpeed:2e3},"orange-state":{gradients:[["#FF4E50","#F9D423"]],loop:!1}}});$("#default-state-cta").on("click",function(n){n.preventDefault(),t.changeState("default-state"),e("#default-state-cta")}),$("#violet-state-cta").on("click",function(n){n.preventDefault(),t.changeState("violet-state"),e("#violet-state-cta")}),$("#orange-state-cta").on("click",function(n){n.preventDefault(),t.changeState("orange-state"),e("#orange-state-cta")})}}}},{"../utils/codeTemplate.js":6}],5:[function(e,t,n){"use strict";t.exports={init:function(){this.verticalAlign(),this.bgAnimation()},verticalAlign:function(){function e(){var e=$("#canvas-wrapper"),t=e.find(".content-wrapper"),n=e.height(),a=t.height(),i=n/2-a/2;t.css({marginTop:i>0?i:0,visibility:"visible"})}$(window).on("resize",e),e()},bgAnimation:function(){var e=new Granim({element:"#granim-canvas",name:"background-gradient",direction:"diagonal",stateTransitionSpeed:1e3,opacity:[1,1],states:{"default-state":{gradients:[["#00d2ff","#3a7bd5"],["#4776E6","#8E54E9"],["#000428","#004e92"],["#FF512F","#DD2476"],["#fd746c","#ff9068"],["#6a3093","#a044ff"],["#76b852","#8DC26F"],["#005C97","#363795"]]},"dark-state":{gradients:[["#16222A","#3A6073"],["#000428","#004e92"]]},"light-state":{gradients:[["#FF8008","#FFC837"],["#FF512F","#F09819"]]},"green-state":{gradients:[["#134E5E","#71B280"],["#93F9B9","#1D976C"]]}}});window.innerWidth>768&&($("#dark-state").hover(function(){e.changeState("dark-state")},function(){e.changeState("default-state")}),$("#light-state").hover(function(){e.changeState("light-state")},function(){e.changeState("default-state")}),$("#green-state").hover(function(){e.changeState("green-state")},function(){e.changeState("default-state")}))}}},{}],6:[function(e,t,n){"use strict";t.exports={basic:function(e){var t=e.direction||"diagonal",n=['<code class="language-js">var granimInstance = new Granim({',"    element: '#canvas-basic',","    direction: '"+t+"',","    isPausedWhenNotInView: true,","    states : {",'        "default-state": {',"            gradients: [","                ['#ff9966', '#ff5e62'],","                ['#00F260', '#0575E6'],","                ['#e1eec3', '#f05053']","            ]","        }","    }","});</code>"],a=["    customDirection: {","        x0: '40%',","        y0: '10px',","        x1: '60%',","        y1: '50%',","    },"].join("\n");return"custom"===t&&n.splice(3,0,a),n.join("\n")},blendingMode:function(e){return['<code class="language-js">var granimInstance = new Granim({',"    element: '#canvas-image-blending',","    direction: 'top-bottom',","    isPausedWhenNotInView: true,","    image : {","        source: '../assets/img/bg-forest.jpg',","        blendingMode: '"+e.blendingMode+"',","    },","    states : {",'        "default-state": {',"            gradients: [","                ['#29323c', '#485563'],","                ['#FF6B6B', '#556270'],","                ['#80d3fe', '#7ea0c4'],","                ['#f0ab51', '#eceba3']","            ],","            transitionSpeed: 7000","        }","    }","});</code>"].join("\n")}}},{}]},{},[1]);