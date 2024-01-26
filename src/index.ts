type info = {name: string, age: number, email: string, phone: number};

let arr: info[] = [];


let button = document.querySelector('.button')!;

let innerHtmls = ``;

const render = () => {
  innerHtmls = ``;
  arr.forEach(item => {
    let {name,age,email,phone} = item;
    innerHtmls += `
    <div class="hover:scale-105 transition-all duration-300 shadow-md rounded-2xl flex items-start flex-col space-y-2 p-6 *:flex *:gap-2">
        <span class="font-normal text-base"><h4 class="font-extrabold text-base">name:</h4> ${name}</span>
        <span class="font-normal text-base"><h4 class="font-extrabold text-base">Age:</h4> ${age}</span>
        <span class="font-normal text-base"><h4 class="font-extrabold text-base">Email:</h4> ${email}</span>
        <span class="font-normal text-base"><h4 class="font-extrabold text-base">Phone:</h4> ${phone}</span>
      </div>
    `;
  });
  document.querySelector('.cards')!.innerHTML = innerHtmls;
};


button.addEventListener('click', () => {
  let name = document.querySelector('.name') as HTMLInputElement;
  let age = document.querySelector('.age') as HTMLInputElement;
  let email = document.querySelector('.email') as HTMLInputElement;
  let phone = document.querySelector('.phone') as HTMLInputElement;
  arr.push({name: name.value, age: age.valueAsNumber, email: email.value, phone: phone.valueAsNumber});
  render();
  name.value = '';
  age.value = '';
  email.value = '';
  phone.value = '';
});
