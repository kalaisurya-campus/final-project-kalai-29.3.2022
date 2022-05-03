import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Count from "./Count";
import ReadMoreDatasbutton from "./ReadMoreDatasbutton";

const schema = yup
    .object({
        username: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required(),
    })
    .required();
function Formvalidation() {
    const [names, SetNames] = useState({
        username: "",
        email: "",
        password: "",
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const { username, email, password } = names;

    const handlechage = (e) => {
        SetNames({ ...names, [e.target.name]: e.target.value });
    };

    const submits = (e) => {
        console.log(username, email, password);
    };
    return (
        <div>
            <Count />
            <ReadMoreDatasbutton />
            <form onSubmit={handleSubmit(submits)}>
                <label>Name</label>
                <input
                    {...register("username", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z0-9]+$/i,
                    })}
                    type="text"
                    placeholder="Entre the username"
                    name="username"
                    value={username}
                    onChange={handlechage}
                />
                <p>{errors.username?.message}</p>
                <label>Email</label>
                <input
                    {...register("email", { pattern: /^[A-Za-z0-9]+$/i })}
                    type="email"
                    placeholder="Entre the Email"
                    name="email"
                    value={email}
                    onChange={handlechage}
                />
                <p>{errors.email?.message}</p>
                <label>Password</label>
                <input
                    {...register("password")}
                    type="password"
                    placeholder="Entre the Password"
                    name="password"
                    value={password}
                    onChange={handlechage}
                />
                <p>{errors.password?.message}</p>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Formvalidation;
