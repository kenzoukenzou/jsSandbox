const Header = () => {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Cute Dog Images</h1>
        </div>
      </div>
    </header>
  );
};

const Image = () => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img
            src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
            alt="cute dog"
          />
        </figure>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="columns is-vcentered is-multiline">
      <div className="column is-3">
        <Image />
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>
    </main>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <p>Dog</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
