// アドオンのアクションボタンが押された時、タブを引数として実行
chrome.action.onClicked.addListener( async (tab)=>{
    // デフォルト値
    let misskey_domain = 'misskey.io';
    // オプション画面で設定したドメイン名をストレージから取得
    let rtnPromise = await chrome.storage.sync.get(
        { misskey_domain: 'misskey.io' }, (result)=>{
            misskey_domain = result.misskey_domain;
            let promiseVar = chrome.tabs.sendMessage(tab.id, {
                message: "PostToMisskey",
                domain: misskey_domain
            });
            promiseVar.catch((err)=>{
                console.log(err);
            });
            /*
            (
                (s,e,d)=>{
                    window.open(
                        "https://"+ d +"/share?text="+
                        e(document.title)+" "+e(location.href),
                        "_blank",
                        "width=550,height=420,left="+
                        (s.availLeft+s.availWidth/2-275)+
                        ",top="+(s.availTop+s.availHeight/2-210)
                    );
                }
            )(window.screen,encodeURIComponent,misskey_domain)
            */
        });
});
