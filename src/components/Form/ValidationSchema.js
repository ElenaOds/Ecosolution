import * as yup from 'yup';

const format = /^[A-Za-zА-Яа-яЁёІіЇїЄє '-]+$/;
const phoneRegex = /^\d{12}$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ValidationSchema = yup.object({
    name: yup.string().matches(format, 'Wrong Full name').required('Wrong Full name'),
    email: yup.string().email('Wrong Email').matches(emailRegex, 'Wrong Email').required('Wrong Email'),
    phone: yup.string().trim().matches(phoneRegex, 'Wrong Phone').required('Wrong Phone'),
    message: yup.string(),
});

  export default ValidationSchema;