import "./NavBar2.css";

export default function NavBar({ showButtons }) {
  return (
    <nav className="navigationBar">
      <div className="upperNav">
        <h1 className="websiteName"> Cosmic Commerce </h1>
        <div className="searchbarcontainer">
          <img
            className="searchicon"
            src="/magnifyingglass.svg"
            alt="search"
          />
          <input className="searchBar" type="text" placeholder="Search..." />
        </div>
        {showButtons ? (
          <div className="logincreateAccountButtons">
            <button className="login"> Login </button>
            <button className="createAccount">Sign up</button>
          </div>
        ) : (
          <div className="hidden"> </div>
        )}
      </div>
      <div className="lowernav">
        <h2 className="womens">Women's</h2>
        <h2 className="mens">Men's</h2>
        <h2 className="childrens">Children's</h2>
        <h2 className="color">Color</h2>
        <h2 className="price">Price</h2>
      </div>
    </nav>
  );
}
