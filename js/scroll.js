$(function(){
    
    var winH=$(window).innerHeight();
    var winW=$(window).innerWidth();
    var sec2W=4050;
    var scT;

    $('body').height(winH*4+sec2W-winW);

    $(window).resize(function(){
        sizeSet();
        $(window).scroll();
    });

    //사이즈세팅
    function sizeSet(){
        winH=$(window).innerHeight();
        winW=$(window).innerWidth();
        sec2W=4050;
        $('body').height(winH*4+sec2W-winW);
    }

    $(window).scroll(function(){
        scT = $(window).scrollTop();
        if(scT<winH){
            $('#sec_wrap').css({
                top:-scT,
                left:0
            });
        } else if(scT < winH+sec2W-winW){
            $('#sec_wrap').css({
                left:winH-scT,
                top:-winH
            });
        } else {
            $('#sec_wrap').css({
                top:-scT+sec2W-winW,
                left:-sec2W+winW
            });
        }

    });
});