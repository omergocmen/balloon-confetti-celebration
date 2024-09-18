import Confetti from '../entities/confetti.js';

class ConfettiManager {
    constructor(options) {
        this.clickPosition;
        this.container;
        this.confettiTimeout;
        this.confettiElements = [];
        this.confettiParams = options.confettiParams;
        this.confettiColors = options.confettiColors;
        this.confetti = document.getElementById(options.confettiId);
        this.confettiCtx = this.confetti.getContext('2d');
    }

    addConfetti(e) {
        const canvasBox = this.confetti.getBoundingClientRect();
        if (e) {
            this.clickPosition = [
                e.clientX - canvasBox.left,
                e.clientY - canvasBox.top
            ];
        } else {
            this.clickPosition = [
                canvasBox.width * Math.random(),
                canvasBox.height * Math.random()
            ];
        }
        for (let i = 0; i < this.confettiParams.number; i++) {
            this.confettiElements.push(new Confetti(this.confettiColors, this.confettiParams, this.container, this.clickPosition));
        }
    }

    startConfettiLoop() {
        var that = this;
        this.confettiTimeout = setTimeout(function () {
            that.startConfettiLoop();
        }, that.confettiParams.delay + (Math.random() * 1700));
        this.addConfetti();
    }

    stopConfettiLoop() {
        clearTimeout(this.confettiTimeout);
    }

    hideConfetti() {
        this.confettiElements = [];
    }

    setupConfettiCanvas() {
        this.container = {
            w: this.confetti.clientWidth,
            h: this.confetti.clientHeight
        };
        this.confetti.width = this.container.w;
        this.confetti.height = this.container.h;
    }

    setAnimationActive(val) {
        this.isAnimationActive = val;
    }

    updateConfetti() {
        var that = this;
        if (!this.isAnimationActive) {
            return false;
        }

        this.confettiCtx.clearRect(0, 0, this.container.w, this.container.h);
        this.confettiElements.forEach((c) => {
            c.update();
            this.confettiCtx.translate(c.position.x, c.position.y);
            this.confettiCtx.rotate(c.rotation);
            const width = (c.dimensions.x * c.scale.x);
            const height = (c.dimensions.y * c.scale.y);
            this.confettiCtx.fillStyle = c.color;
            this.confettiCtx.fillRect(-0.5 * width, -0.5 * height, width, height);
            this.confettiCtx.setTransform(1, 0, 0, 1, 0, 0);
        });
        window.requestAnimationFrame(function () {
            that.updateConfetti();
        });
    }
}

export default ConfettiManager;
