(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/HVE":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return b})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return p}));var i=n("8Y7J"),s=n("SVse");let r;try{r="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(v){r=!1}let o,c=(()=>{class e{constructor(e){this._platformId=e,this.isBrowser=this._platformId?Object(s.A)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!r)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return e.ngInjectableDef=Object(i.ec)({factory:function(){return new e(Object(i.fc)(i.J,8))},token:e,providedIn:"root"}),e})();class u{}const a=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function h(){if(o)return o;if("object"!=typeof document||!document)return o=new Set(a);let e=document.createElement("input");return o=new Set(a.filter(t=>(e.setAttribute("type",t),e.type===t)))}let l;function d(e){return function(){if(null==l&&"undefined"!=typeof window)try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>l=!0}))}finally{l=l||!1}return l}()?e:!!e.capture}const m=function(){var e={NORMAL:0,NEGATED:1,INVERTED:2};return e[e.NORMAL]="NORMAL",e[e.NEGATED]="NEGATED",e[e.INVERTED]="INVERTED",e}();let _,f;function b(){return!!("object"==typeof document&&"scrollBehavior"in document.documentElement.style)}function g(){if("object"!=typeof document||!document)return m.NORMAL;if(!_){const e=document.createElement("div"),t=e.style;e.dir="rtl",t.height="1px",t.width="1px",t.overflow="auto",t.visibility="hidden",t.pointerEvents="none",t.position="absolute";const n=document.createElement("div"),i=n.style;i.width="2px",i.height="1px",e.appendChild(n),document.body.appendChild(e),_=m.NORMAL,0===e.scrollLeft&&(e.scrollLeft=1,_=0===e.scrollLeft?m.NEGATED:m.INVERTED),e.parentNode.removeChild(e)}return _}function p(){if(null==f){const e="undefined"!=typeof document?document.head:null;f=!(!e||!e.createShadowRoot&&!e.attachShadow)}return f}},"5GAg":function(e,t,n){"use strict";n.d(t,"c",(function(){return w})),n.d(t,"b",(function(){return O})),n.d(t,"g",(function(){return L})),n.d(t,"i",(function(){return F})),n.d(t,"f",(function(){return j})),n.d(t,"j",(function(){return B})),n.d(t,"d",(function(){return R})),n.d(t,"h",(function(){return V})),n.d(t,"e",(function(){return P})),n.d(t,"k",(function(){return W})),n.d(t,"a",(function(){return Z}));var i=n("SVse"),s=n("8Y7J"),r=n("XNiG"),o=n("quSY"),c=n("LRne"),u=n("dvZr"),a=n("vkgz"),h=n("Kj3r"),l=n("pLZG"),d=n("lJxs"),m=n("IzEk"),_=n("/HVE"),f=n("KCVW");const b=" ";function g(e,t){return(e.getAttribute(t)||"").match(/\S+/g)||[]}const p="cdk-describedby-message-container",v="cdk-describedby-message",I="cdk-describedby-host";let A=0;const E=new Map;let y=null,w=(()=>{class e{constructor(e){this._document=e}describe(e,t){this._canBeDescribed(e,t)&&("string"!=typeof t?(this._setMessageId(t),E.set(t,{messageElement:t,referenceCount:0})):E.has(t)||this._createMessageElement(t),this._isElementDescribedByMessage(e,t)||this._addMessageReference(e,t))}removeDescription(e,t){if(this._isElementNode(e)){if(this._isElementDescribedByMessage(e,t)&&this._removeMessageReference(e,t),"string"==typeof t){const e=E.get(t);e&&0===e.referenceCount&&this._deleteMessageElement(t)}y&&0===y.childNodes.length&&this._deleteMessagesContainer()}}ngOnDestroy(){const e=this._document.querySelectorAll(`[${I}]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(I);y&&this._deleteMessagesContainer(),E.clear()}_createMessageElement(e){const t=this._document.createElement("div");this._setMessageId(t),t.textContent=e,this._createMessagesContainer(),y.appendChild(t),E.set(e,{messageElement:t,referenceCount:0})}_setMessageId(e){e.id||(e.id=`${v}-${A++}`)}_deleteMessageElement(e){const t=E.get(e),n=t&&t.messageElement;y&&n&&y.removeChild(n),E.delete(e)}_createMessagesContainer(){if(!y){const e=this._document.getElementById(p);e&&e.parentNode.removeChild(e),(y=this._document.createElement("div")).id=p,y.setAttribute("aria-hidden","true"),y.style.display="none",this._document.body.appendChild(y)}}_deleteMessagesContainer(){y&&y.parentNode&&(y.parentNode.removeChild(y),y=null)}_removeCdkDescribedByReferenceIds(e){const t=g(e,"aria-describedby").filter(e=>0!=e.indexOf(v));e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){const n=E.get(t);!function(e,t,n){const i=g(e,t);i.some(e=>e.trim()==n.trim())||(i.push(n.trim()),e.setAttribute(t,i.join(b)))}(e,"aria-describedby",n.messageElement.id),e.setAttribute(I,""),n.referenceCount++}_removeMessageReference(e,t){const n=E.get(t);n.referenceCount--,function(e,t,n){const i=g(e,t).filter(e=>e!=n.trim());i.length?e.setAttribute(t,i.join(b)):e.removeAttribute(t)}(e,"aria-describedby",n.messageElement.id),e.removeAttribute(I)}_isElementDescribedByMessage(e,t){const n=g(e,"aria-describedby"),i=E.get(t),s=i&&i.messageElement.id;return!!s&&-1!=n.indexOf(s)}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&"object"==typeof t)return!0;const n=null==t?"":`${t}`.trim(),i=e.getAttribute("aria-label");return!(!n||i&&i.trim()===n)}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}}return e.ngInjectableDef=Object(s.ec)({factory:function(){return new e(Object(s.fc)(i.d))},token:e,providedIn:"root"}),e})();class T{constructor(e){this._items=e,this._activeItemIndex=-1,this._activeItem=null,this._wrap=!1,this._letterKeyStream=new r.a,this._typeaheadSubscription=o.a.EMPTY,this._vertical=!0,this._allowedModifierKeys=[],this._skipPredicateFn=e=>e.disabled,this._pressedLetters=[],this.tabOut=new r.a,this.change=new r.a,e instanceof s.L&&e.changes.subscribe(e=>{if(this._activeItem){const t=e.toArray().indexOf(this._activeItem);t>-1&&t!==this._activeItemIndex&&(this._activeItemIndex=t)}})}skipPredicate(e){return this._skipPredicateFn=e,this}withWrap(e=!0){return this._wrap=e,this}withVerticalOrientation(e=!0){return this._vertical=e,this}withHorizontalOrientation(e){return this._horizontal=e,this}withAllowedModifierKeys(e){return this._allowedModifierKeys=e,this}withTypeAhead(e=200){if(this._items.length&&this._items.some(e=>"function"!=typeof e.getLabel))throw Error("ListKeyManager items in typeahead mode must implement the `getLabel` method.");return this._typeaheadSubscription.unsubscribe(),this._typeaheadSubscription=this._letterKeyStream.pipe(Object(a.a)(e=>this._pressedLetters.push(e)),Object(h.a)(e),Object(l.a)(()=>this._pressedLetters.length>0),Object(d.a)(()=>this._pressedLetters.join(""))).subscribe(e=>{const t=this._getItemsArray();for(let n=1;n<t.length+1;n++){const i=(this._activeItemIndex+n)%t.length,s=t[i];if(!this._skipPredicateFn(s)&&0===s.getLabel().toUpperCase().trim().indexOf(e)){this.setActiveItem(i);break}}this._pressedLetters=[]}),this}setActiveItem(e){const t=this._activeItemIndex;this.updateActiveItem(e),this._activeItemIndex!==t&&this.change.next(this._activeItemIndex)}onKeydown(e){const t=e.keyCode,n=["altKey","ctrlKey","metaKey","shiftKey"].every(t=>!e[t]||this._allowedModifierKeys.indexOf(t)>-1);switch(t){case u.m:return void this.tabOut.next();case u.b:if(this._vertical&&n){this.setNextItemActive();break}return;case u.n:if(this._vertical&&n){this.setPreviousItemActive();break}return;case u.k:if(this._horizontal&&n){"rtl"===this._horizontal?this.setPreviousItemActive():this.setNextItemActive();break}return;case u.g:if(this._horizontal&&n){"rtl"===this._horizontal?this.setNextItemActive():this.setPreviousItemActive();break}return;default:return void((n||Object(u.q)(e,"shiftKey"))&&(e.key&&1===e.key.length?this._letterKeyStream.next(e.key.toLocaleUpperCase()):(t>=u.a&&t<=u.o||t>=u.p&&t<=u.h)&&this._letterKeyStream.next(String.fromCharCode(t))))}this._pressedLetters=[],e.preventDefault()}get activeItemIndex(){return this._activeItemIndex}get activeItem(){return this._activeItem}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._items.length-1,-1)}setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(e){const t=this._getItemsArray(),n="number"==typeof e?e:t.indexOf(e),i=t[n];this._activeItem=null==i?null:i,this._activeItemIndex=n}updateActiveItemIndex(e){this.updateActiveItem(e)}_setActiveItemByDelta(e){this._wrap?this._setActiveInWrapMode(e):this._setActiveInDefaultMode(e)}_setActiveInWrapMode(e){const t=this._getItemsArray();for(let n=1;n<=t.length;n++){const i=(this._activeItemIndex+e*n+t.length)%t.length;if(!this._skipPredicateFn(t[i]))return void this.setActiveItem(i)}}_setActiveInDefaultMode(e){this._setActiveItemByIndex(this._activeItemIndex+e,e)}_setActiveItemByIndex(e,t){const n=this._getItemsArray();if(n[e]){for(;this._skipPredicateFn(n[e]);)if(!n[e+=t])return;this.setActiveItem(e)}}_getItemsArray(){return this._items instanceof s.L?this._items.toArray():this._items}}class O extends T{setActiveItem(e){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(e),this.activeItem&&this.activeItem.setActiveStyles()}}class L extends T{constructor(){super(...arguments),this._origin="program"}setFocusOrigin(e){return this._origin=e,this}setActiveItem(e){super.setActiveItem(e),this.activeItem&&this.activeItem.focus(this._origin)}}let C=(()=>{class e{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return function(e){return!!(e.offsetWidth||e.offsetHeight||"function"==typeof e.getClientRects&&e.getClientRects().length)}(e)&&"visible"===getComputedStyle(e).visibility}isTabbable(e){if(!this._platform.isBrowser)return!1;const t=function(e){try{return e.frameElement}catch(t){return null}}((n=e).ownerDocument&&n.ownerDocument.defaultView||window);var n;if(t){const e=t&&t.nodeName.toLowerCase();if(-1===k(t))return!1;if((this._platform.BLINK||this._platform.WEBKIT)&&"object"===e)return!1;if((this._platform.BLINK||this._platform.WEBKIT)&&!this.isVisible(t))return!1}let i=e.nodeName.toLowerCase(),s=k(e);if(e.hasAttribute("contenteditable"))return-1!==s;if("iframe"===i)return!1;if("audio"===i){if(!e.hasAttribute("controls"))return!1;if(this._platform.BLINK)return!0}if("video"===i){if(!e.hasAttribute("controls")&&this._platform.TRIDENT)return!1;if(this._platform.BLINK||this._platform.FIREFOX)return!0}return("object"!==i||!this._platform.BLINK&&!this._platform.WEBKIT)&&!(this._platform.WEBKIT&&this._platform.IOS&&!function(e){let t=e.nodeName.toLowerCase(),n="input"===t&&e.type;return"text"===n||"password"===n||"select"===t||"textarea"===t}(e))&&e.tabIndex>=0}isFocusable(e){return function(e){return!function(e){return function(e){return"input"==e.nodeName.toLowerCase()}(e)&&"hidden"==e.type}(e)&&(function(e){let t=e.nodeName.toLowerCase();return"input"===t||"select"===t||"button"===t||"textarea"===t}(e)||function(e){return function(e){return"a"==e.nodeName.toLowerCase()}(e)&&e.hasAttribute("href")}(e)||e.hasAttribute("contenteditable")||N(e))}(e)&&!this.isDisabled(e)&&this.isVisible(e)}}return e.ngInjectableDef=Object(s.ec)({factory:function(){return new e(Object(s.fc)(_.a))},token:e,providedIn:"root"}),e})();function N(e){if(!e.hasAttribute("tabindex")||void 0===e.tabIndex)return!1;let t=e.getAttribute("tabindex");return"-32768"!=t&&!(!t||isNaN(parseInt(t,10)))}function k(e){if(!N(e))return null;const t=parseInt(e.getAttribute("tabindex")||"",10);return isNaN(t)?-1:t}class x{constructor(e,t,n,i,s=!1){this._element=e,this._checker=t,this._ngZone=n,this._document=i,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,s||this.attachAnchors()}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}destroy(){const e=this._startAnchor,t=this._endAnchor;e&&(e.removeEventListener("focus",this.startAnchorListener),e.parentNode&&e.parentNode.removeChild(e)),t&&(t.removeEventListener("focus",this.endAnchorListener),t.parentNode&&t.parentNode.removeChild(t)),this._startAnchor=this._endAnchor=null}attachAnchors(){return!!this._hasAttached||(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement()))})}focusFirstTabbableElementWhenReady(){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement()))})}focusLastTabbableElementWhenReady(){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement()))})}_getRegionBoundary(e){let t=this._element.querySelectorAll(`[cdk-focus-region-${e}], `+`[cdkFocusRegion${e}], `+`[cdk-focus-${e}]`);for(let n=0;n<t.length;n++)t[n].hasAttribute(`cdk-focus-${e}`)?console.warn(`Found use of deprecated attribute 'cdk-focus-${e}', `+`use 'cdkFocusRegion${e}' instead. The deprecated `+"attribute will be removed in 8.0.0.",t[n]):t[n].hasAttribute(`cdk-focus-region-${e}`)&&console.warn(`Found use of deprecated attribute 'cdk-focus-region-${e}', `+`use 'cdkFocusRegion${e}' instead. The deprecated attribute `+"will be removed in 8.0.0.",t[n]);return"start"==e?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(){const e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");return e?(e.hasAttribute("cdk-focus-initial")&&console.warn("Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0",e),Object(s.hb)()&&!this._checker.isFocusable(e)&&console.warn("Element matching '[cdkFocusInitial]' is not focusable.",e),e.focus(),!0):this.focusFirstTabbableElement()}focusFirstTabbableElement(){const e=this._getRegionBoundary("start");return e&&e.focus(),!!e}focusLastTabbableElement(){const e=this._getRegionBoundary("end");return e&&e.focus(),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children||e.childNodes;for(let n=0;n<t.length;n++){let e=t[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[n]):null;if(e)return e}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children||e.childNodes;for(let n=t.length-1;n>=0;n--){let e=t[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[n]):null;if(e)return e}return null}_createAnchor(){const e=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add("cdk-visually-hidden"),e.classList.add("cdk-focus-trap-anchor"),e.setAttribute("aria-hidden","true"),e}_toggleAnchorTabIndex(e,t){e?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}_executeOnStable(e){this._ngZone.isStable?e():this._ngZone.onStable.asObservable().pipe(Object(m.a)(1)).subscribe(e)}}let F=(()=>{class e{constructor(e,t,n){this._checker=e,this._ngZone=t,this._document=n}create(e,t=!1){return new x(e,this._checker,this._ngZone,this._document,t)}}return e.ngInjectableDef=Object(s.ec)({factory:function(){return new e(Object(s.fc)(C),Object(s.fc)(s.G),Object(s.fc)(i.d))},token:e,providedIn:"root"}),e})();class j{constructor(e,t,n){this._elementRef=e,this._focusTrapFactory=t,this._previouslyFocusedElement=null,this._document=n,this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0)}get enabled(){return this.focusTrap.enabled}set enabled(e){this.focusTrap.enabled=Object(f.c)(e)}get autoCapture(){return this._autoCapture}set autoCapture(e){this._autoCapture=Object(f.c)(e)}ngOnDestroy(){this.focusTrap.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap.attachAnchors(),this.autoCapture&&(this._previouslyFocusedElement=this._document.activeElement,this.focusTrap.focusInitialElementWhenReady())}ngDoCheck(){this.focusTrap.hasAttached()||this.focusTrap.attachAnchors()}}const D=new s.w("liveAnnouncerElement",{providedIn:"root",factory:function(){return null}}),M=new s.w("LIVE_ANNOUNCER_DEFAULT_OPTIONS");let B=(()=>{class e{constructor(e,t,n,i){this._ngZone=t,this._defaultOptions=i,this._document=n,this._liveElement=e||this._createLiveElement()}announce(e,...t){const n=this._defaultOptions;let i,s;return 1===t.length&&"number"==typeof t[0]?s=t[0]:[i,s]=t,this.clear(),clearTimeout(this._previousTimeout),i||(i=n&&n.politeness?n.politeness:"polite"),null==s&&n&&(s=n.duration),this._liveElement.setAttribute("aria-live",i),this._ngZone.runOutsideAngular(()=>new Promise(t=>{clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{this._liveElement.textContent=e,t(),"number"==typeof s&&(this._previousTimeout=setTimeout(()=>this.clear(),s))},100)}))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement&&this._liveElement.parentNode&&(this._liveElement.parentNode.removeChild(this._liveElement),this._liveElement=null)}_createLiveElement(){const e=this._document.getElementsByClassName("cdk-live-announcer-element"),t=this._document.createElement("div");for(let n=0;n<e.length;n++)e[n].parentNode.removeChild(e[n]);return t.classList.add("cdk-live-announcer-element"),t.classList.add("cdk-visually-hidden"),t.setAttribute("aria-atomic","true"),t.setAttribute("aria-live","polite"),this._document.body.appendChild(t),t}}return e.ngInjectableDef=Object(s.ec)({factory:function(){return new e(Object(s.fc)(D,8),Object(s.fc)(s.G),Object(s.fc)(i.d),Object(s.fc)(M,8))},token:e,providedIn:"root"}),e})();class R{constructor(e,t,n,i){this._elementRef=e,this._liveAnnouncer=t,this._contentObserver=n,this._ngZone=i,this._politeness="off"}get politeness(){return this._politeness}set politeness(e){this._politeness="polite"===e||"assertive"===e?e:"off","off"===this._politeness?this._subscription&&(this._subscription.unsubscribe(),this._subscription=null):this._subscription||(this._subscription=this._ngZone.runOutsideAngular(()=>this._contentObserver.observe(this._elementRef).subscribe(()=>{const e=this._elementRef.nativeElement.textContent;e!==this._previousAnnouncedText&&(this._liveAnnouncer.announce(e,this._politeness),this._previousAnnouncedText=e)})))}ngOnDestroy(){this._subscription&&this._subscription.unsubscribe()}}const S=650,K=Object(_.g)({passive:!0,capture:!0});let V=(()=>{class e{constructor(e,t){this._ngZone=e,this._platform=t,this._origin=null,this._windowFocused=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._documentKeydownListener=()=>{this._lastTouchTarget=null,this._setOriginForCurrentEventQueue("keyboard")},this._documentMousedownListener=()=>{this._lastTouchTarget||this._setOriginForCurrentEventQueue("mouse")},this._documentTouchstartListener=e=>{null!=this._touchTimeoutId&&clearTimeout(this._touchTimeoutId),this._lastTouchTarget=e.composedPath?e.composedPath()[0]:e.target,this._touchTimeoutId=setTimeout(()=>this._lastTouchTarget=null,S)},this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)}}monitor(e,t=!1){if(!this._platform.isBrowser)return Object(c.a)(null);const n=Object(f.e)(e);if(this._elementInfo.has(n)){let e=this._elementInfo.get(n);return e.checkChildren=t,e.subject.asObservable()}let i={unlisten:()=>{},checkChildren:t,subject:new r.a};this._elementInfo.set(n,i),this._incrementMonitoredElementCount();let s=e=>this._onFocus(e,n),o=e=>this._onBlur(e,n);return this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",s,!0),n.addEventListener("blur",o,!0)}),i.unlisten=()=>{n.removeEventListener("focus",s,!0),n.removeEventListener("blur",o,!0)},i.subject.asObservable()}stopMonitoring(e){const t=Object(f.e)(e),n=this._elementInfo.get(t);n&&(n.unlisten(),n.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._decrementMonitoredElementCount())}focusVia(e,t,n){const i=Object(f.e)(e);this._setOriginForCurrentEventQueue(t),"function"==typeof i.focus&&i.focus(n)}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_toggleClass(e,t,n){n?e.classList.add(t):e.classList.remove(t)}_setClasses(e,t){this._elementInfo.get(e)&&(this._toggleClass(e,"cdk-focused",!!t),this._toggleClass(e,"cdk-touch-focused","touch"===t),this._toggleClass(e,"cdk-keyboard-focused","keyboard"===t),this._toggleClass(e,"cdk-mouse-focused","mouse"===t),this._toggleClass(e,"cdk-program-focused","program"===t))}_setOriginForCurrentEventQueue(e){this._ngZone.runOutsideAngular(()=>{this._origin=e,this._originTimeoutId=setTimeout(()=>this._origin=null,1)})}_wasCausedByTouch(e){let t=e.target;return this._lastTouchTarget instanceof Node&&t instanceof Node&&(t===this._lastTouchTarget||t.contains(this._lastTouchTarget))}_onFocus(e,t){const n=this._elementInfo.get(t);if(!n||!n.checkChildren&&t!==e.target)return;let i=this._origin;i||(i=this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:this._wasCausedByTouch(e)?"touch":"program"),this._setClasses(t,i),this._emitOrigin(n.subject,i),this._lastFocusOrigin=i}_onBlur(e,t){const n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(n.subject,null))}_emitOrigin(e,t){this._ngZone.run(()=>e.next(t))}_incrementMonitoredElementCount(){1==++this._monitoredElementCount&&this._platform.isBrowser&&this._ngZone.runOutsideAngular(()=>{document.addEventListener("keydown",this._documentKeydownListener,K),document.addEventListener("mousedown",this._documentMousedownListener,K),document.addEventListener("touchstart",this._documentTouchstartListener,K),window.addEventListener("focus",this._windowFocusListener)})}_decrementMonitoredElementCount(){--this._monitoredElementCount||(document.removeEventListener("keydown",this._documentKeydownListener,K),document.removeEventListener("mousedown",this._documentMousedownListener,K),document.removeEventListener("touchstart",this._documentTouchstartListener,K),window.removeEventListener("focus",this._windowFocusListener),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._touchTimeoutId),clearTimeout(this._originTimeoutId))}}return e.ngInjectableDef=Object(s.ec)({factory:function(){return new e(Object(s.fc)(s.G),Object(s.fc)(_.a))},token:e,providedIn:"root"}),e})();class P{constructor(e,t){this._elementRef=e,this._focusMonitor=t,this.cdkFocusChange=new s.r,this._monitorSubscription=this._focusMonitor.monitor(this._elementRef,this._elementRef.nativeElement.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(e=>this.cdkFocusChange.emit(e))}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription.unsubscribe()}}function W(e){return 0===e.buttons}class Z{}},KCVW:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return a}));var i=n("8Y7J");function s(e){return null!=e&&"false"!==`${e}`}function r(e,t=0){return o(e)?Number(e):t}function o(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}function c(e){return Array.isArray(e)?e:[e]}function u(e){return null==e?"":"string"==typeof e?e:`${e}px`}function a(e){return e instanceof i.p?e.nativeElement:e}},Kj3r:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("7o/Q"),s=n("D0XW");function r(e,t=s.a){return n=>n.lift(new o(e,t))}class o{constructor(e,t){this.dueTime=e,this.scheduler=t}call(e,t){return t.subscribe(new c(e,this.dueTime,this.scheduler))}}class c extends i.a{constructor(e,t,n){super(e),this.dueTime=t,this.scheduler=n,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(u,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:e}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}}clearDebounce(){const e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)}}function u(e){e.debouncedNext()}},dvZr:function(e,t,n){"use strict";n.d(t,"m",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return r})),n.d(t,"l",(function(){return o})),n.d(t,"j",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return l})),n.d(t,"n",(function(){return d})),n.d(t,"k",(function(){return m})),n.d(t,"b",(function(){return _})),n.d(t,"p",(function(){return f})),n.d(t,"h",(function(){return b})),n.d(t,"a",(function(){return g})),n.d(t,"o",(function(){return p})),n.d(t,"q",(function(){return v}));const i=9,s=13,r=27,o=32,c=33,u=34,a=35,h=36,l=37,d=38,m=39,_=40,f=48,b=57,g=65,p=90;function v(e,...t){return t.length?t.some(t=>e[t]):e.altKey||e.shiftKey||e.ctrlKey||e.metaKey}}}]);