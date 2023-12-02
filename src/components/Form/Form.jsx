import { Formik } from 'formik';
import { toast } from 'react-toastify';

import ValidationSchema from './ValidationSchema';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';
import { StyledForm, Label, StyledField, Button, ButtonWrapper, StyledError, StyledTextArea } from './Form.styled';

const FormData = () => {

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        message: '',
      }

      const handleSubmit = (values, {resetForm}) => {
        console.log(values);
        toast.success("Form is submitted");
        resetForm();
      }
    
    return (
   
        <Formik
            initialValues={initialValues} 
            validationSchema={ValidationSchema}
            onSubmit={handleSubmit}
            >
            {(props) => (
            <StyledForm autoComplete="off">
            
            <Label htmlFor="name">*Full name:</Label>
            <StyledField 
                id='name'
                name='name'
                placeholder='John Rosie'
                type="text"
                onBlur={props.handleBlur}
                error={props.touched.name && props.errors.name}
            /> 
            <StyledError name='name' component="div"/>
          
            <Label htmlFor="email">*E-mail:</Label> 
            <StyledField 
                id='email'
                name='email'
                placeholder='johnrosie@gmail.com'
                type="email"
                onBlur={props.handleBlur}
                error={props.touched.email && props.errors.email}
            /> 
            <StyledError name='email' component="div"/>

            <Label htmlFor="phone">*Phone:</Label> 
            <StyledField 
                id='phone'
                name='phone'
                placeholder='380961234567'
                type="tel"
                onBlur={props.handleBlur}
                error={props.touched.phone && props.errors.phone}
            /> 
            <StyledError name='phone' component="div"/>

            <Label htmlFor="message">Message:</Label> 
            <StyledTextArea 
                as="textarea"
                id='message'
                name='message'
                placeholder='Your message'
                rows={5}
                style={{ resize: 'none' }}
            /> 
            <ButtonWrapper>
         <Button type='submit'>Send<ArrowRight/></Button>
         </ButtonWrapper>
        </StyledForm>
          )}
        </Formik>
      
    )
}

export default FormData;