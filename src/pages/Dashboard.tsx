import { Link } from "react-router-dom";
import { LogOut, User } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium text-gray-900">User Name</span>
                  <span className="text-xs text-gray-500">user@example.com</span>
                </div>
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <User size={18} />
                </div>
                <Link
                  to="/"
                  className="ml-4 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center"
                >
                  <LogOut size={18} className="mr-1" />
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
            <div className="text-center py-16">
              <h2 className="text-3xl font-extrabold text-gray-900">Welcome to your Dashboard!</h2>
              <p className="mt-2 text-lg text-gray-600">
                You have successfully logged in to your account.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  to="/"
                  className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}