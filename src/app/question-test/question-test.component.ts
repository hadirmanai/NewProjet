import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-test',
  templateUrl: './question-test.component.html',
  styleUrls: ['./question-test.component.css']
})
export class QuestionTestComponent implements OnInit {

  constructor() { }

  score = 0;
  timeLeft = 60; // Temps de 60 secondes
  timerInterval: any;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.timerInterval);
        this.checkAnswers(); // Vérifie les réponses automatiquement lorsque le temps est écoulé
      }
    }, 1000);
  }
  questions = [
    {
      question: 'Quel est la capitale de la France ?',
      options: ['Paris', 'Londres', 'Berlin'],
      correctAnswer: 'Paris'
    },
  ];

  selectedAnswers: string[] = [];


  checkAnswers() {
    this.score = 0;
    this.questions.forEach((q, index) => {
      if (this.selectedAnswers[index] === q.correctAnswer) {
        this.score++;
      }
    });
  }
}

