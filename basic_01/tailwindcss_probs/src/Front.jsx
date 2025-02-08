import PropTypes from "prop-types";
function Repeat({ city = "Paris", imgurl = null }) {
  return (
    <div className="flex flex-col bg-white shadow-xl rounded-2xl overflow-hidden w-80 transform transition duration-300 hover:scale-105">
      <div className="relative">
        <img src={imgurl} alt={city} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-white text-2xl font-bold">{city}</h3>
          <p className="text-gray-300 text-sm">Discover the beauty</p>
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-gray-800">{`Explore ${city}`}</h2>
        <p className="text-gray-600 mt-2">
          Experience the stunning attractions, culture, and lifestyle of {city}.
        </p>
        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium">
          Learn More
        </button>
      </div>
    </div>
  );
}
Repeat.propTypes = {
  city: PropTypes.string.isRequired,
  imgurl: PropTypes.string,
};

export default Repeat;
