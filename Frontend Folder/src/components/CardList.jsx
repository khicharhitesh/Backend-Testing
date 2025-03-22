import React, { useEffect, useState } from "react";
import Filter from "./Filter";

const Card = ({ img, foodName, starRating, foods, place, distance, cost }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 m-4 w-full sm:w-64 text-center">
      <img src={img} alt={foodName} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold mt-2">{foodName}</h3>
      <p className="text-yellow-500 text-lg">⭐ {starRating}</p>
      <p className="text-gray-600">🍽Foods: {foods.join(", ")}</p>
      <p className="text-gray-500 mt-1">📍{place}</p>
      <p className="text-gray-400">📏{distance}</p>
      <p className="text-green-600 font-bold">💰{cost}</p>
    </div>
  );
};

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("https://cards-full-stack.onrender.com/cards")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredCards = cards
    .filter((item) =>
      item.foodName.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "name") return a.foodName.localeCompare(b.foodName);
      if (sort === "star") return b.starRating - a.starRating;
      if (sort === "cost") return a.cost - b.cost;
      if (sort === "distance") return parseFloat(a.distance) - parseFloat(b.distance);
      return 0;
    });

  return (
    <div>
      <Filter setSearch={setSearch} setSort={setSort} />
      <div className="flex flex-wrap justify-center p-4 gap-4">
        {filteredCards.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            foodName={item.foodName}
            starRating={item.starRating}
            foods={item.foods}
            place={item.place}
            distance={item.distance}
            cost={item.cost}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;