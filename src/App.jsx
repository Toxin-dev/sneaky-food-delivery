import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import FeaturedFood from "./Components/FeaturedFood";
import Heading from "./Components/Common/Heading";
import FoodMenu from "./Components/FoodMenu";
import Reservation from "./Components/Reservation";
import OurChef from "./Components/OurChef";
import CTA from "./Components/CTA";
export default function App() {
	function SectionSeprator() {
		return <div className='mb-5'></div>;
	}
	return (
		<main>
			<Navbar />
			<Hero data={[{ dish: "sandwitch" }, { dish: "cake" }]} />
			<SectionSeprator />
			<About>
				<Heading
					primary={"About us"}
					secondary={"We speak the good food language"}
				/>
			</About>
			<SectionSeprator />
			<FeaturedFood data={[{}, {}]}>
				<Heading
					primary={"Featured food"}
					secondary={"Fresh taste and greate price"}
				/>
			</FeaturedFood>
			<SectionSeprator />
			<FoodMenu data={[{}, {}]}>
				<Heading primary='Food Menu' secondary='Deliciour food' />
			</FoodMenu>
			<Reservation />
			<OurChef data={[{}, {}, {}]} />
			<CTA>
				<Heading primary='Reservation' secondary='Get experience from sneaky' />
			</CTA>
		</main>
	);
}
