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

			<div className='container'>
				
				<CardNew details={CivilLawyer} />
				
				<CardNew details={CorporateLawyer} />
			
				<CardNew details={CriminalLawer} />
			
				<CardNew details={DivorceLawyer} />
			</div>

	
		</>
	);
}
export default ChooseYourAdvocate;
