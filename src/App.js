import { Fragment } from "react";
import { Helmet } from "react-helmet";
import Info from "./components/Info";
import List from "./components/List";

function App() {
  return (
    <Fragment>
      <Helmet>
        <title>Poke - Redux</title>
      </Helmet>
      <div className="bg-gray-900 text-white h-screen">
        <div className="w-4/5 m-auto h-screen grid grid-cols-2 justify-items-center items-center">
          <List />
          <Info />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
