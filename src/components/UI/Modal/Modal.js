import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxilary';
import Backdrop from '../Backdrop/Backdrop';
const Modal = (props) => (
    <Aux>
        <Backdrop show = {props.show} clicked = {props.modalClosed} />
        <div 
            className = {classes.Modal}
            style = {{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
        >
            <div className="ModalContent">
                <div className="ModalBody">
                    {props.children}
                </div>
            </div>
        </div>
    </Aux>
);

export default Modal;