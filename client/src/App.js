// import logo from './logo.svg';
import './App.css';

import { useEffect } from "react";

//This will use the useEfect hook to fetch data from our Rails API, which you can then view in the console.
function App() {
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  }, []);

  return <h1>Hello from React!</h1>;
}

export default App;