function e(){const e=window.innerWidth,t=window.innerHeight,i=e>t,l=(i?t:e)/n.dimensions;n.pixelScale=l<2?l:Math.floor(l);const o=n.dimensions*n.pixelScale;n.element.width=o,n.element.height=o,n.element.style.left=e/2-o/2+"px",n.element.style.top=i?t/2-o/2+"px":"0"}const n={element:null,context:null,dimensions:256,pixelScale:1};function t(){if(!n.element)throw new Error("Please call canvas#init first");return n}!function(t={}){const i={dimensions:256,...t};n.element=document.querySelector("canvas"),n.context=n.element.getContext("2d"),n.dimensions=i.dimensions,e(),window.onresize=e,window.ondeviceorientation=e}(),function e(){!function(e,n,i,l,o){const c=t().pixelScale,s=t().context,a=s.globalAlpha;s.globalAlpha=1,o&&(s.fillStyle=o,s.fillRect(e*c,n*c,i*c,l*c)),s.globalAlpha=a}(4,4,64,128,"#c0ff33"),requestAnimationFrame((()=>{e()}))}();
//# sourceMappingURL=index.c603abda.js.map
