import NavBar from "./components/nav/NavBar";
import SliderBar from "./components/slider/SliderBar";
import "./global.css"

export default function Home() {
  return (
	<main>
		<NavBar auth={true}/>
		<SliderBar />
	</main>
  );
}
