
(
    function(s,e){
        open(
            "https://misskey.io/share?original_referer=javascript:close&text="+e(document.title)+" "+e(location.href),"_blank","width=550,height=420,left="+(s.availLeft+s.availWidth/2-275)+",top="+(s.availTop+s.availHeight/2-210)
        );
    }
)(screen,encodeURIComponent)