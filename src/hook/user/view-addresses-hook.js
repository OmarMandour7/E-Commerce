import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserAddress } from '../../redux/actions/userAddressesAction'
import { useNavigate } from 'react-router-dom'

const ViewAddressesHook = () => {
    const navigate = useNavigate()
    const disptach = useDispatch()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await disptach(getAllUserAddress());
            setLoading(false)
        }
        get();
    }, [])

    const res = useSelector(state => state.userAddressesReducer.allAddresses)
    let addresses ={};
    if(res){   
          addresses = res.data;
 
    }

    return [addresses]
}

export default ViewAddressesHook