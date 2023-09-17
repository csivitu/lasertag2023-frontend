exports.id = 527;
exports.ids = [527];
exports.modules = {

/***/ 5158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bw: () => (/* binding */ getDayOfMonth),
/* harmony export */   hK: () => (/* binding */ getTime)
/* harmony export */ });
/* unused harmony export getDate */
const getTime = (date)=>{
    const timestamp = Date.parse(date);
    const formattedDate = new Date(timestamp).toLocaleTimeString();
    return formattedDate;
};
const getDate = (date)=>{
    const timestamp = Date.parse(date);
    const formattedDate = new Date(timestamp).toLocaleDateString();
    return formattedDate;
};
const getDayOfMonth = (date)=>{
    const timestamp = Date.parse(date);
    const DateObject = new Date(timestamp);
    return DateObject.getDate();
};


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 4542:
/***/ (() => {



/***/ })

};
;