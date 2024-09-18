import BalloonManager from './balloonManager.js';
import ConfettiManager from './confettiManager.js';

class CelebrationManager {
    constructor(options) {
        this.celebrationContainerId = options.containerId;
        this.container = document.getElementById(this.celebrationContainerId);
        this.modalDelay = options.modalDelay;
        this.initDom();
        this.setCelebrationEvents();
        this.celebrationmodal = document.getElementById('celebrationmodal');
        this.modalContainer = document.getElementById('celebrationmodal-container');
        this.confettiManager = new ConfettiManager({ ...options, ...{ confettiId: 'confetti' } });
        this.balloonManager = new BalloonManager({ ...options, ...{ celebrationManager: this } });
        if (options.modalUrl) {
            this.modalContainer.style.backgroundImage = `url(${options.modalUrl})`;
        }
        else {
            this.modalContainer.style.backgroundImage = `url(https://picsum.photos/200/300)`;
        }
    }

    initDom() {
        this.container.innerHTML = `
                <div style="position:absolute; z-index:99;">
                    <div class="celebrationmodal" id="celebrationmodal">
                        <div class="celebrationmodal-container" id="celebrationmodal-container">
                                <div id="celebration-close" class="celebration-close">
                                <button>&times;</button>
                            </div>
                        </div>
                        <div id="balloon-container">
                        </div>
                    </div>
                </div>
                <canvas id="confetti"></canvas>`;
    }
    removeFromDom() {
        this.container.innerHTML = ``;
    }

    setCelebrationEvents() {
        const close = document.getElementById('celebration-close');
        close.addEventListener('click', () => {
            localStorage.setItem("celebrationShow", "1");
            this.stopCelebration();
        })
        window.addEventListener('resize', () => {
            this.setupConfettiCanvas();
        });
    }

    startCelebration() {
        this.isAnimationActive = true;
        this.showModal();
        this.addBallons();
        this.confettiManager.setAnimationActive(true);
        this.startConfettiLoop();
        this.updateConfetti();
    }

    stopCelebration() {
        this.isAnimationActive = false;
        this.removeModal();
        this.removeBalloons();
        this.hideConfetti();
        this.confettiManager.setAnimationActive(false);
        this.stopConfettiLoop();
        this.removeFromDom();
    }

    removeBalloons() {
        this.balloonManager.removeBalloon();
    }

    addBallons() {
        this.balloonManager.createBalloons();
    }

    addConfetti(event) {
        this.confettiManager.addConfetti(event);
    }

    hideConfetti() {
        this.confettiManager.hideConfetti();
    }

    updateConfetti() {
        this.confettiManager.updateConfetti();
    }

    setupConfettiCanvas() {
        this.confettiManager.setupConfettiCanvas();
    }

    startConfettiLoop() {
        this.confettiManager.startConfettiLoop();
    }

    stopConfettiLoop() {
        this.confettiManager.stopConfettiLoop();
    }

    showModal() {
        setTimeout(() => {
            this.celebrationmodal.style.display = 'inline-block';
        }, this.modalDelay)
    }

    removeModal() {
        this.celebrationmodal.style.display = 'none';
    }
}

export default CelebrationManager;
