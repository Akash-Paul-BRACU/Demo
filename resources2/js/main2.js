$(".progress-bar").each(function(){var n=$(this).find(".bar"),a=$(this).find("span"),t=parseInt(a.text(),10);$({p:0}).animate({p:t},{duration:3e3,easing:"swing",step:function(t){n.css({transform:"rotate("+(45+1.8*t)+"deg)"}),a.text(0|t)}})});






function openNav() {
    
    document.getElementById("myNav").style.width = "100%";
    
}

function closeNav() {
    
    document.getElementById("myNav").style.width = "0%";
    
}

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $("#nav").addClass("fixed");
    } else {
        $("#nav").removeClass("fixed");
    }
});
