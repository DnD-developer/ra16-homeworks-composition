import React from "react"
import ReactDOM from "react-dom/client"
import Card from "./components/Card-component/Card"
import ImgCard from "./components/Card-component/includes/ImgCard"

const data = {
	title: "Card title",
	text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
	linkElement: {
		link: "https://netology.ru/profile/program/ra-51/lessons/260409/lesson_items/1448972",
		linkText: "Go somewhere"
	},
	img: "https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg"
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<Card data={data}>
			<ImgCard linkImg={data.img} />
		</Card>
	</>
)
