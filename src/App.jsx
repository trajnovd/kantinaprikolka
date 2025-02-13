import { ToastContainer } from "react-toastify";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <div>
      <AppRouter />
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
