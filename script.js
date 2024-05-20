function play(){
    const numOfHands = document.getElementById(`numOfHands`).value;
    const result = document.getElementById(`result`);
    const handImages = document.getElementById(`handImages`);
    const values = [];
    const images = [];

    for (let i = 0; i < numOfHands; i++){
        const value = Math.floor(Math.random() * 3) + 1;
        console.log(value);
    }

}