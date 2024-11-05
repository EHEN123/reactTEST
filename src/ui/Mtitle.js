import React from 'react';

export default function Mtitle({ CHblue, children }) {
  return (
    <div className='H1Div'>
      <i className="bi bi-circle-fill" style={{ color: CHblue, fontSize: '15px' }}></i>
  
    <div>
    <h1 style={{ marginTop: '5px', display: 'flex', alignItems: 'center' }}>
        {children}
        {/* <i className="bi bi-chevron-right" style={{ color: CHblue, marginLeft: '20px', fontSize: '24px' }}></i> */}
        <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 26.5L14 14.5L2 2.5" stroke="#214AEE" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </h1>
    </div>

    </div>
  );
}
