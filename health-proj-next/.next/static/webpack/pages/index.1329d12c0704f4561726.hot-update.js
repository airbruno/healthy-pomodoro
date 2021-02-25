webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);


var _jsxFileName = "C:\\Users\\Bruno\\Documents\\reactjs\\healthy-pomodoro\\health-proj-next\\src\\contexts\\ChallengesContext.tsx",
    _s = $RefreshSig$();



var ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      challengesCompleted = _useState3[0],
      setChallengesCompleted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1];

  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Notification.requestPermission();
  }, []);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);
    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];
    setActiveChallenge(challenge);

    if (Notification.permission == 'granted') {
      new Notification('Novo desafio!', {
        body: "Valendo ".concat(challenge.amount, "xp!")
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    var amount = activeChallenge.amount;
    var finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      level: level,
      currentExperience: currentExperience,
      challengesCompleted: challengesCompleted,
      activeChallenge: activeChallenge,
      experienceToNextLevel: experienceToNextLevel,
      levelUp: levelUp,
      startNewChallenge: startNewChallenge,
      resetChallenge: resetChallenge,
      completeChallenge: completeChallenge
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 9
  }, this);
}

_s(ChallengesProvider, "iZrcVyjEVauJRBYim110m3HpPWU=");

_c = ChallengesProvider;

var _c;

