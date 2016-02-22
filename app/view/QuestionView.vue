<h3>{{question}}</h3>

<template v-for="answer in answers">
    <input type="radio"
           name="answer"
           :id="answer"
           :value="answer"
           v-model="selectedAnswer">
    <label :for="answer">{{answer}}</label>
    <br>
</template>
<input v-show="selectedAnswer" class="submit" type="submit">