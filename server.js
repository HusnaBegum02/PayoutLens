const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.woff2':'font/woff2'};
http.createServer((req,res)=>{
  let pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  if (pathname === '/') pathname = '/overview.html';
  const file = path.resolve(root, '.' + pathname);
  if (!file.startsWith(root + path.sep) && file !== path.join(root,'index.html')) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(file,(err,data)=>{ if(err){res.writeHead(404,{'Content-Type':'text/plain'});return res.end('Not found: '+pathname);}
    res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});res.end(data); });
}).listen(4173,()=>console.log('PayoutLens running at http://localhost:4173'));
