import { Route , Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import JanInvoices from './Pages/Jan-Invoices';
import FebInvoices from './Pages/Feb-Invoices';
import MarInvoices from './Pages/Mar-Invoices';
import AprInvoices from './Pages/Apr-Invoices';
import MayInvoices from './Pages/May-Invoices';
import JunInvoices from './Pages/Jun-Invoices';
import JulInvoices from './Pages/Jul-Invoices';
import Sidebar from './Components/Sidebar';

function App() {
  return (
  <>
  <Navbar />
  <Sidebar />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/JanInvoices' element={<JanInvoices />}/>
    <Route path='/FebInvoices' element={<FebInvoices />}/>
    <Route path='/MarInvoices' element={<MarInvoices />}/>
    <Route path='/AprInvoices' element={<AprInvoices />}/>
    <Route path='/MayInvoices' element={<MayInvoices />}/>
    <Route path='/JunInvoices' element={<JunInvoices />}/>
    <Route path='/JulInvoices' element={<JulInvoices />}/>
  </Routes>
  <Footer />
  </>
    
  );
}

export default App;
