"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewLaneButtons = exports.NewLaneSection = exports.LaneSection = exports.LaneTitle = exports.AddCardLink = exports.TagSpan = exports.Footer = exports.Detail = exports.CardRightContent = exports.CardTitle = exports.CardHeader = exports.MovableCardWrapper = exports.CardWrapper = exports.RightContent = exports.Title = exports.ScrollableLane = exports.LaneFooter = exports.LaneHeader = exports.Section = exports.Header = exports.BoardDiv = exports.GlobalStyle = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _templateObject22() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  margin-top: 10px;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #e0e3e6;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #2b6aa3;\n  border-radius: 3px;\n  margin: 5px;\n  position: relative;\n  padding: 5px;\n  display: inline-flex;\n  height: auto;\n  flex-direction: column;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 15px;\n  width: 268px;\n  height: auto;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  border-radius: 0 0 3px 3px;\n  color: #838c91;\n  display: block;\n  padding: 5px 2px;\n  position: absolute;\n  text-decoration: none;\n  cursor: pointer;\n  bottom: 3px;\n\n  &:hover {\n    //background-color: #cdd2d4;\n    color: #4d4d4d;\n    text-decoration: underline;\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  padding: 2px 3px;\n  border-radius: 3px;\n  margin: 2px 5px;\n  font-size: 70%;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  border-top: 1px solid #eee;\n  padding-top: 6px;\n  text-align: right;\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 12px;\n  color: #4d4d4d;\n  white-space: normal;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 10px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 14px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  border-bottom: 1px solid #eee;\n  padding-bottom: 6px;\n  color: #000;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  &:hover {\n    background-color: #f0f0f0;\n    color: #000;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  border-radius: 3px;\n  border-bottom: 1px solid #ccc;\n  background-color: #fff;\n  position: relative;\n  padding: 10px;\n  cursor: pointer;\n  max-width: 250px;\n  margin-bottom: 7px;\n  min-width: 230px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  width: 30%;\n  text-align: right;\n  padding-right: 10px;\n  font-size: 13px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 18px;\n  cursor: grab;\n  width: 70%;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  flex: 1;\n  overflow-y: auto;\n  min-width: 250px;\n  overflow-x: hidden;\n  align-self: center;\n  max-height: 90vh;\n  padding-bottom: 30px;\n  margin-top: 10px;\n  flex-direction: column;\n  justify-content: space-between;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  position: relative;\n  height: 10px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  padding: 0px 5px;\n  margin-bottom: 0px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #e3e3e3;\n  border-radius: 3px;\n  margin: 5px 5px;\n  position: relative;\n  padding: 10px;\n  display: inline-flex;\n  height: auto;\n  max-height: 90%;\n  flex-direction: column;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  background-color: #3179ba;\n  overflow-y: hidden;\n  padding: 5px;\n  color: #393939;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  height: 100vh;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n\n  .popover {\n  position: absolute;\n    right: 10px;\n   }\n  .popover .popover__content {\n    visibility: hidden;\n    margin-top: -5px;\n    opacity: 0;\n    position: absolute;\n    z-index: 10;\n    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);\n    transition: all 0.3s ease 0ms;\n    border-radius: 3px;\n    min-width: 7em;\n    flex-flow: column nowrap;\n    background-color: #fff;\n    color: #000;\n    padding: 5px; }\n    .popover .popover__content::before {\n      content: \"\";\n      position: absolute;\n      background: transparent none repeat scroll 0 0;\n      border: 6px solid transparent;\n      transition: all 0.3s ease 0ms; \n      left: 50%; }\n  .popover.popover--bottom {\n    flex-flow: column nowrap; }\n    .popover.popover--bottom .popover__content {\n      left: 50%;\n      transform: translateX(-50%); }      \n  \n  .popover.popover--active .popover__content {\n    visibility: visible;\n    opacity: 1;\n    transition-delay: 100ms; }\n  .popover[class*=\"menu\"] .popover__content {\n    border-radius: 3px;\n    min-width: 7em;\n    flex-flow: column nowrap;    \n    color: #000; }\n    .popover[class*=\"menu\"] .popover__content a {\n      color: rgba(255, 255, 255, 0.56);\n      padding: .5em 1em;\n      margin: 0;\n      text-decoration: none; }\n      .popover[class*=\"menu\"] .popover__content a:hover {\n        background-color: #00bcd4 !important;\n        color: #37474F; }\n\n\t\t\n  .comPlainTextContentEditable {\n    -webkit-user-modify: read-write-plaintext-only;\n  }\n\n  .comPlainTextContentEditable--has-placeholder::before {\n    content: attr(placeholder);\n    opacity: 0.5;\n    color: inherit;\n    cursor: text;\n  }\n  \n  .react_trello_dragClass {\n    transform: rotate(3deg);\n  }\n  \n  .react_trello_dragLaneClass {\n    transform: rotate(3deg);\n  }  \n  \n  .icon-overflow-menu-horizontal:before {\n    content: \"\\E91F\";\n  }\n  .icon-lg, .icon-sm {\n    color: #798d99;\n  }\n  .icon-lg {\n    height: 32px;\n    font-size: 16px;\n    line-height: 32px;\n    width: 32px;\n  }\n"], ["\n\n  .popover {\n  position: absolute;\n    right: 10px;\n   }\n  .popover .popover__content {\n    visibility: hidden;\n    margin-top: -5px;\n    opacity: 0;\n    position: absolute;\n    z-index: 10;\n    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);\n    transition: all 0.3s ease 0ms;\n    border-radius: 3px;\n    min-width: 7em;\n    flex-flow: column nowrap;\n    background-color: #fff;\n    color: #000;\n    padding: 5px; }\n    .popover .popover__content::before {\n      content: \"\";\n      position: absolute;\n      background: transparent none repeat scroll 0 0;\n      border: 6px solid transparent;\n      transition: all 0.3s ease 0ms; \n      left: 50%; }\n  .popover.popover--bottom {\n    flex-flow: column nowrap; }\n    .popover.popover--bottom .popover__content {\n      left: 50%;\n      transform: translateX(-50%); }      \n  \n  .popover.popover--active .popover__content {\n    visibility: visible;\n    opacity: 1;\n    transition-delay: 100ms; }\n  .popover[class*=\"menu\"] .popover__content {\n    border-radius: 3px;\n    min-width: 7em;\n    flex-flow: column nowrap;    \n    color: #000; }\n    .popover[class*=\"menu\"] .popover__content a {\n      color: rgba(255, 255, 255, 0.56);\n      padding: .5em 1em;\n      margin: 0;\n      text-decoration: none; }\n      .popover[class*=\"menu\"] .popover__content a:hover {\n        background-color: #00bcd4 !important;\n        color: #37474F; }\n\n\t\t\n  .comPlainTextContentEditable {\n    -webkit-user-modify: read-write-plaintext-only;\n  }\n\n  .comPlainTextContentEditable--has-placeholder::before {\n    content: attr(placeholder);\n    opacity: 0.5;\n    color: inherit;\n    cursor: text;\n  }\n  \n  .react_trello_dragClass {\n    transform: rotate(3deg);\n  }\n  \n  .react_trello_dragLaneClass {\n    transform: rotate(3deg);\n  }  \n  \n  .icon-overflow-menu-horizontal:before {\n    content: \"\\\\E91F\";\n  }\n  .icon-lg, .icon-sm {\n    color: #798d99;\n  }\n  .icon-lg {\n    height: 32px;\n    font-size: 16px;\n    line-height: 32px;\n    width: 32px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());
exports.GlobalStyle = GlobalStyle;

const BoardDiv = _styledComponents.default.div(_templateObject2());

exports.BoardDiv = BoardDiv;

const Header = _styledComponents.default.header(_templateObject3());

exports.Header = Header;

const Section = _styledComponents.default.section(_templateObject4());

exports.Section = Section;
const LaneHeader = (0, _styledComponents.default)(Header)(_templateObject5());
exports.LaneHeader = LaneHeader;

const LaneFooter = _styledComponents.default.div(_templateObject6());

exports.LaneFooter = LaneFooter;

const ScrollableLane = _styledComponents.default.div(_templateObject7());

exports.ScrollableLane = ScrollableLane;

const Title = _styledComponents.default.span(_templateObject8());

exports.Title = Title;

const RightContent = _styledComponents.default.span(_templateObject9());

exports.RightContent = RightContent;

const CardWrapper = _styledComponents.default.article(_templateObject10());

exports.CardWrapper = CardWrapper;
const MovableCardWrapper = (0, _styledComponents.default)(CardWrapper)(_templateObject11());
exports.MovableCardWrapper = MovableCardWrapper;
const CardHeader = (0, _styledComponents.default)(Header)(_templateObject12());
exports.CardHeader = CardHeader;
const CardTitle = (0, _styledComponents.default)(Title)(_templateObject13());
exports.CardTitle = CardTitle;
const CardRightContent = (0, _styledComponents.default)(RightContent)(_templateObject14());
exports.CardRightContent = CardRightContent;

const Detail = _styledComponents.default.div(_templateObject15());

exports.Detail = Detail;

const Footer = _styledComponents.default.div(_templateObject16());

exports.Footer = Footer;

const TagSpan = _styledComponents.default.span(_templateObject17());

exports.TagSpan = TagSpan;

const AddCardLink = _styledComponents.default.a(_templateObject18());

exports.AddCardLink = AddCardLink;

const LaneTitle = _styledComponents.default.div(_templateObject19());

exports.LaneTitle = LaneTitle;

const LaneSection = _styledComponents.default.section(_templateObject20());

exports.LaneSection = LaneSection;
const NewLaneSection = (0, _styledComponents.default)(LaneSection)(_templateObject21());
exports.NewLaneSection = NewLaneSection;

const NewLaneButtons = _styledComponents.default.div(_templateObject22());

exports.NewLaneButtons = NewLaneButtons;