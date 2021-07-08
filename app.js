


//first page of kyb and it's template

const indexPage = document.createElement('template')

indexPage.innerHTML =`
<!DOCTYPE html>
<html lang="en">

<head>
<link rel="stylesheet" type="text/css"  href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605461/css/console_mksvog.css">
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605461/css/dracula.min_graxc3.css">
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605465/css/reset.min_ihxu18.css">

<link rel="shortcut icon" href="https://res.cloudinary.com/verifiedly/image/upload/v1625613183/favicon_f5k5ae.png" type="image/x-icon" />
<!-- Bootstrap 4.5 -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605462/css/bootstrap.min_l5tfnu.css" type="text/css" />
<!-- animate -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625613146/css/animate_l5mser.css" type="text/css" />
<!-- Swiper -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605471/css/swiper.min_xi214w.css" />
<!-- icons -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605462/css/icons_vdegdz.css" type="text/css" />
<!-- aos -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605460/css/aos_b6mqul.css" type="text/css" />
<!-- main css -->
<link rel="stylesheet" href="./assets/css/main.css" type="text/css" />
<!-- normalize -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605464/css/normalize_vjmkir.css" type="text/css" /> 
</head>

<body class="bg-snow d-flex position-relative flex flex-column justify-content-center align-item-center">
  
<div class="info_tab position-absolute">

</div>

  <div class="container d-flex justify-content-center align-item-center flex-column">
    <div class="row d-flex justify-content-center align-item-center flex-column">
      <div class="col-lg-12 mx-auto my-auto d-flex  flex-column">  
    <div class="row">
       <div class="col-lg-12 padding-py-2 padding-px-2">
        <div class="">
          <form action="" class="row for_cc_four">
   <div class="col-md-12 d-flex flex-column align-items-center justify-content-center">
<img src="https://res.cloudinary.com/verifiedly/image/upload/v1624987836/logo_1_cfwvpw.svg" class="mx-auto main_logo margin-b-2"  alt="">
    <h5 class="text-center font-s-16">[App name] uses Verifiedly to perform identity verification.</h5>
   </div>
   <div class="col-md-12 margin-t-3">
     <h6>Things we will need</h6>
  <ul class="c-gray margin-t-1 margin-b-1">
    <li class=" margin-t-1 margin-b-1">Government issued ID</li>
    <li  class=" margin-t-1 margin-b-1">Some personal details</li>
    <li  class=" margin-t-1 margin-b-1">Your beautiful face</li>
  </ul>
   </div>



            <div class="row margin-t-3 padding-px-1">
              <div class="col-lg-12 text-center d-flex">
                <p class="font-s-12 text-center">By continuing this verification, you agree to Verifiedly's <a href="#" class="c-blue"> privacy policy</a> agreement</p>
              </div>
              <div class="col-12 d-md-flex flex-column justify-content-between d-flex margin-t-1 ">
                <a class="btn btn_md_primary redirect_btn agree_btn padding-px-4 padding-py-1 margin-t-1 margin-b-1  bg-blue rounded-12 c-white h-fit-content">
                  I Agree
                </a>
                <a class="btn btn_md_primary margin-t-1 margin-b-1 padding-px-4 padding-py-1  c-black rounded-12 c-white border_cancel h-fit-content">
                  Cancel
              </a>
         
        
              </div>
            </div>
     
         

       
           
          </form>
        </div>
       </div>
        
    </div>


    <div class="row">
      <div class="col-12 text-center padding-t-6 mx-auto margin-t-6">
        Powered by verifiedly <img src="https://res.cloudinary.com/verifiedly/image/upload/v1624041053/verifiedly_logo_ppus4g.svg" class="img_logo" alt="verifiedly logo">
    </div>
    </div>
    <div class="footer padding-py-2 padding-px-2"></div>

      </div>
    </div>
  </div>
  <!-- jquery -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605454/js/jquery-3.5.0_inc3z0.js" type="text/javascript"></script>
  <!-- jquery-migrate -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605453/js/jquery-migrate.min_gcnjzt.js" type="text/javascript"></script>
  <!-- popper -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/popper.min_lb4jbh.js" type="text/javascript"></script>
  <!-- bootstrap -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605452/js/bootstrap.min_klzrbk.js" type="text/javascript"></script>
  <!--
  ============
  vendor file
  ============
   -->
  <!-- particles -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/particles.min_fhbnsj.js" type="text/javascript"></script>
  <!-- TweenMax -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/TweenMax.min_sbb0pr.js" type="text/javascript"></script>
  <!-- ScrollMagic -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/ScrollMagic_maenwt.js" type="text/javascript"></script>
  <!-- animation.gsap -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/animation.gsap_hln4sr.js" type="text/javascript"></script>
  <!-- addIndicators -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/debug.addIndicators.min_ed7lew.js" type="text/javascript"></script>
  <!-- Swiper js -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/swiper.min_ggjmrz.js" type="text/javascript"></script>
  <!-- countdown -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/countdown_rkm6v5.js" type="text/javascript"></script>
  <!-- simpleParallax -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/simpleParallax.min_lelhtg.js" type="text/javascript"></script>
  <!-- waypoints -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/waypoints.min_s1k8uw.js" type="text/javascript"></script>
  <!-- counterup -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/jquery.counterup.min_ifepdt.js" type="text/javascript"></script>
  <!-- charming -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/charming.min_kxgeny.js" type="text/javascript"></script>
  <!-- imagesloaded -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/imagesloaded.pkgd.min_qin0k4.js" type="text/javascript"></script>
  <!-- BX-Slider -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/jquery.bxslider.min_ya1lyo.js" type="text/javascript"></script>
  <!-- Sharer -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/sharer_nrvblc.js" type="text/javascript"></script>
  <!-- sticky -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/sticky.min_r2i69h.js" type="text/javascript"></script>
  <!-- Aos -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/aos_nh4eaq.js" type="text/javascript"></script>
  <!-- main file -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605454/js/main_feltmm.js" type="text/javascript"></script>
  <!-- sass -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625604222/sass_otc3tz.js" type="text/javascript"></script>

</body>

</html>
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<script>


</script>


`


