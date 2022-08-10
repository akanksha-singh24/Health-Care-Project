import React from 'react';

export default function Doctor(props) {
    console.log(props)
    return(
        <div className='row'>
            <div className='col-6'>
                <h2>{props.doctorName}</h2>
            </div>

        </div>
    )
    
}