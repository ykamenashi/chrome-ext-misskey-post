// アドオンのアクションボタンが押された時、タブを引数として実行
chrome.action.onClicked.addListener( async (tab)=>{
    // デフォルト値
    let misskey_domain = 'misskey.io';
    // オプション画面で設定したドメイン名をストレージから取得
    let rtnPromise = await chrome.storage.sync.get(
        { misskey_domain: 'misskey.io' }, (result)=>{
            misskey_domain = result.misskey_domain;
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                function: injectedFunc,
                args: [misskey_domain]
            });
        });
});

const injectedFunc = (domain)=>{
    const s = screen;
    const e = encodeURIComponent;
    let sel = '';
    if( document.getSelection().toString().length != 0){
        sel = `> ${document.getSelection().toString()}` + "%0A%0A";
    }
    window.open(
        "https://"+ domain +"/share?text="+
        sel +
        e(document.title)+" "+e(location.href),
        "_blank",
        "width=550,height=420,left="+
        (s.availLeft+s.availWidth/2-275)+
        ",top="+(s.availTop+s.availHeight/2-210)
    );
}