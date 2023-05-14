import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { flatten, searchValue } from "../utils/helper";
import { AnyObject, Results } from "../utils/types.d";
import Table from "../components/table/Table";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Locations = () => {
  const { data, loading, fetchData } = useFetch();
  const [locations, setLocations] = useState<AnyObject[]>([]);
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<Results>({ page: 1, total: 20 });

  function handleSearch(e: any) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    fetchData(`${BASE_URL}/?page=${results.page}&results=${results.total}`);
    if (data.results) {
      const locations: [] = data.results.map((res: any) => res.location);
      const flattenedLocations: AnyObject[] = locations.map((location: any) => {
        const res = flatten(location, {});
        return res;
      });
      setLocations(flattenedLocations);
    }
  }, [loading]);

  return (
    <div className="container">
      <h1>Locations</h1>
      <p>
        This challenge performs API fetching with nested object destructuring
        i.e. Object flattening using recursion
      </p>
      <input
        className="search"
        type="text"
        placeholder="search table"
        onChange={handleSearch}
      />
      {!locations.length ? (
        "Loading..."
      ) : (
        <div>
          <Table
            headers={[...Object.keys(locations[0])]}
            data={searchValue(locations, search)}
            type="locations"
          />
        </div>
      )}
    </div>
  );
};

export default Locations;
