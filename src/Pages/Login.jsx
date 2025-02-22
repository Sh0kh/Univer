import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { sweetAlert } from "../utils/sweetalert";
import bgImage from "../img/Footer.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const loginData = {
        login,
        password,
      };
      console.log(loginData);
      // localStorage.setItem("token", "token----------message-----------!!!!!");
      // navigate("/admin");

      const response = await axios.post(`/login`, loginData);
      console.log(response);
      if (response.status === 200) {
        let token = response.data?.data?.token;
        localStorage.setItem("token", token);
        navigate("/admin");
        sweetAlert("Muvaffaqiyatli", "success")
      }
    } catch (error) {
      let errorText = error.data?.message || "Error login";
      sweetAlert(errorText, "error");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-md p-6 bg-white bg-opacity-90 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-center mb-6">Kirish</h2>
        <div className="space-y-4">
          <Input
            label="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            color="gray"
            type="text"
            required
            className="border-black"
          />
          <div className="relative">
            <Input
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              color="gray"
              type={showPassword ? "text" : "password"}
              required
              className="border-black pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="w-5 h-5 text-gray-600" />
              ) : (
                <FaEye className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
          <Button
            fullWidth
            color="gray"
            onClick={handleLogin}
            className="bg-black text-white hover:bg-gray-800 capitalize text-lg"
          >
            Jo'natish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
