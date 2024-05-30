import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  result_q1: any; result_q2: any; result_q3: any; result_q4: any; result_q5: any; result_q6: any; result_q7: any; result_q8: any; result_q9: any; result_q10: any;

  q1: string = '';
  q2: string = '';
  q3: string = '';
  q4: string = '';
  q5: string = '';
  q6: string = '';
  q7: string = '';
  q8: string = '';
  q9: string = '';
  q10: string = '';

  answer5: string = '';
  answer6: string = '';
  answer7: string = '';
  answer8: string = '';
  answer9: string = '';
  answer10: string = '';

  result: string | null = null;

  currentQuestionIndex: number = 0;

  constructor() { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.result = this.q1 + this.q2 + this.q3 + this.q4 + this.q5 + this.q6 + this.q7 + this.q8
    this.result_q1 = this.q1; this.result_q2 = this.q2; this.result_q3 = this.q3; this.result_q4 = this.q4; this.result_q5 = this.q5; this.result_q6 = this.q6; this.result_q7 = this.q7;
    this.result_q8 = this.q8; this.result_q9 = this.q9; this.result_q10 = this.q10;

    if (this.result_q5 === 'Нет') {
      this.answer5 = 'Для вас очень важно посетить стоматолога, ведь консультации со стоматологом должны быть хотя бы раз в год.'
    } else {
      this.answer5 = ''
    }

    if (this.result_q6 === '') {
      this.answer6 = ''
    } else {
      this.answer6 = ''
    }

    if (this.result_q7 === '') {
      this.answer7 = ''
    } else {
      this.answer7 = ''
    }

    if (this.result_q8 === '') {
      this.answer8 = ''
    } else {
      this.answer8 = ''
    }

    if (this.result_q9 === 'Да') {
      this.answer9 = 'Вам срочно нужно к стоматологу, текущее состояние ваших зубов может привести к тяжелым последствиям.'
    } else {
      this.answer9 = ''
    }

    if (this.result_q10 === '1/3 коронки') {
      this.answer10 = 'У вас окрасилось 1/3 коронки зуба - это значит, что поводов для беспокойств нет.'
    }
    else if (this.answer10 = 'Так как у вас уже окрасилось 2/3 коронки зуба, настоятельно рекомендуем сходить на плановую консультацию к врачу.') {
      this.answer10 = ''
    }
    else {
      this.answer10 = ''
    }
  }

  clearQ10(): void {
    this.q10 = '';
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < 9) {
      this.currentQuestionIndex++;
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && this.currentQuestionIndex < 8) {
      event.preventDefault();
      this.nextQuestion();
    }
  }

  newQuiz(): void {
    this.result_q1 = ''; this.result_q2 = ''; this.result_q3 = ''; this.result_q4 = ''; this.result_q5 = ''; this.result_q6 = ''; this.result_q7 = ''; this.result_q8 = ''; this.result_q9 = ''; this.result_q10 = '';

    this.q1 = '';
    this.q2 = '';
    this.q3 = '';
    this.q4 = '';
    this.q5 = '';
    this.q6 = '';
    this.q7 = '';
    this.q8 = '';
    this.q9 = '';
    this.q10 = '';

    this.answer5 = '';
    this.answer6 = '';
    this.answer7 = '';
    this.answer8 = '';
    this.answer9 = '';
    this.answer10 = '';

    this.result = null;

    this.currentQuestionIndex = 0;
  }
}
