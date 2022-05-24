// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $(".chat_on").click(function () {
        $(".Layout").toggle();
        $(".chat_on").hide(300);
    });

    $(".chat_close_icon").click(function () {
        $(".Layout").hide();
        $(".chat_on").show(300);
    });

});