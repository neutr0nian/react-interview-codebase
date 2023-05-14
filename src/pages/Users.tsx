import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { flatten, searchValue } from "../utils/helper";
import { AnyObject, Results } from "../utils/types.d";
import Table from "../components/table/Table";
import Dropdown from "../components/dropdown/Dropdown";
import { numberOfResults } from "../constants/data";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Users = () => {
  const { data, loading, setLoading, fetchData } = useFetch();
  const [users, setUsers] = useState<AnyObject[]>([]);
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<Results>({ page: 1, total: 20 });

  function handleSearch(e: any) {
    setSearch(e.target.value);
  }

  function handlePagination(type: string) {
    if (type === "prev") {
      setResults({ ...results, page: results.page - 1 });
    } else {
      setResults({ ...results, page: results.page + 1 });
    }
  }

  function handleResults(e: any) {
    setLoading(true);
    setResults({ ...results, total: e });
  }

  useEffect(() => {
    fetchData(`${BASE_URL}/?page=${results.page}&results=${results.total}`);
    if (data.results) {
      const users: AnyObject[] = data.results.map((res: any) => {
        const user = {
          ...flatten(res.name, {}),
          email: res.email,
          gender: res.gender,
          phone: res.phone,
          ...flatten(res.dob, {}),
        };
        return user;
      });
      setUsers(users);
    }
  }, [loading, results]);

  return (
    <div className="container">
      <h1>Users</h1>
      <p>
        This challenge performs a API Fetchching with basic object
        destructuring.
      </p>
      <div className="table-op">
        <input
          className="search"
          type="text"
          placeholder="search table"
          onChange={handleSearch}
        />
        <div className="flex">
          <Dropdown
            options={numberOfResults}
            selected={results.total}
            handleSelect={handleResults}
          />
          <button
            disabled={results.page === 1}
            onClick={() => handlePagination("prev")}
          >
            Prev
          </button>
          <button
            className="btn-light"
            onClick={() => handlePagination("next")}
          >
            Next
          </button>
        </div>
      </div>
      {loading || !users.length ? (
        "Loading..."
      ) : (
        <div>
          <Table
            headers={[...Object.keys(users[0])]}
            data={searchValue(users, search)}
            type="users"
          />
        </div>
      )}
    </div>
  );
};

export default Users;
