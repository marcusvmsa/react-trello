"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _Container = _interopRequireDefault(require("../dnd/Container"));

var _Draggable = _interopRequireDefault(require("../dnd/Draggable"));

var _v = _interopRequireDefault(require("uuid/v1"));

var _reactPopover = _interopRequireDefault(require("@terebentina/react-popover"));

var _Loader = _interopRequireDefault(require("./Loader"));

var _Card = _interopRequireDefault(require("./Card"));

var _NewCard = _interopRequireDefault(require("./NewCard"));

var _Base = require("../styles/Base");

var laneActions = _interopRequireWildcard(require("../actions/LaneActions"));

var _Elements = require("../styles/Elements");

var _classnames = _interopRequireDefault(require("classnames"));

class Lane extends _react.Component {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "state", {
      loading: false,
      currentPage: this.props.currentPage,
      addCardMode: false,
      collapsed: false,
      isDraggingOver: false
    });
    (0, _defineProperty2.default)(this, "handleScroll", evt => {
      const node = evt.target;
      const elemScrolPosition = node.scrollHeight - node.scrollTop - node.clientHeight;
      const onLaneScroll = this.props.onLaneScroll;

      if (elemScrolPosition <= 0 && onLaneScroll && !this.state.loading) {
        const currentPage = this.state.currentPage;
        this.setState({
          loading: true
        });
        const nextPage = currentPage + 1;
        onLaneScroll(nextPage, this.props.id).then(moreCards => {
          if (!moreCards || moreCards.length === 0) {
            // if no cards present, stop retrying until user action
            node.scrollTop = node.scrollTop - 100;
          } else {
            this.props.actions.paginateLane({
              laneId: this.props.id,
              newCards: moreCards,
              nextPage: nextPage
            });
          }

          this.setState({
            loading: false
          });
        });
      }
    });
    (0, _defineProperty2.default)(this, "laneDidMount", node => {
      if (node) {
        node.addEventListener('scroll', this.handleScroll);
      }
    });
    (0, _defineProperty2.default)(this, "removeCard", (laneId, cardId) => {
      this.props.actions.removeCard({
        laneId: laneId,
        cardId: cardId
      });
    });
    (0, _defineProperty2.default)(this, "handleCardClick", (e, card) => {
      const onCardClick = this.props.onCardClick;
      onCardClick && onCardClick(card.id, card.metadata, card.laneId);
      e.stopPropagation();
    });
    (0, _defineProperty2.default)(this, "showEditableCard", () => {
      this.setState({
        addCardMode: true
      });
    });
    (0, _defineProperty2.default)(this, "hideEditableCard", () => {
      this.setState({
        addCardMode: false
      });
    });
    (0, _defineProperty2.default)(this, "addNewCard", params => {
      const laneId = this.props.id;
      const id = (0, _v.default)();
      this.hideEditableCard();
      let card = (0, _objectSpread2.default)({
        id
      }, params);
      this.props.actions.addCard({
        laneId,
        card
      });
      this.props.onCardAdd(card, laneId);
    });
    (0, _defineProperty2.default)(this, "renderAddCardLink", () => {
      const _this$props = this.props,
            addCardLink = _this$props.addCardLink,
            addCardTitle = _this$props.addCardTitle;

      if (addCardLink) {
        return _react.default.createElement("span", {
          onClick: this.showEditableCard
        }, addCardLink);
      } else {
        return _react.default.createElement(_Base.AddCardLink, {
          onClick: this.showEditableCard
        }, addCardTitle);
      }
    });
    (0, _defineProperty2.default)(this, "renderNewCard", () => {
      const _this$props2 = this.props,
            newCardTemplate = _this$props2.newCardTemplate,
            id = _this$props2.id;

      if (newCardTemplate) {
        const newCardWithProps = _react.default.cloneElement(newCardTemplate, {
          onCancel: this.hideEditableCard,
          onAdd: this.addNewCard,
          laneId: id
        });

        return _react.default.createElement("span", null, newCardWithProps);
      } else {
        return _react.default.createElement(_NewCard.default, {
          onCancel: this.hideEditableCard,
          onAdd: this.addNewCard
        });
      }
    });
    (0, _defineProperty2.default)(this, "onDragStart", ({
      payload
    }) => {
      const handleDragStart = this.props.handleDragStart;
      handleDragStart && handleDragStart(payload.id, payload.laneId);
    });
    (0, _defineProperty2.default)(this, "shouldAcceptDrop", sourceContainerOptions => {
      return this.props.droppable && sourceContainerOptions.groupName === this.groupName;
    });
    (0, _defineProperty2.default)(this, "onDragEnd", (laneId, result) => {
      // const {handleDragEnd} = this.props
      // const {addedIndex, payload} = result
      this.setState({
        isDraggingOver: false
      }); // if (addedIndex != null) {
      //   const newCard = {...cloneDeep(payload), laneId}
      //   // const response = handleDragEnd ? handleDragEnd(payload.id, payload.laneId, laneId, addedIndex, newCard) : true
      //   // if (response === undefined || !!response) {
      //   //   this.props.actions.moveCardAcrossLanes({
      //   //     fromLaneId: payload.laneId,
      //   //     toLaneId: laneId,
      //   //     cardId: payload.id,
      //   //     index: addedIndex
      //   //   })
      //   // }
      //   return response
      // }
    });
    (0, _defineProperty2.default)(this, "renderDragContainer", isDraggingOver => {
      const _this$props3 = this.props,
            laneSortFunction = _this$props3.laneSortFunction,
            editable = _this$props3.editable,
            hideCardDeleteIcon = _this$props3.hideCardDeleteIcon,
            tagStyle = _this$props3.tagStyle,
            cardStyle = _this$props3.cardStyle,
            draggable = _this$props3.draggable,
            cardDraggable = _this$props3.cardDraggable,
            cards = _this$props3.cards,
            cardDragClass = _this$props3.cardDragClass,
            id = _this$props3.id;
      const _this$state = this.state,
            addCardMode = _this$state.addCardMode,
            collapsed = _this$state.collapsed;
      const showableCards = collapsed ? [] : cards;
      const cardList = this.sortCards(showableCards, laneSortFunction).map((card, idx) => {
        const cardToRender = _react.default.createElement(_Card.default, (0, _extends2.default)({
          key: card.id,
          index: idx,
          customCardLayout: this.props.customCardLayout,
          customCard: this.props.children,
          tagStyle: tagStyle,
          cardStyle: cardStyle,
          removeCard: this.removeCard,
          onClick: e => this.handleCardClick(e, card),
          onDelete: this.props.onCardDelete,
          editable: editable,
          hideCardDeleteIcon: hideCardDeleteIcon
        }, card));

        return draggable && cardDraggable ? _react.default.createElement(_Draggable.default, {
          key: card.id
        }, cardToRender) : _react.default.createElement("span", {
          key: card.id
        }, cardToRender);
      });
      return _react.default.createElement(_Base.ScrollableLane, {
        ref: this.laneDidMount,
        isDraggingOver: isDraggingOver
      }, _react.default.createElement(_Container.default, {
        orientation: "vertical",
        groupName: this.groupName,
        dragClass: cardDragClass,
        onDragStart: this.onDragStart,
        onDrop: e => this.onDragEnd(id, e),
        onDragEnter: () => this.setState({
          isDraggingOver: true
        }),
        onDragLeave: () => this.setState({
          isDraggingOver: false
        }),
        shouldAcceptDrop: this.shouldAcceptDrop,
        getChildPayload: index => this.props.getCardDetails(id, index)
      }, cardList), editable && !addCardMode && this.renderAddCardLink(), addCardMode && this.renderNewCard());
    });
    (0, _defineProperty2.default)(this, "editLane", () => {
      const id = this.props.id;
      this.props.onLaneEdit({
        laneId: id
      });
    });
    (0, _defineProperty2.default)(this, "removeLane", () => {
      const id = this.props.id;
      this.props.onLaneDelete({
        laneId: id
      });
    });
    (0, _defineProperty2.default)(this, "laneMenu", () => {
      return _react.default.createElement(_reactPopover.default, {
        className: "menu",
        position: "bottom",
        trigger: _react.default.createElement(_Elements.MenuButton, null, "...")
      }, _react.default.createElement(_Elements.LaneMenuHeader, null, _react.default.createElement(_Elements.LaneMenuTitle, null, "A\xE7\xF5es"), _react.default.createElement(_Elements.DeleteWrapper, null, _react.default.createElement(_Elements.GenDelButton, null, "X"))), _react.default.createElement(_Elements.LaneMenuContent, null, _react.default.createElement(_Elements.LaneMenuItem, {
        onClick: this.editLane
      }, "Editar..."), _react.default.createElement(_Elements.LaneMenuItem, {
        onClick: this.removeLane
      }, "Deletar...")));
    });
    (0, _defineProperty2.default)(this, "renderHeader", () => {
      const _this$props4 = this.props,
            customLaneHeader = _this$props4.customLaneHeader,
            canAddLanes = _this$props4.canAddLanes;

      if (customLaneHeader) {
        const customLaneElement = _react.default.cloneElement(customLaneHeader, (0, _objectSpread2.default)({}, this.props));

        return _react.default.createElement("span", null, customLaneElement);
      } else {
        const _this$props5 = this.props,
              title = _this$props5.title,
              label = _this$props5.label,
              titleStyle = _this$props5.titleStyle,
              labelStyle = _this$props5.labelStyle;
        return _react.default.createElement(_Base.LaneHeader, {
          onDoubleClick: this.toggleLaneCollapsed
        }, _react.default.createElement(_Base.Title, {
          style: titleStyle
        }, title), label && _react.default.createElement(_Base.RightContent, null, _react.default.createElement("span", {
          style: labelStyle
        }, label)), canAddLanes && this.laneMenu());
      }
    });
    (0, _defineProperty2.default)(this, "renderFooter", () => {
      const _this$props6 = this.props,
            collapsibleLanes = _this$props6.collapsibleLanes,
            cards = _this$props6.cards;
      const collapsed = this.state.collapsed;

      if (collapsibleLanes && cards.length > 0) {
        return _react.default.createElement(_Base.LaneFooter, {
          onClick: this.toggleLaneCollapsed
        }, collapsed ? _react.default.createElement(_Elements.ExpandBtn, null) : _react.default.createElement(_Elements.CollapseBtn, null));
      }
    });
    (0, _defineProperty2.default)(this, "toggleLaneCollapsed", () => {
      this.props.collapsibleLanes && this.setState(state => ({
        collapsed: !state.collapsed
      }));
    });
  }

  sortCards(cards, sortFunction) {
    if (!cards) return [];
    if (!sortFunction) return cards;
    return cards.concat().sort(function (card1, card2) {
      return sortFunction(card1, card2);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!(0, _isEqual.default)(this.props.cards, nextProps.cards)) {
      this.setState({
        currentPage: nextProps.currentPage
      });
    }
  }

  get groupName() {
    const boardId = this.props.boardId;
    return "TrelloBoard".concat(boardId, "Lane");
  }

  render() {
    const _this$state2 = this.state,
          loading = _this$state2.loading,
          isDraggingOver = _this$state2.isDraggingOver;
    const _this$props7 = this.props,
          id = _this$props7.id,
          onLaneClick = _this$props7.onLaneClick,
          onLaneScroll = _this$props7.onLaneScroll,
          onCardClick = _this$props7.onCardClick,
          onCardAdd = _this$props7.onCardAdd,
          onCardDelete = _this$props7.onCardDelete,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props7, ["id", "onLaneClick", "onLaneScroll", "onCardClick", "onCardAdd", "onCardDelete"]);
    const allClassNames = (0, _classnames.default)('react-trello-lane', this.props.className || '');
    return _react.default.createElement(_Base.Section, (0, _extends2.default)({}, otherProps, {
      key: id,
      onClick: () => onLaneClick && onLaneClick(id),
      draggable: false,
      className: allClassNames
    }), this.renderHeader(), this.renderDragContainer(isDraggingOver), loading && _react.default.createElement(_Loader.default, null), this.renderFooter());
  }

}

