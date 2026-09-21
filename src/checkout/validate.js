export function validate(form) {
    const errors = {};

    if (!form.name.trim()) {
        errors.name = "Please enter your name";
    } else if (form.name.trim().length < 2) {
        errors.name = "Name must be at least 2 characters";
    }

    if (!form.phone.trim()) {
        errors.phone = "Please enter your phone number";
    } else if (!/^(?:\+251|0)9\d{8}$/.test(form.phone.trim())) {
        errors.phone = "Use 09... or +2519... (TeleBirr number)";
    }

    if (!form.address.trim()) {
        errors.address = "Please enter your delivery address";
    } else if (form.address.trim().length < 5) {
        errors.address = "Address must be at least 5 characters";
    }

    return errors;
}
