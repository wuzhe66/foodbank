import { useState, useEffect } from "react";
import React, { useRef } from 'react';

    

const useForm = validate => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

//   const usernameRef = useRef();
//   const passwordRef = useRef();


  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));

            //方法
            fetch("http://localhost:3000/users/register", {
                method: "POST",
                body: JSON.stringify({
                    // username: username.current.value,
                    // password: username.current.value,
                    values
                }),
                headers: {
                  "Content-type": "application/json;charset=utf-8",
                  'Accept': 'application/json'
    
                },
              })
                .then((data) => data.json())
                .then((json) => {
                    json.success ? alert("You're Registered!") : alert("Wrong Registered");
                  })   

  }

  return { handleChange, values, errors,handleSubmit};

};

export default useForm;