import logo from './logo.svg';
import './App.css';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

function App() {
  return (
    <div className="App relative">
      <div className="form-container relative flex flex-col items-center justify-center z-10">
        <form className="form-box relative bg-white p-8 rounded-lg shadow-md w-80 border-2 border-gray-400">
          <h2 className="text-center font-semibold mb-4 text-2xl text-black">LOGİN</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-md font-semibold text-gray-700">Username</label>
            <input type="text" id="username" placeholder="Username" className="username w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-md font-semibold text-gray-700">Password</label>
            <input type="password" id="password" placeholder="Password" className="password w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div className="mb-6">
            <button type="submit" id="button" className="button w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold p-3 rounded">Login</button>
          </div>

          <div className="or-separator flex items-center justify-center my-4 text-gray-600 relative">
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 border-t border-gray-400"></div>
            <div className="or">―――――OR―――――</div>
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 border-t border-gray-400"></div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <button type="button" className="google-button flex items-center bg-red-500 hover:bg-red-700 text-white font-semibold p-2 rounded w-full justify-center">
              <FaGoogle className="mr-2 google-icon" />
            </button>
            <button type="button" className="facebook-button flex items-center bg-blue-600 hover:bg-blue-800 text-white font-semibold p-2 rounded w-full justify-center">
              <FaFacebook className="mr-2 facebook-icon" />
            </button>
          </div>
          <div className="a flex justify-between items-center mb-6">
            <a href="#" className="passwordd text-blue-300 hover:text-blue-700">Forgot password</a>
            <a href="#" className="register text-blue-500 hover:text-blue-700">Register</a>
          </div>
        </form>
        
        {/* Adding the background shapes */}
        <div className="background-shape shape-1"></div>
        <div className="background-shape shape-2"></div>
      </div>
    </div>
  );
}


export default App;
