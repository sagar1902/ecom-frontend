import './App.css';
import {lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { Flip, ToastContainer } from 'react-toastify';


import HomePage from './Pages/Home/HomePage';
import DesktopNavigation from './Navigation/DesktopNavigation';
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import AdminLogin from './Admin/Auth/Login/AdminLogin';
import AdminRegister from './Admin/Auth/Register/AdminRegister';

import Cart from './Pages/Cart/Cart';
import ProductDetail from './Pages/Detail/ProductDetail';
import SingleCategory from './SingleCategory/SingleCategory';
import MobileNavigation from './Navigation/MobileNavigation';
import Wishlist from './Pages/WhisList/Wishlist';
import PaymentSuccess from './Pages/Payment/PaymentSuccess';
import CheckoutForm from './Components/Checkout/CheckoutForm';
import UpdateDetails from './Pages/Update_User/UpdateDetails';
import ForgotPasswordForm from './Auth/ForgotPassword/ForgotPasswordForm';
import AddNewPassword from './Auth/ForgotPassword/AddNewPassword';
import AdminHomePage from './Admin/Pages/AdminHomePage';
import SingleUserPage from './Admin/Pages/SingleUserPage';
import SingleProduct from './Admin/Pages/SingleProduct';

// const Cart = lazy(()=> import('./Pages/Cart/Cart'))
// const ProductDetail = lazy(()=> import('./Pages/Detail/ProductDetail'))
// const SingleCategory = lazy(()=> import('./SingleCategory/SingleCategory'))
// const MobileNavigation = lazy(()=> import('./Navigation/MobileNavigation'))
// const Wishlist = lazy(()=> import('./Pages/WhisList/Wishlist'))
// const PaymentSuccess = lazy(()=> import('./Pages/Payment/PaymentSuccess'))
// const CheckoutForm = lazy(()=> import('./Components/Checkout/CheckoutForm'))
// const UpdateDetails = lazy(()=> import('./Pages/Update_User/UpdateDetails'))
// const ForgotPasswordForm = lazy(()=> import('./Auth/ForgotPassword/ForgotPasswordForm'))
// const AddNewPassword = lazy(()=> import('./Auth/ForgotPassword/AddNewPassword'))
// const AdminHomePage = lazy(()=> import('./Admin/Pages/AdminHomePage'))
// const SingleUserPage = lazy(()=> import('./Admin/Pages/SingleUserPage'))
// const SingleProduct = lazy(()=> import('./Admin/Pages/SingleProduct'))




function App() {
  return (
    <>
      <ToastContainer toastClassName='toastContainerBox' transition={Flip} position='top-center' />
      <Router>
        <DesktopNavigation />
        <div className='margin'>
          <Routes>
            {/*User Routes  */}
            <Route path='/' index element={<HomePage />} />
            <Route path="/login" element={< Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/Detail/type/:cat/:id' element={<ProductDetail />} />
            <Route path='product/type/:cat' element={<SingleCategory />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/checkout' element={<CheckoutForm />} />
            <Route path='/update' element={<UpdateDetails />} />
            <Route path='/paymentsuccess' element={<PaymentSuccess />} />
            <Route path='/forgotpassword' element={<ForgotPasswordForm />} />
            <Route path='/user/reset/:id/:token' element={<AddNewPassword />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={< AdminLogin />} />
            <Route path='/admin/register' element={<AdminRegister />} />
            <Route path='/admin/home' element={<AdminHomePage />} />
            <Route path='/admin/home/user/:id' element={<SingleUserPage />} />
            <Route path='/admin/home/product/:type/:id' element={<SingleProduct />} />
          </Routes>
        </div>
        <MobileNavigation />
      </Router >


    </>
  );
}
export default App;
