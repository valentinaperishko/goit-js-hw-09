import { Notify } from 'notiflix';

const formEl = document.querySelector('.form');
const delayFormEl = document.querySelector('input[name="delay"]');
const stepFormEl = document.querySelector('input[name="step"]');
const amountFormEl = document.querySelector('input[name="amount"]');
console.log(delayFormEl);

formEl.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((reject, resolve) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}

function onSubmit(evt) {
  evt.preventDefault();
  let delayPromise = Number(delayFormEl.value);
  const stepPromise = Number(stepFormEl.value);
  const amountPromise = Number(amountFormEl.value);
  for (let i = 1; i <= amountPromise; i += 1) {
    createPromise(i, delayPromise)
      .then(resolve => Notiflix.Notify.success(resolve))
      .catch(reject => Notiflix.Notify.failure(reject));
    delayPromise += stepPromise;
  }
  formEl.reset();
}
