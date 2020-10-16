
import React from "react";
import Modal from "react-animated-modal";
import LoginForm from './LoginForm'
export default class ModalComp extends React.Component {
    state = {
        showModal: true
    };
    render() {
        return (
            <div>
                <Modal
                    visible={this.state.showModal}
                    closemodal={() => this.setState({ showModal: false })}
                    type="flipInX"
                >
                    Some text or JSX inside modal goes here...
                </Modal>
                
            </div>
        );
    }
}