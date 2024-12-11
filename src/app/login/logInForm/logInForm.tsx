import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    // Check if phone and password match
    if (
      formData.phone === storedUser.phone &&
      formData.password === storedUser.password
    ) {
      alert("Login successful!");
      navigate("/"); // Navigate to Welcome page
    } else {
      alert("Incorrect phone number or password.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg w-96 mx-auto">
      <h2 className="text-4xl font-extrabold text-green-700 mb-6 text-center">
        Đăng nhập
      </h2>
      <form className="flex flex-col mx-3">
        {/* Phone Field */}
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-green-600 font-medium my-1 pl-3"
          >
            Số điện thoại
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-100"
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-green-600 font-medium my-1 pl-3"
          >
            Mật khẩu
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-100 w-full pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-xl"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Forgot Password Link */}
        <div className="flex justify-end mt-2">
          <a
            href="#"
            className="text-green-600 font-medium text-sm hover:underline"
          >
            Quên mật khẩu?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="button"
          onClick={handleLogin}
          className="bg-green-600 text-white py-3 mt-7 rounded-3xl hover:bg-green-700 transition-colors font-bold"
        >
          Đăng nhập
        </button>
      </form>
      <p className="text-sm mt-2 text-center text-gray-600">
        Bạn chưa có tài khoản?{" "}
        <a
          href="/register"
          className="text-green-600 font-bold hover:underline"
        >
          Đăng ký
        </a>
      </p>
    </div>
  );
};

export default LoginPage;
