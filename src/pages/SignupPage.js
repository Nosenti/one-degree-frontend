import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import { Signup } from "../components/Signup"

const url = "http://localhost:5000/api"

const SignupPage = () => {
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
       const result =  await axios.post(`${url}/users/signup`, form)
        if (result.data) {
            setIsSubmitting(false)
            navigation("/", {replace: true})
        }
    }
    return (
       < Signup 
        onChange={onChange} 
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
        />
    )
};


export default SignupPage