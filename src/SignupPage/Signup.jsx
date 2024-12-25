import React from "react";

const Signup = () => {
  return (
    <div className="container">
      <form className="row g-3">
        <h2 className="text-center text-primary ">Signup Page</h2>
        <div className="col-md-6">
          <label htmlFor="inputEmail" className="form-label text-danger">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="@gmail.com"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="******"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="address" className="form-label">
            Address 1
          </label>
          <input
            type="text"
            className="form-control"
            id="address1"
            placeholder="eg:123 street"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="address2" className="form-label">
            Address2
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="eg:3456 street"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input type="text" className="form-control" placeholder="cityname" />
        </div>
        <div className="col-md-4">
          <label htmlFor="select" className="form-label">
            State
          </label>
          <select name="select" id="inputSelect" className="form-select">
            <option value="">Select a state</option>
            <option value="banglore">banglore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="zip" className="form-label">
            ZipCode
          </label>
          <input type="text" className="form-control" placeholder="eg:12345" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />

            <label htmlFor="checkbox" className="form-check-label">
              Check Me
            </label>
          </div>
        </div>
      </form>
      <div className="col-12 mt-4">
        <button className="btn btn-primary" type="submit">
          Signup
        </button>
      </div>
    </div>
  );
};
export default Signup;
