import "../styles/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav-box">
        <a className="nav-item" href="/home">Home</a>
        <a className="nav-item" href="/portfolio">Portfolio</a>
        <a className="nav-item" href="/about">About</a>
        <a className="nav-item" href="/contact">Contact</a>
      </div>
    </>
  )
}

export default Navbar;