import React from "react";
import PropTypes from "prop-types";

export default function About(props) {
  const containerStyle = {
    backgroundColor: props.mode === "light" ? "#05054a" : "white",
    color: props.mode === "light" ? "white" : "black",
    padding: "20px",
    borderRadius: "5px",
  };
  return (
    <div className='container' style={containerStyle}>
      <h1 className='my-3'>About us</h1>

      <div className='accordion' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='false'
              aria-controls='collapseOne'
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <strong>Analyze Your Text:</strong> Our app provides a powerful
              text analysis feature that helps you understand your text better.
              Whether it's word count, character count, or text transformation,
              our tool makes it easy to get insights into your text.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              Free to Use
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <strong>Free to Use:</strong> Our text editor and analysis tools
              are completely free to use. You can access all features without
              any cost, making it a great choice for students, professionals,
              and anyone who needs a reliable text tool.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <strong>Browser Compatible:</strong> Our app is compatible with
              all modern web browsers. Whether you are using Chrome, Firefox,
              Safari, or Edge, you can access and use our text editor without
              any issues.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapsefour'
              aria-expanded='false'
              aria-controls='collapsefour'
            >
              Made by Kshitij Kumar
            </button>
          </h2>
          <div
            id='collapsefour'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
               This app is made by Kshitij
              Kumar.
              <br />
              <strong>Email:</strong><a href="mailto:kshitijkumar3108@gmail.com">kshitijkumar3108@gmail.com</a>
              <br />
              <strong>GitHub:</strong>{" "}
              <a href='https://github.com/kshitijkr31'>github.com/kshitij</a>
              <br />
              <strong>LinkedIn:</strong>{" "}
              <a href='https://www.linkedin.com/in/kshitij-kumar-81b699204/'>
                linkedin.com/in/kshitij
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
About.propTypes = {
  mode: PropTypes.string.isRequired,
};
