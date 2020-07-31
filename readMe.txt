108KB  * 1000
=> 108000KB = 108MB  
36KB  * 1000
=> 36000KB = 36MB


#wrap 전체폭 : 1160
(p10) => 1140
왼쪽이미지 : 390
오른쪽썸네일 : 220 * 3 => 660

390 + 660 = 1050
왼쪽 폭 : w420
오른쪽 폭 : w720
(각각의 썸네일 220
  좌우 여유분 4

---------------------------------


    // 1. 원본 이미지 파일명
    // => src="images/origin/list_0X_615x615.jpg"
    //                          origin             615x615
    var srcData = $(this).children("img").attr("src");
    srcData = "images/origin/" + srcData.substring(17, 24) + "_615x615.jpg";
    $("#popupGoods").children("img").attr("src", srcData);
    
    // 2. 말머리 + 상품명
    // 3. 가격
    
    $("#layerPopupBg").css({ "display": "block" });
//    alert("srcData : " + srcData.substring(17, 24));
//    실제값 : images/thumbnail/list_02_220x220.jpg
//    번호      17번 24번
