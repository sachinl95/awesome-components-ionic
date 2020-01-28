function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var u=0;u<n.length;u++){var o=n[u];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(l,o.key,o)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{SdQ4:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J"),e=u("s7LF"),t=function(){function l(n){_classCallCheck(this,l),this.formBuilder=n,this.backgrounds=["assets/yannbf/img/background/background-1.jpg","assets/yannbf/img/background/background-2.jpg","assets/yannbf/img/background/background-3.jpg","assets/yannbf/img/background/background-4.jpg"],this.slideOpts={loop:!0,speed:1500,autoplay:{delay:2e3},effect:"fade"},this.loginForm=n.group({email:["",e.r.required],password:["",e.r.compose([e.r.minLength(6),e.r.required])]})}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"ionViewDidLoad",value:function(){console.log("Hello LoginBackgroundSlider Page")}},{key:"openResetPassword",value:function(){console.log("Reset password clicked")}},{key:"doLogin",value:function(){this.loginForm.valid?console.log("user data",this.loginForm.value.email,this.loginForm.value.password):console.log("Invalid or empty data")}}]),l}(),r=function l(){_classCallCheck(this,l)},a=u("pMnS"),i=u("oBZk"),b=u("SVse"),s=u("ZZ/e"),c=o.Cb({encapsulation:0,styles:[[".scroll-content[_ngcontent-%COMP%]{margin-top:0!important}.logo[_ngcontent-%COMP%]{width:70%;height:auto;padding-top:9vh;margin-bottom:15vh}span[_ngcontent-%COMP%]{color:#fff}.slide-background[_ngcontent-%COMP%]{background-size:cover;background-position:center;background-repeat:no-repeat;border-color:transparent}ion-slides[_ngcontent-%COMP%]{height:100vh}ion-item[_ngcontent-%COMP%]{color:#fff!important;padding-left:10px!important;margin-bottom:10px;--background:transparent!important;font-size:.9em}[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#fff!important}.login-container[_ngcontent-%COMP%]{color:#fff;position:absolute;top:0;padding:10vw;text-align:center;width:100%;margin:0 auto;z-index:2}ion-button[_ngcontent-%COMP%]{opacity:.8}"]],data:{}});function g(l){return o.ac(0,[(l()(),o.Eb(0,0,null,null,4,"ion-slide",[["class","slide-background swiper-no-swiping"]],null,null,null,i.Pb,i.P)),o.Vb(512,null,b.E,b.F,[o.p,o.z,o.M]),o.Db(2,278528,null,0,b.q,[b.E],{ngStyle:[0,"ngStyle"]},null),o.Tb(3,{"background-image":0}),o.Db(4,49152,null,0,s.tb,[o.j,o.p,o.G],null,null)],(function(l,n){var u=l(n,3,0,"url("+n.context.$implicit+")");l(n,2,0,u)}),null)}function d(l){return o.ac(0,[(l()(),o.Eb(0,0,null,null,8,"ion-header",[["no-border",""]],null,null,null,i.tb,i.t)),o.Db(1,49152,null,0,s.E,[o.j,o.p,o.G],null,null),(l()(),o.Eb(2,0,null,0,6,"ion-toolbar",[["translucent",""]],null,null,null,i.Zb,i.Z)),o.Db(3,49152,null,0,s.Fb,[o.j,o.p,o.G],null,null),(l()(),o.Eb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.fb,i.f)),o.Db(5,49152,null,0,s.o,[o.j,o.p,o.G],null,null),(l()(),o.Eb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==o.Qb(l,8).onClick(u)&&e),e}),i.cb,i.c)),o.Db(7,49152,null,0,s.j,[o.j,o.p,o.G],{defaultHref:[0,"defaultHref"]},null),o.Db(8,16384,null,0,s.k,[[2,s.lb],s.Mb],{defaultHref:[0,"defaultHref"]},null),(l()(),o.Eb(9,0,null,null,32,"ion-content",[],null,null,null,i.ob,i.o)),o.Db(10,49152,null,0,s.x,[o.j,o.p,o.G],{fullscreen:[0,"fullscreen"]},null),(l()(),o.Eb(11,0,null,0,3,"ion-slides",[["pager","false"]],null,null,null,i.Qb,i.Q)),o.Db(12,49152,null,0,s.ub,[o.j,o.p,o.G],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),o.tb(16777216,null,0,1,null,g)),o.Db(14,278528,null,0,b.m,[o.Y,o.U,o.y],{ngForOf:[0,"ngForOf"]},null),(l()(),o.Eb(15,0,null,0,26,"div",[["class","login-container"]],null,null,null,null,null)),(l()(),o.Eb(16,0,null,null,0,"img",[["class","logo"],["src","assets/yannbf/img/logo/logo-canon.png"]],null,null,null,null,null)),(l()(),o.Eb(17,0,null,null,24,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,t=l.component;return"submit"===n&&(e=!1!==o.Qb(l,19).onSubmit(u)&&e),"reset"===n&&(e=!1!==o.Qb(l,19).onReset()&&e),"submit"===n&&(e=!1!==t.doLogin()&&e),e}),null,null)),o.Db(18,16384,null,0,e.v,[],null,null),o.Db(19,4210688,null,0,e.o,[[8,null],[8,null]],null,null),o.Vb(2048,null,e.b,null,[e.o]),o.Db(21,16384,null,0,e.n,[[4,e.b]],null,null),(l()(),o.Eb(22,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["Login:"])),(l()(),o.Eb(24,0,null,null,5,"ion-item",[],null,null,null,i.Bb,i.w)),o.Db(25,49152,null,0,s.K,[o.j,o.p,o.G],null,null),(l()(),o.Eb(26,0,null,0,3,"ion-input",[["placeholder","Email"],["type","email"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Qb(l,29)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Qb(l,29)._handleInputEvent(u.target)&&e),e}),i.vb,i.v)),o.Vb(5120,null,e.k,(function(l){return[l]}),[s.Vb]),o.Db(28,49152,null,0,s.J,[o.j,o.p,o.G],{placeholder:[0,"placeholder"],type:[1,"type"]},null),o.Db(29,16384,null,0,s.Vb,[o.p],null,null),(l()(),o.Eb(30,0,null,null,5,"ion-item",[],null,null,null,i.Bb,i.w)),o.Db(31,49152,null,0,s.K,[o.j,o.p,o.G],null,null),(l()(),o.Eb(32,0,null,0,3,"ion-input",[["placeholder","Password"],["type","password"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.Qb(l,35)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==o.Qb(l,35)._handleInputEvent(u.target)&&e),e}),i.vb,i.v)),o.Vb(5120,null,e.k,(function(l){return[l]}),[s.Vb]),o.Db(34,49152,null,0,s.J,[o.j,o.p,o.G],{placeholder:[0,"placeholder"],type:[1,"type"]},null),o.Db(35,16384,null,0,s.Vb,[o.p],null,null),(l()(),o.Eb(36,0,null,null,2,"ion-button",[["class","ion-margin"],["color","danger"]],null,null,null,i.eb,i.e)),o.Db(37,49152,null,0,s.n,[o.j,o.p,o.G],{color:[0,"color"]},null),(l()(),o.Yb(-1,0,["LOGIN"])),(l()(),o.Eb(39,0,null,null,2,"p",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.openResetPassword()&&o),o}),null,null)),(l()(),o.Eb(40,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),o.Yb(-1,null,["Forgot your password?"]))],(function(l,n){var u=n.component;l(n,7,0,"/"),l(n,8,0,"/"),l(n,10,0,!0),l(n,12,0,u.slideOpts,"false"),l(n,14,0,u.backgrounds),l(n,28,0,"Email","email"),l(n,34,0,"Password","password"),l(n,37,0,"danger")}),(function(l,n){l(n,17,0,o.Qb(n,21).ngClassUntouched,o.Qb(n,21).ngClassTouched,o.Qb(n,21).ngClassPristine,o.Qb(n,21).ngClassDirty,o.Qb(n,21).ngClassValid,o.Qb(n,21).ngClassInvalid,o.Qb(n,21).ngClassPending)}))}var p=o.Ab("app-login-background-slider",t,(function(l){return o.ac(0,[(l()(),o.Eb(0,0,null,null,1,"app-login-background-slider",[],null,null,null,d,c)),o.Db(1,114688,null,0,t,[e.d],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),f=u("iInd");u.d(n,"LoginBackgroundSliderPageModuleNgFactory",(function(){return m}));var m=o.Bb(r,[],(function(l){return o.Nb([o.Ob(512,o.m,o.lb,[[8,[a.a,p]],[3,o.m],o.E]),o.Ob(4608,b.p,b.o,[o.A,[2,b.H]]),o.Ob(4608,e.t,e.t,[]),o.Ob(4608,s.c,s.c,[o.G,o.g]),o.Ob(4608,s.Lb,s.Lb,[s.c,o.m,o.x]),o.Ob(4608,s.Rb,s.Rb,[s.c,o.m,o.x]),o.Ob(4608,e.d,e.d,[]),o.Ob(1073742336,b.c,b.c,[]),o.Ob(1073742336,e.s,e.s,[]),o.Ob(1073742336,e.i,e.i,[]),o.Ob(1073742336,s.Hb,s.Hb,[]),o.Ob(1073742336,f.p,f.p,[[2,f.u],[2,f.n]]),o.Ob(1073742336,e.q,e.q,[]),o.Ob(1073742336,r,r,[]),o.Ob(1024,f.l,(function(){return[[{path:"",component:t}]]}),[])])}))}}]);