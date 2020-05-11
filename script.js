$(document).ready(function(){
    let lastSpin = 0;

    function spinCube() {
        let spin = Math.floor(Math.random() * 6 + 1);
        while (lastSpin == spin) {
            spin = Math.floor(Math.random() * 6 + 1);
        }
        lastSpin = spin;
        switch (spin) {
            case 1: 
                $('#shape').removeClass().addClass('show-ft');
                break; 
            case 2: 
                $('#shape').removeClass().addClass('show-rt'); 
                break;
            case 3: 
                $('#shape').removeClass().addClass('show-bk');
                break;
            case 4: 
                $('#shape').removeClass().addClass('show-lt'); 
                break;
            case 5: 
                $('#shape').removeClass().addClass('show-tp'); 
                break;
            case 6: 
                $('#shape').removeClass().addClass('show-bm'); 
                break;
        }
    }
    let isClickable = true;

    function setAbleToClick() {
        isClickable = true;
    }

    $('#shape > div').click(function(){
        if (!isClickable) return;
        isClickable = false;
        setTimeout(setAbleToClick, 6000);

        for (let i = 0; i < 10; i++) {
            const seconds = 500 * i;
            setTimeout(spinCube, seconds)
        }
    })

});