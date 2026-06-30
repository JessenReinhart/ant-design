(globalThis.utooChunk_antd||(globalThis.utooChunk_antd=[])).push(["object"==typeof document?document.currentScript:void 0,238922,e=>{"use strict";var n=e.i(391398),i=e.i(191788),r=e.i(827830),t=e.i(687800),a=e.i(582225);let s=(0,r.createStaticStyles)(({css:e,cssVar:n})=>({container:e`
    width: 100%;
    min-height: 600px;
    height: fit-content;
    background-color: ${n.colorBgLayout};
    border: 1px solid #e8e8e8;
    border-radius: ${n.borderRadiusLG};
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `,chartContainer:e`
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    > svg {
      margin: auto;
    }
  `,title:e`
    position: absolute;
    top: 20px;
    inset-inline-start: 20px;
    font-size: ${n.fontSizeLG};
    z-index: 10;
  `,tips:e`
    display: flex;
    position: absolute;
    bottom: 20px;
    inset-inline-end: 20px;
    z-index: 10;
    border-radius: 4px;
    font-size: ${n.fontSize};
  `,mvp:e`
    margin-inline-end: ${n.marginMD};
    display: flex;
    align-items: center;
    &::before {
      display: block;
      width: 8px;
      height: 8px;
      margin-inline-end: ${n.marginXS};
      background-color: rgb(22, 119, 255);
      border-radius: 50%;
      content: '';
    }
  `,extension:e`
    display: flex;
    align-items: center;
    &::before {
      display: block;
      width: 8px;
      height: 8px;
      margin-inline-end: ${n.marginXS};
      background-color: rgb(160, 160, 160);
      border-radius: 50%;
      content: '';
    }
  `})),o={cn:{MVPPurpose:"MVP 行为目的",extensionPurpose:"拓展行为目的",behaviorMap:"行为模式地图"},en:{MVPPurpose:"MVP behavior purpose",extensionPurpose:"Extension behavior purpose",behaviorMap:"Behavior Map"}};e.s(["default",0,({data:r})=>{let d=(0,i.useRef)(null),[l]=(0,a.default)(o),c=(0,t.useRouteMeta)(),u=(0,i.useMemo)(()=>{let e,n;return(e=[]).push("graph LR"),e.push("classDef baseNode fill:#fff,stroke:none,stroke-width:0px,rx:5,ry:5,font-size:14px"),(n=(i,r)=>{let t=`node_${i.id.replace(/[^a-z0-9]/gi,"_")}`,a=i.label.replace(/"/g,"'");r?"mvp"===i.targetType?a=`<span style="display:inline-block;width:8px;height:8px;background-color:rgb(22, 119, 255);border-radius:50%;margin-inline-end:8px;vertical-align:middle;"></span>${a}`:"extension"===i.targetType&&(a=`<span style="display:inline-block;width:8px;height:8px;background-color:rgb(160, 160, 160);border-radius:50%;margin-inline-end:8px;vertical-align:middle;"></span>${a}`):(e.push(`style ${t} font-size:16px`),a=`**${a}**`),e.push(`${t}["${a}"]:::baseNode`),i.link&&e.push(`click ${t} "#${i.link}"`),r&&e.push(`${r} --> ${t}`),i.children&&i.children.length>0&&i.children.forEach(e=>{n(e,t)})})(r),e.join("\n")},[r]),p=(0,i.useRef)(!1);return(0,i.useEffect)(()=>(p.current=!1,(async()=>{if(d.current&&u)try{let n=(await e.A(692041)).default;if(p.current)return;n.initialize({startOnLoad:!1,theme:"base",securityLevel:"strict",flowchart:{htmlLabels:!0,curve:"linear",rankSpacing:150,nodeSpacing:10}});let i=`mermaid-${Date.now()}`,{svg:r}=await n.render(i,u);!p.current&&d.current&&(d.current.innerHTML=r)}catch{!p.current&&d.current&&(d.current.innerHTML="Render Error")}})(),()=>{p.current=!0}),[u]),(0,n.jsxs)("div",{className:s.container,children:[(0,n.jsx)("div",{className:s.title,children:`${c.frontmatter.title} ${l.behaviorMap}`}),(0,n.jsx)("div",{ref:d,className:s.chartContainer}),(0,n.jsxs)("div",{className:s.tips,children:[(0,n.jsx)("div",{className:s.mvp,children:l.MVPPurpose}),(0,n.jsx)("div",{className:s.extension,children:l.extensionPurpose})]})]})}],238922)},692041,e=>{e.v(n=>Promise.all(["node_modules_8a010589.34efec80.async.js","node_modules_4a1cca4b.f3a11702.async.js","node_modules_mermaid_dist_chunks_mermaid_core_f417175a.f086a9d1.async.js","node_modules_mermaid_dist_chunks_mermaid_core_chunk-ZIRB5QZD_mjs_32b428b6.81b10567.async.js","node_modules_mermaid_dist_chunks_mermaid_core_chunk-WYO6CB5R_mjs_5aae8062.14abd069.async.js","node_modules_mermaid_dist_chunks_mermaid_core_chunk-ZGVPDNZ5_mjs_5182927e.26270d72.async.js","node_modules_093c2281.c1855c94.async.js","node_modules_8e748179.dde79691.async.js"].map(n=>e.l(n))).then(()=>n(139691)))}]);