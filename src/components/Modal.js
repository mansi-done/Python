import React from 'react';

const myslab=(sl)=>{
    return(<p> NPS ≥ {sl.score}  -  {sl.point}</p>)
}

const Modal = ({showModal,modelfunc,prop}) => {
    // console.log(prop.prop.name)
    return <>
            {showModal ?
             <div>{prop.prop.slab.map(myslab)}</div> 
             
            : null}
    </>
}



export default Modal
