<template>
  <div>
    <div id="load">
      <div class="bg1"></div>
      <p>Fei's <br />Portfolio</p>
    </div>

    <div id="container">
      <div class="bg1" :style="{ opacity: bg1Opacity }"></div>
      <div class="bg2" :style="{ opacity: bg2Opacity }"></div>
      <div class="bg3"></div>

      <p class="topText">Fei's <br />Portfolio</p>

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
        <button
          class="navbar-toggler sp"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="openbtn"
        >
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

      <div class="contents">
        <div id="top"></div>

        <!-- School & Experience End-->
        <section class="skill text-section" id="skill">
          <h3>About</h3>
          <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="text">
                <div class="about-mail">
                  聯絡方式：<a href="mailto:flin951753@gmail.com">flin951753@gmail.com</a>
                </div>
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Front-End Developer
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        - 熟悉 HTML、CSS、Bootstrap<br />
                        - 熟悉 CSS Preprocessor: SCSS<br />
                        - 熟悉 RWD - 熟悉 JavaScript、Jquery<br />
                        - 基礎認識 AWD<br />
                        - 基礎認識 ES6+<br />
                        - 基礎認識 Vue.js<br />
                        - 基礎認識 TypeScript<br />
                        - 實際介接 API 經驗<br />
                        - 基礎 Git 版本控制實務經驗
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        UI / UX
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        - 熟悉 Adobe XD<br />
                        - 基於使用者需求規劃與設計流程<br />
                        - 提升使用者體驗<br />
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Back-end Developer
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        - 基礎 Python <br />
                        - 基礎 Python Flask<br />
                        - 基礎 PHP <br />
                        - 基礎 Linux 操作<br />
                        - SSL 購買與更新<br />
                        - Domain 基礎設定<br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
        </section>

        <!-- Work Start-->
        <section class="work text-section" id="work">
          <h3>Work</h3>

          <div class="pc">
            <div class="row">
              <div class="col-4">
                <a
                  href="https://10646028.github.io/date-picker/?startTime=20220214"
                  target="_blank"
                >
                  <div class="work-block">
                    <!-- <img class="work-img" src="images/work/1.png" />
                    <img class="work-img-bg" src="images/work/1-2.png" /> -->
                  </div>
                </a>
              </div>
              <div class="col-4">
                <div class="work-block">
                  <!-- <img class="work-img" src="images/work/2.png" />
                  <img class="work-img-bg" src="images/work/2-2.png" /> -->
                </div>
              </div>
              <div class="col-4">
                <a href="index.html" target="_blank">
                  <div class="work-block">
                    <!-- <img class="work-img" src="images/work/3.png" />
                    <img class="work-img-bg" src="images/work/3-2.png" /> -->
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="sp">
            <div class="row">
              <div class="col-12">
                <a
                  href="https://10646028.github.io/date-picker/?startTime=20220214"
                  target="_blank"
                >
                  <div class="work-block">
                    <!-- <img class="work-img" src="images/work/1.png" />
                    <img class="work-img-bg" src="images/work/1-2.png" /> -->
                  </div>
                </a>
              </div>
              <div class="col-12">
                <div class="work-block">
                  <!-- <img class="work-img" src="images/work/2.png" />
                  <img class="work-img-bg" src="images/work/2-2.png" /> -->
                </div>
              </div>
              <div class="col-12">
                <a href="index.html" target="_blank">
                  <div class="work-block">
                    <!-- <img class="work-img" src="images/work/3.png" />
                    <img class="work-img-bg" src="images/work/3-2.png" /> -->
                  </div>
                </a>
              </div>
            </div>
          </div>

          <a href="work.html" class="btn">
            <span class="work-link">Read More</span>
          </a>
        </section>
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </div>
  <footer>Copyright © 2021. Design by <a href="mailto:flin951753@gmail.com">Fei</a>.</footer>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, computed } from 'vue'

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
  const skill = document.getElementById('skill')
  const work = document.getElementById('work')

  if (top > skill.offsetTop - skill.offsetHeight) {
    fadeInElement(skill)
  }
  if (top > work.offsetTop - work.offsetHeight) {
    fadeInElement(work)
  }

  handleScroll
}

const loadingAnimation = () => {
  document.getElementById('container').style.display = 'none'
  setTimeout(() => {
    document.getElementById('load').style.display = 'none'
    document.getElementById('container').style.display = 'block'
  }, 3000)
}

onMounted(() => {
  window.addEventListener('scroll', scrollHandler)
  window.addEventListener('scroll', handleScroll)
  loadingAnimation()
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

<style scoped lang="scss">
@import './assets/style/sass/main.css';
@import './assets/style/sass/load.css';
@import './assets/style/sass/rwd.css';
</style>