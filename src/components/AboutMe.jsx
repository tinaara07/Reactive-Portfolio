import React from 'react';
import avatar from '../assets/images/avatar.jpg'

const AboutMe = () => {
    return (
        <section id="about">
            <img src={avatar} alt="Tina Rahimian" />
            <p>My name is Tina,As a dedicated web development student,I have cultivated a strong foundation in front-end and back-end technologies, with hands-on experience in HTML, CSS and JavaScript. My portfolio showcases a variety of projects that demonstrate my ability to create responsive, user-friendly websites and web applications. From designing intuitive interfaces to developing robust server-side logic, I am passionate about building web solutions that not only meet user needs but also adhere to best practices in performance and accessibility. I am eager to continue growing my skills and contributing to innovative web projects.</p>
        </section>
    );
};

export default AboutMe;