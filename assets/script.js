const input = document.getElementById("input");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const total = document.getElementById("total");
let i = 0;

// add event

btn.addEventListener('click', (event) => {

	if (input.value.trim() === '') return;

	createDeleteElements(input.value);
})

// create and delete todo

function createDeleteElements(value) {
	i++;

	const li = document.createElement('li');
	const btn = document.createElement('button');

	li.className = 'li';
	li.textContent = value;
	result.appendChild(li);
	
	btn.className = 'btn';
	btn.textContent = 'add / delete';
	li.appendChild(btn);

	// remove todo

	btn.addEventListener('click', (e) => {
		i--;
		total.textContent = i;
		result.removeChild(li);
	})

	// toggle class active

	li.addEventListener('click', (e) => {
		li.classList.toggle('li-active');
	})

	total.textContent = i;

	result.appendChild(li);

}