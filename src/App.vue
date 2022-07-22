<template>
  <div id="appComp" class="container-app">
    <div class="container-quiz">
      <div class="quiz-header">
        <h1>Quiz</h1>
      </div>
      <div class="step-progress" :style="{ width: progres + '%' }"></div>
      <div
        class="quiz-main"
        v-for="(element, index) in questions.slice(a, b)"
        :key="index"
        v-show="quiz"
      >
        <div class="box-question">
          <h2>Question {{ b }} / {{ questions.length }}</h2>
          <p>
            {{ element.question }}
          </p>
        </div>
        <question-Comp
          :element="element"
          @selectResponse="selectResponse"
          :select="select"
          @check="check"
        >
        </question-Comp>
      </div>

      <boxScoreComp
        :score_show="score_show"
        :questions="questions"
        @restart="restart"
      >
        <template #header> Your score is </template>
        <template #button> Restart</template>
        <template #score> {{ score }}</template>
      </boxScoreComp>

      <div class="quiz-footer">
        <div class="box-button" v-if="progres < 100">
          <button
            @click="skipQuestion"
            :style="!next ? 'background:rgb( 106 ,128,202) ' : ''"
          >
            Skip
          </button>
          <button
            @click="nextQuestion"
            :style="next ? 'background:rgb( 106 ,128,202) ' : ''"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import questionComp from "@/components/questionComp.vue";
import boxScoreComp from "@/components/boxScoreComp.vue";
export default {
  components: {
    questionComp,
    boxScoreComp,
  },
  data() {
    return {
      questions: [
        {
          question: "Vue js ning asoschisi kim",
          suggestions: [
            {
              suggestion: "Steven Yu ",
            },
            {
              suggestion: "Chang Yu",
            },
            {
              suggestion: "Evan Yu",
              correct: true,
            },
          ],
        },
        {
          question: "Vue js da nechta hooklar bor",
          suggestions: [
            {
              suggestion: "7 ta ",
              correct: true,
            },
            {
              suggestion: "5 ta ",
            },
            {
              suggestion: "10 ta",
            },
          ],
        },
        {
          question:
            "Vue da ikki tomonlama bog'lanish hosil qilib beradigan direktiv qaysi ya'ni js va DOM bilan",
          suggestions: [
            {
              suggestion: "v-f",
            },
            {
              suggestion: "v-model",
              correct: true,
            },
            {
              suggestion: ":class",
            },
          ],
        },
        {
          question:
            "Form tegi ichidadagi type submit bo'lgan button bosilganda sahifa yangilanib ketmasligi uchun nima qilish kerak",
          suggestions: [
            {
              suggestion:
                "From tegida sumbit ga .prevent yozib qo'yish kerakmi ",
              correct: true,
            },
            {
              suggestion: "Classini o'zgartirib qo'yish kerak",
            },
            {
              suggestion: "app id berish kerak",
            },
          ],
        },
        {
          question: "Cli  qanday ma'noni anglatadi",
          suggestions: [
            {
              suggestion: "To'g'ri javob yo'q",
            },
            {
              suggestion: "Command Line Interface",
              correct: true,
            },
            {
              suggestion: "Vue da yangi muhit ochish",
            },
          ],
        },
      ],
      a: 0,
      b: 1,
      select: false,
      score: 0,
      quiz: true,
      score_show: false,
      next: false,
      progres: 0,
    };
  },
  methods: {
    selectResponse(item) {
      this.select = true;
      this.next = true;
      if (item.correct) {
        this.score++;
      }
    },
    check(item) {
      if (item.correct) {
        return "correct";
      } else {
        return "incorrect";
      }
    },
    nextQuestion() {
      if (!this.next) {
        return;
      }
      this.progres = this.progres + 100 / this.questions.length;
      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
        this.select = false;
        this.next = false;
      }
    },
    skipQuestion() {
      if (this.next) {
        return;
      }
      this.progres = this.progres + 100 / this.questions.length;

      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
        this.select = false;
      }
    },
    restart() {
      Object.assign(this.$data, this.$options.data());
    },
  },
};
</script>

<style>
@import "./assets/style/style.css";
</style>