import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LogInFormData {
  phone: string;
  password: string;
}

const LogInForm: React.FC = () => {
  const [formData, setFormData] = useState<LogInFormData>({
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-100"
          />
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

export default LogInForm;
