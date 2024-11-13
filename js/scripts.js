<!-- Example Navbar -->
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <a class="navbar-brand js-scroll-trigger" href="#home">Home</a>
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
      <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>

<!-- Example Contact Form with Floating Labels -->
<form name="sentMessage" id="contactForm" method="POST" action="https://formspree.io/f/xanyjpel">
  <div class="floating-label-form-group">
    <label for="name">Name</label>
    <input type="text" id="name" class="form-control" placeholder="Your Name" required />
  </div>
  <div class="floating-label-form-group">
    <label for="email">Email</label>
    <input type="email" id="email" class="form-control" placeholder="Your Email" required />
  </div>
  <div class="floating-label-form-group">
    <label for="message">Message</label>
    <textarea id="message" class="form-control" placeholder="Your Message" required></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Send Message</button>
</form>

  
