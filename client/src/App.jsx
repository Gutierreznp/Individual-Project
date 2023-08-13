import Home from './views/home/home';
import Landing from './views/landing/landing';
import Detail from './views/detail/Detail';
import Form from './views/form/Form';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
      <Routes>
        <Route path = '/' element = {<Landing />}></Route>
        <Route path = '/home' element = {<Home />}>Home</Route>
        <Route path = '/detail/:id' element = {<Detail />}>Detail</Route>
        <Route path = '/form' element = {<Form />}>Form</Route>
      </Routes>
    </div>
  )
};

export default App;
