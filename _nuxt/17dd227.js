(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1110:function(e,t,n){"use strict";n(800)},1301:function(e,t,n){"use strict";n.r(t);n(11),n(116),n(246),n(86);var l,r=n(162),o=n.n(r),c=n(10),d=n(9),m=(n(406),n(407)),f=n.n(m),v=(n(408),n(409)),h=n.n(v),_=(n(37),n(46),n(250),n(68)),y=n(403),k=n(404),C=n(405),w=n(400),x=n(392),S=n.n(x),$=(n(413),{name:"form-components",layout:"DashboardLayout",middleware:["isAuthenticated","checkAdmin"],components:(l={CustomStylesValidation:y.a,BrowserDefaultsValidation:k.a,ServerSideValidation:C.a},Object(d.a)(l,h.a.name,h.a),Object(d.a)(l,f.a.name,f.a),Object(d.a)(l,"FileInput",w.a),Object(d.a)(l,"flatPicker",S.a),l),data:function(){return{validated:!1,seen:!0,se:!0,sin:!0,to:"",from:"",model:{id:"",name:"",timing:"",time:"",thumbnail:null,desc:"",price:0,pricing:[],wear:[{desc:""}],expect:[{desc:""}],reportingtime:"",title1:"",title2:"",title3:"",food_served:!1,closing_time:""},link:"",obj:null,cat:["01","02","03","04","05","06","07","08","09","10","11","12"],cat1:["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","00"],decks:[],pricing:[],timing:{from:"",to:"",fr:"AM",from1:"",to1:"",fr1:"AM"},reporting:{from:"",to:"",fr:"AM"},closing:{from:"",to:"",fr:"AM"},fr:["AM","PM"]}},watch:{pricing:function(){var e=this;this.model.pricing=this.pricing.map((function(t,i){return{deck:null==e.model.pricing[i]?t:e.model.pricing[i].deck,adult:null!=e.model.pricing[i]?e.model.pricing[i].adult:0,kid:null!=e.model.pricing[i]?e.model.pricing[i].kid:0}}))}},methods:{firstFormSubmit:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,l,r,rp,c,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(1!=(l=function(e){return Object.values(e).some((function(e){return""===e}))})((n=e).timing)){t.next=6;break}return o()({showClose:!0,message:"Invalid Cruise Timing!",type:"warning"}),t.abrupt("return");case 6:if(1!=l(n.reporting)){t.next=10;break}return o()({showClose:!0,message:"Invalid Cruise Reporting Timing!",type:"warning"}),t.abrupt("return");case 10:if(1!=l(n.closing)){t.next=14;break}return o()({showClose:!0,message:"Invalid Cruise Closing Timing!",type:"warning"}),t.abrupt("return");case 14:if(r="".concat(n.timing.from,":").concat(n.timing.to," ").concat(n.timing.fr," to ").concat(n.timing.from1,":").concat(n.timing.to1," ").concat(n.timing.fr1),rp="".concat(n.reporting.from,":").concat(n.reporting.to," ").concat(n.reporting.fr),c="".concat(n.closing.from,":").concat(n.closing.to," ").concat(n.closing.fr),n.model.timing=r,n.model.reportingtime=rp,n.model.closing_time=c,""==n.model.name||""==n.model.title1||""==n.model.title2||""==n.model.title3||""==n.model.desc||""==n.model.time||""==n.model.timing||""==n.link||""==n.model.reportingtime||""==n.model.closing_time){t.next=29;break}return n.sin=!1,n.model.thumbnail=n.obj,n.model.price=parseInt(n.model.price),data={name:n.model.name,timing:n.model.timing,time:n.model.time,thumbnail:n.obj,desc:n.model.desc,price:n.model.price,wear:JSON.stringify(n.model.wear),pricing:JSON.stringify(n.model.pricing),expect:JSON.stringify(n.model.expect),reportingtime:n.model.reportingtime,title1:n.model.title1,title2:n.model.title2,title3:n.model.title3,food_served:n.model.food_served,closing_time:n.model.closing_time},t.next=27,_.a.collection("webcruise").create(data).then((function(){o()({showClose:!0,message:"Saved Successfuly!",type:"success"}),setTimeout((function(){window.close()}),1500)})).catch((function(){n.sin=!0,o()({showClose:!0,message:"Something went wrong!",type:"warning"})}));case 27:t.next=30;break;case 29:o()({showClose:!0,message:"All fields are required!",type:"warning"});case 30:case"end":return t.stop()}}),t)})))()},filesChange1:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:l=t,0!=e.length&&(l.link="",l.se=!1,l.link=URL.createObjectURL(e[0]),l.obj=e[0],l.se=!0);case 2:case"end":return n.stop()}}),n)})))()},dlt:function(){this.link="",this.obj=null},getData:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,t.next=3,_.a.collection("Deck").getFullList({sort:"-created"});case 3:n.decks=t.sent;case 4:case"end":return t.stop()}}),t)})))()},add:function(){this.model.expect.push({dec:""})},rem:function(i){this.model.expect.splice(i,1)},add1:function(){this.model.wear.push({desc:""})},rem1:function(i){this.model.wear.splice(i,1)}},mounted:function(){this.getData()}}),O=(n(1110),n(7)),component=Object(O.a)($,(function(){var e=this,t=e._self._c;return t("div",[t("base-header",{staticClass:"pb-2"},[t("div",{staticClass:"row align-items-center py-4"},[t("div",{staticClass:"col-lg-6 col-7"},[t("h6",{staticClass:"h2 text-white"},[e._v("Cruise Details")])])])]),e._v(" "),t("div",{staticClass:"container-fluid mt--6"},[t("div",{staticClass:"row ht"},[t("div",{staticClass:"col"},[t("div",{staticClass:"card-wrapper"},[t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var l=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(e){e.preventDefault()}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"Title 1",name:"Title 1",placeholder:"Enter Title 1","success-message":"Looks good!",rules:"required"},model:{value:e.model.title1,callback:function(t){e.$set(e.model,"title1",t)},expression:"model.title1"}})],1),e._v(" "),t("div",{staticClass:"col-md-12"}),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Cruise Name",name:"Cruise name",placeholder:"Enter Cruise Name","success-message":"Looks good!",rules:"required"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Starting Price",name:"Starting Price",placeholder:"Enter Starting Price","success-message":"Looks good!",rules:"required"},model:{value:e.model.price,callback:function(t){e.$set(e.model,"price",t)},expression:"model.price"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Duration (in hour)",placeholder:"Enter Duration"},model:{value:e.model.time,callback:function(t){e.$set(e.model,"time",t)},expression:"model.time"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Sl.No Order",placeholder:"Enter Sl No"},model:{value:e.model.order,callback:function(t){e.$set(e.model,"order",t)},expression:"model.order"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Decks"}},[t("el-select",{attrs:{placeholder:"Select",multiple:""},model:{value:e.pricing,callback:function(t){e.pricing=t},expression:"pricing"}},e._l(e.decks,(function(option){return t("el-option",{key:option.id,attrs:{value:option.name}})})),1)],1)],1),e._v(" "),t("div",{staticClass:"col-md-3 mt-2"},[t("base-input",{attrs:{label:"Serve Food ?"}},[t("base-switch",{staticClass:"mr-1",attrs:{"on-text":"Yes","off-text":"No"},model:{value:e.model.food_served,callback:function(t){e.$set(e.model,"food_served",t)},expression:"model.food_served"}})],1)],1),e._v(" "),t("div",{staticClass:"row",staticStyle:{width:"100%"}},[t("div",{staticClass:"col-md-12"},[t("h1",[e._v("Cruise Timing (hh:mm a)")])]),e._v(" "),t("div",{staticStyle:{width:"25rem",display:"flex","flex-wrap":"wrap"}},[t("div",{staticClass:"col-md-12"},[t("h4",[e._v("From")])]),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",[t("el-select",{attrs:{placeholder:"Select",filterable:""},model:{value:e.timing.from,callback:function(t){e.$set(e.timing,"from",t)},expression:"timing.from"}},e._l(e.cat,(function(option){return t("el-option",{key:option,attrs:{value:option}})})),1)],1)],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",[t("el-select",{attrs:{placeholder:"Select",filterable:""},model:{value:e.timing.to,callback:function(t){e.$set(e.timing,"to",t)},expression:"timing.to"}},e._l(e.cat1,(function(option){return t("el-option",{key:option,attrs:{value:option}})})),1)],1)],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",[t("el-select",{attrs:{placeholder:"Select",filterable:""},model:{value:e.timing.fr,callback:function(t){e.$set(e.timing,"fr",t)},expression:"timing.fr"}},e._l(e.fr,(function(option){return t("el-option",{key:option,attrs:{value:option}})})),1)],1)],1)]),e._v(" "),t("div",{staticStyle:{width:"25rem",display:"flex","flex-wrap":"wrap"}},[t("div",{staticClass:"col-md-12"},[t("h4",[e._v("To")])]),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",[t("el-select",{attrs:{placeholder:"Select",filterable:""},model:{value:e.timing.from1,callback:function(t){e.$set(e.timing,"from1",t)},expression:"timing.from1"}},e._l(e.cat,(function(option){return t("el-option",{key:option,attrs:{value:option}})})),1)],1)],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",[t("el-select",{attrs:{placeholder:"Select",filterable:""},model:{value:e.timing.to1,callback:function(t){e.$set(e.timing,"to1",t)},expression:"timing.to1"}},e._l(e.cat1,(function(option){return t("el-option",{key:option,attrs:{value:option}})})),1)],1)],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",[t("el-select",{attrs:{placeholder:"Select",filterable:""},model:{value:e.timing.fr1,callback:function(t){e.$set(e.timing,"fr1",t)},expression:"timing.fr1"}},e._l(e.fr,(function(option){return t("el-option",{key:option,attrs:{value:option}})})),1)],1)],1)])]),e._v(" "),t("div",{staticClass:"row",staticStyle:{width:"100%"}},[t("div",{staticClass:"col-md-12"},[t("h1",[e._v("Cruise Reporting Timing (hh:mm a)")])]),e._v(" "),t("div",{staticStyle:{width:"25rem",display:"flex","flex-wrap":"wrap","margin-top":"10px"}},[t("div",{staticClass:"col-md-4"},[t("base-input",[t("el-select",{attrs:{placeholder:"Select",filterable:""},model:{value:e.reporting.from,callback:function(t){e.$set(e.reporting,"from",t)},expression:"reporting.from"}},e._l(e.cat,(function(option){return t("el-option",{key:option,attrs:{value:option}})})),1)],1)],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",[t("el-select",{attrs:{placeholder:"Select",filterable:""},model:{value:e.reporting.to,callback:function(t){e.$set(e.reporting,"to",t)},expression:"reporting.to"}},e._l(e.cat1,(function(option){return t("el-option",{key:option,attrs:{value:option}})})),1)],1)],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",[t("el-select",{attrs:{placeholder:"Select",filterable:""},model:{value:e.reporting.fr,callback:function(t){e.$set(e.reporting,"fr",t)},expression:"reporting.fr"}},e._l(e.fr,(function(option){return t("el-option",{key:option,attrs:{value:option}})})),1)],1)],1)])]),e._v(" "),t("div",{staticClass:"row",staticStyle:{width:"100%"}},[t("div",{staticClass:"col-md-12"},[t("h1",[e._v("Cruise Closing Timing (hh:mm a)")])]),e._v(" "),t("div",{staticStyle:{width:"25rem",display:"flex","flex-wrap":"wrap","margin-top":"10px"}},[t("div",{staticClass:"col-md-4"},[t("base-input",[t("el-select",{attrs:{placeholder:"Select",filterable:""},model:{value:e.closing.from,callback:function(t){e.$set(e.closing,"from",t)},expression:"closing.from"}},e._l(e.cat,(function(option){return t("el-option",{key:option,attrs:{value:option}})})),1)],1)],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",[t("el-select",{attrs:{placeholder:"Select",filterable:""},model:{value:e.closing.to,callback:function(t){e.$set(e.closing,"to",t)},expression:"closing.to"}},e._l(e.cat1,(function(option){return t("el-option",{key:option,attrs:{value:option}})})),1)],1)],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",[t("el-select",{attrs:{placeholder:"Select",filterable:""},model:{value:e.closing.fr,callback:function(t){e.$set(e.closing,"fr",t)},expression:"closing.fr"}},e._l(e.fr,(function(option){return t("el-option",{key:option,attrs:{value:option}})})),1)],1)],1)])]),e._v(" "),e._l(e.model.pricing,(function(n,i){return t("div",{key:i,staticClass:"row",staticStyle:{width:"100%"}},[t("div",{staticClass:"col-md-12"},[t("h1",[e._v(e._s(e.model.pricing[i].deck))])]),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"".concat(e.model.pricing[i].deck," Ticket Price(Adult)"),name:"".concat(e.model.pricing[i].deck," Ticket Price(Adult)"),placeholder:"Enter ".concat(e.model.pricing[i].deck," Ticket Price(Adult)"),"success-message":"Looks good!"},model:{value:e.model.pricing[i].adult,callback:function(t){e.$set(e.model.pricing[i],"adult",t)},expression:"model.pricing[i].adult"}})],1),e._v(" "),1==e.model.food_served?t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"".concat(e.model.pricing[i].deck," Food Price(Adult)"),name:"".concat(e.model.pricing[i].deck," Food Price(Adult)"),placeholder:"Enter ".concat(e.model.pricing[i].deck," Food Price(Adult)"),"success-message":"Looks good!"},model:{value:e.model.pricing[i].a_fprice,callback:function(t){e.$set(e.model.pricing[i],"a_fprice",t)},expression:"model.pricing[i].a_fprice"}})],1):e._e(),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"".concat(e.model.pricing[i].deck," Ticket Price(Kid)"),name:"".concat(e.model.pricing[i].deck," Ticket Price(Kid)"),placeholder:"Enter ".concat(e.model.pricing[i].deck," Ticket Price(Kid)"),"success-message":"Looks good!"},model:{value:e.model.pricing[i].kid,callback:function(t){e.$set(e.model.pricing[i],"kid",t)},expression:"model.pricing[i].kid"}})],1),e._v(" "),1==e.model.food_served?t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"".concat(e.model.pricing[i].deck," Food Price(Kid)"),name:"".concat(e.model.pricing[i].deck," Food Price(Kid)"),placeholder:"Enter ".concat(e.model.pricing[i].deck," Food Price(Kid)"),"success-message":"Looks good!"},model:{value:e.model.pricing[i].k_fprice,callback:function(t){e.$set(e.model.pricing[i],"k_fprice",t)},expression:"model.pricing[i].k_fprice"}})],1):e._e()])})),e._v(" "),t("base-input",{staticClass:"col-md-12",attrs:{label:"Description"}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.model.desc,expression:"model.desc"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea3",rows:"7"},domProps:{value:e.model.desc},on:{input:function(t){t.target.composing||e.$set(e.model,"desc",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"Title 2",name:"Title 2",placeholder:"Enter Title 2","success-message":"Looks good!",rules:"required"},model:{value:e.model.title2,callback:function(t){e.$set(e.model,"title2",t)},expression:"model.title2"}})],1),e._v(" "),t("div",{staticClass:"col-md-12 mt-4"},[e._l(e.model.expect,(function(n,i){return t("div",{key:"".concat(n,"-").concat(i),staticClass:"row1"},[t("h4",{staticStyle:{"margin-top":"0.6rem"}},[e._v(e._s(i+1)+".")]),e._v(" "),t("div",{staticClass:"coll"},[t("base-input",{attrs:{placeholder:"Enter Text"},model:{value:e.model.expect[i].desc,callback:function(t){e.$set(e.model.expect[i],"desc",t)},expression:"model.expect[i].desc"}})],1),e._v(" "),0!=i?t("i",{staticClass:"fa fa-trash",staticStyle:{"margin-top":"0.8rem","margin-left":"15px",cursor:"pointer"},on:{click:function(t){return e.rem(i)}}}):e._e()])})),e._v(" "),t("button",{staticClass:"btn btn-sm btn-primary ml-4 mb-4",attrs:{type:"button"},on:{click:function(t){return e.add()}}},[e._v("\n                    More\n                  ")])],2),e._v(" "),t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"Title 3",name:"Title 3",placeholder:"Enter Title 3","success-message":"Looks good!",rules:"required"},model:{value:e.model.title3,callback:function(t){e.$set(e.model,"title3",t)},expression:"model.title3"}})],1),e._v(" "),t("div",{staticClass:"col-md-12 mt-4"},[e._l(e.model.wear,(function(n,i){return t("div",{key:"".concat(n,"-").concat(i),staticClass:"row1"},[t("h4",{staticStyle:{"margin-top":"0.6rem"}},[e._v(e._s(i+1)+".")]),e._v(" "),t("div",{staticClass:"coll"},[t("base-input",{attrs:{placeholder:"Enter Text"},model:{value:e.model.wear[i].desc,callback:function(t){e.$set(e.model.wear[i],"desc",t)},expression:"model.wear[i].desc"}})],1),e._v(" "),0!=i?t("i",{staticClass:"fa fa-trash",staticStyle:{"margin-top":"0.8rem","margin-left":"15px",cursor:"pointer"},on:{click:function(t){return e.rem1(i)}}}):e._e()])})),e._v(" "),t("button",{staticClass:"btn btn-sm btn-primary ml-4 mb-4",attrs:{type:"button"},on:{click:function(t){return e.add1()}}},[e._v("\n                    More\n                  ")])],2),e._v(" "),t("div",{staticClass:"mb-4",staticStyle:{width:"100%"}},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Image (1024 X 682)"}},[t("file-input",{attrs:{accept:".jpg,.png,.jpeg,.webp"},on:{change:e.filesChange1}})],1)],1),e._v(" "),""!=e.link?t("div",{staticClass:"col-md-4 cnm",staticStyle:{height:"250px"}},[t("img",{staticClass:"op",attrs:{src:e.link}}),e._v(" "),t("i",{staticClass:"fa fa-trash plg",on:{click:function(t){return e.dlt()}}})]):e._e(),e._v(" "),t("div",{staticClass:"col-md-4 kp",staticStyle:{height:"250px"},attrs:{hidden:e.se}},[t("p",{staticClass:"spinners",attrs:{hidden:e.se}})])])],2),e._v(" "),1==e.sin?t("base-button",{attrs:{type:"success","native-type":"submit"},on:{click:function(t){return l(e.firstFormSubmit)}}},[e._v("Save")]):t("base-button",{attrs:{type:"success","native-type":"submit",disabled:""}},[e._v("Saving\n                "),t("p",{staticClass:"spinner"})])],1)]}}])})],1)])])])],1)}),[],!1,null,"8ec34848",null);t.default=component.exports},392:function(e,t,n){var l;"undefined"!=typeof self&&self,e.exports=(l=n(422),function(e){var t={};function n(l){if(t[l])return t[l].exports;var r=t[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(l,r,function(t){return e[t]}.bind(null,r));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=l},function(e,t,n){"use strict";n.r(t),n.d(t,"Component",(function(){return p})),n.d(t,"Plugin",(function(){return m}));var l=n(0),r=n.n(l),i=["onChange","onClose","onDestroy","onMonthChange","onOpen","onYearChange"];function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var a=function(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},o=function(e){return e&&e.length?e:null},c=function(e){return u({},e)},s=i.concat(["onValueUpdate","onDayCreate","onParseConfig","onReady","onPreCalendarPosition","onKeyDown"]),d=["locale","showMonths"],p={name:"flat-pickr",render:function(e){return e("input",{attrs:{type:"text","data-input":!0},props:{disabled:this.disabled},on:{input:this.onInput}})},props:{value:{default:null,required:!0,validator:function(e){return null===e||e instanceof Date||"string"==typeof e||e instanceof String||e instanceof Array||"number"==typeof e}},config:{type:Object,default:function(){return{wrap:!1,defaultDate:null}}},events:{type:Array,default:function(){return i}},disabled:{type:Boolean,default:!1}},data:function(){return{fp:null}},mounted:function(){var e=this;if(!this.fp){var t=c(this.config);this.events.forEach((function(n){var l,i=r.a.defaultConfig[n]||[];t[n]=(l=t[n]||[],l instanceof Array?l:[l]).concat(i,(function(){for(var t=arguments.length,l=new Array(t),r=0;r<t;r++)l[r]=arguments[r];e.$emit.apply(e,[a(n)].concat(l))}))})),t.defaultDate=this.value||t.defaultDate,this.fp=new r.a(this.getElem(),t),this.fpInput().addEventListener("blur",this.onBlur),this.$on("on-close",this.onClose),this.$watch("disabled",this.watchDisabled,{immediate:!0})}},methods:{getElem:function(){return this.config.wrap?this.$el.parentNode:this.$el},onInput:function(e){var t=this,n=e.target;this.$nextTick((function(){t.$emit("input",o(n.value))}))},fpInput:function(){return this.fp.altInput||this.fp.input},onBlur:function(e){this.$emit("blur",o(e.target.value))},onClose:function(e,t){this.$emit("input",o(t))},watchDisabled:function(e){e?this.fpInput().setAttribute("disabled",e):this.fpInput().removeAttribute("disabled")}},watch:{config:{deep:!0,handler:function(e){var t=this,n=c(e);s.forEach((function(e){delete n[e]})),this.fp.set(n),d.forEach((function(e){void 0!==n[e]&&t.fp.set(e,n[e])}))}},value:function(e){e!==o(this.$el.value)&&this.fp&&this.fp.setDate(e,!0)}},beforeDestroy:function(){this.fp&&(this.fpInput().removeEventListener("blur",this.onBlur),this.fp.destroy(),this.fp=null)}},m=function(e,t){var n="flat-pickr";"string"==typeof t&&(n=t),e.component(n,p)};p.install=m,t.default=p}]).default)},400:function(e,t,n){"use strict";n(32),n(21),n(26),n(38),n(39),n(23),n(19),n(44),n(45),n(43);var l=n(9);n(11);function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,l=function(){};return{s:l,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw r}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"file-input",inheritAttrs:!1,props:{initialLabel:{type:String,default:"Select file"}},data:function(){return{files:[]}},computed:{listeners:function(){return d(d({},this.$listeners),{},{change:this.fileChange})},label:function(){var e,t=[],n=r(this.files);try{for(n.s();!(e=n.n()).done;){var l=e.value;t.push(l.name)}}catch(e){n.e(e)}finally{n.f()}return t.length?t.join(", "):this.initialLabel}},methods:{fileChange:function(e){this.files=e.target.files,this.$emit("change",this.files)}}},f=n(7),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"custom-file"},[t("input",e._g(e._b({staticClass:"custom-file-input",attrs:{type:"file",id:"customFileLang",lang:"en"}},"input",e.$attrs,!1),e.listeners)),e._v(" "),t("label",{staticClass:"custom-file-label",attrs:{for:"customFileLang"}},[e._v("\n    "+e._s(e.label)+"\n  ")])])}),[],!1,null,null,null);t.a=component.exports},403:function(e,t,n){"use strict";var l=n(10),r=(n(37),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{firstFormSubmit:function(){return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),o=n(7),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Custom styles")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        For custom form validation messages, you’ll need to provide error messages to your\n        "),t("code",[e._v("<base-input>")]),e._v(" components. This disables the browser default feedback tooltips, but still\n        provides access to the form\n        validation APIs in JavaScript.\n        "),t("br"),t("br"),e._v("\n        When attempting to submit, you’ll see the"),t("code",[e._v(".is-valid")]),e._v(" and "),t("code",[e._v(".is-invalid")]),e._v(" classes applied\n        to your form controls.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var l=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),l(e.firstFormSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name","success-message":"Looks good!",rules:"required"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",rules:"required","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",rules:"required"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",rules:"required"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",rules:"required"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",rules:"required"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},404:function(e,t,n){"use strict";var l=n(10),r=(n(37),{components:{},data:function(){return{model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{submit:function(){return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),o=n(7),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Browser defaults")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll\n        see a slightly different style of feedback.\n        "),t("br"),t("br"),e._v("\n        While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name",required:""},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",required:""},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",required:""},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",required:""},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",required:""},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",required:""},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n        Agree to terms and conditions\n      ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)])}),[],!1,null,null,null);t.a=component.exports},405:function(e,t,n){"use strict";var l=n(10),r=(n(37),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{onSubmit:function(){return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$refs.formValidator.validate()}}),o=n(7),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Server side validation")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        We recommend using client side validation, but in case you require server side, you can indicate invalid and\n        valid form fields with "),t("code",[e._v(".is-invalid")]),e._v(" and "),t("code",[e._v(".is-valid")]),e._v(". Note that\n        "),t("code",[e._v(".invalid-feedback")]),e._v("\n        is also supported with these classes.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var l=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),l(e.onSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",rules:"required",name:"First name",placeholder:"First name","success-message":"Looks good!"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",rules:"required",name:"Last name",placeholder:"Last name","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",rules:"required",name:"Username",placeholder:"Username","success-message":"Looks good!"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",rules:"required",placeholder:"City","success-message":"Looks good!"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",rules:"required",placeholder:"State","success-message":"Looks good!"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",rules:"required",placeholder:"Zip","success-message":"Looks good!"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},800:function(e,t,n){}}]);