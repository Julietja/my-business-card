import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="contact-links">
   <a href="https://www.facebook.com/juliet.oluchi2" className="icon"><i className="fa fa-brands fa-facebook"></i></a>
   <a href="https://www.linkedin.com/in/juliet-alaribe" className="icon"><i className="fa fa-brands fa-linkedin"></i></a>
   <a href="mailto: bamarachi6@gmail.com" className="icon"><i className="fa fa-solid fa-envelope"></i></a>
   <a href="Tel: +2349039465340" className="icon"><i className="fa fa-solid fa-phone"></i></a>
</div>
     <small>Copyright &copy; 2022. Created by Juliet Alaribe</small>
    </div>
  )
}

export default Footer