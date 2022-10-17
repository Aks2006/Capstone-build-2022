import React from 'react'
import '../Home/css/Advocate.css'
import CardNew from './CardNew'
import CivilLawyer from './CivilLawyer'
import CorporateLawyer from './CorporateLawyer'
import CriminalLawer from './CriminalLawyer'
import DivorceLawyer from './DivorceLawyer'
import Dropdown from './Dropdown';

const ChooseYourAdvocate = () => {
	return (
		<>
<Dropdown />
			<div className='container'>
				<h1 className='heading'>CivilLawyer</h1>
				<CardNew details={CivilLawyer} />
				<h1 className='heading'>CorporateLawyer</h1>
				<CardNew details={CorporateLawyer} />
				<h1 className='heading'>CriminalLawer</h1>
				<CardNew details={CriminalLawer} />
				<h1 className='heading'>DivorceLawyer</h1>
				<CardNew details={DivorceLawyer} />
			</div>

	
		</>
	);
}
export default ChooseYourAdvocate;
