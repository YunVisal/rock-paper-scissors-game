const actionMap = {
    0: {
        name: "rock",
        image: "/assets/rock.png"
    },
    1: {
        name: "paper",
        image: "/assets/paper.png"
    },
    2: {
        name: "scissor",
        image: "/assets/scissor.png"
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const opponentAvatar = document.querySelector("#opponent_action h2");
    const yourAvatar = document.querySelector("#player_action h2");

    const opponentActionImg = document.querySelector("#opponent_action img");
    const yourActionImg = document.querySelector("#player_action img");

    function play(action) {
        yourActionImg.src = "";
        opponentActionImg.src = "";
        setTimeout(() => {
            const opponentAction = Math.floor(Math.random() * 3);
            console.log(action, opponentAction);

            opponentAvatar.style.display = "none";
            yourAvatar.style.display = "none";

            yourActionImg.src = actionMap[action].image;
            opponentActionImg.src = actionMap[opponentAction].image;
        }, 300);
    }

    const rockButton = document.getElementById("rock");
    rockButton.onclick = function () { play(0) };

    const paperButton = document.getElementById("paper");
    paperButton.onclick = function () { play(1) };

    const scissorsButton = document.getElementById("scissor");
    scissorsButton.onclick = function () { play(2) };
});