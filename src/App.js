import './App.css';

function App() {
  return (
    <div className="App container-fluid">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <a href="#" class="navbar-brand">RayWebDev</a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navItems">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navItems">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#js-projects" class="nav-link">Javascript Projects</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">React Apps</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">MERN Stack APIs</a>
          </li>

        </ul>
        </div>
      </nav>
      <div id="intro" class="mx-auto">
        <p class="top">Hello, I am Dustten Ray Letulle</p>
        <p class="bottom">a web developer</p>
      </div>

      <div id="js-projects" class="section">
      <div class="project-grid">
      <div class="row justify-content-center">

      <div class="card mt-3 mx-2">
        <img src="https://i.imgur.com/ZPF5GCc.png" class="card-img-top"></img>
        <div class="card-body">
          <h5>Javascript Calculator</h5>
          <p>A pure javascript calculator made with react.</p>
          <a class="btn btn-primary" href="#">GH Pages Demo</a>
        </div>
      </div>

      <div class="card mt-3 mx-2">
        <img src="https://i.imgur.com/ZPF5GCc.png" class="card-img-top"></img>
        <div class="card-body">
          <h5>Javascript Calculator</h5>
          <p>A pure javascript calculator made with react.</p>
          <a class="btn btn-primary" href="#">GH Pages Demo</a>
        </div>
      </div>

      <div class="card mt-3 mx-2">
        <img src="https://i.imgur.com/ZPF5GCc.png" class="card-img-top"></img>
        <div class="card-body">
          <h5>Javascript Calculator</h5>
          <p>A pure javascript calculator made with react.</p>
          <a class="btn btn-primary" href="#">GH Pages Demo</a>
        </div>
      </div>

      </div>

      <div class="row justify-content-center">

      <div class="card mt-3 mx-2">
        <img src="https://i.imgur.com/ZPF5GCc.png" class="card-img-top"></img>
        <div class="card-body">
          <h5>Javascript Calculator</h5>
          <p>A pure javascript calculator made with react.</p>
          <a class="btn btn-primary" href="#">GH Pages Demo</a>
        </div>
      </div>

      <div class="card mt-3 mx-2">
        <img src="https://i.imgur.com/ZPF5GCc.png" class="card-img-top"></img>
        <div class="card-body">
          <h5>Javascript Calculator</h5>
          <p>A pure javascript calculator made with react.</p>
          <a class="btn btn-primary" href="#">GH Pages Demo</a>
        </div>
      </div>

      <div class="card mt-3 mx-2">
        <img src="https://i.imgur.com/ZPF5GCc.png" class="card-img-top"></img>
        <div class="card-body">
          <h5>Javascript Calculator</h5>
          <p>A pure javascript calculator made with react.</p>
          <a class="btn btn-primary" href="#">GH Pages Demo</a>
        </div>
      </div>
      </div>
      </div>

      </div>
    </div>
  );
}

export default App;
