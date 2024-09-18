# Balloon Confetti Celebration

## Explanation

## Overview

The **Balloon Confetti Celebration** package allows you to easily add a festive celebration effect to your web applications, featuring balloons and confetti. It is simple to integrate and customize.

## Installation

To install the package, use npm:

```bash
npm install balloon-confetti-celebration

```

## Usage
To use the Balloon Confetti Celebration package, you need to include the required HTML elements and set up the JavaScript configuration.

## HTML Setup
Add the following HTML elements to your page:

```html
<button id="celebrate">Celebrate</button>
<div id="balloon-confetti-celebration"></div>
```

## JavaScript Configuration

```javascript
<script type="module">
    import CelebrationManager from './node_modules/balloon-confetti-celebration/managers/celebrationManager.js';

    const options = {
        containerId: 'balloon-confetti-celebration',
        modalUrl: 'https://cdn.pixabay.com/photo/2023/11/29/12/29/cartoon-8419487_1280.jpg', // Optional: If not set, random images will be displayed.
        balloonCount: 40,
        modalDelay: 500,
        confettiColors: [{ front: "#FEDB37", back: "#FDB931" }],
        confettiParams: {
            delay: 1700,
            number: 120,
            size: { x: [10, 30], y: [15, 25] },
            initSpeed: 35,
            gravity: 0.65,
            drag: 0.08,
            terminalVelocity: 6,
            flipSpeed: 0.017,
        }
    };

    const celebrateButton = document.getElementById("celebrate");
    celebrateButton.addEventListener('click', () => {
        const celebrationManager = new CelebrationManager(options);
        celebrationManager.setupConfettiCanvas();
        celebrationManager.startCelebration();
    }, false);
</script>
```
### Configuration Options

- **containerId**: The ID of the container where the celebration will take place (required).
- **modalUrl**: URL of an image to display during the celebration. If not provided, a random image will be used.
- **balloonCount**: The number of balloons to display (default: 40).
- **modalDelay**: Delay before showing the modal image (default: 500 ms).
- **confettiColors**: Array of objects defining the front and back colors of the confetti.
- **confettiParams**: Object containing parameters for confetti animation:
  - **delay**: Delay before confetti starts (default: 1700 ms).
  - **number**: Number of confetti pieces to create (default: 120).
  - **size**: Size of confetti pieces in pixels.
  - **initSpeed**: Initial speed of the confetti (default: 35).
  - **gravity**: Gravity effect on confetti (default: 0.65).
  - **drag**: Drag effect on confetti (default: 0.08).
  - **terminalVelocity**: Maximum speed of the confetti (default: 6).
  - **flipSpeed**: Speed of the flip animation for confetti pieces (default: 0.017).


## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Balloon Confetti Celebration</title>
    <link rel="stylesheet" href="node_modules/balloon-confetti-celebration/assets/dist/css/styles.css">
</head>
<body>
    <div>
        <button id="celebrate">Celebrate</button>
        <div id="balloon-confetti-celebration"></div>
    </div>

    <script type="module">
        import CelebrationManager from './node_modules/balloon-confetti-celebration/managers/celebrationManager.js';
        
        const options = {
            containerId: 'balloon-confetti-celebration',
            modalUrl: 'https://cdn.pixabay.com/photo/2023/11/29/12/29/cartoon-8419487_1280.jpg',
            balloonCount: 40,
            modalDelay: 500,
            confettiColors: [{ front: "#FEDB37", back: "#FDB931" }],
            confettiParams: {
                delay: 1700,
                number: 120,
                size: { x: [10, 30], y: [15, 25] },
                initSpeed: 35,
                gravity: 0.65,
                drag: 0.08,
                terminalVelocity: 6,
                flipSpeed: 0.017,
            }
        };

        const celebrateButton = document.getElementById("celebrate");
        celebrateButton.addEventListener('click', () => {
            const celebrationManager = new CelebrationManager(options);
            celebrationManager.setupConfettiCanvas();
            celebrationManager.startCelebration();
        }, false);
    </script>
</body>
</html>
```
