
function signUp() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 offset-lg-3">
          <h1 className="my-4">Sign Up</h1>

          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input className="form-control"
                placeholder="Your username"
                name="username"
                type="text"
                // value={username}
                // onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input className="form-control"

                placeholder="Your email address"
                name="email"
                type="email"
                // value={email}
                // onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input className="form-control"
              
                placeholder="Your password"
                name="pwd"
                type="password"
                // value={password}
                // onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="pwd">Confirm Password:</label>
              <input className="form-control"

                placeholder="Confirm your password"
                name="pwd"
                type="password"
                // value={password}
                // onChange={handleChange}
              />  
            </div>
            
            <button type="submit" className="btn btn-primary col-12 col-md-3 offset-md-9">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default signUp;