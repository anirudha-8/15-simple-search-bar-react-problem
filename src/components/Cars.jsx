import { useState } from "react";

const Cars = ({ carBrands }) => {
	const [searchCarBrand, setSearchCarBrand] = useState("");

	const filterCarBrands = carBrands.filter((carBrand) =>
		carBrand.toLowerCase().includes(searchCarBrand.toLowerCase())
	);

	return (
		<div>
			<h1>Car Brands</h1>
			<input
				type="text"
				name="carBrand"
				id="carBrand"
				placeholder="search car brand..."
				value={searchCarBrand}
				onChange={(e) => setSearchCarBrand(e.target.value)}
			/>
			<br />
			<ul>
				{filterCarBrands.map((carBrand, index) => {
					return <li key={index}>{carBrand}</li>;
				})}
			</ul>
		</div>
	);
};
export default Cars;
