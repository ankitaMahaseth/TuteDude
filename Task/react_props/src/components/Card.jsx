

const Card = ({ cards }) => {
    
  return (
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
            <div 
                key={card.id}
                className="bg-linear-to-br from-purple-500 via-pink-500 to-orange-400 m-10 p-0.5" >
                <div className="flex flex-col items-center bg-black px-4 py-7">
                    
                    <img
                        src={card.imgSource}
                        alt={card.name}
                        className="h-22 w-22 object-cover rounded-lg"
                    />
            
                    <h2 className="text-xl font-bold text-purple-600 text-center mt-5">
                        {card.name}
                    </h2>

                    <p className="text-purple-400 mt-2 text-center font-semibold">
                        {card.description}
                    </p>
                </div>
            </div>
            ))}
        </div>  

    
  );
}

export default Card;
