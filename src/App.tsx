import React from "react";
import { ReduxProvider } from "./store/provider";
import Header from "./widgets/Header/UI/Header";
import FilterSortSection from "./widgets/FilterSortSection/UI/FilterSortSection";
import "./styles/main.scss";
import ClientList from "./widgets/ClientsList/UI/ClientList";
import CheckList from "./features/checkList/UI/CheckList";
import CurrentClientSection from "./widgets/CurrentClientSection/UI/CurrentClientSection";
import CurrentClientMenu from "./widgets/CurrentClientMenu/UI/CurrentClientMenu";
import CurrentClientMarks from "./widgets/CurrentClientMarks/UI/CurrentClientMarks";

// const addButton = require("./images/addButton.png");

const App: React.FC = () => {
  return (
    <div className="app">
      <ReduxProvider>
        <Header />
        <div className="appInformation">
          <div>
            <FilterSortSection />
            <CheckList />
            <ClientList />
          </div>
          <div className="clientInformation">
            <CurrentClientSection />
            <CurrentClientMenu />
            <CurrentClientMarks />
          </div>
        </div>
      </ReduxProvider>
    </div>
  );
};

export default App;
