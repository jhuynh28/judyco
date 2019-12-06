
    (function(d, i, r, e, c, t, l, y) {
        i[r] = i[r] || function () {
            (i[r].cq = i[r].cq || []).push(arguments)
        };
        l = d.createElement("script");
        l.id = "directlyRTMScript";
        l.src = e;
        l.async = 1;
        y = d.head || d.getElementsByTagName("head")[0];
        if (d.readyState === "complete" || d.readyState === "loaded" || d.readyState === "interactive") {
            y.appendChild(l);
        } else if (i.addEventListener) {
            i.addEventListener("DOMContentLoaded", function() { y.appendChild(l); });
        } else {
            i.attachEvent("onload", function() { y.appendChild(l); });
        }
    })(document, window, "DirectlyRTM", "https://app.directly.com/widgets/rtm/embed.js");
    DirectlyRTM("config", { id: "2c9982cc6ec9b36c016edc4f4b3e0ec6" });
