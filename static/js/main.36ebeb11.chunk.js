(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{135:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(25),c=a.n(r),s=a(7),o=a(8),l=a(10),u=a(9),d=a(3),h={home:"/react_project_cinema",queue:"/queue",watched:"/watched"},p=a(6),j=a(41),g=a.n(j),v=a(0),b=function(e){e.href;return Object(v.jsx)(n.Fragment,{children:Object(v.jsx)(p.c,{className:g.a.logoIMG,to:h.home,children:"ex-fs.net"})})},m=a(43),O=a(4),f=a.n(O),x=(a(79),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=h.home,t=h.queue,a=h.watched,i=this.props.onConfiguration;return this.props.onWidth<768?Object(v.jsx)(m.elastic,{right:!0,children:Object(v.jsxs)("ul",{className:f.a.wrapNav,children:[Object(v.jsx)("li",{className:f.a.HeaderMenuHome,children:Object(v.jsx)(p.c,{exact:!0,activeClassName:f.a.menuIsActiv,to:e,children:"HOME"})}),Object(v.jsx)("li",{className:f.a.HeaderMenu,children:Object(v.jsx)(p.c,{to:e,children:"My Libbary"})}),Object(v.jsxs)("div",{className:f.a.hiddenHeaderMenu,children:[Object(v.jsx)(p.c,{activeClassName:f.a.menuIsActiv,to:{pathname:a,state:{configuration:i}},children:"Watched"}),Object(v.jsx)(p.c,{activeClassName:f.a.menuIsActiv,to:{pathname:t,state:{configuration:i}},children:"Queue"})]})]})}):Object(v.jsx)(n.Fragment,{children:Object(v.jsxs)("ul",{className:f.a.wrapNav,children:[Object(v.jsx)("li",{className:f.a.HeaderMenuHome,children:Object(v.jsx)(p.c,{exact:!0,activeClassName:f.a.menuIsActiv,to:e,children:"HOME"})}),Object(v.jsx)("li",{className:f.a.HeaderMenu,children:Object(v.jsx)("a",{href:"./",children:"My Libbary"})}),Object(v.jsxs)("div",{className:f.a.hiddenHeaderMenu,children:[Object(v.jsx)(p.c,{activeClassName:f.a.menuIsActiv,to:{pathname:a,state:{configuration:i}},children:"Watched"}),Object(v.jsx)(p.c,{activeClassName:f.a.menuIsActiv,to:{pathname:t,state:{configuration:i}},children:"Queue"})]})]})})}}]),a}(i.a.Component)),_=a(28),w=a(44),y=a.n(w);a(95),a(96);function M(e){var t=e.backdrop_path;return Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:t,alt:""})})}var S=a(14),N=a.n(S),I=function(e){var t=e.id,a=e.poster_path,n=e.title,i=e.popularity,r=e.release_date,c=e.configuration;n=n.length>26?n.slice(0,26)+"...":n,a=a?c.base_url+c.poster_sizes[4]+a:"https://image.freepik.com/free-vector/man-sitting-on-big-question-mark-symbol_24381-1192.jpg";return Object(v.jsxs)("li",{className:N.a.mainLI,children:[Object(v.jsxs)("div",{className:N.a.containerIMG,children:[Object(v.jsx)("button",{className:N.a.svgBtn,onClick:function(){var e=JSON.parse(localStorage.getItem("queue"))||[];e.push({id:t,poster_path:a,title:n,popularity:i,release_date:r}),localStorage.setItem("queue",JSON.stringify(e))},children:Object(v.jsx)("svg",{className:N.a.queueBTN,children:Object(v.jsx)("path",{d:"M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12z"})})}),Object(v.jsx)("a",{href:h.home,children:Object(v.jsx)("img",{className:N.a.mainIMG,src:a,alt:n})})]}),Object(v.jsx)("p",{className:N.a.title,children:Object(v.jsx)("a",{onClick:function(){var e=JSON.parse(localStorage.getItem("watched"))||[];e.push({id:t,poster_path:a,title:n,popularity:i,release_date:r}),localStorage.setItem("watched",JSON.stringify(e))},href:h.home,children:n})}),Object(v.jsxs)("p",{children:["Popularity: ",i]}),Object(v.jsxs)("p",{children:["Release: ",r]})]})},C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).settings={dots:!1,infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,speed:2e3,autoplaySpeed:1,focusOnSelect:!0,pauseOnHover:!0,accessibility:!0},e.getCollectionMovies=function(){console.log(e.props.arrMovies),console.log(e.props.onHandleSubmit)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.arrMovies,a=e.configuration;return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:N.a.containerSlider,children:Object(v.jsx)(y.a,Object(_.a)(Object(_.a)({},this.settings),{},{children:t.map((function(e){var t=e.id,n=e.backdrop_path;return n&&Object(v.jsx)(M,{backdrop_path:a.base_url+a.poster_sizes[4]+n},t)}))}))}),Object(v.jsx)("div",{className:N.a.mainTrending,children:Object(v.jsx)("div",{className:N.a.items,children:Object(v.jsx)("ul",{className:N.a.itemsWrap,children:t.map((function(e){var t=e.id,n=e.poster_path,i=e.title,r=e.popularity,c=e.release_date;return Object(v.jsx)(I,{id:t,poster_path:n,title:i,popularity:r,release_date:c,configuration:a},t)}))})})})]})}}]),a}(n.Component);I.defaultProps={title:"???",popularity:"???",release_date:"???"};var k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={width:window.innerWidth,localStorageQueueArr:[],arrMov:[],configuration:{}},e.updSize=function(){e.setState({width:window.innerWidth})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updSize);var e=localStorage.getItem("queue");e&&this.setState({arrMov:JSON.parse(e)});var t=this.props.location.state.configuration;this.setState({configuration:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updSize)}},{key:"render",value:function(){var e=this.state,t=e.width,a=e.arrMov,n=e.configuration;return Object(v.jsxs)("div",{children:[Object(v.jsx)("header",{children:Object(v.jsxs)("div",{className:f.a.wrapHeader,children:[Object(v.jsx)(b,{}),Object(v.jsx)(x,{onWidth:t})]})}),Object(v.jsx)("main",{children:0!==a.length&&Object(v.jsx)(C,{arrMovies:a,configuration:n})})]})}}]),a}(n.Component),H=a(45),z=a.n(H),T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={inputValue:""},e.handleSubmit=function(t){t.preventDefault(),e.props.onRenderSearchRequest(e.state.inputValue,1),e.setState({inputValue:""})},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.inputValue;return Object(v.jsx)(n.Fragment,{children:Object(v.jsx)("form",{className:z.a.searchForm,onSubmit:this.handleSubmit,children:Object(v.jsx)("input",{type:"text",name:"query",value:e,onChange:this.handleChange,placeholder:"Quick search..."})})})}}]),a}(n.Component),L=a(18),q=a(21),A=a.n(q),D=function(e,t){return L.searchRequestURL+L.API_KEY+"&query=".concat(t,"&page=").concat(e)},W={axiosSearchRequest:function(e,t){localStorage.setItem("search",e);var a=D(t,e);return A.a.get(a)},axiosGetConfiguration:function(){return A.a.get(L.configurationURL+L.API_KEY)},axiosLoadTrend:function(e){var t=function(e){return L.trendingURL+L.API_KEY+"&page="+e}(e);return A.a.get(t,{})}},R=a(46),P=a.n(R),E=(a(133),a(47)),G=a.n(E);function F(){return Object(v.jsx)("div",{className:G.a.spinner,children:Object(v.jsx)(P.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})})}var J=a(48),U=a.n(J),V=(a(40),a(49)),B=a.n(V),Y=a(50),K=a.n(Y),Q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={galleryMovies:[],loading:!0,width:window.innerWidth},e.configuration={},e.pagesData={page:1,total_pages:0},e.updSize=function(){e.setState({width:window.innerWidth})},e.scroll=function(){window.scrollTo({top:0,behavior:"smooth"})},e.loadSearchMovies=function(t,a){e.setState({loading:!0}),e.pagesData.page=a,W.axiosSearchRequest(t,a).then((function(t){e.pagesData.total_pages=t.data.total_pages,e.setState((function(){return{galleryMovies:t.data.results}}))})).finally((function(){e.setState({loading:!1})})),e.scroll()},e.changeCurrentPage=function(t){e.pagesData.page=t;var a=localStorage.getItem("search");a?e.loadSearchMovies(a,e.pagesData.page):e.loadGalleryMovies()},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){localStorage.setItem("search",""),this.getConfiguration(),this.loadGalleryMovies()}},{key:"componentDidUpdate",value:function(){window.addEventListener("resize",this.updSize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updSize)}},{key:"getConfiguration",value:function(){var e=this;return W.axiosGetConfiguration().then((function(t){return e.configuration=t.data.images}))}},{key:"loadGalleryMovies",value:function(){var e=this;this.setState({loading:!0}),W.axiosLoadTrend(this.pagesData.page).then((function(t){e.pagesData.total_pages=t.data.total_pages,e.setState((function(){return{galleryMovies:t.data.results}}))})).finally((function(){e.setState({loading:!1})})),this.scroll()}},{key:"render",value:function(){var e=this.state,t=e.galleryMovies,a=e.width,i=e.loading;return Object(v.jsxs)(n.Fragment,{children:[Object(v.jsx)("header",{children:Object(v.jsxs)("div",{className:f.a.wrapHeader,children:[Object(v.jsx)(b,{}),Object(v.jsx)(x,{onWidth:a,onConfiguration:this.configuration}),Object(v.jsx)(T,{onRenderSearchRequest:this.loadSearchMovies})]})}),Object(v.jsx)("main",{children:Object(v.jsxs)("div",{className:K.a.wrapMain,children:[!i&&Object(v.jsx)(C,{arrMovies:t,configuration:this.configuration,onWidth:a}),i&&Object(v.jsx)(F,{}),Object(v.jsx)("div",{className:B.a.pagination_box,children:Object(v.jsx)(U.a,{currentPage:this.pagesData.page,totalSize:10*this.pagesData.total_pages,sizePerPage:10,changeCurrentPage:this.changeCurrentPage,theme:"bootstrap"})})]})}),Object(v.jsx)("footer",{})]})}}]),a}(n.Component),X=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={width:window.innerWidth,localStorageQueueArr:[],arrMov:[],configuration:{}},e.updSize=function(){e.setState({width:window.innerWidth})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updSize);var e=localStorage.getItem("watched");e&&this.setState({arrMov:JSON.parse(e)});var t=this.props.location.state.configuration;this.setState({configuration:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updSize)}},{key:"render",value:function(){var e=this.state,t=e.width,a=e.arrMov,n=e.configuration;return Object(v.jsxs)("div",{children:[Object(v.jsx)("header",{children:Object(v.jsxs)("div",{className:f.a.wrapHeader,children:[Object(v.jsx)(b,{}),Object(v.jsx)(x,{onWidth:t})]})}),Object(v.jsx)("main",{children:0!==a.length&&Object(v.jsx)(C,{arrMovies:a,configuration:n})})]})}}]),a}(n.Component),Z=a.p+"static/media/pusheen.6ea98444.jpg",$={container:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},status:{fontSize:46}};function ee(){return Object(v.jsxs)("div",{style:$.container,children:[Object(v.jsx)("h1",{style:$.status,children:"404"}),console.log(Z),Object(v.jsx)("img",{src:Z,alt:"404 page",width:"400"}),Object(v.jsx)("p",{children:Object(v.jsx)(p.b,{to:h.home,children:" HOME"})})]})}a(134);var te=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(v.jsx)(n.Fragment,{children:Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{path:h.home,exact:!0,component:Q}),Object(v.jsx)(d.a,{path:h.queue,component:k}),Object(v.jsx)(d.a,{path:h.watched,component:X}),Object(v.jsx)(d.a,{component:ee})]})})}}]),a}(n.Component);c.a.render(Object(v.jsx)(p.a,{children:Object(v.jsx)(te,{})}),document.querySelector("#root"))},14:function(e,t,a){e.exports={containerSlider:"TrendingMovies_containerSlider__2g7ra",mainTrending:"TrendingMovies_mainTrending__3zYxW",itemsWrap:"TrendingMovies_itemsWrap__2sPDa",mainLI:"TrendingMovies_mainLI__W0X7d",containerIMG:"TrendingMovies_containerIMG__2jTmE",items:"TrendingMovies_items__1YlDp",title:"TrendingMovies_title__62lOi",load_more:"TrendingMovies_load_more__2xCXV",svgBtn:"TrendingMovies_svgBtn__Nj_Z-",queueBTN:"TrendingMovies_queueBTN__2TX78"}},18:function(e){e.exports=JSON.parse('{"API_KEY":"?api_key=1cd465b7a64b6b5614a6c0670e5663f3","trendingURL":"https://api.themoviedb.org/3/trending/all/week","configurationURL":"https://api.themoviedb.org/3/configuration","searchRequestURL":"https://api.themoviedb.org/3/search/movie"}')},4:function(e,t,a){e.exports={wrapHeader:"Navigation_wrapHeader__XjwrI",wrapNav:"Navigation_wrapNav__3dR5H",HeaderMenu:"Navigation_HeaderMenu__2zyer",HeaderMenuHome:"Navigation_HeaderMenuHome__1gAnP",hiddenHeaderMenu:"Navigation_hiddenHeaderMenu__3Lpaw",menuIsActiv:"Navigation_menuIsActiv__p3tiJ"}},41:function(e,t,a){e.exports={logoIMG:"Logo_logoIMG__37ND5"}},45:function(e,t,a){e.exports={searchForm:"Search_searchForm__3KM1C"}},47:function(e,t,a){e.exports={spinner:"Spinner_spinner__2O3pz"}},49:function(e,t,a){e.exports={pagination_box:"Pagination_pagination_box__3DDvq"}},50:function(e,t,a){e.exports={wrapMain:"Main_wrapMain__3gYk8"}},79:function(e,t,a){}},[[135,1,2]]]);
//# sourceMappingURL=main.36ebeb11.chunk.js.map