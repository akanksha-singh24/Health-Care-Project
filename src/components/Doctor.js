import React from 'react';

export default function Doctor(props) {
    
    return(
        <div className='row'>
            <div className='col-6'>
                <h2>{props.doctorList.doctorName}</h2>
            </div>

        </div>
    )
    
}