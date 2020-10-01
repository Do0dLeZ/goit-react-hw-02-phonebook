(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{19:function(n,e,t){n.exports=t(36)},34:function(n,e,t){},35:function(n,e,t){},36:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),i=t(18),u=t(4),l=t(5),d=t(8),b=t(7),f=t(1),m=t(38);function s(n){var e=n.name,t=n.number;return{id:Object(m.a)(),name:e,number:t}}var p=t(14),h=t(9),v=t.n(h),g=t(2);function x(){var n=Object(f.a)(["\n  box-shadow: inset 0px 1px 0px 0px #dcecfb;\n  background: linear-gradient(to bottom, #bddbfa 5%, #80b5ea 100%);\n  background-color: #bddbfa;\n  border-radius: 6px;\n  border: 1px solid #84bbf3;\n  display: inline-block;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: Arial;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 24px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #528ecc;\n\n  &:hover {\n    background: linear-gradient(to bottom, #80b5ea 5%, #bddbfa 100%);\n    background-color: #80b5ea;\n  }\n\n  &:active {\n    position: relative;\n    top: 1px;\n  }\n"]);return x=function(){return n},n}function w(){var n=Object(f.a)(["\n  margin-bottom: 15px;\n  width: 80%;\n  height: 36px;\n  font-size: 20px;\n"]);return w=function(){return n},n}function C(){var n=Object(f.a)(["\n  margin-bottom: 5x;\n"]);return C=function(){return n},n}function y(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n\n  margin-bottom: 25px;\n"]);return y=function(){return n},n}var E=g.b.form(y()),O=g.b.label(C()),j=g.b.input(w()),k=g.b.button(x()),N=function(n){Object(d.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={name:"",number:""},n.inputId={idName:v.a.generate(),idNumber:v.a.generate()},n.handleOnChange=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.onAddContact(n.state)},n}return Object(l.a)(t,[{key:"render",value:function(){var n=this.state,e=n.name,t=n.number,a=this.inputId,o=a.idName,c=a.idNumber;return r.a.createElement(E,{onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Phone Book"),r.a.createElement(O,{htmlFor:o},"Name"),r.a.createElement(j,{type:"text",placeholder:"Enter name...",value:e,onChange:this.handleOnChange,name:"name",id:o}),r.a.createElement(O,{htmlFor:c},"Number"),r.a.createElement(j,{type:"number",value:t,onChange:this.handleOnChange,name:"number",id:c,placeholder:"Enter phone number..."}),r.a.createElement(k,{type:"submit"},"Add contact"))}}]),t}(a.Component);function S(){var n=Object(f.a)(["\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n\n    color: rgb(176,196,222);\n\n    &:hover {\n        color: red;\n    }\n"]);return S=function(){return n},n}function A(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  margin-bottom: 10px;\n"]);return A=function(){return n},n}function F(){var n=Object(f.a)(["\n  list-style: none;\n"]);return F=function(){return n},n}function B(){var n=Object(f.a)(["\n  margin-bottom: 10px;\n"]);return B=function(){return n},n}function L(){var n=Object(f.a)([""]);return L=function(){return n},n}var R=g.b.section(L()),z=g.b.h2(B()),D=g.b.ul(F()),I=g.b.li(A()),J=g.b.button(S());var W=function(n){var e=n.contacts,t=n.onRemoveContact;return r.a.createElement(R,null,r.a.createElement(z,null,"Contacts"),r.a.createElement(D,null,e.map((function(n){var e=n.id,a=n.name,o=n.number;return r.a.createElement(I,{key:e},r.a.createElement("span",null,a,": ",o),r.a.createElement(J,{type:"button",onClick:function(){return t(e)}},"Remove"))}))))};function H(){var n=Object(f.a)(["\n  margin-bottom: 15px;\n  width: 70%;\n  height: 36px;\n  font-size: 20px;\n\n  margin-bottom: 15px;\n"]);return H=function(){return n},n}var K=g.b.input(H());function M(n){var e=n.value,t=n.onChange;return r.a.createElement("div",null,r.a.createElement(K,{type:"text",value:e,onChange:function(n){return t(n.target.value)},placeholder:"Filter contacts..."}))}function P(){var n=Object(f.a)(['\n    @font-face {\n        font-family: "Druk Wide Bold";\n        src: url("//db.onlinewebfonts.com/t/2206d6cc490084998d531e8c1b2cbb4a.eot");\n        src: url("//db.onlinewebfonts.com/t/2206d6cc490084998d531e8c1b2cbb4a.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/2206d6cc490084998d531e8c1b2cbb4a.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/2206d6cc490084998d531e8c1b2cbb4a.woff") format("woff"), url("//db.onlinewebfonts.com/t/2206d6cc490084998d531e8c1b2cbb4a.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/2206d6cc490084998d531e8c1b2cbb4a.svg#Druk Wide Bold") format("svg"); \n    }\n    @font-face {font-family: "Noteworthy"; src: url("//db.onlinewebfonts.com/t/016f50054d487d421dc18257a191a3ad.eot"); src: url("//db.onlinewebfonts.com/t/016f50054d487d421dc18257a191a3ad.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/016f50054d487d421dc18257a191a3ad.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/016f50054d487d421dc18257a191a3ad.woff") format("woff"), url("//db.onlinewebfonts.com/t/016f50054d487d421dc18257a191a3ad.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/016f50054d487d421dc18257a191a3ad.svg#Noteworthy") format("svg"); }\n']);return P=function(){return n},n}var q=Object(g.a)(P());t(34),t(35);function G(){var n=Object(f.a)(['\n  width: 300px;\n  border: 2px solid #908989;\n  padding: 10px 30px 20px 10px;\n  border-radius: 5px;\n\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n\n  font-family: "Noteworthy";\n']);return G=function(){return n},n}var Q=g.b.form(G()),T=function(n){Object(d.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.addContact=function(e){var t=e.name,a=e.number;if(!n.state.contacts.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}))){var r=s({name:t,number:a});n.setState((function(n){return{contacts:[].concat(Object(i.a)(n.contacts),[r])}}))}else alert("Contact with name: ".concat(t," already exist... Enter another name"))},n.removeContact=function(e){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==e}))}}))},n.handleFilterChange=function(e){return n.setState({filter:e})},n.visibleContacts=function(){return n.state.contacts.filter((function(e){return e.name.toLowerCase().includes(n.state.filter.toLowerCase())}))},n}return Object(l.a)(t,[{key:"render",value:function(){var n=this.state,e=n.filter,t=n.contacts,a=this.visibleContacts();return r.a.createElement(Q,null,r.a.createElement(q,null),r.a.createElement(N,{onAddContact:this.addContact}),t.length>1&&r.a.createElement(M,{value:e,onChange:this.handleFilterChange}),a.length>0&&r.a.createElement(W,{contacts:a,onRemoveContact:this.removeContact}))}}]),t}(a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.acdf6e1e.chunk.js.map