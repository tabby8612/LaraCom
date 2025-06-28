export default function ConfettiCelebration() {
    const colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0'];

    let randomRotation = 0;
    let randomWidth = 0;
    let randomHeight = 0;
    let randomAnimationDelay = 0;
    let randomColors = '';

    for (let i = 0; i < 50; i++) {
        randomRotation = Math.floor(Math.random() * 360);
        randomWidth = Math.floor(Math.random() * document.documentElement.clientWidth);
        randomHeight = Math.floor(Math.random() * 400);
        randomAnimationDelay = Math.floor(Math.random() * 50);
        randomColors = colors[Math.floor(Math.random() * colors.length)];

        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.top = randomHeight + 'px';
        confetti.style.left = randomWidth + 'px';
        confetti.style.backgroundColor = randomColors;
        confetti.style.transform = 'skew(15deg) rotate(' + randomRotation + 'deg)';
        confetti.style.animationDelay = randomAnimationDelay + 's';

        document.getElementById('confetti-wrapper')?.appendChild(confetti);
    }

    return <div id="confetti-wrapper"></div>;
}
