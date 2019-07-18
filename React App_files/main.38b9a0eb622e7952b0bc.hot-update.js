webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ValidationComponent_ValidationComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ValidationComponent/ValidationComponent */ "./src/ValidationComponent/ValidationComponent.js");
/* harmony import */ var _CharComponent_CharComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CharComponent/CharComponent */ "./src/CharComponent/CharComponent.js");
var _jsxFileName = "/Users/kyleanderson/Code/JavaScript/React_The_Complete_Guide/assignment2_lists_and_conditionals/src/App.js";



 //Class Based Approach

class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      userInput: ''
    };

    this.inputChangeHandler = event => {
      const userInput = this.state.userInput;
      this.setState({
        userInput: event.target.value
      });
    };
  }

  render() {
    let letters = null; // let lettersArray = this.state.userInput.split('');

    if (this.state.userInput.length) {
      letters = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, this.state.userInput.split('').map(letter => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CharComponent_CharComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
          letter: letter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        });
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Assignment 2: Lists & Conditionals"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      onChange: this.inputChangeHandler,
      value: this.state.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, this.state.userInput), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ValidationComponent_ValidationComponent__WEBPACK_IMPORTED_MODULE_2__["default"], {
      inputLength: this.state.userInput.length,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), letters);
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.38b9a0eb622e7952b0bc.hot-update.js.map