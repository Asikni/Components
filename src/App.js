import Button from "./Button";

function App() {
  const handleClick = () => {
    console.log("button was clicked");
  };
  const handleMouse = () => {
    console.log("hover took place");
  };
  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick} className="mb-5">
          Help
        </Button>
      </div>
      <div>
        <Button secondary rounded onMouseEnter={handleMouse} className="mb-7">
          Hello
        </Button>
      </div>
      <div>
        <Button warning outline rounded>
          Click here
        </Button>
      </div>
      <div>
        <Button danger>hey</Button>
      </div>
      <div>
        <Button success outline>
          musibat
        </Button>
      </div>
    </div>
  );
}

export default App;
