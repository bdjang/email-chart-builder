// Stacked Chart I Row Selection
const stacked1Bars = document.getElementsByClassName("stacked1Bars");
const stacked1Controls = document.getElementsByClassName("stacked1Controls");
const rowsData4 = document.getElementById("rowsData4");
rowsData4.addEventListener("change", () => {
    for (var i = 0; i < stacked1Controls.length; i++) {
        stacked1Controls[i].style.display = "none";
        stacked1Bars[i].style.display = "none";
        for (var x = 0; x < rowsData4.value; x++) {
            stacked1Controls[x].style.display = "block";
            stacked1Bars[x].style.display = "block";
        }
    }
});

// Stacked Chart I Text/Color Legend
const legend1Text1 = document.getElementById("legend1Text1");
const legend1Text1x = document.getElementById("legend1Text1x");
legend1Text1x.oninput = function() {
    legend1Text1.innerHTML = legend1Text1x.value;
};
const legend1Text2 = document.getElementById("legend1Text2");
const legend1Text2x = document.getElementById("legend1Text2x");
legend1Text2x.oninput = function() {
    legend1Text2.innerHTML = legend1Text2x.value;
};
const legend1Color1 = document.getElementById("legend1Color1");
const legend1Color1x = document.getElementById("legend1Color1x");
legend1Color1x.oninput = function() {
    legend1Color1.style.color = legend1Color1x.value;
    legend1Color1.style.backgroundColor = legend1Color1x.value;
};
const legend1Color2 = document.getElementById("legend1Color2");
const legend1Color2x = document.getElementById("legend1Color2x");
legend1Color2x.oninput = function() {
    legend1Color2.style.color = legend1Color2x.value;
    legend1Color2.style.backgroundColor = legend1Color2x.value;
};

// Stacked Chart I Row Customization Logic
const stacked1Row1a = document.getElementById("stacked1Row1a");
const stacked1Row1b = document.getElementById("stacked1Row1b");
const stacked1Row1c = document.getElementById("stacked1Row1c");
const stacked1Row1d = document.getElementById("stacked1Row1d");
const stacked1Row2a = document.getElementById("stacked1Row2a");
const stacked1Row2b = document.getElementById("stacked1Row2b");
const stacked1Row2c = document.getElementById("stacked1Row2c");
const stacked1Row2d = document.getElementById("stacked1Row2d");
const stacked1Row3a = document.getElementById("stacked1Row3a");
const stacked1Row3b = document.getElementById("stacked1Row3b");
const stacked1Row3c = document.getElementById("stacked1Row3c");
const stacked1Row3d = document.getElementById("stacked1Row3d");
const stacked1Row4a = document.getElementById("stacked1Row4a");
const stacked1Row4b = document.getElementById("stacked1Row4b");
const stacked1Row4c = document.getElementById("stacked1Row4c");
const stacked1Row4d = document.getElementById("stacked1Row4d");
const stacked1Row5a = document.getElementById("stacked1Row5a");
const stacked1Row5b = document.getElementById("stacked1Row5b");
const stacked1Row5c = document.getElementById("stacked1Row5c");
const stacked1Row5d = document.getElementById("stacked1Row5d");
const stacked1Row6a = document.getElementById("stacked1Row6a");
const stacked1Row6b = document.getElementById("stacked1Row6b");
const stacked1Row6c = document.getElementById("stacked1Row6c");
const stacked1Row6d = document.getElementById("stacked1Row6d");
const stacked1Row7a = document.getElementById("stacked1Row7a");
const stacked1Row7b = document.getElementById("stacked1Row7b");
const stacked1Row7c = document.getElementById("stacked1Row7c");
const stacked1Row7d = document.getElementById("stacked1Row7d");
const stacked1Row8a = document.getElementById("stacked1Row8a");
const stacked1Row8b = document.getElementById("stacked1Row8b");
const stacked1Row8c = document.getElementById("stacked1Row8c");
const stacked1Row8d = document.getElementById("stacked1Row8d");
const stacked1Row9a = document.getElementById("stacked1Row9a");
const stacked1Row9b = document.getElementById("stacked1Row9b");
const stacked1Row9c = document.getElementById("stacked1Row9c");
const stacked1Row9d = document.getElementById("stacked1Row9d");
const stacked1Row10a = document.getElementById("stacked1Row10a");
const stacked1Row10b = document.getElementById("stacked1Row10b");
const stacked1Row10c = document.getElementById("stacked1Row10c");
const stacked1Row10d = document.getElementById("stacked1Row10d");

