import { useReducer, useState } from 'react';
import { appReducer } from '../reducer/appReducer.js';
import { TopBar } from './components/TopBar/TopBar.jsx';
import { HomePage } from './components/HomePage/HomePage.jsx';
import { Form } from './components/Form/Form.jsx';
import { List } from './components/List/List.jsx';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    isHomePageShown: true, 
    isFormShown: false, 
    isListShown: false,
  });
  //const [isFormShown, setIsFormShown] = useState(false);

  return (
    <>
      <TopBar 
        dispatch={dispatch} 
        isHomePageShown={state.isHomePageShown}
        isFormShown={state.isFormShown} 
        isListShown={state.isListShown}
      />
      <div>
        { state.isHomePageShown ? (
          <HomePage/>
        ) : state.isFormShown ? (
          <Form/>
        ) : state.isListShown ? (
          <List/>
        ) : (
          {}
        )}
      </div>
    </>
  );
}

export default App;