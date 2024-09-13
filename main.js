document.addEventListener('DOMContentLoaded', () => {
    const numberStringInput = document.getElementById('numberString');
    const filterToggleBtn = document.getElementById('filterToggle');
    const applyFilterBtn = document.getElementById('applyFilter');
    const outputDiv = document.getElementById('output');

    let isFiltering = false;
    let filterCount = 0;

    const createNumberElement = (number, size) => {
        const span = document.createElement('span');
        span.textContent = number;
        span.style.fontSize = `${size}px`;
        span.style.marginRight = '5px';
        return span;
    };

    const applyFilter = () => {
        const numberString = numberStringInput.value;
        outputDiv.innerHTML = ''; 

        const numbers = numberString.split('');

        numbers.forEach((num, index) => {
            let size = 16; 

            if (isFiltering && parseInt(num) % 2 === 0) {
                size = 16 + (filterCount * 8);
                filterCount++;
            }

            const numberElement = createNumberElement(num, size);
            outputDiv.appendChild(numberElement);
        });
    };

    filterToggleBtn.addEventListener('click', () => {
        isFiltering = !isFiltering;
        filterToggleBtn.textContent = isFiltering ? 'Desactivar Filtrado' : 'Activar Filtrado';
    });

    applyFilterBtn.addEventListener('click', applyFilter);
});
