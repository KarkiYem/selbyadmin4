(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{1018:function(e,t,n){"use strict";n(729)},1019:function(e,t,n){"use strict";n(730)},1261:function(e,t,n){"use strict";n.r(t);n(11),n(116),n(32),n(21),n(26),n(38),n(39),n(246),n(86);var o,r=n(162),l=n.n(r),c=n(10),d=n(9),m=(n(406),n(407)),f=n.n(m),v=(n(408),n(409)),h=n.n(v),y=(n(37),n(23),n(68)),w=n(403),C=n(404),_=n(405),k=n(400),x=n(392),O=n.n(x),S=(n(413),n(420)),j=n.n(S);function P(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function $(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var N=n(73),E={name:"form-components",layout:"DashboardLayout",middleware:["isAuthenticated","checkAdmin"],components:(o={CustomStylesValidation:w.a,BrowserDefaultsValidation:C.a,ServerSideValidation:_.a},Object(d.a)(o,h.a.name,h.a),Object(d.a)(o,f.a.name,f.a),Object(d.a)(o,"FileInput",k.a),Object(d.a)(o,"flatPicker",O.a),o),data:function(){return{validated:!1,seen:!0,se:!0,sin:!0,model:{id:"",name:"",img:"",phone:"",email:"",s_phone:"",s_email:"",city:"",state:"",pincode:"",address:""},link:"",obj:null,ok:!0,path1:"",password:"",passwordConfirm:"",maskCode:""}},methods:{firstFormSubmit:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,o,r,d,m,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e,o=new FormData,!(""!=n.password&&n.password.length<8)){t.next=5;break}return l()({showClose:!0,message:"Password must be of atleast 8 characters!",type:"warning"}),t.abrupt("return");case 5:if(""==n.password||n.passwordConfirm==n.password){t.next=8;break}return l()({showClose:!0,message:"Password and Confirm Password must be same!",type:"warning"}),t.abrupt("return");case 8:if(""==n.model.name||""==n.model.phone||1!=!isNaN(n.model.phone)){t.next=31;break}for(m in r="+91"+n.model.phone,n.sin=!1,n.model.img=null==n.obj?n.model.img:n.obj,(d=$({},n.model)).phone=r,d)d.hasOwnProperty(m)&&o.append(m,d[m]);if(""==n.password){t.next=19;break}j.a.fire({title:"New Password is detected!",text:"You will be logout after this operation!",type:"warning",showCancelButton:!0,confirmButtonClass:"btn btn-success btn-fill",cancelButtonClass:"btn btn-danger btn-fill",confirmButtonText:"Yes, proceed!",buttonsStyling:!1}).then(function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.value){e.next=13;break}if(0!=n.ok){e.next=6;break}return e.next=4,y.a.collection("profile").create(o).then((function(){setTimeout((function(){l()({showClose:!0,message:"Profile Created Successfuly!",type:"success"}),n.sin=!0}),1500)})).catch((function(){n.sin=!0,l()({showClose:!0,message:"Something went wrong!",type:"warning"})}));case 4:e.next=8;break;case 6:return e.next=8,y.a.collection("profile").update(n.model.id,o).then((function(){setTimeout((function(){l()({showClose:!0,message:"Profile Updated Successfuly!",type:"success"}),n.sin=!0}),1500)})).catch((function(e){n.sin=!0,l()({showClose:!0,message:"Something went wrong!",type:"warning"})}));case 8:return{code:n.maskCode},e.next=11,y.a.admins.update(y.a.authStore.model.id,{password:n.password,passwordConfirm:n.passwordConfirm}).then((function(){n.logout()}));case 11:e.next=14;break;case 13:n.sin=!0;case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.next=29;break;case 19:if(0!=n.ok){t.next=24;break}return t.next=22,y.a.collection("profile").create(o).then((function(){setTimeout((function(){l()({showClose:!0,message:"Profile Created Successfuly!",type:"success"}),n.sin=!0}),1500)})).catch((function(){n.sin=!0,l()({showClose:!0,message:"Something went wrong!",type:"warning"})}));case 22:t.next=26;break;case 24:return t.next=26,y.a.collection("profile").update(n.model.id,o).then((function(){setTimeout((function(){l()({showClose:!0,message:"Profile Updated Successfuly!",type:"success"}),n.sin=!0}),1500)})).catch((function(e){n.sin=!0,l()({showClose:!0,message:"Something went wrong!",type:"warning"})}));case 26:return data={code:n.maskCode},t.next=29,y.a.collection("settings").update("wpaaz5r1qamc9o1",data);case 29:t.next=32;break;case 31:l()({showClose:!0,message:"All fields are required!",type:"warning"});case 32:case"end":return t.stop()}}),t)})))()},getcat:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=e).path1=y.c,t.prev=2,t.next=5,y.a.collection("profile").getFirstListItem('email="selby@gmail.com"');case 5:return o=t.sent,t.next=8,y.a.collection("profile").subscribe("*",(function(e){o=e.record}));case 8:o.phone=o.phone.slice(3),n.model=o,n.link="".concat(n.path1,"/api/files/profile/").concat(n.model.id,"/").concat(n.model.img),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),n.ok=!1;case 16:case"end":return t.stop()}}),t,null,[[2,13]])})))()},filesChange1:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o=t,0!=e.length&&(o.link="",o.se=!1,o.link=URL.createObjectURL(e[0]),o.obj=e[0],o.se=!0);case 2:case"end":return n.stop()}}),n)})))()},dlt:function(){this.link="",this.obj=null},logout:function(){this.$store.state.role;N.remove("email"),N.remove("role"),this.$store.commit("email",null),this.$store.commit("role",null),this.$router.push("/login")}},mounted:function(){this.getcat()}},L=E,D=(n(1018),n(1019),n(7)),component=Object(D.a)(L,(function(){var e=this,t=e._self._c;return t("div",[t("base-header",{staticClass:"pb-3"},[t("div",{staticClass:"row align-items-center py-4"},[t("div",{staticClass:"col-lg-6 col-7"},[t("h6",{staticClass:"h2 text-white"},[e._v("Profile")])])])]),e._v(" "),t("div",{staticClass:"container-fluid mt--6"},[t("div",{staticClass:"row ht"},[t("div",{staticClass:"col"},[t("div",{staticClass:"card-wrapper"},[t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var o=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(e){e.preventDefault()}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Name",name:"Name",placeholder:"Enter Name","success-message":"Looks good!",rules:"required"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Phone (10 digits)",name:"Phone",maxLength:"10",minLength:"10",placeholder:"Enter Phone"},model:{value:e.model.phone,callback:function(t){e.$set(e.model,"phone",t)},expression:"model.phone"}})],1),e._v(" "),1==e.ok?t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Email",name:"Email",placeholder:"Enter Email",readonly:""},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}})],1):t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Email",name:"Email",placeholder:"Enter Email"},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}})],1),e._v(" "),t("div",{staticClass:"col-md-12"},[t("h4",[e._v("Customer Support")])]),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Phone",name:"Phone",placeholder:"Enter Phone"},model:{value:e.model.s_phone,callback:function(t){e.$set(e.model,"s_phone",t)},expression:"model.s_phone"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Email",name:"Email",placeholder:"Enter Email"},model:{value:e.model.s_email,callback:function(t){e.$set(e.model,"s_email",t)},expression:"model.s_email"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Address",name:"Address",placeholder:"Enter Address"},model:{value:e.model.address,callback:function(t){e.$set(e.model,"address",t)},expression:"model.address"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"Enter City"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"Enter State"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Pincode",name:"Pincode",placeholder:"Enter Pincode"},model:{value:e.model.pincode,callback:function(t){e.$set(e.model,"pincode",t)},expression:"model.pincode"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"New Password",name:"Password",placeholder:"Enter Password","success-message":"Looks good!",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Confirm Password",name:"Confirm Password",placeholder:"Enter Confirm Password","success-message":"Looks good!"},model:{value:e.passwordConfirm,callback:function(t){e.passwordConfirm=t},expression:"passwordConfirm"}})],1),e._v(" "),t("div",{staticClass:"mb-4",staticStyle:{width:"100%"}},[t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Image"}},[t("file-input",{attrs:{accept:".jpg,.png,.jpeg,.webp"},on:{change:e.filesChange1}})],1)],1),e._v(" "),""!=e.link?t("div",{staticClass:"col-md-3 cnm",staticStyle:{height:"250px"}},[t("img",{staticClass:"op",attrs:{src:e.link}}),e._v(" "),t("i",{staticClass:"fa fa-trash plg",on:{click:function(t){return e.dlt(e.link)}}})]):e._e(),e._v(" "),t("div",{staticClass:"col-md-3 kp",staticStyle:{height:"250px"},attrs:{hidden:e.se}},[t("p",{staticClass:"spinners",attrs:{hidden:e.se}})])])]),e._v(" "),1==e.sin&&1==e.ok?t("base-button",{attrs:{type:"success","native-type":"submit"},on:{click:function(t){return o(e.firstFormSubmit)}}},[e._v("Update")]):e._e(),e._v(" "),0==e.sin&&1==e.ok?t("base-button",{attrs:{type:"success","native-type":"submit",disabled:""}},[e._v("Updating\n                "),t("p",{staticClass:"spinner"})]):e._e(),e._v(" "),1==e.sin&&0==e.ok?t("base-button",{attrs:{type:"success","native-type":"submit"},on:{click:function(t){return o(e.firstFormSubmit)}}},[e._v("Save")]):e._e(),e._v(" "),0==e.sin&&0==e.ok?t("base-button",{attrs:{type:"success","native-type":"submit",disabled:""}},[e._v("Saving\n                "),t("p",{staticClass:"spinner"})]):e._e()],1)]}}])})],1)])])])],1)}),[],!1,null,"60352336",null);t.default=component.exports},392:function(e,t,n){var o;"undefined"!=typeof self&&self,e.exports=(o=n(422),function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=o},function(e,t,n){"use strict";n.r(t),n.d(t,"Component",(function(){return p})),n.d(t,"Plugin",(function(){return m}));var o=n(0),r=n.n(o),i=["onChange","onClose","onDestroy","onMonthChange","onOpen","onYearChange"];function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var a=function(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},l=function(e){return e&&e.length?e:null},c=function(e){return u({},e)},s=i.concat(["onValueUpdate","onDayCreate","onParseConfig","onReady","onPreCalendarPosition","onKeyDown"]),d=["locale","showMonths"],p={name:"flat-pickr",render:function(e){return e("input",{attrs:{type:"text","data-input":!0},props:{disabled:this.disabled},on:{input:this.onInput}})},props:{value:{default:null,required:!0,validator:function(e){return null===e||e instanceof Date||"string"==typeof e||e instanceof String||e instanceof Array||"number"==typeof e}},config:{type:Object,default:function(){return{wrap:!1,defaultDate:null}}},events:{type:Array,default:function(){return i}},disabled:{type:Boolean,default:!1}},data:function(){return{fp:null}},mounted:function(){var e=this;if(!this.fp){var t=c(this.config);this.events.forEach((function(n){var o,i=r.a.defaultConfig[n]||[];t[n]=(o=t[n]||[],o instanceof Array?o:[o]).concat(i,(function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];e.$emit.apply(e,[a(n)].concat(o))}))})),t.defaultDate=this.value||t.defaultDate,this.fp=new r.a(this.getElem(),t),this.fpInput().addEventListener("blur",this.onBlur),this.$on("on-close",this.onClose),this.$watch("disabled",this.watchDisabled,{immediate:!0})}},methods:{getElem:function(){return this.config.wrap?this.$el.parentNode:this.$el},onInput:function(e){var t=this,n=e.target;this.$nextTick((function(){t.$emit("input",l(n.value))}))},fpInput:function(){return this.fp.altInput||this.fp.input},onBlur:function(e){this.$emit("blur",l(e.target.value))},onClose:function(e,t){this.$emit("input",l(t))},watchDisabled:function(e){e?this.fpInput().setAttribute("disabled",e):this.fpInput().removeAttribute("disabled")}},watch:{config:{deep:!0,handler:function(e){var t=this,n=c(e);s.forEach((function(e){delete n[e]})),this.fp.set(n),d.forEach((function(e){void 0!==n[e]&&t.fp.set(e,n[e])}))}},value:function(e){e!==l(this.$el.value)&&this.fp&&this.fp.setDate(e,!0)}},beforeDestroy:function(){this.fp&&(this.fpInput().removeEventListener("blur",this.onBlur),this.fp.destroy(),this.fp=null)}},m=function(e,t){var n="flat-pickr";"string"==typeof t&&(n=t),e.component(n,p)};p.install=m,t.default=p}]).default)},400:function(e,t,n){"use strict";n(32),n(21),n(26),n(38),n(39),n(23),n(19),n(44),n(45),n(43);var o=n(9);n(11);function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw r}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"file-input",inheritAttrs:!1,props:{initialLabel:{type:String,default:"Select file"}},data:function(){return{files:[]}},computed:{listeners:function(){return d(d({},this.$listeners),{},{change:this.fileChange})},label:function(){var e,t=[],n=r(this.files);try{for(n.s();!(e=n.n()).done;){var o=e.value;t.push(o.name)}}catch(e){n.e(e)}finally{n.f()}return t.length?t.join(", "):this.initialLabel}},methods:{fileChange:function(e){this.files=e.target.files,this.$emit("change",this.files)}}},f=n(7),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"custom-file"},[t("input",e._g(e._b({staticClass:"custom-file-input",attrs:{type:"file",id:"customFileLang",lang:"en"}},"input",e.$attrs,!1),e.listeners)),e._v(" "),t("label",{staticClass:"custom-file-label",attrs:{for:"customFileLang"}},[e._v("\n    "+e._s(e.label)+"\n  ")])])}),[],!1,null,null,null);t.a=component.exports},403:function(e,t,n){"use strict";var o=n(10),r=(n(37),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{firstFormSubmit:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),l=n(7),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Custom styles")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        For custom form validation messages, you’ll need to provide error messages to your\n        "),t("code",[e._v("<base-input>")]),e._v(" components. This disables the browser default feedback tooltips, but still\n        provides access to the form\n        validation APIs in JavaScript.\n        "),t("br"),t("br"),e._v("\n        When attempting to submit, you’ll see the"),t("code",[e._v(".is-valid")]),e._v(" and "),t("code",[e._v(".is-invalid")]),e._v(" classes applied\n        to your form controls.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var o=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),o(e.firstFormSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name","success-message":"Looks good!",rules:"required"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",rules:"required","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",rules:"required"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",rules:"required"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",rules:"required"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",rules:"required"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},404:function(e,t,n){"use strict";var o=n(10),r=(n(37),{components:{},data:function(){return{model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{submit:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),l=n(7),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Browser defaults")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll\n        see a slightly different style of feedback.\n        "),t("br"),t("br"),e._v("\n        While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name",required:""},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",required:""},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",required:""},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",required:""},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",required:""},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",required:""},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n        Agree to terms and conditions\n      ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)])}),[],!1,null,null,null);t.a=component.exports},405:function(e,t,n){"use strict";var o=n(10),r=(n(37),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{onSubmit:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$refs.formValidator.validate()}}),l=n(7),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Server side validation")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        We recommend using client side validation, but in case you require server side, you can indicate invalid and\n        valid form fields with "),t("code",[e._v(".is-invalid")]),e._v(" and "),t("code",[e._v(".is-valid")]),e._v(". Note that\n        "),t("code",[e._v(".invalid-feedback")]),e._v("\n        is also supported with these classes.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var o=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),o(e.onSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",rules:"required",name:"First name",placeholder:"First name","success-message":"Looks good!"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",rules:"required",name:"Last name",placeholder:"Last name","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",rules:"required",name:"Username",placeholder:"Username","success-message":"Looks good!"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",rules:"required",placeholder:"City","success-message":"Looks good!"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",rules:"required",placeholder:"State","success-message":"Looks good!"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",rules:"required",placeholder:"Zip","success-message":"Looks good!"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},729:function(e,t,n){},730:function(e,t,n){}}]);