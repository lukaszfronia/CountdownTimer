'use strict';

const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const newyear = document.querySelector('#new-year');

const now = new Date();
newyear.innerHTML = now.getFullYear();

const christmasDate = new Date(now.getFullYear(), 11, 24).getTime();

const countdownTimer = function () {
  const now = new Date().getTime();
  // Calculate distance betwen 2 dates
  const distance = Math.abs(christmasDate - now);
  // Calculate days
  const calcDaysPassed = dist => Math.floor(dist / (1000 * 60 * 60 * 24));
  // Calculate hours
  const calcHourPassed = dist =>
    Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // Calculate minutes
  const calcMinutePassed = dist =>
    Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
  // Calculate seconds
  const calcSecondPassed = dist => Math.floor((dist % (1000 * 60)) / 1000);

  const day = calcDaysPassed(distance);
  const hour = calcHourPassed(distance);
  const minute = calcMinutePassed(distance);
  const second = calcSecondPassed(distance);

  days.innerHTML = day;
  hours.innerHTML = hour;
  minutes.innerHTML = minute;
  seconds.innerHTML = second;

  if (distance < 0) {
    clearInterval(timer);
  }
};

countdownTimer();
const timer = setInterval(countdownTimer, 1000);
