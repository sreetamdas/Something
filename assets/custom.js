$(function () {
    var i = 1;
    var hello = ["Django", "HTML, CSS and JS", "CodeIgnitor", "Open Source"];
    var greeting = $('#loves');
    var item;

    function hey() {
        var j = i % (hello.length);
        console.log("j = " + j);
        item = hello[j];

        greeting.html(item);
        greeting.animate({
            "opacity": "1"
        }, 0); //time to transition opacity
    }

    window.setInterval(function () {
        i++;
        greeting.animate({
            "opacity": "0"
        }, 0); //time to transition opacity
        setTimeout(hey, 0)
    }, 800); //interval between word change

});