import "./App.css";
import Card from "./components/Card";
const cardData = [
  {
    id: 1,
    name: "Card 1",
    imgSource:
      "https://images.pexels.com/photos/40234150/pexels-photo-40234150.jpeg",
    description: "This is card 1 description.",
  },

  {
    id: 2,
    name: "Card 2",
    imgSource:
      "https://images.pexels.com/photos/39428172/pexels-photo-39428172.jpeg",
    description: "This is card 2 description.",
  },
  {
    id: 3,
    name: "Card 3",
    imgSource:
      "https://images.pexels.com/photos/38007128/pexels-photo-38007128.jpeg",
    description: "This is card 3 description.",
  },
  {
    id: 4,
    name: "Card 4",
    imgSource:
      "https://images.pexels.com/photos/37335894/pexels-photo-37335894.jpeg",
    description: "This is card 4 description.",
  },

  {
    id: 5,
    name: "Card 5",
    imgSource:
      "https://images.pexels.com/photos/12220521/pexels-photo-12220521.jpeg",
    description: "This is card 5 description.",
  },
  {
    id: 6,
    name: "Card 6",
    imgSource:
      "https://images.pexels.com/photos/28279006/pexels-photo-28279006.jpeg",
    description: "This is card 6 description.",
  },
  {
    id: 7,
    name: "Card 7",
    imgSource:
      "https://images.pexels.com/photos/18778544/pexels-photo-18778544.jpeg",
    description: "This is card 7 description.",
  },

  {
    id: 8,
    name: "Card 8",
    imgSource:
      "https://images.pexels.com/photos/19933350/pexels-photo-19933350.jpeg",
    description: "This is card 8 description.",
  },
  {
    id: 9,
    name: "Card 9",
    imgSource:
      "https://images.pexels.com/photos/35065749/pexels-photo-35065749.jpeg",
    description: "This is card 9 description.",
  },
];
function App() {
  return (
    <>
      <section className=" bg-black text-purple-400 p-10">
        <p className="text-2xl text-center">All the cards are here.</p>
          <Card cards={cardData} />
      </section>
    </>
  );
}

export default App;
