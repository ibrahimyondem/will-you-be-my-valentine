document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const maybeBtn = document.getElementById('maybeBtn');
    const question = document.getElementById('question');
    const elmoGif = document.getElementById("elmoGif");
    const yayText  = document.getElementById("love");

    const yaySound = new Audio("assets/sounds/yay.mp3");
    const susSound = new Audio("assets/sounds/sus.mp3");

    const loveGif = 
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2locG5zeHprdHo4M2V3dTB4em0wZjA4MXdiMDA4bHN5OTFibHplaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Rik9n81Vda3rzr5F8h/giphy.gif"

    const susGif =
     "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExendxaW84ZGppc243YjRmNm51eXV5OG1uZmZmb3Y4cnY5cTkyczdqMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yxy69FCE06Ql0Fjk4Z/giphy.gif"
     
    yesBtn.addEventListener("click", handleYes);
    noBtn.addEventListener("mouseover", handleNo);
    maybeBtn.addEventListener("click", handleMaybe);


    function handleYes(){
        yaySound.play();

        confetti({
            particleCount: 1150,
            spread: 760,
            origin: { y: 0.6 }
        });

        question.innerText = "I Love You Too 💖";
        yayText.innerText = "YAYYYYYYYYY!";
        elmoGif.src = loveGif;
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
        maybeBtn.style.display = "none";
    }

        function handleNo(){
        const x = Math.random() * 300 - 100;
        const y = Math.random() * 300 - 100;
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    }

     function handleMaybe(){
        susSound.play();
        question.innerText = "Hmm 🤔 take your time…";
        elmoGif.src = susGif;
        elmoGif.style.width = "350px";
        elmoGif.style.height = "350px";
        yesBtn.style.fontSize = "48px";
        yesBtn.style.padding = "20px 40px";
        noBtn.style.display = "none";
        maybeBtn.style.display = "none";
    }

});

