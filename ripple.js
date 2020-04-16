document.addEventListener('DOMContentLoaded', function(e) {
    document.querySelectorAll('.wave-effect').forEach(ele => {
        ele.addEventListener('mousedown', function(md) {
            var elePosition = getComputedStyle(this).position,
            rect = this.getBoundingClientRect(),
            x = md.clientX - (rect.left + window.scrollX),
            y = md.clientY - (rect.top + window.scrollY),
            dia = Math.min(this.offsetHeight, this.offsetWidth, 100),
            // wave canvas
            wave = document.createElement('div');
            wave.classList.add('wave');
            this.appendChild(wave);

            if (this.closest('.wave-effect'))
                md.stopPropagation();

            if (!elePosition || elePosition == 'static')
                this.style.position = 'relative';

            var waveAnimation = document.createElement('div');
            waveAnimation.classList.add('wave-animation');
            Object.assign(waveAnimation.style, 
                {
                    "background-color": this.getAttribute('wave-color'),
                    "width": dia + "px",
                    "height": dia + "px",
                    "left": x - (dia/2) + "px",
                    "top": y - (dia/2) +"px"
                });
            wave.appendChild(waveAnimation);
            waveAnimation.onanimationend = function() {
                this.parentElement.remove();
            }
        })
    })
});