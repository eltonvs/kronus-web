import React from 'react'

import * as S from './styled'

type EventHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

const defaultProps: {
  updateAction: EventHandler
  removeAction: EventHandler
  saveAction: EventHandler
  cancelAction: EventHandler
  isUpdating: boolean
} = {
  updateAction: () => {},
  removeAction: () => {},
  saveAction: () => {},
  cancelAction: () => {},
  isUpdating: false,
}

const ClockActionButtons = ({
  removeAction,
  updateAction,
  saveAction,
  cancelAction,
  isUpdating,
}: typeof defaultProps) => {
  if (isUpdating) {
    return (
      <div className="actions display-block">
        <S.BorderedButton color="#007bff" onClick={saveAction}>
          Save
        </S.BorderedButton>
        <S.BorderedButton color="#888" onClick={cancelAction}>
          Cancel
        </S.BorderedButton>
      </div>
    )
  }
  return (
    <div className="actions">
      <S.BorderedButton color="#007bff" title="Edit" onClick={updateAction}>
        <i className="fa fa-pencil" />
      </S.BorderedButton>
      <S.BorderedButton color="#dc3545" title="Archive" onClick={removeAction}>
        <i className="fa fa-archive" />
      </S.BorderedButton>
    </div>
  )
}

ClockActionButtons.defaultProps = defaultProps

export default ClockActionButtons