const getStartPage = document.createElement('template')

getStartPage.innerHTML=`

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description"
    content="Welcome to Verifiedly" />
  <meta name="keywords"
    content="Automate and solve your users identity verification" />
  <meta name="author" content="Verifiedly - Automate and solve your users identity verification" />

  <title>Verifiedly KYB - Business Verification </title>
  <!-- favicon -->

  <link rel="stylesheet" type="text/css"  href="./assets/css/console.css">
  <link rel="stylesheet" href="./assets/css/dracula.min.css">
  <link rel="stylesheet" href="./assets/css/reset.min.css">
 
  <link rel="shortcut icon" href="/assets/favicon.png" type="image/x-icon" />
  <!-- Bootstrap 4.5 -->
  <link rel="stylesheet" href="./assets/css/bootstrap.min.css" type="text/css" />
  <!-- animate -->
  <link rel="stylesheet" href="./assets/css/animate.css" type="text/css" />
  <!-- Swiper -->
  <link rel="stylesheet" href="./assets/css/swiper.min.css" />
  <!-- icons -->
  <link rel="stylesheet" href="./assets/css/icons.css" type="text/css" />
  <!-- aos -->
  <link rel="stylesheet" href="./assets/css/aos.css" type="text/css" />
  <!-- main css -->
  <link rel="stylesheet" href="./assets/css/main.css" type="text/css" />
  <!-- normalize -->
  <link rel="stylesheet" href="./assets/css/normalize.css" type="text/css" />
 
</head>

<body class="bg-white flex flex-column d-flex justify-content-center align-item-center">
  <div class="logo">
    <div class="container">
     <div class="row">
       <div class="col-lg-12 padding-py-2 padding-px-3">
        <a href="http://verified.ly">
          <img src="https://res.cloudinary.com/verifiedly/image/upload/v1624987836/logo_1_cfwvpw.svg" class="imag_logo" alt=""></a>
       </div>
     </div>
    </div>
     </div>


  <div class="container h-100vh d-flex justify-content-center align-item-center flex-column">
    <div class="row h-100vh d-flex justify-content-center align-item-center flex-column">
   
      <div class="col-lg-6 mx-auto my-auto d-flex  flex-column">
        <div class="row">
          <div class="col-lg-12 padding-py-2 padding-px-2 ">
            <h2>Hello,</h2>
            <p class="c-gray">Welcome to verifiedly’s KYB center</p>
           </div>
          </div>
    <div class="row">
       <div class="col-lg-12 padding-py-2 padding-px-2">
        <div class="">
          <form action="" class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="name">Your Business Name</label>
                <input id="name" type="text" class="form-control" placeholder="">
              </div>
            </div>
      
     
         

       
            <div class="col-12 d-md-flex justify-content-end margin-t-2">
        
       
              <a href="business.html" class="btn btn_lg_primary  padding-px-6 padding-py-2  bg-blue rounded-12 c-white h-fit-content">
                  Get Started
              </a>
            </div>
          </form>
        </div>
       </div>
        
    </div>


    <div class="row">
      <div class="col-12 text-center padding-t-6 mx-auto margin-t-6">
        Powered by verifiedly <img src="https://res.cloudinary.com/verifiedly/image/upload/v1624041053/verifiedly_logo_ppus4g.svg" class="img_logo" alt="verifiedly logo">
    </div>
    </div>
    <div class="footer padding-py-2 padding-px-2"></div>

      </div>
    </div>
  </div>

  <!-- jquery -->
  <script src="../../assets/js/jquery-3.5.0.js" type="text/javascript"></script>
  <!-- jquery-migrate -->
  <script src="../../assets/js/jquery-migrate.min.js" type="text/javascript"></script>
  <!-- popper -->
  <script src="../../assets/js/popper.min.js" type="text/javascript"></script>
  <!-- bootstrap -->
  <script src="../../assets/js/bootstrap.min.js" type="text/javascript"></script>
  <!--
  ============
  vendor file
  ============
   -->
  <!-- particles -->
  <script src="./assets/js/vendor/particles.min.js" type="text/javascript"></script>
  <!-- TweenMax -->
  <script src="./assets/js/vendor/TweenMax.min.js" type="text/javascript"></script>
  <!-- ScrollMagic -->
  <script src="./assets/js/vendor/ScrollMagic.js" type="text/javascript"></script>
  <!-- animation.gsap -->
  <script src="./assets/js/vendor/animation.gsap.js" type="text/javascript"></script>
  <!-- addIndicators -->
  <script src="./assets/js/vendor/debug.addIndicators.min.js" type="text/javascript"></script>
  <!-- Swiper js -->
  <script src="./assets/js/vendor/swiper.min.js" type="text/javascript"></script>
  <!-- countdown -->
  <script src="./assets/js/vendor/countdown.js" type="text/javascript"></script>
  <!-- simpleParallax -->
  <script src="./assets/js/vendor/simpleParallax.min.js" type="text/javascript"></script>
  <!-- waypoints -->
  <script src="./assets/js/vendor/waypoints.min.js" type="text/javascript"></script>
  <!-- counterup -->
  <script src="./assets/js/vendor/jquery.counterup.min.js" type="text/javascript"></script>
  <!-- charming -->
  <script src="./assets/js/vendor/charming.min.js" type="text/javascript"></script>
  <!-- imagesloaded -->
  <script src="./assets/js/vendor/imagesloaded.pkgd.min.js" type="text/javascript"></script>
  <!-- BX-Slider -->
  <script src="./assets/js/vendor/jquery.bxslider.min.js" type="text/javascript"></script>
  <!-- Sharer -->
  <script src="./assets/js/vendor/sharer.js" type="text/javascript"></script>
  <!-- sticky -->
  <script src="./assets/js/vendor/sticky.min.js" type="text/javascript"></script>
  <!-- Aos -->
  <script src="./assets/js/vendor/aos.js" type="text/javascript"></script>
  <!-- main file -->
  <script src="./assets/js/main.js" type="text/javascript"></script>
  <!-- sass -->
  <script src="./assets/js/pages/sass.js" type="text/javascript"></script>
  <script src="./snippet/highlight.min.js"></script>
  <script src="./snippet/go.min.js"></script>
  <script src="./snippet/javascript.min.js"></script>
  <script src="./snippet/python.min.js"></script>
  <script src="./snippet/ruby.min.js"></script>
  <script src="./snippet/script.js"></script>
</body>

</html>
<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<script>
 

</script>

`


