import "../styles/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav-box">
        <a className="name-logo" href="/">MADS</a>
        <a className="nav-item" href="/contact">Contact</a>
        <a className="nav-item" href="/about">About</a>
        <a className="nav-item" href="/portfolio">Portfolio</a>
      </div>
    </>
  )
}

export default Navbar;