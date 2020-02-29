async function injectHtml(resource, dom) {
    const res = await fetch(chrome.runtime.getURL(resource), { method: "GET" })
    const html = await res.text()
    dom.innerHTML = html
}

const target = document.getElementById("HTMLを挿入するDOM")
injectHtml("index.html", target)

setInterval(function(){dialog.style.display = 'block';},600);

$(window).resize(modalResize);
function modalResize(){

    var w = $(window).width();
    var h = $(window).height();
    var cw = $("#dialog").outerWidth();
    var ch = $("#dialog").outerHeight();

  //取得した値をcssに追加する
    $("#dialog").css({
        "left": ((w - cw)/2) + "px",
        "top": ((h - ch)/2) + "px"
    });
}
modalResize();

ok.addEventListener('click', function(){
    window.close();
});
hai.addEventListener('click', function(){
    window.close();
});
yes.addEventListener('click', function(){
    window.close();
});
batu.addEventListener('click', function(){
    dialog.style.display = 'none';
});