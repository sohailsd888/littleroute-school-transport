import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const source=fs.readFileSync(path.join(root,'dist/app.js'),'utf8');
const functions=source.slice(0,source.indexOf('const renderers='));
for(const page of ['404','daily-school-transport','one-way-transport','parent-transport-portal','student-safety-support','index','home2','about','services','routes','fees','safety','contact','privacy','login','dashboard']){
 const ctx=vm.createContext({document:{body:{dataset:{page}}},localStorage:{getItem:()=>null},setTimeout,clearTimeout,console});
 vm.runInContext(functions+`;globalThis.html=${page==='login'?'loginPage()':page==='dashboard'?'dashboard()':`header()+'<main id="main">'+(${({'404':'notFoundPage','daily-school-transport':"()=>serviceDetailPage('daily-school-transport')",'one-way-transport':"()=>serviceDetailPage('one-way-transport')",'parent-transport-portal':"()=>serviceDetailPage('parent-transport-portal')",'student-safety-support':"()=>serviceDetailPage('student-safety-support')",index:'home',home2:'home2',about:'aboutPage',services:'servicesPage',routes:'routesPage',fees:'feesPage',safety:'safetyPage',contact:'contactPage',privacy:'privacyPage'})[page]})()+'</main>'+footer()`};`,ctx);
 const file=path.join(root,`dist/${page}.html`);
 let html=fs.readFileSync(file,'utf8');
 const start=html.indexOf('<div id="app">');
 const end=html.indexOf('<div id="toast"');
 html=html.slice(0,start)+`<div id="app">${ctx.html}</div>`+html.slice(end);
 if(!html.includes('<noscript>'))html=html.replace('</head>','<noscript><style>.reveal{opacity:1;transform:none}</style></noscript></head>');
 fs.writeFileSync(file,html);
}
console.log('Rendered 16 pages. No dependencies or external build tools required.');
