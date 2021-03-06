const template = document.createElement('template');
template.innerHTML = `
<header>

<style>
@media only screen and (min-width: 600px) {
    #navbr {
        margin-left: 22%;
    }
  }
</style>
        
<!-- Start Header top Bar -->
<div class="header-top">
    <div class="container clearfix">
        <ul class="follow-us hidden-xs">
            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
        <div class="right-block clearfix">
            <ul class="top-nav hidden-xs">
             <!-----   <li><a href="register.html">Register</a></li> ---->
                <li><a href="apply-online.html">Apply Online</a></li>
                
                <li><a href="#">FAQs</a></li>
            </ul>
           
        </div>
    </div>
</div>
<!-- End Header top Bar -->
<!-- Start Header Middle -->
<div class="container header-middle">
    <div class="row"> <span class="col-xs-6 col-sm-3"><a href="index.html"><img src="images/logo.png" class="img-responsive" alt=""></a></span>
        <div class="col-xs-6 col-sm-3"></div>
        <div class="col-xs-6 col-sm-9">
            <div class="contact clearfix">
                <ul class="hidden-xs">
                    <li> <span>Email</span> <a href="mailto:info@apspurnea.com">info@apspurnea.com</a> </li>
                    <li> <span>Help-line No.</span> +91 99347 95336 </li>
                </ul>
                <a href="apply-online.html" class="login">Apply Online <span class="icon-more-icon"></span>
                    
                </a>
                
                  </div>
                
            </div>
        </div>
    </div>
</div>
<!-- End Header Middle -->
<!-- Start Navigation -->
<nav class="navbar navbar-inverse">
    <div class="container">
        <div class="navbar-header">
            <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" class="navbar-toggle collapsed" type="button"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
        </div>
        <div class="navbar-collapse collapse" id="navbar">
            <!-- <form class="navbar-form navbar-right">
                <input type="text" placeholder="Search Now" class="form-control">
                <button class="search-btn"><span class="icon-search-icon"></span></button>
            </form> -->
            <ul class="nav navbar-nav" id="navbr">
                <li> <a href="index.html">Home</a></li>
                <li class="dropdown"> <a data-toggle="dropdown" href="#">About Us<i class="fa fa-angle-down" aria-hidden="true"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="about.html">Aim Of School</a></li>
                        <li><a href="director.html">Director's Pen</a></li>
                        <li><a href="principal.html">Principal Desk</a></li>
                    </ul>
                </li>
                <li> <a href="fees-structure.html">Fees Structure</a></li>
                <li> <a href="gallery.html">Gallery</a></li>
                <!-- <li class="dropdown"> <a data-toggle="dropdown" href="#">Pages <i class="fa fa-angle-down" aria-hidden="true"></i></a>
                    <ul class="dropdown-menu">
                        <li class="visible-xs"><a href="register.html">Register</a></li>
                        <li class="visible-xs"><a href="apply-online.html">Apply online</a></li>
                        <li class="visible-xs"><a href="blog.html">Blog</a></li>
                        <li class="visible-xs"><a href="faq.html">FAQs</a></li>
                        <li><a href="news.html">Latest News</a></li>
                        <li><a href="testimonials.html">Testimonials</a></li>
                        <li><a href="faq1.html">FAQ 1</a></li>
                        <li><a href="faq2.html">FAQ 2</a></li>
                        <li><a href="coming-soon.html">Coming Soon</a></li>
                        <li class="hidden-xs"><a href="privacy.html">Privacy Policy</a></li>
                        <li class="hidden-xs"><a href="terms.html">Terms of Use</a></li>
                        <li class="hidden-xs"><a href="generic-ui.html">Generic UI</a></li>
                    </ul>
                </li> -->
                <li> <a href="contact.html">Contact Us</a></li>
            </ul>
        </div>
    </div>
</nav>
<!-- End Navigation -->
</header>
`

document.body.appendChild(template.content);