const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Caramelo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Clearing:
console.clear();

// Regular:
console.log('\n-Regular:');
console.log('Hello');

// Interpolated:
console.log('\n-Interpolated:');
console.log('Hello I am a %s string!', '😎');

// Styled:
console.log('\n-Styled:');
console.log('%c I am some great text ', 'font-size:30px; background:white; text-shadow: 3px 3px 0 red; color:blue')

// Warning:
console.log('\n-Warning:');
console.warn('OH NOOO');

// Error:
console.log('\n-Error:');
console.error('Errooooor!');

// Info:
console.log('\n-Info:');
console.info('Crocodiles eat 3-4 people per year');

// Testing:
console.log('\n-Testing:');
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// Viewing DOM Elements:
console.log('\n-DOM Elements:');
console.log(p);
console.dir(p);

// Grouping together:
console.log('\n-Grouping Together:');
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// Counting:
console.log('\n-Counting:');
console.count('Eduardo');
console.count('Eduardo');
console.count('Viega');
console.count('Eduardo');
console.count('Viega');
console.count('Viega');
console.count('Viega');

console.log('\n-Table:');
console.table(dogs);

// Timing:
console.log('\n-Timing:');
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });