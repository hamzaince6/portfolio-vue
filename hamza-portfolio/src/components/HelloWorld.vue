<template>
  <b-container fluid class="custom-container">
      <b-row>

        <!--Stack Section-->
        <div class="col-12 col-md-6 col-lg-3 tablet-4">
          <div class="stacks-card">
            <div class="card-body">
              <div class="card-title">
                <h1>
                  <i class="fas fa-layer-group custom-icon"></i>
                  Benim
                </h1>
              </div>
              <div class="card-subtitle">
                <h2>Kullandıklarım</h2>
              </div>
              <div class="stacks-icon">
                <div class="icon1">
                  <i class="fa-brands fa-vuejs"></i>
                  VueJS
                </div>
                <div class="icon2">
                  <i class="fa-brands fa-figma"></i>
                  Figma
                </div>
                <div class="icon3">
                  <i class="fa-brands fa-react"></i>
                  React
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

        <!-- Number Section -->
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
        <!-- Number Section -->

        <!--About Section-->
        <div class="col-12 col-md-6 col-lg-3 about-column">
          <div class="about-card">
            <div class="card-body">
              <div class="card-title">
                <h1>
                  <i class="fas fa-address-card custom-icon"></i>
                  Hakkında
                </h1>
              </div>
              <div class="card-subtitle">
                <h2>Frontend Developer</h2>
              </div>
              <div class="about-card-content">
                <p>
                  Merhaba, ben Hamza. Kastamonu Üniversitesi Bilgisayar Programcılığı bölümünden mezun oldum.
                  Yazılım geliştirme alanında deneyim kazandım ve kendimi sürekli olarak geliştirmeye odaklanıyorum.
                </p>
                <p>
                  Yazılım geliştirme kariyerimde Git, Microsoft SQL Server, HTML5, CSS3, JavaScript, .NET, .NET CORE, C# ve ASP.NET MVC
                  gibi teknolojileri etkin bir şekilde kullandım. Frontend tarafında VueJS gibi araçlara da ilgi duyuyorum.
                </p>
                <p>
                  İki e-ticaret projesinde yer aldım ve CMS projelerinde çeşitli görevler üstlendim.
                  Güncel teknolojilere öncelik vererek projelerde etkili çözümler sunmaya özen gösteriyorum.
                </p>
                <p>
                  Hızlı öğrenme yeteneğim ve analitik düşünme becerim sayesinde kendimi sürekli olarak geliştirmekteyim.
                  Problem çözme ve iletişim becerilerimle takım içinde etkili bir şekilde çalışıyorum.
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
                  Projelerim
                </h1>
              </div>
              <div class="card-subtitle">
                <h2>Devam Edenler</h2>
              </div>
              <div id="project-slider" class="splide">
                <div class="splide__track">
                  <ul class="splide__list">
                    <li class="splide__slide">
                      <iframe src="https://drd-demo.netlify.app/" width="100%" style="border:none; height: 300px;">
                        Tarayıcınız iframe öğelerini desteklemiyor.
                      </iframe>
                    </li>
                    <li class="splide__slide">
                      <iframe src="https://www.indigosolutions.com.tr/" width="100%" style="border:none; height: 300px;">
                        Tarayıcınız iframe öğelerini desteklemiyor.
                      </iframe>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Project Section-->

        <!--Me Section-->
        <div class="col-12 col-md-8 col-lg-4">
          <div class="me-section">
            <div class="me-header">
              <img src="../assets/img/main.webp" class="img-fluid" width="128" alt="hamza-ince-vesikalik-fotografi">
              <div class="me-header-text">
                <div class="online-works">
                  <h2>
                    <i class="fa-solid fa-circle-notch fa-spin" style="color: #63E6BE;" aria-label="aktif-çalışan"></i>
                    Aktif Çalışan
                  </h2>
                  <h6 class="resume">
                    <a href="cv/muhammet-hamza-ince.pdf"
                        download="muhammet-hamza-ince-cv.pdf"
                        title="Muhammet Hamza İnce'nin özgeçmişini indirin"
                        aria-label="Muhammet Hamza İnce'nin özgeçmişini indirin">
                      Özgeçmişimi İndirin
                      <i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i>
                    </a>
                  </h6>
                </div>
                <h2>Muhammet Hamza İnce</h2>
                <h4><span>Frontend Developer</span></h4>
              </div>
            </div>
            <div class="me-content">
              <div class="item">
                <i class="fa-solid fa-laptop-code"></i>
                <h2>Uzaktan Çalışıyorum</h2>
              </div>
              <div class="item">
                <i class="fa-solid fa-code"></i>
                <h2>Frontend Geliştirici</h2>
              </div>
              <div class="item">
                <i class="fa-brands fa-vuejs"></i>
                <h2>VueJs</h2>
              </div>
              <div class="item">
                <i class="fa-brands fa-react"></i>
                <h2>React</h2>
              </div>
              <div class="item">
                <i class="fa-solid fa-smile"></i>
                <h2>Neşeli & Rahat</h2>
              </div>
              <div class="item">
                <i class="fa-solid fa-clipboard-list"></i>
                <h2>Düzenli Çalışmalar</h2>
              </div>
              <div class="item">
                <i class="fa-solid fa-palette"></i>
                <h2>Bento Design Trend</h2>
              </div>
              <div class="item">
                <i class="fa-solid fa-lightbulb"></i>
                <h2>UI Design</h2>
              </div>
              <div class="item">
                <i class="fa-solid fa-mobile-alt"></i>
                <h2>Mobil Uyumlu Tasarım</h2>
              </div>
            </div>
            <div class="me-footer">
              <div class="url-instagram">
                <p>
                  <a href="https://www.instagram.com/hamza.ince6/?hl=tr" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-instagram"></i> Takip et
                  </a>
                </p>
              </div>
              <div class="url-whatsapp">
                <p>
                  <a href="mailto:hamzaince001@gmail.com">
                    <i class="fa-solid fa-envelope"></i> E-posta gönder
                  </a>
                </p>
              </div>
            </div>
            <div class="me-github-skilss">
              <table border="0" align="center">
                <tr border="0">
                  <td>
                    <img src="https://github-readme-stats.vercel.app/api?username=hamzaince6&amp;theme=radical&amp;hide_border=false&amp;include_all_commits=false&amp;count_private=false" alt="">
                    <hr class="github-hr">
                    <img src="https://github-readme-streak-stats.herokuapp.com/?user=hamzaince6&amp;theme=radical&amp;hide_border=false" alt="">
                  </td>
                </tr>
              </table>
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
                Beni Takip Edin
              </h2>
            </div>
            <div class="follow-me-subtitle">
              <h4>Çevrimiçi Varlığım</h4>
            </div>
            <div class="socials">
              <div class="socaial-item">
                <a href="https://github.com/hamzaince6">
                  <i class="fa-brands fa-github fa-beat" style="color: #333;"></i>
                  Github
                </a>
              </div>
              <div class="socaial-item">
                <a href="https://gitlab.com/hamzaince6">
                  <i class="fa-brands fa-gitlab fa-beat" style="color: #e24329;"></i>
                  Gitlab
                </a>
              </div>
              <div class="socaial-item">
                <a href="https://www.instagram.com/hamza.ince6/">
                  <i class="fa-brands fa-instagram fa-beat" style="color: #C13584;"></i>
                  Instagram
                </a>
              </div>
              <div class="socaial-item">
                <a href="https://www.facebook.com/ahmetturab.ince/">
                  <i class="fa-brands fa-facebook fa-beat" style="color: #1877F2;"></i>
                  Facebook
                </a>
              </div>
              <div class="socaial-item">
                <a href="https://x.com/Hamza__ince">
                  <i class="fa-brands fa-twitter fa-beat" style="color: #1DA1F2;"></i>
                  Twitter
                </a>
              </div>
              <div class="socaial-item">
                <a href="https://www.linkedin.com/in/hamzaince/">
                  <i class="fa-brands fa-linkedin fa-beat" style="color: #0077B5;"></i>
                  Linkedin
                </a>
              </div>
              <div class="socaial-item">
                <a href="https://codersclub.co/tr/dev/hamzaince6">
                  <i class="fa-solid fa-code fa-beat" style="color: #63E6BE;"></i>
                  CodersClub
                </a>
              </div>
              <div class="github-language">
                <table border="0" align="center">
                  <tr border="0">
                    <td width="50%" align="center">
                      <img  align="center"  src="https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=hamzaince6&theme=radical&hide_border=true&no-bg=true&no-frame=true&langs_count=6"/>
                    </td>
                  </tr>
                </table>
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
                Galeri</h2>
            </div>
            <div class="gallery-subtitle">
              <h2>Kişisel Yaşam</h2>
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
      </b-row>
    </b-container>
</template>

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

<script setup>

import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';

// Splide Slider'ı Vue Bileşeninde Başlatma
onMounted(() => {
  new Splide('#project-slider', {
    type       : 'loop',
    pagination : true,
    arrows     : true,
    perPage    : 1,
    gap        : '20px',
  }).mount();
});

import img1 from '../assets/img/1.webp';
import img2 from '../assets/img/2.webp';
import img3 from '../assets/img/3.webp';
import img4 from '../assets/img/4.webp';
import img5 from '../assets/img/5.webp';
import img6 from '../assets/img/6.webp';
import img7 from '../assets/img/7.webp';
import img8 from '../assets/img/8.webp';
import img9 from '../assets/img/9.webp';
import img10 from '../assets/img/10.webp';
import img11 from '../assets/img/11.webp';

const images = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
  { src: img9 },
  { src: img10 },
  { src: img11 },
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
  { number: 7, title: 'Ekip Çalışması', icon: 'fa-solid fa-user-group' },
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
<!--        <div class="b-avatar">-->

<!--        </div>-->
<!--      </b-col>-->
<!--    </b-row>-->
<!--  </b-container>-->
<!--</template>-->
