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
                    <li><a href="about.html">Aim Of School</a></li>
                    <li><a href="director.html">Director's Pen</a></li>
                    <li><a href="principal.html">Principal Desk</a></li>
                 <!---   <li><a href="#">Rules Of School</a></li> --->
                    <li><a href="apply-online.html">Admisson Form</a></li>
                </ul>
            </div>
            <div class="foot-nav">
                <h3>Features</h3>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="fees-structure.html">Fees Structure</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
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
                    <li><a href="#">AS-SABEEL</a></li>
                    <li><a href="#">Line Bazar, Purnea</a></li>
                    <li><a href="#">Bihar - 854301</a></li>
                </ul>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="footer-logo hidden-xs"><a href="index.html"><img src="images/footer-logo.png" class="img-responsive" alt=""></a></div>
            <p>© 2020 <span><a href="login.html">AS-SABEEL</a></span>. All rights reserved</p>
            <ul class="terms clearfix">
                <li><a href="terms.html">TERMS OF USE</a></li>
                <li><a href="privacy.html">PRIVACY POLICY</a></li>
                <li><a href="#">SITEMAP</a></li>
            </ul>
        </div>
    </div>
</div>
<!-- End Footer Top -->
<div class="footer-area-bottom">
                <div class="container">
                    <div class="row">
                        <div style="text-align: center;">
                            <p>&copy; 2021 Aps-Puernea Designed by <a target="_blank" href="http://www.satyakabir.com/">Satya Kabir E-solutions Pvt. Ltd.</a></p>
                        </div>

                    </div>
                </div>
            </div> 
<!-- End Footer Bottom -->

</footer>

`

document.body.appendChild(templateFooter.content);