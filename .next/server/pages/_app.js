(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7656:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Footer_container__iN3aW",
	"text": "Footer_text__TFiKo",
	"repo": "Footer_repo__7FLsd",
	"stack": "Footer_stack__g5FSz"
};


/***/ }),

/***/ 469:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Navbar_container__rxFeS",
	"navContent": "Navbar_navContent__B2o75",
	"title": "Navbar_title__1_N0h",
	"name": "Navbar_name__YiYEM",
	"buttons": "Navbar_buttons__mfLKI"
};


/***/ }),

/***/ 9287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(7656);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer.js



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Footer_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
            className: (Footer_module_default()).text,
            children: [
                "Built with",
                " ",
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "https://nextjs.org/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Footer_module_default()).stack,
                        children: "Nextjs"
                    })
                }),
                " ",
                "and",
                " ",
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "https://supabase.com/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Footer_module_default()).stack,
                        children: "Supabase"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./styles/Navbar.module.css
var Navbar_module = __webpack_require__(469);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
// EXTERNAL MODULE: ./utils/supabase.js
var supabase = __webpack_require__(7401);
;// CONCATENATED MODULE: ./components/Navbar.js




const Navbar = ({ session  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Navbar_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (Navbar_module_default()).title,
                    children: "Malik Tanveer Dhool"
                })
            }),
            session?.user ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: (Navbar_module_default()).navContent,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (Navbar_module_default()).name,
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (Navbar_module_default()).buttons,
                        onClick: ()=>supabase/* supabase.auth.signOut */.O.auth.signOut(),
                        children: "Logout"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/create",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (Navbar_module_default()).buttons,
                            children: "Create New Workout"
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: (Navbar_module_default()).navContent,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/login",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (Navbar_module_default()).buttons,
                            children: "Login"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/signup",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (Navbar_module_default()).buttons,
                            children: "Signup"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./pages/_app.js







function MyApp({ Component , pageProps  }) {
    const { 0: session , 1: setSession  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setSession(supabase/* supabase.auth.session */.O.auth.session());
        supabase/* supabase.auth.onAuthStateChange */.O.auth.onAuthStateChange((_event, session)=>{
            setSession(session);
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {
                session: session
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps,
                session: session
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2885:
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,401], () => (__webpack_exec__(9287)));
module.exports = __webpack_exports__;

})();