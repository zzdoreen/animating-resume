webpackJsonp([1],{40:function(n,e){},41:function(n,e,t){t(87);var r=t(14)(t(48),t(95),"data-v-2df95543",null);n.exports=r.exports},42:function(n,e,t){t(86);var r=t(14)(t(49),t(94),"data-v-2ca90776",null);n.exports=r.exports},43:function(n,e,t){t(85);var r=t(14)(t(46),t(93),"data-v-288975d1",null);n.exports=r.exports},44:function(n,e,t){t(88);var r=t(14)(t(47),t(96),"data-v-b76f4cbc",null);n.exports=r.exports},46:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),u=t(24),a=t.n(u),l=t(42),c=t.n(l),d=t(41),m=t.n(d),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* Forked by https://github.com/jirengu-inc/animating-resume\n* 大家好，我是ZZ\n* 可能是太闲了，发现大佬做的动态简历，觉得很有意思\n* 在GitHub上找到了基于Vue做的这个\n* 然后就拷贝了一份，自己更改了一些\n* 好了，现在就开始写我的简历了！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景敲代码不太习惯，我们来个深色的背景 */\nhtml {\n  color: rgb(222,222,222); background: rgba(0,0,0,.7);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"曾智\n----\n\n进击のweb前端小白，\n目前准大四\n现在目标只想求个offer QAQ [十分卑微]\n\n技能\n----\n\n* 前端开发 （目前只会一个Vue框架，还在学习中）\n* 绘画  （坚持的最久的爱好 从小喜欢 只是喜欢摸鱼，没什么长进）\n* 摄影  （确切的说更喜欢调色调 只会拍风景）\n* MMD   （B站有投稿，但是播放量比较惨淡）\n\n链接\n----\n* [GitHub](https://github.com/zzdoreen)\n\n作品\n----\n*目前打包编译好能看到效果的就只有[音乐播放器](https://zzdoreen.github.io/musicplayer/dist/index#/recommend)\n>跟着视频写的，\n数据接口是用的QQ音乐的，\n但是搜索和歌词的数据接口获取不了所以没有实现歌词显示和搜索功能，\n首页推荐歌单的数据接口的一些关键信息也没有找到QAQ 所以首页推荐歌单内没有内容\n好像还有一些不能拖动的bug，我也不知道怎么解决，先凑合看吧\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=a()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=a()(s.a.mark(function e(){var r,u,a,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:u=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),a=u-r.length,this.currentStyle.length<u?(l=this.currentStyle.length-a,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},47:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),u=t(24),a=t.n(u),l=t(42),c=t.n(l),d=t(41),m=t.n(d),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* Forked by https://github.com/jirengu-inc/animating-resume\n* 大家好，我是ZZ\n* 可能是太闲了，发现大佬做的动态简历，觉得很有意思\n* 在GitHub上找到了基于Vue做的这个\n* 然后就拷贝了一份，自己更改了一些\n* 好了，现在就开始写我的简历了！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景敲代码不太习惯，我们来个深色的背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgba(0,0,0,.7);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 太高了 */\n.styleEditor {\n  height: 45vh;\n}\n/* 代码高亮 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"曾智\n----\n\n进击のweb前端小白，\n目前准大四\n现在目标只想求个offer QAQ [十分卑微]\n\n技能\n----\n\n* 前端开发 （目前只会一个Vue框架，还在学习中）\n* 绘画  （坚持的最久的爱好 从小喜欢 只是喜欢摸鱼，没什么长进）\n* 摄影  （确切的说更喜欢调色调 只会拍风景）\n* MMD   （B站有投稿，但是播放量比较惨淡）\n\n链接\n----\n* [GitHub](https://github.com/zzdoreen)\n\n作品\n----\n*目前打包编译好能看到效果的就只有[音乐播放器](https://zzdoreen.github.io/musicplayer/dist/index#/recommend)\n>跟着视频写的，\n数据接口是用的QQ音乐的，\n但是搜索和歌词的数据接口获取不了所以没有实现歌词显示和搜索功能，\n首页推荐歌单的数据接口的一些关键信息也没有找到QAQ 所以首页推荐歌单内没有内容\n好像还有一些不能拖动的bug，我也不知道怎么解决，先凑合看吧\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=a()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=a()(s.a.mark(function e(){var r,u,a,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:u=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),a=u-r.length,this.currentStyle.length<u?(l=this.currentStyle.length-a,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},48:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(89),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(90),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(45),o=t(43),i=t.n(o),s=t(44),u=t.n(s),a=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(a>500?i.a:u.a)}})},85:function(n,e){},86:function(n,e){},87:function(n,e){},88:function(n,e){},93:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},94:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},95:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.f0c05c99004586593ed6.js.map