
function dxsearch() {
    var content = $.trim($("#searchcontent").val());
    if (content == "") {
        alert("请输入搜索内容！");
        return false;
    }
    else {
        if ($("#searchtype").text().trim() == "站内") {
            window.open("/jrobot/search.do?webid=142&pg=12&p=1&tpl=&q=" + content + "&category=dxjrobot&datetype=0&pos=&od=");
        }
        else {
            //window.open("http://gtog.ningbo.gov.cn/jrobot/search.do?webid=99&pg=12&p=1&tpl=&category=&q=" + content);
            window.open("/jrobot/search.do?webid=142&pg=12&p=1&tpl=&q=" + content+"&category=all");
        }
    }
}

$('.GAScode').hover(function () {
    $('.GAScodePic').css('display', 'block');
}, function () {
    $('.GAScodePic').css('display', 'none');
});