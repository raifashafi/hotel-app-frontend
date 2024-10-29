import logo from './logo.svg';
import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS (including Popper.js and jQuery)
// import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import Addroom from './components/Addroom';
import AdminNavBar from './components/AdminNavBar';
import ViewRoom from './components/ViewRoom';
import Navbar from './components/Navbar';
import ViewUser from './components/ViewUser';
import Dashboard from './components/Dashboard';
import PackageSelection from './components/PackageSelection';
import BillPage from './components/BillPage';
import CustomerFeedback from './components/CustomerFeedback';
import UserNavbar from './components/UserNavbar';
import ViewFeedback from './components/ViewFeedback';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/signin' element={<UserSignIn/>}/>
          <Route path='/signup' element={<UserSignUp/>}/>
          <Route path='/addRoom' element={<Addroom/>}/>
          {/* // <Route path='/ViewMine' element={<ViewPost/>}/>
          // <Route path='/updateaccount' element={<CreateAccount/>}/>
          // <Route path='/ViewAccount' element={<ViewAccount/>}/>
          // <Route path='/viewallpost' element={<ViewAllPost/>}/>
          // <Route path='/dummy' element={<DummyPage/>}/>
          // <Route path='/search' element={<PostSearch/>}/>
          //  */}
          <Route path='/adminnavbar' element={<AdminNavBar/>}/>
          <Route path='/viewroom' element={<ViewRoom/>}/>
          <Route path='/navbar' element={<Navbar/>}/>
          <Route path='/viewuser' element={<ViewUser/>}/>
          <Route path='/package-selection' element={<PackageSelection/>}/>
          <Route path='/bill' element={<BillPage/>}/>
          <Route path='/usernavbar' element={<UserNavbar/>}/>
          <Route path='/feedback' element={<CustomerFeedback/>}/>
          <Route path='/viewFeedback' element={<ViewFeedback/>}/>



          {/* <Route path='/dash' element={<Dashboard/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;