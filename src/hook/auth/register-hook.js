import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "./../../hook/useNotifaction";
import { createNewUser } from "../../redux/actions/authAction";

const RegisterHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validationValues = () => {
    if (name === "") {
      notify("من فضلك ادخل اسم المستخدم", "error");
      return;
    }
    if (phone.length <= 10) {
      notify("من فضلك ادخل رقم هاتف صحيح", "error");
      return;
    }
    if (password != confirmPassword) {
      notify("من فضلك تاكد من مطابقه كلمه السر ", "error");
      return;
    }
    if (password === "") {
      notify("من فضلك ادخل كلمه السر", "error");
      return;
    }
    if (confirmPassword === "") {
      notify("من فضلك اكد كلمه السر", "error");
      return;
    }
  };
  const res = useSelector((state) => state.authReducer.createUser);

  // save data
  const onSubmit = async () => {
    validationValues();
    setLoading(true);
    await dispatch(
      createNewUser({
        name,
        email,
        password,
        passwordConfirm: confirmPassword,
        phone,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          notify("تم تسجيل هذا الحساب بنجاح", "success");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
        if (res.data.errors) {
          if (res.data.errors[0].msg === "E-mail already in use")
            notify("هذا الايميل مسجل من قبل", "error");
        }
        if (res.data.errors) {
          if (res.data.errors[0].msg === "accept only egypt phone numbers")
            notify("يجب ان يكون الرقم مصري مكون من 11 رقم", "error");
        }

        if (res.data.errors) {
          if (res.data.errors[0].msg === "must be at least 6 chars")
            notify("يجب ان لاقل كلمه السر عن 6 احرف او ارقام", "error");
        }
      }
    }
  }, [loading]);

  return [
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmit,
  ];
};

export default RegisterHook;
