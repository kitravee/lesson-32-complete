import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import logo from '../../assets/stripe.svg';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_FWDVi4kt5JKpiozYH3Y9JXxJ00fEp2NYoS';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert('succesful payment');
      })
      .catch((error) => {
        console.log('Payment Error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.',
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Kitshop Ltd.'
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
