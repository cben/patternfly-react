webpackJsonp([0xf9f9609de69f],{169:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var p=r(2),l=a(p),u=r(4),c=function(e){function t(){var r,a,o;n(this,t);for(var p=arguments.length,l=Array(p),u=0;u<p;u++)l[u]=arguments[u];return r=a=i(this,e.call.apply(e,[this].concat(l))),a.state={activeGroup:"grp-1",activeItem:"grp-1_itm-1"},a.onSelect=function(e){a.setState({activeGroup:e.groupId,activeItem:e.itemId})},o=r,i(a,o)}return o(t,e),t.prototype.render=function(){var e=this.state,t=e.activeGroup,r=e.activeItem;return l.default.createElement(u.Nav,{onSelect:this.onSelect,onToggle:this.onToggle,"aria-label":"Nav Expandable with screen reader headings"},l.default.createElement(u.NavList,null,l.default.createElement(u.NavExpandable,{title:"Link 1",srText:"SR Link",groupId:"grp-1",isActive:"grp-1"===t,isExpanded:!0},l.default.createElement(u.NavItem,{to:"#sr-expandable-1",groupId:"grp-1",itemId:"grp-1_itm-1",isActive:"grp-1_itm-1"===r},"Subnav Link 1"),l.default.createElement(u.NavItem,{to:"#sr-expandable-2",groupId:"grp-1",itemId:"grp-1_itm-2",isActive:"grp-1_itm-2"===r},"Subnav Link 2"),l.default.createElement(u.NavItem,{to:"#sr-expandable-3",groupId:"grp-1",itemId:"grp-1_itm-3",isActive:"grp-1_itm-3"===r},"Subnav Link 3")),l.default.createElement(u.NavExpandable,{title:"Link 2",srText:"SR Link 2",groupId:"grp-2",isActive:"grp-2"===t},l.default.createElement(u.NavItem,{to:"#sr-expandable-4",groupId:"grp-2",itemId:"grp-2_itm-1",isActive:"grp-2_itm-1"===r},"Subnav Link 1"),l.default.createElement(u.NavItem,{to:"#sr-expandable-5",groupId:"grp-2",itemId:"grp-2_itm-2",isActive:"grp-2_itm-2"===r},"Subnav Link 2"),l.default.createElement(u.NavItem,{to:"#sr-expandable-6",groupId:"grp-2",itemId:"grp-2_itm-3",isActive:"grp-2_itm-3"===r},"Subnav Link 3"))))},t}(l.default.Component);c.title="Expandable Nav (w/subnav titles)",t.default=c,c.__docgenInfo={description:"",displayName:"NavExpandableTitlesList"},e.exports=t.default}});
//# sourceMappingURL=component---react-core-src-components-nav-examples-nav-expandable-titles-list-js-d528dab7340596447d9b.js.map