(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{138:function(e,t,n){"use strict";var a=Array.isArray,r=Object.keys,o=Object.prototype.hasOwnProperty;e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var s,i,l,c=a(t),u=a(n);if(c&&u){if((i=t.length)!=n.length)return!1;for(s=i;0!=s--;)if(!e(t[s],n[s]))return!1;return!0}if(c!=u)return!1;var p=t instanceof Date,m=n instanceof Date;if(p!=m)return!1;if(p&&m)return t.getTime()==n.getTime();var d=t instanceof RegExp,f=n instanceof RegExp;if(d!=f)return!1;if(d&&f)return t.toString()==n.toString();var g=r(t);if((i=g.length)!==r(n).length)return!1;for(s=i;0!=s--;)if(!o.call(n,g[s]))return!1;for(s=i;0!=s--;)if(!e(t[l=g[s]],n[l]))return!1;return!0}return t!=t&&n!=n}},139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=i(n(575)),o=i(n(576)),s=i(n(578));function i(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=(0,r.default)();if(l||(l=(0,o.default)(i)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=s.default.proxyEvents(i);var c=new Promise(function(n){"object"===(void 0===e?"undefined":a(e))&&e.playVideo instanceof Function?n(e):l.then(function(a){var r=new a.Player(e,t);return i.on("ready",function(){n(r)}),null})}),u=s.default.promisifyPlayer(c,n);return u.on=i.on,u.off=i.off,u},e.exports=t.default},574:function(e,t,n){__NEXT_REGISTER_PAGE("/startups/code-du-travail-numerique/droit-libre",function(){return e.exports=n(602),{page:e.exports.default}})},575:function(e,t,n){"use strict";var a;
/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/a=function(){var e={},t={};return e.on=function(e,n){var a={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(a),a},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var a,r=t[e];if(r)for(a=r.length;a--;)r[a].handler(n)},e},e.exports=a},576:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(577),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(e){return new Promise(function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,o.default)(n+"//www.youtube.com/iframe_api",function(t){t&&e.trigger("error",t)});var a=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){a&&a(),t(window.YT)}}})},e.exports=t.default},577:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function a(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,r){var o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");"function"==typeof t&&(r=t,t={}),t=t||{},r=r||function(){},s.type=t.type||"text/javascript",s.charset=t.charset||"utf8",s.async=!("async"in t)||!!t.async,s.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(s,t.attrs),t.text&&(s.text=""+t.text),("onload"in s?n:a)(s,r),s.onload||n(s,r),o.appendChild(s)}},578:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(579)),r=i(n(582)),o=i(n(583)),s=i(n(584));function i(e){return e&&e.__esModule?e:{default:e}}var l=(0,a.default)("youtube-player"),c={proxyEvents:function(e){var t={},n=function(n){var a="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[a]=function(t){l('event "%s"',a,t),e.trigger(n,t)}},a=!0,r=!1,s=void 0;try{for(var i,c=o.default[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){n(i.value)}}catch(e){r=!0,s=e}finally{try{!a&&c.return&&c.return()}finally{if(r)throw s}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},a=function(a){t&&s.default[a]?n[a]=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.then(function(e){var t=s.default[a],r=e.getPlayerState(),o=e[a].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(r)?new Promise(function(n){e.addEventListener("onStateChange",function a(){var r=e.getPlayerState(),o=void 0;"number"==typeof t.timeout&&(o=setTimeout(function(){e.removeEventListener("onStateChange",a),n()},t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(r)&&(e.removeEventListener("onStateChange",a),clearTimeout(o),n())})}).then(function(){return o}):o})}:n[a]=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.then(function(e){return e[a].apply(e,n)})}},o=!0,i=!1,l=void 0;try{for(var c,u=r.default[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){a(c.value)}}catch(e){i=!0,l=e}finally{try{!o&&u.return&&u.return()}finally{if(i)throw l}}return n}};t.default=c,e.exports=t.default},579:function(e,t,n){(function(a){function r(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==a&&"env"in a&&(e=a.env.DEBUG),e}(t=e.exports=n(580)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var a="color: "+this.color;e.splice(1,0,a,"color: inherit");var r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(r++,"%c"===e&&(o=r))}),e.splice(o,0,a)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(r())}).call(this,n(126))},580:function(e,t,n){var a;function r(e){function n(){if(n.enabled){var e=n,r=+new Date,o=r-(a||r);e.diff=o,e.prev=a,e.curr=r,a=r;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var l=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,a){if("%%"===n)return n;l++;var r=t.formatters[a];if("function"==typeof r){var o=s[l];n=r.call(e,o),s.splice(l,1),l--}return n}),t.formatArgs.call(e,s),(n.log||t.log||console.log.bind(console)).apply(e,s)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,a=0;for(n in e)a=(a<<5)-a+e.charCodeAt(n),a|=0;return t.colors[Math.abs(a)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),a=n.length,r=0;r<a;r++)n[r]&&("-"===(e=n[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,a;for(n=0,a=t.skips.length;n<a;n++)if(t.skips[n].test(e))return!1;for(n=0,a=t.names.length;n<a;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(581),t.names=[],t.skips=[],t.formatters={}},581:function(e,t){var n=1e3,a=60*n,r=60*a,o=24*r,s=365.25*o;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var l,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return i*s;case"days":case"day":case"d":return i*o;case"hours":case"hour":case"hrs":case"hr":case"h":return i*r;case"minutes":case"minute":case"mins":case"min":case"m":return i*a;case"seconds":case"second":case"secs":case"sec":case"s":return i*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===c&&!1===isNaN(e))return t.long?i(l=e,o,"day")||i(l,r,"hour")||i(l,a,"minute")||i(l,n,"second")||l+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=a)return Math.round(e/a)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},582:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},583:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},584:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(585),o=(a=r)&&a.__esModule?a:{default:a};t.default={pauseVideo:{acceptableStates:[o.default.ENDED,o.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[o.default.ENDED,o.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[o.default.ENDED,o.default.PLAYING,o.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},602:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1),s=n(3),i=n(2),l=n.n(i),c=n(138),u=n.n(c),p=n(139),m=n.n(p),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function g(e){return f({},e,{playerVars:f({},e.playerVars,{autoplay:0,start:0,end:0})})}var y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onPlayerReady=function(e){return n.props.onReady(e)},n.onPlayerError=function(e){return n.props.onError(e)},n.onPlayerStateChange=function(e){switch(n.props.onStateChange(e),e.data){case t.PlayerState.ENDED:n.props.onEnd(e);break;case t.PlayerState.PLAYING:n.props.onPlay(e);break;case t.PlayerState.PAUSED:n.props.onPause(e)}},n.onPlayerPlaybackRateChange=function(e){return n.props.onPlaybackRateChange(e)},n.onPlayerPlaybackQualityChange=function(e){return n.props.onPlaybackQualityChange(e)},n.createPlayer=function(){if("undefined"!=typeof document){var e=f({},n.props.opts,{videoId:n.props.videoId});n.internalPlayer=m()(n.container,e),n.internalPlayer.on("ready",n.onPlayerReady),n.internalPlayer.on("error",n.onPlayerError),n.internalPlayer.on("stateChange",n.onPlayerStateChange),n.internalPlayer.on("playbackRateChange",n.onPlayerPlaybackRateChange),n.internalPlayer.on("playbackQualityChange",n.onPlayerPlaybackQualityChange)}},n.resetPlayer=function(){return n.internalPlayer.destroy().then(n.createPlayer)},n.updatePlayer=function(){n.internalPlayer.getIframe().then(function(e){n.props.id?e.setAttribute("id",n.props.id):e.removeAttribute("id"),n.props.className?e.setAttribute("class",n.props.className):e.removeAttribute("class")})},n.updateVideo=function(){if(void 0!==n.props.videoId&&null!==n.props.videoId){var e=!1,t={videoId:n.props.videoId};"playerVars"in n.props.opts&&(e=1===n.props.opts.playerVars.autoplay,"start"in n.props.opts.playerVars&&(t.startSeconds=n.props.opts.playerVars.start),"end"in n.props.opts.playerVars&&(t.endSeconds=n.props.opts.playerVars.end)),e?n.internalPlayer.loadVideoById(t):n.internalPlayer.cueVideoById(t)}else n.internalPlayer.stopVideo()},n.refContainer=function(e){n.container=e},n.container=null,n.internalPlayer=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),d(t,[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(e){(function(e,t){return e.id!==t.id||e.className!==t.className})(e,this.props)&&this.updatePlayer(),function(e,t){return!u()(g(e.opts),g(t.opts))}(e,this.props)&&this.resetPlayer(),function(e,t){if(e.videoId!==t.videoId)return!0;var n=e.opts.playerVars||{},a=t.opts.playerVars||{};return n.start!==a.start||n.end!==a.end}(e,this.props)&&this.updateVideo()}},{key:"componentWillUnmount",value:function(){this.internalPlayer.destroy()}},{key:"render",value:function(){return r.a.createElement("div",{className:this.props.containerClassName},r.a.createElement("div",{id:this.props.id,className:this.props.className,ref:this.refContainer}))}}]),t}();y.propTypes={videoId:l.a.string,id:l.a.string,className:l.a.string,containerClassName:l.a.string,opts:l.a.objectOf(l.a.any),onReady:l.a.func,onError:l.a.func,onPlay:l.a.func,onPause:l.a.func,onEnd:l.a.func,onStateChange:l.a.func,onPlaybackRateChange:l.a.func,onPlaybackQualityChange:l.a.func},y.defaultProps={id:null,className:null,opts:{},containerClassName:"",onReady:function(){},onError:function(){},onPlay:function(){},onPause:function(){},onEnd:function(){},onStateChange:function(){},onPlaybackRateChange:function(){},onPlaybackQualityChange:function(){}},y.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var h=y;function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function E(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function w(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"meta",function(){return T}),n.d(t,"default",function(){return M});var T={title:"Ecosystème du droit libre",date:"24 Janvier 2019"},M=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=w(this,D(t).call(this,e))).layout=null,n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components;b(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(s.m,{meta:T},r.a.createElement(o.MDXTag,{name:"h1",components:t},"L'écosystème du droit libre"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Que ce soit pour proposer aux usagers de consulter les textes de lois, ou de pouvoir travailler sur les données pour en extraire de la ",r.a.createElement(o.MDXTag,{name:"strong",components:t,parentName:"p"},"sémantique"),", l'équipe du Code du Travail numérique doit disposer des textes de lois au format brut."),r.a.createElement(o.MDXTag,{name:"h2",components:t},"DILA"),r.a.createElement(o.MDXTag,{name:"p",components:t},"La référence en matière de distribution des textes de lois est le site ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://legifrance.gouv.fr"}},"Légifrance"),", édité par ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.dila.premier-ministre.gouv.fr/"}},"la DILA")," : La direction de l'information légale et administrative, qui y publie des contenus certifiés. En 2019, le site fait peau neuve, et ",r.a.createElement(o.MDXTag,{name:"strong",components:t,parentName:"p"},"une API")," sera mise à disposition (en 2020) pour pouvoir récupérer les données brutes, ce qui permettra à des tiers d'intégrer ces contenus certifiés directement dans leurs produits."),r.a.createElement(h,{videoId:"G-vuFuC6hMo",opts:{height:"390",width:"640",playerVars:{autoplay:0}}}),r.a.createElement(o.MDXTag,{name:"p",components:t},"C'est le cas pour le ",r.a.createElement(o.MDXTag,{name:"strong",components:t,parentName:"p"},"Code du Travail numérique")," qui intégrera les contenus officiels dans son moteur de rercherche."),r.a.createElement(o.MDXTag,{name:"p",components:t},"En attendant l'API, ces bases sont publiées en OpenData sur ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://data.gouv.fr"}},"data.gouv.fr")),r.a.createElement(o.MDXTag,{name:"p",components:t},"Dans le domaine du droit du Travail, trois bases de données publiques nous intéressent particulièrement :"),r.a.createElement(o.MDXTag,{name:"h4",components:t},"La base LEGI"),r.a.createElement(o.MDXTag,{name:"p",components:t},"▶️ ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.data.gouv.fr/fr/datasets/legi-codes-lois-et-reglements-consolides/"}},"télécharger LEGI sur data.gouv.fr")),r.a.createElement(o.MDXTag,{name:"p",components:t},"La base LEGI est exhaustive pour toutes les lois, décrets-lois, ordonnances, décrets depuis 1945, soit 73 codes officiels en vigueur consolidés +29 abrogés. La base contient chaque texte, toutes ses versions historiques, ainsi que les liens entre les articles, ce qui en fait une base incontournable pour qui veut disséquer ces textes."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Cette base est mise à jour quotidiennent vers 21h et contient plus de 2 millions de fichiers XML"),r.a.createElement(o.MDXTag,{name:"h4",components:t},"La base KALI"),r.a.createElement(o.MDXTag,{name:"p",components:t},"▶️ ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.data.gouv.fr/fr/datasets/kali-conventions-collectives-nationales/"}},"télécharger KALI sur data.gouv.fr")),r.a.createElement(o.MDXTag,{name:"p",components:t},"La base KALI contient toutes les conventions collectives et textes associés (accords, salaires et arrétés d'extension)."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Cette base contient plus de 200.000 fichiers XML."),r.a.createElement(o.MDXTag,{name:"h4",components:t},"Les fiches service-public.fr"),r.a.createElement(o.MDXTag,{name:"p",components:t},"▶️ ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.data.gouv.fr/fr/datasets/service-public-fr-guide-vos-droits-et-demarches-particuliers/"}},"télécharger sur data.gouv.fr")),r.a.createElement(o.MDXTag,{name:"p",components:t},"Le site ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://service-public.fr"}},"service-public.fr")," met à disposition en OpenData toutes les fiches éditoriales publiées sur son site, avec une grande richesse de méta-données. Environ 800 fiches permettent d'addresser le sujet du droit du travail."),r.a.createElement(o.MDXTag,{name:"h2",components:t},"Regards citoyens"),r.a.createElement(o.MDXTag,{name:"p",components:t},"L'association regards citoyens, prolifique dans le domaine de l'Open Data, l'Open Source, et la transparence de la vie publique, met à disposition de nombreux outils permettant d'exploiter les données des sites ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://legifrance.gouv.fr"}},"Légifrance"),", ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://assemblee-nationale.fr"}},"assemblee-nationale.fr"),", ou ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://senat.fr"}},"senat.fr"),"."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Grâce au travail de ses membres, les citoyens peuvent obtenir une meilleure information sur la vie politique :"),r.a.createElement(o.MDXTag,{name:"ul",components:t},r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.lafabriquedelaloi.fr"}},"La fabrique de la loi")," : suivre l'évolution de la loi au fil de la procédure parlementaire."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://nosdeputes.fr"}},"Nos députés")," : comprendre et analyser le travail des députés."),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://www.regardscitoyens.org"}},"Regards Citoyens")," : présentation de l'association.")),r.a.createElement(o.MDXTag,{name:"p",components:t},"Regards citoyens fournit également de nombreuses contributions en Open Source comme des scrappers et des analyseurs : ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/regardscitoyens"}},"github.com/regardscitoyens")),r.a.createElement(o.MDXTag,{name:"h2",components:t},"Parlement Ouvert"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Sur l'initiative de la députée ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://twitter.com/PaulaForteza"}},"Paula Fortezza"),", le palais Bourbon ouvre ses portes toutes les vendredis pour accueillir toute personne ayant un projet d’ouverture du Parlement par le numérique ou souhaitant contribuer à de tels projets. Pour participer, il suffit de vous inscrire sur ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://parlement-ouvert.fr"}},"parlement-ouvert.fr"),"."),r.a.createElement(o.MDXTag,{name:"p",components:t},"De nombreux outils libres sont issus de ces rencontres : ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://framagit.org/parlement-ouvert"}},"framagit.org/parlement-ouvert")),r.a.createElement(o.MDXTag,{name:"h2",components:t},"Legilibre"),r.a.createElement(o.MDXTag,{name:"p",components:t},"L’association ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://legilibre.fr"}},"Légilibre")," a pour objet de promouvoir et de démocratiser l’accès à l’information légale et administrative."),r.a.createElement(o.MDXTag,{name:"p",components:t},"À cette fin, elle organise le développement de logiciels libres et héberge des services basés sur ces derniers."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Plusieurs projets intéressants sont issus de cette communauté :"),r.a.createElement(o.MDXTag,{name:"ul",components:t},r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/legilibre/legi.py"}},"legi.py")," : permet de télécharger, normaliser et convertir la base de données LEGI au format SQLite"),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://archeo-lex.fr/"}},"Archeo-Lex")," : Toute la loi sous GIT"),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/Legilibre/DuraLex"}},"Duralex/SedLex")," : calcule les modifications d'un amendement sur les textes de loi"),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"http://anomalies.legilibre.fr"}},"anomalies.legilibre.fr")," : permet de détecter les anomalies dans la base LEGI"),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://legi.now.sh"}},"legiXplore")," : permet d'explorer les codes de la loi")),r.a.createElement(o.MDXTag,{name:"h2",components:t},"Open Law"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Espace de travail et d’expérimentation pour l’ensemble des acteurs du monde du droit prêts à innover dans un mode collaboratif et ouvert."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Rencontres régulières de la #LegalTech: ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.meetup.com/fr-FR/Open-Law/"}},"https://www.meetup.com/fr-FR/Open-Law/")),r.a.createElement(o.MDXTag,{name:"ul",components:t},r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://droit.org"}},"https://droit.org")," : mise à disposition des textes"),r.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://framagit.org/OpenLawFr/"}},"https://framagit.org/OpenLawFr/"))),r.a.createElement(o.MDXTag,{name:"h2",components:t},"A suivre !"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Vous avez d'autres ressources sur le droit libre ? ",r.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/SocialGouv/socialgouv.github.io/edit/dev/pages/startups/code-du-travail-numerique/droit-libre.mdx"}},"Editez cet article sur GitHub")),r.a.createElement(o.MDXTag,{name:"p",components:t},"Des questions, idées pour améliorer le code du travail numérique ?")))}}])&&E(n.prototype,a),i&&E(n,i),t}()}},[[574,1,0]]]);