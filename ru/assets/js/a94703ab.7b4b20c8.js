"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[368],{3394:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ue});var a=n(7294),o=n(512),i=n(833),s=n(5281),l=n(3438),r=n(1116),c=n(5999),d=n(2730);const u={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var m=n(5893);function b(){const{shown:e,scrollToTop:t}=(0,d.a)({threshold:300});return(0,m.jsx)("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",s.k.common.backToTopButton,u.backToTopButton,e&&u.backToTopButtonShow),type:"button",onClick:t})}var h=n(1442),p=n(6550),x=n(7524),f=n(6668),j=n(1327);function k(e){return(0,m.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,m.jsxs)("g",{fill:"#7a7a7a",children:[(0,m.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,m.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const v={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function _(e){let{onClick:t}=e;return(0,m.jsx)("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",v.collapseSidebarButton),onClick:t,children:(0,m.jsx)(k,{className:v.collapseSidebarButtonIcon})})}var g=n(9689),C=n(2466),S=n(4353),I=n(902),N=n(6043),T=n(8596),B=n(9960),A=n(2389);function L(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,m.jsx)("button",{"aria-label":t?(0,c.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:a})}function Z(e){let{item:t,onItemClick:n,activePath:i,level:r,index:c,...d}=e;const{items:u,label:b,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:j}}}=(0,f.L)(),k=function(e){const t=(0,A.Z)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.LM)(e):void 0),[e,t])}(t),v=(0,l._F)(t,i),_=(0,T.Mg)(x,i),{collapsed:g,setCollapsed:C}=(0,N.u)({initialState:()=>!!h&&(!v&&t.collapsed)}),{expandedItem:Z,setExpandedItem:y}=(0,S.f)(),w=function(e){void 0===e&&(e=!g),y(e?null:c),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,I.D9)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:v,collapsed:g,updateCollapsed:w}),(0,a.useEffect)((()=>{h&&null!=Z&&Z!==c&&j&&C(!0)}),[h,Z,c,C,j]),(0,m.jsxs)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemCategory,s.k.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":g},p),children:[(0,m.jsxs)("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_}),children:[(0,m.jsx)(B.default,{className:(0,o.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":v}),onClick:h?e=>{n?.(t),x?w(!1):(e.preventDefault(),w())}:()=>{n?.(t)},"aria-current":_?"page":void 0,"aria-expanded":h?!g:void 0,href:h?k??"#":k,...d,children:b}),x&&h&&(0,m.jsx)(L,{collapsed:g,categoryLabel:b,onClick:e=>{e.preventDefault(),w()}})]}),(0,m.jsx)(N.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:g,children:(0,m.jsx)(F,{items:u,tabIndex:g?-1:0,onItemClick:n,activePath:i,level:r+1})})]})}var y=n(3919),w=n(9471);const E={menuExternalLink:"menuExternalLink_NmtK"};function H(e){let{item:t,onItemClick:n,activePath:a,level:i,index:r,...c}=e;const{href:d,label:u,className:b,autoAddBaseUrl:h}=t,p=(0,l._F)(t,a),x=(0,y.Z)(d);return(0,m.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),children:(0,m.jsxs)(B.default,{className:(0,o.Z)("menu__link",!x&&E.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...c,children:[u,!x&&(0,m.jsx)(w.Z,{})]})},u)}const M={menuHtmlItem:"menuHtmlItem_M9Kj"};function R(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:l,className:r}=t;return(0,m.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(n),l&&[M.menuHtmlItem,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:i}},a)}function W(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,m.jsx)(Z,{item:t,...n});case"html":return(0,m.jsx)(R,{item:t,...n});default:return(0,m.jsx)(H,{item:t,...n})}}function D(e){let{items:t,...n}=e;const a=(0,l.f)(t,n.activePath);return(0,m.jsx)(S.D,{children:a.map(((e,t)=>(0,m.jsx)(W,{item:e,index:t,...n},t)))})}const F=(0,a.memo)(D),P={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function V(e){let{path:t,sidebar:n,className:i}=e;const l=function(){const{isActive:e}=(0,g.nT)(),[t,n]=(0,a.useState)(e);return(0,C.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,m.jsx)("nav",{"aria-label":(0,c.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",P.menu,l&&P.menuWithAnnouncementBar,i),children:(0,m.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(F,{items:n,activePath:t,level:1})})})}const U="sidebar_njMd",K="sidebarWithHideableNavbar_wUlq",Y="sidebarHidden_VK0M",z="sidebarLogo_isFc";function G(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,f.L)();return(0,m.jsxs)("div",{className:(0,o.Z)(U,s&&K,i&&Y),children:[s&&(0,m.jsx)(j.Z,{tabIndex:-1,className:z}),(0,m.jsx)(V,{path:t,sidebar:n}),l&&(0,m.jsx)(_,{onClick:a})]})}const O=a.memo(G);var q=n(3102),J=n(3163);const Q=e=>{let{sidebar:t,path:n}=e;const a=(0,J.e)();return(0,m.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(F,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function X(e){return(0,m.jsx)(q.Zo,{component:Q,props:e})}const $=a.memo(X);function ee(e){const t=(0,x.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,m.jsxs)(m.Fragment,{children:[n&&(0,m.jsx)(O,{...e}),a&&(0,m.jsx)($,{...e})]})}const te={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function ne(e){let{toggleSidebar:t}=e;return(0,m.jsx)("div",{className:te.expandButton,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,m.jsx)(k,{className:te.expandButtonIcon})})}const ae={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function oe(e){let{children:t}=e;const n=(0,r.V)();return(0,m.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function ie(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,p.TH)(),[r,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{r&&c(!1),!r&&(0,h.n)()&&c(!0),i((e=>!e))}),[i,r]);return(0,m.jsx)("aside",{className:(0,o.Z)(s.k.docs.docSidebarContainer,ae.docSidebarContainer,n&&ae.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ae.docSidebarContainer)&&n&&c(!0)},children:(0,m.jsx)(oe,{children:(0,m.jsxs)("div",{className:(0,o.Z)(ae.sidebarViewport,r&&ae.sidebarViewportHidden),children:[(0,m.jsx)(ee,{sidebar:t,path:l,onCollapse:d,isHidden:r}),r&&(0,m.jsx)(ne,{toggleSidebar:d})]})})})}const se={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function le(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,r.V)();return(0,m.jsx)("main",{className:(0,o.Z)(se.docMainContainer,(t||!a)&&se.docMainContainerEnhanced),children:(0,m.jsx)("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",se.docItemWrapper,t&&se.docItemWrapperEnhanced),children:n})})}const re={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function ce(e){let{children:t}=e;const n=(0,r.V)(),[o,i]=(0,a.useState)(!1);return(0,m.jsxs)("div",{className:re.docsWrapper,children:[(0,m.jsx)(b,{}),(0,m.jsxs)("div",{className:re.docRoot,children:[n&&(0,m.jsx)(ie,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,m.jsx)(le,{hiddenSidebarContainer:o,children:t})]})]})}var de=n(5658);function ue(e){const t=(0,l.SN)(e);if(!t)return(0,m.jsx)(de.Z,{});const{docElement:n,sidebarName:a,sidebarItems:c}=t;return(0,m.jsx)(i.FG,{className:(0,o.Z)(s.k.page.docsDocPage),children:(0,m.jsx)(r.b,{name:a,items:c,children:(0,m.jsx)(ce,{children:n})})})}},5658:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var a=n(512),o=n(5999),i=n(2503),s=n(5893);function l(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.Z)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.default,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}},4353:(e,t,n)=>{n.d(t,{D:()=>r,f:()=>c});var a=n(7294),o=n(902),i=n(5893);const s=Symbol("EmptyContext"),l=a.createContext(s);function r(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),s=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,i.jsx)(l.Provider,{value:s,children:t})}function c(){const e=(0,a.useContext)(l);if(e===s)throw new o.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,t,n)=>{n.d(t,{a:()=>s});var a=n(7294),o=n(2466),i=n(5936);function s(e){let{threshold:t}=e;const[n,s]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,o.Ct)();return(0,o.RF)(((e,n)=>{let{scrollY:a}=e;const o=n?.scrollY;o&&(l.current?l.current=!1:a>=o?(c(),s(!1)):a<t?s(!1):a+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,i.S)((e=>{e.location.hash&&(l.current=!0,s(!1))})),{shown:n,scrollToTop:()=>r(0)}}}}]);