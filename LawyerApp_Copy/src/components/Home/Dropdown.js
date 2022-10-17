import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
const actions = [
  { label: "CriminalLawer", value: 1 },
  { label: "DivorceLawyer", value: 2 },
  { label: "CorporateLawyer", value: 3 },
  { label: "CivilLawyer", value: 4 }

];
const Dropdown = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <Select options={ actions } />
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>
);
export default Dropdown