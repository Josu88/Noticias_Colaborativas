import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NewsPage } from "./pages/NewsPage";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { UserPage } from "./pages/UserPage";
import { NewsMenuPage } from "./pages/NewsMenuPage";
import { UserMenuPage } from "./pages/UserMenuPage";
import { NewsByIdPage } from "./pages/NewsByIdPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { FilterNewsPage } from "./pages/FilterNewsPage";
import { Footer } from "./components/Footer";
import { RegistedPage } from "./pages/RegistedPage";
import { DeleteUserPage } from "./pages/DeleteUserPage";
import { EditEmailUserNameUserPage } from "./pages/EditEmailUserNameUserPage";
import { EditNewPage } from "./pages/EditNewPage";
import { EditPasswordPage } from "./pages/EditPasswordPage";
import { NewsByIdUserPage } from "./pages/NewsByIdUserPage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { AddNewNews } from "./pages/AddNewNews";

function App() {
  const { token } = useContext(AuthContext);
  return (
    <main className="app">
      <Header />

      <Routes>
        {token ? (
          <Route path="/" element={<RegistedPage />} />
        ) : (
          <Route path="/" element={<HomePage />} />
        )}
        <Route path="/NewsMenu" element={<NewsMenuPage />} />
        <Route path="/UserMenu" element={<UserMenuPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/registed" element={<RegistedPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/UserNews" element={<NewsByIdPage />} />
        <Route path="/FilterNews" element={<FilterNewsPage />} />
        <Route path="/delUser" element={<DeleteUserPage />} />
        <Route path="/EditEmUsNam" element={<EditEmailUserNameUserPage />} />
        <Route path="/EditNew" element={<EditNewPage />} />
        <Route path="/addNews" element={<AddNewNews />} />
        <Route path="/user/password" element={<EditPasswordPage />} />
        <Route path="/profile" element={<NewsByIdUserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
