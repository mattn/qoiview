
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in f)f.hasOwnProperty(l)&&(k[l]=f[l]);var aa=[],ba="./this.program";function r(a,b){throw b;}var ca="object"===typeof window,u="function"===typeof importScripts,v="",da,w,x,y,z;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)v=u?require("path").dirname(v)+"/":__dirname+"/",da=function(a,b){y||(y=require("fs"));z||(z=require("path"));a=z.normalize(a);return y.readFileSync(a,b?null:"utf8")},x=function(a){a=da(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||A("Assertion failed: undefined");return a},w=function(a,b,c){y||(y=require("fs"));z||(z=require("path"));a=z.normalize(a);y.readFile(a,function(d,e){d?c(d):b(e.buffer)})},
1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ea))throw a;}),process.on("unhandledRejection",function(a){throw a;}),r=function(a,b){if(noExitRuntime||0<fa)throw process.exitCode=a,b;b instanceof ea||B("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ca||u)u?v=self.location.href:"undefined"!==
typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.replace(/[?#].*/,"").lastIndexOf("/")+1):"",da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),w=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==
d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var B=f.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(f[l]=k[l]);k=null;f.arguments&&(aa=f.arguments);f.thisProgram&&(ba=f.thisProgram);f.quit&&(r=f.quit);var C;f.wasmBinary&&(C=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&A("no native wasm support detected");var ha,ia=!1;
function ja(a){var b=f["_"+a];b||A("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}function ka(a,b,c){var d={string:function(n){var q=0;if(null!==n&&void 0!==n&&0!==n){var t=(n.length<<2)+1;q=D(t);E(n,F,q,t)}return q},array:function(n){var q=D(n.length);la.set(n,q);return q}};a=ja(a);var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=ma()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&na(h);return n}(b)}
var oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function G(a,b){if(a){var c=F,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&oa)a=oa.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function E(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function pa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function qa(a){var b=pa(a)+1,c=D(b);E(a,la,c,b);return c}var la,F,ra,sa,H,ta,I,J,ua,va=[],wa=[],xa=[],ya=[],za=[],fa=0;function Aa(){var a=f.preRun.shift();va.unshift(a)}var K=0,Ba=null,L=null;f.preloadedImages={};f.preloadedAudios={};
function A(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";B(a);ia=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ca(){return M.startsWith("data:application/octet-stream;base64,")}var M;M="qoiview.wasm";if(!Ca()){var Da=M;M=f.locateFile?f.locateFile(Da,v):v+Da}function Ea(){var a=M;try{if(a==M&&C)return new Uint8Array(C);if(x)return x(a);throw"both async and sync fetching of the wasm failed";}catch(b){A(b)}}
function Fa(){if(!C&&(ca||u)){if("function"===typeof fetch&&!M.startsWith("file://"))return fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ea()});if(w)return new Promise(function(a,b){w(M,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ea()})}
function Ga(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.pc;"number"===typeof c?void 0===b.Ob?N(c)():N(c)(b.Ob):c(void 0===b.Ob?null:b.Ob)}}}function N(a){return ua.get(a)}var Ha=0;function Ia(){for(var a=P.length-1;0<=a;--a)Ja(a);P=[];Ka=[]}var Ka=[];function La(){if(Ha&&Ma.Jb)for(var a=0;a<Ka.length;++a){var b=Ka[a];Ka.splice(a,1);--a;b.wc.apply(null,b.mc)}}var P=[];function Ja(a){var b=P[a];b.target.removeEventListener(b.Db,b.hc,b.Eb);P.splice(a,1)}
function Q(a){function b(d){++Ha;Ma=a;La();a.Gb(d);La();--Ha}if(a.Fb)a.hc=b,a.target.addEventListener(a.Db,b,a.Eb),P.push(a),Na||(ya.push(Ia),Na=!0);else for(var c=0;c<P.length;++c)P[c].target==a.target&&P[c].Db==a.Db&&Ja(c--)}function Oa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Na,Ma,Pa,Qa,Ra,Sa,Ta,Ua,Va,Wa=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function R(a){a=2<a?G(a):a;return Wa[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function Xa(a){return 0>Wa.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function Ya(a,b,c,d,e,h){Pa||(Pa=S(256));a={target:R(a),Db:h,Fb:d,Gb:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Pa;E(Oa(g.target),F,n+0,128);E(m,F,n+128,128);N(d)(e,n,b)&&g.preventDefault()},Eb:c};Q(a)}
function Za(a,b,c,d,e,h){Qa||(Qa=S(176));a={target:R(a),Jb:!0,Db:h,Fb:d,Gb:function(g){var m=Qa;J[m>>3]=g.timeStamp;var n=m>>2;H[n+2]=g.location;H[n+3]=g.ctrlKey;H[n+4]=g.shiftKey;H[n+5]=g.altKey;H[n+6]=g.metaKey;H[n+7]=g.repeat;H[n+8]=g.charCode;H[n+9]=g.keyCode;H[n+10]=g.which;E(g.key||"",F,m+44,32);E(g.code||"",F,m+76,32);E(g.char||"",F,m+108,32);E(g.locale||"",F,m+140,32);N(d)(e,m,b)&&g.preventDefault()},Eb:c};Q(a)}
function $a(a,b,c){J[a>>3]=b.timeStamp;a>>=2;H[a+2]=b.screenX;H[a+3]=b.screenY;H[a+4]=b.clientX;H[a+5]=b.clientY;H[a+6]=b.ctrlKey;H[a+7]=b.shiftKey;H[a+8]=b.altKey;H[a+9]=b.metaKey;ra[2*a+20]=b.button;ra[2*a+21]=b.buttons;H[a+11]=b.movementX;H[a+12]=b.movementY;c=Xa(c);H[a+13]=b.clientX-c.left;H[a+14]=b.clientY-c.top}
function T(a,b,c,d,e,h){Ra||(Ra=S(72));a=R(a);Q({target:a,Jb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Db:h,Fb:d,Gb:function(g){g=g||event;$a(Ra,g,a);N(d)(e,Ra,b)&&g.preventDefault()},Eb:c})}function ab(a,b,c,d,e){Sa||(Sa=S(260));Q({target:a,Db:e,Fb:d,Gb:function(h){h=h||event;var g=Sa,m=document.pointerLockElement||document.Rb||document.Tb||document.Sb;H[g>>2]=!!m;var n=m&&m.id?m.id:"";E(Oa(m),F,g+4,128);E(n,F,g+132,128);N(d)(20,g,b)&&h.preventDefault()},Eb:c})}
function bb(a,b,c,d,e){Q({target:a,Db:e,Fb:d,Gb:function(h){h=h||event;N(d)(38,0,b)&&h.preventDefault()},Eb:c})}
function cb(a,b,c,d){Ta||(Ta=S(36));a=R(a);Q({target:a,Db:"resize",Fb:d,Gb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=Ta;H[g>>2]=e.detail;H[g+4>>2]=h.clientWidth;H[g+8>>2]=h.clientHeight;H[g+12>>2]=innerWidth;H[g+16>>2]=innerHeight;H[g+20>>2]=outerWidth;H[g+24>>2]=outerHeight;H[g+28>>2]=pageXOffset;H[g+32>>2]=pageYOffset;N(d)(10,g,b)&&e.preventDefault()}}},Eb:c})}
function db(a,b,c,d,e,h){Ua||(Ua=S(1696));a=R(a);Q({target:a,Jb:"touchstart"==h||"touchend"==h,Db:h,Fb:d,Gb:function(g){for(var m,n={},q=g.touches,t=0;t<q.length;++t)m=q[t],m.Wb=m.Xb=0,n[m.identifier]=m;for(t=0;t<g.changedTouches.length;++t)m=g.changedTouches[t],m.Wb=1,n[m.identifier]=m;for(t=0;t<g.targetTouches.length;++t)n[g.targetTouches[t].identifier].Xb=1;q=Ua;J[q>>3]=g.timeStamp;var p=q>>2;H[p+3]=g.ctrlKey;H[p+4]=g.shiftKey;H[p+5]=g.altKey;H[p+6]=g.metaKey;p+=7;var O=Xa(a),lb=0;for(t in n)if(m=
n[t],H[p]=m.identifier,H[p+1]=m.screenX,H[p+2]=m.screenY,H[p+3]=m.clientX,H[p+4]=m.clientY,H[p+5]=m.pageX,H[p+6]=m.pageY,H[p+7]=m.Wb,H[p+8]=m.Xb,H[p+9]=m.clientX-O.left,H[p+10]=m.clientY-O.top,p+=13,31<++lb)break;H[q+8>>2]=lb;N(d)(e,q,b)&&g.preventDefault()},Eb:c})}function eb(a,b,c,d,e,h){a={target:R(a),Db:h,Fb:d,Gb:function(g){g=g||event;N(d)(e,0,b)&&g.preventDefault()},Eb:c};Q(a)}
function fb(a,b,c,d){Va||(Va=S(104));Q({target:a,Jb:!0,Db:"wheel",Fb:d,Gb:function(e){e=e||event;var h=Va;$a(h,e,a);J[h+72>>3]=e.deltaX;J[h+80>>3]=e.deltaY;J[h+88>>3]=e.deltaZ;H[h+96>>2]=e.deltaMode;N(d)(9,h,b)&&e.preventDefault()},Eb:c})}
function gb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function hb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ib(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function jb(a){a.sc=a.getExtension("WEBGL_multi_draw")}
var kb=1,mb=[],U=[],nb=[],ob=[],pb=[],V=[],qb=[],rb={};function W(a){sb||(sb=a)}function tb(a){for(var b=kb++,c=a.length;c<b;c++)a[c]=null;return b}function ub(a,b){a.Vb||(a.Vb=a.getContext,a.getContext=function(d,e){e=a.Vb(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=a.getContext("webgl",b);return c?vb(c,b):0}function vb(a,b){var c=tb(qb),d={qc:c,attributes:b,version:b.kc,Nb:a};a.canvas&&(a.canvas.lc=d);qb[c]=d;("undefined"===typeof b.Ub||b.Ub)&&wb(d);return c}
function wb(a){a||(a=xb);if(!a.jc){a.jc=!0;var b=a.Nb;gb(b);hb(b);ib(b);b.oc=b.getExtension("EXT_disjoint_timer_query");jb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var sb,xb,yb=["default","low-power","high-performance"];function zb(a,b,c,d){for(var e=0;e<a;e++){var h=X[c](),g=h&&tb(d);h?(h.name=g,d[g]=h):W(1282);H[b+4*e>>2]=g}}
function Ab(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){W(1280);B("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:W(1280);B("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else W(1281)}function Bb(a){var b=pa(a)+1,c=S(b);E(a,F,c,b);return c}
function Cb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Y(a){var b=X.fc;if(b){var c=b.Ib[a];"number"===typeof c&&(b.Ib[a]=c=X.getUniformLocation(b,b.dc[a]+(0<c?"["+c+"]":"")));return c}W(1282)}for(var Z=[],X,Db=new Float32Array(288),Eb=0;288>Eb;++Eb)Z[Eb]=Db.subarray(0,Eb+1);
var Ob={M:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},$:function(a,b,c){a=R(a);if(!a)return-4;a=Xa(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},Ra:function(a,b,c){F.copyWithin(a,b,b+c)},za:function(a,b){function c(d){N(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Sa:function(){A("OOM")},I:function(a,b,c,d){Ya(a,b,c,d,12,"blur");return 0},F:function(a,b,c){a=R(a);if(!a)return-4;a.width=b;a.height=c;return 0},J:function(a,b,c,d){Ya(a,b,c,d,13,"focus");
return 0},T:function(a,b,c,d){Za(a,b,c,d,2,"keydown");return 0},R:function(a,b,c,d){Za(a,b,c,d,1,"keypress");return 0},S:function(a,b,c,d){Za(a,b,c,d,3,"keyup");return 0},Z:function(a,b,c,d){T(a,b,c,d,5,"mousedown");return 0},W:function(a,b,c,d){T(a,b,c,d,33,"mouseenter");return 0},V:function(a,b,c,d){T(a,b,c,d,34,"mouseleave");return 0},X:function(a,b,c,d){T(a,b,c,d,8,"mousemove");return 0},Y:function(a,b,c,d){T(a,b,c,d,6,"mouseup");return 0},L:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||
document.body.Rb||document.body.Tb||document.body.Sb))return-1;a=R(a);if(!a)return-4;ab(a,b,c,d,"pointerlockchange");ab(a,b,c,d,"mozpointerlockchange");ab(a,b,c,d,"webkitpointerlockchange");ab(a,b,c,d,"mspointerlockchange");return 0},K:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Rb||document.body.Tb||document.body.Sb))return-1;a=R(a);if(!a)return-4;bb(a,b,c,d,"pointerlockerror");bb(a,b,c,d,"mozpointerlockerror");bb(a,b,c,d,"webkitpointerlockerror");bb(a,b,c,d,
"mspointerlockerror");return 0},Ma:function(a,b,c,d){cb(a,b,c,d);return 0},N:function(a,b,c,d){db(a,b,c,d,25,"touchcancel");return 0},O:function(a,b,c,d){db(a,b,c,d,23,"touchend");return 0},P:function(a,b,c,d){db(a,b,c,d,24,"touchmove");return 0},Q:function(a,b,c,d){db(a,b,c,d,22,"touchstart");return 0},H:function(a,b,c,d){eb(a,b,c,d,31,"webglcontextlost");return 0},G:function(a,b,c,d){eb(a,b,c,d,32,"webglcontextrestored");return 0},U:function(a,b,c,d){a=R(a);return"undefined"!==typeof a.onwheel?
(fb(a,b,c,d),0):-1},_:function(a,b){b>>=2;b={alpha:!!H[b],depth:!!H[b+1],stencil:!!H[b+2],antialias:!!H[b+3],premultipliedAlpha:!!H[b+4],preserveDrawingBuffer:!!H[b+5],powerPreference:yb[H[b+6]],failIfMajorPerformanceCaveat:!!H[b+7],kc:H[b+8],rc:H[b+9],Ub:H[b+10],ic:H[b+11],tc:H[b+12],uc:H[b+13]};a=R(a);return!a||b.ic?0:ub(a,b)},Na:function(a,b){a=qb[a];b=G(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&gb(X);"OES_vertex_array_object"==b&&hb(X);"WEBGL_draw_buffers"==b&&ib(X);
"WEBGL_multi_draw"==b&&jb(X);return!!a.Nb.getExtension(b)},Pa:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},Oa:function(a){xb=qb[a];f.nc=X=xb&&xb.Nb;return!a||X?0:-5},D:function(a){X.activeTexture(a)},u:function(a,b){X.attachShader(U[a],V[b])},f:function(a,b){X.bindBuffer(a,mb[b])},q:function(a,b){X.bindFramebuffer(a,nb[b])},qa:function(a,b){X.bindRenderbuffer(a,ob[b])},e:function(a,b){X.bindTexture(a,pb[b])},y:function(a,b,c,d){X.blendColor(a,b,c,d)},
z:function(a,b){X.blendEquationSeparate(a,b)},A:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},sa:function(a,b,c,d){X.bufferData(a,c?F.subarray(c,c+b):b,d)},j:function(a,b,c,d){X.bufferSubData(a,b,F.subarray(d,d+c))},eb:function(a){X.clear(a)},aa:function(a,b,c,d){X.clearColor(a,b,c,d)},gb:function(a){X.clearDepth(a)},fb:function(a){X.clearStencil(a)},g:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},da:function(a){X.compileShader(V[a])},ma:function(a,b,c,d,e,h,g,m){X.compressedTexImage2D(a,b,c,
d,e,h,m?F.subarray(m,m+g):null)},ka:function(){var a=tb(U),b=X.createProgram();b.name=a;b.Mb=b.Kb=b.Lb=0;b.Qb=1;U[a]=b;return a},fa:function(a){var b=tb(V);V[b]=X.createShader(a);return b},v:function(a){X.cullFace(a)},Aa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=mb[d];e&&(X.deleteBuffer(e),e.name=0,mb[d]=null)}},n:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],e=nb[d];e&&(X.deleteFramebuffer(e),e.name=0,nb[d]=null)}},C:function(a){if(a){var b=U[a];b?(X.deleteProgram(b),b.name=0,
U[a]=null):W(1281)}},E:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=ob[d];e&&(X.deleteRenderbuffer(e),e.name=0,ob[d]=null)}},i:function(a){if(a){var b=V[a];b?(X.deleteShader(b),V[a]=null):W(1281)}},ya:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=pb[d];e&&(X.deleteTexture(e),e.name=0,pb[d]=null)}},m:function(a){X.depthFunc(a)},l:function(a){X.depthMask(!!a)},a:function(a){X.disable(a)},B:function(a){X.disableVertexAttribArray(a)},Ta:function(a,b,c){X.drawArrays(a,b,c)},Ua:function(a,
b,c,d){X.drawElements(a,b,c,d)},c:function(a){X.enable(a)},$a:function(a){X.enableVertexAttribArray(a)},w:function(a){X.frontFace(a)},ta:function(a,b){zb(a,b,"createBuffer",mb)},ra:function(a,b){zb(a,b,"createRenderbuffer",ob)},oa:function(a,b){zb(a,b,"createTexture",pb)},ba:function(a,b){return X.getAttribLocation(U[a],G(b))},b:function(a,b){Ab(a,b)},ia:function(a,b,c,d){a=X.getProgramInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(H[c>>2]=b)},t:function(a,b,c){if(c)if(a>=
kb)W(1281);else if(a=U[a],35716==b)a=X.getProgramInfoLog(a),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b){if(!a.Mb)for(b=0;b<X.getProgramParameter(a,35718);++b)a.Mb=Math.max(a.Mb,X.getActiveUniform(a,b).name.length+1);H[c>>2]=a.Mb}else if(35722==b){if(!a.Kb)for(b=0;b<X.getProgramParameter(a,35721);++b)a.Kb=Math.max(a.Kb,X.getActiveAttrib(a,b).name.length+1);H[c>>2]=a.Kb}else if(35381==b){if(!a.Lb)for(b=0;b<X.getProgramParameter(a,35382);++b)a.Lb=Math.max(a.Lb,X.getActiveUniformBlockName(a,
b).length+1);H[c>>2]=a.Lb}else H[c>>2]=X.getProgramParameter(a,b);else W(1281)},ca:function(a,b,c,d){a=X.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(H[c>>2]=b)},r:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),H[c>>2]=a?a.length+1:0):35720==b?(a=X.getShaderSource(V[a]),H[c>>2]=a?a.length+1:0):H[c>>2]=X.getShaderParameter(V[a],b):W(1281)},Ba:function(a){var b=rb[a];if(!b){switch(a){case 7939:b=X.getSupportedExtensions()||
[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Bb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=X.getParameter(a))||W(1280);b=b&&Bb(b);break;case 7938:b=Bb("OpenGL ES 2.0 ("+X.getParameter(7938)+")");break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Bb(b);break;default:W(1280)}rb[a]=b}return b},s:function(a,b){b=G(b);if(a=U[a]){var c=a,d=c.Ib,
e=c.ec,h;if(!d)for(c.Ib=d={},c.dc={},h=0;h<X.getProgramParameter(c,35718);++h){var g=X.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Cb(m);n=0<n?m.slice(0,n):m;var q=c.Qb;c.Qb+=g;e[n]=[g,q];for(m=0;m<g;++m)d[q]=m,c.dc[q++]=n}c=a.Ib;d=0;e=b;h=Cb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.ec[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||X.getUniformLocation(a,b)))return d}else W(1281);return-1},ja:function(a){a=U[a];X.linkProgram(a);a.Ib=0;a.ec={}},x:function(a,b){X.polygonOffset(a,b)},pa:function(a,
b,c,d){X.renderbufferStorage(a,b,c,d)},o:function(a,b,c,d){X.scissor(a,b,c,d)},ea:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?H[d+4*h>>2]:-1;e+=G(H[c+4*h>>2],0>g?void 0:g)}X.shaderSource(V[a],e)},wa:function(a,b,c){X.stencilFunc(a,b,c)},db:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},k:function(a){X.stencilMask(a)},va:function(a,b,c){X.stencilOp(a,b,c)},cb:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},la:function(a,b,c,d,e,h,g,m,n){var q=X,t=q.texImage2D;if(n){var p=m-5120;p=1==p?F:
4==p?H:6==p?I:5==p||28922==p?ta:sa;var O=31-Math.clz32(p.BYTES_PER_ELEMENT);n=p.subarray(n>>O,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4}[g-6402]||1)*(1<<O)+4-1&-4)>>O)}else n=null;t.call(q,a,b,c,d,e,h,g,m,n)},d:function(a,b,c){X.texParameteri(a,b,c)},_a:function(a,b,c){if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=I[c+4*e>>2];else d=I.subarray(c>>2,c+4*b>>2);X.uniform1fv(Y(a),d)},ha:function(a,b){X.uniform1i(Y(a),b)},Za:function(a,b,c){if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=I[c+4*e>>2],d[e+1]=
I[c+(4*e+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);X.uniform2fv(Y(a),d)},Xa:function(a,b,c){if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2],d[e+2]=I[c+(4*e+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);X.uniform3fv(Y(a),d)},Wa:function(a,b,c){if(72>=b){var d=Z[4*b-1],e=I;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=I.subarray(c>>2,c+16*b>>2);X.uniform4fv(Y(a),d)},Va:function(a,b,c,d){if(18>=b){var e=Z[16*b-1],h=I;d>>=
2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=I.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(Y(a),!!c,e)},h:function(a){a=U[a];X.useProgram(a);X.fc=a},ab:function(a,b){X.vertexAttribDivisor(a,b)},bb:function(a,b,c,d,e,h){X.vertexAttribPointer(a,b,c,!!d,e,h)},p:function(a,
b,c,d){X.viewport(a,b,c,d)},La:function(){f.Yb=function(a){0!=Fb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.Yb)},Ka:function(){f.cc=function(a){a=a.clipboardData.getData("text");ka("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.cc)},Ja:function(a){f.vc=[];a=G(a);a=document.getElementById(a);f.Zb=function(b){b.stopPropagation();b.preventDefault()};f.$b=function(b){b.stopPropagation();b.preventDefault()};f.ac=function(b){b.stopPropagation();
b.preventDefault()};f.bc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Pb=c;Gb(c.length);var d;for(d=0;d<c.length;d++)ka("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Hb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.Zb,!1);a.addEventListener("dragleave",f.$b,!1);a.addEventListener("dragover",f.ac,!1);a.addEventListener("drop",f.bc,!1)},xa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},Ha:function(){var a=
document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ib()});document.body.append(a)},na:function(a){return 0>a||a>=f.Pb.length?0:f.Pb[a].size},ga:function(a,b,c,d,e){var h=new FileReader;h.onload=function(g){g=g.target.result;g.byteLength>d?Jb(a,0,1,b,0,c,d,e):(F.set(new Uint8Array(g),c),Jb(a,1,0,b,g.byteLength,c,d,e))};h.onerror=function(){Jb(a,0,2,b,0,c,d,e)};h.readAsArrayBuffer(f.Pb[a])},Ga:function(){document.getElementById("_sokol_app_input_element").focus()},
ib:function(a){a=G(a);f.Hb=document.getElementById(a);f.Hb||console.log("sokol_app.h: invalid target:"+a);f.Hb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ea:function(){window.removeEventListener("beforeunload",f.Yb)},Da:function(){window.removeEventListener("paste",f.cc)},Ca:function(a){a=G(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.Zb);a.removeEventListener("dragleave",f.$b);a.removeEventListener("dragover",f.ac);a.removeEventListener("drop",
f.bc)},Ia:function(){f.Hb&&f.Hb.requestPointerLock&&f.Hb.requestPointerLock()},ua:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(F.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},Fa:function(){document.getElementById("_sokol_app_input_element").blur()},hb:function(){for(var a=(new URLSearchParams(window.location.search)).entries(),
b=a.next();!b.done;b=a.next())ka("_sargs_add_kvp",["string","string"],[b.value[0],b.value[1]])},Ya:function(a,b,c,d,e,h){b=G(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var n=new Uint8Array(g.response),q=n.length;q<=h?(F.set(n,e),Kb(a,d,q)):Lb(a)}else Mb(a,this.status)};g.send()},Qa:function(a,b){b=G(b);
var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Nb(a,d)}else Mb(a,this.status)};c.send()}};
(function(){function a(e){f.asm=e.exports;ha=f.asm.jb;e=ha.buffer;f.HEAP8=la=new Int8Array(e);f.HEAP16=ra=new Int16Array(e);f.HEAP32=H=new Int32Array(e);f.HEAPU8=F=new Uint8Array(e);f.HEAPU16=sa=new Uint16Array(e);f.HEAPU32=ta=new Uint32Array(e);f.HEAPF32=I=new Float32Array(e);f.HEAPF64=J=new Float64Array(e);ua=f.asm.zb;wa.unshift(f.asm.kb);K--;f.monitorRunDependencies&&f.monitorRunDependencies(K);0==K&&(null!==Ba&&(clearInterval(Ba),Ba=null),L&&(e=L,L=null,e()))}function b(e){a(e.instance)}function c(e){return Fa().then(function(h){return WebAssembly.instantiate(h,
d)}).then(function(h){return h}).then(e,function(h){B("failed to asynchronously prepare wasm: "+h);A(h)})}var d={a:Ob};K++;f.monitorRunDependencies&&f.monitorRunDependencies(K);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return B("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return C||"function"!==typeof WebAssembly.instantiateStreaming||Ca()||M.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(M,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,
d).then(b,function(h){B("wasm streaming compile failed: "+h);B("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.kb).apply(null,arguments)};var S=f._malloc=function(){return(S=f._malloc=f.asm.lb).apply(null,arguments)},Ib=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Ib=f.__sapp_emsc_notify_keyboard_hidden=f.asm.mb).apply(null,arguments)};
f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.nb).apply(null,arguments)};var Fb=f.__sapp_html5_get_ask_leave_site=function(){return(Fb=f.__sapp_html5_get_ask_leave_site=f.asm.ob).apply(null,arguments)},Gb=f.__sapp_emsc_begin_drop=function(){return(Gb=f.__sapp_emsc_begin_drop=f.asm.pb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.qb).apply(null,arguments)};
var Hb=f.__sapp_emsc_end_drop=function(){return(Hb=f.__sapp_emsc_end_drop=f.asm.rb).apply(null,arguments)},Jb=f.__sapp_emsc_invoke_fetch_cb=function(){return(Jb=f.__sapp_emsc_invoke_fetch_cb=f.asm.sb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.tb).apply(null,arguments)};f.__sargs_add_kvp=function(){return(f.__sargs_add_kvp=f.asm.ub).apply(null,arguments)};
var Nb=f.__sfetch_emsc_head_response=function(){return(Nb=f.__sfetch_emsc_head_response=f.asm.vb).apply(null,arguments)},Kb=f.__sfetch_emsc_get_response=function(){return(Kb=f.__sfetch_emsc_get_response=f.asm.wb).apply(null,arguments)},Mb=f.__sfetch_emsc_failed_http_status=function(){return(Mb=f.__sfetch_emsc_failed_http_status=f.asm.xb).apply(null,arguments)},Lb=f.__sfetch_emsc_failed_buffer_too_small=function(){return(Lb=f.__sfetch_emsc_failed_buffer_too_small=f.asm.yb).apply(null,arguments)},ma=
f.stackSave=function(){return(ma=f.stackSave=f.asm.Ab).apply(null,arguments)},na=f.stackRestore=function(){return(na=f.stackRestore=f.asm.Bb).apply(null,arguments)},D=f.stackAlloc=function(){return(D=f.stackAlloc=f.asm.Cb).apply(null,arguments)},Pb;function ea(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Qb(){Pb||Rb();Pb||(L=Qb)};
function Rb(a){function b(){if(!Pb&&(Pb=!0,f.calledRun=!0,!ia)){Ga(wa);Ga(xa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Sb){var c=a,d=f._main;c=c||[];var e=c.length+1,h=D(4*(e+1));H[h>>2]=qa(ba);for(var g=1;g<e;g++)H[(h>>2)+g]=qa(c[g-1]);H[(h>>2)+e]=0;try{var m=d(e,h);if(!(noExitRuntime||0<fa)){if(f.onExit)f.onExit(m);ia=!0}r(m,new ea(m))}catch(n){n instanceof ea||"unwind"==n||r(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),
za.unshift(c);Ga(za)}}a=a||aa;if(!(0<K)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Aa();Ga(va);0<K||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Rb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Sb=!0;f.noInitialRun&&(Sb=!1);Rb();
