document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.input');
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.innerText === 'AC') {
                input.value = '';
            } else if (button.innerText === 'CL') {
                input.value = input.value.slice(0, -1);
            } else if (button.innerText === '=') {
                try {
                    input.value = eval(input.value);
                } catch (error) {
                    input.value = 'Error';
                }
            } else {
                input.value += button.innerText;
            }
        });
    });
});