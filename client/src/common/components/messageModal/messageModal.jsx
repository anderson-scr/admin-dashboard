import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from 'redux/slices/messageModalSlice';
import "./messageModalStyle.css";

// Icons
import { CiWarning } from "react-icons/ci";
import { MdOutlineCancel, MdOutlineDoneAll } from "react-icons/md";

const MessageIndex = () => {
  const dispatch = useDispatch();
  const { icon } = useSelector(state => state.showMessageModal);
  const { title } = useSelector(state => state.showMessageModal);
  const { bodyText } = useSelector(state => state.showMessageModal);

  const icons = {
    "success": <MdOutlineDoneAll size={100} className="icon-success" />,
    "warning": <CiWarning size={100} className="icon-warning" />,
    "error": <MdOutlineCancel size={100} className="icon-error" />
  }
  useEffect(() => {
    console.log("Message Modal started once.");
  }, []);

  return (
    <div className='modal-container'>
      <div className='modalBody d-flex flex-column justify-content-between'>
        <section className='modalIcon d-flex justify-content-center mt-4'>
          { icons[icon] }
        </section>
        <section className='modalHeader'>
          <h2>
            { title }
          </h2>
        </section>
        
        <section className='main-modal-body'>
          { bodyText }
        </section>

        <section className='modalFooter'>
          <hr />
          <div className="container d-flex justify-content-end">
            <button className='btn btn-primary w-25 btnDefault' onClick={() => dispatch(hideModal())}>
              Ok
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MessageIndex;