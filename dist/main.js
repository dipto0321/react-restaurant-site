!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);const n={heading:"Home Page",body:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis vel eros donec ac odio tempor orci dapibus ultrices. Convallis tellus id interdum velit laoreet. Vulputate mi sit amet mauris. Habitant morbi tristique senectus et. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Rutrum quisque non tellus orci ac auctor. Eros donec ac odio tempor. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Fringilla ut morbi tincidunt augue. Leo duis ut diam quam. Pharetra et ultrices neque ornare. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Morbi blandit cursus risus at ultrices mi tempus imperdiet.</p>",image:"https://cdn.pixabay.com/photo/2014/09/13/21/30/dinner-table-444434_960_720.jpg"},a={heading:"About page",body:"<p>Urna condimentum mattis pellentesque id nibh tortor id aliquet. Nisl nisi scelerisque eu ultrices vitae auctor eu. Turpis egestas integer eget aliquet nibh. Eget mi proin sed libero. Mi sit amet mauris commodo quis imperdiet massa. Curabitur vitae nunc sed velit dignissim. Elementum eu facilisis sed odio morbi quis commodo odio. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Elementum nisi quis eleifend quam adipiscing vitae. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Amet luctus venenatis lectus magna fringilla urna. Morbi tincidunt augue interdum velit euismod.</p>\n  <p> Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget.In nisl nisi scelerisque eu.Auctor neque vitae tempus quam.Amet consectetur adipiscing elit ut.Nulla facilisi etiam dignissim diam.Nulla pharetra diam sit amet nisl suscipit.Pellentesque habitant morbi tristique senectus et netus et.Eleifend quam adipiscing vitae proin.Pharetra pharetra massa massa ultricies mi quis hendrerit.Et tortor consequat id porta nibh venenatis cras.Pellentesque elit eget gravida cum sociis natoque.A lacus vestibulum sed arcu non odio.Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus.Risus in hendrerit gravida rutrum.Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. </p>\n",image:"https://cdn.pixabay.com/photo/2015/03/26/09/39/fried-chicken-690039_960_720.jpg"},r={heading:"Contact Image",body:'\n  <form>\n    Telephone: <br>\n    <input type = "text" name = "telephone" value = "" >\n    <br>\n    Email: <br>\n    <input type = "text" name = "email" value = "" >\n    <br><br>\n    <input type = "submit" value = "Submit" >\n    </form>\n  ',image:"https://bit.ly/2Gq50eV"},u=(()=>({generateContent(e,t){let i=document.getElementById("tabContentDiv"),n=this.createContent(e);null!==i&&t.removeChild(i),this.appendCurrentContent(n,t)},changeTabAppearance(e){let t=document.getElementsByClassName("active")[0];void 0!==t&&t.setAttribute("class","tabLi"),e.setAttribute("class","tabLi active")},generateMainHeader(){let e=document.createElement("h1");return e.setAttribute("id","mainHeader"),e.innerText="Restaurant Project",e},generateNav(e){let t=document.createElement("ul");return t.setAttribute("id","tabNav"),e.forEach(e=>{this.generateTab(t,e)}),t},generateTab(e,t){let i=document.createElement("li");i.setAttribute("class","tabLi"),i.setAttribute("id",`${t.toLowerCase()}-tab`),i.innerText=t,e.appendChild(i)},addContentListener(e,t){let i=document.getElementById(e);i.addEventListener("click",()=>{this.generateContent(t,document.getElementById("content")),this.changeTabAppearance(i)})},addListenersToDivsAndTabs(){this.addContentListener("home-tab",n),this.addContentListener("about-tab",a),this.addContentListener("contact-tab",r)},createContent(e){let t=document.createElement("div");t.setAttribute("id","tabContentDiv");let i=document.createElement("div");i.setAttribute("class","content"),i.innerHTML=e.body;let n=document.createElement("img");return n.setAttribute("class","content-img"),n.setAttribute("src",e.image),{contentDiv:t,contentBody:i,image:n}},appendCurrentContent(e,t){e.contentDiv.appendChild(e.image),e.contentDiv.appendChild(e.contentBody),t.appendChild(e.contentDiv)},generateInitialContent(e,t,i){e.appendChild(this.generateMainHeader()),e.appendChild(this.generateNav(t)),this.generateContent(i,e),this.changeTabAppearance(document.getElementById("home-tab")),this.addListenersToDivsAndTabs()}}))();window.addEventListener("load",()=>u.generateInitialContent(document.getElementById("content"),["Home","About","Contact"],n))}]);