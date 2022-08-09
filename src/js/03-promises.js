import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();

  const delayEl = Number(formRef.delay.value);
  const step = Number(formRef.step.value);
  const amount = Number(formRef.amount.value);
  let delay = delayEl; 

  for (let position = 1; position <= amount; position += 1) {    
  createPromise(position, delay)
    .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`); 
  })
    .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
     delay += step;
  } 
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => { 
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) { 
        resolve({ position, delay });
      } 
        reject({ position, delay });
    }, delay);  
  }
)}

 

