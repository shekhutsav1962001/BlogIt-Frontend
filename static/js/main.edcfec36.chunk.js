(this.webpackJsonpblogit=this.webpackJsonpblogit||[]).push([[0],{138:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(19),c=n.n(s),o=(n(53),n(6)),l=(n(29),n(5)),i=n(0);var u=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("header",{className:"masthead",children:Object(i.jsx)("div",{className:"container h-100",children:Object(i.jsx)("div",{className:"row h-100 align-items-center",children:Object(i.jsxs)("div",{className:"col-12 text-center",children:[Object(i.jsx)("h1",{className:"font-weight-bold",children:"Welcome to BlogIt !"}),Object(i.jsx)("h3",{className:"lead",children:"Blogging is a conversation, not a code ."})]})})})})})},d=n(2),b=n.n(d),j=n(3),m=n(7),p=function(){var e=localStorage.getItem("token");return"null"!==e&&"undefined"!==e&&""!==e&&void 0!==e&&null!==e},h=n(18),g=n(9),x=n.n(g),f=function(e,t){e?h.b.success(t,{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):h.b.error(t,{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},O="https://blogit19.herokuapp.com/",v=function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,r,s,c,o,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,localStorage.getItem("token");case 3:return n=e.sent,a="".concat(O,"auth/setpassword"),e.next=7,x()({method:"PUT",url:a,data:t,headers:{Authorization:"Bearer ".concat(n),"Content-type":"application/json"}});case 7:if(r=e.sent,s=r.data,c=s.error,o=s.message,l=s.status,!c){e.next=14;break}if(f(!1,c),401!==l){e.next=13;break}return e.abrupt("return",{status:l});case 13:return e.abrupt("return",null);case 14:return f(!0,o),e.abrupt("return",{message:o});case 18:return e.prev=18,e.t0=e.catch(0),f(!1,"Something went wrong"),e.abrupt("return",null);case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,r,s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(O,"auth/login"),e.next=4,x()({method:"POST",url:n,data:t});case 4:if(a=e.sent,r=a.data,s=r.error,c=r.token,!s){e.next=9;break}return f(!1,s),e.abrupt("return",null);case 9:return f(!0,"Login successful!!"),e.abrupt("return",{token:c});case 13:return e.prev=13,e.t0=e.catch(0),f(!1,"Something went wrong"),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();var y=function(){var e=Object(l.g)(),t=Object(a.useContext)($),n=t.isLogin,r=t.setisLogin,s=Object(a.useState)(""),c=Object(o.a)(s,2),u=c[0],d=c[1];function g(){return(g=Object(j.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==u.trim().length){t.next=4;break}return f(!1,"Please enter password"),d(""),t.abrupt("return");case 4:if(!(u.trim().length<5)){t.next=8;break}return f(!1,"Minimum length of password should be 5"),d(""),t.abrupt("return");case 8:return t.next=10,v({password:u});case 10:(n=t.sent)&&n.status&&(localStorage.removeItem("token"),r(!1),e.push("/login")),n&&n.message&&(console.log("yo boy password seteddd"),d(""));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){p()?r(!0):r(!1)}),[r]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(h.a,{}),Object(i.jsxs)("nav",{className:"navbar  navbar-expand-lg",children:[Object(i.jsx)(m.b,{className:"navbar-brand",exact:"true",to:"/",children:Object(i.jsx)("img",{src:"https://storage.googleapis.com/canteen-assets/blogit/blogit.png",height:"30",alt:"CoolBrand",style:{marginLeft:"10px"}})}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent",style:{color:"white",outline:"none"},"aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon ",children:Object(i.jsx)("i",{style:{color:"#F8C44C",fontSize:"28px"},className:"fa fa-bars"})})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(m.c,{exact:!0,activeClassName:"active",to:"/",className:"nav-link third after",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(m.c,{exact:!0,activeClassName:"active",to:"/viewblogs",className:"nav-link third after",children:"view Blogs"})}),n?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(m.c,{exact:!0,activeClassName:"active",to:"/addblog",className:"nav-link third after",children:"Add Blog"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(m.c,{exact:!0,activeClassName:"active",to:"/viewmyblogs",className:"nav-link third after",children:"View myblogs"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"/","data-bs-toggle":"modal","data-bs-target":"#exampleModal",className:"nav-link third after",children:"Set password"})}),Object(i.jsx)("li",{className:"nav-item",onClick:function(){localStorage.removeItem("token"),r(!1)},children:Object(i.jsx)("a",{href:"/",className:"nav-link third after",children:"Logout"})})]}):Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(m.c,{exact:!0,activeClassName:"active",to:"/login",className:"nav-link third after",children:"Login"})})]}),Object(i.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(i.jsx)("div",{className:"modal-dialog",children:Object(i.jsxs)("div",{className:"modal-content",children:[Object(i.jsxs)("div",{className:"modal-header",children:[Object(i.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Set Password"}),Object(i.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(i.jsx)("div",{className:"modal-body",children:Object(i.jsxs)("form",{children:[Object(i.jsx)("div",{className:"alert alert-info",role:"alert",children:"By Setting password you can login with email and password."}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),Object(i.jsx)("input",{type:"password",value:u,onChange:function(e){d(e.target.value)},className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})]})]})}),Object(i.jsxs)("div",{className:"modal-footer",children:[Object(i.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(i.jsx)("button",{type:"button",onClick:function(){return g.apply(this,arguments)},className:"btn btn-primary","data-bs-dismiss":"modal",children:"Save"})]})]})})})]})]})]})};var w=function(){return Object(i.jsx)("div",{className:"splash",children:Object(i.jsxs)("svg",{id:"name",width:"428",height:"150",viewBox:"0 0 428 150",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(i.jsx)("path",{d:"M52.344 57.304C55.992 57.88 59.304 59.368 62.28 61.768C65.352 64.168 67.752 67.144 69.48 70.696C71.304 74.248 72.216 78.04 72.216 82.072C72.216 87.16 70.92 91.768 68.328 95.896C65.736 99.928 61.944 103.144 56.952 105.544C52.056 107.848 46.248 109 39.528 109H2.08801V8.632H38.088C44.904 8.632 50.712 9.784 55.512 12.088C60.312 14.296 63.912 17.32 66.312 21.16C68.712 25 69.912 29.32 69.912 34.12C69.912 40.072 68.28 45.016 65.016 48.952C61.848 52.792 57.624 55.576 52.344 57.304ZM15.192 51.976H37.224C43.368 51.976 48.12 50.536 51.48 47.656C54.84 44.776 56.52 40.792 56.52 35.704C56.52 30.616 54.84 26.632 51.48 23.752C48.12 20.872 43.272 19.432 36.936 19.432H15.192V51.976ZM38.376 98.2C44.904 98.2 49.992 96.664 53.64 93.592C57.288 90.52 59.112 86.248 59.112 80.776C59.112 75.208 57.192 70.84 53.352 67.672C49.512 64.408 44.376 62.776 37.944 62.776H15.192V98.2H38.376Z",stroke:"white",strokeWidth:"4",mask:"url(#path-1-outside-1)"}),Object(i.jsx)("path",{d:"M103.505 2.44V109H90.4005V2.44H103.505Z",stroke:"white",strokeWidth:"4",mask:"url(#path-1-outside-1)"}),Object(i.jsx)("path",{d:"M160.254 110.296C152.862 110.296 146.142 108.616 140.094 105.256C134.142 101.896 129.438 97.144 125.982 91C122.622 84.76 120.942 77.56 120.942 69.4C120.942 61.336 122.67 54.232 126.126 48.088C129.678 41.848 134.478 37.096 140.526 33.832C146.574 30.472 153.342 28.792 160.83 28.792C168.318 28.792 175.086 30.472 181.134 33.832C187.182 37.096 191.934 41.8 195.39 47.944C198.942 54.088 200.718 61.24 200.718 69.4C200.718 77.56 198.894 84.76 195.246 91C191.694 97.144 186.846 101.896 180.702 105.256C174.558 108.616 167.742 110.296 160.254 110.296ZM160.254 98.776C164.958 98.776 169.374 97.672 173.502 95.464C177.63 93.256 180.942 89.944 183.438 85.528C186.03 81.112 187.326 75.736 187.326 69.4C187.326 63.064 186.078 57.688 183.582 53.272C181.086 48.856 177.822 45.592 173.79 43.48C169.758 41.272 165.39 40.168 160.686 40.168C155.886 40.168 151.47 41.272 147.438 43.48C143.502 45.592 140.334 48.856 137.934 53.272C135.534 57.688 134.334 63.064 134.334 69.4C134.334 75.832 135.486 81.256 137.79 85.672C140.19 90.088 143.358 93.4 147.294 95.608C151.23 97.72 155.55 98.776 160.254 98.776Z",stroke:"white",strokeWidth:"4",mask:"url(#path-1-outside-1)"}),Object(i.jsx)("path",{d:"M250.491 28.792C257.307 28.792 263.259 30.28 268.347 33.256C273.531 36.232 277.371 39.976 279.867 44.488V30.088H293.115V110.728C293.115 117.928 291.579 124.312 288.507 129.88C285.435 135.544 281.019 139.96 275.259 143.128C269.595 146.296 262.971 147.88 255.387 147.88C245.019 147.88 236.379 145.432 229.467 140.536C222.555 135.64 218.475 128.968 217.227 120.52H230.187C231.627 125.32 234.603 129.16 239.115 132.04C243.627 135.016 249.051 136.504 255.387 136.504C262.587 136.504 268.443 134.248 272.955 129.736C277.563 125.224 279.867 118.888 279.867 110.728V94.168C277.275 98.776 273.435 102.616 268.347 105.688C263.259 108.76 257.307 110.296 250.491 110.296C243.483 110.296 237.099 108.568 231.339 105.112C225.675 101.656 221.211 96.808 217.947 90.568C214.683 84.328 213.051 77.224 213.051 69.256C213.051 61.192 214.683 54.136 217.947 48.088C221.211 41.944 225.675 37.192 231.339 33.832C237.099 30.472 243.483 28.792 250.491 28.792ZM279.867 69.4C279.867 63.448 278.667 58.264 276.267 53.848C273.867 49.432 270.603 46.072 266.475 43.768C262.443 41.368 257.979 40.168 253.083 40.168C248.187 40.168 243.723 41.32 239.691 43.624C235.659 45.928 232.443 49.288 230.043 53.704C227.643 58.12 226.443 63.304 226.443 69.256C226.443 75.304 227.643 80.584 230.043 85.096C232.443 89.512 235.659 92.92 239.691 95.32C243.723 97.624 248.187 98.776 253.083 98.776C257.979 98.776 262.443 97.624 266.475 95.32C270.603 92.92 273.867 89.512 276.267 85.096C278.667 80.584 279.867 75.352 279.867 69.4Z",stroke:"white",strokeWidth:"4",mask:"url(#path-1-outside-1)"}),Object(i.jsx)("path",{d:"M366.755 8.632V109H353.651V8.632H366.755Z",stroke:"white",strokeWidth:"4",mask:"url(#path-1-outside-1)"}),Object(i.jsx)("path",{d:"M405.072 40.888V87.4C405.072 91.24 405.888 93.976 407.52 95.608C409.152 97.144 411.984 97.912 416.016 97.912H425.664V109H413.856C406.56 109 401.088 107.32 397.44 103.96C393.792 100.6 391.968 95.08 391.968 87.4V40.888H381.744V30.088H391.968V10.216H405.072V30.088H425.664V40.888H405.072Z",stroke:"white",strokeWidth:"4",mask:"url(#path-1-outside-1)"})]})})},N=n(15),k=n.n(N),S=n(16),L=n.n(S),T=(n(136),"https://blogit19.herokuapp.com/"),B=function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,r,s,c,o,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,localStorage.getItem("token");case 3:return n=e.sent,a="".concat(T,"blog/addblog"),e.next=7,x()({method:"POST",url:a,data:t,headers:{Authorization:"Bearer ".concat(n),"Content-type":"application/json"}});case 7:if(r=e.sent,s=r.data,c=s.error,o=s.message,l=s.status,!c){e.next=14;break}if(f(!1,c),401!==l){e.next=13;break}return e.abrupt("return",{status:l});case 13:return e.abrupt("return",null);case 14:return f(!0,o),e.abrupt("return",{message:o});case 18:return e.prev=18,e.t0=e.catch(0),f(!1,"Something went wrong"),e.abrupt("return",null);case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(j.a)(b.a.mark((function e(){var t,n,a,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(T,"blog/getallblogs"),e.next=4,x()({method:"GET",url:t,headers:{"Content-type":"application/json"}});case 4:if(n=e.sent,a=n.data,r=a.blogs,!(s=a.error)){e.next=9;break}return f(!1,s),e.abrupt("return",null);case 9:return e.abrupt("return",{blogs:r});case 12:return e.prev=12,e.t0=e.catch(0),f(!1,"Something went wrong"),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,r,s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(T,"blog/getblog/").concat(t),e.next=4,x()({method:"GET",url:n,headers:{"Content-type":"application/json"}});case 4:if(a=e.sent,r=a.data,s=r.blog,!(c=r.error)){e.next=9;break}return f(!1,c),e.abrupt("return",null);case 9:return e.abrupt("return",{blog:s});case 12:return e.prev=12,e.t0=e.catch(0),f(!1,"Something went wrong"),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(j.a)(b.a.mark((function e(){var t,n,a,r,s,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,localStorage.getItem("token");case 3:return t=e.sent,n="".concat(T,"blog/getmyblog"),e.next=7,x()({method:"GET",url:n,headers:{Authorization:"Bearer ".concat(t),"Content-type":"application/json"}});case 7:if(a=e.sent,r=a.data,s=r.blogs,c=r.status,!(o=r.error)){e.next=14;break}if(f(!1,o),401!==c){e.next=13;break}return e.abrupt("return",{status:c});case 13:return e.abrupt("return",null);case 14:return e.abrupt("return",{blogs:s});case 17:return e.prev=17,e.t0=e.catch(0),f(!1,"Something went wrong"),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,r,s,c,o,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,localStorage.getItem("token");case 3:return n=e.sent,a="".concat(T,"blog/uploadfile"),e.next=7,x()({method:"POST",url:a,data:t,headers:{Authorization:"Bearer ".concat(n),"Content-type":"application/json"}});case 7:if(r=e.sent,s=r.data,c=s.error,o=s.message,l=s.status,!c){e.next=14;break}if(f(!1,c),401!==l){e.next=13;break}return e.abrupt("return",{status:l});case 13:return e.abrupt("return",null);case 14:return f(!0,"image uploaded successfully"),e.abrupt("return",{message:o});case 18:return e.prev=18,e.t0=e.catch(0),f(!1,"Something went wrong"),e.abrupt("return",null);case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,r,s,c,o,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,localStorage.getItem("token");case 3:return n=e.sent,a="".concat(T,"blog/getblogedit/").concat(t),e.next=7,x()({method:"GET",url:a,headers:{Authorization:"Bearer ".concat(n),"Content-type":"application/json"}});case 7:if(r=e.sent,s=r.data,c=s.error,o=s.blog,l=s.status,!c){e.next=14;break}if(f(!1,c),401!==l){e.next=13;break}return e.abrupt("return",{status:l});case 13:return e.abrupt("return",null);case 14:return e.abrupt("return",{blog:o});case 17:return e.prev=17,e.t0=e.catch(0),f(!1,"Something went wrong"),e.abrupt("return",null);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,r,s,c,o,l,i,u,d;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.id,a=t.title,r=t.content,e.next=4,localStorage.getItem("token");case 4:return s=e.sent,c="".concat(T,"blog/editblog/").concat(n),e.next=8,x()({method:"PUT",url:c,data:{title:a,content:r},headers:{Authorization:"Bearer ".concat(s),"Content-type":"application/json"}});case 8:if(o=e.sent,l=o.data,i=l.error,u=l.message,d=l.status,!i){e.next=15;break}if(f(!1,i),401!==d){e.next=14;break}return e.abrupt("return",{status:d});case 14:return e.abrupt("return",null);case 15:return f(!0,u),e.abrupt("return",{message:u});case 19:return e.prev=19,e.t0=e.catch(0),f(!1,"Something went wrong"),e.abrupt("return",null);case 23:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,r,s,c,o,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,localStorage.getItem("token");case 3:return n=e.sent,a="".concat(T,"blog/deleteblog/").concat(t),e.next=7,x()({method:"DELETE",url:a,headers:{Authorization:"Bearer ".concat(n),"Content-type":"application/json"}});case 7:if(r=e.sent,s=r.data,c=s.error,o=s.message,l=s.status,!c){e.next=14;break}if(f(!1,c),401!==l){e.next=13;break}return e.abrupt("return",{status:l});case 13:return e.abrupt("return",null);case 14:return f(!0,o),e.abrupt("return",{message:o});case 18:return e.prev=18,e.t0=e.catch(0),f(!1,"Something went wrong"),e.abrupt("return",null);case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(j.a)(b.a.mark((function e(t){var n,a,r,s,c,o,l,i,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.id,a=t.comment,e.next=4,localStorage.getItem("token");case 4:return r=e.sent,s="".concat(T,"blog/addcomment/").concat(n),e.next=8,x()({method:"PUT",url:s,data:{comment:a},headers:{Authorization:"Bearer ".concat(r),"Content-type":"application/json"}});case 8:if(c=e.sent,o=c.data,l=o.error,i=o.message,u=o.status,!l){e.next=15;break}if(f(!1,l),401!==u){e.next=14;break}return e.abrupt("return",{status:u});case 14:return e.abrupt("return",null);case 15:return f(!0,i),e.abrupt("return",{message:i});case 19:return e.prev=19,e.t0=e.catch(0),f(!1,"Something went wrong"),e.abrupt("return",null);case 23:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t){return e.apply(this,arguments)}}();var Z=function(){var e=Object(a.useContext)($),t=e.isLogin,n=e.setisLogin,r=Object(l.g)(),s=Object(a.useState)(""),c=Object(o.a)(s,2),u=c[0],d=c[1],m=Object(a.useState)(""),h=Object(o.a)(m,2),g=h[0],x=h[1],O=Object(a.useState)(null),v=Object(o.a)(O,2),C=v[0],y=v[1],w=Object(a.useState)(""),N=Object(o.a)(w,2),S=N[0],T=N[1],I=new k.a({html:!1,breaks:!0,linkify:!1}),H=Object(a.useState)(!1),P=Object(o.a)(H,2),E=P[0],M=P[1],V=Object(a.useState)(!1),A=Object(o.a)(V,2),Z=A[0],q=A[1];return Object(a.useEffect)((function(){p()?n(!0):n(!1)}),[n]),Object(i.jsx)(i.Fragment,{children:t?Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"parent",children:[Object(i.jsx)("span",{className:"title",children:"Blog Title :-"}),Object(i.jsx)("input",{className:"addinput",maxLength:"40",type:"text",onChange:function(e){x(e.target.value)},autoComplete:"off",autoCorrect:"off",spellCheck:"false"})]}),Object(i.jsxs)("div",{className:"parent",children:[Object(i.jsx)("span",{className:"title",children:"Blog Content :-"}),Object(i.jsx)(L.a,{style:{height:"500px",marginTop:"10px"},renderHTML:function(e){return I.render(e)},onChange:function(e){e.html;var t=e.text;d(t)}})]}),Object(i.jsxs)("div",{className:"parent",children:[Object(i.jsx)("span",{className:"title",children:"Blog Image(optional):-"}),Object(i.jsxs)("div",{className:"image-upload",children:[Object(i.jsx)("i",{className:"fa fa-upload","aria-hidden":"true"}),Object(i.jsx)("h5",{className:"filefive",children:Object(i.jsx)("b",{children:"Choose Your Image to Upload"})}),Object(i.jsx)("h5",{className:"filefive",children:"Or Drop Your Image Here"}),Object(i.jsx)("input",{type:"file",accept:"image/*",name:"image_name",className:"image-input",onChange:function(e){e.target.files.length>0&&y(e.target.files[0]),document.getElementById("filename").innerText=e.target.value.split("\\").pop()}}),Object(i.jsx)("h5",{id:"filename",children:" "})]}),Object(i.jsx)("div",{className:"parent",children:Object(i.jsx)("button",{disabled:Z,onClick:function(){if(C){q(!0);var e=new FormData;e.append("file",C),function(){t.apply(this,arguments)}()}else f(!1,"Please choose a file");function t(){return(t=Object(j.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(e);case 2:(a=t.sent)&&a.status&&(localStorage.removeItem("token"),n(!1),r.push("/login")),a&&a.message&&(document.getElementById("filename").innerText="",q(!1),y(null),T(a.message));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},className:"btn btn-outline-primary addblogbtn ",children:"Upload Image"})}),""===S?null:Object(i.jsxs)("div",{className:"copyurl",children:[Object(i.jsx)("input",{className:"copyurlinput",id:"url",value:S,type:"text",disabled:!0,autoComplete:"off",autoCorrect:"off",spellCheck:"false"}),Object(i.jsx)("button",{onClick:function(){var e=document.createElement("input");e.value=S,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),f(!0,"URL copied to clipboard")},className:"btn btn-outline-primary copyurlbtn",children:"Copy"})]})]}),Object(i.jsx)("div",{className:"parent",children:Object(i.jsx)("button",{disabled:E,onClick:function(){function e(){return(e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B({title:g,content:u});case 2:(t=e.sent)&&t.status&&(localStorage.removeItem("token"),n(!1),r.push("/login")),t&&t.message&&r.push("/viewmyblogs");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}0!==g.trim().length&&0!==u.trim().length?g.length>=40?f(!1,"Too long Title"):u.length<=100?f(!1,"Too short Content"):(M(!0),function(){e.apply(this,arguments)}()):f(!1,"Please fill required fields")},className:"btn btn-outline-primary addblogbtn ",children:"Add Blog"})})]}):Object(i.jsx)(l.a,{to:"/"})})};var q=function(e){var t=e.date,n=e.email,a=e.picture,r=e.title,s=e.id,c=Object(l.g)();return Object(i.jsx)("div",{className:"col-md-6 col-lg-4",children:Object(i.jsxs)("div",{onClick:function(){var e="/viewblog/"+s;c.push(e)},className:"card",children:[Object(i.jsxs)("div",{className:"card-header",children:[Object(i.jsx)("img",{src:a,alt:"Avatar",className:"avatar"}),r]}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsxs)("h6",{className:"card-title",children:["Posted by :- ",n]}),Object(i.jsx)(m.b,{className:"mylink",to:"viewblog/"+s,children:"Read more ..."})]}),Object(i.jsx)("div",{className:"card-footer text-muted",children:t})]})})};var z=function(){return Object(i.jsx)("div",{className:"loading",children:Object(i.jsx)("div",{className:"d-flex justify-content-center",children:Object(i.jsx)("div",{className:"spinner-border",role:"status",style:{position:"absolute",top:"40%",color:"#0a192f"},children:Object(i.jsx)("span",{className:"sr-only",children:"Loading..."})})})})};var W=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!0),c=Object(o.a)(s,2),l=c[0],u=c[1];return Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:(t=e.sent)&&t.blogs&&t.blogs.length?(u(!1),r(t.blogs)):(r([]),u(!1));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(i.jsx)(i.Fragment,{children:l?Object(i.jsx)(z,{}):Object(i.jsx)(i.Fragment,{children:0===n.length?Object(i.jsxs)("div",{style:{overflowX:"hidden"},children:[Object(i.jsx)("h3",{className:"empty text-center mt-5",style:{color:"#2f2e41"},children:"Empty BlogList!"}),Object(i.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(i.jsx)("img",{src:"https://storage.googleapis.com/canteen-assets/blogit/emptyyellow.svg",style:{maxHeight:"500px"},alt:"not found",className:"img-fluid"})})]}):Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row",children:n.map((function(e,t){return Object(i.jsx)(q,{id:e._id,title:e.title,picture:e.user.picture,email:e.user.email,date:e.date},t)}))})})})})};var U=function(e){var t=e.data,n=t.date,a=t.name,r=t.comment,s=t.profile;return Object(i.jsxs)("div",{className:"comment",children:[Object(i.jsxs)("div",{className:"comment-header",children:[Object(i.jsxs)("div",{className:"comment-user",children:[Object(i.jsx)("img",{className:"avatar",src:s,alt:"not found"}),Object(i.jsx)("strong",{children:a})]}),Object(i.jsxs)("div",{className:"comment-date text-muted",children:["Posted on:- ",n]})]}),Object(i.jsx)("div",{className:"commentcontent",children:r})]})};var _=function(e){var t=e.comments;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h6",{children:"Comments -"}),Object(i.jsx)("div",{className:"commentwarpper",children:t.map((function(e,t){return Object(i.jsx)(U,{data:e},t)}))})]})};var D=function(){var e=Object(a.useState)(!0),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(l.h)().id,c=Object(l.g)(),u=Object(a.useState)(null),d=Object(o.a)(u,2),m=d[0],p=d[1],h=Object(a.useState)(""),g=Object(o.a)(h,2),x=g[0],O=g[1],v=Object(a.useState)(""),C=Object(o.a)(v,2),y=C[0],w=C[1],N=new k.a({html:!1,breaks:!0,linkify:!1}),S=Object(a.useContext)($),T=S.isLogin,B=S.setisLogin;return Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(s);case 2:(t=e.sent)&&t.blog?(p(t.blog),r(!1),setTimeout((function(){var e=document.getElementsByClassName("rc-md-navigation")[0];e&&e.remove();var t=document.getElementsByClassName("section sec-md")[0];t&&t.remove()}),10)):r(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s,y]),Object(i.jsx)(i.Fragment,{children:n?Object(i.jsx)(z,{}):Object(i.jsx)(i.Fragment,{children:m?Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"blogtitle text-center mt-5",style:{color:"#2f2e41"},children:m.title}),Object(i.jsxs)("div",{className:"blogdetails",children:[Object(i.jsxs)("div",{className:"bloguser",children:[Object(i.jsx)("img",{className:"avatar",src:m.user.picture,alt:"imagenotfound"}),"Posted By - ",Object(i.jsx)("strong",{children:m.user.name})]}),Object(i.jsxs)("div",{className:"blogdate text-muted",children:["Posted On - ",m.date]})]}),Object(i.jsx)(L.a,{style:{marginTop:"10px",marginBottom:"30px"},renderHTML:function(e){return N.render(e)},defaultValue:m.content}),0===m.comments.length?null:Object(i.jsx)(_,{comments:m.comments}),Object(i.jsx)("div",{className:"parent",id:"comment",children:Object(i.jsxs)("div",{className:"copyurl",children:[Object(i.jsx)("input",{className:"copyurlinput",type:"text",placeholder:"Write a comment here....",value:x,onChange:function(e){O(e.target.value)},autoComplete:"off",autoCorrect:"off",spellCheck:"false"}),Object(i.jsx)("button",{className:"btn btn-outline-primary copyurlbtn",onClick:function(){function e(){return(e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A({id:s,comment:x});case 2:(t=e.sent)&&t.status&&(localStorage.removeItem("token"),B(!1),c.push("/login")),t&&t.message&&(w(t.message),O(""));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}""!==x.trim()?T?function(){e.apply(this,arguments)}():f(!1,"Please Login to post a commnet"):f(!1,"Please Enter commnet")},children:"Commnet"})]})})]})}):Object(i.jsxs)("div",{style:{overflowX:"hidden"},children:[Object(i.jsx)("h3",{className:"empty text-center mt-5",style:{color:"#2f2e41"},children:"Blog Not Found!"}),Object(i.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(i.jsx)("img",{src:"https://storage.googleapis.com/canteen-assets/blogit/emptyyellow.svg",style:{maxHeight:"500px"},alt:"not found",className:"img-fluid"})})]})})})};var G=function(e){var t=Object(l.g)(),n=Object(a.useContext)($).setisLogin,r=e.date,s=e.title,c=e.id,o=e.blogs,u=e.setblogs;function d(){return(d=Object(j.a)(b.a.mark((function e(){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(c);case 2:(a=e.sent)&&a.status&&(localStorage.removeItem("token"),n(!1),t.push("/login")),a&&a.message&&(r=o.filter((function(e){return c!==e._id})),u(r));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.jsx)("div",{className:"col-md-6 col-lg-4",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card-header",children:s}),Object(i.jsxs)("div",{className:"card-body",children:["Posted On :- ",r," ",Object(i.jsx)("br",{}),Object(i.jsx)(m.b,{className:"mylink",to:"viewblog/"+c,children:"Read more ..."})]}),Object(i.jsx)("div",{className:"card-footer text-muted",children:Object(i.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(i.jsx)(m.b,{to:"editblog/"+c,children:Object(i.jsxs)("div",{className:"btn btn-outline-primary",children:[Object(i.jsx)("i",{className:"fa fa-edit"})," Edit"]})}),Object(i.jsxs)("div",{className:"btn btn-outline-danger",onClick:function(){return d.apply(this,arguments)},children:[Object(i.jsx)("i",{className:"fa fa-trash"})," Delete"]})]})})]})})};var X=function(){var e=Object(a.useContext)($),t=e.isLogin,n=e.setisLogin,r=Object(a.useState)([]),s=Object(o.a)(r,2),c=s[0],u=s[1],d=Object(l.g)(),m=Object(a.useState)(!0),h=Object(o.a)(m,2),g=h[0],x=h[1];return Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:(t=e.sent)&&t.status&&(localStorage.removeItem("token"),n(!1),x(!1),d.push("/login")),t&&t.blogs&&t.blogs.length?(u(t.blogs),x(!1)):(u([]),x(!1));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}p()?n(!0):n(!1),function(){e.apply(this,arguments)}()}),[d,n]),Object(i.jsx)(i.Fragment,{children:g?Object(i.jsx)(z,{}):Object(i.jsx)(i.Fragment,{children:t?Object(i.jsx)(i.Fragment,{children:0===c.length?Object(i.jsxs)("div",{style:{overflowX:"hidden"},children:[Object(i.jsx)("h3",{className:"empty text-center mt-5",style:{color:"#2f2e41"},children:"Empty BlogList!"}),Object(i.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(i.jsx)("img",{src:"https://storage.googleapis.com/canteen-assets/blogit/emptyyellow.svg",style:{maxHeight:"500px"},alt:"not found",className:"img-fluid"})})]}):Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(i.jsx)(G,{blogs:c,setblogs:u,id:e._id,title:e.title,date:e.date},t)}))})})}):Object(i.jsx)(l.a,{to:"/"})})})},R=n(20),J=n(28),Y=n(48);var K=function(){var e=Object(l.g)(),t=Object(a.useContext)($).setisLogin,n=Object(a.useState)({email:"",password:""}),r=Object(o.a)(n,2),s=r[0],c=r[1];function u(){return(u=Object(j.a)(b.a.mark((function n(a){var r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.next=3,C({password:s.password,email:s.email});case 3:(r=n.sent)&&r.token&&(localStorage.setItem("token",r.token),t(!0),"/viewmyblogs",e.push("/viewmyblogs"));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(e){c((function(t){return Object(J.a)(Object(J.a)({},t),{},Object(R.a)({},e.target.name,e.target.value))}))}return setTimeout((function(){document.querySelectorAll(".form-controll label").forEach((function(e){e.innerHTML=e.innerText.split("").map((function(e,t){return'<span style="transition-delay:'.concat(50*t,'ms">').concat(e,"</span>")})).join("")}))}),100),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"body",children:Object(i.jsxs)("div",{className:"containerr",children:[Object(i.jsx)("h1",{children:"Login"}),Object(i.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(i.jsxs)("div",{className:"form-controll",children:[Object(i.jsx)("input",{name:"email",type:"text",value:s.email,onChange:d,autoComplete:"off",autoCorrect:"off",spellCheck:"false",required:!0}),Object(i.jsx)("label",{children:"Email"})]}),Object(i.jsxs)("div",{className:"form-controll",children:[Object(i.jsx)("input",{name:"password",type:"password",value:s.password,onChange:d,autoComplete:"off",autoCorrect:"off",spellCheck:"false",required:!0}),Object(i.jsx)("label",{children:"Password"})]}),Object(i.jsx)("button",{type:"submit",className:"btnlogin",children:"Login"})]}),Object(i.jsxs)("div",{className:"btngooglelogin",children:[" ",Object(i.jsx)(Y.GoogleLogin,{clientId:"146328025528-eq4qnsiejonqqlmjd8hrmdk6hosu3els.apps.googleusercontent.com",buttonText:"Login with Google",onSuccess:function(n){x()({method:"POST",url:"".concat("https://blogit19.herokuapp.com/","auth/googlelogin"),data:{tokenId:n.tokenId}}).then((function(n){var a=n.data,r=a.error,s=a.token;if(r)f(!1,r);else{localStorage.setItem("token",s),f(!0,"Login successful!!"),t(!0);e.push("/viewmyblogs")}})).catch((function(e){f(!1,"Something went wrong")}))},onFailure:function(e){console.log("error"),f(!1,"Something went wrong")},cookiePolicy:"single_host_origin"})]})]})})})};var Q=function(){var e=Object(l.g)(),t=Object(l.h)().id,n=Object(a.useState)(null),r=Object(o.a)(n,2),s=r[0],c=r[1],u=new k.a({html:!1,breaks:!0,linkify:!1}),d=Object(a.useState)(""),m=Object(o.a)(d,2),h=m[0],g=m[1],x=Object(a.useState)(""),O=Object(o.a)(x,2),v=O[0],C=O[1],y=Object(a.useContext)($),w=y.isLogin,N=y.setisLogin,S=Object(a.useState)(!0),T=Object(o.a)(S,2),B=T[0],I=T[1];return Object(a.useEffect)((function(){function n(){return(n=Object(j.a)(b.a.mark((function n(){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E(t);case 2:(a=n.sent)&&a.status&&(localStorage.removeItem("token"),N(!1),I(!1),e.push("/login")),a&&a.blog&&(I(!1),c(a.blog),C(a.blog.title),g(a.blog.content));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}p()?N(!0):N(!1),function(){n.apply(this,arguments)}()}),[t,e,N]),Object(i.jsx)(i.Fragment,{children:B?Object(i.jsx)(z,{}):Object(i.jsx)(i.Fragment,{children:w?Object(i.jsx)(i.Fragment,{children:s?Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"parent",children:[Object(i.jsx)("span",{className:"title",children:"Blog Title :-"}),Object(i.jsx)("input",{className:"addinput",maxLength:"40",type:"text",value:v,onChange:function(e){C(e.target.value)},autoComplete:"off",autoCorrect:"off",spellCheck:"false"})]}),Object(i.jsxs)("div",{className:"parent",children:[Object(i.jsx)("span",{className:"title",children:"Blog Content :-"}),Object(i.jsx)(L.a,{style:{height:"500px",marginTop:"10px"},renderHTML:function(e){return u.render(e)},onChange:function(e){e.html;var t=e.text;g(t)},defaultValue:s.content})]}),Object(i.jsx)("div",{className:"parent",children:Object(i.jsx)("button",{onClick:function(){function t(){return(t=Object(j.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M({id:s._id,title:v,content:h});case 2:(n=t.sent)&&n.status&&(localStorage.removeItem("token"),N(!1),e.push("/login")),n&&n.message&&e.push("/viewmyblogs");case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}0!==v.trim().length&&0!==h.trim().length?v.length>=40?f(!1,"Too long Title"):h.length<=100?f(!1,"Too short Content"):function(){t.apply(this,arguments)}():f(!1,"Please fill required fields")},className:"btn btn-outline-primary addblogbtn ",children:"Update Blog"})})]}):Object(i.jsxs)("div",{style:{overflowX:"hidden"},children:[Object(i.jsx)("h3",{className:"empty text-center mt-5",style:{color:"#2f2e41"},children:"Blog Not Found!"}),Object(i.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(i.jsx)("img",{src:"https://storage.googleapis.com/canteen-assets/blogit/emptyyellow.svg",style:{maxHeight:"500px"},alt:"not found",className:"img-fluid"})})]})}):Object(i.jsx)(l.a,{to:"/"})})})},$=(n(137),Object(a.createContext)());var ee=function(){var e=Object(a.useState)(!0),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(p()),c=Object(o.a)(s,2),d=c[0],b=c[1];return Object(a.useEffect)((function(){p()?b(!0):b(!1),window.innerWidth<460&&r(!1),setTimeout((function(){return r(!1)}),4e3)}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)($.Provider,{value:{isLogin:d,setisLogin:b},children:[Object(i.jsx)(y,{}),!0===n?Object(i.jsx)(w,{}):Object(i.jsxs)(l.d,{children:[Object(i.jsx)(l.b,{exact:!0,path:"/",component:u}),Object(i.jsx)(l.b,{exact:!0,path:"/login",component:K}),Object(i.jsx)(l.b,{exact:!0,path:"/viewblogs",component:W}),Object(i.jsx)(l.b,{exact:!0,path:"/viewblog/:id",component:D}),Object(i.jsx)(l.b,{exact:!0,path:"/addblog",children:d?Object(i.jsx)(Z,{}):Object(i.jsx)(l.a,{to:"/"})}),Object(i.jsx)(l.b,{exact:!0,path:"/viewmyblogs",children:d?Object(i.jsx)(X,{}):Object(i.jsx)(l.a,{to:"/"})}),Object(i.jsx)(l.b,{exact:!0,path:"/editblog/:id",children:d?Object(i.jsx)(Q,{}):Object(i.jsx)(l.a,{to:"/"})})]})]})})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,139)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(m.a,{children:Object(i.jsx)(ee,{})})}),document.getElementById("root")),te()},53:function(e,t,n){}},[[138,1,2]]]);
//# sourceMappingURL=main.edcfec36.chunk.js.map