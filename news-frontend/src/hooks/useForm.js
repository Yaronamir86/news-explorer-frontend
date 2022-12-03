import { useCallback, useState } from "react";
import { useLoggedIn } from "../contexts/LoggedInContext";

const useValidateForm = () => {
const { setLoggedInError } = useLoggedIn();
const [values, setValues] = useState({})
const [errors, setErrors] = useState({})
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

//useEffect(() => {
//    if (
//        object.values(values).every((value) => value !== '') &&
//        object.values(errors).every((error) => error === '') &&
//        values.password?.length >= 8
 //       ) {
 //           setIsValid(true)
//        }
//    })


return{
   validatePassword,
   handleChange,
};
};
export default useValidateForm;

