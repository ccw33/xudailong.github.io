﻿[General]
// Auto
loglevel = notify
dns-server = system,1.2.4.8,80.80.80.80,80.80.81.81,1.1.1.1,1.0.0.1
skip-proxy = 127.0.0.1,192.168.0.0/16,10.0.0.0/8,172.16.0.0/12,100.64.0.0/10,17.0.0.0/8,localhost,*.local,::ffff:0.0.0.0/1,::ffff:128.0.0.0/1

// iOS
allow-wifi-access = true

external-controller-access = lhie1@0.0.0.0:6170

// macOS
interface = 0.0.0.0
socks-interface = 0.0.0.0
port = 8888
socks-port = 8889

enhanced-mode-by-rule = false

// Auto
allow-udp-proxy = true
collapse-policy-group-items = true
exclude-simple-hostnames = true
hide-apple-request = true
hide-crashlytics-request = true
ipv6 = true
replica = false
use-keyword-filter = false

[Proxy]
http0 = http,119.27.177.238,8080
http1 = http,115.154.38.107,8123
http2 = http,202.116.160.104,3128
http3 = http,118.251.35.202,8888
http4 = http,183.63.254.253,1080
http5 = http,120.132.120.173,8888
http6 = http,116.224.245.177,8123
http7 = http,202.117.97.239,8123
http8 = http,175.6.2.174,8088
http9 = http,116.6.138.98,8888
http10 = http,106.56.102.108,1080
Socks1 = custom,ss.isfrom.club,3006,aes-256-cfb,chaowen@chen,http://7xpt4s.com1.z0.glb.clouddn.com/SSEncrypt.module

[Proxy Group]
Proxy = url-test, http0 ,http1 ,http2 ,http3 ,http4 ,http5 ,http6 ,http7 ,http8 ,http9 ,http10 , url = http://www.google.com/generate_204
Socks_Proxy = url-test, Socks1 , url = http://www.google.com/generate_204


[Rule]
# Custom





# Apple

URL-REGEX,*apple.com/cn,DIRECT

PROCESS-NAME,storedownloadd,DIRECT // Mac App Store

USER-AGENT,%E5%9C%B0%E5%9B%BE*,DIRECT // Maps
USER-AGENT,%E8%AE%BE%E7%BD%AE*,DIRECT // Settings
USER-AGENT,*com.apple.mobileme.fmip1,DIRECT
USER-AGENT,*WeatherFoundation*,DIRECT
USER-AGENT,AssistantServices*,DIRECT //Siri
USER-AGENT,MobileAsset*,DIRECT
USER-AGENT,Siri*,DIRECT

USER-AGENT,cloudd*,DIRECT //iCloud
USER-AGENT,com.apple.appstored*,DIRECT // iOS App Store
USER-AGENT,com.apple.geod*,DIRECT
USER-AGENT,com.apple.Maps,DIRECT
USER-AGENT,FindMyFriends*,DIRECT
USER-AGENT,FindMyiPhone*,DIRECT
USER-AGENT,FMDClient*,DIRECT
USER-AGENT,FMFD*,DIRECT
USER-AGENT,fmflocatord*,DIRECT
USER-AGENT,geod*,DIRECT
USER-AGENT,locationd*,DIRECT
USER-AGENT,Maps*,DIRECT

DOMAIN-SUFFIX,aaplimg.com,DIRECT
DOMAIN-SUFFIX,apple.co,DIRECT
DOMAIN-SUFFIX,apple.com,DIRECT
DOMAIN-SUFFIX,icloud.com,DIRECT
DOMAIN-SUFFIX,icloud-content.com,DIRECT
DOMAIN-SUFFIX,itunes.com,DIRECT
DOMAIN-SUFFIX,me.com,DIRECT
DOMAIN-SUFFIX,mzstatic.com,DIRECT // App Store & iTunes Images
DOMAIN-SUFFIX,push-apple.com.akadns.net,DIRECT

IP-CIDR,17.0.0.0/8,DIRECT,no-resolve



# Ads in Video apps

// iqiyi
DOMAIN-SUFFIX,a.ckm.iqiyi.com,REJECT
DOMAIN-SUFFIX,ad.m.iqiyi.com,REJECT
DOMAIN-SUFFIX,afp.iqiyi.com,REJECT
DOMAIN-SUFFIX,api.cupid.iqiyi.com,REJECT
DOMAIN-SUFFIX,c.uaa.iqiyi.com,REJECT
DOMAIN-SUFFIX,cloudpush.iqiyi.com,REJECT
DOMAIN-SUFFIX,cm.passport.iqiyi.com,REJECT
DOMAIN-SUFFIX,emoticon.sns.iqiyi.com,REJECT
DOMAIN-SUFFIX,gamecenter.iqiyi.com,REJECT
DOMAIN-SUFFIX,hotchat-im.iqiyi.com,REJECT
DOMAIN-SUFFIX,ifacelog.iqiyi.com,REJECT
DOMAIN-SUFFIX,mbdlog.iqiyi.com,REJECT
DOMAIN-SUFFIX,msg.71.am,REJECT
DOMAIN-SUFFIX,msg.video.qiyi.com,REJECT
DOMAIN-SUFFIX,msg2.video.qiyi.com,REJECT
DOMAIN-SUFFIX,msga.cupid.iqiyi.com,REJECT
DOMAIN-SUFFIX,policy.video.iqiyi.com,REJECT
DOMAIN-SUFFIX,yuedu.iqiyi.com,REJECT

IP-CIDR,124.192.153.42/32,REJECT,no-resolve
IP-CIDR,27.221.89.128/28,REJECT,no-resolve
IP-CIDR,60.211.171.128/29,REJECT,no-resolve
IP-CIDR,60.211.211.1/32,REJECT,no-resolve
IP-CIDR,112.13.64.0/22,REJECT,no-resolve
IP-CIDR,112.253.36.0/24,REJECT,no-resolve
IP-CIDR,117.139.16.0/22,REJECT,no-resolve
IP-CIDR,119.188.43.61/32,REJECT,no-resolve
IP-CIDR,119.188.172.192/28,REJECT,no-resolve
IP-CIDR,119.188.173.0/27,REJECT,no-resolve
IP-CIDR,123.130.122.128/28,REJECT,no-resolve
IP-CIDR,157.122.96.23/32,REJECT,no-resolve
IP-CIDR,183.221.244.0/22,REJECT,no-resolve

// Hunan TV
DOMAIN-SUFFIX,click.hunantv.com,REJECT
DOMAIN-SUFFIX,da.mgtv.com,REJECT
DOMAIN-SUFFIX,da.hunantv.com,REJECT
DOMAIN-SUFFIX,res.hunantv.com,REJECT

// Youku
DOMAIN-SUFFIX,actives.youku.com,REJECT
DOMAIN-SUFFIX,ad.api.3g.youku.com,REJECT
DOMAIN-SUFFIX,ad.api.mobile.youku.com,REJECT
DOMAIN-SUFFIX,ad.mobile.youku.com,REJECT
DOMAIN-SUFFIX,a-dxk.play.api.3g.youku.com,REJECT
DOMAIN-SUFFIX,b.smartvideo.youku.com,REJECT
DOMAIN-SUFFIX,c.yes.youku.com,REJECT
DOMAIN-SUFFIX,das.api.youku.com,REJECT
DOMAIN-SUFFIX,das.mobile.youku.com,REJECT
DOMAIN-SUFFIX,dev-push.m.youku.com,REJECT
DOMAIN-SUFFIX,dl.g.youku.com,REJECT
DOMAIN-SUFFIX,dmapp.youku.com,REJECT
DOMAIN-SUFFIX,e.stat.ykimg.com,REJECT
DOMAIN-SUFFIX,gamex.mobile.youku.com,REJECT
DOMAIN-SUFFIX,hudong.pl.youku.com,REJECT
DOMAIN-SUFFIX,huodong.pl.youku.com,REJECT
DOMAIN-SUFFIX,huodong.vip.youku.com,REJECT
DOMAIN-SUFFIX,hz.youku.com,REJECT
DOMAIN-SUFFIX,iyes.youku.com,REJECT
DOMAIN-SUFFIX,l.ykimg.com,REJECT
DOMAIN-SUFFIX,lstat.youku.com,REJECT
DOMAIN-SUFFIX,mobilemsg.youku.com,REJECT
DOMAIN-SUFFIX,msg.youku.com,REJECT
DOMAIN-SUFFIX,myes.youku.com,REJECT
DOMAIN-SUFFIX,p.l.youku.com,REJECT
DOMAIN-SUFFIX,passport-log.youku.com,REJECT
DOMAIN-SUFFIX,p-log.ykimg.com,REJECT
DOMAIN-SUFFIX,push.m.youku.com,REJECT
DOMAIN-SUFFIX,r.l.youku.com,REJECT
DOMAIN-SUFFIX,s.p.youku.com,REJECT
DOMAIN-SUFFIX,sdk.m.youku.com,REJECT
DOMAIN-SUFFIX,stat.youku.com,REJECT
DOMAIN-SUFFIX,store.tv.api.3g.youku.com,REJECT
DOMAIN-SUFFIX,store.xl.api.3g.youku.com,REJECT
DOMAIN-SUFFIX,tdrec.youku.com,REJECT
DOMAIN-SUFFIX,test.ott.youku.com,REJECT
DOMAIN-SUFFIX,v.l.youku.com,REJECT
DOMAIN-SUFFIX,val.api.youku.com,REJECT
DOMAIN-SUFFIX,wan.youku.com,REJECT
DOMAIN-SUFFIX,ykatr.youku.com,REJECT
DOMAIN-SUFFIX,ykrec.youku.com,REJECT

IP-CIDR,117.177.248.17/32,REJECT,no-resolve
IP-CIDR,117.177.248.41/32,REJECT,no-resolve
IP-CIDR,223.87.176.139/32,REJECT,no-resolve
IP-CIDR,223.87.176.176/32,REJECT,no-resolve
IP-CIDR,223.87.177.180/32,REJECT,no-resolve
IP-CIDR,223.87.177.182/32,REJECT,no-resolve
IP-CIDR,223.87.177.184/32,REJECT,no-resolve
IP-CIDR,223.87.177.43/32,REJECT,no-resolve
IP-CIDR,223.87.177.47/32,REJECT,no-resolve
IP-CIDR,223.87.177.80/32,REJECT,no-resolve
IP-CIDR,223.87.182.101/32,REJECT,no-resolve
IP-CIDR,223.87.182.102/32,REJECT,no-resolve
IP-CIDR,223.87.182.11/32,REJECT,no-resolve
IP-CIDR,223.87.182.52/32,REJECT,no-resolve

// Letv
DOMAIN-SUFFIX,api.game.letvstore.com,REJECT
DOMAIN-SUFFIX,ark.letv.com,REJECT
DOMAIN-SUFFIX,dc.letv.com,REJECT
DOMAIN-SUFFIX,fz.letv.com,REJECT
DOMAIN-SUFFIX,g3.letv.com,REJECT
DOMAIN-SUFFIX,minisite.letv.com,REJECT
DOMAIN-SUFFIX,msg.m.letv.com,REJECT
DOMAIN-SUFFIX,n.mark.letv.com,REJECT
DOMAIN-SUFFIX,pro.hoye.letv.com,REJECT
DOMAIN-SUFFIX,pro.letv.com,REJECT
DOMAIN-SUFFIX,stat.letv.com,REJECT
DOMAIN-SUFFIX,static.app.m.letv.com,REJECT
DOMAIN-SUFFIX,webp2p.letv.com,REJECT

// Youtube
DOMAIN-SUFFIX,ads.youtube.com,REJECT
DOMAIN-SUFFIX,azabu-u.ac.jp,REJECT
DOMAIN-SUFFIX,couchcoaster.jp,REJECT
DOMAIN-SUFFIX,delivery.dmkt-sp.jp,REJECT
DOMAIN-SUFFIX,ehg-youtube.hitbox.com,REJECT
DOMAIN-SUFFIX,m-78.jp,REJECT
DOMAIN-SUFFIX,nichibenren.or.jp,REJECT
DOMAIN-SUFFIX,nicorette.co.kr,REJECT
DOMAIN-SUFFIX,youtube.112.2o7.net,REJECT

// Sohu
DOMAIN-SUFFIX,adnet.sohu.com,REJECT
DOMAIN-SUFFIX,epro.sogou.com,REJECT
DOMAIN-SUFFIX,go.sohu.com,REJECT
DOMAIN-SUFFIX,golden1.sogou.com,REJECT
DOMAIN-SUFFIX,inte.sogou.com,REJECT
DOMAIN-SUFFIX,inte.sogoucdn.com,REJECT
DOMAIN-SUFFIX,lu.sogoucdn.com,REJECT
DOMAIN-SUFFIX,theta.sogoucdn.com,REJECT
DOMAIN-SUFFIX,uranus.sogou.com,REJECT

// PPTV
DOMAIN-SUFFIX,asimgs.pplive.cn,REJECT
DOMAIN-SUFFIX,de.as.pptv.com,REJECT
DOMAIN-SUFFIX,jp.as.pptv.com,REJECT
DOMAIN-SUFFIX,pp2.pptv.com,REJECT
DOMAIN-SUFFIX,stat.pptv.com,REJECT
DOMAIN-SUFFIX,afp.pplive.com,REJECT

// Site
DOMAIN-SUFFIX,deliver.ifeng.com,REJECT
DOMAIN-SUFFIX,hxjs.tool.hexun.com,REJECT
DOMAIN-SUFFIX,hxsame.hexun.com,REJECT
DOMAIN-SUFFIX,itv.hexun.com,REJECT

// Vod
DOMAIN-SUFFIX,ad.cmvideo.cn,REJECT
DOMAIN-SUFFIX,atm.cp31.ott.cibntv.net,REJECT
DOMAIN-SUFFIX,aty.cp45.ott.cibntv.net,REJECT
DOMAIN-SUFFIX,aty.sohu.com,REJECT
DOMAIN-SUFFIX,cpm.cm.kankan.com,REJECT
DOMAIN-SUFFIX,float.kankan.com,REJECT
DOMAIN-SUFFIX,houyi.baofeng.net,REJECT
DOMAIN-SUFFIX,iadctest.qwapi.com,REJECT
DOMAIN-SUFFIX,log.moviebox.baofeng.com,REJECT
DOMAIN-SUFFIX,logger.baofeng.com,REJECT

// Other
DOMAIN-SUFFIX,ad.video.51togic.com,REJECT
DOMAIN-SUFFIX,ads.cdn.tvb.com,REJECT
DOMAIN-SUFFIX,biz5.kankan.com,REJECT
DOMAIN-SUFFIX,c.algovid.com,REJECT
DOMAIN-SUFFIX,cms.laifeng.com,REJECT
DOMAIN-SUFFIX,da.mmarket.com,REJECT
DOMAIN-SUFFIX,data.vod.itc.cn,REJECT
DOMAIN-SUFFIX,dotcounter.douyutv.com,REJECT
DOMAIN-SUFFIX,g.uusee.com,REJECT
DOMAIN-SUFFIX,game.pps.tv,REJECT
DOMAIN-SUFFIX,gcdn.2mdn.net,REJECT
DOMAIN-SUFFIX,gentags.net,REJECT
DOMAIN-SUFFIX,gg.jtertp.com,REJECT
DOMAIN-SUFFIX,gug.ku6cdn.com,REJECT
DOMAIN-SUFFIX,hp.smiler-ad.com,REJECT
DOMAIN-SUFFIX,kooyum.com,REJECT
DOMAIN-SUFFIX,ld.kuaigames.com,REJECT
DOMAIN-SUFFIX,logstat.t.sfht.com,REJECT
DOMAIN-SUFFIX,match.rtbidder.net,REJECT
DOMAIN-SUFFIX,mixer.cupid.ptqy.gitv.tv,REJECT
DOMAIN-SUFFIX,msg.c002.ottcn.com,REJECT
DOMAIN-SUFFIX,msga.ptqy.gitv.tv,REJECT
DOMAIN-SUFFIX,njwxh.com,REJECT
DOMAIN-SUFFIX,nl.rcd.ptqy.gitv.tv,REJECT
DOMAIN-SUFFIX,n-st.vip.com,REJECT
DOMAIN-SUFFIX,pb.bi.gitv.tv,REJECT
DOMAIN-SUFFIX,pop.uusee.com,REJECT
DOMAIN-SUFFIX,pq.stat.ku6.com,REJECT
DOMAIN-SUFFIX,rd.kuaigames.com,REJECT
DOMAIN-SUFFIX,shizen-no-megumi.com,REJECT
DOMAIN-SUFFIX,shrek.6.cn,REJECT
DOMAIN-SUFFIX,simba.6.cn,REJECT
DOMAIN-SUFFIX,st.vq.ku6.cn,REJECT
DOMAIN-SUFFIX,statcounter.com,REJECT
DOMAIN-SUFFIX,static.duoshuo.com,REJECT
DOMAIN-SUFFIX,static.g.ppstream.com,REJECT
DOMAIN-SUFFIX,static.ku6.com,REJECT
DOMAIN-SUFFIX,static8.pmadx.com,REJECT
DOMAIN-SUFFIX,store.ptqy.gitv.tv,REJECT
DOMAIN-SUFFIX,t7z.cupid.ptqy.gitv.tv,REJECT
DOMAIN-SUFFIX,traffic.uusee.com,REJECT
DOMAIN-SUFFIX,union.6.cn,REJECT
DOMAIN-SUFFIX,wa.gtimg.com,REJECT
DOMAIN-SUFFIX,bfshan.cn,REJECT



# REJECT

// Client
PROCESS-NAME,Jietu,REJECT

// 163
DOMAIN-SUFFIX,a.youdao.com,REJECT
DOMAIN-SUFFIX,ad.yixin.im,REJECT
DOMAIN-SUFFIX,adgeo.163.com,REJECT
DOMAIN-SUFFIX,android.push.126.net,REJECT
DOMAIN-SUFFIX,b.bst.126.net,REJECT
DOMAIN-SUFFIX,b.clkservice.youdao.com,REJECT
DOMAIN-SUFFIX,bobo.163.com,REJECT
DOMAIN-SUFFIX,c.youdao.com,REJECT
DOMAIN-SUFFIX,clkservice.mail.youdao.com,REJECT
DOMAIN-SUFFIX,clkservice.union.youdao.com,REJECT
DOMAIN-SUFFIX,clkservice.youdao.com,REJECT
DOMAIN-SUFFIX,clkservice2.dict.youdao.com,REJECT
DOMAIN-SUFFIX,conv.youdao.com,REJECT
DOMAIN-SUFFIX,count.mail.163.com,REJECT
DOMAIN-SUFFIX,crashlytics.163.com,REJECT
DOMAIN-SUFFIX,d.clkservice.youdao.com,REJECT
DOMAIN-SUFFIX,dsp.youdao.com,REJECT
DOMAIN-SUFFIX,dsp-impr.youdao.com,REJECT
DOMAIN-SUFFIX,dsp-impr2.youdao.com,REJECT
DOMAIN-SUFFIX,e-p4p.163.com,REJECT
DOMAIN-SUFFIX,fa.163.com,REJECT
DOMAIN-SUFFIX,g.163.com,REJECT
DOMAIN-SUFFIX,g1.163.com,REJECT
DOMAIN-SUFFIX,gb.corp.163.com,REJECT
DOMAIN-SUFFIX,gorgon.youdao.com,REJECT
DOMAIN-SUFFIX,haitaoad.nosdn.127.net,REJECT
DOMAIN-SUFFIX,i.clkservice.youdao.com,REJECT
DOMAIN-SUFFIX,iad.g.163.com,REJECT
DOMAIN-SUFFIX,img1.126.net,REJECT
DOMAIN-SUFFIX,img2.126.net,REJECT
DOMAIN-SUFFIX,impservice.chnl.youdao.com,REJECT
DOMAIN-SUFFIX,impservice.dict.youdao.com,REJECT
DOMAIN-SUFFIX,impservice.dictapp.youdao.com,REJECT
DOMAIN-SUFFIX,impservice.dictvista.youdao.com,REJECT
DOMAIN-SUFFIX,impservice.dictweb.youdao.com,REJECT
DOMAIN-SUFFIX,impservice.dictword.youdao.com,REJECT
DOMAIN-SUFFIX,impservice.mail.youdao.com,REJECT
DOMAIN-SUFFIX,impservice.union.youdao.com,REJECT
DOMAIN-SUFFIX,impservice.youdao.com,REJECT
DOMAIN-SUFFIX,impservice2.youdao.com,REJECT
DOMAIN-SUFFIX,impservicetest.dictapp.youdao.com,REJECT
DOMAIN-SUFFIX,impservice-test.dictapp.youdao.com,REJECT
DOMAIN-SUFFIX,ir.mail.126.com,REJECT
DOMAIN-SUFFIX,ir.mail.163.com,REJECT
DOMAIN-SUFFIX,ir.mail.yeah.net,REJECT
DOMAIN-SUFFIX,irpmt.mail.163.com,REJECT
DOMAIN-SUFFIX,m.clkservice.youdao.com,REJECT
DOMAIN-SUFFIX,mimg.126.net,REJECT
DOMAIN-SUFFIX,mr.da.netease.com,REJECT
DOMAIN-SUFFIX,n.3g.163.com,REJECT
DOMAIN-SUFFIX,nc004x.corp.youdao.com,REJECT
DOMAIN-SUFFIX,nc045x.corp.youdao.com,REJECT
DOMAIN-SUFFIX,news.push.126.net,REJECT
DOMAIN-SUFFIX,nex.163.com,REJECT
DOMAIN-SUFFIX,oimagea2.ydstatic.com,REJECT
DOMAIN-SUFFIX,p.clkservice.youdao.com,REJECT
DOMAIN-SUFFIX,pagechoice.net,REJECT
DOMAIN-SUFFIX,popme.163.com,REJECT
DOMAIN-SUFFIX,pr.da.netease.com,REJECT
DOMAIN-SUFFIX,prom.gome.com.cn,REJECT
DOMAIN-SUFFIX,push.126.net,REJECT
DOMAIN-SUFFIX,push.yuedu.163.com,REJECT
DOMAIN-SUFFIX,qt002x.corp.youdao.com,REJECT
DOMAIN-SUFFIX,r.mail.163.com,REJECT
DOMAIN-SUFFIX,rd.da.netease.com,REJECT
DOMAIN-SUFFIX,rec.g.163.com,REJECT
DOMAIN-SUFFIX,rlogs.youdao.com,REJECT
DOMAIN-SUFFIX,s.clkservice.youdao.com,REJECT
DOMAIN-SUFFIX,shared.youdao.com,REJECT
DOMAIN-SUFFIX,stat.ws.126.net,REJECT
DOMAIN-SUFFIX,static.flv.uuzuonline.com,REJECT
DOMAIN-SUFFIX,statis.push.netease.com,REJECT
DOMAIN-SUFFIX,tb060x.corp.youdao.com,REJECT
DOMAIN-SUFFIX,tb104x.corp.youdao.com,REJECT
DOMAIN-SUFFIX,union.youdao.com,REJECT
DOMAIN-SUFFIX,wanproxy.127.net,REJECT
DOMAIN-SUFFIX,wr.da.netease.com,REJECT
DOMAIN-SUFFIX,ydpushserver.youdao.com,REJECT

// 10000
DOMAIN-SUFFIX,114so.cn,REJECT
DOMAIN-SUFFIX,cferw.com,REJECT
DOMAIN-SUFFIX,omega7o.com,REJECT
DOMAIN-SUFFIX,popupad.cn,REJECT
DOMAIN-SUFFIX,quanliyouxi.cn,REJECT
DOMAIN-SUFFIX,xxguan.cn,REJECT
DOMAIN-SUFFIX,yunanfuwuqi.com,REJECT
DOMAIN-SUFFIX,zhiong.net,REJECT

// 10086
DOMAIN-SUFFIX,hivedata.cc,REJECT
DOMAIN-SUFFIX,navi.gd.chinamobile.com,REJECT

// 17173
DOMAIN-SUFFIX,cvda.17173.com,REJECT
DOMAIN-SUFFIX,imgapp.yeyou.com,REJECT
DOMAIN-SUFFIX,log1.17173.com,REJECT
DOMAIN-SUFFIX,s.17173cdn.com,REJECT
DOMAIN-SUFFIX,ue.yeyoucdn.com,REJECT
DOMAIN-SUFFIX,vda.17173.com,REJECT

// 178
DOMAIN-SUFFIX,att.stargame.com,REJECT
DOMAIN-SUFFIX,gg.stargame.com,REJECT

// 2345
DOMAIN-SUFFIX,dl.2345.com,REJECT
DOMAIN-SUFFIX,download.2345.com,REJECT
DOMAIN-SUFFIX,g.wan.2345.com,REJECT
DOMAIN-SUFFIX,houtai.2345.com,REJECT
DOMAIN-SUFFIX,jifen.2345.com,REJECT
DOMAIN-SUFFIX,jifendownload.2345.cn,REJECT
DOMAIN-SUFFIX,minipage.2345.com,REJECT
DOMAIN-SUFFIX,tg.jifen.2345.com,REJECT
DOMAIN-SUFFIX,update.minipage.2345.com,REJECT
DOMAIN-SUFFIX,zhushou.2345.com,REJECT

// 360
DOMAIN-SUFFIX,3600.com,REJECT
DOMAIN-SUFFIX,ad.dev.360.cn,REJECT
DOMAIN-SUFFIX,adapi.shouji.360.cn,REJECT
DOMAIN-SUFFIX,api.shuaji.360.cn,REJECT
DOMAIN-SUFFIX,appjiagu.com,REJECT
DOMAIN-SUFFIX,cpull.360.cn,REJECT
DOMAIN-SUFFIX,dev.tg.wan.360.cn,REJECT
DOMAIN-SUFFIX,display.360totalsecurity.com,REJECT
DOMAIN-SUFFIX,dl.360safe.com,REJECT
DOMAIN-SUFFIX,down.360.cn,REJECT
DOMAIN-SUFFIX,down.360safe.com,REJECT
DOMAIN-SUFFIX,g.sdk.look.360.cn,REJECT
DOMAIN-SUFFIX,gamebox.360.cn,REJECT
DOMAIN-SUFFIX,h5.mse.360.cn,REJECT
DOMAIN-SUFFIX,hot.m.shouji.360tpcdn.com,REJECT
DOMAIN-SUFFIX,hs.qhupdate.com,REJECT
DOMAIN-SUFFIX,huid.ad.360.cn,REJECT
DOMAIN-SUFFIX,huodong.ios.shouji.360.cn,REJECT
DOMAIN-SUFFIX,ini.update.360safe.com,REJECT
DOMAIN-SUFFIX,inst.360safe.com,REJECT
DOMAIN-SUFFIX,jiagu.360.cn,REJECT
DOMAIN-SUFFIX,kuaikan.netmon.360safe.com,REJECT
DOMAIN-SUFFIX,leak.360.cn,REJECT
DOMAIN-SUFFIX,mbrowser.news.haosou.com,REJECT
DOMAIN-SUFFIX,mbrowser.news.so.com,REJECT
DOMAIN-SUFFIX,mbs.hao.360.cn,REJECT
DOMAIN-SUFFIX,msoftdl.360.cn,REJECT
DOMAIN-SUFFIX,openbox.mobilem.360.cn,REJECT
DOMAIN-SUFFIX,pdown.stat.360safe.com,REJECT
DOMAIN-SUFFIX,ps.dev.360.cn,REJECT
DOMAIN-SUFFIX,pub.se.360.cn,REJECT
DOMAIN-SUFFIX,rd.wan.360.cn,REJECT
DOMAIN-SUFFIX,s.360.cn,REJECT
DOMAIN-SUFFIX,s.qhupdate.com,REJECT
DOMAIN-SUFFIX,s.union.360.cn,REJECT
DOMAIN-SUFFIX,sdk.look.360.cn,REJECT
DOMAIN-SUFFIX,sh.qihoo.com,REJECT
DOMAIN-SUFFIX,soft.data.weather.360.cn,REJECT
DOMAIN-SUFFIX,stat.360safe.com,REJECT
DOMAIN-SUFFIX,stat.m.360.cn,REJECT
DOMAIN-SUFFIX,stat.sd.360.cn,REJECT
DOMAIN-SUFFIX,static.ts.360.com,REJECT
DOMAIN-SUFFIX,tf.360.cn,REJECT
DOMAIN-SUFFIX,top.h.qhimg.com,REJECT
DOMAIN-SUFFIX,update.360safe.com,REJECT

// 58
DOMAIN-SUFFIX,58.xgo.com.cn,REJECT
DOMAIN-SUFFIX,brandshow.58.com,REJECT
DOMAIN-SUFFIX,imp.xgo.com.cn,REJECT
DOMAIN-SUFFIX,jing.58.com,REJECT
DOMAIN-SUFFIX,jump.luna.58.com,REJECT
DOMAIN-SUFFIX,stat.xgo.com.cn,REJECT
DOMAIN-SUFFIX,track.58.com,REJECT

// Adobe
DOMAIN-SUFFIX,3dns-2.adobe.com,REJECT
DOMAIN-SUFFIX,3dns-3.adobe.com,REJECT
DOMAIN-SUFFIX,activate.adobe.com,REJECT
DOMAIN-SUFFIX,activate.wip3.adobe.com,REJECT
DOMAIN-SUFFIX,activate-sea.adobe.com,REJECT
DOMAIN-SUFFIX,activate-sjc0.adobe.com,REJECT
DOMAIN-SUFFIX,adobe-dns.adobe.com,REJECT
DOMAIN-SUFFIX,adobe-dns-2.adobe.com,REJECT
DOMAIN-SUFFIX,adobe-dns-3.adobe.com,REJECT
DOMAIN-SUFFIX,ereg.adobe.com,REJECT
DOMAIN-SUFFIX,ereg.wip3.adobe.com,REJECT
DOMAIN-SUFFIX,hl2rcv.adobe.com,REJECT
DOMAIN-SUFFIX,hlrcv.stage.adobe.com,REJECT
DOMAIN-SUFFIX,lm.licenses.adobe.com,REJECT
DOMAIN-SUFFIX,lmlicenses.wip4.adobe.com,REJECT
DOMAIN-SUFFIX,na1r.services.adobe.com,REJECT
DOMAIN-SUFFIX,na2m-pr.licenses.adobe.com,REJECT
DOMAIN-SUFFIX,practivate.adobe.com,REJECT
DOMAIN-SUFFIX,wip3.adobe.com,REJECT
DOMAIN-SUFFIX,wwis-dubc1-vip60.adobe.com,REJECT

// Ali
DOMAIN-SUFFIX,a.alimama.cn,REJECT
DOMAIN-SUFFIX,acjs.aliyun.com,REJECT
DOMAIN-SUFFIX,acookie.alimama.com,REJECT
DOMAIN-SUFFIX,acs4baichuan.m.taobao.com,REJECT
DOMAIN-SUFFIX,adash.m.taobao.com,REJECT
DOMAIN-SUFFIX,adash.man.aliyuncs.com,REJECT
DOMAIN-SUFFIX,adashbc.m.taobao.com,REJECT
DOMAIN-SUFFIX,adashbc.ut.taobao.com,REJECT
DOMAIN-SUFFIX,adashx.m.taobao.com,REJECT
DOMAIN-SUFFIX,adashxgc.ut.taobao.com,REJECT
DOMAIN-SUFFIX,aecpm.alicdn.com,REJECT
DOMAIN-SUFFIX,afp.alicdn.com,REJECT
DOMAIN-SUFFIX,afpeng.alimama.com,REJECT
DOMAIN-SUFFIX,afpmm.alicdn.com,REJECT
DOMAIN-SUFFIX,afpssp.alimama.com,REJECT
DOMAIN-SUFFIX,afptrack.alimama.com,REJECT
DOMAIN-SUFFIX,agoodm.m.taobao.com,REJECT
DOMAIN-SUFFIX,ai.m.taobao.com,REJECT
DOMAIN-SUFFIX,ai.taobao.com,REJECT
DOMAIN-SUFFIX,alimama.alicdn.com,REJECT
DOMAIN-SUFFIX,alipaylog.com,REJECT
DOMAIN-SUFFIX,api.wapa.taobao.com,REJECT
DOMAIN-SUFFIX,api.waptest.taobao.com,REJECT
DOMAIN-SUFFIX,appdownload.alicdn.com,REJECT
DOMAIN-SUFFIX,asearch.alicdn.com,REJECT
DOMAIN-SUFFIX,banner.alimama.com,REJECT
DOMAIN-SUFFIX,bm.alimama.cn,REJECT
DOMAIN-SUFFIX,bmvip.alimama.cn,REJECT
DOMAIN-SUFFIX,c.alimama.com,REJECT
DOMAIN-SUFFIX,c-adash.m.taobao.com,REJECT
DOMAIN-SUFFIX,cb.alimama.cn,REJECT
DOMAIN-SUFFIX,cdn-ads.oss-cn-shanghai.aliyuncs.com,REJECT
DOMAIN-SUFFIX,cpc.click.alimama.com,REJECT
DOMAIN-SUFFIX,dmtracking.alibaba.com,REJECT
DOMAIN-SUFFIX,dmtracking2.alibaba.com,REJECT
DOMAIN-SUFFIX,dongfeng.alicdn.com,REJECT
DOMAIN-SUFFIX,dressimage.img-cn-beijing.aliyuncs.com,REJECT
DOMAIN-SUFFIX,fs-uc-nearme-com-cn.oss-cn-hangzhou.aliyuncs.com,REJECT
DOMAIN-SUFFIX,gen.alicdn.com,REJECT
DOMAIN-SUFFIX,gma.alicdn.com,REJECT
DOMAIN-SUFFIX,hydra.alibaba.com,REJECT
DOMAIN-SUFFIX,img.alimama.cn,REJECT
DOMAIN-SUFFIX,img-dsp.oss-cn-beijing.aliyuncs.com,REJECT
DOMAIN-SUFFIX,ipinyou.com,REJECT
DOMAIN-SUFFIX,jiayi1.oss-cn-shanghai.aliyuncs.com,REJECT
DOMAIN-SUFFIX,jsadsdisplay.cn-beijing.log.aliyuncs.com,REJECT
DOMAIN-SUFFIX,m.simaba.taobao.com,REJECT
DOMAIN-SUFFIX,m-adash.m.taobao.com,REJECT
DOMAIN-SUFFIX,mct01.com,REJECT
DOMAIN-SUFFIX,osfota.cdn.aliyun.com,REJECT
DOMAIN-SUFFIX,p.alimama.com,REJECT
DOMAIN-SUFFIX,p4psearch.china.alibaba.com,REJECT
DOMAIN-SUFFIX,pics.taobaocdn.com,REJECT
DOMAIN-SUFFIX,pindao.huoban.taobao.com,REJECT
DOMAIN-SUFFIX,re.m.taobao.com,REJECT
DOMAIN-SUFFIX,re.taobao.com,REJECT
DOMAIN-SUFFIX,redirect.simba.taobao.com,REJECT
DOMAIN-SUFFIX,rj.m.taobao.co,REJECT
DOMAIN-SUFFIX,rj.m.taobao.com,REJECT
DOMAIN-SUFFIX,sdkinit.taobao.com,REJECT
DOMAIN-SUFFIX,show.re.taobao.com,REJECT
DOMAIN-SUFFIX,simaba.taobao.com,REJECT
DOMAIN-SUFFIX,simba.m.taobao.com,REJECT
DOMAIN-SUFFIX,simba.taobao.com,REJECT
DOMAIN-SUFFIX,static.alimama.com,REJECT
DOMAIN-SUFFIX,strip.alicdn.com,REJECT
DOMAIN-SUFFIX,strip.taobaocdn.com,REJECT
DOMAIN-SUFFIX,t.alimama.com,REJECT
DOMAIN-SUFFIX,temai.taobao.com,REJECT
DOMAIN-SUFFIX,tns.simba.taobao.com,REJECT
DOMAIN-SUFFIX,ttjx-online.cn-hangzhou.log.aliyuncs.com,REJECT
DOMAIN-SUFFIX,tunion-api.m.taobao.com,REJECT
DOMAIN-SUFFIX,tw.alimama.cn,REJECT
DOMAIN-SUFFIX,unitacs.m.taobao.com,REJECT
DOMAIN-SUFFIX,userimg.qunar.com,REJECT
DOMAIN-SUFFIX,w.m.taobao.com,REJECT
DOMAIN-SUFFIX,wrating.com,REJECT
DOMAIN-SUFFIX,xz-development.oss-cn-beijing.aliyuncs.com,REJECT
DOMAIN-SUFFIX,yiliao.hupan.com,REJECT

// Apple
DOMAIN-SUFFIX,adserver.unityads.unity3d.com,REJECT

// Auto home
DOMAIN-SUFFIX,33.autohome.com.cn,REJECT
DOMAIN-SUFFIX,adm0.autoimg.cn,REJECT
DOMAIN-SUFFIX,adm1.autoimg.cn,REJECT
DOMAIN-SUFFIX,adm2.autoimg.cn,REJECT
DOMAIN-SUFFIX,adm3.autoimg.cn,REJECT
DOMAIN-SUFFIX,al.autohome.com.cn,REJECT
DOMAIN-SUFFIX,applogapi.autohome.com.cn,REJECT
DOMAIN-SUFFIX,c.autohome.com.cn,REJECT
DOMAIN-SUFFIX,cmx.autohome.com.cn,REJECT
DOMAIN-SUFFIX,dspmnt.autohome.com.cn,REJECT
DOMAIN-SUFFIX,pcd.autohome.com.cn,REJECT
DOMAIN-SUFFIX,push.app.autohome.com.cn,REJECT
DOMAIN-SUFFIX,pv.alert.autohome.com.cn,REJECT
DOMAIN-SUFFIX,pvx.autohome.com.cn,REJECT
DOMAIN-SUFFIX,rd.autohome.com.cn,REJECT
DOMAIN-SUFFIX,rdx.autohome.com.cn,REJECT
DOMAIN-SUFFIX,stats.autohome.com.cn,REJECT

// Baidu
DOMAIN-SUFFIX,a.baidu.com,REJECT
DOMAIN-SUFFIX,ad.player.baidu.com,REJECT
DOMAIN-SUFFIX,adm.baidu.com,REJECT
DOMAIN-SUFFIX,adscdn.baidu.com,REJECT
DOMAIN-SUFFIX,afd.baidu.com,REJECT
DOMAIN-SUFFIX,als.baidu.com,REJECT
DOMAIN-SUFFIX,anquan.baidu.com,REJECT
DOMAIN-SUFFIX,antivirus.baidu.com,REJECT
DOMAIN-SUFFIX,api.cpu.baidu.com,REJECT
DOMAIN-SUFFIX,api.share.baidu.com,REJECT
DOMAIN-SUFFIX,api.tuisong.baidu.com,REJECT
DOMAIN-SUFFIX,appc.baidu.com,REJECT
DOMAIN-SUFFIX,baichuan.baidu.com,REJECT
DOMAIN-SUFFIX,baidutv.baidu.com,REJECT
DOMAIN-SUFFIX,banlv.baidu.com,REJECT
DOMAIN-SUFFIX,bar.baidu.com,REJECT
DOMAIN-SUFFIX,bce.baidu.com,REJECT
DOMAIN-SUFFIX,bdimg.share.baidu.com,REJECT
DOMAIN-SUFFIX,bdplus.baidu.com,REJECT
DOMAIN-SUFFIX,btlaunch.baidu.com,REJECT
DOMAIN-SUFFIX,c.baidu.com,REJECT
DOMAIN-SUFFIX,cb.baidu.com,REJECT
DOMAIN-SUFFIX,cbjs.baidu.com,REJECT
DOMAIN-SUFFIX,cjhq.baidu.com,REJECT
DOMAIN-SUFFIX,cleaner.baidu.com,REJECT
DOMAIN-SUFFIX,click.bes.baidu.com,REJECT
DOMAIN-SUFFIX,click.hm.baidu.com,REJECT
DOMAIN-SUFFIX,cm.baichuan.baidu.com,REJECT
DOMAIN-SUFFIX,cm.baidu.com,REJECT
DOMAIN-SUFFIX,cm.pos.baidu.com,REJECT
DOMAIN-SUFFIX,cpro.baidu.cn,REJECT
DOMAIN-SUFFIX,cpro.baidu.com,REJECT
DOMAIN-SUFFIX,cpro.baidustatic.com,REJECT
DOMAIN-SUFFIX,cpro.tieba.baidu.com,REJECT
DOMAIN-SUFFIX,cpro.zhidao.baidu.com,REJECT
DOMAIN-SUFFIX,cpro2.baidu.com,REJECT
DOMAIN-SUFFIX,cpro2.baidustatic.com,REJECT
DOMAIN-SUFFIX,cpu.baidu.com,REJECT
DOMAIN-SUFFIX,cpu-admin.baidu.com,REJECT
DOMAIN-SUFFIX,crs.baidu.com,REJECT
DOMAIN-SUFFIX,datax.baidu.com,REJECT
DOMAIN-SUFFIX,dl.client.baidu.com,REJECT
DOMAIN-SUFFIX,dl.ops.baidu.com,REJECT
DOMAIN-SUFFIX,dl1sw.baidu.com,REJECT
DOMAIN-SUFFIX,dl2.bav.baidu.com,REJECT
DOMAIN-SUFFIX,dlsw.baidu.com,REJECT
DOMAIN-SUFFIX,dlsw.br.baidu.com,REJECT
DOMAIN-SUFFIX,dl-vip.bav.baidu.com,REJECT
DOMAIN-SUFFIX,dl-vip.pcfaster.baidu.co.th,REJECT
DOMAIN-SUFFIX,download.bav.baidu.com,REJECT
DOMAIN-SUFFIX,download.sd.baidu.com,REJECT
DOMAIN-SUFFIX,drmcmm.baidu.com,REJECT
DOMAIN-SUFFIX,dup.baidustatic.com,REJECT
DOMAIN-SUFFIX,dxp.baidu.com,REJECT
DOMAIN-SUFFIX,dzl.baidu.com,REJECT
DOMAIN-SUFFIX,e.baidu.com,REJECT
DOMAIN-SUFFIX,eclick.baidu.com,REJECT
DOMAIN-SUFFIX,eiv.baidu.com,REJECT
DOMAIN-SUFFIX,entry.baidu.com,REJECT
DOMAIN-SUFFIX,ers.baidu.com,REJECT
DOMAIN-SUFFIX,f10.baidu.com,REJECT
DOMAIN-SUFFIX,fclick.baidu.com,REJECT
DOMAIN-SUFFIX,feed.baidu.com,REJECT
DOMAIN-SUFFIX,fexclick.baidu.com,REJECT
DOMAIN-SUFFIX,g.baidu.com,REJECT
DOMAIN-SUFFIX,gimg.baidu.com,REJECT
DOMAIN-SUFFIX,guanjia.baidu.com,REJECT
DOMAIN-SUFFIX,hc.baidu.com,REJECT
DOMAIN-SUFFIX,hm.baidu.com,REJECT
DOMAIN-SUFFIX,hmma.baidu.com,REJECT
DOMAIN-SUFFIX,hpd.baidu.com,REJECT
DOMAIN-SUFFIX,idm.bce.baidu.com,REJECT
DOMAIN-SUFFIX,idm-su.baidu.com,REJECT
DOMAIN-SUFFIX,iebar.baidu.com,REJECT
DOMAIN-SUFFIX,ikcode.baidu.com,REJECT
DOMAIN-SUFFIX,j.br.baidu.com,REJECT
DOMAIN-SUFFIX,kstj.baidu.com,REJECT
DOMAIN-SUFFIX,log.music.baidu.com,REJECT
DOMAIN-SUFFIX,m1.baidu.com,REJECT
DOMAIN-SUFFIX,ma.baidu.com,REJECT
DOMAIN-SUFFIX,mobads.baidu.com,REJECT
DOMAIN-SUFFIX,mobads-logs.baidu.com,REJECT
DOMAIN-SUFFIX,mpro.baidu.com,REJECT
DOMAIN-SUFFIX,msite.baidu.com,REJECT
DOMAIN-SUFFIX,neirong.baidu.com,REJECT
DOMAIN-SUFFIX,newvector.map.baidu.com,REJECT
DOMAIN-SUFFIX,nsclick.baidu.com,REJECT
DOMAIN-SUFFIX,nsclickvideo.baidu.com,REJECT
DOMAIN-SUFFIX,offnavi.map.baidu.com,REJECT
DOMAIN-SUFFIX,openrcv.baidu.com,REJECT
DOMAIN-SUFFIX,pc.videoclick.baidu.com,REJECT
DOMAIN-SUFFIX,pos.baidu.com,REJECT
DOMAIN-SUFFIX,ps.map.baidu.com,REJECT
DOMAIN-SUFFIX,push.zhanzhang.baidu.com,REJECT
DOMAIN-SUFFIX,qianclick.baidu.com,REJECT
DOMAIN-SUFFIX,r6.mo.baidu.com,REJECT
DOMAIN-SUFFIX,release.baidu.com,REJECT
DOMAIN-SUFFIX,res.mi.baidu.com,REJECT
DOMAIN-SUFFIX,rigel.baidustatic.com,REJECT
DOMAIN-SUFFIX,river.zhidao.baidu.com,REJECT
DOMAIN-SUFFIX,rj.baidu.com,REJECT
DOMAIN-SUFFIX,rplog.baidu.com,REJECT
DOMAIN-SUFFIX,s.baidu.com,REJECT
DOMAIN-SUFFIX,s.cpro.baidu.com,REJECT
DOMAIN-SUFFIX,sa.tuisong.baidu.com,REJECT
DOMAIN-SUFFIX,sclick.baidu.com,REJECT
DOMAIN-SUFFIX,sestat.baidu.com,REJECT
DOMAIN-SUFFIX,shadu.baidu.com,REJECT
DOMAIN-SUFFIX,share.baidu.com,REJECT
DOMAIN-SUFFIX,snippet.pos.baidu.com,REJECT
DOMAIN-SUFFIX,sobar.baidu.com,REJECT
DOMAIN-SUFFIX,sobartop.baidu.com,REJECT
DOMAIN-SUFFIX,sp0.baidu.com,REJECT
DOMAIN-SUFFIX,spcode.baidu.com,REJECT
DOMAIN-SUFFIX,stat.v.baidu.com,REJECT
DOMAIN-SUFFIX,sv.map.baidu.com,REJECT
DOMAIN-SUFFIX,t10.baidu.com,REJECT
DOMAIN-SUFFIX,t11.baidu.com,REJECT
DOMAIN-SUFFIX,t12.baidu.com,REJECT
DOMAIN-SUFFIX,tk.baidu.com,REJECT
DOMAIN-SUFFIX,tkweb.baidu.com,REJECT
DOMAIN-SUFFIX,tongji.baidu.com,REJECT
DOMAIN-SUFFIX,toolbar.baidu.com,REJECT
DOMAIN-SUFFIX,tracker.baidu.com,REJECT
DOMAIN-SUFFIX,tuijian.baidu.com,REJECT
DOMAIN-SUFFIX,ubmcmm.baidustatic.com,REJECT
DOMAIN-SUFFIX,ucstat.baidu.com,REJECT
DOMAIN-SUFFIX,ulic.baidu.com,REJECT
DOMAIN-SUFFIX,ulog.imap.baidu.com,REJECT
DOMAIN-SUFFIX,union.baidu.com,REJECT
DOMAIN-SUFFIX,unionimage.baidu.com,REJECT
DOMAIN-SUFFIX,utility.baidu.com,REJECT
DOMAIN-SUFFIX,utk.baidu.com,REJECT
DOMAIN-SUFFIX,videopush.baidu.com,REJECT
DOMAIN-SUFFIX,w.gdown.baidu.com,REJECT
DOMAIN-SUFFIX,w.x.baidu.com,REJECT
DOMAIN-SUFFIX,wangmeng.baidu.com,REJECT
DOMAIN-SUFFIX,weishi.baidu.com,REJECT
DOMAIN-SUFFIX,wisepush.video.baidu.com,REJECT
DOMAIN-SUFFIX,wm.baidu.com,REJECT
DOMAIN-SUFFIX,wn.pos.baidu.com,REJECT
DOMAIN-SUFFIX,znsv.baidu.com,REJECT
URL-REGEX,api\d\.tuisong\.baidu\.com,REJECT
URL-REGEX,sa\d\.tuisong\.baidu\.com,REJECT

// Book
DOMAIN-SUFFIX,70e.com,REJECT
DOMAIN-SUFFIX,ad.zhangyue.com,REJECT
DOMAIN-SUFFIX,adm.easou.com,REJECT
DOMAIN-SUFFIX,aishowbger.com,REJECT
DOMAIN-SUFFIX,assets.easou.com,REJECT
DOMAIN-SUFFIX,cj.qidian.com,REJECT
DOMAIN-SUFFIX,drdwy.com,REJECT
DOMAIN-SUFFIX,e.v02u9.cn,REJECT
DOMAIN-SUFFIX,e701.net,REJECT
DOMAIN-SUFFIX,ethod.gzgmjcx.com,REJECT
DOMAIN-SUFFIX,game.qidian.com,REJECT
DOMAIN-SUFFIX,jisucn.com,REJECT
DOMAIN-SUFFIX,jyd.fjzdmy.com,REJECT
DOMAIN-SUFFIX,m.ourlj.com,REJECT
DOMAIN-SUFFIX,m.txtxr.com,REJECT
DOMAIN-SUFFIX,o.if.qidian.com,REJECT
DOMAIN-SUFFIX,p.vq6nsu.cn,REJECT
DOMAIN-SUFFIX,picture.duokan.com,REJECT
DOMAIN-SUFFIX,push.zhangyue.com,REJECT
DOMAIN-SUFFIX,s1.cmfu.com,REJECT
DOMAIN-SUFFIX,sanya1.com,REJECT
DOMAIN-SUFFIX,sc.shayugg.com,REJECT
DOMAIN-SUFFIX,tjlog.easou.com,REJECT
DOMAIN-SUFFIX,tjlog.ps.easou.com,REJECT
DOMAIN-SUFFIX,tongji.qidian.com,REJECT
DOMAIN-SUFFIX,ut2.shuqistat.com,REJECT
DOMAIN-SUFFIX,xgcsr.com,REJECT
DOMAIN-SUFFIX,xjq.jxmqkj.com,REJECT
DOMAIN-SUFFIX,xpe.cxaerp.com,REJECT
DOMAIN-SUFFIX,xyrkl.com,REJECT
DOMAIN-SUFFIX,zhuanfakong.com,REJECT

// Caiyun
DOMAIN-SUFFIX,ad.caiyunapp.com,REJECT

// Dangdang
DOMAIN-SUFFIX,a.dangdang.com,REJECT
DOMAIN-SUFFIX,click.dangdang.com,REJECT
DOMAIN-SUFFIX,schprompt.dangdang.com,REJECT
DOMAIN-SUFFIX,t.dangdang.com,REJECT

// Duomi
DOMAIN-SUFFIX,ad.duomi.com,REJECT
DOMAIN-SUFFIX,boxshows.com,REJECT

// Facebook
DOMAIN-SUFFIX,staticxx.facebook.com,REJECT

// ele
DOMAIN-SUFFIX,app-monitor.ele.me,REJECT
DOMAIN-SUFFIX,client-api.ele.me,REJECT
DOMAIN-SUFFIX,grand.ele.me,REJECT
DOMAIN-SUFFIX,mobile-pubt.ele.me,REJECT
DOMAIN-SUFFIX,newton-api.ele.me,REJECT

// Ganji
DOMAIN-SUFFIX,ad.ganji.com,REJECT
DOMAIN-SUFFIX,click.ganji.com,REJECT
DOMAIN-SUFFIX,ganjituiguang.ganji.com,REJECT
DOMAIN-SUFFIX,sta.ganji.com,REJECT
DOMAIN-SUFFIX,tralog.ganji.com,REJECT

// Google
DOMAIN-KEYWORD,googleads,REJECT
DOMAIN-SUFFIX,ads.google.com,REJECT
DOMAIN-SUFFIX,afd.l.google.com,REJECT
DOMAIN-SUFFIX,doubleclick.com,REJECT
DOMAIN-SUFFIX,doubleclick.net,REJECT
DOMAIN-SUFFIX,googleadservices.com,REJECT
DOMAIN-SUFFIX,googleadsserving.cn,REJECT
DOMAIN-SUFFIX,googlesyndication.com,REJECT
DOMAIN-SUFFIX,googletagmanager.com,REJECT
DOMAIN-SUFFIX,googletakes.com,REJECT
DOMAIN-SUFFIX,mobileads.google.com,REJECT
DOMAIN-SUFFIX,pagead.google.com,REJECT
DOMAIN-SUFFIX,pagead.l.google.com,REJECT
DOMAIN-SUFFIX,pagead-tpc.l.google.com,REJECT

// JD
DOMAIN-SUFFIX,ads.union.jd.com,REJECT
DOMAIN-SUFFIX,c-nfa.jd.com,REJECT
DOMAIN-SUFFIX,cps.360buy.com,REJECT
DOMAIN-SUFFIX,jzt.jd.com,REJECT
DOMAIN-SUFFIX,stat.m.jd.com,REJECT
DOMAIN-SUFFIX,img-x.jd.com,REJECT

// Kugou
DOMAIN-SUFFIX,ads.bssdl.kugou.com,REJECT
DOMAIN-SUFFIX,ads.service.kugou.com,REJECT
DOMAIN-SUFFIX,adserviceretry.kugou.com,REJECT
DOMAIN-SUFFIX,adsfile.bssdlbig.kugou.com,REJECT
DOMAIN-SUFFIX,channel.fanxing.kugou.com,REJECT
DOMAIN-SUFFIX,d.kugou.com,REJECT
DOMAIN-SUFFIX,downmobile.kugou.com,REJECT
DOMAIN-SUFFIX,fanxing.kugou.com,REJECT
DOMAIN-SUFFIX,gad.kugou.com,REJECT
DOMAIN-SUFFIX,game.kugou.com,REJECT
DOMAIN-SUFFIX,gamebox.kugou.com,REJECT
DOMAIN-SUFFIX,gcapi.sy.kugou.com,REJECT
DOMAIN-SUFFIX,gg.kugou.com,REJECT
DOMAIN-SUFFIX,install.kugou.com,REJECT
DOMAIN-SUFFIX,install2.kugou.com,REJECT
DOMAIN-SUFFIX,kgmobilestat.kugou.com,REJECT
DOMAIN-SUFFIX,kuaikaiapp.com,REJECT
DOMAIN-SUFFIX,log.stat.kugou.com,REJECT
DOMAIN-SUFFIX,log.web.kugou.com,REJECT
DOMAIN-SUFFIX,minidcsc.kugou.com,REJECT
DOMAIN-SUFFIX,mo.kugou.com,REJECT
DOMAIN-SUFFIX,mobilelog.kugou.com,REJECT
DOMAIN-SUFFIX,msg.mobile.kugou.com,REJECT
DOMAIN-SUFFIX,mvads.kugou.com,REJECT
DOMAIN-SUFFIX,p.kugou.com,REJECT
DOMAIN-SUFFIX,push.mobile.kugou.com,REJECT
DOMAIN-SUFFIX,rtmonitor.kugou.com,REJECT
DOMAIN-SUFFIX,sdn.kugou.com,REJECT
DOMAIN-SUFFIX,song.fanxing.kugou.com,REJECT
DOMAIN-SUFFIX,tj.kugou.com,REJECT
DOMAIN-SUFFIX,update.mobile.kugou.com,REJECT

// Kuwo
DOMAIN-SUFFIX,deliver.kuwo.cn,REJECT
DOMAIN-SUFFIX,g.koowo.com,REJECT
DOMAIN-SUFFIX,game.kuwo.cn,REJECT
DOMAIN-SUFFIX,kwmsg.kuwo.cn,REJECT
DOMAIN-SUFFIX,log.kuwo.cn,REJECT
DOMAIN-SUFFIX,mfan.iclick.com.cn,REJECT
DOMAIN-SUFFIX,mobilead.kuwo.cn,REJECT
DOMAIN-SUFFIX,msclick2.kuwo.cn,REJECT
DOMAIN-SUFFIX,msphoneclick.kuwo.cn,REJECT
DOMAIN-SUFFIX,updatepage.kuwo.cn,REJECT
DOMAIN-SUFFIX,wa.kuwo.cn,REJECT
DOMAIN-SUFFIX,webstat.kuwo.cn,REJECT

// Laozikanshu/Laozisoushu
DOMAIN-SUFFIX,com-eonsun-owl-user.oss-cn-hangzhou.aliyuncs.com,REJECT
DOMAIN-SUFFIX,pat.farvd.com,REJECT
DOMAIN-SUFFIX,sdk.cferw.com,REJECT

// Meitu
DOMAIN-SUFFIX,a.koudai.com,REJECT
DOMAIN-SUFFIX,corp.meitu.com,REJECT
DOMAIN-SUFFIX,dc.meitustat.com,REJECT
DOMAIN-SUFFIX,gg.meitu.com,REJECT
DOMAIN-SUFFIX,mdc.meitustat.com,REJECT
DOMAIN-SUFFIX,meitubeauty.meitudata.com,REJECT
DOMAIN-SUFFIX,message.meitu.com,REJECT
DOMAIN-SUFFIX,rabbit.meitustat.com,REJECT
DOMAIN-SUFFIX,tuiguang.meitu.com,REJECT
DOMAIN-SUFFIX,xiuxiu.android.dl.meitu.com,REJECT
DOMAIN-SUFFIX,xiuxiu.mobile.meitudata.com,REJECT

// Meizu
DOMAIN-SUFFIX,aider-res.meizu.com,REJECT
DOMAIN-SUFFIX,api-flow.flyme.cn,REJECT
DOMAIN-SUFFIX,api-game.meizu.com,REJECT
DOMAIN-SUFFIX,api-push.meizu.com,REJECT
DOMAIN-SUFFIX,aries.mzres.com,REJECT
DOMAIN-SUFFIX,bro.flyme.cn,REJECT
DOMAIN-SUFFIX,cal.meizu.com,REJECT
DOMAIN-SUFFIX,ebook.res.meizu.com,REJECT
DOMAIN-SUFFIX,game.res.meizu.com,REJECT
DOMAIN-SUFFIX,game-res.meizu.com,REJECT
DOMAIN-SUFFIX,infocenter.meizu.com,REJECT
DOMAIN-SUFFIX,openapi-news.meizu.com,REJECT
DOMAIN-SUFFIX,push.res.meizu.com,REJECT
DOMAIN-SUFFIX,reader.meizu.com,REJECT
DOMAIN-SUFFIX,reader.res.meizu.com,REJECT
DOMAIN-SUFFIX,t-e.flyme.cn,REJECT
DOMAIN-SUFFIX,t-flow.flyme.cn,REJECT
DOMAIN-SUFFIX,tongji.meizu.com,REJECT
DOMAIN-SUFFIX,tongji-res1.meizu.com,REJECT
DOMAIN-SUFFIX,umid.orion.meizu.com,REJECT
DOMAIN-SUFFIX,upush.res.meizu.com,REJECT
DOMAIN-SUFFIX,uxip.meizu.com,REJECT

// Moji
DOMAIN-SUFFIX,ad.api.moji.com,REJECT
DOMAIN-SUFFIX,app.moji001.com,REJECT
DOMAIN-SUFFIX,cdn.moji.com,REJECT
DOMAIN-SUFFIX,cdn.moji002.com,REJECT
DOMAIN-SUFFIX,cdn2.moji002.com,REJECT
DOMAIN-SUFFIX,fds.api.moji.com,REJECT
DOMAIN-SUFFIX,log.moji.com,REJECT
DOMAIN-SUFFIX,stat.moji.com,REJECT
DOMAIN-SUFFIX,ugc.moji001.com,REJECT

// Mop
DOMAIN-SUFFIX,pub.mop.com,REJECT

// Qingting.fm
DOMAIN-SUFFIX,ad.qingting.fm,REJECT
DOMAIN-SUFFIX,admgr.qingting.fm,REJECT
DOMAIN-SUFFIX,dload.qd.qingting.fm,REJECT
DOMAIN-SUFFIX,logger.qingting.fm,REJECT
DOMAIN-SUFFIX,s.qd.qingting.fm,REJECT
DOMAIN-SUFFIX,s.qd.qingtingfm.com,REJECT

// renren
DOMAIN-SUFFIX,ebp.renren.com,REJECT
DOMAIN-SUFFIX,jebe.renren.com,REJECT
DOMAIN-SUFFIX,jebe.xnimg.cn,REJECT

// Sendanywhere
URL-REGEX,http:\/\/notice\.send-anywhere\.com\/banner,REJECT
URL-REGEX,http:\/\/\w+\.cloudfront\.net\/banner,REJECT

// Sina
DOMAIN-SUFFIX,2016.sina.cn,REJECT
DOMAIN-SUFFIX,ad.sina.com.cn,REJECT
DOMAIN-SUFFIX,adbox.sina.com.cn,REJECT
DOMAIN-SUFFIX,adimages.sina.com.hk,REJECT
DOMAIN-SUFFIX,adimg.mobile.sina.cn,REJECT
DOMAIN-SUFFIX,adimg.uve.weibo.com,REJECT
DOMAIN-SUFFIX,adm.leju.sina.com.cn,REJECT
DOMAIN-SUFFIX,ads.sina.com,REJECT
DOMAIN-SUFFIX,alitui.weibo.com,REJECT
DOMAIN-SUFFIX,api.apps.sina.cn,REJECT
DOMAIN-SUFFIX,appgift.sinaapp.com,REJECT
DOMAIN-SUFFIX,appsupdate.sinaapp.com,REJECT
DOMAIN-SUFFIX,atm.sina.com,REJECT
DOMAIN-SUFFIX,beacon.sina.com.cn,REJECT
DOMAIN-SUFFIX,biz.weibo.com,REJECT
DOMAIN-SUFFIX,c.biz.weibo.com,REJECT
DOMAIN-SUFFIX,c.wcpt.biz.weibo.com,REJECT
DOMAIN-SUFFIX,click.uve.mobile.sina.cn,REJECT
DOMAIN-SUFFIX,click.uve.weibo.com,REJECT
DOMAIN-SUFFIX,cm.dmp.sina.cn,REJECT
DOMAIN-SUFFIX,contentrecommend-out.mobile.sina.cn,REJECT
DOMAIN-SUFFIX,count.video.sina.com.cn,REJECT
DOMAIN-SUFFIX,counter.sina.com.cn,REJECT
DOMAIN-SUFFIX,cre.dp.sina.cn,REJECT
DOMAIN-SUFFIX,cre.mix.sina.com.cn,REJECT
DOMAIN-SUFFIX,cre-dp.sina.cn,REJECT
DOMAIN-SUFFIX,d00.sina.com.cn,REJECT
DOMAIN-SUFFIX,dcads.sina.com.cn,REJECT
DOMAIN-SUFFIX,dl.kjava.sina.cn,REJECT
DOMAIN-SUFFIX,dmp.sina.cn,REJECT
DOMAIN-SUFFIX,dp.im.weibo.cn,REJECT
DOMAIN-SUFFIX,game.weibo.cn,REJECT
DOMAIN-SUFFIX,game.weibo.com,REJECT
DOMAIN-SUFFIX,gw5.push.mcp.weibo.cn,REJECT
DOMAIN-SUFFIX,gw6.push.mcp.weibo.cn,REJECT
DOMAIN-SUFFIX,img.adbox.sina.com.cn,REJECT
DOMAIN-SUFFIX,img.amp.ad.sina.com.cn,REJECT
DOMAIN-SUFFIX,int.dpool.sina.com.cn,REJECT
DOMAIN-SUFFIX,interest.mix.sina.com.cn,REJECT
DOMAIN-SUFFIX,log.interest.mix.sina.com.cn,REJECT
DOMAIN-SUFFIX,log.mix.sina.com.cn,REJECT
DOMAIN-SUFFIX,m.beacon.sina.com.cn,REJECT
DOMAIN-SUFFIX,m.game.weibo.cn,REJECT
DOMAIN-SUFFIX,mg.games.sina.com.cn,REJECT
DOMAIN-SUFFIX,motu.p4p.sina.com.cn,REJECT
DOMAIN-SUFFIX,newspush.sinajs.cn,REJECT
DOMAIN-SUFFIX,oascentral.sina.com,REJECT
DOMAIN-SUFFIX,oascentral.sina.com.hk,REJECT
DOMAIN-SUFFIX,p4p.sina.com.cn,REJECT
DOMAIN-SUFFIX,palmnews.sina.cn,REJECT
DOMAIN-SUFFIX,pay.mobile.sina.cn,REJECT
DOMAIN-SUFFIX,pfp.sina.com.cn,REJECT
DOMAIN-SUFFIX,pfpip.sina.com,REJECT
DOMAIN-SUFFIX,promote.biz.weibo.cn,REJECT
DOMAIN-SUFFIX,r.dmp.sina.cn,REJECT
DOMAIN-SUFFIX,rm.sina.com.cn,REJECT
DOMAIN-SUFFIX,rs.sinajs.cn,REJECT
DOMAIN-SUFFIX,s.alitui.weibo.com,REJECT
DOMAIN-SUFFIX,s.img.mix.sina.com.cn,REJECT
DOMAIN-SUFFIX,sax.sina.cn,REJECT
DOMAIN-SUFFIX,sax.sina.com.cn,REJECT
DOMAIN-SUFFIX,saxn.sina.com.cn,REJECT
DOMAIN-SUFFIX,saxs.sina.com.cn,REJECT
DOMAIN-SUFFIX,sbeacon.sina.com.cn,REJECT
DOMAIN-SUFFIX,sdkapp.mobile.sina.cn,REJECT
DOMAIN-SUFFIX,sdkapp.uve.weibo.com,REJECT
DOMAIN-SUFFIX,sdkclick.mobile.sina.cn,REJECT
DOMAIN-SUFFIX,slog.sina.cn,REJECT
DOMAIN-SUFFIX,slog.sina.com.cn,REJECT
DOMAIN-SUFFIX,staticadm.leju.sina.com.cn,REJECT
DOMAIN-SUFFIX,tjs.sjs.sinajs.cn,REJECT
DOMAIN-SUFFIX,trends.mobile.sina.cn,REJECT
DOMAIN-SUFFIX,u1.img.mobile.sina.cn,REJECT
DOMAIN-SUFFIX,wapwbclick.mobile.sina.cn,REJECT
DOMAIN-SUFFIX,wbapp.mobile.sina.cn,REJECT
DOMAIN-SUFFIX,wbapp.uve.weibo.com,REJECT
DOMAIN-SUFFIX,wbclick.mobile.sina.cn,REJECT
DOMAIN-SUFFIX,wbpctips.mobile.sina.cn,REJECT
DOMAIN-SUFFIX,widget.weibo.com,REJECT
DOMAIN-SUFFIX,woocall.sina.com.cn,REJECT
DOMAIN-SUFFIX,zc.biz.weibo.com,REJECT
DOMAIN-SUFFIX,zymo.mps.weibo.com,REJECT

URL-REGEX,ad\d\.sina\.com,REJECT
URL-REGEX,ad\d\.sina\.com.cn,REJECT
URL-REGEX,d\d\.sina\.com\.cn,REJECT
URL-REGEX,d\d\.sinaimg\.cn,REJECT
URL-REGEX,sax\d\.sina\.com\.cn,REJECT

// Sogou
DOMAIN-SUFFIX,123.sogou.com,REJECT
DOMAIN-SUFFIX,adsence.sogou.com,REJECT
DOMAIN-SUFFIX,adstream.123.sogoucdn.com,REJECT
DOMAIN-SUFFIX,amfi.gou.sogou.com,REJECT
DOMAIN-SUFFIX,bazinga.mse.sogou.com,REJECT
DOMAIN-SUFFIX,brand.sogou.com,REJECT
DOMAIN-SUFFIX,bsiet.husky.sogou.com,REJECT
DOMAIN-SUFFIX,config.push.sogou.com,REJECT
DOMAIN-SUFFIX,cpc.sogou.com,REJECT
DOMAIN-SUFFIX,dl.wan.sogoucdn.com,REJECT
DOMAIN-SUFFIX,download.zhushou.sogou.com,REJECT
DOMAIN-SUFFIX,fair.sogou.com,REJECT
DOMAIN-SUFFIX,feed.theta.sogou.com,REJECT
DOMAIN-SUFFIX,files2.sogou.com,REJECT
DOMAIN-SUFFIX,galaxy.sogoucdn.com,REJECT
DOMAIN-SUFFIX,get.sogou.com,REJECT
DOMAIN-SUFFIX,goto.sogou.com,REJECT
DOMAIN-SUFFIX,ht.www.sogou.com,REJECT
DOMAIN-SUFFIX,image.p4p.sogou.com,REJECT
DOMAIN-SUFFIX,img.shouji.sogou.com,REJECT
DOMAIN-SUFFIX,info.pinyin.sogou.com,REJECT
DOMAIN-SUFFIX,input.shouji.sogou.com,REJECT
DOMAIN-SUFFIX,iwan.sogou.com,REJECT
DOMAIN-SUFFIX,lu.sogou.com,REJECT
DOMAIN-SUFFIX,mini.cpc.sogou.com,REJECT
DOMAIN-SUFFIX,p3p.sogou.com,REJECT
DOMAIN-SUFFIX,pb.sogou.com,REJECT
DOMAIN-SUFFIX,pbd.sogou.com,REJECT
DOMAIN-SUFFIX,ping.pinyin.sogou.com,REJECT
DOMAIN-SUFFIX,pull.push.sogou.com,REJECT
DOMAIN-SUFFIX,pv.focus.cn,REJECT
DOMAIN-SUFFIX,pv.sogou.com,REJECT
DOMAIN-SUFFIX,rd.e.sogou.com,REJECT
DOMAIN-SUFFIX,rjgw.theta.sogou.com,REJECT
DOMAIN-SUFFIX,wangmeng.sogou.com,REJECT
DOMAIN-SUFFIX,web.sogou.com,REJECT

// Teleplus
DOMAIN-SUFFIX,guangzhuiyuan.com,REJECT

// Tencent
DOMAIN-SUFFIX,2052.flash2-http.qq.com,REJECT
DOMAIN-SUFFIX,act.qq.com,REJECT
DOMAIN-SUFFIX,activeqq.3g.qq.com,REJECT
DOMAIN-SUFFIX,ad.qq.com,REJECT
DOMAIN-SUFFIX,ad.qun.qq.com,REJECT
DOMAIN-SUFFIX,adfilter.imtt.qq.com,REJECT
DOMAIN-SUFFIX,adping.qq.com,REJECT
DOMAIN-SUFFIX,adpm.app.qq.com,REJECT
DOMAIN-SUFFIX,adrdir.qq.com,REJECT
DOMAIN-SUFFIX,adsclick.qq.com,REJECT
DOMAIN-SUFFIX,adsense.html5.qq.com,REJECT
DOMAIN-SUFFIX,adsfile.qq.com,REJECT
DOMAIN-SUFFIX,adsgroup.qq.com,REJECT
DOMAIN-SUFFIX,adshmct.qq.com,REJECT
DOMAIN-SUFFIX,adshmmsg.qq.com,REJECT
DOMAIN-SUFFIX,adslvfile.qq.com,REJECT
DOMAIN-SUFFIX,adslvseed.qq.com,REJECT
DOMAIN-SUFFIX,adsolution.imtt.qq.com,REJECT
DOMAIN-SUFFIX,adsqqclick.qq.com,REJECT
DOMAIN-SUFFIX,adsrich.qq.com,REJECT
DOMAIN-SUFFIX,adstextview.qq.com,REJECT
DOMAIN-SUFFIX,adsview.qq.com,REJECT
DOMAIN-SUFFIX,adsview2.qq.com,REJECT
DOMAIN-SUFFIX,adv.app.qq.com,REJECT
DOMAIN-SUFFIX,adver.qq.com,REJECT
DOMAIN-SUFFIX,aeventlog.beacon.qq.com,REJECT
DOMAIN-SUFFIX,aiseet.aa.atianqi.com,REJECT
DOMAIN-SUFFIX,analy.qq.com,REJECT
DOMAIN-SUFFIX,android.rqd.qq.com,REJECT
DOMAIN-SUFFIX,appsupport.qq.com,REJECT
DOMAIN-SUFFIX,astat.bugly.qq.com,REJECT
DOMAIN-SUFFIX,astrategy.beacon.qq.com,REJECT
DOMAIN-SUFFIX,boss.qzone.qq.com,REJECT
DOMAIN-SUFFIX,bs.l.qq.com,REJECT
DOMAIN-SUFFIX,bugreportv2.qq.com,REJECT
DOMAIN-SUFFIX,c.gdt.qq.com,REJECT
DOMAIN-SUFFIX,c.gj.qq.com,REJECT
DOMAIN-SUFFIX,c.l.qq.com,REJECT
DOMAIN-SUFFIX,c2.l.qq.com,REJECT
DOMAIN-SUFFIX,ca.gtimg.com,REJECT
DOMAIN-SUFFIX,canvas.gdt.qq.com,REJECT
DOMAIN-SUFFIX,cb.l.qq.com,REJECT
DOMAIN-SUFFIX,cdn.ark.qq.com,REJECT
DOMAIN-SUFFIX,cfg.imtt.qq.com,REJECT
DOMAIN-SUFFIX,cgi.connect.qq.com,REJECT
DOMAIN-SUFFIX,client.show.qq.com,REJECT
DOMAIN-SUFFIX,cm.e.qq.com,REJECT
DOMAIN-SUFFIX,cm.l.qq.com,REJECT
DOMAIN-SUFFIX,d.gdt.qq.com,REJECT
DOMAIN-SUFFIX,d3g.qq.com,REJECT
DOMAIN-SUFFIX,dir.minigame.qq.com,REJECT
DOMAIN-SUFFIX,download.sj.qq.com,REJECT
DOMAIN-SUFFIX,dp3.qq.com,REJECT
DOMAIN-SUFFIX,e.qq.com,REJECT
DOMAIN-SUFFIX,etg.qq.com,REJECT
DOMAIN-SUFFIX,eventlog.beacon.qq.com,REJECT
DOMAIN-SUFFIX,fm.qzone.qq.com,REJECT
DOMAIN-SUFFIX,fodder.qq.com,REJECT
DOMAIN-SUFFIX,fodder.tc.qq.com,REJECT
DOMAIN-SUFFIX,fw.qq.com,REJECT
DOMAIN-SUFFIX,game.html5.qq.com,REJECT
DOMAIN-SUFFIX,gdt.qq.com,REJECT
DOMAIN-SUFFIX,hm.l.qq.com,REJECT
DOMAIN-SUFFIX,httpring.qq.com,REJECT
DOMAIN-SUFFIX,i.gdt.qq.com,REJECT
DOMAIN-SUFFIX,if.mingxing.qq.com,REJECT
DOMAIN-SUFFIX,imc.l.qq.com,REJECT
DOMAIN-SUFFIX,img1.sj.qq.com,REJECT
DOMAIN-SUFFIX,ios.bugly.qq.com,REJECT
DOMAIN-SUFFIX,isdspeed.qq.com,REJECT
DOMAIN-SUFFIX,j.wit.qq.com,REJECT
DOMAIN-SUFFIX,jingjia.qq.com,REJECT
DOMAIN-SUFFIX,jpush.html5.qq.com,REJECT
DOMAIN-SUFFIX,jqmt.qq.com,REJECT
DOMAIN-SUFFIX,jsqmt.qq.com,REJECT
DOMAIN-SUFFIX,l2.l.qq.com,REJECT
DOMAIN-SUFFIX,lb.gtimg.com,REJECT
DOMAIN-SUFFIX,lb.l.qq.com,REJECT
DOMAIN-SUFFIX,livec.l.qq.com,REJECT
DOMAIN-SUFFIX,livem.l.qq.com,REJECT
DOMAIN-SUFFIX,livep.l.qq.com,REJECT
DOMAIN-SUFFIX,lives.l.qq.com,REJECT
DOMAIN-SUFFIX,log.tbs.qq.com,REJECT
DOMAIN-SUFFIX,ls.l.qq.com,REJECT
DOMAIN-SUFFIX,mapp.qzone.qq.com,REJECT
DOMAIN-SUFFIX,masdk.3g.qq.com,REJECT
DOMAIN-SUFFIX,mazu.3g.qq.com,REJECT
DOMAIN-SUFFIX,mcgi.v.qq.com,REJECT
DOMAIN-SUFFIX,mdevstat.qqlive.qq.com,REJECT
DOMAIN-SUFFIX,mi.gdt.qq.com,REJECT
DOMAIN-SUFFIX,mini2015.qq.com,REJECT
DOMAIN-SUFFIX,mobile.qzone.qq.com,REJECT
DOMAIN-SUFFIX,monitor.uu.qq.com,REJECT
DOMAIN-SUFFIX,mqqad.cs0309.html5.qq.com,REJECT
DOMAIN-SUFFIX,mqqad.html5.qq.com,REJECT
DOMAIN-SUFFIX,mqqadr.reader.qq.com,REJECT
DOMAIN-SUFFIX,news.mpush.qq.com,REJECT
DOMAIN-SUFFIX,novelsns.html5.qq.com,REJECT
DOMAIN-SUFFIX,openapi.guanjia.qq.com,REJECT
DOMAIN-SUFFIX,oth.eve.mdt.qq.com,REJECT
DOMAIN-SUFFIX,oth.str.mdt.qq.com,REJECT
DOMAIN-SUFFIX,oth.update.mdt.qq.com,REJECT
DOMAIN-SUFFIX,p.l.qq.com,REJECT
DOMAIN-SUFFIX,p.store.qq.com,REJECT
DOMAIN-SUFFIX,p2.l.qq.com,REJECT
DOMAIN-SUFFIX,p3.l.qq.com,REJECT
DOMAIN-SUFFIX,pagespeed.report.qq.com,REJECT
DOMAIN-SUFFIX,pgdt.gtimg.cn,REJECT
DOMAIN-SUFFIX,pinghot.qq.com,REJECT
DOMAIN-SUFFIX,pingjs.qq.com,REJECT
DOMAIN-SUFFIX,pingma.qq.com,REJECT
DOMAIN-SUFFIX,pingtcss.qq.com,REJECT
DOMAIN-SUFFIX,pmir.3g.qq.com,REJECT
DOMAIN-SUFFIX,pms.mb.qq.com,REJECT
DOMAIN-SUFFIX,push.qq.com,REJECT
DOMAIN-SUFFIX,pvstat.html5.qq.com,REJECT
DOMAIN-SUFFIX,q.i.gdt.qq.com,REJECT
DOMAIN-SUFFIX,qqshow2-item.qq.com,REJECT
DOMAIN-SUFFIX,qss-client.qq.com,REJECT
DOMAIN-SUFFIX,recmd.html5.qq.com,REJECT
DOMAIN-SUFFIX,report.huatuo.qq.com,REJECT
DOMAIN-SUFFIX,report.qcloud.com,REJECT
DOMAIN-SUFFIX,report.qq.com,REJECT
DOMAIN-SUFFIX,report.vip.qq.com,REJECT
DOMAIN-SUFFIX,rh.qq.com,REJECT
DOMAIN-SUFFIX,rich.qq.com,REJECT
DOMAIN-SUFFIX,rm.gdt.qq.com,REJECT
DOMAIN-SUFFIX,rs1.qq.com,REJECT
DOMAIN-SUFFIX,rs2.qq.com,REJECT
DOMAIN-SUFFIX,s.gdt.qq.com,REJECT
DOMAIN-SUFFIX,scdown.qq.com,REJECT
DOMAIN-SUFFIX,sdk.e.qq.com,REJECT
DOMAIN-SUFFIX,setting.snswin.qq.com,REJECT
DOMAIN-SUFFIX,showwxml.qq.com,REJECT
DOMAIN-SUFFIX,sngmta.qq.com,REJECT
DOMAIN-SUFFIX,soft.tbs.imtt.qq.com,REJECT
DOMAIN-SUFFIX,strategy.beacon.qq.com,REJECT
DOMAIN-SUFFIX,t.gdt.qq.com,REJECT
DOMAIN-SUFFIX,t.l.qq.com,REJECT
DOMAIN-SUFFIX,t.sj.qq.com,REJECT
DOMAIN-SUFFIX,ta.qq.com,REJECT
DOMAIN-SUFFIX,tajs.qq.com,REJECT
DOMAIN-SUFFIX,taobao.qq.com,REJECT
DOMAIN-SUFFIX,tcss.qq.com,REJECT
DOMAIN-SUFFIX,tj.b.qq.com,REJECT
DOMAIN-SUFFIX,tj.video.qq.com,REJECT
DOMAIN-SUFFIX,tools.3g.qq.com,REJECT
DOMAIN-SUFFIX,tpush.html5.qq.com,REJECT
DOMAIN-SUFFIX,trace.qq.com,REJECT
DOMAIN-SUFFIX,u.l.qq.com,REJECT
DOMAIN-SUFFIX,union.discuz.qq.com,REJECT
DOMAIN-SUFFIX,updatecenter.qq.com,REJECT
DOMAIN-SUFFIX,user1.game.qq.com,REJECT
DOMAIN-SUFFIX,uu.qq.com,REJECT
DOMAIN-SUFFIX,v.gdt.qq.com,REJECT
DOMAIN-SUFFIX,variety.tc.qq.com,REJECT
DOMAIN-SUFFIX,video.ureport.push.qq.com,REJECT
DOMAIN-SUFFIX,video.wap.mpush.qq.com,REJECT
DOMAIN-SUFFIX,vlive.qqvideo.tc.qq.com,REJECT
DOMAIN-SUFFIX,vmindhls.tc.qq.com,REJECT
DOMAIN-SUFFIX,vpic.video.qq.com,REJECT
DOMAIN-SUFFIX,w.l.qq.com,REJECT
DOMAIN-SUFFIX,wap.mpush.qq.com,REJECT
DOMAIN-SUFFIX,wb.gtimg.com,REJECT
DOMAIN-SUFFIX,win.gdt.qq.com,REJECT
DOMAIN-SUFFIX,ws.sj.qq.com,REJECT
DOMAIN-SUFFIX,wxsnsdy.tc.qq.com,REJECT
DOMAIN-SUFFIX,wxsnsdy.video.qq.com,REJECT

// Tianya
DOMAIN-SUFFIX,801.tianya.cn,REJECT
DOMAIN-SUFFIX,803.tianya.cn,REJECT
DOMAIN-SUFFIX,806.tianya.cn,REJECT
DOMAIN-SUFFIX,808.tianya.cn,REJECT
DOMAIN-SUFFIX,bdj.tianya.cn,REJECT
DOMAIN-SUFFIX,click.tianyaui.com,REJECT
DOMAIN-SUFFIX,dol.tianya.cn,REJECT

// Tongbutui
DOMAIN-SUFFIX,lbszb.tongbu.com,REJECT

// Toutiao
DOMAIN-SUFFIX,ad.toutiao.com,REJECT
DOMAIN-SUFFIX,d.toutiao.com,REJECT
DOMAIN-SUFFIX,dm.toutiao.com,REJECT
DOMAIN-SUFFIX,dsp.toutiao.com,REJECT
DOMAIN-SUFFIX,nativeapp.toutiao.com,REJECT
DOMAIN-SUFFIX,partner.toutiao.com,REJECT

// Tumblr
DOMAIN-SUFFIX,31.media.tumblr.com,REJECT
DOMAIN-SUFFIX,92x.tumblr.com,REJECT
DOMAIN-SUFFIX,its-dori.tumblr.com,REJECT
DOMAIN-SUFFIX,tumblrprobes.cedexis.com,REJECT
DOMAIN-SUFFIX,tumblrreports.cedexis.com,REJECT

// Twitter
DOMAIN-SUFFIX,ads.twitter.com,REJECT
DOMAIN-SUFFIX,ads-twitter.com,REJECT
DOMAIN-SUFFIX,p.twitter.com,REJECT
DOMAIN-SUFFIX,scribe.twitter.com,REJECT
DOMAIN-SUFFIX,syndication.twitter.com,REJECT
DOMAIN-SUFFIX,syndication-o.twitter.com,REJECT
DOMAIN-SUFFIX,urls.api.twitter.com,REJECT

// UC
DOMAIN-SUFFIX,adn.insight.ucweb.com,REJECT
DOMAIN-SUFFIX,adtrack.ucweb.com,REJECT
DOMAIN-SUFFIX,alissl.ucdl.pp.uc.cn,REJECT
DOMAIN-SUFFIX,api.mp.uc.cn,REJECT
DOMAIN-SUFFIX,applog.uc.cn,REJECT
DOMAIN-SUFFIX,bjcu.u3.ucweb.com,REJECT
DOMAIN-SUFFIX,hao.uc.cn,REJECT
DOMAIN-SUFFIX,hk.napi.ucweb.com,REJECT
DOMAIN-SUFFIX,huichuan.sm.cn,REJECT
DOMAIN-SUFFIX,kwurl.ucweb.com,REJECT
DOMAIN-SUFFIX,log.cs.pp.cn,REJECT
DOMAIN-SUFFIX,m.uc123.com,REJECT
DOMAIN-SUFFIX,m.uczzd.cn,REJECT
DOMAIN-SUFFIX,patriot.cs.pp.cn,REJECT
DOMAIN-SUFFIX,puds.test.uae.uc.cn,REJECT
DOMAIN-SUFFIX,puds.ucweb.com,REJECT
DOMAIN-SUFFIX,rescn.u3.ucweb.com,REJECT
DOMAIN-SUFFIX,sea.napi.ucweb.com,REJECT
DOMAIN-SUFFIX,server.m.pp.cn,REJECT
DOMAIN-SUFFIX,track.uc.cn,REJECT
DOMAIN-SUFFIX,u.uc123.com,REJECT
DOMAIN-SUFFIX,u.ucfly.com,REJECT
DOMAIN-SUFFIX,uc9.ucweb.com,REJECT
DOMAIN-SUFFIX,ucus.ucweb.com,REJECT
DOMAIN-SUFFIX,uczzd.com,REJECT
DOMAIN-SUFFIX,uczzd.com.cn,REJECT
DOMAIN-SUFFIX,uczzd.net,REJECT
DOMAIN-SUFFIX,uodoo.com,REJECT
DOMAIN-SUFFIX,up1.tj.u2.ucweb.com,REJECT
DOMAIN-SUFFIX,up4.ucweb.com,REJECT
DOMAIN-SUFFIX,vs2.gzcu.u3.ucweb.com,REJECT
DOMAIN-SUFFIX,wap3.ucweb.com,REJECT
DOMAIN-SUFFIX,woodpecker.uc.cn,REJECT

// Weifeng
DOMAIN-SUFFIX,aoodoo.feng.com,REJECT
DOMAIN-SUFFIX,fengbuy.com,REJECT
DOMAIN-SUFFIX,we.tm,REJECT

// Wi-Fi key
DOMAIN,wifiapi01.51y5.net,REJECT
DOMAIN,wifiapi02.51y5.net,REJECT
DOMAIN-SUFFIX,c.51y5.net,REJECT
DOMAIN-SUFFIX,cds.51y5.net,REJECT
DOMAIN-SUFFIX,ios-dc.51y5.net,REJECT
DOMAIN-SUFFIX,news-img.51y5.net,REJECT
DOMAIN-SUFFIX,wkanc.com,REJECT

// WPS
DOMAIN-SUFFIX,ios-informationplatform.wps.cn,REJECT
DOMAIN-SUFFIX,minfo.wps.cn,REJECT
DOMAIN-SUFFIX,mo.res.wpscdn.cn,REJECT

// Xiaomi
DOMAIN-SUFFIX,a.hl.mi.com,REJECT
DOMAIN-SUFFIX,a.stat.xiaomi.com,REJECT
DOMAIN-SUFFIX,a.union.mi.com,REJECT
DOMAIN-SUFFIX,abtest.mistat.xiaomi.com,REJECT
DOMAIN-SUFFIX,ad.xiaomi.com,REJECT
DOMAIN-SUFFIX,ad1.xiaomi.com,REJECT
DOMAIN-SUFFIX,adinfo.ra1.xlmc.sec.miui.com,REJECT
DOMAIN-SUFFIX,adv.sec.miui.com,REJECT
DOMAIN-SUFFIX,api.ad.xiaomi.com,REJECT
DOMAIN-SUFFIX,api.jr.mi.com,REJECT
DOMAIN-SUFFIX,api.ra2.xlmc.sec.miui.com,REJECT
DOMAIN-SUFFIX,api.sec.miui.com,REJECT
DOMAIN-SUFFIX,api.tw06.xlmc.sec.miui.com,REJECT
DOMAIN-SUFFIX,beha.ksmobile.com,REJECT
DOMAIN-SUFFIX,bss.pandora.xiaomi.com,REJECT
DOMAIN-SUFFIX,calopenupdate.comm.miui.com,REJECT
DOMAIN-SUFFIX,cdn.ad.xiaomi.com,REJECT
DOMAIN-SUFFIX,counter.kingsoft.com,REJECT
DOMAIN-SUFFIX,data.mistat.xiaomi.com,REJECT
DOMAIN-SUFFIX,de.pandora.xiaomi.com,REJECT
DOMAIN-SUFFIX,dvb.pandora.xiaomi.com,REJECT
DOMAIN-SUFFIX,e.ad.xiaomi.com,REJECT
DOMAIN-SUFFIX,etl.xlmc.sec.miui.com,REJECT
DOMAIN-SUFFIX,event.ksosoft.com,REJECT
DOMAIN-SUFFIX,fcanr.tracking.miui.com,REJECT
DOMAIN-SUFFIX,hot.browser.miui.com,REJECT
DOMAIN-SUFFIX,image.box.xiaomi.com,REJECT
DOMAIN-SUFFIX,info.sec.miui.com,REJECT
DOMAIN-SUFFIX,jellyfish.pandora.xiaomi.com,REJECT
DOMAIN-SUFFIX,logupdate.avlyun.sec.miui.com,REJECT
DOMAIN-SUFFIX,lxcdn.dl.files.xiaomi.net,REJECT
DOMAIN-SUFFIX,m.bss.pandora.xiaomi.com,REJECT
DOMAIN-SUFFIX,mb.yidianzixun.com,REJECT
DOMAIN-SUFFIX,metok.sys.miui.com,REJECT
DOMAIN-SUFFIX,migc.g.mi.com,REJECT
DOMAIN-SUFFIX,migcreport.g.mi.com,REJECT
DOMAIN-SUFFIX,migrate.driveapi.micloud.xiaomi.net,REJECT
DOMAIN-SUFFIX,mis.g.mi.com,REJECT
DOMAIN-SUFFIX,mlog.search.xiaomi.net,REJECT
DOMAIN-SUFFIX,notice.game.xiaomi.com,REJECT
DOMAIN-SUFFIX,o2o.api.xiaomi.com,REJECT
DOMAIN-SUFFIX,pdc.micloud.xiaomi.net,REJECT
DOMAIN-SUFFIX,ppurifier.game.xiaomi.com,REJECT
DOMAIN-SUFFIX,proxy.sec.miui.com,REJECT
DOMAIN-SUFFIX,r.browser.miui.com,REJECT
DOMAIN-SUFFIX,reader.browser.miui.com,REJECT
DOMAIN-SUFFIX,resolver.msg.xiaomi.net,REJECT
DOMAIN-SUFFIX,sdkconfig.ad.xiaomi.com,REJECT
DOMAIN-SUFFIX,sec.resource.xiaomi.net,REJECT
DOMAIN-SUFFIX,sec-cdn.static.xiaomi.net,REJECT
DOMAIN-SUFFIX,security.browser.miui.com,REJECT
DOMAIN-SUFFIX,sg.a.stat.mi.com,REJECT
DOMAIN-SUFFIX,shenghuo.xiaomi.com,REJECT
DOMAIN-SUFFIX,ssp.ad.xiaomi.com,REJECT
DOMAIN-SUFFIX,staging.admin.e.mi.com,REJECT
DOMAIN-SUFFIX,stat.pandora.xiaomi.com,REJECT
DOMAIN-SUFFIX,test.ad.xiaomi.com,REJECT
DOMAIN-SUFFIX,test.e.ad.xiaomi.com,REJECT
DOMAIN-SUFFIX,test.zeus.ad.xiaomi.com,REJECT
DOMAIN-SUFFIX,tracking.miui.com,REJECT
DOMAIN-SUFFIX,uid.ksosoft.com,REJECT
DOMAIN-SUFFIX,update.avlyun.sec.miui.com,REJECT
DOMAIN-SUFFIX,ups.ksmobile.net,REJECT
DOMAIN-SUFFIX,ws.ksmobile.net,REJECT
DOMAIN-SUFFIX,wtradv.market.xiaomi.com,REJECT
DOMAIN-SUFFIX,xmpush.xiaomi.com,REJECT

// Ximalaya
DOMAIN-SUFFIX,ad.test.ximalaya.com,REJECT
DOMAIN-SUFFIX,ad.ximalaya.com,REJECT
DOMAIN-SUFFIX,adse.test.ximalaya.com,REJECT
DOMAIN-SUFFIX,adse.ximalaya.com,REJECT
DOMAIN-SUFFIX,adweb.test.ximalaya.com,REJECT
DOMAIN-SUFFIX,adweb.ximalaya.com,REJECT
DOMAIN-SUFFIX,linkeye.ximalaya.com,REJECT
DOMAIN-SUFFIX,location.ximalaya.com,REJECT
DOMAIN-SUFFIX,xdcs-collector.ximalaya.com,REJECT

// Yahoo
DOMAIN-SUFFIX,ads.yahoo.com,REJECT
DOMAIN-SUFFIX,adserver.yahoo.com,REJECT
DOMAIN-SUFFIX,adss.yahoo.com,REJECT
DOMAIN-SUFFIX,aliunion.cn.yahoo.com,REJECT
DOMAIN-SUFFIX,ard.yahoo.co.jp,REJECT
DOMAIN-SUFFIX,bc.geocities.yahoo.co.jp,REJECT
DOMAIN-SUFFIX,beap-bc.yahoo.com,REJECT
DOMAIN-SUFFIX,cm.p4p.cn.yahoo.com,REJECT
DOMAIN-SUFFIX,comet.yahoo.com,REJECT
DOMAIN-SUFFIX,doubleplay-conf-yql.media.yahoo.com,REJECT
DOMAIN-SUFFIX,gemini.yahoo.com,REJECT
DOMAIN-SUFFIX,geo.yahoo.com,REJECT
DOMAIN-SUFFIX,locdrop.query.yahoo.com,REJECT
DOMAIN-SUFFIX,m.yap.yahoo.com,REJECT
DOMAIN-SUFFIX,onepush.query.yahoo.com,REJECT
DOMAIN-SUFFIX,rd.ane.yahoo.co.jp,REJECT
DOMAIN-SUFFIX,uservoice.com,REJECT
DOMAIN-SUFFIX,ws.progrss.yahoo.com,REJECT

// Zhangyue
DOMAIN-SUFFIX,sys.zhangyue.com,REJECT

// Zhihu
DOMAIN-SUFFIX,sugar.zhihu.com,REJECT

// AD Block
DOMAIN-KEYWORD,admarvel,REJECT
DOMAIN-KEYWORD,admaster,REJECT
DOMAIN-KEYWORD,admdfs,REJECT
DOMAIN-KEYWORD,adnewnc,REJECT
DOMAIN-KEYWORD,adsage,REJECT
DOMAIN-KEYWORD,adsame,REJECT
DOMAIN-KEYWORD,adsensor,REJECT
DOMAIN-KEYWORD,adsmogo,REJECT
DOMAIN-KEYWORD,adsrvmedia,REJECT
DOMAIN-KEYWORD,advert,REJECT
DOMAIN-KEYWORD,adwords,REJECT
DOMAIN-KEYWORD,allyes,REJECT
DOMAIN-KEYWORD,analysis,REJECT
DOMAIN-KEYWORD,analysys,REJECT
DOMAIN-KEYWORD,analytics,REJECT
DOMAIN-KEYWORD,applovin,REJECT
DOMAIN-KEYWORD,cnzz,REJECT
DOMAIN-KEYWORD,dnserror,REJECT
DOMAIN-KEYWORD,domob,REJECT
DOMAIN-KEYWORD,duomeng,REJECT
DOMAIN-KEYWORD,dwtrack,REJECT
DOMAIN-KEYWORD,guanggao,REJECT
DOMAIN-KEYWORD,inmobi,REJECT
DOMAIN-KEYWORD,lianmeng,REJECT
DOMAIN-KEYWORD,mobaders,REJECT
DOMAIN-KEYWORD,omgmta,REJECT
DOMAIN-KEYWORD,openx,REJECT
DOMAIN-KEYWORD,partnerad,REJECT
DOMAIN-KEYWORD,pingfore,REJECT
DOMAIN-KEYWORD,socdm,REJECT
DOMAIN-KEYWORD,supersonicads,REJECT
DOMAIN-KEYWORD,taboola,REJECT
DOMAIN-KEYWORD,tanx,REJECT
DOMAIN-KEYWORD,uedas,REJECT
DOMAIN-KEYWORD,umeng,REJECT
DOMAIN-KEYWORD,umtrack,REJECT
DOMAIN-KEYWORD,usage,REJECT
DOMAIN-KEYWORD,wlmonitor,REJECT
DOMAIN-KEYWORD,zjtoolbar,REJECT

DOMAIN-SUFFIX,0.r.msn.com,REJECT
DOMAIN-SUFFIX,000dn.com,REJECT
DOMAIN-SUFFIX,001union.com,REJECT
DOMAIN-SUFFIX,00880808.com,REJECT
DOMAIN-SUFFIX,00oo00.com,REJECT
DOMAIN-SUFFIX,01.gxso.net,REJECT
DOMAIN-SUFFIX,010teacher.com,REJECT
DOMAIN-SUFFIX,010xk.com,REJECT
DOMAIN-SUFFIX,022aifang.com,REJECT
DOMAIN-SUFFIX,023hysj.com,REJECT
DOMAIN-SUFFIX,025suyu.com,REJECT
DOMAIN-SUFFIX,0313413.com,REJECT
DOMAIN-SUFFIX,0451106.com,REJECT
DOMAIN-SUFFIX,0531kt.com,REJECT
DOMAIN-SUFFIX,0592weixin.com,REJECT
DOMAIN-SUFFIX,0594003.com,REJECT
DOMAIN-SUFFIX,06362.com,REJECT
DOMAIN-SUFFIX,0756sjlm.com.cn,REJECT
DOMAIN-SUFFIX,0aqpqdju.me,REJECT
DOMAIN-SUFFIX,0x01e7.website,REJECT
DOMAIN-SUFFIX,0xxd.com,REJECT
DOMAIN-SUFFIX,1.1010pic.com,REJECT
DOMAIN-SUFFIX,1.201980.com,REJECT
DOMAIN-SUFFIX,1.51sxue.cn,REJECT
DOMAIN-SUFFIX,1.cjcp.cn,REJECT
DOMAIN-SUFFIX,1.codesdq.com,REJECT
DOMAIN-SUFFIX,1.feihua.com,REJECT
DOMAIN-SUFFIX,1.glook.cn,REJECT
DOMAIN-SUFFIX,1.hao123.com,REJECT
DOMAIN-SUFFIX,1.hnyouneng.com,REJECT
DOMAIN-SUFFIX,1.i1766.com,REJECT
DOMAIN-SUFFIX,1.iqeq.com.cn,REJECT
DOMAIN-SUFFIX,1.jeasyui.net,REJECT
DOMAIN-SUFFIX,1.mgff.com,REJECT
DOMAIN-SUFFIX,1.panduoduo.net,REJECT
DOMAIN-SUFFIX,1.rengshu.com,REJECT
DOMAIN-SUFFIX,1.soufy.cn,REJECT
DOMAIN-SUFFIX,1.tulaoshi.com,REJECT
DOMAIN-SUFFIX,1.win7china.com,REJECT
DOMAIN-SUFFIX,1.win7sky.com,REJECT
DOMAIN-SUFFIX,1.wps.cn,REJECT
DOMAIN-SUFFIX,1.xiaopin5.com,REJECT
DOMAIN-SUFFIX,1.xilu.com,REJECT
DOMAIN-SUFFIX,1.yhzm.cc,REJECT
DOMAIN-SUFFIX,1.zw3e.com,REJECT
DOMAIN-SUFFIX,1000dy.com,REJECT
DOMAIN-SUFFIX,100fenlm.com,REJECT
DOMAIN-SUFFIX,1017.cn,REJECT
DOMAIN-SUFFIX,10up.com,REJECT
DOMAIN-SUFFIX,11.hydcd.com,REJECT
DOMAIN-SUFFIX,111111qb.com,REJECT
DOMAIN-SUFFIX,111cn.net,REJECT
DOMAIN-SUFFIX,1133.cc,REJECT
DOMAIN-SUFFIX,114la.com,REJECT
DOMAIN-SUFFIX,11g.yiqig.cn,REJECT
DOMAIN-SUFFIX,1224.dxsbb.com,REJECT
DOMAIN-SUFFIX,12306media.com,REJECT
DOMAIN-SUFFIX,1234xm.com,REJECT
DOMAIN-SUFFIX,12365chia.com,REJECT
DOMAIN-SUFFIX,123hala.com,REJECT
DOMAIN-SUFFIX,123juzi.net,REJECT
DOMAIN-SUFFIX,138138138.top,REJECT
DOMAIN-SUFFIX,144.dragonparking.com,REJECT
DOMAIN-SUFFIX,163.wrating.com,REJECT
DOMAIN-SUFFIX,1680go.com,REJECT
DOMAIN-SUFFIX,168ad.cc,REJECT
DOMAIN-SUFFIX,170yy.com,REJECT
DOMAIN-SUFFIX,175bar.com,REJECT
DOMAIN-SUFFIX,176um.com,REJECT
DOMAIN-SUFFIX,178gg.com,REJECT
DOMAIN-SUFFIX,17leyi.com,REJECT
DOMAIN-SUFFIX,17un.co,REJECT
DOMAIN-SUFFIX,18av.mm-cg.co,REJECT
DOMAIN-SUFFIX,18tzx.com,REJECT
DOMAIN-SUFFIX,1d1px.net,REJECT
DOMAIN-SUFFIX,1i580.com,REJECT
DOMAIN-SUFFIX,1kmb.cn,REJECT
DOMAIN-SUFFIX,1kzh.com,REJECT
DOMAIN-SUFFIX,1l1.cc,REJECT
DOMAIN-SUFFIX,1lib.cn,REJECT
DOMAIN-SUFFIX,1o26.com,REJECT
DOMAIN-SUFFIX,1qwe3r.com,REJECT
DOMAIN-SUFFIX,1tlm.cn,REJECT
DOMAIN-SUFFIX,1uandun.com,REJECT
DOMAIN-SUFFIX,1x3x.com,REJECT
DOMAIN-SUFFIX,2.5aigushi.com,REJECT
DOMAIN-SUFFIX,2.heiyange.com,REJECT
DOMAIN-SUFFIX,2.mobixs.cn,REJECT
DOMAIN-SUFFIX,2.rengshu.com,REJECT
DOMAIN-SUFFIX,201071.com,REJECT
DOMAIN-SUFFIX,2012ui.com,REJECT
DOMAIN-SUFFIX,20150930.cf,REJECT
DOMAIN-SUFFIX,202m.com,REJECT
DOMAIN-SUFFIX,21union.com,REJECT
DOMAIN-SUFFIX,22.qingsongbar.com,REJECT
DOMAIN-SUFFIX,22lm.cc,REJECT
DOMAIN-SUFFIX,233wo.com,REJECT
DOMAIN-SUFFIX,2345.cn,REJECT
DOMAIN-SUFFIX,2345api.dftoutiao.com,REJECT
DOMAIN-SUFFIX,2345apicode.dftoutiao.com,REJECT
DOMAIN-SUFFIX,235123.net,REJECT
DOMAIN-SUFFIX,24haitao.net,REJECT
DOMAIN-SUFFIX,268mob.cn,REJECT
DOMAIN-SUFFIX,272xb.com,REJECT
DOMAIN-SUFFIX,28acglz.com,REJECT
DOMAIN-SUFFIX,2a.com.cn,REJECT
DOMAIN-SUFFIX,2cnt.net,REJECT
DOMAIN-SUFFIX,2m2n.com,REJECT
DOMAIN-SUFFIX,3.guidaye.com,REJECT
DOMAIN-SUFFIX,3.ssqzj.com,REJECT
DOMAIN-SUFFIX,312036.com,REJECT
DOMAIN-SUFFIX,32414.com,REJECT
DOMAIN-SUFFIX,33.pcpop.com,REJECT
DOMAIN-SUFFIX,336.com,REJECT
DOMAIN-SUFFIX,339.cn,REJECT
DOMAIN-SUFFIX,3393.com,REJECT
DOMAIN-SUFFIX,33lm.cc,REJECT
DOMAIN-SUFFIX,33shangyou.com,REJECT
DOMAIN-SUFFIX,360640.com,REJECT
DOMAIN-SUFFIX,360baidus.com,REJECT
DOMAIN-SUFFIX,360safego.com,REJECT
DOMAIN-SUFFIX,361315.cc,REJECT
DOMAIN-SUFFIX,365bibi.com,REJECT
DOMAIN-SUFFIX,365safego.com,REJECT
DOMAIN-SUFFIX,366safego.com,REJECT
DOMAIN-SUFFIX,36pn.com,REJECT
DOMAIN-SUFFIX,376zf.com,REJECT
DOMAIN-SUFFIX,37cs.com,REJECT
DOMAIN-SUFFIX,37mnm.com,REJECT
DOMAIN-SUFFIX,37pk49.com,REJECT
DOMAIN-SUFFIX,37see.com,REJECT
DOMAIN-SUFFIX,37wan.cn,REJECT
DOMAIN-SUFFIX,37wan.com,REJECT
DOMAIN-SUFFIX,3808010.com,REJECT
DOMAIN-SUFFIX,3839168.com,REJECT
DOMAIN-SUFFIX,38499.com,REJECT
DOMAIN-SUFFIX,3975lm.com,REJECT
DOMAIN-SUFFIX,39xc.net,REJECT
DOMAIN-SUFFIX,3dm.huya.com,REJECT
DOMAIN-SUFFIX,3dwwwgame.com,REJECT
DOMAIN-SUFFIX,3g.990.net,REJECT
DOMAIN-SUFFIX,3gmimo.com,REJECT
DOMAIN-SUFFIX,3gmtr.com,REJECT
DOMAIN-SUFFIX,3htai.com,REJECT
DOMAIN-SUFFIX,3qmh.com,REJECT
DOMAIN-SUFFIX,3ygww.com,REJECT
DOMAIN-SUFFIX,456juhd.com,REJECT
DOMAIN-SUFFIX,46sg.com,REJECT
DOMAIN-SUFFIX,49wanwan.com,REJECT
DOMAIN-SUFFIX,4ggww.com,REJECT
DOMAIN-SUFFIX,4wad.com,REJECT
DOMAIN-SUFFIX,504pk.com,REJECT
DOMAIN-SUFFIX,50bang.org,REJECT
DOMAIN-SUFFIX,51.la,REJECT
DOMAIN-SUFFIX,5125129.com,REJECT
DOMAIN-SUFFIX,513hch.com,REJECT
DOMAIN-SUFFIX,517m.cn,REJECT
DOMAIN-SUFFIX,51ads.com,REJECT
DOMAIN-SUFFIX,51gxqm.com,REJECT
DOMAIN-SUFFIX,51jumintong.com,REJECT
DOMAIN-SUFFIX,51la.net,REJECT
DOMAIN-SUFFIX,51link.com,REJECT
DOMAIN-SUFFIX,51network.com,REJECT
DOMAIN-SUFFIX,51vipedu.com,REJECT
DOMAIN-SUFFIX,51weidashi.com,REJECT
DOMAIN-SUFFIX,51xumei.com,REJECT
DOMAIN-SUFFIX,51yes.com,REJECT
DOMAIN-SUFFIX,5207470.com,REJECT
DOMAIN-SUFFIX,5269120.com,REJECT
DOMAIN-SUFFIX,52kmh.com,REJECT
DOMAIN-SUFFIX,52kmk.com,REJECT
DOMAIN-SUFFIX,52lubo.cn,REJECT
DOMAIN-SUFFIX,55.la,REJECT
DOMAIN-SUFFIX,559gp.com,REJECT
DOMAIN-SUFFIX,55lu.com,REJECT
DOMAIN-SUFFIX,57union.com,REJECT
DOMAIN-SUFFIX,58lm.vip,REJECT
DOMAIN-SUFFIX,592man.com,REJECT
DOMAIN-SUFFIX,5dian.org,REJECT
DOMAIN-SUFFIX,5egk.com,REJECT
DOMAIN-SUFFIX,5imoney.com,REJECT
DOMAIN-SUFFIX,5jcom.com.cn,REJECT
DOMAIN-SUFFIX,5vz3cfs0yd.me,REJECT
DOMAIN-SUFFIX,5y9nfpes.52pk.com,REJECT
DOMAIN-SUFFIX,600ad.com,REJECT
DOMAIN-SUFFIX,644446.com,REJECT
DOMAIN-SUFFIX,654mmm.com,REJECT
DOMAIN-SUFFIX,6669667.com,REJECT
DOMAIN-SUFFIX,66san.com,REJECT
DOMAIN-SUFFIX,6711.com,REJECT
DOMAIN-SUFFIX,6728812.com,REJECT
DOMAIN-SUFFIX,685wo.com,REJECT
DOMAIN-SUFFIX,68665565.com,REJECT
DOMAIN-SUFFIX,69duk.com,REJECT
DOMAIN-SUFFIX,6boou.voluumtrk.com,REJECT
DOMAIN-SUFFIX,6dad.com,REJECT
DOMAIN-SUFFIX,6dvip.com,REJECT
DOMAIN-SUFFIX,6huu.com,REJECT
DOMAIN-SUFFIX,6tsbe1zs.me,REJECT
DOMAIN-SUFFIX,706529.com,REJECT
DOMAIN-SUFFIX,70lm.com,REJECT
DOMAIN-SUFFIX,711kk.com,REJECT
DOMAIN-SUFFIX,716703.com,REJECT
DOMAIN-SUFFIX,71sem.com,REJECT
DOMAIN-SUFFIX,75to.com,REJECT
DOMAIN-SUFFIX,7631.com,REJECT
DOMAIN-SUFFIX,766ba.net,REJECT
DOMAIN-SUFFIX,778669.com,REJECT
DOMAIN-SUFFIX,7794.com,REJECT
DOMAIN-SUFFIX,77power.com,REJECT
DOMAIN-SUFFIX,77u.com,REJECT
DOMAIN-SUFFIX,77xtv.com,REJECT
DOMAIN-SUFFIX,7891655.cn,REJECT
DOMAIN-SUFFIX,7car.com.cn,REJECT
DOMAIN-SUFFIX,7clink.com,REJECT
DOMAIN-SUFFIX,7dah8.com,REJECT
DOMAIN-SUFFIX,7jiajiao.com,REJECT
DOMAIN-SUFFIX,7mad.7m.cn,REJECT
DOMAIN-SUFFIX,7pk.com,REJECT
DOMAIN-SUFFIX,7wen.cn,REJECT
DOMAIN-SUFFIX,7xi9g1.com1.z0.glb.clouddn.com,REJECT
DOMAIN-SUFFIX,7xsf3h.com1.z0.glb.clouddn.com,REJECT
DOMAIN-SUFFIX,7xz3.com,REJECT
DOMAIN-SUFFIX,7z66.com,REJECT
DOMAIN-SUFFIX,801.tianyaui.com,REJECT
DOMAIN-SUFFIX,80sjw.com,REJECT
DOMAIN-SUFFIX,813690.top,REJECT
DOMAIN-SUFFIX,818mov.com,REJECT
DOMAIN-SUFFIX,81c.cn,REJECT
DOMAIN-SUFFIX,8368661.com,REJECT
DOMAIN-SUFFIX,8521448.com,REJECT
DOMAIN-SUFFIX,85655095.com,REJECT
DOMAIN-SUFFIX,859377.com,REJECT
DOMAIN-SUFFIX,85tgw.com,REJECT
DOMAIN-SUFFIX,86.cc,REJECT
DOMAIN-SUFFIX,860010.com,REJECT
DOMAIN-SUFFIX,8800271.com.cn,REJECT
DOMAIN-SUFFIX,88210212.com,REJECT
DOMAIN-SUFFIX,8866786.com,REJECT
DOMAIN-SUFFIX,888.izhufu.net,REJECT
DOMAIN-SUFFIX,88818122.cn,REJECT
DOMAIN-SUFFIX,88rpg.net,REJECT
DOMAIN-SUFFIX,88shu.cn,REJECT
DOMAIN-SUFFIX,892155.com,REJECT
DOMAIN-SUFFIX,89h8.com,REJECT
DOMAIN-SUFFIX,8dulm.com,REJECT
DOMAIN-SUFFIX,8hykthze.cricket,REJECT
DOMAIN-SUFFIX,8jd2lfsq.me,REJECT
DOMAIN-SUFFIX,8jkx.com,REJECT
DOMAIN-SUFFIX,8le8le.com,REJECT
DOMAIN-SUFFIX,8mfty.com,REJECT
DOMAIN-SUFFIX,8ox.cn,REJECT
DOMAIN-SUFFIX,911.cc,REJECT
DOMAIN-SUFFIX,91ad.bestvogue.com,REJECT
DOMAIN-SUFFIX,91adv.com,REJECT
DOMAIN-SUFFIX,91hui.com,REJECT
DOMAIN-SUFFIX,91xry.com,REJECT
DOMAIN-SUFFIX,91ysa.com,REJECT
DOMAIN-SUFFIX,91zgm.com,REJECT
DOMAIN-SUFFIX,930.dragonparking.com,REJECT
DOMAIN-SUFFIX,937744.com,REJECT
DOMAIN-SUFFIX,9377aa.com,REJECT
DOMAIN-SUFFIX,9377bh.com,REJECT
DOMAIN-SUFFIX,9377co.com,REJECT
DOMAIN-SUFFIX,9377hi.com,REJECT
DOMAIN-SUFFIX,9377if.com,REJECT
DOMAIN-SUFFIX,9377ku.com,REJECT
DOMAIN-SUFFIX,9377or.com,REJECT
DOMAIN-SUFFIX,9377os.com,REJECT
DOMAIN-SUFFIX,93manhua.com,REJECT
DOMAIN-SUFFIX,94lm.com,REJECT
DOMAIN-SUFFIX,95105012.com,REJECT
DOMAIN-SUFFIX,9519.net,REJECT
DOMAIN-SUFFIX,95558000.com,REJECT
DOMAIN-SUFFIX,96mob.com,REJECT
DOMAIN-SUFFIX,99909988.com,REJECT
DOMAIN-SUFFIX,99click.com,REJECT
DOMAIN-SUFFIX,99ddd.com,REJECT
DOMAIN-SUFFIX,99lolo.com,REJECT
DOMAIN-SUFFIX,9ads.net,REJECT
DOMAIN-SUFFIX,9dtiny.cn,REJECT
DOMAIN-SUFFIX,9kff.com,REJECT
DOMAIN-SUFFIX,9tn.cc,REJECT
DOMAIN-SUFFIX,9wushuo.com,REJECT
DOMAIN-SUFFIX,a.5ykj.com,REJECT
DOMAIN-SUFFIX,a.80982.org,REJECT
DOMAIN-SUFFIX,a.ads1.msn.com,REJECT
DOMAIN-SUFFIX,a.ads2.msn.com,REJECT
DOMAIN-SUFFIX,a.armystar.com,REJECT
DOMAIN-SUFFIX,a.baiy.net,REJECT
DOMAIN-SUFFIX,a.baomihua.com,REJECT
DOMAIN-SUFFIX,a.beilamusi.com,REJECT
DOMAIN-SUFFIX,a.benshiw.net,REJECT
DOMAIN-SUFFIX,a.cdngeek.net,REJECT
DOMAIN-SUFFIX,a.clipconverter.cc,REJECT
DOMAIN-SUFFIX,a.dounanhuahui.com,REJECT
DOMAIN-SUFFIX,a.duanmeiwen.com,REJECT
DOMAIN-SUFFIX,a.epinv.com,REJECT
DOMAIN-SUFFIX,a.eporner.com,REJECT
DOMAIN-SUFFIX,a.exam58.com,REJECT
DOMAIN-SUFFIX,a.fengyx.com,REJECT
DOMAIN-SUFFIX,a.fwsir.com,REJECT
DOMAIN-SUFFIX,a.giantrealm.com,REJECT
DOMAIN-SUFFIX,a.global.msads.net,REJECT
DOMAIN-SUFFIX,a.holagames.com,REJECT
DOMAIN-SUFFIX,a.kandiaoyu.com,REJECT
DOMAIN-SUFFIX,a.kejixun.com,REJECT
DOMAIN-SUFFIX,a.kickass.to,REJECT
DOMAIN-SUFFIX,a.livesportmedia.eu,REJECT
DOMAIN-SUFFIX,a.lolwot.com,REJECT
DOMAIN-SUFFIX,a.lz13.cn,REJECT
DOMAIN-SUFFIX,a.m.gxwztv.com,REJECT
DOMAIN-SUFFIX,a.m.shuhuangge.org,REJECT
DOMAIN-SUFFIX,a.nanhuwang.com,REJECT
DOMAIN-SUFFIX,a.nowscore.com,REJECT
DOMAIN-SUFFIX,a.qiao024.com,REJECT
DOMAIN-SUFFIX,a.qinghua5.com,REJECT
DOMAIN-SUFFIX,a.shenchuang.com,REJECT
DOMAIN-SUFFIX,a.shuoshuodaquan.net,REJECT
DOMAIN-SUFFIX,a.solarmovie.is,REJECT
DOMAIN-SUFFIX,a.thefreethoughtproject.com,REJECT
DOMAIN-SUFFIX,a.tribalfusion.com,REJECT
DOMAIN-SUFFIX,a.ucoz.net,REJECT
DOMAIN-SUFFIX,a.visualrevenue.com,REJECT
DOMAIN-SUFFIX,a.waczt.cn,REJECT
DOMAIN-SUFFIX,a.wlfnb.com,REJECT
DOMAIN-SUFFIX,a.xinwenge.net,REJECT
DOMAIN-SUFFIX,a.xixiyishu.com,REJECT
DOMAIN-SUFFIX,a.xizi.com,REJECT
DOMAIN-SUFFIX,a.xywy.com,REJECT
DOMAIN-SUFFIX,a.yangshengtang123.com,REJECT
DOMAIN-SUFFIX,a.yixie8.com,REJECT
DOMAIN-SUFFIX,a0b11.com,REJECT
DOMAIN-SUFFIX,a0b22.com,REJECT
DOMAIN-SUFFIX,a0b33.com,REJECT
DOMAIN-SUFFIX,a0c66.com,REJECT
DOMAIN-SUFFIX,a0c77.com,REJECT
DOMAIN-SUFFIX,a1.0s.net.cn,REJECT
DOMAIN-SUFFIX,a1.azg168.cn,REJECT
DOMAIN-SUFFIX,a1.gexing.me,REJECT
DOMAIN-SUFFIX,a1.huanqiumil.com,REJECT
DOMAIN-SUFFIX,a1.itc.cn,REJECT
DOMAIN-SUFFIX,a1.liuxue86.com,REJECT
DOMAIN-SUFFIX,a1.vdolady.com,REJECT
DOMAIN-SUFFIX,a1.yuuedu.com,REJECT
DOMAIN-SUFFIX,a2.b310.com,REJECT
DOMAIN-SUFFIX,a3p4.net,REJECT
DOMAIN-SUFFIX,a4.b2b168.com,REJECT
DOMAIN-SUFFIX,a4.yeshj.com,REJECT
DOMAIN-SUFFIX,a5.yeshj.com,REJECT
DOMAIN-SUFFIX,a7shun.com,REJECT
DOMAIN-SUFFIX,a907907.com,REJECT
DOMAIN-SUFFIX,a9377j.com,REJECT
DOMAIN-SUFFIX,aa.jiankang.com,REJECT
DOMAIN-SUFFIX,aa.tianya999.com,REJECT
DOMAIN-SUFFIX,aa.xiangxiangmf.com,REJECT
DOMAIN-SUFFIX,aa.zldh123.com,REJECT
DOMAIN-SUFFIX,a-ad.adwo.com,REJECT
DOMAIN-SUFFIX,ab.sc115.com,REJECT
DOMAIN-SUFFIX,abc.hkepc.com,REJECT
DOMAIN-SUFFIX,abc.xtyx918.com,REJECT
DOMAIN-SUFFIX,ac.atpanel.com,REJECT
DOMAIN-SUFFIX,ac.mmstat.com,REJECT
DOMAIN-SUFFIX,ac2.msn.com,REJECT
DOMAIN-SUFFIX,ac3.msn.com,REJECT
DOMAIN-SUFFIX,acasys88.cn,REJECT
DOMAIN-SUFFIX,access.njherald.com,REJECT
DOMAIN-SUFFIX,acm.dzwww.com,REJECT
DOMAIN-SUFFIX,acookie.linezing.com,REJECT
DOMAIN-SUFFIX,acs86.com,REJECT
DOMAIN-SUFFIX,acsystem.wasu.cn,REJECT
DOMAIN-SUFFIX,activity.yuyiya.com,REJECT
DOMAIN-SUFFIX,acuityplatform.com,REJECT
DOMAIN-SUFFIX,acwgf.com,REJECT
DOMAIN-SUFFIX,acxiom-online.com,REJECT
DOMAIN-SUFFIX,ad.1111cpc.com,REJECT
DOMAIN-SUFFIX,ad.17173.com,REJECT
DOMAIN-SUFFIX,ad.3.cn,REJECT
DOMAIN-SUFFIX,ad.360yield.com,REJECT
DOMAIN-SUFFIX,ad.363.in,REJECT
DOMAIN-SUFFIX,ad.95306.cn,REJECT
DOMAIN-SUFFIX,ad.about.co.kr,REJECT
DOMAIN-SUFFIX,ad.accessmediaproductions.com,REJECT
DOMAIN-SUFFIX,ad.adhouyi.cn,REJECT
DOMAIN-SUFFIX,ad.adwo.com,REJECT
DOMAIN-SUFFIX,ad.api.3g.tudou.com,REJECT
DOMAIN-SUFFIX,ad.bitmedia.io,REJECT
DOMAIN-SUFFIX,ad.bjmama.net,REJECT
DOMAIN-SUFFIX,ad.cctv.com,REJECT
DOMAIN-SUFFIX,ad.cooks.com,REJECT
DOMAIN-SUFFIX,ad.crichd.in,REJECT
DOMAIN-SUFFIX,ad.digitimes.com.tw,REJECT
DOMAIN-SUFFIX,ad.directmirror.com,REJECT
DOMAIN-SUFFIX,ad.download.cnet.com,REJECT
DOMAIN-SUFFIX,ad.dqwjzm.com,REJECT
DOMAIN-SUFFIX,ad.duapps.com,REJECT
DOMAIN-SUFFIX,ad.duga.jp,REJECT
DOMAIN-SUFFIX,ad.eporner.com,REJECT
DOMAIN-SUFFIX,ad.evozi.com,REJECT
DOMAIN-SUFFIX,ad.flipboard.com,REJECT
DOMAIN-SUFFIX,ad.flux.com,REJECT
DOMAIN-SUFFIX,ad.fnnews.com,REJECT
DOMAIN-SUFFIX,ad.foxnetworks.com,REJECT
DOMAIN-SUFFIX,ad.greedland.net,REJECT
DOMAIN-SUFFIX,ad.huajiao.com,REJECT
DOMAIN-SUFFIX,ad.icasthq.com,REJECT
DOMAIN-SUFFIX,ad.idgtn.net,REJECT
DOMAIN-SUFFIX,ad.iloveinterracial.com,REJECT
DOMAIN-SUFFIX,ad.jamba.net,REJECT
DOMAIN-SUFFIX,ad.jamster.com,REJECT
DOMAIN-SUFFIX,ad.jiemian.com,REJECT
DOMAIN-SUFFIX,ad.jsnbrynb.com,REJECT
DOMAIN-SUFFIX,ad.kissanime.io,REJECT
DOMAIN-SUFFIX,ad.kisscartoon.io,REJECT
DOMAIN-SUFFIX,ad.livere.co.kr,REJECT
DOMAIN-SUFFIX,ad.lyricswire.com,REJECT
DOMAIN-SUFFIX,ad.mail.ru,REJECT
DOMAIN-SUFFIX,ad.mangareader.net,REJECT
DOMAIN-SUFFIX,ad.mediabong.net,REJECT
DOMAIN-SUFFIX,ad.mesomorphosis.com,REJECT
DOMAIN-SUFFIX,ad.mi.com,REJECT
DOMAIN-SUFFIX,ad.netowl.jp,REJECT
DOMAIN-SUFFIX,ad.newegg.com,REJECT
DOMAIN-SUFFIX,ad.openmultimedia.biz,REJECT
DOMAIN-SUFFIX,ad.outsidehub.com,REJECT
DOMAIN-SUFFIX,ad.pandora.tv,REJECT
DOMAIN-SUFFIX,ad.pickple.net,REJECT
DOMAIN-SUFFIX,ad.proxy.sh,REJECT
DOMAIN-SUFFIX,ad.r.worldssl.net,REJECT
DOMAIN-SUFFIX,ad.rambler.ru,REJECT
DOMAIN-SUFFIX,ad.reachlocal.com,REJECT
DOMAIN-SUFFIX,ad.reklamport.com,REJECT
DOMAIN-SUFFIX,ad.search.ch,REJECT
DOMAIN-SUFFIX,ad.sensismediasmart.com.au,REJECT
DOMAIN-SUFFIX,ad.services.distractify.com,REJECT
DOMAIN-SUFFIX,ad.slutload.com,REJECT
DOMAIN-SUFFIX,ad.smartclip.net,REJECT
DOMAIN-SUFFIX,ad.spielothek.so,REJECT
DOMAIN-SUFFIX,ad.spreaker.com,REJECT
DOMAIN-SUFFIX,ad.thepaper.cn,REJECT
DOMAIN-SUFFIX,ad.thisav.com,REJECT
DOMAIN-SUFFIX,ad.turn.com,REJECT
DOMAIN-SUFFIX,ad.userporn.com,REJECT
DOMAIN-SUFFIX,ad.vidaroo.com,REJECT
DOMAIN-SUFFIX,ad.walkgame.com,REJECT
DOMAIN-SUFFIX,ad.wang502.com,REJECT
DOMAIN-SUFFIX,ad.winningpartner.com,REJECT
DOMAIN-SUFFIX,ad.winrar.com.cn,REJECT
DOMAIN-SUFFIX,ad.wretch.cc,REJECT
DOMAIN-SUFFIX,ad.xmovies8.ru,REJECT
DOMAIN-SUFFIX,ad.xxguan.cn,REJECT
DOMAIN-SUFFIX,ad.yieldlab.net,REJECT
DOMAIN-SUFFIX,ad.zanox.com,REJECT
DOMAIN-SUFFIX,ad.zuimeitianqi.com,REJECT
DOMAIN-SUFFIX,ad000000.com,REJECT
DOMAIN-SUFFIX,ad1.greedland.net,REJECT
DOMAIN-SUFFIX,ad1.p5w.net,REJECT
DOMAIN-SUFFIX,ad1.udn.com,REJECT
DOMAIN-SUFFIX,ad2.udn.com,REJECT
DOMAIN-SUFFIX,ad2.yam.com,REJECT
DOMAIN-SUFFIX,ad3.udn.com,REJECT
DOMAIN-SUFFIX,ad4.udn.com,REJECT
DOMAIN-SUFFIX,ad4game.com,REJECT
DOMAIN-SUFFIX,ad7.com,REJECT
DOMAIN-SUFFIX,ad8.adfarm1.adition.com,REJECT
DOMAIN-SUFFIX,ad9377.com,REJECT
DOMAIN-SUFFIX,adadapted.com,REJECT
DOMAIN-SUFFIX,adadmin.house365.com,REJECT
DOMAIN-SUFFIX,adadvisor.net,REJECT
DOMAIN-SUFFIX,adap.tv,REJECT
DOMAIN-SUFFIX,adapi.lenovogame.com,REJECT
DOMAIN-SUFFIX,adasad.myweb.hinet.net,REJECT
DOMAIN-SUFFIX,adbana.com,REJECT
DOMAIN-SUFFIX,ad-bg.adwo.com,REJECT
DOMAIN-SUFFIX,adbot.tw,REJECT
DOMAIN-SUFFIX,ad-brix.com,REJECT
DOMAIN-SUFFIX,adbxb.com,REJECT
DOMAIN-SUFFIX,adcast.deviantart.com,REJECT
DOMAIN-SUFFIX,adcast.fblife.com,REJECT
DOMAIN-SUFFIX,adccoo.cn,REJECT
DOMAIN-SUFFIX,adchina.com,REJECT
DOMAIN-SUFFIX,adcitrus.com,REJECT
DOMAIN-SUFFIX,adcloud.jp,REJECT
DOMAIN-SUFFIX,ad-cloud.jp,REJECT
DOMAIN-SUFFIX,adcolony.com,REJECT
DOMAIN-SUFFIX,adcome.cn,REJECT
DOMAIN-SUFFIX,adcore.lenovomm.com,REJECT
DOMAIN-SUFFIX,ad-count.adwo.com,REJECT
DOMAIN-SUFFIX,add.bugun.com.tr,REJECT
DOMAIN-SUFFIX,add.dz19.net,REJECT
DOMAIN-SUFFIX,add.freeimg8.com,REJECT
DOMAIN-SUFFIX,add.mmyuer.com,REJECT
DOMAIN-SUFFIX,ad-delivery.net,REJECT
DOMAIN-SUFFIX,addirector.vindicosuite.com,REJECT
DOMAIN-SUFFIX,adds.weatherology.com,REJECT
DOMAIN-SUFFIX,addthis.com,REJECT
DOMAIN-SUFFIX,addthisedge.com,REJECT
DOMAIN-SUFFIX,ader.mobi,REJECT
DOMAIN-SUFFIX,adeventtracker.spotify.com,REJECT
DOMAIN-SUFFIX,adexprt.com,REJECT
DOMAIN-SUFFIX,adf.dahe.cn,REJECT
DOMAIN-SUFFIX,adfill.adview.cn,REJECT
DOMAIN-SUFFIX,adform.net,REJECT
DOMAIN-SUFFIX,adfurikun.jp,REJECT
DOMAIN-SUFFIX,adfuture.cn,REJECT
DOMAIN-SUFFIX,adhai.com,REJECT
DOMAIN-SUFFIX,adhome.1fangchan.com,REJECT
DOMAIN-SUFFIX,adhouyi.com,REJECT
DOMAIN-SUFFIX,adimg.daumcdn.net,REJECT
DOMAIN-SUFFIX,adimg.deviantart.net,REJECT
DOMAIN-SUFFIX,adimg.qxlsjw.com,REJECT
DOMAIN-SUFFIX,adinall.com,REJECT
DOMAIN-SUFFIX,adinfuse.com,REJECT
DOMAIN-SUFFIX,adingo.jp.eimg.jp,REJECT
DOMAIN-SUFFIX,adirects.com,REJECT
DOMAIN-SUFFIX,adjb.5nd.com,REJECT
DOMAIN-SUFFIX,adjust.com,REJECT
DOMAIN-SUFFIX,adjust.io,REJECT
DOMAIN-SUFFIX,adk.funshion.com,REJECT
DOMAIN-SUFFIX,adk2.co,REJECT
DOMAIN-SUFFIX,adk2x.com,REJECT
DOMAIN-SUFFIX,adkmob.com,REJECT
DOMAIN-SUFFIX,adkongjian.com,REJECT
DOMAIN-SUFFIX,adlaunch.moji.com,REJECT
DOMAIN-SUFFIX,adlink.shopsafe.co.nz,REJECT
DOMAIN-SUFFIX,adlive.cn,REJECT
DOMAIN-SUFFIX,adlocus.com,REJECT
DOMAIN-SUFFIX,ad-locus.com,REJECT
DOMAIN-SUFFIX,adm.265g.com,REJECT
DOMAIN-SUFFIX,adm.72zx.com,REJECT
DOMAIN-SUFFIX,adm.86wan.com,REJECT
DOMAIN-SUFFIX,adm.cloud.cnfol.com,REJECT
DOMAIN-SUFFIX,adm.funshion.com,REJECT
DOMAIN-SUFFIX,adm.icast.cn,REJECT
DOMAIN-SUFFIX,adm.xmfish.com,REJECT
DOMAIN-SUFFIX,adm.zbinfo.net,REJECT
DOMAIN-SUFFIX,admaji.com,REJECT
DOMAIN-SUFFIX,admarket.mobi,REJECT
DOMAIN-SUFFIX,admd.yam.com,REJECT
DOMAIN-SUFFIX,admedia.com,REJECT
DOMAIN-SUFFIX,admeta.vo.llnwd.net,REJECT
DOMAIN-SUFFIX,admin6.com,REJECT
DOMAIN-SUFFIX,admob.com,REJECT
DOMAIN-SUFFIX,admon.cn,REJECT
DOMAIN-SUFFIX,admtpmp124.com,REJECT
DOMAIN-SUFFIX,admx.baixing.com,REJECT
DOMAIN-SUFFIX,adn.ebay.com,REJECT
DOMAIN-SUFFIX,adnetpub.yaolan.com,REJECT
DOMAIN-SUFFIX,adnxs.com,REJECT
DOMAIN-SUFFIX,adomv.com,REJECT
DOMAIN-SUFFIX,adp.cnool.net,REJECT
DOMAIN-SUFFIX,adperium.com,REJECT
DOMAIN-SUFFIX,ad-plus.cn,REJECT
DOMAIN-SUFFIX,adplus.goo.mx,REJECT
DOMAIN-SUFFIX,adplxmd.com,REJECT
DOMAIN-SUFFIX,adpolestar.net,REJECT
DOMAIN-SUFFIX,adpro.cn,REJECT
DOMAIN-SUFFIX,adpro.pro.cn,REJECT
DOMAIN-SUFFIX,adpub.yaolan.com,REJECT
DOMAIN-SUFFIX,adpublish.ydstatic.com,REJECT
DOMAIN-SUFFIX,adpubs.yaolan.com,REJECT
DOMAIN-SUFFIX,adpush.cn,REJECT
DOMAIN-SUFFIX,adquan.com,REJECT
DOMAIN-SUFFIX,adreal.cn,REJECT
DOMAIN-SUFFIX,adres.myaora.net,REJECT
DOMAIN-SUFFIX,adriver.ru,REJECT
DOMAIN-SUFFIX,adroll.com,REJECT
DOMAIN-SUFFIX,adrotator.se,REJECT
DOMAIN-SUFFIX,adrs.sdo.com,REJECT
DOMAIN-SUFFIX,ads.979799777.com,REJECT
DOMAIN-SUFFIX,ads.creative-serving.com,REJECT
DOMAIN-SUFFIX,ads.eu.msn.com,REJECT
DOMAIN-SUFFIX,ads.feedly.com,REJECT
DOMAIN-SUFFIX,ads.genieessp.com,REJECT
DOMAIN-SUFFIX,ads.gionee.com,REJECT
DOMAIN-SUFFIX,ads.gmodules.com,REJECT
DOMAIN-SUFFIX,ads.mopud.com,REJECT
DOMAIN-SUFFIX,ads.msn.com,REJECT
DOMAIN-SUFFIX,ads.newtentionassets.net,REJECT
DOMAIN-SUFFIX,ads.ninemsn.com.au,REJECT
DOMAIN-SUFFIX,ads.oneway.mobi,REJECT
DOMAIN-SUFFIX,ads.oppomobile.com,REJECT
DOMAIN-SUFFIX,ads.pof.com,REJECT
DOMAIN-SUFFIX,ads.pubmatic.com,REJECT
DOMAIN-SUFFIX,ads.servebom.com,REJECT
DOMAIN-SUFFIX,ads.stickyadstv.com,REJECT
DOMAIN-SUFFIX,ads.tremorhub.com,REJECT
DOMAIN-SUFFIX,ads.videosz.com,REJECT
DOMAIN-SUFFIX,ads.waps.cn,REJECT
DOMAIN-SUFFIX,ads.wapx.cn,REJECT
DOMAIN-SUFFIX,ads.xxxbunker.com,REJECT
DOMAIN-SUFFIX,ads.yam.com,REJECT
DOMAIN-SUFFIX,ads.yimg.com,REJECT
DOMAIN-SUFFIX,ads.zynga.com,REJECT
DOMAIN-SUFFIX,ads1.msn.com,REJECT
DOMAIN-SUFFIX,ads2.msads.net,REJECT
DOMAIN-SUFFIX,ads2.msn.com,REJECT
DOMAIN-SUFFIX,ads360.cn,REJECT
DOMAIN-SUFFIX,ads8.com,REJECT
DOMAIN-SUFFIX,ads80.com,REJECT
DOMAIN-SUFFIX,adsatt.abcnews.starwave.com,REJECT
DOMAIN-SUFFIX,adsatt.espn.starwave.com,REJECT
DOMAIN-SUFFIX,adscaspion.appspot.com,REJECT
DOMAIN-SUFFIX,adsclick.yx.js.cn,REJECT
DOMAIN-SUFFIX,adsco.re,REJECT
DOMAIN-SUFFIX,adserve2.tom.com,REJECT
DOMAIN-SUFFIX,adserver.adtech.de,REJECT
DOMAIN-SUFFIX,adserver.juicyads.com,REJECT
DOMAIN-SUFFIX,adserver.pandora.com,REJECT
DOMAIN-SUFFIX,adserver.snapads.com,REJECT
DOMAIN-SUFFIX,adserver.xpanama.net,REJECT
DOMAIN-SUFFIX,adsfactor.net,REJECT
DOMAIN-SUFFIX,adsfs.oppomobile.com,REJECT
DOMAIN-SUFFIX,adshare.freedocast.com,REJECT
DOMAIN-SUFFIX,adshost2.com,REJECT
DOMAIN-SUFFIX,adshows.21cn.com,REJECT
DOMAIN-SUFFIX,adsinstant.com,REJECT
DOMAIN-SUFFIX,adsor.openrunner.com,REJECT
DOMAIN-SUFFIX,adsp.xunlei.com,REJECT
DOMAIN-SUFFIX,adsrvr.org,REJECT
DOMAIN-SUFFIX,adss.dotdo.net,REJECT
DOMAIN-SUFFIX,adstil.indiatimes.com,REJECT
DOMAIN-SUFFIX,ad-stir.com,REJECT
DOMAIN-SUFFIX,adsunflower.com,REJECT
DOMAIN-SUFFIX,adsunion.com,REJECT
DOMAIN-SUFFIX,ad-survey.com,REJECT
DOMAIN-SUFFIX,ads-west-colo.adsymptotic.com,REJECT
DOMAIN-SUFFIX,adsymptotic.com,REJECT
DOMAIN-SUFFIX,adsyndication.msn.com,REJECT
DOMAIN-SUFFIX,adtaily.com,REJECT
DOMAIN-SUFFIX,adtechjp.com,REJECT
DOMAIN-SUFFIX,adtechus.com,REJECT
DOMAIN-SUFFIX,adtest.adwo.com,REJECT
DOMAIN-SUFFIX,adtest.theonion.com,REJECT
DOMAIN-SUFFIX,adtrk.me,REJECT
DOMAIN-SUFFIX,adui.tg.meitu.com,REJECT
DOMAIN-SUFFIX,adultfriendfinder.com,REJECT
DOMAIN-SUFFIX,adups.com,REJECT
DOMAIN-SUFFIX,aduu.cn,REJECT
DOMAIN-SUFFIX,adv.ccb.com,REJECT
DOMAIN-SUFFIX,adv2.downsave.com,REJECT
DOMAIN-SUFFIX,adview.cn,REJECT
DOMAIN-SUFFIX,advmob.cn,REJECT
DOMAIN-SUFFIX,adwhirl.com,REJECT
DOMAIN-SUFFIX,adwo.com,REJECT
DOMAIN-SUFFIX,adx.ads.oppomobile.com,REJECT
DOMAIN-SUFFIX,adx.kat.ph,REJECT
DOMAIN-SUFFIX,adx.pro.cn,REJECT
DOMAIN-SUFFIX,adx.xiaodutv.com,REJECT
DOMAIN-SUFFIX,adxmi.com,REJECT
DOMAIN-SUFFIX,adxpansion.com,REJECT
DOMAIN-SUFFIX,adytx.com,REJECT
DOMAIN-SUFFIX,adyun.com,REJECT
DOMAIN-SUFFIX,adz.zwee.ly,REJECT
DOMAIN-SUFFIX,adzerk.net,REJECT
DOMAIN-SUFFIX,ae.bdstatic.com,REJECT
DOMAIN-SUFFIX,aercxy.com,REJECT
DOMAIN-SUFFIX,aff.eteachergroup.com,REJECT
DOMAIN-SUFFIX,aff.lmgtfy.com,REJECT
DOMAIN-SUFFIX,aff.marathonbet.com,REJECT
DOMAIN-SUFFIX,aff.svjump.com,REJECT
DOMAIN-SUFFIX,affil.mupromo.com,REJECT
DOMAIN-SUFFIX,affiliateprogram.keywordspy.com,REJECT
DOMAIN-SUFFIX,affiliates.allposters.com,REJECT
DOMAIN-SUFFIX,affiliates.goodvibes.com,REJECT
DOMAIN-SUFFIX,affiliates.thrixxx.com,REJECT
DOMAIN-SUFFIX,affiliatesmedia.sbobet.com,REJECT
DOMAIN-SUFFIX,affiliation.fotovista.com,REJECT
DOMAIN-SUFFIX,afjlb.com,REJECT
DOMAIN-SUFFIX,afp.adchina.com,REJECT
DOMAIN-SUFFIX,afp.chinanews.com,REJECT
DOMAIN-SUFFIX,afp.m1905.com,REJECT
DOMAIN-SUFFIX,afp.wasu.cn,REJECT
DOMAIN-SUFFIX,afpcreative.wasu.cn,REJECT
DOMAIN-SUFFIX,afpimages.eastday,REJECT
DOMAIN-SUFFIX,agenda.complex.com,REJECT
DOMAIN-SUFFIX,agrant.cn,REJECT
DOMAIN-SUFFIX,agrantsem.com,REJECT
DOMAIN-SUFFIX,ahhuazhen.com,REJECT
DOMAIN-SUFFIX,ahyau.com,REJECT
DOMAIN-SUFFIX,ahyuns.com,REJECT
DOMAIN-SUFFIX,ai.bioon.com,REJECT
DOMAIN-SUFFIX,ai.yimg.jp,REJECT
DOMAIN-SUFFIX,aicydb.com,REJECT
DOMAIN-SUFFIX,aid.chinayk.com,REJECT
DOMAIN-SUFFIX,aihaoduo.cn,REJECT
DOMAIN-SUFFIX,aikan6.com,REJECT
DOMAIN-SUFFIX,airpush.com,REJECT
DOMAIN-SUFFIX,airpushmarketing.s3.amazonaws.com,REJECT
DOMAIN-SUFFIX,ais.abacast.com,REJECT
DOMAIN-SUFFIX,aishang.bid,REJECT
DOMAIN-SUFFIX,aishiguolong.com,REJECT
DOMAIN-SUFFIX,aiwen.cc,REJECT
DOMAIN-SUFFIX,ajapk.com,REJECT
DOMAIN-SUFFIX,ajaxcdn.org,REJECT
DOMAIN-SUFFIX,ajhdf.com,REJECT
DOMAIN-SUFFIX,ajnad.aljazeera.net,REJECT
DOMAIN-SUFFIX,ajuhd.com,REJECT
DOMAIN-SUFFIX,ak.sascdn.com,REJECT
DOMAIN-SUFFIX,akrwi.cn,REJECT
DOMAIN-SUFFIX,akxsrsdbursfpx.bid,REJECT
DOMAIN-SUFFIX,aliqqjd.cn,REJECT
DOMAIN-SUFFIX,alisinak.com,REJECT
DOMAIN-SUFFIX,alitianxia168.com,REJECT
DOMAIN-SUFFIX,aliyuncss.com,REJECT
DOMAIN-SUFFIX,aliyunxin.com,REJECT
DOMAIN-SUFFIX,allnews.uodoo.com,REJECT
DOMAIN-SUFFIX,allxin.com,REJECT
DOMAIN-SUFFIX,alvares.esportsheaven.com,REJECT
DOMAIN-SUFFIX,am.6park.com,REJECT
DOMAIN-SUFFIX,am.g.ireader.com,REJECT
DOMAIN-SUFFIX,am.szhome.com,REJECT
DOMAIN-SUFFIX,am15.net,REJECT
DOMAIN-SUFFIX,ama.adwo.com,REJECT
DOMAIN-SUFFIX,amazingmagics.com,REJECT
DOMAIN-SUFFIX,amazon-adsystem.com,REJECT
DOMAIN-SUFFIX,ams.fx678.com,REJECT
DOMAIN-SUFFIX,ams.lenovomm.com,REJECT
DOMAIN-SUFFIX,amz.steamprices.com,REJECT
DOMAIN-SUFFIX,an.m.liebao.cn,REJECT
DOMAIN-SUFFIX,an.yandex.ru,REJECT
DOMAIN-SUFFIX,andmejs.com,REJECT
DOMAIN-SUFFIX,andmlbf.tj.ijinshan.com,REJECT
DOMAIN-SUFFIX,android-lrcresource.wps.cn,REJECT
DOMAIN-SUFFIX,angsrvr.com,REJECT
DOMAIN-SUFFIX,anioscp.com,REJECT
DOMAIN-SUFFIX,ann5.net,REJECT
DOMAIN-SUFFIX,anquan.org,REJECT
DOMAIN-SUFFIX,anreson.net,REJECT
DOMAIN-SUFFIX,anysdk.com,REJECT
DOMAIN-SUFFIX,aoodoo.weiphone.com,REJECT
DOMAIN-SUFFIX,api.0.0.0.0.cn,REJECT
DOMAIN-SUFFIX,api.adbana.com,REJECT
DOMAIN-SUFFIX,api.adcome.cn,REJECT
DOMAIN-SUFFIX,api.bailingjiankang.com,REJECT
DOMAIN-SUFFIX,api.bs.zui.com,REJECT
DOMAIN-SUFFIX,api.doumob.com,REJECT
DOMAIN-SUFFIX,api.dreamfull.cn,REJECT
DOMAIN-SUFFIX,api.g1.junfull.com,REJECT
DOMAIN-SUFFIX,api.g2.junfull.com,REJECT
DOMAIN-SUFFIX,api.iapps.ifeng.com,REJECT
DOMAIN-SUFFIX,api.iimedia.cn,REJECT
DOMAIN-SUFFIX,api.koudaikj.com,REJECT
DOMAIN-SUFFIX,api.mobula.sdk.duapps.com,REJECT
DOMAIN-SUFFIX,api.newad.ifeng.com,REJECT
DOMAIN-SUFFIX,api.open.uc.cn,REJECT
DOMAIN-SUFFIX,api.primecaster.net,REJECT
DOMAIN-SUFFIX,api.similarweb.com,REJECT
DOMAIN-SUFFIX,api.tr.blismedia.com,REJECT
DOMAIN-SUFFIX,api.userstyles.org,REJECT
DOMAIN-SUFFIX,apiconfig.adwo.com,REJECT
DOMAIN-SUFFIX,api-shoulei-ssl.xunlei.com,REJECT
DOMAIN-SUFFIX,apistat.adbana.com,REJECT
DOMAIN-SUFFIX,apkdo.com,REJECT
DOMAIN-SUFFIX,apns.ios.ijinshan.com,REJECT
DOMAIN-SUFFIX,app.50bang.org,REJECT
DOMAIN-SUFFIX,app.waps.cn,REJECT
DOMAIN-SUFFIX,app.wapx.cn,REJECT
DOMAIN-SUFFIX,app01.nodes.gslb.mi-idc.com,REJECT
DOMAIN-SUFFIX,app02.nodes.gslb.mi-idc.com,REJECT
DOMAIN-SUFFIX,appadhoc.com,REJECT
DOMAIN-SUFFIX,appads.com,REJECT
DOMAIN-SUFFIX,appboy.com,REJECT
DOMAIN-SUFFIX,appcpa.net,REJECT
DOMAIN-SUFFIX,appdriver.cn,REJECT
DOMAIN-SUFFIX,appdriver.com.cn,REJECT
DOMAIN-SUFFIX,appget.cn,REJECT
DOMAIN-SUFFIX,applifier.com,REJECT
DOMAIN-SUFFIX,apppic.yingyongbei.com,REJECT
DOMAIN-SUFFIX,appsdk.tanv.com,REJECT
DOMAIN-SUFFIX,appservices.comcsoft.com,REJECT
DOMAIN-SUFFIX,appsflyer.com,REJECT
DOMAIN-SUFFIX,appuu.cn,REJECT
DOMAIN-SUFFIX,aqgyju.cn,REJECT
DOMAIN-SUFFIX,aqqgli3vle.bid,REJECT
DOMAIN-SUFFIX,aralego.com,REJECT
DOMAIN-SUFFIX,ard.ihookup.com,REJECT
DOMAIN-SUFFIX,ard.sweetdiscreet.com,REJECT
DOMAIN-SUFFIX,arealx.com,REJECT
DOMAIN-SUFFIX,as.inbox.com,REJECT
DOMAIN-SUFFIX,as.sinahk.net,REJECT
DOMAIN-SUFFIX,as.trklinklog.com,REJECT
DOMAIN-SUFFIX,asd.projectfreetv.so,REJECT
DOMAIN-SUFFIX,ashow.pcpop.com,REJECT
DOMAIN-SUFFIX,assets.210189.com,REJECT
DOMAIN-SUFFIX,assets.servedby-buysellads.com,REJECT
DOMAIN-SUFFIX,aswlx.cn,REJECT
DOMAIN-SUFFIX,at98.com,REJECT
DOMAIN-SUFFIX,atas.io,REJECT
DOMAIN-SUFFIX,atdmt.com,REJECT
DOMAIN-SUFFIX,atiws.aipai.com,REJECT
DOMAIN-SUFFIX,atomicblast.lol,REJECT
DOMAIN-SUFFIX,audience.network,REJECT
DOMAIN-SUFFIX,authedmine.com,REJECT
DOMAIN-SUFFIX,avpa.dzone.com,REJECT
DOMAIN-SUFFIX,avualrhg9p.bid,REJECT
DOMAIN-SUFFIX,award.sitekeuring.net,REJECT
DOMAIN-SUFFIX,awempire.com,REJECT
DOMAIN-SUFFIX,awkjs.com,REJECT
DOMAIN-SUFFIX,awyys.com,REJECT
DOMAIN-SUFFIX,ax.ggfeng.com,REJECT
DOMAIN-SUFFIX,axhxa.com,REJECT
DOMAIN-SUFFIX,axiba66.com,REJECT
DOMAIN-SUFFIX,axkxy.com,REJECT
DOMAIN-SUFFIX,ayabreya.xyz,REJECT
DOMAIN-SUFFIX,b.77vcd.com,REJECT
DOMAIN-SUFFIX,b.ads1.msn.com,REJECT
DOMAIN-SUFFIX,b.babylon.com,REJECT
DOMAIN-SUFFIX,b.baiy.net,REJECT
DOMAIN-SUFFIX,b.cyone.com.cn,REJECT
DOMAIN-SUFFIX,b.epinv.com,REJECT
DOMAIN-SUFFIX,b.livesport.eu,REJECT
DOMAIN-SUFFIX,b.localpages.com,REJECT
DOMAIN-SUFFIX,b.thefile.me,REJECT
DOMAIN-SUFFIX,b.xcafe.com,REJECT
DOMAIN-SUFFIX,b1.51scw.net,REJECT
DOMAIN-SUFFIX,b1.91jucai.com,REJECT
DOMAIN-SUFFIX,b1.c1km4.com,REJECT
DOMAIN-SUFFIX,b17.8794.cn,REJECT
DOMAIN-SUFFIX,b17.shangc.net,REJECT
DOMAIN-SUFFIX,b1sync.zemanta.com,REJECT
DOMAIN-SUFFIX,b7nkd.cn,REJECT
DOMAIN-SUFFIX,b92.putniktravel.com,REJECT
DOMAIN-SUFFIX,b9377h.com,REJECT
DOMAIN-SUFFIX,b99u.top,REJECT
DOMAIN-SUFFIX,ba.ccm2.net,REJECT
DOMAIN-SUFFIX,ba.kioskea.net,REJECT
DOMAIN-SUFFIX,badad.googleplex.com,REJECT
DOMAIN-SUFFIX,badao37.net,REJECT
DOMAIN-SUFFIX,bai3.gushiwen.org,REJECT
DOMAIN-SUFFIX,baiapk.com,REJECT
DOMAIN-SUFFIX,baiduace.com,REJECT
DOMAIN-SUFFIX,baidujs.cnys.com,REJECT
DOMAIN-SUFFIX,baidulao.com,REJECT
DOMAIN-SUFFIX,baidustatic.com,REJECT
DOMAIN-SUFFIX,baiduzhidahao.cc,REJECT
DOMAIN-SUFFIX,baifen.music.baidu.com,REJECT
DOMAIN-SUFFIX,baifendian.com,REJECT
DOMAIN-SUFFIX,bam.nr-data.net,REJECT
DOMAIN-SUFFIX,banmamedia.com,REJECT
DOMAIN-SUFFIX,bannedbook.org,REJECT
DOMAIN-SUFFIX,banner.101xp.com,REJECT
DOMAIN-SUFFIX,banner.3ddownloads.com,REJECT
DOMAIN-SUFFIX,banner.automotiveworld.com,REJECT
DOMAIN-SUFFIX,banner.europacasino.com,REJECT
DOMAIN-SUFFIX,banner.itweb.co.za,REJECT
DOMAIN-SUFFIX,banner.telefragged.com,REJECT
DOMAIN-SUFFIX,banner.titancasino.com,REJECT
DOMAIN-SUFFIX,banner1.pornhost.com,REJECT
DOMAIN-SUFFIX,banners.beevpn.com,REJECT
DOMAIN-SUFFIX,banners.beted.com,REJECT
DOMAIN-SUFFIX,banners.cams.com,REJECT
DOMAIN-SUFFIX,banners.clubworldgroup.com,REJECT
DOMAIN-SUFFIX,banners.expressindia.com,REJECT
DOMAIN-SUFFIX,banners.itweb.co.za,REJECT
DOMAIN-SUFFIX,banners.playocio.com,REJECT
DOMAIN-SUFFIX,bannershotlink.perfectgonzo.com,REJECT
DOMAIN-SUFFIX,baoyatu.cc,REJECT
DOMAIN-SUFFIX,base.filedot.xyz,REJECT
DOMAIN-SUFFIX,bat.bing.com,REJECT
DOMAIN-SUFFIX,baycode.cn,REJECT
DOMAIN-SUFFIX,bb.tuku.cc,REJECT
DOMAIN-SUFFIX,bbdm.051661.com,REJECT
DOMAIN-SUFFIX,bccyyc.com,REJECT
DOMAIN-SUFFIX,bcjjg.bugsevent.com,REJECT
DOMAIN-SUFFIX,bcjxf.bugsevent.com,REJECT
DOMAIN-SUFFIX,bd.ershenghuo.com,REJECT
DOMAIN-SUFFIX,bd.haomagujia.com,REJECT
DOMAIN-SUFFIX,bd.soarfi.cn,REJECT
DOMAIN-SUFFIX,bd.wayqq.cn,REJECT
DOMAIN-SUFFIX,bd01.daqiso.com,REJECT
DOMAIN-SUFFIX,bd1.365qilu.com,REJECT
DOMAIN-SUFFIX,bd1.fengdu100.com,REJECT
DOMAIN-SUFFIX,bd1.jobui.com,REJECT
DOMAIN-SUFFIX,bd1.nipic.com,REJECT
DOMAIN-SUFFIX,bd1.nxing.cn,REJECT
DOMAIN-SUFFIX,bd1.szhk.com,REJECT
DOMAIN-SUFFIX,bd1.wowoqq.com,REJECT
DOMAIN-SUFFIX,bd1.xiangha.com,REJECT
DOMAIN-SUFFIX,bdad.hao224.com,REJECT
DOMAIN-SUFFIX,bdapi.ads.oppomobile.com,REJECT
DOMAIN-SUFFIX,bdcode.gaosan.com,REJECT
DOMAIN-SUFFIX,bdcode.youke.com,REJECT
DOMAIN-SUFFIX,bdd.hainan.net,REJECT
DOMAIN-SUFFIX,bdjiaoben.wmxa.cn,REJECT
DOMAIN-SUFFIX,bdjs.120askimages.com,REJECT
DOMAIN-SUFFIX,bdjs.99.com.cn,REJECT
DOMAIN-SUFFIX,bdjs.faxingzhan.com,REJECT
DOMAIN-SUFFIX,bdjs.ixiumei.com,REJECT
DOMAIN-SUFFIX,bdjs.kaixin100.com,REJECT
DOMAIN-SUFFIX,bdjs.ylq.com,REJECT
DOMAIN-SUFFIX,bdlm1.hc360.com,REJECT
DOMAIN-SUFFIX,bdlncs1.familydoctor.com.cn,REJECT
DOMAIN-SUFFIX,bdpuaw.com,REJECT
DOMAIN-SUFFIX,bds.hainan.net,REJECT
DOMAIN-SUFFIX,bdtongfei.cn,REJECT
DOMAIN-SUFFIX,beacon.gtimg.com,REJECT
DOMAIN-SUFFIX,beacon.krxd.net,REJECT
DOMAIN-SUFFIX,beacon.tingyun.com,REJECT
DOMAIN-SUFFIX,bebelait.com,REJECT
DOMAIN-SUFFIX,becode.qiushibaike.com,REJECT
DOMAIN-SUFFIX,beeho.site,REJECT
DOMAIN-SUFFIX,behe.com,REJECT
DOMAIN-SUFFIX,beintoo.com,REJECT
DOMAIN-SUFFIX,bepolite.eu,REJECT
DOMAIN-SUFFIX,bes-progfree.com,REJECT
DOMAIN-SUFFIX,bfdcdn.com,REJECT
DOMAIN-SUFFIX,bh.contextweb.com,REJECT
DOMAIN-SUFFIX,bid.adview.cn,REJECT
DOMAIN-SUFFIX,biddingos.com,REJECT
DOMAIN-SUFFIX,biddingx.com,REJECT
DOMAIN-SUFFIX,bidvertiser.com,REJECT
DOMAIN-SUFFIX,bigbos.top,REJECT
DOMAIN-SUFFIX,bigboy.eurogamer.net,REJECT
DOMAIN-SUFFIX,bigdata.adfuture.cn,REJECT
DOMAIN-SUFFIX,bigdata.adsunflower.com,REJECT
DOMAIN-SUFFIX,bigdata.adups.com,REJECT
DOMAIN-SUFFIX,bigdata.advmob.cn,REJECT
DOMAIN-SUFFIX,billionfocus.com,REJECT
DOMAIN-SUFFIX,bingyinq.com,REJECT
DOMAIN-SUFFIX,bivitr.com,REJECT
DOMAIN-SUFFIX,biyibia.com,REJECT
DOMAIN-SUFFIX,biz.gexing.com,REJECT
DOMAIN-SUFFIX,biz.live.xunlei.com,REJECT
DOMAIN-SUFFIX,biz37.net,REJECT
DOMAIN-SUFFIX,bizanti.youwatch.org,REJECT
DOMAIN-SUFFIX,bj.bcebos.com,REJECT
DOMAIN-SUFFIX,bjcathay.com,REJECT
DOMAIN-SUFFIX,bjs.9669.cn,REJECT
DOMAIN-SUFFIX,bl.wavecdn.de,REJECT
DOMAIN-SUFFIX,blaaaa12.googlecode.com,REJECT
DOMAIN-SUFFIX,bllbaby.cn,REJECT
DOMAIN-SUFFIX,blogad01.myweb.hinet.net,REJECT
DOMAIN-SUFFIX,blogad02.myweb.hinet.net,REJECT
DOMAIN-SUFFIX,bloggerads.net,REJECT
DOMAIN-SUFFIX,bluekai.com,REJECT
DOMAIN-SUFFIX,bluhostedbanners.blucigs.com,REJECT
DOMAIN-SUFFIX,bnrs.ilm.ee,REJECT
DOMAIN-SUFFIX,bob.crazyshit.com,REJECT
DOMAIN-SUFFIX,bosiwangzi.cn,REJECT
DOMAIN-SUFFIX,box.anchorfree.net,REJECT
DOMAIN-SUFFIX,boyxu.cn,REJECT
DOMAIN-SUFFIX,bp.mobad.ijinshan.com,REJECT
DOMAIN-SUFFIX,br.blackfling.com,REJECT
DOMAIN-SUFFIX,br.fling.com,REJECT
DOMAIN-SUFFIX,br.realitykings.com,REJECT
DOMAIN-SUFFIX,brakefluid.website,REJECT
DOMAIN-SUFFIX,brcache.madthumbs.com,REJECT
DOMAIN-SUFFIX,breezily168.com,REJECT
DOMAIN-SUFFIX,browser.gwdang.com,REJECT
DOMAIN-SUFFIX,bsdev.cn,REJECT
DOMAIN-SUFFIX,bshare.cn,REJECT
DOMAIN-SUFFIX,bstatic.1kejian.com,REJECT
DOMAIN-SUFFIX,bstatic.diyifanwen.com,REJECT
DOMAIN-SUFFIX,bthergyuan.com,REJECT
DOMAIN-SUFFIX,btn.onlylady.com,REJECT
DOMAIN-SUFFIX,btn.pchome.net,REJECT
DOMAIN-SUFFIX,btr.domywife.com,REJECT
DOMAIN-SUFFIX,bttrack.com,REJECT
DOMAIN-SUFFIX,btyou.com,REJECT
DOMAIN-SUFFIX,bu1.duba.com,REJECT
DOMAIN-SUFFIX,bu2.duba.com,REJECT
DOMAIN-SUFFIX,bugtags.com,REJECT
DOMAIN-SUFFIX,business.92wy.com,REJECT
DOMAIN-SUFFIX,buyimg.bianxianmao.com,REJECT
DOMAIN-SUFFIX,buysellads.com,REJECT
DOMAIN-SUFFIX,bwp.theinsider.com.com,REJECT
DOMAIN-SUFFIX,bxgmb.com,REJECT
DOMAIN-SUFFIX,bxjpl.cn,REJECT
DOMAIN-SUFFIX,by.dm5.com,REJECT
DOMAIN-SUFFIX,by.tel.cdndm.com,REJECT
DOMAIN-SUFFIX,by8974.com,REJECT
DOMAIN-SUFFIX,bydonline.com,REJECT
DOMAIN-SUFFIX,bypbwm.cn,REJECT
DOMAIN-SUFFIX,c.0.0.0.0.cn,REJECT
DOMAIN-SUFFIX,c.28487.net,REJECT
DOMAIN-SUFFIX,c.35kds.com,REJECT
DOMAIN-SUFFIX,c.adsco.re,REJECT
DOMAIN-SUFFIX,c.betrad.com,REJECT
DOMAIN-SUFFIX,c.bing.com,REJECT
DOMAIN-SUFFIX,c.bxb.oupeng.com,REJECT
DOMAIN-SUFFIX,c.danangmo.cn,REJECT
DOMAIN-SUFFIX,c.metrigo.com,REJECT
DOMAIN-SUFFIX,c.minisplat.cn,REJECT
DOMAIN-SUFFIX,c.msn.com,REJECT
DOMAIN-SUFFIX,c.msn.com.cn,REJECT
DOMAIN-SUFFIX,c.netu.tv,REJECT
DOMAIN-SUFFIX,c.wrating.com,REJECT
DOMAIN-SUFFIX,c0.ifengimg.com,REJECT
DOMAIN-SUFFIX,c0563.com,REJECT
DOMAIN-SUFFIX,c0i8h8ac7e.bid,REJECT
DOMAIN-SUFFIX,c1.4qx.net,REJECT
DOMAIN-SUFFIX,c1.adform.net,REJECT
DOMAIN-SUFFIX,c1.ifengimg.com,REJECT
DOMAIN-SUFFIX,c1.minisplat.cn,REJECT
DOMAIN-SUFFIX,c1.popads.net,REJECT
DOMAIN-SUFFIX,c2.popads.net,REJECT
DOMAIN-SUFFIX,caamei.com,REJECT
DOMAIN-SUFFIX,cacaca.0571yy.com,REJECT
DOMAIN-SUFFIX,cacafly.net,REJECT
DOMAIN-SUFFIX,cache.soloth.com,REJECT
DOMAIN-SUFFIX,cachead.com,REJECT
DOMAIN-SUFFIX,cachesit.com,REJECT
DOMAIN-SUFFIX,cadvv.heraldm.com,REJECT
DOMAIN-SUFFIX,cadvv.koreaherald.com,REJECT
DOMAIN-SUFFIX,caiyifz.com,REJECT
DOMAIN-SUFFIX,caliyuna.cn,REJECT
DOMAIN-SUFFIX,cams.pornrabbit.com,REJECT
DOMAIN-SUFFIX,cangnews.com,REJECT
DOMAIN-SUFFIX,canvas.thenextweb.com,REJECT
DOMAIN-SUFFIX,caob5.info,REJECT
DOMAIN-SUFFIX,caolvch.com,REJECT
DOMAIN-SUFFIX,carbonads.net,REJECT
DOMAIN-SUFFIX,cas.clickability.com,REJECT
DOMAIN-SUFFIX,casalemedia.com,REJECT
DOMAIN-SUFFIX,casee.cn,REJECT
DOMAIN-SUFFIX,cash.neweramediaworks.com,REJECT
DOMAIN-SUFFIX,cast.ra.icast.cn,REJECT
DOMAIN-SUFFIX,castplatform.com,REJECT
DOMAIN-SUFFIX,catalog.video.msn.com,REJECT
DOMAIN-SUFFIX,cayanfang.com,REJECT
DOMAIN-SUFFIX,cc.yac8.com,REJECT
DOMAIN-SUFFIX,ccbaihehq.com,REJECT
DOMAIN-SUFFIX,ccclub.cmbchina.com,REJECT
DOMAIN-SUFFIX,cccrir.com,REJECT
DOMAIN-SUFFIX,ccr.yxdown.com,REJECT
DOMAIN-SUFFIX,cctyly.com,REJECT
DOMAIN-SUFFIX,cdgxq.com,REJECT
DOMAIN-SUFFIX,cdn.ads.jlscds.com,REJECT
DOMAIN-SUFFIX,cdn.adsk2.co,REJECT
DOMAIN-SUFFIX,cdn.adstract.com,REJECT
DOMAIN-SUFFIX,cdn.districtm.io,REJECT
DOMAIN-SUFFIX,cdn.dragonstatic.com,REJECT
DOMAIN-SUFFIX,cdn.jiuzhilan.com,REJECT
DOMAIN-SUFFIX,cdn.popcash.net,REJECT
DOMAIN-SUFFIX,cdn.popmyads.com,REJECT
DOMAIN-SUFFIX,cdn.puata.info,REJECT
DOMAIN-SUFFIX,cdn0.mobmore.com,REJECT
DOMAIN-SUFFIX,cdnads.com,REJECT
DOMAIN-SUFFIX,cdnimg.liehu.ijinshan.com,REJECT
DOMAIN-SUFFIX,cdnmaster.com,REJECT
DOMAIN-SUFFIX,cdnny.com,REJECT
DOMAIN-SUFFIX,cdyqc.com,REJECT
DOMAIN-SUFFIX,cee1.iteye.com,REJECT
DOMAIN-SUFFIX,cee2.iteye.com,REJECT
DOMAIN-SUFFIX,cerebral.typn.com,REJECT
DOMAIN-SUFFIX,cgskqg.com,REJECT
DOMAIN-SUFFIX,chadegongxiao.com,REJECT
DOMAIN-SUFFIX,chance-ad.com,REJECT
DOMAIN-SUFFIX,chanet.com.cn,REJECT
DOMAIN-SUFFIX,changhehengqi.com,REJECT
DOMAIN-SUFFIX,channeladvisor.com,REJECT
DOMAIN-SUFFIX,chaoliangyun.com,REJECT
DOMAIN-SUFFIX,chartbeat.com,REJECT
DOMAIN-SUFFIX,chartboost.com,REJECT
DOMAIN-SUFFIX,chebse.com,REJECT
DOMAIN-SUFFIX,chengadx.com,REJECT
DOMAIN-SUFFIX,chenggao.cn,REJECT
DOMAIN-SUFFIX,chengzhao95511.com,REJECT
DOMAIN-SUFFIX,chenwen7788.com,REJECT
DOMAIN-SUFFIX,chicken18.com,REJECT
DOMAIN-SUFFIX,chidir.com,REJECT
DOMAIN-SUFFIX,chinacsky.com,REJECT
DOMAIN-SUFFIX,chinaheh.com,REJECT
DOMAIN-SUFFIX,chinauma.net,REJECT
DOMAIN-SUFFIX,chinaweichu.net,REJECT
DOMAIN-SUFFIX,chjxzk.1555110.cn,REJECT
DOMAIN-SUFFIX,chmae.com,REJECT
DOMAIN-SUFFIX,chnhty.com,REJECT
DOMAIN-SUFFIX,chushoushijian.cn,REJECT
DOMAIN-SUFFIX,ci.csefaazc.net,REJECT
DOMAIN-SUFFIX,ciajingman.com,REJECT
DOMAIN-SUFFIX,cindy17club.com,REJECT
DOMAIN-SUFFIX,ciyitan.com,REJECT
DOMAIN-SUFFIX,cjmooter.xcache.kinxcdn.com,REJECT
DOMAIN-SUFFIX,cl.he9630.com,REJECT
DOMAIN-SUFFIX,clarity.abacast.com,REJECT
DOMAIN-SUFFIX,click.bokecc.com,REJECT
DOMAIN-SUFFIX,click.eyk.net,REJECT
DOMAIN-SUFFIX,click.hay3s.com,REJECT
DOMAIN-SUFFIX,click.jebe.renren.com,REJECT
DOMAIN-SUFFIX,click.livedoor.com,REJECT
DOMAIN-SUFFIX,click.qianqian.com,REJECT
DOMAIN-SUFFIX,click.wrating.com,REJECT
DOMAIN-SUFFIX,clickadu.com,REJECT
DOMAIN-SUFFIX,clicki.cn,REJECT
DOMAIN-SUFFIX,clicks.superpages.com,REJECT
DOMAIN-SUFFIX,clickstrip.6wav.es,REJECT
DOMAIN-SUFFIX,clicktracks.com,REJECT
DOMAIN-SUFFIX,clickzs.com,REJECT
DOMAIN-SUFFIX,client.88tours.com,REJECT
DOMAIN-SUFFIX,client.stats.yinyuetai.com,REJECT
DOMAIN-SUFFIX,cliushow.com,REJECT
DOMAIN-SUFFIX,clk.taptica.com,REJECT
DOMAIN-SUFFIX,clkads.com,REJECT
DOMAIN-SUFFIX,clkrev.com,REJECT
DOMAIN-SUFFIX,cloudad.asia,REJECT
DOMAIN-SUFFIX,cloudcdn.yousee.com,REJECT
DOMAIN-SUFFIX,cloudmobi.net,REJECT
DOMAIN-SUFFIX,cloudservice22.kingsoft-office-service.com,REJECT
DOMAIN-SUFFIX,cm.adgrx.com,REJECT
DOMAIN-SUFFIX,cm.adkmob.com,REJECT
DOMAIN-SUFFIX,cm.bilibili.com,REJECT
DOMAIN-SUFFIX,cm.ctnsnet.com,REJECT
DOMAIN-SUFFIX,cm.eyereturn.com,REJECT
DOMAIN-SUFFIX,cm.netseer.com,REJECT
DOMAIN-SUFFIX,cm.reachmax.cn,REJECT
DOMAIN-SUFFIX,cmaxisolation.com,REJECT
DOMAIN-SUFFIX,cmcdl.cmcm.com,REJECT
DOMAIN-SUFFIX,cmcore.com,REJECT
DOMAIN-SUFFIX,cmp288.com,REJECT
DOMAIN-SUFFIX,cms.an.m.liebao.cn,REJECT
DOMAIN-SUFFIX,cms.quantserve.com,REJECT
DOMAIN-SUFFIX,cmslayue.com,REJECT
DOMAIN-SUFFIX,cn.tatami-solutions.com,REJECT
DOMAIN-SUFFIX,cnbole.net,REJECT
DOMAIN-SUFFIX,cncy8.com,REJECT
DOMAIN-SUFFIX,cnetwidget.creativemark.co.uk,REJECT
DOMAIN-SUFFIX,cnf.adbana.com,REJECT
DOMAIN-SUFFIX,cnfanglei.com,REJECT
DOMAIN-SUFFIX,cnhbxx.com,REJECT
DOMAIN-SUFFIX,cnkok.com,REJECT
DOMAIN-SUFFIX,cnnic.cn,REJECT
DOMAIN-SUFFIX,cnnic.net,REJECT
DOMAIN-SUFFIX,cnnic.net.cn,REJECT
DOMAIN-SUFFIX,cnpinzhuo.com,REJECT
DOMAIN-SUFFIX,cnscdj.com,REJECT
DOMAIN-SUFFIX,cnsjx.net,REJECT
DOMAIN-SUFFIX,cnxad.com,REJECT
DOMAIN-SUFFIX,cnxad.net,REJECT
DOMAIN-SUFFIX,cnzhqs.com,REJECT
DOMAIN-SUFFIX,cocounion.com,REJECT
DOMAIN-SUFFIX,code.kaixinjiehun.com,REJECT
DOMAIN-SUFFIX,code222.com,REJECT
DOMAIN-SUFFIX,code668.com,REJECT
DOMAIN-SUFFIX,codenow.cn,REJECT
DOMAIN-SUFFIX,coinblind.com,REJECT
DOMAIN-SUFFIX,coinerra.com,REJECT
DOMAIN-SUFFIX,coin-have.com,REJECT
DOMAIN-SUFFIX,coinhive.com,REJECT
DOMAIN-SUFFIX,coin-hive.com,REJECT
DOMAIN-SUFFIX,coinhive-manager.com,REJECT
DOMAIN-SUFFIX,coin-hive-proxy-ybydcnjgkl.now.sh,REJECT
DOMAIN-SUFFIX,coinminerz.com,REJECT
DOMAIN-SUFFIX,coinnebula.com,REJECT
DOMAIN-SUFFIX,col.hztags.net,REJECT
DOMAIN-SUFFIX,collector.githubapp.com,REJECT
DOMAIN-SUFFIX,collector.viki.io,REJECT
DOMAIN-SUFFIX,combine.urbanairship.com,REJECT
DOMAIN-SUFFIX,comesgo.com,REJECT
DOMAIN-SUFFIX,conf.xiniuz.com,REJECT
DOMAIN-SUFFIX,config.adview.cn,REJECT
DOMAIN-SUFFIX,config.ioam.de,REJECT
DOMAIN-SUFFIX,config.mobisage.cn,REJECT
DOMAIN-SUFFIX,config2.mparticle.com,REJECT
DOMAIN-SUFFIX,connect.summit.co.uk,REJECT
DOMAIN-SUFFIX,content.livesportmedia.eu,REJECT
DOMAIN-SUFFIX,content.streamplay.to,REJECT
DOMAIN-SUFFIX,contentabc.com,REJECT
DOMAIN-SUFFIX,conversion.adpro.cn,REJECT
DOMAIN-SUFFIX,conversion.pro.cn,REJECT
DOMAIN-SUFFIX,cooguo.com,REJECT
DOMAIN-SUFFIX,cookiemapping.wrating.com,REJECT
DOMAIN-SUFFIX,coolguang.com,REJECT
DOMAIN-SUFFIX,coolnay.com,REJECT
DOMAIN-SUFFIX,cooolyi.cn,REJECT
DOMAIN-SUFFIX,cop.my,REJECT
DOMAIN-SUFFIX,coremetrics.com,REJECT
DOMAIN-SUFFIX,coro.benbaisteel.com,REJECT
DOMAIN-SUFFIX,corocksi.com,REJECT
DOMAIN-SUFFIX,cosoyoo.com,REJECT
DOMAIN-SUFFIX,couqm.com.cn,REJECT
DOMAIN-SUFFIX,cp.greenxf.cn,REJECT
DOMAIN-SUFFIX,cp.jfcdns.com,REJECT
DOMAIN-SUFFIX,cpcv.cc,REJECT
DOMAIN-SUFFIX,cpm.amateurcommunity.com,REJECT
DOMAIN-SUFFIX,cpm.amateurcommunity.de,REJECT
DOMAIN-SUFFIX,cpm.cm.sandai.net,REJECT
DOMAIN-SUFFIX,cpmchina.co,REJECT
DOMAIN-SUFFIX,cpms.cc,REJECT
DOMAIN-SUFFIX,cpro.9xu.com,REJECT
DOMAIN-SUFFIX,cpro1.edushi.com,REJECT
DOMAIN-SUFFIX,cpv.channelray,REJECT
DOMAIN-SUFFIX,cpv.ty229.com,REJECT
DOMAIN-SUFFIX,cpv6.com,REJECT
DOMAIN-SUFFIX,cpva.cc,REJECT
DOMAIN-SUFFIX,cpx24.com,REJECT
DOMAIN-SUFFIX,cqfangduan.com,REJECT
DOMAIN-SUFFIX,cqftonline.com,REJECT
DOMAIN-SUFFIX,cqhnm.com,REJECT
DOMAIN-SUFFIX,cqyhd.com,REJECT
DOMAIN-SUFFIX,cr.m.liebao.cn,REJECT
DOMAIN-SUFFIX,crasheye.cn,REJECT
DOMAIN-SUFFIX,crashlytics.com,REJECT
DOMAIN-SUFFIX,crdrjs.info,REJECT
DOMAIN-SUFFIX,cre99.com,REJECT
DOMAIN-SUFFIX,creative.1111cpc.com,REJECT
DOMAIN-SUFFIX,creative.jdkic.com,REJECT
DOMAIN-SUFFIX,creative.ltheanine.cn,REJECT
DOMAIN-SUFFIX,creatives.cliphunter.com,REJECT
DOMAIN-SUFFIX,creatives.inmotionhosting.com,REJECT
DOMAIN-SUFFIX,creatives.livejasmin.com,REJECT
DOMAIN-SUFFIX,creatives.pichunter.com,REJECT
DOMAIN-SUFFIX,creatives.summitconnect.co.uk,REJECT
DOMAIN-SUFFIX,criteo.com,REJECT
DOMAIN-SUFFIX,criteo.net,REJECT
DOMAIN-SUFFIX,crl.microsoft.com,REJECT
DOMAIN-SUFFIX,crm-eve.b2b.alibaba-inc.com,REJECT
DOMAIN-SUFFIX,cr-nielsen.com,REJECT
DOMAIN-SUFFIX,crosschannel.com,REJECT
DOMAIN-SUFFIX,cr-p16.ladsp.com,REJECT
DOMAIN-SUFFIX,cs.dqwjzm.com,REJECT
DOMAIN-SUFFIX,csad.cc,REJECT
DOMAIN-SUFFIX,csbew.com,REJECT
DOMAIN-SUFFIX,csi.gstatic.com,REJECT
DOMAIN-SUFFIX,csqiulong.com,REJECT
DOMAIN-SUFFIX,cstoa.com,REJECT
DOMAIN-SUFFIX,csxjys.com,REJECT
DOMAIN-SUFFIX,cszlks.com,REJECT
DOMAIN-SUFFIX,ct.210189.com,REJECT
DOMAIN-SUFFIX,ct.niu.xunlei.com,REJECT
DOMAIN-SUFFIX,cti.w55c.net,REJECT
DOMAIN-SUFFIX,ctsywy.com,REJECT
DOMAIN-SUFFIX,cupid.jebe.renren.com,REJECT
DOMAIN-SUFFIX,customer-security.online,REJECT
DOMAIN-SUFFIX,cws-cctv.conviva.com,REJECT
DOMAIN-SUFFIX,cy123.cc,REJECT
DOMAIN-SUFFIX,cyacc.com,REJECT
DOMAIN-SUFFIX,cyad.cc,REJECT
DOMAIN-SUFFIX,cyad123.com,REJECT
DOMAIN-SUFFIX,cylinderlongcheng.com,REJECT
DOMAIN-SUFFIX,cyylove.com,REJECT
DOMAIN-SUFFIX,cz01016102.cg2017.com,REJECT
DOMAIN-SUFFIX,cz01016102.ms758.com,REJECT
DOMAIN-SUFFIX,czdqhyo1.net,REJECT
DOMAIN-SUFFIX,czjiuding.cn,REJECT
DOMAIN-SUFFIX,czpush.com,REJECT
DOMAIN-SUFFIX,czpwm.com,REJECT
DOMAIN-SUFFIX,czxiangyue.com,REJECT
DOMAIN-SUFFIX,d.107788.com,REJECT
DOMAIN-SUFFIX,d.annarbor.com,REJECT
DOMAIN-SUFFIX,d.businessinsider.com,REJECT
DOMAIN-SUFFIX,d.gossipcenter.com,REJECT
DOMAIN-SUFFIX,d.ligatus.com,REJECT
DOMAIN-SUFFIX,d.mingyihui.net,REJECT
DOMAIN-SUFFIX,d.thelocal.com,REJECT
DOMAIN-SUFFIX,d.tonghua5.com,REJECT
DOMAIN-SUFFIX,d.union.ijinshan.com,REJECT
DOMAIN-SUFFIX,d.xinshipu.com,REJECT
DOMAIN-SUFFIX,d.yjbys.com,REJECT
DOMAIN-SUFFIX,d0.xcar.com.cn,REJECT
DOMAIN-SUFFIX,d1ad.com,REJECT
DOMAIN-SUFFIX,d1grtyyel8f1mh.cloudfront.net,REJECT
DOMAIN-SUFFIX,d1zgderxoe1a.cloudfront.net,REJECT
DOMAIN-SUFFIX,d36eyd5j1kt1m6.cloudfront.net,REJECT
DOMAIN-SUFFIX,d5nxst8fruw4z.cloudfront.net,REJECT
DOMAIN-SUFFIX,d5p.de17a.com,REJECT
DOMAIN-SUFFIX,d8360.com,REJECT
DOMAIN-SUFFIX,dacash.streamplay.to,REJECT
DOMAIN-SUFFIX,dads.new.digg.com,REJECT
DOMAIN-SUFFIX,dafahao.com,REJECT
DOMAIN-SUFFIX,dafahao.org,REJECT
DOMAIN-SUFFIX,dahanedu.com,REJECT
DOMAIN-SUFFIX,dailydeals.amarillo.com,REJECT
DOMAIN-SUFFIX,dailydeals.augustachronicle.com,REJECT
DOMAIN-SUFFIX,dailydeals.brainerddispatch.com,REJECT
DOMAIN-SUFFIX,dailydeals.lubbockonline.com,REJECT
DOMAIN-SUFFIX,dailydeals.onlineathens.com,REJECT
DOMAIN-SUFFIX,dailydeals.savannahnow.com,REJECT
DOMAIN-SUFFIX,dailyvideo.securejoin.com,REJECT
DOMAIN-SUFFIX,daima.23yy.com,REJECT
DOMAIN-SUFFIX,daima.chazidian.com,REJECT
DOMAIN-SUFFIX,daima.diaoben.net,REJECT
DOMAIN-SUFFIX,daima.huoche.net,REJECT
DOMAIN-SUFFIX,daima.ijq.tv,REJECT
DOMAIN-SUFFIX,daima.youbian.com,REJECT
DOMAIN-SUFFIX,daima123.cc,REJECT
DOMAIN-SUFFIX,dairuqi.com,REJECT
DOMAIN-SUFFIX,dajiyuan.com,REJECT
DOMAIN-SUFFIX,dajiyuan.org,REJECT
DOMAIN-SUFFIX,dalianhengtai.com,REJECT
DOMAIN-SUFFIX,dandan11.top,REJECT
DOMAIN-SUFFIX,dandan13.top,REJECT
DOMAIN-SUFFIX,dandan15.top,REJECT
DOMAIN-SUFFIX,dante2007.com,REJECT
DOMAIN-SUFFIX,daohang.114so.cn,REJECT
DOMAIN-SUFFIX,daoyoudao.com,REJECT
DOMAIN-SUFFIX,dart.clearchannel.com,REJECT
DOMAIN-SUFFIX,dashet.com,REJECT
DOMAIN-SUFFIX,data.ads.oppomobile.com,REJECT
DOMAIN-SUFFIX,data.ad-score.com,REJECT
DOMAIN-SUFFIX,data.apn.co.nz,REJECT
DOMAIN-SUFFIX,data.bilibili.com,REJECT
DOMAIN-SUFFIX,data.neuroxmedia.com,REJECT
DOMAIN-SUFFIX,datafastguru.info,REJECT
DOMAIN-SUFFIX,datouniao.com,REJECT
DOMAIN-SUFFIX,dawwx.com,REJECT
DOMAIN-SUFFIX,dazhantai.com,REJECT
DOMAIN-SUFFIX,dazhonghua.cn,REJECT
DOMAIN-SUFFIX,dbam.dashbida.com,REJECT
DOMAIN-SUFFIX,dbncp.com,REJECT
DOMAIN-SUFFIX,dbwmjj.com,REJECT
DOMAIN-SUFFIX,dc.csdn.net,REJECT
DOMAIN-SUFFIX,dcad.watersoul.com,REJECT
DOMAIN-SUFFIX,dd.iask.cn,REJECT
DOMAIN-SUFFIX,dd.iaskgo.com,REJECT
DOMAIN-SUFFIX,dd713.bj.bcebos.com,REJECT
DOMAIN-SUFFIX,ddanq.com,REJECT
DOMAIN-SUFFIX,ddapp.cn,REJECT
DOMAIN-SUFFIX,ddd.yuyouge.com,REJECT
DOMAIN-SUFFIX,ddg1277.com,REJECT
DOMAIN-SUFFIX,ddhtek.com,REJECT
DOMAIN-SUFFIX,ddkkrrla.m.qxs.la,REJECT
DOMAIN-SUFFIX,ddomm.com,REJECT
DOMAIN-SUFFIX,ddrrccck.m.qxs.la,REJECT
DOMAIN-SUFFIX,de.ioam.de,REJECT
DOMAIN-SUFFIX,deals.ledgertranscript.com,REJECT
DOMAIN-SUFFIX,dejing.laobanfa.com,REJECT
DOMAIN-SUFFIX,deletemer.online,REJECT
DOMAIN-SUFFIX,delivery.playallvideos.com,REJECT
DOMAIN-SUFFIX,delivery.porn.com,REJECT
DOMAIN-SUFFIX,delivery.thebloggernetwork.com,REJECT
DOMAIN-SUFFIX,delivery.wasu.cn,REJECT
DOMAIN-SUFFIX,desk.cmix.org,REJECT
DOMAIN-SUFFIX,detuns.com,REJECT
DOMAIN-SUFFIX,dezfu.com,REJECT
DOMAIN-SUFFIX,df3n43m.com,REJECT
DOMAIN-SUFFIX,df77.com,REJECT
DOMAIN-SUFFIX,dfad.dfdaily.com,REJECT
DOMAIN-SUFFIX,dfc1.benbaisteel.com,REJECT
DOMAIN-SUFFIX,dgpzx.com,REJECT
DOMAIN-SUFFIX,dh.holaworld.cn,REJECT
DOMAIN-SUFFIX,dhxyzx.cn,REJECT
DOMAIN-SUFFIX,dianjoy.com,REJECT
DOMAIN-SUFFIX,dianru.com,REJECT
DOMAIN-SUFFIX,diaojiaoji168.com,REJECT
DOMAIN-SUFFIX,digdug.divxnetworks.com,REJECT
DOMAIN-SUFFIX,dimg1.sz.net.cn,REJECT
DOMAIN-SUFFIX,dingon.com.cn,REJECT
DOMAIN-SUFFIX,dip.szhyzkj.com,REJECT
DOMAIN-SUFFIX,dipan.com,REJECT
DOMAIN-SUFFIX,directrev.com,REJECT
DOMAIN-SUFFIX,dis.crieto.com,REJECT
DOMAIN-SUFFIX,dis.criteo.com,REJECT
DOMAIN-SUFFIX,discuz.gtimg.cn,REJECT
DOMAIN-SUFFIX,display.ad.daum.net,REJECT
DOMAIN-SUFFIX,display.adhudong.com,REJECT
DOMAIN-SUFFIX,display.digitalriver.com,REJECT
DOMAIN-SUFFIX,display.superbay.net,REJECT
DOMAIN-SUFFIX,disqusads.com,REJECT
DOMAIN-SUFFIX,distf.kankan.com,REJECT
DOMAIN-SUFFIX,diyxjd.com,REJECT
DOMAIN-SUFFIX,djs.baomihua.com,REJECT
DOMAIN-SUFFIX,dkdlsj.com,REJECT
DOMAIN-SUFFIX,dl.9xu.com,REJECT
DOMAIN-SUFFIX,dl.cm.ksmobile.com,REJECT
DOMAIN-SUFFIX,dl.jianshunrui.com,REJECT
DOMAIN-SUFFIX,dl.sybspools.com,REJECT
DOMAIN-SUFFIX,dl.union.ijinshan.com,REJECT
DOMAIN-SUFFIX,dl.youjia2016.com,REJECT
DOMAIN-SUFFIX,dleke.com,REJECT
DOMAIN-SUFFIX,dlpifu.com,REJECT
DOMAIN-SUFFIX,dlrijiaele.com,REJECT
DOMAIN-SUFFIX,dlzjdesign.com,REJECT
DOMAIN-SUFFIX,dm.388g.cc,REJECT
DOMAIN-SUFFIX,dm.51okc.com,REJECT
DOMAIN-SUFFIX,dm.92to.com,REJECT
DOMAIN-SUFFIX,dm.aizhan.com,REJECT
DOMAIN-SUFFIX,dm.bytedance.com,REJECT
DOMAIN-SUFFIX,dm.chalook.net,REJECT
DOMAIN-SUFFIX,dm.jb51.net,REJECT
DOMAIN-SUFFIX,dm.jsyst.cn,REJECT
DOMAIN-SUFFIX,dm.jy135.com,REJECT
DOMAIN-SUFFIX,dm.ppzuowen.com,REJECT
DOMAIN-SUFFIX,dm.pstatp.com,REJECT
DOMAIN-SUFFIX,dm.pw0.cn,REJECT
DOMAIN-SUFFIX,dm.riji.cn,REJECT
DOMAIN-SUFFIX,dm.sanwen.net,REJECT
DOMAIN-SUFFIX,dm.sanwen8.com,REJECT
DOMAIN-SUFFIX,dm.sb580.com,REJECT
DOMAIN-SUFFIX,dm.ws8.org,REJECT
DOMAIN-SUFFIX,dm.yjbys.com,REJECT
DOMAIN-SUFFIX,dm1.tom61.com,REJECT
DOMAIN-SUFFIX,dm50.jkyd.net,REJECT
DOMAIN-SUFFIX,dmp.adpush.cn,REJECT
DOMAIN-SUFFIX,dmpclick.deliver.ifeng.com,REJECT
DOMAIN-SUFFIX,dmrtb.com,REJECT
DOMAIN-SUFFIX,dmt.qcrx.cn,REJECT
DOMAIN-SUFFIX,dmtrck.com,REJECT
DOMAIN-SUFFIX,dn3.ixinwei.com,REJECT
DOMAIN-SUFFIX,dn7788.com,REJECT
DOMAIN-SUFFIX,dnvus.com,REJECT
DOMAIN-SUFFIX,do69ifsly4.me,REJECT
DOMAIN-SUFFIX,dol.deliver.ifeng.com,REJECT
DOMAIN-SUFFIX,dolphin.deliver.ifeng.com,REJECT
DOMAIN-SUFFIX,dongtaiwang.com,REJECT
DOMAIN-SUFFIX,dongtaiwang.org,REJECT
DOMAIN-SUFFIX,do-not-tracker.org,REJECT
DOMAIN-SUFFIX,dontblockme.modaco.com,REJECT
DOMAIN-SUFFIX,dopa.com,REJECT
DOMAIN-SUFFIX,dot.eporner.com,REJECT
DOMAIN-SUFFIX,dot2.eporner.com,REJECT
DOMAIN-SUFFIX,dotmore.com.tw,REJECT
DOMAIN-SUFFIX,dou777.com,REJECT
DOMAIN-SUFFIX,doubleclick.tv002.com,REJECT
DOMAIN-SUFFIX,doubleverify.com,REJECT
DOMAIN-SUFFIX,doudao.cn,REJECT
DOMAIN-SUFFIX,doudouguo.com,REJECT
DOMAIN-SUFFIX,doumob.com,REJECT
DOMAIN-SUFFIX,down.dashendown.com,REJECT
DOMAIN-SUFFIX,download.mackeeper.com,REJECT
DOMAIN-SUFFIX,dp.559.cc,REJECT
DOMAIN-SUFFIX,dpm.demdex.net,REJECT
DOMAIN-SUFFIX,dps.wtdtjs.com,REJECT
DOMAIN-SUFFIX,dr.holaworld.cn,REJECT
DOMAIN-SUFFIX,dragoncent.com,REJECT
DOMAIN-SUFFIX,drdj.m.gxwztv.com,REJECT
DOMAIN-SUFFIX,dreamfull.cn,REJECT
DOMAIN-SUFFIX,drlsf.com,REJECT
DOMAIN-SUFFIX,drxrc.com,REJECT
DOMAIN-SUFFIX,ds.jlbksy.com,REJECT
DOMAIN-SUFFIX,dshrx.com,REJECT
DOMAIN-SUFFIX,dsp.adfarm1.adition.com,REJECT
DOMAIN-SUFFIX,dsp.com,REJECT
DOMAIN-SUFFIX,dsp.pro.cn,REJECT
DOMAIN-SUFFIX,ds-pc.admsger.com,REJECT
DOMAIN-SUFFIX,dsxdn.com,REJECT
DOMAIN-SUFFIX,dt.adsafeprotected.com,REJECT
DOMAIN-SUFFIX,dtrk.slimcdn.com,REJECT
DOMAIN-SUFFIX,duanat.com,REJECT
DOMAIN-SUFFIX,duapp.com,REJECT
DOMAIN-SUFFIX,duapps.com,REJECT
DOMAIN-SUFFIX,dugbvb.com,REJECT
DOMAIN-SUFFIX,duiba.com.cn,REJECT
DOMAIN-SUFFIX,duiwai.baidu.com,REJECT
DOMAIN-SUFFIX,dumedia.ru,REJECT
DOMAIN-SUFFIX,duoyidd.com,REJECT
DOMAIN-SUFFIX,dushimj.com,REJECT
DOMAIN-SUFFIX,duusuu.com,REJECT
DOMAIN-SUFFIX,duyihu.net,REJECT
DOMAIN-SUFFIX,dvr8.com,REJECT
DOMAIN-SUFFIX,dvs.china.com,REJECT
DOMAIN-SUFFIX,dvser.china.com,REJECT
DOMAIN-SUFFIX,dvx-android.0.0.0.0.cn,REJECT
DOMAIN-SUFFIX,dw998.com,REJECT
DOMAIN-SUFFIX,dx1200.com,REJECT
DOMAIN-SUFFIX,dxpmedia.com,REJECT
DOMAIN-SUFFIX,dxprla.m.qxs.la,REJECT
DOMAIN-SUFFIX,dxssiyi.com,REJECT
DOMAIN-SUFFIX,dydab.com,REJECT
DOMAIN-SUFFIX,dyn.tnaflix.com,REJECT
DOMAIN-SUFFIX,dzais.com,REJECT
DOMAIN-SUFFIX,dzisou.com,REJECT
DOMAIN-SUFFIX,dzjzg.com,REJECT
DOMAIN-SUFFIX,e.0.0.0.0.cn,REJECT
DOMAIN-SUFFIX,e.0.0.0.0.com.cn,REJECT
DOMAIN-SUFFIX,e.28487.net,REJECT
DOMAIN-SUFFIX,e.admin60.com,REJECT
DOMAIN-SUFFIX,e.crashlytics.com,REJECT
DOMAIN-SUFFIX,e.emgwq.com,REJECT
DOMAIN-SUFFIX,e.fstaw.com,REJECT
DOMAIN-SUFFIX,e.hellomingpian.com,REJECT
DOMAIN-SUFFIX,e.kewro.com,REJECT
DOMAIN-SUFFIX,e.nexac.com,REJECT
DOMAIN-SUFFIX,e.qiaoyuwang.com,REJECT
DOMAIN-SUFFIX,e.romgv.com,REJECT
DOMAIN-SUFFIX,e.yangjingbang.net,REJECT
DOMAIN-SUFFIX,e.yycqc.com,REJECT
DOMAIN-SUFFIX,e7001.com,REJECT
DOMAIN-SUFFIX,e7002.com,REJECT
DOMAIN-SUFFIX,e7009.com,REJECT
DOMAIN-SUFFIX,e70123.com,REJECT
DOMAIN-SUFFIX,e7015.com,REJECT
DOMAIN-SUFFIX,e704.net,REJECT
DOMAIN-SUFFIX,e705.net,REJECT
DOMAIN-SUFFIX,e706.net,REJECT
DOMAIN-SUFFIX,e708.net,REJECT
DOMAIN-SUFFIX,e719.net,REJECT
DOMAIN-SUFFIX,e9377f.com,REJECT
DOMAIN-SUFFIX,eacash.streamplay.to,REJECT
DOMAIN-SUFFIX,eap.big5.enorth.com.cn,REJECT
DOMAIN-SUFFIX,eap.enorth.com.cn,REJECT
DOMAIN-SUFFIX,eclkspbn.com,REJECT
DOMAIN-SUFFIX,ecma.bdimg.com,REJECT
DOMAIN-SUFFIX,ecmb.bdimg.com,REJECT
DOMAIN-SUFFIX,ecmc.bdimg.com,REJECT
DOMAIN-SUFFIX,ecuc123.net,REJECT
DOMAIN-SUFFIX,edigitalsurvey.com,REJECT
DOMAIN-SUFFIX,edncui.net,REJECT
DOMAIN-SUFFIX,eduancm.com,REJECT
DOMAIN-SUFFIX,eduzzjy.com,REJECT
DOMAIN-SUFFIX,ee4kdushuba.com,REJECT
DOMAIN-SUFFIX,eee.eh39.co,REJECT
DOMAIN-SUFFIX,eee.kj78.org,REJECT
DOMAIN-SUFFIX,eee.ttyy888.co,REJECT
DOMAIN-SUFFIX,eeee500.com,REJECT
DOMAIN-SUFFIX,effectivemeasure.com,REJECT
DOMAIN-SUFFIX,effectivemeasure.net,REJECT
DOMAIN-SUFFIX,ekeide.com,REJECT
DOMAIN-SUFFIX,emarbox.com,REJECT
DOMAIN-SUFFIX,en.shenyun.com,REJECT
DOMAIN-SUFFIX,en.shenyun.org,REJECT
DOMAIN-SUFFIX,engine.lvehaisen.com,REJECT
DOMAIN-SUFFIX,engine.tuia.cn,REJECT
DOMAIN-SUFFIX,ent1.12584.cn,REJECT
DOMAIN-SUFFIX,epochtimes.org,REJECT
DOMAIN-SUFFIX,epochweekly.com,REJECT
DOMAIN-SUFFIX,epowernetworktrackerimages.s3.amazonaws.com,REJECT
DOMAIN-SUFFIX,erebor.douban.com,REJECT
DOMAIN-SUFFIX,esrpxyahzna.bid,REJECT
DOMAIN-SUFFIX,eteun.cn,REJECT
DOMAIN-SUFFIX,etl.xlmc.sandai.net,REJECT
DOMAIN-SUFFIX,euwidget.imshopping.com,REJECT
DOMAIN-SUFFIX,eva.ucas.com,REJECT
DOMAIN-SUFFIX,evefashion.cn,REJECT
DOMAIN-SUFFIX,event.mackeeper.com,REJECT
DOMAIN-SUFFIX,events.appsflyer.com,REJECT
DOMAIN-SUFFIX,events.kalooga.com,REJECT
DOMAIN-SUFFIX,events.pingan.com,REJECT
DOMAIN-SUFFIX,eviltracker.net,REJECT
DOMAIN-SUFFIX,ex.mobmore.com,REJECT
DOMAIN-SUFFIX,ex.puata.info,REJECT
DOMAIN-SUFFIX,exdynsrv.com,REJECT
DOMAIN-SUFFIX,exit.macandbumble.com,REJECT
DOMAIN-SUFFIX,exoclick.com,REJECT
DOMAIN-SUFFIX,exp.17wo.cn,REJECT
DOMAIN-SUFFIX,exp.3g.ifeng.com,REJECT
DOMAIN-SUFFIX,expo123.net,REJECT
DOMAIN-SUFFIX,ext.theglobalweb.com,REJECT
DOMAIN-SUFFIX,extmoney.i1608.com,REJECT
DOMAIN-SUFFIX,eyd77s.com,REJECT
DOMAIN-SUFFIX,eye.swfchan.com,REJECT
DOMAIN-SUFFIX,eyouv.cn,REJECT
DOMAIN-SUFFIX,ez33.org.cn,REJECT
DOMAIN-SUFFIX,ezine.oupeng.com,REJECT
DOMAIN-SUFFIX,ezucods.cn,REJECT
DOMAIN-SUFFIX,f.520tingshu.com,REJECT
DOMAIN-SUFFIX,f1.06ps.com,REJECT
DOMAIN-SUFFIX,f1.bizhiku.net,REJECT
DOMAIN-SUFFIX,f1.luoshenbest.cn,REJECT
DOMAIN-SUFFIX,f1.meishichina.com,REJECT
DOMAIN-SUFFIX,f1.p0y.cn,REJECT
DOMAIN-SUFFIX,f1.pig66.com,REJECT
DOMAIN-SUFFIX,f1190.com,REJECT
DOMAIN-SUFFIX,f1c.i.biquge5200.com,REJECT
DOMAIN-SUFFIX,f2.p0y.cn,REJECT
DOMAIN-SUFFIX,f2zd.com,REJECT
DOMAIN-SUFFIX,f3.mi-stat.gslb.mi-idc.com,REJECT
DOMAIN-SUFFIX,f6ce.com,REJECT
DOMAIN-SUFFIX,f70123.com,REJECT
DOMAIN-SUFFIX,f8272.com,REJECT
DOMAIN-SUFFIX,facebookma.cn,REJECT
DOMAIN-SUFFIX,falundata.com,REJECT
DOMAIN-SUFFIX,falundata.org,REJECT
DOMAIN-SUFFIX,fan.twitch.tv,REJECT
DOMAIN-SUFFIX,fancyapi.com,REJECT
DOMAIN-SUFFIX,fansi365.com,REJECT
DOMAIN-SUFFIX,fastable.com,REJECT
DOMAIN-SUFFIX,fastapi.net,REJECT
DOMAIN-SUFFIX,fastclick.com,REJECT
DOMAIN-SUFFIX,fastclick.net,REJECT
DOMAIN-SUFFIX,fastly.bench.cedexis.com,REJECT
DOMAIN-SUFFIX,fathionmall.com,REJECT
DOMAIN-SUFFIX,fcsass.org.cn,REJECT
DOMAIN-SUFFIX,fd.anzhi.com,REJECT
DOMAIN-SUFFIX,fd7c.com,REJECT
DOMAIN-SUFFIX,feedback.whalecloud.com,REJECT
DOMAIN-SUFFIX,feeds.logicbuy.com,REJECT
DOMAIN-SUFFIX,feeds.videosz.com,REJECT
DOMAIN-SUFFIX,feidalu.com,REJECT
DOMAIN-SUFFIX,feifish66.com,REJECT
DOMAIN-SUFFIX,feixin2.com,REJECT
DOMAIN-SUFFIX,fembsflungod.com,REJECT
DOMAIN-SUFFIX,fenggejiaju.com,REJECT
DOMAIN-SUFFIX,ff.nsg.org.ua,REJECT
DOMAIN-SUFFIX,fff.yuyouge.com,REJECT
DOMAIN-SUFFIX,ffhtek.com,REJECT
DOMAIN-SUFFIX,ffychb.com,REJECT
DOMAIN-SUFFIX,fge9vbrzwt.bid,REJECT
DOMAIN-SUFFIX,fgmtv.org,REJECT
DOMAIN-SUFFIX,file.ipinyou.com.cn,REJECT
DOMAIN-SUFFIX,files.adform.net,REJECT
DOMAIN-SUFFIX,fimserve.ign.com,REJECT
DOMAIN-SUFFIX,findicons.com,REJECT
DOMAIN-SUFFIX,finding.hardwareheaven.com,REJECT
DOMAIN-SUFFIX,findnsave.idahostatesman.com,REJECT
DOMAIN-SUFFIX,firefang.cn,REJECT
DOMAIN-SUFFIX,fjkst.com,REJECT
DOMAIN-SUFFIX,fjmeyer.com,REJECT
DOMAIN-SUFFIX,flashtalking.com,REJECT
DOMAIN-SUFFIX,flowcodeapp.com,REJECT
DOMAIN-SUFFIX,flurry.com,REJECT
DOMAIN-SUFFIX,fm.p0y.cn,REJECT
DOMAIN-SUFFIX,fmgoal.com,REJECT
DOMAIN-SUFFIX,fms.ipinyou.com,REJECT
DOMAIN-SUFFIX,fnkjj.com,REJECT
DOMAIN-SUFFIX,focusprolight.com,REJECT
DOMAIN-SUFFIX,folder.adfuture.cn,REJECT
DOMAIN-SUFFIX,folder.adsunflower.com,REJECT
DOMAIN-SUFFIX,folder.advmob.cn,REJECT
DOMAIN-SUFFIX,fota4.adups.cn,REJECT
DOMAIN-SUFFIX,fotacontrol.adfuture.cn,REJECT
DOMAIN-SUFFIX,fotao9.com,REJECT
DOMAIN-SUFFIX,founseezb.cn,REJECT
DOMAIN-SUFFIX,fpb.51edu.com,REJECT
DOMAIN-SUFFIX,fqtra.com,REJECT
DOMAIN-SUFFIX,fraudmetrix.cn,REJECT
DOMAIN-SUFFIX,frdhq.cn,REJECT
DOMAIN-SUFFIX,freexxxvideoclip.aebn.net,REJECT
DOMAIN-SUFFIX,fs.uc.nearme.com.cn,REJECT
DOMAIN-SUFFIX,fsr.lenovomm.com,REJECT
DOMAIN-SUFFIX,fst360.com,REJECT
DOMAIN-SUFFIX,fsyzcs.com,REJECT
DOMAIN-SUFFIX,ft.pnop.com,REJECT
DOMAIN-SUFFIX,fthcz.com,REJECT
DOMAIN-SUFFIX,fu68.com,REJECT
DOMAIN-SUFFIX,fucnm.com,REJECT
DOMAIN-SUFFIX,fujianryt.com,REJECT
DOMAIN-SUFFIX,fun.ynet.com,REJECT
DOMAIN-SUFFIX,fus.lenovomm.com,REJECT
DOMAIN-SUFFIX,fv99.com,REJECT
DOMAIN-SUFFIX,fw.adsafeprotected.com,REJECT
DOMAIN-SUFFIX,fwt0.com,REJECT
DOMAIN-SUFFIX,fxc.aiquxs.com,REJECT
DOMAIN-SUFFIX,fxmacd.com,REJECT
DOMAIN-SUFFIX,fxtducb.cn,REJECT
DOMAIN-SUFFIX,fxxgw.com,REJECT
DOMAIN-SUFFIX,fydgold132.com,REJECT
DOMAIN-SUFFIX,fytza.cn,REJECT
DOMAIN-SUFFIX,fz863.com,REJECT
DOMAIN-SUFFIX,g.brothersoft.com,REJECT
DOMAIN-SUFFIX,g.chuiyao.com,REJECT
DOMAIN-SUFFIX,g.cn.miaozhen.com,REJECT
DOMAIN-SUFFIX,g.haluoha.com,REJECT
DOMAIN-SUFFIX,g.hsw.cn,REJECT
DOMAIN-SUFFIX,g.mnw.cn,REJECT
DOMAIN-SUFFIX,g.ousns.net,REJECT
DOMAIN-SUFFIX,g.w5b454.com,REJECT
DOMAIN-SUFFIX,g.wrating.com,REJECT
DOMAIN-SUFFIX,g1.0573ren.com,REJECT
DOMAIN-SUFFIX,g1.taijuba.com,REJECT
DOMAIN-SUFFIX,g1c5.com,REJECT
DOMAIN-SUFFIX,g1f5.com,REJECT
DOMAIN-SUFFIX,g2.ousns.net,REJECT
DOMAIN-SUFFIX,gadwhy.com,REJECT
DOMAIN-SUFFIX,galaxy.bjcathay.com,REJECT
DOMAIN-SUFFIX,game.adwo.com,REJECT
DOMAIN-SUFFIX,gamead.swjoy.com,REJECT
DOMAIN-SUFFIX,gameads.digyourowngrave.com,REJECT
DOMAIN-SUFFIX,gateway.fortunelounge.com,REJECT
DOMAIN-SUFFIX,gateways.s3.amazonaws.com,REJECT
DOMAIN-SUFFIX,gd.cnhange.cn,REJECT
DOMAIN-SUFFIX,gd.jqgc.com,REJECT
DOMAIN-SUFFIX,gd.vodtw.com,REJECT
DOMAIN-SUFFIX,gdbly.com,REJECT
DOMAIN-SUFFIX,gdskywings.com,REJECT
DOMAIN-SUFFIX,gdsqwy.org,REJECT
DOMAIN-SUFFIX,ge95.com,REJECT
DOMAIN-SUFFIX,geili.co,REJECT
DOMAIN-SUFFIX,gentags.com,REJECT
DOMAIN-SUFFIX,geo.cliphunter.com,REJECT
DOMAIN-SUFFIX,geo.connexionsecure.com,REJECT
DOMAIN-SUFFIX,geo.frtya.com,REJECT
DOMAIN-SUFFIX,geo.frtyd.com,REJECT
DOMAIN-SUFFIX,geo.moatads.com,REJECT
DOMAIN-SUFFIX,geobanner.alt.com,REJECT
DOMAIN-SUFFIX,geobanner.friendfinder.com,REJECT
DOMAIN-SUFFIX,geobanner.passion.com,REJECT
DOMAIN-SUFFIX,geobanner.socialflirt.com,REJECT
DOMAIN-SUFFIX,geoshopping.nzherald.co.nz,REJECT
DOMAIN-SUFFIX,geryi.com,REJECT
DOMAIN-SUFFIX,get.thefile.me,REJECT
DOMAIN-SUFFIX,getnormalizedurl.com,REJECT
DOMAIN-SUFFIX,gewuwen.com,REJECT
DOMAIN-SUFFIX,gf108.com,REJECT
DOMAIN-SUFFIX,gf1352.com,REJECT
DOMAIN-SUFFIX,gfd80.com,REJECT
DOMAIN-SUFFIX,gfx.infomine.com,REJECT
DOMAIN-SUFFIX,gg.0598yu.com,REJECT
DOMAIN-SUFFIX,gg.blueidea.com,REJECT
DOMAIN-SUFFIX,gg.cs090.com,REJECT
DOMAIN-SUFFIX,gg.gao7.com,REJECT
DOMAIN-SUFFIX,gg.huangye88.com,REJECT
DOMAIN-SUFFIX,gg.jkmeishi.com,REJECT
DOMAIN-SUFFIX,gg.sonhoo.com,REJECT
DOMAIN-SUFFIX,gg.uuu9.com,REJECT
DOMAIN-SUFFIX,gg.xingzuo360.cn,REJECT
DOMAIN-SUFFIX,gg.yxdown.com,REJECT
DOMAIN-SUFFIX,gg.zhongyao1.com,REJECT
DOMAIN-SUFFIX,gg0376.com,REJECT
DOMAIN-SUFFIX,gg1.yszyz.com,REJECT
DOMAIN-SUFFIX,gg2.dss9927.com,REJECT
DOMAIN-SUFFIX,gg570.com,REJECT
DOMAIN-SUFFIX,gg86.pinggu.org,REJECT
DOMAIN-SUFFIX,ggcode.2345.com,REJECT
DOMAIN-SUFFIX,ggdoubi.com,REJECT
DOMAIN-SUFFIX,ggg.zj.com,REJECT
DOMAIN-SUFFIX,ggle.lywf.me,REJECT
DOMAIN-SUFFIX,ggmm777.com,REJECT
DOMAIN-SUFFIX,ggs.myzaker.com,REJECT
DOMAIN-SUFFIX,ggw.gusuwang.com,REJECT
DOMAIN-SUFFIX,ggw.watertu.com,REJECT
DOMAIN-SUFFIX,ggxt.net,REJECT
DOMAIN-SUFFIX,gjghy.com,REJECT
DOMAIN-SUFFIX,glasszz.com,REJECT
DOMAIN-SUFFIX,gload.adhood.com,REJECT
DOMAIN-SUFFIX,global.msads.net,REJECT
DOMAIN-SUFFIX,gm682.com,REJECT
DOMAIN-SUFFIX,gma1.com,REJECT
DOMAIN-SUFFIX,go.hangzhou.com.cn,REJECT
DOMAIN-SUFFIX,go.mmstat.com,REJECT
DOMAIN-SUFFIX,godloveme.cn,REJECT
DOMAIN-SUFFIX,go-mpulse.net,REJECT
DOMAIN-SUFFIX,googeadsserving.cn,REJECT
DOMAIN-SUFFIX,googlecommerce.com,REJECT
DOMAIN-SUFFIX,googletagservices.com,REJECT
DOMAIN-SUFFIX,gosquared.com,REJECT
DOMAIN-SUFFIX,goto.www.iciba.com,REJECT
DOMAIN-SUFFIX,gotourl.xyz,REJECT
DOMAIN-SUFFIX,gouzhibao.cn,REJECT
DOMAIN-SUFFIX,govgift.com,REJECT
DOMAIN-SUFFIX,govids.net,REJECT
DOMAIN-SUFFIX,gp.jstv.com,REJECT
DOMAIN-SUFFIX,gqswg.com,REJECT
DOMAIN-SUFFIX,green.erne.co,REJECT
DOMAIN-SUFFIX,greenhouseglobal.cn,REJECT
DOMAIN-SUFFIX,gridsum.com,REJECT
DOMAIN-SUFFIX,gridsumdissector.cn,REJECT
DOMAIN-SUFFIX,gridsumdissector.com,REJECT
DOMAIN-SUFFIX,groupa.onlylady.com,REJECT
DOMAIN-SUFFIX,growingio.com,REJECT
DOMAIN-SUFFIX,gs307.com,REJECT
DOMAIN-SUFFIX,gso0.com,REJECT
DOMAIN-SUFFIX,gt.yy.com,REJECT
DOMAIN-SUFFIX,gtags.net,REJECT
DOMAIN-SUFFIX,gtmucs.cn,REJECT
DOMAIN-SUFFIX,gu.qlogo.cn,REJECT
DOMAIN-SUFFIX,guang.lesports.com,REJECT
DOMAIN-SUFFIX,guang.sdsgwy.com,REJECT
DOMAIN-SUFFIX,guangzizai.com,REJECT
DOMAIN-SUFFIX,guduopu.com,REJECT
DOMAIN-SUFFIX,guess.h.qhimg.com,REJECT
DOMAIN-SUFFIX,guess.union2.50bang.org,REJECT
DOMAIN-SUFFIX,gugulonger.cn,REJECT
DOMAIN-SUFFIX,guidashu.com,REJECT
DOMAIN-SUFFIX,guohead.com,REJECT
DOMAIN-SUFFIX,guomob.com,REJECT
DOMAIN-SUFFIX,guoshennet.com,REJECT
DOMAIN-SUFFIX,gw630.com,REJECT
DOMAIN-SUFFIX,gxb.mmstat.com,REJECT
DOMAIN-SUFFIX,gydag.com,REJECT
DOMAIN-SUFFIX,gyrtg.com,REJECT
DOMAIN-SUFFIX,gz00005.top,REJECT
DOMAIN-SUFFIX,gzktpf.com,REJECT
DOMAIN-SUFFIX,gzlykj.cn,REJECT
DOMAIN-SUFFIX,gzmjnx.cn,REJECT
DOMAIN-SUFFIX,gzqudou.com,REJECT
DOMAIN-SUFFIX,h.msn.com,REJECT
DOMAIN-SUFFIX,h5.holalauncher.com,REJECT
DOMAIN-SUFFIX,h9377c.com,REJECT
DOMAIN-SUFFIX,haiwengji.net,REJECT
DOMAIN-SUFFIX,haiyunpush.com,REJECT
DOMAIN-SUFFIX,hanju18.net,REJECT
DOMAIN-SUFFIX,hao.7654.com,REJECT
DOMAIN-SUFFIX,hao.qquu8.com,REJECT
DOMAIN-SUFFIX,hao123rt.com,REJECT
DOMAIN-SUFFIX,hao549.com,REJECT
DOMAIN-SUFFIX,hao61.net,REJECT
DOMAIN-SUFFIX,hao934.com,REJECT
DOMAIN-SUFFIX,haoghost.com,REJECT
DOMAIN-SUFFIX,haohaowan8.com,REJECT
DOMAIN-SUFFIX,haolew.com,REJECT
DOMAIN-SUFFIX,hapic1.jhkxwl.com,REJECT
DOMAIN-SUFFIX,hascosafety.com,REJECT
DOMAIN-SUFFIX,hbalx.cn,REJECT
DOMAIN-SUFFIX,hbdt.luomi.com,REJECT
DOMAIN-SUFFIX,hbngfy.com,REJECT
DOMAIN-SUFFIX,hbyyzm.com,REJECT
DOMAIN-SUFFIX,hccms.com.cn,REJECT
DOMAIN-SUFFIX,hcreditx.com,REJECT
DOMAIN-SUFFIX,hdad.baike.com,REJECT
DOMAIN-SUFFIX,he2d.com,REJECT
DOMAIN-SUFFIX,heavenmedia.v3g4s.com,REJECT
DOMAIN-SUFFIX,heefwozhlxgz.com,REJECT
DOMAIN-SUFFIX,hefan365.com,REJECT
DOMAIN-SUFFIX,heib10.top,REJECT
DOMAIN-SUFFIX,heib12.top,REJECT
DOMAIN-SUFFIX,hejban.youwatch.org,REJECT
DOMAIN-SUFFIX,hejingroup.cn,REJECT
DOMAIN-SUFFIX,hesxz.com,REJECT
DOMAIN-SUFFIX,heyzap.com,REJECT
DOMAIN-SUFFIX,hfjuki.com,REJECT
DOMAIN-SUFFIX,hfsteel.net,REJECT
DOMAIN-SUFFIX,hgame.com,REJECT
DOMAIN-SUFFIX,hh6666.com,REJECT
DOMAIN-SUFFIX,hhlian.com,REJECT
DOMAIN-SUFFIX,hhly88.com,REJECT
DOMAIN-SUFFIX,hhppyt.com,REJECT
DOMAIN-SUFFIX,hi686.com,REJECT
DOMAIN-SUFFIX,hi760.com,REJECT
DOMAIN-SUFFIX,hi9377.com,REJECT
DOMAIN-SUFFIX,hiad.myweb.hinet.net,REJECT
DOMAIN-SUFFIX,hiad.vmall.com,REJECT
DOMAIN-SUFFIX,hidden-master.linezing.com,REJECT
DOMAIN-SUFFIX,hilltopads.net,REJECT
DOMAIN-SUFFIX,histats.com,REJECT
DOMAIN-SUFFIX,hitslink.com,REJECT
DOMAIN-SUFFIX,hivecn.cn,REJECT
DOMAIN-SUFFIX,hk.jtsh123.com,REJECT
DOMAIN-SUFFIX,hk9600.com,REJECT
DOMAIN-SUFFIX,hkfuy.com,REJECT
DOMAIN-SUFFIX,hmp33.com,REJECT
DOMAIN-SUFFIX,hmttoly.com,REJECT
DOMAIN-SUFFIX,hmyangshengji.com,REJECT
DOMAIN-SUFFIX,hnasd.com,REJECT
DOMAIN-SUFFIX,hnctsm.com,REJECT
DOMAIN-SUFFIX,hnol.net,REJECT
DOMAIN-SUFFIX,hnxxjn.com,REJECT
DOMAIN-SUFFIX,hnyny.com,REJECT
DOMAIN-SUFFIX,home520.com,REJECT
DOMAIN-SUFFIX,hosting.miarroba.info,REJECT
DOMAIN-SUFFIX,hot-mob.com,REJECT
DOMAIN-SUFFIX,houdaolj.com,REJECT
DOMAIN-SUFFIX,hpqxznpb.bid,REJECT
DOMAIN-SUFFIX,hqgjcm.com,REJECT
DOMAIN-SUFFIX,hr41.cn,REJECT
DOMAIN-SUFFIX,hr44.com,REJECT
DOMAIN-SUFFIX,hslyqs.com,REJECT
DOMAIN-SUFFIX,htjsk.com,REJECT
DOMAIN-SUFFIX,httpdns.push.oppomobile.com,REJECT
DOMAIN-SUFFIX,huahuaka.com,REJECT
DOMAIN-SUFFIX,huashengtai.net,REJECT
DOMAIN-SUFFIX,huashuowork.com,REJECT
DOMAIN-SUFFIX,huaxinxunye.cn,REJECT
DOMAIN-SUFFIX,huayi65.com,REJECT
DOMAIN-SUFFIX,hub5pn.wap.sandai.net,REJECT
DOMAIN-SUFFIX,hubojd.com,REJECT
DOMAIN-SUFFIX,huimee.net,REJECT
DOMAIN-SUFFIX,humanding.com,REJECT
DOMAIN-SUFFIX,hw6.com,REJECT
DOMAIN-SUFFIX,hxadt.com,REJECT
DOMAIN-SUFFIX,hxspc.com,REJECT
DOMAIN-SUFFIX,hxyifu.com,REJECT
DOMAIN-SUFFIX,hxyx360.com,REJECT
DOMAIN-SUFFIX,hyfh.benbaisteel.com,REJECT
DOMAIN-SUFFIX,hyperpromote.com,REJECT
DOMAIN-SUFFIX,hys4.com,REJECT
DOMAIN-SUFFIX,hystq.com,REJECT
DOMAIN-SUFFIX,hytgj.com,REJECT
DOMAIN-SUFFIX,hyz86.com,REJECT
DOMAIN-SUFFIX,hz.mmstat.com,REJECT
DOMAIN-SUFFIX,hz.shouyoutv.com,REJECT
DOMAIN-SUFFIX,hzaibi.com,REJECT
DOMAIN-SUFFIX,hzhyhm.com,REJECT
DOMAIN-SUFFIX,hzsod71wov.me,REJECT
DOMAIN-SUFFIX,i.dreamfull.cn,REJECT
DOMAIN-SUFFIX,i.flow.browser.oppomobile.com,REJECT
DOMAIN-SUFFIX,i.haloapps.com,REJECT
DOMAIN-SUFFIX,i.holalauncher.com,REJECT
DOMAIN-SUFFIX,i.huilixieye.net,REJECT
DOMAIN-SUFFIX,i.ipinyou.com,REJECT
DOMAIN-SUFFIX,i.mmcdn.cn,REJECT
DOMAIN-SUFFIX,i.stat.nearme.com.cn,REJECT
DOMAIN-SUFFIX,i.syasn.com,REJECT
DOMAIN-SUFFIX,i.w55c.net,REJECT
DOMAIN-SUFFIX,i.zhuoyaju.com,REJECT
DOMAIN-SUFFIX,i1.go2yd.com,REJECT
DOMAIN-SUFFIX,i1236.net,REJECT
DOMAIN-SUFFIX,i3818.com,REJECT
DOMAIN-SUFFIX,i92xue.com,REJECT
DOMAIN-SUFFIX,ia.51.la,REJECT
DOMAIN-SUFFIX,iadc.qwapi.com,REJECT
DOMAIN-SUFFIX,iads.xinmin.cn,REJECT
DOMAIN-SUFFIX,iadsdk.apple.com,REJECT
DOMAIN-SUFFIX,ib.adnxs.co,REJECT
DOMAIN-SUFFIX,ibanners.empoweredcomms.com.au,REJECT
DOMAIN-SUFFIX,ibn.adnxs.com,REJECT
DOMAIN-SUFFIX,icast.cn,REJECT
DOMAIN-SUFFIX,icon.51.la,REJECT
DOMAIN-SUFFIX,icon.users.51.la,REJECT
DOMAIN-SUFFIX,id528.com,REJECT
DOMAIN-SUFFIX,idasai.com,REJECT
DOMAIN-SUFFIX,idcot.com,REJECT
DOMAIN-SUFFIX,idcqi.com,REJECT
DOMAIN-SUFFIX,identified.cn,REJECT
DOMAIN-SUFFIX,idianfang.com,REJECT
DOMAIN-SUFFIX,ids.deliver.ifeng.com,REJECT
DOMAIN-SUFFIX,ids1.deliver.ifeng.com,REJECT
DOMAIN-SUFFIX,idx.m.hub.sandai.net,REJECT
DOMAIN-SUFFIX,ieonline.microsoft.com,REJECT
DOMAIN-SUFFIX,if1512.com,REJECT
DOMAIN-SUFFIX,ifengad.3g.ifeng.com,REJECT
DOMAIN-SUFFIX,iframe.travel.yahoo.com,REJECT
DOMAIN-SUFFIX,igexin.com,REJECT
DOMAIN-SUFFIX,ih.adscale.de,REJECT
DOMAIN-SUFFIX,ihualun.com,REJECT
DOMAIN-SUFFIX,iia1.pikacn.com,REJECT
DOMAIN-SUFFIX,iii.6park.com,REJECT
DOMAIN-SUFFIX,iis1.deliver.ifeng.com,REJECT
DOMAIN-SUFFIX,iis3g.deliver.ifeng.com,REJECT
DOMAIN-SUFFIX,iisl7wpf.me,REJECT
DOMAIN-SUFFIX,il8r.com,REJECT
DOMAIN-SUFFIX,im.ov.yahoo.co.jp,REJECT
DOMAIN-SUFFIX,im1.56zzw.com,REJECT
DOMAIN-SUFFIX,ima3vpaid.appspot.com,REJECT
DOMAIN-SUFFIX,imads.rediff.com,REJECT
DOMAIN-SUFFIX,image.9duw.com,REJECT
DOMAIN-SUFFIX,image.hh010.com,REJECT
DOMAIN-SUFFIX,image.zzd.sm.cn,REJECT
DOMAIN-SUFFIX,images.chinaz.com,REJECT
DOMAIN-SUFFIX,images.gxsky.com,REJECT
DOMAIN-SUFFIX,images9999.com,REJECT
DOMAIN-SUFFIX,imageter.com,REJECT
DOMAIN-SUFFIX,imagzine.oppomobile.com,REJECT
DOMAIN-SUFFIX,imedia.bokecc.com,REJECT
DOMAIN-SUFFIX,imeijiajia.com,REJECT
DOMAIN-SUFFIX,imfsr.lenovomm.com,REJECT
DOMAIN-SUFFIX,img.3sjt.com,REJECT
DOMAIN-SUFFIX,img.9duw.com,REJECT
DOMAIN-SUFFIX,img.ad.zhangyue.com,REJECT
DOMAIN-SUFFIX,img.adpush.cn,REJECT
DOMAIN-SUFFIX,img.dawenxue.org,REJECT
DOMAIN-SUFFIX,img.libdd.com,REJECT
DOMAIN-SUFFIX,img.meipic.net,REJECT
DOMAIN-SUFFIX,img.qdscgj.com,REJECT
DOMAIN-SUFFIX,img.taotaosou.cn,REJECT
DOMAIN-SUFFIX,img.toppr.com.cn,REJECT
DOMAIN-SUFFIX,img.users.51.la,REJECT
DOMAIN-SUFFIX,img.xuenb.com,REJECT
DOMAIN-SUFFIX,img.zuowen8.com,REJECT
DOMAIN-SUFFIX,img0.egou.com,REJECT
DOMAIN-SUFFIX,img01.taotaosou.cn,REJECT
DOMAIN-SUFFIX,img09.zhaopin.com,REJECT
DOMAIN-SUFFIX,img1.gtimg.com,REJECT
DOMAIN-SUFFIX,img1.jintang114.org,REJECT
DOMAIN-SUFFIX,img1.pcfg.cache.wps.cn,REJECT
DOMAIN-SUFFIX,img18.com,REJECT
DOMAIN-SUFFIX,img2.qekun.com,REJECT
DOMAIN-SUFFIX,img3.126.net,REJECT
DOMAIN-SUFFIX,img6.126.net,REJECT
DOMAIN-SUFFIX,img80.net,REJECT
DOMAIN-SUFFIX,img-ad.oupeng.com,REJECT
DOMAIN-SUFFIX,imgsreview.dftoutiao.com,REJECT
DOMAIN-SUFFIX,immob.cn,REJECT
DOMAIN-SUFFIX,imneinei.com,REJECT
DOMAIN-SUFFIX,i-mobile.co.jp,REJECT
DOMAIN-SUFFIX,imrworldwide.com,REJECT
DOMAIN-SUFFIX,in.zog.link,REJECT
DOMAIN-SUFFIX,inad.com,REJECT
DOMAIN-SUFFIX,inccnd.com,REJECT
DOMAIN-SUFFIX,indieclick.3janecdn.com,REJECT
DOMAIN-SUFFIX,info.downsave.com,REJECT
DOMAIN-SUFFIX,info.gomlab.com,REJECT
DOMAIN-SUFFIX,info.yitsoftware.com,REJECT
DOMAIN-SUFFIX,innity.com,REJECT
DOMAIN-SUFFIX,innity.net,REJECT
DOMAIN-SUFFIX,insenz.com,REJECT
DOMAIN-SUFFIX,inside.bitcomet.com,REJECT
DOMAIN-SUFFIX,inskin.vo.llnwd.net,REJECT
DOMAIN-SUFFIX,instabug.com,REJECT
DOMAIN-SUFFIX,instreet.cn,REJECT
DOMAIN-SUFFIX,intellitxt.com,REJECT
DOMAIN-SUFFIX,intely.cn,REJECT
DOMAIN-SUFFIX,inter1ads.com,REJECT
DOMAIN-SUFFIX,iperceptions.com,REJECT
DOMAIN-SUFFIX,ipic.staticsdo.com,REJECT
DOMAIN-SUFFIX,iroby.com,REJECT
DOMAIN-SUFFIX,irs01.com,REJECT
DOMAIN-SUFFIX,irs01.net,REJECT
DOMAIN-SUFFIX,irs09.com,REJECT
DOMAIN-SUFFIX,ishowbg.com,REJECT
DOMAIN-SUFFIX,istreamsche.com,REJECT
DOMAIN-SUFFIX,iuuff.com,REJECT
DOMAIN-SUFFIX,ivy.pconline.com.cn,REJECT
DOMAIN-SUFFIX,iwanad.baidu.com,REJECT
DOMAIN-SUFFIX,ixpub.net,REJECT
DOMAIN-SUFFIX,j.12306media.com,REJECT
DOMAIN-SUFFIX,j.6avz.com,REJECT
DOMAIN-SUFFIX,j.ccnovel.com,REJECT
DOMAIN-SUFFIX,j.hongyangpai.com,REJECT
DOMAIN-SUFFIX,j.wan.liebao.cn,REJECT
DOMAIN-SUFFIX,j.yljiaoluo.com,REJECT
DOMAIN-SUFFIX,j1.piaobing.com,REJECT
DOMAIN-SUFFIX,ja.gamersky.com,REJECT
DOMAIN-SUFFIX,ja1.gamersky.com,REJECT
DOMAIN-SUFFIX,ja9377.com,REJECT
DOMAIN-SUFFIX,jackaow.com,REJECT
DOMAIN-SUFFIX,javhd.com,REJECT
DOMAIN-SUFFIX,jb.dianshu119.com,REJECT
DOMAIN-SUFFIX,jb.ecar168.cn,REJECT
DOMAIN-SUFFIX,jb.tupianzj.com,REJECT
DOMAIN-SUFFIX,jbcbuy.com,REJECT
DOMAIN-SUFFIX,jbyy010.com,REJECT
DOMAIN-SUFFIX,jc1.dayfund.cn,REJECT
DOMAIN-SUFFIX,jct.maptu.cn,REJECT
DOMAIN-SUFFIX,jczzjx.com,REJECT
DOMAIN-SUFFIX,jddaw.com,REJECT
DOMAIN-SUFFIX,jdlcg.cn,REJECT
DOMAIN-SUFFIX,jdlhg.com,REJECT
DOMAIN-SUFFIX,jermr.com,REJECT
DOMAIN-SUFFIX,jesgoo.com,REJECT
DOMAIN-SUFFIX,jfqkj.com,REJECT
DOMAIN-SUFFIX,jgchq.com,REJECT
DOMAIN-SUFFIX,jghcy.com,REJECT
DOMAIN-SUFFIX,jhakie.com,REJECT
DOMAIN-SUFFIX,jhtcdj.com,REJECT
DOMAIN-SUFFIX,jhzl001.com,REJECT
DOMAIN-SUFFIX,jiaheyonggu.com,REJECT
DOMAIN-SUFFIX,jiajv.net,REJECT
DOMAIN-SUFFIX,jianbaimei.com,REJECT
DOMAIN-SUFFIX,jianmei123.com,REJECT
DOMAIN-SUFFIX,jiaoben.eastday.com,REJECT
DOMAIN-SUFFIX,jiaoben.ganji.cn,REJECT
DOMAIN-SUFFIX,jiaoben.jucanw.com,REJECT
DOMAIN-SUFFIX,jiaoben.junmeng.com,REJECT
DOMAIN-SUFFIX,jiathis.com,REJECT
DOMAIN-SUFFIX,jiawen88.com,REJECT
DOMAIN-SUFFIX,jiehantai.com,REJECT
DOMAIN-SUFFIX,jiehunmishu.com,REJECT
DOMAIN-SUFFIX,jifeidandar.com,REJECT
DOMAIN-SUFFIX,jiguang.cn,REJECT
DOMAIN-SUFFIX,jimdo.com,REJECT
DOMAIN-SUFFIX,jimeilm.com,REJECT
DOMAIN-SUFFIX,jindu179.com,REJECT
DOMAIN-SUFFIX,jinghuazhijia.com,REJECT
DOMAIN-SUFFIX,jiu.njdkgm.com,REJECT
DOMAIN-SUFFIX,jiuku.cc,REJECT
DOMAIN-SUFFIX,jiyou2014.com,REJECT
DOMAIN-SUFFIX,jizzads.com,REJECT
DOMAIN-SUFFIX,jjxgly.com,REJECT
DOMAIN-SUFFIX,jk939.com,REJECT
DOMAIN-SUFFIX,jkjjkj.top,REJECT
DOMAIN-SUFFIX,jkmxy.com,REJECT
DOMAIN-SUFFIX,jl027.com,REJECT
DOMAIN-SUFFIX,jlssbz.com,REJECT
DOMAIN-SUFFIX,jmsyzj.com,REJECT
DOMAIN-SUFFIX,jndczg.com,REJECT
DOMAIN-SUFFIX,jnrsjm.com,REJECT
DOMAIN-SUFFIX,jnsdkjzs.com,REJECT
DOMAIN-SUFFIX,jnsz.net.cn,REJECT
DOMAIN-SUFFIX,jnyngg.cn,REJECT
DOMAIN-SUFFIX,johtzj.com,REJECT
DOMAIN-SUFFIX,jointreport-switch.com,REJECT
DOMAIN-SUFFIX,jossuer.net,REJECT
DOMAIN-SUFFIX,joyfuldoors.com,REJECT
DOMAIN-SUFFIX,jp88.cc,REJECT
DOMAIN-SUFFIX,jpush.cn,REJECT
DOMAIN-SUFFIX,jpush.io,REJECT
DOMAIN-SUFFIX,jqz9.com,REJECT
DOMAIN-SUFFIX,js.05sun.com,REJECT
DOMAIN-SUFFIX,js.45bubu.com,REJECT
DOMAIN-SUFFIX,js.50bang.org,REJECT
DOMAIN-SUFFIX,js.51taifu.com,REJECT
DOMAIN-SUFFIX,js.bju888.com,REJECT
DOMAIN-SUFFIX,js.bxwns.com,REJECT
DOMAIN-SUFFIX,js.bxwxtxt.com,REJECT
DOMAIN-SUFFIX,js.cncrk.com,REJECT
DOMAIN-SUFFIX,js.duotegame.com,REJECT
DOMAIN-SUFFIX,js.hkslg520.com,REJECT
DOMAIN-SUFFIX,js.icast.cn,REJECT
DOMAIN-SUFFIX,js.stat.ijinshan.com,REJECT
DOMAIN-SUFFIX,js.tongji.linezing.com,REJECT
DOMAIN-SUFFIX,js.ubaike.cn,REJECT
DOMAIN-SUFFIX,js.union-wifi.com,REJECT
DOMAIN-SUFFIX,js.users.51.la,REJECT
DOMAIN-SUFFIX,js1.2abc8.com,REJECT
DOMAIN-SUFFIX,js1.xbaixing.com,REJECT
DOMAIN-SUFFIX,js1.zuocai.tv,REJECT
DOMAIN-SUFFIX,js3.users.51.la,REJECT
DOMAIN-SUFFIX,js883.hnfpgm.com,REJECT
DOMAIN-SUFFIX,jsadt.com,REJECT
DOMAIN-SUFFIX,js-agent.newrelic.com,REJECT
DOMAIN-SUFFIX,jsb.qianzhan.com,REJECT
DOMAIN-SUFFIX,jskrnekewe.mofans.net,REJECT
DOMAIN-SUFFIX,jsm.39yst.com,REJECT
DOMAIN-SUFFIX,jsm.9939.com,REJECT
DOMAIN-SUFFIX,jsmwd.com,REJECT
DOMAIN-SUFFIX,jspg.cc,REJECT
DOMAIN-SUFFIX,jssd.uumeitu.com,REJECT
DOMAIN-SUFFIX,jtxh.net,REJECT
DOMAIN-SUFFIX,jtys8.com,REJECT
DOMAIN-SUFFIX,ju33.com,REJECT
DOMAIN-SUFFIX,juicyads.com,REJECT
DOMAIN-SUFFIX,jundazulin.com,REJECT
DOMAIN-SUFFIX,junfull.com,REJECT
DOMAIN-SUFFIX,jusha.com,REJECT
DOMAIN-SUFFIX,jutou5.com,REJECT
DOMAIN-SUFFIX,juzi.cn,REJECT
DOMAIN-SUFFIX,juzilm.com,REJECT
DOMAIN-SUFFIX,jwpltx.com,REJECT
DOMAIN-SUFFIX,jwqj.net,REJECT
DOMAIN-SUFFIX,jxad.jx163.com,REJECT
DOMAIN-SUFFIX,jxbjt.com,REJECT
DOMAIN-SUFFIX,jxfxsw.com,REJECT
DOMAIN-SUFFIX,jxjzny.com,REJECT
DOMAIN-SUFFIX,jxlog.istreamsche.com,REJECT
DOMAIN-SUFFIX,jxlqgs.com,REJECT
DOMAIN-SUFFIX,jxxiangchu.com,REJECT
DOMAIN-SUFFIX,jystea.com,REJECT
DOMAIN-SUFFIX,jzkapp.com,REJECT
DOMAIN-SUFFIX,jzm81.com,REJECT
DOMAIN-SUFFIX,k2team.kyiv.ua,REJECT
DOMAIN-SUFFIX,kafka8.com,REJECT
DOMAIN-SUFFIX,karma.mdpcdn.com,REJECT
DOMAIN-SUFFIX,kawa11.space,REJECT
DOMAIN-SUFFIX,kbnetworkz.s3.amazonaws.com,REJECT
DOMAIN-SUFFIX,kejet.com,REJECT
DOMAIN-SUFFIX,kejet.net,REJECT
DOMAIN-SUFFIX,kele4.com,REJECT
DOMAIN-SUFFIX,ker.pic2pic.site,REJECT
DOMAIN-SUFFIX,kermit.macnn.com,REJECT
DOMAIN-SUFFIX,ketchapp.org,REJECT
DOMAIN-SUFFIX,keydot.net,REJECT
DOMAIN-SUFFIX,keyrun.cn,REJECT
DOMAIN-SUFFIX,keyrun.com,REJECT
DOMAIN-SUFFIX,keystone.mwbsys.com,REJECT
DOMAIN-SUFFIX,keyyou.net,REJECT
DOMAIN-SUFFIX,kfewaz.zh1155.com,REJECT
DOMAIN-SUFFIX,kfhuihe.net,REJECT
DOMAIN-SUFFIX,kfluoa.com,REJECT
DOMAIN-SUFFIX,kgcjgsa8.net,REJECT
DOMAIN-SUFFIX,kguke.com,REJECT
DOMAIN-SUFFIX,kho3au7l4z.me,REJECT
DOMAIN-SUFFIX,kicnse.com,REJECT
DOMAIN-SUFFIX,kingwam.com,REJECT
DOMAIN-SUFFIX,kjgen.com,REJECT
DOMAIN-SUFFIX,kk7kk.com,REJECT
DOMAIN-SUFFIX,kkcaicai.com,REJECT
DOMAIN-SUFFIX,kld666.com,REJECT
DOMAIN-SUFFIX,kldmm.com,REJECT
DOMAIN-SUFFIX,klsdmr.com,REJECT
DOMAIN-SUFFIX,kmadou.com,REJECT
DOMAIN-SUFFIX,kmd365.com,REJECT
DOMAIN-SUFFIX,kmwqxqh.com,REJECT
DOMAIN-SUFFIX,kn.bjbrtc.com,REJECT
DOMAIN-SUFFIX,kn.zzdahan.com,REJECT
DOMAIN-SUFFIX,knet.cn,REJECT
DOMAIN-SUFFIX,knnwdyou.com,REJECT
DOMAIN-SUFFIX,kod4pc293.com,REJECT
DOMAIN-SUFFIX,koowo.com,REJECT
DOMAIN-SUFFIX,koukou7.com,REJECT
DOMAIN-SUFFIX,kqy1.com,REJECT
DOMAIN-SUFFIX,kr.sybspools.com,REJECT
DOMAIN-SUFFIX,krux.net,REJECT
DOMAIN-SUFFIX,ksdsuzhou.com,REJECT
DOMAIN-SUFFIX,ksrsy.com,REJECT
DOMAIN-SUFFIX,kt220.com,REJECT
DOMAIN-SUFFIX,ktunions.com,REJECT
DOMAIN-SUFFIX,ktv0311.com,REJECT
DOMAIN-SUFFIX,ku63.com,REJECT
DOMAIN-SUFFIX,ku9377.com,REJECT
DOMAIN-SUFFIX,kuaipai666.cn,REJECT
DOMAIN-SUFFIX,kuguopush.com,REJECT
DOMAIN-SUFFIX,kuwoyy.com,REJECT
DOMAIN-SUFFIX,kuyic.m.gxwztv.com,REJECT
DOMAIN-SUFFIX,kv.stat.nearme.com.cn,REJECT
DOMAIN-SUFFIX,kw.ra.icast.cn,REJECT
DOMAIN-SUFFIX,kxrxh.com,REJECT
DOMAIN-SUFFIX,kyzhecmvpiaw.com,REJECT
DOMAIN-SUFFIX,l.minisplat.cn,REJECT
DOMAIN-SUFFIX,labs.ra.icast.cn,REJECT
DOMAIN-SUFFIX,laigame7.com,REJECT
DOMAIN-SUFFIX,lajizhan.org,REJECT
DOMAIN-SUFFIX,langchars.com,REJECT
DOMAIN-SUFFIX,lanxiangji.com,REJECT
DOMAIN-SUFFIX,lashou1000.com,REJECT
DOMAIN-SUFFIX,lb.statsevent.com,REJECT
DOMAIN-SUFFIX,lcs.dev.surepush.cn,REJECT
DOMAIN-SUFFIX,lds.lenovomm.com,REJECT
DOMAIN-SUFFIX,lds.zui.com,REJECT
DOMAIN-SUFFIX,le4le.com,REJECT
DOMAIN-SUFFIX,leadbolt.net,REJECT
DOMAIN-SUFFIX,leadboltads.net,REJECT
DOMAIN-SUFFIX,leadboltapps.net,REJECT
DOMAIN-SUFFIX,leadboltmobile.net,REJECT
DOMAIN-SUFFIX,leeyuoxs.com,REJECT
DOMAIN-SUFFIX,legozu.com,REJECT
DOMAIN-SUFFIX,lele999.com,REJECT
DOMAIN-SUFFIX,lenzmx.com,REJECT
DOMAIN-SUFFIX,leztc.com,REJECT
DOMAIN-SUFFIX,lflili.com,REJECT
DOMAIN-SUFFIX,lfyuanai.com,REJECT
DOMAIN-SUFFIX,lhafy.com,REJECT
DOMAIN-SUFFIX,lhengilin.com,REJECT
DOMAIN-SUFFIX,lhusy.com,REJECT
DOMAIN-SUFFIX,liangziweixg.com,REJECT
DOMAIN-SUFFIX,libs.tvmao.cn,REJECT
DOMAIN-SUFFIX,life.e0575.com,REJECT
DOMAIN-SUFFIX,life.imagepix.org,REJECT
DOMAIN-SUFFIX,lightson.vpsboard.com,REJECT
DOMAIN-SUFFIX,linezing.com,REJECT
DOMAIN-SUFFIX,lingdian98.com,REJECT
DOMAIN-SUFFIX,linkbide.com,REJECT
DOMAIN-SUFFIX,linkpage.cn,REJECT
DOMAIN-SUFFIX,links.services.disqus.com,REJECT
DOMAIN-SUFFIX,linyao.dxsdb.com,REJECT
DOMAIN-SUFFIX,lishuanghao.com,REJECT
DOMAIN-SUFFIX,listenother.com,REJECT
DOMAIN-SUFFIX,liuliguo.com,REJECT
DOMAIN-SUFFIX,livehapp.com,REJECT
DOMAIN-SUFFIX,liveupdate.mac.sandai.net,REJECT
DOMAIN-SUFFIX,lixiangmo.com,REJECT
DOMAIN-SUFFIX,ljrtb.cn,REJECT
DOMAIN-SUFFIX,ll.a.hulu.com,REJECT
DOMAIN-SUFFIX,ll38.com,REJECT
DOMAIN-SUFFIX,lm.dawenxue.org,REJECT
DOMAIN-SUFFIX,lm.souid.com,REJECT
DOMAIN-SUFFIX,lndjj.com,REJECT
DOMAIN-SUFFIX,lnk0.com,REJECT
DOMAIN-SUFFIX,lnk8z.com,REJECT
DOMAIN-SUFFIX,lnr2.com,REJECT
DOMAIN-SUFFIX,loandatec.com,REJECT
DOMAIN-SUFFIX,localnetwork.uop,REJECT
DOMAIN-SUFFIX,localytics.com,REJECT
DOMAIN-SUFFIX,log.collect.yinyuetai.com,REJECT
DOMAIN-SUFFIX,log.outbrain.com,REJECT
DOMAIN-SUFFIX,log.spotify.com,REJECT
DOMAIN-SUFFIX,log.umsns.com,REJECT
DOMAIN-SUFFIX,log.voicecloud.cn,REJECT
DOMAIN-SUFFIX,logs.dashlane.com,REJECT
DOMAIN-SUFFIX,lomark.cn,REJECT
DOMAIN-SUFFIX,londonprivaterentals.standard.co.uk,REJECT
DOMAIN-SUFFIX,looky.hyves.org,REJECT
DOMAIN-SUFFIX,lotuseed.com,REJECT
DOMAIN-SUFFIX,lovestyl.com,REJECT
DOMAIN-SUFFIX,lp1901.com,REJECT
DOMAIN-SUFFIX,lpsxssm.com,REJECT
DOMAIN-SUFFIX,lqmohun.com,REJECT
DOMAIN-SUFFIX,lrswl.com,REJECT
DOMAIN-SUFFIX,ls.webmd.com,REJECT
DOMAIN-SUFFIX,lsxmg.com,REJECT
DOMAIN-SUFFIX,ltcprtc.com,REJECT
DOMAIN-SUFFIX,lthxz.cn,REJECT
DOMAIN-SUFFIX,lubosheng.cn,REJECT
DOMAIN-SUFFIX,lucting.cn,REJECT
DOMAIN-SUFFIX,lufax.com,REJECT
DOMAIN-SUFFIX,lvjian66.com,REJECT
DOMAIN-SUFFIX,lw1.cdmediaworld.com,REJECT
DOMAIN-SUFFIX,lw2.gamecopyworld.com,REJECT
DOMAIN-SUFFIX,lx167.com,REJECT
DOMAIN-SUFFIX,lxqcgj.com,REJECT
DOMAIN-SUFFIX,lxting.com,REJECT
DOMAIN-SUFFIX,lyaeccn.com,REJECT
DOMAIN-SUFFIX,lyhdream.com,REJECT
DOMAIN-SUFFIX,lyrymy.com,REJECT
DOMAIN-SUFFIX,lytubaobao.com,REJECT
DOMAIN-SUFFIX,lzjycy.com,REJECT
DOMAIN-SUFFIX,lzmm8.com,REJECT
DOMAIN-SUFFIX,m.28487.net,REJECT
DOMAIN-SUFFIX,m.7180443.com,REJECT
DOMAIN-SUFFIX,m.ad.zhangyue.com,REJECT
DOMAIN-SUFFIX,m.adpro.cn,REJECT
DOMAIN-SUFFIX,m.adxpop.com,REJECT
DOMAIN-SUFFIX,m.bailingjiankang.com,REJECT
DOMAIN-SUFFIX,m.duobao999.com,REJECT
DOMAIN-SUFFIX,m.ee-skin.com,REJECT
DOMAIN-SUFFIX,m.ee-vip.net,REJECT
DOMAIN-SUFFIX,m.emgwq.com,REJECT
DOMAIN-SUFFIX,m.fhxsw.org,REJECT
DOMAIN-SUFFIX,m.fstaw.com,REJECT
DOMAIN-SUFFIX,m.gdt.vip1790.cn,REJECT
DOMAIN-SUFFIX,m.guanren9.com,REJECT
DOMAIN-SUFFIX,m.hellomingpian.com,REJECT
DOMAIN-SUFFIX,m.hmzsfmjc.com,REJECT
DOMAIN-SUFFIX,m.irs01.com,REJECT
DOMAIN-SUFFIX,m.kubiqq.com,REJECT
DOMAIN-SUFFIX,m.laojiayoufang.com,REJECT
DOMAIN-SUFFIX,m.qpic.cn,REJECT
DOMAIN-SUFFIX,m.reachmax.cn,REJECT
DOMAIN-SUFFIX,m.rmuqvq.cn,REJECT
DOMAIN-SUFFIX,m.romgv.com,REJECT
DOMAIN-SUFFIX,m.rwganw.cn,REJECT
DOMAIN-SUFFIX,m.sewxi.com,REJECT
DOMAIN-SUFFIX,m.sjzhushou.com,REJECT
DOMAIN-SUFFIX,m.symab.cn,REJECT
DOMAIN-SUFFIX,m.wnxcg.com,REJECT
DOMAIN-SUFFIX,m.wrating.com,REJECT
DOMAIN-SUFFIX,m.yangjingbang.net,REJECT
DOMAIN-SUFFIX,m3bnqqqw.com,REJECT
DOMAIN-SUFFIX,m5.apk.67mo.com,REJECT
DOMAIN-SUFFIX,ma1.meishij.net,REJECT
DOMAIN-SUFFIX,mackeeper.com,REJECT
DOMAIN-SUFFIX,mackeeperapp.mackeeper.com,REJECT
DOMAIN-SUFFIX,mad.m.maxthon.cn,REJECT
DOMAIN-SUFFIX,madhouse.cn,REJECT
DOMAIN-SUFFIX,madmini.com,REJECT
DOMAIN-SUFFIX,mads.amazon.com,REJECT
DOMAIN-SUFFIX,mads.aol.com,REJECT
DOMAIN-SUFFIX,mads.dailymail.co.uk,REJECT
DOMAIN-SUFFIX,madserving.com,REJECT
DOMAIN-SUFFIX,magicwindow.cn,REJECT
DOMAIN-SUFFIX,magnetic.t.domdex.com,REJECT
DOMAIN-SUFFIX,maibahe300cc.com,REJECT
DOMAIN-SUFFIX,mainbx.com,REJECT
DOMAIN-SUFFIX,maisoncherry.com,REJECT
DOMAIN-SUFFIX,manage.wdfans.cn,REJECT
DOMAIN-SUFFIX,maomaotang.com,REJECT
DOMAIN-SUFFIX,map.media6degrees.com,REJECT
DOMAIN-SUFFIX,market.178.com,REJECT
DOMAIN-SUFFIX,market.21cn.com,REJECT
DOMAIN-SUFFIX,market.aliyun.com,REJECT
DOMAIN-SUFFIX,market.duowan.com,REJECT
DOMAIN-SUFFIX,marketgid.com,REJECT
DOMAIN-SUFFIX,marketing.888.com,REJECT
DOMAIN-SUFFIX,marketingsolutions.yahoo.com,REJECT
DOMAIN-SUFFIX,marketo.com,REJECT
DOMAIN-SUFFIX,marketo.net,REJECT
DOMAIN-SUFFIX,maskbaby.com.cn,REJECT
DOMAIN-SUFFIX,master.wap.dphub.sandai.net,REJECT
DOMAIN-SUFFIX,match.adsby.bidtheatre.com,REJECT
DOMAIN-SUFFIX,match.adsrvr.org,REJECT
DOMAIN-SUFFIX,match.p4p.1688.com,REJECT
DOMAIN-SUFFIX,match.prod.bidr.io,REJECT
DOMAIN-SUFFIX,match.rundsp.com,REJECT
DOMAIN-SUFFIX,material.istreamsche.com,REJECT
DOMAIN-SUFFIX,material.mtty.xin,REJECT
DOMAIN-SUFFIX,mathtag.com,REJECT
DOMAIN-SUFFIX,maw.wnbfw.com,REJECT
DOMAIN-SUFFIX,maxwebsearch.com,REJECT
DOMAIN-SUFFIX,maysunmedia.com,REJECT
DOMAIN-SUFFIX,mb.hockeybuzz.com,REJECT
DOMAIN-SUFFIX,mb.zam.com,REJECT
DOMAIN-SUFFIX,mbai.cn,REJECT
DOMAIN-SUFFIX,mbs.weathercn.com,REJECT
DOMAIN-SUFFIX,mc.yandex.ru,REJECT
DOMAIN-SUFFIX,md.he9630.com,REJECT
DOMAIN-SUFFIX,md.sh5e.com,REJECT
DOMAIN-SUFFIX,md0z4dh.com,REJECT
DOMAIN-SUFFIX,mdotm.com,REJECT
DOMAIN-SUFFIX,mdpjnppsbjv.bid,REJECT
DOMAIN-SUFFIX,mdrecv.app.cntvwb.cn,REJECT
DOMAIN-SUFFIX,mealsandsteals.sandiego6.com,REJECT
DOMAIN-SUFFIX,medal.blog.csdn.net,REJECT
DOMAIN-SUFFIX,media.trafficfactory.biz,REJECT
DOMAIN-SUFFIX,media8.cn,REJECT
DOMAIN-SUFFIX,mediamgr.ugo.com,REJECT
DOMAIN-SUFFIX,mediaplex.com,REJECT
DOMAIN-SUFFIX,mediapro.pro.cn,REJECT
DOMAIN-SUFFIX,mediav.com,REJECT
DOMAIN-SUFFIX,medrx.telstra.com.au,REJECT
DOMAIN-SUFFIX,megajoy.com,REJECT
DOMAIN-SUFFIX,meimeidaren.com,REJECT
DOMAIN-SUFFIX,meiti1.net,REJECT
DOMAIN-SUFFIX,menghuanzs.com,REJECT
DOMAIN-SUFFIX,mengmengdas.com,REJECT
DOMAIN-SUFFIX,mfp.deliver.ifeng.com,REJECT
DOMAIN-SUFFIX,mfsr.lenovomm.com,REJECT
DOMAIN-SUFFIX,mg.5pk,REJECT
DOMAIN-SUFFIX,mgid.com,REJECT
DOMAIN-SUFFIX,mgogo.com,REJECT
DOMAIN-SUFFIX,mgr.aduu.cn,REJECT
DOMAIN-SUFFIX,mgwcn.com,REJECT
DOMAIN-SUFFIX,mgwl668.com,REJECT
DOMAIN-SUFFIX,miaozhen.com,REJECT
DOMAIN-SUFFIX,microad-cn.com,REJECT
DOMAIN-SUFFIX,migu.kssws.ks-cdn.com,REJECT
DOMAIN-SUFFIX,mihui.com,REJECT
DOMAIN-SUFFIX,miidi.net,REJECT
DOMAIN-SUFFIX,mijifen.com,REJECT
DOMAIN-SUFFIX,milk.yesky.com.cn,REJECT
DOMAIN-SUFFIX,millennialmedia.com,REJECT
DOMAIN-SUFFIX,millwardbrownacsr.com,REJECT
DOMAIN-SUFFIX,minesage.com,REJECT
DOMAIN-SUFFIX,minghui.com,REJECT
DOMAIN-SUFFIX,minghui.org,REJECT
DOMAIN-SUFFIX,mingxianshanghang.cn,REJECT
DOMAIN-SUFFIX,mingysh.com,REJECT
DOMAIN-SUFFIX,mini.hao123.com,REJECT
DOMAIN-SUFFIX,mini.jijiplayer.com,REJECT
DOMAIN-SUFFIX,minisplat.cn,REJECT
DOMAIN-SUFFIX,miniye.xjts.cn,REJECT
DOMAIN-SUFFIX,miui.hftaili.com,REJECT
DOMAIN-SUFFIX,mlb.did.ijinshan.com,REJECT
DOMAIN-SUFFIX,mlgrrqymdsyk.com,REJECT
DOMAIN-SUFFIX,mlt01.com,REJECT
DOMAIN-SUFFIX,mm.anqu.com,REJECT
DOMAIN-SUFFIX,mmcc.yxlady.com,REJECT
DOMAIN-SUFFIX,mng-ads.com,REJECT
DOMAIN-SUFFIX,mnkan.com,REJECT
DOMAIN-SUFFIX,mnwan.com,REJECT
DOMAIN-SUFFIX,mnxtu.com,REJECT
DOMAIN-SUFFIX,mo.haloapps.cn,REJECT
DOMAIN-SUFFIX,mo.test.haloapps.com,REJECT
DOMAIN-SUFFIX,moad.cn,REJECT
DOMAIN-SUFFIX,moatads.com,REJECT
DOMAIN-SUFFIX,mob.com,REJECT
DOMAIN-SUFFIX,mobad.ijinshan.com,REJECT
DOMAIN-SUFFIX,mobadme.jp,REJECT
DOMAIN-SUFFIX,mobclix.com,REJECT
DOMAIN-SUFFIX,mobfox.com,REJECT
DOMAIN-SUFFIX,mobgi.com,REJECT
DOMAIN-SUFFIX,mobileads.msn.com,REJECT
DOMAIN-SUFFIX,mobileapptracking.com,REJECT
DOMAIN-SUFFIX,mobiledissector.com,REJECT
DOMAIN-SUFFIX,mobilityware.com,REJECT
DOMAIN-SUFFIX,mobiorg8.com,REJECT
DOMAIN-SUFFIX,mobisage.cn,REJECT
DOMAIN-SUFFIX,mobvista.com,REJECT
DOMAIN-SUFFIX,monero.how,REJECT
DOMAIN-SUFFIX,money.qz828.com,REJECT
DOMAIN-SUFFIX,moodoocrv.com.cn,REJECT
DOMAIN-SUFFIX,moogos.com,REJECT
DOMAIN-SUFFIX,mookie1.com,REJECT
DOMAIN-SUFFIX,moonwish.com.cn,REJECT
DOMAIN-SUFFIX,mopub.com,REJECT
DOMAIN-SUFFIX,moquanad.com,REJECT
DOMAIN-SUFFIX,mosa86.com,REJECT
DOMAIN-SUFFIX,mostat.wps.cn,REJECT
DOMAIN-SUFFIX,motohelpr.com,REJECT
DOMAIN-SUFFIX,mou.niu.xunlei.com,REJECT
DOMAIN-SUFFIX,moupdate10332052.wps.cn,REJECT
DOMAIN-SUFFIX,moutaihotel.cn,REJECT
DOMAIN-SUFFIX,mpb1.iteye.com,REJECT
DOMAIN-SUFFIX,mpb2.iteye.com,REJECT
DOMAIN-SUFFIX,mpp.vindicosuite.com,REJECT
DOMAIN-SUFFIX,mps.nbcuni.com,REJECT
DOMAIN-SUFFIX,mpush.cn,REJECT
DOMAIN-SUFFIX,mrksys.com,REJECT
DOMAIN-SUFFIX,ms.cmcm.com,REJECT
DOMAIN-SUFFIX,msads.net,REJECT
DOMAIN-SUFFIX,mscimg.com,REJECT
DOMAIN-SUFFIX,msga.71.am,REJECT
DOMAIN-SUFFIX,msltzer.cn,REJECT
DOMAIN-SUFFIX,msn.wrating.com,REJECT
DOMAIN-SUFFIX,msnclick.wrating.com,REJECT
DOMAIN-SUFFIX,mstzym.com,REJECT
DOMAIN-SUFFIX,msypr.com,REJECT
DOMAIN-SUFFIX,mti.35kds.com,REJECT
DOMAIN-SUFFIX,mtj.baidu.com,REJECT
DOMAIN-SUFFIX,mtty-cdn.mtty.xin,REJECT
DOMAIN-SUFFIX,mtxsk.com,REJECT
DOMAIN-SUFFIX,music.adcome.cn,REJECT
DOMAIN-SUFFIX,musik-mp3.info,REJECT
DOMAIN-SUFFIX,mw.adwo.com,REJECT
DOMAIN-SUFFIX,mwlucuvbyrff.com,REJECT
DOMAIN-SUFFIX,mxmrt.com,REJECT
DOMAIN-SUFFIX,mxpnl.com,REJECT
DOMAIN-SUFFIX,my1fc.m.b5200.net,REJECT
DOMAIN-SUFFIX,my1fimg.m.b5200.net,REJECT
DOMAIN-SUFFIX,myad.toocle.com,REJECT
DOMAIN-SUFFIX,mydas.mobi,REJECT
DOMAIN-SUFFIX,mytanwan.com,REJECT
DOMAIN-SUFFIX,mytzdhz.cn,REJECT
DOMAIN-SUFFIX,myycrw.com,REJECT
DOMAIN-SUFFIX,myzk1.com,REJECT
DOMAIN-SUFFIX,myzwqwe12.com,REJECT
DOMAIN-SUFFIX,mzy2014.com,REJECT
DOMAIN-SUFFIX,n.a.mosenni.com,REJECT
DOMAIN-SUFFIX,n.cosbot.cn,REJECT
DOMAIN-SUFFIX,nai.cpxkvc.com,REJECT
DOMAIN-SUFFIX,namedq.com,REJECT
DOMAIN-SUFFIX,namemek.com,REJECT
DOMAIN-SUFFIX,naqigs.com,REJECT
DOMAIN-SUFFIX,nbhxgjz.com,REJECT
DOMAIN-SUFFIX,nbjjd.com,REJECT
DOMAIN-SUFFIX,nbzq.net,REJECT
DOMAIN-SUFFIX,ncachear.com,REJECT
DOMAIN-SUFFIX,nchte.com,REJECT
DOMAIN-SUFFIX,ndtzx.com,REJECT
DOMAIN-SUFFIX,ne9377.com,REJECT
DOMAIN-SUFFIX,nend.net,REJECT
DOMAIN-SUFFIX,nest.youwatch.org,REJECT
DOMAIN-SUFFIX,net.adpush.cn,REJECT
DOMAIN-SUFFIX,netko0o.com,REJECT
DOMAIN-SUFFIX,netshelter.net,REJECT
DOMAIN-SUFFIX,netspidermm.indiatimes.com,REJECT
DOMAIN-SUFFIX,network.aufeminin.com,REJECT
DOMAIN-SUFFIX,network.business.com,REJECT
DOMAIN-SUFFIX,network.sofeminine.co.uk,REJECT
DOMAIN-SUFFIX,networkbench.com,REJECT
DOMAIN-SUFFIX,new.ltheanine.cn,REJECT
DOMAIN-SUFFIX,new.users.51.la,REJECT
DOMAIN-SUFFIX,new.zhqiu.com,REJECT
DOMAIN-SUFFIX,newloc.map.n.shifen.com,REJECT
DOMAIN-SUFFIX,news.766ba.net,REJECT
DOMAIN-SUFFIX,nexage.com,REJECT
DOMAIN-SUFFIX,nextcps.com,REJECT
DOMAIN-SUFFIX,nhz.adwo.com,REJECT
DOMAIN-SUFFIX,ninebox.cn,REJECT
DOMAIN-SUFFIX,niurenw.com,REJECT
DOMAIN-SUFFIX,niux88.com,REJECT
DOMAIN-SUFFIX,niuxgame77.com,REJECT
DOMAIN-SUFFIX,njdijiani.com,REJECT
DOMAIN-SUFFIX,njfsk.com,REJECT
DOMAIN-SUFFIX,njq.net,REJECT
DOMAIN-SUFFIX,nkeo.top,REJECT
DOMAIN-SUFFIX,nmbtedu.com,REJECT
DOMAIN-SUFFIX,nmkgs.cn,REJECT
DOMAIN-SUFFIX,nmpcdn.com,REJECT
DOMAIN-SUFFIX,nmqbg.com,REJECT
DOMAIN-SUFFIX,nnedbx.com,REJECT
DOMAIN-SUFFIX,nngft.com,REJECT
DOMAIN-SUFFIX,noberlmall.com,REJECT
DOMAIN-SUFFIX,nongsalei.com,REJECT
DOMAIN-SUFFIX,nop.xpanama.net,REJECT
DOMAIN-SUFFIX,notice.uchome.manyou.com,REJECT
DOMAIN-SUFFIX,notify.oupeng.com,REJECT
DOMAIN-SUFFIX,nowskip.com,REJECT
DOMAIN-SUFFIX,npdaqy6x1j.me,REJECT
DOMAIN-SUFFIX,nr1234.com,REJECT
DOMAIN-SUFFIX,nsnmiaomu.cn,REJECT
DOMAIN-SUFFIX,ntalker.com,REJECT
DOMAIN-SUFFIX,ntdtv.com,REJECT
DOMAIN-SUFFIX,ntdtv.org,REJECT
DOMAIN-SUFFIX,nterbx.com,REJECT
DOMAIN-SUFFIX,nthyn.com,REJECT
DOMAIN-SUFFIX,nwwap.com,REJECT
DOMAIN-SUFFIX,nxrhs.com,REJECT
DOMAIN-SUFFIX,nxrxt.con,REJECT
DOMAIN-SUFFIX,ny7f6goy.bid,REJECT
DOMAIN-SUFFIX,nylalobghyhirgh.com,REJECT
DOMAIN-SUFFIX,nysita.com,REJECT
DOMAIN-SUFFIX,nzezn.com,REJECT
DOMAIN-SUFFIX,o.minisplat.cn,REJECT
DOMAIN-SUFFIX,o091i.com,REJECT
DOMAIN-SUFFIX,o2omobi.com,REJECT
DOMAIN-SUFFIX,o7xs6runw.bkt.clouddn.com,REJECT
DOMAIN-SUFFIX,oa129.com,REJECT
DOMAIN-SUFFIX,oadz.com,REJECT
DOMAIN-SUFFIX,oas.autotrader.co.uk,REJECT
DOMAIN-SUFFIX,oas.luxweb.com,REJECT
DOMAIN-SUFFIX,oas.skyscanner.net,REJECT
DOMAIN-SUFFIX,oasc07.citywire.co.uk,REJECT
DOMAIN-SUFFIX,oascentral.chron.com,REJECT
DOMAIN-SUFFIX,oascentral.hosted.ap.org,REJECT
DOMAIN-SUFFIX,oascentral.newsmax.com,REJECT
DOMAIN-SUFFIX,obeyter.com,REJECT
DOMAIN-SUFFIX,ocsp.godaddy.com,REJECT
DOMAIN-SUFFIX,odin.goo.mx,REJECT
DOMAIN-SUFFIX,officeme.cn,REJECT
DOMAIN-SUFFIX,offline-adv.oray.com,REJECT
DOMAIN-SUFFIX,oikxlcv.wang,REJECT
DOMAIN-SUFFIX,ojngisbfwwyp.com,REJECT
DOMAIN-SUFFIX,ok.432kkk.com,REJECT
DOMAIN-SUFFIX,ok365.com,REJECT
DOMAIN-SUFFIX,okkkk.com,REJECT
DOMAIN-SUFFIX,okm918.com,REJECT
DOMAIN-SUFFIX,okokw.com,REJECT
DOMAIN-SUFFIX,olcdn.com,REJECT
DOMAIN-SUFFIX,on.maxspeedcdn.com,REJECT
DOMAIN-SUFFIX,onclickads.net,REJECT
DOMAIN-SUFFIX,one.520319.cn,REJECT
DOMAIN-SUFFIX,oneapm.com,REJECT
DOMAIN-SUFFIX,onesoft.im,REJECT
DOMAIN-SUFFIX,onetad.com,REJECT
DOMAIN-SUFFIX,onetag-sys.com,REJECT
DOMAIN-SUFFIX,onlifjj.net,REJECT
DOMAIN-SUFFIX,oomyv.com,REJECT
DOMAIN-SUFFIX,ooss.oss.aliyuncs.com,REJECT
DOMAIN-SUFFIX,oppo.yidianzixun.com,REJECT
DOMAIN-SUFFIX,optaim.com,REJECT
DOMAIN-SUFFIX,optimix.asia,REJECT
DOMAIN-SUFFIX,optimix.cn,REJECT
DOMAIN-SUFFIX,optimizelyapis.com,REJECT
DOMAIN-SUFFIX,oq68.com,REJECT
DOMAIN-SUFFIX,orchidscape.net,REJECT
DOMAIN-SUFFIX,orz.hupu.com,REJECT
DOMAIN-SUFFIX,osupdateservice.yunos.com,REJECT
DOMAIN-SUFFIX,otf.msn.com,REJECT
DOMAIN-SUFFIX,ou188.com,REJECT
DOMAIN-SUFFIX,overture.com,REJECT
DOMAIN-SUFFIX,ow.s1.shuhuangge.org,REJECT
DOMAIN-SUFFIX,ow.s2.shuhuangge.org,REJECT
DOMAIN-SUFFIX,ox.furaffinity.net,REJECT
DOMAIN-SUFFIX,oyzsverimywg.com,REJECT
DOMAIN-SUFFIX,p.7060.la,REJECT
DOMAIN-SUFFIX,p.adsymptotic.com,REJECT
DOMAIN-SUFFIX,p.ecwan77.net,REJECT
DOMAIN-SUFFIX,p.kjwx8.com,REJECT
DOMAIN-SUFFIX,p.rfihub.com,REJECT
DOMAIN-SUFFIX,p.sdu8cvc.com,REJECT
DOMAIN-SUFFIX,p.szonline.net,REJECT
DOMAIN-SUFFIX,p.tencentmind.com,REJECT
DOMAIN-SUFFIX,p0y.cn,REJECT
DOMAIN-SUFFIX,p1.18zhongyao.com,REJECT
DOMAIN-SUFFIX,p3p.mmstat.com,REJECT
DOMAIN-SUFFIX,p3tt.com,REJECT
DOMAIN-SUFFIX,p8u.hinet.net,REJECT
DOMAIN-SUFFIX,package01.com,REJECT
DOMAIN-SUFFIX,padsdel2.cdnads.com,REJECT
DOMAIN-SUFFIX,page.amap.com,REJECT
DOMAIN-SUFFIX,pagechoice.com,REJECT
DOMAIN-SUFFIX,painiuimg.com,REJECT
DOMAIN-SUFFIX,panda.kdnet.net,REJECT
DOMAIN-SUFFIX,pangu.cc,REJECT
DOMAIN-SUFFIX,panoramio.com,REJECT
DOMAIN-SUFFIX,papajia55.com,REJECT
DOMAIN-SUFFIX,parking.zunmi.cn,REJECT
DOMAIN-SUFFIX,partner.bargaindomains.com,REJECT
DOMAIN-SUFFIX,partner.catchy.com,REJECT
DOMAIN-SUFFIX,partner.premiumdomains.com,REJECT
DOMAIN-SUFFIX,partners.fshealth.com,REJECT
DOMAIN-SUFFIX,partners.keezmovies.com,REJECT
DOMAIN-SUFFIX,partners.optiontide.com,REJECT
DOMAIN-SUFFIX,partners.pornerbros.com,REJECT
DOMAIN-SUFFIX,partners.rochen.com,REJECT
DOMAIN-SUFFIX,partners.sportingbet.com.au,REJECT
DOMAIN-SUFFIX,partners.vouchedfor.co.uk,REJECT
DOMAIN-SUFFIX,partners.xpertmarket.com,REJECT
DOMAIN-SUFFIX,party-nngvitbizn.now.sh,REJECT
DOMAIN-SUFFIX,passwz.com,REJECT
DOMAIN-SUFFIX,pay838.com,REJECT
DOMAIN-SUFFIX,pb.s3wfg.com,REJECT
DOMAIN-SUFFIX,pb.wang502.com,REJECT
DOMAIN-SUFFIX,pb3.pstatp.com,REJECT
DOMAIN-SUFFIX,pbs.lenovomm.com,REJECT
DOMAIN-SUFFIX,pc.quansj.cn,REJECT
DOMAIN-SUFFIX,pcfg.wps.cn,REJECT
DOMAIN-SUFFIX,pcmzn.com,REJECT
DOMAIN-SUFFIX,pdl.gionee.com,REJECT
DOMAIN-SUFFIX,pdsjycm.com,REJECT
DOMAIN-SUFFIX,pedailyu.com,REJECT
DOMAIN-SUFFIX,pee.cn,REJECT
DOMAIN-SUFFIX,pegasus.cmcm.com,REJECT
DOMAIN-SUFFIX,phpad.cqnews.net,REJECT
DOMAIN-SUFFIX,pic.0597kk.com,REJECT
DOMAIN-SUFFIX,pic.2u.com.cn,REJECT
DOMAIN-SUFFIX,pic.517m.cn,REJECT
DOMAIN-SUFFIX,pic.ea3w.com,REJECT
DOMAIN-SUFFIX,pic.fengniao.com,REJECT
DOMAIN-SUFFIX,pic.neiyicun.net,REJECT
DOMAIN-SUFFIX,picsinfog.com,REJECT
DOMAIN-SUFFIX,picturesquefilms.net,REJECT
DOMAIN-SUFFIX,pingbi.diudou.com,REJECT
DOMAIN-SUFFIX,pingdom.net,REJECT
DOMAIN-SUFFIX,pingshetrip.com,REJECT
DOMAIN-SUFFIX,pix.impdesk.com,REJECT
DOMAIN-SUFFIX,pixel.adsafeprotected.com,REJECT
DOMAIN-SUFFIX,pixel.mathtag.com,REJECT
DOMAIN-SUFFIX,pixel.quantserve.com,REJECT
DOMAIN-SUFFIX,pixel.rubiconproject.com,REJECT
DOMAIN-SUFFIX,pixel.sitescout.com,REJECT
DOMAIN-SUFFIX,pixel.tapad.com,REJECT
DOMAIN-SUFFIX,pixel.wp.com,REJECT
DOMAIN-SUFFIX,pixel-a.sitescout.com,REJECT
DOMAIN-SUFFIX,pixels.asia,REJECT
DOMAIN-SUFFIX,pixfuture.net,REJECT
DOMAIN-SUFFIX,pjtymy.cn,REJECT
DOMAIN-SUFFIX,pk840.com,REJECT
DOMAIN-SUFFIX,playad.xjmg.com,REJECT
DOMAIN-SUFFIX,player.1800coupon.com,REJECT
DOMAIN-SUFFIX,player.1stcreditrepairs.com,REJECT
DOMAIN-SUFFIX,player.800directories.com,REJECT
DOMAIN-SUFFIX,player.accoona.com,REJECT
DOMAIN-SUFFIX,player.alloutwedding.com,REJECT
DOMAIN-SUFFIX,player.insuranceandhealth.com,REJECT
DOMAIN-SUFFIX,playinfo.gomlab.com,REJECT
DOMAIN-SUFFIX,plista.com,REJECT
DOMAIN-SUFFIX,plmkolp.m.58xs.tw,REJECT
DOMAIN-SUFFIX,plwan.com,REJECT
DOMAIN-SUFFIX,pmm.people.com.cn,REJECT
DOMAIN-SUFFIX,pnhfc.com,REJECT
DOMAIN-SUFFIX,pofang.com,REJECT
DOMAIN-SUFFIX,polkoa.com,REJECT
DOMAIN-SUFFIX,pomhz.com,REJECT
DOMAIN-SUFFIX,pop.91mangrandi.com,REJECT
DOMAIN-SUFFIX,pop.sjk.ijinshan.com,REJECT
DOMAIN-SUFFIX,popads.net,REJECT
DOMAIN-SUFFIX,popup.msn.com,REJECT
DOMAIN-SUFFIX,post.ra.icast.cn,REJECT
DOMAIN-SUFFIX,poster.weather.com.cn,REJECT
DOMAIN-SUFFIX,powergg.top,REJECT
DOMAIN-SUFFIX,poyang.com,REJECT
DOMAIN-SUFFIX,ppjia55.com,REJECT
DOMAIN-SUFFIX,pr00001.com,REJECT
DOMAIN-SUFFIX,prc.rjje4.com,REJECT
DOMAIN-SUFFIX,pre.api.tw06.xlmc.sandai.net,REJECT
DOMAIN-SUFFIX,pre.ra.icast.cn,REJECT
DOMAIN-SUFFIX,prerollads.ign.com,REJECT
DOMAIN-SUFFIX,priceinfo.comuv.com,REJECT
DOMAIN-SUFFIX,pro.cn,REJECT
DOMAIN-SUFFIX,pro.iweihai.cn,REJECT
DOMAIN-SUFFIX,probes.cedexis.com,REJECT
DOMAIN-SUFFIX,projectwonderful.com,REJECT
DOMAIN-SUFFIX,promo.fileforum.com,REJECT
DOMAIN-SUFFIX,promos.fling.com,REJECT
DOMAIN-SUFFIX,promote.pair.com,REJECT
DOMAIN-SUFFIX,promotion.gomlab.com,REJECT
DOMAIN-SUFFIX,promotions.iasbet.com,REJECT
DOMAIN-SUFFIX,propellerads.com,REJECT
DOMAIN-SUFFIX,prophet.heise.de,REJECT
DOMAIN-SUFFIX,prw.lenovomm.com,REJECT
DOMAIN-SUFFIX,psb.lenovomm.com,REJECT
DOMAIN-SUFFIX,ptdrw.com,REJECT
DOMAIN-SUFFIX,ptkhy.com,REJECT
DOMAIN-SUFFIX,ptw.la,REJECT
DOMAIN-SUFFIX,pub.betclick.com,REJECT
DOMAIN-SUFFIX,pub.chinadailyasia.com,REJECT
DOMAIN-SUFFIX,pub.funshion.com,REJECT
DOMAIN-SUFFIX,pub1.cope.es,REJECT
DOMAIN-SUFFIX,pubbirdf.com,REJECT
DOMAIN-SUFFIX,public6.com,REJECT
DOMAIN-SUFFIX,publicidad.net,REJECT
DOMAIN-SUFFIX,publicidad.tv,REJECT
DOMAIN-SUFFIX,publish.ad.youth.cn,REJECT
DOMAIN-SUFFIX,pubmatic.com,REJECT
DOMAIN-SUFFIX,pubnub.com,REJECT
DOMAIN-SUFFIX,pubs.hiddennetwork.com,REJECT
DOMAIN-SUFFIX,punchbox.org,REJECT
DOMAIN-SUFFIX,pups.bdimg.com,REJECT
DOMAIN-SUFFIX,push.air-matters.com,REJECT
DOMAIN-SUFFIX,push.wandoujia.com,REJECT
DOMAIN-SUFFIX,pushapi.lenovomm.com,REJECT
DOMAIN-SUFFIX,pv.anzhi.com,REJECT
DOMAIN-SUFFIX,pv.ra.icast.cn,REJECT
DOMAIN-SUFFIX,pwj.biqugezw.com,REJECT
DOMAIN-SUFFIX,px.adhigh.net,REJECT
DOMAIN-SUFFIX,px.media-serving.com,REJECT
DOMAIN-SUFFIX,px.moatads.com,REJECT
DOMAIN-SUFFIX,px.owneriq.net,REJECT
DOMAIN-SUFFIX,px.powerlinks.com,REJECT
DOMAIN-SUFFIX,pxene.com,REJECT
DOMAIN-SUFFIX,pxl.connexity.net,REJECT
DOMAIN-SUFFIX,py.qlogo.cn,REJECT
DOMAIN-SUFFIX,py2.qlogo.cn,REJECT
DOMAIN-SUFFIX,pyzkk.com,REJECT
DOMAIN-SUFFIX,qbyy010.com,REJECT
DOMAIN-SUFFIX,qcjslm.com,REJECT
DOMAIN-SUFFIX,qcl777.com,REJECT
DOMAIN-SUFFIX,qd.dhzw.org,REJECT
DOMAIN-SUFFIX,qd.js.sanjiangge.com,REJECT
DOMAIN-SUFFIX,qd.wanjuanba.com,REJECT
DOMAIN-SUFFIX,qd.x4399.com,REJECT
DOMAIN-SUFFIX,qdchunyu.com,REJECT
DOMAIN-SUFFIX,qgss8.com,REJECT
DOMAIN-SUFFIX,qhaif.com,REJECT
DOMAIN-SUFFIX,qiailm.com,REJECT
DOMAIN-SUFFIX,qihaoqu.com,REJECT
DOMAIN-SUFFIX,qingqu.la,REJECT
DOMAIN-SUFFIX,qiqipower.com,REJECT
DOMAIN-SUFFIX,qiqivv.com,REJECT
DOMAIN-SUFFIX,qiqiww.com,REJECT
DOMAIN-SUFFIX,qiqiyii.com,REJECT
DOMAIN-SUFFIX,qiyou.com,REJECT
DOMAIN-SUFFIX,qjjtc.com,REJECT
DOMAIN-SUFFIX,qloer.com,REJECT
DOMAIN-SUFFIX,qlonglong.com,REJECT
DOMAIN-SUFFIX,qmkdy.com,REJECT
DOMAIN-SUFFIX,qoiusky.com,REJECT
DOMAIN-SUFFIX,qooic.com,REJECT
DOMAIN-SUFFIX,qq.tapiche.cn,REJECT
DOMAIN-SUFFIX,qq2.co,REJECT
DOMAIN-SUFFIX,qq61.com,REJECT
DOMAIN-SUFFIX,qqadapt.qpic.cn,REJECT
DOMAIN-SUFFIX,qqhuhu.com,REJECT
DOMAIN-SUFFIX,qqm98.com,REJECT
DOMAIN-SUFFIX,qqzu.com,REJECT
DOMAIN-SUFFIX,qsbz2011.com,REJECT
DOMAIN-SUFFIX,qshxc.com,REJECT
DOMAIN-SUFFIX,qt.biqugezw.com,REJECT
DOMAIN-SUFFIX,qtmojo.cn,REJECT
DOMAIN-SUFFIX,qtmojo.com,REJECT
DOMAIN-SUFFIX,quansj.cn,REJECT
DOMAIN-SUFFIX,quantcount.com,REJECT
DOMAIN-SUFFIX,quantserve.com,REJECT
DOMAIN-SUFFIX,qucaigg.com,REJECT
DOMAIN-SUFFIX,queene.cn,REJECT
DOMAIN-SUFFIX,questionmarket.com,REJECT
DOMAIN-SUFFIX,qujishu.com,REJECT
DOMAIN-SUFFIX,qumi.com,REJECT
DOMAIN-SUFFIX,quote.51.la,REJECT
DOMAIN-SUFFIX,quw18.com,REJECT
DOMAIN-SUFFIX,qxjdlf.com,REJECT
DOMAIN-SUFFIX,qxxys.com,REJECT
DOMAIN-SUFFIX,qyctj.com,REJECT
DOMAIN-SUFFIX,qytyf.com,REJECT
DOMAIN-SUFFIX,qzdag.com,REJECT
DOMAIN-SUFFIX,qzdfc.com,REJECT
DOMAIN-SUFFIX,qzkxt.com,REJECT
DOMAIN-SUFFIX,r.0.0.0.0.cn,REJECT
DOMAIN-SUFFIX,r.254a.com,REJECT
DOMAIN-SUFFIX,r.bxb.oupeng.com,REJECT
DOMAIN-SUFFIX,r.msn.com,REJECT
DOMAIN-SUFFIX,r.ow.0.0.0.0.cn,REJECT
DOMAIN-SUFFIX,r.radikal.ru,REJECT
DOMAIN-SUFFIX,r2.adwo.com,REJECT
DOMAIN-SUFFIX,r3 adwo.com,REJECT
DOMAIN-SUFFIX,r3.adwo.com,REJECT
DOMAIN-SUFFIX,r8nu86wg.me,REJECT
DOMAIN-SUFFIX,ra.gtimg.com,REJECT
DOMAIN-SUFFIX,rabbit.tg.meitu.com,REJECT
DOMAIN-SUFFIX,rack.bauermedia.co.uk,REJECT
DOMAIN-SUFFIX,rad.live.com,REJECT
DOMAIN-SUFFIX,rad.microsoft.com,REJECT
DOMAIN-SUFFIX,rad.msn.com,REJECT
DOMAIN-SUFFIX,radar.cedexis.com,REJECT
DOMAIN-SUFFIX,rbp.emea.mxptint.net,REJECT
DOMAIN-SUFFIX,rbp.mxptint.net,REJECT
DOMAIN-SUFFIX,rbywg.com,REJECT
DOMAIN-SUFFIX,rc2waycm-atl.netmng.com,REJECT
DOMAIN-SUFFIX,rcmd.pop.ijinshan.com,REJECT
DOMAIN-SUFFIX,rcp.c.appier.net,REJECT
DOMAIN-SUFFIX,rcv.mobad.ijinshan.com,REJECT
DOMAIN-SUFFIX,rcv.union-wifi.com,REJECT
DOMAIN-SUFFIX,rdiqt.cn,REJECT
DOMAIN-SUFFIX,rdtuijian.com,REJECT
DOMAIN-SUFFIX,re.taotaosou.com,REJECT
DOMAIN-SUFFIX,reachmax.cn,REJECT
DOMAIN-SUFFIX,realtime.monitor.ppweb.com.cn,REJECT
DOMAIN-SUFFIX,red.bayimg.net,REJECT
DOMAIN-SUFFIX,redvase.bravenet.com,REJECT
DOMAIN-SUFFIX,referrer.disqus.com,REJECT
DOMAIN-SUFFIX,reliancevalve.com,REJECT
DOMAIN-SUFFIX,remote88.com,REJECT
DOMAIN-SUFFIX,remotedu.cn,REJECT
DOMAIN-SUFFIX,rencai56.com,REJECT
DOMAIN-SUFFIX,report.adview.cn,REJECT
DOMAIN-SUFFIX,res.adcome.cn,REJECT
DOMAIN-SUFFIX,res.aduu.cn,REJECT
DOMAIN-SUFFIX,res.icast.cn,REJECT
DOMAIN-SUFFIX,res.ipingke.com,REJECT
DOMAIN-SUFFIX,res.mmstat.com,REJECT
DOMAIN-SUFFIX,res.qhupdate.com,REJECT
DOMAIN-SUFFIX,res3.feedsportal.com,REJECT
DOMAIN-SUFFIX,resetgey.com,REJECT
DOMAIN-SUFFIX,resolver.gslb.mi-idc.com,REJECT
DOMAIN-SUFFIX,resource.baomihua.com,REJECT
DOMAIN-SUFFIX,responsys.net,REJECT
DOMAIN-SUFFIX,rev.fapdu.com,REJECT
DOMAIN-SUFFIX,revdepo.com,REJECT
DOMAIN-SUFFIX,revealads.appspot.com,REJECT
DOMAIN-SUFFIX,revsci.net,REJECT
DOMAIN-SUFFIX,rhgyg.com,REJECT
DOMAIN-SUFFIX,richmedia.yimg.com,REJECT
DOMAIN-SUFFIX,riqu2015.com,REJECT
DOMAIN-SUFFIX,rl.go2yd.com,REJECT
DOMAIN-SUFFIX,rlcdn.com,REJECT
DOMAIN-SUFFIX,rm.ra.icast.cn,REJECT
DOMAIN-SUFFIX,rmads.eu.msn.com,REJECT
DOMAIN-SUFFIX,rmads.msn.com,REJECT
DOMAIN-SUFFIX,rmcxw.cn,REJECT
DOMAIN-SUFFIX,rmtx.ra.icast.cn,REJECT
DOMAIN-SUFFIX,rnfrfxqztlno.com,REJECT
DOMAIN-SUFFIX,roia.com,REJECT
DOMAIN-SUFFIX,rotabanner.kulichki.net,REJECT
DOMAIN-SUFFIX,rotate.ymtracking.com,REJECT
DOMAIN-SUFFIX,rotator.tradetracker.net,REJECT
DOMAIN-SUFFIX,router.bittorrent.com,REJECT
DOMAIN-SUFFIX,router.gwdang.com,REJECT
DOMAIN-SUFFIX,rp.gwallet.com,REJECT
DOMAIN-SUFFIX,rpaulfrank.com,REJECT
DOMAIN-SUFFIX,rpc-php.trafficfactory.biz,REJECT
DOMAIN-SUFFIX,rpt.anchorfree.net,REJECT
DOMAIN-SUFFIX,rqgsf.com,REJECT
DOMAIN-SUFFIX,rrsubway.com,REJECT
DOMAIN-SUFFIX,rs1.rensheng5.com,REJECT
DOMAIN-SUFFIX,rsccs.com,REJECT
DOMAIN-SUFFIX,rt.gsspat.jp,REJECT
DOMAIN-SUFFIX,rtas.videocc.net,REJECT
DOMAIN-SUFFIX,rtb.adview.cn,REJECT
DOMAIN-SUFFIX,rtb.eanalyzer.de,REJECT
DOMAIN-SUFFIX,rtb.metrigo.com,REJECT
DOMAIN-SUFFIX,rtbasia.com,REJECT
DOMAIN-SUFFIX,ruan88.com,REJECT
DOMAIN-SUFFIX,rubicon-match.dotomi.com,REJECT
DOMAIN-SUFFIX,rubiconproject.com,REJECT
DOMAIN-SUFFIX,rudy.adsnative.com,REJECT
DOMAIN-SUFFIX,runetki.joyreactor.ru,REJECT
DOMAIN-SUFFIX,runiman.com,REJECT
DOMAIN-SUFFIX,ruxianke.com,REJECT
DOMAIN-SUFFIX,rwjfs.com,REJECT
DOMAIN-SUFFIX,rxwan.com,REJECT
DOMAIN-SUFFIX,s.0.0.0.0.cn,REJECT
DOMAIN-SUFFIX,s.051352.com,REJECT
DOMAIN-SUFFIX,s.35kds.com,REJECT
DOMAIN-SUFFIX,s.6travel.com,REJECT
DOMAIN-SUFFIX,s.abcache.com,REJECT
DOMAIN-SUFFIX,s.go2yd.com,REJECT
DOMAIN-SUFFIX,s.ipinyou.com,REJECT
DOMAIN-SUFFIX,s.jlminte.com,REJECT
DOMAIN-SUFFIX,s.jzkelida.com,REJECT
DOMAIN-SUFFIX,s.l8l9.com,REJECT
DOMAIN-SUFFIX,s.wrating.com,REJECT
DOMAIN-SUFFIX,s.ysxufeng.com,REJECT
DOMAIN-SUFFIX,s.zixuntop.com,REJECT
DOMAIN-SUFFIX,s1.hiapk.com,REJECT
DOMAIN-SUFFIX,s1.qiuyi.cn,REJECT
DOMAIN-SUFFIX,s400cc.com,REJECT
DOMAIN-SUFFIX,s8x1.com,REJECT
DOMAIN-SUFFIX,s9w.cc,REJECT
DOMAIN-SUFFIX,sad.qeo.cn,REJECT
DOMAIN-SUFFIX,saferwet.com,REJECT
DOMAIN-SUFFIX,same.chinadaily.com.cn,REJECT
DOMAIN-SUFFIX,same.eastmoney.com,REJECT
DOMAIN-SUFFIX,same.jrj.com.cn,REJECT
DOMAIN-SUFFIX,sangxi.top,REJECT
DOMAIN-SUFFIX,sape.ru,REJECT
DOMAIN-SUFFIX,sbrqp.com,REJECT
DOMAIN-SUFFIX,sc.ggdoubi.com,REJECT
DOMAIN-SUFFIX,sc.ggfeng.com,REJECT
DOMAIN-SUFFIX,sc.iasds01.com,REJECT
DOMAIN-SUFFIX,sc1369.com,REJECT
DOMAIN-SUFFIX,scc.0.0.0.0.cn,REJECT
DOMAIN-SUFFIX,scdng.com,REJECT
DOMAIN-SUFFIX,schemas.android.com,REJECT
DOMAIN-SUFFIX,sciencelolb.com,REJECT
DOMAIN-SUFFIX,sclizhong.com,REJECT
DOMAIN-SUFFIX,scorecardresearch.com,REJECT
DOMAIN-SUFFIX,scrippsnetworks.com,REJECT
DOMAIN-SUFFIX,script.vccoo.com,REJECT
DOMAIN-SUFFIX,script-bd.baixing.net,REJECT
DOMAIN-SUFFIX,scriptcc.cc,REJECT
DOMAIN-SUFFIX,scupio.com,REJECT
DOMAIN-SUFFIX,scw0.com,REJECT
DOMAIN-SUFFIX,sd.0.0.0.0.cn,REJECT
DOMAIN-SUFFIX,sd.kk3g.net,REJECT
DOMAIN-SUFFIX,sdac.lenovomm.com,REJECT
DOMAIN-SUFFIX,sdapprecv.app.cntvwb.cn,REJECT
DOMAIN-SUFFIX,sdb.amazonaws.com,REJECT
DOMAIN-SUFFIX,sdhzstone.net,REJECT
DOMAIN-SUFFIX,sdk.mobad.ijinshan.com,REJECT
DOMAIN-SUFFIX,sdk.open.talk.gepush.com,REJECT
DOMAIN-SUFFIX,sdkdm.com,REJECT
DOMAIN-SUFFIX,sdksitter.m.sjzhushou.com,REJECT
DOMAIN-SUFFIX,sdl.0.0.0.0.cn,REJECT
DOMAIN-SUFFIX,sdqoi2d.com,REJECT
DOMAIN-SUFFIX,sdsp.ipinyou.com,REJECT
DOMAIN-SUFFIX,sdu.adwo.com,REJECT
DOMAIN-SUFFIX,sdwfw.com,REJECT
DOMAIN-SUFFIX,sdycd.com,REJECT
DOMAIN-SUFFIX,searchignited.com,REJECT
DOMAIN-SUFFIX,searchswapper.com,REJECT
DOMAIN-SUFFIX,sebar.thand.info,REJECT
DOMAIN-SUFFIX,secretmedia.s3.amazonaws.com,REJECT
DOMAIN-SUFFIX,seen.hgo7r.cn,REJECT
DOMAIN-SUFFIX,segment.com,REJECT
DOMAIN-SUFFIX,sell1.etlong.com,REJECT
DOMAIN-SUFFIX,serrano.hardwareheaven.com,REJECT
DOMAIN-SUFFIX,serve.popads.net,REJECT
DOMAIN-SUFFIX,servedby.keygamesnetwork.com,REJECT
DOMAIN-SUFFIX,service.ad.adesk.com,REJECT
DOMAIN-SUFFIX,service.cocounion.com,REJECT
DOMAIN-SUFFIX,service.urchin.com,REJECT
DOMAIN-SUFFIX,serving-sys.com,REJECT
DOMAIN-SUFFIX,setting.crashlytics.com,REJECT
DOMAIN-SUFFIX,sfloushi.com,REJECT
DOMAIN-SUFFIX,sgbfjs.info,REJECT
DOMAIN-SUFFIX,sgg.southcn.com,REJECT
DOMAIN-SUFFIX,shaft.jebe.renren.com,REJECT
DOMAIN-SUFFIX,shama5.com,REJECT
DOMAIN-SUFFIX,shanghaironghua.com,REJECT
DOMAIN-SUFFIX,shanglinli.com,REJECT
DOMAIN-SUFFIX,share.gzdsw.com,REJECT
DOMAIN-SUFFIX,sharedaddomain.com,REJECT
DOMAIN-SUFFIX,sharethis.com,REJECT
DOMAIN-SUFFIX,sharrysweb.com,REJECT
DOMAIN-SUFFIX,shbywsd.cn,REJECT
DOMAIN-SUFFIX,shenleyuni.com,REJECT
DOMAIN-SUFFIX,shenyian.net,REJECT
DOMAIN-SUFFIX,shenyun.com,REJECT
DOMAIN-SUFFIX,shenyun.org,REJECT
DOMAIN-SUFFIX,shenyunperformingarts.org,REJECT
DOMAIN-SUFFIX,shiftrro.com,REJECT
DOMAIN-SUFFIX,shili.downxia.com,REJECT
DOMAIN-SUFFIX,shili.wanyx.com,REJECT
DOMAIN-SUFFIX,shop.admin.yinyuetai.com,REJECT
DOMAIN-SUFFIX,shop.yinyuetai.com,REJECT
DOMAIN-SUFFIX,shop265.com,REJECT
DOMAIN-SUFFIX,shoppingpartners2.futurenet.com,REJECT
DOMAIN-SUFFIX,shouji.sougou.com,REJECT
DOMAIN-SUFFIX,show.kc.taotaosou.com,REJECT
DOMAIN-SUFFIX,show.qx15.com,REJECT
DOMAIN-SUFFIX,show.xiazai16.com,REJECT
DOMAIN-SUFFIX,showcase.vpsboard.com,REJECT
DOMAIN-SUFFIX,showing.hardwareheaven.com,REJECT
DOMAIN-SUFFIX,shows.21cn.com,REJECT
DOMAIN-SUFFIX,shucaihangjia.com,REJECT
DOMAIN-SUFFIX,shuiguo.com,REJECT
DOMAIN-SUFFIX,shushijiameng123.com,REJECT
DOMAIN-SUFFIX,shuttle.bayescom.com,REJECT
DOMAIN-SUFFIX,shuzilm.cn,REJECT
DOMAIN-SUFFIX,shxinjie.cn,REJECT
DOMAIN-SUFFIX,si9377.com,REJECT
DOMAIN-SUFFIX,sicentlife.com,REJECT
DOMAIN-SUFFIX,sigbusa.com,REJECT
DOMAIN-SUFFIX,sina.wrating.com,REJECT
DOMAIN-SUFFIX,sina.yinstar.org,REJECT
DOMAIN-SUFFIX,sinaalicdn.com,REJECT
DOMAIN-SUFFIX,sinaaliyun.cn,REJECT
DOMAIN-SUFFIX,site.img.4tube.com,REJECT
DOMAIN-SUFFIX,sitemeter.com,REJECT
DOMAIN-SUFFIX,sitemobia.com,REJECT
DOMAIN-SUFFIX,sitescout.com,REJECT
DOMAIN-SUFFIX,sitetag.us,REJECT
DOMAIN-SUFFIX,skatehot.net,REJECT
DOMAIN-SUFFIX,slot.union.ucweb.com,REJECT
DOMAIN-SUFFIX,sm.0.0.0.0.cn,REJECT
DOMAIN-SUFFIX,smartadserver.com,REJECT
DOMAIN-SUFFIX,smartmad.com,REJECT
DOMAIN-SUFFIX,smblock.s3.amazonaws.com,REJECT
DOMAIN-SUFFIX,smxay.com,REJECT
DOMAIN-SUFFIX,smxsg.com,REJECT
DOMAIN-SUFFIX,snapmobileasia.net,REJECT
DOMAIN-SUFFIX,snnnyy.com,REJECT
DOMAIN-SUFFIX,snow001.com,REJECT
DOMAIN-SUFFIX,so9l.com,REJECT
DOMAIN-SUFFIX,soarfi.cn,REJECT
DOMAIN-SUFFIX,social-touch.com,REJECT
DOMAIN-SUFFIX,sohu.wrating.com,REJECT
DOMAIN-SUFFIX,somecoding.com,REJECT
DOMAIN-SUFFIX,sonomoyo.com,REJECT
DOMAIN-SUFFIX,sos0easy.com,REJECT
DOMAIN-SUFFIX,sousuo.xm.sjzhushou.com,REJECT
DOMAIN-SUFFIX,sp3.cndm.com,REJECT
DOMAIN-SUFFIX,spade.twitch.tv,REJECT
DOMAIN-SUFFIX,sphwq.net,REJECT
DOMAIN-SUFFIX,sponsorpay.com,REJECT
DOMAIN-SUFFIX,sponsors.s2ki.com,REJECT
DOMAIN-SUFFIX,sponsors.webosroundup.com,REJECT
DOMAIN-SUFFIX,spproxy.autobytel.com,REJECT
DOMAIN-SUFFIX,spt.dictionary.com,REJECT
DOMAIN-SUFFIX,sqext.com,REJECT
DOMAIN-SUFFIX,squarespace.evyy.net,REJECT
DOMAIN-SUFFIX,srv.buysellads.com,REJECT
DOMAIN-SUFFIX,srv.carbonads.net,REJECT
DOMAIN-SUFFIX,srv.thespacereporter.com,REJECT
DOMAIN-SUFFIX,ss.cnnic.cn,REJECT
DOMAIN-SUFFIX,ss.he9630.com,REJECT
DOMAIN-SUFFIX,ss.missyouxi.com,REJECT
DOMAIN-SUFFIX,ss.shicimingju.com,REJECT
DOMAIN-SUFFIX,sscefsol.com,REJECT
DOMAIN-SUFFIX,sscefsol.com.cn,REJECT
DOMAIN-SUFFIX,ssdaili.com,REJECT
DOMAIN-SUFFIX,ssdk.adkmob.com,REJECT
DOMAIN-SUFFIX,ssjpx.com,REJECT
DOMAIN-SUFFIX,ssjy168.com,REJECT
DOMAIN-SUFFIX,ssl-cdn.static.browser.mi-img.com,REJECT
DOMAIN-SUFFIX,ssp.0531kt.com,REJECT
DOMAIN-SUFFIX,ssp.86str.com,REJECT
DOMAIN-SUFFIX,ssp.adpush.cn,REJECT
DOMAIN-SUFFIX,ssp.chaohutechan.com,REJECT
DOMAIN-SUFFIX,ssp.dmpdsp.com,REJECT
DOMAIN-SUFFIX,ssp.kss.ksyun.com,REJECT
DOMAIN-SUFFIX,ssp.kssws.ks-cdn.com,REJECT
DOMAIN-SUFFIX,ssp.pro.cn,REJECT
DOMAIN-SUFFIX,ssp.thescenseproject.com,REJECT
DOMAIN-SUFFIX,ssp.zf313.com,REJECT
DOMAIN-SUFFIX,ssp1.dmpdsp.com,REJECT
DOMAIN-SUFFIX,sspapi.youxiaoad.com,REJECT
DOMAIN-SUFFIX,sss.sege.xxx,REJECT
DOMAIN-SUFFIX,sssvd.china.com,REJECT
DOMAIN-SUFFIX,sstc360.com,REJECT
DOMAIN-SUFFIX,st.holalauncher.com,REJECT
DOMAIN-SUFFIX,st.holaworld.cn,REJECT
DOMAIN-SUFFIX,st.yandexadexchange.net,REJECT
DOMAIN-SUFFIX,sta.haloall.com,REJECT
DOMAIN-SUFFIX,sta.holagames.com,REJECT
DOMAIN-SUFFIX,sta.jcjk0451.com,REJECT
DOMAIN-SUFFIX,stadig.ifeng.com,REJECT
DOMAIN-SUFFIX,stadig0.ifeng.com,REJECT
DOMAIN-SUFFIX,stags.bluekai.com,REJECT
DOMAIN-SUFFIX,staqnet.com,REJECT
DOMAIN-SUFFIX,star8.net,REJECT
DOMAIN-SUFFIX,startapp.com,REJECT
DOMAIN-SUFFIX,startappexchange.com,REJECT
DOMAIN-SUFFIX,startappservice.com,REJECT
DOMAIN-SUFFIX,startup.oupeng.com,REJECT
DOMAIN-SUFFIX,stat.adbana.com,REJECT
DOMAIN-SUFFIX,stat.adirects.com,REJECT
DOMAIN-SUFFIX,stat.browser.nearme.com.cn,REJECT
DOMAIN-SUFFIX,stat.zol.com.cn,REJECT
DOMAIN-SUFFIX,stat.zuimeitianqi.com,REJECT
DOMAIN-SUFFIX,static.1.chenggao.cn,REJECT
DOMAIN-SUFFIX,static.adwo.com,REJECT
DOMAIN-SUFFIX,static.criteo.net,REJECT
DOMAIN-SUFFIX,static.ichehome.com,REJECT
DOMAIN-SUFFIX,static.kinghost.com,REJECT
DOMAIN-SUFFIX,static.m.sjzhushou.com,REJECT
DOMAIN-SUFFIX,static.mackeeper.com,REJECT
DOMAIN-SUFFIX,static.oh100.com,REJECT
DOMAIN-SUFFIX,static.tucsonsentinel.com,REJECT
DOMAIN-SUFFIX,static.tzyiyuantuan.com,REJECT
DOMAIN-SUFFIX,static-xl9-ssl.xunlei.com,REJECT
DOMAIN-SUFFIX,statisticsv2.yinyuetai.com,REJECT
DOMAIN-SUFFIX,stats.appsflyer.com,REJECT
DOMAIN-SUFFIX,stats.chinaz.com,REJECT
DOMAIN-SUFFIX,stats.developingperspective.com,REJECT
DOMAIN-SUFFIX,stats.dmp.ghac.cn,REJECT
DOMAIN-SUFFIX,stats.hosting24.com,REJECT
DOMAIN-SUFFIX,stats.ipinyou.com,REJECT
DOMAIN-SUFFIX,stats.mokeedev.com,REJECT
DOMAIN-SUFFIX,stats.sitesuite.org,REJECT
DOMAIN-SUFFIX,stats.umsns.com,REJECT
DOMAIN-SUFFIX,steelhousemedia.com,REJECT
DOMAIN-SUFFIX,stervapoimenialena.info,REJECT
DOMAIN-SUFFIX,stg8.com,REJECT
DOMAIN-SUFFIX,stjzh.gdtarget.com,REJECT
DOMAIN-SUFFIX,stn88.com,REJECT
DOMAIN-SUFFIX,stocksbsc.com,REJECT
DOMAIN-SUFFIX,storewidget.pcauthority.com.au,REJECT
DOMAIN-SUFFIX,stream.heavenmedia.net,REJECT
DOMAIN-SUFFIX,streaming.rtbiddingplatform.com,REJECT
DOMAIN-SUFFIX,stuff.202m.com,REJECT
DOMAIN-SUFFIX,su.bdimg.com,REJECT
DOMAIN-SUFFIX,su.bdstatic.com,REJECT
DOMAIN-SUFFIX,sub.powerapple.com,REJECT
DOMAIN-SUFFIX,sub.topber.com,REJECT
DOMAIN-SUFFIX,subswin.com,REJECT
DOMAIN-SUFFIX,sucodb.com,REJECT
DOMAIN-SUFFIX,sunjianhao.com,REJECT
DOMAIN-SUFFIX,super.cat898.com,REJECT
DOMAIN-SUFFIX,super.kdnet.net,REJECT
DOMAIN-SUFFIX,supfast.net,REJECT
DOMAIN-SUFFIX,surv.xbizmedia.com,REJECT
DOMAIN-SUFFIX,susapi.dev.surepush.cn,REJECT
DOMAIN-SUFFIX,susapi.lenovomm.com,REJECT
DOMAIN-SUFFIX,swa.gtimg.com,REJECT
DOMAIN-SUFFIX,switchadhub.com,REJECT
DOMAIN-SUFFIX,swx.0.0.0.0.cn,REJECT
DOMAIN-SUFFIX,sxbhzs.net,REJECT
DOMAIN-SUFFIX,sxdyrq.com,REJECT
DOMAIN-SUFFIX,sxjxhg.com,REJECT
DOMAIN-SUFFIX,sxz67.com,REJECT
DOMAIN-SUFFIX,sycbbs.com,REJECT
DOMAIN-SUFFIX,syilm.net,REJECT
DOMAIN-SUFFIX,sykty.com,REJECT
DOMAIN-SUFFIX,synacast.com,REJECT
DOMAIN-SUFFIX,sync.1rx.io,REJECT
DOMAIN-SUFFIX,sync.adotmob.com,REJECT
DOMAIN-SUFFIX,sync.extend.tv,REJECT
DOMAIN-SUFFIX,sync.intentiq.com,REJECT
DOMAIN-SUFFIX,sync.ipredictive.com,REJECT
DOMAIN-SUFFIX,sync.mathtag.com,REJECT
DOMAIN-SUFFIX,sync.tidaltv.com,REJECT
DOMAIN-SUFFIX,sync-dsp.ad-m.asia,REJECT
DOMAIN-SUFFIX,sync-tm.everesttech.net,REJECT
DOMAIN-SUFFIX,syndication.jsadapi.com,REJECT
DOMAIN-SUFFIX,syndication1.viraladnetwork.net,REJECT
DOMAIN-SUFFIX,syofew6o.net,REJECT
DOMAIN-SUFFIX,sysdig.com,REJECT
DOMAIN-SUFFIX,sytcyf.com,REJECT
DOMAIN-SUFFIX,sytsr.com,REJECT
DOMAIN-SUFFIX,sytz1288.com,REJECT
DOMAIN-SUFFIX,szdzbx.com,REJECT
DOMAIN-SUFFIX,szfaq.com,REJECT
DOMAIN-SUFFIX,szggdw.com,REJECT
DOMAIN-SUFFIX,szrk3.com,REJECT
DOMAIN-SUFFIX,szxpsg.com,REJECT
DOMAIN-SUFFIX,t.appsflyer.com,REJECT
DOMAIN-SUFFIX,t.atpanel.com,REJECT
DOMAIN-SUFFIX,t.collect.yinyuetai.com,REJECT
DOMAIN-SUFFIX,t1.visualrevenue.com,REJECT
DOMAIN-SUFFIX,t70123.com,REJECT
DOMAIN-SUFFIX,ta80.com,REJECT
DOMAIN-SUFFIX,taat00889.com,REJECT
DOMAIN-SUFFIX,tad.suning.com,REJECT
DOMAIN-SUFFIX,tag.yoc-adserver.com,REJECT
DOMAIN-SUFFIX,tags.bluekai.com,REJECT
DOMAIN-SUFFIX,tags2.adshell.net,REJECT
DOMAIN-SUFFIX,tajxgs.com,REJECT
DOMAIN-SUFFIX,talkingdata.com,REJECT
DOMAIN-SUFFIX,talkingdata.net,REJECT
DOMAIN-SUFFIX,tangoutianxia.com,REJECT
DOMAIN-SUFFIX,tansuotv.com,REJECT
DOMAIN-SUFFIX,tanwanyx.com,REJECT
DOMAIN-SUFFIX,tanzanite.infomine.com,REJECT
DOMAIN-SUFFIX,taobaly.cn,REJECT
DOMAIN-SUFFIX,taobaoaliyun.cn,REJECT
DOMAIN-SUFFIX,taobayun.cn,REJECT
DOMAIN-SUFFIX,taohanpai.com,REJECT
DOMAIN-SUFFIX,taomato.com,REJECT
DOMAIN-SUFFIX,tap.rubiconproject.com,REJECT
DOMAIN-SUFFIX,tapjoy.cn,REJECT
DOMAIN-SUFFIX,tapjoy.com,REJECT
DOMAIN-SUFFIX,tapjoyads.com,REJECT
DOMAIN-SUFFIX,tap-t.rubiconproject.com,REJECT
DOMAIN-SUFFIX,targetedinfo.com,REJECT
DOMAIN-SUFFIX,targetedmedia.com.cn,REJECT
DOMAIN-SUFFIX,targetedtopic.com,REJECT
DOMAIN-SUFFIX,tatagou.com.cn,REJECT
DOMAIN-SUFFIX,tbaocdn.com,REJECT
DOMAIN-SUFFIX,tbjfw.com,REJECT
DOMAIN-SUFFIX,tc.51la.net,REJECT
DOMAIN-SUFFIX,tc600.com,REJECT
DOMAIN-SUFFIX,tcjy66.cc,REJECT
DOMAIN-SUFFIX,tdayi.com,REJECT
DOMAIN-SUFFIX,temai.snssdk.com,REJECT
DOMAIN-SUFFIX,temp.163.com,REJECT
DOMAIN-SUFFIX,tencentmind.com,REJECT
DOMAIN-SUFFIX,tenddata.com,REJECT
DOMAIN-SUFFIX,test.api.xlmc.sandai.net,REJECT
DOMAIN-SUFFIX,test.surepush.cn,REJECT
DOMAIN-SUFFIX,test2014.adview.cn,REJECT
DOMAIN-SUFFIX,tf.hftaili.com,REJECT
DOMAIN-SUFFIX,tg.1155t.cn,REJECT
DOMAIN-SUFFIX,tg.52digua.com,REJECT
DOMAIN-SUFFIX,th21333.com,REJECT
DOMAIN-SUFFIX,th7.cn,REJECT
DOMAIN-SUFFIX,thejesperbay.com,REJECT
DOMAIN-SUFFIX,themis.yahoo.com,REJECT
DOMAIN-SUFFIX,thescenseproject.com,REJECT
DOMAIN-SUFFIX,thetestpage.39.net,REJECT
DOMAIN-SUFFIX,thoughtleadr.com,REJECT
DOMAIN-SUFFIX,thxnr.com,REJECT
DOMAIN-SUFFIX,thyvjboy.com,REJECT
DOMAIN-SUFFIX,ti.tradetracker.net,REJECT
DOMAIN-SUFFIX,tiangoutai.com,REJECT
DOMAIN-SUFFIX,tiangu99.com,REJECT
DOMAIN-SUFFIX,tianmidian.com,REJECT
DOMAIN-SUFFIX,tianqi777.com,REJECT
DOMAIN-SUFFIX,tianyanzs.com,REJECT
DOMAIN-SUFFIX,ticcdn.com,REJECT
DOMAIN-SUFFIX,tiqcdn.com,REJECT
DOMAIN-SUFFIX,tj.ali213.net,REJECT
DOMAIN-SUFFIX,tj.tongjiwo.com,REJECT
DOMAIN-SUFFIX,tjqonline.cn,REJECT
DOMAIN-SUFFIX,tkd777.cn,REJECT
DOMAIN-SUFFIX,tmcs.net,REJECT
DOMAIN-SUFFIX,tob-cms.bj.bcebos.com,REJECT
DOMAIN-SUFFIX,token.rubiconproject.com,REJECT
DOMAIN-SUFFIX,tongji.linezing.com,REJECT
DOMAIN-SUFFIX,tongji.wrating.com,REJECT
DOMAIN-SUFFIX,tongqing2015.com,REJECT
DOMAIN-SUFFIX,toolbar.msn.com,REJECT
DOMAIN-SUFFIX,toourbb.com,REJECT
DOMAIN-SUFFIX,top267.com,REJECT
DOMAIN-SUFFIX,touclick.com,REJECT
DOMAIN-SUFFIX,toutiao.2haha.com,REJECT
DOMAIN-SUFFIX,tp.sgcn.com,REJECT
DOMAIN-SUFFIX,tpe163.com,REJECT
DOMAIN-SUFFIX,track.adwo.com,REJECT
DOMAIN-SUFFIX,track.bcvcmedia.com,REJECT
DOMAIN-SUFFIX,track.brucelead.com,REJECT
DOMAIN-SUFFIX,track.dragonparking.com,REJECT
DOMAIN-SUFFIX,track.eyeviewads.com,REJECT
DOMAIN-SUFFIX,track.ra.icast.cn,REJECT
DOMAIN-SUFFIX,track-east.mobileadtrading.com,REJECT
DOMAIN-SUFFIX,tracker.yhd.com,REJECT
DOMAIN-SUFFIX,trackersimulator.org,REJECT
DOMAIN-SUFFIX,tracking.hostgator.com,REJECT
DOMAIN-SUFFIX,tracking.m6r.eu,REJECT
DOMAIN-SUFFIX,tracking-server-prod-1.zenmxapps.com,REJECT
DOMAIN-SUFFIX,tradeccl.com,REJECT
DOMAIN-SUFFIX,trafficfactory.biz,REJECT
DOMAIN-SUFFIX,trafficjam.cn,REJECT
DOMAIN-SUFFIX,trafficjunky.net,REJECT
DOMAIN-SUFFIX,trafficmp.com,REJECT
DOMAIN-SUFFIX,trwba.com,REJECT
DOMAIN-SUFFIX,trzina.com,REJECT
DOMAIN-SUFFIX,tsdlp.com,REJECT
DOMAIN-SUFFIX,tsjdgzm.m.3dllc.cc,REJECT
DOMAIN-SUFFIX,tsrc8.com,REJECT
DOMAIN-SUFFIX,tt.biquge.la,REJECT
DOMAIN-SUFFIX,ttlm.cc,REJECT
DOMAIN-SUFFIX,ttlowe.com,REJECT
DOMAIN-SUFFIX,tu.baixing.com,REJECT
DOMAIN-SUFFIX,tuadong.com,REJECT
DOMAIN-SUFFIX,tui.gtimg.com,REJECT
DOMAIN-SUFFIX,tui1999.com,REJECT
DOMAIN-SUFFIX,tui98.cn,REJECT
DOMAIN-SUFFIX,tuidang.epochtimes.org,REJECT
DOMAIN-SUFFIX,tuidang.org,REJECT
DOMAIN-SUFFIX,tuigoo.com,REJECT
DOMAIN-SUFFIX,tuiguang.178.com,REJECT
DOMAIN-SUFFIX,tuisong.baidu.com,REJECT
DOMAIN-SUFFIX,tukeai.com,REJECT
DOMAIN-SUFFIX,tukj.net,REJECT
DOMAIN-SUFFIX,turn.com,REJECT
DOMAIN-SUFFIX,tvupgrade.yunos.com,REJECT
DOMAIN-SUFFIX,tw.fgmtv.org,REJECT
DOMAIN-SUFFIX,tw13b093.sandai.net,REJECT
DOMAIN-SUFFIX,twb98.com,REJECT
DOMAIN-SUFFIX,twcczhu.com,REJECT
DOMAIN-SUFFIX,twinplan.com,REJECT
DOMAIN-SUFFIX,twitterzs.com,REJECT
DOMAIN-SUFFIX,twldmx.com,REJECT
DOMAIN-SUFFIX,twzui6.com,REJECT
DOMAIN-SUFFIX,txtad.jijiplayer.com,REJECT
DOMAIN-SUFFIX,tylll.com,REJECT
DOMAIN-SUFFIX,tzbtw.com,REJECT
DOMAIN-SUFFIX,tz-dsp.com,REJECT
DOMAIN-SUFFIX,u.63kc.com,REJECT
DOMAIN-SUFFIX,u.ads8.com,REJECT
DOMAIN-SUFFIX,u.cnzol.com,REJECT
DOMAIN-SUFFIX,u.huoying666.com,REJECT
DOMAIN-SUFFIX,u0.s.minisplat.cn,REJECT
DOMAIN-SUFFIX,u1.s.minisplat.cn,REJECT
DOMAIN-SUFFIX,u1.shuaiku.com,REJECT
DOMAIN-SUFFIX,u2.s.minisplat.cn,REJECT
DOMAIN-SUFFIX,ua.badongo.com,REJECT
DOMAIN-SUFFIX,uat1.bfsspadserver.8le8le.com,REJECT
DOMAIN-SUFFIX,uc2.atobo.com.cn,REJECT
DOMAIN-SUFFIX,uc610.com,REJECT
DOMAIN-SUFFIX,ucaliyun.cn,REJECT
DOMAIN-SUFFIX,ucrzgcs.cn,REJECT
DOMAIN-SUFFIX,ucxxii.com,REJECT
DOMAIN-SUFFIX,udc.msn.com,REJECT
DOMAIN-SUFFIX,udrwyjpwjfeg.com,REJECT
DOMAIN-SUFFIX,ueadlian.com,REJECT
DOMAIN-SUFFIX,uebawtz7.me,REJECT
DOMAIN-SUFFIX,ugg66.com,REJECT
DOMAIN-SUFFIX,ugvip.com,REJECT
DOMAIN-SUFFIX,ui37.net,REJECT
DOMAIN-SUFFIX,uid.mdbchina.com,REJECT
DOMAIN-SUFFIX,uimserv.net,REJECT
DOMAIN-SUFFIX,ujian.cc,REJECT
DOMAIN-SUFFIX,ujikdd041o.cn,REJECT
DOMAIN-SUFFIX,ukeiae.com,REJECT
DOMAIN-SUFFIX,ulink.cc,REJECT
DOMAIN-SUFFIX,um.simpli.fi,REJECT
DOMAIN-SUFFIX,um2.eqads.com,REJECT
DOMAIN-SUFFIX,umiwi.com,REJECT
DOMAIN-SUFFIX,umyai.com,REJECT
DOMAIN-SUFFIX,un1.takefoto.cn,REJECT
DOMAIN-SUFFIX,unconf.mobad.ijinshan.com,REJECT
DOMAIN-SUFFIX,undm.qibulo.com,REJECT
DOMAIN-SUFFIX,unicast.ign.com,REJECT
DOMAIN-SUFFIX,unicast.msn.com,REJECT
DOMAIN-SUFFIX,unimhk.com,REJECT
DOMAIN-SUFFIX,union.china.com.cn,REJECT
DOMAIN-SUFFIX,union.dbba.cn,REJECT
DOMAIN-SUFFIX,union.mop.com,REJECT
DOMAIN-SUFFIX,union2.50bang.org,REJECT
DOMAIN-SUFFIX,uniondm.cz88.net,REJECT
DOMAIN-SUFFIX,unionsy.com,REJECT
DOMAIN-SUFFIX,union-wifi.com,REJECT
DOMAIN-SUFFIX,unlitui.com,REJECT
DOMAIN-SUFFIX,untitled.dwstatic.com,REJECT
DOMAIN-SUFFIX,uoyrsd.com,REJECT
DOMAIN-SUFFIX,up.cm.ksmobile.com,REJECT
DOMAIN-SUFFIX,up.hiao.com,REJECT
DOMAIN-SUFFIX,up.qingdaonews.com,REJECT
DOMAIN-SUFFIX,update.123juzi.net,REJECT
DOMAIN-SUFFIX,urhu.cn,REJECT
DOMAIN-SUFFIX,uri6.com,REJECT
DOMAIN-SUFFIX,us.bannyat.com,REJECT
DOMAIN-SUFFIX,ushaqi.com,REJECT
DOMAIN-SUFFIX,usingde.com,REJECT
DOMAIN-SUFFIX,uss-pid.lenovomm.com,REJECT
DOMAIN-SUFFIX,usync.aws.rubiconproject.com,REJECT
DOMAIN-SUFFIX,utility.rogersmedia.com,REJECT
DOMAIN-SUFFIX,uuidapi.yunos.com,REJECT
DOMAIN-SUFFIX,uulucky.com,REJECT
DOMAIN-SUFFIX,uvclick.com,REJECT
DOMAIN-SUFFIX,uw9377.com,REJECT
DOMAIN-SUFFIX,uyunad.com,REJECT
DOMAIN-SUFFIX,uzpmrbek.com,REJECT
DOMAIN-SUFFIX,v1.log.moji.com,REJECT
DOMAIN-SUFFIX,v2.fm.n.duokanbox.com,REJECT
DOMAIN-SUFFIX,v2.reachmax.cn,REJECT
DOMAIN-SUFFIX,v707070.com,REJECT
DOMAIN-SUFFIX,vad1.jianshen8.com,REJECT
DOMAIN-SUFFIX,vamaker.com,REJECT
DOMAIN-SUFFIX,vas.funshion.com,REJECT
DOMAIN-SUFFIX,vatrack.hinet.net,REJECT
DOMAIN-SUFFIX,vcfs6ip5h6.bid,REJECT
DOMAIN-SUFFIX,vdapprecv.app.cntvwb.cn,REJECT
DOMAIN-SUFFIX,vdazz.net,REJECT
DOMAIN-SUFFIX,vedeh.com,REJECT
DOMAIN-SUFFIX,vegent.cn,REJECT
DOMAIN-SUFFIX,vendor1.fitschigogerl.com,REJECT
DOMAIN-SUFFIX,verdict.abc.go.com,REJECT
DOMAIN-SUFFIX,vers80.com,REJECT
DOMAIN-SUFFIX,vg02h8z1ul.me,REJECT
DOMAIN-SUFFIX,vi1.ku6img.net,REJECT
DOMAIN-SUFFIX,vi1.souid.com,REJECT
DOMAIN-SUFFIX,vichc.com,REJECT
DOMAIN-SUFFIX,victorjx.com,REJECT
DOMAIN-SUFFIX,videondun.com,REJECT
DOMAIN-SUFFIX,viglink.com,REJECT
DOMAIN-SUFFIX,vip.51.la,REJECT
DOMAIN-SUFFIX,vipads.cn,REJECT
DOMAIN-SUFFIX,vjcyehtqm9.me,REJECT
DOMAIN-SUFFIX,vl8c4g7tmo.me,REJECT
DOMAIN-SUFFIX,vmzqwz.cn,REJECT
DOMAIN-SUFFIX,voiceads.cn,REJECT
DOMAIN-SUFFIX,voiceads.com,REJECT
DOMAIN-SUFFIX,vpon.com,REJECT
DOMAIN-SUFFIX,vsnoon.com,REJECT
DOMAIN-SUFFIX,vt.ipinyou.com,REJECT
DOMAIN-SUFFIX,vtale.org,REJECT
DOMAIN-SUFFIX,vungle.cn,REJECT
DOMAIN-SUFFIX,vupload.duowan.com,REJECT
DOMAIN-SUFFIX,vv84.bj.bcebos.com,REJECT
DOMAIN-SUFFIX,vvv.ieduw.com,REJECT
DOMAIN-SUFFIX,vvvulqn7.com,REJECT
DOMAIN-SUFFIX,vwws6.net,REJECT
DOMAIN-SUFFIX,w.homes.yahoo.net,REJECT
DOMAIN-SUFFIX,w.xiaopiaoyou.com,REJECT
DOMAIN-SUFFIX,w1.diaoyou.com,REJECT
DOMAIN-SUFFIX,w3989.com,REJECT
DOMAIN-SUFFIX,w5sac788c1.360doc.cn,REJECT
DOMAIN-SUFFIX,w65p.com,REJECT
DOMAIN-SUFFIX,w8.com.cn,REJECT
DOMAIN-SUFFIX,wanfeng1.com,REJECT
DOMAIN-SUFFIX,wangdaizao.com,REJECT
DOMAIN-SUFFIX,wangdq.com,REJECT
DOMAIN-SUFFIX,wangsufast.com,REJECT
DOMAIN-SUFFIX,wantaico.com,REJECT
DOMAIN-SUFFIX,wantfour.com,REJECT
DOMAIN-SUFFIX,wap.114so.cn,REJECT
DOMAIN-SUFFIX,wap001.bytravel.cn,REJECT
DOMAIN-SUFFIX,wapadv.com,REJECT
DOMAIN-SUFFIX,waps.cn,REJECT
DOMAIN-SUFFIX,wapx.cn,REJECT
DOMAIN-SUFFIX,wapx.com,REJECT
DOMAIN-SUFFIX,watson.microsoft.com,REJECT
DOMAIN-SUFFIX,wazero.online,REJECT
DOMAIN-SUFFIX,wda.ydt.com.cn,REJECT
DOMAIN-SUFFIX,wdgsl.com,REJECT
DOMAIN-SUFFIX,wdzsb.com.cn,REJECT
DOMAIN-SUFFIX,weareqy.com,REJECT
DOMAIN-SUFFIX,web.51.la,REJECT
DOMAIN-SUFFIX,web.900.la,REJECT
DOMAIN-SUFFIX,web1.51.la,REJECT
DOMAIN-SUFFIX,web2.51.la,REJECT
DOMAIN-SUFFIX,webmaster.extabit.com,REJECT
DOMAIN-SUFFIX,webmine.cz,REJECT
DOMAIN-SUFFIX,webterren.com,REJECT
DOMAIN-SUFFIX,web-track.go2yd.com,REJECT
DOMAIN-SUFFIX,weibomingzi.com,REJECT
DOMAIN-SUFFIX,weiqiqu.cn,REJECT
DOMAIN-SUFFIX,weixiangzu.cn,REJECT
DOMAIN-SUFFIX,weixinvip.ren,REJECT
DOMAIN-SUFFIX,wenku-cms.bj.bcebos.com,REJECT
DOMAIN-SUFFIX,werpig.com,REJECT
DOMAIN-SUFFIX,weyyae.com,REJECT
DOMAIN-SUFFIX,wgnlz.com,REJECT
DOMAIN-SUFFIX,wgnmp.com,REJECT
DOMAIN-SUFFIX,wgo.mmstat.com,REJECT
DOMAIN-SUFFIX,whafwl.com,REJECT
DOMAIN-SUFFIX,whalecloud.com,REJECT
DOMAIN-SUFFIX,whistleout.s3.amazonaws.com,REJECT
DOMAIN-SUFFIX,whpxy.com,REJECT
DOMAIN-SUFFIX,whytoss.com,REJECT
DOMAIN-SUFFIX,widget.crowdignite.com,REJECT
DOMAIN-SUFFIX,widget.directory.dailycommercial.com,REJECT
DOMAIN-SUFFIX,widget.kelkoo.com,REJECT
DOMAIN-SUFFIX,widget.raaze.com,REJECT
DOMAIN-SUFFIX,widget.searchschoolsnetwork.com,REJECT
DOMAIN-SUFFIX,widget.shopstyle.com.au,REJECT
DOMAIN-SUFFIX,widget.solarquotes.com.au,REJECT
DOMAIN-SUFFIX,widgets.comcontent.net,REJECT
DOMAIN-SUFFIX,widgets.realestate.com.au,REJECT
DOMAIN-SUFFIX,wifijia.net,REJECT
DOMAIN-SUFFIX,wikigifth.com,REJECT
DOMAIN-SUFFIX,winads.cn,REJECT
DOMAIN-SUFFIX,winasdaq.com,REJECT
DOMAIN-SUFFIX,winvestern.com.cn,REJECT
DOMAIN-SUFFIX,wiyun.com,REJECT
DOMAIN-SUFFIX,wjguc.com,REJECT
DOMAIN-SUFFIX,wka8.com,REJECT
DOMAIN-SUFFIX,wl.51taifu.com,REJECT
DOMAIN-SUFFIX,wlkpa.cn,REJECT
DOMAIN-SUFFIX,wlpinnaclesports.eacdn.com,REJECT
DOMAIN-SUFFIX,wo.iuni.com.cn,REJECT
DOMAIN-SUFFIX,wo685.com,REJECT
DOMAIN-SUFFIX,wodhid.com,REJECT
DOMAIN-SUFFIX,wole.us,REJECT
DOMAIN-SUFFIX,womenwan.com,REJECT
DOMAIN-SUFFIX,wooboo.com.cn,REJECT
DOMAIN-SUFFIX,wowips.com,REJECT
DOMAIN-SUFFIX,wpwdf.com,REJECT
DOMAIN-SUFFIX,wqmobile.com,REJECT
DOMAIN-SUFFIX,wqsph.net,REJECT
DOMAIN-SUFFIX,ws341.com,REJECT
DOMAIN-SUFFIX,ws7j.com,REJECT
DOMAIN-SUFFIX,wstztt.com,REJECT
DOMAIN-SUFFIX,wth.lenovomm.com,REJECT
DOMAIN-SUFFIX,wtpn.twenga.co.uk,REJECT
DOMAIN-SUFFIX,wtpn.twenga.de,REJECT
DOMAIN-SUFFIX,wu65.com,REJECT
DOMAIN-SUFFIX,wudang05.com,REJECT
DOMAIN-SUFFIX,wuliao.juqingba.cn,REJECT
DOMAIN-SUFFIX,wumii.cn,REJECT
DOMAIN-SUFFIX,wumii.com,REJECT
DOMAIN-SUFFIX,wuqdebjfhjas.bid,REJECT
DOMAIN-SUFFIX,wuwho.cn,REJECT
DOMAIN-SUFFIX,wx.xwjqr.com,REJECT
DOMAIN-SUFFIX,wyhzzy.com,REJECT
DOMAIN-SUFFIX,wyttech.cn,REJECT
DOMAIN-SUFFIX,wzjijia.com,REJECT
DOMAIN-SUFFIX,x.adpro.cn,REJECT
DOMAIN-SUFFIX,x.castanet.net,REJECT
DOMAIN-SUFFIX,x.cnxad.com,REJECT
DOMAIN-SUFFIX,x.eroticity.net,REJECT
DOMAIN-SUFFIX,x.jd.com,REJECT
DOMAIN-SUFFIX,x.ligatus.com,REJECT
DOMAIN-SUFFIX,x.vipergirls.to,REJECT
DOMAIN-SUFFIX,x9377a.com,REJECT
DOMAIN-SUFFIX,xa9t.com,REJECT
DOMAIN-SUFFIX,xabaitai.com,REJECT
DOMAIN-SUFFIX,xabmjr.com,REJECT
DOMAIN-SUFFIX,xacqp.com,REJECT
DOMAIN-SUFFIX,xbtw.com,REJECT
DOMAIN-SUFFIX,xc.macd.cn,REJECT
DOMAIN-SUFFIX,xcclzs.com,REJECT
DOMAIN-SUFFIX,xcdf.cn,REJECT
DOMAIN-SUFFIX,xchgx.com,REJECT
DOMAIN-SUFFIX,xcjy876.com,REJECT
DOMAIN-SUFFIX,xcy8.com,REJECT
DOMAIN-SUFFIX,xcyjzs.net,REJECT
DOMAIN-SUFFIX,xcyrc.com,REJECT
DOMAIN-SUFFIX,xdadevelopers.browsi.mobi,REJECT
DOMAIN-SUFFIX,xdbwc.com,REJECT
DOMAIN-SUFFIX,xdcqcyp.com,REJECT
DOMAIN-SUFFIX,xdrig.com,REJECT
DOMAIN-SUFFIX,xdyjt.com,REJECT
DOMAIN-SUFFIX,xe2c.com,REJECT
DOMAIN-SUFFIX,xf.yellowto.com,REJECT
DOMAIN-SUFFIX,xfywn.com,REJECT
DOMAIN-SUFFIX,xgmc6lu8fs.me,REJECT
DOMAIN-SUFFIX,xhbqczl.com,REJECT
DOMAIN-SUFFIX,xhmrv.com,REJECT
DOMAIN-SUFFIX,xhsxgmt.cn,REJECT
DOMAIN-SUFFIX,xhsxgnt.cn,REJECT
DOMAIN-SUFFIX,xhxnkyy.com,REJECT
DOMAIN-SUFFIX,xhydrs.cn,REJECT
DOMAIN-SUFFIX,xiacaidd.com,REJECT
DOMAIN-SUFFIX,xiaobiaoucai.cn,REJECT
DOMAIN-SUFFIX,xiaohei.com,REJECT
DOMAIN-SUFFIX,xiaomiir.yaokantv.com,REJECT
DOMAIN-SUFFIX,xiaoyang.mobi,REJECT
DOMAIN-SUFFIX,xiaoyuanzuqiu.cn,REJECT
DOMAIN-SUFFIX,xiaoyutiao.com,REJECT
DOMAIN-SUFFIX,xiaozhen.com,REJECT
DOMAIN-SUFFIX,xiaozhishi852.com,REJECT
DOMAIN-SUFFIX,xiaxuanfu.com,REJECT
DOMAIN-SUFFIX,xibao100.com,REJECT
DOMAIN-SUFFIX,xibei70.com,REJECT
DOMAIN-SUFFIX,xifatime.com,REJECT
DOMAIN-SUFFIX,xihashuale.com,REJECT
DOMAIN-SUFFIX,xihuashuale.com,REJECT
DOMAIN-SUFFIX,xilele.com,REJECT
DOMAIN-SUFFIX,xiliweisha.cn,REJECT
DOMAIN-SUFFIX,xinasiaj.com,REJECT
DOMAIN-SUFFIX,xingjuhe.com,REJECT
DOMAIN-SUFFIX,xiniuz.com,REJECT
DOMAIN-SUFFIX,xinju.cc,REJECT
DOMAIN-SUFFIX,xinray.com,REJECT
DOMAIN-SUFFIX,xinsheng.net,REJECT
DOMAIN-SUFFIX,xjidian.com,REJECT
DOMAIN-SUFFIX,xk2012.com,REJECT
DOMAIN-SUFFIX,xkwfao.com,REJECT
DOMAIN-SUFFIX,xlmc.sandai.net,REJECT
DOMAIN-SUFFIX,xlwnx.com,REJECT
DOMAIN-SUFFIX,xm9178.com,REJECT
DOMAIN-SUFFIX,xmcmn.com,REJECT
DOMAIN-SUFFIX,xmcxz.com,REJECT
DOMAIN-SUFFIX,xmrts.com,REJECT
DOMAIN-SUFFIX,xmshqh.com,REJECT
DOMAIN-SUFFIX,xmsqz.com,REJECT
DOMAIN-SUFFIX,xnjpg.com,REJECT
DOMAIN-SUFFIX,xoredi.com,REJECT
DOMAIN-SUFFIX,xp3366.com,REJECT
DOMAIN-SUFFIX,xpcy.m.gxwztv.com,REJECT
DOMAIN-SUFFIX,xpqfc.com,REJECT
DOMAIN-SUFFIX,xq12.com,REJECT
DOMAIN-SUFFIX,xq199.com,REJECT
DOMAIN-SUFFIX,xs.he9630.com,REJECT
DOMAIN-SUFFIX,xstar.cc,REJECT
DOMAIN-SUFFIX,xtgreat.com,REJECT
DOMAIN-SUFFIX,xtxa.net,REJECT
DOMAIN-SUFFIX,xuanmeiguoji.com,REJECT
DOMAIN-SUFFIX,xue.zbyw.cn,REJECT
DOMAIN-SUFFIX,xul478.com,REJECT
DOMAIN-SUFFIX,xulizui6.com,REJECT
DOMAIN-SUFFIX,xx.m.gxwztv.com,REJECT
DOMAIN-SUFFIX,xxad.cc,REJECT
DOMAIN-SUFFIX,xxhrd.com,REJECT
DOMAIN-SUFFIX,xxwkjl.com,REJECT
DOMAIN-SUFFIX,xxyzwtsylw.com,REJECT
DOMAIN-SUFFIX,xy.com,REJECT
DOMAIN-SUFFIX,xycnz.com,REJECT
DOMAIN-SUFFIX,xyimg.net,REJECT
DOMAIN-SUFFIX,xyly2016.com,REJECT
DOMAIN-SUFFIX,xyqptm.com,REJECT
DOMAIN-SUFFIX,xyqxr.com,REJECT
DOMAIN-SUFFIX,xyrhd.com,REJECT
DOMAIN-SUFFIX,xyssp.com,REJECT
DOMAIN-SUFFIX,xytom.com,REJECT
DOMAIN-SUFFIX,xyxy01.com,REJECT
DOMAIN-SUFFIX,xztms.com,REJECT
DOMAIN-SUFFIX,xzyituo.com,REJECT
DOMAIN-SUFFIX,xzzyi.com,REJECT
DOMAIN-SUFFIX,y.damifan.cn,REJECT
DOMAIN-SUFFIX,yadro.ru,REJECT
DOMAIN-SUFFIX,yageben.com,REJECT
DOMAIN-SUFFIX,yam.adsbro.com,REJECT
DOMAIN-SUFFIX,yandui.com,REJECT
DOMAIN-SUFFIX,yangdasen.cn,REJECT
DOMAIN-SUFFIX,yanglaopt.net,REJECT
DOMAIN-SUFFIX,yaohq.com,REJECT
DOMAIN-SUFFIX,yatemy.cn,REJECT
DOMAIN-SUFFIX,yb.torchbrowser.com,REJECT
DOMAIN-SUFFIX,yccdn.com,REJECT
DOMAIN-SUFFIX,ychml.com,REJECT
DOMAIN-SUFFIX,ychun03.com,REJECT
DOMAIN-SUFFIX,ydlnt.com,REJECT
DOMAIN-SUFFIX,yea.uploadimagex.com,REJECT
DOMAIN-SUFFIX,yeabble.com,REJECT
DOMAIN-SUFFIX,yeas.yahoo.co.jp,REJECT
DOMAIN-SUFFIX,yee.js.cn,REJECT
DOMAIN-SUFFIX,yellowto.com,REJECT
DOMAIN-SUFFIX,yengo.com,REJECT
DOMAIN-SUFFIX,yesbeby.whies.info,REJECT
DOMAIN-SUFFIX,yezilm.com,REJECT
DOMAIN-SUFFIX,yf898.com,REJECT
DOMAIN-SUFFIX,yfcode.m.gxwztv.com,REJECT
DOMAIN-SUFFIX,yfxpcode.m.gxwztv.com,REJECT
DOMAIN-SUFFIX,yfycy.com,REJECT
DOMAIN-SUFFIX,yhtcd.com,REJECT
DOMAIN-SUFFIX,yhzm.cc,REJECT
DOMAIN-SUFFIX,yicha.cn,REJECT
DOMAIN-SUFFIX,yidulive.net,REJECT
DOMAIN-SUFFIX,yieldmanager.com,REJECT
DOMAIN-SUFFIX,yigao.com,REJECT
DOMAIN-SUFFIX,yigyx.com,REJECT
DOMAIN-SUFFIX,yiiwoo.com,REJECT
DOMAIN-SUFFIX,yijia2009.com,REJECT
DOMAIN-SUFFIX,yijifen.com,REJECT
DOMAIN-SUFFIX,yin1.zgpingshu.com,REJECT
DOMAIN-SUFFIX,yinhaijuan.com,REJECT
DOMAIN-SUFFIX,yinooo.com,REJECT
DOMAIN-SUFFIX,yinyuehu.cn,REJECT
DOMAIN-SUFFIX,yiqifa.com,REJECT
DOMAIN-SUFFIX,yiranxian.cn,REJECT
DOMAIN-SUFFIX,yiwk.com,REJECT
DOMAIN-SUFFIX,yiwuds.com,REJECT
DOMAIN-SUFFIX,yixui.com,REJECT
DOMAIN-SUFFIX,yizhenya.com,REJECT
DOMAIN-SUFFIX,yk0712.com,REJECT
DOMAIN-SUFFIX,ykbei.com,REJECT
DOMAIN-SUFFIX,ykjmy.com,REJECT
DOMAIN-SUFFIX,yktj.yzz.cn,REJECT
DOMAIN-SUFFIX,ykxwn.com,REJECT
DOMAIN-SUFFIX,ylunion.com,REJECT
DOMAIN-SUFFIX,ymapp.com,REJECT
DOMAIN-SUFFIX,ymcdn.cn,REJECT
DOMAIN-SUFFIX,ymcqb.com,REJECT
DOMAIN-SUFFIX,yndianju.com,REJECT
DOMAIN-SUFFIX,ynmbz.com,REJECT
DOMAIN-SUFFIX,yongkang6.com,REJECT
DOMAIN-SUFFIX,yongv.com,REJECT
DOMAIN-SUFFIX,yooli.com,REJECT
DOMAIN-SUFFIX,you1ad.com,REJECT
DOMAIN-SUFFIX,youfumei.com,REJECT
DOMAIN-SUFFIX,youjia2016.com,REJECT
DOMAIN-SUFFIX,youle55.com,REJECT
DOMAIN-SUFFIX,youmi.net,REJECT
DOMAIN-SUFFIX,yousee.com,REJECT
DOMAIN-SUFFIX,youxiaoad.com,REJECT
DOMAIN-SUFFIX,youxicool.net,REJECT
DOMAIN-SUFFIX,youzehui.com,REJECT
DOMAIN-SUFFIX,yoyi.com.cn,REJECT
DOMAIN-SUFFIX,yoyi.tv,REJECT
DOMAIN-SUFFIX,ypmeiwen.com,REJECT
DOMAIN-SUFFIX,ypmob.com,REJECT
DOMAIN-SUFFIX,ypv.chengadx.com,REJECT
DOMAIN-SUFFIX,yqw88.com,REJECT
DOMAIN-SUFFIX,yrt7dgkf.exashare.com,REJECT
DOMAIN-SUFFIX,yrxmr.com,REJECT
DOMAIN-SUFFIX,ysjwj.com,REJECT
DOMAIN-SUFFIX,ysm.yahoo.com,REJECT
DOMAIN-SUFFIX,yt.mmstat.com,REJECT
DOMAIN-SUFFIX,ytguowang.com,REJECT
DOMAIN-SUFFIX,yuanming.net,REJECT
DOMAIN-SUFFIX,yueyelive.com,REJECT
DOMAIN-SUFFIX,yug8.com,REJECT
DOMAIN-SUFFIX,yule8.net,REJECT
DOMAIN-SUFFIX,yulzs.com,REJECT
DOMAIN-SUFFIX,yun.lvehaisen.com,REJECT
DOMAIN-SUFFIX,yun.rili.cn,REJECT
DOMAIN-SUFFIX,yun.tuia.cn,REJECT
DOMAIN-SUFFIX,yun.yuyiya.com,REJECT
DOMAIN-SUFFIX,yun1.yahoo001.com,REJECT
DOMAIN-SUFFIX,yunbofangbt.com,REJECT
DOMAIN-SUFFIX,yunjiasu.com,REJECT
DOMAIN-SUFFIX,yunos.com,REJECT
DOMAIN-SUFFIX,yunshipei.com,REJECT
DOMAIN-SUFFIX,ywjxsp168.cn,REJECT
DOMAIN-SUFFIX,yx.lenovomm.com,REJECT
DOMAIN-SUFFIX,yxhxs.com,REJECT
DOMAIN-SUFFIX,yxjad.com,REJECT
DOMAIN-SUFFIX,yxszy.com,REJECT
DOMAIN-SUFFIX,yxxwyz.com,REJECT
DOMAIN-SUFFIX,yy58ju.com,REJECT
DOMAIN-SUFFIX,yyffeicd.m.qxs.la,REJECT
DOMAIN-SUFFIX,yyjxgm.net,REJECT
DOMAIN-SUFFIX,yyp17.com,REJECT
DOMAIN-SUFFIX,yzh360.com,REJECT
DOMAIN-SUFFIX,yzygo.com,REJECT
DOMAIN-SUFFIX,yzytb.com,REJECT
DOMAIN-SUFFIX,z.nowscore.com,REJECT
DOMAIN-SUFFIX,zads.care2.com,REJECT
DOMAIN-SUFFIX,zamar.cn,REJECT
DOMAIN-SUFFIX,zampdsp.com,REJECT
DOMAIN-SUFFIX,zantainet.com,REJECT
DOMAIN-SUFFIX,zapads.zapak.com,REJECT
DOMAIN-SUFFIX,zb.nxing.cn,REJECT
DOMAIN-SUFFIX,zbz.m.qxs.la,REJECT
DOMAIN-SUFFIX,zc.adpush.cn,REJECT
DOMAIN-SUFFIX,zcdsp.com,REJECT
DOMAIN-SUFFIX,zcrtd.com,REJECT
DOMAIN-SUFFIX,zdjby.cn,REJECT
DOMAIN-SUFFIX,ze5.com,REJECT
DOMAIN-SUFFIX,zedo.com,REJECT
DOMAIN-SUFFIX,zeus.qj.net,REJECT
DOMAIN-SUFFIX,zgc66.com,REJECT
DOMAIN-SUFFIX,zgdfz6h7po.me,REJECT
DOMAIN-SUFFIX,zgfszs.com,REJECT
DOMAIN-SUFFIX,zgksb.com,REJECT
DOMAIN-SUFFIX,zgty365.com,REJECT
DOMAIN-SUFFIX,zgunion.cn,REJECT
DOMAIN-SUFFIX,zgyemy.com,REJECT
DOMAIN-SUFFIX,zhanzhang.net,REJECT
DOMAIN-SUFFIX,zhao258.com,REJECT
DOMAIN-SUFFIX,zhaoshang8.com,REJECT
DOMAIN-SUFFIX,zh-cn.shenyun.com,REJECT
DOMAIN-SUFFIX,zh-cn.shenyun.org,REJECT
DOMAIN-SUFFIX,zhengjian.org,REJECT
DOMAIN-SUFFIX,zhichi08.com,REJECT
DOMAIN-SUFFIX,zhidian3g.cn,REJECT
DOMAIN-SUFFIX,zhifenjie.com,REJECT
DOMAIN-SUFFIX,zhihei.com,REJECT
DOMAIN-SUFFIX,zhihu.xmcimg.com,REJECT
DOMAIN-SUFFIX,zhiyuanteam.com,REJECT
DOMAIN-SUFFIX,zhiziyun.com,REJECT
DOMAIN-SUFFIX,zhongchouyan.com,REJECT
DOMAIN-SUFFIX,zhuba8.com,REJECT
DOMAIN-SUFFIX,zhudiaosz.com,REJECT
DOMAIN-SUFFIX,zhuichaguoji.org,REJECT
DOMAIN-SUFFIX,zhwnlapi.etouch.cn,REJECT
DOMAIN-SUFFIX,zhybzp.cn,REJECT
DOMAIN-SUFFIX,zisunion.com,REJECT
DOMAIN-SUFFIX,zizcy.com,REJECT
DOMAIN-SUFFIX,zjbdt.com,REJECT
DOMAIN-SUFFIX,zjhim.com,REJECT
DOMAIN-SUFFIX,zkrdy.com,REJECT
DOMAIN-SUFFIX,zo66.com,REJECT
DOMAIN-SUFFIX,zp22938576.com,REJECT
DOMAIN-SUFFIX,zq84.com,REJECT
DOMAIN-SUFFIX,zqworks.com,REJECT
DOMAIN-SUFFIX,zqzxz.com,REJECT
DOMAIN-SUFFIX,zrpfk.com,REJECT
DOMAIN-SUFFIX,zsdexun.com.cn,REJECT
DOMAIN-SUFFIX,zsxpx.com,REJECT
DOMAIN-SUFFIX,zt2088.com,REJECT
DOMAIN-SUFFIX,ztidu.com,REJECT
DOMAIN-SUFFIX,ztxbd.com,REJECT
DOMAIN-SUFFIX,zuche321.com,REJECT
DOMAIN-SUFFIX,zuiceshi.net,REJECT
DOMAIN-SUFFIX,zws.avvo.com,REJECT
DOMAIN-SUFFIX,zxjjzx.com,REJECT
DOMAIN-SUFFIX,zybpj.com,REJECT
DOMAIN-SUFFIX,zymro.com,REJECT
DOMAIN-SUFFIX,zytwq.net,REJECT
DOMAIN-SUFFIX,zz.bdstatic.com,REJECT
DOMAIN-SUFFIX,zzbaowen.com,REJECT
DOMAIN-SUFFIX,zzimg.51.la,REJECT
DOMAIN-SUFFIX,zzrcz.com,REJECT
DOMAIN-SUFFIX,zzsx8.com,REJECT

IP-CIDR,1.3.0.10/32,REJECT,no-resolve
IP-CIDR,101.201.29.182/32,REJECT,no-resolve
IP-CIDR,101.227.119.0/24,REJECT,no-resolve
IP-CIDR,101.227.12.0/23,REJECT,no-resolve
IP-CIDR,101.227.14.0/24,REJECT,no-resolve
IP-CIDR,101.227.200.0/24,REJECT,no-resolve
IP-CIDR,103.249.254.113/32,REJECT,no-resolve
IP-CIDR,104.195.62.12/32,REJECT,no-resolve
IP-CIDR,104.197.140.120/32,REJECT,no-resolve
IP-CIDR,104.198.198.188/32,REJECT,no-resolve
IP-CIDR,106.187.95.251/32,REJECT,no-resolve
IP-CIDR,106.75.65.90/32,REJECT,no-resolve
IP-CIDR,107.21.113.76/32,REJECT,no-resolve
IP-CIDR,108.171.248.234/32,REJECT,no-resolve
IP-CIDR,111.175.220.160/29,REJECT,no-resolve
IP-CIDR,111.206.13.60/24,REJECT,no-resolve
IP-CIDR,111.206.22.0/24,REJECT,no-resolve
IP-CIDR,111.30.135.167/32,REJECT,no-resolve
IP-CIDR,111.63.135.0/24,REJECT,no-resolve
IP-CIDR,111.73.45.147/32,REJECT,no-resolve
IP-CIDR,112.124.115.215/32,REJECT,no-resolve
IP-CIDR,112.74.95.46/32,REJECT,no-resolve
IP-CIDR,113.207.57.24/32,REJECT,no-resolve
IP-CIDR,113.57.230.88/32,REJECT,no-resolve
IP-CIDR,114.247.28.96/32,REJECT,no-resolve
IP-CIDR,114.55.123.44/32,REJECT,no-resolve
IP-CIDR,114.95.102.77/32,REJECT,no-resolve
IP-CIDR,115.29.141.121/32,REJECT,no-resolve
IP-CIDR,115.29.247.48/32,REJECT,no-resolve
IP-CIDR,116.206.22.7/32,REJECT,no-resolve
IP-CIDR,116.55.227.242/32,REJECT,no-resolve
IP-CIDR,117.25.133.209/32,REJECT,no-resolve
IP-CIDR,118.144.88.215/28,REJECT,no-resolve
IP-CIDR,119.188.13.0/24,REJECT,no-resolve
IP-CIDR,119.4.249.166/32,REJECT,no-resolve
IP-CIDR,120.132.63.203/32,REJECT,no-resolve
IP-CIDR,120.197.89.239/32,REJECT,no-resolve
IP-CIDR,120.198.116.0/24,REJECT,no-resolve
IP-CIDR,120.26.151.246/32,REJECT,no-resolve
IP-CIDR,120.27.34.156/32,REJECT,no-resolve
IP-CIDR,120.55.199.139/32,REJECT,no-resolve
IP-CIDR,120.80.57.123/32,REJECT,no-resolve
IP-CIDR,121.15.207.243/32,REJECT,no-resolve
IP-CIDR,121.199.73.185/32,REJECT,no-resolve
IP-CIDR,121.201.108.2/32,REJECT,no-resolve
IP-CIDR,121.201.11.95/32,REJECT,no-resolve
IP-CIDR,121.251.255.0/24,REJECT,no-resolve
IP-CIDR,121.43.75.169/32,REJECT,no-resolve
IP-CIDR,122.225.103.120/32,REJECT,no-resolve
IP-CIDR,122.226.223.163/32,REJECT,no-resolve
IP-CIDR,122.227.254.195/32,REJECT,no-resolve
IP-CIDR,122.228.236.165/32,REJECT,no-resolve
IP-CIDR,123.125.111.0/24,REJECT,no-resolve
IP-CIDR,123.139.154.201/24,REJECT,no-resolve
IP-CIDR,123.57.162.39/32,REJECT,no-resolve
IP-CIDR,123.57.94.184/32,REJECT,no-resolve
IP-CIDR,123.59.152.170/32,REJECT,no-resolve
IP-CIDR,123.59.78.229/32,REJECT,no-resolve
IP-CIDR,124.160.194.11/32,REJECT,no-resolve
IP-CIDR,124.232.160.178/32,REJECT,no-resolve
IP-CIDR,125.46.61.28/32,REJECT,no-resolve
IP-CIDR,125.89.69.5/32,REJECT,no-resolve
IP-CIDR,139.159.32.82/32,REJECT,no-resolve
IP-CIDR,139.224.26.92/32,REJECT,no-resolve
IP-CIDR,139.224.74.148/32,REJECT,no-resolve
IP-CIDR,146.148.85.61/32,REJECT,no-resolve
IP-CIDR,162.212.181.32/32,REJECT,no-resolve
IP-CIDR,173.208.177.227/32,REJECT,no-resolve
IP-CIDR,180.166.52.24/32,REJECT,no-resolve
IP-CIDR,180.76.162.60/32,REJECT,no-resolve
IP-CIDR,180.76.171.28/32,REJECT,no-resolve
IP-CIDR,180.76.172.149/32,REJECT,no-resolve
IP-CIDR,180.76.181.213/32,REJECT,no-resolve
IP-CIDR,182.92.81.104/32,REJECT,no-resolve
IP-CIDR,183.131.79.130/32,REJECT,no-resolve
IP-CIDR,183.59.53.187/29,REJECT,no-resolve
IP-CIDR,183.6.188.226/29,REJECT,no-resolve
IP-CIDR,198.40.52.11/32,REJECT,no-resolve
IP-CIDR,202.104.1.27/32,REJECT,no-resolve
IP-CIDR,202.105.165.202/32,REJECT,no-resolve
IP-CIDR,205.209.138.102/32,REJECT,no-resolve
IP-CIDR,211.103.159.32/32,REJECT,no-resolve
IP-CIDR,211.137.132.89/32,REJECT,no-resolve
IP-CIDR,211.139.178.49/32,REJECT,no-resolve
IP-CIDR,211.149.225.23/32,REJECT,no-resolve
IP-CIDR,211.167.105.131/32,REJECT,no-resolve
IP-CIDR,211.98.71.195/29,REJECT,no-resolve
IP-CIDR,218.25.246.118/32,REJECT,no-resolve
IP-CIDR,219.234.83.60/32,REJECT,no-resolve
IP-CIDR,220.115.251.25/32,REJECT,no-resolve
IP-CIDR,220.196.52.141/32,REJECT,no-resolve
IP-CIDR,221.179.140.0/24,REJECT,no-resolve
IP-CIDR,221.179.183.0/24,REJECT,no-resolve
IP-CIDR,221.179.191.0/24,REJECT,no-resolve
IP-CIDR,221.179.46.190/25,REJECT,no-resolve
IP-CIDR,221.204.213.222/32,REJECT,no-resolve
IP-CIDR,221.228.17.152/32,REJECT,no-resolve
IP-CIDR,221.228.214.101/32,REJECT,no-resolve
IP-CIDR,222.186.61.97/32,REJECT,no-resolve
IP-CIDR,222.187.226.96/32,REJECT,no-resolve
IP-CIDR,23.235.156.167/32,REJECT,no-resolve
IP-CIDR,23.42.186.24/32,REJECT,no-resolve
IP-CIDR,23.66.147.48/32,REJECT,no-resolve
IP-CIDR,27.255.67.120/32,REJECT,no-resolve
IP-CIDR,42.51.146.207/32,REJECT,no-resolve
IP-CIDR,45.34.240.72/32,REJECT,no-resolve
IP-CIDR,46.165.197.153/32,REJECT,no-resolve
IP-CIDR,46.165.197.231/32,REJECT,no-resolve
IP-CIDR,47.89.59.182/32,REJECT,no-resolve
IP-CIDR,47.90.50.177/32,REJECT,no-resolve
IP-CIDR,47.93.103.196/32,REJECT,no-resolve
IP-CIDR,47.94.89.32/32,REJECT,no-resolve
IP-CIDR,47.96.162.122/32,REJECT,no-resolve
IP-CIDR,58.215.179.159/32,REJECT,no-resolve
IP-CIDR,60.19.29.21/28,REJECT,no-resolve
IP-CIDR,60.190.139.164/32,REJECT,no-resolve
IP-CIDR,60.191.124.196/32,REJECT,no-resolve
IP-CIDR,60.210.17.12/24,REJECT,no-resolve
IP-CIDR,61.132.216.232/32,REJECT,no-resolve
IP-CIDR,61.132.221.146/32,REJECT,no-resolve
IP-CIDR,61.132.255.212/32,REJECT,no-resolve
IP-CIDR,61.132.255.222/25,REJECT,no-resolve
IP-CIDR,61.147.184.18/32,REJECT,no-resolve
IP-CIDR,61.152.223.15/32,REJECT,no-resolve
IP-CIDR,61.174.50.167/25,REJECT,no-resolve
IP-CIDR,61.191.12.74/32,REJECT,no-resolve
IP-CIDR,61.191.206.4/32,REJECT,no-resolve
IP-CIDR,67.229.224.28/32,REJECT,no-resolve
IP-CIDR,69.28.57.245/32,REJECT,no-resolve
IP-CIDR,74.117.182.77/32,REJECT,no-resolve
IP-CIDR,78.140.131.214/32,REJECT,no-resolve



# PROXY

// Client
PROCESS-NAME,Backup and Sync,PROXY
PROCESS-NAME,Day One,PROXY
PROCESS-NAME,Dropbox,PROXY
PROCESS-NAME,node-webkit,PROXY
PROCESS-NAME,Spotify,PROXY
PROCESS-NAME,Telegram,PROXY
PROCESS-NAME,Tweetbot,PROXY
PROCESS-NAME,Twitter,PROXY
PROCESS-NAME,Twitterrific,PROXY

// UA
USER-AGENT,%E7%BA%BD%E7%BA%A6%E6%97%B6%E6%8A%A5*,PROXY
USER-AGENT,*Telegram*,PROXY
USER-AGENT,Argo*,PROXY
USER-AGENT,Coinbase*,PROXY
USER-AGENT,Instagram*,PROXY
USER-AGENT,SoundCloud*,PROXY
USER-AGENT,Speedtest*,PROXY
USER-AGENT,WhatsApp*,PROXY
USER-AGENT,YouTube*,PROXY

// BBC
USER-AGENT,BBCiPlayer*,PROXY
DOMAIN-KEYWORD,uk-live.co,PROXY
DOMAIN-SUFFIX,bbc.co,PROXY
DOMAIN-SUFFIX,bbc.com,PROXY

// Japan
URL-REGEX,*\.jp,PROXY

// Line
DOMAIN-SUFFIX,lin.ee,PROXY
DOMAIN-SUFFIX,line.me,PROXY
DOMAIN-SUFFIX,line.naver.jp,PROXY,force-remote-dns
DOMAIN-SUFFIX,line-apps.com,PROXY
DOMAIN-SUFFIX,line-cdn.net,PROXY
DOMAIN-SUFFIX,line-scdn.net,PROXY
DOMAIN-SUFFIX,nhncorp.jp,PROXY

// MytvSUPER
DOMAIN-KEYWORD,nowtv100,PROXY
DOMAIN-KEYWORD,rthklive,PROXY
DOMAIN-SUFFIX,mytvsuper.com,PROXY
DOMAIN-SUFFIX,tvb.com,PROXY

// Netflix
DOMAIN-SUFFIX,netflix.com,PROXY
DOMAIN-SUFFIX,netflix.net,PROXY
DOMAIN-SUFFIX,nflxext.com,PROXY
DOMAIN-SUFFIX,nflximg.com,PROXY
DOMAIN-SUFFIX,nflximg.net,PROXY
DOMAIN-SUFFIX,nflxvideo.net,PROXY

// Steam
DOMAIN-SUFFIX,steamcommunity.com,PROXY
DOMAIN-SUFFIX,steamstatic.com,PROXY

// Top blocked sites
DOMAIN-SUFFIX,2o7.net,PROXY
DOMAIN-SUFFIX,4everProxy.com,PROXY
DOMAIN-SUFFIX,4shared.com,PROXY
DOMAIN-SUFFIX,4sqi.net,PROXY
DOMAIN-SUFFIX,9to5mac.com,PROXY
DOMAIN-SUFFIX,abpchina.org,PROXY
DOMAIN-SUFFIX,accountkit.com,PROXY
DOMAIN-SUFFIX,adblockplus.org,PROXY
DOMAIN-SUFFIX,adobe.com,PROXY
DOMAIN-SUFFIX,adobedtm.com,PROXY
DOMAIN-SUFFIX,aerisapi.com,PROXY
DOMAIN-SUFFIX,akamaihd.net,PROXY
DOMAIN-SUFFIX,alfredapp.com,PROXY
DOMAIN-SUFFIX,allconnected.co,PROXY
DOMAIN-SUFFIX,amazon.com,PROXY
DOMAIN-SUFFIX,amazonaws.com,PROXY
DOMAIN-SUFFIX,amplitude.com,PROXY
DOMAIN-SUFFIX,ampproject.com,PROXY
DOMAIN-SUFFIX,ampproject.net,PROXY
DOMAIN-SUFFIX,ampproject.org,PROXY
DOMAIN-SUFFIX,ancsconf.org,PROXY
DOMAIN-SUFFIX,android.com,PROXY
DOMAIN-SUFFIX,androidify.com,PROXY
DOMAIN-SUFFIX,android-x86.org,PROXY
DOMAIN-SUFFIX,angularjs.org,PROXY
DOMAIN-SUFFIX,anthonycalzadilla.com,PROXY
DOMAIN-SUFFIX,aol.com,PROXY
DOMAIN-SUFFIX,aolcdn.com,PROXY
DOMAIN-SUFFIX,api.urbandictionary.com,PROXY
DOMAIN-SUFFIX,apigee.com,PROXY
DOMAIN-SUFFIX,apk-dl.com,PROXY
DOMAIN-SUFFIX,apkpure.com,PROXY
DOMAIN-SUFFIX,app-measurement.com,PROXY
DOMAIN-SUFFIX,appdownloader.net,PROXY
DOMAIN-SUFFIX,apple-dns.net,PROXY
DOMAIN-SUFFIX,appshopper.com,PROXY
DOMAIN-SUFFIX,arcgis.com,PROXY
DOMAIN-SUFFIX,archive.is,PROXY
DOMAIN-SUFFIX,archive.org,PROXY
DOMAIN-SUFFIX,archives.gov,PROXY
DOMAIN-SUFFIX,armorgames.com,PROXY
DOMAIN-SUFFIX,aspnetcdn.com,PROXY
DOMAIN-SUFFIX,async.be,PROXY
DOMAIN-SUFFIX,att.com,PROXY
DOMAIN-SUFFIX,avgle.com,PROXY
DOMAIN-SUFFIX,awsstatic.com,PROXY
DOMAIN-SUFFIX,azureedge.net,PROXY
DOMAIN-SUFFIX,azurewebsites.net,PROXY
DOMAIN-SUFFIX,bandisoft.com,PROXY
DOMAIN-SUFFIX,bbtoystore.com,PROXY
DOMAIN-SUFFIX,betvictor.com,PROXY
DOMAIN-SUFFIX,bigsound.org,PROXY
DOMAIN-SUFFIX,bintray.com,PROXY
DOMAIN-SUFFIX,bit.com,PROXY
DOMAIN-SUFFIX,bit.do,PROXY
DOMAIN-SUFFIX,bit.ly,PROXY
DOMAIN-SUFFIX,bitbucket.org,PROXY
DOMAIN-SUFFIX,bitcointalk.org,PROXY
DOMAIN-SUFFIX,bitshare.com,PROXY
DOMAIN-SUFFIX,bjango.com,PROXY
DOMAIN-SUFFIX,bkrtx.com,PROXY
DOMAIN-SUFFIX,blizzard.com,PROXY
DOMAIN-SUFFIX,blog.com,PROXY
DOMAIN-SUFFIX,blogcdn.com,PROXY
DOMAIN-SUFFIX,blogger.com,PROXY
DOMAIN-SUFFIX,bloglovin.com,PROXY
DOMAIN-SUFFIX,blogsmithmedia.com,PROXY
DOMAIN-SUFFIX,blogspot.hk,PROXY
DOMAIN-SUFFIX,bloomberg.com,PROXY
DOMAIN-SUFFIX,books.com.tw,PROXY
DOMAIN-SUFFIX,boomtrain.com,PROXY
DOMAIN-SUFFIX,box.com,PROXY
DOMAIN-SUFFIX,box.net,PROXY
DOMAIN-SUFFIX,boxun.com,PROXY
DOMAIN-SUFFIX,cachefly.net,PROXY
DOMAIN-SUFFIX,cbc.ca,PROXY
DOMAIN-SUFFIX,cdn.segment.com,PROXY
DOMAIN-SUFFIX,cdnst.net,PROXY
DOMAIN-SUFFIX,celestrak.com,PROXY
DOMAIN-SUFFIX,census.gov,PROXY
DOMAIN-SUFFIX,certificate-transparency.org,PROXY
DOMAIN-SUFFIX,chinatimes.com,PROXY
DOMAIN-SUFFIX,chrome.com,PROXY
DOMAIN-SUFFIX,chromecast.com,PROXY
DOMAIN-SUFFIX,chromercise.com,PROXY
DOMAIN-SUFFIX,chromestatus.com,PROXY
DOMAIN-SUFFIX,chromium.org,PROXY
DOMAIN-SUFFIX,cl.ly,PROXY
DOMAIN-SUFFIX,cloudflare.com,PROXY
DOMAIN-SUFFIX,cloudfront.net,PROXY
DOMAIN-SUFFIX,cloudgarage.jp,PROXY
DOMAIN-SUFFIX,cloudmagic.com,PROXY
DOMAIN-SUFFIX,cmail19.com,PROXY
DOMAIN-SUFFIX,cnet.com,PROXY
DOMAIN-SUFFIX,cnn.com,PROXY
DOMAIN-SUFFIX,cocoapods.org,PROXY
DOMAIN-SUFFIX,comodoca.com,PROXY
DOMAIN-SUFFIX,content.office.net,PROXY
DOMAIN-SUFFIX,culturedcode.com ,PROXY
DOMAIN-SUFFIX,d.pr,PROXY
DOMAIN-SUFFIX,danilo.to,PROXY
DOMAIN-SUFFIX,daolan.net,PROXY
DOMAIN-SUFFIX,data-vocabulary.org,PROXY
DOMAIN-SUFFIX,dayone.me,PROXY
DOMAIN-SUFFIX,db.tt,PROXY
DOMAIN-SUFFIX,dcmilitary.com,PROXY
DOMAIN-SUFFIX,deja.com,PROXY
DOMAIN-SUFFIX,demdex.net,PROXY
DOMAIN-SUFFIX,deskconnect.com,PROXY
DOMAIN-SUFFIX,digicert.com,PROXY
DOMAIN-SUFFIX,digisfera.com,PROXY
DOMAIN-SUFFIX,digitaltrends.com,PROXY
DOMAIN-SUFFIX,disconnect.me,PROXY
DOMAIN-SUFFIX,disq.us,PROXY
DOMAIN-SUFFIX,disqus.com,PROXY
DOMAIN-SUFFIX,disquscdn.com,PROXY
DOMAIN-SUFFIX,dnsimple.com,PROXY
DOMAIN-SUFFIX,docker.com,PROXY
DOMAIN-SUFFIX,dribbble.com,PROXY
DOMAIN-SUFFIX,droplr.com,PROXY
DOMAIN-SUFFIX,duckduckgo.com,PROXY
DOMAIN-SUFFIX,dueapp.com,PROXY
DOMAIN-SUFFIX,dw.com,PROXY
DOMAIN-SUFFIX,easybib.com,PROXY
DOMAIN-SUFFIX,economist.com,PROXY
DOMAIN-SUFFIX,edgecastcdn.net,PROXY
DOMAIN-SUFFIX,edgekey.net,PROXY
DOMAIN-SUFFIX,edgesuite.net,PROXY
DOMAIN-SUFFIX,engadget.com,PROXY
DOMAIN-SUFFIX,entrust.net,PROXY
DOMAIN-SUFFIX,eurekavpt.com,PROXY
DOMAIN-SUFFIX,evernote.com,PROXY
DOMAIN-SUFFIX,extmatrix.com,PROXY
DOMAIN-SUFFIX,eyny.com,PROXY
DOMAIN-SUFFIX,fabric.io,PROXY
DOMAIN-SUFFIX,fast.com,PROXY
DOMAIN-SUFFIX,fastmail.com,PROXY
DOMAIN-SUFFIX,fastly.net,PROXY
DOMAIN-SUFFIX,fc2.com,PROXY
DOMAIN-SUFFIX,feedburner.com,PROXY
DOMAIN-SUFFIX,feedly.com,PROXY
DOMAIN-SUFFIX,feedsportal.com,PROXY
DOMAIN-SUFFIX,fiftythree.com,PROXY
DOMAIN-SUFFIX,firebaseio.com,PROXY
DOMAIN-SUFFIX,flexibits.com,PROXY
DOMAIN-SUFFIX,flickr.com,PROXY
DOMAIN-SUFFIX,flipboard.com,PROXY
DOMAIN-SUFFIX,flipkart.com,PROXY
DOMAIN-SUFFIX,flitto.com,PROXY
DOMAIN-SUFFIX,freeopenProxy.com,PROXY
DOMAIN-SUFFIX,fullstory.com,PROXY
DOMAIN-SUFFIX,fzlm.net,PROXY
DOMAIN-SUFFIX,g.co,PROXY
DOMAIN-SUFFIX,gabia.net,PROXY
DOMAIN-SUFFIX,garena.com,PROXY
DOMAIN-SUFFIX,geni.us,PROXY
DOMAIN-SUFFIX,get.how,PROXY
DOMAIN-SUFFIX,getcloudapp.com,PROXY
DOMAIN-SUFFIX,getfoxyProxy.org,PROXY
DOMAIN-SUFFIX,getlantern.org,PROXY
DOMAIN-SUFFIX,getmdl.io,PROXY
DOMAIN-SUFFIX,getpricetag.com,PROXY
DOMAIN-SUFFIX,gfw.press,PROXY
DOMAIN-SUFFIX,gfx.ms,PROXY
DOMAIN-SUFFIX,ggpht.com,PROXY
DOMAIN-SUFFIX,ghostnoteapp.com,PROXY
DOMAIN-SUFFIX,git.io,PROXY
DOMAIN-SUFFIX,github.com,PROXY
DOMAIN-SUFFIX,github.io,PROXY
DOMAIN-SUFFIX,githubapp.com,PROXY
DOMAIN-SUFFIX,githubusercontent.com,PROXY
DOMAIN-SUFFIX,globalsign.com,PROXY
DOMAIN-SUFFIX,gmocloud.com,PROXY
DOMAIN-SUFFIX,gmodules.com,PROXY
DOMAIN-SUFFIX,go.com,PROXY
DOMAIN-SUFFIX,go.jp,PROXY
DOMAIN-SUFFIX,godaddy.com,PROXY
DOMAIN-SUFFIX,golang.org,PROXY
DOMAIN-SUFFIX,gongm.in,PROXY
DOMAIN-SUFFIX,goo.gl,PROXY
DOMAIN-SUFFIX,goodreaders.com,PROXY
DOMAIN-SUFFIX,goodreads.com,PROXY
DOMAIN-SUFFIX,gravatar.com,PROXY
DOMAIN-SUFFIX,gstatic.cn,PROXY
DOMAIN-SUFFIX,gstatic.com,PROXY
DOMAIN-SUFFIX,gunsamerica.com,PROXY
DOMAIN-SUFFIX,gvt0.com,PROXY
DOMAIN-SUFFIX,helpshift.com,PROXY
DOMAIN-SUFFIX,hockeyapp.net,PROXY
DOMAIN-SUFFIX,homedepot.com,PROXY
DOMAIN-SUFFIX,hootsuite.com,PROXY
DOMAIN-SUFFIX,howtoforge.com,PROXY
DOMAIN-SUFFIX,iam.soy,PROXY
DOMAIN-SUFFIX,icoco.com,PROXY
DOMAIN-SUFFIX,icons8.com,PROXY
DOMAIN-SUFFIX,ift.tt,PROXY
DOMAIN-SUFFIX,ifttt.com,PROXY
DOMAIN-SUFFIX,imageshack.us,PROXY
DOMAIN-SUFFIX,img.ly,PROXY
DOMAIN-SUFFIX,imgur.com,PROXY
DOMAIN-SUFFIX,imore.com,PROXY
DOMAIN-SUFFIX,ingress.com ,PROXY
DOMAIN-SUFFIX,insder.co,PROXY
DOMAIN-SUFFIX,instapaper.com,PROXY
DOMAIN-SUFFIX,instructables.com,PROXY
DOMAIN-SUFFIX,io.io,PROXY
DOMAIN-SUFFIX,ipaddress.com,PROXY
DOMAIN-SUFFIX,ipn.li,PROXY
DOMAIN-SUFFIX,is.gd,PROXY
DOMAIN-SUFFIX,issuu.com,PROXY
DOMAIN-SUFFIX,itgonglun.com,PROXY
DOMAIN-SUFFIX,itun.es,PROXY
DOMAIN-SUFFIX,ixquick.com,PROXY
DOMAIN-SUFFIX,j.mp,PROXY
DOMAIN-SUFFIX,js.revsci.net,PROXY
DOMAIN-SUFFIX,jshint.com,PROXY
DOMAIN-SUFFIX,jtvnw.net,PROXY
DOMAIN-SUFFIX,justgetflux.com,PROXY
DOMAIN-SUFFIX,kakao.co.kr,PROXY
DOMAIN-SUFFIX,kakao.com,PROXY
DOMAIN-SUFFIX,kakaocdn.net,PROXY
DOMAIN-SUFFIX,kat.cr,PROXY
DOMAIN-SUFFIX,kenengba.com,PROXY
DOMAIN-SUFFIX,klip.me,PROXY
DOMAIN-SUFFIX,kik.com,PROXY
DOMAIN-SUFFIX,leancloud.com,PROXY
DOMAIN-SUFFIX,leetcode.com,PROXY
DOMAIN-SUFFIX,libsyn.com,PROXY
DOMAIN-SUFFIX,licdn.com,PROXY
DOMAIN-SUFFIX,lightboxcdn.com,PROXY
DOMAIN-SUFFIX,like.com,PROXY
DOMAIN-SUFFIX,linkedin.com,PROXY
DOMAIN-SUFFIX,linode.com,PROXY
DOMAIN-SUFFIX,lithium.com,PROXY
DOMAIN-SUFFIX,littlehj.com,PROXY
DOMAIN-SUFFIX,livefilestore.com,PROXY
DOMAIN-SUFFIX,llnwd.net,PROXY
DOMAIN-SUFFIX,localnetwork.uop,PROXY
DOMAIN-SUFFIX,logmein.com,PROXY
DOMAIN-SUFFIX,macid.co,PROXY
DOMAIN-SUFFIX,macromedia.com,PROXY
DOMAIN-SUFFIX,macrumors.com,PROXY
DOMAIN-SUFFIX,marketwatch.com,PROXY
DOMAIN-SUFFIX,mashable.com,PROXY
DOMAIN-SUFFIX,mathjax.org,PROXY
DOMAIN-SUFFIX,medium.com,PROXY
DOMAIN-SUFFIX,mega.co.nz,PROXY
DOMAIN-SUFFIX,mega.nz,PROXY
DOMAIN-SUFFIX,megaupload.com,PROXY
DOMAIN-SUFFIX,microsofttranslator.com,PROXY
DOMAIN-SUFFIX,mindnode.com,PROXY
DOMAIN-SUFFIX,mlssoccer.com,PROXY
DOMAIN-SUFFIX,mobile01.com,PROXY
DOMAIN-SUFFIX,modmyi.com,PROXY
DOMAIN-SUFFIX,moves-export.com,PROXY
DOMAIN-SUFFIX,mp3buscador.com,PROXY
DOMAIN-SUFFIX,msedge.net,PROXY
DOMAIN-SUFFIX,mycnnews.com,PROXY
DOMAIN-SUFFIX,myfontastic.com,PROXY
DOMAIN-SUFFIX,name.com,PROXY
DOMAIN-SUFFIX,nasa.gov,PROXY
DOMAIN-SUFFIX,ndr.de,PROXY
DOMAIN-SUFFIX,netdna-cdn.com,PROXY
DOMAIN-SUFFIX,newipnow.com,PROXY
DOMAIN-SUFFIX,nextmedia.com,PROXY
DOMAIN-SUFFIX,nih.gov,PROXY
DOMAIN-SUFFIX,nintendo.com,PROXY
DOMAIN-SUFFIX,nintendo.net,PROXY
DOMAIN-SUFFIX,notion.so,PROXY
DOMAIN-SUFFIX,novafile.com,PROXY
DOMAIN-SUFFIX,nrk.no,PROXY
DOMAIN-SUFFIX,nsstatic.net,PROXY
DOMAIN-SUFFIX,nssurge.com,PROXY
DOMAIN-SUFFIX,nyt.com,PROXY
DOMAIN-SUFFIX,nytimes.com,PROXY
DOMAIN-SUFFIX,nytimg.com,PROXY
DOMAIN-SUFFIX,nytstyle.com,PROXY
DOMAIN-SUFFIX,office365.com,PROXY
DOMAIN-SUFFIX,omnigroup.com,PROXY
DOMAIN-SUFFIX,onedrive.com,PROXY
DOMAIN-SUFFIX,onedrive.live.com,PROXY
DOMAIN-SUFFIX,onenote.com,PROXY
DOMAIN-SUFFIX,ooyala.com,PROXY
DOMAIN-SUFFIX,openvpn.net,PROXY
DOMAIN-SUFFIX,openwrt.org,PROXY
DOMAIN-SUFFIX,optimizely.com,PROXY
DOMAIN-SUFFIX,orkut.com,PROXY
DOMAIN-SUFFIX,osha.gov,PROXY
DOMAIN-SUFFIX,osxdaily.com,PROXY
DOMAIN-SUFFIX,ow.ly,PROXY
DOMAIN-SUFFIX,paddle.com,PROXY
DOMAIN-SUFFIX,paddleapi.com,PROXY
DOMAIN-SUFFIX,pandora.com,PROXY
DOMAIN-SUFFIX,panoramio.com,PROXY
DOMAIN-SUFFIX,parallels.com,PROXY
DOMAIN-SUFFIX,parse.com,PROXY
DOMAIN-SUFFIX,pdfexpert.com,PROXY
DOMAIN-SUFFIX,periscope.tv,PROXY
DOMAIN-SUFFIX,piaotian.net,PROXY
DOMAIN-SUFFIX,picasaweb.com,PROXY
DOMAIN-SUFFIX,pinboard.in,PROXY
DOMAIN-SUFFIX,ping.pe,PROXY
DOMAIN-SUFFIX,pinterest.com,PROXY
DOMAIN-SUFFIX,pixelmator.com,PROXY
DOMAIN-SUFFIX,pixnet.net,PROXY
DOMAIN-SUFFIX,playpcesor.com,PROXY
DOMAIN-SUFFIX,playstation.com,PROXY
DOMAIN-SUFFIX,playstation.com.hk,PROXY
DOMAIN-SUFFIX,playstation.net,PROXY
DOMAIN-SUFFIX,playstationnetwork.com,PROXY
DOMAIN-SUFFIX,pokemon.com,PROXY
DOMAIN-SUFFIX,polymer-project.org,PROXY
DOMAIN-SUFFIX,popo.tw,PROXY
DOMAIN-SUFFIX,prfct.co,PROXY
DOMAIN-SUFFIX,proxfree.com,PROXY
DOMAIN-SUFFIX,psiphon3.com,PROXY
DOMAIN-SUFFIX,ptt.cc,PROXY,force-remote-dns
DOMAIN-SUFFIX,pubu.com.tw,PROXY
DOMAIN-SUFFIX,puffinbrowser.com,PROXY
DOMAIN-SUFFIX,pushbullet.com,PROXY
DOMAIN-SUFFIX,pushwoosh.com,PROXY
DOMAIN-SUFFIX,pximg.net,PROXY
DOMAIN-SUFFIX,readingtimes.com.tw,PROXY
DOMAIN-SUFFIX,readmoo.com,PROXY
DOMAIN-SUFFIX,recaptcha.net,PROXY
DOMAIN-SUFFIX,reddit.com,PROXY
DOMAIN-SUFFIX,redditmedia.com,PROXY
DOMAIN-SUFFIX,reuters.com,PROXY
DOMAIN-SUFFIX,rfi.fr,PROXY
DOMAIN-SUFFIX,rileyguide.com,PROXY
DOMAIN-SUFFIX,rime.im,PROXY
DOMAIN-SUFFIX,rsf.org,PROXY
DOMAIN-SUFFIX,sciencedaily.com,PROXY
DOMAIN-SUFFIX,sciencemag.org,PROXY
DOMAIN-SUFFIX,scribd.com,PROXY
DOMAIN-SUFFIX,search.com,PROXY
DOMAIN-SUFFIX,servebom.com,PROXY
DOMAIN-SUFFIX,sfx.ms,PROXY
DOMAIN-SUFFIX,shadowsocks.org,PROXY
DOMAIN-SUFFIX,sharethis.com,PROXY
DOMAIN-SUFFIX,shazam.com,PROXY
DOMAIN-SUFFIX,shutterstock.com,PROXY
DOMAIN-SUFFIX,sidelinesnews.com,PROXY
DOMAIN-SUFFIX,simp.ly,PROXY
DOMAIN-SUFFIX,simplenote.com,PROXY
DOMAIN-SUFFIX,sketchappsources.com,PROXY
DOMAIN-SUFFIX,skype.com,PROXY
DOMAIN-SUFFIX,slack.com,PROXY
DOMAIN-SUFFIX,slack-edge.com,PROXY
DOMAIN-SUFFIX,slack-msgs.com,PROXY
DOMAIN-SUFFIX,slideshare.net,PROXY
DOMAIN-SUFFIX,smartdnsproxy.com,PROXY
DOMAIN-SUFFIX,smartmailcloud.com,PROXY
DOMAIN-SUFFIX,smh.com.au,PROXY
DOMAIN-SUFFIX,snapchat.com,PROXY
DOMAIN-SUFFIX,sndcdn.com,PROXY
DOMAIN-SUFFIX,sockslist.net,PROXY
DOMAIN-SUFFIX,sony.com,PROXY
DOMAIN-SUFFIX,sony.com.hk,PROXY
DOMAIN-SUFFIX,sonyentertainmentnetwork.com,PROXY
DOMAIN-SUFFIX,soundcloud.com,PROXY
DOMAIN-SUFFIX,sourceforge.net,PROXY
DOMAIN-SUFFIX,sowers.org.hk,PROXY
DOMAIN-SUFFIX,speedsmart.net,PROXY
DOMAIN-SUFFIX,spike.com,PROXY
DOMAIN-SUFFIX,spoti.fi,PROXY
DOMAIN-SUFFIX,squarespace.com,PROXY
DOMAIN-SUFFIX,ssa.gov,PROXY
DOMAIN-SUFFIX,sstatic.net,PROXY
DOMAIN-SUFFIX,st.luluku.pw,PROXY
DOMAIN-SUFFIX,stackoverflow.com,PROXY
DOMAIN-SUFFIX,starp2p.com,PROXY
DOMAIN-SUFFIX,startpage.com,PROXY
DOMAIN-SUFFIX,state.gov,PROXY
DOMAIN-SUFFIX,staticflickr.com,PROXY
DOMAIN-SUFFIX,storify.com,PROXY
DOMAIN-SUFFIX,stumbleupon.com,PROXY
DOMAIN-SUFFIX,sugarsync.com,PROXY
DOMAIN-SUFFIX,supermariorun.com,PROXY
DOMAIN-SUFFIX,surfeasy.com.au,PROXY
DOMAIN-SUFFIX,surge.run,PROXY
DOMAIN-SUFFIX,surrenderat20.net,PROXY
DOMAIN-SUFFIX,sydneytoday.com,PROXY
DOMAIN-SUFFIX,symauth.com,PROXY
DOMAIN-SUFFIX,symcb.com,PROXY
DOMAIN-SUFFIX,symcd.com,PROXY
DOMAIN-SUFFIX,t.me,PROXY
DOMAIN-SUFFIX,tablesgenerator.com,PROXY
DOMAIN-SUFFIX,tabtter.jp,PROXY
DOMAIN-SUFFIX,talk853.com,PROXY
DOMAIN-SUFFIX,talkboxapp.com,PROXY
DOMAIN-SUFFIX,talkonly.net,PROXY
DOMAIN-SUFFIX,tapbots.com,PROXY
DOMAIN-SUFFIX,tapbots.net,PROXY
DOMAIN-SUFFIX,tdesktop.com,PROXY
DOMAIN-SUFFIX,techcrunch.com,PROXY
DOMAIN-SUFFIX,technorati.com,PROXY
DOMAIN-SUFFIX,techsmith.com,PROXY
DOMAIN-SUFFIX,telegra.ph,PROXY
DOMAIN-SUFFIX,textnow.me,PROXY
DOMAIN-SUFFIX,thebobs.com,PROXY
DOMAIN-SUFFIX,theinitium.com,PROXY
DOMAIN-SUFFIX,thepiratebay.org,PROXY
DOMAIN-SUFFIX,theverge.com,PROXY
DOMAIN-SUFFIX,thewgo.org,PROXY
DOMAIN-SUFFIX,tiltbrush.com,PROXY
DOMAIN-SUFFIX,tinder.com,PROXY
DOMAIN-SUFFIX,time.com,PROXY
DOMAIN-SUFFIX,timeinc.net,PROXY
DOMAIN-SUFFIX,tiny.cc,PROXY
DOMAIN-SUFFIX,tinychat.com,PROXY
DOMAIN-SUFFIX,tinypic.com,PROXY
DOMAIN-SUFFIX,tmblr.co,PROXY
DOMAIN-SUFFIX,todoist.com,PROXY
DOMAIN-SUFFIX,togetter.com,PROXY
DOMAIN-SUFFIX,tokyocn.com,PROXY
DOMAIN-SUFFIX,tomshardware.com,PROXY
DOMAIN-SUFFIX,torcn.com,PROXY
DOMAIN-SUFFIX,torrentprivacy.com,PROXY
DOMAIN-SUFFIX,torrentproject.se,PROXY
DOMAIN-SUFFIX,torrentz.eu,PROXY
DOMAIN-SUFFIX,traffichaus.com,PROXY
DOMAIN-SUFFIX,transparency.org,PROXY
DOMAIN-SUFFIX,trello.com,PROXY
DOMAIN-SUFFIX,trendsmap.com,PROXY
DOMAIN-SUFFIX,trulyergonomic.com,PROXY
DOMAIN-SUFFIX,trustasiassl.com,PROXY
DOMAIN-SUFFIX,tt-rss.org,PROXY
DOMAIN-SUFFIX,tumblr.co,PROXY
DOMAIN-SUFFIX,tumblr.com,PROXY
DOMAIN-SUFFIX,turbobit.net,PROXY
DOMAIN-SUFFIX,tv.com,PROXY
DOMAIN-SUFFIX,tweetdeck.com,PROXY
DOMAIN-SUFFIX,tweetmarker.net,PROXY
DOMAIN-SUFFIX,twimg.co,PROXY
DOMAIN-SUFFIX,twitch.tv,PROXY
DOMAIN-SUFFIX,twitthat.com,PROXY
DOMAIN-SUFFIX,twtkr.com,PROXY
DOMAIN-SUFFIX,twttr.com,PROXY
DOMAIN-SUFFIX,txmblr.com,PROXY
DOMAIN-SUFFIX,typekit.net,PROXY
DOMAIN-SUFFIX,typography.com,PROXY
DOMAIN-SUFFIX,ubertags.com,PROXY
DOMAIN-SUFFIX,ublock.org,PROXY
DOMAIN-SUFFIX,ubnt.com,PROXY
DOMAIN-SUFFIX,uchicago.edu,PROXY
DOMAIN-SUFFIX,udn.com,PROXY
DOMAIN-SUFFIX,ugo.com,PROXY
DOMAIN-SUFFIX,uhdwallpapers.org,PROXY
DOMAIN-SUFFIX,ulyssesapp.com,PROXY
DOMAIN-SUFFIX,unblockdmm.com,PROXY
DOMAIN-SUFFIX,unblocksites.co,PROXY
DOMAIN-SUFFIX,unpo.org,PROXY
DOMAIN-SUFFIX,untraceable.us,PROXY
DOMAIN-SUFFIX,uploaded.net,PROXY
DOMAIN-SUFFIX,uProxy.org,PROXY
DOMAIN-SUFFIX,urchin.com,PROXY
DOMAIN-SUFFIX,urlparser.com,PROXY
DOMAIN-SUFFIX,us.to,PROXY
DOMAIN-SUFFIX,usertrust.com,PROXY
DOMAIN-SUFFIX,usgs.gov,PROXY
DOMAIN-SUFFIX,usma.edu,PROXY
DOMAIN-SUFFIX,uspto.gov,PROXY
DOMAIN-SUFFIX,ustream.tv,PROXY
DOMAIN-SUFFIX,v.gd,PROXY
DOMAIN-SUFFIX,v2ray.com,PROXY
DOMAIN-SUFFIX,van001.com,PROXY
DOMAIN-SUFFIX,vanpeople.com,PROXY
DOMAIN-SUFFIX,vansky.com,PROXY
DOMAIN-SUFFIX,vbstatic.co,PROXY
DOMAIN-SUFFIX,venchina.com,PROXY
DOMAIN-SUFFIX,venturebeat.com,PROXY
DOMAIN-SUFFIX,veoh.com,PROXY
DOMAIN-SUFFIX,verizonwireless.com,PROXY
DOMAIN-SUFFIX,viber.com,PROXY
DOMAIN-SUFFIX,vid.me,PROXY
DOMAIN-SUFFIX,videomega.tv,PROXY
DOMAIN-SUFFIX,vidinfo.org,PROXY
DOMAIN-SUFFIX,vimeo.com,PROXY
DOMAIN-SUFFIX,vimeocdn.com,PROXY
DOMAIN-SUFFIX,vimperator.org,PROXY
DOMAIN-SUFFIX,vine.co,PROXY
DOMAIN-SUFFIX,visibletweets.com,PROXY
DOMAIN-SUFFIX,vivaldi.com,PROXY
DOMAIN-SUFFIX,voachinese.com,PROXY
DOMAIN-SUFFIX,vocativ.com,PROXY
DOMAIN-SUFFIX,vox-cdn.com,PROXY
DOMAIN-SUFFIX,vpnaccount.org,PROXY
DOMAIN-SUFFIX,vpnbook.com,PROXY
DOMAIN-SUFFIX,vpngate.net,PROXY
DOMAIN-SUFFIX,vsco.co,PROXY
DOMAIN-SUFFIX,vultr.com,PROXY
DOMAIN-SUFFIX,vzw.com,PROXY
DOMAIN-SUFFIX,w.org,PROXY
DOMAIN-SUFFIX,w3schools.com,PROXY
DOMAIN-SUFFIX,wattpad.com,PROXY
DOMAIN-SUFFIX,web2project.net,PROXY
DOMAIN-SUFFIX,webfreer.com,PROXY
DOMAIN-SUFFIX,weblagu.com,PROXY
DOMAIN-SUFFIX,websnapr.com,PROXY
DOMAIN-SUFFIX,webtype.com,PROXY
DOMAIN-SUFFIX,webwarper.net,PROXY
DOMAIN-SUFFIX,wenxuecity.com,PROXY
DOMAIN-SUFFIX,westca.com,PROXY
DOMAIN-SUFFIX,westpoint.edu,PROXY
DOMAIN-SUFFIX,whatbrowser.org,PROXY
DOMAIN-SUFFIX,wikileaks.info,PROXY
DOMAIN-SUFFIX,wikileaks.org,PROXY
DOMAIN-SUFFIX,wikileaks-forum.com,PROXY
DOMAIN-SUFFIX,wikimedia.org,PROXY
DOMAIN-SUFFIX,wikipedia.com,PROXY
DOMAIN-SUFFIX,wikipedia.org,PROXY
DOMAIN-SUFFIX,windows.com,PROXY
DOMAIN-SUFFIX,windows.net,PROXY
DOMAIN-SUFFIX,wn.com,PROXY
DOMAIN-SUFFIX,wordpress.com,PROXY
DOMAIN-SUFFIX,workflow.is,PROXY
DOMAIN-SUFFIX,worldcat.org,PROXY
DOMAIN-SUFFIX,wow.com,PROXY
DOMAIN-SUFFIX,wp.com,PROXY
DOMAIN-SUFFIX,xclient.info,PROXY
DOMAIN-SUFFIX,wsj.com,PROXY
DOMAIN-SUFFIX,wsj.net,PROXY
DOMAIN-SUFFIX,wwitv.com,PROXY
DOMAIN-SUFFIX,xanga.com,PROXY
DOMAIN-SUFFIX,xda-developers.com,PROXY
DOMAIN-SUFFIX,xeeno.com,PROXY
DOMAIN-SUFFIX,xiti.com,PROXY
DOMAIN-SUFFIX,xn--h5qz41fzgdxxl.com,PROXY
DOMAIN-SUFFIX,xuite.net,PROXY
DOMAIN-SUFFIX,yahoo.com,PROXY
DOMAIN-SUFFIX,yahooapis.com,PROXY
DOMAIN-SUFFIX,yasni.co.uk,PROXY
DOMAIN-SUFFIX,yastatic.net,PROXY
DOMAIN-SUFFIX,yeeyi.com,PROXY
DOMAIN-SUFFIX,yesasia.com,PROXY
DOMAIN-SUFFIX,yes-news.com,PROXY
DOMAIN-SUFFIX,yidio.com,PROXY
DOMAIN-SUFFIX,yimg.com,PROXY
DOMAIN-SUFFIX,ying.com,PROXY
DOMAIN-SUFFIX,yorkbbs.ca,PROXY
DOMAIN-SUFFIX,youmaker.com,PROXY
DOMAIN-SUFFIX,yourlisten.com,PROXY
DOMAIN-SUFFIX,youtu.be,PROXY
DOMAIN-SUFFIX,yoyo.org,PROXY
DOMAIN-SUFFIX,ytimg.com,PROXY
DOMAIN-SUFFIX,zacebook.com,PROXY
DOMAIN-SUFFIX,zalmos.com,PROXY
DOMAIN-SUFFIX,zaobao.com.sg,PROXY
DOMAIN-SUFFIX,zeutch.com,PROXY
DOMAIN-SUFFIX,zynamics.com,PROXY

// Force some domains which are fucked by GFW while resolving DNS,or do not respect the system Proxy
DOMAIN-KEYWORD,appledaily,PROXY,force-remote-dns
DOMAIN-KEYWORD,beetalk,PROXY,force-remote-dns
DOMAIN-KEYWORD,blogspot,PROXY,force-remote-dns
DOMAIN-KEYWORD,dropbox,PROXY,force-remote-dns
DOMAIN-KEYWORD,facebook,PROXY,force-remote-dns
DOMAIN-KEYWORD,google,PROXY,force-remote-dns
DOMAIN-KEYWORD,spotify,PROXY,force-remote-dns
DOMAIN-KEYWORD,telegram,PROXY,force-remote-dns
DOMAIN-KEYWORD,twitter,PROXY,force-remote-dns
DOMAIN-KEYWORD,whatsapp,PROXY,force-remote-dns
DOMAIN-KEYWORD,youtube,PROXY,force-remote-dns
DOMAIN-SUFFIX,1e100.net,PROXY,force-remote-dns
DOMAIN-SUFFIX,2mdn.net,PROXY,force-remote-dns
DOMAIN-SUFFIX,abc.xyz,PROXY,force-remote-dns
DOMAIN-SUFFIX,akamai.net,PROXY,force-remote-dns
DOMAIN-SUFFIX,appspot.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,autodraw.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,bandwagonhost.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,blogblog.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,cdninstagram.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,chromeexperiments.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,creativelab5.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,crittercism.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,culturalspot.org,PROXY,force-remote-dns
DOMAIN-SUFFIX,dartlang.org,PROXY,force-remote-dns
DOMAIN-SUFFIX,fb.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,fb.me,PROXY,force-remote-dns
DOMAIN-SUFFIX,fbcdn.net,PROXY,force-remote-dns
DOMAIN-SUFFIX,fbsbx.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,gcr.io,PROXY,force-remote-dns
DOMAIN-SUFFIX,gmail.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,gosetsuden.jp,PROXY,force-remote-dns
DOMAIN-SUFFIX,gvt1.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,gwtproject.org,PROXY,force-remote-dns
DOMAIN-SUFFIX,heroku.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,html5rocks.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,humblebundle.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,instagram.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,keyhole.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,kobo.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,kobobooks.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,madewithcode.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,material.io,PROXY,force-remote-dns
DOMAIN-SUFFIX,messenger.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,netmarble.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,nianticlabs.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,pinimg.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,pubnub.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,scdn.co,PROXY,force-remote-dns
DOMAIN-SUFFIX,t.co,PROXY,force-remote-dns
DOMAIN-SUFFIX,telegram.me,PROXY,force-remote-dns
DOMAIN-SUFFIX,telegram.org,PROXY,force-remote-dns
DOMAIN-SUFFIX,tensorflow.org,PROXY,force-remote-dns
DOMAIN-SUFFIX,thefacebook.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,toggleable.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,torproject.org,PROXY,force-remote-dns
DOMAIN-SUFFIX,twimg.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,twitpic.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,unfiltered.news,PROXY,force-remote-dns
DOMAIN-SUFFIX,waveprotocol.org,PROXY,force-remote-dns
DOMAIN-SUFFIX,webmproject.org,PROXY,force-remote-dns
DOMAIN-SUFFIX,webrtc.org,PROXY,force-remote-dns
DOMAIN-SUFFIX,whatsapp.com,PROXY,force-remote-dns
DOMAIN-SUFFIX,whatsapp.net,PROXY,force-remote-dns

// LINE
IP-CIDR,103.2.28.0/22,PROXY,no-resolve
IP-CIDR,119.235.224.0/21,PROXY,no-resolve
IP-CIDR,119.235.232.0/23,PROXY,no-resolve
IP-CIDR,119.235.235.0/24,PROXY,no-resolve
IP-CIDR,119.235.236.0/23,PROXY,no-resolve
IP-CIDR,125.6.146.0/24,PROXY,no-resolve
IP-CIDR,125.6.149.0/24,PROXY,no-resolve
IP-CIDR,125.6.190.0/24,PROXY,no-resolve
IP-CIDR,125.209.208.0/20,PROXY,no-resolve
IP-CIDR,203.104.103.0/24,PROXY,no-resolve
IP-CIDR,203.104.128.0/20,PROXY,no-resolve
IP-CIDR,203.174.66.64/26,PROXY,no-resolve
IP-CIDR,203.174.77.0/24,PROXY,no-resolve

// Telegram
IP-CIDR,109.239.140.0/24,PROXY,no-resolve
IP-CIDR,149.154.160.0/20,PROXY,no-resolve
IP-CIDR,91.108.4.0/16,PROXY,no-resolve
IP-CIDR6,2001:67c:4e8::/48,REJECT,no-resolve
IP-CIDR6,2001:b28:f23d::/48,REJECT,no-resolve
IP-CIDR6,2001:b28:f23f::/48,REJECT,no-resolve

// Kakao Talk
IP-CIDR,1.201.0.0/24,PROXY,no-resolve
IP-CIDR,103.246.56.0/22,PROXY,no-resolve
IP-CIDR,103.27.148.0/22,PROXY,no-resolve
IP-CIDR,110.76.140.0/22,PROXY,no-resolve
IP-CIDR,113.61.104.0/22,PROXY,no-resolve
IP-CIDR,27.0.236.0/22,PROXY,no-resolve



# DIRECT

// Client
PROCESS-NAME,Paws for Trello,DIRECT
PROCESS-NAME,Resilio Sync,DIRECT
PROCESS-NAME,Thunder,DIRECT
PROCESS-NAME,trustd,DIRECT
PROCESS-NAME,WebTorrent,DIRECT
PROCESS-NAME,WeChat,DIRECT

// UA
USER-AGENT, %E4%BA%AC%E4%B8%9C%E5%88%B0%E5%AE%B6*,DIRECT
USER-AGENT,%E5%8D%B3%E5%88%BB*,DIRECT
USER-AGENT,*Vainglory* ,DIRECT
USER-AGENT,AdBlock*,DIRECT
USER-AGENT,arrowio*,DIRECT
USER-AGENT,balls*,DIRECT
USER-AGENT,Best%20Trace*,DIRECT
USER-AGENT,cmblife*,DIRECT
USER-AGENT,hide*,DIRECT
USER-AGENT,JDLife*,DIRECT
USER-AGENT,LastPass*,DIRECT
USER-AGENT,MegaWerewolf*,DIRECT
USER-AGENT,MicroMessenger*,DIRECT
USER-AGENT,Microsoft*,DIRECT
USER-AGENT,Moke*,DIRECT
USER-AGENT,OneDrive*,DIRECT
USER-AGENT,osee2unifiedRelease*,DIRECT
USER-AGENT,QQ*,DIRECT
USER-AGENT,Resilio Sync*,DIRECT
USER-AGENT,TeamViewer*,DIRECT
USER-AGENT,TIM*,DIRECT
USER-AGENT,WebTorrent*,DIRECT
USER-AGENT,WeChat*,DIRECT

// Blizzard
USER-AGENT,Blizzard*,DIRECT
USER-AGENT,wowcompanion*,DIRECT
DOMAIN-SUFFIX,battle.net,DIRECT
DOMAIN-SUFFIX,battlenet.com,DIRECT
DOMAIN-SUFFIX,blizzard.com,DIRECT

// Microsoft
DOMAIN-KEYWORD,microsoft,DIRECT
DOMAIN-SUFFIX,bing.com,DIRECT
DOMAIN-SUFFIX,hotmail.com,DIRECT
DOMAIN-SUFFIX,live.com,DIRECT
DOMAIN-SUFFIX,live.net,DIRECT
DOMAIN-SUFFIX,microsoft.com,DIRECT
DOMAIN-SUFFIX,msn.com,DIRECT
DOMAIN-SUFFIX,office.com,DIRECT
DOMAIN-SUFFIX,office.net,DIRECT
DOMAIN-SUFFIX,outlook.com,DIRECT

// Prior
DOMAIN,client.amplifi.com,DIRECT
DOMAIN,ip.bjango.com,DIRECT // iStat Menu IP Test
DOMAIN-SUFFIX,alphassl.com,DIRECT
DOMAIN-SUFFIX,edu.cn,DIRECT

// Spark
DOMAIN,api.amplitude.com,DIRECT
DOMAIN,app.smartmailcloud.com,DIRECT
DOMAIN,gate.hockeyapp.net,DIRECT
DOMAIN-SUFFIX,firebaseio.com,DIRECT

// TeamViewer
IP-CIDR,109.239.140.0/24,DIRECT,no-resolve



# Domestic

DOMAIN-SUFFIX,cn,DIRECT

DOMAIN-SUFFIX,12306.com,DIRECT
DOMAIN-SUFFIX,126.net,DIRECT
DOMAIN-SUFFIX,163.com,DIRECT
DOMAIN-SUFFIX,360.cn,DIRECT
DOMAIN-SUFFIX,360.com,DIRECT
DOMAIN-SUFFIX,360buy.com,DIRECT
DOMAIN-SUFFIX,360buyimg.com,DIRECT
DOMAIN-SUFFIX,36kr.com,DIRECT
DOMAIN-SUFFIX,58.com,DIRECT
DOMAIN-SUFFIX,abercrombie.com,DIRECT
DOMAIN-SUFFIX,acfun.tv,DIRECT
DOMAIN-SUFFIX,acgvideo.com,DIRECT
DOMAIN-SUFFIX,adobesc.com,DIRECT
DOMAIN-SUFFIX,air-matters.com,DIRECT
DOMAIN-SUFFIX,air-matters.io,DIRECT
DOMAIN-SUFFIX,aixifan.com,DIRECT
DOMAIN-SUFFIX,akadns.net,DIRECT
DOMAIN-SUFFIX,alicdn.com,DIRECT
DOMAIN-SUFFIX,alipay.com,DIRECT
DOMAIN-SUFFIX,alipayobjects.com,DIRECT
DOMAIN-SUFFIX,aliyun.com,DIRECT
DOMAIN-SUFFIX,amap.com,DIRECT
DOMAIN-SUFFIX,analytics.126.net,DIRECT
DOMAIN-SUFFIX,apache.org,DIRECT
DOMAIN-SUFFIX,appshike.com,DIRECT
DOMAIN-SUFFIX,appstore.com,DIRECT
DOMAIN-SUFFIX,autonavi.com,DIRECT
DOMAIN-SUFFIX,bababian.com,DIRECT
DOMAIN-SUFFIX,baidu.com,DIRECT
DOMAIN-SUFFIX,battle.net,DIRECT
DOMAIN-SUFFIX,bdimg.com,DIRECT
DOMAIN-SUFFIX,bdstatic.com,DIRECT
DOMAIN-SUFFIX,beatsbydre.com,DIRECT
DOMAIN-SUFFIX,bilibili.cn,DIRECT
DOMAIN-SUFFIX,bilibili.com,DIRECT
DOMAIN-SUFFIX,bing.com,DIRECT
DOMAIN-SUFFIX,caiyunapp.com,DIRECT
DOMAIN-SUFFIX,ccgslb.com,DIRECT
DOMAIN-SUFFIX,ccgslb.net,DIRECT
DOMAIN-SUFFIX,chinacache.net,DIRECT
DOMAIN-SUFFIX,chunbo.com,DIRECT
DOMAIN-SUFFIX,chunboimg.com,DIRECT
DOMAIN-SUFFIX,clashroyaleapp.com,DIRECT
DOMAIN-SUFFIX,clouddn.com,DIRECT
DOMAIN-SUFFIX,cloudxns.net,DIRECT
DOMAIN-SUFFIX,cmfu.com,DIRECT
DOMAIN-SUFFIX,cnbeta.com,DIRECT
DOMAIN-SUFFIX,cnbetacdn.com,DIRECT
DOMAIN-SUFFIX,conoha.jp,DIRECT
DOMAIN-SUFFIX,culturedcode.com,DIRECT
DOMAIN-SUFFIX,didialift.com,DIRECT
DOMAIN-SUFFIX,douban.com,DIRECT
DOMAIN-SUFFIX,doubanio.com,DIRECT
DOMAIN-SUFFIX,douyu.com,DIRECT
DOMAIN-SUFFIX,douyu.tv,DIRECT
DOMAIN-SUFFIX,douyutv.com,DIRECT
DOMAIN-SUFFIX,duokan.com,DIRECT
DOMAIN-SUFFIX,duoshuo.com,DIRECT
DOMAIN-SUFFIX,dytt8.net,DIRECT
DOMAIN-SUFFIX,easou.com,DIRECT
DOMAIN-SUFFIX,ecitic.com,DIRECT
DOMAIN-SUFFIX,ecitic.net,DIRECT
DOMAIN-SUFFIX,eclipse.org,DIRECT
DOMAIN-SUFFIX,eudic.net,DIRECT
DOMAIN-SUFFIX,ewqcxz.com,DIRECT
DOMAIN-SUFFIX,feng.com,DIRECT
DOMAIN-SUFFIX,fir.im,DIRECT
DOMAIN-SUFFIX,frdic.com,DIRECT
DOMAIN-SUFFIX,fresh-ideas.cc,DIRECT
DOMAIN-SUFFIX,geetest.com,DIRECT
DOMAIN-SUFFIX,godic.net,DIRECT
DOMAIN-SUFFIX,goodread.com,DIRECT
DOMAIN-SUFFIX,google.cn,DIRECT
DOMAIN-SUFFIX,gtimg.com,DIRECT
DOMAIN-SUFFIX,haibian.com,DIRECT
DOMAIN-SUFFIX,hao123.com,DIRECT
DOMAIN-SUFFIX,haosou.com,DIRECT
DOMAIN-SUFFIX,hdslb.com,DIRECT
DOMAIN-SUFFIX,hdslb.net,DIRECT
DOMAIN-SUFFIX,hollisterco.com,DIRECT
DOMAIN-SUFFIX,hongxiu.com,DIRECT
DOMAIN-SUFFIX,hxcdn.net,DIRECT
DOMAIN-SUFFIX,iciba.com,DIRECT
DOMAIN-SUFFIX,icloud.com,DIRECT
DOMAIN-SUFFIX,ifeng.com,DIRECT
DOMAIN-SUFFIX,ifengimg.com,DIRECT
DOMAIN-SUFFIX,images-amazon.com,DIRECT
DOMAIN-SUFFIX,ipip.net,DIRECT
DOMAIN-SUFFIX,iqiyi.com,DIRECT
DOMAIN-SUFFIX,ithome.com,DIRECT
DOMAIN-SUFFIX,ixdzs.com,DIRECT
DOMAIN-SUFFIX,jd.com,DIRECT
DOMAIN-SUFFIX,jd.hk,DIRECT
DOMAIN-SUFFIX,jianshu.com,DIRECT
DOMAIN-SUFFIX,jianshu.io,DIRECT
DOMAIN-SUFFIX,jianshuapi.com,DIRECT
DOMAIN-SUFFIX,jiathis.com,DIRECT
DOMAIN-SUFFIX,jomodns.com,DIRECT
DOMAIN-SUFFIX,knewone.com,DIRECT
DOMAIN-SUFFIX,kuaidi100.com,DIRECT
DOMAIN-SUFFIX,lecloud.com,DIRECT
DOMAIN-SUFFIX,lemicp.com,DIRECT
DOMAIN-SUFFIX,letv.com,DIRECT
DOMAIN-SUFFIX,letvcloud.com,DIRECT
DOMAIN-SUFFIX,live.com,DIRECT
DOMAIN-SUFFIX,lizhi.io,DIRECT
DOMAIN-SUFFIX,localizecdn.com,DIRECT
DOMAIN-SUFFIX,lucifr.com,DIRECT
DOMAIN-SUFFIX,luoo.net,DIRECT
DOMAIN-SUFFIX,lxdns.com,DIRECT
DOMAIN-SUFFIX,mai.tn,DIRECT
DOMAIN-SUFFIX,maven.org,DIRECT
DOMAIN-SUFFIX,meizu.com,DIRECT
DOMAIN-SUFFIX,mi.com,DIRECT
DOMAIN-SUFFIX,miaopai.com,DIRECT
DOMAIN-SUFFIX,microsoft.com,DIRECT
DOMAIN-SUFFIX,miui.com,DIRECT
DOMAIN-SUFFIX,miwifi.com,DIRECT
DOMAIN-SUFFIX,mob.com,DIRECT
DOMAIN-SUFFIX,moji.com,DIRECT
DOMAIN-SUFFIX,moke.com,DIRECT
DOMAIN-SUFFIX,mxhichina.com,DIRECT
DOMAIN-SUFFIX,myqcloud.com,DIRECT
DOMAIN-SUFFIX,myunlu.com,DIRECT
DOMAIN-SUFFIX,netease.com,DIRECT
DOMAIN-SUFFIX,nssurge.com,DIRECT
DOMAIN-SUFFIX,nuomi.com,DIRECT
DOMAIN-SUFFIX,ourdvs.com,DIRECT
DOMAIN-SUFFIX,outlook.com,DIRECT
DOMAIN-SUFFIX,overcast.fm,DIRECT
DOMAIN-SUFFIX,paypal.com,DIRECT
DOMAIN-SUFFIX,pgyer.com,DIRECT
DOMAIN-SUFFIX,pixiv.net,DIRECT
DOMAIN-SUFFIX,pstatp.com,DIRECT
DOMAIN-SUFFIX,qbox.me,DIRECT
DOMAIN-SUFFIX,qcloud.com,DIRECT
DOMAIN-SUFFIX,qdaily.com,DIRECT
DOMAIN-SUFFIX,qdmm.com,DIRECT
DOMAIN-SUFFIX,qhimg.com,DIRECT
DOMAIN-SUFFIX,qidian.com,DIRECT
DOMAIN-SUFFIX,qihucdn.com,DIRECT
DOMAIN-SUFFIX,qin.io,DIRECT
DOMAIN-SUFFIX,qingmang.me,DIRECT
DOMAIN-SUFFIX,qingmang.mobi,DIRECT
DOMAIN-SUFFIX,qiniucdn.com,DIRECT
DOMAIN-SUFFIX,qiniudn.com,DIRECT
DOMAIN-SUFFIX,qiyi.com,DIRECT
DOMAIN-SUFFIX,qiyipic.com,DIRECT
DOMAIN-SUFFIX,qq.com,DIRECT
DOMAIN-SUFFIX,qqurl.com,DIRECT
DOMAIN-SUFFIX,rarbg.to,DIRECT
DOMAIN-SUFFIX,rrmj.tv,DIRECT
DOMAIN-SUFFIX,ruguoapp.com,DIRECT
DOMAIN-SUFFIX,sandai.net,DIRECT
DOMAIN-SUFFIX,sinaapp.com,DIRECT
DOMAIN-SUFFIX,sinaimg.cn,DIRECT
DOMAIN-SUFFIX,sinaimg.com,DIRECT
DOMAIN-SUFFIX,smzdm.com,DIRECT
DOMAIN-SUFFIX,snwx.com,DIRECT
DOMAIN-SUFFIX,so.com,DIRECT
DOMAIN-SUFFIX,sogou.com,DIRECT
DOMAIN-SUFFIX,sogoucdn.com,DIRECT
DOMAIN-SUFFIX,sohu.com,DIRECT
DOMAIN-SUFFIX,soku.com,DIRECT
DOMAIN-SUFFIX,soso.com,DIRECT
DOMAIN-SUFFIX,speedtest.net,DIRECT
DOMAIN-SUFFIX,sspai.com,DIRECT
DOMAIN-SUFFIX,startssl.com,DIRECT
DOMAIN-SUFFIX,store.steampowered.com,DIRECT
DOMAIN-SUFFIX,suning.com,DIRECT
DOMAIN-SUFFIX,symcd.com,DIRECT
DOMAIN-SUFFIX,taobao.com,DIRECT
DOMAIN-SUFFIX,teamviewer.com,DIRECT
DOMAIN-SUFFIX,tenpay.com,DIRECT
DOMAIN-SUFFIX,tietuku.com,DIRECT
DOMAIN-SUFFIX,tmall.com,DIRECT
DOMAIN-SUFFIX,trello.com,DIRECT
DOMAIN-SUFFIX,trellocdn.com,DIRECT
DOMAIN-SUFFIX,ttmeiju.com,DIRECT
DOMAIN-SUFFIX,tudou.com,DIRECT
DOMAIN-SUFFIX,udache.com,DIRECT
DOMAIN-SUFFIX,umengcloud.com,DIRECT
DOMAIN-SUFFIX,upaiyun.com,DIRECT
DOMAIN-SUFFIX,upyun.com,DIRECT
DOMAIN-SUFFIX,uxengine.net,DIRECT
DOMAIN-SUFFIX,v2ex.co,DIRECT
DOMAIN-SUFFIX,v2ex.com,DIRECT
DOMAIN-SUFFIX,vultr.com,DIRECT
DOMAIN-SUFFIX,wandoujia.com,DIRECT
DOMAIN-SUFFIX,weather.com,DIRECT
DOMAIN-SUFFIX,weibo.cn,DIRECT
DOMAIN-SUFFIX,weibo.com,DIRECT
DOMAIN-SUFFIX,weico.cc,DIRECT
DOMAIN-SUFFIX,weiphone.com,DIRECT
DOMAIN-SUFFIX,weiphone.net,DIRECT
DOMAIN-SUFFIX,windowsupdate.com,DIRECT
DOMAIN-SUFFIX,workflowy.com,DIRECT
DOMAIN-SUFFIX,xdrig.com,DIRECT
DOMAIN-SUFFIX,xiami.com,DIRECT
DOMAIN-SUFFIX,xiami.net,DIRECT
DOMAIN-SUFFIX,xiaojukeji.com,DIRECT
DOMAIN-SUFFIX,xiaomi.com,DIRECT
DOMAIN-SUFFIX,xiaomi.net,DIRECT
DOMAIN-SUFFIX,xiaomicp.com,DIRECT
DOMAIN-SUFFIX,ximalaya.com,DIRECT
DOMAIN-SUFFIX,xitek.com,DIRECT
DOMAIN-SUFFIX,xmcdn.com,DIRECT
DOMAIN-SUFFIX,xn--nos809b.com,DIRECT
DOMAIN-SUFFIX,xslb.net,DIRECT
DOMAIN-SUFFIX,xunlei.com,DIRECT
DOMAIN-SUFFIX,yach.me,DIRECT
DOMAIN-SUFFIX,yeepay.com,DIRECT
DOMAIN-SUFFIX,yhd.com,DIRECT
DOMAIN-SUFFIX,yinxiang.com,DIRECT
DOMAIN-SUFFIX,yixia.com,DIRECT
DOMAIN-SUFFIX,ykimg.com,DIRECT
DOMAIN-SUFFIX,youdao.com,DIRECT
DOMAIN-SUFFIX,youku.com,DIRECT
DOMAIN-SUFFIX,yunjiasu-cdn.net,DIRECT
DOMAIN-SUFFIX,zealer.com,DIRECT
DOMAIN-SUFFIX,zgslb.net,DIRECT
DOMAIN-SUFFIX,zhihu.com,DIRECT
DOMAIN-SUFFIX,zhimg.com,DIRECT
DOMAIN-SUFFIX,zimuzu.tv,DIRECT

// Accelerate direct sites
DOMAIN-KEYWORD,torrent,DIRECT
URL-REGEX,(Subject|HELO|SMTP),DIRECT
URL-REGEX,(api|ps|sv|offnavi|newvector|ulog\.imap|newloc)(\.map|)\.(baidu|n\.shifen)\.com,DIRECT
URL-REGEX,(.+\.|^)(360|so|qihoo|360safe|qhimg|360totalsecurity|yunpan)\.(cn|com),DIRECT
URL-REGEX,(ed2k|torrent|\.torrent|peer_id=|announce|info_hash|get_peers|find_node|BitTorrent|announce_peer|protocol|announce\.php\?passkey=|magnet:|xunlei|sandai|Thunder|XLLiveUD|bt_key),DIRECT
URL-REGEX,/^.*@(guerrillamail\.(info|biz|com|de|net|org)|guerrillamailblock\.com|sharklasers\.com|grr\.la|pokemail\.net|spam4\.me|(mail\.)?bccto\.me|chacuo\.net|027168\.com)$/i,DIRECT

// LAN,debugging rules should place above this line
DOMAIN-SUFFIX,local,DIRECT
IP-CIDR,10.0.0.0/8,DIRECT
IP-CIDR,100.64.0.0/10,DIRECT
IP-CIDR,127.0.0.0/8,DIRECT
IP-CIDR,172.0.0.0/12,DIRECT
IP-CIDR,192.168.0.0/16,DIRECT



// Detect local network
GEOIP,CN,DIRECT
// Use Proxy for all others
FINAL,PROXY



[Host]


localhost = 127.0.0.1
syria.sy = 127.0.0.1

thisisinsider.com = server:8.8.4.4

accounts.pixiv.net = 210.129.120.44
app-api.pixiv.net = 210.129.120.41
d.pixiv.org = 210.140.131.160
dic.pixiv.net = 210.129.120.41
i.pximg.net = 210.140.92.136
imgaz.pixiv.net = 210.140.131.145
oauth.secure.pixiv.net = 210.129.120.43
pixiv.net = 210.129.120.41
pixiv.pximg.net = 210.140.92.135
source.pixiv.net = 210.140.131.144
touch.pixiv.net = 210.129.120.43
www.pixiv.net = 210.129.120.41

gmail.com = 216.58.203.191
chatenabled.mail.google.com = 216.58.203.252
filetransferenabled.mail.google.com = 216.58.221.93
gmail.google.com = 216.58.221.89
googlemail.l.google.com = 216.58.203.184
inbox.google.com = 74.125.197.19
isolated.mail.google.com = 216.58.221.91
m.gmail.com = 216.58.221.88
m.googlemail.com = 216.58.221.92
mail.google.com = 74.125.199.17
mail-settings.google.com = 216.58.203.190
www.gmail.com = 216.58.203.184



[URL Rewrite]


// Anti_ISP_JavaScript_Injection
^https?://101.251.211.235 - reject
^https?://103.249.254.113 - reject
^https?://106.75.65.92 - reject
^https?://120.132.57.41 - reject
^https?://120.132.63.203 - reject
^https?://120.26.151.246 - reject
^https?://120.55.199.139 - reject
^https?://120.76.189.132 - reject
^https?://122.226.223.163 - reject
^https?://139.196.239.52 - reject
^https?://180.76.155.58 - reject
^https?://183.131.79.30 - reject
^https?://211.155.94.198 - reject
^https?://223.6.255.99 - reject
^https?://c.minisplat.cn/ - reject
^https?://c1.minisplat.cn/ - reject
^https?://cache.changjingyi.cn/ - reject
^https?://cache.gclick.cn/ - reject

// Anti_ISP_Safari_Baidu_CPM_Hijack
^https?://m.coolaiy.com/b.php - reject
^https?://www.babyye.com/b.php - reject
^https?://www.gwv7.com/b.php - reject
^https?://www.likeji.net/b.php - reject

// Tencent
^https?://imgcache.qq.com/qqlive/ - reject
^https?://mi.gdt.qq.com/gdt_mview.fcg\?posid= - reject
^https?://mp.weixin.qq.com/mp/report - reject
^https?://r.inews.qq.com/adsBlacklist - reject
^https?://r.inews.qq.com/getBannerAds - reject
^https?://r.inews.qq.com/getFullScreenPic - reject
^https?://r.inews.qq.com/getNewsRemoteConfig - reject
^https?://r.inews.qq.com/getSplash\?apptype=ios&startarticleid=&__qnr= - reject
^https?://r.inews.qq.com/searchHotCatList - reject
^https?://r.inews.qq.com/upLoadLoc - reject

// Moji
^https?://ad.api.moji.com/ad/log/stat - reject
^https?://ast.api.moji.com/assist/ad/moji/stat - reject
^https?://cdn.moji.com/adlink/avatarcard - reject
^https?://cdn.moji.com/adlink/common - reject
^https?://cdn.moji.com/adlink/splash/ - reject
^https?://cdn.moji.com/advert/ - reject
^https?://cdn2.moji002.com/webpush/ad2/ - reject
^https?://fds.api.moji.com/card/recommend - reject
^https?://show.api.moji.com/json/showcase/getAll - reject
^https?://stat.moji.com - reject
^https?://storage.360buyimg.com/kepler-app - reject
^https?://ugc.moji001.com/sns/json/profile/get_unread - reject

// Youku
.+&duration=\d{2}& - reject
^https?://.+ccode=0902 - reject
^https?://(iyes|(api|hd).mobile).youku.com/(adv|common/v3/hudong/new) _ reject
^https?://ad.api.3g.youku.com - reject
^https?://api.appsdk.soku.com/bg/r - reject
^https?://api.appsdk.soku.com/tag/r - reject
^https?://api.k.sohu.com/api/channel/ad/ - reject
^https?://api.mobile.youku.com/layout/search/hot/word - reject
^https?://m.youku.com/video/libs/iwt.js - reject
^https?://pic.k.sohu.com/img8/wb/tj/ - reject
^https?://r.l.youku.com/rec_at_click - reject
^https?://r1.ykimg.com/\w{30,35}.jpg - reject
^https?://r1.ykimg.com/material/.+/\d{3,4}-\d{4} - reject
^https?://r1.ykimg.com/material/.+/\d{6}/\d{4}/ - reject
^https?://ups.youku.com/(.*)needad=1& https://ups.youku.com/$1needad=0& 302
^https?://vali.cp31.ott.cibntv.net/youku - reject

// Zhihu
^https?://api.zhihu.com/launch - reject
^https?://api.zhihu.com/real_time_launch - reject

// ZhuiShu
^https?://api.zhuishushenqi.com/advert - reject
^https?://api.zhuishushenqi.com/notification/shelfMessage - reject
^https?://api.zhuishushenqi.com/recommend - reject
^https?://api.zhuishushenqi.com/splashes/ios - reject
^https?://mi.gdt.qq.com/gdt_mview.fcg - reject
// Update
^https?://api.zhuishushenqi.com/user/bookshelf-updated - reject
^https?://itunes.apple.com/lookup\?id=575826903 - reject

// IQIYI
^https?://.+/cdn/qiyiapp/\d{8}/.+&dis_dz= - reject
^https?://.+/cdn/qiyiapp/\d{8}/.+&z=\w - reject
^https?://data.video.qiyi.com/videos/other/ - reject

// ChinaRailcom
^https?://211.98.70.226:8080/ - reject
^https?://211.98.71.195:8080/ - reject
^https?://211.98.71.196:8080/ - reject

// Sohu
^https?://agn.aty.sohu.com/m? - reject
^https?://hui.sohu.com/predownload2/? - reject
^https?://m.aty.sohu.com/openload? - reject
^https?://mbl.56.com/config/v1/common/config.union.ios.do? - reject
^https?://mmg.aty.sohu.com/mqs? - reject
^https?://mmg.aty.sohu.com/pvlog? - reject
^https?://photocdn.sohu.com/tvmobilemvms - reject
^https?://s.go.sohu.com/adgtr/\?gbcode= - reject

// Baidu
(ps|sv|offnavi|newvector|ulog\.imap|newloc)(\.map)?\.(baidu|n\.shifen)\.com - reject
^https?://afd.baidu.com/afd/entry - reject
^https?://als.baidu.com/clog/clog - reject
^https?://baichuan.baidu.com/rs/adpmobile/launch - reject
^https?://bj.bcebos.com/fc-feed/0/pic/ - reject
^https?://c.tieba.baidu.com/c/p/img\?src= - reject
^https?://c.tieba.baidu.com/c/s/logtogether\?cmd= - reject
^https?://gss0.bdstatic.com/.+/static/wiseindex/img/bd_red_packet.png - reject
^https?://sm.domobcdn.com/ugc/\w/ - reject
^https?://tb1.bdstatic.com/tb/cms/ngmis/adsense/*.jpg - reject
^https?://tb2.bdstatic.com/tb/mobile/spb/widget/jump - reject

// Baidu Wenku
^https?://wapwenku.baidu.com/view/fengchao/ - reject
^https?://wapwenku.baidu.com/view/fengchaoTwojump/ - reject
^https?://wenku.baidu.com/shifen/ - reject

// 10086
^.+/gmccapp/file/image/preloading/preloading\d{17}.jpg - reject
^https?://\w{2}.10086.cn/gmccapp/file/image/homepage/adver - reject
^https?://\w{2}.10086.cn/upfile/khd/loadingpage/ - reject
^https?://app.10086.cn/group - reject
^https?://app.m.zj.chinamobile.com/zjweb/SpAdvert - reject
^https?://mbusihall.sh.chinamobile.com:\d{4}/upload/v4/img/homePage/ - reject
^https?://wap.js.10086.cn/jsmccClient_img/ecmcServer/images/welcome - reject

// 10000
^https?://image1.chinatelecom-ec.com/images/.+/\d{13}.jpg - reject

// 10010
^https://\w{11,12}.wo.com.cn - reject
^https?://m.client.10010.com/mobileService/activity/get_client_adv - reject
^https?://m.client.10010.com/mobileService/activity/get_startadv - reject
^https?://m1.ad.10010.com/noticeMag/images/imageUpload/2\d{3} - reject
^https?://res.mall.10010.cn/mall/common/js/fa.js?referer= - reject

// Ifeng
^https?://api.newad.ifeng.com/ClientAdversApi1508\?adids= - reject
^https?://exp.3g.ifeng.com/coverAdversApi\?gv=. - reject
^https?://ifengad.3g.ifeng.com/ad/pv.php\?stat= - reject
^https?://iis1.deliver.ifeng.com/getmcode\?adid= - reject

// 163
^https?://mimg.127.net/external/smartpop-manger.min.js - reject

// NetEase Music
^https?://.+/eapi/(ad|log)/ - reject
^https?://.+.127.net/ad - reject
^https?://p\d(c)?.music.126.net/\w+==/10995\d{13}\.jpg$ - reject

// JD
^https?://111.13.29.201/client.action\?functionId=start - reject
^https?://api.m.jd.com/client.action\?functionId=start - reject
^https?://m.360buyimg.com/mobilecms/s640x1136_jfs/ - reject

// JDjr
^https?://ms.jr.jd.com/gw/generic/base/na/m/adInfo - reject

// Taobao
^https?://gw.alicdn.com/tfs/.+-1125-1602 - reject

// Douban
^https?://(\d{1,3}\.){1,3}\d{1,3}/view/dale-online/dale_ad/ - reject
^https?://img\d.doubanio.com/view/dale-online/dale_ad/ - reject

// Doubandianying
^https?://api.douban.com/v2/app_ads/common_ads - reject
^https?://frodo.douban.com/api/v2/movie/banner - reject

// Douyu
^https?://capi.douyucdn.cn/lapi/sign/app(api)?/getinfo\?client_sys=ios - reject
^https?://capi.douyucdn.cn/api/ios_app/check_update - reject
^https?://capi.douyucdn.cn/api/v1/getStartSend?client_sys=ios - reject
^https?://douyucdn.cn/.+/appapi/getinfo - reject
^https?://staticlive.douyucdn.cn/.+/getStartSend - reject
^https?://staticlive.douyucdn.cn/upload/signs/ - reject

// ele
^https?://elemecdn.com/.+/sitemap - reject
^https?://fuss10.elemecdn.com/.+/w/640/h/1136 - reject
^https?://fuss10.elemecdn.com/.+/w/750/h/1334 - reject
^https?://m.elecfans.com/static/js/ad.js - reject
^https?://www1.elecfans.com/www/delivery/ - reject

// ios.win007
^https?://ios.win007.com/Phone/images - reject

// Toutiao
^https?://p\d{1}.pstatp.com/origin - reject
^https?://pb\d{1}.pstatp.com/origin - reject

// Weibo
^https?://api.weibo.cn/2/statuses/longtext_show_batch - reject
^https?://simg.s.weibo.com/.+_ios\d{2}.gif - reject
^https?://u1.img.mobile.sina.cn/public/files/image/\d{3}x\d{2,4} - reject

// Xianyu
^https?://gw.alicdn.com/mt/ - reject
^https?://gw.alicdn.com/tfs/.+\d{3,4}-\d{4} - reject
^https?://gw.alicdn.com/tps/.+\d{3,4}-\d{4} - reject

// Ximalaya
^https?://adse.+\.com\/[a-z]{4}\/loading\?appid= - reject
^https?://adse.ximalaya.com\/ting\/feed\?appid= - reject
^https?://adse.ximalaya.com\/ting\/loading\?appid= - reject
^https?://adse.ximalaya.com\/ting\?appid= - reject
^https?://fdfs.xmcdn.com/group21/M03/E7/3F/ - reject
^https?://fdfs.xmcdn.com/group21/M0A/95/3B/ - reject
^https?://fdfs.xmcdn.com/group22/M00/92/FF/ - reject
^https?://fdfs.xmcdn.com/group22/M05/66/67/ - reject
^https?://fdfs.xmcdn.com/group22/M07/76/54/ - reject
^https?://fdfs.xmcdn.com/group23/M01/63/F1/ - reject
^https?://fdfs.xmcdn.com/group23/M04/E5/F6/ - reject
^https?://fdfs.xmcdn.com/group23/M07/81/F6/ - reject
^https?://fdfs.xmcdn.com/group23/M0A/75/AA/ - reject
^https?://fdfs.xmcdn.com/group24/M03/E6/09/ - reject
^https?://fdfs.xmcdn.com/group24/M07/C4/3D/ - reject
^https?://fdfs.xmcdn.com/group25/M05/92/D1/ - reject

// Zhangyue
^https?://book.img.ireader.com/group6/M00 - reject

// Youdao
^https?://dict.youdao.com/infoline/style\?client= - reject
^https?://gorgon.youdao.com/gorgon/request.s\?v= - reject
^https?://impservice.dictapp.youdao.com/imp/request.s\?req= - reject

// Youdao Translation
^https?://dict.youdao.com/infoline/style\?client=translator&apiversion=3.0&lastId=0&style=fanyiguantuijian - reject
^https?://oimagec2.ydstatic.com/image\?id=.+&product=adpublish - reject

// Yiche
^https?://api.ycapp.yiche.com/appnews/getadlist - reject
^https?://api.ycapp.yiche.com/yicheapp/getadlist - reject
^https?://api.ycapp.yiche.com/yicheapp/getappads/ - reject
^https?://cheyouapi.ycapp.yiche.com/appforum/getusermessagecount - reject

// Youtube
^https?://m.youtube.com/_get_ads - reject
^https?://pagead2.googlesyndication.com/pagead/ - reject
^https?://s0.2mdn.net/ads/ - reject
^https?://stats.tubemogul.com/stats/ - reject

// 0013
^https?://.+0013.+/upload/activity/app_flash_screen_ - reject

// Tianshan live
^http?://www.tsytv.com.cn/api/app/ios/ads - reject

// KFC
^https?://res.kfc.com.cn/advertisement/ - reject

// Shouyue auto
^https?://img.yun.01zhuanche.com/statics/app/advertisement/.+-750-1334 - reject

// Shenzhou auto
^https?://img01.10101111cdn.com/adpos/share/ - reject

// Flow cbb
^https?://bank.wo.cn/v9/getstartpage - reject

// Haiyan
^https?://img.ihytv.com/material/adv/img/ - reject

// Meituan Waimai
^https?://p\d{1}.meituan.net/wmbanner/ - reject

// QQ Pim
^https?://mmgr.gtimg.com/gjsmall/qqpim/public/ios/splash/.+/\d{4}_\d{4} - reject

// Jiemian News
^https?://img.jiemian.com/ads/ - reject

// Auto home
^https?://adproxy.autohome.com.cn/AdvertiseService/ - reject
^https?://app2.autoimg.cn/appdfs/ - reject

// Qidiandushu
^https?://mage.if.qidian.com/Atom.axd/Api/Client/GetConfIOS - reject

// DangDang
^https?://img\d{2}.ddimg.cn/upload_img/.+/670x900 - reject
^https?://img\d{2}.ddimg.cn/upload_img/.+/750x1064 - reject
^https?://mapi.dangdang.com/index.php\?action=init&user_client=iphone - reject

// Guotai
^https?://dl.app.gtja.com/operation/config/startupConfig.json - reject

// Laifeng Live
^https?://api.laifeng.com/v1/start/ads - reject

// Douyin
^https?://aweme.snssdk.com/aweme/v1/play/\?video_id=.+&line=0&ratio=default - reject
^https?://aweme.snssdk.com/aweme/v1/screen/ad/ - reject

// Xiachufang
^https?://api.xiachufang.com/v2/ad/ - reject

// Facebook
^https?://connect.facebook.net/en_US/fbadnw.js - reject

// Kuaidi100
^https?://qzonestyle.gtimg.cn/qzone/biz/gdt/mob/sdk/ios/v2/ - reject
^https?://cdn.kuaidi100.com/images/open/appads - reject
^https?://p.kuaidi100.com/mobile/mainapi.do - reject

// MiFit
^https?://api-mifit.huami.com/.+/app/startpages.json - reject
^https?://api-mifit.huami.com/.+/soc/well/list/community - reject
^https?://api-mifit.huami.com/discovery/mi/discovery/homepage_ad - reject
^https?://api-mifit.huami.com/discovery/mi/discovery/sport_ad - reject
^https?://api-mifit-cn.huami.com/.+/app/startpages.json - reject
^https?://api-mifit-cn.huami.com/.+/soc/well/list/community - reject
^https?://api-mifit-cn.huami.com/discovery/mi/discovery/homepage_ad - reject
^https?://api-mifit-cn.huami.com/discovery/mi/discovery/sport_ad - reject
^https?://hm.xiaomi.com/.+/app/startpages.json - reject
^https?://hm.xiaomi.com/.+/soc/well/list/community - reject
^https?://hm.xiaomi.com/discovery/mi/discovery/homepage_ad - reject
^https?://hm.xiaomi.com/discovery/mi/discovery/sport_ad - reject

// Weico
^https?://.+/portal.php\?a=get_ads - reject
^https?://.+/portal.php\?c=duiba - reject
^https?://.+/portal.php\?a=get_coopen_ads - reject
^https?://weicoapi.weico.cc/img/ad/ - reject
^https?://.+/weico4ad/ad/ - reject

// StarFans
^https?://g.cdn.pengpengla.com/starfantuan/boot-screen-info/ - reject

// Discuz
^https?://discuz.gtimg.cn/cloud/scripts/discuz_tips.js - reject

// Guopan
^https?://sapi.guopan.cn/get_buildin_ad - reject

// Jiakaobaodian
^https?://789.kakamobi.cn/.+adver - reject
^https?://smart.789.image.mucang.cn/advert - reject

// Zhaoshang cbb
^https?://pic1cdn.cmbchina.com/appinitads/ - reject

// Cmblife
^https?://mlife.cmbchina.com/ClientFace(Service)?/getAdvertisement.json - reject
^https?://mlife.cmbchina.com/ClientFace(Service)?/preCacheAdvertise.json - reject

// 163 News
^https?://g1.163.com/madfeedback - reject
^https?://img1.126.net/.+dpi=6401136 - reject
^https?://img1.126.net/channel14/ - reject
^https?://nex.163.com/q - reject

// ElongClient
^http?://123.59.30.10/adv/advInfos - reject

// AiRav
^https?://bbs.airav.cc/data/.+.jpg - reject
^https?://image.airav.cc/AirADPic/.+.gif - reject
^https?://m.airav.cc/images/Mobile_popout_cn.gif - reject

// IfengNews
^https?://c1.ifengimg.com/.+_w1080_h1410.jpg - reject

// Tencent guanjia
^https?://mmgr.gtimg.com/gjsmall/qiantu/upload/ - reject

// Peanut
^https?://cmsapi.wifi8.com/v1/emptyAd/info - reject
^https?://cmsapi.wifi8.com/v2/adNew/config - reject
^https?://cmsfile.wifi8.com/uploads/png/ - reject

// Tencent live
^https?://bla.gtimg.com/qqlive/\d{6}.+.png - reject
^https?://lives.l.qq.com/livemsg\?sdtfrom= - reject
^https?://splashqqlive.gtimg.com/website/\d{6} - reject

// AppSo
^https?://sso.ifanr.com/jiong/IOS/appso/splash/ - reject

// Ydstatic
^https?://oimage\w\d.ydstatic.com/image\?.+=adpublish - reject

// Baiduyun
^https?://issuecdn.baidupcs.com/issue/netdisk/guanggao/ - reject

// Lanrentingshu
^https?://118.178.214.118/yyting/advertclient/ClientAdvertList.action - reject
^https?://dapis.mting.info/yyting/advertclient/ClientAdvertList.action - reject

// 91 Porn
^https?://192.133.+.mp4$ - reject

// Panda TV
^https://static.api.m.panda.tv/index.php\?method=clientconf.firstscreen&__version=(play_cnmb|(\d+\.){0,3}\d+)&__plat=ios&__channel=appstore - reject

// Weihou
^https?://api.app.vhall.com/v5/000/webinar/launch - reject

// ttlrs
^https?://img.53site.com/Werewolf/AD/ - reject
^https?://werewolf.53site.com/Werewolf/.+/getAdvertise.php - reject

// Apple
^https?://a.applovin.com/.+/ad - reject

// Weiyi
^https?://kano.guahao.cn/.+\?resize=\w{3}-\w{4} - reject

// Chelaile
^https?://pic1.chelaile.net.cn/adv/ - reject

// Jiankang 160
^https?://images.91160.com/primary/ - reject

// 1qianbao
^https?://d.1qianbao.com/youqian/ads/ - reject

// HuomaoTV
^https?://api.huomao.com/channels/loginAd - reject

// QQ Music
^https?://.+/music/common/upload/t_splash_info - reject
^https?://.+/tips/fcgi-bin/fcg_get_advert - reject
^https?://y.gtimg.cn/music/common/upload/targeted_ads - reject

// Kuaikanmanhua
^https?://api.kkmh.com/v3/ad/show - reject
^https?://api.kkmh.com/v3/ad/upload - reject
^https?://api.kkmh.com/v1/advertisement/opening/show - reject

// Hupu
^https?://i1.hoopchina.com.cn/blogfile/.+_\w{3}x\w{4} - reject

// Jike
^https?://app.jike.ruguoapp.com/.+/configs/appGet - reject

// Letv
^https?://.+/letv-gug/ - reject

// Mango TV
^https?://pcvideoyd.titan.mgtv.com/pb/ - reject

// Kecheng Gezi
^https?://classbox2.kechenggezi.com/api/v1/sponge/pull\?request_time= - reject

// Dangdang Yuedu
^https?://e.dangdang.com/media/api.+\?action=getDeviceStartPage - reject

// Smzdm
^https?://api.smzdm.com/v1/util/loading\?f=iphone&pic_size=1080_1920 - reject

// Feichangzhun
^https?://app.veryzhun.com/ad/admob - reject

// Fenghuangxiu
^https?://api.fengshows.com/api/launchAD - reject

// RR TV
^https?://img.rr.tv/banner/.+.jpg - reject

// Laosiji
^https?://api.laosiji.com/user/startpage/ - reject

// Tonghuashun Pro
^https?://adm.10jqka.com.cn/interface/getads\.php - reject

// Hangzhoushi Shiminka
^https?://smkmp.96225.com/smkcenter/ad/1.0.0/adBanner - reject

// Maiduidui
^https?://api.mddcloud.com.cn/api/ad/getClassAd\.action - reject
^https?://api.mddcloud.com.cn/api/advert/getHomepage\.action - reject

// Daoyu
^https?://daoyu.sdo.com/api/userCommon/getAppStartAd - reject

// Jingdongdaojia
^https?://.+/client?functionId=lauch/lauchConfig&appName=paidaojia - reject

// Keep
^https?://static1.keepcdn.com/.+750x1080 - reject

// iSafePlay
^https?://aarkissltrial.secure2.footprint.net/v1/ads - reject
^https?://rm.aarki.net/v1/ads - reject

// Super kechengbiao
^https?://182.92.244.70/d/json/1.1 - reject

// Other
^.+allOne.php\?ad_name=main_splash_ios - reject
^.+nga.cn.+\bhome.+\b=ad - reject
^.+resource=article\/recommend\&accessToken= - reject
^https?://[^\s]+/ad(s|v)?(/|.js) - reject
^https?://113.200.76.*:16420/sxtd.bike2.01/getkey.do - reject
^https?://creatives.ftimg.net/ads - reject
^https?://dd.iask.cn/ddd/adAudit - reject
^https?://g.tbcdn.cn/mtb/ - reject
^https?://gorgon.youdao.com\/gorgon\/request\.s\?v= - reject
^https?://huichuan.sm.cn/jsad? - reject
^https?://impservice.youdao.com\/imp\/request\.s\?req= - reject
^https?://iphone265g.com/templates/iphone/bottomAd.js - reject
^https?://m.+.china.com.cn/statics/sdmobile/js/ad - reject
^https?://m.+.china.com.cn/statics/sdmobile/js/mobile.advert.js - reject
^https?://m.+.china.com.cn/statics/sdmobile/js/mobileshare.js - reject
^https?://m.elecfans.com/static/js/ad.js - reject
^https?://mi.gdt.qq.com\/gdt_mview.fcg\?posid= - reject
^https?://nga\.cn.+\bhome.+\b=ad - reject
^https?://player.hoge.cn/advertisement.swf - reject
^https?://ress.dxpmedia.com/appicast/ - reject
^https?://s3.pstatp.com/inapp/TTAdblock.css - reject
^https?://statc.mytuner.mobi/media/banners/ - reject
^https?://static.cnbetacdn.com/assets/adv - reject
^https?://static.iask.cn/m-v20161228/js/common/adAudit.min.js - reject
^https?://v.17173.com/api/Allyes/ - reject
^https?://wmedia-track.uc.cn - reject
^https?://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fcreatives.ftimg.net%2Fads* - reject
^https?://www.inoreader.com/adv/ - reject
^https?://www.lianbijr.com/adPage/ - reject




// Google_Service_HTTPS_Jump
^https?://(www.)?g.cn https://www.google.com 302
^https?://(www.)?google.cn https://www.google.com 302


// Anti_ISP_JD_Hijack
^https?://coupon.m.jd.com/ https://coupon.m.jd.com/ 302
^https?://h5.m.jd.com/ https://h5.m.jd.com/ 302
^https?://item.m.jd.com/ https://item.m.jd.com/ 302
^https?://m.jd.com https://m.jd.com 302
^https?://newcz.m.jd.com/ https://newcz.m.jd.com/ 302
^https?://p.m.jd.com/ https://p.m.jd.com/ 302
^https?://so.m.jd.com/ https://so.m.jd.com/ 302
^https?://union.click.jd.com/jda? http://union.click.jd.com/jda?adblock= header
^https?://union.click.jd.com/sem.php? http://union.click.jd.com/sem.php?adblock= header
^https?://www.jd.com/ https://www.jd.com/ 302

// Anti_ISP_Taobao_Hijack
^https?://m.taobao.com/ https://m.taobao.com/ 302

// Wiki
^https?://.+.(m.)?wikipedia.org/wiki http://www.wikiwand.com/en 302
^https?://zh.(m.)?wikipedia.org/(zh-hans|zh-sg|zh-cn|zh(?=/)) http://www.wikiwand.com/zh 302
^https?://zh.(m.)?wikipedia.org/zh-[a-zA-Z]{2,} http://www.wikiwand.com/zh-hant 302

// Other
^https?://cfg.m.ttkvod.com/mobile/ttk_mobile_1.8.txt http://ogtre5vp0.bkt.clouddn.com/Static/TXT/ttk_mobile_1.8.txt header
^https?://cnzz.com/ http://ogtre5vp0.bkt.clouddn.com/background.png? header
^https?://issuecdn.baidupcs.com/issue/netdisk/guanggao/ http://ogtre5vp0.bkt.clouddn.com/background.png? header
^https?://m.qu.la/stylewap/js/wap.js http://ogtre5vp0.bkt.clouddn.com/qu_la_wap.js 302
^https?://m.yhd.com/1/? http://m.yhd.com/1/?adbock= 302
^https?://n.mark.letv.com/m3u8api/ http://burpsuite.applinzi.com/Interface header
^https?://sqimg.qq.com/ https://sqimg.qq.com/ 302
^https?://static.m.ttkvod.com/static_cahce/index/index.txt http://ogtre5vp0.bkt.clouddn.com/Static/TXT/index.txt header
^https?://www.iqshw.com/d/js/m http://burpsuite.applinzi.com/Interface header
^https?://www.iqshw.com/d/js/m http://rewrite.websocket.site:10/Other/Static/JS/Package.js? header



[Header Rewrite]
^*.bdimg.com header-del Referer
^*.qpic.cn header-replace User-Agent WeChat/6.5.22.32 CFNetwork/889.9 Darwin/17.2.0
^*.qpic.cn header-del Referer
^*.ph.126.net header-del Referer
^*.zhimg.com header-del Referer
^*.cnbetacdn.com header-del Referer
^*.zhiding.cn header-del Referer
^*.c114.com.cn header-del Referer
^http://www.biquge.com.tw header-del Cookie
^https?://www.zhihu.com/question/ header-replace User-Agent Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.45 Safari/537.36



[SSID Setting]




© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About
Press h to open a hovercard with more details.