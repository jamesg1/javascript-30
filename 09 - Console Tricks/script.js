const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');
// Interpolated
console.log('Hello I am a %s string!', '💩')
// Styled
console.log('%c I am some great text', 'background: blue;font-size: 25px')
// warning!
console.warn('Oh No Warning!')
// Error :|
console.error('Error!');
// Info
console.info('Crocs eat 3-4 people per year');
// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'FAILED!');
// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} years old`);
    console.groupEnd(`${dog.name}`);
})

// counting
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('James');
console.count('James');
console.count('Wes');
// timing
console.log("fetching data...");
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
    console.timeEnd('fetching data');
    console.log(data);
});

console.table(dogs);