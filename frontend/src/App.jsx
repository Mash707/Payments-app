import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/SignIn";
import { Dashboard } from "./pages/DashBoard";
import { SendMoney } from "./pages/SendMoney";
import { PaymentAcknowledgement } from "./pages/PaymentAcknowledgement";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/acknowledgement" element={<PaymentAcknowledgement />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