//main modal template

const template = document.createElement('template')

template.innerHTML=`
<!DOCTYPE html>
<html lang="en">
<head>

<link rel="stylesheet" type="text/css"  href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605461/css/console_mksvog.css">
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605461/css/dracula.min_graxc3.css">
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605465/css/reset.min_ihxu18.css">

<link rel="shortcut icon" href="https://res.cloudinary.com/verifiedly/image/upload/v1625613183/favicon_f5k5ae.png" type="image/x-icon" />
<!-- Bootstrap 4.5 -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605462/css/bootstrap.min_l5tfnu.css" type="text/css" />
<!-- animate -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625613146/css/animate_l5mser.css" type="text/css" />
<!-- Swiper -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605471/css/swiper.min_xi214w.css" />
<!-- icons -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605462/css/icons_vdegdz.css" type="text/css" />
<!-- aos -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605460/css/aos_b6mqul.css" type="text/css" />
<!-- main css -->
<link rel="stylesheet" href="./assets/css/main.css" type="text/css" />
<!-- normalize -->
<link rel="stylesheet" href="https://res.cloudinary.com/verifiedly/raw/upload/v1625605464/css/normalize_vjmkir.css" type="text/css" />
</head>



<body class="bg-snow  h-100vh  d-flex position-relative  flex flex-column justify-content-center align-item-center">


<div class="container">
<div class="row">
<div class="col-lg-6 mx-auto">

<a class="btn btn_md_primary redirect_btn padding-px-4 padding-py-2 margin-t-1 margin-b-1  bg-blue rounded-12 c-white h-fit-content">
Verify with Verifiedly
</a>


</div>
</div>
<div class="kyc_modal_background">
<div class="kyc_modal">

<div class="kyc_objects"></div>



<span class="close_icon">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</span>

</div>
  </div>
</div>
  <!-- jquery -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605454/js/jquery-3.5.0_inc3z0.js" type="text/javascript"></script>
  <!-- jquery-migrate -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605453/js/jquery-migrate.min_gcnjzt.js" type="text/javascript"></script>
  <!-- popper -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/popper.min_lb4jbh.js" type="text/javascript"></script>
  <!-- bootstrap -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605452/js/bootstrap.min_klzrbk.js" type="text/javascript"></script>
  <!--
  ============
  vendor file
  ============
   -->
  <!-- particles -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/particles.min_fhbnsj.js" type="text/javascript"></script>
  <!-- TweenMax -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/TweenMax.min_sbb0pr.js" type="text/javascript"></script>
  <!-- ScrollMagic -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/ScrollMagic_maenwt.js" type="text/javascript"></script>
  <!-- animation.gsap -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/animation.gsap_hln4sr.js" type="text/javascript"></script>
  <!-- addIndicators -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/debug.addIndicators.min_ed7lew.js" type="text/javascript"></script>
  <!-- Swiper js -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/swiper.min_ggjmrz.js" type="text/javascript"></script>
  <!-- countdown -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/countdown_rkm6v5.js" type="text/javascript"></script>
  <!-- simpleParallax -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/simpleParallax.min_lelhtg.js" type="text/javascript"></script>
  <!-- waypoints -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605458/js/vendor/waypoints.min_s1k8uw.js" type="text/javascript"></script>
  <!-- counterup -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/jquery.counterup.min_ifepdt.js" type="text/javascript"></script>
  <!-- charming -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/charming.min_kxgeny.js" type="text/javascript"></script>
  <!-- imagesloaded -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/imagesloaded.pkgd.min_qin0k4.js" type="text/javascript"></script>
  <!-- BX-Slider -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/jquery.bxslider.min_ya1lyo.js" type="text/javascript"></script>
  <!-- Sharer -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/sharer_nrvblc.js" type="text/javascript"></script>
  <!-- sticky -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605457/js/vendor/sticky.min_r2i69h.js" type="text/javascript"></script>
  <!-- Aos -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605456/js/vendor/aos_nh4eaq.js" type="text/javascript"></script>
  <!-- main file -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625605454/js/main_feltmm.js" type="text/javascript"></script>
  <!-- sass -->
  <script src="https://res.cloudinary.com/verifiedly/raw/upload/v1625604222/sass_otc3tz.js" type="text/javascript"></script>


</body>

<script type="text/javascript">
//assign modal
const kycModalBackground = document.querySelector('.kyc_modal_background');
//assign button
const redirectBtn = document.querySelector('.redirect_btn');
const showModal = () => {
  alert('hello');
      // kycModalBackground.style.display = 'block'
}



    //add eventlistener to button that initializes the modal and kyc process

    redirectBtn.addEventListener('click', showModal);

</script>
</html>
`

