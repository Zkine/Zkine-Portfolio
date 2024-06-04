import{j as e,P as t,r as a,b as i,c as v,d as N,B as C}from"./index-CDV3w29Y.js";function d({htmlFor:p,className:r,children:l,type:f,name:u,id:n,className2:h,value:x,onChange:m,autoComplete:o,boolean:_}){return e.jsxs("label",{htmlFor:p,className:r,children:[l[0],e.jsx("input",{type:f,name:u,id:n,className:h,value:x,onChange:m,autoComplete:o,required:!0}),_&&e.jsx("span",{children:l[1]})]})}d.propTypes={htmlFor:t.string.isRequired,className:t.string.isRequired,children:t.node.isRequired,type:t.string.isRequired,name:t.string.isRequired,id:t.string.isRequired,className2:t.node.isRequired,value:t.string.isRequired,onChange:t.func.isRequired,autoComplete:t.string.isRequired,boolean:t.bool.isRequired};function y({contactOpen:p}){const[r,l]=a.useState(""),[f,u]=a.useState(!1),[n,h]=a.useState(""),[x,m]=a.useState(!1),[o,_]=a.useState(""),[E,g]=a.useState(!1),[c,b]=a.useState(""),[q,j]=a.useState(!1),R=s=>{s.preventDefault(),i.test(r)?i.test(r)&&u(!1):u(!0),i.test(n)?i.test(n)&&m(!1):m(!0),v.test(o)?v.test(o)&&g(!1):g(!0),N.test(c)?N.test(c)&&j(!1):j(!0)};return p&&e.jsx("section",{className:"conteneurcontact",children:e.jsxs("div",{className:"conteneurcontact__div",children:[e.jsx("h2",{className:"conteneurcontact__h2",children:"Me contacter"}),e.jsx("form",{method:"POST",action:"http://localhost:3030/api/message",className:"conteneurcontact__form",children:e.jsxs("p",{className:"conteneurcontact__formulaire",children:[e.jsxs(d,{htmlFor:"nom",className:"conteneurcontact__label",type:"text",name:"nom",id:"nom",className2:[!i.test(r)&&r!==""?"invalid":"conteneurcontact__imput"],value:r,onChange:s=>l(s.target.value),autoComplete:"false",boolean:f,children:["Nom :","🔥 votre nom ne doit pas comporter de numéros ou de caractères spéciaux."]}),e.jsxs(d,{htmlFor:"prenom",className:"conteneurcontact__label",type:"text",name:"prenom",id:"prenom",className2:[!i.test(n)&&n!==""?"invalid":"conteneurcontact__imput"],value:n,onChange:s=>h(s.target.value),autoComplete:"false",boolean:x,children:["Prénom :","🔥 votre prénom ne doit pas comporter de numéros ou de caractères spéciaux."]}),e.jsxs(d,{htmlFor:"email",className:"conteneurcontact__label",type:"email",name:"email",id:"email",className2:[!v.test(o)&&o!==""?"invalid":"conteneurcontact__imput"],value:o,onChange:s=>_(s.target.value),autoComplete:"false",boolean:E,children:["Email :","🔥 Veuillez entrer une adresse mail valide."]}),e.jsx("br",{}),e.jsxs("label",{htmlFor:"descriptif",className:"conteneurcontact__label",children:["Descriptif de votre demande (Ajoutez autant de détails que nécessaire):",e.jsx("textarea",{name:"descriptif",id:"descriptif",className:[!N.test(c)&&c!==""?"invaliddes":"conteneurcontact__descriptif"],value:c,onChange:s=>b(s.target.value),required:!0}),q&&e.jsx("span",{children:"🔥 Veuillez entrer un minimum dans 65 caractères."})]}),e.jsx(C,{type:"submit",onClick:R,className:"conteneurcontact--bouton",children:"Envoyer"})]})})]})})}y.propTypes={contactOpen:t.bool};export{y as default};
