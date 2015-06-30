/**
 * Created by ding on 15-6-4.
 */


function right_top_shop_info_scroll(){
    //console.log(count_i);
    //var count_i = 0;
    //$("#_JS_scroll_phone_g")[0].style.cssText = "margin-top:"+count_i+"px";
    //if(count_i == -66)
    //{
    //    count_i = 0;
    //}
    //else
    //{
    //    count_i = count_i - 22;
    //}
    //setInterval('AutoScroll("#roll_move")',1000);
    $("#_JS_scroll_phone_g").animate({
        marginTop:"-22px"
    },500,function(){
        $(this).css({marginTop:"0px"}).find("div:first").appendTo(this);
    });
}

$().ready(function() {
    setInterval('right_top_shop_info_scroll()',3000);

    auto_play();
});

//function  $(id){
//    return typeof id==='string'?document.getElementById(id):id;
//}
//window.onload = auto_play();

function auto_play(){
    var index = 0;
    var timer = null;
    var show_number=document.getElementById('JS_slide_nav').getElementsByTagName('a');
    var show_picture=document.getElementById('JS_focus_box').getElementsByTagName('div');
    for(var i = 0;i<show_number.length;i++){
        show_number[i].id=i;
        show_number[i].onmouseover=function(){
            clearInterval(timer);
            change_option(this.id);
        };
        show_number[i].onmouseout=function(){
            timer = setInterval(autoPlay,2000);
        }
    }
    if(timer){
        clearInterval(timer);
        timer=null;
    }
    timer = setInterval(autoPlay,2000);

    function autoPlay(){
        index++;
        if(index >= show_number.length){
            index = 0;
        }
        change_option(index);
    }

    function change_option(curent){
        for(var j = 0;j<show_picture.length;j++){
            show_picture[j].style.display='none';
            show_number[j].style.background='#000'
        }
        show_number[curent].style.background='#c9033b';
        show_picture[curent].style.display='block';
        index = curent;
    }
}

function show_city_info(){
    $(".hide_city_group")[0].style.cssText = "display:block";
    $(".hideMap")[0].style.cssText = "display:block";
    $("#change_city")[0].style.cssText = "background: #c6033b;color: #fff";
    //$("#JS_hide_city_menu_11")[0].setAttribute("class","city-select cut_handdler Left hover")
}
function close_city_info(){
    $(".hide_city_group")[0].style.cssText = "display:none";
    $(".hideMap")[0].style.cssText = "display:none";
    $("#change_city")[0].style.cssText = "background-position: -58px -79px;color: #717171";
    //$("#JS_hide_city_menu_11")[0].setAttribute("class","city-select cut_handdler Left")

}
function show_goods(){
    $(".phc-cart")[0].setAttribute("class","phc-cart Right hover")
}
function close_goods(){
    $(".phc-cart")[0].setAttribute("class","phc-cart Right")
}
function show_my_info(){
    //$("#my_info")[0].style.cssText = "display:block";
    //$("#arrow")[0].style.cssText = "background-position: 1px -77px";
    $(".sncq-item")[1].setAttribute("class","sncq-item hover")
}
function close_my_info(){
    //$("#my_info")[0].style.cssText = "display:none";
    //$("#arrow")[0].style.cssText = "background-position: 2px -67px";
    $(".sncq-item")[1].setAttribute("class","sncq-item")
}
function open_help_you(){
    $(".sncq-item")[2].setAttribute("class","sncq-item hover")
}
function close_help_you(){
    $(".sncq-item")[2].setAttribute("class","sncq-item")
}
function show_all_goods(){
    $(".top-item")[0].setAttribute("class","top-item recommend hover");
    $("#pentagram_icon").animate({marginLeft:"19px"},100);
}
function close_all_goods(){
    $(".top-item")[0].setAttribute("class","top-item recommend");
    $("#pentagram_icon").animate({marginLeft:"14px"},100);
}

