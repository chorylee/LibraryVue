webpackJsonp([1],{130:function(e,t,r){"use strict";function a(e){r(1424)}var s=r(1426),o=r(1427),i=r(10),n=a,l=i(s.a,o.a,n,null,null);t.a=l.exports},131:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(132),s=(r.n(a),r(64)),o=r(316),i=r.n(o),n=r(317),l=r(1367),c=r(1435);s.a.use(i.a),new s.a({el:"#app",store:n.a,router:l.a,render:function(e){return e(c.a)}})},1367:function(e,t,r){"use strict";var a=r(64),s=r(1368),o=r(1369);a.a.use(s.a);var i=[{path:"/",name:"home",component:o.a}];t.a=new s.a({routes:i})},1369:function(e,t,r){"use strict";var a=r(1370),s=r(1434),o=r(10),i=o(a.a,s.a,null,null,null);t.a=i.exports},1370:function(e,t,r){"use strict";var a=r(49),s=r(1371),o=r(1387),i=r(1429);t.a={name:"resources",data:function(){return{addResourceModalOpen:!1,updateResourceModalOpen:!1,resource:{}}},components:{ResourceList:s.a,AddResource:o.a,UpdateResource:i.a},methods:{openAddResourceModal:function(){this.addResourceModalOpen=!0},openUpdateResourceModal:function(e){this.updateResourceModalOpen=!0,this.resource=e},closeModals:function(){this.addResourceModalOpen=!1,this.updateResourceModalOpen=!1}},mounted:function(){a.a.$on("resource:add",this.openAddResourceModal.bind(this)),a.a.$on("resource:update",this.openUpdateResourceModal.bind(this)),a.a.$on("modal:close",this.closeModals.bind(this))}}},1371:function(e,t,r){"use strict";function a(e){r(1372)}var s=r(1375),o=r(1386),i=r(10),n=a,l=i(s.a,o.a,n,null,null);t.a=l.exports},1372:function(e,t,r){var a=r(1373);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(20)("2c2fa068",a,!0)},1373:function(e,t,r){t=e.exports=r(19)(void 0),t.push([e.i,".resource-list{display:flex;flex-wrap:wrap;justify-content:center;width:120%;margin:0 -2rem;padding:2rem 0}.resource-list-item{width:20%;min-width:30rem;padding:2rem}.no-resources{text-align:center}",""])},1375:function(e,t,r){"use strict";var a=r(27),s=r(1376);t.a={name:"resource-list",computed:a.e("resources",["resources"]),components:{Resource:s.a}}},1376:function(e,t,r){"use strict";function a(e){r(1377)}var s=r(1379),o=r(1385),i=r(10),n=a,l=i(s.a,o.a,n,null,null);t.a=l.exports},1377:function(e,t,r){var a=r(1378);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(20)("0ae1c867",a,!0)},1378:function(e,t,r){t=e.exports=r(19)(void 0),t.push([e.i,".resource{display:flex;flex-direction:column;width:100%;height:100%;box-shadow:0 .4rem .2rem rgba(0,0,0,.15);border-radius:.4rem;overflow:hidden}.resource-body,.resource-footer,.resource-header{padding:1rem}.resource-header{display:flex;align-items:center;justify-content:space-between;background:#f74f4f;color:#fff}.resource-footer{margin-top:auto}.resource-link{font-weight:400}.resource-controls{display:flex;margin-top:1rem}.resource-controls .btn{flex:1}.resource-controls .btn-edit{margin-right:.5rem}.resource-controls .btn-remove{margin-left:.5rem}",""])},1379:function(e,t,r){"use strict";var a=r(27),s=r(49),o=r(1380),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.a={name:"resource",props:["details"],computed:i({},a.e(["editMode"]),a.c("resources",["resource"])),components:{Tags:o.a},methods:i({},a.d("resources",["filter","remove"]),{filterLocal:function(e){var t=e.target,r=t.parentNode,a=t.dataset.tag||r.dataset.tag||"";this.filter(a)},removeLocal:function(e){var t=e.target,r=t.parentNode,a=t.dataset.id||r.dataset.id||"";this.remove(a)},update:function(e){var t=e.target,r=t.parentNode,a=t.dataset.id||r.dataset.id||"",o=this.resource(a);s.a.$emit("resource:update",o)}})}},1380:function(e,t,r){"use strict";function a(e){r(1381)}var s=r(1383),o=r(1384),i=r(10),n=a,l=i(s.a,o.a,n,null,null);t.a=l.exports},1381:function(e,t,r){var a=r(1382);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(20)("cfdbd8b6",a,!0)},1382:function(e,t,r){t=e.exports=r(19)(void 0),t.push([e.i,".tags{font-size:1.1rem;flex-wrap:wrap;margin:-.5rem 0 0;padding:0;list-style:none;text-transform:uppercase}.tag,.tags{display:flex}.tag{align-items:center;margin-top:.5rem;padding:.3rem .6rem;border:1px solid rgba(0,0,0,.15)}.tag:not(:last-child){margin-right:.5rem}.tag-filterable{cursor:pointer}",""])},1383:function(e,t,r){"use strict";t.a={name:"tags",props:{tags:{type:Array,required:!0},filter:{type:Function}}}},1384:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.tags.length?r("ul",{staticClass:"tags"},[e._l(e.tags,function(t){return e.filter?e._e():r("li",{staticClass:"tag"},[e._v(e._s(t))])}),e._v(" "),e._l(e.tags,function(t){return e.filter?r("li",{staticClass:"tag tag-filterable",attrs:{"data-tag":t},on:{click:function(t){e.filter(t)}}},[e._v(e._s(t))]):e._e()})],2):e._e()},s=[];t.a={render:a,staticRenderFns:s}},1385:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"resource"},[r("div",{staticClass:"resource-header",style:{backgroundColor:e.details.color}},[r("i",{staticClass:"material-icons resource-icon"},[e._v(e._s(e.details.icon))]),e._v(" "),r("span",{staticClass:"resource-type"},[e._v(e._s(e.details.type))])]),e._v(" "),r("div",{staticClass:"resource-body"},[r("h3",{staticClass:"resource-title"},[r("a",{staticClass:"resource-link",attrs:{href:e.details.url,target:"_blank"}},[e._v(e._s(e.details.title))])]),e._v(" "),r("p",{staticClass:"resource-description"},[r("a",{staticClass:"resource-link",attrs:{href:e.details.url,target:"_blank"}},[e._v(e._s(e.details.description))])])]),e._v(" "),r("div",{staticClass:"resource-footer"},[r("tags",{attrs:{tags:e.details.tags,filter:e.filterLocal}}),e._v(" "),e.editMode?r("div",{staticClass:"resource-controls"},[r("button",{staticClass:"btn btn-primary btn-edit",attrs:{"data-id":e.details.id},on:{click:function(t){e.update(t)}}},[r("i",{staticClass:"material-icons"},[e._v("mode_edit")])]),e._v(" "),r("button",{staticClass:"btn btn-danger btn-remove",attrs:{"data-id":e.details.id},on:{click:function(t){e.removeLocal(t)}}},[r("i",{staticClass:"material-icons"},[e._v("delete")])])]):e._e()],1)])},s=[];t.a={render:a,staticRenderFns:s}},1386:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"resource-list"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.resources.length,expression:"!resources.length"}],staticClass:"no-resources"},[r("h1",[e._v("You don't have any resources yet! ")]),e._v(" "),r("p",[e._v("Click the red button in the top right hand corner to add some.")])]),e._v(" "),e._l(e.resources,function(t){return r("div",{directives:[{name:"show",rawName:"v-show",value:e.resources.length,expression:"resources.length"}],staticClass:"resource-list-item"},[r("resource",{key:t.id,attrs:{details:t}})],1)})],2)},s=[];t.a={render:a,staticRenderFns:s}},1387:function(e,t,r){"use strict";function a(e){r(1388)}var s=r(1390),o=r(1428),i=r(10),n=a,l=i(s.a,o.a,n,"data-v-d8632a70",null);t.a=l.exports},1388:function(e,t,r){var a=r(1389);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(20)("dde722c8",a,!0)},1389:function(e,t,r){t=e.exports=r(19)(void 0),t.push([e.i,"#resource-tags[data-v-d8632a70]{padding:.4rem .4rem 0}",""])},1390:function(e,t,r){"use strict";var a=r(27),s=r(126),o=r(49),i=r(130),n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.a={name:"resource-add",data:function(){return{details:{title:"",description:"",url:"",type:"",tags:[]}}},components:{InputTag:s.a,Modal:i.a},methods:n({},a.d("resources",["add"]),{addLocal:function(){var e=this;this.$validator.validateAll().then(function(){e.errors.errors.length||(e.add(e.details),o.a.$emit("modal:close"))})},cancel:function(){o.a.$emit("modal:close")}})}},1424:function(e,t,r){var a=r(1425);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(20)("5a38abae",a,!0)},1425:function(e,t,r){t=e.exports=r(19)(void 0),t.push([e.i,".modal{display:flex;align-items:center;justify-content:center;z-index:100}.modal,.modal-mask{width:100%;height:100%;position:fixed;top:0;left:0}.modal-mask{background:hsla(0,0%,100%,.8)}.modal-content{max-width:50rem;background:#fff;box-shadow:0 .4rem .2rem rgba(0,0,0,.15);border-radius:.4rem;overflow:hidden;position:relative;z-index:1}.modal-header{padding:1rem;background:#f74f4f;color:#fff}.modal-body{padding:1rem}.modal-footer{padding:1rem;text-align:right}",""])},1426:function(e,t,r){"use strict";var a=r(49);t.a={name:"modal",methods:{close:function(){a.a.$emit("modal:close")}}}},1427:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal"},[r("div",{staticClass:"modal-mask",on:{click:e.close}}),e._v(" "),r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[e._t("header",[e._v("Modal Header")])],2),e._v(" "),r("div",{staticClass:"modal-body"},[e._t("default")],2),e._v(" "),r("div",{staticClass:"modal-footer"},[e._t("footer")],2)])])},s=[];t.a={render:a,staticRenderFns:s}},1428:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("modal",[r("h3",{slot:"header"},[e._v("Add Resource")]),e._v(" "),r("div",{class:"form-group"+(e.errors.has("resource-title")?" has-error":"")},[r("label",{staticClass:"form-label",attrs:{for:"resource-title"}},[e._v("Title")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.details.title,expression:"details.title"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"resource-title",id:"resource-title",autofocus:""},domProps:{value:e.details.title},on:{input:function(t){t.target.composing||(e.details.title=t.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("resource-title"),expression:"errors.has('resource-title')"}]},[e._v(e._s(e.errors.first("resource-title")))])]),e._v(" "),r("div",{class:"form-group"+(e.errors.has("resource-description")?" has-error":"")},[r("label",{staticClass:"form-label",attrs:{for:"resource-description"}},[e._v("Description")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.details.description,expression:"details.description"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"resource-description",id:"resource-description",cols:"50",rows:"7"},domProps:{value:e.details.description},on:{input:function(t){t.target.composing||(e.details.description=t.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("resource-description"),expression:"errors.has('resource-description')"}]},[e._v(e._s(e.errors.first("resource-description")))])]),e._v(" "),r("div",{class:"form-group"+(e.errors.has("resource-url")?" has-error":"")},[r("label",{staticClass:"form-label",attrs:{for:"resource-url"}},[e._v("URL")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.details.url,expression:"details.url"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"resource-url",id:"resource-url"},domProps:{value:e.details.url},on:{input:function(t){t.target.composing||(e.details.url=t.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("resource-url"),expression:"errors.has('resource-url')"}]},[e._v(e._s(e.errors.first("resource-url")))])]),e._v(" "),r("div",{class:"form-group"+(e.errors.has("resource-type")?" has-error":"")},[r("label",{staticClass:"form-label",attrs:{for:"resource-type"}},[e._v("Type")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.details.type,expression:"details.type"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"resource-type",id:"resource-type"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.details.type=t.target.multiple?r:r[0]}}},[r("option",{attrs:{selected:"",disabled:""}},[e._v("Select a Type")]),e._v(" "),r("option",{attrs:{value:"Article"}},[e._v("Article")]),e._v(" "),r("option",{attrs:{value:"Video"}},[e._v("Video")])]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("resource-type"),expression:"errors.has('resource-type')"}]},[e._v(e._s(e.errors.first("resource-type")))])]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"resource-tags"}},[e._v("Tags")]),e._v(" "),r("input-tag",{staticClass:"form-control",attrs:{name:"resource-tags",id:"resource-tags",tags:e.details.tags}})],1),e._v(" "),r("div",{slot:"footer"},[r("button",{staticClass:"btn btn-link",on:{click:e.cancel}},[e._v("Cancel")]),e._v(" "),r("button",{staticClass:"btn btn-primary",on:{click:e.addLocal}},[e._v("Add")])])])},s=[];t.a={render:a,staticRenderFns:s}},1429:function(e,t,r){"use strict";function a(e){r(1430)}var s=r(1432),o=r(1433),i=r(10),n=a,l=i(s.a,o.a,n,"data-v-1df1878e",null);t.a=l.exports},1430:function(e,t,r){var a=r(1431);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(20)("63fc8583",a,!0)},1431:function(e,t,r){t=e.exports=r(19)(void 0),t.push([e.i,"#resource-tags[data-v-1df1878e]{padding:.4rem .4rem 0}",""])},1432:function(e,t,r){"use strict";var a=r(27),s=r(126),o=r(49),i=r(130),n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.a={name:"resource-edit",props:{resource:{type:Object,required:!0}},data:function(){return{details:{title:"",description:"",url:"",type:"",tags:[]}}},components:{InputTag:s.a,Modal:i.a},methods:n({},a.d("resources",["update"]),{updateLocal:function(){var e=this;this.$validator.validateAll().then(function(){e.errors.errors.length||(e.update(e.details),o.a.$emit("modal:close"))})},cancel:function(){o.a.$emit("modal:close")}}),mounted:function(){this.details=n({},this.details,this.resource)}}},1433:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("modal",[r("h3",{slot:"header"},[e._v("Edit Resource")]),e._v(" "),r("div",{class:"form-group"+(e.errors.has("resource-title")?" has-error":"")},[r("label",{staticClass:"form-label",attrs:{for:"resource-title"}},[e._v("Title")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.details.title,expression:"details.title"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"resource-title",id:"resource-title",autofocus:""},domProps:{value:e.details.title},on:{input:function(t){t.target.composing||(e.details.title=t.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("resource-title"),expression:"errors.has('resource-title')"}]},[e._v(e._s(e.errors.first("resource-title")))])]),e._v(" "),r("div",{class:"form-group"+(e.errors.has("resource-description")?" has-error":"")},[r("label",{staticClass:"form-label",attrs:{for:"resource-description"}},[e._v("Description")]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.details.description,expression:"details.description"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"resource-description",id:"resource-description",cols:"50",rows:"7"},domProps:{value:e.details.description},on:{input:function(t){t.target.composing||(e.details.description=t.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("resource-description"),expression:"errors.has('resource-description')"}]},[e._v(e._s(e.errors.first("resource-description")))])]),e._v(" "),r("div",{class:"form-group"+(e.errors.has("resource-url")?" has-error":"")},[r("label",{staticClass:"form-label",attrs:{for:"resource-url"}},[e._v("URL")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.details.url,expression:"details.url"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"resource-url",id:"resource-url"},domProps:{value:e.details.url},on:{input:function(t){t.target.composing||(e.details.url=t.target.value)}}}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("resource-url"),expression:"errors.has('resource-url')"}]},[e._v(e._s(e.errors.first("resource-url")))])]),e._v(" "),r("div",{class:"form-group"+(e.errors.has("resource-type")?" has-error":"")},[r("label",{staticClass:"form-label",attrs:{for:"resource-type"}},[e._v("Type")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.details.type,expression:"details.type"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"resource-type",id:"resource-type"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.details.type=t.target.multiple?r:r[0]}}},[r("option",{attrs:{selected:"",disabled:""}},[e._v("Select a Type")]),e._v(" "),r("option",{attrs:{value:"Article"}},[e._v("Article")]),e._v(" "),r("option",{attrs:{value:"Video"}},[e._v("Video")])]),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("resource-type"),expression:"errors.has('resource-type')"}]},[e._v(e._s(e.errors.first("resource-type")))])]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"resource-tags"}},[e._v("Tags")]),e._v(" "),r("input-tag",{staticClass:"form-control",attrs:{name:"resource-tags",id:"resource-tags",tags:e.details.tags}})],1),e._v(" "),r("div",{slot:"footer"},[r("button",{staticClass:"btn btn-link",on:{click:e.cancel}},[e._v("Cancel")]),e._v(" "),r("button",{staticClass:"btn btn-primary",on:{click:e.updateLocal}},[e._v("Update")])])])},s=[];t.a={render:a,staticRenderFns:s}},1434:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"resources"}},[r("div",{staticClass:"container"},[r("resource-list"),e._v(" "),e.addResourceModalOpen?r("add-resource"):e._e(),e._v(" "),e.updateResourceModalOpen?r("update-resource",{attrs:{resource:e.resource}}):e._e()],1)])},s=[];t.a={render:a,staticRenderFns:s}},1435:function(e,t,r){"use strict";function a(e){r(1436)}var s=r(1438),o=r(1468),i=r(10),n=a,l=i(s.a,o.a,n,null,null);t.a=l.exports},1436:function(e,t,r){var a=r(1437);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(20)("1bfca6a7",a,!0)},1437:function(e,t,r){t=e.exports=r(19)(void 0),t.push([e.i,"*,:after,:before{box-sizing:inherit}html{box-sizing:border-box}body{margin:0}img{max-width:100%;vertical-align:middle}html{font-size:62.5%}body,input,select,textarea{font-family:Open Sans,sans-serif;font-size:1.5rem;color:rgba(0,0,0,.6)}h1,h2,h3,h4,h5,h6{font-family:Fugaz One,cursive;font-weight:200;margin:0}a{text-decoration:none;color:rgba(0,0,0,.6);font-weight:600}p{margin:0}p:not(:last-child){margin-bottom:1.5rem}#app,body,html{width:100%;height:100%}.container{display:flex;margin:0 5rem}.form-label{display:block;margin-bottom:.5rem}.has-error .form-label{color:#f74f4f}.form-control{display:block;width:100%;padding:.8rem;border:.1rem solid rgba(0,0,0,.15);border-radius:.4rem}.has-error .form-control{border-color:#f74f4f}.form-group:not(:last-child){margin-bottom:1.5rem}.has-error{color:#f74f4f}.btn{line-height:1;border:0;outline:none;color:#fff;padding:1rem 3rem;background:rgba(0,0,0,.6);border-radius:.4rem;cursor:pointer}.btn-primary{background:#4f99f7}.btn-danger{background:#f74f4f}.btn-link{background:transparent;color:rgba(0,0,0,.6)}",""])},1438:function(e,t,r){"use strict";var a=r(27),s=r(1439);t.a={name:"app",data:function(){return{scrolled:!1}},computed:a.e(["editMode"]),methods:{handleScroll:function(){this.scrolled=window.scrollY>0}},components:{appHeader:s.a},created:function(){window.addEventListener("scroll",this.handleScroll.bind(this))},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll.bind(this))}}},1439:function(e,t,r){"use strict";function a(e){r(1440)}var s=r(1442),o=r(1467),i=r(10),n=a,l=i(s.a,o.a,n,null,null);t.a=l.exports},1440:function(e,t,r){var a=r(1441);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(20)("53da08e9",a,!0)},1441:function(e,t,r){t=e.exports=r(19)(void 0),t.push([e.i,"body{padding-top:7.8rem}#header{width:100%;padding:2rem 0;box-shadow:0 0 0 .1rem rgba(0,0,0,.15);background:#fff;transition:box-shadow .1s;position:fixed;top:0;left:0}.scrolled #header{box-shadow:0 .4rem .2rem rgba(0,0,0,.15);border:0}#header .logo{font-family:Fugaz One,cursive;font-size:2.5rem;font-weight:lighter}#header .container{display:flex;align-items:center}",""])},1442:function(e,t,r){"use strict";var a=r(1443),s=r(1446);t.a={name:"header",components:{Search:a.a,Toolbar:s.a}}},1443:function(e,t,r){"use strict";var a=r(1444),s=r(1445),o=r(10),i=o(a.a,s.a,null,null,null);t.a=i.exports},1444:function(e,t,r){"use strict";t.a={name:"search"}},1445:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search"},[r("input",{attrs:{type:"search",placeholder:"Search"}})])}];t.a={render:a,staticRenderFns:s}},1446:function(e,t,r){"use strict";function a(e){r(1447)}var s=r(1449),o=r(1466),i=r(10),n=a,l=i(s.a,o.a,n,null,null);t.a=l.exports},1447:function(e,t,r){var a=r(1448);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(20)("0d266f46",a,!0)},1448:function(e,t,r){t=e.exports=r(19)(void 0),t.push([e.i,".toolbar{display:flex;align-items:center;margin:0 0 0 auto;padding:0;list-style:none}.toolbar-item{margin-left:2rem}.toolbar-button{line-height:1;padding:0;border:0;background:0;outline:none;color:rgba(0,0,0,.6);cursor:pointer}",""])},1449:function(e,t,r){"use strict";var a=r(27),s=r(1450),o=r(1455),i=r(1458),n=r(1463);t.a={name:"toolbar",computed:a.e("resources",["resources"]),components:{Add:s.a,Edit:i.a,Remove:o.a,Refresh:n.a}}},1450:function(e,t,r){"use strict";function a(e){r(1451)}var s=r(1453),o=r(1454),i=r(10),n=a,l=i(s.a,o.a,n,"data-v-625b82f6",null);t.a=l.exports},1451:function(e,t,r){var a=r(1452);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(20)("1181a388",a,!0)},1452:function(e,t,r){t=e.exports=r(19)(void 0),t.push([e.i,".btn-danger[data-v-625b82f6]{padding:.5rem}",""])},1453:function(e,t,r){"use strict";var a=r(49);t.a={name:"toolbar-add",methods:{add:function(){a.a.$emit("resource:add")}}}},1454:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"btn btn-danger",attrs:{title:"Add a new resource"},on:{click:function(t){e.add(t)}}},[r("i",{staticClass:"material-icons"},[e._v("add")])])},s=[];t.a={render:a,staticRenderFns:s}},1455:function(e,t,r){"use strict";var a=r(1456),s=r(1457),o=r(10),i=o(a.a,s.a,null,null,null);t.a=i.exports},1456:function(e,t,r){"use strict";var a=r(27);t.a={name:"toolbar-remove",methods:a.b("resources",["removeAll"])}},1457:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"toolbar-button",attrs:{title:"Remove all resources"},on:{click:e.removeAll}},[r("i",{staticClass:"material-icons"},[e._v("delete")])])},s=[];t.a={render:a,staticRenderFns:s}},1458:function(e,t,r){"use strict";function a(e){r(1459)}var s=r(1461),o=r(1462),i=r(10),n=a,l=i(s.a,o.a,n,"data-v-91878d54",null);t.a=l.exports},1459:function(e,t,r){var a=r(1460);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(20)("501100a0",a,!0)},1460:function(e,t,r){t=e.exports=r(19)(void 0),t.push([e.i,".edit-mode .toolbar-button[data-v-91878d54]{color:#f74f4f}",""])},1461:function(e,t,r){"use strict";var a=r(27);t.a={name:"toolbar-edit",methods:a.d(["toggleEditMode"])}},1462:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"toolbar-button",attrs:{title:"Enter edit mode"},on:{click:e.toggleEditMode}},[r("i",{staticClass:"material-icons"},[e._v("mode_edit")])])},s=[];t.a={render:a,staticRenderFns:s}},1463:function(e,t,r){"use strict";var a=r(1464),s=r(1465),o=r(10),i=o(a.a,s.a,null,null,null);t.a=i.exports},1464:function(e,t,r){"use strict";var a=r(27);t.a={name:"toolbar-refresh",methods:a.b("resources",["refresh"])}},1465:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"toolbar-button",on:{click:e.refresh}},[r("i",{staticClass:"material-icons",attrs:{title:"Refresh resource test data"}},[e._v("refresh")])])},s=[];t.a={render:a,staticRenderFns:s}},1466:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"toolbar"},[e.resources.length?r("li",{staticClass:"toolbar-item"},[r("edit")],1):e._e(),e._v(" "),r("li",{staticClass:"toolbar-item"},[r("refresh")],1),e._v(" "),e.resources.length?r("li",{staticClass:"toolbar-item"},[r("remove")],1):e._e(),e._v(" "),r("li",{staticClass:"toolbar-item"},[r("add")],1)])},s=[];t.a={render:a,staticRenderFns:s}},1467:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{attrs:{id:"header"}},[r("div",{staticClass:"container"},[r("router-link",{staticClass:"logo",attrs:{to:{name:"home"}}},[e._v("Library")]),e._v(" "),r("toolbar")],1)])},s=[];t.a={render:a,staticRenderFns:s}},1468:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:(e.editMode?"edit-mode":"")+(e.scrolled?" scrolled":""),attrs:{id:"app"}},[r("app-header"),e._v(" "),r("router-view")],1)},s=[];t.a={render:a,staticRenderFns:s}},317:function(e,t,r){"use strict";var a=r(64),s=r(27),o=r(318);a.a.use(s.a),t.a=new s.a.Store({state:{editMode:!1},getters:{},mutations:{toggleEditMode:function(e,t){e.editMode=!e.editMode},disableEditMode:function(e){e.editMode=!1}},actions:{},modules:{resources:o.a}})},318:function(e,t,r){"use strict";var a=r(319);t.a={namespaced:!0,state:{resources:a.b(!1)},getters:{resource:function(e){return function(t){return e.resources.find(function(e){return e.id===t})}}},mutations:{refresh:function(e){a.d(),e.resources=a.b()},add:function(e,t){e.resources=a.a(t)},update:function(e,t){e.resources=a.e(t.id,t)},remove:function(e,t){e.resources=a.c(t)},removeAll:function(e){a.d(),e.resources=[]},search:function(e,t){},filter:function(e,t){}},actions:{refresh:function(e){var t=e.commit;t("refresh"),t("disableEditMode",null,{root:!0})},removeAll:function(e){var t=e.commit;t("removeAll"),t("disableEditMode",null,{root:!0})}}}},319:function(e,t,r){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function s(e){window.localStorage.resources=JSON.stringify(e)}function o(){return JSON.parse(window.localStorage.resources||"[]")}function i(e){var t=o();return t=[{id:d.random.uuid(),type:"article"===e.type.toLowerCase()?"Article":"Video",icon:"article"===e.type.toLowerCase()?"book":"play_circle_outline",color:d.random.arrayElement(["#4f99f7","#f74f4f"]),title:e.title,description:e.description,url:e.url,tags:e.tags}].concat(a(t)),s(t),t}function n(e,t){console.log(t.type.toLowerCase(),"asdasdasd");var r=o(),a=r.map(function(r){return r.id===e&&(r=f({},r,t,{type:"article"===t.type.toLowerCase()?"Article":"Video",icon:"article"===t.type.toLowerCase()?"book":"play_circle_outline"})),r});return s(a),a}function l(e){var t=o(),r=t.filter(function(t){return t.id!==e});return s(r),r}function c(){window.localStorage.removeItem("resources")}function u(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=o();if(e){for(var r=0;r<d.random.number({min:1,max:40});r++){for(var i={id:d.random.uuid(),type:r%2==0?"Article":"Video",icon:r%2==0?"book":"play_circle_outline",color:d.random.arrayElement(["#4f99f7","#f74f4f"]),title:d.random.word(),description:d.random.words(20),url:d.internet.url(),tags:[]},n=0;n<d.random.number(5);n++)i.tags=[].concat(a(i.tags),[d.random.word()]);t=[].concat(a(t),[i])}s(t)}return t}t.a=i,t.e=n,t.c=l,t.d=c,t.b=u;var d=r(320),f=(r.n(d),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e})},49:function(e,t,r){"use strict";var a=r(64);t.a=new a.a}},[131]);