class VerifiedlyKYC extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));


        
    }
    //shows modal when button is clicked
    showModal(expandState){
  

      const kycModalBackground = this.shadowRoot.querySelector('.kyc_modal_background')
  
if(expandState === true){
  kycModalBackground.classList.add("showModal")

}
else{
  kycModalBackground.classList.remove("showModal")
}

          };
          connectedCallback () {

            this.render()
        
            
            this.shadowRoot.querySelector('.redirect_btn').addEventListener('click', () => this.showModal(true))
            this.shadowRoot.querySelector('.close_icon').addEventListener('click', () => this.showModal(false))
    

            this.shadowRoot.querySelector('.agree_btn').addEventListener('click', () => this.getStartedRender())
          
            if(this.getAttribute("api-key")){

              console.log(this.getAttribute("api-key"))

          
            }else{
              alert("please add your api key")
            }
          
          };

    render(){

      const kycObjects = this.shadowRoot.querySelector(".kyc_objects")
      kycObjects.appendChild(indexPage.content.cloneNode(true));
              }
getStartedRender(){
  const kycObjects = this.shadowRoot.querySelector(".kyc_objects")
        kycObjects.appendChild(indexPage.content.cloneNode(false));
    
                kycObjects.shadowappendChild(getStartPage.content.cloneNode(true));
}
  
}

customElements.define("verifiedly-btn", VerifiedlyKYC)