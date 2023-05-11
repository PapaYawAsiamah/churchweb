"use client";
import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <div className="banner">
        <img src="/banner2.jpg" alt="banner" />
      </div>
      <div className="Verse">
        <div className="Book">
          <h1>Genesis1:23</h1>
        </div>
        <div className="verse">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quisquam
          deserunt eius aliquid ea debitis quis recusandae quidem aperiam
          molestias at vero similique, dignissimos libero impedit explicabo
          repudiandae commodi maiores, quibusdam enim soluta. Eaque voluptate
        </div>
      </div>
      <section id="location">
        <h1 className="locHeader">Branches</h1>
        <div className="Location">
          <div className="locCard">
            <div className="image">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5924699243187!2d-0.29855362552380277!3d5.627019232932512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf998ff84991f3%3A0xfaffc7569fd90a88!2sTower%20of%20Praise%20Chapel-%20Christ%20Sanctuary%20Assembly!5e0!3m2!1sen!2sgh!4v1683565513704!5m2!1sen!2sgh"
                width="100%"
              ></iframe>
            </div>
            <div className="title">
              <h1>Eagle's Temple</h1>
            </div>
            <div className="des">
              <p>location description</p>
            </div>
          </div>
          <div className="locCard">
            <div className="image">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5924699243187!2d-0.29855362552380277!3d5.627019232932512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf998ff84991f3%3A0xfaffc7569fd90a88!2sTower%20of%20Praise%20Chapel-%20Christ%20Sanctuary%20Assembly!5e0!3m2!1sen!2sgh!4v1683565513704!5m2!1sen!2sgh"
                width="100%"
              ></iframe>
            </div>
            <div className="title">
              <h1>Christ Temple</h1>
            </div>
            <div className="des">
              <p>location description</p>
            </div>
          </div>
        </div>
      </section>
      <section className="Ministries" id="Ministries">
    <h1 className="locHeader">Ministries</h1>
    <p className="MinisDesc">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, recusandae
      autem possimus distinctio quas sint at. Officiis nostrum, distinctio
      
    </p>
    <div className="CardCon">
      <div className="content-section">
        <div className="card">
          <img src="/youth.jpg" alt="youth" />
          <h2>Youth</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,</p>
        </div>
        <div className="card">
          <img src="/children.jpg" alt="youth" />
          <h2>children's serice</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,</p>
        </div>
        <div className="card">
          <img src="/muisc.jpg" alt="youth" />
          <h2>music</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,</p>
        </div>
        <div className="card">
          <img src="/adult.jpg" alt="youth" />
          <h2>Adult service</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,</p>
        </div>
      </div>
    </div>
  </section>
      
    </>
  );
};
export default Home;
