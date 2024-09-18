class Confetti {
    constructor(colors, confettiParams, container, clickPosition) {
        this.container = container;
        this.clickPosition = clickPosition;
        this.confettiParams = confettiParams;
        this.randomModifier = this.rand(-1, 1);
        this.colorPair = colors[Math.floor(this.rand(0, colors.length))];
        this.dimensions = {
            x: this.rand(confettiParams.size.x[0], confettiParams.size.x[1]),
            y: this.rand(confettiParams.size.y[0], confettiParams.size.y[1]),
        };
        this.position = {
            x: clickPosition[0],
            y: clickPosition[1]
        };
        this.rotation = this.rand(0, 2 * Math.PI);
        this.scale = { x: 1, y: 1 };
        this.velocity = {
            x: this.rand(-confettiParams.initSpeed, confettiParams.initSpeed) * 0.4,
            y: this.rand(-confettiParams.initSpeed, confettiParams.initSpeed)
        };
        this.flipSpeed = this.rand(0.2, 1.5) * confettiParams.flipSpeed;

        if (this.position.y <= container.h) {
            this.velocity.y = -Math.abs(this.velocity.y);
        }
        this.terminalVelocity = this.rand(1, 1.5) * confettiParams.terminalVelocity;
    }
    rand(min, max) {
        return Math.random() * (max - min) + min;
    }
    update() {
        this.velocity.x *= 0.98;
        this.position.x += this.velocity.x;

        this.velocity.y += (this.randomModifier * this.confettiParams.drag);
        this.velocity.y += this.confettiParams.gravity;
        this.velocity.y = Math.min(this.velocity.y, this.terminalVelocity);
        this.position.y += this.velocity.y;

        this.scale.y = Math.cos((this.position.y + this.randomModifier) * this.flipSpeed);
        this.color = this.scale.y > 0 ? this.colorPair.front : this.colorPair.back;
    }
}
export default Confetti;