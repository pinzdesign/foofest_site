export default function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">FooFestival 2024</h1>
        <p className="lead">Den bedste festival oplevelse i Skandinavien!</p>
        <p>Book din billet allerede i dag.</p>
        <p className="lead">
          <a className="btn btn-success btn-lg" href="/booking" role="button">
            Book
          </a>
        </p>
      </div>
    </div>
  );
}
