"use strict";

  /* =================== */
  /*     back-to-top     */
  /* =================== */

  $('#back-to-top').addClass('in');

  // クリックした時
  $("#back-to-top").click(function () {

     // html,body の scrollTop を 0 にanimateする
    // html,body の スクロール量 を 0 にアニメーションする　１sで
    $("html,body").animate({
        scrollTop: 0,
      },1000);       
  });


  // スクロールした時
  $(window).scroll(function () {
    // もし１０００PX以上スクロールしたら
    if ($(window).scrollTop() > 1000) {
      // ボタンを表示する
      $("#back-to-top").addClass("in");
    } else {
      $("#back-to-top").removeClass("in");
    }
  });

  /* =================== */
  /*   	  hamburger      */
  /* =================== */

  $('#hamburger').click(function(){
    $('.page_nav').fadeToggle(); // display: block; にする
    $('#hamburger').toggleClass('active');
    $('body').toggleClass('hidden');
  });
 
 
 /* =================== */
  /*    carousel panel   */
  /* =================== */

  const carousel = $("#carousel");
  const carouselItem = carousel.find("li");
  const prev = $("#prev");
  const next = $("#next");

  const length = carouselItem.length;
  const carouselWidth = carouselItem.width();
  const innerWidth = carouselWidth * length;
  const time = 300;

  let c = 1;

  next.click(function () {
    if (c == length) {
      // stop() : 処理の渋滞を防ぐ
      carousel.stop().animate(
        {
           left: 0
        },
        time
      );
      // animate( 変化させたいcss , 変化させるのにかける時間 ) : cssを時間をかけて変化させる
      c =1;
    } else {
      carousel.stop().animate(
        {
          left: -c * carouselWidth,
        },
        time
      );
      c++;
    }
  });

  prev.click(function () {
    if (c == 1) {
      // stop() : 処理の渋滞を防ぐ
      carousel.stop().animate(
        {
           left: -innerWidth+carouselWidth
        },
        time
      );
      // animate( 変化させたいcss , 変化させるのにかける時間 ) : cssを時間をかけて変化させる
      c =length;
    } else {
      carousel.stop().animate(
        {
          left: -(c - 2)* carouselWidth,
        },
        time
      );
      c--;
    }
  });
