import React from 'react';
import {
  Label, Input, Textarea, Button, Alert, Message,
} from '@theme-ui/components';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().max(80).required(),
  email: yup.string().email().required(),
  message: yup.string().max(2000).required(),
});

const ContactForm = () => {
  const functionURL = 'https://usebasin.com/f/0d7f2be22968.json';

  const [
    isSuccessfullySubmitted,
    setIsSuccessfullySubmitted,
  ] = React.useState(false);

  const {register, errors, handleSubmit} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data, e) => {
    const response = await fetch(functionURL, {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Accept: 'application/json',
      },
      body: new URLSearchParams(data).toString(),
    });

    if (response.status === 200) {
      e.target.reset();
      setIsSuccessfullySubmitted(response.ok);
    } else {
      console.log(response);
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          ref={register({required: true, maxLength: 80})}
        />
        { errors.name && (
          <Alert variant="secondary" my={2}>{errors.name.message}</Alert>
        )}

        <Label htmlFor="fromEmail">Email address:</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="john@example.com"
          ref={register({required: true, pattern: /^\S+@\S+$/i})}
        />
        { errors.email && (
          <Alert variant="secondary" my={2}>{errors.email.message}</Alert>
        )}

        <Label htmlFor="message">Message:</Label>
        <Textarea
          rows={8}
          name="message"
          id="message"
          placeholder="Message content."
          ref={register({required: true})}
        />
        { errors.message && (
          <Alert variant="secondary" my={2}>{errors.message.message}</Alert>
        )}

        <Button mt={2} type="submit" bg="primary">
          Send message
        </Button>
      </form>

      {isSuccessfullySubmitted && (
        <Message>Form submitted successfully, you can return home now !</Message>
      )}
    </React.Fragment>
  );
};

export default ContactForm;
