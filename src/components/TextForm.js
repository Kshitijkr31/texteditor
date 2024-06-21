import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter Here');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UPPERCASE', 'success');
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase', 'success');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to clipboard', 'success');
    document.getSelection().removeAllRanges();
  };

  const handleSpaces = () => {
    let newText = text.split(/[ ]+/).join(' ');
    setText(newText);
    props.showAlert('Extra spaces removed', 'success');
  };

  const handleCleartext = () => {
    let newText = '';
    setText(newText);
    props.showAlert('Text cleared', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743',
            }}
          ></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 mb-3" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 mb-3" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button disabled = {text.length===0} className="btn btn-danger mx-2 mb-3" onClick={handleCleartext}>
          Clear text
        </button>
        <button disabled = {text.length===0}className="btn btn-danger mx-2 mb-3" onClick={handleCopy}>
          Copy
        </button>
        <button disabled = {text.length===0}className="btn btn-danger mx-2 mb-3" onClick={handleSpaces}>
          Clear Spaces
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>YOUR TEXT SUMMARY</h1>
        <p>{text.split(' ').filter((word) => word.length > 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').filter((word) => word.length > 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
      </div>
    </>
  );
}
