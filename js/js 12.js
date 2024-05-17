$(".open-slide").click(function () {
  let widthopendiv = $(".open-div").outerWidth();

  if ($(".open-div").css("left") == "-200px") {
    $(".open-div").animate({ left: "0px" }, 500);
    $(".open-slide").animate({ "margin-left": "185px" }, 500);
  } else {
    $(".open-div").animate({ left: "-200px" }, 500);
    $(".open-slide").animate({ "margin-left": "0px" }, 500);
  }
});

$("#xClose").click(function () {
  $(".open-div").animate({ left: "-200px" }, 500);
  $(".open-slide").animate({ "margin-left": "0px" }, 500);
});

$(document).ready(function () {
  $(".sec2  p:first").css("display", "block");
  $(".sec2 h3").click(function () {
    $(this).next().slideToggle(500);
    $(".sec2  p").not($(this).next()).slideUp(500);
  });
});
// =================================================
let countDaownDate = new Date("January  1, 2025 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDaownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  GetDay.innerHTML = `${days}D`;

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  GetHours.innerHTML = `${hours}H`;

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

  GetMinutes.innerHTML = `${minutes}M`;

  let second = Math.floor((dateDiff % (1000 * 60)) / 1000);

  GetSecond.innerHTML = `${second}S`;
}, 1000);



// ==============================

$(function () {
  let maxNumber = 100
  $('textarea').keyup(function () {
    let valLength = $(this).val().length

    let numberVal = maxNumber - valLength
    if (numberVal <= 0) {
      $('.foterNumber span').text('your available character finished')
    }
    else {
      $(".foterNumber span").text(numberVal);
    }
  })
})
