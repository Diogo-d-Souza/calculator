function Calculator() {
    this.start = () => this.handleClick();
    this.display = document.querySelector('.display');

    this.handleClick = () => {
        document.addEventListener('click', e => {
            const element = e.target;
            if (element.classList.contains('btn-num')) this.addDisplayNum(element)
            if (element.classList.contains('btn-clear')) this.clearDisplay()
            if (element.classList.contains('btn-del')) this.delDisplayNum()
            if (element.classList.contains('btn-eq')) this.mathDisplay()
        });
    };

    this.addDisplayNum = (element) => this.display.value += element.innerText;
    this.clearDisplay = () => this.display.value = '';
    this.delDisplayNum = () => this.display.value = this.display.value.slice(0, -1);
    this.mathDisplay = () => {
        try {
            const equals = eval(this.display.value);
            console.log(equals)
            if (!equals) {
                alert("Invalid math");
                return;
            };
            this.display.value = equals;
        } catch (e) {
            alert("Invalid math");
            return;
        };
    };
}
const calculator = new Calculator;
calculator.start();