function show_menu_goods_1(){
    $("#JS_sub_recommend")[0].style.cssText = "display:none";
    $(".top-item")[1].setAttribute("class","top-item hover");
    $(".sub")[0].style.cssText = "display:block";
    $("#JS_sub_recommend").animate({paddingLeft:"5px"},100);
    $(".sub").animate({paddingLeft:"27px",opacity:"1"},100);
    $("#icon_2").animate({marginLeft:"19px"},100);
}
function close_menu_goods_1(){
    $(".sub")[0].style.cssText = "display:none";
    $(".top-item")[1].setAttribute("class","top-item");
    $("#icon_2").animate({marginLeft:"14px"},100);
    $(".sub").animate({paddingLeft:"17px",opacity:"0.8"},100);
    $("#JS_sub_recommend").animate({paddingLeft:"11px"},100);
    $("#JS_sub_recommend")[0].style.cssText = "display:block";
}

//function show_menu_goods_2(order_number,id_number){
//    $(".top-item")[order_number].setAttribute("class","top-item hover");
//    $("#show_menu_goods_"+order_number)[0].style.cssText = "display:block";
//    $("#show_menu_goods_"+order_number).animate({paddingLeft:"27px",opacity:"1"},100);
//    $("#icon_"+id_number).animate({marginLeft:"19px"},100);
//}
//function close_menu_goods_2(order_number,id_number){
//    $("#show_menu_goods_"+order_number)[0].style.cssText = "display:none";
//    $(".top-item")[order_number].setAttribute("class","top-item");
//    $("#icon_"+id_number).animate({marginLeft:"14px"},100);
//    $("#show_menu_goods_"+order_number).animate({paddingLeft:"17px",opacity:"0.8"},100);
//}

function show_menu_goods_2(){
    $(".top-item")[2].setAttribute("class","top-item hover");
    $("#show_menu_goods_"+2)[0].style.cssText = "display:block";
    $("#show_menu_goods_"+2).animate({paddingLeft:"27px",opacity:"1"},100);
    $("#icon_"+3).animate({marginLeft:"19px"},100);
}
function close_menu_goods_2(){
    $("#show_menu_goods_"+2)[0].style.cssText = "display:none";
    $(".top-item")[2].setAttribute("class","top-item");
    $("#icon_"+3).animate({marginLeft:"14px"},100);
    $("#show_menu_goods_"+2).animate({paddingLeft:"17px",opacity:"0.8"},100);
}

function show_menu_goods_3(){
    $(".top-item")[3].setAttribute("class","top-item hover");
    $("#show_menu_goods_3")[0].style.cssText = "display:block";
    $("#show_menu_goods_3").animate({paddingLeft:"27px",opacity:"1"},100);
    $("#icon_4").animate({marginLeft:"19px"},100);
}
function close_menu_goods_3(){
    $("#show_menu_goods_3")[0].style.cssText = "display:none";
    $(".top-item")[3].setAttribute("class","top-item");
    $("#icon_4").animate({marginLeft:"14px"},100);
    $("#show_menu_goods_3").animate({paddingLeft:"17px",opacity:"0.8"},100);
}

function show_menu_goods_4(){
    $(".top-item")[4].setAttribute("class","top-item hover");
    $("#show_menu_goods_4")[0].style.cssText = "display:block";
    $("#show_menu_goods_4").animate({paddingLeft:"27px",opacity:"1"},100);
    $("#icon_5").animate({marginLeft:"19px"},100);
}
function close_menu_goods_4(){
    $("#show_menu_goods_4")[0].style.cssText = "display:none";
    $(".top-item")[4].setAttribute("class","top-item");
    $("#icon_5").animate({marginLeft:"14px"},100);
    $("#show_menu_goods_4").animate({paddingLeft:"17px",opacity:"0.8"},100);
}

function show_menu_goods_5(){
    $(".top-item")[5].setAttribute("class","top-item hover");
    $("#show_menu_goods_5")[0].style.cssText = "display:block";
    $("#show_menu_goods_5").animate({paddingLeft:"27px",opacity:"1"},100);
    $("#icon_6").animate({marginLeft:"19px"},100);
}
function close_menu_goods_5(){
    $("#show_menu_goods_5")[0].style.cssText = "display:none";
    $(".top-item")[5].setAttribute("class","top-item");
    $("#icon_6").animate({marginLeft:"14px"},100);
    $("#show_menu_goods_5").animate({paddingLeft:"17px",opacity:"0.8"},100);
}

