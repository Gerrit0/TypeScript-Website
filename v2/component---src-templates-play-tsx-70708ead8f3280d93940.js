(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"3FUw":function(e){e.exports=JSON.parse('{"versions":["3.9.2","3.8.3","3.8.2","3.7.5","3.6.3","3.5.1","3.3.3","3.1.6","3.0.1","2.8.1","2.7.2","2.4.1"]}')},"3yYM":function(e,t,a){a("LnO1"),a("3eMz"),a("p+GS"),a("AA1/"),a("yKDW"),a("dtAy"),a("cM8k"),a("yIC7"),a("r0id"),a("RwQI"),a("XjK0"),a("SCO9");var r=function(e){"use strict";var t,a=Object.prototype,r=a.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,a,r){var n=t&&t.prototype instanceof f?t:f,o=Object.create(n.prototype),l=new L(r||[]);return o._invoke=function(e,t,a){var r=p;return function(n,o){if(r===d)throw new Error("Generator is already running");if(r===m){if("throw"===n)throw o;return O()}for(a.method=n,a.arg=o;;){var l=a.delegate;if(l){var i=N(l,a);if(i){if(i===h)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===p)throw r=m,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=d;var c=s(e,t,a);if("normal"===c.type){if(r=a.done?m:u,c.arg===h)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r=m,a.method="throw",a.arg=c.arg)}}}(e,a,l),o}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(r){return{type:"throw",arg:r}}}e.wrap=c;var p="suspendedStart",u="suspendedYield",d="executing",m="completed",h={};function f(){}function y(){}function g(){}var v={};v[o]=function(){return this};var w=Object.getPrototypeOf,E=w&&w(w(C([])));E&&E!==a&&r.call(E,o)&&(v=E);var b=g.prototype=f.prototype=Object.create(v);function x(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function _(e){var t;this._invoke=function(a,n){function o(){return new Promise((function(t,o){!function t(a,n,o,l){var i=s(e[a],e,n);if("throw"!==i.type){var c=i.arg,p=c.value;return p&&"object"==typeof p&&r.call(p,"__await")?Promise.resolve(p.__await).then((function(e){t("next",e,o,l)}),(function(e){t("throw",e,o,l)})):Promise.resolve(p).then((function(e){c.value=e,o(c)}),(function(e){return t("throw",e,o,l)}))}l(i.arg)}(a,n,t,o)}))}return t=t?t.then(o,o):o()}}function N(e,a){var r=e.iterator[a.method];if(r===t){if(a.delegate=null,"throw"===a.method){if(e.iterator.return&&(a.method="return",a.arg=t,N(e,a),"throw"===a.method))return h;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,e.iterator,a.arg);if("throw"===n.type)return a.method="throw",a.arg=n.arg,a.delegate=null,h;var o=n.arg;return o?o.done?(a[e.resultName]=o.value,a.next=e.nextLoc,"return"!==a.method&&(a.method="next",a.arg=t),a.delegate=null,h):o:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,h)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function C(e){if(e){var a=e[o];if(a)return a.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,l=function a(){for(;++n<e.length;)if(r.call(e,n))return a.value=e[n],a.done=!1,a;return a.value=t,a.done=!0,a};return l.next=l}}return{next:O}}function O(){return{value:t,done:!0}}return y.prototype=b.constructor=g,g.constructor=y,g[i]=y.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},x(_.prototype),_.prototype[l]=function(){return this},e.AsyncIterator=_,e.async=function(t,a,r,n){var o=new _(c(t,a,r,n));return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},x(b),b[i]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=C,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var a in this)"t"===a.charAt(0)&&r.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var a=this;function n(r,n){return i.type="throw",i.arg=e,a.next=r,n&&(a.method="next",a.arg=t),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var l=this.tryEntries[o],i=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var c=r.call(l,"catchLoc"),s=r.call(l,"finallyLoc");if(c&&s){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),k(a),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;k(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,a,r){return this.delegate={iterator:C(e),resultName:a,nextLoc:r},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=r}catch(n){Function("r","regeneratorRuntime = r")(r)}},VtSi:function(e,t,a){e.exports=a("3yYM")},tBe8:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"query",(function(){return v}));a("yKDW"),a("dtAy");var r=a("VtSi"),n=a.n(r),o=(a("3yYM"),a("Yyzt"),a("Bu8c"),a("ERkP")),l=a.n(o),i=a("7nmT"),c=a.n(i),s=a("9Dj+"),p=a("Wbzz"),u=(a("qcTE"),a("OSeq")),d=a("yVh0"),m=a("I56Z"),h=a("GO2c"),f=a("3FUw");function y(e,t,a,r,n,o,l){try{var i=e[o](l),c=i.value}catch(s){return void a(s)}i.done?t(c):Promise.resolve(c).then(r,n)}var g=function(t){var a=Object(m.a)(Object(d.a)());return Object(o.useEffect)((function(){if(!("playgroundLoaded"in window)){window.playgroundLoaded=!0,window.optionsSummary=t.pageContext.optionsSummary,window.react=l.a,window.reactDOM=c.a,window.i=a;var r=document.createElement("script");r.src=Object(p.withPrefix)("/js/vs.loader.js"),r.async=!0,r.onload=function(){var r=new URLSearchParams(location.search),o=(r.get("ts")?"Nightly"===r.get("ts")?"next":r.get("ts"):void 0)||f.versions.sort().pop(),i="dev"===o?"http://localhost:5615/dev/vs":"https://typescript.azureedge.net/cdn/"+o+"/monaco/min/vs",c=e.require;c.config({paths:{vs:i,"typescript-sandbox":Object(p.withPrefix)("/js/sandbox"),"typescript-playground":Object(p.withPrefix)("/js/playground"),unpkg:"https://unpkg.com/",local:"http://localhost:5000"},ignoreDuplicateModules:["vs/editor/editor.main"]}),c(["vs/editor/editor.main","vs/language/typescript/tsWorker","typescript-sandbox/index","typescript-playground/index"],function(){var o,i=(o=n.a.mark((function o(i,c,s,u){var d,m,h,f,y,g,v;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d=e.ts,i&&d&&s&&u?null===(m=document.getElementById("loader").parentNode)||void 0===m||m.removeChild(document.getElementById("loader")):(console.error("Errr"),console.error("main",!!i,"ts",!!d,"sandbox",!!s,"playground",!!u)),(h=document.getElementById("playground-container")).style.display="flex",f=Math.max(window.innerHeight,600),h.style.height=f-Math.round(h.getClientRects()[0].top)-18+"px",n.next=9,s.createTypeScriptSandbox({text:localStorage.getItem("sandbox-history")||a("play_default_code_sample"),compilerOptions:{},domID:"monaco-editor-embed",useJavaScript:!!r.get("useJavaScript"),acquireTypes:!localStorage.getItem("disable-ata")},i,d);case 9:y=n.sent,g={lang:t.pageContext.lang,prefix:Object(p.withPrefix)("/"),supportCustomPlugins:!0},u.setupPlayground(y,i,g,a,l.a),(v=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)")).matches&&y.monaco.editor.setTheme("sandbox-dark"),v.addListener((function(e){var t=e.matches?"sandbox-dark":"sandbox-light";y.monaco.editor.setTheme(t)})),y.editor.focus(),y.editor.layout();case 17:case"end":return n.stop()}}),o)})),function(){var e=this,t=arguments;return new Promise((function(a,r){var n=o.apply(e,t);function l(e){y(n,a,r,l,i,"next",e)}function i(e){y(n,a,r,l,i,"throw",e)}l(void 0)}))});return function(e,t,a,r){return i.apply(this,arguments)}}())},document.body.appendChild(r)}}),[]),l.a.createElement(s.a,{title:a("head_playground_title"),description:a("head_playground_description"),lang:t.pageContext.lang,allSitePage:t.data.allSitePage},l.a.createElement("nav",{className:"navbar-sub"},l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{className:"name hide-small"},l.a.createElement("span",null,"Playground")),l.a.createElement("li",{className:"dropdown"},l.a.createElement("a",{id:"compiler-options-button",href:"#",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"menu","aria-expanded":"false","aria-controls":"compiler-options-dropdown"},a("play_subnav_config")," ",l.a.createElement("span",{className:"caret"})),l.a.createElement("ul",{id:"compiler-options-dropdown",className:"examples-dropdown","aria-labelledby":"compiler-options-button"},l.a.createElement("h3",null,a("play_subnav_config")),l.a.createElement("div",{className:"info",id:"config-container"},l.a.createElement("button",{className:"examples-close"},a("play_subnav_examples_close")),l.a.createElement("div",{id:"compiler-dropdowns"},l.a.createElement("label",{className:"select"},l.a.createElement("span",{className:"select-label"},"Lang"),l.a.createElement("select",{id:"language-selector"},l.a.createElement("option",null,"TypeScript"),l.a.createElement("option",null,"JavaScript")),l.a.createElement("span",{className:"compiler-flag-blurb"},a("play_config_language_blurb"))))))),l.a.createElement("li",{className:"dropdown"},l.a.createElement("a",{href:"#",id:"examples-button",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"menu","aria-expanded":"false","aria-controls":"examples"},a("play_subnav_examples")," ",l.a.createElement("span",{className:"caret"})),l.a.createElement("ul",{className:"examples-dropdown",id:"examples","aria-labelledby":"examples-button"},l.a.createElement("button",{className:"examples-close","aria-label":"Close dropdown",role:"button"},a("play_subnav_examples_close")),l.a.createElement(u.a,{defaultSection:"JavaScript",sections:["JavaScript","TypeScript"],examples:t.pageContext.examplesTOC,locale:t.pageContext.lang}))),l.a.createElement("li",{className:"dropdown"},l.a.createElement("a",{href:"#",id:"whatisnew-button",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"menu","aria-expanded":"false","aria-controls":"whatisnew"},a("play_subnav_whatsnew")," ",l.a.createElement("span",{className:"caret"})),l.a.createElement("ul",{className:"examples-dropdown",id:"whatisnew","aria-labelledby":"whatisnew-button"},l.a.createElement("button",{role:"button","aria-label":"Close dropdown",className:"examples-close"},a("play_subnav_examples_close")),l.a.createElement(u.a,{defaultSection:"3.8",sections:["3.8","3.7","Playground"],examples:t.pageContext.examplesTOC,locale:t.pageContext.lang})))),l.a.createElement("ul",{className:"nav navbar-nav navbar-right hidden-xs"},l.a.createElement("li",null,l.a.createElement("a",{href:"#",id:"playground-settings",role:"button"},"Settings")))),l.a.createElement("div",{className:"raised",style:{paddingTop:"0",marginTop:"0",marginBottom:"3rem",paddingBottom:"1.5rem"}},l.a.createElement("div",{id:"loader"},l.a.createElement("div",{className:"lds-grid"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)),l.a.createElement("p",{id:"loading-message"},a("play_downloading_typescript"))),l.a.createElement("div",{id:"playground-container",style:{display:"none"}},l.a.createElement("div",{id:"editor-container"},l.a.createElement("div",{id:"editor-toolbar",className:"navbar-sub"},l.a.createElement("ul",null,l.a.createElement("li",{id:"versions",className:"dropdown"},l.a.createElement("a",{href:"#","data-toggle":"dropdown",role:"button","aria-haspopup":"menu","aria-expanded":"false","aria-controls":"versions-dropdown",id:"versions-button"},a("play_downloading_version"),"... ",l.a.createElement("span",{className:"caret"})),l.a.createElement("ul",{className:"dropdown-menu versions",id:"versions-dropdown","aria-labelledby":"versions-button"})),l.a.createElement("li",null,l.a.createElement("a",{id:"run-button",href:"#",role:"button"},a("play_toolbar_run"))),l.a.createElement("li",{className:"dropdown"},l.a.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false","aria-controls":"export-dropdown-menu"},a("play_toolbar_export")," ",l.a.createElement("span",{className:"caret"})),l.a.createElement("ul",{className:"dropdown-menu",id:"export-dropdown-menu","aria-labelledby":"whatisnew-button"},l.a.createElement("li",null,l.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.reportIssue()},"aria-label":a("play_export_report_issue")},a("play_export_report_issue"))),l.a.createElement("li",{role:"separator",className:"divider"}),l.a.createElement("li",null,l.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.copyAsMarkdownIssue()},"aria-label":a("play_export_copy_md")},a("play_export_copy_md"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.copyForChat()},"aria-label":a("play_export_copy_link")},a("play_export_copy_link"))),l.a.createElement("li",null," ",l.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.copyForChatWithPreview()},"aria-label":a("play_export_copy_link_preview")},a("play_export_copy_link_preview"))),l.a.createElement("li",{role:"separator",className:"divider"}),l.a.createElement("li",null,l.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.openInTSAST()},"aria-label":a("play_export_tsast")},a("play_export_tsast"))),l.a.createElement("li",{role:"separator",className:"divider"}),l.a.createElement("li",null,l.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.openProjectInCodeSandbox()},"aria-label":a("play_export_sandbox")},a("play_export_sandbox"))),l.a.createElement("li",null,l.a.createElement("a",{href:"#",onClick:function(){return playground.exporter.openProjectInStackBlitz()},"aria-label":a("play_export_stackblitz")},a("play_export_stackblitz")))))),l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement("a",{id:"sidebar-toggle","aria-label":"Hide Sidebar",href:"#"},"⇥")))),l.a.createElement("div",{id:"monaco-editor-embed"})))))};t.default=function(e){return l.a.createElement(h.a,{locale:e.pageContext.lang},l.a.createElement(g,e))};var v="1391772986"}.call(this,a("fRV1"))}}]);
//# sourceMappingURL=component---src-templates-play-tsx-70708ead8f3280d93940.js.map