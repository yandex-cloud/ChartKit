"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[918],{1310:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});a(7294);var s=a(512),n=a(5281),l=a(3438),i=a(8596),o=a(9960),d=a(5999),r=a(4996),c=a(5893);function u(e){return(0,c.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,c.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,r.Z)("/");return(0,c.jsx)("li",{className:"breadcrumbs__item",children:(0,c.jsx)(o.default,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,c.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function p(e){let{children:t,href:a,isLast:s}=e;const n="breadcrumbs__link";return s?(0,c.jsx)("span",{className:n,itemProp:"name",children:t}):a?(0,c.jsx)(o.default,{className:n,href:a,itemProp:"item",children:(0,c.jsx)("span",{itemProp:"name",children:t})}):(0,c.jsx)("span",{className:n,children:t})}function x(e){let{children:t,active:a,index:n,addMicrodata:l}=e;return(0,c.jsxs)("li",{...l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a}),children:[t,(0,c.jsx)("meta",{itemProp:"position",content:String(n+1)})]})}function v(){const e=(0,l.s1)(),t=(0,i.Ns)();return e?(0,c.jsx)("nav",{className:(0,s.Z)(n.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,c.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,c.jsx)(h,{}),e.map(((t,a)=>{const s=a===e.length-1,n="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,c.jsx)(x,{active:s,index:a,addMicrodata:!!n,children:(0,c.jsx)(p,{href:n,isLast:s,children:t.label})},a)}))]})}):null}},355:(e,t,a)=>{a.r(t),a.d(t,{default:()=>R});a(7294);var s=a(833),n=a(5130),l=a(5893);function i(){const{metadata:e,frontMatter:t,assets:a}=(0,n.k)();return(0,l.jsx)(s.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var o=a(512),d=a(7524),r=a(4966);function c(){const{metadata:e}=(0,n.k)();return(0,l.jsx)(r.default,{previous:e.previous,next:e.next})}var u=a(3120),m=a(4364),h=a(5281),b=a(5999);function p(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return(0,l.jsx)(b.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:a})})},children:" on {date}"})}function x(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(b.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function v(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:h.k.common.lastUpdated,children:[(0,l.jsx)(b.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?(0,l.jsx)(p,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:s?(0,l.jsx)(x,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var j=a(9960);const g={iconEdit:"iconEdit_Z9Sw"};function f(e){let{className:t,...a}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(g.iconEdit,t),"aria-hidden":"true",...a,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function k(e){let{editUrl:t}=e;return(0,l.jsxs)(j.default,{to:t,className:h.k.common.editThisPage,children:[(0,l.jsx)(f,{}),(0,l.jsx)(b.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const N={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function _(e){let{permalink:t,label:a,count:s}=e;return(0,l.jsxs)(j.default,{href:t,className:(0,o.Z)(N.tag,s?N.tagWithCount:N.tagRegular),children:[a,s&&(0,l.jsx)("span",{children:s})]})}const L={tags:"tags_jXut",tag:"tag_QGVx"};function C(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(b.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,o.Z)(L.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:a}=e;return(0,l.jsx)("li",{className:L.tag,children:(0,l.jsx)(_,{label:t,permalink:a})},a)}))})]})}const T={lastUpdated:"lastUpdated_vwxv"};function Z(e){return(0,l.jsx)("div",{className:(0,o.Z)(h.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(C,{...e})})})}function U(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:n}=e;return(0,l.jsxs)("div",{className:(0,o.Z)(h.k.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(k,{editUrl:t})}),(0,l.jsx)("div",{className:(0,o.Z)("col",T.lastUpdated),children:(a||s)&&(0,l.jsx)(v,{lastUpdatedAt:a,formattedLastUpdatedAt:n,lastUpdatedBy:s})})]})}function w(){const{metadata:e}=(0,n.k)(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:i,tags:d}=e,r=d.length>0,c=!!(t||a||i);return r||c?(0,l.jsxs)("footer",{className:(0,o.Z)(h.k.docs.docFooter,"docusaurus-mt-lg"),children:[r&&(0,l.jsx)(Z,{tags:d}),c&&(0,l.jsx)(U,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:i,formattedLastUpdatedAt:s})]}):null}var y=a(9286);const A={tocMobile:"tocMobile_ITEo"};function B(){const{toc:e,frontMatter:t}=(0,n.k)();return(0,l.jsx)(y.default,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,o.Z)(h.k.docs.docTocMobile,A.tocMobile)})}var M=a(9407);function I(){const{toc:e,frontMatter:t}=(0,n.k)();return(0,l.jsx)(M.default,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:h.k.docs.docTocDesktop})}var E=a(2503),V=a(5042);function H(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=(0,n.k)();return t.hide_title||void 0!==a?null:e.title}();return(0,l.jsxs)("div",{className:(0,o.Z)(h.k.docs.docMarkdown,"markdown"),children:[a&&(0,l.jsx)("header",{children:(0,l.jsx)(E.default,{as:"h1",children:a})}),(0,l.jsx)(V.default,{children:t})]})}var P=a(1310),D=a(7158);const S={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function F(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=(0,n.k)(),a=(0,d.i)(),s=e.hide_table_of_contents,i=!s&&t.length>0;return{hidden:s,mobile:i?(0,l.jsx)(B,{}):void 0,desktop:!i||"desktop"!==a&&"ssr"!==a?void 0:(0,l.jsx)(I,{})}}(),{metadata:{unlisted:s}}=(0,n.k)();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,o.Z)("col",!a.hidden&&S.docItemCol),children:[s&&(0,l.jsx)(D.Z,{}),(0,l.jsx)(u.Z,{}),(0,l.jsxs)("div",{className:S.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(P.default,{}),(0,l.jsx)(m.default,{}),a.mobile,(0,l.jsx)(H,{children:t}),(0,l.jsx)(w,{})]}),(0,l.jsx)(c,{})]})]}),a.desktop&&(0,l.jsx)("div",{className:"col col--3",children:a.desktop})]})}function R(e){const t=`docs-doc-id-${e.content.metadata.id}`,a=e.content;return(0,l.jsx)(n.b,{content:e.content,children:(0,l.jsxs)(s.FG,{className:t,children:[(0,l.jsx)(i,{}),(0,l.jsx)(F,{children:(0,l.jsx)(a,{})})]})})}},4966:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});a(7294);var s=a(5999),n=a(512),l=a(9960),i=a(5893);function o(e){const{permalink:t,title:a,subLabel:s,isNext:o}=e;return(0,i.jsxs)(l.default,{className:(0,n.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,i.jsx)("div",{className:"pagination-nav__label",children:a})]})}function d(e){const{previous:t,next:a}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(o,{...t,subLabel:(0,i.jsx)(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),a&&(0,i.jsx)(o,{...a,subLabel:(0,i.jsx)(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4364:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});a(7294);var s=a(512),n=a(5999),l=a(5281),i=a(4477),o=a(5893);function d(e){let{className:t}=e;const a=(0,i.E)();return a.badge?(0,o.jsx)("span",{className:(0,s.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(n.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label},children:"Version: {versionLabel}"})}):null}},3120:(e,t,a)=>{a.d(t,{Z:()=>x});a(7294);var s=a(512),n=a(2263),l=a(9960),i=a(5999),o=a(143),d=a(5281),r=a(373),c=a(4477),u=a(5893);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return(0,u.jsx)(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:a.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return(0,u.jsx)(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:a.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:a,onClick:s}=e;return(0,u.jsx)(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(l.default,{to:a,onClick:s,children:(0,u.jsx)(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function p(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,n.default)(),{pluginId:i}=(0,o.useActivePlugin)({failfast:!0}),{savePreferredVersionName:c}=(0,r.J)(i),{latestDocSuggestion:m,latestVersionSuggestion:p}=(0,o.useDocVersionSuggestions)(i),x=m??(v=p).docs.find((e=>e.id===v.mainDocId));var v;return(0,u.jsxs)("div",{className:(0,s.Z)(t,d.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:l,versionMetadata:a})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:p.label,to:x.path,onClick:()=>c(p.name)})})]})}function x(e){let{className:t}=e;const a=(0,c.E)();return a.banner?(0,u.jsx)(p,{className:t,versionMetadata:a}):null}},9286:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});a(7294);var s=a(512),n=a(6043),l=a(8011),i=a(5999);const o={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};var d=a(5893);function r(e){let{collapsed:t,...a}=e;return(0,d.jsx)("button",{type:"button",...a,className:(0,s.Z)("clean-btn",o.tocCollapsibleButton,!t&&o.tocCollapsibleButtonExpanded,a.className),children:(0,d.jsx)(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const c={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function u(e){let{toc:t,className:a,minHeadingLevel:i,maxHeadingLevel:o}=e;const{collapsed:u,toggleCollapsed:m}=(0,n.u)({initialState:!0});return(0,d.jsxs)("div",{className:(0,s.Z)(c.tocCollapsible,!u&&c.tocCollapsibleExpanded,a),children:[(0,d.jsx)(r,{collapsed:u,onClick:m}),(0,d.jsx)(n.z,{lazy:!0,className:c.tocCollapsibleContent,collapsed:u,children:(0,d.jsx)(l.Z,{toc:t,minHeadingLevel:i,maxHeadingLevel:o})})]})}},7158:(e,t,a)=>{a.d(t,{Z:()=>r});a(7294);var s=a(512),n=a(5835),l=a(5281),i=a(2775),o=a(5893);function d(e){let{className:t}=e;return(0,o.jsx)(i.Z,{type:"caution",title:(0,o.jsx)(n.cI,{}),className:(0,s.Z)(t,l.k.common.unlistedBanner),children:(0,o.jsx)(n.eU,{})})}function r(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.T$,{}),(0,o.jsx)(d,{...e})]})}},5130:(e,t,a)=>{a.d(t,{b:()=>o,k:()=>d});var s=a(7294),n=a(902),l=a(5893);const i=s.createContext(null);function o(e){let{children:t,content:a}=e;const n=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,l.jsx)(i.Provider,{value:n,children:t})}function d(){const e=(0,s.useContext)(i);if(null===e)throw new n.i6("DocProvider");return e}}}]);