webpackJsonp([0xd9e5da94c46],{190:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=a(2),i=l(s),u=a(4),c=function(e){function t(){var a,l,r;n(this,t);for(var s=arguments.length,i=Array(s),u=0;u<s;u++)i[u]=arguments[u];return a=l=o(this,e.call.apply(e,[this].concat(i))),l.state={value:"mrs"},l.onChange=function(e,t){l.setState({value:e})},l.options=[{value:"please choose",label:"Please Choose",disabled:!0},{value:"mr",label:"Mr",disabled:!1},{value:"miss",label:"Miss",disabled:!1},{value:"mrs",label:"Mrs",disabled:!1},{value:"ms",label:"Ms",disabled:!1},{value:"dr",label:"Dr",disabled:!1},{value:"other",label:"Other",disabled:!1}],r=a,o(l,r)}return r(t,e),t.prototype.render=function(){return i.default.createElement(u.Select,{value:this.state.value,onChange:this.onChange,"aria-label":"Select Input"},this.options.map(function(e,t){return i.default.createElement(u.SelectOption,{isDisabled:e.disabled,key:t,value:e.value,label:e.label})}))},t}(i.default.Component);c.title="Select Input",t.default=c,c.__docgenInfo={description:"",displayName:"SelectInput"},e.exports=t.default}});
//# sourceMappingURL=component---react-core-src-components-select-examples-select-input-js-6c3a7678cbfb50818e53.js.map