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
                  Projelerim</h1>
              </div>
              <div class="card-subtitle">
                <h2>Devam Edenler</h2>
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
                    Aktif Çalışan
                  </h2>
                  <h6 class="resume">
                    <a href="cv/muhammet-hamza-ince.pdf" download="Muhammet Hamza İnce Cv">Özgeçmişimi İndirin</a>
                    <i class="fa-solid fa-file-arrow-down"></i>
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
                  <i class="fa-brands fa-instagram"></i>
                  Takip et
                </p>
              </div>
              <div class="url-whatsapp">
                <p>
                  <i class="fa-solid fa-envelope"></i>
                  E-posta gönder
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
