(function(n){function e(e){for(var a,c,u=e[0],i=e[1],s=e[2],d=0,h=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&h.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],a=!0,c=1;c<t.length;c++){var i=t[c];0!==r[i]&&(a=!1)}a&&(o.splice(e--,1),n=u(u.s=t[0]))}return n}var a={},r={app:0},o=[];function c(n){return u.p+"assets/js/"+({}[n]||n)+"."+{"chunk-2d0a347f":"2e29fe88","chunk-2d0aa2a0":"a5113ea5","chunk-2d0aaa20":"162110d3","chunk-2d0abc9c":"510c988e","chunk-2d0af2eb":"04b0f98f","chunk-2d0b23d5":"044b1b8f","chunk-2d0b2c8d":"82594de7","chunk-2d0b5d28":"0e6baf85","chunk-2d0b61b8":"cd09bc17","chunk-2d0b65d2":"eb1160ff","chunk-2d0ba8ad":"95ed95a2","chunk-2d0bd92c":"93be46bb","chunk-2d0be0f8":"61bc33ae","chunk-2d0c1599":"96c50e2c","chunk-2d0c212b":"38aa8346","chunk-2d0c7774":"25e30f65","chunk-2d0c8c32":"c3e73592","chunk-2d0c8d4c":"e9b7fb79","chunk-2d0c9ae8":"c3547830","chunk-2d0cbed1":"ad1cffdd","chunk-2d0cc9f4":"212a2df8","chunk-2d0cebd1":"e72c8424","chunk-2d0d7c39":"12e5b4ab","chunk-2d0de03e":"939468b0","chunk-2d0e2111":"3ae1bc9c","chunk-2d0e2581":"0a5e0f63","chunk-2d0e64e6":"61dc237e","chunk-2d0e905b":"d04c5b94","chunk-2d207ae5":"9721d3d4","chunk-2d213763":"b4d3741e","chunk-2d2138d8":"56c82fcf","chunk-2d2162a0":"839c3a4c","chunk-2d2165f1":"8fd7dd76","chunk-2d21a959":"5391470d","chunk-2d21af17":"67ea689f","chunk-2d225467":"b7b6b417","chunk-2d225813":"52100034","chunk-2d226364":"9dd439ab","chunk-2d229b89":"d7be1990","chunk-2d22cbf8":"47a188d4","chunk-2d230678":"bd69d8e7","chunk-2d2311a9":"5f8997f9","chunk-2d237941":"60340ec4","chunk-79a230e6":"ba433020"}[n]+".js"}function u(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(n){var e=[],t=r[n];if(0!==t)if(t)e.push(t[2]);else{var a=new Promise((function(e,a){t=r[n]=[e,a]}));e.push(t[2]=a);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(n);var s=new Error;o=function(e){i.onerror=i.onload=null,clearTimeout(d);var t=r[n];if(0!==t){if(t){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+n+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,t[1](s)}r[n]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(e)},u.m=n,u.c=a,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)u.d(t,a,function(e){return n[e]}.bind(null,a));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/",u.oe=function(n){throw console.error(n),n};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var l=s;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"3dfd":function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticStyle:{height:"100%"},attrs:{id:"app"}},[t("Header"),t("main",{staticClass:"container-fluid"},[t("aside",[t("Menu")],1),t("section",[t("div",{staticStyle:{"margin-top":"5px"}},[n.breadcrumb.length>0?t("b-breadcrumb",{attrs:{items:n.breadcrumb}}):n._e()],1),t("router-view"),t("vue-progress-bar")],1)]),t("Footer")],1)},r=[],o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("header",{staticClass:"container-fluid",attrs:{id:"header",role:"banner"}},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-8"},[t("div",{staticClass:"col logo"},[t("h1",[t("router-link",{attrs:{to:"/"}},[n._v("Portal da Transparência")])],1),t("span",[n._v("Prefeitura Municipal de São Leopoldo")])])]),t("div",{staticClass:"col-sm"},[t("ul",{staticClass:"menu-borda",attrs:{role:"menubar"}},[t("li",{attrs:{role:"menuitem"}},[t("a",{attrs:{href:"#"},on:{click:function(e){return n.aumentarFonte()}}},[n._v("A+")])]),t("li",{attrs:{role:"menuitem"}},[t("a",{attrs:{href:"#"},on:{click:function(e){return n.diminuirFonte()}}},[n._v("A-")])]),t("li",{attrs:{role:"menuitem"}},[t("a",{attrs:{href:"#"},on:{click:function(e){return n.resetarFonte()}}},[n._v("A")])]),n._m(0),t("li",{attrs:{role:"menuitem"}},[t("router-link",{attrs:{to:"/glossario"}},[n._v("GLOSSARIO")])],1),t("li",{attrs:{role:"menuitem"}},[t("router-link",{attrs:{to:"/mapa-do-site"}},[n._v("MAPA DO SITE")])],1)])])])]),t("div",{staticClass:"row",attrs:{id:"busca-rapida"}},[t("div",{staticClass:"col"}),t("div",{staticClass:"col"},[t("form",{on:{submit:n.onSubmitForm}},[t("div",{staticClass:"input-group"},[n._m(1),t("input",{directives:[{name:"model",rawName:"v-model",value:n.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search...",name:"",id:"search"},domProps:{value:n.search},on:{input:function(e){e.target.composing||(n.search=e.target.value)}}}),t("div",{staticClass:"input-group-append"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t("b-icon-search")],1)])])])]),t("div",{staticClass:"col"})])])},c=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("li",{attrs:{role:"menuitem"}},[t("a",{attrs:{href:"#"}},[n._v("ALTO CONSTRATE")])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"input-group-prepend"},[t("span",{staticClass:"input-group-text"},[n._v("Procurar")])])}],u=(t("ac1f"),t("841c"),{name:"Header",data:function(){return{search:"",fontSizeAtual:16,fontSizeDefault:16}},methods:{setFontSize:function(n){window.jQuery("main").css("font-size",n+"px")},aumentarFonte:function(){var n=++this.fontSizeAtual;this.setFontSize(n)},diminuirFonte:function(){var n=--this.fontSizeAtual;this.setFontSize(n)},resetarFonte:function(){var n=this.fontSizeDefault;this.setFontSize(n)},onSubmitForm:function(n){n.preventDefault();var e="/busca-rapida/".concat(this.search);this.$router.push(e)}}}),i=u,s=t("2877"),d=Object(s["a"])(i,o,c,!1,null,null,null),l=d.exports,h=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-tree",{attrs:{"scope-data":n.menus},scopedSlots:n._u([{key:"default",fn:function(e){return t("ul",{},n._l(e,(function(e){return t("li",{key:e.title},[e.url?t("router-link",{attrs:{to:e.url}},[n._v(n._s(e.title))]):t("span",[n._v(n._s(e.title))]),e.children?t("v-tree",{attrs:{"scope-data":e.children}}):n._e()],1)})),0)}}])})},f=[],p={name:"Footer",data:function(){return{menus:this.$store.getters.menus}}},b=p,m=Object(s["a"])(b,h,f,!1,null,null,null),k=m.exports,_=function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},v=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("footer",{staticClass:"container-fluid"},[t("div",{staticClass:"row",attrs:{id:"share"}}),t("div",{staticClass:"row",attrs:{id:"rodape"}})])}],g={name:"Footer"},S=g,w=Object(s["a"])(S,_,v,!1,null,null,null),y=w.exports,A={name:"home",assetsDir:"assets/",components:{Header:l,Menu:k,Footer:y},data:function(){return{breadcrumb:[]}},mounted:function(){this.$Progress.finish()},created:function(){var n=this;document.title="Portal da Transparência",this.$Progress.start(),this.$router.beforeEach((function(e,t,a){if(void 0!==e.meta.progress){var r=e.meta.progress;n.$Progress.parseMeta(r)}n.$Progress.start(),a()})),this.$router.afterEach((function(e){n.$store.dispatch("refreshBreadcrumb",e.path),n.$data.breadcrumb=n.$store.getters.breadcrumb,n.$Progress.finish()}))}},C=A,E=Object(s["a"])(C,a,r,!1,null,null,null);e["a"]=E.exports},4360:function(n,e,t){"use strict";t("ac1f"),t("1276"),t("96cf");var a=t("1da1"),r=t("2b0e"),o=t("2f62"),c=t("bc3a"),u=t.n(c),i=t("2ef0"),s=t.n(i);r["default"].use(o["a"]),e["a"]=new o["a"].Store({state:{menus:[],paginas_dinamicas:[],glossario:[],breadcrumb:[]},getters:{menus:function(n){return n.menus},paginas_dinamicas:function(n){return function(e){return n.paginas_dinamicas[e]}},glossario:function(n){return n.glossario},breadcrumb:function(n){return n.breadcrumb}},mutations:{SET_MENUS:function(n,e){n.menus=e},SET_PAGINAS_DINAMICAS:function(n,e){n.paginas_dinamicas=e},SET_PAGINAS_GLOSSARIO:function(n,e){n.glossario=e},SET_BREADCRUMB:function(n,e){n.breadcrumb=e}},actions:{fetchData:function(n){return Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.commit,e.next=3,u.a.get("https://gist.githubusercontent.com/rodrigowaters/b7c4b0d879a97979010cbf40a0608f93/raw/f0b72ecbcfe4b4432a20ebdf6f26e9af90d94ae7/getInfos.json",{headers:{"Content-Type":"application/json"}}).then((function(n){t("SET_MENUS",n.data.menus),t("SET_PAGINAS_DINAMICAS",n.data.paginas_dinamicas),t("SET_PAGINAS_GLOSSARIO",n.data.glossario)})).catch((function(n){alert(n)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))()},refreshBreadcrumb:function(n,e){var t=n.commit,a=[{text:"Home",href:"/"}],r=s.a.split(e,"/");s.a.each(r,(function(n){s.a.isEmpty(n)||a.push({text:n,href:"#"})})),t("SET_BREADCRUMB",a)}}})},"56d7":function(n,e,t){"use strict";t.r(e),function(n){t("e260"),t("e6cf"),t("cca6"),t("a79d");var e=t("2b0e"),a=t("3dfd"),r=(t("ddb8"),t("a18c")),o=t("4360"),c=t("5f5b"),u=t("b1e0"),i=(t("f9e3"),t("2dd8"),t("b519"),t("26b9")),s=t.n(i),d=t("d3db");e["default"].config.productionTip=!1,n.jQuery=t("1157");var l=n.jQuery;window.$=l,e["default"].use(c["a"]),e["default"].use(u["a"]),e["default"].use(s.a,{color:"rgb(143, 255, 199)",failedColor:"red",height:"2px"}),e["default"].component("v-tree",d["a"]),o["a"].dispatch("fetchData").then((function(){new e["default"]({router:r["a"],store:o["a"],render:function(n){return n(a["a"])}}).$mount("#app")})).catch((function(n){alert(n)}))}.call(this,t("c8ba"))},a18c:function(n,e,t){"use strict";t("d3b7");var a=t("2b0e"),r=t("8c4f"),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v(" Home ")])},c=[],u={name:"home"},i=u,s=t("2877"),d=Object(s["a"])(i,o,c,!1,null,null,null),l=d.exports;a["default"].use(r["a"]);var h=function(n,e,t){var a=!0;a?t():t("/sem-login")},f=[{path:"/",name:"home",component:l},{path:"/acesso_informacao",component:function(){return t.e("chunk-2d2138d8").then(t.bind(null,"acbb"))}},{path:"/acesso_informacao/solicitar",component:function(){return t.e("chunk-2d225813").then(t.bind(null,"e54a"))}},{path:"/acesso_informacao/consultar",component:function(){return t.e("chunk-2d0de03e").then(t.bind(null,"849e"))}},{path:"/relatorio_acesso_informacao",component:function(){return t.e("chunk-2d0aaa20").then(t.bind(null,"129b"))}},{path:"/faleconosco",component:function(){return t.e("chunk-2d207ae5").then(t.bind(null,"a220"))}},{path:"/mapa-do-site",component:function(){return t.e("chunk-2d0c8d4c").then(t.bind(null,"570d"))}},{path:"/busca-rapida",component:function(){return t.e("chunk-79a230e6").then(t.bind(null,"05ab"))}},{path:"/busca-rapida/:query",component:function(){return t.e("chunk-79a230e6").then(t.bind(null,"05ab"))},props:!0},{path:"/faq",component:function(){return t.e("chunk-2d226364").then(t.bind(null,"e861"))}},{path:"/faq/perguntar",component:function(){return t.e("chunk-2d0ba8ad").then(t.bind(null,"383e"))}},{path:"/glossario",component:function(){return t.e("chunk-2d213763").then(t.bind(null,"ad7a"))}},{path:"/solicitar_senha",component:function(){return t.e("chunk-2d0c212b").then(t.bind(null,"496f"))}},{path:"/contra_cheque",component:function(){return t.e("chunk-2d0b65d2").then(t.bind(null,"1d9b"))},beforeEnter:h},{path:"/rendimentos",component:function(){return t.e("chunk-2d0e64e6").then(t.bind(null,"97d6"))},beforeEnter:h},{path:"/sem-login",component:function(){return t.e("chunk-2d230678").then(t.bind(null,"ebaf"))}},{path:"/contrato",component:function(){return t.e("chunk-2d0bd92c").then(t.bind(null,"2d26"))}},{path:"/consulta_imoveis_veiculos",component:function(){return t.e("chunk-2d0a347f").then(t.bind(null,"0207"))}},{path:"/contas_publicas",component:function(){return t.e("chunk-2d0d7c39").then(t.bind(null,"77cf"))}},{path:"/contas_publicas/balanco_orcamentario",component:function(){return t.e("chunk-2d0b5d28").then(t.bind(null,"1b12"))}},{path:"/contas_publicas/demonstrativo_anual_receita_despesa",component:function(){return t.e("chunk-2d229b89").then(t.bind(null,"df3d"))}},{path:"/contas_publicas/execucao_orcamentos",component:function(){return t.e("chunk-2d0be0f8").then(t.bind(null,"2f3a"))}},{path:"/contas_publicas/orcamentos_anuais",component:function(){return t.e("chunk-2d0b23d5").then(t.bind(null,"22ed"))}},{path:"/contas_publicas/tributos_arrecadados",component:function(){return t.e("chunk-2d0e2581").then(t.bind(null,"7dfd"))}},{path:"/contas_publicas/recursos_recebidos",component:function(){return t.e("chunk-2d0c1599").then(t.bind(null,"4656"))}},{path:"/contas_publicas/compras",component:function(){return t.e("chunk-2d0c9ae8").then(t.bind(null,"59d2"))}},{path:"/contas_publicas/resumo_contratos_aditivos",component:function(){return t.e("chunk-2d0b61b8").then(t.bind(null,"1c6f"))}},{path:"/contas_publicas/resumo_contratos_aditivos_obras_servicos_engenharia",component:function(){return t.e("chunk-2d22cbf8").then(t.bind(null,"f50c"))}},{path:"/despesas",component:function(){return t.e("chunk-2d21a959").then(t.bind(null,"bbad"))}},{path:"/despesas/diarias",component:function(){return t.e("chunk-2d0e2111").then(t.bind(null,"7cb1"))}},{path:"/despesas/passagens",component:function(){return t.e("chunk-2d0cbed1").then(t.bind(null,"4c6b"))}},{path:"/despesas/empenho",component:function(){return t.e("chunk-2d0e905b").then(t.bind(null,"8c82"))}},{path:"/despesas/por_categoria",component:function(){return t.e("chunk-2d0aa2a0").then(t.bind(null,"109d"))}},{path:"/despesas/funcao_subfuncao",component:function(){return t.e("chunk-2d237941").then(t.bind(null,"fc5c"))}},{path:"/despesas/extra",component:function(){return t.e("chunk-2d0cebd1").then(t.bind(null,"6177"))}},{path:"/despesas/relacao_cronologica_para_pagamento",component:function(){return t.e("chunk-2d2162a0").then(t.bind(null,"c0fc"))}},{path:"/folha_pagamento",component:function(){return t.e("chunk-2d0cc9f4").then(t.bind(null,"4f5a"))}},{path:"/licitacoes/info_licitacao",component:function(){return t.e("chunk-2d2311a9").then(t.bind(null,"eeb5"))}},{path:"/receitas",component:function(){return t.e("chunk-2d0c8c32").then(t.bind(null,"55ea"))}},{path:"/restos_pagar",component:function(){return t.e("chunk-2d21af17").then(t.bind(null,"be53"))}},{path:"/ordem_pagamento",component:function(){return t.e("chunk-2d2165f1").then(t.bind(null,"c1d1"))}},{path:"/quadro_funcional",component:function(){return t.e("chunk-2d0b2c8d").then(t.bind(null,"261d"))}},{path:"/servidores_salarios",component:function(){return t.e("chunk-2d0abc9c").then(t.bind(null,"1788"))}},{path:"/setor",component:function(){return t.e("chunk-2d225467").then(t.bind(null,"e468"))}},{path:"/dinamico/:page_id",component:function(){return t.e("chunk-2d0af2eb").then(t.bind(null,"0cdf"))},props:!0},{path:"*",name:"not-found",component:function(){return t.e("chunk-2d0c7774").then(t.bind(null,"5179"))},meta:{visible:!1}}],p=new r["a"]({mode:"history",base:"/",routes:f});e["a"]=p},b519:function(n,e,t){},ddb8:function(n,e,t){"use strict";var a=t("9483");Object(a["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(n){console.error("Error during service worker registration:",n)}})}});
//# sourceMappingURL=app.1c03e8b3.js.map