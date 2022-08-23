import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { PaymentFormContainer, FormContainer } from './payment-form.styles';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHander = async (e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent.js', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: 10000 }),
          }).then(res => res.json());

          console.log(response);
        
    };

 return (
    <PaymentFormContainer>
        <FormContainer onSubmit={paymentHander}>
            <h2>Credit Card Payment: </h2>
            <CardElement />
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay Now </Button>
        </FormContainer>
    </PaymentFormContainer>
)};

export default PaymentForm; 