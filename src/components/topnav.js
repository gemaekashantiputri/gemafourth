import '../style/topnav.css'

const Topnav = () => {
  return (
    <>
      <nav>
      <div class="collapse navbar-collapse" id="navbarExample01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active">
          <a class="nav-link px-3" href="#!">shop online</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3" href="#!">new collection</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3" href="#!">about us</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link px-3" href="#!">collaboration</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3" href="#!">contact us</a>
        </li>
      </ul></div>
      </nav>
      </>
  )
}

export default Topnav;