// ================ left side js ===================
$(document).ready(function() {
    $(document).on('click', '#sidebar li', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});


// ================================= left menu dp toogle -========
$('.sub-menu ul').hide();
$(".sub-menu a").click(function(){
    $(this).parent(".sub-menu").children("ul").slideToggle(100);
    $(this).find(".right").toggleClass("fa-angle-right fa-angle-down");
});


// -=========== sidebar toggle ============

$(document).ready(function() {
   $("#toggleSidebar").click(function (){
    $(".left-menu").toggleClass("hide");
    $(".content-wrapper").toggleClass("hide")
   });
});