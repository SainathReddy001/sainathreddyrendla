import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div>
    <div class="container">
    <h2>CONTACT ME</h2>
    <div id="addContactForm">
      <input type="text" id="name" name="name" placeholder="Name" required/><br/>
      <br/>
      <input type="email" id="email" name="email" placeholder="Email" required/><br/><br/>
      <input type="tel" id="phone" name="phone" placeholder="Phone" required/><br/><br/>
      <button type="submit">BOOK YOUR SLOT</button>
    </div>
  </div>
  </div>
  );
}

export default Contact