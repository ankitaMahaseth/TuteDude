import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <main className="flex min-h-[75vh] items-center justify-center bg-linear-to-br from-indigo-50 via-white to-purple-50 px-6 py-16">
        <div className="w-full max-w-lg rounded-3xl border border-gray-100 bg-white p-7 shadow-xl shadow-indigo-100/50 sm:p-10">
          {/* Logo and Heading */}
          <div className="mb-8 text-center">
            <Link
              to="/"
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-2xl font-bold text-white shadow-lg shadow-indigo-200"
            >
              N
            </Link>

            <h1 className="mt-5 text-3xl font-extrabold text-gray-900">
              Create Account
            </h1>

            <p className="mt-2 text-gray-500">Join me and get started today.</p>
          </div>

          {/* Signup Form */}
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="signup-name"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Full Name
              </label>

              <input
                id="signup-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                required
                maxLength={100}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="signup-email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>

              <input
                id="signup-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="signup-password"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="signup-password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  minLength={8}
                  maxLength={128}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-20 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />

                <button
                  type="button"
                  className="absolute inset-y-0 right-3 text-sm font-medium text-indigo-600 hover:text-indigo-800"
                ></button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="signup-confirm-password"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Confirm Password
              </label>

              <div className="relative">
                <input
                  id="signup-confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                  required
                  maxLength={128}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-20 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />

                <button
                  type="button"
                  className="absolute inset-y-0 right-3 text-sm font-medium text-indigo-600 hover:text-indigo-800"
                ></button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <input
                id="accept-terms"
                type="checkbox"
                className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 accent-indigo-600"
              />

              <label
                htmlFor="accept-terms"
                className="text-sm leading-6 text-gray-600"
              >
                I agree to the{" "}
                <Link
                  to="/"
                  className="font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/"
                  className="font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-indigo-100 transition hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-7 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-800"
            >
              Login
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

export default Signup;
