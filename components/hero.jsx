"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import Link from 'next/link'

export default function Hero() {  
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <h1 className="hero-title">Elevate Your Sports Profile</h1>
            <p className="hero-description">
            The ultimate digital platform for athletes to showcase their sports journey 
            </p>
            <Link href="https://www.profilesuite.com/signup" target="_blank"><button className="hero-signup-btn">Sign Up Now</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
