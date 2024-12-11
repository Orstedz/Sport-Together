import React, { useState } from "react";

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
    // Save formData to file (Mock function)
    console.log("User signed up:", formData);
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-96 mx-auto">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Đăng ký</h2>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Họ và tên"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-md p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded-md p-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Số điện thoại"
          value={formData.phone}
          onChange={handleChange}
          className="border rounded-md p-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={formData.password}
          onChange={handleChange}
          className="border rounded-md p-2"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Nhập lại mật khẩu"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="border rounded-md p-2"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
        >
          Đăng ký
        </button>
      </form>
      <p className="text-sm mt-4 text-center">
        Bạn đã có tài khoản?{" "}
        <a href="/login" className="text-green-600 font-bold">
          Đăng nhập
        </a>
      </p>
    </div>
  );
};

export default SignForm;
