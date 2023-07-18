let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")


function cliked() {

    let x = Math.floor(Math.random() * fighters.length)
    let y = Math.floor(Math.random() * fighters.length)

    document.getElementById("stage").innerText = fighters[x] + "VS" + fighters[y];

}
