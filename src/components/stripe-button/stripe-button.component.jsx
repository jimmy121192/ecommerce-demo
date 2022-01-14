import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KENtLHmCSoYXN4j4E6uHmLqOqRUUkd0ZTsaUkkD5zMww7cXH5vtgkHwdxpk1vd4jm0PsTWGwrHBzcqsBjaI9FW400NKfrlPZU";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="OSENSA ECOM DEMO"
      billingAddress
      shippingAddress
      image="https://res.cloudinary.com/jimmytruong/image/upload/v1641385818/general/raspberry_r25atm.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
