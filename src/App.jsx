import "./App.css";
import Cars from "./components/Cars";

function App() {
	const carBrands = [
		"Toyota",
		"Suzuki",
		"Audi",
		"Tata",
		"Tesla",
		"BMW",
		"Porche",
		"Benz",
	];

	return (
		<div>
			<Cars carBrands={carBrands} />
		</div>
	);
}

export default App;
