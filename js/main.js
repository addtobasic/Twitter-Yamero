    // window.addEventListener('DOMContentLoaded', function()
    // {
    //     $(window).on
    //     ("beforeunload",function()
    //         {
    //             $.confirm
    //             (
    //                 {

    //                 }
    //             );
    //         }
    //     );
    // });

var dialog = document.getElementById('dialog');
var btn = document.getElementById('btn');
var yes = document.getElementById('yes');
var no = document.getElementById('no');
var cancel = document.getElementById('cancel');
var batu = document.getElementById('batu');

btn.addEventListener('click', function() {
    dialog.style.display = 'block';
    this.style.display = 'none';
})

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
    window.close();
});