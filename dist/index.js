"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=o(e),n=o(t);const r=({isOpened:e,content:t,style:o,handleCloseModal:n,buttonContent:r})=>{const a={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",background:"#fff",overflow:"auto",borderRadius:"4px",outline:"none",padding:"20px"}};return e?l.default.createElement("div",{className:"overlay",style:o&&o.overlay?o.overlay:a.overlay},l.default.createElement("div",{className:"modal",style:o&&o.content?o.content:a.content},t,l.default.createElement("button",{onClick:n,style:o&&o.closeButton?o.closeButton:a.closeButton},r||"Close Modal"))):null};r.propTypes={isOpened:n.default.bool.isRequired,content:n.default.string.isRequired,style:n.default.object,handleCloseModal:n.default.func.isRequired,buttonContent:n.default.string.isRequired},exports.Modal=r;
