<template>
  <section class="text-section">
    <h3 class="title">About</h3>

    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="text">
          <div class="about-mail">
            聯絡方式：<a href="mailto:flin951753@gmail.com">flin951753@gmail.com</a>
          </div>

          <div class="accordion" id="accordionExample">
            <!-- Front-End Developer -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
                  Front-End Developer
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body" v-html="frontEndDeveloperText"></div>
              </div>
            </div>

            <!-- UI / UX -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  UI / UX
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  {{ uiUxText }}
                </div>
              </div>
            </div>

            <!-- Back-end Developer -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Back-end Developer
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  {{ backEndDeveloperText }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </section>
</template>

<script setup>
const frontEndDeveloperText = `
  - 熟悉 HTML、CSS、Bootstrap<br>
  - 熟悉 CSS Preprocessor: SCSS<br>
  - 熟悉 RWD - 熟悉 JavaScript、Jquery<br>
  - 基礎認識 AWD<br>
  - 基礎認識 ES6+<br>
  - 基礎認識 Vue.js<br>
  - 基礎認識 TypeScript<br>
  - 實際介接 API 經驗<br>
  - 基礎 Git 版本控制實務經驗`;
const uiUxText = `- 熟悉 Adobe XD
- 基於使用者需求規劃與設計流程
- 提升使用者體驗`;
const backEndDeveloperText = `- 基礎 Python 
- 基礎 Python Flask
- 基礎 PHP 
- 基礎 Linux 操作
- SSL 購買與更新
- Domain 基礎設定`;
</script>

<style scoped lang="scss">
#accordionExample {
  margin-top: 5vw;
  color: #2A6F97;

  .accordion-body {
    font-size: 1rem;
    line-height: 2rem;
  }

  .accordion-button:not(.collapsed) {
    color: #FFF;
    background-color: #2A6F97;
  }
}

.text{
  width: 50%;
  margin: 0 auto;
}

</style>