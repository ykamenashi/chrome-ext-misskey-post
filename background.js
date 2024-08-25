chrome.action.onClicked.addListener( async (tab)=>{
    let misskey_domain = 'misskey.io';
    let rtnPromise = await chrome.storage.sync.get( { misskey_domain: 'misskey.io' }, function(result){
        misskey_domain = result.misskey_domain;
        chrome.tabs.sendMessage(tab.id, {
                message: "PostToMisskey",
                domain: misskey_domain
        });
    });
});
