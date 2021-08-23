const templateFooter = document.createElement('template');
templateFooter.innerHTML = `
<footer class="footer">
<!-- Start Footer Top -->
<div class="container">
    <div class="row row1">
        <div class="col-sm-9 clearfix">
            <div class="foot-nav">
                <h3>About US</h3>
                <ul>
                    <li><a href="#">Aim Of School</a></li>
                    <li><a href="#">In Our Campus</a></li>
                    <li><a href="#">Principal Desk</a></li>
                    <li><a href="#">Rules Of School</a></li>
                    <li><a href="#">Admisson Form</a></li>
                </ul>
            </div>
            <div class="foot-nav">
                <h3>Features</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Fees Structure</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div class="foot-nav">
                <h3>Social Media</h3>
                <ul>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Google+</a></li>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
            <div class="foot-nav">
                <h3>Contact</h3>
                <ul>
                    <li><a href="#">+91 98732 01515</a></li>
                    <li><a href="#">info@apspurnea.com</a></li>
                    <li><a href="#">aps purnea</a></li>
                    <li><a href="#">Line Bazar, Purnea</a></li>
                    <li><a href="#">Bihar - 854301</a></li>
                </ul>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="footer-logo hidden-xs"><a href="index-2.html"><img src="images/footer-logo.png" class="img-responsive" alt=""></a></div>
            <p>© 2020 <span>Aps-Sabeel</span>. All rights reserved</p>
            <ul class="terms clearfix">
                <li><a href="terms.html">TERMS OF USE</a></li>
                <li><a href="privacy.html">PRIVACY POLICY</a></li>
                <li><a href="#">SITEMAP</a></li>
            </ul>
        </div>
    </div>
</div>
<!-- End Footer Top -->
<!-- Start Footer Bottom -->
<div class="bottom">
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <div class="connect-us">
                    <h3>Connect with Us</h3>
                    <ul class="follow-us clearfix">
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="subscribe">
                    <h3>Subscribe with Us</h3>
                    <!-- Begin MailChimp Signup Form -->
                    <div id="mc_embed_signup">
                        <form action="http://protechtheme.us16.list-manage.com/subscribe/post?u=cd5f66d2922f9e808f57e7d42&amp;id=ec6767feee" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                                <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="enter your email address" required>
                                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                                    <input type="text" name="b_cd5f66d2922f9e808f57e7d42_ec6767feee" tabindex="-1" value="">
                                </div>
                                <div class="clear">
                                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                                </div>
                            </div>
                        </form>
                    </div>
                    <!--End mc_embed_signup-->
                </div>
            </div>
            <div class="col-sm-4">
                <div class="instagram">
                    <h3>@INSTAGRAM</h3>
                    <ul class="clearfix">
                        <li><a href="#">
                                <figure><img src="images/insta-img1.jpg" class="img-responsive" alt=""></figure>
                            </a></li>
                        <li><a href="#">
                                <figure><img src="images/insta-img2.jpg" class="img-responsive" alt=""></figure>
                            </a></li>
                        <li><a href="#">
                                <figure><img src="images/insta-img3.jpg" class="img-responsive" alt=""></figure>
                            </a></li>
                        <li><a href="#">
                                <figure><img src="images/insta-img4.jpg" class="img-responsive" alt=""></figure>
                            </a></li>
                        <li><a href="#">
                                <figure><img src="images/insta-img5.jpg" class="img-responsive" alt=""></figure>
                            </a></li>
                        <li><a href="#">
                                <figure><img src="images/insta-img6.jpg" class="img-responsive" alt=""></figure>
                            </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Footer Bottom -->
</footer>
`

document.body.appendChild(templateFooter.content);