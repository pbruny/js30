const drumKit = (function () {

    const playSound = function (e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if (!audio) return;

        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    }

    const removeTransition = function (e) {
        if (e.propertyName !== 'transform') return;

        this.classList.remove('playing');
    }

    const keysPressed = function () {
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.addEventListener('transitionend', removeTransition);
        });
    }
    
    const listener = function () {
        window.addEventListener('keydown', playSound);
    }
    
    return {
        init: function () {
            listener();
            keysPressed();
        }
    }
})();

drumKit.init();