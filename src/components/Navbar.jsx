export function Navbar () {
  return (
    <header>
      <nav id='navbar'>
        <div className='nav-brand'>
          <img src='https://via.placeholder.com/30x30' alt="logo" />
          <h1>Space Fligth News</h1>
        </div>
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/">Trending</a></li>
          <li><a href="/">Categories</a></li>
          <li><a href="/">About us</a></li>
        </ul>
      </nav>
    </header>
  )
}
