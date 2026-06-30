(globalThis.utooChunk_antd||(globalThis.utooChunk_antd=[])).push(["object"==typeof document?document.currentScript:void 0,606365,e=>{"use strict";var o=e.i(737989);e.s(["Radio",()=>o.default])},870435,e=>{"use strict";var o=e.i(391398),l=e.i(191788),a=e.i(504909),c=e.i(606365),s=e.i(827830),t=e.i(56206);let r=(0,s.createStyles)(({token:e,css:o})=>({root:o`
    border-radius: ${e.borderRadius}px;
    background-color: ${e.colorBgContainer};
  `,icon:o`
    border-color: ${e.colorWarning};
  `,label:o`
    color: ${e.colorTextDisabled};
    font-weight: bold;
  `,iconChecked:o`
    background-color: ${e.colorWarning};
  `,labelChecked:o`
    color: ${e.colorWarning};
  `})),i={icon:{borderRadius:6},label:{color:"blue"}};e.s(["default",0,()=>{let[e,s]=l.default.useState("styles"),{styles:n}=r();return(0,o.jsxs)(a.Flex,{vertical:!0,gap:"medium",children:[(0,o.jsx)(c.Radio,{name:"style-class",styles:i,checked:"styles"===e,onChange:()=>s("styles"),children:"Object styles"}),(0,o.jsx)(c.Radio,{name:"style-class",classNames:e=>e.props.checked?{root:(0,t.default)(n.root),icon:(0,t.default)(n.icon,n.iconChecked),label:(0,t.default)(n.label,n.labelChecked)}:{root:n.root,icon:n.icon,label:n.label},checked:"classNames"===e,onChange:()=>s("classNames"),children:"Function classNames"})]})}])}]);