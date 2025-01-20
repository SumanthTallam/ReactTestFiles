import axios from "axios";
import React, { useEffect, useState } from "react";

const URL = `https://jsonplaceholder.typicode.com/users`;

function TypeSearch() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filterUser, setFilterUser] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(URL);
      await new Promise((resolve)=>setTimeout(resolve,2000))
      setUsers(response.data);
    } catch (err) {
      console.error(err.message);
      setError("Failed to fetch users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const filterData = users.filter((user) =>
      user.name.toUpperCase().includes(inputText.toUpperCase())
    );
    setFilterUser(filterData);

    if (filterData.length === 0 && inputText.trim() !== "") {
      setError("No users found matching your search.");
    } else {
      setError(null);
    }
  }, [inputText, users]);

  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <input
            type="text"
            placeholder="Type in username..."
            value={inputText}
            onChange={handleChange}
            className="form-control form-control-sm"
          />
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-md-6">
          {loading && <h1 className="text-center">Loading...</h1>}
          {error && !loading && (
            <h1 className="text-center text-danger">{error}</h1>
          )}
          {!loading && !error && filterUser.length > 0 && (
            <ul className="list-group">
              {filterUser.map((user) => (
                <li key={user.id} className="list-group-item text-center">
                  {user.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default TypeSearch;
