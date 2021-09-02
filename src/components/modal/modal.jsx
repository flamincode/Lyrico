import React, {useState} from 'react'
import { Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Button from '@material-ui/core/Button';

const Lmodal = (props) => {
  const {openModal, modalOpen, modalDescription, modalHeader, song, link, handleClick} = props
   return (
    <Modal
      onClose={() => openModal(false)}
      onOpen={() => openModal(true)}
      open={modalOpen}
    >
      <Modal.Header>{modalHeader}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>{modalDescription}</p>
          <p>Click anywhere to move on to the next round!</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button variant="contained" size='large' className={'lyrico-button'} onClick={handleClick}>Next Round</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default Lmodal