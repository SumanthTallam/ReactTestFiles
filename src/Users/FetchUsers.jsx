// import React, { useEffect, useState } from "react";
// import { API_URL } from "./api";
// import axios from "axios";
// const FetchUsers = () => {
//   const [users, setUsers] = useState([]);

//   const fetchApi = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       console.log(response.data);
//       setUsers(response.data || []);
//     } catch (error) {
//       console.error("error", error.message);
//     }
//   };
//   useEffect(() => {
//     fetchApi();
//   }, []);
//   return (
    
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">UserCards</h1>
//       <div className="row d-flex justify-content-center align-items-center">
//         <div className="col-6">
//           <form action="input" className="form-label d-flex justify-content-center align-items-center">
//             <label htmlFor="input" className="form-label me-2"></label>
//             <input type="text" placeholder="type here..." className="form-control me-2" />
//             <button className="btn btn-primary">Click</button>
//           </form>

//         </div>
//       </div>
//       <div className="row">
//         {users.map((user) => {
//           return (
//             <div className="col-md-4 mb-4" key={user.id}>
//               <div className="card h-100">
//                 <div className="card-body">
//                   <h4 className="card-title">{user.name}</h4>
//                   <h6 className="card-subtitle mb-2 text-muted">
//                     {user.username}
//                   </h6>
//                   <p className="card-text">
//                     Email:<strong>{user.email}</strong>
//                     <br />
//                     Phone:<strong>{user.phone}</strong>
//                   </p>
//                   <p className="card-text">
//                     <small className="text-muted">
//                       Company:<strong>{user.company.name}</strong>
//                     </small>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// export default FetchUsers;
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users"; // Replace with your API

const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUser] = useState(null);
  const [inputId, setInputId] = useState("");

  const fetchApi = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log(response.data);
      setUsers(response.data || []);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleInputChange = (e) => {
    setInputId(e.target.value);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.id === parseInt(inputId));
    setFilteredUser(user || null);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">UserCards</h1>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-6">
          <form
            onSubmit={handleFilter}
            className="form-label d-flex justify-content-center align-items-center"
          >
            <label htmlFor="input" className="form-label me-2"></label>
            <input
              type="text"
              value={inputId}
              onChange={handleInputChange}
              placeholder="Type user ID here..."
              className="form-control me-2"
            />
            <button type="submit" className="btn btn-primary">
              Click
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        {filteredUser ? (
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">{filteredUser.name}</h4>
                <h6 className="card-subtitle mb-2 text-muted">
                  {filteredUser.username}
                </h6>
                <p className="card-text">
                  Email: <strong>{filteredUser.email}</strong>
                  <br />
                  Phone: <strong>{filteredUser.phone}</strong>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Company: <strong>{filteredUser.company.name}</strong>
                  </small>
                </p>
              </div>
            </div>
          </div>
        ) : (
          users.map((user) => (
            <div className="col-md-4 mb-4" key={user.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">{user.name}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {user.username}
                  </h6>
                  <p className="card-text">
                    Email: <strong>{user.email}</strong>
                    <br />
                    Phone: <strong>{user.phone}</strong>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Company: <strong>{user.company.name}</strong>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FetchUsers;

