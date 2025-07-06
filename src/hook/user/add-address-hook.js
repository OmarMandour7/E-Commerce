import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import notify from '../useNotifaction';
import { useNavigate } from 'react-router-dom';
import { addUserAddress } from '../../redux/actions/userAddressesAction';

const AddAddressHook = () => {
 const navigate = useNavigate();
  const dispatch = useDispatch();
   const [alias, setAliasName] = useState("");
   const [details, setDetails] = useState("");
   const [phone, setPhone] = useState("");
   const [loading, setLoading] = useState(true);
   const onChangeAlias = (event) => {
     event.persist();
     setAliasName(event.target.value);
   };
 
   const onChangeDetails = (event) => {
     event.persist();
     setDetails(event.target.value);
   
   };
   const onChangePhone = (event) => {
     event.persist();
     setPhone(event.target.value);
   }
   const onSubmit = async () => {
    if (alias === "" || details === "" || phone === "") {
        notify("من فضلك اكمل البيانات", "warn")
        return
    }
    setLoading(true)
    await dispatch(addUserAddress({
        alias: alias,
        details: details,
        phone: phone,
        city: '',
        postalCode: ""
    }))
    setLoading(false)
}
const res = useSelector(state => state.userAddressesReducer.addUserAddress)

useEffect(() => {

    if (loading === false) {
        if (res && res.status === 200) {
            notify("تمت اضافة العنوان بنجاح", "success")
            setTimeout(() => {
                navigate('/user/addresses')
            }, 1000);
        } else {
            notify("هناك مشكله فى عملية الاضافة ", "error")
          
        }

    }

}, [loading])

   return [alias, details, phone, onChangeAlias, onChangeDetails, onChangePhone, onSubmit]
}

export default AddAddressHook