import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <main className="flex min-h-[75vh] items-center justify-center bg-linear-to-br from-indigo-50 via-white to-purple-50 px-6 py-16">
        <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-7 shadow-xl shadow-indigo-100/50 sm:p-10">
          {/* Logo and Heading */}
          <div className="mb-8 text-center">
            <Link
              to="/"
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-2xl font-bold text-white shadow-lg shadow-indigo-200"
            >
              AM
            </Link>

            <h1 className="mt-5 text-3xl font-extrabold text-gray-900">
              Welcome Back!
            </h1>

            <p className="mt-2 text-gray-500">Sign in to continue</p>
          </div>

          {/* Login Form */}
          <form className="space-y-5">
            <div>
              <label
                htmlFor="login-email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>

              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                value=""
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="login-password"
                  className="text-sm font-semibold text-gray-700"
                >
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value=""
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-20 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />

                <button
                  type="button"
                  className="absolute inset-y-0 right-3 text-sm font-medium text-indigo-600 hover:text-indigo-800"
                ></button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 accent-indigo-600"
              />

              <label htmlFor="remember-me" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-indigo-100 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
            >
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="mt-7 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-800"
            >
              Sign up
            </Link>
          </p>

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-sm text-gray-500 transition hover:text-indigo-600"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
