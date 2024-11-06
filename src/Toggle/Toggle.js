import React from 'react';
import './toggle.css';
import PropTypes from 'prop-types';


const Toggle = ({ onToggle }) => {
    
    return (
        <div style={{display: 'flex', justifyContent: 'end', paddingBottom: '4rem', paddingRight: '2rem'}}>
            <label>
                <input className='toggle-checkbox' type='checkbox' onChange={onToggle} aria-label="Toggle theme"></input>
                <div className='toggle-slot'>
                    <div className='sun-icon-wrapper'>
                        <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                    </div>
                    <div className='toggle-button'></div>
                    <div className='moon-icon-wrapper'>
                    <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                    </div>
                </div>
            </label>
        </div>
    )
};

Toggle.defaultProps = {
    onToggle: PropTypes.func,
  };

export default Toggle;