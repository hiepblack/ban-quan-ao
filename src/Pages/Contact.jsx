import React from "react";
import "../style/contact.css";
import Banner from "../components/banner/Banner";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate  = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    emailjs
      .send(
        "service_e4v4zpx",
        "template_f31q1rp",
        data,
        "jN_Xe5BR9kIqgaFDT"
      )
      .then(
        (result) => {
          console.log(result);
          toast.success('Cảm ơn bạn đã liên hệ với chúng tôi')
          navigate('/')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Banner param={"Liên Lạc"} title={"Kết nối với chúng tôi"} />
      <section className="contact container">
        <h1 className="contact__title">Contact With Me</h1>
        <div className="contact__box grid">
          <div className="contact__img">
            <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863856015896!2d105.7442121759106!3d21.038132787455293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2sFPT%20Polytechnic%20Hanoi!5e0!3m2!1sfr!2s!4v1682124282774!5m2!1sfr!2s" width={600} height={600} style={{border:0}}  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contact__from">
              <input
                type="text"
                placeholder="Nhập tên của bạn"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="contact__from">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="contact__from">
              <input
                type="number"
                placeholder="Nhập số điện thoại của bạn"
                {...register("number", { required: true })}
              />
              {errors.number && <span>This field is required</span>}
            </div>
            <div className="contact__text">
              <textarea
                type="text"
                placeholder="Lời nhắn"
                {...register("note", { required: true })}
              />
              {errors.note && <span>This field is required</span>}
            </div>
            <div className="contact__btn">
              <input type="Submit" value="Gửi" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
