$(document).ready(function(){
        $('.mobile-header .nav-list > ul li:has(ul) > a').after('<i class="fa fa-sort-down"></i>');
});



$(document).ready(function(){
    $('.mobile-header .nav-list > ul li:has(ul) i').click(function(){
        $('.mobile-header .nav-list > ul li:has(ul) i').prev('a').parent().toggleClass('active');
        $('.mobile-header .nav-list > ul li:has(ul) i').not(this).prev('a').parent().removeClass('active');
    }); 
});


$(document).ready(function(){
    $('.toggleBtn').click(function(){
        $(this).toggleClass('active');
        $('.toggleBtn span').toggleClass('active');
        $('.mobile-header .nav-list').toggleClass('active');
    });
});


