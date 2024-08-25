chrome.action.onClicked.addListener((tab)=>{
    let misskey_domain = 'misskey.io';
    let rtnPromise = chrome.storage.sync.get( { misskey_domain: 'misskey.io' }, function(result){
        misskey_domain = result.misskey_domain;
        chrome.tabs.sendMessage(tab.id, {
                message: "PostToMisskey",
                domain: misskey_domain
        });
    });
    rtnPromise
        .then(()=>{
        })
        .catch((err)=>{
        })
});
