import './App.css';

const Login = ()=>{
  return(
    <div className="login container">
      <h1>Login Form</h1>
      <form>
        <input type="text" placeholder="Type Of User"/>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button className="btn">Login</button>
      </form>
    </div>
  );
}

const Signup = ()=>{
  return(
    <div className=" signup container-alt">
       <h1>Signup Form</h1>
       <form>
        <input type="text" placeholder="Type Of User"/>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm Password" />
        <button className="btn">Signup</button>
      </form>
    </div>
  );
}

const Orders = ()=>{
  return(
    <div className="orders container">
      <h1>Orders</h1>    
     

      <div className="grid">
        <div className="card">
          <p>Order Details  --></p>
          <p>Sales Order --></p>
          <p>Invoice --></p>
          <p>Sales Receipt --></p>
          <p>Delivery Status --></p>
          <p>Payment Status --></p>
        </div>
      </div>
    </div>
  );
}

const Products = ()=>{
  return(
    <div className="products container-alt">
      <h1>Products</h1>    
     

      <div className="grid">
        <div className="card">
          <p>Product Image  --></p>
          <p>Product SKU --></p>
          <p>Product name --></p>
          <p>Product char1 --></p>
          <p>Product char2 --></p>
          <p>Product char3 --></p>
        </div>
      </div>
    </div>
  );
}

const Clients = ()=>{
  return(
    <div className="clients container"> 
      <h1>Clients</h1>    
     

      <div className="grid">
        <div className="card">
          <p>Client Name  --></p>
          <p>Client ID --></p>
          <p>Client Website --></p>
          <p>Client email --></p>
          <p>Client telephone --></p>
          <p>Client social media --></p>
          <p>Client address --></p>
        </div>
      </div>
    </div>
  );
}

const Analytics = ()=>{
  return(
    <div className="analytics container-alt">
      <h1>Analytics</h1>    
     

      <div className="grid">
        <div className="card">
          <p>Sales of Products  --></p>
          <p>Sales according to clients --></p>
          <p>Sales prediction --></p>
          <p>Inventory --></p>
          <p>Payment details --></p>
        </div>
      </div>
    </div>
  );
}

const CustomerRelMan = ()=>{
  return(
    <div className="crm container">
      <h1>Customer Relationship Manager</h1>
      <p>Open functionality</p>
    </div>
  );
}

const FunctionalityDashboard = ()=>{
  return(
    <div className="fdash container-alt">
      <h1>Functionality Dashboard </h1>
      <div className="grid-2">
        <div className="card">
          <h3>Manager</h3>
          <p>Signup Accounts(SP,War,Finan)</p>
          <p>Orders:CRUD</p>
          <p>Products:CRUD</p>
          <p>Clients:CRUD</p>
          <p>Analytics: All</p>
          <p>CRM Lead tracking : all</p>
        </div>
       <div className="card">
                <h3>Sales Person</h3>
                <p>Orders:SO,View Own</p>
                <p>Clients:Add,view own</p>
                <p>Analytics: view for own clients</p>
                <p>CRM Lead tracking : own clients</p>
       </div>
        <div className="card">
          <h3>Warehouser</h3>
          <p>Orders:Invoice edit dispatch info,view all </p>
          <p>Products:CRUD</p>
          <p>Clients:view all</p>
          <p>Analytics: Inventory</p>
        </div>
        <div className="card">
          <h3>Financier</h3>
          <p>Orders:Invoice,Payments,Sales Receipt crud  </p>
          <p>Products:view all</p>
          <p>Clients:view all</p>
        </div>
      </div>
    </div>
  );
}



function App() {
  return (
    <>
      <Login/>
      <Signup/>
      <Orders/>
      <Products/>
      <Clients/>
      <Analytics/>
      <CustomerRelMan/>
      <FunctionalityDashboard/>
    </>
  );
}

export default App;
