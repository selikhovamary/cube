$(document).ready(function(){
    let latestSpin = 0;
console.log('1')
    function spinCube() {
        let spin = Math.floor(Math.random() * 6 + 1);
        while (latestSpin == spin) {
            spin = Math.floor(Math.random() * 6 + 1);
        }
        latestSpin = spin;
        switch (spin) {
            case 1: 
                $('#cube').removeClass().addClass('show-ft');
                break; 
            case 2: 
                $('#cube').removeClass().addClass('show-rt'); 
                break;
            case 3: 
                $('#cube').removeClass().addClass('show-bk');
                break;
            case 4: 
                $('#cube').removeClass().addClass('show-lt'); 
                break;
            case 5: 
                $('#cube').removeClass().addClass('show-tp'); 
                break;
            case 6: 
                $('#cube').removeClass().addClass('show-bm'); 
                break;
        }
    }
    let isClickable = true;

    function setAbleToClick() {
        isClickable = true;
    }

    $('#cube > div').click(function(){
        if (!isClickable) return;
        isClickable = false;
        setTimeout(setAbleToClick, 6000);

        for (let i = 0; i < 10; i++) {
            const seconds = 500 * i;
            setTimeout(spinCube, seconds)
        }
    })

});