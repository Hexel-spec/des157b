(function(){
    'use strict';
    console.log('reading js');

    const granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#86FFFD', '#EEE5C2'],
                ['#61F3C4', '#336771'],
                ['#F9ABFF', '#472773']
            ]
        }
    }
});

})()