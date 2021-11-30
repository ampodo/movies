(this.webpackJsonpfilms=this.webpackJsonpfilms||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(7),i=c.n(n),r=(c(13),c(0));function l(){return Object(r.jsx)("nav",{className:"indigo lighten-1",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("img",{className:"img",src:"/movies/icons/player.png"}),Object(r.jsx)("a",{href:"#",className:"brand-logo",children:"Movie Library"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/ampodo/",children:"Repository"})})})]})})}function o(){return Object(r.jsx)("footer",{className:"page-footer indigo lighten-1",children:Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/ampodo/",children:"Visit Repo"})]})})})}var h=c(2),j=c(3),d=c(5),p=c(4),b=c(8);function v(e){var t=e.Title,c=e.Year,a=e.imdbID,s=e.Type,n=e.Poster;return Object(r.jsxs)("div",{id:a,className:"card movie",children:[Object(r.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:Object(r.jsx)("img",{className:"activator",src:n})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(r.jsxs)("p",{children:[c," ",Object(r.jsx)("span",{className:"right",children:s})]})]})]})}function m(e){var t=e.movies,c=void 0===t?[]:t;return Object(r.jsx)("div",{className:"movies",children:c.length?c.map((function(e){return Object(r.jsx)(v,Object(b.a)({},e),e.imdbID)})):Object(r.jsx)("h4",{children:"Nothing found"})})}var u=function(e){Object(d.a)(c,e);var t=Object(p.a)(c);function c(){var e;Object(h.a)(this,c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={search:"",type:"all"},e.handleKey=function(t){"Enter"===t.key&&e.props.searchMovies(e.state.search,e.state.type)},e.handleFilter=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){e.props.searchMovies(e.state.search,e.state.type)}))},e}return Object(j.a)(c,[{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("form",{class:"col s12",children:[Object(r.jsxs)("div",{className:"input-field col s12",children:[Object(r.jsx)("input",{className:"validate",placeholder:"search",type:"search",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.handleKey}),Object(r.jsx)("button",{className:"waves-effect waves-light btn",onClick:function(){return e.props.searchMovies(e.state.search,e.state.type)},children:"Search"})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",onChange:this.handleFilter,checked:"all"===this.state.type}),Object(r.jsx)("span",{children:"All"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:this.handleFilter,checked:"movie"===this.state.type}),Object(r.jsx)("span",{children:"Movies only"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:this.handleFilter,checked:"series"===this.state.type}),Object(r.jsx)("span",{children:"Series Only"})]})]})]})})}}]),c}(s.a.Component);function O(){return Object(r.jsx)("div",{className:"preloader-wrapper big active",children:Object(r.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(r.jsx)("div",{className:"circle-clipper left",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"gap-patch",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"circle-clipper right",children:Object(r.jsx)("div",{className:"circle"})})]})})}var x="d080b990",g=function(e){Object(d.a)(c,e);var t=Object(p.a)(c);function c(){var e;Object(h.a)(this,c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={movies:[],loading:!0},e.searchMovies=function(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("https://www.omdbapi.com/?apikey=".concat(x,"&s=").concat(t).concat("all"!==c?"&type=".concat(c):"")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1})}))},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"d080b990"})),fetch("https://www.omdbapi.com/?apikey=".concat(x,"&s=harry potter")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,c=e.loading;return Object(r.jsxs)("main",{className:"container content",children:[Object(r.jsx)(u,{searchMovies:this.searchMovies}),c?Object(r.jsx)(O,{}):Object(r.jsx)(m,{movies:t})]})}}]),c}(s.a.Component);var f=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(g,{}),Object(r.jsx)(o,{})]})};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.380d318e.chunk.js.map