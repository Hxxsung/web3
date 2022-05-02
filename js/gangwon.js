(function($){

  //네비게이션 : slideUp() slideDown()
/* 
  
  $('.main-btn').mouseenter(function(){
      $('.sub').stop().slideUp(0);
      $(this).next().stop().slideDown(300);

      $('.main-btn').removeClass('hover');
      $(this).addClass('hover');
  });

  $('#nav').mouseleave(function(){
      $('.sub').stop().slideUp(300)
      $('.main-btn').removeClass('hover');
  });

  콜백함수 이용하는 법 -실무 사용- 
  $('#nav').mouseleave(function(){
      $('.sub').stop().slideUp(300, function(){
        $('.main-btn').delay(300).removeClass('hover'); .delay()는 시간 연장의 의미
      });
  }); 
*/

  $('.main-btn').mouseenter(function(){
    $('.sub').stop().slideUp(0);
    $(this).next().stop().slideDown(300);

    $('.main-btn').removeClass('hover');
    $(this).addClass('hover');
  });

  $('#nav').mouseleave(function(){
    $('.sub').stop().slideUp(300)
    $('.main-btn').removeClass('hover');
  });
  
  //메인슬라이드
  let cnt=0;
  const slideWrap = $('.slide-wrap'); //선택자도 변수설정
  const n = 3; //전체슬라이드 개수

  //1.메인슬라이드함수
  function mainSlide(){
    slideWrap.animate({left: `${-100*cnt}%`}, 600, function(){
      cnt>n-1?cnt=0:cnt;
      slideWrap.animate({left: `${-100*cnt}%`}, 0);
    })
  }

  //2.다음카운트함수
  function nextCount(){
    cnt++;
    mainSlide();
  }

  //3.자동타이머함수
  function autoTimer(){
    setInterval(nextCount, 3000);
  }
  autoTimer();

  //공지사항 & 갤러리 탭메뉴 클릭 이벤트
  //갤러리버튼 클릭
  $('.gallery-btn').click(function(){
      $('.notice-btn').addClass('on');
      $('.gallery-btn').addClass('on');
  });

  //공지사항버튼 클릭
  $('.notice-btn').click(function(){
      $('.notice-btn').removeClass('on');
      $('.gallery-btn').removeClass('on');
  });



})(jQuery);