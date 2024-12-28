const Service: React.FC = () => {
    const cards = [
        { id: 'card1', title: 'Quizzes', description: 'With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.', color: 'bg-beige-200', visualColor: 'bg-gray-300', width: '986px' },
        { id: 'card2', title: 'PPT Generation', description: 'With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.', color: 'bg-purple-100', visualColor: 'bg-pink-200', width: '1044px' },
        { id: 'card3', title: '3D Simulation', description: 'With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.', color: 'bg-green-200', visualColor: 'bg-green-300', width: '1102px' },
        { id: 'card4', title: 'Document Converter', description: 'With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.', color: 'bg-blue-100', visualColor: 'bg-pink-200', width: '1160px' },
    ];

    return (
        <div className="container mx-auto p-8 flex justify-center">
            <ul className="grid grid-cols-1 gap-[4vw]">
                {cards.map((card, index) => (
                    <li
                        className="sticky top-0 flex justify-center"
                        id={card.id}
                        key={card.id}
                        style={{ '--index': index + 1 } as React.CSSProperties}
                    >
                        <div
                            className={`flex flex-col md:flex-row items-center justify-between rounded-3xl shadow-lg transition-all duration-500 p-8 ${card.color}`}
                            style={{
                                width: `calc(${card.width})`,
                                maxWidth: '100%',
                                height: 'auto',
                                paddingTop: `calc(${index + 1} * 1.5em)`,
                            }}
                        >
               
                            <div className="flex-1">
                                <h2 className="text-black text-3xl font-bold mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                                    {card.title}
                                </h2>
                                <p className="text-gray-700 mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                                    {card.description}
                                </p>
                                <ul className="mb-6">
                                    <li className="flex items-center gap-2 mb-2">
                                        <div className="w-3 h-3 rounded-full bg-black"></div>
                                        <span style={{ fontFamily: 'Manrope, sans-serif' }}>Awesome visual identities & logo(s)</span>
                                    </li>
                                    <li className="flex items-center gap-2 mb-2">
                                        <div className="w-3 h-3 rounded-full bg-black"></div>
                                        <span style={{ fontFamily: 'Manrope, sans-serif' }}>Awesome visual identities & logo(s)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-black"></div>
                                        <span style={{ fontFamily: 'Manrope, sans-serif' }}>Awesome visual identities & logo(s)</span>
                                    </li>
                                </ul>
                                <button className="mt-4 px-6 py-3 text-sm font-medium text-white bg-black rounded-lg shadow-lg hover:bg-gray-800" style={{ fontFamily: 'Manrope, sans-serif' }}>
                                    View Project →
                                </button>
                            </div>
                     
                            <div
                                className={`flex-1 w-full md:w-1/2 h-64 rounded-lg ${card.visualColor}`}
                            ></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Service;
