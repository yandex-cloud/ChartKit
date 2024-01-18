"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60],{5130:(e,r,t)=>{t.d(r,{b:()=>l,k:()=>u});var o=t(7294),n=t(902),s=t(5893);const a=o.createContext(null);function l(e){let{children:r,content:t}=e;const n=function(e){return(0,o.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,s.jsx)(a.Provider,{value:n,children:r})}function u(){const e=(0,o.useContext)(a);if(null===e)throw new n.i6("DocProvider");return e}},4353:(e,r,t)=>{t.d(r,{D:()=>u,f:()=>i});var o=t(7294),n=t(902),s=t(5893);const a=Symbol("EmptyContext"),l=o.createContext(a);function u(e){let{children:r}=e;const[t,n]=(0,o.useState)(null),a=(0,o.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return(0,s.jsx)(l.Provider,{value:a,children:r})}function i(){const e=(0,o.useContext)(l);if(e===a)throw new n.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,r,t)=>{t.d(r,{a:()=>a});var o=t(7294),n=t(2466),s=t(5936);function a(e){let{threshold:r}=e;const[t,a]=(0,o.useState)(!1),l=(0,o.useRef)(!1),{startScroll:u,cancelScroll:i}=(0,n.Ct)();return(0,n.RF)(((e,t)=>{let{scrollY:o}=e;const n=t?.scrollY;n&&(l.current?l.current=!1:o>=n?(i(),a(!1)):o<r?a(!1):o+window.innerHeight<document.documentElement.scrollHeight&&a(!0))})),(0,s.S)((e=>{e.location.hash&&(l.current=!0,a(!1))})),{shown:t,scrollToTop:()=>u(0)}}},5094:(e,r,t)=>{t.r(r),t.d(r,{Collapsible:()=>i.z,ErrorBoundaryError:()=>F.aG,ErrorBoundaryErrorMessageFallback:()=>F.Ac,ErrorBoundaryTryAgainButton:()=>F.Cw,ErrorCauseBoundary:()=>F.QW,HtmlClassNameProvider:()=>g.FG,NavbarSecondaryMenuFiller:()=>p.Zo,PageMetadata:()=>g.d,ReactContextError:()=>m.i6,SkipToContentFallbackId:()=>k.u,SkipToContentLink:()=>k.l,ThemeClassNames:()=>c.k,ThemedComponent:()=>n.Z,UnlistedBannerMessage:()=>x.eU,UnlistedBannerTitle:()=>x.cI,UnlistedMetadata:()=>x.T$,composeProviders:()=>m.Qc,createStorageSlot:()=>s.WA,duplicates:()=>y.l,filterDocCardListItems:()=>l.MN,isMultiColumnFooterLinks:()=>P.a,isRegexpStringMatch:()=>T.F,listStorageKeys:()=>s._f,listTagsByLetters:()=>C,prefersReducedMotion:()=>d.n,processAdmonitionProps:()=>B.X,translateTagsPageTitle:()=>S,uniq:()=>y.j,useCollapsible:()=>i.u,useColorMode:()=>h.I,useContextualSearchFilters:()=>a._q,useCurrentSidebarCategory:()=>l.jA,useDocsPreferredVersion:()=>E.J,useEvent:()=>m.zX,usePluralForm:()=>u.c,usePrevious:()=>m.D9,usePrismTheme:()=>M.p,useSearchLinkCreator:()=>v.M,useSearchQueryString:()=>v.K,useStorageSlot:()=>s.Nk,useThemeConfig:()=>o.L,useWindowSize:()=>f.i});var o=t(6668),n=t(8431),s=t(12),a=t(3320),l=t(3438),u=t(8824),i=t(6043),c=t(5281),d=t(1442),m=t(902),g=t(833),h=t(2949),p=t(3102),f=t(7524),b=t(5999);const S=()=>(0,b.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function C(e){const r={};return Object.values(e).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e.label);r[t]??=[],r[t].push(e)})),Object.entries(r).sort(((e,r)=>{let[t]=e,[o]=r;return t.localeCompare(o)})).map((e=>{let[r,t]=e;return{letter:r,tags:t.sort(((e,r)=>e.label.localeCompare(r.label)))}}))}var v=t(6177),P=t(2489),T=t(8022),y=t(7392),M=t(6412),E=t(373),B=t(4697),k=t(5225),x=t(5835),F=t(9690)},9517:(e,r,t)=>{t.r(r),t.d(r,{AnnouncementBarProvider:()=>p.pl,BlogPostProvider:()=>m,Collapsible:()=>o.Collapsible,ColorModeProvider:()=>x.S,DEFAULT_SEARCH_TAG:()=>D.HX,DocProvider:()=>l.b,DocSidebarItemsExpandedStateProvider:()=>n.D,DocsPreferredVersionContextProvider:()=>h.L5,DocsSidebarProvider:()=>a.b,DocsVersionProvider:()=>s.q,ErrorBoundaryError:()=>o.ErrorBoundaryError,ErrorBoundaryErrorMessageFallback:()=>o.ErrorBoundaryErrorMessageFallback,ErrorBoundaryTryAgainButton:()=>o.ErrorBoundaryTryAgainButton,ErrorCauseBoundary:()=>o.ErrorCauseBoundary,HtmlClassNameProvider:()=>o.HtmlClassNameProvider,NavbarProvider:()=>H.V,NavbarSecondaryMenuFiller:()=>o.NavbarSecondaryMenuFiller,PageMetadata:()=>o.PageMetadata,PluginHtmlClassNameProvider:()=>q.VC,ReactContextError:()=>o.ReactContextError,ScrollControllerProvider:()=>A.OC,SkipToContentFallbackId:()=>o.SkipToContentFallbackId,SkipToContentLink:()=>o.SkipToContentLink,ThemeClassNames:()=>o.ThemeClassNames,ThemedComponent:()=>o.ThemedComponent,UnlistedBannerMessage:()=>o.UnlistedBannerMessage,UnlistedBannerTitle:()=>o.UnlistedBannerTitle,UnlistedMetadata:()=>o.UnlistedMetadata,composeProviders:()=>o.composeProviders,containsLineNumbers:()=>V.nt,createStorageSlot:()=>o.createStorageSlot,docVersionSearchTag:()=>D.os,duplicates:()=>o.duplicates,filterDocCardListItems:()=>o.filterDocCardListItems,findFirstSidebarItemLink:()=>I.LM,findSidebarCategory:()=>I.em,getPrismCssVariables:()=>V.QC,isActiveSidebarItem:()=>I._F,isDocsPluginEnabled:()=>I.cE,isMultiColumnFooterLinks:()=>o.isMultiColumnFooterLinks,isRegexpStringMatch:()=>o.isRegexpStringMatch,isSamePath:()=>R.Mg,isVisibleSidebarItem:()=>I.pC,keyboardFocusedClassName:()=>z.h,listStorageKeys:()=>o.listStorageKeys,listTagsByLetters:()=>o.listTagsByLetters,parseCodeBlockTitle:()=>V.bc,parseLanguage:()=>V.Vo,parseLines:()=>V.nZ,prefersReducedMotion:()=>o.prefersReducedMotion,processAdmonitionProps:()=>o.processAdmonitionProps,sanitizeTabsChildren:()=>P,splitNavbarItems:()=>H.A,translateTagsPageTitle:()=>o.translateTagsPageTitle,uniq:()=>o.uniq,useAlternatePageUtils:()=>F.l,useAnnouncementBar:()=>p.nT,useBackToTopButton:()=>W.a,useBlogPost:()=>g,useCodeWordWrap:()=>Q.F,useCollapsible:()=>o.useCollapsible,useColorMode:()=>o.useColorMode,useContextualSearchFilters:()=>o.useContextualSearchFilters,useCurrentSidebarCategory:()=>o.useCurrentSidebarCategory,useDoc:()=>l.k,useDocById:()=>I.xz,useDocRootMetadata:()=>I.SN,useDocSidebarItemsExpandedState:()=>n.f,useDocsPreferredVersion:()=>o.useDocsPreferredVersion,useDocsPreferredVersionByPluginId:()=>h.Oh,useDocsSidebar:()=>a.V,useDocsVersion:()=>s.E,useDocsVersionCandidates:()=>I.lO,useEvent:()=>o.useEvent,useFilteredAndTreeifiedTOC:()=>j.b,useHideableNavbar:()=>O.c,useHistoryPopHandler:()=>S.Rb,useHistorySelector:()=>S.xL,useHomePageRoute:()=>R.Ns,useKeyboardNavigation:()=>z.t,useLayoutDoc:()=>I.vY,useLayoutDocsSidebar:()=>I.oz,useLocalPathname:()=>N.b,useLocationChange:()=>L.S,useLockBodyScroll:()=>_.N,useNavbarMobileSidebar:()=>B.e,useNavbarSecondaryMenu:()=>k.Y,usePluralForm:()=>o.usePluralForm,usePrevious:()=>o.usePrevious,usePrismTheme:()=>o.usePrismTheme,useQueryStringValue:()=>S._X,useScrollController:()=>A.sG,useScrollPosition:()=>A.RF,useScrollPositionBlocker:()=>A.o5,useSearchLinkCreator:()=>o.useSearchLinkCreator,useSearchQueryString:()=>o.useSearchQueryString,useSidebarBreadcrumbs:()=>I.s1,useSmoothScrollTo:()=>A.Ct,useStorageSlot:()=>o.useStorageSlot,useTOCHighlight:()=>U.S,useTabs:()=>E,useThemeConfig:()=>o.useThemeConfig,useTitleFormatter:()=>w.p,useTreeifiedTOC:()=>j.a,useVisibleBlogSidebarItems:()=>$,useVisibleSidebarItems:()=>I.f,useWindowSize:()=>o.useWindowSize});var o=t(5094),n=t(4353),s=t(4477),a=t(1116),l=t(5130),u=t(7294),i=t(902),c=t(5893);const d=u.createContext(null);function m(e){let{children:r,content:t,isBlogPostPage:o=!1}=e;const n=function(e){let{content:r,isBlogPostPage:t}=e;return(0,u.useMemo)((()=>({metadata:r.metadata,frontMatter:r.frontMatter,assets:r.assets,toc:r.toc,isBlogPostPage:t})),[r,t])}({content:t,isBlogPostPage:o});return(0,c.jsx)(d.Provider,{value:n,children:r})}function g(){const e=(0,u.useContext)(d);if(null===e)throw new i.i6("BlogPostProvider");return e}var h=t(373),p=t(9689),f=t(6550),b=t(469),S=t(1980),C=t(7392),v=t(12);function P(e){return u.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,u.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function T(e){const{values:r,children:t}=e;return(0,u.useMemo)((()=>{const e=r??function(e){return P(e).map((e=>{let{props:{value:r,label:t,attributes:o,default:n}}=e;return{value:r,label:t,attributes:o,default:n}}))}(t);return function(e){const r=(0,C.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function y(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function M(e){let{queryString:r=!1,groupId:t}=e;const o=(0,f.k6)(),n=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,S._X)(n),(0,u.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(o.location.search);r.set(n,e),o.replace({...o.location,search:r.toString()})}),[n,o])]}function E(e){const{defaultValue:r,queryString:t=!1,groupId:o}=e,n=T(e),[s,a]=(0,u.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!y({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:r,tabValues:n}))),[l,i]=M({queryString:t,groupId:o}),[c,d]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[o,n]=(0,v.Nk)(t);return[o,(0,u.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:o}),m=(()=>{const e=l??c;return y({value:e,tabValues:n})?e:null})();(0,b.Z)((()=>{m&&a(m)}),[m]);return{selectedValue:s,selectValue:(0,u.useCallback)((e=>{if(!y({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);a(e),i(e),d(e)}),[i,d,n]),tabValues:n}}var B=t(3163),k=t(6857),x=t(2949),F=t(4711),V=t(7016),D=t(3320),I=t(3438),w=t(2128),L=t(5936),N=t(1753),j=t(9665),A=t(2466),R=t(8596),q=t(833),H=t(8978),U=t(6841);function $(e){const{pathname:r}=(0,f.TH)();return(0,u.useMemo)((()=>e.filter((e=>function(e,r){return!(e.unlisted&&!(0,R.Mg)(e.permalink,r))}(e,r)))),[e,r])}var O=t(9445),z=t(9727),_=t(9800),Q=t(5448),W=t(2730)},8824:(e,r,t)=>{t.d(r,{c:()=>i});var o=t(7294),n=t(2263);const s=["zero","one","two","few","many","other"];function a(e){return s.filter((r=>e.includes(r)))}const l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,n.default)();return(0,o.useMemo)((()=>{try{return function(e){const r=new Intl.PluralRules(e);return{locale:e,pluralForms:a(r.resolvedOptions().pluralCategories),select:e=>r.select(e)}}(e)}catch(r){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${r.message}\n`),l}}),[e])}function i(){const e=u();return{selectMessage:(r,t)=>function(e,r,t){const o=e.split("|");if(1===o.length)return o[0];o.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const n=t.select(r),s=t.pluralForms.indexOf(n);return o[Math.min(s,o.length-1)]}(t,r,e)}}},5845:(e,r,t)=>{const o=t(5893);r.Footer=function(){return o.jsxs("footer",{className:"tsd-footer",children:["Powered by"," ",o.jsx("a",{href:"https://github.com/milesj/docusaurus-plugin-typedoc-api",children:"docusaurus-plugin-typedoc-api"})," ","and ",o.jsx("a",{href:"https://typedoc.org/",children:"TypeDoc"})]})}},7850:(e,r,t)=>{const o=t(7294),n=t(9960),s=t(143),a=t(5094),l=t(9517),u=t(5893),i=(e=>e&&e.__esModule?e:{default:e})(n);r.VersionBanner=function(){const e=l.useDocsVersion(),r=e.banner,t=e.docs,n=e.pluginId,c=e.version,d=s.useDocVersionSuggestions(n).latestVersionSuggestion,m=a.useDocsPreferredVersion(n).savePreferredVersionName,g=o.useCallback((()=>{m(d.name)}),[d.name,m]);if(!r||!d)return null;const h=t[d.label];return u.jsx("div",{className:`${a.ThemeClassNames.docs.docVersionBanner} alert alert--warning margin-bottom--md`,role:"alert",children:u.jsxs("div",{children:["unreleased"===r&&u.jsx(u.Fragment,{children:"This is documentation for an unreleased version."}),"unmaintained"===r&&u.jsxs(u.Fragment,{children:["This is documentation for version ",u.jsx("b",{children:c}),"."]})," ","For the latest API, see version"," ",u.jsx("b",{children:u.jsx(i.default,{to:h.id,onClick:g,children:h.title})}),"."]})})}}}]);