$RefreshReg$(_c, "ChallengesProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJ1c2VFZmZlY3QiLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsImxldmVsVXAiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwicGVybWlzc2lvbiIsImJvZHkiLCJhbW91bnQiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiZmluYWxFeHBlcmllbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBd0JPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBRUEsU0FBU0Msa0JBQVQsT0FBMkM7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ3BCQyxzREFBUSxDQUFDLENBQUQsQ0FEWTtBQUFBLE1BQ3ZDQyxLQUR1QztBQUFBLE1BQ2hDQyxRQURnQzs7QUFBQSxtQkFFSUYsc0RBQVEsQ0FBQyxDQUFELENBRlo7QUFBQSxNQUV2Q0csaUJBRnVDO0FBQUEsTUFFcEJDLG9CQUZvQjs7QUFBQSxtQkFHUUosc0RBQVEsQ0FBQyxDQUFELENBSGhCO0FBQUEsTUFHdkNLLG1CQUh1QztBQUFBLE1BR2xCQyxzQkFIa0I7O0FBQUEsbUJBS0ROLHNEQUFRLENBQUMsSUFBRCxDQUxQO0FBQUEsTUFLdkNPLGVBTHVDO0FBQUEsTUFLdkJDLGtCQUx1Qjs7QUFPOUMsTUFBTUMscUJBQXFCLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQUNWLEtBQUssR0FBRyxDQUFULElBQWMsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBOUI7QUFFQVcseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGdCQUFZLENBQUNDLGlCQUFiO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxXQUFTQyxPQUFULEdBQW1CO0FBQ2pCYixZQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQVI7QUFDRDs7QUFFRCxXQUFTZSxpQkFBVCxHQUE2QjtBQUN6QixRQUFNQyxvQkFBb0IsR0FBR1AsSUFBSSxDQUFDUSxLQUFMLENBQVdSLElBQUksQ0FBQ1MsTUFBTCxLQUFnQkMsNkNBQVUsQ0FBQ0MsTUFBdEMsQ0FBN0I7QUFDQSxRQUFNQyxTQUFTLEdBQUdGLDZDQUFVLENBQUNILG9CQUFELENBQTVCO0FBRUFULHNCQUFrQixDQUFDYyxTQUFELENBQWxCOztBQUVBLFFBQUlULFlBQVksQ0FBQ1UsVUFBYixJQUEyQixTQUEvQixFQUEwQztBQUN0QyxVQUFJVixZQUFKLENBQWlCLGVBQWpCLEVBQWtDO0FBQzlCVyxZQUFJLG9CQUFhRixTQUFTLENBQUNHLE1BQXZCO0FBRDBCLE9BQWxDO0FBR0g7QUFDSjs7QUFFRCxXQUFTQyxjQUFULEdBQTBCO0FBQ3RCbEIsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNIOztBQUVELFdBQVNtQixpQkFBVCxHQUE2QjtBQUN6QixRQUFJLENBQUNwQixlQUFMLEVBQXNCO0FBQ2xCO0FBQ0g7O0FBSHdCLFFBS2pCa0IsTUFMaUIsR0FLTmxCLGVBTE0sQ0FLakJrQixNQUxpQjtBQU96QixRQUFJRyxlQUFlLEdBQUd6QixpQkFBaUIsR0FBR3NCLE1BQTFDOztBQUVBLFFBQUlHLGVBQWUsSUFBSW5CLHFCQUF2QixFQUE4QztBQUMxQ21CLHFCQUFlLEdBQUdBLGVBQWUsR0FBR25CLHFCQUFwQztBQUNBTSxhQUFPO0FBQ1Y7O0FBRURYLHdCQUFvQixDQUFDd0IsZUFBRCxDQUFwQjtBQUNBcEIsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNBRiwwQkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBdEI7QUFDSDs7QUFFRCxzQkFDSSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUE0QixTQUFLLEVBQUU7QUFDL0JKLFdBQUssRUFBTEEsS0FEK0I7QUFFL0JFLHVCQUFpQixFQUFqQkEsaUJBRitCO0FBRy9CRSx5QkFBbUIsRUFBbkJBLG1CQUgrQjtBQUkvQkUscUJBQWUsRUFBZkEsZUFKK0I7QUFLL0JFLDJCQUFxQixFQUFyQkEscUJBTCtCO0FBTS9CTSxhQUFPLEVBQVBBLE9BTitCO0FBTy9CQyx1QkFBaUIsRUFBakJBLGlCQVArQjtBQVEvQlUsb0JBQWMsRUFBZEEsY0FSK0I7QUFTL0JDLHVCQUFpQixFQUFqQkE7QUFUK0IsS0FBbkM7QUFBQSxjQVdLNUI7QUFYTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSDs7R0FwRWVELGtCOztLQUFBQSxrQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMzI5ZDEyYzA3MDRmNDU2MTcyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2VzLmpzb24nXHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlIHtcclxuICAgIHR5cGU6ICdib2R5JyB8ICdleWUnO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGFtb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcclxuICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gICAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG4gICAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7XHJcbiAgICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xyXG4gICAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xyXG4gICAgY29tcGxldGVDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKCB7IGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSxzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcclxuICAgICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpIHtcclxuICAgICAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKVxyXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xyXG5cclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKTtcclxuXHJcbiAgICAgICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09ICdncmFudGVkJykge1xyXG4gICAgICAgICAgICBuZXcgTm90aWZpY2F0aW9uKCdOb3ZvIGRlc2FmaW8hJywge1xyXG4gICAgICAgICAgICAgICAgYm9keTogYFZhbGVuZG8gJHtjaGFsbGVuZ2UuYW1vdW50fXhwIWBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxlbmdlKCkge1xyXG4gICAgICAgIGlmICghYWN0aXZlQ2hhbGxlbmdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGVuZ2U7XHJcblxyXG4gICAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcclxuXHJcbiAgICAgICAgaWYgKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpIHtcclxuICAgICAgICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xyXG4gICAgICAgICAgICBsZXZlbFVwKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgICAgICBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgICAgICBsZXZlbCxcclxuICAgICAgICAgICAgY3VycmVudEV4cGVyaWVuY2UsXHJcbiAgICAgICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXHJcbiAgICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcclxuICAgICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgICAgICBsZXZlbFVwLFxyXG4gICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcclxuICAgICAgICAgICAgcmVzZXRDaGFsbGVuZ2UsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlQ2hhbGxlbmdlXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9