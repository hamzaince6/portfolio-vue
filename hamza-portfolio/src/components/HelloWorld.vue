<template>
    <div class="container-fluid custom-container">
      <div class="row">

        <!--Stack Section-->
        <div class="col-12 col-md-6 col-lg-3 tablet-4">
          <div class="stacks-card">
            <div class="card-body">
              <div class="card-title">
                <h1>
                  <i class="fas fa-layer-group custom-icon"></i>
                  My Stacks
                </h1>
              </div>
              <div class="card-subtitle">
                <h2>Tech Arsenal</h2>
              </div>
              <div class="stacks-icon">
                <div class="icon1">
                  <i class="fa-brands fa-webflow"></i>
                  WebFlow
                </div>
                <div class="icon2">
                  <i class="fa-brands fa-figma"></i>
                  Figma
                </div>
                <div class="icon3">
                  <i class="fa-brands fa-python"></i>
                  Framer
                </div>
                <div class="icon4">
                  <i class="fa-brands fa-x"></i>
                  Adobe XD
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Stack Section-->

        <!--Number Section-->
        <div class="col-12 col-md-2 col-lg-2" v-for="(project, index) in projects" :key="index">
          <div class="project">
            <div class="project-number">
              <h1>
                {{ project.number }}
                <i class="fas fa-plus project-icon"></i>
              </h1>
            </div>
            <div class="project-title">
              <h2>
                <i :class="project.icon + ' project-title-icon'"></i>
                {{ project.title }}
              </h2>
            </div>
          </div>
        </div>
        <!--Number Section-->

        <!--About Section-->
        <div class="col-12 col-md-6 col-lg-3 about-column">
          <div class="about-card">
            <div class="card-body">
              <div class="card-title">
                <h1>
                  <i class="fas fa-address-card custom-icon"></i>
                  About
                </h1>
              </div>
              <div class="card-subtitle">
                <h2>About Hamza İnce</h2>
              </div>
              <div class="about-card-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis eaque in minus sint!
                  Deleniti dignissimos dolor facere fugiat laborum nostrum quis repellat sapiente tempora, ullam! Dolor fugiat porro quo?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis eaque in minus sint!
                  Deleniti dignissimos dolor facere fugiat laborum nostrum quis repellat sapiente tempora, ullam! Dolor fugiat porro quo?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis eaque in minus sint!
                  Deleniti dignissimos dolor facere fugiat laborum nostrum quis repellat sapiente tempora, ullam! Dolor fugiat porro quo?
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis eaque in minus sint!
                  Deleniti dignissimos dolor facere fugiat laborum nostrum quis repellat sapiente tempora, ullam! Dolor fugiat porro quo?
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--About Section-->

        <!--Project Section-->
        <div class="col-12 col-md-6 col-lg-3">
          <div class="project-card">
            <div class="card-body">
              <div class="card-title">
                <h1>
                  <i class="fas fa-list-check custom-icon"></i>
                  Projects</h1>
              </div>
              <div class="card-subtitle">
                <h2>Workflow Highlights</h2>
              </div>
              <div class="process">
                <!--              <div class="process-url">-->
                <!--                <p>-->
                <!--                  <i class="fas fa-list-check custom-icon"></i>-->
                <!--                  DRD Filo Oto Kiralama-->
                <!--                </p>-->
                <!--              </div>-->
                <!--              <div class="process-url">-->
                <!--                <p>-->
                <!--                  <i class="fas fa-list-check custom-icon"></i>-->
                <!--                  DRD Filo Oto Kiralama-->
                <!--                </p>-->
                <!--              </div>-->
                <!--              <div class="process-url">-->
                <!--                <p>-->
                <!--                  <i class="fas fa-list-check custom-icon"></i>-->
                <!--                  DRD Filo Oto Kiralama-->
                <!--                </p>-->
                <!--              </div>-->
                <!--              <div class="process-url">-->
                <!--                <p>-->
                <!--                  <i class="fas fa-list-check custom-icon"></i>-->
                <!--                  DRD Filo Oto Kiralama-->
                <!--                </p>-->
                <!--              </div>-->
                <!--              <div class="process-url">-->
                <!--                <p>-->
                <!--                  <i class="fas fa-list-check custom-icon"></i>-->
                <!--                  DRD Filo Oto Kiralama-->
                <!--                </p>-->
                <!--              </div>-->
                <iframe src="https://drd-demo.netlify.app/" width="100%" style="border:none;">
                  Tarayıcınız iframe öğelerini desteklemiyor.
                </iframe>

              </div>
            </div>
          </div>
        </div>
        <!--Project Section-->

        <!--Me Section-->
        <div class="col-12 col-md-8 col-lg-4">
          <div class="me-section">
            <div class="me-header">
              <img src="../assets/img/main.jpg" class="img-fluid" width="128" alt="">
              <div class="me-header-text">
                <div class="online-works">
                  <h2>
                    <i class="fa-solid fa-circle-notch fa-spin" style="color: #63E6BE;"></i>
                    Available To Work
                  </h2>
                  <h6 class="resume">
                    <a href="src/assets/cv/muhammet-hamza-ince.pdf" download="Muhammet Hamza İnce Cv">Resume</a>
                    <i class="fa-solid fa-file-arrow-down"></i>
                  </h6>
                </div>
                <h2>Muhammet Hamza İnce</h2>
                <h4>I'm a <span>Frontend Developer</span></h4>
              </div>
            </div>
            <div class="me-content">
              <div class="item">
                <i class="fa-solid fa-location-dot"></i>
                <h2>Turkey</h2>
              </div>
              <div class="item">
                <i class="fa-solid fa-location-dot"></i>
                <h2>English & Türkçe</h2>
              </div>
              <div class="item">
                <i class="fa-solid fa-location-dot"></i>
                <h2>Product Designer</h2>
              </div>
              <div class="item">
                <i class="fa-solid fa-location-dot"></i>
                <h2>Kastamonu Üniversitesi</h2>
              </div>
              <div class="item">
                <i class="fa-solid fa-location-dot"></i>
                <h2>IST</h2>
              </div>
            </div>
            <div class="me-footer">
              <div class="url-instagram">
                <p>
                  <i class="fa-brands fa-instagram"></i>
                  DM me (Instagram)
                </p>
              </div>
              <div class="url-whatsapp">
                <p>
                  <i class="fa-brands fa-whatsapp"></i>
                  DM me (Instagram)
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--Me Section-->

        <!--Follow Me Section-->
        <div class="col-12 col-md-4 col-lg-2">
          <div class="follow-me">
            <div class="follow-me-title">
              <h2>
                <i class="fa-brands fa-rocketchat fa-fade custom-icon"></i>
                Follow Me
              </h2>
            </div>
            <div class="follow-me-subtitle">
              <h4>Online Presence</h4>
            </div>
            <div class="socials">
              <div class="socaial-item">
                <a href="#">
                  <i class="fa-brands fa-twitter fa-beat" style="color: #58a6ff;"></i>
                  Twitter
                </a>
              </div>
              <div class="socaial-item">
                <a href="#">
                  <i class="fa-brands fa-instagram fa-beat" style="color: #a937b3;"></i>
                  Instagram
                </a>
              </div>
              <div class="socaial-item">
                <a href="#">
                  <i class="fa-brands fa-github fa-beat" style="color: #21262d;"></i>
                  Github
                </a>
              </div>
              <div class="socaial-item">
                <a href="#">
                  <i class="fa-brands fa-linkedin fa-beat" style="color: #2486b1;"></i>
                  Linkedin
                </a>
              </div>
              <div class="socaial-item">
                <a href="#">
                  <i class="fa-brands fa-linkedin fa-beat" style="color: #2486b1;"></i>
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
        <!--Follow Me Section-->

        <!--Gallery Section-->
        <div class="col-12 col-md-12 col-lg-3">
          <div class="gallery">
            <div class="gallery-title">
              <h2>
                <i class="fa-solid fa-image custom-icon"></i>
                Projects</h2>
            </div>
            <div class="gallery-subtitle">
              <h2>Works Gallery</h2>
            </div>
            <swiper
                :slides-per-view="1"
                :space-between="10"
                :loop="true"
                :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
                :mousewheel="true"
                @slideChange="onSlideChange"
            >
              <swiper-slide style="width: 426px !important;" v-for="(image, index) in images" :key="index">
                <img :src="image.src" class="gallery-img" :alt="'Image ' + (index + 1)">
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <!--Gallery Section-->

        <!--Contact Section
        <div class="col-12 col-md-3">
          <div class="contact">
            <div class="contact-title">
              <h2>
                <i class="fa-solid fa-file-arrow-down custom-icon"></i>
                Contact
              </h2>
            </div>
            <div class="contact-subtitle">
              <h4>Let’s Work Together</h4>
            </div>
            <div class="contacts-btn">
              <div class="mail">
                <a href="#">
                  <i class="fa-solid fa-envelope"></i>
                  Email Me
                </a>
              </div>
              <div class="tel">
                <a href="#">
                  <i class="fa-solid fa-envelope"></i>
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="brands-cta">

          </div>
        </div>-->

      </div>
    </div>
