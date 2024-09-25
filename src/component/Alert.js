import React from 'react'

function Alert(props) {
  const Capatalized = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);

  }
  return (
    props.alert && (<div><div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
    <strong>{Capatalized(props.alert.type)}</strong> :{props.alert.msg}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" ></button>
  </div>
  </div>
  ))
}

export default Alert;

// props.alert && :- it is used because it check first if the props.alert is null then it will move to next staement
// and but if its true then it will chek for the furhter statement , because it has and operator