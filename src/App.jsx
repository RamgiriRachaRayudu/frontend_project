import { Route, Routes } from "react-router-dom";

import AdminDashboard from "./admin/AdminDashboard";
import ManageCategories from "./admin/ManageCategories";
import ManagePesticides from "./admin/ManagePesticides";
import ManageUsers from "./admin/ManageUsers";
import ManageOrders from "./admin/ManageOrders";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PesticideDetails from "./pages/PesticideDetails";
import Pesticides from "./pages/Pesticides";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Safety from "./pages/Safety";
import Tracking from "./pages/Tracking";
import Wishlist from "./pages/Wishlist";

function AdminRoute({ children }) {
  return <ProtectedRoute admin>{children}</ProtectedRoute>;
}

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pesticides" element={<Pesticides />} />
          <Route path="/pesticides/:id" element={<PesticideDetails />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tracking/:orderId"
            element={
              <ProtectedRoute>
                <Tracking />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/pesticides"
            element={
              <AdminRoute>
                <ManagePesticides />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/categories"
            element={
              <AdminRoute>
                <ManageCategories />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <AdminRoute>
                <ManageUsers />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/orders"
            element={
              <AdminRoute>
                <ManageOrders />
              </AdminRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
