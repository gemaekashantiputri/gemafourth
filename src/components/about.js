import '../style/home.css'
import '../style/topnav.css'
import '../style/about.css'

const About = () => {
  return (
    <>
      <header className="head">
      <center>
        <img src='/title.png' alt='gemashi' href='/'/>
      </center>
      </header>
      
      <nav>
      <center>
      <ul class="navbar">
        <li class="nav-item">
          <a class="article" href="/">Article</a>
        </li>
        <li class="nav-item">
          <a class="about" href="/about">About us</a>
        </li>
      </ul>
      </center>
      </nav>
      
      <div className='about-header'>
        <h2>About</h2>
        <p>gemashi adalah website blog tulisan-tulisan random tentang Drama dan Burung</p>
      </div>
      </>
  )
}

export default About;