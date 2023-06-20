let body = document.body;
let line = document.querySelector("#line");
line.style.animation = "spin 2s linear infinite";

let style = document.createElement("style");
style.innerHTML = `@keyframes spin{
    from{
        transform : rotate(0deg);
    }
    to{
        transform : rotate(360deg);
    }
}`
body.append(style);