</template>

<script setup>
import img1 from '../assets/img/1.jpg';
import img2 from '../assets/img/2.jpg';


const images = [
  { src: img1 },
  { src: img2 },
  { src: img1 },
  { src: img2 },
  { src: img1 },
  { src: img2 },
];


import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { onMounted } from 'vue';
import { animateIcons, animateProjects, animateAboutContent, animateMeSection, animateFollowMeSection, animateProjectSection, animateGallerySection,
  hoverEffectsMeSection, hoverEffectsProjectSection } from "../assets/custom";

const onSlideChange = () => {
  console.log('slide change');
};

const projects = [
  { number: 15, title: 'Proje', icon: 'fas fa-flag' },
  { number: 200000, title: 'Satır Kod', icon: 'fas fa-face-smile' },
  { number: 3, title: 'Deneyim', icon: 'fas fa-star' },
];

onMounted(() => {
  animateIcons();
  animateProjects();
  animateAboutContent();
  animateMeSection();
  animateFollowMeSection();
  animateProjectSection();
  animateGallerySection();
  hoverEffectsMeSection();
  hoverEffectsProjectSection();
});
</script>

<!--<template>-->
<!--  <b-container fluid class="mx-auto stacks-container">-->
<!--    <b-row>-->
<!--      <b-col class="col-md-3">-->
<!--        <b-card class="stacks-card">-->
<!--          <b-card-body>-->
<!--            <b-card-title class="card-title">-->
<!--              <h1>My Stacks</h1>-->
<!--            </b-card-title>-->
<!--            <b-card-subtitle>-->
<!--              <h2>Tech Arsenal</h2>-->
<!--            </b-card-subtitle>-->
<!--          </b-card-body>-->
<!--        </b-card>-->
<!--      </b-col>-->
<!--    </b-row>-->
<!--  </b-container>-->
<!--</template>-->
