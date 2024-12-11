import React, { useState } from "react";

// Interface for the form data
interface SignFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const SignForm: React.FC = () => {
  const [formData, setFormData] = useState<SignFormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission (for example, logging the data to console)
    console.log("User signed up:", formData);
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg w-96 mx-auto">
      <h2 className="text-4xl font-extrabold text-green-700 mb-6 text-center">
        Đăng ký
      </h2>
      <form className="flex flex-col mx-3">
        {/* Name Field */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-green-600 font-medium my-1 pl-3"
          >
            Họ và tên *
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-100"
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-green-600 font-medium my-1 pl-3"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-100"
          />
        </div>

        {/* Phone Field */}
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-green-600 font-medium my-1 pl-3"
          >
            Số điện thoại *
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
            Mật khẩu *
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

        {/* Confirm Password Field */}
        <div className="flex flex-col">
          <label
            htmlFor="confirmPassword"
            className="text-green-600 font-medium my-1 pl-3"
          >
            Nhập lại mật khẩu *
          </label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-100"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="bg-green-600 text-white py-3 mt-7 rounded-3xl hover:bg-green-700 transition-colors font-bold"
        >
          Đăng ký
        </button>
      </form>
      <p className="text-sm mt-2 text-center text-gray-600">
        Bạn đã có tài khoản?{" "}
        <a href="/login" className="text-green-600 font-bold hover:underline">
          Đăng nhập
        </a>
      </p>
    </div>
  );
};

export default SignForm;
