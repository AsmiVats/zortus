import React from 'react';

const Card2: React.FC = () => {
    const cards = [
        { id: 'card1', title: 'Card 1', color: 'bg-blue-400' },
        { id: 'card2', title: 'Card 2', color: 'bg-orange-400' },
        { id: 'card3', title: 'Card 3', color: 'bg-blue-300' },
        { id: 'card4', title: 'Card 4', color: 'bg-pink-300' },
    ];

    return (
        <div className="container mx-auto p-4">
            <ul className="grid grid-cols-1 gap-[4vw]">
                {cards.map((card, index) => (
                    <li
                        className="sticky top-0"
                        id={card.id}
                        key={card.id}
                        style={{ '--index': index + 1 } as React.CSSProperties}
                    >
                        <div
                            className={`card-body ${card.color} flex justify-center items-center rounded-3xl shadow-lg transition-all duration-500 h-[87vh]`}
                            style={{ paddingTop: `calc(${index + 1} * 1.5em)` }}
                        >
                            <h2 className="text-white text-4xl">{card.title}</h2>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Card2;