Lane.propTypes = {
  actions: _propTypes.default.object,
  children: _propTypes.default.node,
  id: _propTypes.default.string.isRequired,
  boardId: _propTypes.default.string,
  title: _propTypes.default.node,
  index: _propTypes.default.number,
  laneSortFunction: _propTypes.default.func,
  style: _propTypes.default.object,
  cardStyle: _propTypes.default.object,
  tagStyle: _propTypes.default.object,
  titleStyle: _propTypes.default.object,
  labelStyle: _propTypes.default.object,
  customLaneHeader: _propTypes.default.element,
  customCardLayout: _propTypes.default.bool,
  cards: _propTypes.default.array,
  label: _propTypes.default.string,
  currentPage: _propTypes.default.number,
  draggable: _propTypes.default.bool,
  collapsibleLanes: _propTypes.default.bool,
  droppable: _propTypes.default.bool,
  onLaneScroll: _propTypes.default.func,
  onCardClick: _propTypes.default.func,
  onCardDelete: _propTypes.default.func,
  onCardAdd: _propTypes.default.func,
  onLaneClick: _propTypes.default.func,
  newCardTemplate: _propTypes.default.node,
  addCardLink: _propTypes.default.node,
  addCardTitle: _propTypes.default.string,
  editable: _propTypes.default.bool,
  cardDraggable: _propTypes.default.bool,
  cardDragClass: _propTypes.default.string,
  canAddLanes: _propTypes.default.bool,
  onLaneEdit: _propTypes.default.func,
  onLaneDelete: _propTypes.default.func
};
Lane.defaultProps = {
  style: {},
  titleStyle: {},
  labelStyle: {},
  label: undefined,
  editable: false,
  onCardAdd: () => {}
};

const mapDispatchToProps = dispatch => ({
  actions: (0, _redux.bindActionCreators)(laneActions, dispatch)
});

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Lane);

exports.default = _default;