import{r as n,j as e,d}from"./app-ahnNvkkH.js";import{A as f}from"./ApplicationLogo-fVmqW5-3.js";import{e as p}from"./transition-lvq1YQDb.js";const g=n.createContext(),c=({children:t})=>{const[r,s]=n.useState(!1),o=()=>{s(i=>!i)};return e.jsx(g.Provider,{value:{open:r,setOpen:s,toggleOpen:o},children:e.jsx("div",{className:"relative",children:t})})},j=({children:t})=>{const{open:r,setOpen:s,toggleOpen:o}=n.useContext(g);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:o,children:t}),r&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>s(!1)})]})},v=({align:t="right",width:r="48",contentClasses:s="py-1 bg-white",children:o})=>{const{open:i,setOpen:u}=n.useContext(g);let x="origin-top";t==="left"?x="ltr:origin-top-left rtl:origin-top-right start-0":t==="right"&&(x="ltr:origin-top-right rtl:origin-top-left end-0");let m="";return r==="48"&&(m="w-48"),e.jsx(e.Fragment,{children:e.jsx(p,{as:n.Fragment,show:i,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${x} ${m}`,onClick:()=>u(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+s,children:o})})})})},y=({className:t="",children:r,...s})=>e.jsx(d,{...s,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+t,children:r});c.Trigger=j;c.Content=v;c.Link=y;const a=c;function l({active:t=!1,className:r="",children:s,...o}){return e.jsx(d,{...o,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(t?"border-indigo-400 text-gray-900 focus:border-indigo-700 ":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")+r,children:s})}function h({active:t=!1,className:r="",children:s,...o}){return e.jsx(d,{...o,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${t?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${r}`,children:s})}function k({user:t,header:r,children:s}){const[o,i]=n.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsxs("nav",{className:"bg-white border-b border-gray-100",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"shrink-0 flex items-center",children:e.jsx(d,{href:"/",children:e.jsx(f,{className:"block h-9 w-auto fill-current text-gray-800"})})}),e.jsxs("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:[e.jsx(l,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),e.jsx(l,{href:route("cartography"),active:route().current("cartography"),children:"Cartography"}),e.jsx(l,{href:route("geoinfo"),active:route().current("geoinfo"),children:"Geoinfo"}),e.jsx(l,{href:route("intelectual"),active:route().current("intelectual"),children:"Intelectual"}),e.jsx(l,{href:route("security"),active:route().current("security"),children:"Security"})]})]}),e.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:t?e.jsx("div",{className:"ms-3 relative",children:e.jsxs(a,{children:[e.jsx(a.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[t.name,e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(a.Content,{children:[e.jsx(a.Link,{href:route("profile.edit"),children:"Profile"}),e.jsx(a.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})}):e.jsxs("div",{className:"flex gap-6 items-center",children:[e.jsx("a",{href:route("login"),className:"font-semibold dark:text-gray-600 dark:hover:text-gray-900 text-gray-400 hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",children:"Log in"}),e.jsx("a",{href:route("register"),class:"font-semibold dark:text-gray-600 dark:hover:text-gray-900 text-gray-400 =hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",children:"Register"})]})}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>i(u=>!u),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:o?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:o?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(o?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:e.jsx(h,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),t?e.jsx("div",{children:e.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"font-medium text-base text-gray-800",children:t.name}),e.jsx("div",{className:"font-medium text-sm text-gray-500",children:t.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(h,{href:route("profile.edit"),children:"Profile"}),e.jsx(h,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})}):e.jsxs("div",{className:"grid gap-3 items-center",children:[e.jsx("a",{href:route("login"),className:"w-full flex items-start ps-3 pe-4 py-2 border-l-4 font-semibold dark:text-gray-600 dark:hover:text-gray-900 text-gray-400 hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",children:"Log in"}),e.jsx("a",{href:route("register"),class:"w-full flex items-start ps-3 pe-4 py-2 border-l-4 font-semibold dark:text-gray-600 dark:hover:text-gray-900 text-gray-400 =hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",children:"Register"})]})]})]}),r&&e.jsx("header",{className:"bg-white shadow",children:e.jsx("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:r})}),e.jsx("main",{children:s})]})}export{k as A};