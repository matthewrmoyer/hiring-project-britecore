webpackJsonp([1],{0:function(e,t){},"1G/V":function(e,t,i){"use strict";(function(e){var s=i("z1fA"),a=i("pouL");e={namespaced:!0,state:{riskType:"",fields:[]},getters:s,mutations:i("4ULQ"),actions:a},t.a=e}).call(t,i("f1Eh")(e))},"4ULQ":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"updateRiskType",function(){return s}),i.d(t,"addField",function(){return a}),i.d(t,"addFieldValue",function(){return n});var s=function(e,t){e.riskType=t},a=function(e,t){e.fields.push(t)},n=function(e,t){var i=e.fields.filter(function(e){return e.name==t.fieldName}),s=e.fields.indexOf(i[0]);e.fields[s].value=t.fieldValue}},H14E:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"getRisks",function(){return l});var s=i("Xxa5"),a=i.n(s),n=i("exGp"),r=i.n(n),o=i("7+uW"),c=this,l=function(){var e=r()(a.a.mark(function e(t,i){var s,n=t.commit;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.default.http.get("https://britecore-backend.herokuapp.com/risks");case 2:return e.next=4,e.sent.json();case 4:s=e.sent,n("addRiskData",s);case 6:case"end":return e.stop()}},e,c)}));return function(t,i){return e.apply(this,arguments)}}()},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("nav",[t("div",{staticClass:"nav-wrapper"},[t("ul",[t("li",[t("router-link",{staticClass:"brand-logo left",attrs:{to:"/"}},[this._v("BriteCore")])],1)]),this._v(" "),t("ul",{staticClass:"right",attrs:{id:"nav"}},[t("li",[t("router-link",{attrs:{to:"/risks"}},[this._v("See All Risks")])],1),this._v(" "),t("li",[t("router-link",{attrs:{to:"/addRisk"}},[this._v("Add Risk")])],1)])])]),this._v(" "),t("router-view")],1)},staticRenderFns:[]},n=i("VU/8")({name:"app"},a,!1,function(e){i("ze/X")},null,null).exports,r=i("/ocq"),o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hello"},[i("h2",[e._v(e._s(e.msg))]),e._v(" "),i("md-card",[i("md-card-header"),e._v(" "),i("md-card-content",[i("p",{staticClass:"flow-text"},[e._v("There are lots of interesting things you can do here! One thing to explore the \n        "),i("router-link",{attrs:{to:"/risks"}},[e._v("Risk Types page.")]),e._v(" \n        There, you can see all of the risk types that users have added, as well as click a risk type to see the fields associated with that risk.")],1),e._v(" "),i("p",{staticClass:"flow-text"},[e._v("You can also naviagate to the \n      "),i("router-link",{attrs:{to:"/addRisk"}},[e._v("Add Risk")]),e._v(" \n      page, where you can create a new risk type. For example, if you have a new client inquiring about Cyber Liability Coverage, you can create a form containing all of the necessary fields required to add this risk type.")],1),e._v(" "),i("p",{staticClass:"flow-text"},[e._v("If you get lost, you can always click the BriteCore logo above to bring you home.")])])],1)],1)},staticRenderFns:[]},c=i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to the BriteCore Administration Page"}}},o,!1,function(e){i("uGmL")},"data-v-71ac76c4",null).exports,l=i("Xxa5"),d=i.n(l),u=i("exGp"),f=i.n(u),p=i("Dd8w"),v=i.n(p),m=i("NYxO"),k={data:function(){return{title:"Create a New Risk",fieldType:"",fieldName:""}},created:function(){$(document).ready(function(){$(".modal").modal()})},computed:v()({},Object(m.c)("addRisk",["fields"]),{riskType:{get:function(){return this.$store.getters["addRisk/riskType"]},set:function(){return this.updateRiskType(event.target.value)}}}),methods:v()({},Object(m.b)("addRisk",["updateRiskType","addField","postRisk"]),{setFieldType:function(){this.fieldType=event.target.attributes.data.value},setFieldName:function(){this.fieldName=event.target.value},setFieldValue:function(){this.$store.dispatch("addRisk/addFieldValue",{fieldName:event.target.id,fieldValue:event.target.value})},submitField:function(){var e=this;return f()(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.addField({type:e.fieldType,name:e.fieldName});case 2:e.clearFields();case 3:case"end":return t.stop()}},t,e)}))()},clearFields:function(){this.fieldName="",this.fieldType=""},submitRisk:function(){this.postRisk({type:this.riskType,fields:this.fields}),location.reload()}})},h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("form",{staticClass:"col s12"},[i("h3",[e._v(e._s(e.title))]),e._v(" "),i("div",{staticClass:"row"},[i("label",{staticClass:"left",attrs:{for:"risk-type"}},[e._v("Type the New Risk Type Below")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.riskType,expression:"riskType"}],staticClass:"col s12 risk-type-input",attrs:{type:"text",name:"riskType",id:"risk-type",placeholder:"Automobile"},domProps:{value:e.riskType},on:{input:function(t){t.target.composing||(e.riskType=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"modal",attrs:{id:"addFieldModal"}},[i("div",{staticClass:"modal-content"},[i("h4",[e._v("Add A Field and a Data Type")]),e._v(" "),i("div",{staticClass:"row"},[i("label",{staticClass:"left",attrs:{for:"new-field-name"}},[e._v("New Field Name")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.fieldName,expression:"fieldName"}],attrs:{type:"text",name:"newFieldName",id:"new-field-name",placeholder:"Address"},domProps:{value:e.fieldName},on:{input:[function(t){t.target.composing||(e.fieldName=t.target.value)},e.setFieldName]}})]),e._v(" "),i("br"),e._v(" "),i("h6",[e._v("Select the Data Type of this Field")]),e._v(" "),i("div",{staticClass:"row radio-container"},[i("p",[i("input",{attrs:{name:"group1",type:"radio",id:"radio1",data:"text"},on:{click:e.setFieldType}}),e._v(" "),i("label",{attrs:{for:"radio1"}},[e._v("Text")])]),e._v(" "),i("p",[i("input",{attrs:{name:"group1",type:"radio",data:"number",id:"radio2"},on:{click:e.setFieldType}}),e._v(" "),i("label",{attrs:{for:"radio2"}},[e._v("Number")])]),e._v(" "),i("p",[i("input",{attrs:{name:"group1",type:"radio",data:"date",id:"radio3"},on:{click:e.setFieldType}}),e._v(" "),i("label",{attrs:{for:"radio3"}},[e._v("Date")])])]),e._v(" "),i("div",{staticClass:"modal-footer"},[i("a",{staticClass:"modal-action modal-close waves-effect waves-green btn-flat addFieldModal",attrs:{href:"#/addRisk"},on:{click:e.submitField}},[e._v("Add Field")])])])]),e._v(" "),i("ul",{staticClass:"addedFields"},e._l(e.fields,function(t){return i("li",{key:t.name},[i("div",[i("h5",{staticClass:"addedFieldsHeading left"},[e._v(e._s(t.name)+" Field of type "+e._s(t.type)),i("i",{staticClass:"material-icons right green-check"},[e._v("check_circle")])])])])})),e._v(" "),e._m(0,!1,!1),e._v(" "),i("div",{staticClass:"row"},[i("button",{staticClass:"btn waves-effect waves-light",attrs:{type:"submit",name:"action"},on:{click:e.submitRisk}},[e._v("Submit\n            "),i("i",{staticClass:"material-icons right"},[e._v("send")])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row"},[t("a",{staticClass:"waves-effect waves-light btn modal-trigger",attrs:{href:"#addFieldModal"}},[this._v("Add Field")])])}]},_=i("VU/8")(k,h,!1,function(e){i("fyqd")},"data-v-96ec5c44",null).exports,y={data:function(){return{title:"All Risk Types"}},computed:v()({},Object(m.c)("allRisks",["risks"])),methods:v()({},Object(m.b)("allRisks",["getRisks"]),{fetchData:function(){this.$http.get("https://britecore-backend.herokuapp.com/risks").then(function(e){return e.json()})}}),mounted:function(){this.getRisks()}},g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h3",[e._v(e._s(e.title))]),e._v(" "),i("p",{staticClass:"flow-text"},[e._v("Select a risk type below, to see the details associated with that risk type, or to create a new instance of that risk type")]),e._v(" "),i("ul",e._l(e.risks,function(t){return i("li",{key:t.id},[i("router-link",{attrs:{to:"/risk/"+t.id}},[e._v(e._s(t.type))])],1)}))])},staticRenderFns:[]},b=i("VU/8")(y,g,!1,function(e){i("T2PR")},"data-v-3dacb306",null).exports,R={data:function(){return{title:"Single Risk View",id:this.$route.params.id}},computed:v()({},Object(m.c)("singleRisk",["risk"])),methods:v()({},Object(m.b)("singleRisk",["getRisk"])),mounted:function(){this.getRisk(this.id)}},w={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h3",[e._v(e._s(e.risk[0].risk.type))]),e._v(" "),i("ul",{staticClass:"fields"},e._l(e.risk[1].fields,function(t){return i("li",{key:t.name},[i("div",{staticClass:"row"},[i("label",{staticClass:"active left",attrs:{for:t.name}},[e._v(e._s(t.name))]),e._v(" "),i("input",{attrs:{name:"field.name",type:t.data_type,placeholder:t.name}})])])}))])},staticRenderFns:[]},x=i("VU/8")(R,w,!1,function(e){i("yoKn")},"data-v-043ad26e",null).exports;s.default.use(r.a);var F=new r.a({routes:[{path:"/",name:"HelloWorld",component:c},{path:"/addRisk",name:"AddRisk",component:_},{path:"/risks",name:"AllRisks",component:b},{path:"/risk/:id",name:"SingleRisk",component:x}]}),T=i("1G/V"),C=i("cYZK"),N=i("xPuL");s.default.use(m.a);var j=new m.a.Store({state:{},modules:{addRisk:T.a,allRisks:C.a,singleRisk:N.a}}),O=i("ORbq"),P=i("Lgyv"),A=i.n(P);i("tzNG");s.default.config.productionTip=!1,s.default.use(A.a),s.default.use(O.a),new s.default({el:"#app",store:j,router:F,template:"<App/>",components:{App:n}})},T2PR:function(e,t){},"U/4e":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"risks",function(){return s});var s=function(e){return e.risks}},adu9:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"risk",function(){return s});var s=function(e){return e.risk}},cYZK:function(e,t,i){"use strict";(function(e){var s=i("U/4e"),a=i("H14E");e={namespaced:!0,state:{risks:[]},getters:s,mutations:i("vDPw"),actions:a},t.a=e}).call(t,i("f1Eh")(e))},fyqd:function(e,t){},lfja:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"getRisk",function(){return l});var s=i("Xxa5"),a=i.n(s),n=i("exGp"),r=i.n(n),o=i("7+uW"),c=this,l=function(){var e=r()(a.a.mark(function e(t,i){var s,n=t.commit;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.default.http.get("https://britecore-backend.herokuapp.com/risks/"+i);case 2:return e.next=4,e.sent.json();case 4:s=e.sent,n("setRisk",s);case 6:case"end":return e.stop()}},e,c)}));return function(t,i){return e.apply(this,arguments)}}()},pouL:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"updateRiskType",function(){return l}),i.d(t,"addField",function(){return d}),i.d(t,"addFieldValue",function(){return u}),i.d(t,"postRisk",function(){return f});var s=i("Xxa5"),a=i.n(s),n=i("exGp"),r=i.n(n),o=i("7+uW"),c=this,l=function(e,t){(0,e.commit)("updateRiskType",t)},d=function(e,t){(0,e.commit)("addField",t)},u=function(e,t){(0,e.commit)("addFieldValue",t)},f=function(){var e=r()(a.a.mark(function e(t,i){var s;t.commit;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("post risk action"),console.log(i.type),i.fields.forEach(function(e){return console.log(e.name,e.type)}),e.prev=3,e.next=6,o.default.http.post("https://britecore-backend.herokuapp.com/risks",i);case 6:return e.next=8,e.sent.json();case 8:return s=e.sent,console.log(s),e.prev=10,e.next=13,o.default.http.post("https://britecore-backend.herokuapp.com/fields",i);case 13:return e.next=15,e.sent.json();case 15:e.sent,e.next=21;break;case 18:e.prev=18,e.t0=e.catch(10),console.log(e.t0);case 21:e.next=26;break;case 23:e.prev=23,e.t1=e.catch(3),console.log(e.t1);case 26:case"end":return e.stop()}},e,c,[[3,23],[10,18]])}));return function(t,i){return e.apply(this,arguments)}}()},"s1+L":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"setRisk",function(){return s});var s=function(e,t){e.risk=t}},tzNG:function(e,t){},uGmL:function(e,t){},vDPw:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"addRiskData",function(){return s});var s=function(e,t){t.forEach(function(t){0===e.risks.filter(function(e){return e.id===t.id}).length&&e.risks.push(t)})}},xPuL:function(e,t,i){"use strict";(function(e){var s=i("adu9"),a=i("lfja");e={namespaced:!0,state:{risk:"snowboard insurance"},getters:s,mutations:i("s1+L"),actions:a},t.a=e}).call(t,i("f1Eh")(e))},yoKn:function(e,t){},z1fA:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"riskType",function(){return s}),i.d(t,"fields",function(){return a});var s=function(e){return e.riskType},a=function(e){return e.fields}},"ze/X":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.7e6d1231a3ccd5aca207.js.map