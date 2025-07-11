import React, { useEffect, useState } from "react";
import notify from "../useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgetPassword } from "../../redux/actions/authAction";
const ForgetPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = async () => {
    if (email === "") {
      notify("من فضلك ادخل الايميل", "error");
      return;
    }
    localStorage.setItem("user-email", email);
    setLoading(true);
  await dispatch(forgetPassword({
    email,
}))
    setLoading(false);
  };
  const res = useSelector((state) => state.authReducer.forgetPassword);
 
  useEffect(() => {
    if (loading === false) {
        if (res) {
            console.log(res)
            if (res.data.status === "Success") {
                notify("تم ارسال الكود الي  ايميل بنجاح", "success")
                setTimeout(() => {
                    navigate("/user/verify-code")
                }, 1000);
            }
            if (res.data.status === "fail") {
                notify("هذا الحساب غير موجود لدينا", "error")
            }
        }
    }
}, [loading])

  return [email, onChangeEmail, onSubmit];
};

export default ForgetPasswordHook;
