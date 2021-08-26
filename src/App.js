import React, { useState } from 'react';
import './App.css';
import { User } from './components/User/Index';
import { data } from './users';

function App() {
	const [age, setAge] = useState(1)
	const [country, setCountry] = useState()

	const renderCount = () => {
		switch (country) {
			case 1:
				let arr3 = data.filter((el) => {
					return el.age < 18 && el.country === 'Kyrgyz'
				})
				return arr3.map((el, id) => {
					return <User data={el} key={id} />
				})
			case 2:
				let arr4 = data.filter((el) => {
					return el.age < 18 && el.country !== 'Kyrgyz'
				})
				return arr4.map((el, id) => {
					return <User data={el} key={id} />
				})

			default:
				let arr = data.filter((el) => {
					return el.age < 18
				})
				return arr.map((el, id) => {
					return <User data={el} key={id} />
				})
		}
	}

	const renderUsers = () => {
		switch (age) {
			case 1:
				return (
					<>
						<div>
							<button
								onClick={() => setCountry(1)}
								className='btn1'
							>
								Kyrgyz →
							</button>
							<button
								onClick={() => setCountry(2)}
								className='btn1'
							>
								Foreigner →
							</button>
							<div>{renderCount()}</div>
						</div>
					</>
				)
			case 2:
				let arr1 = data.filter((el) => {
					return el.age > 18 && el.age < 25
				})
				return arr1.map((el, id) => {
					return <User data={el} key={id} />
				})
			case 3:
				let arr2 = data.filter((el) => {
					return el.age > 24
				})
				return arr2.map((el, id) => {
					return <User data={el} key={id} />
				})
			case 4:
				return data.map((el, id) => {
					return <User data={el} key={id} />
				})

			default:
				return ''
		}
	}

	return (
		<div className='App'>
			<h1>Our best users</h1>
			<div className='btn-group'>
				<button onClick={() => setAge(1)} className='btn'>
					less than 18 →
				</button>
				<button onClick={() => setAge(2)} className='btn'>
					from 18 to 24 →
				</button>
				<button onClick={() => setAge(3)} className='btn'>
					from 24 to 50 →
				</button>
				<button onClick={() => setAge(4)} className='btn'>
					All participants →
				</button>
			</div>

			<div className='container'>{renderUsers()}</div>
		</div>
	)
}
export default App;