//Hamburger Animation
$(document).ready(function(){
    $(".hamburger").click(function(){
        $(this).parent().toggleClass('open');
    });
});

// Parallax.js
// $(document).ready(function(){
//     var scene = document.getElementById('scene');
//     var parallaxInstance = new Parallax(scene);
// });


