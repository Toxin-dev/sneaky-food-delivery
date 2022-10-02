import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import FeaturedFood from "./Components/FeaturedFood";
import Heading from "./Components/Common/Heading";
import FoodMenu from "./Components/FoodMenu";
import Reservation from "./Components/Reservation";
import OurChef from "./Components/OurChef";
import CTA from "./Components/CTA";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import ListView from "./Components/Common/ListView";
import {
	OurChef as chefs,
	hero as heroImages,
	featured_food,
	food_menu,
} from "./util/dummyData";
export default function App() {
	function SectionSeprator() {
		return <div style={{ marginBottom: "10rem" }}></div>;
	}
	function Seprator() {
		return <div className='mb-3'></div>;
	}
	return (
		<main>
			<Navbar />
			<SectionSeprator />
			<Hero data={heroImages} />
			<SectionSeprator />
			<About>
				<Heading
					primary={"About us"}
					secondary={"We speak the good food language"}
				/>
			</About>
			<SectionSeprator />
			<FeaturedFood data={featured_food}>
				<Heading
					primary={"Featured food"}
					secondary={"Fresh taste and greate price"}
				/>
			</FeaturedFood>
			<SectionSeprator />
			<FoodMenu data={food_menu}>
				<Heading primary='Food Menu' secondary='Deliciour food' />
			</FoodMenu>
			<SectionSeprator />
			<Reservation />
			<SectionSeprator />
			<OurChef data={chefs} />
			<SectionSeprator />
			<CTA>
				<Heading primary='Reservation' secondary='Get experience from sneaky' />
			</CTA>
			<SectionSeprator />
			<Blog data={[{}, {}, {}]}>
				<Heading primary='Our Blog' secondary='Latest food and recipe news' />
			</Blog>
			<SectionSeprator />
			<Footer>
				<ListView
					title='Top Products'
					item={[
						"Manage Website",
						"Manage Reputation",
						"Power Tool",
						"marketing service",
					]}
				/>
				<ListView
					title='Feature'
					item={["Jobs", "Brand assets", "Investor", "Terms of service"]}
				/>
				<ListView
					title='Resource'
					item={["Guides", "Resarch", "Experts", "Agenciess"]}
				/>
			</Footer>
		</main>
	);
}
