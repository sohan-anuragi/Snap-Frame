import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import LoginPage from "./Pages/LoginPages/LoginPage";
import RegisterPage from "./Pages/LoginPages/RegisterPage";
import ForgetPassWord from "./Pages/LoginPages/ForgetPassWord";

function App() {
  return (
    <>
      <Header></Header>
      {/* <HomePage></HomePage> */}
      {/* <LoginPage></LoginPage> */}
      {/* <RegisterPage> */}
      <ForgetPassWord></ForgetPassWord>
      <Footer></Footer>
    </>
  );
}

export default App;
