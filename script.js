chrome.runtime.onMessage.addListener((response, sender, sendResponse)=>{
    if( response.message == "PostToMisskey" ){
        let misskey_domain_str = response.domain;

        (
            function(s,e,d){
                open(
                    "https://"+ d +"/share?original_referer=javascript:close&text="+e(document.title)+" "+e(location.href),"_blank","width=550,height=420,left="+(s.availLeft+s.availWidth/2-275)+",top="+(s.availTop+s.availHeight/2-210)
                );
            }
        )(screen,encodeURIComponent,misskey_domain_str)

    }
})
