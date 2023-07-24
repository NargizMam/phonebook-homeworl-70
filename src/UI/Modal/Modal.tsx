import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

interface Props extends React.PropsWithChildren {
    show: boolean
    title: string;
}

const Modal: React.FC<Props> = ({show, title, children}) => {

    return (
        < >
            <Backdrop show={show}/>
            <div>
                <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">{title}</h1>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;