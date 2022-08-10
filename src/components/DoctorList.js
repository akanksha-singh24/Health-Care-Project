import React from 'react';
import Doctor from './Doctor';

export default function DoctorList({props}) {
    
    return ( 
        props.doctorList.map((doctor,i)=>{
           return <Doctor Doctor={doctor} key={i}/>
        })
     );
}

