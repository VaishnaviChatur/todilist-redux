import './App.css';
import { Provider } from 'react-redux';
import TodoList from './todolist/todolist';
import  store  from './components/store/store';

function App() {
  return (
    <div className="App">
      {/* <header> */}
        <h1  className="App-header">TodoList</h1>
        {/* </header> */}
        <Provider store={store}>
          <TodoList />
        </Provider>
     
    </div>
  );
}

export default App;
