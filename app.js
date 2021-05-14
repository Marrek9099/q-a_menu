
const asnwersList = document.querySelectorAll('.answer');

const iconButtons = document.querySelectorAll('i');

for(let icon of iconButtons){
    icon.addEventListener('click', function() {
        if(this.classList.contains('fa-plus-square')) {
            for(let icon of iconButtons){
                if (icon.classList.contains('fa-minus-square')) {
                    icon.classList.remove('fa-minus-square');
                    icon.classList.add('fa-plus-square');
                } 
            };
            this.classList.remove('fa-plus-square');
            this.classList.add('fa-minus-square');
            for(let answer of asnwersList) {
                if (answer.classList.contains('makeVisible')) {
                    answer.classList.remove('makeVisible');
                }
            };
            this.parentElement.parentElement.childNodes[3].classList.add('makeVisible');
        }
        else {
            this.classList.remove('fa-minus-square');
            this.classList.add('fa-plus-square');
            this.parentElement.parentElement.childNodes[3].classList.remove('makeVisible');
        }
    });
}
