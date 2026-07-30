"use strict";var q=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var p=q(function(C,m){
var v=5;function b(a,r,n,o,e,f,O){var i,u,s,t;if(a<=0)return e;if(i=o,u=O,n===1&&f===1){if(s=a%v,s>0)for(t=0;t<s;t++)e[u]+=r[i],i+=n,u+=f;if(a<v)return e;for(t=s;t<a;t+=v)e[u]+=r[i],e[u+1]+=r[i+1],e[u+2]+=r[i+2],e[u+3]+=r[i+3],e[u+4]+=r[i+4],i+=v,u+=v;return e}for(t=0;t<a;t++)e[u]+=r[i],i+=n,u+=f;return e}m.exports=b
});var l=q(function(D,x){
var j=require('@stdlib/strided-base-stride2offset/dist'),d=p();function g(a,r,n,o,e){return d(a,r,n,j(a,n),o,e,j(a,e))}x.exports=g
});var E=q(function(F,_){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=l(),k=p();h(R,"ndarray",k);_.exports=R
});var w=require("path").join,y=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=E(),c,M=y(w(__dirname,"./native.js"));z(M)?c=A:c=M;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