// Stacked Chart I Row 1 Customization Logic
const stacked1Text1 = document.getElementById("stacked1Text1"); // Data Label
stacked1Text1.oninput = function() {
    stacked1Row1a.innerHTML = stacked1Text1.value;
};
const stacked1Size1a = document.getElementById("stacked1Size1a");
stacked1Size1a.oninput = function() {
    stacked1Row1b.style.width = ((Math.abs(stacked1Size1a.value)) * .75) + "%";
    stacked1Size1b.max = Math.abs((100 - stacked1Size1a.value));
    stacked1Size1a.max = Math.abs((100 - stacked1Size1b.value));
    if (stacked1Size1a.value == "0" || stacked1Size1a.value == "100") {
        stacked1Row1c.style.borderLeft = "none";
    } else if (stacked1Size1a.value > "0" && stacked1Size1b.value > "0") {
        stacked1Row1c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text1a = document.getElementById("stacked1Text1a"); // End Data Label #1
stacked1Text1a.oninput = function() {
    if (stacked1Text1a.value == "") {
        stacked1Row1b.innerHTML = stacked1Text1a.value;
    } else if (stacked1Text1a.value) {
        stacked1Row1b.innerHTML = stacked1Text1a.value + "&nbsp;";
    }
};
const stacked1Color1a = document.getElementById("stacked1Color1a");
stacked1Color1a.oninput = function() {
    stacked1Row1b.style.backgroundColor = stacked1Color1a.value;
};
const stacked1Size1b = document.getElementById("stacked1Size1b");
stacked1Size1b.oninput = function() {
    stacked1Row1c.style.width = ((Math.abs(stacked1Size1b.value)) * .75) + "%";
    stacked1Size1a.max = Math.abs((100 - stacked1Size1b.value));
    stacked1Size1b.max = Math.abs((100 - stacked1Size1a.value));
    if (stacked1Size1b.value == "0") {
        stacked1Row1c.style.borderLeft = "none";
    } else if (stacked1Size1b.value > "0" && stacked1Size1a.value > "0") {
        stacked1Row1c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text1b = document.getElementById("stacked1Text1b"); // End Data Label #2
stacked1Text1b.oninput = function() {
    if (stacked1Text1b.value == "") {
        stacked1Row1c.innerHTML = stacked1Text1b.value;
    } else if (stacked1Text1b.value) {
        stacked1Row1c.innerHTML = stacked1Text1b.value + "&nbsp;";
    }
};
const stacked1Color1b = document.getElementById("stacked1Color1b");
stacked1Color1b.oninput = function() {
    stacked1Row1c.style.backgroundColor = stacked1Color1b.value;
};

// Stacked Chart I Row 2 Customization Logic
const stacked1Text2 = document.getElementById("stacked1Text2");
stacked1Text2.oninput = function() {
    stacked1Row2a.innerHTML = stacked1Text2.value;
};
const stacked1Size2a = document.getElementById("stacked1Size2a");
stacked1Size2a.oninput = function() {
    stacked1Row2b.style.width = ((Math.abs(stacked1Size2a.value)) * .75) + "%";
    stacked1Size2b.max = Math.abs((100 - stacked1Size2a.value));
    stacked1Size2a.max = Math.abs((100 - stacked1Size2b.value));
    if (stacked1Size2a.value == "0" || stacked1Size2a.value == "100") {
        stacked1Row2c.style.borderLeft = "none";
    } else if (stacked1Size2a.value > "0" && stacked1Size2b.value > "0") {
        stacked1Row2c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text2a = document.getElementById("stacked1Text2a");
stacked1Text2a.oninput = function() {
    if (stacked1Text2a.value == "") {
        stacked1Row2b.innerHTML = stacked1Text2a.value;
    } else if (stacked1Text2a.value) {
        stacked1Row2b.innerHTML = stacked1Text2a.value + "&nbsp;";
    }
};
const stacked1Color2a = document.getElementById("stacked1Color2a");
stacked1Color2a.oninput = function() {
    stacked1Row2b.style.backgroundColor = stacked1Color2a.value;
};
const stacked1Size2b = document.getElementById("stacked1Size2b");
stacked1Size2b.oninput = function() {
    stacked1Row2c.style.width = ((Math.abs(stacked1Size2b.value)) * .75) + "%";
    stacked1Size2a.max = Math.abs((100 - stacked1Size2b.value));
    stacked1Size2b.max = Math.abs((100 - stacked1Size2a.value));
    if (stacked1Size2b.value == "0") {
        stacked1Row2c.style.borderLeft = "none";
    } else if (stacked1Size2b.value > "0" && stacked1Size2a.value > "0") {
        stacked1Row2c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text2b = document.getElementById("stacked1Text2b");
stacked1Text2b.oninput = function() {
    if (stacked1Text2b.value == "") {
        stacked1Row2c.innerHTML = stacked1Text2b.value;
    } else if (stacked1Text2b.value) {
        stacked1Row2c.innerHTML = stacked1Text2b.value + "&nbsp;";
    }
};
const stacked1Color2b = document.getElementById("stacked1Color2b");
stacked1Color2b.oninput = function() {
    stacked1Row2c.style.backgroundColor = stacked1Color2b.value;
};

// Stacked Chart I Row 3 Customization Logic
const stacked1Text3 = document.getElementById("stacked1Text3");
stacked1Text3.oninput = function() {
    stacked1Row3a.innerHTML = stacked1Text3.value;
};
const stacked1Size3a = document.getElementById("stacked1Size3a");
stacked1Size3a.oninput = function() {
    stacked1Row3b.style.width = ((Math.abs(stacked1Size3a.value)) * .75) + "%";
    stacked1Size3b.max = Math.abs((100 - stacked1Size3a.value));
    stacked1Size3a.max = Math.abs((100 - stacked1Size3b.value));
    if (stacked1Size3a.value == "0" || stacked1Size3a.value == "100") {
        stacked1Row3c.style.borderLeft = "none";
    } else if (stacked1Size3a.value > "0" && stacked1Size3b.value > "0") {
        stacked1Row3c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text3a = document.getElementById("stacked1Text3a");
stacked1Text3a.oninput = function() {
    if (stacked1Text3a.value == "") {
        stacked1Row3b.innerHTML = stacked1Text3a.value;
    } else if (stacked1Text3a.value) {
        stacked1Row3b.innerHTML = stacked1Text3a.value + "&nbsp;";
    }
};
const stacked1Color3a = document.getElementById("stacked1Color3a");
stacked1Color3a.oninput = function() {
    stacked1Row3b.style.backgroundColor = stacked1Color3a.value;
};
const stacked1Size3b = document.getElementById("stacked1Size3b");
stacked1Size3b.oninput = function() {
    stacked1Row3c.style.width = ((Math.abs(stacked1Size3b.value)) * .75) + "%";
    stacked1Size3a.max = Math.abs((100 - stacked1Size3b.value));
    stacked1Size3b.max = Math.abs((100 - stacked1Size3a.value));
    if (stacked1Size3b.value == "0") {
        stacked1Row3c.style.borderLeft = "none";
    } else if (stacked1Size3b.value > "0" && stacked1Size3a.value > "0") {
        stacked1Row3c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text3b = document.getElementById("stacked1Text3b");
stacked1Text3b.oninput = function() {
    if (stacked1Text3b.value == "") {
        stacked1Row3c.innerHTML = stacked1Text3b.value;
    } else if (stacked1Text3b.value) {
        stacked1Row3c.innerHTML = stacked1Text3b.value + "&nbsp;";
    }
};
const stacked1Color3b = document.getElementById("stacked1Color3b");
stacked1Color3b.oninput = function() {
    stacked1Row3c.style.backgroundColor = stacked1Color3b.value;
};

// Stacked Chart I Row 4 Customization Logic
const stacked1Text4 = document.getElementById("stacked1Text4");
stacked1Text4.oninput = function() {
    stacked1Row4a.innerHTML = stacked1Text4.value;
};
const stacked1Size4a = document.getElementById("stacked1Size4a");
stacked1Size4a.oninput = function() {
    stacked1Row4b.style.width = ((Math.abs(stacked1Size4a.value)) * .75) + "%";
    stacked1Size4b.max = Math.abs((100 - stacked1Size4a.value));
    stacked1Size4a.max = Math.abs((100 - stacked1Size4b.value));
    if (stacked1Size4a.value == "0" || stacked1Size4a.value == "100") {
        stacked1Row4c.style.borderLeft = "none";
    } else if (stacked1Size4a.value > "0" && stacked1Size4b.value > "0") {
        stacked1Row4c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text4a = document.getElementById("stacked1Text4a");
stacked1Text4a.oninput = function() {
    if (stacked1Text4a.value == "") {
        stacked1Row4b.innerHTML = stacked1Text4a.value;
    } else if (stacked1Text4a.value) {
        stacked1Row4b.innerHTML = stacked1Text4a.value + "&nbsp;";
    }
};
const stacked1Color4a = document.getElementById("stacked1Color4a");
stacked1Color4a.oninput = function() {
    stacked1Row4b.style.backgroundColor = stacked1Color4a.value;
};
const stacked1Size4b = document.getElementById("stacked1Size4b");
stacked1Size4b.oninput = function() {
    stacked1Row4c.style.width = ((Math.abs(stacked1Size4b.value)) * .75) + "%";
    stacked1Size4a.max = Math.abs((100 - stacked1Size4b.value));
    stacked1Size4b.max = Math.abs((100 - stacked1Size4a.value));
    if (stacked1Size4b.value == "0") {
        stacked1Row4c.style.borderLeft = "none";
    } else if (stacked1Size4b.value > "0" && stacked1Size4a.value > "0") {
        stacked1Row4c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text4b = document.getElementById("stacked1Text4b");
stacked1Text4b.oninput = function() {
    if (stacked1Text4b.value == "") {
        stacked1Row4c.innerHTML = stacked1Text4b.value;
    } else if (stacked1Text4b.value) {
        stacked1Row4c.innerHTML = stacked1Text4b.value + "&nbsp;";
    }
};
const stacked1Color4b = document.getElementById("stacked1Color4b");
stacked1Color4b.oninput = function() {
    stacked1Row4c.style.backgroundColor = stacked1Color4b.value;
};

// Stacked Chart I Row 5 Customization Logic
const stacked1Text5 = document.getElementById("stacked1Text5");
stacked1Text5.oninput = function() {
    stacked1Row5a.innerHTML = stacked1Text5.value;
};
const stacked1Size5a = document.getElementById("stacked1Size5a");
stacked1Size5a.oninput = function() {
    stacked1Row5b.style.width = ((Math.abs(stacked1Size5a.value)) * .75) + "%";
    stacked1Size5b.max = Math.abs((100 - stacked1Size5a.value));
    stacked1Size5a.max = Math.abs((100 - stacked1Size5b.value));
    if (stacked1Size5a.value == "0" || stacked1Size5a.value == "100") {
        stacked1Row5c.style.borderLeft = "none";
    } else if (stacked1Size5a.value > "0" && stacked1Size5b.value > "0") {
        stacked1Row5c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text5a = document.getElementById("stacked1Text5a");
stacked1Text5a.oninput = function() {
    if (stacked1Text5a.value == "") {
        stacked1Row5b.innerHTML = stacked1Text5a.value;
    } else if (stacked1Text5a.value) {
        stacked1Row5b.innerHTML = stacked1Text5a.value + "&nbsp;";
    }
};
const stacked1Color5a = document.getElementById("stacked1Color5a");
stacked1Color5a.oninput = function() {
    stacked1Row5b.style.backgroundColor = stacked1Color5a.value;
};
const stacked1Size5b = document.getElementById("stacked1Size5b");
stacked1Size5b.oninput = function() {
    stacked1Row5c.style.width = ((Math.abs(stacked1Size5b.value)) * .75) + "%";
    stacked1Size5a.max = Math.abs((100 - stacked1Size5b.value));
    stacked1Size5b.max = Math.abs((100 - stacked1Size5a.value));
    if (stacked1Size5b.value == "0") {
        stacked1Row5c.style.borderLeft = "none";
    } else if (stacked1Size5b.value > "0" && stacked1Size5a.value > "0") {
        stacked1Row5c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text5b = document.getElementById("stacked1Text5b");
stacked1Text5b.oninput = function() {
    if (stacked1Text5b.value == "") {
        stacked1Row5c.innerHTML = stacked1Text5b.value;
    } else if (stacked1Text5b.value) {
        stacked1Row5c.innerHTML = stacked1Text5b.value + "&nbsp;";
    }
};
const stacked1Color5b = document.getElementById("stacked1Color5b");
stacked1Color5b.oninput = function() {
    stacked1Row5c.style.backgroundColor = stacked1Color5b.value;
};

// Stacked Chart I Row 6 Customization Logic
const stacked1Text6 = document.getElementById("stacked1Text6");
stacked1Text6.oninput = function() {
    stacked1Row6a.innerHTML = stacked1Text6.value;
};
const stacked1Size6a = document.getElementById("stacked1Size6a");
stacked1Size6a.oninput = function() {
    stacked1Row6b.style.width = ((Math.abs(stacked1Size6a.value)) * .75) + "%";
    stacked1Size6b.max = Math.abs((100 - stacked1Size6a.value));
    stacked1Size6a.max = Math.abs((100 - stacked1Size6b.value));
    if (stacked1Size6a.value == "0" || stacked1Size6a.value == "100") {
        stacked1Row6c.style.borderLeft = "none";
    } else if (stacked1Size6a.value > "0" && stacked1Size6b.value > "0") {
        stacked1Row6c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text6a = document.getElementById("stacked1Text6a");
stacked1Text6a.oninput = function() {
    if (stacked1Text6a.value == "") {
        stacked1Row6b.innerHTML = stacked1Text6a.value;
    } else if (stacked1Text6a.value) {
        stacked1Row6b.innerHTML = stacked1Text6a.value + "&nbsp;";
    }
};
const stacked1Color6a = document.getElementById("stacked1Color6a");
stacked1Color6a.oninput = function() {
    stacked1Row6b.style.backgroundColor = stacked1Color6a.value;
};
const stacked1Size6b = document.getElementById("stacked1Size6b");
stacked1Size6b.oninput = function() {
    stacked1Row6c.style.width = ((Math.abs(stacked1Size6b.value)) * .75) + "%";
    stacked1Size6a.max = Math.abs((100 - stacked1Size6b.value));
    stacked1Size6b.max = Math.abs((100 - stacked1Size6a.value));
    if (stacked1Size6b.value == "0") {
        stacked1Row6c.style.borderLeft = "none";
    } else if (stacked1Size6b.value > "0" && stacked1Size6a.value > "0") {
        stacked1Row6c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text6b = document.getElementById("stacked1Text6b");
stacked1Text6b.oninput = function() {
    if (stacked1Text6b.value == "") {
        stacked1Row6c.innerHTML = stacked1Text6b.value;
    } else if (stacked1Text6b.value) {
        stacked1Row6c.innerHTML = stacked1Text6b.value + "&nbsp;";
    }
};
const stacked1Color6b = document.getElementById("stacked1Color6b");
stacked1Color6b.oninput = function() {
    stacked1Row6c.style.backgroundColor = stacked1Color6b.value;
};

// Stacked Chart I Row 7 Customization Logic
const stacked1Text7 = document.getElementById("stacked1Text7");
stacked1Text7.oninput = function() {
    stacked1Row7a.innerHTML = stacked1Text7.value;
};
const stacked1Size7a = document.getElementById("stacked1Size7a");
stacked1Size7a.oninput = function() {
    stacked1Row7b.style.width = ((Math.abs(stacked1Size7a.value)) * .75) + "%";
    stacked1Size7b.max = Math.abs((100 - stacked1Size7a.value));
    stacked1Size7a.max = Math.abs((100 - stacked1Size7b.value));
    if (stacked1Size7a.value == "0" || stacked1Size7a.value == "100") {
        stacked1Row7c.style.borderLeft = "none";
    } else if (stacked1Size7a.value > "0" && stacked1Size7b.value > "0") {
        stacked1Row7c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text7a = document.getElementById("stacked1Text7a");
stacked1Text7a.oninput = function() {
    if (stacked1Text7a.value == "") {
        stacked1Row7b.innerHTML = stacked1Text7a.value;
    } else if (stacked1Text7a.value) {
        stacked1Row7b.innerHTML = stacked1Text7a.value + "&nbsp;";
    }
};
const stacked1Color7a = document.getElementById("stacked1Color7a");
stacked1Color7a.oninput = function() {
    stacked1Row7b.style.backgroundColor = stacked1Color7a.value;
};
const stacked1Size7b = document.getElementById("stacked1Size7b");
stacked1Size7b.oninput = function() {
    stacked1Row7c.style.width = ((Math.abs(stacked1Size7b.value)) * .75) + "%";
    stacked1Size7a.max = Math.abs((100 - stacked1Size7b.value));
    stacked1Size7b.max = Math.abs((100 - stacked1Size7a.value));
    if (stacked1Size7b.value == "0") {
        stacked1Row7c.style.borderLeft = "none";
    } else if (stacked1Size7b.value > "0" && stacked1Size7a.value > "0") {
        stacked1Row7c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text7b = document.getElementById("stacked1Text7b");
stacked1Text7b.oninput = function() {
    if (stacked1Text7b.value == "") {
        stacked1Row7c.innerHTML = stacked1Text7b.value;
    } else if (stacked1Text7b.value) {
        stacked1Row7c.innerHTML = stacked1Text7b.value + "&nbsp;";
    }
};
const stacked1Color7b = document.getElementById("stacked1Color7b");
stacked1Color7b.oninput = function() {
    stacked1Row7c.style.backgroundColor = stacked1Color7b.value;
};

// Stacked Chart I Row 8 Customization Logic
const stacked1Text8 = document.getElementById("stacked1Text8");
stacked1Text8.oninput = function() {
    stacked1Row8a.innerHTML = stacked1Text8.value;
};
const stacked1Size8a = document.getElementById("stacked1Size8a");
stacked1Size8a.oninput = function() {
    stacked1Row8b.style.width = ((Math.abs(stacked1Size8a.value)) * .75) + "%";
    stacked1Size8b.max = Math.abs((100 - stacked1Size8a.value));
    stacked1Size8a.max = Math.abs((100 - stacked1Size8b.value));
    if (stacked1Size8a.value == "0" || stacked1Size8a.value == "100") {
        stacked1Row8c.style.borderLeft = "none";
    } else if (stacked1Size8a.value > "0" && stacked1Size8b.value > "0") {
        stacked1Row8c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text8a = document.getElementById("stacked1Text8a");
stacked1Text8a.oninput = function() {
    if (stacked1Text8a.value == "") {
        stacked1Row8b.innerHTML = stacked1Text8a.value;
    } else if (stacked1Text8a.value) {
        stacked1Row8b.innerHTML = stacked1Text8a.value + "&nbsp;";
    }
};
const stacked1Color8a = document.getElementById("stacked1Color8a");
stacked1Color8a.oninput = function() {
    stacked1Row8b.style.backgroundColor = stacked1Color8a.value;
};
const stacked1Size8b = document.getElementById("stacked1Size8b");
stacked1Size8b.oninput = function() {
    stacked1Row8c.style.width = ((Math.abs(stacked1Size8b.value)) * .75) + "%";
    stacked1Size8a.max = Math.abs((100 - stacked1Size8b.value));
    stacked1Size8b.max = Math.abs((100 - stacked1Size8a.value));
    if (stacked1Size8b.value == "0") {
        stacked1Row8c.style.borderLeft = "none";
    } else if (stacked1Size8b.value > "0" && stacked1Size8a.value > "0") {
        stacked1Row8c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text8b = document.getElementById("stacked1Text8b");
stacked1Text8b.oninput = function() {
    if (stacked1Text8b.value == "") {
        stacked1Row8c.innerHTML = stacked1Text8b.value;
    } else if (stacked1Text8b.value) {
        stacked1Row8c.innerHTML = stacked1Text8b.value + "&nbsp;";
    }
};
const stacked1Color8b = document.getElementById("stacked1Color8b");
stacked1Color8b.oninput = function() {
    stacked1Row8c.style.backgroundColor = stacked1Color8b.value;
};

// Stacked Chart I Row 9 Customization Logic
const stacked1Text9 = document.getElementById("stacked1Text9");
stacked1Text9.oninput = function() {
    stacked1Row9a.innerHTML = stacked1Text9.value;
};
const stacked1Size9a = document.getElementById("stacked1Size9a");
stacked1Size9a.oninput = function() {
    stacked1Row9b.style.width = ((Math.abs(stacked1Size9a.value)) * .75) + "%";
    stacked1Size9b.max = Math.abs((100 - stacked1Size9a.value));
    stacked1Size9a.max = Math.abs((100 - stacked1Size9b.value));
    if (stacked1Size9a.value == "0" || stacked1Size9a.value == "100") {
        stacked1Row9c.style.borderLeft = "none";
    } else if (stacked1Size9a.value > "0" && stacked1Size9b.value > "0") {
        stacked1Row9c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text9a = document.getElementById("stacked1Text9a");
stacked1Text9a.oninput = function() {
    if (stacked1Text9a.value == "") {
        stacked1Row9b.innerHTML = stacked1Text9a.value;
    } else if (stacked1Text9a.value) {
        stacked1Row9b.innerHTML = stacked1Text9a.value + "&nbsp;";
    }
};
const stacked1Color9a = document.getElementById("stacked1Color9a");
stacked1Color9a.oninput = function() {
    stacked1Row9b.style.backgroundColor = stacked1Color9a.value;
};
const stacked1Size9b = document.getElementById("stacked1Size9b");
stacked1Size9b.oninput = function() {
    stacked1Row9c.style.width = ((Math.abs(stacked1Size9b.value)) * .75) + "%";
    stacked1Size9a.max = Math.abs((100 - stacked1Size9b.value));
    stacked1Size9b.max = Math.abs((100 - stacked1Size9a.value));
    if (stacked1Size9b.value == "0") {
        stacked1Row9c.style.borderLeft = "none";
    } else if (stacked1Size9b.value > "0" && stacked1Size9a.value > "0") {
        stacked1Row9c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text9b = document.getElementById("stacked1Text9b");
stacked1Text9b.oninput = function() {
    if (stacked1Text9b.value == "") {
        stacked1Row9c.innerHTML = stacked1Text9b.value;
    } else if (stacked1Text9b.value) {
        stacked1Row9c.innerHTML = stacked1Text9b.value + "&nbsp;";
    }
};
const stacked1Color9b = document.getElementById("stacked1Color9b");
stacked1Color9b.oninput = function() {
    stacked1Row9c.style.backgroundColor = stacked1Color9b.value;
};

// Stacked Chart I Row 10 Customization Logic
const stacked1Text10 = document.getElementById("stacked1Text10");
stacked1Text10.oninput = function() {
    stacked1Row10a.innerHTML = stacked1Text10.value;
};
const stacked1Size10a = document.getElementById("stacked1Size10a");
stacked1Size10a.oninput = function() {
    stacked1Row10b.style.width = ((Math.abs(stacked1Size10a.value)) * .75) + "%";
    stacked1Size10b.max = Math.abs((100 - stacked1Size10a.value));
    stacked1Size10a.max = Math.abs((100 - stacked1Size10b.value));
    if (stacked1Size10a.value == "0" || stacked1Size10a.value == "100") {
        stacked1Row10c.style.borderLeft = "none";
    } else if (stacked1Size10a.value > "0" && stacked1Size10b.value > "0") {
        stacked1Row10c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text10a = document.getElementById("stacked1Text10a");
stacked1Text10a.oninput = function() {
    if (stacked1Text10a.value == "") {
        stacked1Row10b.innerHTML = stacked1Text10a.value;
    } else if (stacked1Text10a.value) {
        stacked1Row10b.innerHTML = stacked1Text10a.value + "&nbsp;";
    }
};
const stacked1Color10a = document.getElementById("stacked1Color10a");
stacked1Color10a.oninput = function() {
    stacked1Row10b.style.backgroundColor = stacked1Color10a.value;
};
const stacked1Size10b = document.getElementById("stacked1Size10b");
stacked1Size10b.oninput = function() {
    stacked1Row10c.style.width = ((Math.abs(stacked1Size10b.value)) * .75) + "%";
    stacked1Size10a.max = Math.abs((100 - stacked1Size10b.value));
    stacked1Size10b.max = Math.abs((100 - stacked1Size10a.value));
    if (stacked1Size10b.value == "0") {
        stacked1Row10c.style.borderLeft = "none";
    } else if (stacked1Size10b.value > "0" && stacked1Size10a.value > "0") {
        stacked1Row10c.style.borderLeft = "1px solid rgb(255, 255, 255)";
    };
};
const stacked1Text10b = document.getElementById("stacked1Text10b");
stacked1Text10b.oninput = function() {
    if (stacked1Text10b.value == "") {
        stacked1Row10c.innerHTML = stacked1Text10b.value;
    } else if (stacked1Text10b.value) {
        stacked1Row10c.innerHTML = stacked1Text10b.value + "&nbsp;";
    }
};
const stacked1Color10b = document.getElementById("stacked1Color10b");
stacked1Color10b.oninput = function() {
    stacked1Row10c.style.backgroundColor = stacked1Color10b.value;
};

// Generate Stacked Chart I HTML Chart Logic
const stacked1Button = document.getElementById("stacked1Button");
const stacked1Output = document.getElementById("stacked1Output");
stacked1Button.addEventListener("click", () => {
    if (rowsData4.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: 22px;" height="22">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: 22px;" height="22">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend1Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend1Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked1Output.innerHTML = chartCode;
    } else if (rowsData4.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: 22px;" height="22">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: 22px;" height="22">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2b.style.width +'; height: 22px;" height="22">' + stacked1Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2b.value + '; border-left: ' + stacked1Row2c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2c.style.width + '; height: 22px;" height="22">' + stacked1Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend1Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend1Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked1Output.innerHTML = chartCode;
    } else if (rowsData4.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: 22px;" height="22">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: 22px;" height="22">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2b.style.width +'; height: 22px;" height="22">' + stacked1Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2b.value + '; border-left: ' + stacked1Row2c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2c.style.width + '; height: 22px;" height="22">' + stacked1Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3b.style.width + '; height: 22px;" height="22">' + stacked1Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3b.value + '; border-left: ' + stacked1Row3c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3c.style.width + '; height: 22px;" height="22">' + stacked1Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend1Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend1Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked1Output.innerHTML = chartCode;
    } else if (rowsData4.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: 22px;" height="22">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: 22px;" height="22">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2b.style.width +'; height: 22px;" height="22">' + stacked1Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2b.value + '; border-left: ' + stacked1Row2c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2c.style.width + '; height: 22px;" height="22">' + stacked1Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3b.style.width + '; height: 22px;" height="22">' + stacked1Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3b.value + '; border-left: ' + stacked1Row3c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3c.style.width + '; height: 22px;" height="22">' + stacked1Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4b.style.width + '; height: 22px;" height="22">' + stacked1Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4b.value + '; border-left: ' + stacked1Row4c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4c.style.width + '; height: 22px;" height="22">' + stacked1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend1Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend1Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked1Output.innerHTML = chartCode;
    } else if (rowsData4.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: 22px;" height="22">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: 22px;" height="22">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2b.style.width +'; height: 22px;" height="22">' + stacked1Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2b.value + '; border-left: ' + stacked1Row2c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2c.style.width + '; height: 22px;" height="22">' + stacked1Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3b.style.width + '; height: 22px;" height="22">' + stacked1Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3b.value + '; border-left: ' + stacked1Row3c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3c.style.width + '; height: 22px;" height="22">' + stacked1Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4b.style.width + '; height: 22px;" height="22">' + stacked1Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4b.value + '; border-left: ' + stacked1Row4c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4c.style.width + '; height: 22px;" height="22">' + stacked1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5b.style.width + '; height: 22px;" height="22">' + stacked1Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5b.value + '; border-left: ' + stacked1Row5c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5c.style.width + '; height: 22px;" height="22">' + stacked1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend1Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend1Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked1Output.innerHTML = chartCode;
    } else if (rowsData4.value === "6") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: 22px;" height="22">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: 22px;" height="22">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2b.style.width +'; height: 22px;" height="22">' + stacked1Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2b.value + '; border-left: ' + stacked1Row2c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2c.style.width + '; height: 22px;" height="22">' + stacked1Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3b.style.width + '; height: 22px;" height="22">' + stacked1Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3b.value + '; border-left: ' + stacked1Row3c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3c.style.width + '; height: 22px;" height="22">' + stacked1Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4b.style.width + '; height: 22px;" height="22">' + stacked1Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4b.value + '; border-left: ' + stacked1Row4c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4c.style.width + '; height: 22px;" height="22">' + stacked1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5b.style.width + '; height: 22px;" height="22">' + stacked1Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5b.value + '; border-left: ' + stacked1Row5c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5c.style.width + '; height: 22px;" height="22">' + stacked1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6b.style.width + '; height: 22px;" height="22">' + stacked1Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6b.value + '; border-left: ' + stacked1Row6c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6c.style.width + '; height: 22px;" height="22">' + stacked1Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend1Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend1Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked1Output.innerHTML = chartCode;
    } else if (rowsData4.value === "7") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: 22px;" height="22">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: 22px;" height="22">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2b.style.width +'; height: 22px;" height="22">' + stacked1Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2b.value + '; border-left: ' + stacked1Row2c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2c.style.width + '; height: 22px;" height="22">' + stacked1Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3b.style.width + '; height: 22px;" height="22">' + stacked1Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3b.value + '; border-left: ' + stacked1Row3c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3c.style.width + '; height: 22px;" height="22">' + stacked1Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4b.style.width + '; height: 22px;" height="22">' + stacked1Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4b.value + '; border-left: ' + stacked1Row4c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4c.style.width + '; height: 22px;" height="22">' + stacked1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5b.style.width + '; height: 22px;" height="22">' + stacked1Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5b.value + '; border-left: ' + stacked1Row5c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5c.style.width + '; height: 22px;" height="22">' + stacked1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6b.style.width + '; height: 22px;" height="22">' + stacked1Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6b.value + '; border-left: ' + stacked1Row6c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6c.style.width + '; height: 22px;" height="22">' + stacked1Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color7a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row7b.style.width + '; height: 22px;" height="22">' + stacked1Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color7b.value + '; border-left: ' + stacked1Row7c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row7c.style.width + '; height: 22px;" height="22">' + stacked1Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend1Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend1Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked1Output.innerHTML = chartCode;
    } else if (rowsData4.value === "8") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: 22px;" height="22">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: 22px;" height="22">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2b.style.width +'; height: 22px;" height="22">' + stacked1Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2b.value + '; border-left: ' + stacked1Row2c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2c.style.width + '; height: 22px;" height="22">' + stacked1Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3b.style.width + '; height: 22px;" height="22">' + stacked1Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3b.value + '; border-left: ' + stacked1Row3c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3c.style.width + '; height: 22px;" height="22">' + stacked1Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4b.style.width + '; height: 22px;" height="22">' + stacked1Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4b.value + '; border-left: ' + stacked1Row4c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4c.style.width + '; height: 22px;" height="22">' + stacked1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5b.style.width + '; height: 22px;" height="22">' + stacked1Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5b.value + '; border-left: ' + stacked1Row5c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5c.style.width + '; height: 22px;" height="22">' + stacked1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6b.style.width + '; height: 22px;" height="22">' + stacked1Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6b.value + '; border-left: ' + stacked1Row6c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6c.style.width + '; height: 22px;" height="22">' + stacked1Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color7a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row7b.style.width + '; height: 22px;" height="22">' + stacked1Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color7b.value + '; border-left: ' + stacked1Row7c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row7c.style.width + '; height: 22px;" height="22">' + stacked1Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color8a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row8b.style.width + '; height: 22px;" height="22">' + stacked1Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color8b.value + '; border-left: ' + stacked1Row8c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row8c.style.width + '; height: 22px;" height="22">' + stacked1Row8b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend1Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend1Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked1Output.innerHTML = chartCode;
    } else if (rowsData4.value === "9") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: 22px;" height="22">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: 22px;" height="22">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2b.style.width +'; height: 22px;" height="22">' + stacked1Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2b.value + '; border-left: ' + stacked1Row2c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2c.style.width + '; height: 22px;" height="22">' + stacked1Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3b.style.width + '; height: 22px;" height="22">' + stacked1Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3b.value + '; border-left: ' + stacked1Row3c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3c.style.width + '; height: 22px;" height="22">' + stacked1Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4b.style.width + '; height: 22px;" height="22">' + stacked1Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4b.value + '; border-left: ' + stacked1Row4c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4c.style.width + '; height: 22px;" height="22">' + stacked1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5b.style.width + '; height: 22px;" height="22">' + stacked1Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5b.value + '; border-left: ' + stacked1Row5c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5c.style.width + '; height: 22px;" height="22">' + stacked1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6b.style.width + '; height: 22px;" height="22">' + stacked1Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6b.value + '; border-left: ' + stacked1Row6c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6c.style.width + '; height: 22px;" height="22">' + stacked1Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color7a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row7b.style.width + '; height: 22px;" height="22">' + stacked1Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color7b.value + '; border-left: ' + stacked1Row7c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row7c.style.width + '; height: 22px;" height="22">' + stacked1Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color8a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row8b.style.width + '; height: 22px;" height="22">' + stacked1Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color8b.value + '; border-left: ' + stacked1Row8c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row8c.style.width + '; height: 22px;" height="22">' + stacked1Row8b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row9a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color9a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row9b.style.width + '; height: 22px;" height="22">' + stacked1Row9b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color9b.value + '; border-left: ' + stacked1Row9c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row9c.style.width + '; height: 22px;" height="22">' + stacked1Row9b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend1Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend1Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked1Output.innerHTML = chartCode;
    } else if (rowsData4.value === "10") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: 22px;" height="22">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: 22px;" height="22">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2b.style.width +'; height: 22px;" height="22">' + stacked1Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2b.value + '; border-left: ' + stacked1Row2c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2c.style.width + '; height: 22px;" height="22">' + stacked1Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3b.style.width + '; height: 22px;" height="22">' + stacked1Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3b.value + '; border-left: ' + stacked1Row3c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3c.style.width + '; height: 22px;" height="22">' + stacked1Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4b.style.width + '; height: 22px;" height="22">' + stacked1Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4b.value + '; border-left: ' + stacked1Row4c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4c.style.width + '; height: 22px;" height="22">' + stacked1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5b.style.width + '; height: 22px;" height="22">' + stacked1Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5b.value + '; border-left: ' + stacked1Row5c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5c.style.width + '; height: 22px;" height="22">' + stacked1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6b.style.width + '; height: 22px;" height="22">' + stacked1Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6b.value + '; border-left: ' + stacked1Row6c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6c.style.width + '; height: 22px;" height="22">' + stacked1Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color7a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row7b.style.width + '; height: 22px;" height="22">' + stacked1Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color7b.value + '; border-left: ' + stacked1Row7c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row7c.style.width + '; height: 22px;" height="22">' + stacked1Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color8a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row8b.style.width + '; height: 22px;" height="22">' + stacked1Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color8b.value + '; border-left: ' + stacked1Row8c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row8c.style.width + '; height: 22px;" height="22">' + stacked1Row8b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row9a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color9a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row9b.style.width + '; height: 22px;" height="22">' + stacked1Row9b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color9b.value + '; border-left: ' + stacked1Row9c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row9c.style.width + '; height: 22px;" height="22">' + stacked1Row9b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked1Row10a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color10a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row10b.style.width + '; height: 22px;" height="22">' + stacked1Row10b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color10b.value + '; border-left: ' + stacked1Row10c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row10c.style.width + '; height: 22px;" height="22">' + stacked1Row10b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend1Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend1Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend1Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend1Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked1Output.innerHTML = chartCode;
    }
});

// Highlight stacked1Output Text
stacked1Output.addEventListener("click", () => {
    stacked1Output.select();
});






// Stacked Chart II Row Selection
const stacked2Bars = document.getElementsByClassName("stacked2Bars");
const stacked2Controls = document.getElementsByClassName("stacked2Controls");
const rowsData5 = document.getElementById("rowsData5");
rowsData5.addEventListener("change", () => {
    for (var i = 0; i < stacked2Controls.length; i++) {
        stacked2Controls[i].style.display = "none";
        stacked2Bars[i].style.display = "none";
        for (var x = 0; x < rowsData5.value; x++) {
            stacked2Controls[x].style.display = "block";
            stacked2Bars[x].style.display = "block";
        }
    }
});

// Stacked Chart II Text/Color Legend
const legend2Text1 = document.getElementById("legend2Text1");
const legend2Text1x = document.getElementById("legend2Text1x");
legend2Text1x.oninput = function() {
    legend2Text1.innerHTML = legend2Text1x.value;
};
const legend2Text2 = document.getElementById("legend2Text2");
const legend2Text2x = document.getElementById("legend2Text2x");
legend2Text2x.oninput = function() {
    legend2Text2.innerHTML = legend2Text2x.value;
};
const legend2Color1 = document.getElementById("legend2Color1");
const legend2Color1x = document.getElementById("legend2Color1x");
legend2Color1x.oninput = function() {
    legend2Color1.style.color = legend2Color1x.value;
    legend2Color1.style.backgroundColor = legend2Color1x.value;
};
const legend2Color2 = document.getElementById("legend2Color2");
const legend2Color2x = document.getElementById("legend2Color2x");
legend2Color2x.oninput = function() {
    legend2Color2.style.color = legend2Color2x.value;
    legend2Color2.style.backgroundColor = legend2Color2x.value;
};

// Stacked Chart II Row Customization Logic
const stacked2Row1a = document.getElementById("stacked2Row1a");
const stacked2Row1b = document.getElementById("stacked2Row1b");
const stacked2Row1c = document.getElementById("stacked2Row1c");
const stacked2Row1d = document.getElementById("stacked2Row1d");
const stacked2Row2a = document.getElementById("stacked2Row2a");
const stacked2Row2b = document.getElementById("stacked2Row2b");
const stacked2Row2c = document.getElementById("stacked2Row2c");
const stacked2Row2d = document.getElementById("stacked2Row2d");
const stacked2Row3a = document.getElementById("stacked2Row3a");
const stacked2Row3b = document.getElementById("stacked2Row3b");
const stacked2Row3c = document.getElementById("stacked2Row3c");
const stacked2Row3d = document.getElementById("stacked2Row3d");
const stacked2Row4a = document.getElementById("stacked2Row4a");
const stacked2Row4b = document.getElementById("stacked2Row4b");
const stacked2Row4c = document.getElementById("stacked2Row4c");
const stacked2Row4d = document.getElementById("stacked2Row4d");
const stacked2Row5a = document.getElementById("stacked2Row5a");
const stacked2Row5b = document.getElementById("stacked2Row5b");
const stacked2Row5c = document.getElementById("stacked2Row5c");
const stacked2Row5d = document.getElementById("stacked2Row5d");
const stacked2Row6a = document.getElementById("stacked2Row6a");
const stacked2Row6b = document.getElementById("stacked2Row6b");
const stacked2Row6c = document.getElementById("stacked2Row6c");
const stacked2Row6d = document.getElementById("stacked2Row6d");
const stacked2Row7a = document.getElementById("stacked2Row7a");
const stacked2Row7b = document.getElementById("stacked2Row7b");
const stacked2Row7c = document.getElementById("stacked2Row7c");
const stacked2Row7d = document.getElementById("stacked2Row7d");
const stacked2Row8a = document.getElementById("stacked2Row8a");
const stacked2Row8b = document.getElementById("stacked2Row8b");
const stacked2Row8c = document.getElementById("stacked2Row8c");
const stacked2Row8d = document.getElementById("stacked2Row8d");
const stacked2Row9a = document.getElementById("stacked2Row9a");
const stacked2Row9b = document.getElementById("stacked2Row9b");
const stacked2Row9c = document.getElementById("stacked2Row9c");
const stacked2Row9d = document.getElementById("stacked2Row9d");
const stacked2Row10a = document.getElementById("stacked2Row10a");
const stacked2Row10b = document.getElementById("stacked2Row10b");
const stacked2Row10c = document.getElementById("stacked2Row10c");
const stacked2Row10d = document.getElementById("stacked2Row10d");

// Stacked Chart II Row 1 Customization Logic
const stacked2Text1 = document.getElementById("stacked2Text1"); // Data Label
stacked2Text1.oninput = function() {
    stacked2Row1a.innerHTML = stacked2Text1.value;
};
const stacked2Size1a = document.getElementById("stacked2Size1a");
stacked2Size1a.oninput = function() {
    stacked2Row1b.style.width = ((Math.abs(stacked2Size1a.value)) * .75) + "%";
    stacked2Size1b.max = Math.abs((100 - stacked2Size1a.value));
    stacked2Size1a.max = Math.abs((100 - stacked2Size1b.value));
};
const stacked2Text1a = document.getElementById("stacked2Text1a"); // End Data Label #1
stacked2Text1a.oninput = function() {
    if (stacked2Text1a.value == "") {
        stacked2Row1b.innerHTML = stacked2Text1a.value;
    } else if (stacked2Text1a.value) {
        stacked2Row1b.innerHTML = stacked2Text1a.value + "&nbsp;";
    }
};
const stacked2Color1a = document.getElementById("stacked2Color1a");
stacked2Color1a.oninput = function() {
    stacked2Row1b.style.backgroundColor = stacked2Color1a.value;
};
const stacked2Size1b = document.getElementById("stacked2Size1b");
stacked2Size1b.oninput = function() {
    stacked2Row1c.style.width = ((Math.abs(stacked2Size1b.value)) * .75) + "%";
    stacked2Size1a.max = Math.abs((100 - stacked2Size1b.value));
    stacked2Size1b.max = Math.abs((100 - stacked2Size1a.value));
};
const stacked2Text1b = document.getElementById("stacked2Text1b"); // End Data Label #2
stacked2Text1b.oninput = function() {
    if (stacked2Text1b.value == "") {
        stacked2Row1c.innerHTML = stacked2Text1b.value;
    } else if (stacked2Text1b.value) {
        stacked2Row1c.innerHTML = stacked2Text1b.value + "&nbsp;";
    }
};
const stacked2Color1b = document.getElementById("stacked2Color1b");
stacked2Color1b.oninput = function() {
    stacked2Row1c.style.backgroundColor = stacked2Color1b.value;
};

// Stacked Chart II Row 2 Customization Logic
const stacked2Text2 = document.getElementById("stacked2Text2");
stacked2Text2.oninput = function() {
    stacked2Row2a.innerHTML = stacked2Text2.value;
};
const stacked2Size2a = document.getElementById("stacked2Size2a");
stacked2Size2a.oninput = function() {
    stacked2Row2b.style.width = ((Math.abs(stacked2Size2a.value)) * .75) + "%";
    stacked2Size2b.max = Math.abs((100 - stacked2Size2a.value));
    stacked2Size2a.max = Math.abs((100 - stacked2Size2b.value));
};
const stacked2Text2a = document.getElementById("stacked2Text2a");
stacked2Text2a.oninput = function() {
    if (stacked2Text2a.value == "") {
        stacked2Row2b.innerHTML = stacked2Text2a.value;
    } else if (stacked2Text2a.value) {
        stacked2Row2b.innerHTML = stacked2Text2a.value + "&nbsp;";
    }
};
const stacked2Color2a = document.getElementById("stacked2Color2a");
stacked2Color2a.oninput = function() {
    stacked2Row2b.style.backgroundColor = stacked2Color2a.value;
};
const stacked2Size2b = document.getElementById("stacked2Size2b");
stacked2Size2b.oninput = function() {
    stacked2Row2c.style.width = ((Math.abs(stacked2Size2b.value)) * .75) + "%";
    stacked2Size2a.max = Math.abs((100 - stacked2Size2b.value));
    stacked2Size2b.max = Math.abs((100 - stacked2Size2a.value));
};
const stacked2Text2b = document.getElementById("stacked2Text2b");
stacked2Text2b.oninput = function() {
    if (stacked2Text2b.value == "") {
        stacked2Row2c.innerHTML = stacked2Text2b.value;
    } else if (stacked2Text2b.value) {
        stacked2Row2c.innerHTML = stacked2Text2b.value + "&nbsp;";
    }
};
const stacked2Color2b = document.getElementById("stacked2Color2b");
stacked2Color2b.oninput = function() {
    stacked2Row2c.style.backgroundColor = stacked2Color2b.value;
};

// Stacked Chart II Row 3 Customization Logic
const stacked2Text3 = document.getElementById("stacked2Text3");
stacked2Text3.oninput = function() {
    stacked2Row3a.innerHTML = stacked2Text3.value;
};
const stacked2Size3a = document.getElementById("stacked2Size3a");
stacked2Size3a.oninput = function() {
    stacked2Row3b.style.width = ((Math.abs(stacked2Size3a.value)) * .75) + "%";
    stacked2Size3b.max = Math.abs((100 - stacked2Size3a.value));
    stacked2Size3a.max = Math.abs((100 - stacked2Size3b.value));
};
const stacked2Text3a = document.getElementById("stacked2Text3a");
stacked2Text3a.oninput = function() {
    if (stacked2Text3a.value == "") {
        stacked2Row3b.innerHTML = stacked2Text3a.value;
    } else if (stacked2Text3a.value) {
        stacked2Row3b.innerHTML = stacked2Text3a.value + "&nbsp;";
    }
};
const stacked2Color3a = document.getElementById("stacked2Color3a");
stacked2Color3a.oninput = function() {
    stacked2Row3b.style.backgroundColor = stacked2Color3a.value;
};
const stacked2Size3b = document.getElementById("stacked2Size3b");
stacked2Size3b.oninput = function() {
    stacked2Row3c.style.width = ((Math.abs(stacked2Size3b.value)) * .75) + "%";
    stacked2Size3a.max = Math.abs((100 - stacked2Size3b.value));
    stacked2Size3b.max = Math.abs((100 - stacked2Size3a.value));
};
const stacked2Text3b = document.getElementById("stacked2Text3b");
stacked2Text3b.oninput = function() {
    if (stacked2Text3b.value == "") {
        stacked2Row3c.innerHTML = stacked2Text3b.value;
    } else if (stacked2Text3b.value) {
        stacked2Row3c.innerHTML = stacked2Text3b.value + "&nbsp;";
    }
};
const stacked2Color3b = document.getElementById("stacked2Color3b");
stacked2Color3b.oninput = function() {
    stacked2Row3c.style.backgroundColor = stacked2Color3b.value;
};

// Stacked Chart II Row 4 Customization Logic
const stacked2Text4 = document.getElementById("stacked2Text4");
stacked2Text4.oninput = function() {
    stacked2Row4a.innerHTML = stacked2Text4.value;
};
const stacked2Size4a = document.getElementById("stacked2Size4a");
stacked2Size4a.oninput = function() {
    stacked2Row4b.style.width = ((Math.abs(stacked2Size4a.value)) * .75) + "%";
    stacked2Size4b.max = Math.abs((100 - stacked2Size4a.value));
    stacked2Size4a.max = Math.abs((100 - stacked2Size4b.value));
};
const stacked2Text4a = document.getElementById("stacked2Text4a");
stacked2Text4a.oninput = function() {
    if (stacked2Text4a.value == "") {
        stacked2Row4b.innerHTML = stacked2Text4a.value;
    } else if (stacked2Text4a.value) {
        stacked2Row4b.innerHTML = stacked2Text4a.value + "&nbsp;";
    }
};
const stacked2Color4a = document.getElementById("stacked2Color4a");
stacked2Color4a.oninput = function() {
    stacked2Row4b.style.backgroundColor = stacked2Color4a.value;
};
const stacked2Size4b = document.getElementById("stacked2Size4b");
stacked2Size4b.oninput = function() {
    stacked2Row4c.style.width = ((Math.abs(stacked2Size4b.value)) * .75) + "%";
    stacked2Size4a.max = Math.abs((100 - stacked2Size4b.value));
    stacked2Size4b.max = Math.abs((100 - stacked2Size4a.value));
};
const stacked2Text4b = document.getElementById("stacked2Text4b");
stacked2Text4b.oninput = function() {
    if (stacked2Text4b.value == "") {
        stacked2Row4c.innerHTML = stacked2Text4b.value;
    } else if (stacked2Text4b.value) {
        stacked2Row4c.innerHTML = stacked2Text4b.value + "&nbsp;";
    }
};
const stacked2Color4b = document.getElementById("stacked2Color4b");
stacked2Color4b.oninput = function() {
    stacked2Row4c.style.backgroundColor = stacked2Color4b.value;
};

// Stacked Chart II Row 5 Customization Logic
const stacked2Text5 = document.getElementById("stacked2Text5");
stacked2Text5.oninput = function() {
    stacked2Row5a.innerHTML = stacked2Text5.value;
};
const stacked2Size5a = document.getElementById("stacked2Size5a");
stacked2Size5a.oninput = function() {
    stacked2Row5b.style.width = ((Math.abs(stacked2Size5a.value)) * .75) + "%";
    stacked2Size5b.max = Math.abs((100 - stacked2Size5a.value));
    stacked2Size5a.max = Math.abs((100 - stacked2Size5b.value));
};
const stacked2Text5a = document.getElementById("stacked2Text5a");
stacked2Text5a.oninput = function() {
    if (stacked2Text5a.value == "") {
        stacked2Row5b.innerHTML = stacked2Text5a.value;
    } else if (stacked2Text5a.value) {
        stacked2Row5b.innerHTML = stacked2Text5a.value + "&nbsp;";
    }
};
const stacked2Color5a = document.getElementById("stacked2Color5a");
stacked2Color5a.oninput = function() {
    stacked2Row5b.style.backgroundColor = stacked2Color5a.value;
};
const stacked2Size5b = document.getElementById("stacked2Size5b");
stacked2Size5b.oninput = function() {
    stacked2Row5c.style.width = ((Math.abs(stacked2Size5b.value)) * .75) + "%";
    stacked2Size5a.max = Math.abs((100 - stacked2Size5b.value));
    stacked2Size5b.max = Math.abs((100 - stacked2Size5a.value));
};
const stacked2Text5b = document.getElementById("stacked2Text5b");
stacked2Text5b.oninput = function() {
    if (stacked2Text5b.value == "") {
        stacked2Row5c.innerHTML = stacked2Text5b.value;
    } else if (stacked2Text5b.value) {
        stacked2Row5c.innerHTML = stacked2Text5b.value + "&nbsp;";
    }
};
const stacked2Color5b = document.getElementById("stacked2Color5b");
stacked2Color5b.oninput = function() {
    stacked2Row5c.style.backgroundColor = stacked2Color5b.value;
};

// Stacked Chart II Row 6 Customization Logic
const stacked2Text6 = document.getElementById("stacked2Text6");
stacked2Text6.oninput = function() {
    stacked2Row6a.innerHTML = stacked2Text6.value;
};
const stacked2Size6a = document.getElementById("stacked2Size6a");
stacked2Size6a.oninput = function() {
    stacked2Row6b.style.width = ((Math.abs(stacked2Size6a.value)) * .75) + "%";
    stacked2Size6b.max = Math.abs((100 - stacked2Size6a.value));
    stacked2Size6a.max = Math.abs((100 - stacked2Size6b.value));
};
const stacked2Text6a = document.getElementById("stacked2Text6a");
stacked2Text6a.oninput = function() {
    if (stacked2Text6a.value == "") {
        stacked2Row6b.innerHTML = stacked2Text6a.value;
    } else if (stacked2Text6a.value) {
        stacked2Row6b.innerHTML = stacked2Text6a.value + "&nbsp;";
    }
};
const stacked2Color6a = document.getElementById("stacked2Color6a");
stacked2Color6a.oninput = function() {
    stacked2Row6b.style.backgroundColor = stacked2Color6a.value;
};
const stacked2Size6b = document.getElementById("stacked2Size6b");
stacked2Size6b.oninput = function() {
    stacked2Row6c.style.width = ((Math.abs(stacked2Size6b.value)) * .75) + "%";
    stacked2Size6a.max = Math.abs((100 - stacked2Size6b.value));
    stacked2Size6b.max = Math.abs((100 - stacked2Size6a.value));
};
const stacked2Text6b = document.getElementById("stacked2Text6b");
stacked2Text6b.oninput = function() {
    if (stacked2Text6b.value == "") {
        stacked2Row6c.innerHTML = stacked2Text6b.value;
    } else if (stacked2Text6b.value) {
        stacked2Row6c.innerHTML = stacked2Text6b.value + "&nbsp;";
    }
};
const stacked2Color6b = document.getElementById("stacked2Color6b");
stacked2Color6b.oninput = function() {
    stacked2Row6c.style.backgroundColor = stacked2Color6b.value;
};

// Stacked Chart II Row 7 Customization Logic
const stacked2Text7 = document.getElementById("stacked2Text7");
stacked2Text7.oninput = function() {
    stacked2Row7a.innerHTML = stacked2Text7.value;
};
const stacked2Size7a = document.getElementById("stacked2Size7a");
stacked2Size7a.oninput = function() {
    stacked2Row7b.style.width = ((Math.abs(stacked2Size7a.value)) * .75) + "%";
    stacked2Size7b.max = Math.abs((100 - stacked2Size7a.value));
    stacked2Size7a.max = Math.abs((100 - stacked2Size7b.value));
};
const stacked2Text7a = document.getElementById("stacked2Text7a");
stacked2Text7a.oninput = function() {
    if (stacked2Text7a.value == "") {
        stacked2Row7b.innerHTML = stacked2Text7a.value;
    } else if (stacked2Text7a.value) {
        stacked2Row7b.innerHTML = stacked2Text7a.value + "&nbsp;";
    }
};
const stacked2Color7a = document.getElementById("stacked2Color7a");
stacked2Color7a.oninput = function() {
    stacked2Row7b.style.backgroundColor = stacked2Color7a.value;
};
const stacked2Size7b = document.getElementById("stacked2Size7b");
stacked2Size7b.oninput = function() {
    stacked2Row7c.style.width = ((Math.abs(stacked2Size7b.value)) * .75) + "%";
    stacked2Size7a.max = Math.abs((100 - stacked2Size7b.value));
    stacked2Size7b.max = Math.abs((100 - stacked2Size7a.value));
};
const stacked2Text7b = document.getElementById("stacked2Text7b");
stacked2Text7b.oninput = function() {
    if (stacked2Text7b.value == "") {
        stacked2Row7c.innerHTML = stacked2Text7b.value;
    } else if (stacked2Text7b.value) {
        stacked2Row7c.innerHTML = stacked2Text7b.value + "&nbsp;";
    }
};
const stacked2Color7b = document.getElementById("stacked2Color7b");
stacked2Color7b.oninput = function() {
    stacked2Row7c.style.backgroundColor = stacked2Color7b.value;
};

// Stacked Chart II Row 8 Customization Logic
const stacked2Text8 = document.getElementById("stacked2Text8");
stacked2Text8.oninput = function() {
    stacked2Row8a.innerHTML = stacked2Text8.value;
};
const stacked2Size8a = document.getElementById("stacked2Size8a");
stacked2Size8a.oninput = function() {
    stacked2Row8b.style.width = ((Math.abs(stacked2Size8a.value)) * .75) + "%";
    stacked2Size8b.max = Math.abs((100 - stacked2Size8a.value));
    stacked2Size8a.max = Math.abs((100 - stacked2Size8b.value));
};
const stacked2Text8a = document.getElementById("stacked2Text8a");
stacked2Text8a.oninput = function() {
    if (stacked2Text8a.value == "") {
        stacked2Row8b.innerHTML = stacked2Text8a.value;
    } else if (stacked2Text8a.value) {
        stacked2Row8b.innerHTML = stacked2Text8a.value + "&nbsp;";
    }
};
const stacked2Color8a = document.getElementById("stacked2Color8a");
stacked2Color8a.oninput = function() {
    stacked2Row8b.style.backgroundColor = stacked2Color8a.value;
};
const stacked2Size8b = document.getElementById("stacked2Size8b");
stacked2Size8b.oninput = function() {
    stacked2Row8c.style.width = ((Math.abs(stacked2Size8b.value)) * .75) + "%";
    stacked2Size8a.max = Math.abs((100 - stacked2Size8b.value));
    stacked2Size8b.max = Math.abs((100 - stacked2Size8a.value));
};
const stacked2Text8b = document.getElementById("stacked2Text8b");
stacked2Text8b.oninput = function() {
    if (stacked2Text8b.value == "") {
        stacked2Row8c.innerHTML = stacked2Text8b.value;
    } else if (stacked2Text8b.value) {
        stacked2Row8c.innerHTML = stacked2Text8b.value + "&nbsp;";
    }
};
const stacked2Color8b = document.getElementById("stacked2Color8b");
stacked2Color8b.oninput = function() {
    stacked2Row8c.style.backgroundColor = stacked2Color8b.value;
};

// Stacked Chart II Row 9 Customization Logic
const stacked2Text9 = document.getElementById("stacked2Text9");
stacked2Text9.oninput = function() {
    stacked2Row9a.innerHTML = stacked2Text9.value;
};
const stacked2Size9a = document.getElementById("stacked2Size9a");
stacked2Size9a.oninput = function() {
    stacked2Row9b.style.width = ((Math.abs(stacked2Size9a.value)) * .75) + "%";
    stacked2Size9b.max = Math.abs((100 - stacked2Size9a.value));
    stacked2Size9a.max = Math.abs((100 - stacked2Size9b.value));
};
const stacked2Text9a = document.getElementById("stacked2Text9a");
stacked2Text9a.oninput = function() {
    if (stacked2Text9a.value == "") {
        stacked2Row9b.innerHTML = stacked2Text9a.value;
    } else if (stacked2Text9a.value) {
        stacked2Row9b.innerHTML = stacked2Text9a.value + "&nbsp;";
    }
};
const stacked2Color9a = document.getElementById("stacked2Color9a");
stacked2Color9a.oninput = function() {
    stacked2Row9b.style.backgroundColor = stacked2Color9a.value;
};
const stacked2Size9b = document.getElementById("stacked2Size9b");
stacked2Size9b.oninput = function() {
    stacked2Row9c.style.width = ((Math.abs(stacked2Size9b.value)) * .75) + "%";
    stacked2Size9a.max = Math.abs((100 - stacked2Size9b.value));
    stacked2Size9b.max = Math.abs((100 - stacked2Size9a.value));
};
const stacked2Text9b = document.getElementById("stacked2Text9b");
stacked2Text9b.oninput = function() {
    if (stacked2Text9b.value == "") {
        stacked2Row9c.innerHTML = stacked2Text9b.value;
    } else if (stacked2Text9b.value) {
        stacked2Row9c.innerHTML = stacked2Text9b.value + "&nbsp;";
    }
};
const stacked2Color9b = document.getElementById("stacked2Color9b");
stacked2Color9b.oninput = function() {
    stacked2Row9c.style.backgroundColor = stacked2Color9b.value;
};

// Stacked Chart II Row 10 Customization Logic
const stacked2Text10 = document.getElementById("stacked2Text10");
stacked2Text10.oninput = function() {
    stacked2Row10a.innerHTML = stacked2Text10.value;
};
const stacked2Size10a = document.getElementById("stacked2Size10a");
stacked2Size10a.oninput = function() {
    stacked2Row10b.style.width = ((Math.abs(stacked2Size10a.value)) * .75) + "%";
    stacked2Size10b.max = Math.abs((100 - stacked2Size10a.value));
    stacked2Size10a.max = Math.abs((100 - stacked2Size10b.value));
};
const stacked2Text10a = document.getElementById("stacked2Text10a");
stacked2Text10a.oninput = function() {
    if (stacked2Text10a.value == "") {
        stacked2Row10b.innerHTML = stacked2Text10a.value;
    } else if (stacked2Text10a.value) {
        stacked2Row10b.innerHTML = stacked2Text10a.value + "&nbsp;";
    }
};
const stacked2Color10a = document.getElementById("stacked2Color10a");
stacked2Color10a.oninput = function() {
    stacked2Row10b.style.backgroundColor = stacked2Color10a.value;
};
const stacked2Size10b = document.getElementById("stacked2Size10b");
stacked2Size10b.oninput = function() {
    stacked2Row10c.style.width = ((Math.abs(stacked2Size10b.value)) * .75) + "%";
    stacked2Size10a.max = Math.abs((100 - stacked2Size10b.value));
    stacked2Size10b.max = Math.abs((100 - stacked2Size10a.value));
};
const stacked2Text10b = document.getElementById("stacked2Text10b");
stacked2Text10b.oninput = function() {
    if (stacked2Text10b.value == "") {
        stacked2Row10c.innerHTML = stacked2Text10b.value;
    } else if (stacked2Text10b.value) {
        stacked2Row10c.innerHTML = stacked2Text10b.value + "&nbsp;";
    }
};
const stacked2Color10b = document.getElementById("stacked2Color10b");
stacked2Color10b.oninput = function() {
    stacked2Row10c.style.backgroundColor = stacked2Color10b.value;
};

// Generate Stacked Chart II HTML Chart Logic
const stacked2Button = document.getElementById("stacked2Button");
const stacked2Output = document.getElementById("stacked2Output");
stacked2Button.addEventListener("click", () => {
    if (rowsData5.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: 31px;" height="31">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: 31px;" height="31">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend2Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend2Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked2Output.innerHTML = chartCode;
    } else if (rowsData5.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: 31px;" height="31">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: 31px;" height="31">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2b.style.width +'; height: 31px;" height="31">' + stacked2Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2c.style.width + '; height: 31px;" height="31">' + stacked2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend2Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend2Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked2Output.innerHTML = chartCode;
    } else if (rowsData5.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: 31px;" height="31">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: 31px;" height="31">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2b.style.width +'; height: 31px;" height="31">' + stacked2Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2c.style.width + '; height: 31px;" height="31">' + stacked2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3b.style.width + '; height: 31px;" height="31">' + stacked2Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3c.style.width + '; height: 31px;" height="31">' + stacked2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend2Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend2Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked2Output.innerHTML = chartCode;
    } else if (rowsData5.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: 31px;" height="31">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: 31px;" height="31">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2b.style.width +'; height: 31px;" height="31">' + stacked2Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2c.style.width + '; height: 31px;" height="31">' + stacked2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3b.style.width + '; height: 31px;" height="31">' + stacked2Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3c.style.width + '; height: 31px;" height="31">' + stacked2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4b.style.width + '; height: 31px;" height="31">' + stacked2Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4c.style.width + '; height: 31px;" height="31">' + stacked2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend2Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend2Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked2Output.innerHTML = chartCode;
    } else if (rowsData5.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: 31px;" height="31">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: 31px;" height="31">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2b.style.width +'; height: 31px;" height="31">' + stacked2Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2c.style.width + '; height: 31px;" height="31">' + stacked2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3b.style.width + '; height: 31px;" height="31">' + stacked2Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3c.style.width + '; height: 31px;" height="31">' + stacked2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4b.style.width + '; height: 31px;" height="31">' + stacked2Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4c.style.width + '; height: 31px;" height="31">' + stacked2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5b.style.width + '; height: 31px;" height="31">' + stacked2Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5c.style.width + '; height: 31px;" height="31">' + stacked2Row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend2Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend2Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked2Output.innerHTML = chartCode;
    } else if (rowsData5.value === "6") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: 31px;" height="31">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: 31px;" height="31">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2b.style.width +'; height: 31px;" height="31">' + stacked2Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2c.style.width + '; height: 31px;" height="31">' + stacked2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3b.style.width + '; height: 31px;" height="31">' + stacked2Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3c.style.width + '; height: 31px;" height="31">' + stacked2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4b.style.width + '; height: 31px;" height="31">' + stacked2Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4c.style.width + '; height: 31px;" height="31">' + stacked2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5b.style.width + '; height: 31px;" height="31">' + stacked2Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5c.style.width + '; height: 31px;" height="31">' + stacked2Row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6b.style.width + '; height: 31px;" height="31">' + stacked2Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6c.style.width + '; height: 31px;" height="31">' + stacked2Row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend2Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend2Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked2Output.innerHTML = chartCode;
    } else if (rowsData5.value === "7") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: 31px;" height="31">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: 31px;" height="31">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2b.style.width +'; height: 31px;" height="31">' + stacked2Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2c.style.width + '; height: 31px;" height="31">' + stacked2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3b.style.width + '; height: 31px;" height="31">' + stacked2Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3c.style.width + '; height: 31px;" height="31">' + stacked2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4b.style.width + '; height: 31px;" height="31">' + stacked2Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4c.style.width + '; height: 31px;" height="31">' + stacked2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5b.style.width + '; height: 31px;" height="31">' + stacked2Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5c.style.width + '; height: 31px;" height="31">' + stacked2Row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6b.style.width + '; height: 31px;" height="31">' + stacked2Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6c.style.width + '; height: 31px;" height="31">' + stacked2Row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color7a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row7b.style.width + '; height: 31px;" height="31">' + stacked2Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color7b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row7c.style.width + '; height: 31px;" height="31">' + stacked2Row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend2Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend2Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked2Output.innerHTML = chartCode;
    } else if (rowsData5.value === "8") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: 31px;" height="31">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: 31px;" height="31">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2b.style.width +'; height: 31px;" height="31">' + stacked2Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2c.style.width + '; height: 31px;" height="31">' + stacked2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3b.style.width + '; height: 31px;" height="31">' + stacked2Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3c.style.width + '; height: 31px;" height="31">' + stacked2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4b.style.width + '; height: 31px;" height="31">' + stacked2Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4c.style.width + '; height: 31px;" height="31">' + stacked2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5b.style.width + '; height: 31px;" height="31">' + stacked2Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5c.style.width + '; height: 31px;" height="31">' + stacked2Row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6b.style.width + '; height: 31px;" height="31">' + stacked2Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6c.style.width + '; height: 31px;" height="31">' + stacked2Row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color7a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row7b.style.width + '; height: 31px;" height="31">' + stacked2Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color7b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row7c.style.width + '; height: 31px;" height="31">' + stacked2Row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color8a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row8b.style.width + '; height: 31px;" height="31">' + stacked2Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color8b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row8c.style.width + '; height: 31px;" height="31">' + stacked2Row8c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend2Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend2Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked2Output.innerHTML = chartCode;
    } else if (rowsData5.value === "9") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: 31px;" height="31">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: 31px;" height="31">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2b.style.width +'; height: 31px;" height="31">' + stacked2Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2c.style.width + '; height: 31px;" height="31">' + stacked2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3b.style.width + '; height: 31px;" height="31">' + stacked2Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3c.style.width + '; height: 31px;" height="31">' + stacked2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4b.style.width + '; height: 31px;" height="31">' + stacked2Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4c.style.width + '; height: 31px;" height="31">' + stacked2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5b.style.width + '; height: 31px;" height="31">' + stacked2Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5c.style.width + '; height: 31px;" height="31">' + stacked2Row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6b.style.width + '; height: 31px;" height="31">' + stacked2Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6c.style.width + '; height: 31px;" height="31">' + stacked2Row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color7a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row7b.style.width + '; height: 31px;" height="31">' + stacked2Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color7b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row7c.style.width + '; height: 31px;" height="31">' + stacked2Row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color8a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row8b.style.width + '; height: 31px;" height="31">' + stacked2Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color8b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row8c.style.width + '; height: 31px;" height="31">' + stacked2Row8c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row9a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color9a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row9b.style.width + '; height: 31px;" height="31">' + stacked2Row9b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color9b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row9c.style.width + '; height: 31px;" height="31">' + stacked2Row9c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend2Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend2Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked2Output.innerHTML = chartCode;
    } else if (rowsData5.value === "10") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: 31px;" height="31">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: 31px;" height="31">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2b.style.width +'; height: 31px;" height="31">' + stacked2Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2c.style.width + '; height: 31px;" height="31">' + stacked2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3b.style.width + '; height: 31px;" height="31">' + stacked2Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3c.style.width + '; height: 31px;" height="31">' + stacked2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4b.style.width + '; height: 31px;" height="31">' + stacked2Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4c.style.width + '; height: 31px;" height="31">' + stacked2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5b.style.width + '; height: 31px;" height="31">' + stacked2Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5c.style.width + '; height: 31px;" height="31">' + stacked2Row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6b.style.width + '; height: 31px;" height="31">' + stacked2Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6c.style.width + '; height: 31px;" height="31">' + stacked2Row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color7a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row7b.style.width + '; height: 31px;" height="31">' + stacked2Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color7b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row7c.style.width + '; height: 31px;" height="31">' + stacked2Row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color8a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row8b.style.width + '; height: 31px;" height="31">' + stacked2Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color8b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row8c.style.width + '; height: 31px;" height="31">' + stacked2Row8c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row9a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color9a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row9b.style.width + '; height: 31px;" height="31">' + stacked2Row9b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color9b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row9c.style.width + '; height: 31px;" height="31">' + stacked2Row9c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + stacked2Row10a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color10a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row10b.style.width + '; height: 31px;" height="31">' + stacked2Row10b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color10b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row10c.style.width + '; height: 31px;" height="31">' + stacked2Row10c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend2Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend2Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend2Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend2Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked2Output.innerHTML = chartCode;
    }
});

// Highlight stacked2Output Text
stacked2Output.addEventListener("click", () => {
    stacked2Output.select();
});




// Stacked Chart III Row Selection
const stacked3Bars = document.getElementsByClassName("stacked3Bars");
const stacked3Controls = document.getElementsByClassName("stacked3Controls");
const rowsData6 = document.getElementById("rowsData6");
rowsData6.addEventListener("change", () => {
    for (var i = 0; i < stacked3Controls.length; i++) {
        stacked3Controls[i].style.display = "none";
        stacked3Bars[i].style.display = "none";
        for (var x = 0; x < rowsData6.value; x++) {
            stacked3Controls[x].style.display = "block";
            stacked3Bars[x].style.display = "block";
        }
    }
});

// Stacked Chart III Text/Color Legend
const legend3Text1 = document.getElementById("legend3Text1");
const legend3Text1x = document.getElementById("legend3Text1x");
legend3Text1x.oninput = function() {
    legend3Text1.innerHTML = legend3Text1x.value;
};
const legend3Text2 = document.getElementById("legend3Text2");
const legend3Text2x = document.getElementById("legend3Text2x");
legend3Text2x.oninput = function() {
    legend3Text2.innerHTML = legend3Text2x.value;
};
const legend3Text3 = document.getElementById("legend3Text3");
const legend3Text3x = document.getElementById("legend3Text3x");
legend3Text3x.oninput = function() {
    legend3Text3.innerHTML = legend3Text3x.value;
};
const legend3Color1 = document.getElementById("legend3Color1");
const legend3Color1x = document.getElementById("legend3Color1x");
legend3Color1x.oninput = function() {
    legend3Color1.style.color = legend3Color1x.value;
    legend3Color1.style.backgroundColor = legend3Color1x.value;
};
const legend3Color2 = document.getElementById("legend3Color2");
const legend3Color2x = document.getElementById("legend3Color2x");
legend3Color2x.oninput = function() {
    legend3Color2.style.color = legend3Color2x.value;
    legend3Color2.style.backgroundColor = legend3Color2x.value;
};
const legend3Color3 = document.getElementById("legend3Color3");
const legend3Color3x = document.getElementById("legend3Color3x");
legend3Color3x.oninput = function() {
    legend3Color3.style.color = legend3Color3x.value;
    legend3Color3.style.backgroundColor = legend3Color3x.value;
};

// Stacked Chart III Row Customization Logic
const stacked3Row1a = document.getElementById("stacked3Row1a");
const stacked3Row1b = document.getElementById("stacked3Row1b");
const stacked3Row1c = document.getElementById("stacked3Row1c");
const stacked3Row1d = document.getElementById("stacked3Row1d");
const stacked3Row2a = document.getElementById("stacked3Row2a");
const stacked3Row2b = document.getElementById("stacked3Row2b");
const stacked3Row2c = document.getElementById("stacked3Row2c");
const stacked3Row2d = document.getElementById("stacked3Row2d");
const stacked3Row3a = document.getElementById("stacked3Row3a");
const stacked3Row3b = document.getElementById("stacked3Row3b");
const stacked3Row3c = document.getElementById("stacked3Row3c");
const stacked3Row3d = document.getElementById("stacked3Row3d");
const stacked3Row4a = document.getElementById("stacked3Row4a");
const stacked3Row4b = document.getElementById("stacked3Row4b");
const stacked3Row4c = document.getElementById("stacked3Row4c");
const stacked3Row4d = document.getElementById("stacked3Row4d");
const stacked3Row5a = document.getElementById("stacked3Row5a");
const stacked3Row5b = document.getElementById("stacked3Row5b");
const stacked3Row5c = document.getElementById("stacked3Row5c");
const stacked3Row5d = document.getElementById("stacked3Row5d");
const stacked3Row6a = document.getElementById("stacked3Row6a");
const stacked3Row6b = document.getElementById("stacked3Row6b");
const stacked3Row6c = document.getElementById("stacked3Row6c");
const stacked3Row6d = document.getElementById("stacked3Row6d");
const stacked3Row7a = document.getElementById("stacked3Row7a");
const stacked3Row7b = document.getElementById("stacked3Row7b");
const stacked3Row7c = document.getElementById("stacked3Row7c");
const stacked3Row7d = document.getElementById("stacked3Row7d");
const stacked3Row8a = document.getElementById("stacked3Row8a");
const stacked3Row8b = document.getElementById("stacked3Row8b");
const stacked3Row8c = document.getElementById("stacked3Row8c");
const stacked3Row8d = document.getElementById("stacked3Row8d");
const stacked3Row9a = document.getElementById("stacked3Row9a");
const stacked3Row9b = document.getElementById("stacked3Row9b");
const stacked3Row9c = document.getElementById("stacked3Row9c");
const stacked3Row9d = document.getElementById("stacked3Row9d");
const stacked3Row10a = document.getElementById("stacked3Row10a");
const stacked3Row10b = document.getElementById("stacked3Row10b");
const stacked3Row10c = document.getElementById("stacked3Row10c");
const stacked3Row10d = document.getElementById("stacked3Row10d");

// Stacked Chart III Row 1 Customization Logic
const stacked3Text1 = document.getElementById("stacked3Text1"); // Data Label
stacked3Text1.oninput = function() {
    stacked3Row1a.innerHTML = stacked3Text1.value;
};
const stacked3Size1a = document.getElementById("stacked3Size1a");
stacked3Size1a.oninput = function() {
    stacked3Row1b.style.width = ((Math.abs(stacked3Size1a.value)) * .75) + "%";
    stacked3Size1a.max = Math.abs((100 - stacked3Size1b.value - stacked3Size1c.value));
    stacked3Size1b.max = Math.abs((100 - stacked3Size1a.value - stacked3Size1c.value));
    stacked3Size1c.max = Math.abs((100 - stacked3Size1a.value - stacked3Size1b.value));
};
const stacked3Text1a = document.getElementById("stacked3Text1a"); // End Data Label #1
stacked3Text1a.oninput = function() {
    if (stacked3Text1a.value == "") {
        stacked3Row1b.innerHTML = stacked3Text1a.value;
    } else if (stacked3Text1a.value) {
        stacked3Row1b.innerHTML = stacked3Text1a.value + "&nbsp;";
    }
};
const stacked3Color1a = document.getElementById("stacked3Color1a");
stacked3Color1a.oninput = function() {
    stacked3Row1b.style.backgroundColor = stacked3Color1a.value;
};
const stacked3Size1b = document.getElementById("stacked3Size1b");
stacked3Size1b.oninput = function() {
    stacked3Row1c.style.width = ((Math.abs(stacked3Size1b.value)) * .75) + "%";
    stacked3Size1a.max = Math.abs((100 - stacked3Size1b.value - stacked3Size1c.value));
    stacked3Size1b.max = Math.abs((100 - stacked3Size1a.value - stacked3Size1c.value));
    stacked3Size1c.max = Math.abs((100 - stacked3Size1a.value - stacked3Size1b.value));
};
const stacked3Text1b = document.getElementById("stacked3Text1b"); // End Data Label #2
stacked3Text1b.oninput = function() {
    if (stacked3Text1b.value == "") {
        stacked3Row1c.innerHTML = stacked3Text1b.value;
    } else if (stacked3Text1b.value) {
        stacked3Row1c.innerHTML = stacked3Text1b.value + "&nbsp;";
    }
};
const stacked3Color1b = document.getElementById("stacked3Color1b");
stacked3Color1b.oninput = function() {
    stacked3Row1c.style.backgroundColor = stacked3Color1b.value;
};
const stacked3Size1c = document.getElementById("stacked3Size1c");
stacked3Size1c.oninput = function() {
    stacked3Row1d.style.width = ((Math.abs(stacked3Size1c.value)) * .75) + "%";
    stacked3Size1a.max = Math.abs((100 - stacked3Size1b.value - stacked3Size1c.value));
    stacked3Size1b.max = Math.abs((100 - stacked3Size1a.value - stacked3Size1c.value));
    stacked3Size1c.max = Math.abs((100 - stacked3Size1a.value - stacked3Size1b.value));
};
const stacked3Text1c = document.getElementById("stacked3Text1c");
stacked3Text1c.oninput = function() {
    if (stacked3Text1c.value == "") {
        stacked3Row1d.innerHTML = stacked3Text1c.value;
    } else if (stacked3Text1c.value) {
        stacked3Row1d.innerHTML = stacked3Text1c.value + "&nbsp;";
    }
};
const stacked3Color1c = document.getElementById("stacked3Color1c");
stacked3Color1c.oninput = function() {
    stacked3Row1d.style.backgroundColor = stacked3Color1c.value;
};

// Stacked Chart III Row 2 Customization Logic
const stacked3Text2 = document.getElementById("stacked3Text2");
stacked3Text2.oninput = function() {
    stacked3Row2a.innerHTML = stacked3Text2.value;
};
const stacked3Size2a = document.getElementById("stacked3Size2a");
stacked3Size2a.oninput = function() {
    stacked3Row2b.style.width = ((Math.abs(stacked3Size2a.value)) * .75) + "%";
    stacked3Size2a.max = Math.abs((100 - stacked3Size2b.value - stacked3Size2c.value));
    stacked3Size2b.max = Math.abs((100 - stacked3Size2a.value - stacked3Size2c.value));
    stacked3Size2c.max = Math.abs((100 - stacked3Size2a.value - stacked3Size2b.value));
};
const stacked3Text2a = document.getElementById("stacked3Text2a");
stacked3Text2a.oninput = function() {
    if (stacked3Text2a.value == "") {
        stacked3Row2b.innerHTML = stacked3Text2a.value;
    } else if (stacked3Text2a.value) {
        stacked3Row2b.innerHTML = stacked3Text2a.value + "&nbsp;";
    }
};
const stacked3Color2a = document.getElementById("stacked3Color2a");
stacked3Color2a.oninput = function() {
    stacked3Row2b.style.backgroundColor = stacked3Color2a.value;
};
const stacked3Size2b = document.getElementById("stacked3Size2b");
stacked3Size2b.oninput = function() {
    stacked3Row2c.style.width = ((Math.abs(stacked3Size2b.value)) * .75) + "%";
    stacked3Size2a.max = Math.abs((100 - stacked3Size2b.value - stacked3Size2c.value));
    stacked3Size2b.max = Math.abs((100 - stacked3Size2a.value - stacked3Size2c.value));
    stacked3Size2c.max = Math.abs((100 - stacked3Size2a.value - stacked3Size2b.value));
};
const stacked3Text2b = document.getElementById("stacked3Text2b");
stacked3Text2b.oninput = function() {
    if (stacked3Text2b.value == "") {
        stacked3Row2c.innerHTML = stacked3Text2b.value;
    } else if (stacked3Text2b.value) {
        stacked3Row2c.innerHTML = stacked3Text2b.value + "&nbsp;";
    }
};
const stacked3Color2b = document.getElementById("stacked3Color2b");
stacked3Color2b.oninput = function() {
    stacked3Row2c.style.backgroundColor = stacked3Color2b.value;
};
const stacked3Size2c = document.getElementById("stacked3Size2c");
stacked3Size2c.oninput = function() {
    stacked3Row2d.style.width = ((Math.abs(stacked3Size2c.value)) * .75) + "%";
    stacked3Size2a.max = Math.abs((100 - stacked3Size2b.value - stacked3Size2c.value));
    stacked3Size2b.max = Math.abs((100 - stacked3Size2a.value - stacked3Size2c.value));
    stacked3Size2c.max = Math.abs((100 - stacked3Size2a.value - stacked3Size2b.value));
};
const stacked3Text2c = document.getElementById("stacked3Text2c");
stacked3Text2c.oninput = function() {
    if (stacked3Text2c.value == "") {
        stacked3Row2d.innerHTML = stacked3Text2c.value;
    } else if (stacked3Text2c.value) {
        stacked3Row2d.innerHTML = stacked3Text2c.value + "&nbsp;";
    }
};
const stacked3Color2c = document.getElementById("stacked3Color2c");
stacked3Color2c.oninput = function() {
    stacked3Row2d.style.backgroundColor = stacked3Color2c.value;
};

// Stacked Chart III Row 3 Customization Logic
const stacked3Text3 = document.getElementById("stacked3Text3");
stacked3Text3.oninput = function() {
    stacked3Row3a.innerHTML = stacked3Text3.value;
};
const stacked3Size3a = document.getElementById("stacked3Size3a");
stacked3Size3a.oninput = function() {
    stacked3Row3b.style.width = ((Math.abs(stacked3Size3a.value)) * .75) + "%";
    stacked3Size3a.max = Math.abs((100 - stacked3Size3b.value - stacked3Size3c.value));
    stacked3Size3b.max = Math.abs((100 - stacked3Size3a.value - stacked3Size3c.value));
    stacked3Size3c.max = Math.abs((100 - stacked3Size3a.value - stacked3Size3b.value));
};
const stacked3Text3a = document.getElementById("stacked3Text3a");
stacked3Text3a.oninput = function() {
    if (stacked3Text3a.value == "") {
        stacked3Row3b.innerHTML = stacked3Text3a.value;
    } else if (stacked3Text3a.value) {
        stacked3Row3b.innerHTML = stacked3Text3a.value + "&nbsp;";
    }
};
const stacked3Color3a = document.getElementById("stacked3Color3a");
stacked3Color3a.oninput = function() {
    stacked3Row3b.style.backgroundColor = stacked3Color3a.value;
};
const stacked3Size3b = document.getElementById("stacked3Size3b");
stacked3Size3b.oninput = function() {
    stacked3Row3c.style.width = ((Math.abs(stacked3Size3b.value)) * .75) + "%";
    stacked3Size3a.max = Math.abs((100 - stacked3Size3b.value - stacked3Size3c.value));
    stacked3Size3b.max = Math.abs((100 - stacked3Size3a.value - stacked3Size3c.value));
    stacked3Size3c.max = Math.abs((100 - stacked3Size3a.value - stacked3Size3b.value));
};
const stacked3Text3b = document.getElementById("stacked3Text3b");
stacked3Text3b.oninput = function() {
    if (stacked3Text3b.value == "") {
        stacked3Row3c.innerHTML = stacked3Text3b.value;
    } else if (stacked3Text3b.value) {
        stacked3Row3c.innerHTML = stacked3Text3b.value + "&nbsp;";
    }
};
const stacked3Color3b = document.getElementById("stacked3Color3b");
stacked3Color3b.oninput = function() {
    stacked3Row3c.style.backgroundColor = stacked3Color3b.value;
};
const stacked3Size3c = document.getElementById("stacked3Size3c");
stacked3Size3c.oninput = function() {
    stacked3Row3d.style.width = ((Math.abs(stacked3Size3c.value)) * .75) + "%";
    stacked3Size3a.max = Math.abs((100 - stacked3Size3b.value - stacked3Size3c.value));
    stacked3Size3b.max = Math.abs((100 - stacked3Size3a.value - stacked3Size3c.value));
    stacked3Size3c.max = Math.abs((100 - stacked3Size3a.value - stacked3Size3b.value));
};
const stacked3Text3c = document.getElementById("stacked3Text3c");
stacked3Text3c.oninput = function() {
    if (stacked3Text3c.value == "") {
        stacked3Row3d.innerHTML = stacked3Text3c.value;
    } else if (stacked3Text3c.value) {
        stacked3Row3d.innerHTML = stacked3Text3c.value + "&nbsp;";
    }
};
const stacked3Color3c = document.getElementById("stacked3Color3c");
stacked3Color3c.oninput = function() {
    stacked3Row3d.style.backgroundColor = stacked3Color3c.value;
};

// Stacked Chart III Row 4 Customization Logic
const stacked3Text4 = document.getElementById("stacked3Text4");
stacked3Text4.oninput = function() {
    stacked3Row4a.innerHTML = stacked3Text4.value;
};
const stacked3Size4a = document.getElementById("stacked3Size4a");
stacked3Size4a.oninput = function() {
    stacked3Row4b.style.width = ((Math.abs(stacked3Size4a.value)) * .75) + "%";
    stacked3Size4a.max = Math.abs((100 - stacked3Size4b.value - stacked3Size4c.value));
    stacked3Size4b.max = Math.abs((100 - stacked3Size4a.value - stacked3Size4c.value));
    stacked3Size4c.max = Math.abs((100 - stacked3Size4a.value - stacked3Size4b.value));
};
const stacked3Text4a = document.getElementById("stacked3Text4a");
stacked3Text4a.oninput = function() {
    if (stacked3Text4a.value == "") {
        stacked3Row4b.innerHTML = stacked3Text4a.value;
    } else if (stacked3Text4a.value) {
        stacked3Row4b.innerHTML = stacked3Text4a.value + "&nbsp;";
    }
};
const stacked3Color4a = document.getElementById("stacked3Color4a");
stacked3Color4a.oninput = function() {
    stacked3Row4b.style.backgroundColor = stacked3Color4a.value;
};
const stacked3Size4b = document.getElementById("stacked3Size4b");
stacked3Size4b.oninput = function() {
    stacked3Row4c.style.width = ((Math.abs(stacked3Size4b.value)) * .75) + "%";
    stacked3Size4a.max = Math.abs((100 - stacked3Size4b.value - stacked3Size4c.value));
    stacked3Size4b.max = Math.abs((100 - stacked3Size4a.value - stacked3Size4c.value));
    stacked3Size4c.max = Math.abs((100 - stacked3Size4a.value - stacked3Size4b.value));
};
const stacked3Text4b = document.getElementById("stacked3Text4b");
stacked3Text4b.oninput = function() {
    if (stacked3Text4b.value == "") {
        stacked3Row4c.innerHTML = stacked3Text4b.value;
    } else if (stacked3Text4b.value) {
        stacked3Row4c.innerHTML = stacked3Text4b.value + "&nbsp;";
    }
};
const stacked3Color4b = document.getElementById("stacked3Color4b");
stacked3Color4b.oninput = function() {
    stacked3Row4c.style.backgroundColor = stacked3Color4b.value;
};
const stacked3Size4c = document.getElementById("stacked3Size4c");
stacked3Size4c.oninput = function() {
    stacked3Row4d.style.width = ((Math.abs(stacked3Size4c.value)) * .75) + "%";
    stacked3Size4a.max = Math.abs((100 - stacked3Size4b.value - stacked3Size4c.value));
    stacked3Size4b.max = Math.abs((100 - stacked3Size4a.value - stacked3Size4c.value));
    stacked3Size4c.max = Math.abs((100 - stacked3Size4a.value - stacked3Size4b.value));
};
const stacked3Text4c = document.getElementById("stacked3Text4c");
stacked3Text4c.oninput = function() {
    if (stacked3Text4c.value == "") {
        stacked3Row4d.innerHTML = stacked3Text4c.value;
    } else if (stacked3Text4c.value) {
        stacked3Row4d.innerHTML = stacked3Text4c.value + "&nbsp;";
    }
};
const stacked3Color4c = document.getElementById("stacked3Color4c");
stacked3Color4c.oninput = function() {
    stacked3Row4d.style.backgroundColor = stacked3Color4c.value;
};

// Stacked Chart III Row 5 Customization Logic
const stacked3Text5 = document.getElementById("stacked3Text5");
stacked3Text5.oninput = function() {
    stacked3Row5a.innerHTML = stacked3Text5.value;
};
const stacked3Size5a = document.getElementById("stacked3Size5a");
stacked3Size5a.oninput = function() {
    stacked3Row5b.style.width = ((Math.abs(stacked3Size5a.value)) * .75) + "%";
    stacked3Size5a.max = Math.abs((100 - stacked3Size5b.value - stacked3Size5c.value));
    stacked3Size5b.max = Math.abs((100 - stacked3Size5a.value - stacked3Size5c.value));
    stacked3Size5c.max = Math.abs((100 - stacked3Size5a.value - stacked3Size5b.value));
};
const stacked3Text5a = document.getElementById("stacked3Text5a");
stacked3Text5a.oninput = function() {
    if (stacked3Text5a.value == "") {
        stacked3Row5b.innerHTML = stacked3Text5a.value;
    } else if (stacked3Text5a.value) {
        stacked3Row5b.innerHTML = stacked3Text5a.value + "&nbsp;";
    }
};
const stacked3Color5a = document.getElementById("stacked3Color5a");
stacked3Color5a.oninput = function() {
    stacked3Row5b.style.backgroundColor = stacked3Color5a.value;
};
const stacked3Size5b = document.getElementById("stacked3Size5b");
stacked3Size5b.oninput = function() {
    stacked3Row5c.style.width = ((Math.abs(stacked3Size5b.value)) * .75) + "%";
    stacked3Size5a.max = Math.abs((100 - stacked3Size5b.value - stacked3Size5c.value));
    stacked3Size5b.max = Math.abs((100 - stacked3Size5a.value - stacked3Size5c.value));
    stacked3Size5c.max = Math.abs((100 - stacked3Size5a.value - stacked3Size5b.value));
};
const stacked3Text5b = document.getElementById("stacked3Text5b");
stacked3Text5b.oninput = function() {
    if (stacked3Text5b.value == "") {
        stacked3Row5c.innerHTML = stacked3Text5b.value;
    } else if (stacked3Text5b.value) {
        stacked3Row5c.innerHTML = stacked3Text5b.value + "&nbsp;";
    }
};
const stacked3Color5b = document.getElementById("stacked3Color5b");
stacked3Color5b.oninput = function() {
    stacked3Row5c.style.backgroundColor = stacked3Color5b.value;
};
const stacked3Size5c = document.getElementById("stacked3Size5c");
stacked3Size5c.oninput = function() {
    stacked3Row5d.style.width = ((Math.abs(stacked3Size5c.value)) * .75) + "%";
    stacked3Size5a.max = Math.abs((100 - stacked3Size5b.value - stacked3Size5c.value));
    stacked3Size5b.max = Math.abs((100 - stacked3Size5a.value - stacked3Size5c.value));
    stacked3Size5c.max = Math.abs((100 - stacked3Size5a.value - stacked3Size5b.value));
};
const stacked3Text5c = document.getElementById("stacked3Text5c");
stacked3Text5c.oninput = function() {
    if (stacked3Text5c.value == "") {
        stacked3Row5d.innerHTML = stacked3Text5c.value;
    } else if (stacked3Text5c.value) {
        stacked3Row5d.innerHTML = stacked3Text5c.value + "&nbsp;";
    }
};
const stacked3Color5c = document.getElementById("stacked3Color5c");
stacked3Color5c.oninput = function() {
    stacked3Row5d.style.backgroundColor = stacked3Color5c.value;
};

// Stacked Chart III Row 6 Customization Logic
const stacked3Text6 = document.getElementById("stacked3Text6");
stacked3Text6.oninput = function() {
    stacked3Row6a.innerHTML = stacked3Text6.value;
};
const stacked3Size6a = document.getElementById("stacked3Size6a");
stacked3Size6a.oninput = function() {
    stacked3Row6b.style.width = ((Math.abs(stacked3Size6a.value)) * .75) + "%";
    stacked3Size6a.max = Math.abs((100 - stacked3Size6b.value - stacked3Size6c.value));
    stacked3Size6b.max = Math.abs((100 - stacked3Size6a.value - stacked3Size6c.value));
    stacked3Size6c.max = Math.abs((100 - stacked3Size6a.value - stacked3Size6b.value));
};
const stacked3Text6a = document.getElementById("stacked3Text6a");
stacked3Text6a.oninput = function() {
    if (stacked3Text6a.value == "") {
        stacked3Row6b.innerHTML = stacked3Text6a.value;
    } else if (stacked3Text6a.value) {
        stacked3Row6b.innerHTML = stacked3Text6a.value + "&nbsp;";
    }
};
const stacked3Color6a = document.getElementById("stacked3Color6a");
stacked3Color6a.oninput = function() {
    stacked3Row6b.style.backgroundColor = stacked3Color6a.value;
};
const stacked3Size6b = document.getElementById("stacked3Size6b");
stacked3Size6b.oninput = function() {
    stacked3Row6c.style.width = ((Math.abs(stacked3Size6b.value)) * .75) + "%";
    stacked3Size6a.max = Math.abs((100 - stacked3Size6b.value - stacked3Size6c.value));
    stacked3Size6b.max = Math.abs((100 - stacked3Size6a.value - stacked3Size6c.value));
    stacked3Size6c.max = Math.abs((100 - stacked3Size6a.value - stacked3Size6b.value));
};
const stacked3Text6b = document.getElementById("stacked3Text6b");
stacked3Text6b.oninput = function() {
    if (stacked3Text6b.value == "") {
        stacked3Row6c.innerHTML = stacked3Text6b.value;
    } else if (stacked3Text6b.value) {
        stacked3Row6c.innerHTML = stacked3Text6b.value + "&nbsp;";
    }
};
const stacked3Color6b = document.getElementById("stacked3Color6b");
stacked3Color6b.oninput = function() {
    stacked3Row6c.style.backgroundColor = stacked3Color6b.value;
};
const stacked3Size6c = document.getElementById("stacked3Size6c");
stacked3Size6c.oninput = function() {
    stacked3Row6d.style.width = ((Math.abs(stacked3Size6c.value)) * .75) + "%";
    stacked3Size6a.max = Math.abs((100 - stacked3Size6b.value - stacked3Size6c.value));
    stacked3Size6b.max = Math.abs((100 - stacked3Size6a.value - stacked3Size6c.value));
    stacked3Size6c.max = Math.abs((100 - stacked3Size6a.value - stacked3Size6b.value));
};
const stacked3Text6c = document.getElementById("stacked3Text6c");
stacked3Text6c.oninput = function() {
    if (stacked3Text6c.value == "") {
        stacked3Row6d.innerHTML = stacked3Text6c.value;
    } else if (stacked3Text6c.value) {
        stacked3Row6d.innerHTML = stacked3Text6c.value + "&nbsp;";
    }
};
const stacked3Color6c = document.getElementById("stacked3Color6c");
stacked3Color6c.oninput = function() {
    stacked3Row6d.style.backgroundColor = stacked3Color6c.value;
};

// Stacked Chart III Row 7 Customization Logic
const stacked3Text7 = document.getElementById("stacked3Text7");
stacked3Text7.oninput = function() {
    stacked3Row7a.innerHTML = stacked3Text7.value;
};
const stacked3Size7a = document.getElementById("stacked3Size7a");
stacked3Size7a.oninput = function() {
    stacked3Row7b.style.width = ((Math.abs(stacked3Size7a.value)) * .75) + "%";
    stacked3Size7a.max = Math.abs((100 - stacked3Size7b.value - stacked3Size7c.value));
    stacked3Size7b.max = Math.abs((100 - stacked3Size7a.value - stacked3Size7c.value));
    stacked3Size7c.max = Math.abs((100 - stacked3Size7a.value - stacked3Size7b.value));
};
const stacked3Text7a = document.getElementById("stacked3Text7a");
stacked3Text7a.oninput = function() {
    if (stacked3Text7a.value == "") {
        stacked3Row7b.innerHTML = stacked3Text7a.value;
    } else if (stacked3Text7a.value) {
        stacked3Row7b.innerHTML = stacked3Text7a.value + "&nbsp;";
    }
};
const stacked3Color7a = document.getElementById("stacked3Color7a");
stacked3Color7a.oninput = function() {
    stacked3Row7b.style.backgroundColor = stacked3Color7a.value;
};
const stacked3Size7b = document.getElementById("stacked3Size7b");
stacked3Size7b.oninput = function() {
    stacked3Row7c.style.width = ((Math.abs(stacked3Size7b.value)) * .75) + "%";
    stacked3Size7a.max = Math.abs((100 - stacked3Size7b.value - stacked3Size7c.value));
    stacked3Size7b.max = Math.abs((100 - stacked3Size7a.value - stacked3Size7c.value));
    stacked3Size7c.max = Math.abs((100 - stacked3Size7a.value - stacked3Size7b.value));
};
const stacked3Text7b = document.getElementById("stacked3Text7b");
stacked3Text7b.oninput = function() {
    if (stacked3Text7b.value == "") {
        stacked3Row7c.innerHTML = stacked3Text7b.value;
    } else if (stacked3Text7b.value) {
        stacked3Row7c.innerHTML = stacked3Text7b.value + "&nbsp;";
    }
};
const stacked3Color7b = document.getElementById("stacked3Color7b");
stacked3Color7b.oninput = function() {
    stacked3Row7c.style.backgroundColor = stacked3Color7b.value;
};
const stacked3Size7c = document.getElementById("stacked3Size7c");
stacked3Size7c.oninput = function() {
    stacked3Row7d.style.width = ((Math.abs(stacked3Size7c.value)) * .75) + "%";
    stacked3Size7a.max = Math.abs((100 - stacked3Size7b.value - stacked3Size7c.value));
    stacked3Size7b.max = Math.abs((100 - stacked3Size7a.value - stacked3Size7c.value));
    stacked3Size7c.max = Math.abs((100 - stacked3Size7a.value - stacked3Size7b.value));
};
const stacked3Text7c = document.getElementById("stacked3Text7c");
stacked3Text7c.oninput = function() {
    if (stacked3Text7c.value == "") {
        stacked3Row7d.innerHTML = stacked3Text7c.value;
    } else if (stacked3Text7c.value) {
        stacked3Row7d.innerHTML = stacked3Text7c.value + "&nbsp;";
    }
};
const stacked3Color7c = document.getElementById("stacked3Color7c");
stacked3Color7c.oninput = function() {
    stacked3Row7d.style.backgroundColor = stacked3Color7c.value;
};

// Stacked Chart III Row 8 Customization Logic
const stacked3Text8 = document.getElementById("stacked3Text8");
stacked3Text8.oninput = function() {
    stacked3Row8a.innerHTML = stacked3Text8.value;
};
const stacked3Size8a = document.getElementById("stacked3Size8a");
stacked3Size8a.oninput = function() {
    stacked3Row8b.style.width = ((Math.abs(stacked3Size8a.value)) * .75) + "%";
    stacked3Size8a.max = Math.abs((100 - stacked3Size8b.value - stacked3Size8c.value));
    stacked3Size8b.max = Math.abs((100 - stacked3Size8a.value - stacked3Size8c.value));
    stacked3Size8c.max = Math.abs((100 - stacked3Size8a.value - stacked3Size8b.value));
};
const stacked3Text8a = document.getElementById("stacked3Text8a");
stacked3Text8a.oninput = function() {
    if (stacked3Text8a.value == "") {
        stacked3Row8b.innerHTML = stacked3Text8a.value;
    } else if (stacked3Text8a.value) {
        stacked3Row8b.innerHTML = stacked3Text8a.value + "&nbsp;";
    }
};
const stacked3Color8a = document.getElementById("stacked3Color8a");
stacked3Color8a.oninput = function() {
    stacked3Row8b.style.backgroundColor = stacked3Color8a.value;
};
const stacked3Size8b = document.getElementById("stacked3Size8b");
stacked3Size8b.oninput = function() {
    stacked3Row8c.style.width = ((Math.abs(stacked3Size8b.value)) * .75) + "%";
    stacked3Size8a.max = Math.abs((100 - stacked3Size8b.value - stacked3Size8c.value));
    stacked3Size8b.max = Math.abs((100 - stacked3Size8a.value - stacked3Size8c.value));
    stacked3Size8c.max = Math.abs((100 - stacked3Size8a.value - stacked3Size8b.value));
};
const stacked3Text8b = document.getElementById("stacked3Text8b");
stacked3Text8b.oninput = function() {
    if (stacked3Text8b.value == "") {
        stacked3Row8c.innerHTML = stacked3Text8b.value;
    } else if (stacked3Text8b.value) {
        stacked3Row8c.innerHTML = stacked3Text8b.value + "&nbsp;";
    }
};
const stacked3Color8b = document.getElementById("stacked3Color8b");
stacked3Color8b.oninput = function() {
    stacked3Row8c.style.backgroundColor = stacked3Color8b.value;
};
const stacked3Size8c = document.getElementById("stacked3Size8c");
stacked3Size8c.oninput = function() {
    stacked3Row8d.style.width = ((Math.abs(stacked3Size8c.value)) * .75) + "%";
    stacked3Size8a.max = Math.abs((100 - stacked3Size8b.value - stacked3Size8c.value));
    stacked3Size8b.max = Math.abs((100 - stacked3Size8a.value - stacked3Size8c.value));
    stacked3Size8c.max = Math.abs((100 - stacked3Size8a.value - stacked3Size8b.value));
};
const stacked3Text8c = document.getElementById("stacked3Text8c");
stacked3Text8c.oninput = function() {
    if (stacked3Text8c.value == "") {
        stacked3Row8d.innerHTML = stacked3Text8c.value;
    } else if (stacked3Text8c.value) {
        stacked3Row8d.innerHTML = stacked3Text8c.value + "&nbsp;";
    }
};
const stacked3Color8c = document.getElementById("stacked3Color8c");
stacked3Color8c.oninput = function() {
    stacked3Row8d.style.backgroundColor = stacked3Color8c.value;
};

// Stacked Chart III Row 9 Customization Logic
const stacked3Text9 = document.getElementById("stacked3Text9");
stacked3Text9.oninput = function() {
    stacked3Row9a.innerHTML = stacked3Text9.value;
};
const stacked3Size9a = document.getElementById("stacked3Size9a");
stacked3Size9a.oninput = function() {
    stacked3Row9b.style.width = ((Math.abs(stacked3Size9a.value)) * .75) + "%";
    stacked3Size9a.max = Math.abs((100 - stacked3Size9b.value - stacked3Size9c.value));
    stacked3Size9b.max = Math.abs((100 - stacked3Size9a.value - stacked3Size9c.value));
    stacked3Size9c.max = Math.abs((100 - stacked3Size9a.value - stacked3Size9b.value));
};
const stacked3Text9a = document.getElementById("stacked3Text9a");
stacked3Text9a.oninput = function() {
    if (stacked3Text9a.value == "") {
        stacked3Row9b.innerHTML = stacked3Text9a.value;
    } else if (stacked3Text9a.value) {
        stacked3Row9b.innerHTML = stacked3Text9a.value + "&nbsp;";
    }
};
const stacked3Color9a = document.getElementById("stacked3Color9a");
stacked3Color9a.oninput = function() {
    stacked3Row9b.style.backgroundColor = stacked3Color9a.value;
};
const stacked3Size9b = document.getElementById("stacked3Size9b");
stacked3Size9b.oninput = function() {
    stacked3Row9c.style.width = ((Math.abs(stacked3Size9b.value)) * .75) + "%";
    stacked3Size9a.max = Math.abs((100 - stacked3Size9b.value - stacked3Size9c.value));
    stacked3Size9b.max = Math.abs((100 - stacked3Size9a.value - stacked3Size9c.value));
    stacked3Size9c.max = Math.abs((100 - stacked3Size9a.value - stacked3Size9b.value));
};
const stacked3Text9b = document.getElementById("stacked3Text9b");
stacked3Text9b.oninput = function() {
    if (stacked3Text9b.value == "") {
        stacked3Row9c.innerHTML = stacked3Text9b.value;
    } else if (stacked3Text9b.value) {
        stacked3Row9c.innerHTML = stacked3Text9b.value + "&nbsp;";
    }
};
const stacked3Color9b = document.getElementById("stacked3Color9b");
stacked3Color9b.oninput = function() {
    stacked3Row9c.style.backgroundColor = stacked3Color9b.value;
};
const stacked3Size9c = document.getElementById("stacked3Size9c");
stacked3Size9c.oninput = function() {
    stacked3Row9d.style.width = ((Math.abs(stacked3Size9c.value)) * .75) + "%";
    stacked3Size9a.max = Math.abs((100 - stacked3Size9b.value - stacked3Size9c.value));
    stacked3Size9b.max = Math.abs((100 - stacked3Size9a.value - stacked3Size9c.value));
    stacked3Size9c.max = Math.abs((100 - stacked3Size9a.value - stacked3Size9b.value));
};
const stacked3Text9c = document.getElementById("stacked3Text9c");
stacked3Text9c.oninput = function() {
    if (stacked3Text9c.value == "") {
        stacked3Row9d.innerHTML = stacked3Text9c.value;
    } else if (stacked3Text9c.value) {
        stacked3Row9d.innerHTML = stacked3Text9c.value + "&nbsp;";
    }
};
const stacked3Color9c = document.getElementById("stacked3Color9c");
stacked3Color9c.oninput = function() {
    stacked3Row9d.style.backgroundColor = stacked3Color9c.value;
};

// Stacked Chart III Row 10 Customization Logic
const stacked3Text10 = document.getElementById("stacked3Text10");
stacked3Text10.oninput = function() {
    stacked3Row10a.innerHTML = stacked3Text10.value;
};
const stacked3Size10a = document.getElementById("stacked3Size10a");
stacked3Size10a.oninput = function() {
    stacked3Row10b.style.width = ((Math.abs(stacked3Size10a.value)) * .75) + "%";
    stacked3Size10a.max = Math.abs((100 - stacked3Size10b.value - stacked3Size10c.value));
    stacked3Size10b.max = Math.abs((100 - stacked3Size10a.value - stacked3Size10c.value));
    stacked3Size10c.max = Math.abs((100 - stacked3Size10a.value - stacked3Size10b.value));
};
const stacked3Text10a = document.getElementById("stacked3Text10a");
stacked3Text10a.oninput = function() {
    if (stacked3Text10a.value == "") {
        stacked3Row10b.innerHTML = stacked3Text10a.value;
    } else if (stacked3Text10a.value) {
        stacked3Row10b.innerHTML = stacked3Text10a.value + "&nbsp;";
    }
};
const stacked3Color10a = document.getElementById("stacked3Color10a");
stacked3Color10a.oninput = function() {
    stacked3Row10b.style.backgroundColor = stacked3Color10a.value;
};
const stacked3Size10b = document.getElementById("stacked3Size10b");
stacked3Size10b.oninput = function() {
    stacked3Row10c.style.width = ((Math.abs(stacked3Size10b.value)) * .75) + "%";
    stacked3Size10a.max = Math.abs((100 - stacked3Size10b.value - stacked3Size10c.value));
    stacked3Size10b.max = Math.abs((100 - stacked3Size10a.value - stacked3Size10c.value));
    stacked3Size10c.max = Math.abs((100 - stacked3Size10a.value - stacked3Size10b.value));
};
const stacked3Text10b = document.getElementById("stacked3Text10b");
stacked3Text10b.oninput = function() {
    if (stacked3Text10b.value == "") {
        stacked3Row10c.innerHTML = stacked3Text10b.value;
    } else if (stacked3Text10b.value) {
        stacked3Row10c.innerHTML = stacked3Text10b.value + "&nbsp;";
    }
};
const stacked3Color10b = document.getElementById("stacked3Color10b");
stacked3Color10b.oninput = function() {
    stacked3Row10c.style.backgroundColor = stacked3Color10b.value;
};
const stacked3Size10c = document.getElementById("stacked3Size10c");
stacked3Size10c.oninput = function() {
    stacked3Row10d.style.width = ((Math.abs(stacked3Size10c.value)) * .75) + "%";
    stacked3Size10a.max = Math.abs((100 - stacked3Size10b.value - stacked3Size10c.value));
    stacked3Size10b.max = Math.abs((100 - stacked3Size10a.value - stacked3Size10c.value));
    stacked3Size10c.max = Math.abs((100 - stacked3Size10a.value - stacked3Size10b.value));
};
const stacked3Text10c = document.getElementById("stacked3Text10c");
stacked3Text10c.oninput = function() {
    if (stacked3Text10c.value == "") {
        stacked3Row10d.innerHTML = stacked3Text10c.value;
    } else if (stacked3Text10c.value) {
        stacked3Row10d.innerHTML = stacked3Text10c.value + "&nbsp;";
    }
};
const stacked3Color10c = document.getElementById("stacked3Color10c");
stacked3Color10c.oninput = function() {
    stacked3Row10d.style.backgroundColor = stacked3Color10c.value;
};

// Generate Stacked Chart III HTML Chart Logic
const stacked3Button = document.getElementById("stacked3Button");
const stacked3Output = document.getElementById("stacked3Output");
stacked3Button.addEventListener("click", () => {
    if (rowsData6.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: 22px;" height="22">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: 22px;" height="22">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: 22px;" height="22">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend3Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked3Output.innerHTML = chartCode;
    } else if (rowsData6.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: 22px;" height="22">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: 22px;" height="22">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: 22px;" height="22">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2b.style.width +'; height: 22px;" height="22">' + stacked3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2c.style.width + '; height: 22px;" height="22">' + stacked3Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2d.style.width + '; height: 22px;" height="22">' + stacked3Row2d.innerHTML + '</td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend3Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked3Output.innerHTML = chartCode;
    } else if (rowsData6.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: 22px;" height="22">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: 22px;" height="22">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: 22px;" height="22">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2b.style.width +'; height: 22px;" height="22">' + stacked3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2c.style.width + '; height: 22px;" height="22">' + stacked3Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2d.style.width + '; height: 22px;" height="22">' + stacked3Row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3b.style.width + '; height: 22px;" height="22">' + stacked3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3c.style.width + '; height: 22px;" height="22">' + stacked3Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3d.style.width + '; height: 22px;" height="22">' + stacked3Row3d.innerHTML + '</td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend3Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked3Output.innerHTML = chartCode;
    } else if (rowsData6.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: 22px;" height="22">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: 22px;" height="22">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: 22px;" height="22">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2b.style.width +'; height: 22px;" height="22">' + stacked3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2c.style.width + '; height: 22px;" height="22">' + stacked3Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2d.style.width + '; height: 22px;" height="22">' + stacked3Row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3b.style.width + '; height: 22px;" height="22">' + stacked3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3c.style.width + '; height: 22px;" height="22">' + stacked3Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3d.style.width + '; height: 22px;" height="22">' + stacked3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4b.style.width + '; height: 22px;" height="22">' + stacked3Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4c.style.width + '; height: 22px;" height="22">' + stacked3Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4d.style.width + '; height: 22px;" height="22">' + stacked3Row4d.innerHTML + '</td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend3Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked3Output.innerHTML = chartCode;
    } else if (rowsData6.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: 22px;" height="22">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: 22px;" height="22">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: 22px;" height="22">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2b.style.width +'; height: 22px;" height="22">' + stacked3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2c.style.width + '; height: 22px;" height="22">' + stacked3Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2d.style.width + '; height: 22px;" height="22">' + stacked3Row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3b.style.width + '; height: 22px;" height="22">' + stacked3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3c.style.width + '; height: 22px;" height="22">' + stacked3Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3d.style.width + '; height: 22px;" height="22">' + stacked3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4b.style.width + '; height: 22px;" height="22">' + stacked3Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4c.style.width + '; height: 22px;" height="22">' + stacked3Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4d.style.width + '; height: 22px;" height="22">' + stacked3Row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5b.style.width + '; height: 22px;" height="22">' + stacked3Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5c.style.width + '; height: 22px;" height="22">' + stacked3Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5d.style.width + '; height: 22px;" height="22">' + stacked3Row5d.innerHTML + '</td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend3Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked3Output.innerHTML = chartCode;
    } else if (rowsData6.value === "6") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: 22px;" height="22">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: 22px;" height="22">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: 22px;" height="22">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2b.style.width +'; height: 22px;" height="22">' + stacked3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2c.style.width + '; height: 22px;" height="22">' + stacked3Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2d.style.width + '; height: 22px;" height="22">' + stacked3Row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3b.style.width + '; height: 22px;" height="22">' + stacked3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3c.style.width + '; height: 22px;" height="22">' + stacked3Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3d.style.width + '; height: 22px;" height="22">' + stacked3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4b.style.width + '; height: 22px;" height="22">' + stacked3Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4c.style.width + '; height: 22px;" height="22">' + stacked3Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4d.style.width + '; height: 22px;" height="22">' + stacked3Row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5b.style.width + '; height: 22px;" height="22">' + stacked3Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5c.style.width + '; height: 22px;" height="22">' + stacked3Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5d.style.width + '; height: 22px;" height="22">' + stacked3Row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6b.style.width + '; height: 22px;" height="22">' + stacked3Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6c.style.width + '; height: 22px;" height="22">' + stacked3Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6d.style.width + '; height: 22px;" height="22">' + stacked3Row6d.innerHTML + '</td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend3Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked3Output.innerHTML = chartCode;
    } else if (rowsData6.value === "7") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: 22px;" height="22">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: 22px;" height="22">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: 22px;" height="22">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2b.style.width +'; height: 22px;" height="22">' + stacked3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2c.style.width + '; height: 22px;" height="22">' + stacked3Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2d.style.width + '; height: 22px;" height="22">' + stacked3Row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3b.style.width + '; height: 22px;" height="22">' + stacked3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3c.style.width + '; height: 22px;" height="22">' + stacked3Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3d.style.width + '; height: 22px;" height="22">' + stacked3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4b.style.width + '; height: 22px;" height="22">' + stacked3Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4c.style.width + '; height: 22px;" height="22">' + stacked3Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4d.style.width + '; height: 22px;" height="22">' + stacked3Row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5b.style.width + '; height: 22px;" height="22">' + stacked3Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5c.style.width + '; height: 22px;" height="22">' + stacked3Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5d.style.width + '; height: 22px;" height="22">' + stacked3Row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6b.style.width + '; height: 22px;" height="22">' + stacked3Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6c.style.width + '; height: 22px;" height="22">' + stacked3Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6d.style.width + '; height: 22px;" height="22">' + stacked3Row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7b.style.width + '; height: 22px;" height="22">' + stacked3Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7c.style.width + '; height: 22px;" height="22">' + stacked3Row7c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7d.style.width + '; height: 22px;" height="22">' + stacked3Row7d.innerHTML + '</td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend3Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked3Output.innerHTML = chartCode;
    } else if (rowsData6.value === "8") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: 22px;" height="22">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: 22px;" height="22">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: 22px;" height="22">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2b.style.width +'; height: 22px;" height="22">' + stacked3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2c.style.width + '; height: 22px;" height="22">' + stacked3Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2d.style.width + '; height: 22px;" height="22">' + stacked3Row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3b.style.width + '; height: 22px;" height="22">' + stacked3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3c.style.width + '; height: 22px;" height="22">' + stacked3Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3d.style.width + '; height: 22px;" height="22">' + stacked3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4b.style.width + '; height: 22px;" height="22">' + stacked3Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4c.style.width + '; height: 22px;" height="22">' + stacked3Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4d.style.width + '; height: 22px;" height="22">' + stacked3Row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5b.style.width + '; height: 22px;" height="22">' + stacked3Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5c.style.width + '; height: 22px;" height="22">' + stacked3Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5d.style.width + '; height: 22px;" height="22">' + stacked3Row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6b.style.width + '; height: 22px;" height="22">' + stacked3Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6c.style.width + '; height: 22px;" height="22">' + stacked3Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6d.style.width + '; height: 22px;" height="22">' + stacked3Row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7b.style.width + '; height: 22px;" height="22">' + stacked3Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7c.style.width + '; height: 22px;" height="22">' + stacked3Row7c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7d.style.width + '; height: 22px;" height="22">' + stacked3Row7d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color8a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row8b.style.width + '; height: 22px;" height="22">' + stacked3Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color8b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row8c.style.width + '; height: 22px;" height="22">' + stacked3Row8c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color8c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row8d.style.width + '; height: 22px;" height="22">' + stacked3Row8d.innerHTML + '</td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend3Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked3Output.innerHTML = chartCode;
    } else if (rowsData6.value === "9") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: 22px;" height="22">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: 22px;" height="22">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: 22px;" height="22">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2b.style.width +'; height: 22px;" height="22">' + stacked3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2c.style.width + '; height: 22px;" height="22">' + stacked3Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2d.style.width + '; height: 22px;" height="22">' + stacked3Row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3b.style.width + '; height: 22px;" height="22">' + stacked3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3c.style.width + '; height: 22px;" height="22">' + stacked3Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3d.style.width + '; height: 22px;" height="22">' + stacked3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4b.style.width + '; height: 22px;" height="22">' + stacked3Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4c.style.width + '; height: 22px;" height="22">' + stacked3Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4d.style.width + '; height: 22px;" height="22">' + stacked3Row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5b.style.width + '; height: 22px;" height="22">' + stacked3Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5c.style.width + '; height: 22px;" height="22">' + stacked3Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5d.style.width + '; height: 22px;" height="22">' + stacked3Row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6b.style.width + '; height: 22px;" height="22">' + stacked3Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6c.style.width + '; height: 22px;" height="22">' + stacked3Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6d.style.width + '; height: 22px;" height="22">' + stacked3Row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7b.style.width + '; height: 22px;" height="22">' + stacked3Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7c.style.width + '; height: 22px;" height="22">' + stacked3Row7c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7d.style.width + '; height: 22px;" height="22">' + stacked3Row7d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color8a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row8b.style.width + '; height: 22px;" height="22">' + stacked3Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color8b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row8c.style.width + '; height: 22px;" height="22">' + stacked3Row8c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color8c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row8d.style.width + '; height: 22px;" height="22">' + stacked3Row8d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row9a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color9a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row9b.style.width + '; height: 22px;" height="22">' + stacked3Row9b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color9b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row9c.style.width + '; height: 22px;" height="22">' + stacked3Row9c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color9c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row9d.style.width + '; height: 22px;" height="22">' + stacked3Row9d.innerHTML + '</td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend3Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked3Output.innerHTML = chartCode;
    } else if (rowsData6.value === "10") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: 22px;" height="22">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: 22px;" height="22">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: 22px;" height="22">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2b.style.width +'; height: 22px;" height="22">' + stacked3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2c.style.width + '; height: 22px;" height="22">' + stacked3Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2d.style.width + '; height: 22px;" height="22">' + stacked3Row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3b.style.width + '; height: 22px;" height="22">' + stacked3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3c.style.width + '; height: 22px;" height="22">' + stacked3Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3d.style.width + '; height: 22px;" height="22">' + stacked3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4b.style.width + '; height: 22px;" height="22">' + stacked3Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4c.style.width + '; height: 22px;" height="22">' + stacked3Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4d.style.width + '; height: 22px;" height="22">' + stacked3Row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5b.style.width + '; height: 22px;" height="22">' + stacked3Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5c.style.width + '; height: 22px;" height="22">' + stacked3Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5d.style.width + '; height: 22px;" height="22">' + stacked3Row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6b.style.width + '; height: 22px;" height="22">' + stacked3Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6c.style.width + '; height: 22px;" height="22">' + stacked3Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6d.style.width + '; height: 22px;" height="22">' + stacked3Row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7b.style.width + '; height: 22px;" height="22">' + stacked3Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7c.style.width + '; height: 22px;" height="22">' + stacked3Row7c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7d.style.width + '; height: 22px;" height="22">' + stacked3Row7d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color8a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row8b.style.width + '; height: 22px;" height="22">' + stacked3Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color8b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row8c.style.width + '; height: 22px;" height="22">' + stacked3Row8c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color8c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row8d.style.width + '; height: 22px;" height="22">' + stacked3Row8d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row9a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color9a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row9b.style.width + '; height: 22px;" height="22">' + stacked3Row9b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color9b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row9c.style.width + '; height: 22px;" height="22">' + stacked3Row9c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color9c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row9d.style.width + '; height: 22px;" height="22">' + stacked3Row9d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked3Row10a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color10a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row10b.style.width + '; height: 22px;" height="22">' + stacked3Row10b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color10b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row10c.style.width + '; height: 22px;" height="22">' + stacked3Row10c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color10c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row10d.style.width + '; height: 22px;" height="22">' + stacked3Row10d.innerHTML + '</td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend3Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend3Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend3Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked3Output.innerHTML = chartCode;
    }
});

// Highlight stacked3Output Text
stacked3Output.addEventListener("click", () => {
    stacked3Output.select();
});


// Stacked Chart IV Row Selection
const stacked4Bars = document.getElementsByClassName("stacked4Bars");
const stacked4Controls = document.getElementsByClassName("stacked4Controls");
const rowsData10 = document.getElementById("rowsData10");
rowsData10.addEventListener("change", () => {
    for (var i = 0; i < stacked4Controls.length; i++) {
        stacked4Controls[i].style.display = "none";
        stacked4Bars[i].style.display = "none";
        for (var x = 0; x < rowsData10.value; x++) {
            stacked4Controls[x].style.display = "block";
            stacked4Bars[x].style.display = "block";
        }
    }
});

// Stacked Chart IV Text/Color Legend
const legend5Text1 = document.getElementById("legend5Text1");
const legend5Text1x = document.getElementById("legend5Text1x");
legend5Text1x.oninput = function() {
    legend5Text1.innerHTML = legend5Text1x.value;
};
const legend5Text2 = document.getElementById("legend5Text2");
const legend5Text2x = document.getElementById("legend5Text2x");
legend5Text2x.oninput = function() {
    legend5Text2.innerHTML = legend5Text2x.value;
};
const legend5Text3 = document.getElementById("legend5Text3");
const legend5Text3x = document.getElementById("legend5Text3x");
legend5Text3x.oninput = function() {
    legend5Text3.innerHTML = legend5Text3x.value;
};
const legend5Color1 = document.getElementById("legend5Color1");
const legend5Color1x = document.getElementById("legend5Color1x");
legend5Color1x.oninput = function() {
    legend5Color1.style.color = legend5Color1x.value;
    legend5Color1.style.backgroundColor = legend5Color1x.value;
};
const legend5Color2 = document.getElementById("legend5Color2");
const legend5Color2x = document.getElementById("legend5Color2x");
legend5Color2x.oninput = function() {
    legend5Color2.style.color = legend5Color2x.value;
    legend5Color2.style.backgroundColor = legend5Color2x.value;
};
const legend5Color3 = document.getElementById("legend5Color3");
const legend5Color3x = document.getElementById("legend5Color3x");
legend5Color3x.oninput = function() {
    legend5Color3.style.color = legend5Color3x.value;
    legend5Color3.style.backgroundColor = legend5Color3x.value;
};

// Stacked Chart IV Row Customization Logic
const stacked4Row1a = document.getElementById("stacked4Row1a");
const stacked4Row1b = document.getElementById("stacked4Row1b");
const stacked4Row1c = document.getElementById("stacked4Row1c");
const stacked4Row1d = document.getElementById("stacked4Row1d");
const stacked4Row2a = document.getElementById("stacked4Row2a");
const stacked4Row2b = document.getElementById("stacked4Row2b");
const stacked4Row2c = document.getElementById("stacked4Row2c");
const stacked4Row2d = document.getElementById("stacked4Row2d");
const stacked4Row3a = document.getElementById("stacked4Row3a");
const stacked4Row3b = document.getElementById("stacked4Row3b");
const stacked4Row3c = document.getElementById("stacked4Row3c");
const stacked4Row3d = document.getElementById("stacked4Row3d");
const stacked4Row4a = document.getElementById("stacked4Row4a");
const stacked4Row4b = document.getElementById("stacked4Row4b");
const stacked4Row4c = document.getElementById("stacked4Row4c");
const stacked4Row4d = document.getElementById("stacked4Row4d");
const stacked4Row5a = document.getElementById("stacked4Row5a");
const stacked4Row5b = document.getElementById("stacked4Row5b");
const stacked4Row5c = document.getElementById("stacked4Row5c");
const stacked4Row5d = document.getElementById("stacked4Row5d");
const stacked4Row6a = document.getElementById("stacked4Row6a");
const stacked4Row6b = document.getElementById("stacked4Row6b");
const stacked4Row6c = document.getElementById("stacked4Row6c");
const stacked4Row6d = document.getElementById("stacked4Row6d");
const stacked4Row7a = document.getElementById("stacked4Row7a");
const stacked4Row7b = document.getElementById("stacked4Row7b");
const stacked4Row7c = document.getElementById("stacked4Row7c");
const stacked4Row7d = document.getElementById("stacked4Row7d");
const stacked4Row8a = document.getElementById("stacked4Row8a");
const stacked4Row8b = document.getElementById("stacked4Row8b");
const stacked4Row8c = document.getElementById("stacked4Row8c");
const stacked4Row8d = document.getElementById("stacked4Row8d");
const stacked4Row9a = document.getElementById("stacked4Row9a");
const stacked4Row9b = document.getElementById("stacked4Row9b");
const stacked4Row9c = document.getElementById("stacked4Row9c");
const stacked4Row9d = document.getElementById("stacked4Row9d");
const stacked4Row10a = document.getElementById("stacked4Row10a");
const stacked4Row10b = document.getElementById("stacked4Row10b");
const stacked4Row10c = document.getElementById("stacked4Row10c");
const stacked4Row10d = document.getElementById("stacked4Row10d");

// Stacked Chart IV Row 1 Customization Logic
const stacked4Text1 = document.getElementById("stacked4Text1"); // Data Label
stacked4Text1.oninput = function() {
    stacked4Row1a.innerHTML = stacked4Text1.value;
};
const stacked4Size1a = document.getElementById("stacked4Size1a");
stacked4Size1a.oninput = function() {
    stacked4Row1b.style.width = ((Math.abs(stacked4Size1a.value)) * .75) + "%";
    stacked4Size1a.max = Math.abs((100 - stacked4Size1b.value - stacked4Size1c.value));
    stacked4Size1b.max = Math.abs((100 - stacked4Size1a.value - stacked4Size1c.value));
    stacked4Size1c.max = Math.abs((100 - stacked4Size1a.value - stacked4Size1b.value));
};
const stacked4Text1a = document.getElementById("stacked4Text1a"); // End Data Label #1
stacked4Text1a.oninput = function() {
    if (stacked4Text1a.value == "") {
        stacked4Row1b.innerHTML = stacked4Text1a.value;
    } else if (stacked4Text1a.value) {
        stacked4Row1b.innerHTML = stacked4Text1a.value + "&nbsp;";
    }
};
const stacked4Color1a = document.getElementById("stacked4Color1a");
stacked4Color1a.oninput = function() {
    stacked4Row1b.style.backgroundColor = stacked4Color1a.value;
};
const stacked4Size1b = document.getElementById("stacked4Size1b");
stacked4Size1b.oninput = function() {
    stacked4Row1c.style.width = ((Math.abs(stacked4Size1b.value)) * .75) + "%";
    stacked4Size1a.max = Math.abs((100 - stacked4Size1b.value - stacked4Size1c.value));
    stacked4Size1b.max = Math.abs((100 - stacked4Size1a.value - stacked4Size1c.value));
    stacked4Size1c.max = Math.abs((100 - stacked4Size1a.value - stacked4Size1b.value));
};
const stacked4Text1b = document.getElementById("stacked4Text1b"); // End Data Label #2
stacked4Text1b.oninput = function() {
    if (stacked4Text1b.value == "") {
        stacked4Row1c.innerHTML = stacked4Text1b.value;
    } else if (stacked4Text1b.value) {
        stacked4Row1c.innerHTML = stacked4Text1b.value + "&nbsp;";
    }
};
const stacked4Color1b = document.getElementById("stacked4Color1b");
stacked4Color1b.oninput = function() {
    stacked4Row1c.style.backgroundColor = stacked4Color1b.value;
};
const stacked4Size1c = document.getElementById("stacked4Size1c");
stacked4Size1c.oninput = function() {
    stacked4Row1d.style.width = ((Math.abs(stacked4Size1c.value)) * .75) + "%";
    stacked4Size1a.max = Math.abs((100 - stacked4Size1b.value - stacked4Size1c.value));
    stacked4Size1b.max = Math.abs((100 - stacked4Size1a.value - stacked4Size1c.value));
    stacked4Size1c.max = Math.abs((100 - stacked4Size1a.value - stacked4Size1b.value));
};
const stacked4Text1c = document.getElementById("stacked4Text1c");
stacked4Text1c.oninput = function() {
    if (stacked4Text1c.value == "") {
        stacked4Row1d.innerHTML = stacked4Text1c.value;
    } else if (stacked4Text1c.value) {
        stacked4Row1d.innerHTML = stacked4Text1c.value + "&nbsp;";
    }
};
const stacked4Color1c = document.getElementById("stacked4Color1c");
stacked4Color1c.oninput = function() {
    stacked4Row1d.style.backgroundColor = stacked4Color1c.value;
};

// Stacked Chart IV Row 2 Customization Logic
const stacked4Text2 = document.getElementById("stacked4Text2");
stacked4Text2.oninput = function() {
    stacked4Row2a.innerHTML = stacked4Text2.value;
};
const stacked4Size2a = document.getElementById("stacked4Size2a");
stacked4Size2a.oninput = function() {
    stacked4Row2b.style.width = ((Math.abs(stacked4Size2a.value)) * .75) + "%";
    stacked4Size2a.max = Math.abs((100 - stacked4Size2b.value - stacked4Size2c.value));
    stacked4Size2b.max = Math.abs((100 - stacked4Size2a.value - stacked4Size2c.value));
    stacked4Size2c.max = Math.abs((100 - stacked4Size2a.value - stacked4Size2b.value));
};
const stacked4Text2a = document.getElementById("stacked4Text2a");
stacked4Text2a.oninput = function() {
    if (stacked4Text2a.value == "") {
        stacked4Row2b.innerHTML = stacked4Text2a.value;
    } else if (stacked4Text2a.value) {
        stacked4Row2b.innerHTML = stacked4Text2a.value + "&nbsp;";
    }
};
const stacked4Color2a = document.getElementById("stacked4Color2a");
stacked4Color2a.oninput = function() {
    stacked4Row2b.style.backgroundColor = stacked4Color2a.value;
};
const stacked4Size2b = document.getElementById("stacked4Size2b");
stacked4Size2b.oninput = function() {
    stacked4Row2c.style.width = ((Math.abs(stacked4Size2b.value)) * .75) + "%";
    stacked4Size2a.max = Math.abs((100 - stacked4Size2b.value - stacked4Size2c.value));
    stacked4Size2b.max = Math.abs((100 - stacked4Size2a.value - stacked4Size2c.value));
    stacked4Size2c.max = Math.abs((100 - stacked4Size2a.value - stacked4Size2b.value));
};
const stacked4Text2b = document.getElementById("stacked4Text2b");
stacked4Text2b.oninput = function() {
    if (stacked4Text2b.value == "") {
        stacked4Row2c.innerHTML = stacked4Text2b.value;
    } else if (stacked4Text2b.value) {
        stacked4Row2c.innerHTML = stacked4Text2b.value + "&nbsp;";
    }
};
const stacked4Color2b = document.getElementById("stacked4Color2b");
stacked4Color2b.oninput = function() {
    stacked4Row2c.style.backgroundColor = stacked4Color2b.value;
};
const stacked4Size2c = document.getElementById("stacked4Size2c");
stacked4Size2c.oninput = function() {
    stacked4Row2d.style.width = ((Math.abs(stacked4Size2c.value)) * .75) + "%";
    stacked4Size2a.max = Math.abs((100 - stacked4Size2b.value - stacked4Size2c.value));
    stacked4Size2b.max = Math.abs((100 - stacked4Size2a.value - stacked4Size2c.value));
    stacked4Size2c.max = Math.abs((100 - stacked4Size2a.value - stacked4Size2b.value));
};
const stacked4Text2c = document.getElementById("stacked4Text2c");
stacked4Text2c.oninput = function() {
    if (stacked4Text2c.value == "") {
        stacked4Row2d.innerHTML = stacked4Text2c.value;
    } else if (stacked4Text2c.value) {
        stacked4Row2d.innerHTML = stacked4Text2c.value + "&nbsp;";
    }
};
const stacked4Color2c = document.getElementById("stacked4Color2c");
stacked4Color2c.oninput = function() {
    stacked4Row2d.style.backgroundColor = stacked4Color2c.value;
};

// Stacked Chart IV Row 3 Customization Logic
const stacked4Text3 = document.getElementById("stacked4Text3");
stacked4Text3.oninput = function() {
    stacked4Row3a.innerHTML = stacked4Text3.value;
};
const stacked4Size3a = document.getElementById("stacked4Size3a");
stacked4Size3a.oninput = function() {
    stacked4Row3b.style.width = ((Math.abs(stacked4Size3a.value)) * .75) + "%";
    stacked4Size3a.max = Math.abs((100 - stacked4Size3b.value - stacked4Size3c.value));
    stacked4Size3b.max = Math.abs((100 - stacked4Size3a.value - stacked4Size3c.value));
    stacked4Size3c.max = Math.abs((100 - stacked4Size3a.value - stacked4Size3b.value));
};
const stacked4Text3a = document.getElementById("stacked4Text3a");
stacked4Text3a.oninput = function() {
    if (stacked4Text3a.value == "") {
        stacked4Row3b.innerHTML = stacked4Text3a.value;
    } else if (stacked4Text3a.value) {
        stacked4Row3b.innerHTML = stacked4Text3a.value + "&nbsp;";
    }
};
const stacked4Color3a = document.getElementById("stacked4Color3a");
stacked4Color3a.oninput = function() {
    stacked4Row3b.style.backgroundColor = stacked4Color3a.value;
};
const stacked4Size3b = document.getElementById("stacked4Size3b");
stacked4Size3b.oninput = function() {
    stacked4Row3c.style.width = ((Math.abs(stacked4Size3b.value)) * .75) + "%";
    stacked4Size3a.max = Math.abs((100 - stacked4Size3b.value - stacked4Size3c.value));
    stacked4Size3b.max = Math.abs((100 - stacked4Size3a.value - stacked4Size3c.value));
    stacked4Size3c.max = Math.abs((100 - stacked4Size3a.value - stacked4Size3b.value));
};
const stacked4Text3b = document.getElementById("stacked4Text3b");
stacked4Text3b.oninput = function() {
    if (stacked4Text3b.value == "") {
        stacked4Row3c.innerHTML = stacked4Text3b.value;
    } else if (stacked4Text3b.value) {
        stacked4Row3c.innerHTML = stacked4Text3b.value + "&nbsp;";
    }
};
const stacked4Color3b = document.getElementById("stacked4Color3b");
stacked4Color3b.oninput = function() {
    stacked4Row3c.style.backgroundColor = stacked4Color3b.value;
};
const stacked4Size3c = document.getElementById("stacked4Size3c");
stacked4Size3c.oninput = function() {
    stacked4Row3d.style.width = ((Math.abs(stacked4Size3c.value)) * .75) + "%";
    stacked4Size3a.max = Math.abs((100 - stacked4Size3b.value - stacked4Size3c.value));
    stacked4Size3b.max = Math.abs((100 - stacked4Size3a.value - stacked4Size3c.value));
    stacked4Size3c.max = Math.abs((100 - stacked4Size3a.value - stacked4Size3b.value));
};
const stacked4Text3c = document.getElementById("stacked4Text3c");
stacked4Text3c.oninput = function() {
    if (stacked4Text3c.value == "") {
        stacked4Row3d.innerHTML = stacked4Text3c.value;
    } else if (stacked4Text3c.value) {
        stacked4Row3d.innerHTML = stacked4Text3c.value + "&nbsp;";
    }
};
const stacked4Color3c = document.getElementById("stacked4Color3c");
stacked4Color3c.oninput = function() {
    stacked4Row3d.style.backgroundColor = stacked4Color3c.value;
};

// Stacked Chart IV Row 4 Customization Logic
const stacked4Text4 = document.getElementById("stacked4Text4");
stacked4Text4.oninput = function() {
    stacked4Row4a.innerHTML = stacked4Text4.value;
};
const stacked4Size4a = document.getElementById("stacked4Size4a");
stacked4Size4a.oninput = function() {
    stacked4Row4b.style.width = ((Math.abs(stacked4Size4a.value)) * .75) + "%";
    stacked4Size4a.max = Math.abs((100 - stacked4Size4b.value - stacked4Size4c.value));
    stacked4Size4b.max = Math.abs((100 - stacked4Size4a.value - stacked4Size4c.value));
    stacked4Size4c.max = Math.abs((100 - stacked4Size4a.value - stacked4Size4b.value));
};
const stacked4Text4a = document.getElementById("stacked4Text4a");
stacked4Text4a.oninput = function() {
    if (stacked4Text4a.value == "") {
        stacked4Row4b.innerHTML = stacked4Text4a.value;
    } else if (stacked4Text4a.value) {
        stacked4Row4b.innerHTML = stacked4Text4a.value + "&nbsp;";
    }
};
const stacked4Color4a = document.getElementById("stacked4Color4a");
stacked4Color4a.oninput = function() {
    stacked4Row4b.style.backgroundColor = stacked4Color4a.value;
};
const stacked4Size4b = document.getElementById("stacked4Size4b");
stacked4Size4b.oninput = function() {
    stacked4Row4c.style.width = ((Math.abs(stacked4Size4b.value)) * .75) + "%";
    stacked4Size4a.max = Math.abs((100 - stacked4Size4b.value - stacked4Size4c.value));
    stacked4Size4b.max = Math.abs((100 - stacked4Size4a.value - stacked4Size4c.value));
    stacked4Size4c.max = Math.abs((100 - stacked4Size4a.value - stacked4Size4b.value));
};
const stacked4Text4b = document.getElementById("stacked4Text4b");
stacked4Text4b.oninput = function() {
    if (stacked4Text4b.value == "") {
        stacked4Row4c.innerHTML = stacked4Text4b.value;
    } else if (stacked4Text4b.value) {
        stacked4Row4c.innerHTML = stacked4Text4b.value + "&nbsp;";
    }
};
const stacked4Color4b = document.getElementById("stacked4Color4b");
stacked4Color4b.oninput = function() {
    stacked4Row4c.style.backgroundColor = stacked4Color4b.value;
};
const stacked4Size4c = document.getElementById("stacked4Size4c");
stacked4Size4c.oninput = function() {
    stacked4Row4d.style.width = ((Math.abs(stacked4Size4c.value)) * .75) + "%";
    stacked4Size4a.max = Math.abs((100 - stacked4Size4b.value - stacked4Size4c.value));
    stacked4Size4b.max = Math.abs((100 - stacked4Size4a.value - stacked4Size4c.value));
    stacked4Size4c.max = Math.abs((100 - stacked4Size4a.value - stacked4Size4b.value));
};
const stacked4Text4c = document.getElementById("stacked4Text4c");
stacked4Text4c.oninput = function() {
    if (stacked4Text4c.value == "") {
        stacked4Row4d.innerHTML = stacked4Text4c.value;
    } else if (stacked4Text4c.value) {
        stacked4Row4d.innerHTML = stacked4Text4c.value + "&nbsp;";
    }
};
const stacked4Color4c = document.getElementById("stacked4Color4c");
stacked4Color4c.oninput = function() {
    stacked4Row4d.style.backgroundColor = stacked4Color4c.value;
};

// Stacked Chart IV Row 5 Customization Logic
const stacked4Text5 = document.getElementById("stacked4Text5");
stacked4Text5.oninput = function() {
    stacked4Row5a.innerHTML = stacked4Text5.value;
};
const stacked4Size5a = document.getElementById("stacked4Size5a");
stacked4Size5a.oninput = function() {
    stacked4Row5b.style.width = ((Math.abs(stacked4Size5a.value)) * .75) + "%";
    stacked4Size5a.max = Math.abs((100 - stacked4Size5b.value - stacked4Size5c.value));
    stacked4Size5b.max = Math.abs((100 - stacked4Size5a.value - stacked4Size5c.value));
    stacked4Size5c.max = Math.abs((100 - stacked4Size5a.value - stacked4Size5b.value));
};
const stacked4Text5a = document.getElementById("stacked4Text5a");
stacked4Text5a.oninput = function() {
    if (stacked4Text5a.value == "") {
        stacked4Row5b.innerHTML = stacked4Text5a.value;
    } else if (stacked4Text5a.value) {
        stacked4Row5b.innerHTML = stacked4Text5a.value + "&nbsp;";
    }
};
const stacked4Color5a = document.getElementById("stacked4Color5a");
stacked4Color5a.oninput = function() {
    stacked4Row5b.style.backgroundColor = stacked4Color5a.value;
};
const stacked4Size5b = document.getElementById("stacked4Size5b");
stacked4Size5b.oninput = function() {
    stacked4Row5c.style.width = ((Math.abs(stacked4Size5b.value)) * .75) + "%";
    stacked4Size5a.max = Math.abs((100 - stacked4Size5b.value - stacked4Size5c.value));
    stacked4Size5b.max = Math.abs((100 - stacked4Size5a.value - stacked4Size5c.value));
    stacked4Size5c.max = Math.abs((100 - stacked4Size5a.value - stacked4Size5b.value));
};
const stacked4Text5b = document.getElementById("stacked4Text5b");
stacked4Text5b.oninput = function() {
    if (stacked4Text5b.value == "") {
        stacked4Row5c.innerHTML = stacked4Text5b.value;
    } else if (stacked4Text5b.value) {
        stacked4Row5c.innerHTML = stacked4Text5b.value + "&nbsp;";
    }
};
const stacked4Color5b = document.getElementById("stacked4Color5b");
stacked4Color5b.oninput = function() {
    stacked4Row5c.style.backgroundColor = stacked4Color5b.value;
};
const stacked4Size5c = document.getElementById("stacked4Size5c");
stacked4Size5c.oninput = function() {
    stacked4Row5d.style.width = ((Math.abs(stacked4Size5c.value)) * .75) + "%";
    stacked4Size5a.max = Math.abs((100 - stacked4Size5b.value - stacked4Size5c.value));
    stacked4Size5b.max = Math.abs((100 - stacked4Size5a.value - stacked4Size5c.value));
    stacked4Size5c.max = Math.abs((100 - stacked4Size5a.value - stacked4Size5b.value));
};
const stacked4Text5c = document.getElementById("stacked4Text5c");
stacked4Text5c.oninput = function() {
    if (stacked4Text5c.value == "") {
        stacked4Row5d.innerHTML = stacked4Text5c.value;
    } else if (stacked4Text5c.value) {
        stacked4Row5d.innerHTML = stacked4Text5c.value + "&nbsp;";
    }
};
const stacked4Color5c = document.getElementById("stacked4Color5c");
stacked4Color5c.oninput = function() {
    stacked4Row5d.style.backgroundColor = stacked4Color5c.value;
};

// Stacked Chart IV Row 6 Customization Logic
const stacked4Text6 = document.getElementById("stacked4Text6");
stacked4Text6.oninput = function() {
    stacked4Row6a.innerHTML = stacked4Text6.value;
};
const stacked4Size6a = document.getElementById("stacked4Size6a");
stacked4Size6a.oninput = function() {
    stacked4Row6b.style.width = ((Math.abs(stacked4Size6a.value)) * .75) + "%";
    stacked4Size6a.max = Math.abs((100 - stacked4Size6b.value - stacked4Size6c.value));
    stacked4Size6b.max = Math.abs((100 - stacked4Size6a.value - stacked4Size6c.value));
    stacked4Size6c.max = Math.abs((100 - stacked4Size6a.value - stacked4Size6b.value));
};
const stacked4Text6a = document.getElementById("stacked4Text6a");
stacked4Text6a.oninput = function() {
    if (stacked4Text6a.value == "") {
        stacked4Row6b.innerHTML = stacked4Text6a.value;
    } else if (stacked4Text6a.value) {
        stacked4Row6b.innerHTML = stacked4Text6a.value + "&nbsp;";
    }
};
const stacked4Color6a = document.getElementById("stacked4Color6a");
stacked4Color6a.oninput = function() {
    stacked4Row6b.style.backgroundColor = stacked4Color6a.value;
};
const stacked4Size6b = document.getElementById("stacked4Size6b");
stacked4Size6b.oninput = function() {
    stacked4Row6c.style.width = ((Math.abs(stacked4Size6b.value)) * .75) + "%";
    stacked4Size6a.max = Math.abs((100 - stacked4Size6b.value - stacked4Size6c.value));
    stacked4Size6b.max = Math.abs((100 - stacked4Size6a.value - stacked4Size6c.value));
    stacked4Size6c.max = Math.abs((100 - stacked4Size6a.value - stacked4Size6b.value));
};
const stacked4Text6b = document.getElementById("stacked4Text6b");
stacked4Text6b.oninput = function() {
    if (stacked4Text6b.value == "") {
        stacked4Row6c.innerHTML = stacked4Text6b.value;
    } else if (stacked4Text6b.value) {
        stacked4Row6c.innerHTML = stacked4Text6b.value + "&nbsp;";
    }
};
const stacked4Color6b = document.getElementById("stacked4Color6b");
stacked4Color6b.oninput = function() {
    stacked4Row6c.style.backgroundColor = stacked4Color6b.value;
};
const stacked4Size6c = document.getElementById("stacked4Size6c");
stacked4Size6c.oninput = function() {
    stacked4Row6d.style.width = ((Math.abs(stacked4Size6c.value)) * .75) + "%";
    stacked4Size6a.max = Math.abs((100 - stacked4Size6b.value - stacked4Size6c.value));
    stacked4Size6b.max = Math.abs((100 - stacked4Size6a.value - stacked4Size6c.value));
    stacked4Size6c.max = Math.abs((100 - stacked4Size6a.value - stacked4Size6b.value));
};
const stacked4Text6c = document.getElementById("stacked4Text6c");
stacked4Text6c.oninput = function() {
    if (stacked4Text6c.value == "") {
        stacked4Row6d.innerHTML = stacked4Text6c.value;
    } else if (stacked4Text6c.value) {
        stacked4Row6d.innerHTML = stacked4Text6c.value + "&nbsp;";
    }
};
const stacked4Color6c = document.getElementById("stacked4Color6c");
stacked4Color6c.oninput = function() {
    stacked4Row6d.style.backgroundColor = stacked4Color6c.value;
};

// Stacked Chart IV Row 7 Customization Logic
const stacked4Text7 = document.getElementById("stacked4Text7");
stacked4Text7.oninput = function() {
    stacked4Row7a.innerHTML = stacked4Text7.value;
};
const stacked4Size7a = document.getElementById("stacked4Size7a");
stacked4Size7a.oninput = function() {
    stacked4Row7b.style.width = ((Math.abs(stacked4Size7a.value)) * .75) + "%";
    stacked4Size7a.max = Math.abs((100 - stacked4Size7b.value - stacked4Size7c.value));
    stacked4Size7b.max = Math.abs((100 - stacked4Size7a.value - stacked4Size7c.value));
    stacked4Size7c.max = Math.abs((100 - stacked4Size7a.value - stacked4Size7b.value));
};
const stacked4Text7a = document.getElementById("stacked4Text7a");
stacked4Text7a.oninput = function() {
    if (stacked4Text7a.value == "") {
        stacked4Row7b.innerHTML = stacked4Text7a.value;
    } else if (stacked4Text7a.value) {
        stacked4Row7b.innerHTML = stacked4Text7a.value + "&nbsp;";
    }
};
const stacked4Color7a = document.getElementById("stacked4Color7a");
stacked4Color7a.oninput = function() {
    stacked4Row7b.style.backgroundColor = stacked4Color7a.value;
};
const stacked4Size7b = document.getElementById("stacked4Size7b");
stacked4Size7b.oninput = function() {
    stacked4Row7c.style.width = ((Math.abs(stacked4Size7b.value)) * .75) + "%";
    stacked4Size7a.max = Math.abs((100 - stacked4Size7b.value - stacked4Size7c.value));
    stacked4Size7b.max = Math.abs((100 - stacked4Size7a.value - stacked4Size7c.value));
    stacked4Size7c.max = Math.abs((100 - stacked4Size7a.value - stacked4Size7b.value));
};
const stacked4Text7b = document.getElementById("stacked4Text7b");
stacked4Text7b.oninput = function() {
    if (stacked4Text7b.value == "") {
        stacked4Row7c.innerHTML = stacked4Text7b.value;
    } else if (stacked4Text7b.value) {
        stacked4Row7c.innerHTML = stacked4Text7b.value + "&nbsp;";
    }
};
const stacked4Color7b = document.getElementById("stacked4Color7b");
stacked4Color7b.oninput = function() {
    stacked4Row7c.style.backgroundColor = stacked4Color7b.value;
};
const stacked4Size7c = document.getElementById("stacked4Size7c");
stacked4Size7c.oninput = function() {
    stacked4Row7d.style.width = ((Math.abs(stacked4Size7c.value)) * .75) + "%";
    stacked4Size7a.max = Math.abs((100 - stacked4Size7b.value - stacked4Size7c.value));
    stacked4Size7b.max = Math.abs((100 - stacked4Size7a.value - stacked4Size7c.value));
    stacked4Size7c.max = Math.abs((100 - stacked4Size7a.value - stacked4Size7b.value));
};
const stacked4Text7c = document.getElementById("stacked4Text7c");
stacked4Text7c.oninput = function() {
    if (stacked4Text7c.value == "") {
        stacked4Row7d.innerHTML = stacked4Text7c.value;
    } else if (stacked4Text7c.value) {
        stacked4Row7d.innerHTML = stacked4Text7c.value + "&nbsp;";
    }
};
const stacked4Color7c = document.getElementById("stacked4Color7c");
stacked4Color7c.oninput = function() {
    stacked4Row7d.style.backgroundColor = stacked4Color7c.value;
};

// Stacked Chart IV Row 8 Customization Logic
const stacked4Text8 = document.getElementById("stacked4Text8");
stacked4Text8.oninput = function() {
    stacked4Row8a.innerHTML = stacked4Text8.value;
};
const stacked4Size8a = document.getElementById("stacked4Size8a");
stacked4Size8a.oninput = function() {
    stacked4Row8b.style.width = ((Math.abs(stacked4Size8a.value)) * .75) + "%";
    stacked4Size8a.max = Math.abs((100 - stacked4Size8b.value - stacked4Size8c.value));
    stacked4Size8b.max = Math.abs((100 - stacked4Size8a.value - stacked4Size8c.value));
    stacked4Size8c.max = Math.abs((100 - stacked4Size8a.value - stacked4Size8b.value));
};
const stacked4Text8a = document.getElementById("stacked4Text8a");
stacked4Text8a.oninput = function() {
    if (stacked4Text8a.value == "") {
        stacked4Row8b.innerHTML = stacked4Text8a.value;
    } else if (stacked4Text8a.value) {
        stacked4Row8b.innerHTML = stacked4Text8a.value + "&nbsp;";
    }
};
const stacked4Color8a = document.getElementById("stacked4Color8a");
stacked4Color8a.oninput = function() {
    stacked4Row8b.style.backgroundColor = stacked4Color8a.value;
};
const stacked4Size8b = document.getElementById("stacked4Size8b");
stacked4Size8b.oninput = function() {
    stacked4Row8c.style.width = ((Math.abs(stacked4Size8b.value)) * .75) + "%";
    stacked4Size8a.max = Math.abs((100 - stacked4Size8b.value - stacked4Size8c.value));
    stacked4Size8b.max = Math.abs((100 - stacked4Size8a.value - stacked4Size8c.value));
    stacked4Size8c.max = Math.abs((100 - stacked4Size8a.value - stacked4Size8b.value));
};
const stacked4Text8b = document.getElementById("stacked4Text8b");
stacked4Text8b.oninput = function() {
    if (stacked4Text8b.value == "") {
        stacked4Row8c.innerHTML = stacked4Text8b.value;
    } else if (stacked4Text8b.value) {
        stacked4Row8c.innerHTML = stacked4Text8b.value + "&nbsp;";
    }
};
const stacked4Color8b = document.getElementById("stacked4Color8b");
stacked4Color8b.oninput = function() {
    stacked4Row8c.style.backgroundColor = stacked4Color8b.value;
};
const stacked4Size8c = document.getElementById("stacked4Size8c");
stacked4Size8c.oninput = function() {
    stacked4Row8d.style.width = ((Math.abs(stacked4Size8c.value)) * .75) + "%";
    stacked4Size8a.max = Math.abs((100 - stacked4Size8b.value - stacked4Size8c.value));
    stacked4Size8b.max = Math.abs((100 - stacked4Size8a.value - stacked4Size8c.value));
    stacked4Size8c.max = Math.abs((100 - stacked4Size8a.value - stacked4Size8b.value));
};
const stacked4Text8c = document.getElementById("stacked4Text8c");
stacked4Text8c.oninput = function() {
    if (stacked4Text8c.value == "") {
        stacked4Row8d.innerHTML = stacked4Text8c.value;
    } else if (stacked4Text8c.value) {
        stacked4Row8d.innerHTML = stacked4Text8c.value + "&nbsp;";
    }
};
const stacked4Color8c = document.getElementById("stacked4Color8c");
stacked4Color8c.oninput = function() {
    stacked4Row8d.style.backgroundColor = stacked4Color8c.value;
};

// Stacked Chart IV Row 9 Customization Logic
const stacked4Text9 = document.getElementById("stacked4Text9");
stacked4Text9.oninput = function() {
    stacked4Row9a.innerHTML = stacked4Text9.value;
};
const stacked4Size9a = document.getElementById("stacked4Size9a");
stacked4Size9a.oninput = function() {
    stacked4Row9b.style.width = ((Math.abs(stacked4Size9a.value)) * .75) + "%";
    stacked4Size9a.max = Math.abs((100 - stacked4Size9b.value - stacked4Size9c.value));
    stacked4Size9b.max = Math.abs((100 - stacked4Size9a.value - stacked4Size9c.value));
    stacked4Size9c.max = Math.abs((100 - stacked4Size9a.value - stacked4Size9b.value));
};
const stacked4Text9a = document.getElementById("stacked4Text9a");
stacked4Text9a.oninput = function() {
    if (stacked4Text9a.value == "") {
        stacked4Row9b.innerHTML = stacked4Text9a.value;
    } else if (stacked4Text9a.value) {
        stacked4Row9b.innerHTML = stacked4Text9a.value + "&nbsp;";
    }
};
const stacked4Color9a = document.getElementById("stacked4Color9a");
stacked4Color9a.oninput = function() {
    stacked4Row9b.style.backgroundColor = stacked4Color9a.value;
};
const stacked4Size9b = document.getElementById("stacked4Size9b");
stacked4Size9b.oninput = function() {
    stacked4Row9c.style.width = ((Math.abs(stacked4Size9b.value)) * .75) + "%";
    stacked4Size9a.max = Math.abs((100 - stacked4Size9b.value - stacked4Size9c.value));
    stacked4Size9b.max = Math.abs((100 - stacked4Size9a.value - stacked4Size9c.value));
    stacked4Size9c.max = Math.abs((100 - stacked4Size9a.value - stacked4Size9b.value));
};
const stacked4Text9b = document.getElementById("stacked4Text9b");
stacked4Text9b.oninput = function() {
    if (stacked4Text9b.value == "") {
        stacked4Row9c.innerHTML = stacked4Text9b.value;
    } else if (stacked4Text9b.value) {
        stacked4Row9c.innerHTML = stacked4Text9b.value + "&nbsp;";
    }
};
const stacked4Color9b = document.getElementById("stacked4Color9b");
stacked4Color9b.oninput = function() {
    stacked4Row9c.style.backgroundColor = stacked4Color9b.value;
};
const stacked4Size9c = document.getElementById("stacked4Size9c");
stacked4Size9c.oninput = function() {
    stacked4Row9d.style.width = ((Math.abs(stacked4Size9c.value)) * .75) + "%";
    stacked4Size9a.max = Math.abs((100 - stacked4Size9b.value - stacked4Size9c.value));
    stacked4Size9b.max = Math.abs((100 - stacked4Size9a.value - stacked4Size9c.value));
    stacked4Size9c.max = Math.abs((100 - stacked4Size9a.value - stacked4Size9b.value));
};
const stacked4Text9c = document.getElementById("stacked4Text9c");
stacked4Text9c.oninput = function() {
    if (stacked4Text9c.value == "") {
        stacked4Row9d.innerHTML = stacked4Text9c.value;
    } else if (stacked4Text9c.value) {
        stacked4Row9d.innerHTML = stacked4Text9c.value + "&nbsp;";
    }
};
const stacked4Color9c = document.getElementById("stacked4Color9c");
stacked4Color9c.oninput = function() {
    stacked4Row9d.style.backgroundColor = stacked4Color9c.value;
};

// Stacked Chart IV Row 10 Customization Logic
const stacked4Text10 = document.getElementById("stacked4Text10");
stacked4Text10.oninput = function() {
    stacked4Row10a.innerHTML = stacked4Text10.value;
};
const stacked4Size10a = document.getElementById("stacked4Size10a");
stacked4Size10a.oninput = function() {
    stacked4Row10b.style.width = ((Math.abs(stacked4Size10a.value)) * .75) + "%";
    stacked4Size10a.max = Math.abs((100 - stacked4Size10b.value - stacked4Size10c.value));
    stacked4Size10b.max = Math.abs((100 - stacked4Size10a.value - stacked4Size10c.value));
    stacked4Size10c.max = Math.abs((100 - stacked4Size10a.value - stacked4Size10b.value));
};
const stacked4Text10a = document.getElementById("stacked4Text10a");
stacked4Text10a.oninput = function() {
    if (stacked4Text10a.value == "") {
        stacked4Row10b.innerHTML = stacked4Text10a.value;
    } else if (stacked4Text10a.value) {
        stacked4Row10b.innerHTML = stacked4Text10a.value + "&nbsp;";
    }
};
const stacked4Color10a = document.getElementById("stacked4Color10a");
stacked4Color10a.oninput = function() {
    stacked4Row10b.style.backgroundColor = stacked4Color10a.value;
};
const stacked4Size10b = document.getElementById("stacked4Size10b");
stacked4Size10b.oninput = function() {
    stacked4Row10c.style.width = ((Math.abs(stacked4Size10b.value)) * .75) + "%";
    stacked4Size10a.max = Math.abs((100 - stacked4Size10b.value - stacked4Size10c.value));
    stacked4Size10b.max = Math.abs((100 - stacked4Size10a.value - stacked4Size10c.value));
    stacked4Size10c.max = Math.abs((100 - stacked4Size10a.value - stacked4Size10b.value));
};
const stacked4Text10b = document.getElementById("stacked4Text10b");
stacked4Text10b.oninput = function() {
    if (stacked4Text10b.value == "") {
        stacked4Row10c.innerHTML = stacked4Text10b.value;
    } else if (stacked4Text10b.value) {
        stacked4Row10c.innerHTML = stacked4Text10b.value + "&nbsp;";
    }
};
const stacked4Color10b = document.getElementById("stacked4Color10b");
stacked4Color10b.oninput = function() {
    stacked4Row10c.style.backgroundColor = stacked4Color10b.value;
};
const stacked4Size10c = document.getElementById("stacked4Size10c");
stacked4Size10c.oninput = function() {
    stacked4Row10d.style.width = ((Math.abs(stacked4Size10c.value)) * .75) + "%";
    stacked4Size10a.max = Math.abs((100 - stacked4Size10b.value - stacked4Size10c.value));
    stacked4Size10b.max = Math.abs((100 - stacked4Size10a.value - stacked4Size10c.value));
    stacked4Size10c.max = Math.abs((100 - stacked4Size10a.value - stacked4Size10b.value));
};
const stacked4Text10c = document.getElementById("stacked4Text10c");
stacked4Text10c.oninput = function() {
    if (stacked4Text10c.value == "") {
        stacked4Row10d.innerHTML = stacked4Text10c.value;
    } else if (stacked4Text10c.value) {
        stacked4Row10d.innerHTML = stacked4Text10c.value + "&nbsp;";
    }
};
const stacked4Color10c = document.getElementById("stacked4Color10c");
stacked4Color10c.oninput = function() {
    stacked4Row10d.style.backgroundColor = stacked4Color10c.value;
};

// Generate Stacked Chart IV HTML Chart Logic
const stacked4Button = document.getElementById("stacked4Button");
const stacked4Output = document.getElementById("stacked4Output");
stacked4Button.addEventListener("click", () => {
    if (rowsData10.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: 22px;" height="22">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: 22px;" height="22">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: 22px;" height="22">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend5Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked4Output.innerHTML = chartCode;
    } else if (rowsData10.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: 22px;" height="22">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: 22px;" height="22">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: 22px;" height="22">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2b.style.width +'; height: 22px;" height="22">' + stacked4Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2c.style.width + '; height: 22px;" height="22">' + stacked4Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2d.style.width + '; height: 22px;" height="22">' + stacked4Row2d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend5Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked4Output.innerHTML = chartCode;
    } else if (rowsData10.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: 22px;" height="22">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: 22px;" height="22">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: 22px;" height="22">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2b.style.width +'; height: 22px;" height="22">' + stacked4Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2c.style.width + '; height: 22px;" height="22">' + stacked4Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2d.style.width + '; height: 22px;" height="22">' + stacked4Row2d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3b.style.width + '; height: 22px;" height="22">' + stacked4Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3c.style.width + '; height: 22px;" height="22">' + stacked4Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3d.style.width + '; height: 22px;" height="22">' + stacked4Row3d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend5Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked4Output.innerHTML = chartCode;
    } else if (rowsData10.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: 22px;" height="22">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: 22px;" height="22">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: 22px;" height="22">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2b.style.width +'; height: 22px;" height="22">' + stacked4Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2c.style.width + '; height: 22px;" height="22">' + stacked4Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2d.style.width + '; height: 22px;" height="22">' + stacked4Row2d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3b.style.width + '; height: 22px;" height="22">' + stacked4Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3c.style.width + '; height: 22px;" height="22">' + stacked4Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3d.style.width + '; height: 22px;" height="22">' + stacked4Row3d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4b.style.width + '; height: 22px;" height="22">' + stacked4Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4c.style.width + '; height: 22px;" height="22">' + stacked4Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4d.style.width + '; height: 22px;" height="22">' + stacked4Row4d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend5Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked4Output.innerHTML = chartCode;
    } else if (rowsData10.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: 22px;" height="22">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: 22px;" height="22">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: 22px;" height="22">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2b.style.width +'; height: 22px;" height="22">' + stacked4Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2c.style.width + '; height: 22px;" height="22">' + stacked4Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2d.style.width + '; height: 22px;" height="22">' + stacked4Row2d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3b.style.width + '; height: 22px;" height="22">' + stacked4Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3c.style.width + '; height: 22px;" height="22">' + stacked4Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3d.style.width + '; height: 22px;" height="22">' + stacked4Row3d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4b.style.width + '; height: 22px;" height="22">' + stacked4Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4c.style.width + '; height: 22px;" height="22">' + stacked4Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4d.style.width + '; height: 22px;" height="22">' + stacked4Row4d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5b.style.width + '; height: 22px;" height="22">' + stacked4Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5c.style.width + '; height: 22px;" height="22">' + stacked4Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5d.style.width + '; height: 22px;" height="22">' + stacked4Row5d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend5Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked4Output.innerHTML = chartCode;
    } else if (rowsData10.value === "6") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: 22px;" height="22">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: 22px;" height="22">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: 22px;" height="22">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2b.style.width +'; height: 22px;" height="22">' + stacked4Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2c.style.width + '; height: 22px;" height="22">' + stacked4Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2d.style.width + '; height: 22px;" height="22">' + stacked4Row2d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3b.style.width + '; height: 22px;" height="22">' + stacked4Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3c.style.width + '; height: 22px;" height="22">' + stacked4Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3d.style.width + '; height: 22px;" height="22">' + stacked4Row3d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4b.style.width + '; height: 22px;" height="22">' + stacked4Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4c.style.width + '; height: 22px;" height="22">' + stacked4Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4d.style.width + '; height: 22px;" height="22">' + stacked4Row4d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5b.style.width + '; height: 22px;" height="22">' + stacked4Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5c.style.width + '; height: 22px;" height="22">' + stacked4Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5d.style.width + '; height: 22px;" height="22">' + stacked4Row5d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6b.style.width + '; height: 22px;" height="22">' + stacked4Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6c.style.width + '; height: 22px;" height="22">' + stacked4Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6d.style.width + '; height: 22px;" height="22">' + stacked4Row6d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend5Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked4Output.innerHTML = chartCode;
    } else if (rowsData10.value === "7") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: 22px;" height="22">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: 22px;" height="22">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: 22px;" height="22">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2b.style.width +'; height: 22px;" height="22">' + stacked4Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2c.style.width + '; height: 22px;" height="22">' + stacked4Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2d.style.width + '; height: 22px;" height="22">' + stacked4Row2d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3b.style.width + '; height: 22px;" height="22">' + stacked4Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3c.style.width + '; height: 22px;" height="22">' + stacked4Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3d.style.width + '; height: 22px;" height="22">' + stacked4Row3d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4b.style.width + '; height: 22px;" height="22">' + stacked4Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4c.style.width + '; height: 22px;" height="22">' + stacked4Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4d.style.width + '; height: 22px;" height="22">' + stacked4Row4d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5b.style.width + '; height: 22px;" height="22">' + stacked4Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5c.style.width + '; height: 22px;" height="22">' + stacked4Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5d.style.width + '; height: 22px;" height="22">' + stacked4Row5d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6b.style.width + '; height: 22px;" height="22">' + stacked4Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6c.style.width + '; height: 22px;" height="22">' + stacked4Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6d.style.width + '; height: 22px;" height="22">' + stacked4Row6d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7b.style.width + '; height: 22px;" height="22">' + stacked4Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7c.style.width + '; height: 22px;" height="22">' + stacked4Row7c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7d.style.width + '; height: 22px;" height="22">' + stacked4Row7d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend5Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked4Output.innerHTML = chartCode;
    } else if (rowsData10.value === "8") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: 22px;" height="22">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: 22px;" height="22">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: 22px;" height="22">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2b.style.width +'; height: 22px;" height="22">' + stacked4Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2c.style.width + '; height: 22px;" height="22">' + stacked4Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2d.style.width + '; height: 22px;" height="22">' + stacked4Row2d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3b.style.width + '; height: 22px;" height="22">' + stacked4Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3c.style.width + '; height: 22px;" height="22">' + stacked4Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3d.style.width + '; height: 22px;" height="22">' + stacked4Row3d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4b.style.width + '; height: 22px;" height="22">' + stacked4Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4c.style.width + '; height: 22px;" height="22">' + stacked4Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4d.style.width + '; height: 22px;" height="22">' + stacked4Row4d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5b.style.width + '; height: 22px;" height="22">' + stacked4Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5c.style.width + '; height: 22px;" height="22">' + stacked4Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5d.style.width + '; height: 22px;" height="22">' + stacked4Row5d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6b.style.width + '; height: 22px;" height="22">' + stacked4Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6c.style.width + '; height: 22px;" height="22">' + stacked4Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6d.style.width + '; height: 22px;" height="22">' + stacked4Row6d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7b.style.width + '; height: 22px;" height="22">' + stacked4Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7c.style.width + '; height: 22px;" height="22">' + stacked4Row7c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7d.style.width + '; height: 22px;" height="22">' + stacked4Row7d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color8a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row8b.style.width + '; height: 22px;" height="22">' + stacked4Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color8b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row8c.style.width + '; height: 22px;" height="22">' + stacked4Row8c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color8c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row8d.style.width + '; height: 22px;" height="22">' + stacked4Row8d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend5Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked4Output.innerHTML = chartCode;
    } else if (rowsData10.value === "9") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: 22px;" height="22">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: 22px;" height="22">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: 22px;" height="22">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2b.style.width +'; height: 22px;" height="22">' + stacked4Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2c.style.width + '; height: 22px;" height="22">' + stacked4Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2d.style.width + '; height: 22px;" height="22">' + stacked4Row2d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3b.style.width + '; height: 22px;" height="22">' + stacked4Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3c.style.width + '; height: 22px;" height="22">' + stacked4Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3d.style.width + '; height: 22px;" height="22">' + stacked4Row3d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4b.style.width + '; height: 22px;" height="22">' + stacked4Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4c.style.width + '; height: 22px;" height="22">' + stacked4Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4d.style.width + '; height: 22px;" height="22">' + stacked4Row4d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5b.style.width + '; height: 22px;" height="22">' + stacked4Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5c.style.width + '; height: 22px;" height="22">' + stacked4Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5d.style.width + '; height: 22px;" height="22">' + stacked4Row5d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6b.style.width + '; height: 22px;" height="22">' + stacked4Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6c.style.width + '; height: 22px;" height="22">' + stacked4Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6d.style.width + '; height: 22px;" height="22">' + stacked4Row6d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7b.style.width + '; height: 22px;" height="22">' + stacked4Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7c.style.width + '; height: 22px;" height="22">' + stacked4Row7c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7d.style.width + '; height: 22px;" height="22">' + stacked4Row7d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color8a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row8b.style.width + '; height: 22px;" height="22">' + stacked4Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color8b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row8c.style.width + '; height: 22px;" height="22">' + stacked4Row8c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color8c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row8d.style.width + '; height: 22px;" height="22">' + stacked4Row8d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row9a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color9a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row9b.style.width + '; height: 22px;" height="22">' + stacked4Row9b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color9b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row9c.style.width + '; height: 22px;" height="22">' + stacked4Row9c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color9c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row9d.style.width + '; height: 22px;" height="22">' + stacked4Row9d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend5Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked4Output.innerHTML = chartCode;
    } else if (rowsData10.value === "10") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: 22px;" height="22">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: 22px;" height="22">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: 22px;" height="22">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2b.style.width +'; height: 22px;" height="22">' + stacked4Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2c.style.width + '; height: 22px;" height="22">' + stacked4Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2d.style.width + '; height: 22px;" height="22">' + stacked4Row2d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3b.style.width + '; height: 22px;" height="22">' + stacked4Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3c.style.width + '; height: 22px;" height="22">' + stacked4Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3d.style.width + '; height: 22px;" height="22">' + stacked4Row3d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4b.style.width + '; height: 22px;" height="22">' + stacked4Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4c.style.width + '; height: 22px;" height="22">' + stacked4Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4d.style.width + '; height: 22px;" height="22">' + stacked4Row4d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5b.style.width + '; height: 22px;" height="22">' + stacked4Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5c.style.width + '; height: 22px;" height="22">' + stacked4Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5d.style.width + '; height: 22px;" height="22">' + stacked4Row5d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6b.style.width + '; height: 22px;" height="22">' + stacked4Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6c.style.width + '; height: 22px;" height="22">' + stacked4Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6d.style.width + '; height: 22px;" height="22">' + stacked4Row6d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7b.style.width + '; height: 22px;" height="22">' + stacked4Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7c.style.width + '; height: 22px;" height="22">' + stacked4Row7c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7d.style.width + '; height: 22px;" height="22">' + stacked4Row7d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color8a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row8b.style.width + '; height: 22px;" height="22">' + stacked4Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color8b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row8c.style.width + '; height: 22px;" height="22">' + stacked4Row8c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color8c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row8d.style.width + '; height: 22px;" height="22">' + stacked4Row8d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row9a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color9a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row9b.style.width + '; height: 22px;" height="22">' + stacked4Row9b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color9b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row9c.style.width + '; height: 22px;" height="22">' + stacked4Row9c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color9c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row9d.style.width + '; height: 22px;" height="22">' + stacked4Row9d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + stacked4Row10a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color10a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row10b.style.width + '; height: 22px;" height="22">' + stacked4Row10b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color10b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row10c.style.width + '; height: 22px;" height="22">' + stacked4Row10c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color10c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row10d.style.width + '; height: 22px;" height="22">' + stacked4Row10d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: 28px;" height="28"></td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend5Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color3x.value + '; border: 1px solid #c4c4c4; color: ' + legend5Color3x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend5Text3.innerHTML + ' </div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        stacked4Output.innerHTML = chartCode;
    }
});

// Highlight stacked4Output Text
stacked4Output.addEventListener("click", () => {
    stacked4Output.select();
});