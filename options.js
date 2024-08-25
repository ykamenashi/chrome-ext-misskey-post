document.getElementById('change_btn').addEventListener('click', async (e) =>{
    let domain_str = document.getElementById('domain').value;
    if( domain_str != ''){
        let options = {
            misskey_domain: domain_str
        }
        await chrome.storage.sync.set(options);
        document.getElementById('now').innerText = domain_str;
    }
})

chrome.storage.sync.get( { misskey_domain: 'misskey.io' }, function(result){
    document.getElementById('domain').value = result.misskey_domain;
})