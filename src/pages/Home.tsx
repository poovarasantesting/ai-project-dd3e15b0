import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Welcome</h1>
          <p className="mt-2 text-gray-600">Please login or register to continue</p>
        </div>
        
        <div className="flex flex-col space-y-4">
          <Link 
            to="/login"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md text-center transition duration-150 ease-in-out"
          >
            Login
          </Link>
          <Link 
            to="/register"
            className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md text-center transition duration-150 ease-in-out"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}