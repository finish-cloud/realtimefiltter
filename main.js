/* global $*/
$(function() {
    let searchWord =function(){
        let searchText = $(this).val();
    
        $('.content').each(function(){
           let contentText = $(this).text();//各キーワード地の取得
           
           if (contentText.indexOf(searchText) != -1) {
               $(this).removeClass('hidden');
           } else {
               $(this).addClass('hidden');
           }
        });    
    };
    //searchの実行
    $('#search').on('input', searchWord);
});