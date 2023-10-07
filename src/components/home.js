import '../style/home.css'
import '../style/topnav.css'
import '../style/card.css'

const Home = () => {
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

<div class="grid">

  <a class="card" href="/celebritydrama">
    <h2>Understanding Pain Point in Korean Drama “Celebrity”</h2>
    <p>
      Drama Celebrity memiliki beberapa pain point dan sub pain point. Salah satu pain point 
      dalam drama Celebrity adalah bagaimana menjadi populer.
    </p>
    <div class="shine"></div>
    <div class="background">
      <div class="tiles">
        <div class="tile tile-1"></div>
        <div class="tile tile-2"></div>
        <div class="tile tile-3"></div>
        <div class="tile tile-4"></div>

        <div class="tile tile-5"></div>
        <div class="tile tile-6"></div>
        <div class="tile tile-7"></div>
        <div class="tile tile-8"></div>

        <div class="tile tile-9"></div>
        <div class="tile tile-10"></div>
      </div>

      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>
  </a>

  <a class="card" href="/behind">
    <h2>Bahas User Persona Dokter Bong Ye-bun di drama “Behind your touch”</h2>
    <p>
      Dokter Bong Ye-bun juga merupakan representasi dari dokter hewan lainnya khususnya yang membuka klinik hewan sendiri.
    </p>
    <div class="shine"></div>
    <div class="background">
      <div class="tiles">
        <div class="tile tile-1"></div>
        <div class="tile tile-2"></div>
        <div class="tile tile-3"></div>
        <div class="tile tile-4"></div>

        <div class="tile tile-5"></div>
        <div class="tile tile-6"></div>
        <div class="tile tile-7"></div>
        <div class="tile tile-8"></div>

        <div class="tile tile-9"></div>
        <div class="tile tile-10"></div>
      </div>

      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>
  </a>

  <a class="card" href="/bird">
    <h2>Arti burung yang terbang berkawanan dalam formasi V</h2>
    <p>
      Tidak jarang kita jumpai burung terbang berkawanan dengan formasi V di langit saat kita sedang beraktivitas diluar.
    </p>
    <div class="shine"></div>
    <div class="background">
      <div class="tiles">
        <div class="tile tile-1"></div>
        <div class="tile tile-2"></div>
        <div class="tile tile-3"></div>
        <div class="tile tile-4"></div>

        <div class="tile tile-5"></div>
        <div class="tile tile-6"></div>
        <div class="tile tile-7"></div>
        <div class="tile tile-8"></div>

        <div class="tile tile-9"></div>
        <div class="tile tile-10"></div>
      </div>

      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>
  </a>
</div>

      </>
  )
}

export default Home;