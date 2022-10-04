




function AdminHome() {
    return (
      <div className="admin">
         <BrowserRouter>
          <Routes>
             <Route path="/Admin/" element={<h1>Admin Home</h1>}></Route>
  
            {/* <Route path="/AdminHome/ViewUsers" element={<ViewUsers />}></Route> */}
       
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;