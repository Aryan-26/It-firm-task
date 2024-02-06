import React from 'react'

function Home() {
  return (
    <div>
   

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <h1 >Welcome to Our IT Firm</h1>
          <p>Delivering cutting-edge solutions to drive your business forward.</p>
        </section>

        {/* Services Section */}
        <section className="services-section container">
          <h2 className="section-title">Our Services</h2>
          <div className="service-item">
            <h3>Web Development</h3>
            <p>Creating responsive and dynamic websites tailored to your needs.
            Embark on a digital journey with our expert web development team. We specialize in crafting responsive and visually stunning websites that not only captivate your audience but also elevate your brand. From e-commerce platforms to corporate websites, we tailor our solutions to meet your unique business needs.
            </p>
          </div>
          <div className="service-item">
            <h3>Mobile App Development</h3>
            <p>Designing user-friendly mobile applications to engage your audience.Stay ahead in the mobile era with our cutting-edge Android app development services. Our skilled developers create intuitive and feature-rich applications that resonate with your target audience. Whether you're launching a new product or enhancing user engagement, our Android solutions are designed to deliver results.</p>
          </div>
          {/* Add more services as needed */}
        </section>

        {/* Features Section */}
        <section className="features-section container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="feature-item">
            
            <h3>Innovative Solutions</h3>
            <p>We leverage the latest technologies to provide innovative IT solutions.We constantly explore new technologies and methodologies to stay ahead of the curve and provide our clients with the most innovative solutions.</p>
          </div>
          <div className="feature-item">

            <h3>Experience</h3>
            <p>With years of experience in the industry, we bring a wealth of knowledge to every project.</p>
          </div>
          <div className="feature-item">
            <h3>Expert Team</h3>
            <p>Our team of experts is dedicated to delivering excellence in every project.</p>
          </div>
          {/* Add more features as needed */}
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to Transform Your Business?</h2>
          <p>Contact us today to discuss your project with our experts.</p>
          <a href="#contact" className="button cta">Contact Us</a>
        </section>
      </main>
    </div>
  )
}

export default Home;



