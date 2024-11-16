//this is javascript code
// for (var i = 0; i < 5; i ++) {
//     var s = document.querySelectorAll("button")[i];
//     s.addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }

//jQuery code
// $("button").click(function() {
//     $("h1").css("color", "red");
// });

$(document).keypress(function(event) {
    $("h1").text(event.key);
    console.log(event.key);
});