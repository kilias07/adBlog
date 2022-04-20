
export const GridButtons = ({uniqueValue, activeLink, setActiveLink}) => {

    return (
        <div className="flex justify-center flex-wrap">
            {uniqueValue.map(category => (
                <button
                    onClick={() => setActiveLink(category)}
                    key={category}
                    className={`font-lato uppercase shadow bg-gray-800 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded mx-2 mt-4 ${activeLink === category ? ' active-button' : ' '}`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

