import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {CardHeader, CardRightContent, CardTitle, CardWrapper, Detail} from '../styles/Base'
import EditableLabel from './widgets/EditableLabel'
import {AddButton, CancelButton} from '../styles/Elements'

class NewCard extends Component {
  updateField = (field, value) => {
    this.setState({[field]: value})
  }

  handleAdd = () => {
    this.props.onAdd(this.state)
  }

  render() {
    const {onCancel} = this.props
    return (
      <div style={{background: '#E3E3E3'}}>
        <CardWrapper>
          <CardHeader>
            <CardTitle>
              <EditableLabel placeholder="título" onChange={val => this.updateField('title', val)} autoFocus />
            </CardTitle>
            <CardRightContent>
              <EditableLabel placeholder="etiqueta" onChange={val => this.updateField('label', val)} />
            </CardRightContent>
          </CardHeader>
          <Detail>
            <EditableLabel placeholder="descrição" onChange={val => this.updateField('description', val)} />
          </Detail>
        </CardWrapper>
        <AddButton onClick={this.handleAdd}>Confirmar</AddButton>
        <CancelButton onClick={onCancel}>Cancelar</CancelButton>
      </div>
    )
  }
}

NewCard.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
}
NewCard.defaultProps = {}

export default NewCard
