<template>
  <div id="container">

    <div class="bg1" :style="{ opacity: bg1Opacity }"></div>
    <div class="bg2" :style="{ opacity: bg2Opacity }"></div>
    <div class="bg3"></div>

    <div class="top">
      <p>Fei's <br />Portfolio</p>
    </div>

    <!-- 導覽列 Start -->
    <!-- pc Start-->
    <nav class="navbar navbar-nav navbar-light pc">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#container">Top</a>
            </li>
            <!-- <li class="nav-item">
                            <a class="nav-link" href="#SE">Experience</a>
                        </li>-->
            <li class="nav-item">
              <a class="nav-link" href="#skill">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#work">Work</a>
            </li>
            <!-- <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li> -->
          </ul>
        </div>
      </div>
    </nav>
    <!-- sp Start -->
    <nav class="navbar navbar-nav navbar-light nav-sp sp">
      <button class="navbar-toggler sp" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" id="openbtn">
        <i class="fas fa-bars"></i>
      </button>
    </nav>
    <div class="over sp" id="over">
      <p></p>
      <p><a class="nav-link" href="#container">Top</a></p>
      <br />
      <!-- <p><a class="nav-link" href="#SE">Experience</a></p><br> -->
      <p><a class="nav-link" href="#skill">About</a></p>
      <br />
      <p><a class="nav-link" href="#work">Work</a></p>
      <br />
      <!-- <p><a class="nav-link" href="#contact">Contact</a></p><br> -->
      <button class="navbar-toggler over-btn" id="closebtn">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <!-- 導覽列 End -->

    <div class="contents" ref="contents">
      <!-- School & Experience End-->
      <AboutView id="about"></AboutView>
      <WorkView id="work"></WorkView>
      <FooterView id="footer" />
    </div>
    <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->


  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, computed } from 'vue'

import AboutView from '@/views/home/AboutView.vue'
import WorkView from '@/views/home/WorkView.vue'
import FooterView from '@/views/home/FooterView.vue'

const scrollEnd = ref(document.documentElement.scrollHeight)
const scrollNow = ref(document.documentElement.scrollTop)
const opacityVal = computed(() => scrollNow.value / scrollEnd.value / 1.4)

const bg1Opacity = ref(1 - opacityVal.value)
const bg2Opacity = ref(opacityVal.value)

const overDisplay = ref('none')
const openBtnDisplay = ref('block')

const fadeInElement = (element: HTMLElement) => {
  element.style.animation = 'fadeIn 3s'
  element.style.marginTop = '0'
}

const scrollHandler = () => {
  const top = document.documentElement.scrollTop || document.body.scrollTop
  const about = document.getElementById('about')
  const work = document.getElementById('work')

  if (top > about.offsetTop - about.offsetHeight) {
    fadeInElement(about)
  }
  if (top > work.offsetTop - work.offsetHeight) {
    fadeInElement(work)
  }

  handleScroll
}

// const loadingAnimation = () => {
//   document.getElementById('container').style.display = 'none'
//   setTimeout(() => {
//     document.getElementById('load').style.display = 'none'
//     document.getElementById('container').style.display = 'block'
//   }, 3000)
// }


onMounted(() => {
  window.addEventListener('scroll', scrollHandler)
  window.addEventListener('scroll', handleScroll)
  // loadingAnimation()

})


const openBtnClick = () => {
  overDisplay.value = 'block'
  openBtnDisplay.value = 'none'
}

const closeBtnClick = () => {
  openBtnDisplay.value = 'block'
  overDisplay.value = 'none'
}

const overClick = () => {
  openBtnDisplay.value = 'block'
  overDisplay.value = 'none'
}

const handleScroll = () => {
  scrollNow.value = document.documentElement.scrollTop
  bg1Opacity.value = 1 - opacityVal.value
  bg2Opacity.value = opacityVal.value
}
</script>

<style lang="scss">
$maincolor: #15558d;
$bottmcolor: #326277;

.top {
  position: relative;
  font-size: 3rem;
  z-index: 15;
  min-height: 100vh;
  height: 100vh;

  p {
    position: relative;
    top: 35%;
    left: 30%;
    width: fit-content;
  }
}

.contents {
  padding: 0 !important;
  margin: 0 !important;
  position: relative;

  z-index: 10;
  width: 98.5vw;

  // background-color: red;
  display: grid;
  justify-items: center;
  grid-gap: 2rem;
  grid-template-columns: 12fr;
  grid-template-rows: 100%;
  grid-template-areas:
    "about"
    "work"
    "footer";

  #about,
  #work,
  #footer {
    text-align: center;
  }

  #about,
  #work {
    .title {
      font-size: 3rem;
      text-align: center;
      margin: 0.5rem;
    }

    .row{
      align-items: center;
    }
  }

  #about {
    grid-area: about;
  }

  #work {
    grid-area: work;
  }

  #footer {
    grid-area: footer;
  }

  .text-section{
    width: 100%;
  }
}

/*========== background image ==========*/
#container {

  .bg1,
  .bg2,
  .bg3 {
    width: 100vw;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }

  .bg1 {
    background: url('../../assets/images/background/pexels-kristina-paukshtite-1591252-1.jpg') no-repeat center bottom;
    background-size: cover;
    z-index: 1;
    // opacity: 1;
  }

  .bg2 {
    background: url('../../assets/images/background/pexels-kristina-paukshtite-1591252-3.jpg') no-repeat center bottom;
    background-size: cover;
    z-index: 2;
    // opacity: 0;
  }

  .bg3 {
    background: url('../../assets/images/background/pexels-kristina-paukshtite-1591252-2.jpg') no-repeat center bottom;
    background-size: cover;
    z-index: 0;
  }
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  color: $maincolor;
  background: none;
}</style>