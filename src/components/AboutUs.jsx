import React from 'react'
import { Zap } from 'lucide-react';

const AboutUs = () => {
  return (
    <div>
        <section id="about" class="about section">
        
        <div class="container section-title aos-init aos-animate" data-aos="fade-up">
          <h2 class="">About Us</h2>
        </div>
        

        <div class="container">
          <div class="row">
            <div class="col-lg-12 content container section-title aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <p>
                At Evolve Dev, we turn innovative ideas into functional Minimum
                Viable Products (MVPs) that attract market interest and foster
                growth. Our team of strategists, developers, and designers
                collaborate with you to bring your concept to life, ensuring
                your startup is ready to make a significant impact.
              </p>
              <ul class="section-title p-5">
                <li>
                <Zap />
                  <span>We value quality, craftsmanship, and disciplined
                    experimentation in all our endeavors.
                  </span>
                </li>
                <li>
                <Zap />
                  <span>Our project teams are meticulously tailored to meet the
                    unique requirements of each project, ensuring optimal
                    outcomes.
                  </span>
                </li>
                <li>
                <Zap />
                  <span>Collaborative teamwork is at the heart of our approach to
                    generating exceptional project results.</span>
                </li>
              </ul>
            </div>

          </div>
          </div>
        </section>
    </div>
  )
}

export default AboutUs