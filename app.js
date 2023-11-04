// mendapatkan object element button p1
const p1Button = document.querySelector("#p1-button");

// mendapatkan object element button p3
const p2Button = document.querySelector("#p2-button");

// mendapatkan object element p1Display
const p1Display = document.querySelector("#p1-display");

// mendapatkan object element p2Display
const p2Display = document.querySelector("#p2-display");

// mendapatkan object element button reset
const resetButton = document.querySelector("#reset");

// mendapatkan object element select winpoint
const winPointOption = document.querySelector("#winpoint");

// variable score p1
let p1Score = 0;

// variable score p2
let p2Score = 0;

// variable win point
let winPoint = 3;

let isGameOver = false;

function reset() {
    // mereset status game
    isGameOver = false;

    // mereset point ke 0
    p1Score = 0;
    p1Display.textContent = p1Score;

    p2Score = 0;
    p2Display.textContent = p2Score;
}

// ketika button p1 diklik maka akan menambahkan 1 skor
p1Button.addEventListener("click", () => {
    if (!isGameOver) {
        // menambah 1 skor
        p1Score += 1;

        if (p1Score === winPoint) {
            isGameOver = true;
        
        }
        // menampilkan skor pada element "p1Display"
        p1Display.textContent = p1Score;
    }
});

// ketika button p2 diklik maka akan menambahkan 1 skor
p2Button.addEventListener("click", () => {
    if (!isGameOver) {
        // menambah 1 skor
        p2Score += 1;

        if (p2Score === winPoint) {
            isGameOver = true;
        
        }
        // menampilkan skor pada element "p2Display"
        p2Display.textContent = p2Score;
    }
});

// ketika button reset diklik maka akan menjalankan function reset
resetButton.addEventListener("click", reset);

// ketika value dari element select winPoint nilai nya berubah maka akan dijalankan event nya
winPointOption.addEventListener("change", function () {
    // update nilai winPoint

    /*
        disini kita menggunakan kata kunci "this" untuk mengacu pada element sekarang yaitu "select" dengan id "winpoint"
        disini kita harus menggunakan anonymous function yang bukan arrow function, karena arrow function tidak support
        kata kunci "this"
    */
    winPoint = parseInt(this.value); /* parsing ke int agar memastikan data yang di assign
    adalah berupa number bukan string */

    // melakukan reset point
    reset();
});