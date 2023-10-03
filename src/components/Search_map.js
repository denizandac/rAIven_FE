import SearchComponent from "./SearchComponent"
import MapLocation from "./MapLocation"
function Search_map() {
    return (
        <div className="search-map">
            <SearchComponent></SearchComponent>
            <MapLocation {...{ latitude: 39.933365, longitude: 32.859741 }}></MapLocation>
        </div>
    );
}

export default Search_map;