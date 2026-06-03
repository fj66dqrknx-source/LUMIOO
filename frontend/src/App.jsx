import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import CreatePage from "./pages/CreatePage";
import EditProductPage from "./pages/EditProductPage";
import useAuthReq from "./hooks/useAuthReq";
import useUserSync from "./hooks/useUserSync";

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/profile" element={isSignedIn ? <ProfilePage /> : <Navigate to={"/"} />} />
          <Route path="/create" element={isSignedIn ? <CreatePage /> : <Navigate to={"/"} />} />
          <Route
            path="/edit/:id"
            element={isSignedIn ? <EditProductPage /> : <Navigate to={"/"} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;