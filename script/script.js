$(".thumbGoods").click(function(){

    $("#layerPopupBg").css({ "display": "block" });


    // 1. 원본 이미지 파일명
    var srcData = $(this).children("img").attr("src");
    srcData = "images/origin/" + srcData.substring(17, 24) + "_615x615.jpg";
    $("#popupGoods").children("img").attr("src", srcData);


    // 2. 말머리 + 상품명
    var goodsNameHeader = $(this).children("h5").children("span.goodsHeader").text();
    $("#popupGoods").children("h5").children("span.subjectHead")
                                                        .text(goodsNameHeader);

    var goodsName = $(this).children("h5").children("span.goodsName").text();
    $("#popupGoods").children("h5").children("span.goodsNamePopup")
                                                        .text(goodsName);

    // 3. 가격
    var price = $(this).children("span.price").text();
    $("#popupGoods").children("span.price").text(price);




});   // 모달 레이어 팝업 실행




$("#closeBtn").click(function(){

    $("#layerPopupBg").css({ "display": "none" });

}); // 모달 레이어 팝업 닫기
