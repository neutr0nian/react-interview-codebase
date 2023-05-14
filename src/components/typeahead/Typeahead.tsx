import { ChangeEvent, useState } from "react";
import { sampleData } from "../../constants/data";
import { debounce } from "../../utils/helper";

const getResults = (query: string): Promise<string[]> => {
  const results = sampleData.filter((data) =>
    data.toLowerCase().includes(query)
  );
  return new Promise((resolve) => {
    setTimeout(() => resolve(results), 1000);
  });
};

const Typeahead = () => {
  const [data, setData] = useState<string[]>([]);

  async function handleSearch(query: string) {
    console.log("searching ->", query);
    if (!query.length) {
      setData([]);
      return;
    }
    const results: string[] = await getResults(query);
    console.log(results);

    setData(results);
  }

  const debouncedHandleSearch = debounce(handleSearch, 500);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    debouncedHandleSearch(query);
  }

  return (
    <div className="typeahead-container">
      <input
        type="text"
        placeholder="search"
        className="search"
        onChange={handleChange}
      />
      <div className="search-options">
        {data.length > 0 && data.map((ele, index) => <p key={index}>{ele}</p>)}
      </div>
    </div>
  );
};

export default Typeahead;
