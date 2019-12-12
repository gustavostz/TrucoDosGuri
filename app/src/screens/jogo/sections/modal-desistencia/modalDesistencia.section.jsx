import React, {Component} from 'react'
import {Button, Header, Icon, Modal} from 'semantic-ui-react'

export class ModalDesistencia extends Component {
    state = {modalOpen: false}

    handleOpen = () => this.setState({modalOpen: true})

    handleClose = () => this.setState({modalOpen: false})

    render() {
        return (
            <Modal
                trigger={this.props.trigger(this.handleOpen)}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
            >
                <Header icon='ambulance' content='Arregou?'/>
                <Modal.Content>
                    <h3> Vai pedir Arrego?</h3>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' onClick={this.handleClose} inverted>
                        <Icon name='remove'/> Até Parece!
                    </Button>
                    <Button color='green' onClick={() => {
                        this.handleClose()
                        this.props.desistiu()
                    }} inverted>
                        <Icon name='checkmark'/> Arreguei
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}