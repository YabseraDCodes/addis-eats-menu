import { useState } from "react";

function useForm(initialValues, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;

        const newValues = {
            ...values,
            [name]: value,
        };

        setValues(newValues);

        setErrors(validate(newValues));
    }

    function handleBlur(e) {
        const { name } = e.target;

        setTouched((prev) => ({
            ...prev,
            [name]: true,
        }));

        setErrors(validate(values));
    }

    function handleSubmit(e, onSubmit) {
        e.preventDefault();

        const validationErrors = validate(values);

        setErrors(validationErrors);

        setTouched({
            name: true,
            phone: true,
            address: true,
        });

        if (Object.keys(validationErrors).length === 0) {
            onSubmit(values);
        }
    }

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
    };
}

export default useForm;
