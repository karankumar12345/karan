import React from 'react';

const DownloadResume: React.FC = () => {
  const handleDownload = () => {
    // Path to the resume file (it could be in the public folder)
    const resumeUrl = './KaranKumarResume (3).pdf';

    // Create an anchor element to trigger the download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf'; // Name of the file after download
    link.click(); // Trigger the download action
  };

  return (
    <div>
      <button onClick={handleDownload} style={buttonStyle}>
        Download My Resume
      </button>
    </div>
  );
};

// Optional: style for the button
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default DownloadResume;
