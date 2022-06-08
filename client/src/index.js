import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import QuestionStore from "./store/QuestionStore";

export const Context = createContext(null)


ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        question: new QuestionStore(),
    }}>
        <App />
    </Context.Provider>,

  document.getElementById('root')
);

