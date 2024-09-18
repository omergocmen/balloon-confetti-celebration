class BalloonManager {
    constructor(options) {
        this.ballooonContainer = document.getElementById("balloon-container");
        this.balloonCount = options.balloonCount;
        this.celebrationManager = options.celebrationManager;
    }
    random(num) {
        return Math.floor(Math.random() * num);
    }
    getRandomStyles() {
        let mt = this.random(200);
        let ml = this.random(50);
        let dur = this.random(5) + 6;

        let shouldRotate = Math.random() > 0.2;
        let rotateSpeed = shouldRotate ? (this.random(360)) : 0;
        let rotateDirection = Math.random() > 0.5 ? 1 : -1;

        let sizeMultiplier = 0.5 + Math.random() * 0.8;
        let width = 125 * sizeMultiplier;
        let height = 125 * sizeMultiplier;

        return `
                                                        margin: ${mt}px 0 0 ${ml}px;
                                                        animation: float ${dur}s ease-in infinite;
                                                        --rotate-angle: 0deg;
                                                        --rotate-speed: ${rotateSpeed * rotateDirection}deg;
                                                        width: ${width}px;
                                                        height: ${height}px;
                                                    `;
    }

    createBalloons() {
        for (var i = this.balloonCount; i > 0; i--) {
            var balloon = document.createElement("div");
            balloon.className = "balloon";
            balloon.style.cssText = this.getRandomStyles();
            balloon.addEventListener("click", (event) => {
                event.target.remove();
                this.celebrationManager.addConfetti(event);
            });
            this.ballooonContainer.append(balloon);
        }
    }

    removeBalloon() {
        while (this.ballooonContainer.firstChild) {
            this.ballooonContainer.removeChild(this.ballooonContainer.firstChild);
        }
    }
}
export default BalloonManager;
