(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{221:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(8);var o=a(0),i=a.n(o),c=a(32),s=a(66),l=function(e){return e.contacts.items},d=function(e){return e.contacts.isLoading},u=function(e){return e.contacts.error},b=Object(s.a)([l,function(e){return e.filter.filter}],function(e,t){return e.filter(function(e){return e.name.toLowerCase().includes(t)})}),m=a(43),p=a(179),y=a(181),v=a(220),O=a(177),j={name:"",phone:""},f=function(e,t){switch(t.type){case"input text":return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){Object(r.a)(e,t,a[t])})}return e}({},e,Object(r.a)({},t.field,t.payload));case"clear text":return{name:"",phone:""};default:return e}},g=function(){var e=Object(c.b)(),t=Object(c.c)(l),a=Object(o.useReducer)(f,j),r=Object(n.a)(a,2),s=r[0],d=r[1],u=function(e){d({type:"input text",field:e.target.name,payload:e.target.value})};return i.a.createElement(p.a,{maxWidth:"xs"},i.a.createElement(y.a,{component:"form",onSubmit:function(a){a.preventDefault(),t.find(function(e){return e.name===s.name})?alert("a contact with this name is already registered"):t.find(function(e){return e.phone===s.phone})?alert("".concat(s.phone," is already in contacts.")):(e(Object(m.a)(s)),d({type:"clear text",name:"",phone:""}))},noValidate:!0,sx:{mt:1}},i.a.createElement(v.a,{onChange:function(e){return u(e)},margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",type:"text",autoFocus:!0}),i.a.createElement(v.a,{onChange:function(e){return u(e)},margin:"normal",required:!0,fullWidth:!0,name:"phone",label:"Phone",type:"tel",id:"phone",autoComplete:"current-password"}),i.a.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"Add contact")))},h=a(185),x=a(7),C=a(1),w=a(11),S=a(171),I=a(100),P=a(167),E=a(12),A=a(15),N=a(174),L=a(187),R=a(63),k=a(30),G=a(57),T=a(136),M=a(104);function F(e){return Object(M.a)("MuiListItem",e)}var V=Object(T.a)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var W=Object(T.a)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function B(e){return Object(M.a)("MuiListItemSecondaryAction",e)}Object(T.a)("MuiListItemSecondaryAction",["root","disableGutters"]);var D=a(6),q=["className"],J=Object(E.a)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.disableGutters&&t.disableGutters]}})(function(e){var t=e.ownerState;return Object(C.a)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})}),z=o.forwardRef(function(e,t){var a=Object(A.a)({props:e,name:"MuiListItemSecondaryAction"}),n=a.className,r=Object(x.a)(a,q),i=o.useContext(G.a),c=Object(C.a)({},a,{disableGutters:i.disableGutters}),s=function(e){var t=e.disableGutters,a=e.classes,n={root:["root",t&&"disableGutters"]};return Object(S.a)(n,B,a)}(c);return Object(D.jsx)(J,Object(C.a)({className:Object(w.a)(s.root,n),ownerState:c,ref:t},r))});z.muiName="ListItemSecondaryAction";var Y=z,H=["className"],K=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Q=Object(E.a)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})(function(e){var t,a=e.theme,n=e.ownerState;return Object(C.a)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!n.disablePadding&&Object(C.a)({paddingTop:8,paddingBottom:8},n.dense&&{paddingTop:4,paddingBottom:4},!n.disableGutters&&{paddingLeft:16,paddingRight:16},!!n.secondaryAction&&{paddingRight:48}),!!n.secondaryAction&&Object(r.a)({},"& > .".concat(W.root),{paddingRight:48}),(t={},Object(r.a)(t,"&.".concat(V.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),Object(r.a)(t,"&.".concat(V.selected),Object(r.a)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):Object(P.a)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(V.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):Object(P.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),Object(r.a)(t,"&.".concat(V.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),"flex-start"===n.alignItems&&{alignItems:"flex-start"},n.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},n.button&&Object(r.a)({transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(V.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):Object(P.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):Object(P.a)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),n.hasSecondaryAction&&{paddingRight:48})}),U=Object(E.a)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),X=o.forwardRef(function(e,t){var a=Object(A.a)({props:e,name:"MuiListItem"}),n=a.alignItems,r=void 0===n?"center":n,i=a.autoFocus,c=void 0!==i&&i,s=a.button,l=void 0!==s&&s,d=a.children,u=a.className,b=a.component,m=a.components,p=void 0===m?{}:m,y=a.componentsProps,v=void 0===y?{}:y,O=a.ContainerComponent,j=void 0===O?"li":O,f=a.ContainerProps,g=(f=void 0===f?{}:f).className,h=a.dense,P=void 0!==h&&h,E=a.disabled,T=void 0!==E&&E,M=a.disableGutters,W=void 0!==M&&M,B=a.disablePadding,q=void 0!==B&&B,J=a.divider,z=void 0!==J&&J,X=a.focusVisibleClassName,Z=a.secondaryAction,$=a.selected,_=void 0!==$&&$,ee=a.slotProps,te=void 0===ee?{}:ee,ae=a.slots,ne=void 0===ae?{}:ae,re=Object(x.a)(a.ContainerProps,H),oe=Object(x.a)(a,K),ie=o.useContext(G.a),ce=o.useMemo(function(){return{dense:P||ie.dense||!1,alignItems:r,disableGutters:W}},[r,ie.dense,P,W]),se=o.useRef(null);Object(R.a)(function(){c&&se.current&&se.current.focus()},[c]);var le=o.Children.toArray(d),de=le.length&&Object(L.a)(le[le.length-1],["ListItemSecondaryAction"]),ue=Object(C.a)({},a,{alignItems:r,autoFocus:c,button:l,dense:ce.dense,disabled:T,disableGutters:W,disablePadding:q,divider:z,hasSecondaryAction:de,selected:_}),be=function(e){var t=e.alignItems,a=e.button,n=e.classes,r=e.dense,o=e.disabled,i={root:["root",r&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return Object(S.a)(i,F,n)}(ue),me=Object(k.a)(se,t),pe=ne.root||p.Root||Q,ye=te.root||v.root||{},ve=Object(C.a)({className:Object(w.a)(be.root,ye.className,u),disabled:T},oe),Oe=b||"li";return l&&(ve.component=b||"div",ve.focusVisibleClassName=Object(w.a)(V.focusVisible,X),Oe=N.a),de?(Oe=ve.component||b?Oe:"div","li"===j&&("li"===Oe?Oe="div":"li"===ve.component&&(ve.component="div")),Object(D.jsx)(G.a.Provider,{value:ce,children:Object(D.jsxs)(U,Object(C.a)({as:j,className:Object(w.a)(be.container,g),ref:me,ownerState:ue},re,{children:[Object(D.jsx)(pe,Object(C.a)({},ye,!Object(I.a)(pe)&&{as:Oe,ownerState:Object(C.a)({},ue,ye.ownerState)},ve,{children:le})),le.pop()]}))})):Object(D.jsx)(G.a.Provider,{value:ce,children:Object(D.jsxs)(pe,Object(C.a)({},ye,{as:Oe,ref:me},!Object(I.a)(pe)&&{ownerState:Object(C.a)({},ue,ye.ownerState)},ve,{children:[le,Z&&Object(D.jsx)(Y,{children:Z})]}))})}),Z=a(182),$=a(142),_=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],ee=Object(E.a)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[Object(r.a)({},"& .".concat($.a.primary),t.primary),Object(r.a)({},"& .".concat($.a.secondary),t.secondary),t.root,a.inset&&t.inset,a.primary&&a.secondary&&t.multiline,a.dense&&t.dense]}})(function(e){var t=e.ownerState;return Object(C.a)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})}),te=o.forwardRef(function(e,t){var a=Object(A.a)({props:e,name:"MuiListItemText"}),n=a.children,r=a.className,i=a.disableTypography,c=void 0!==i&&i,s=a.inset,l=void 0!==s&&s,d=a.primary,u=a.primaryTypographyProps,b=a.secondary,m=a.secondaryTypographyProps,p=Object(x.a)(a,_),y=o.useContext(G.a).dense,v=null!=d?d:n,O=b,j=Object(C.a)({},a,{disableTypography:c,inset:l,primary:!!v,secondary:!!O,dense:y}),f=function(e){var t=e.classes,a=e.inset,n=e.primary,r=e.secondary,o={root:["root",a&&"inset",e.dense&&"dense",n&&r&&"multiline"],primary:["primary"],secondary:["secondary"]};return Object(S.a)(o,$.b,t)}(j);return null==v||v.type===Z.a||c||(v=Object(D.jsx)(Z.a,Object(C.a)({variant:y?"body2":"body1",className:f.primary,component:null!=u&&u.variant?void 0:"span",display:"block"},u,{children:v}))),null==O||O.type===Z.a||c||(O=Object(D.jsx)(Z.a,Object(C.a)({variant:"body2",className:f.secondary,color:"text.secondary",display:"block"},m,{children:O}))),Object(D.jsxs)(ee,Object(C.a)({className:Object(w.a)(f.root,r),ownerState:j,ref:t},p,{children:[v,O]}))}),ae=function(){var e=Object(c.b)(),t=Object(c.c)(b);return i.a.createElement(h.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"}},t.map(function(t){return i.a.createElement(X,{key:t.id,disableGutters:!0},i.a.createElement(te,null,t.name,": ",t.number),i.a.createElement(O.a,{variant:"text",onClick:function(){return e(Object(m.b)(t.id))}},"Delete"))}))},ne=a(89),re=function(){var e=Object(c.b)();return i.a.createElement(y.a,{sx:{marginTop:8}},i.a.createElement(v.a,{id:"outlined-name",label:"Find contacts by name",onChange:function(t){return e(Object(ne.b)(t.currentTarget.value))}}))},oe=a(218);t.default=function(){var e=Object(c.b)(),t=Object(c.c)(d),a=Object(c.c)(u);return Object(o.useEffect)(function(){e(Object(m.c)())},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{maxWidth:"xs"},i.a.createElement(oe.a,null),i.a.createElement(y.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"}},i.a.createElement(g,null),i.a.createElement(re,null),t&&!a&&i.a.createElement("b",null,"Request in progress..."),i.a.createElement("h2",null,"Contacts"),i.a.createElement(ae,null))))}}}]);
//# sourceMappingURL=6.aedff876.chunk.js.map