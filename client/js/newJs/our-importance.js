const templateOurImportance = document.createElement('template');
templateOurImportance.innerHTML =
`
<section class="our-impotance padding-lg">
<div class="container">
    <ul class="row">
        <li class="col-sm-6 equal-hight">
            <div class="inner"> <img src="images/study-go-ico.jpg" alt="Malleable Study Time">
                <h3>Admission Facilitator <br>(Code-01)</h3>
                <p style="font-size: 17px;"> Jamia Hamdard <br> (Online And Distance Learning),<br> New Delhi</p>
            </div>
        </li>
        <li class="col-sm-6 equal-hight">
            <div class="inner"> <img src="images/placement-ico.jpg" alt="Placement Assistance">
                <h3>Job Training Partner/Information Center</h3>
                <p style="font-size: 17px;">The Glocal University,<br> Saharanpur (U.P)</p>
            </div>
        </li>
        
        <li class="col-sm-6 equal-hight">
            <div class="inner"> <img src="images/get-innovative-ico.jpg" alt="Get an Innovative, In-depth Transition">
                <h3>Regional Centre</h3>
                <p style="font-size: 17px;">Urdu Education Board (OSS),<br> New Delhi</p>
            </div>
        </li>

        <li class="col-sm-6 equal-hight">
            <div class="inner"> <img src="images/study-time-ico.jpg" alt="Placement Assistance">
                <h3>Information and Admission Centre <br> (Code-MOS-132701)</h3>
                <p style="font-size: 17px;">Madrasa Open Schooling,<br> Rohini New Delhi</p>
            </div>
        </li>
       
    </ul>
</div>
</section>
`
document.body.appendChild(templateOurImportance.content);
