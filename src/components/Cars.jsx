import { useState } from "react";

const Cars = ({ carBrands }) => {
	const [searchCarBrand, setSearchCarBrand] = useState("");

	const filterCarBrands = carBrands.filter((carBrand) => {
		carBrand.toLowerCase().include(searchCarBrand.toLowerCase());
	});

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
		</div>
	);
};
export default Cars;
