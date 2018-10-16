webpackJsonp([0xcd51a54784e6],{210:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(2),s=n(i),c=a(4),d=a(7),u=a(20),m=n(u),f=a(24),p=n(f),g=a(5),b=a(16),v=a(9),E=n(v),w=a(8),I=n(w),S=function(e){function t(a){l(this,t);var n=o(this,e.call(this,a));n.onDropdownToggle=function(e){n.setState({isDropdownOpen:e})},n.onDropdownSelect=function(e){n.setState({isDropdownOpen:!n.state.isDropdownOpen})},n.onKebabDropdownToggle=function(e){n.setState({isKebabDropdownOpen:e})},n.onKebabDropdownSelect=function(e){n.setState({isKebabDropdownOpen:!n.state.isKebabDropdownOpen})},n.onNavSelect=function(e){n.setState({activeItem:e.itemId})},n.onNavToggle=function(){n.setState({isNavOpen:!n.state.isNavOpen})};var r="undefined"!=typeof window&&window.innerWidth>=parseInt(d.global_breakpoint_md.value,10);return n.state={isDropdownOpen:!1,isKebabDropdownOpen:!1,activeItem:0,isNavOpen:r},n}return r(t,e),t.prototype.render=function(){var e,t=this.state,a=t.isDropdownOpen,n=t.isKebabDropdownOpen,l=t.activeItem,o=t.isNavOpen,r=s.default.createElement(c.Nav,{onSelect:this.onNavSelect,"aria-label":"Nav"},s.default.createElement(c.NavList,{variant:c.NavVariants.simple},s.default.createElement(c.NavItem,{to:"#nav-link1",itemId:0,isActive:0===l},"System Panel"),s.default.createElement(c.NavItem,{to:"#nav-link2",itemId:1,isActive:1===l},"Policy"),s.default.createElement(c.NavItem,{to:"#nav-link3",itemId:2,isActive:2===l},"Authentication"),s.default.createElement(c.NavItem,{to:"#nav-link4",itemId:3,isActive:3===l},"Network Services"),s.default.createElement(c.NavItem,{to:"#nav-link5",itemId:4,isActive:4===l},"Server"))),i=s.default.createElement(c.Toolbar,null,s.default.createElement(c.ToolbarGroup,{className:(0,g.css)(m.default.srOnly,m.default.visibleOnLg)},s.default.createElement(c.ToolbarItem,null,s.default.createElement(c.Button,{id:"nav-toggle","aria-label":"Overflow actions",variant:c.ButtonVariant.plain},s.default.createElement(b.BellIcon,null))),s.default.createElement(c.ToolbarItem,null,s.default.createElement(c.Button,{id:"nav-toggle","aria-label":"Overflow actions",variant:c.ButtonVariant.plain},s.default.createElement(b.CogIcon,null)))),s.default.createElement(c.ToolbarGroup,null,s.default.createElement(c.ToolbarItem,{className:(0,g.css)(m.default.hiddenOnLg,p.default.mr_0)},s.default.createElement(c.Dropdown,{isPlain:!0,position:"right",onSelect:this.onKebabDropdownSelect,toggle:s.default.createElement(c.KebabToggle,{onToggle:this.onKebabDropdownToggle}),isOpen:n},s.default.createElement(c.DropdownItem,null,s.default.createElement(b.BellIcon,null)," Notifications"),s.default.createElement(c.DropdownItem,null,s.default.createElement(b.CogIcon,null)," Settings"))),s.default.createElement(c.ToolbarItem,{className:(0,g.css)(m.default.srOnly,m.default.visibleOnMd)},s.default.createElement(c.Dropdown,{isPlain:!0,position:"right",onSelect:this.onDropdownSelect,isOpen:a,toggle:s.default.createElement(c.DropdownToggle,{onToggle:this.onDropdownToggle},"Kyle Baker")},s.default.createElement(c.DropdownItem,null,"Link"),s.default.createElement(c.DropdownItem,{component:"button"},"Action"),s.default.createElement(c.DropdownItem,{isDisabled:!0},"Disabled Link"),s.default.createElement(c.DropdownItem,{isDisabled:!0,component:"button"},"Disabled Action"),s.default.createElement(c.DropdownSeparator,null),s.default.createElement(c.DropdownItem,null,"Separated Link"),s.default.createElement(c.DropdownItem,{component:"button"},"Separated Action"))))),d=(e={},e[c.BackgroundImageSrc.lg]="/assets/images/pfbg_1200.jpg",e[c.BackgroundImageSrc.md]="/assets/images/pfbg_992.jpg",e[c.BackgroundImageSrc.md2x]="/assets/images/pfbg_992@2x.jpg",e[c.BackgroundImageSrc.sm]="/assets/images/pfbg_768.jpg",e[c.BackgroundImageSrc.sm2x]="/assets/images/pfbg_768@2x.jpg",e[c.BackgroundImageSrc.xl]="/assets/images/pfbg_2000.jpg",e[c.BackgroundImageSrc.xs]="/assets/images/pfbg_576.jpg",e[c.BackgroundImageSrc.xs2x]="/assets/images/pfbg_576@2x.jpg",e[c.BackgroundImageSrc.filter]="/assets/images/background-filter.svg",e),u=s.default.createElement(c.PageHeader,{logo:s.default.createElement(c.Brand,{src:E.default,alt:"Patternfly Logo"}),toolbar:i,avatar:s.default.createElement(c.Avatar,{src:I.default,alt:"Avatar image"}),showNavToggle:!0,onNavToggle:this.onNavToggle}),f=s.default.createElement(c.PageSidebar,{nav:r,isNavOpen:o});return s.default.createElement(s.default.Fragment,null,s.default.createElement(c.BackgroundImage,{src:d}),s.default.createElement(c.Page,{header:u,sidebar:f},s.default.createElement(c.PageSection,{variant:c.PageSectionVariants.light},s.default.createElement(c.TextContent,null,s.default.createElement(c.Text,{component:"h1"},"Main Title"),s.default.createElement(c.Text,{component:"p"},"Body text should be Overpass Regular at 16px. It should have leading of 24px because ",s.default.createElement("br",null),"of it’s relative line height of 1.5."))),s.default.createElement(c.PageSection,null,s.default.createElement(c.Gallery,{gutter:"md"},Array.apply(0,Array(10)).map(function(e,t){return s.default.createElement(c.GalleryItem,{key:t},s.default.createElement(c.Card,null,s.default.createElement(c.CardBody,null,"This is a card")))})))))},t}(s.default.Component);S.title="Using simple navigation",t.default=S,S.__docgenInfo={description:"",displayName:"PageLayoutSimpleNav"},e.exports=t.default}});
//# sourceMappingURL=component---react-core-src-demos-page-layout-examples-page-layout-simple-nav-js-3739e533796817ddb8f6.js.map