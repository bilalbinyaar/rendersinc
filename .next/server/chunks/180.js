"use strict";
exports.id = 180;
exports.ids = [180];
exports.modules = {

/***/ 5850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeSlashFromPagination = ()=>{
    let swiperPagination = document.querySelector(".swiper-pagination");
    if (swiperPagination) {
        swiperPagination.innerHTML = swiperPagination.innerHTML.replace(" / ", "");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeSlashFromPagination);


/***/ }),

/***/ 8636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Split extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    target = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: this.target,
            children: this.props.children
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);


/***/ }),

/***/ 3614:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":{"first":"A Virtual World-Building","second":"Lab From The Future"},"content":{"first":"Right design and right ideas matter a lot of in interior design","second":"business. a style that makes a statement."},"image":"/assets/img/slid/n/1.jpg"},{"id":2,"title":{"first":"Transforming Commercial","second":"Spaces With Style"},"content":{"first":"Visualize your business potential with our cutting-edge commercial","second":"visualization services."},"image":"/assets/img/slid/n/3.jpg"},{"id":3,"title":{"first":"Bringing Your Dream Homes","second":"To Life In Detail"},"content":{"first":"Experience your dream home with our immersive residential","second":"visualization solutions."},"image":"/assets/img/slid/n/2.jpg"},{"id":4,"title":{"first":"Dive into Future Of Virtual","second":"Reality Visualization"},"content":{"first":"Explore properties like never before with our advanced VR","second":"visualization services."},"image":"/assets/img/slid/n/4.jpg"}]');

/***/ })

};
;