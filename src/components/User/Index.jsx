import React from 'react';
import './User.css'

export const User = ({ data }) => {
	return (
		<div className="parent">
			<div className='block'>
				<div>{data.name}</div>
                <div>{data.age}</div>
                <div>{data.country}</div>
                <img src={data.img} alt="" className="img"/>
			</div>
		</div>
	)
}