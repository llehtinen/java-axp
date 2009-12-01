(function(){var $gwt_version = "1.7.1";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'scrumzilla',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var jm='',nc='\n ',hb=' ',nm='"',yc='#',cf='$',nk="'; please report this bug to the GWT team",um='(',ib='(null handle)',xj=')',Fm='): ',jh=',',li=', ',jf=', Size: ',rm='-',qm='-9223372036854775808',od='/',om='/ by zero',pm='0',oc='0px',ue='20px',wi=':',El=': ',ef='=',dd='?',u='@',ph='AbsolutePanel',fh='AbstractCollection',wk='AbstractHashMap',xk='AbstractHashMap$EntrySet',zk='AbstractHashMap$EntrySetIterator',Bk='AbstractHashMap$MapEntryNull',Ck='AbstractHashMap$MapEntryString',Fh='AbstractList',Dk='AbstractList$IteratorImpl',vk='AbstractMap',Ek='AbstractMap$1',Fk='AbstractMap$1$1',Ak='AbstractMapEntry',gh='AbstractSet',ze='Add',xe='Add Story',ye='Add Task',df='Add not supported on this collection',ff='Add not supported on this list',oj='AddStoryPanel',pj='AddStoryPanel$1',qj='AddStoryPanel$2',rj='AddStoryPanel$3',sj='AddStoryPanel$4',sf='An event type',uf='Animation',xf='Animation$1',pf='Animation;',gk='ArithmeticException',bi='ArrayList',ik='ArrayStoreException',gf='BackgroundImageCache',jk='Boolean',sh='Button',rh='ButtonBase',ad='CENTER',pe='CLOSED',fe='CSS1Compat',ve='Cancel',nb='Cannot set a new parent without first clearing the old parent',th='CellPanel',lk='Class',mk='ClassCastException',kg='ClickEvent',rg='CloseEvent',xi='CommandCanceledException',yi='CommandExecutor',Ai='CommandExecutor$1',Bi='CommandExecutor$2',zi='CommandExecutor$CircularIterator',oh='ComplexPanel',wh='Composite',yb='Composite.initWidget() may only be called once.',gc='DIV',ag='DOMImpl',cg='DOMImplIE6',bg='DOMImplTrident',gn='DOMMouseScroll',sg='DefaultHandlerRegistration',te='Description:',jg='DomEvent',mg='DomEvent$Type',ok='Double',Ag='Enum',ig='Event type',Ci='Event$NativePreviewEvent',zf='Exception',qh='FocusWidget',zg='Gadget',gg='GwtEvent',lg='GwtEvent$Type',ug='HandlerManager',wg='HandlerManager$1',xg='HandlerManager$2',vg='HandlerManager$HandlerRegistry',Ch='HasHorizontalAlignment$HorizontalAlignmentConstant',Dh='HasVerticalAlignment$VerticalAlignmentConstant',al='HashMap',bl='HashSet',Eh='HorizontalPanel',nd='INPUT',ne='IN_PROGRESS',pk='IllegalArgumentException',qk='IllegalStateException',hf='Index: ',hk='IndexOutOfBoundsException',Dg='JSONArray',Fg='JSONBoolean',ah='JSONException',bh='JSONNull',ch='JSONNumber',dh='JSONObject',hh='JSONString',Cg='JSONValue',Cf='JavaScriptException',Ef='JavaScriptObject$',ng='KeyEvent',og='KeyPressEvent',Bh='Label',se='Local Task',cl='MapEntryImpl',ci='MenuBar',di='MenuBar_MenuBarImages_generatedBundle',ei='MenuItem',ej='ModelChangedEvent',fl='NoSuchElementException',fb='Null widget handle. If you are creating a composite, ensure that initWidget() has been called.',rk='NullPointerException',kk='Number',bd='ONE_WAY_CORNER',rf='Object',uk='Object;',we='Ok',nh='Panel',yh='PopupPanel',ji='PopupPanel$1',ki='PopupPanel$2',gi='PopupPanel$AnimationType',hi='PopupPanel$ResizeAnimation',ii='PopupPanel$ResizeAnimation$1',pg='PrivateMap',cd='ROLL_DOWN',Ce='Remove Story',mi='RootPanel',oi='RootPanel$1',ni='RootPanel$DefaultRootPanel',Af='RuntimeException',cj='ScrumzillaController',kj='ScrumzillaLocalTaskEditingUI',lj='ScrumzillaLocalTaskTypeContribution',fk='ScrumzillaTaskTypeRegistry',tj='ScrumzillaUI',ak='ScrumzillaWaveGadget',bk='ScrumzillaWaveGadgetGadgetImpl',dk='ScrumzillaWaveStateUpdateHandler',jb="Should only call onAttach when the widget is detached from the browser's document",kb="Should only call onDetach when the widget is attached to the browser's document",Ae='Simple Task',xh='SimplePanel',zc='SimplePanel can only contain one child widget',pi='SimplePanel$1',hl='StateUpdateEvent',gj='Story',uj='StoryPanel',vj='StoryPanel$1',wj='StoryPanel$2',yj='StoryPanel$3',zj='StoryPanel$4',Aj='StoryPanel$5',bb='String',eg='String;',sk='StringBuffer',gb='Style names cannot be empty',me='TODO',hj='Task',de='Task Type Already Registered',ke='Task description not nullable',le='Task state not nullable',ij='Task$TaskState',Bj='TaskPanel',Cj='TaskPanel$1',ri='TextArea',si='TextBox',qi='TextBoxBase',lb="This widget's parent does not implement HasWidgets",yf='Throwable',wf='Timer',Di='Timer$1',lh='UIObject',je='Unassigned',ck="Unexpected typeof result '",tk='UnsupportedOperationException',gl='Vector',ti='VerticalPanel',oe='WORK_COMPLETED',il='WaveFeature',jl='WaveFeature$WaveEventBus',Ej='WaveGadget',mh='Widget',Ah='Widget;',ui='WidgetCollection',vi='WidgetCollection$WidgetIterator',Ei='Window$ClosingEvent',Fi='Window$WindowHandlers',De='X',Eg='[',fi='[C',of='[Lcom.google.gwt.animation.client.',zh='[Lcom.google.gwt.user.client.ui.',dg='[Ljava.lang.',ih='[[D',he='[]',bf='\\',lm='\\"',mm='\\\\',ql='\\b',vl='\\f',sl='\\n',wl='\\r',rl='\\t',yk='\\u0000',el='\\u0001',kl='\\u0002',ll='\\u0003',ml='\\u0004',nl='\\u0005',ol='\\u0006',pl='\\u0007',ul='\\u000B',xl='\\u000E',yl='\\u000F',zl='\\u0010',Al='\\u0011',Bl='\\u0012',Cl='\\u0013',Dl='\\u0014',Fl='\\u0015',am='\\u0016',bm='\\u0017',cm='\\u0018',dm='\\u0019',em='\\u001A',fm='\\u001B',gm='\\u001C',hm='\\u001D',im='\\u001E',km='\\u001F',vh=']',Fc='_',tm='__gwt_initWindowCloseHandler',gd='absolute',bc='align',yd='alpha(opacity=0)',sc='aria-activedescendant',vm='blur',Bb='bottom',rb='button',Fb='cellPadding',Eb='cellSpacing',zb='center',wm='change',af='class ',eb='className',ud='clear.cache.gif',Df='click',ed='clip',sm='cmd cannot be null',uc='colSpan',tf='com.google.gwt.animation.client.',Bf='com.google.gwt.core.client.',Ff='com.google.gwt.dom.client.',hg='com.google.gwt.event.dom.client.',qg='com.google.gwt.event.logical.shared.',fg='com.google.gwt.event.shared.',yg='com.google.gwt.gadgets.client.',Bg='com.google.gwt.json.client.',vf='com.google.gwt.user.client.',kh='com.google.gwt.user.client.ui.',ek='com.scrumzilla.client.',aj='com.scrumzilla.client.controller.',dj='com.scrumzilla.client.events.',fj='com.scrumzilla.client.model.',jj='com.scrumzilla.client.taskcontribution.local.',nj='com.scrumzilla.client.ui.',Fj='com.scrumzilla.client.wave.',nf='com.scrumzilla.client.wave.ScrumzillaWaveGadget',hn='contextmenu',xm='dblclick',ec='div',mj='empty argument',en='error',Ee='false',ym='focus',cb='function',db='function ',sb='gwt-Button',fc='gwt-Label',jc='gwt-MenuBar',vc='gwt-MenuItem',Ac='gwt-PopupPanel',md='gwt-TextArea',qd='gwt-TextBox',Be='gwt-uid-',Ed='height',dl='hidden',pc='hideFocus',lc='horizontal',td='http://',rd='https',sd='https://',tc='id',vd='iframe',Fe='interface ',qf='java.lang.',eh='java.util.',wd="javascript:''",zm='keydown',tg='keypress',Am='keyup',ob='left',Bm='load',Cm='losecapture',ic='menubar',wc='menuitem',xb='message',Cb='middle',lf='moduleStartup',Dm='mousedown',Em='mousemove',an='mouseout',bn='mouseover',cn='mouseup',fn='mousewheel',tl='must be positive',mb='name',xd='no',w='null',v='offsetHeight',ee='offsetWidth',mf='onModuleLoadStart',E='onblur',jn='onclick',ab='oncontextmenu',F='ondblclick',D='onfocus',A='onkeydown',B='onkeypress',C='onkeyup',kn='onmousedown',y='onmousemove',x='onmouseup',z='onmousewheel',Dj='org.cobogw.gwt.waveapi.gadget.client.',mc='outline',uh='overflow',Bc='popupContent',qb='position',Cc='px',jd='px)',id='px, ',hd='rect(',kd='rect(0px, 0px, 0px, 0px)',fd='rect(auto, auto, auto, auto)',Ab='right',hc='role',qe='rtl',zd='script',dn='scroll',ce='scrumzilla.local',ge='scrumzilla.state.StoryList',ie='scrumzilla.state.TaskList',xc='selected',kf='startup',rc='subMenuIcon-selected',tb='submit',vb='table',wb='tbody',ac='td',pd='text',ld='textarea',Fd='this.__popup.offsetHeight',Ad='this.__popup.offsetLeft',Bd='this.__popup.offsetTop',Dd='this.__popup.offsetWidth',be='this.__popup.style.zIndex',cc='toString',pb='top',Db='tr',qc='true',ub='type',re='value',kc='vertical',dc='verticalAlign',Dc='visibility',Ec='visible',Cd='width',ae='zIndex',ai='{',bj='}';var _,ln=[0,-9223372036854775808],mn=[16777216,0],nn=[4294967295,9223372032559808512];function F3(a){return this===(a==null?null:a)}
function a4(){return pE}
function b4(){return this.$H||(this.$H=++hp)}
function c4(){return (this.tM==m_||this.tI==2?this.gC():cB).b+u+l3(this.tM==m_||this.tI==2?this.hC():this.$H||(this.$H=++hp),4)}
function D3(){}
_=D3.prototype={};_.eQ=F3;_.gC=a4;_.hC=b4;_.tS=c4;_.toString=function(){return this.tS()};_.tM=m_;_.tI=1;function vn(a){if(!a.f){return}o9(Bn,a);xn(a);a.h=false;a.f=false}
function xn(a){if(a.h){kQ(a)}}
function yn(c,a,b){vn(c);c.f=true;c.e=a;c.g=b;if(zn(c,(new Date()).getTime())){return}if(!Bn){Bn=h9(new g9());An=(rn(),yJ(),new pn())}j9(Bn,c);if(Bn.b==1){AJ(An,25)}}
function zn(d,a){var b,c;b=a>=d.g+d.e;if(d.h&&!b){c=(a-d.g)/d.e;nQ(d,(1+Math.cos(3.141592653589793+c*3.141592653589793))/2);return false}if(!d.h&&a>=d.g){d.h=true;d.b=parseInt(d.a.o[v])||0;d.c=parseInt(d.a.o[ee])||0;d.a.o.style[uh]=dl;nQ(d,(1+Math.cos(3.141592653589793))/2)}if(b){kQ(d);d.h=false;d.f=false;return true}return false}
function Cn(){return aB}
function Dn(){var a,b,c,d,e,f;e=gA(nF,98,6,Bn.b,0);e=pA(p9(Bn,e),2);f=(new Date()).getTime();for(b=e,c=0,d=b.length;c<d;++c){a=b[c];if(a.f&&zn(a,f)){o9(Bn,a)}}if(Bn.b>0){AJ(An,25)}}
function on(){}
_=on.prototype=new D3();_.gC=Cn;_.tI=3;_.e=-1;_.f=false;_.g=-1;_.h=false;var An=null,Bn=null;function yJ(){yJ=m_;aK=h9(new g9());oK(new tJ())}
function xJ(a){if(a.b){$wnd.clearInterval(a.c)}else{$wnd.clearTimeout(a.c)}o9(aK,a)}
function zJ(a){if(!a.b){o9(aK,a)}a.qb()}
function AJ(b,a){if(a<=0){throw E2(new D2(),tl)}xJ(b);b.b=false;b.c=DJ(b,a);j9(aK,b)}
function DJ(b,a){return $wnd.setTimeout(function(){b.y()},a)}
function EJ(){zJ(this)}
function FJ(){return eC}
function sJ(){}
_=sJ.prototype=new D3();_.y=EJ;_.gC=FJ;_.tI=4;_.b=false;_.c=0;var aK;function rn(){rn=m_;yJ()}
function sn(){return FA}
function tn(){Dn()}
function pn(){}
_=pn.prototype=new sJ();_.gC=sn;_.qb=tn;_.tI=5;function q5(c){var a,b;a=c.gC().b;b=c.C();if(b!=null){return a+El+b}else{return a}}
function r5(){return tE}
function s5(){return this.e}
function t5(){return q5(this)}
function o5(){}
_=o5.prototype=new D3();_.gC=r5;_.C=s5;_.tS=t5;_.tI=6;_.e=null;function C2(){return jE}
function A2(){}
_=A2.prototype=new o5();_.gC=C2;_.tI=7;function e4(b,a){b.e=a;return b}
function g4(){return qE}
function d4(){}
_=d4.prototype=new A2();_.gC=g4;_.tI=8;function ho(b,a){b.b=a;return b}
function ko(){return bB}
function mo(a){if(a!=null&&(a.tM!=m_&&a.tI!=2)){return lo(oA(a))}else{return a+jm}}
function lo(a){return a==null?null:a.message}
function no(){if(this.c==null){this.d=po(this.b);this.a=mo(this.b);this.c=um+this.d+Fm+this.a+ro(this.b)}return this.c}
function po(a){if(a==null){return w}else if(a!=null&&(a.tM!=m_&&a.tI!=2)){return oo(oA(a))}else if(a!=null&&nA(a.tI,1)){return bb}else{return (a.tM==m_||a.tI==2?a.gC():cB).b}}
function oo(a){return a==null?null:a.name}
function ro(a){return a!=null&&(a.tM!=m_&&a.tI!=2)?qo(oA(a)):jm}
function qo(b){var c=jm;try{for(prop in b){if(prop!=mb&&(prop!=xb&&prop!=cc)){try{c+=nc+prop+El+b[prop]}catch(a){}}}}catch(a){}return c}
function go(){}
_=go.prototype=new d4();_.gC=ko;_.C=no;_.tI=9;_.a=null;_.b=null;_.c=null;_.d=null;function Ao(b,a){return b.tM==m_||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function Eo(a){return a.tM==m_||a.tI==2?a.hC():a.$H||(a.$H=++hp)}
function dp(a){return a.$H||(a.$H=++hp)}
function ep(){var b=$doc.location.href;var a=b.indexOf(yc);if(a!=-1)b=b.substring(0,a);a=b.indexOf(dd);if(a!=-1)b=b.substring(0,a);a=b.lastIndexOf(od);if(a!=-1)b=b.substring(0,a);return b.length>0?b+od:jm}
var hp=0;function lp(a,b){a[a.explicitLength++]=b==null?w:b}
function kp(a,c){a[a.explicitLength++]=c}
function pp(a){var c,b;c=(b=a.join(jm),a.length=a.explicitLength=0,b);a[a.explicitLength++]=c;return c}
function mq(){mq=m_;up();new sp()}
function pq(a,c){var b;b=a.createElement(zd);b.text=c;return b}
function wq(b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a}
function xq(a){return xp((mq(),A4(a.compatMode,fe)?a.documentElement:a.body))}
function zq(a){return (A4(a.compatMode,fe)?a.documentElement:a.body).scrollTop||0}
function Bq(){return fB}
function rp(){}
_=rp.prototype=new D3();_.gC=Bq;_.tI=0;function Bp(){Bp=m_;mq()}
function aq(a){return (A4(a.compatMode,fe)?a.documentElement:a.body).clientLeft}
function bq(a){return (A4(a.compatMode,fe)?a.documentElement:a.body).clientTop}
function cq(b){try{return b.getBoundingClientRect().left}catch(a){return 0}}
function dq(b){try{return b.getBoundingClientRect().top}catch(a){return 0}}
function hq(b,a){return b===a||b.contains(a)}
function lq(){return eB}
function Ap(){}
_=Ap.prototype=new rp();_.gC=lq;_.tI=0;var kq=null;function up(){up=m_;Bp()}
function vp(b){var a;a=b.ownerDocument;return BA(Math.floor(cq(b)/yp(a)+xp((mq(),A4(a.compatMode,fe)?a.documentElement:a.body))))}
function wp(b){var a;a=b.ownerDocument;return BA(Math.floor(dq(b)/yp(a)+((A4(a.compatMode,fe)?a.documentElement:a.body).scrollTop||0)))}
function xp(a){if(a.currentStyle.direction==qe){return (a.scrollLeft||0)-((a.scrollWidth||0)-a.clientWidth)}return a.scrollLeft||0}
function yp(b){var a;if(A4(b.compatMode,fe)){return 1}else{a=b.body.offsetWidth||0;return a==0?1:~~(((mq(),b.body).parentElement.offsetWidth||0)/a)}}
function zp(){return dB}
function sp(){}
_=sp.prototype=new Ap();_.gC=zp;_.tI=0;function hr(a){if(!a.gwt_uid){a.gwt_uid=1}return Be+a.gwt_uid++}
function lr(a){return (A4(a.compatMode,fe)?a.documentElement:a.body).clientHeight}
function mr(a){return (A4(a.compatMode,fe)?a.documentElement:a.body).clientWidth}
function zr(b,a){return b[a]==null?null:String(b[a])}
function es(a){if(!!a&&!!a.nodeType){return !!a&&a.nodeType==1}return false}
function gs(){gs=m_;js()}
function is(k,i,j){i.src=j;if(i.complete){return}i.__kids=[];i.__pendingSrc=j;k[j]=i;var g=i.onload,f=i.onerror,e=i.onabort;function h(c){var d=i.__kids;i.__cleanup();window.setTimeout(function(){for(var a=0;a<d.length;++a){var b=d[a];if(b.__pendingSrc==j){b.src=j;b.__pendingSrc=null}}},0);c&&c.call(i)}
i.onload=function(){h(g)};i.onerror=function(){h(f)};i.onabort=function(){h(e)};i.__cleanup=function(){i.onload=g;i.onerror=f;i.onabort=e;i.__cleanup=i.__pendingSrc=i.__kids=null;delete k[j]}}
function js(){try{$doc.execCommand(gf,false,true)}catch(a){}}
function ns(e,b){var d=e.__kids;for(var c=0,a=d.length;c<a;++c){if(d[c]===b){d.splice(c,1);b.__pendingSrc=null;return}}}
function os(f,c){var e=c.__pendingSrc;var d=c.__kids;c.__cleanup();if(c=d[0]){c.__pendingSrc=null;is(f,c,e);if(c.__pendingSrc){d.splice(0,1);c.__kids=d}else{for(var b=1,a=d.length;b<a;++b){d[b].src=e;d[b].__pendingSrc=null}}}}
function ps(a,c){gs();var b,d;if(A4(a.__pendingSrc||a.src,c)){return}if(!qs){qs={}}b=a.__pendingSrc;if(b!=null){d=qs[b];if(d==a){os(qs,d)}else{ns(d,a)}}d=qs[c];if(!d){is(qs,a,c)}else{d.__kids.push(a);a.__pendingSrc=d.__pendingSrc}}
var qs=null;function zv(){return pB}
function Av(){this.d=false;this.e=null}
function Bv(){return sf}
function pv(){}
_=pv.prototype=new D3();_.gC=zv;_.pb=Av;_.tS=Bv;_.tI=0;_.d=false;_.e=null;function ut(d,c,e){var a,b,f;if(wt){f=pA(wt.a[(mq(),d).type],3);if(f){a=f.a.a;b=f.a.b;f.a.a=d;f.a.b=e;bU(c,f.a);f.a.a=a;f.a.b=b}}}
function vt(){return iB}
function mt(){}
_=mt.prototype=new pv();_.gC=vt;_.tI=0;_.a=null;_.b=null;var wt=null;function gt(){gt=m_;ht=ot(new nt(),Df,(gt(),new et()))}
function it(a){a.jb(this)}
function jt(){return ht}
function kt(){return gB}
function et(){}
_=et.prototype=new mt();_.s=it;_.z=jt;_.gC=kt;_.tI=0;var ht;function rv(a){a.c=++vv;return a}
function tv(){return oB}
function uv(){return this.c}
function wv(){return ig}
function qv(){}
_=qv.prototype=new D3();_.gC=tv;_.hC=uv;_.tS=wv;_.tI=0;_.c=0;var vv=0;function ot(c,a,b){c.c=++vv;c.a=b;if(!wt){wt=zu(new uu())}wt.a[a]=c;c.b=a;return c}
function qt(){return hB}
function nt(){}
_=nt.prototype=new qv();_.gC=qt;_.tI=10;_.a=null;_.b=null;function ku(){return jB}
function iu(){}
_=iu.prototype=new mt();_.gC=ku;_.tI=0;function nu(){nu=m_;pu=ot(new nt(),tg,(nu(),new lu()))}
function ou(a){return a.charCode||a.keyCode}
function qu(a){CY(a,this)}
function ru(){return pu}
function su(){return kB}
function lu(){}
_=lu.prototype=new iu();_.s=qu;_.z=ru;_.gC=su;_.tI=0;var pu;function zu(a){a.a={};return a}
function Du(){return lB}
function uu(){}
_=uu.prototype=new D3();_.gC=Du;_.tI=0;_.a=null;function bv(a){a.kb(this)}
function cv(b){var a;if(av){a=new Eu();b.x(a)}}
function dv(){return av}
function ev(){return mB}
function Eu(){}
_=Eu.prototype=new pv();_.s=bv;_.z=dv;_.gC=ev;_.tI=0;var av=null;function kv(c,b,d,a){c.b=b;c.a=a;c.c=d;return c}
function mv(a){Ew(a.b,a.c,a.a)}
function nv(){return nB}
function jv(){}
_=jv.prototype=new D3();_.gC=nv;_.tI=0;_.a=null;_.b=null;_.c=null;function uw(b,a){b.d=kw(new iw());b.e=a;b.c=false;return b}
function vw(c,b,a){c.d=kw(new iw());c.e=b;c.c=a;return c}
function ww(b,c,a){if(b.b>0){yw(b,Ev(new Dv(),b,c,a))}else{lw(b.d,c,a)}return kv(new jv(),b,c,a)}
function yw(b,a){if(!b.a){b.a=h9(new g9())}j9(b.a,a)}
function Bw(c,a){var b;if(a.d){a.pb()}b=a.e;a.e=c.e;try{++c.b;nw(c.d,a,c.c)}finally{--c.b;if(c.b==0){Cw(c)}}if(b==null){a.d=true;a.e=null}else{a.e=b}}
function Cw(c){var a,b;if(c.a){try{for(b=v7(new t7(),c.a);b.a<b.b.sb();){a=pA(y7(b),4);a.w()}}finally{c.a=null}}}
function Ew(b,c,a){if(b.b>0){yw(b,dw(new cw(),b,c,a))}else{rw(b.d,c,a)}}
function Fw(a){Bw(this,a)}
function ax(){return tB}
function Cv(){}
_=Cv.prototype=new D3();_.x=Fw;_.gC=ax;_.tI=0;_.a=null;_.b=0;_.c=false;_.d=null;_.e=null;function Ev(b,a,d,c){b.a=a;b.c=d;b.b=c;return b}
function aw(){lw(this.a.d,this.c,this.b)}
function bw(){return qB}
function Dv(){}
_=Dv.prototype=new D3();_.w=aw;_.gC=bw;_.tI=11;_.a=null;_.b=null;_.c=null;function dw(b,a,d,c){b.a=a;b.c=d;b.b=c;return b}
function fw(){rw(this.a.d,this.c,this.b)}
function gw(){return rB}
function cw(){}
_=cw.prototype=new D3();_.w=fw;_.gC=gw;_.tI=12;_.a=null;_.b=null;_.c=null;function kw(a){a.a=B9(new A9());return a}
function lw(c,d,a){var b;b=pA(f7(c.a,d),5);if(!b){b=h9(new g9());l7(c.a,d,b)}iA(b.a,b.b++,a)}
function nw(i,e,h){var d,f,g,j,a,b,c;j=e.z();d=(a=pA(f7(i.a,j),5),!a?0:a.b);if(h){for(g=d-1;g>=0;--g){f=(b=pA(f7(i.a,j),5),pA((F7(g,b.b),b.a[g]),15));e.s(f)}}else{for(g=0;g<d;++g){f=(c=pA(f7(i.a,j),5),pA((F7(g,c.b),c.a[g]),15));e.s(f)}}}
function rw(d,a,b){var c;c=pA(f7(d.a,a),5);o9(c,b);if(c.b==0){p7(d.a,a)}}
function sw(){return sB}
function iw(){}
_=iw.prototype=new D3();_.gC=sw;_.tI=0;function gx(){return uB}
function dx(){}
_=dx.prototype=new D3();_.gC=gx;_.tI=0;function tz(){return CB}
function uz(){return null}
function vz(){return null}
function rz(){}
_=rz.prototype=new D3();_.gC=tz;_.cb=uz;_.eb=vz;_.tI=0;function jx(b,a){b.a=a;return b}
function lx(c,b){var d=c.a[b];var a=(By(),fz)[typeof d];return a?a(d):ez(typeof d)}
function nx(a){if(!(a!=null&&nA(a.tI,16))){return false}return this.a==pA(a,16).a}
function ox(){return vB}
function px(){return dp(this.a)}
function qx(){return this}
function sx(){var a,h,i;i=s4(new q4());lp(i.a,Eg);for(h=0,a=this.a.length;h<a;++h){if(h>0){lp(i.a,jh)}t4(i,lx(this,h))}lp(i.a,vh);return pp(i.a)}
function ix(){}
_=ix.prototype=new rz();_.eQ=nx;_.gC=ox;_.hC=px;_.cb=qx;_.tS=sx;_.tI=13;_.a=null;function vx(){vx=m_;wx=ux(new tx(),false);xx=ux(new tx(),true)}
function ux(a,b){vx();a.a=b;return a}
function yx(){return wB}
function zx(a){vx();if(a){return xx}else{return wx}}
function Ax(){return x1(),jm+this.a}
function tx(){}
_=tx.prototype=new rz();_.gC=yx;_.tS=Ax;_.tI=0;_.a=false;var wx,xx;function Cx(b,a){b.e=a;return b}
function Dx(b,a){b.e=!a?null:q5(a);return b}
function Fx(){return xB}
function Bx(){}
_=Bx.prototype=new d4();_.gC=Fx;_.tI=14;function cy(){cy=m_;fy=(cy(),new ay())}
function dy(){return yB}
function gy(){return w}
function ay(){}
_=ay.prototype=new rz();_.gC=dy;_.tS=gy;_.tI=0;var fy;function iy(a,b){a.a=b;return a}
function ky(a){if(!(a!=null&&nA(a.tI,17))){return false}return this.a==pA(a,17).a}
function ly(){return zB}
function my(){return ~~Math.max(Math.min(l2(new k2(),this.a).a,2147483647),-2147483648)}
function ny(){return this.a+jm}
function hy(){}
_=hy.prototype=new rz();_.eQ=ky;_.gC=ly;_.hC=my;_.tS=ny;_.tI=15;_.a=0;function py(b,a){b.a=a;return b}
function ry(e,d){var b=e.a;var a=0;for(var c in b){d[a++]=c}return d}
function ty(d,c){var b,a;if(c==null){throw new t3()}return b=d.a[c],a=(By(),fz)[typeof b],a?a(b):ez(typeof b)}
function uy(a){if(!(a!=null&&nA(a.tI,18))){return false}return this.a==pA(a,18).a}
function vy(){return AB}
function wy(){return dp(this.a)}
function xy(){return this}
function zy(){var a,b,c,d,e,f,g;g=s4(new q4());lp(g.a,ai);a=true;f=ry(this,gA(qF,0,1,0,0));for(c=f,d=0,e=c.length;d<e;++d){b=c[d];if(a){a=false}else{lp(g.a,li)}u4(g,mz(b));lp(g.a,wi);t4(g,ty(this,b))}lp(g.a,bj);return pp(g.a)}
function oy(){}
_=oy.prototype=new rz();_.eQ=uy;_.gC=vy;_.hC=wy;_.eb=xy;_.tS=zy;_.tI=16;_.a=null;function By(){By=m_;fz={'boolean':Cy,number:Dy,string:Fy,object:Ey,'function':Ey,undefined:az}}
function Cy(a){return zx(a)}
function Dy(a){return iy(new hy(),a)}
function Ey(b){if(!b){return cy(),fy}var c=b.valueOf?b.valueOf():b;if(c!==b){var a=fz[typeof c];return a?a(c):ez(typeof c)}else if(b instanceof Array||b instanceof $wnd.Array){return jx(new ix(),b)}else{return py(new oy(),b)}}
function Fy(a){return hz(new gz(),a)}
function az(){return null}
function dz(f){var d,c;By();var a,e;if(f==null){throw new t3()}if(f.length==0){throw E2(new D2(),mj)}try{return d=eval(um+f+xj),c=fz[typeof d],c?c(d):ez(typeof d)}catch(a){a=uF(a);if(sA(a,19)){e=a;throw Dx(new Bx(),e)}else throw a}}
function ez(a){By();throw Cx(new Bx(),ck+a+nk)}
var fz;function iz(){var a;iz=m_;lz=(a=[yk,el,kl,ll,ml,nl,ol,pl,ql,rl,sl,ul,vl,wl,xl,yl,zl,Al,Bl,Cl,Dl,Fl,am,bm,cm,dm,em,fm,gm,hm,im,km],a[34]=lm,a[92]=mm,a)}
function hz(a,b){iz();if(b==null){throw new t3()}a.a=b;return a}
function jz(a){if(!(a!=null&&nA(a.tI,20))){return false}return A4(this.a,pA(a,20).a)}
function mz(d){iz();var c=d.replace(/[\x00-\x1F"\\]/g,function(b){var a;return a=lz[b.charCodeAt(0)],a==null?b:a});return nm+c+nm}
function nz(){return BB}
function oz(){return o4(this.a)}
function qz(){return mz(this.a)}
function gz(){}
_=gz.prototype=new rz();_.eQ=jz;_.gC=nz;_.hC=oz;_.tS=qz;_.tI=17;_.a=null;var lz;function dA(d,c){var a=new Array(c);if(d>0){var e=[null,0,false,[0,0]][d];for(var b=0;b<c;++b){a[b]=e}}return a}
function fA(){return this.aC}
function gA(a,f,c,b,e){var d;d=dA(e,b);yz();Dz(d,zz,Az);d.aC=a;d.tI=f;d.qI=c;return d}
function hA(b,d,c,a){yz();Dz(a,zz,Az);a.aC=b;a.tI=d;a.qI=c;return a}
function iA(a,b,c){if(c!=null){if(a.qI>0&&!mA(c.tI,a.qI)){throw new s1()}if(a.qI<0&&(c.tM==m_||c.tI==2)){throw new s1()}}return a[b]=c}
function wz(){}
_=wz.prototype=new D3();_.gC=fA;_.tI=0;_.aC=null;_.length=0;_.qI=0;function yz(){yz=m_;zz=[];Az=[];Bz(new wz(),zz,Az)}
function Bz(e,a,b){var c=0,f;for(var d in e){if(f=e[d]){a[c]=d;b[c]=f;++c}}}
function Dz(a,c,d){yz();for(var e=0,b=c.length;e<b;++e){a[c[e]]=d[e]}}
var zz,Az;function nA(b,a){return b&&!!CA[b][a]}
function mA(b,a){return b&&CA[b][a]}
function pA(b,a){if(b!=null&&!mA(b.tI,a)){throw new E1()}return b}
function oA(a){if(a!=null&&(a.tM==m_||a.tI==2)){throw new E1()}return a}
function sA(b,a){return b!=null&&nA(b.tI,a)}
function BA(a){return ~~Math.max(Math.min(a,2147483647),-2147483648)}
var CA=[{},{},{1:1,11:1,12:1,13:1},{6:1},{23:1},{23:1},{11:1,21:1},{11:1,21:1},{11:1,21:1},{11:1,19:1,21:1},{3:1},{4:1},{4:1},{16:1},{11:1,21:1},{17:1},{18:1},{20:1},{11:1,21:1},{23:1},{23:1},{15:1},{7:1},{9:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1,26:1},{7:1,8:1,9:1,10:1,26:1},{7:1,8:1,9:1,10:1,26:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1,26:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1,26:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{9:1,24:1},{7:1,8:1,9:1,10:1,26:1},{7:1,8:1,9:1,10:1,26:1},{15:1},{11:1,13:1},{11:1,13:1},{6:1},{22:1},{7:1,8:1,9:1,10:1,25:1,26:1},{15:1},{7:1,8:1,9:1,10:1,25:1,26:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1},{7:1,8:1,9:1,10:1,26:1},{29:1},{28:1},{11:1,13:1},{27:1},{7:1,8:1,9:1,10:1},{15:1},{15:1},{15:1},{15:1},{7:1,8:1,9:1,10:1,15:1},{7:1,8:1,9:1,10:1,15:1},{15:1},{15:1},{22:1},{15:1},{15:1},{7:1,8:1,9:1,10:1,15:1},{15:1},{15:1},{11:1,21:1},{11:1,21:1},{11:1,21:1},{11:1,21:1},{11:1,13:1,30:1},{11:1,21:1},{11:1},{11:1,13:1,31:1},{11:1,21:1},{11:1,21:1},{11:1,21:1},{11:1,21:1},{12:1},{11:1,21:1},{35:1},{35:1},{32:1},{32:1},{32:1},{33:1},{35:1},{5:1,11:1,33:1},{11:1,34:1},{11:1,35:1},{32:1},{11:1,21:1},{11:1,33:1},{7:1},{2:1},{14:1}];function uF(a){if(a!=null&&nA(a.tI,21)){return a}return ho(new go(),a)}
function eG(a,b){var c,d;c=a[1]+b[1];d=a[0]+b[0];return gG(d,c)}
function dG(b,a,c){if(a==0){return b}if(c==0){return b}return eG(b,gG(a*c,0))}
function fG(a,b){var i,j;if(a[0]==b[0]&&a[1]==b[1]){return 0}i=a[1]<0;j=b[1]<0;if(i&&!j){return -1}if(!i&&j){return 1}if(uG(a,b)[1]<0){return -1}else{return 1}}
function gG(d,c){var a,b;c%=1.8446744073709552E19;d%=1.8446744073709552E19;a=c%4294967296;b=Math.floor(d/4294967296)*4294967296;c=c-a+b;d=d-b+a;while(d<0){d+=4294967296;c-=4294967296}while(d>4294967295){d-=4294967296;c+=4294967296}c=c%1.8446744073709552E19;while(c>9223372032559808512){c-=1.8446744073709552E19}while(c<-9223372036854775808){c+=1.8446744073709552E19}return [d,c]}
function hG(a,c){var b,p,q,r,s,t;if(c[0]==0&&c[1]==0){throw p1(new o1(),om)}if(a[0]==0&&a[1]==0){return AF(),bG}if(iG(a,(AF(),DF))){if(iG(c,FF)||iG(c,EF)){return DF}r=tG(a,1);b=sG(hG(r,c),1);s=uG(a,nG(c,b));return eG(b,hG(s,c))}if(iG(c,DF)){return bG}if(a[1]<0){if(c[1]<0){return hG(pG(a),pG(c))}else{return pG(hG(pG(a),c))}}if(c[1]<0){return pG(hG(a,pG(c)))}t=bG;s=a;while(fG(s,c)>=0){q=jG(Math.floor(vG(s)/wG(c)));if(q[0]==0&&q[1]==0){q=FF}p=nG(q,c);t=eG(t,q);s=uG(s,p)}return t}
function iG(a,b){return a[0]==b[0]&&a[1]==b[1]}
function jG(a){if(isNaN(a)){return AF(),bG}if(a<-9223372036854775808){return AF(),DF}if(a>=9223372036854775807){return AF(),CF}if(a>0){return gG(Math.floor(a),0)}else{return gG(Math.ceil(a),0)}}
function kG(c){var a,b;if(c>-129&&c<128){a=c+128;b=(xF(),yF)[a];if(b==null){b=yF[a]=lG(c)}return b}return lG(c)}
function lG(a){if(a>=0){return [a,0]}else{return [a+4294967296,-4294967296]}}
function mG(a){if(a[0]>=2147483648){return ~~Math.max(Math.min(a[0]-4294967296,2147483647),-2147483648)}else{return ~~Math.max(Math.min(a[0],2147483647),-2147483648)}}
function nG(a,f){var b,c,d,e,g,h,i,j,k;if(a[0]==0&&a[1]==0){return AF(),bG}if(f[0]==0&&f[1]==0){return AF(),bG}if(iG(a,(AF(),DF))){return oG(f)}if(iG(f,DF)){return oG(a)}if(a[1]<0){if(f[1]<0){return nG(pG(a),pG(f))}else{return pG(nG(pG(a),f))}}if(f[1]<0){return pG(nG(a,pG(f)))}if(fG(a,aG)<0&&fG(f,aG)<0){return gG((a[1]+a[0])*(f[1]+f[0]),0)}d=a[1]%281474976710656;e=a[1]-d;b=a[0]%65536;c=a[0]-b;i=f[1]%281474976710656;j=f[1]-i;g=f[0]%65536;h=f[0]-g;k=bG;k=dG(k,e,g);k=dG(k,d,h);k=dG(k,d,g);k=dG(k,c,i);k=dG(k,c,h);k=dG(k,c,g);k=dG(k,b,j);k=dG(k,b,i);k=dG(k,b,h);k=dG(k,b,g);return k}
function oG(a){if((mG(a)&1)==1){return AF(),DF}else{return AF(),bG}}
function pG(a){var b,c;if(iG(a,(AF(),DF))){return DF}b=-a[1];c=-a[0];if(c>4294967295){c-=4294967296;b+=4294967296}if(c<0){c+=4294967296;b-=4294967296}return [c,b]}
function rG(a){if(a<=30){return 1<<a}else{return rG(30)*rG(a-30)}}
function sG(a,c){var b,d,e,f;c&=63;if(iG(a,(AF(),DF))){if(c==0){return a}else{return bG}}if(a[1]<0){return pG(sG(pG(a),c))}f=rG(c);d=a[1]*f%1.8446744073709552E19;e=a[0]*f;b=e-e%4294967296;d+=b;e-=b;if(d>=9223372036854775807){d-=1.8446744073709552E19}return [e,d]}
function tG(a,b){var c,d,e;b&=63;e=rG(b);c=a[1]/e;d=Math.floor(a[0]/e);return gG(d,c)}
function uG(a,b){var c,d;c=a[1]-b[1];d=a[0]-b[0];return gG(d,c)}
function vG(a){var b,c,d;c=BA(Math.log(a[1])/(AF(),BF));if(c<=48){return a[1]+a[0]}else{b=c-48;d=(1<<b)-1;return a[1]+(a[0]-d)}}
function wG(a){var b,c,d;c=BA(Math.log(a[1])/(AF(),BF));if(c<=48){return a[1]+a[0]}else{b=c-48;d=(1<<b)-1;return a[1]+(a[0]+d)}}
function xG(a){var b,c,d,e,f,g;if(a[0]==0&&a[1]==0){return pm}if(iG(a,(AF(),DF))){return qm}if(a[1]<0){return rm+xG(pG(a))}c=a;e=jm;while(!(c[0]==0&&c[1]==0)){f=kG(1000000000);d=hG(c,f);b=jm+mG(uG(c,nG(d,f)));c=d;if(!(c[0]==0&&c[1]==0)){g=9-b.length;for(;g>0;--g){b=pm+b}}e=b+e}return e}
function xF(){xF=m_;yF=gA(rF,0,14,256,0)}
var yF;function AF(){AF=m_;BF=Math.log(2);CF=nn;DF=ln;EF=kG(-1);FF=kG(1);kG(2);aG=mn;bG=kG(0)}
var BF,CF,DF,EF,FF,aG,bG;function dH(a){return a}
function fH(){return DB}
function cH(){}
_=cH.prototype=new d4();_.gC=fH;_.tI=18;function EH(a){a.a=iH(new hH(),a);a.b=h9(new g9());a.d=nH(new mH(),a);a.f=tH(new rH(),a);return a}
function aI(b){var a;a=vH(b.f);yH(b.f);if(a!=null&&nA(a.tI,22)){dH(new cH(),pA(a,22))}else{}b.c=false;cI(b)}
function bI(d,c){var a,b,e;e=false;try{d.c=true;d.f.a=d.b.b;AJ(d.a,10000);while(wH(d.f)){b=xH(d.f);try{if(b==null){return}if(b!=null&&nA(b.tI,22)){a=pA(b,22);a.w()}else{}}finally{e=d.f.b==-1;if(e){return}yH(d.f)}if((new Date()).getTime()-c>=100){return}}}finally{if(!e){xJ(d.a);d.c=false;cI(d)}}}
function cI(a){if(a.b.b!=0&&!a.e&&!a.c){a.e=true;AJ(a.d,1)}}
function eI(b,a){j9(b.b,a);cI(b)}
function fI(){return bC}
function gH(){}
_=gH.prototype=new D3();_.gC=fI;_.tI=0;_.c=false;_.e=false;function jH(){jH=m_;yJ()}
function iH(b,a){jH();b.a=a;return b}
function kH(){return EB}
function lH(){if(!this.a.c){return}aI(this.a)}
function hH(){}
_=hH.prototype=new sJ();_.gC=kH;_.qb=lH;_.tI=19;_.a=null;function oH(){oH=m_;yJ()}
function nH(b,a){oH();b.a=a;return b}
function pH(){return FB}
function qH(){this.a.e=false;bI(this.a,(new Date()).getTime())}
function mH(){}
_=mH.prototype=new sJ();_.gC=pH;_.qb=qH;_.tI=20;_.a=null;function tH(b,a){b.d=a;return b}
function vH(a){return l9(a.d.b,a.b)}
function wH(a){return a.c<a.a}
function xH(b){var a;b.b=b.c;a=l9(b.d.b,b.c++);if(b.c>=b.a){b.c=0}return a}
function yH(a){n9(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0}}a.b=-1}
function AH(){return aC}
function BH(){return this.c<this.a}
function CH(){return xH(this)}
function rH(){}
_=rH.prototype=new D3();_.gC=AH;_.ab=BH;_.gb=CH;_.tI=0;_.a=0;_.b=-1;_.c=0;_.d=null;function kI(b,a,c){var d;if(a==tI){if(fL((mq(),b).type)==8192){tI=null}}d=jI;jI=b;try{c.ib(b)}finally{jI=d}}
function sI(a){var b;b=gJ(rJ,a);if(!b&&!!a){a.cancelBubble=true;(mq(),a).returnValue=false}return b}
function xI(a,b){hL();aL(a,b)}
var jI=null,tI=null;function AI(){AI=m_;CI=EH(new gH())}
function BI(a){AI();if(!a){throw u3(new t3(),sm)}eI(CI,a)}
var CI;function qJ(a){hL();jJ();if(!rJ){rJ=vw(new Cv(),null,true);lJ=new EI()}return ww(rJ,eJ,a)}
var rJ=null;function cJ(a){a.d=false;a.e=null;a.a=false;a.b=false;a.c=null}
function fJ(a){yQ(a.a,this)}
function gJ(a,b){if(!!eJ&&!!a&&c7(a.d.a,eJ)){cJ(lJ);lJ.c=b;Bw(a,lJ);return !(lJ.a&&!lJ.b)}return true}
function hJ(){return eJ}
function iJ(){return cC}
function jJ(){if(!eJ){eJ=rv(new qv())}return eJ}
function kJ(){cJ(this)}
function EI(){}
_=EI.prototype=new pv();_.s=fJ;_.z=hJ;_.gC=iJ;_.pb=kJ;_.tI=0;_.a=false;_.b=false;_.c=null;var eJ=null,lJ=null;function vJ(){return dC}
function wJ(a){while((yJ(),aK).b>0){xJ(pA(l9(aK,0),23))}}
function tJ(){}
_=tJ.prototype=new D3();_.gC=vJ;_.kb=wJ;_.tI=21;function oK(a){wK();return pK(av?av:(av=rv(new qv())),a)}
function pK(b,a){return ww(uK(),b,a)}
function rK(){if(qK){cv(uK())}}
function sK(){var a;if(qK){a=(eK(),new cK());tK(a);return null}return null}
function tK(a){if(vK){Bw(vK,a)}}
function uK(){if(!vK){vK=kK(new jK())}return vK}
function wK(){if(!qK){pL(oL(),tm);qK=true}}
var qK=false,vK=null;function eK(){eK=m_;fK=rv(new qv())}
function gK(a){null.ub()}
function hK(){return fK}
function iK(){return fC}
function cK(){}
_=cK.prototype=new pv();_.s=gK;_.z=hK;_.gC=iK;_.tI=0;var fK;function kK(a){a.d=kw(new iw());a.e=null;a.c=false;return a}
function mK(){return gC}
function jK(){}
_=jK.prototype=new Cv();_.gC=mK;_.tI=22;function fL(a){switch(a){case vm:return 4096;case wm:return 1024;case Df:return 1;case xm:return 2;case ym:return 2048;case zm:return 128;case tg:return 256;case Am:return 512;case Bm:return 32768;case Cm:return 8192;case Dm:return 4;case Em:return 64;case an:return 32;case bn:return 16;case cn:return 8;case dn:return 16384;case en:return 65536;case fn:return 131072;case gn:return 131072;case hn:return 262144;}}
function hL(){if(!jL){EK();jL=true}}
var jL=false;function EK(){cL=function(){var c=(Bp(),kq);kq=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!sI($wnd.event)){kq=c;return}}var b,a=this;while(a&&!(b=a.__listener)){a=a.parentElement}if(b){if(!(b!=null&&(b.tM!=m_&&b.tI!=2))&&(b!=null&&nA(b.tI,8))){kI($wnd.event,a,b)}}kq=c};bL=function(){var a=$doc.createEventObject();if($wnd.event.returnValue==null){$wnd.event.srcElement.fireEvent(jn,a)}if(this.__eventBits&2){cL.call(this)}else if($wnd.event.returnValue==null){$wnd.event.returnValue=true;sI($wnd.event)}};var e=function(){cL.call($doc.body)};var d=function(){bL.call($doc.body)};$doc.body.attachEvent(jn,e);$doc.body.attachEvent(kn,e);$doc.body.attachEvent(x,e);$doc.body.attachEvent(y,e);$doc.body.attachEvent(z,e);$doc.body.attachEvent(A,e);$doc.body.attachEvent(B,e);$doc.body.attachEvent(C,e);$doc.body.attachEvent(D,e);$doc.body.attachEvent(E,e);$doc.body.attachEvent(F,d);$doc.body.attachEvent(ab,e)}
function FK(c,a,b){if(b>=c.children.length)c.appendChild(a);else c.insertBefore(a,c.children[b])}
function aL(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?cL:null;if(b&3)c.ondblclick=a&3?bL:null;if(b&4)c.onmousedown=a&4?cL:null;if(b&8)c.onmouseup=a&8?cL:null;if(b&16)c.onmouseover=a&16?cL:null;if(b&32)c.onmouseout=a&32?cL:null;if(b&64)c.onmousemove=a&64?cL:null;if(b&128)c.onkeydown=a&128?cL:null;if(b&256)c.onkeypress=a&256?cL:null;if(b&512)c.onkeyup=a&512?cL:null;if(b&1024)c.onchange=a&1024?cL:null;if(b&2048)c.onfocus=a&2048?cL:null;if(b&4096)c.onblur=a&4096?cL:null;if(b&8192)c.onlosecapture=a&8192?cL:null;if(b&16384)c.onscroll=a&16384?cL:null;if(b&32768)c.onload=a&32768?cL:null;if(b&65536)c.onerror=a&65536?cL:null;if(b&131072)c.onmousewheel=a&131072?cL:null;if(b&262144)c.oncontextmenu=a&262144?cL:null}
var bL=null,cL=null;function oL(){return function(d,g){var h=window,e=h.onbeforeunload,f=h.onunload;h.onbeforeunload=function(a){var c,b;try{c=d()}finally{b=e&&e(a)}if(c!=null){return c}if(b!=null){return b}};h.onunload=function(a){try{g()}finally{f&&f(a);h.onresize=null;h.onscroll=null;h.onbeforeunload=null;h.onunload=null}};h.__gwt_initWindowCloseHandler=undefined}.toString()}
function pL(b,a){var c;b=E4(b,cb,db+a);c=pq((mq(),$doc),b);$doc.body.appendChild(c);qL();$doc.body.removeChild(c)}
function qL(){$wnd.__gwt_initWindowCloseHandler(function(){return sK()},function(){rK()})}
function zS(b,a){bT(b.D(),a,true)}
function BS(b,a){bT(b.o,a,false)}
function CS(b,a){b.o=a}
function ES(){return eD}
function FS(){return this.o}
function aT(a){var b,c;b=a[eb]==null?null:String(a[eb]);c=b.indexOf(h5(32));if(c>=0){return b.substr(0,c-0)}return b}
function bT(c,j,a){var b,d,e,f,g,h,i;if(!c){throw e4(new d4(),fb)}j=b5(j);if(j.length==0){throw E2(new D2(),gb)}i=c[eb]==null?null:String(c[eb]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=hb}c[eb]=i+j}}else{if(e!=-1){b=b5(i.substr(0,e-0));d=b5(F4(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+hb+d}c[eb]=h}}}
function cT(){if(!this.o){return ib}return (mq(),this.o).outerHTML}
function yS(){}
_=yS.prototype=new D3();_.gC=ES;_.D=FS;_.tS=cT;_.tI=23;_.o=null;function FT(b,a,c){hU(b,fL(c.b));return ww(!b.m?(b.m=uw(new Cv(),b)):b.m,c,a)}
function bU(b,a){if(b.m){Bw(b.m,a)}}
function cU(b){var a;if(b.db()){throw c3(new b3(),jb)}b.k=true;b.o.__listener=b;a=b.l;b.l=-1;if(a>0){hU(b,a)}b.t();b.mb()}
function dU(c,a){var b;switch(fL((mq(),a).type)){case 16:case 32:b=a.relatedTarget||(a.type==an?a.toElement:a.fromElement);if(!!b&&hq(c.o,b)){return}}ut(a,c,c.o)}
function eU(a){if(!a.db()){throw c3(new b3(),kb)}try{a.nb()}finally{a.u();a.o.__listener=null;a.k=false}}
function fU(a){if(!a.n){mR();if(c7(sR.a,a)){a.lb();p7(sR.a,a)!=null}}else if(sA(a.n,26)){pA(a.n,26).ob(a)}else if(a.n){throw c3(new b3(),lb)}}
function gU(c,b){var a;a=c.n;if(!b){if(!!a&&a.db()){c.lb()}c.n=null}else{if(a){throw c3(new b3(),nb)}c.n=b;if(b.db()){c.hb()}}}
function hU(b,a){if(b.l==-1){xI(b.o,a|(b.o.__eventBits||0))}else{b.l|=a}}
function iU(){}
function jU(){}
function kU(a){bU(this,a)}
function lU(){return iD}
function mU(){return this.k}
function nU(){cU(this)}
function oU(a){dU(this,a)}
function pU(){eU(this)}
function qU(){}
function rU(){}
function mT(){}
_=mT.prototype=new yS();_.t=iU;_.u=jU;_.x=kU;_.gC=lU;_.db=mU;_.hb=nU;_.ib=oU;_.lb=pU;_.mb=qU;_.nb=rU;_.tI=24;_.k=false;_.l=0;_.m=null;_.n=null;function jP(b){var a;a=qT(new oT(),b.f);while(a.a<a.b.c-1){sT(a);tT(a)}}
function lP(){var a,b;for(b=this.fb();b.ab();){a=pA(b.gb(),10);a.hb()}}
function mP(){var a,b;for(b=this.fb();b.ab();){a=pA(b.gb(),10);a.lb()}}
function nP(){return vC}
function oP(){}
function pP(){}
function iP(){}
_=iP.prototype=new mT();_.t=lP;_.u=mP;_.gC=nP;_.mb=oP;_.nb=pP;_.tI=25;function lM(c,a,b){fU(a);yT(c.f,a);b.appendChild(a.o);gU(a,c)}
function mM(d,b,a){var c;nM(d,a);if(b.n==d){c=AT(d.f,b);if(c<a){--a}}return a}
function nM(b,a){if(a<0||a>b.f.c){throw new f3()}}
function pM(e,b,c,a,d){a=mM(e,b,a);fU(b);BT(e.f,b,a);if(d){FK(c,b.o,a)}else{c.appendChild(b.o)}gU(b,e)}
function qM(b,c){var a;if(c.n!=b){return false}gU(c,null);a=c.o;(mq(),a).parentElement.removeChild(a);DT(b.f,c);return true}
function rM(){return lC}
function sM(){return qT(new oT(),this.f)}
function tM(a){return qM(this,a)}
function jM(){}
_=jM.prototype=new iP();_.gC=rM;_.fb=sM;_.ob=tM;_.tI=26;function tL(a,b){lM(a,b,a.o)}
function vL(b,c){var a;a=qM(b,c);if(a){wL(c.o)}return a}
function wL(a){a.style[ob]=jm;a.style[pb]=jm;a.style[qb]=jm}
function xL(){return hC}
function yL(a){return vL(this,a)}
function sL(){}
_=sL.prototype=new jM();_.gC=xL;_.ob=yL;_.tI=27;function EM(b,a){if(a){CU(b.o)}else{b.o.blur()}}
function FM(){return nC}
function CM(){}
_=CM.prototype=new mT();_.gC=FM;_.tI=28;function DL(b,a){b.o=a;b.o.tabIndex=0;return b}
function FL(){return iC}
function CL(){}
_=CL.prototype=new CM();_.gC=FL;_.tI=29;function bM(b,a){DL(b,(mq(),$doc).createElement(rb));dM(b.o);b.o[eb]=sb;b.o.innerHTML=a||jm;return b}
function dM(b){if(b.type==tb){try{b.setAttribute(ub,rb)}catch(a){}}}
function eM(){return jC}
function BL(){}
_=BL.prototype=new CL();_.gC=eM;_.tI=30;function gM(a){a.f=xT(new nT(),a);a.e=(mq(),$doc).createElement(vb);a.d=$doc.createElement(wb);a.e.appendChild(a.d);a.o=a.e;return a}
function iM(){return kC}
function fM(){}
_=fM.prototype=new jM();_.gC=iM;_.tI=31;_.d=null;_.e=null;function wM(a,b){if(a.h){throw c3(new b3(),yb)}fU(b);CS(a,b.o);a.h=b;gU(b,a)}
function xM(){return mC}
function yM(){if(this.h){return this.h.k}return false}
function zM(){if(this.l!=-1){hU(this.h,this.l);this.l=-1}cU(this.h);this.o.__listener=this}
function AM(a){dU(this,a);dU(this.h,a)}
function BM(){eU(this.h)}
function uM(){}
_=uM.prototype=new mT();_.gC=xM;_.db=yM;_.hb=zM;_.ib=AM;_.lb=BM;_.tI=32;_.h=null;function jN(){jN=m_;gN(new fN(),zb);lN=gN(new fN(),ob);gN(new fN(),Ab);kN=lN}
var kN,lN;function gN(b,a){b.a=a;return b}
function iN(){return oC}
function fN(){}
_=fN.prototype=new D3();_.gC=iN;_.tI=0;_.a=null;function tN(){tN=m_;qN(new pN(),Bb);qN(new pN(),Cb);uN=qN(new pN(),pb)}
var uN;function qN(a,b){a.a=b;return a}
function sN(){return pC}
function pN(){}
_=pN.prototype=new D3();_.gC=sN;_.tI=0;_.a=null;function zN(a){gM(a);a.a=(jN(),kN);a.c=(tN(),uN);a.b=(mq(),$doc).createElement(Db);a.d.appendChild(a.b);a.e[Eb]=pm;a.e[Fb]=pm;return a}
function AN(c,d){var b,a;b=(a=(mq(),$doc).createElement(ac),(a[bc]=c.a.a,undefined),(a.style[dc]=c.c.a,undefined),a);c.b.appendChild(b);fU(d);yT(c.f,d);b.appendChild(d.o);gU(d,c)}
function DN(){return qC}
function EN(c){var a,b;b=(mq(),c.o).parentElement;a=qM(this,c);if(a){this.b.removeChild(b)}return a}
function xN(){}
_=xN.prototype=new fM();_.gC=DN;_.ob=EN;_.tI=33;_.b=null;function cO(b,a){b.o=(mq(),$doc).createElement(ec);b.o[eb]=fc;b.o.innerText=a||jm;return b}
function eO(){return rC}
function bO(){}
_=bO.prototype=new mT();_.gC=eO;_.tI=34;function iO(a,b){a.a=h9(new g9());a.d=h9(new g9());pO(a,b,(DO(),new BO()));return a}
function kO(b,a){return qO(b,a,b.a.b)}
function jO(c,a,b){var d;if(c.f){d=(mq(),$doc).createElement(Db);FK(c.c,d,a);d.appendChild(b)}else{d=c.c.children[0];FK(d,b,a)}}
function mO(d,c,b){var a;xO(d,c);if(c){if(b&&!!c.a){a=c.a;BI(a)}else{}}}
function nO(d,a){var b,c;for(c=v7(new t7(),d.d);c.a<c.b.sb();){b=pA(y7(c),24);if(hq((mq(),b.o),a)){return b}}return null}
function oO(a){if(a.f){return a.c}else{return a.c.children[0]}}
function pO(d,f){var b,c,e,a;c=(mq(),$doc).createElement(vb);d.c=$doc.createElement(wb);c.appendChild(d.c);if(!f){e=$doc.createElement(Db);d.c.appendChild(e)}d.f=f;b=(a=$doc.createElement(gc),a.tabIndex=0,a);b.appendChild(c);d.o=b;d.o.setAttribute(hc,ic);hU(d,2225);d.o[eb]=jc;if(f){zS(d,aT(d.o)+rm+kc)}else{zS(d,aT(d.o)+rm+lc)}d.o.style[mc]=oc;d.o.setAttribute(pc,qc)}
function qO(e,c,a){var b,d;if(a<0||a>e.a.b){throw new f3()}i9(e.a,a,c);d=0;for(b=0;b<a;++b){if(sA(l9(e.a,b),24)){++d}}i9(e.d,d,c);jO(e,a,c.o);gP(c,false);AO(e,c);return c}
function rO(c,b,a){if(!b){if(c.e){return}}xO(c,b);if(a){CU(c.o)}if(b){if(c.b){mO(c,b,false)}}}
function sO(a){if(wO(a)){return}if(a.f){yO(a)}else{}}
function tO(a){if(wO(a)){return}if(a.f){}else{yO(a)}}
function uO(a){if(wO(a)){return}if(a.f){}else{zO(a)}}
function vO(a){if(wO(a)){return}if(a.f){zO(a)}else{}}
function wO(b){var a;if(!b.e){a=pA(l9(b.d,0),24);xO(b,a);return true}return false}
function xO(d,b){var c,e,a;if(b==d.e){return}if(d.e){gP(d.e,false);if(d.f){e=(mq(),d.e.o).parentElement;if(e.children.length==2){c=e.children[1];bT(c,rc,false)}}}if(b){gP(b,true);if(d.f){e=(mq(),b.o).parentElement;if(e.children.length==2){c=e.children[1];bT(c,rc,true)}}d.o.setAttribute(sc,(a=(mq(),b.o).getAttribute(tc),a==null?jm:a+jm))}d.e=b}
function yO(c){var a,b;if(!c.e){return}a=m9(c.d,c.e,0);if(a<c.d.b-1){b=pA(l9(c.d,a+1),24)}else{b=pA(l9(c.d,0),24)}xO(c,b)}
function zO(c){var a,b;if(!c.e){return}a=m9(c.d,c.e,0);if(a>0){b=pA(l9(c.d,a-1),24)}else{b=pA(l9(c.d,c.d.b-1),24)}xO(c,b)}
function AO(e,c){var a,b,d,f;if(!e.f){return}b=m9(e.a,c,0);if(b==-1){return}a=oO(e);f=a.children[b];d=f.children.length;if(d==2){f.removeChild(f.children[1])}c.o[uc]=2}
function FO(){return tC}
function aP(a){var b,c;b=nO(this,(mq(),a).srcElement);switch(fL(a.type)){case 1:{CU(this.o);if(b){mO(this,b,true)}break}case 16:{if(b){rO(this,b,true)}break}case 32:{if(b){rO(this,null,true)}break}case 2048:{wO(this);break}case 128:{c=a.which||(a.keyCode||0);switch(c){case 37:{uO(this)}a.cancelBubble=true;a.returnValue=false;break;case 39:{tO(this)}a.cancelBubble=true;a.returnValue=false;break;case 38:vO(this);a.cancelBubble=true;a.returnValue=false;break;case 40:sO(this);a.cancelBubble=true;a.returnValue=false;break;case 27:a.cancelBubble=true;a.returnValue=false;break;case 13:if(!wO(this)){mO(this,this.e,true);a.cancelBubble=true;a.returnValue=false}}break}}dU(this,a)}
function bP(){eU(this)}
function fO(){}
_=fO.prototype=new mT();_.gC=FO;_.ib=aP;_.lb=bP;_.tI=35;_.b=false;_.c=null;_.e=null;_.f=false;function DO(){DO=m_;yU()}
function EO(){return sC}
function BO(){}
_=BO.prototype=new D3();_.gC=EO;_.tI=0;function dP(c,b,a){eP(c,b,false);c.a=a;return c}
function eP(c,b,a){c.o=(mq(),$doc).createElement(ac);gP(c,false);if(a){c.o.innerHTML=b||jm}else{c.o.innerText=b||jm}c.o[eb]=vc;c.o.setAttribute(tc,hr($doc));c.o.setAttribute(hc,wc);return c}
function gP(b,a){if(a){zS(b,aT(b.o)+rm+xc)}else{BS(b,aT(b.o)+rm+xc)}}
function hP(){return uC}
function cP(){}
_=cP.prototype=new yS();_.gC=hP;_.tI=36;_.a=null;function BR(a,b){if(a.j){throw c3(new b3(),zc)}ER(a,b)}
function DR(a,b){if(a.j!=b){return false}gU(b,null);a.A().removeChild(b.o);a.j=null;return true}
function ER(a,b){if(b==a.j){return}if(b){fU(b)}if(a.j){DR(a,a.j)}a.j=b;if(b){wq((mq(),a.o)).appendChild(a.j.o);gU(b,a)}}
function FR(){return aD}
function aS(){return this.o}
function bS(){return wR(new uR(),this)}
function cS(a){return DR(this,a)}
function tR(){}
_=tR.prototype=new iP();_.gC=FR;_.A=aS;_.fb=bS;_.ob=cS;_.tI=37;_.j=null;function sQ(c,a,b){c.o=(mq(),$doc).createElement(ec);c.a=(DP(),EP);c.g=iQ(new bQ(),c);c.o.appendChild($doc.createElement(ec));AQ(c,0,0);wq(c.o).parentElement[eb]=Ac;wq(c.o)[eb]=Bc;c.b=a;c.d=b;return c}
function tQ(a){if(a.blur&&a!=$doc.body){a.blur()}}
function vQ(c,a){var b;b=(mq(),a).srcElement;if(es(b)){return hq(c.o,b)}return false}
function wQ(a){if(!a.h){return}BQ(a,false,true);cv(a)}
function xQ(k,i,g,f){var a,b,c,d,e,h,j,l,m,n,o,p;j=parseInt(i.o[ee])||0;h=g-j;e=vp((mq(),i.o));if(h>0){o=mr($doc)+xq($doc);n=xq($doc);d=o-e;a=e-n;if(d<g&&a>=h){e-=h}}l=wp(i.o);p=zq($doc);m=zq($doc)+lr($doc);b=l-p;c=m-(l+(parseInt(i.o[v])||0));if(c<f&&b>=f){l-=f}else{l+=parseInt(i.o[v])||0}AQ(k,e,l)}
function yQ(e,a){var b,c,d,f;if(a.a||!e.f&&a.b){if(e.d){a.a=true}return}if(a.a){return}c=a.c;b=vQ(e,c);if(b){a.b=true}if(e.d){a.a=true}f=fL((mq(),c).type);switch(f){case 128:{(c.which||(c.keyCode||0))&65535;(c.shiftKey?1:0)|(c.metaKey?8:0)|(c.ctrlKey?2:0)|(c.altKey?4:0);return}case 512:{(c.which||(c.keyCode||0))&65535;(c.shiftKey?1:0)|(c.metaKey?8:0)|(c.ctrlKey?2:0)|(c.altKey?4:0);return}case 256:{(c.which||(c.keyCode||0))&65535;(c.shiftKey?1:0)|(c.metaKey?8:0)|(c.ctrlKey?2:0)|(c.altKey?4:0);return}case 4:if(!b&&e.b){wQ(e);return}break;case 2048:{d=c.srcElement;if(e.d&&!b&&!!d){tQ(d);a.a=true;return}break}}}
function AQ(c,b,d){var a;c.c=b;c.i=d;b-=aq((mq(),$doc));d-=bq($doc);a=c.o;a.style[ob]=b+Cc;a.style[pb]=d+Cc}
function zQ(b,a){b.o.style[Dc]=dl;gV(b.o,false);DQ(b);vP(a,parseInt(b.o[ee])||0,parseInt(b.o[v])||0);b.o.style[Dc]=Ec;gV(b.o,true)}
function BQ(c,b,a){if(a){oQ(c.g,b)}else{vn(c.g)}c.h=b;if(b){c.e=qJ(yP(new xP(),c))}else if(c.e){mv(c.e);c.e=null}}
function DQ(a){if(a.h){return}BQ(a,true,true)}
function CQ(b,a){zQ(b,tP(new sP(),b,a))}
function EQ(){return BC}
function FQ(){return wq((mq(),this.o))}
function aR(){return iV(wq((mq(),this.o)))}
function bR(){if(this.h){BQ(this,false,false)}}
function rP(){}
_=rP.prototype=new tR();_.gC=EQ;_.A=FQ;_.D=aR;_.nb=bR;_.tI=38;_.b=false;_.c=-1;_.d=false;_.e=null;_.f=false;_.h=false;_.i=-1;function tP(b,a,c){b.a=a;b.b=c;return b}
function vP(c,b,a){xQ(c.a,c.b,b,a)}
function wP(){return wC}
function sP(){}
_=sP.prototype=new D3();_.gC=wP;_.tI=0;_.a=null;_.b=null;function yP(b,a){b.a=a;return b}
function AP(){return xC}
function xP(){}
_=xP.prototype=new D3();_.gC=AP;_.tI=39;_.a=null;function u2(a){return this===(a==null?null:a)}
function v2(){return iE}
function w2(){return this.$H||(this.$H=++hp)}
function x2(){return this.a}
function z2(a,b){var c;c=a[Fc+b];if(!c){throw E2(new D2(),b)}return c}
function s2(){}
_=s2.prototype=new D3();_.eQ=u2;_.gC=v2;_.hC=w2;_.tS=x2;_.tI=40;_.a=null;_.b=0;function DP(){DP=m_;EP=CP(new BP(),ad,0);CP(new BP(),bd,1);CP(new BP(),cd,2)}
function CP(c,a,b){DP();c.a=a;c.b=b;return c}
function FP(){return yC}
function BP(){}
_=BP.prototype=new s2();_.gC=FP;_.tI=41;var EP;function iQ(b,a){b.a=a;return b}
function kQ(a){if(!a.d){vL((mR(),qR(null)),a.a);eV(a.a.o)}a.a.o.style[ed]=fd;a.a.o.style[uh]=Ec}
function lQ(a){if(a.d){a.a.o.style[qb]=gd;if(a.a.i!=-1){AQ(a.a,a.a.c,a.a.i)}tL((mR(),qR(null)),a.a);fV(a.a.o)}else{vL((mR(),qR(null)),a.a);eV(a.a.o)}a.a.o.style[uh]=Ec}
function nQ(f,d){var a,b,c,e,g,h;if(!f.d){d=1-d}g=0;c=0;e=0;a=0;b=~~Math.max(Math.min(d*f.b,2147483647),-2147483648);h=~~Math.max(Math.min(d*f.c,2147483647),-2147483648);switch(f.a.a.b){case 2:e=f.c;a=b;break;case 0:g=f.b-b>>1;c=f.c-h>>1;e=c+h;a=g+b;break;case 1:e=c+h;a=g+b;}f.a.o.style[ed]=hd+g+id+e+id+a+id+c+jd}
function oQ(c,b){var a;vn(c);a=false;if(c.a.a!=(DP(),EP)&&!b){a=false}c.d=b;if(a){if(b){c.a.o.style[qb]=gd;if(c.a.i!=-1){AQ(c.a,c.a.c,c.a.i)}c.a.o.style[ed]=kd;tL((mR(),qR(null)),c.a);fV(c.a.o)}BI(dQ(new cQ(),c))}else{lQ(c)}}
function pQ(){return AC}
function bQ(){}
_=bQ.prototype=new on();_.gC=pQ;_.tI=42;_.a=null;_.b=0;_.c=-1;_.d=false;function dQ(b,a){b.a=a;return b}
function fQ(){yn(this.a,200,(new Date()).getTime())}
function gQ(){return zC}
function cQ(){}
_=cQ.prototype=new D3();_.w=fQ;_.gC=gQ;_.tI=43;_.a=null;function mR(){mR=m_;rR=B9(new A9());sR=a$(new F9())}
function lR(b,a){mR();b.f=xT(new nT(),b);b.o=a;cU(b);return b}
function nR(){var b,a;mR();var c,d;for(d=(b=d6(new c6(),C8(sR.a).b.a),i8(new h8(),b));x7(d.a.a);){c=pA((a=pA(y7(d.a.a),32),a.B()),10);if(c.db()){c.lb()}}a7(sR.a);a7(rR)}
function qR(a){mR();var b;b=pA(f7(rR,a),25);if(b){return b}if(rR.d==0){oK(new dR())}b=iR(new hR());l7(rR,a,b);b$(sR,b);return b}
function pR(){return EC}
function cR(){}
_=cR.prototype=new sL();_.gC=pR;_.tI=44;var rR,sR;function fR(){return CC}
function gR(a){nR()}
function dR(){}
_=dR.prototype=new D3();_.gC=fR;_.kb=gR;_.tI=45;function jR(){jR=m_;mR()}
function iR(a){jR();lR(a,$doc.body);return a}
function kR(){return DC}
function hR(){}
_=hR.prototype=new cR();_.gC=kR;_.tI=46;function wR(b,a){b.b=a;b.a=!!b.b.j;return b}
function yR(){return FC}
function zR(){return this.a}
function AR(){if(!this.a||!this.b.j){throw new x$()}this.a=false;return this.b.j}
function uR(){}
_=uR.prototype=new D3();_.gC=yR;_.ab=zR;_.gb=AR;_.tI=0;_.b=null;function qS(b,a){b.o=a;b.o.tabIndex=0;return b}
function sS(){return cD}
function tS(a){var b;b=fL((mq(),a).type);if((b&896)!=0){dU(this,a)}else{dU(this,a)}}
function pS(){}
_=pS.prototype=new CM();_.gC=sS;_.ib=tS;_.tI=47;function kS(a){qS(a,(mq(),$doc).createElement(ld));a.o[eb]=md;return a}
function nS(){return bD}
function jS(){}
_=jS.prototype=new pS();_.gC=nS;_.tI=48;function uS(b){var a;vS(b,(a=(mq(),$doc).createElement(nd),a.type=pd,a),qd);return b}
function vS(c,a,b){c.o=a;c.o.tabIndex=0;if(b!=null){c.o[eb]=b}return c}
function xS(){return dD}
function oS(){}
_=oS.prototype=new pS();_.gC=xS;_.tI=49;function fT(a){gM(a);a.a=(jN(),kN);a.b=(tN(),uN);a.e[Eb]=pm;a.e[Fb]=pm;return a}
function gT(e,g){var d,f;f=(mq(),$doc).createElement(Db);d=iT(e);f.appendChild(d);e.d.appendChild(f);fU(g);yT(e.f,g);d.appendChild(g.o);gU(g,e)}
function iT(b){var a;a=(mq(),$doc).createElement(ac);a[bc]=b.a.a;a.style[dc]=b.b.a;return a}
function jT(f,h,a){var e,g;nM(f,a);g=(mq(),$doc).createElement(Db);e=iT(f);g.appendChild(e);FK(f.d,g,a);pM(f,h,e,a,false)}
function kT(){return fD}
function lT(c){var a,b;b=(mq(),c.o).parentElement;a=qM(this,c);if(a){this.d.removeChild(b.parentElement)}return a}
function dT(){}
_=dT.prototype=new fM();_.gC=kT;_.ob=lT;_.tI=50;function xT(b,a){b.b=a;b.a=gA(oF,0,10,4,0);return b}
function yT(a,b){BT(a,b,a.c)}
function AT(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]==c){return a}}return -1}
function BT(d,e,a){var b,c;if(a<0||a>d.c){throw new f3()}if(d.c==d.a.length){c=gA(oF,0,10,d.a.length*2,0);for(b=0;b<d.a.length;++b){iA(c,b,d.a[b])}d.a=c}++d.c;for(b=d.c-1;b>a;--b){iA(d.a,b,d.a[b-1])}iA(d.a,a,e)}
function CT(c,b){var a;if(b<0||b>=c.c){throw new f3()}--c.c;for(a=b;a<c.c;++a){iA(c.a,a,c.a[a+1])}iA(c.a,c.c,null)}
function DT(b,c){var a;a=AT(b,c);if(a==-1){throw new x$()}CT(b,a)}
function ET(){return hD}
function nT(){}
_=nT.prototype=new D3();_.gC=ET;_.tI=0;_.a=null;_.b=null;_.c=0;function qT(b,a){b.b=a;return b}
function sT(a){if(a.a>=a.b.c){throw new x$()}return a.b.a[++a.a]}
function tT(a){if(a.a<0||a.a>=a.b.c){throw new b3()}a.b.b.ob(a.b.a[a.a--])}
function uT(){return gD}
function vT(){return this.a<this.b.c-1}
function wT(){return sT(this)}
function oT(){}
_=oT.prototype=new D3();_.gC=uT;_.ab=vT;_.gb=wT;_.tI=0;_.a=-1;_.b=null;function uU(){uU=m_;ep().indexOf(rd)==0?sd:td}
function vU(){uU();$wnd.__gwt_transparentImgHandler=function(a){a.onerror=null;ps((mq(),a),$moduleBase+ud)}}
function yU(){yU=m_;uU();vU()}
function CU(b){try{b.focus()}catch(a){if(!b||!b.focus){throw a}}}
function iV(a){return (mq(),a).parentElement}
function eV(b){var a=b.__frame;if(a){a.parentElement.removeChild(a);a.__popup=null;b.__frame=null}}
function fV(b){var a=$doc.createElement(vd);a.src=wd;a.scrolling=xd;a.frameBorder=0;b.__frame=a;a.__popup=b;var c=a.style;c.position=gd;c.filter=yd;c.visibility=b.style.visibility;c.border=0;c.padding=0;c.margin=0;c.left=b.offsetLeft;c.top=b.offsetTop;c.width=b.offsetWidth;c.height=b.offsetHeight;c.zIndex=b.style.zIndex;c.setExpression(ob,Ad);c.setExpression(pb,Bd);c.setExpression(Cd,Dd);c.setExpression(Ed,Fd);c.setExpression(ae,be);b.parentElement.insertBefore(a,b)}
function gV(a,c){if(a.__frame){a.__frame.style.visibility=c?Ec:dl}}
function mV(a){a.a=a_(new F$());return a}
function oV(b){var a,c;c=gA(qF,0,1,b.a.a.b,0);for(a=0;a<c.length;++a){c[a]=(pA(l9(b.a.a,a),27),ce)}return c}
function pV(d,c){var a,b;for(b=v7(new t7(),d.a.a);b.a<b.b.sb();){a=pA(y7(b),27);if(A4(ce,c)){return a}}return null}
function qV(c,a){var b;for(b=v7(new t7(),c.a.a);b.a<b.b.sb();){pA(y7(b),27);throw E2(new D2(),de)}j9(c.a.a,a)}
function rV(){return jD}
function kV(){}
_=kV.prototype=new D3();_.gC=rV;_.tI=0;function tV(b,a){b.a=a;return b}
function vV(){return kD}
function sV(){}
_=sV.prototype=new D3();_.gC=vV;_.tI=0;_.a=null;function yV(){var a,h,i,j,k,l,m,n;l=h9(new g9());m=$wnd.wave.getState();k=m.get(ge);if(k==null||b5(k).length==0){k=he}j=dz(k);if(j.cb()){a=j.cb();for(h=0;h<a.a.length;++h){i=lx(a,h);if(i.eb()){n=i.eb().a;j9(l,iX(new gX(),n.StoryName))}}}return l}
function zV(){var a,h,i,j,k,l,m,n,o;n=$wnd.wave.getState();j=yV();l=n.get(ie);m=h9(new g9());if(l==null||b5(l).length==0){l=he}k=dz(l);if(k.cb()){a=k.cb();for(h=0;h<a.a.length;++h){i=lx(a,h);if(i.eb()){o=i.eb().a;j9(m,jW(o,j))}}}return m}
function AV(b){var a,c,d,e;e=h9(new g9());a=zV();for(d=v7(new t7(),a);d.a<d.b.sb();){c=pA(y7(d),28);if(kX(b,c.b)){iA(e.a,e.b++,c)}}return e}
function jW(f,a){var b,c,d,e,g;e=CX(new qX(),f.TaskType,f.UniqueID);EX(e,f.TaskDescription);g=(tX(),z2(yX,f.TaskState));aY(g);d=f.TaskStory;for(c=v7(new t7(),a);c.a<c.b.sb();){b=pA(y7(c),29);if(A4(b.a,d)){e.b=b;break}}return e}
function nW(){nW=m_;oW=rv(new qv())}
var oW;function qW(){qW=m_;rW=rv(new qv())}
var rW;function uW(){uW=m_;vW=rv(new qv())}
var vW;function zW(){zW=m_;AW=rv(new qv())}
function BW(a){jP(a.d);sZ(a)}
function CW(){return AW}
function DW(){return lD}
function wW(){}
_=wW.prototype=new pv();_.s=BW;_.z=CW;_.gC=DW;_.tI=0;var AW;function aX(){aX=m_;bX=rv(new qv())}
var bX;function eX(){eX=m_;fX=rv(new qv())}
var fX;function jX(){jX=m_;mX=iX(new gX(),je)}
function iX(b,a){jX();b.a=a;return b}
function kX(c,a){var b;if((c==null?null:c)===(a==null?null:a))return true;if(a==null)return false;if(mD!=(a.tM==m_||a.tI==2?a.gC():cB))return false;b=pA(a,29);if(c.a==null){if(b.a!=null)return false}else if(!A4(c.a,b.a))return false;return true}
function nX(a){return kX(this,a)}
function oX(){return mD}
function pX(){var a;a=1;a=31*a+(this.a==null?0:o4(this.a));return a}
function gX(){}
_=gX.prototype=new D3();_.eQ=nX;_.gC=oX;_.hC=pX;_.tI=51;_.a=null;var mX;function CX(b,a,c){tX();b.c=a;b.d=c;return b}
function EX(b,a){if(a==null){throw E2(new D2(),ke)}b.a=a}
function aY(a){if(!a){throw E2(new D2(),le)}}
function bY(a){var b;if(this===(a==null?null:a))return true;if(a==null)return false;if(oD!=(a.tM==m_||a.tI==2?a.gC():cB))return false;b=pA(a,28);if(this.d==null){if(b.d!=null)return false}else if(!A4(this.d,b.d))return false;return true}
function cY(){return oD}
function dY(){var a;a=1;a=31*a+(this.d==null?0:o4(this.d));return a}
function qX(){}
_=qX.prototype=new D3();_.eQ=bY;_.gC=cY;_.hC=dY;_.tI=52;_.a=jm;_.b=null;_.c=null;_.d=null;function tX(){tX=m_;wX=sX(new rX(),me,0);vX=sX(new rX(),ne,1);xX=sX(new rX(),oe,2);uX=sX(new rX(),pe,3);yX={_TODO:wX,_IN_PROGRESS:vX,_WORK_COMPLETED:xX,_CLOSED:uX}}
function sX(c,a,b){tX();c.a=a;c.b=b;return c}
function zX(){return nD}
function rX(){}
_=rX.prototype=new s2();_.gC=zX;_.tI=53;var uX,vX,wX,xX,yX=null;function kY(g){oY(g);return g}
function mY(b){var a;a=CX(new qX(),ce,xG(jG((new Date()).getTime()))+jm);EX(a,b5(zr(b.a.o,re)));return a}
function nY(a){var b;b=fT(new dT());gT(b,cO(new bO(),se));gT(b,cO(new bO(),a.a));return b}
function oY(i){var g,h;i.b=fT(new dT());g=zN(new xN());h=cO(new bO(),te);AN(g,h);i.a=kS(new jS());i.a.o.cols=30;i.a.o.style[Ed]=ue;AN(g,i.a);gT(i.b,g)}
function pY(){return pD}
function jY(){}
_=jY.prototype=new D3();_.gC=pY;_.tI=0;_.a=null;_.b=null;function sY(){return qD}
function qY(){}
_=qY.prototype=new D3();_.gC=sY;_.tI=54;function iZ(a){a.b=fT(new dT());wM(a,a.b);mZ(a);return a}
function jZ(b){var a;a=(jX(),new gX());a.a=b5(zr(b.c.o,re));mZ(b);a.a==null||b5(a.a).length==0}
function lZ(p){var a,n,o;jP(p.b);p.c=uS(new oS());FT(p.c,AY(new zY(),p),(nu(),pu));gT(p.b,p.c);n=zN(new xN());a=bM(new BL(),ve);FT(a,FY(new EY(),p),(gt(),ht));AN(n,a);o=bM(new BL(),we);FT(o,eZ(new dZ(),p),ht);AN(n,o);gT(p.b,n);EM(p.c,true)}
function mZ(a){jP(a.b);a.a=bM(new BL(),xe);FT(a.a,vY(new uY(),a),(gt(),ht));gT(a.b,a.a)}
function nZ(){return vD}
function tY(){}
_=tY.prototype=new uM();_.gC=nZ;_.tI=55;_.a=null;_.b=null;_.c=null;function vY(b,a){b.a=a;return b}
function xY(){return rD}
function yY(a){lZ(this.a)}
function uY(){}
_=uY.prototype=new D3();_.gC=xY;_.jb=yY;_.tI=56;_.a=null;function AY(b,a){b.a=a;return b}
function CY(b,a){if(ou(a.a)==13||ou(a.a)==10){jZ(b.a)}}
function DY(){return sD}
function zY(){}
_=zY.prototype=new D3();_.gC=DY;_.tI=57;_.a=null;function FY(b,a){b.a=a;return b}
function bZ(){return tD}
function cZ(a){mZ(this.a)}
function EY(){}
_=EY.prototype=new D3();_.gC=bZ;_.jb=cZ;_.tI=58;_.a=null;function eZ(b,a){b.a=a;return b}
function gZ(){return uD}
function hZ(a){jZ(this.a)}
function dZ(){}
_=dZ.prototype=new D3();_.gC=gZ;_.jb=hZ;_.tI=59;_.a=null;function pZ(c,a,b){c.b=a;c.c=b;c.d=fT(new dT());wM(c,c.d);sZ(c);ww(c.b.a,(nW(),oW),c);ww(c.b.a,(aX(),bX),c);ww(c.b.a,(zW(),AW),c);return c}
function qZ(c,b){var a;a=c.d.f.c;jT(c.d,n0(new uZ(),c.b,c.c,b),a-1)}
function sZ(g){var d,e,f;g.a=iZ(new tY());gT(g.d,g.a);d=yV();qZ(g,(jX(),mX));for(f=v7(new t7(),d);f.a<f.b.sb();){e=pA(y7(f),29);qZ(g,e)}}
function tZ(){return wD}
function oZ(){}
_=oZ.prototype=new uM();_.gC=tZ;_.tI=60;_.a=null;_.b=null;_.c=null;_.d=null;function n0(d,a,c,b){d.c=a;d.g=c;d.e=b;d.d=zN(new xN());wM(d,d.d);s0(d);ww(d.c.a,(qW(),rW),d);ww(d.c.a,(eX(),fX),d);return d}
function q0(r,q){var a,b,c,d;jP(r.b);b=(pV(r.g,q),kY(new jY()));gT(r.b,cO(new bO(),ye));gT(r.b,b.b);c=zN(new xN());d=bM(new BL(),ve);FT(d,e0(new d0(),r),(gt(),ht));AN(c,d);a=bM(new BL(),ze);FT(a,j0(new i0(),r,b),ht);AN(c,a);gT(r.b,c)}
function o0(t){var m,n,o,p,q,r,s;s=oV(t.g);if(s.length==1){q0(t,s[0])}else{n=sQ(new rP(),true,true);m=iO(new fO(),true);m.b=true;for(p=s,q=0,r=p.length;q<r;++q){o=p[q];pV(t.g,o);kO(m,dP(new cP(),Ae,FZ(new EZ(),t)))}BR(n,m);CQ(n,t.a)}}
function p0(c,a){var b;b=pV(c.g,a.c);if(b){AN(c.d,A0(new v0(),c.c,a))}}
function s0(e){var a,b,c,d;e.f=cO(new bO(),e.e.a);AN(e.d,e.f);a=bM(new BL(),Ce);FT(a,new vZ(),(gt(),ht));AN(e.d,a);e.b=fT(new dT());e.a=bM(new BL(),ye);FT(e.a,AZ(new zZ(),e),ht);gT(e.b,e.a);AN(e.d,e.b);d=AV(e.e);for(c=v7(new t7(),d);c.a<c.b.sb();){b=pA(y7(c),28);p0(e,b)}}
function t0(a){jP(a.b);gT(a.b,a.a)}
function u0(){return CD}
function uZ(){}
_=uZ.prototype=new uM();_.gC=u0;_.tI=61;_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;function xZ(){return xD}
function yZ(a){}
function vZ(){}
_=vZ.prototype=new D3();_.gC=xZ;_.jb=yZ;_.tI=62;function AZ(b,a){b.a=a;return b}
function CZ(){return yD}
function DZ(a){o0(this.a)}
function zZ(){}
_=zZ.prototype=new D3();_.gC=CZ;_.jb=DZ;_.tI=63;_.a=null;function FZ(b,a){b.a=a;return b}
function b0(){q0(this.a,ce)}
function c0(){return zD}
function EZ(){}
_=EZ.prototype=new D3();_.w=b0;_.gC=c0;_.tI=64;_.a=null;function e0(b,a){b.a=a;return b}
function g0(){return AD}
function h0(a){t0(this.a)}
function d0(){}
_=d0.prototype=new D3();_.gC=g0;_.jb=h0;_.tI=65;_.a=null;function j0(b,a,c){b.a=a;b.b=c;return b}
function l0(){return BD}
function m0(a){var b;try{b=mY(this.b);b.b=this.a.e}finally{t0(this.a)}}
function i0(){}
_=i0.prototype=new D3();_.gC=l0;_.jb=m0;_.tI=66;_.a=null;_.b=null;function A0(k,i,j){var g,h;k.c=j;k.a=i;k.b=fT(new dT());wM(k,k.b);oY(new jY());gT(k.b,nY(k.c));g=zN(new xN());h=bM(new BL(),De);FT(h,new w0(),(gt(),gt(),ht));AN(g,h);gT(k.b,g);ww(k.a.a,(uW(),vW),k);return k}
function D0(){return ED}
function v0(){}
_=v0.prototype=new uM();_.gC=D0;_.tI=67;_.a=null;_.b=null;_.c=null;function y0(){return DD}
function z0(a){}
function w0(){}
_=w0.prototype=new D3();_.gC=y0;_.jb=z0;_.tI=68;function lab(){return lF}
function mab(a){this.a=a}
function jab(){}
_=jab.prototype=new dx();_.gC=lab;_.bb=mab;_.tI=0;_.a=null;function g1(){return aE}
function E0(){}
_=E0.prototype=new jab();_.gC=g1;_.tI=0;function a1(d){var a,b,c;d.bb(new x_());a=mV(new kV());qV(a,new qY());b=uw(new Cv(),d);c=pZ(new oZ(),tV(new sV(),b),a);C_(d.a,i1(new h1(),b));tL((mR(),qR(null)),c);return d}
function d1(){return FD}
function F0(){}
_=F0.prototype=new E0();_.gC=d1;_.tI=0;function i1(b,a){b.a=a;return b}
function k1(){return bE}
function h1(){}
_=h1.prototype=new D3();_.gC=k1;_.tI=69;_.a=null;function p1(b,a){b.e=a;return b}
function r1(){return cE}
function o1(){}
_=o1.prototype=new d4();_.gC=r1;_.tI=70;function u1(){return dE}
function s1(){}
_=s1.prototype=new d4();_.gC=u1;_.tI=71;function x1(){x1=m_;w1(new v1(),false);w1(new v1(),true)}
function w1(a,b){x1();a.a=b;return a}
function y1(a){return a!=null&&nA(a.tI,30)&&pA(a,30).a==this.a}
function z1(){return eE}
function A1(){return this.a?1231:1237}
function B1(){return this.a?qc:Ee}
function v1(){}
_=v1.prototype=new D3();_.eQ=y1;_.gC=z1;_.hC=A1;_.tS=B1;_.tI=74;_.a=false;function c2(c,a){var b;b=new D1();b.b=c+a;b.a=4;return b}
function d2(c,a){var b;b=new D1();b.b=c+a;return b}
function e2(c,a){var b;b=new D1();b.b=c+a;b.a=8;return b}
function g2(){return gE}
function h2(){return ((this.a&2)!=0?Fe:(this.a&1)!=0?jm:af)+this.b}
function D1(){}
_=D1.prototype=new D3();_.gC=g2;_.tS=h2;_.tI=0;_.a=0;_.b=null;function a2(){return fE}
function E1(){}
_=E1.prototype=new d4();_.gC=a2;_.tI=75;function C3(){return oE}
function x3(){}
_=x3.prototype=new D3();_.gC=C3;_.tI=76;function l2(a,b){a.a=b;return a}
function n2(a){return a!=null&&nA(a.tI,31)&&pA(a,31).a==this.a}
function o2(){return hE}
function p2(){return ~~Math.max(Math.min(this.a,2147483647),-2147483648)}
function r2(){return jm+this.a}
function k2(){}
_=k2.prototype=new x3();_.eQ=n2;_.gC=o2;_.hC=p2;_.tS=r2;_.tI=77;_.a=0;function E2(b,a){b.e=a;return b}
function a3(){return kE}
function D2(){}
_=D2.prototype=new d4();_.gC=a3;_.tI=78;function c3(b,a){b.e=a;return b}
function e3(){return lE}
function b3(){}
_=b3.prototype=new d4();_.gC=e3;_.tI=79;function g3(b,a){b.e=a;return b}
function i3(){return mE}
function f3(){}
_=f3.prototype=new d4();_.gC=i3;_.tI=80;function l3(g,f){var a,b,c,d,e;c=~~(32/f);a=(1<<f)-1;b=gA(mF,0,-1,c,1);d=(z3(),A3);e=c-1;if(g>=0){while(g>a){b[e--]=d[g&a];g>>=f}}else{while(e>0){b[e--]=d[g&a];g>>=f}}b[e]=d[g&a];return e5(b,e,c)}
function u3(b,a){b.e=a;return b}
function w3(){return nE}
function t3(){}
_=t3.prototype=new d4();_.gC=w3;_.tI=81;function z3(){z3=m_;A3=hA(mF,0,-1,[48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122])}
var A3;function A4(b,a){if(!(a!=null&&nA(a.tI,1))){return false}return String(b)==a}
function E4(c,a,b){b=d5(b);return c.replace(RegExp(a),b)}
function F4(b,a){return b.substr(a,b.length-a)}
function b5(c){if(c.length==0||c[0]>hb&&c[c.length-1]>hb){return c}var a=c.replace(/^(\s*)/,jm);var b=a.replace(/\s*$/,jm);return b}
function d5(b){var a;a=0;while(0<=(a=b.indexOf(bf,a))){if(b.charCodeAt(a+1)==36){b=b.substr(0,a-0)+cf+F4(b,++a)}else{b=b.substr(0,a-0)+F4(b,++a)}}return b}
function e5(c,b,a){c=c.slice(b,a);return String.fromCharCode.apply(null,c)}
function f5(a){return A4(this,a)}
function h5(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function i5(){return sE}
function j5(){return o4(this)}
function k5(){return this}
_=String.prototype;_.eQ=f5;_.gC=i5;_.hC=j5;_.tS=k5;_.tI=2;function j4(){j4=m_;k4={};n4={}}
function l4(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function o4(c){j4();var a=wi+c;var b=n4[a];if(b!=null){return b}b=k4[a];if(b==null){b=l4(c)}p4();return n4[a]=b}
function p4(){if(m4==256){k4=n4;n4={};m4=0}++m4}
var k4,m4=0,n4;function s4(b){var a;b.a=(a=[],a.explicitLength=0,a);return b}
function t4(a,b){kp(a.a,jm+b);return a}
function u4(a,b){lp(a.a,b);return a}
function w4(){return rE}
function x4(){return pp(this.a)}
function q4(){}
_=q4.prototype=new D3();_.gC=w4;_.tS=x4;_.tI=82;function v5(b,a){b.e=a;return b}
function x5(){return uE}
function u5(){}
_=u5.prototype=new d4();_.gC=x5;_.tI=83;function z5(a,b){var c;while(a.ab()){c=a.gb();if(b==null?c==null:Ao(b,c)){return a}}return null}
function B5(d){var a,b,c;c=s4(new q4());a=null;lp(c.a,Eg);b=d.fb();while(b.ab()){if(a!=null){lp(c.a,a)}else{a=li}u4(c,jm+b.gb())}lp(c.a,vh);return pp(c.a)}
function C5(a){throw v5(new u5(),df)}
function D5(b){var a;a=z5(this.fb(),b);return !!a}
function E5(){return vE}
function F5(){return B5(this)}
function y5(){}
_=y5.prototype=new D3();_.q=C5;_.r=D5;_.gC=E5;_.tS=F5;_.tI=0;function C8(b){var a;a=i6(new b6(),b);return o8(new g8(),b,a)}
function D8(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&nA(c.tI,34))){return false}e=pA(c,34);if(pA(this,34).d!=e.d){return false}for(b=d6(new c6(),i6(new b6(),e).a);x7(b.a);){a=pA(y7(b.a),32);d=a.B();f=a.E();if(!(d==null?pA(this,34).c:d!=null&&nA(d.tI,1)?h7(pA(this,34),pA(d,1)):g7(pA(this,34),d,~~Eo(d)))){return false}if(!E$(f,d==null?pA(this,34).b:d!=null&&nA(d.tI,1)?pA(this,34).e[wi+pA(d,1)]:d7(pA(this,34),d,~~Eo(d)))){return false}}return true}
function E8(){return aF}
function F8(){var a,b,c;c=0;for(b=d6(new c6(),i6(new b6(),pA(this,34)).a);x7(b.a);){a=pA(y7(b.a),32);c+=a.hC();c=~~c}return c}
function a9(){var a,b,c,d;d=ai;a=false;for(c=d6(new c6(),i6(new b6(),pA(this,34)).a);x7(c.a);){b=pA(y7(c.a),32);if(a){d+=li}else{a=true}d+=jm+b.B();d+=ef;d+=jm+b.E()}return d+bj}
function f8(){}
_=f8.prototype=new D3();_.eQ=D8;_.gC=E8;_.hC=F8;_.tS=a9;_.tI=0;function E6(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.q(a[f])}}}}
function F6(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=C6(e,c.substring(1));a.q(b)}}}
function a7(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function c7(b,a){return a==null?b.c:a!=null&&nA(a.tI,1)?h7(b,pA(a,1)):g7(b,a,~~Eo(a))}
function f7(b,a){return a==null?b.b:a!=null&&nA(a.tI,1)?b.e[wi+pA(a,1)]:d7(b,a,~~Eo(a))}
function d7(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.B();if(h.v(g,d)){return c.E()}}}return null}
function g7(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.B();if(h.v(g,d)){return true}}}return false}
function h7(b,a){return wi+a in b.e}
function l7(b,a,c){return a==null?j7(b,c):a!=null&&nA(a.tI,1)?k7(b,pA(a,1),c):i7(b,a,c,~~Eo(a))}
function i7(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.B();if(i.v(g,d)){var h=c.E();c.rb(j);return h}}}else{a=i.a[e]=[]}var c=p$(new o$(),g,j);a.push(c);++i.d;return null}
function j7(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function k7(d,a,e){var b,c=d.e;a=wi+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function p7(b,a){return a==null?n7(b):a!=null&&nA(a.tI,1)?o7(b,pA(a,1)):m7(b,a,~~Eo(a))}
function m7(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.B();if(h.v(g,d)){if(a.length==1){delete h.a[e]}else{a.splice(f,1)}--h.d;return c.E()}}}return null}
function n7(b){var a;a=b.b;b.b=null;if(b.c){b.c=false;--b.d}return a}
function o7(d,a){var b,c=d.e;a=wi+a;if(a in c){b=c[a];--d.d;delete c[a]}return b}
function q7(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&Ao(a,b)}
function r7(){return AE}
function a6(){}
_=a6.prototype=new f8();_.v=q7;_.gC=r7;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function d9(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&nA(b.tI,35))){return false}c=pA(b,35);if(c.sb()!=this.sb()){return false}for(a=c.fb();a.ab();){d=a.gb();if(!this.r(d)){return false}}return true}
function e9(){return bF}
function f9(){var a,b,c;a=0;for(b=this.fb();b.ab();){c=b.gb();if(c!=null){a+=Eo(c);a=~~a}}return a}
function b9(){}
_=b9.prototype=new y5();_.eQ=d9;_.gC=e9;_.hC=f9;_.tI=84;function i6(b,a){b.a=a;return b}
function k6(d,c){var a,b,e;if(c!=null&&nA(c.tI,32)){a=pA(c,32);b=a.B();if(c7(d.a,b)){e=f7(d.a,b);return D9(a.E(),e)}}return false}
function l6(a){return k6(this,a)}
function m6(){return xE}
function n6(){return d6(new c6(),this.a)}
function o6(){return this.a.d}
function b6(){}
_=b6.prototype=new b9();_.r=l6;_.gC=m6;_.fb=n6;_.sb=o6;_.tI=85;_.a=null;function d6(c,b){var a;c.b=b;a=h9(new g9());if(c.b.c){j9(a,q6(new p6(),c.b))}F6(c.b,a);E6(c.b,a);c.a=v7(new t7(),a);return c}
function f6(){return wE}
function g6(){return x7(this.a)}
function h6(){return pA(y7(this.a),32)}
function c6(){}
_=c6.prototype=new D3();_.gC=f6;_.ab=g6;_.gb=h6;_.tI=0;_.a=null;_.b=null;function x8(b){var a;if(b!=null&&nA(b.tI,32)){a=pA(b,32);if(E$(this.B(),a.B())&&E$(this.E(),a.E())){return true}}return false}
function y8(){return FE}
function z8(){var a,b;a=0;b=0;if(this.B()!=null){a=Eo(this.B())}if(this.E()!=null){b=Eo(this.E())}return a^b}
function A8(){return this.B()+ef+this.E()}
function v8(){}
_=v8.prototype=new D3();_.eQ=x8;_.gC=y8;_.hC=z8;_.tS=A8;_.tI=86;function q6(b,a){b.a=a;return b}
function s6(){return yE}
function t6(){return null}
function u6(){return this.a.b}
function v6(a){return j7(this.a,a)}
function p6(){}
_=p6.prototype=new v8();_.gC=s6;_.B=t6;_.E=u6;_.rb=v6;_.tI=87;_.a=null;function x6(c,a,b){c.b=b;c.a=a;return c}
function z6(){return zE}
function A6(){return this.a}
function B6(){return this.b.e[wi+this.a]}
function C6(b,a){return x6(new w6(),a,b)}
function D6(a){return k7(this.b,this.a,a)}
function w6(){}
_=w6.prototype=new v8();_.gC=z6;_.B=A6;_.E=B6;_.rb=D6;_.tI=88;_.a=null;_.b=null;function E7(a){this.p(this.sb(),a);return true}
function D7(b,a){throw v5(new u5(),ff)}
function F7(a,b){if(a<0||a>=b){d8(a,b)}}
function a8(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&nA(e.tI,33))){return false}f=pA(e,33);if(this.sb()!=f.sb()){return false}c=this.fb();d=f.fb();while(c.a<c.b.sb()){a=y7(c);b=y7(d);if(!(a==null?b==null:Ao(a,b))){return false}}return true}
function b8(){return CE}
function c8(){var a,b,c;b=1;a=this.fb();while(a.a<a.b.sb()){c=y7(a);b=31*b+(c==null?0:Eo(c));b=~~b}return b}
function d8(a,b){throw g3(new f3(),hf+a+jf+b)}
function e8(){return v7(new t7(),this)}
function s7(){}
_=s7.prototype=new y5();_.q=E7;_.p=D7;_.eQ=a8;_.gC=b8;_.hC=c8;_.fb=e8;_.tI=89;function v7(b,a){b.b=a;return b}
function x7(a){return a.a<a.b.sb()}
function y7(a){if(a.a>=a.b.sb()){throw new x$()}return a.b.F(a.a++)}
function z7(){return BE}
function A7(){return this.a<this.b.sb()}
function B7(){return y7(this)}
function t7(){}
_=t7.prototype=new D3();_.gC=z7;_.ab=A7;_.gb=B7;_.tI=0;_.a=0;_.b=null;function o8(b,a,c){b.a=a;b.b=c;return b}
function r8(a){return c7(this.a,a)}
function s8(){return EE}
function t8(){var a;return a=d6(new c6(),this.b.a),i8(new h8(),a)}
function u8(){return this.b.a.d}
function g8(){}
_=g8.prototype=new b9();_.r=r8;_.gC=s8;_.fb=t8;_.sb=u8;_.tI=90;_.a=null;_.b=null;function i8(a,b){a.a=b;return a}
function l8(){return DE}
function m8(){return x7(this.a.a)}
function n8(){var a;return a=pA(y7(this.a.a),32),a.B()}
function h8(){}
_=h8.prototype=new D3();_.gC=l8;_.ab=m8;_.gb=n8;_.tI=0;_.a=null;function h9(a){a.a=gA(pF,0,0,0,0);a.b=0;return a}
function j9(b,a){iA(b.a,b.b++,a);return true}
function i9(c,a,b){if(a<0||a>c.b){d8(a,c.b)}c.a.splice(a,0,b);++c.b}
function l9(b,a){F7(a,b.b);return b.a[a]}
function m9(c,b,a){for(;a<c.b;++a){if(E$(b,c.a[a])){return a}}return -1}
function n9(c,a){var b;b=(F7(a,c.b),c.a[a]);c.a.splice(a,1);--c.b;return b}
function o9(f,e){var a;a=m9(f,e,0);if(a==-1){return false}n9(f,a);return true}
function p9(e,d){var c,a,b;if(d.length<e.b){d=(a=d,b=dA(0,e.b),hA(a.aC,a.tI,a.qI,b),b)}for(c=0;c<e.b;++c){iA(d,c,e.a[c])}if(d.length>e.b){iA(d,e.b,null)}return d}
function r9(a){return iA(this.a,this.b++,a),true}
function q9(a,b){i9(this,a,b)}
function s9(a){return m9(this,a,0)!=-1}
function u9(a){return F7(a,this.b),this.a[a]}
function t9(){return cF}
function v9(){return this.b}
function g9(){}
_=g9.prototype=new s7();_.q=r9;_.p=q9;_.r=s9;_.F=u9;_.gC=t9;_.sb=v9;_.tI=91;_.a=null;_.b=0;function B9(a){a7(a);return a}
function D9(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&Ao(a,b)}
function E9(){return dF}
function A9(){}
_=A9.prototype=new a6();_.gC=E9;_.tI=92;function a$(a){a.a=B9(new A9());return a}
function b$(c,a){var b;b=l7(c.a,a,c);return b==null}
function f$(b){var a;return a=l7(this.a,b,this),a==null}
function g$(a){return c7(this.a,a)}
function h$(){return eF}
function i$(){var a;return a=d6(new c6(),C8(this.a).b.a),i8(new h8(),a)}
function j$(){return this.a.d}
function k$(){return B5(C8(this.a))}
function F9(){}
_=F9.prototype=new b9();_.q=f$;_.r=g$;_.gC=h$;_.fb=i$;_.sb=j$;_.tS=k$;_.tI=93;_.a=null;function p$(b,a,c){b.a=a;b.b=c;return b}
function r$(){return fF}
function s$(){return this.a}
function t$(){return this.b}
function v$(b){var a;a=this.b;this.b=b;return a}
function o$(){}
_=o$.prototype=new v8();_.gC=r$;_.B=s$;_.E=t$;_.rb=v$;_.tI=94;_.a=null;_.b=null;function z$(){return gF}
function x$(){}
_=x$.prototype=new d4();_.gC=z$;_.tI=95;function E$(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&Ao(a,b)}
function a_(a){a.a=h9(new g9());return a}
function f_(a){return j9(this.a,a)}
function e_(a,b){i9(this.a,a,b)}
function g_(a){return m9(this.a,a,0)!=-1}
function i_(a){return l9(this.a,a)}
function h_(){return hF}
function j_(){return v7(new t7(),this.a)}
function k_(){return this.a.b}
function l_(){return B5(this.a)}
function F$(){}
_=F$.prototype=new s7();_.q=f_;_.p=e_;_.r=g_;_.F=i_;_.gC=h_;_.fb=j_;_.sb=k_;_.tS=l_;_.tI=96;_.a=null;function s_(a){Bw(a.a,(zW(),new wW()))}
function t_(b){var a;if(r_){a=new o_();Bw(b,a);return a}return null}
function u_(){return r_}
function v_(){return iF}
function w_(){if(!r_){r_=rv(new qv())}return r_}
function o_(){}
_=o_.prototype=new pv();_.s=s_;_.z=u_;_.gC=v_;_.tI=0;var r_=null;function C_(b,a){return ww(E_(b),w_(),a)}
function E_(a){if(!hab){hab=a}if(!iab){iab=z_(new y_(),a);$wnd.wave.setModeCallback(dab);$wnd.wave.setParticipantCallback(fab);$wnd.wave.setStateCallback(gab)}return iab}
function cab(){return kF}
function dab(a){}
function fab(){}
function gab(){t_(iab)}
function x_(){}
_=x_.prototype=new D3();_.gC=cab;_.tI=0;var hab=null,iab=null;function z_(b,a){b.d=kw(new iw());b.e=a;b.c=false;return b}
function B_(){return jF}
function y_(){}
_=y_.prototype=new Cv();_.gC=B_;_.tI=97;function l1(){!!$stats&&$stats({moduleName:$moduleName,subSystem:kf,evtGroup:lf,millis:(new Date()).getTime(),type:mf,className:nf});a1(new F0())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{l1()}catch(a){b(d)}else{l1()}}
function m_(){}
var nF=c2(of,pf),pE=d2(qf,rf),aB=d2(tf,uf),eC=d2(vf,wf),FA=d2(tf,xf),tE=d2(qf,yf),jE=d2(qf,zf),qE=d2(qf,Af),bB=d2(Bf,Cf),cB=d2(Bf,Ef),fB=d2(Ff,ag),eB=d2(Ff,bg),dB=d2(Ff,cg),qF=c2(dg,eg),pB=d2(fg,gg),iB=d2(hg,jg),gB=d2(hg,kg),oB=d2(fg,lg),hB=d2(hg,mg),jB=d2(hg,ng),kB=d2(hg,og),lB=d2(hg,pg),mB=d2(qg,rg),nB=d2(fg,sg),tB=d2(fg,ug),sB=d2(fg,vg),qB=d2(fg,wg),rB=d2(fg,xg),uB=d2(yg,zg),iE=d2(qf,Ag),CB=d2(Bg,Cg),vB=d2(Bg,Dg),wB=d2(Bg,Fg),xB=d2(Bg,ah),yB=d2(Bg,bh),zB=d2(Bg,ch),AB=d2(Bg,dh),vE=d2(eh,fh),bF=d2(eh,gh),BB=d2(Bg,hh),rF=c2(jm,ih),eD=d2(kh,lh),iD=d2(kh,mh),vC=d2(kh,nh),lC=d2(kh,oh),hC=d2(kh,ph),nC=d2(kh,qh),iC=d2(kh,rh),jC=d2(kh,sh),kC=d2(kh,th),mC=d2(kh,wh),aD=d2(kh,xh),BC=d2(kh,yh),oF=c2(zh,Ah),rC=d2(kh,Bh),oC=d2(kh,Ch),pC=d2(kh,Dh),qC=d2(kh,Eh),CE=d2(eh,Fh),cF=d2(eh,bi),tC=d2(kh,ci),sC=d2(kh,di),uC=d2(kh,ei),mF=c2(jm,fi),yC=e2(kh,gi),AC=d2(kh,hi),zC=d2(kh,ii),wC=d2(kh,ji),xC=d2(kh,ki),EC=d2(kh,mi),DC=d2(kh,ni),CC=d2(kh,oi),FC=d2(kh,pi),cD=d2(kh,qi),bD=d2(kh,ri),dD=d2(kh,si),fD=d2(kh,ti),hD=d2(kh,ui),gD=d2(kh,vi),DB=d2(vf,xi),bC=d2(vf,yi),aC=d2(vf,zi),EB=d2(vf,Ai),FB=d2(vf,Bi),cC=d2(vf,Ci),dC=d2(vf,Di),fC=d2(vf,Ei),gC=d2(vf,Fi),kD=d2(aj,cj),lD=d2(dj,ej),mD=d2(fj,gj),oD=d2(fj,hj),nD=e2(fj,ij),pD=d2(jj,kj),qD=d2(jj,lj),vD=d2(nj,oj),rD=d2(nj,pj),sD=d2(nj,qj),tD=d2(nj,rj),uD=d2(nj,sj),wD=d2(nj,tj),CD=d2(nj,uj),xD=d2(nj,vj),yD=d2(nj,wj),zD=d2(nj,yj),AD=d2(nj,zj),BD=d2(nj,Aj),ED=d2(nj,Bj),DD=d2(nj,Cj),lF=d2(Dj,Ej),aE=d2(Fj,ak),FD=d2(Fj,bk),bE=d2(Fj,dk),jD=d2(ek,fk),cE=d2(qf,gk),mE=d2(qf,hk),dE=d2(qf,ik),eE=d2(qf,jk),oE=d2(qf,kk),gE=d2(qf,lk),fE=d2(qf,mk),hE=d2(qf,ok),kE=d2(qf,pk),lE=d2(qf,qk),nE=d2(qf,rk),sE=d2(qf,bb),rE=d2(qf,sk),uE=d2(qf,tk),pF=c2(dg,uk),aF=d2(eh,vk),AE=d2(eh,wk),xE=d2(eh,xk),wE=d2(eh,zk),FE=d2(eh,Ak),yE=d2(eh,Bk),zE=d2(eh,Ck),BE=d2(eh,Dk),EE=d2(eh,Ek),DE=d2(eh,Fk),dF=d2(eh,al),eF=d2(eh,bl),fF=d2(eh,cl),gF=d2(eh,fl),hF=d2(eh,gl),iF=d2(Dj,hl),kF=d2(Dj,il),jF=d2(Dj,jl);$stats && $stats({moduleName:'scrumzilla',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (scrumzilla) scrumzilla.onScriptLoad(gwtOnLoad);})();