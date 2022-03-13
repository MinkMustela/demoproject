import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import PaymentHome from './components/layout/PaymentHome';
function App() {
  return (
    <div className='container-box'>
      <Navbar />
        <main>
            <PaymentHome />
       </main>
        <Footer />

    </div>
  //   <>
  //     
  //  </>


  //   <Router>
  //   <div >
  //     <Navbar />
  //      <main >
  //        <Routes>
           
  //        </Routes>
  //      </main >
  //      <Footer />
  //     </div>
      

  //  </Router>
    
  );
}

export default App;
