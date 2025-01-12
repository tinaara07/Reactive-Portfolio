import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
    emailInvalid: false,
  });

  const validateForm = () => {
    const errors = {
      name: !formData.name,
      email: !formData.email,
      message: !formData.message,
      emailInvalid: formData.email && !/\S+@\S+\.\S+/.test(formData.email),
    };
    setFormErrors(errors);
    return !Object.values(errors).includes(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        {formErrors.name && <span>This field is required</span>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        {formErrors.email && <span>This field is required</span>}
        {formErrors.emailInvalid && <span>Invalid email address</span>}

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
        {formErrors.message && <span>This field is required</span>}

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
