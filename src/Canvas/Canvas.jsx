import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
const Canvas = () => {
  const captureRef = useRef();

  const captureImage = () => {
    const element = captureRef.current; // Target DOM element
    html2canvas(element).then((canvas) => {
      const imageURL = canvas.toDataURL('image/png'); // Convert canvas to image
      const link = document.createElement('a');
      link.href = imageURL;
      link.download = 'screenshot.png';
      link.click(); // Trigger download
    });
  };

  return (
    <div>
      <div ref={captureRef} style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <h2>Hello, this will be captured!</h2>
        <p>HTML content to convert into a canvas.</p>
      </div>
      <button onClick={captureImage}>Capture Screenshot</button>
    </div>
  );
};

export default Canvas ;
