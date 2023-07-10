/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import './AddCardModal.css';

function AddCardModal({ visible, onClose, handleCardAdd }) {
  const customStyles = {
    background: 'rgb(58 58 58)',
    padding: '10px',
    width: '60%',
    height: 'fit-content',
    maxWidth: '30rem',
  };
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [url, setUrl] = useState('');

  return (
    <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
      <div className="container">
        <div>
          <span className="label">Card Title</span>
          <input
            type="text"
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <span className="label">Image Url</span>
          <input
            type="text"
            className="input"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div>
          <span className="label">Detail</span>
          <textArea
            rows={10}
            className="input"
            value={detail}
            type="text"
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>

        <button
          type="button"
          disabled={title === '' && detail === '' && url === ''}
          className="saveButton"
          onClick={() => {
            handleCardAdd(title, detail, url);
            setDetail('');
            setTitle('');
            setUrl('');
          }}
        >
          Add
        </button>
      </div>
    </Rodal>
  );
}

export default AddCardModal;
