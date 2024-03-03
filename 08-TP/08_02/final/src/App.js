import "./App.css";

const Title = ({ content }) => <h1>{content}</h1>;
const Component = ({ title, link }) => {
  return (
    <>
      <a
        className="App-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn {title}
      </a>
      <br />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title content="Welcome !" />
        <Component title="React" link="https://reactjs.org" />
        <Component title="Vue" link="https://vuejs.org/" />
        <Component title="Angular" link="https://angular.io/" />
      </header>
    </div>
  );
}

export default App;