function show_menu_goods_6(){
    $(".top-item")[6].setAttribute("class","top-item hover");
    $("#show_menu_goods_6")[0].style.cssText = "display:block";
    $("#show_menu_goods_6").animate({paddingLeft:"27px",opacity:"1"},100);
    $("#icon_7").animate({marginLeft:"19px"},100);
}
function close_menu_goods_6(){
    $("#show_menu_goods_6")[0].style.cssText = "display:none";
    $(".top-item")[6].setAttribute("class","top-item");
    $("#icon_7").animate({marginLeft:"14px"},100);
    $("#show_menu_goods_6").animate({paddingLeft:"17px",opacity:"0.8"},100);
}

function show_menu_goods_7(){
    $(".top-item")[7].setAttribute("class","top-item hover");
    $("#show_menu_goods_7")[0].style.cssText = "display:block";
    $("#show_menu_goods_7").animate({paddingLeft:"27px",opacity:"1"},100);
    $("#icon_8").animate({marginLeft:"19px"},100);
}
function close_menu_goods_7(){
    $("#show_menu_goods_7")[0].style.cssText = "display:none";
    $(".top-item")[7].setAttribute("class","top-item");
    $("#icon_8").animate({marginLeft:"14px"},100);
    $("#show_menu_goods_7").animate({paddingLeft:"17px",opacity:"0.8"},100);
}

function show_menu_goods_8(){
    $(".top-item")[8].setAttribute("class","top-item hover");
    $("#show_menu_goods_8")[0].style.cssText = "display:block";
    $("#show_menu_goods_8").animate({paddingLeft:"27px",opacity:"1"},100);
    $("#icon_9").animate({marginLeft:"19px"},100);
}
function close_menu_goods_8(){
    $("#show_menu_goods_8")[0].style.cssText = "display:none";
    $(".top-item")[8].setAttribute("class","top-item");
    $("#icon_9").animate({marginLeft:"14px"},100);
    $("#show_menu_goods_8").animate({paddingLeft:"17px",opacity:"0.8"},100);
}

function show_menu_goods_9(){
    $(".top-item")[9].setAttribute("class","top-item hover");
    $("#show_menu_goods_9")[0].style.cssText = "display:block";
    $("#show_menu_goods_9").animate({paddingLeft:"27px",opacity:"1"},100);
    $("#icon_10").animate({marginLeft:"19px"},100);
}
function close_menu_goods_9(){
    $("#show_menu_goods_9")[0].style.cssText = "display:none";
    $(".top-item")[9].setAttribute("class","top-item");
    $("#icon_10").animate({marginLeft:"14px"},100);
    $("#show_menu_goods_9").animate({paddingLeft:"17px",opacity:"0.8"},100);
}

function show_menu_goods_10(){
    $(".top-item")[10].setAttribute("class","top-item hover");
    $("#show_menu_goods_10")[0].style.cssText = "display:block";
    $("#show_menu_goods_10").animate({paddingLeft:"27px",opacity:"1"},100);
    $("#icon_11").animate({marginLeft:"19px"},100);
}
function close_menu_goods_10(){
    $("#show_menu_goods_10")[0].style.cssText = "display:none";
    $(".top-item")[10].setAttribute("class","top-item");
    $("#icon_11").animate({marginLeft:"14px"},100);
    $("#show_menu_goods_10").animate({paddingLeft:"17px",opacity:"0.8"},100);
}

function show_menu_goods_11(){
    $(".top-item")[11].setAttribute("class","top-item hover");
    $("#show_menu_goods_11")[0].style.cssText = "display:block";
    $("#show_menu_goods_11").animate({paddingLeft:"27px",opacity:"1"},100);
    $("#icon_12").animate({marginLeft:"19px"},100);
}
function close_menu_goods_11(){
    $("#show_menu_goods_11")[0].style.cssText = "display:none";
    $(".top-item")[11].setAttribute("class","top-item");
    $("#icon_12").animate({marginLeft:"14px"},100);
    $("#show_menu_goods_11").animate({paddingLeft:"17px",opacity:"0.8"},100);
}

function show_big_bg(){
    $("#JS_focus_box").find("div:eq(2)").html();
}
function close_big_bg(){
    //$("#JS_focus_box").find("div:eq(2)").html();
}

















