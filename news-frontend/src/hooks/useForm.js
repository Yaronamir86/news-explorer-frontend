import { useCallback, useState, useEffect } from "react";
import { useLoggedIn } from "../contexts/LoggedInContext";

const useValidateForm = () => {
const { setLoggedInError } = useLoggedIn();
const [values, setValues] = useState({})
const [errors, setErrors] = useState({})
const [isValid, setIsValid] = useState({})
;

const validatePassword = useCallback((password) => {
    if (password.length < 8) {
        return 'Password must be at least 8 characters long';
    }
    return '';
    },[])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({...values, [name]: value});
        setErrors({...errors, [name]: e.target.validationMessage});
        if (e.target.name === 'password') {
            setErrors({...errors, [name]: validatePassword(value)
        });
    }
    setLoggedInError('');
}

useEffect(() => {
    if (
        Object.values(values).every((value) => value !== '') &&
        Object.values(errors).every((error) => error === '') &&
        values.password?.length >= 8
       ) {
           setIsValid(true)
        } else {
            setIsValid(false);
        }
    },[values, errors]);

    const resetForm = useCallback(
        (newValues={}, newErrors={}, newIsvalid=false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsvalid);
        }, [ setValues, setErrors, setIsValid ]
    )

    


return{
   validatePassword,
   handleChange,
   isValid,
   setIsValid,
   resetForm,
   setValues,
   values,
};
};
export default useValidateForm;

