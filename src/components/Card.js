import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {CardHeader, CardRightContent, CardTitle, Detail, Footer, MovableCardWrapper, CreatedAt} from '../styles/Base'
import Tag from './Tag'
import DeleteButton from './widgets/DeleteButton'
import classNames from 'classnames'
import moment from 'moment'

class Card extends Component {
  removeCard = e => {
    const {id, laneId, removeCard, onDelete} = this.props
    removeCard(laneId, id)
    onDelete(id, laneId)
    e.stopPropagation()
  }

  renderBody = () => {
    if (this.props.customCardLayout) {
      const {customCard, ...otherProps} = this.props
      return React.cloneElement(customCard, {...otherProps})
    } else {
      const {title, description, label, tags, createdAt} = this.props
      return (
        <span>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardRightContent>{label}</CardRightContent>
          </CardHeader>
          <Detail>{description}</Detail>
          {tags && (
            <Footer>
              {tags.map(tag => (
                <Tag key={tag.title} {...tag} tagStyle={this.props.tagStyle} />
              ))}
            </Footer>
          )}
          <CreatedAt>{moment(createdAt).format('DD/MM HH:mm')}</CreatedAt>
          {createdAt && <CreatedAt>{moment(createdAt).format('DD/MM HH:mm')}</CreatedAt>}
        </span>
      )
    }
  }

  render() {
    const {
      id,
      cardStyle,
      editable,
      hideCardDeleteIcon,
      customCardLayout,
      dragStyle,
      onDelete,
      ...otherProps
    } = this.props
    const style = customCardLayout ? {...cardStyle, padding: 0} : cardStyle
    const allClassNames = classNames('react-trello-board', this.props.className || '')
    return (
      <MovableCardWrapper
        className={allClassNames}
        key={id}
        data-id={id}
        style={{
          ...style,
          ...dragStyle
        }}
        {...otherProps}>
        {this.renderBody()}
        {editable && !hideCardDeleteIcon && <DeleteButton onClick={this.removeCard} />}
      </MovableCardWrapper>
    )
  }
}

Card.defaultProps = {
  cardStyle: {},
  customCardLayout: false,
  onDelete: () => {},
  editable: false,
  dragStyle: {}
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  index: PropTypes.number,
  description: PropTypes.string,
  label: PropTypes.string,
  tags: PropTypes.array,
  laneId: PropTypes.string.isRequired,
  removeCard: PropTypes.func,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  metadata: PropTypes.object,
  createdAt: PropTypes.String,
  cardStyle: PropTypes.object,
  dragStyle: PropTypes.object,
  tagStyle: PropTypes.object,
  customCardLayout: PropTypes.bool,
  customCard: PropTypes.node,
  editable: PropTypes.bool
}

export default Card
