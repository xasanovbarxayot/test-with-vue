/*<template>
  <div class="container">
    <div class="wrapper">
      <h1>Vue js dan testlar to'plami</h1>
      <ul>
        <li>
          <a href="#!">1</a>
        </li>
        <li>
          <a href="#!">1</a>
        </li>
        <li>
          <a href="#!">1</a>
        </li>
        <li>
          <a href="#!">1</a>
        </li>
        <li class="active">
          <a href="#!">1</a>
        </li>
      </ul>
      <div class="test" v-for="(question, index) in questions" :key="index">
        <h2>
          {{ index + 1 }}-savol.
          <p>
            {{ question.question }}
          </p>
        </h2>
        <div
          :class="{ active: index == currentIndex && option.isCorrect }"
          v-for="(option, index1) in question.options"
          :key="index1"
        >
          <input
            type="radio"
            name="javob"
            :id="option.value"
            :value="option.value"
            @click="chekAnswer(option, index)"
          />
          <label :for="option.value"> {{ option.title }} </label>
        </div>
      </div>
      <span class="finish" @click="finish()"> Testni tamomlash </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "Vue js ning asoschisi kim",
          answer: 0,
          options: ["Steven Yu ", "Chang Yu ", "Evan Yu "],
          selected: null,
        },
        {
          question: "Vue js da nechta hooklar bor",
          answer: 0,
          options: ["7 ta ", "5 ta ", "10 ta "],
          selected: null,
        },
        {
          question:
            "Vue da ikki tomonlama bog'lanish hosil qilib beradigan direktiv qaysi ya'ni js va DOM bilan",
          answer: 1,
          options: ["v-f", "v-model", ":class "],
          selected: null,
        },
      ],
    };
  },
  methods: {
    chekAnswer(option, index) {
      if (option.isCorrect) {
        console.log("togri");
        this.trueAnswer++;
        this.currentIndex = index;
      }
    },
    changeClass(option) {
      console.log(option.isCorrect);
    },
    finish() {
      console.log(this.trueAnswer);
    },
  },
  computed: {
    score() {
      let value = 0;
      this.questions.map((q) => {
        if (q.selected == q.answer) {
          value++;
        }
      });
      return value;
    },
    getCurrentQuestions() {
      let question = this.questions.value;
      return question
    },
  
  },
  
};
</script>

<style>
@import "./assets/style/style.css";
 </style>