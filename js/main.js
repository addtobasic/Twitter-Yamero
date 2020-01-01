    // window.addEventListener('DOMContentLoaded', function()
    // {
    //     $(window).on
    //     ("beforeunload",function()
    //         {
    //             $.confirm
    //             (
    //                 {
    //                     'title'     : 'くいなちゃん',
    //                     'message'   : 'ツイッターを閉じて、作業をしますか？',
    //                     'buttons'   :
    //                     {
    //                         'OK': function()
    //                         {
    //                             $(this).dialog('close');
    //                         },
    //                         'はい': function()
    //                         {
    //                             $(this).dialog('close');
    //                         },
    //                         'Yes': function()
    //                         {
    //                         $(this).dialog('close');
    //                         },
    //                     }
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