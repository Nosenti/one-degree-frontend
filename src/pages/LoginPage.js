import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../components/Login"

const url = "http://localhost:5000/api"

const LoginPage = () => {
    const [form, setForm] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigation = useNavigate()

    const onChange = ({target}, name) => {
        const {value} = target;
        setForm({
            ...form,
            [name]: value
        })
    };

    const onSubmit = async(e) => {
        e.preventDefault();
        setIsSubmitting(true)
       const result =  await axios.post(`${url}/users/signin`, form)
       console.log("login",result)
        if (result.data) {
            setIsSubmitting(false)
            localStorage.setItem("token", JSON.stringify(result.data.token))
            navigation("/dashboard", {replace: true})
        }
    }
    return (
       < Login 
        onChange={onChange} 
        onSubmit={onSubmit} 
        isSubmitting={isSubmitting}
        />
    )
};


export default LoginPage