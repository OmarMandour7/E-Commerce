import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "./../../hook/useNotifaction";
import { createNewUser, loginUser } from "../../redux/actions/authAction";
const LoginHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const validationValues = () => {
    if (email === "") {
      notify("من فضلك ادخل البريد الالكتروني ", "error");
      return;
    }
    if (password === "") {
      notify("من فضلك ادخل كلمه السر", "error");
      return;
    }
  };
  const onSubmit = async () => {
    validationValues();
    setIsPress(true);
    setLoading(true);
    await dispatch(
      loginUser({
        email,
        password,
      })
    );
    setLoading(false);
    setIsPress(false);
  };

  const res = useSelector((state) => state.authReducer.loginUser);

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        console.log(res);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data))
          notify("تم تسجيل الدخول بنجاح ", "success");
          setTimeout(() => {
          window.location.href="/";
          }, 1500);
        } else {
          localStorage.removeItem("token");
        }
        if (res.data.message === "Incorrect email or password") {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          notify("كلمة السر او الايميل خطا", "error");
        }
        setLoading(true);
      }
    }
  }, [loading]);

  return [
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    isPress,
  ];
};

export default LoginHook;
