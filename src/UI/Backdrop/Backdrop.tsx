import React from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {openModal, selectIsShowModal} from "../../store/ContactsSlice";



const Backdrop: React.FC= () => {
    const dispatch = useAppDispatch();
    const isShow = useAppSelector(selectIsShowModal);
    const close = () => {
        dispatch(openModal(false));
    }
  return (
      <div
          className="modal-backdrop show"
          style={{display: isShow ? 'block': 'none'}}
          onClick={close}
      />
  );
};

export default Backdrop;
