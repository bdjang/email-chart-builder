"use strict";

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

// Stacked Chart I Caption
let stacked1csCode = "";
const stacked1Legend = document.getElementsByClassName("stacked1Legend"); // Chart legend
const stacked1Cap = document.getElementById("stacked1Cap"); // Caption or chart title
const stacked1capText = document.getElementById("stacked1capText"); // Caption or chart title text
stacked1capText.oninput = function() {
    stacked1Cap.innerHTML = stacked1capText.value;
    if (stacked1capText.value == "" && stacked1subText.value == "") {
        return stacked1csCode = "";
    } else if (stacked1capText.value == "" && stacked1subText.value) {
        return stacked1csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; text-align: left;">' + stacked1Sub.innerHTML + '</td> </tr>';
    } else if (stacked1capText.value && stacked1subText.value == "") {
        return stacked1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; text-align: left;">' + stacked1Cap.innerHTML + '</caption>';
    } else if (stacked1capText.value && stacked1subText.value) {
        stacked1Cap.style.marginBottom = "4px";
        return stacked1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + stacked1Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; text-align: left;">' + stacked1Sub.innerHTML + '</td> </tr>';
    }
};
// Stacked Chart I Subtitle
const stacked1Sub = document.getElementById("stacked1Sub"); // Chart subtitle
const stacked1subText = document.getElementById("stacked1subText"); // Chart subtitle text
stacked1subText.oninput = function() {
    stacked1Sub.innerHTML = stacked1subText.value;
    if (stacked1subText.value == "" && stacked1capText.value == "") {
        return stacked1csCode = "";
    } else if (stacked1subText.value == "" && stacked1capText.value) {
        return stacked1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; text-align: left;">' + stacked1Cap.innerHTML + '</caption>';
    } else if (stacked1subText.value && stacked1capText.value == "") {
        return stacked1csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; text-align: left;">' + stacked1Sub.innerHTML + '</td> </tr>';
    } else if (stacked1subText.value && stacked1capText.value) {
        stacked1Cap.style.marginBottom = "4px";
        return stacked1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + stacked1Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; text-align: left;">' + stacked1Sub.innerHTML + '</td> </tr>';
    }
};
// Stacked Chart I Source
let stacked1srcCode = "";
const stacked1Source = document.getElementById("stacked1Source"); // Chart source
const stacked1srcText = document.getElementById("stacked1srcText"); // Chart source text
stacked1srcText.oninput = function() {
    stacked1Source.innerHTML = stacked1srcText.value;
    stacked1Source.style.paddingTop = stacked1srcText.value ? "20px" : "0";
    stacked1srcCode = stacked1srcText.value ? '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 20px; text-align: left;">' + stacked1Source.innerHTML + '</td></tr>' : "";
};

// Stacked I Chart Color Picker
const stacked1colorPickL = document.getElementById("stacked1colorPickL");
stacked1colorPickL.addEventListener("change", (evt) => {
    stacked1Row1b.style.backgroundColor = evt.detail.hex;
    stacked1Color1a.value = evt.detail.hex;
    stacked1Row2b.style.backgroundColor = evt.detail.hex;
    stacked1Color2a.value = evt.detail.hex;
    stacked1Row3b.style.backgroundColor = evt.detail.hex;
    stacked1Color3a.value = evt.detail.hex;
    stacked1Row4b.style.backgroundColor = evt.detail.hex;
    stacked1Color4a.value = evt.detail.hex;
    stacked1Row5b.style.backgroundColor = evt.detail.hex;
    stacked1Color5a.value = evt.detail.hex;
    stacked1Row6b.style.backgroundColor = evt.detail.hex;
    stacked1Color6a.value = evt.detail.hex;
    stacked1Row7b.style.backgroundColor = evt.detail.hex;
    stacked1Color7a.value = evt.detail.hex;
    stacked1Row8b.style.backgroundColor = evt.detail.hex;
    stacked1Color8a.value = evt.detail.hex;
    stacked1Row9b.style.backgroundColor = evt.detail.hex;
    stacked1Color9a.value = evt.detail.hex;
    stacked1Row10b.style.backgroundColor = evt.detail.hex;
    stacked1Color10a.value = evt.detail.hex;
    legend1Color1.style.color = evt.detail.hex;
    legend1Color1.style.backgroundColor = evt.detail.hex;
    legend1Color1.style.borderColor = evt.detail.hex;
    legend1Color1x.value = evt.detail.hex;
    legend1Color1x.value = evt.detail.hex;
    legend1Color1x.value = evt.detail.hex;
});
const stacked1colorPickR = document.getElementById("stacked1colorPickR");
stacked1colorPickR.addEventListener("change", (evt) => {
    stacked1Row1c.style.backgroundColor = evt.detail.hex;
    stacked1Color1b.value = evt.detail.hex;
    stacked1Row2c.style.backgroundColor = evt.detail.hex;
    stacked1Color2b.value = evt.detail.hex;
    stacked1Row3c.style.backgroundColor = evt.detail.hex;
    stacked1Color3b.value = evt.detail.hex;
    stacked1Row4c.style.backgroundColor = evt.detail.hex;
    stacked1Color4b.value = evt.detail.hex;
    stacked1Row5c.style.backgroundColor = evt.detail.hex;
    stacked1Color5b.value = evt.detail.hex;
    stacked1Row6c.style.backgroundColor = evt.detail.hex;
    stacked1Color6b.value = evt.detail.hex;
    stacked1Row7c.style.backgroundColor = evt.detail.hex;
    stacked1Color7b.value = evt.detail.hex;
    stacked1Row8c.style.backgroundColor = evt.detail.hex;
    stacked1Color8b.value = evt.detail.hex;
    stacked1Row9c.style.backgroundColor = evt.detail.hex;
    stacked1Color9b.value = evt.detail.hex;
    stacked1Row10c.style.backgroundColor = evt.detail.hex;
    stacked1Color10b.value = evt.detail.hex;
    legend1Color2.style.color = evt.detail.hex;
    legend1Color2.style.backgroundColor = evt.detail.hex;
    legend1Color2.style.borderColor = evt.detail.hex;
    legend1Color2x.value = evt.detail.hex;
    legend1Color2x.value = evt.detail.hex;
    legend1Color2x.value = evt.detail.hex;
});

// Stacked Chart I Text/Color Legend
let stacked1lgdCode = "";
const legend1Text1 = document.getElementById("legend1Text1");
const legend1Text1x = document.getElementById("legend1Text1x");
legend1Text1x.oninput = function() {
    legend1Text1.innerHTML = legend1Text1x.value;
    if (legend1Text1x.value == "" && legend1Text2x.value == "" && legend1Color1x.value == "" && legend1Color2x.value == "") {
        stacked1Legend[0].style.display = "none";
        return stacked1lgdCode = "";
    } else {
        stacked1Legend[0].style.display = "block";
        return stacked1lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend1Color1x.value + '; border: 1px solid ' + legend1Color1x.value + '; color: ' + legend1Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend1Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend1Color2x.value + '; border: 1px solid ' + legend1Color2x.value + '; color: ' + legend1Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend1Text2.innerHTML + '</td></tr>';
    }
};
const legend1Text2 = document.getElementById("legend1Text2");
const legend1Text2x = document.getElementById("legend1Text2x");
legend1Text2x.oninput = function() {
    legend1Text2.innerHTML = legend1Text2x.value;
    if (legend1Text1x.value == "" && legend1Text2x.value == "" && legend1Color1x.value == "" && legend1Color2x.value == "") {
        stacked1Legend[0].style.display = "none";
        return stacked1lgdCode = "";
    } else {
        stacked1Legend[0].style.display = "block";
        return stacked1lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend1Color1x.value + '; border: 1px solid ' + legend1Color1x.value + '; color: ' + legend1Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend1Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend1Color2x.value + '; border: 1px solid ' + legend1Color2x.value + '; color: ' + legend1Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend1Text2.innerHTML + '</td></tr>';
    }
};
const legend1Color1 = document.getElementById("legend1Color1");
const legend1Color1x = document.getElementById("legend1Color1x");
legend1Color1x.oninput = function() {
    legend1Color1.style.color = legend1Color1x.value;
    legend1Color1.style.backgroundColor = legend1Color1x.value;
    legend1Color1.style.borderColor = legend1Color1x.value;
    if (legend1Text1x.value == "" && legend1Text2x.value == "" && legend1Color1x.value == "" && legend1Color2x.value == "") {
        stacked1Legend[0].style.display = "none";
        return stacked1lgdCode = "";
    } else {
        stacked1Legend[0].style.display = "block";
        return stacked1lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend1Color1x.value + '; border: 1px solid ' + legend1Color1x.value + '; color: ' + legend1Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend1Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend1Color2x.value + '; border: 1px solid ' + legend1Color2x.value + '; color: ' + legend1Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend1Text2.innerHTML + '</td></tr>';
    }
};
const legend1Color2 = document.getElementById("legend1Color2");
const legend1Color2x = document.getElementById("legend1Color2x");
legend1Color2x.oninput = function() {
    legend1Color2.style.color = legend1Color2x.value;
    legend1Color2.style.backgroundColor = legend1Color2x.value;
    legend1Color2.style.borderColor = legend1Color2x.value;
    if (legend1Text1x.value == "" && legend1Text2x.value == "" && legend1Color1x.value == "" && legend1Color2x.value == "") {
        stacked1Legend[0].style.display = "none";
        return stacked1lgdCode = "";
    } else {
        stacked1Legend[0].style.display = "block";
        return stacked1lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend1Color1x.value + '; border: 1px solid ' + legend1Color1x.value + '; color: ' + legend1Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend1Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend1Color2x.value + '; border: 1px solid ' + legend1Color2x.value + '; color: ' + legend1Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend1Text2.innerHTML + '</td></tr>';
    }
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
    stacked1Row1b.innerHTML = stacked1Text1a.value ? stacked1Text1a.value + "&nbsp;" : "";
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
    stacked1Row1c.innerHTML = stacked1Text1b.value ? stacked1Text1b.value + "&nbsp;" : "";
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
    stacked1Row2b.innerHTML = stacked1Text2a.value ? stacked1Text2a.value + "&nbsp;" : "";
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
    stacked1Row2c.innerHTML = stacked1Text2b.value ? stacked1Text2b.value + "&nbsp;" : "";
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
    stacked1Row3b.innerHTML = stacked1Text3a.value ? stacked1Text3a.value + "&nbsp;" : "";
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
    stacked1Row3c.innerHTML = stacked1Text3b.value ? stacked1Text3b.value + "&nbsp;" : "";
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
    stacked1Row4b.innerHTML = stacked1Text4a.value ? stacked1Text4a.value + "&nbsp;" : "";
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
    stacked1Row4c.innerHTML = stacked1Text4b.value ? stacked1Text4b.value + "&nbsp;" : "";
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
    stacked1Row5b.innerHTML = stacked1Text5a.value ? stacked1Text5a.value + "&nbsp;" : "";
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
    stacked1Row5c.innerHTML = stacked1Text5b.value ? stacked1Text5b.value + "&nbsp;" : "";
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
    stacked1Row6b.innerHTML = stacked1Text6a.value ? stacked1Text6a.value + "&nbsp;" : "";
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
    stacked1Row6c.innerHTML = stacked1Text6b.value ? stacked1Text6b.value + "&nbsp;" : "";
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
    stacked1Row7b.innerHTML = stacked1Text7a.value ? stacked1Text7a.value + "&nbsp;" : "";
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
    stacked1Row7c.innerHTML = stacked1Text7b.value ? stacked1Text7b.value + "&nbsp;" : "";
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
    stacked1Row8b.innerHTML = stacked1Text8a.value ? stacked1Text8a.value + "&nbsp;" : "";
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
    stacked1Row8c.innerHTML = stacked1Text8b.value ? stacked1Text8b.value + "&nbsp;" : "";
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
    stacked1Row9b.innerHTML = stacked1Text9a.value ? stacked1Text9a.value + "&nbsp;" : "";
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
    stacked1Row9c.innerHTML = stacked1Text9b.value ? stacked1Text9b.value + "&nbsp;" : "";
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
    stacked1Row10b.innerHTML = stacked1Text10a.value ? stacked1Text10a.value + "&nbsp;" : "";
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
    stacked1Row10c.innerHTML = stacked1Text10b.value ? stacked1Text10b.value + "&nbsp;" : "";
};
const stacked1Color10b = document.getElementById("stacked1Color10b");
stacked1Color10b.oninput = function() {
    stacked1Row10c.style.backgroundColor = stacked1Color10b.value;
};

// Stacked Chart I Height Adjustment
const stacked1rowArray = [stacked1Row1a, stacked1Row1b, stacked1Row1c, stacked1Row1d, stacked1Row2a, stacked1Row2b, stacked1Row2c, stacked1Row2d, stacked1Row3a, stacked1Row3b, stacked1Row3c, stacked1Row3d, stacked1Row4a, stacked1Row4b, stacked1Row4c, stacked1Row4d, stacked1Row5a, stacked1Row5b, stacked1Row5c, stacked1Row5d, stacked1Row6a, stacked1Row6b, stacked1Row6c, stacked1Row6d, stacked1Row7a, stacked1Row7b, stacked1Row7c, stacked1Row7d, stacked1Row8a, stacked1Row8b, stacked1Row8c, stacked1Row8d, stacked1Row9a, stacked1Row9b, stacked1Row9c, stacked1Row9d, stacked1Row10a, stacked1Row10b, stacked1Row10c, stacked1Row10d];
const stacked1inputArray = [stacked1Text1, stacked1Text2, stacked1Text3, stacked1Text4, stacked1Text5, stacked1Text6, stacked1Text7, stacked1Text8, stacked1Text9, stacked1Text10];
function stacked1BarHeight(x) {
    for (var i = 0; i < stacked1rowArray.length; i++) {
        if (stacked1inputArray[0].value.length <= 16 && stacked1inputArray[1].value.length <= 16 && stacked1inputArray[2].value.length <= 16 && stacked1inputArray[3].value.length <= 16 && stacked1inputArray[4].value.length <= 16 && stacked1inputArray[5].value.length <= 16 && stacked1inputArray[6].value.length <= 16 && stacked1inputArray[7].value.length <= 16 && stacked1inputArray[8].value.length <= 16 && stacked1inputArray[9].value.length <= 16) {
            // All labels must be <= 16 characters for the bar heights to be set at 22px
            stacked1rowArray[i].style.height = "22px";
            stacked1rowArray[i].height = "22";
        } else if (stacked1inputArray[x].value.length < 31 && stacked1inputArray[0].value.length < 31 && stacked1inputArray[1].value.length < 31 && stacked1inputArray[2].value.length < 31 && stacked1inputArray[3].value.length < 31 && stacked1inputArray[4].value.length < 31 && stacked1inputArray[5].value.length < 31 && stacked1inputArray[6].value.length < 31 && stacked1inputArray[7].value.length < 31 && stacked1inputArray[8].value.length < 31 && stacked1inputArray[9].value.length < 31) {
            // All labels must be < 31 characters and only one needs to be > 16 to set all bar heights at 30px
            stacked1rowArray[i].style.height = "30px";
            stacked1rowArray[i].height = "30";
        } else if (stacked1inputArray[0].value.length >= 31 || stacked1inputArray[1].value.length >= 31 || stacked1inputArray[2].value.length >= 31 || stacked1inputArray[3].value.length >= 31 || stacked1inputArray[4].value.length >= 31 || stacked1inputArray[5].value.length >= 31 || stacked1inputArray[6].value.length >= 31 || stacked1inputArray[7].value.length >= 31 || stacked1inputArray[8].value.length >= 31 || stacked1inputArray[9].value.length >= 31) {
            // Only one label needs to be >= 31 characters to set all bars heights to 44px
            stacked1rowArray[i].style.height = "44px";
            stacked1rowArray[i].height = "44";
        }
    }
};
stacked1inputArray[0].addEventListener("input", () => { stacked1BarHeight(0); });
stacked1inputArray[1].addEventListener("input", () => { stacked1BarHeight(1); });
stacked1inputArray[2].addEventListener("input", () => { stacked1BarHeight(2); });
stacked1inputArray[3].addEventListener("input", () => { stacked1BarHeight(3); });
stacked1inputArray[4].addEventListener("input", () => { stacked1BarHeight(4); });
stacked1inputArray[5].addEventListener("input", () => { stacked1BarHeight(5); });
stacked1inputArray[6].addEventListener("input", () => { stacked1BarHeight(6); });
stacked1inputArray[7].addEventListener("input", () => { stacked1BarHeight(7); });
stacked1inputArray[8].addEventListener("input", () => { stacked1BarHeight(8); });
stacked1inputArray[9].addEventListener("input", () => { stacked1BarHeight(9); });

// Stacked Chart I Focus/Blur Events
stacked1capText.addEventListener("focus", () => { stacked1Cap.style.textShadow = shadowColor; });
stacked1capText.addEventListener("blur", () => { stacked1Cap.style.textShadow = "none"; });
stacked1subText.addEventListener("focus", () => { stacked1Sub.style.textShadow = shadowColor; });
stacked1subText.addEventListener("blur", () => { stacked1Sub.style.textShadow = "none"; });
stacked1srcText.addEventListener("focus", () => { stacked1Source.style.textShadow = shadowColor; });
stacked1srcText.addEventListener("blur", () => { stacked1Source.style.textShadow = "none"; });
legend1Text1x.addEventListener("focus", () => { legend1Text1.style.textShadow = shadowColor; });
legend1Text1x.addEventListener("blur", () => { legend1Text1.style.textShadow = "none"; });
legend1Color1x.addEventListener("focus", () => { legend1Color1.style.boxShadow = barColorShadow; });
legend1Color1x.addEventListener("blur", () => { legend1Color1.style.boxShadow = "none"; });
legend1Text2x.addEventListener("focus", () => { legend1Text2.style.textShadow = shadowColor; });
legend1Text2x.addEventListener("blur", () => { legend1Text2.style.textShadow = "none"; });
legend1Color2x.addEventListener("focus", () => { legend1Color2.style.boxShadow = barColorShadow; });
legend1Color2x.addEventListener("blur", () => { legend1Color2.style.boxShadow = "none"; });

// Generate Stacked Chart I HTML Chart Logic
const stacked1Weight = document.getElementById("stacked1Weight");
const stacked1Button = document.getElementById("stacked1Button");
const stacked1Output = document.getElementById("stacked1Output");
stacked1Button.addEventListener("mouseenter", () => { stacked1Output.style.opacity = ".4"; stacked1Weight.style.opacity = ".4"; } );
stacked1Button.addEventListener("mouseleave", () => { stacked1Output.style.opacity = ""; stacked1Weight.style.opacity = ""; stacked1Output.style.borderColor = ""; stacked1Weight.style.color = ""; } );
stacked1Button.addEventListener("click", () => {
    if (rowsData4.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked1csCode + stacked1lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr>' + stacked1srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked1Output.textContent = chartCode;
        stacked1Weight.textContent = Math.ceil(stacked1Output.value.length / 1024) + 'KB';
    } else if (rowsData4.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked1csCode + stacked1lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2b.value + '; border-left: ' + stacked1Row2c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr>' + stacked1srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked1Output.textContent = chartCode;
        stacked1Weight.textContent = Math.ceil(stacked1Output.value.length / 1024) + 'KB';
    } else if (rowsData4.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked1csCode + stacked1lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2b.value + '; border-left: ' + stacked1Row2c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3b.value + '; border-left: ' + stacked1Row3c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr>' + stacked1srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked1Output.textContent = chartCode;
        stacked1Weight.textContent = Math.ceil(stacked1Output.value.length / 1024) + 'KB';
    } else if (rowsData4.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked1csCode + stacked1lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2b.value + '; border-left: ' + stacked1Row2c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3b.value + '; border-left: ' + stacked1Row3c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4b.value + '; border-left: ' + stacked1Row4c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr>' + stacked1srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked1Output.textContent = chartCode;
        stacked1Weight.textContent = Math.ceil(stacked1Output.value.length / 1024) + 'KB';
    } else if (rowsData4.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked1csCode + stacked1lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2b.value + '; border-left: ' + stacked1Row2c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3b.value + '; border-left: ' + stacked1Row3c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4b.value + '; border-left: ' + stacked1Row4c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5b.value + '; border-left: ' + stacked1Row5c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr>' + stacked1srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked1Output.textContent = chartCode;
        stacked1Weight.textContent = Math.ceil(stacked1Output.value.length / 1024) + 'KB';
    } else if (rowsData4.value === "6") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked1csCode + stacked1lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2b.value + '; border-left: ' + stacked1Row2c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3b.value + '; border-left: ' + stacked1Row3c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4b.value + '; border-left: ' + stacked1Row4c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5b.value + '; border-left: ' + stacked1Row5c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6b.value + '; border-left: ' + stacked1Row6c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr>' + stacked1srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked1Output.textContent = chartCode;
        stacked1Weight.textContent = Math.ceil(stacked1Output.value.length / 1024) + 'KB';
    } else if (rowsData4.value === "7") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked1csCode + stacked1lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2b.value + '; border-left: ' + stacked1Row2c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3b.value + '; border-left: ' + stacked1Row3c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4b.value + '; border-left: ' + stacked1Row4c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5b.value + '; border-left: ' + stacked1Row5c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6b.value + '; border-left: ' + stacked1Row6c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color7a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row7b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color7b.value + '; border-left: ' + stacked1Row7c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row7c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr>' + stacked1srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked1Output.textContent = chartCode;
        stacked1Weight.textContent = Math.ceil(stacked1Output.value.length / 1024) + 'KB';
    } else if (rowsData4.value === "8") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked1csCode + stacked1lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2b.value + '; border-left: ' + stacked1Row2c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3b.value + '; border-left: ' + stacked1Row3c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4b.value + '; border-left: ' + stacked1Row4c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5b.value + '; border-left: ' + stacked1Row5c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6b.value + '; border-left: ' + stacked1Row6c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color7a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row7b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color7b.value + '; border-left: ' + stacked1Row7c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row7c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color8a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row8b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color8b.value + '; border-left: ' + stacked1Row8c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row8c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row8b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr>' + stacked1srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked1Output.textContent = chartCode;
        stacked1Weight.textContent = Math.ceil(stacked1Output.value.length / 1024) + 'KB';
    } else if (rowsData4.value === "9") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked1csCode + stacked1lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2b.value + '; border-left: ' + stacked1Row2c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3b.value + '; border-left: ' + stacked1Row3c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4b.value + '; border-left: ' + stacked1Row4c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5b.value + '; border-left: ' + stacked1Row5c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6b.value + '; border-left: ' + stacked1Row6c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color7a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row7b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color7b.value + '; border-left: ' + stacked1Row7c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row7c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color8a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row8b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color8b.value + '; border-left: ' + stacked1Row8c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row8c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row8b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row9a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color9a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row9b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row9b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color9b.value + '; border-left: ' + stacked1Row9c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row9c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row9b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr>' + stacked1srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked1Output.textContent = chartCode;
        stacked1Weight.textContent = Math.ceil(stacked1Output.value.length / 1024) + 'KB';
    } else if (rowsData4.value === "10") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked1csCode + stacked1lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color1b.value + '; border-left: ' + stacked1Row1c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row1c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color2b.value + '; border-left: ' + stacked1Row2c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row2c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color3b.value + '; border-left: ' + stacked1Row3c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row3c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color4b.value + '; border-left: ' + stacked1Row4c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row4c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color5b.value + '; border-left: ' + stacked1Row5c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row5c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color6b.value + '; border-left: ' + stacked1Row6c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row6c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color7a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row7b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color7b.value + '; border-left: ' + stacked1Row7c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row7c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color8a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row8b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color8b.value + '; border-left: ' + stacked1Row8c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row8c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row8b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row9a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color9a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row9b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row9b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color9b.value + '; border-left: ' + stacked1Row9c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row9c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row9b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row10a.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color10a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row10b.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row10b.innerHTML + '</td><td align="right" style="background-color: ' + stacked1Color10b.value + '; border-left: ' + stacked1Row10c.style.borderLeft + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked1Row10c.style.width + '; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '">' + stacked1Row10b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked1Row1a.height + 'px;" height="' + stacked1Row1a.height + '"></td></tr></table> </td></tr>' + stacked1srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked1Output.textContent = chartCode;
        stacked1Weight.textContent = Math.ceil(stacked1Output.value.length / 1024) + 'KB';
    }
    stacked1Output.style.opacity = "";
    stacked1Weight.style.opacity = "";
    stacked1Output.style.borderColor = "#166dfc";
    stacked1Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(stacked1Output.value);
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

// Stacked Chart II Caption
let stacked2csCode = "";
const stacked2Legend = document.getElementsByClassName("stacked2Legend"); // Chart legend
const stacked2Cap = document.getElementById("stacked2Cap"); // Caption or chart title
const stacked2capText = document.getElementById("stacked2capText"); // Caption or chart title text
stacked2capText.oninput = function() {
    stacked2Cap.innerHTML = stacked2capText.value;
    if (stacked2capText.value == "" && stacked2subText.value == "") {
        return stacked2csCode = "";
    } else if (stacked2capText.value == "" && stacked2subText.value) {
        return stacked2csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + stacked2Sub.innerHTML + '</td> </tr>';
    } else if (stacked2capText.value && stacked2subText.value == "") {
        return stacked2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; text-align: left;">' + stacked2Cap.innerHTML + '</caption>';
    } else if (stacked2capText.value && stacked2subText.value) {
        stacked2Cap.style.marginBottom = "4px";
        return stacked2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + stacked2Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + stacked2Sub.innerHTML + '</td> </tr>';
    }
};
// Stacked Chart II Subtitle
const stacked2Sub = document.getElementById("stacked2Sub"); // Chart subtitle
const stacked2subText = document.getElementById("stacked2subText"); // Chart subtitle text
stacked2subText.oninput = function() {
    stacked2Sub.innerHTML = stacked2subText.value;
    if (stacked2subText.value == "" && stacked2capText.value == "") {
        return stacked2csCode = "";
    } else if (stacked2subText.value == "" && stacked2capText.value) {
        return stacked2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; text-align: left;">' + stacked2Cap.innerHTML + '</caption>';
    } else if (stacked2subText.value && stacked2capText.value == "") {
        return stacked2csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + stacked2Sub.innerHTML + '</td> </tr>';
    } else if (stacked2subText.value && stacked2capText.value) {
        stacked2Cap.style.marginBottom = "4px";
        return stacked2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + stacked2Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + stacked2Sub.innerHTML + '</td> </tr>';
    }
};
// Stacked Chart II Source
let stacked2srcCode = "";
const stacked2Source = document.getElementById("stacked2Source"); // Chart source
const stacked2srcText = document.getElementById("stacked2srcText"); // Chart source text
stacked2srcText.oninput = function() {
    stacked2Source.innerHTML = stacked2srcText.value;
    stacked2Source.style.paddingTop = stacked2srcText.value ? "20px" :"0";
    stacked2srcCode = stacked2srcText.value ? '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 20px; text-align: left;">' + stacked2Source.innerHTML + '</td></tr>' : "";
};

// Stacked II Chart Color Picker
const stacked2colorPickL = document.getElementById("stacked2colorPickL");
stacked2colorPickL.addEventListener("change", (evt) => {
    stacked2Row1b.style.backgroundColor = evt.detail.hex;
    stacked2Color1a.value = evt.detail.hex;
    stacked2Row2b.style.backgroundColor = evt.detail.hex;
    stacked2Color2a.value = evt.detail.hex;
    stacked2Row3b.style.backgroundColor = evt.detail.hex;
    stacked2Color3a.value = evt.detail.hex;
    stacked2Row4b.style.backgroundColor = evt.detail.hex;
    stacked2Color4a.value = evt.detail.hex;
    stacked2Row5b.style.backgroundColor = evt.detail.hex;
    stacked2Color5a.value = evt.detail.hex;
    stacked2Row6b.style.backgroundColor = evt.detail.hex;
    stacked2Color6a.value = evt.detail.hex;
    stacked2Row7b.style.backgroundColor = evt.detail.hex;
    stacked2Color7a.value = evt.detail.hex;
    stacked2Row8b.style.backgroundColor = evt.detail.hex;
    stacked2Color8a.value = evt.detail.hex;
    stacked2Row9b.style.backgroundColor = evt.detail.hex;
    stacked2Color9a.value = evt.detail.hex;
    stacked2Row10b.style.backgroundColor = evt.detail.hex;
    stacked2Color10a.value = evt.detail.hex;
    legend2Color1.style.color = evt.detail.hex;
    legend2Color1.style.backgroundColor = evt.detail.hex;
    legend2Color1.style.borderColor = evt.detail.hex;
    legend2Color1x.value = evt.detail.hex;
    legend2Color1x.value = evt.detail.hex;
    legend2Color1x.value = evt.detail.hex;
});
const stacked2colorPickR = document.getElementById("stacked2colorPickR");
stacked2colorPickR.addEventListener("change", (evt) => {
    stacked2Row1c.style.backgroundColor = evt.detail.hex;
    stacked2Color1b.value = evt.detail.hex;
    stacked2Row2c.style.backgroundColor = evt.detail.hex;
    stacked2Color2b.value = evt.detail.hex;
    stacked2Row3c.style.backgroundColor = evt.detail.hex;
    stacked2Color3b.value = evt.detail.hex;
    stacked2Row4c.style.backgroundColor = evt.detail.hex;
    stacked2Color4b.value = evt.detail.hex;
    stacked2Row5c.style.backgroundColor = evt.detail.hex;
    stacked2Color5b.value = evt.detail.hex;
    stacked2Row6c.style.backgroundColor = evt.detail.hex;
    stacked2Color6b.value = evt.detail.hex;
    stacked2Row7c.style.backgroundColor = evt.detail.hex;
    stacked2Color7b.value = evt.detail.hex;
    stacked2Row8c.style.backgroundColor = evt.detail.hex;
    stacked2Color8b.value = evt.detail.hex;
    stacked2Row9c.style.backgroundColor = evt.detail.hex;
    stacked2Color9b.value = evt.detail.hex;
    stacked2Row10c.style.backgroundColor = evt.detail.hex;
    stacked2Color10b.value = evt.detail.hex;
    legend2Color2.style.color = evt.detail.hex;
    legend2Color2.style.backgroundColor = evt.detail.hex;
    legend2Color2.style.borderColor = evt.detail.hex;
    legend2Color2x.value = evt.detail.hex;
    legend2Color2x.value = evt.detail.hex;
    legend2Color2x.value = evt.detail.hex;
});

// Stacked Chart II Text/Color Legend
let stacked2lgdCode = "";
const legend2Text1 = document.getElementById("legend2Text1");
const legend2Text1x = document.getElementById("legend2Text1x");
legend2Text1x.oninput = function() {
    legend2Text1.innerHTML = legend2Text1x.value;
    if (legend2Text1x.value == "" && legend2Text2x.value == "" && legend2Color1x.value == "" && legend2Color2x.value == "") {
        stacked2Legend[0].style.display = "none";
        return stacked2lgdCode = "";
    } else {
        stacked2Legend[0].style.display = "block";
        return stacked2lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend2Color1x.value + '; border: 1px solid ' + legend2Color1x.value + '; color: ' + legend2Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend2Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend2Color2x.value + '; border: 1px solid ' + legend2Color2x.value + '; color: ' + legend2Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend2Text2.innerHTML + '</td></tr>';
    }
};
const legend2Text2 = document.getElementById("legend2Text2");
const legend2Text2x = document.getElementById("legend2Text2x");
legend2Text2x.oninput = function() {
    legend2Text2.innerHTML = legend2Text2x.value;
    if (legend2Text1x.value == "" && legend2Text2x.value == "" && legend2Color1x.value == "" && legend2Color2x.value == "") {
        stacked2Legend[0].style.display = "none";
        return stacked2lgdCode = "";
    } else {
        stacked2Legend[0].style.display = "block";
        return stacked2lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend2Color1x.value + '; border: 1px solid ' + legend2Color1x.value + '; color: ' + legend2Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend2Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend2Color2x.value + '; border: 1px solid ' + legend2Color2x.value + '; color: ' + legend2Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend2Text2.innerHTML + '</td></tr>';
    }
};
const legend2Color1 = document.getElementById("legend2Color1");
const legend2Color1x = document.getElementById("legend2Color1x");
legend2Color1x.oninput = function() {
    legend2Color1.style.color = legend2Color1x.value;
    legend2Color1.style.backgroundColor = legend2Color1x.value;
    legend2Color1.style.borderColor = legend2Color1x.value;
    if (legend2Text1x.value == "" && legend2Text2x.value == "" && legend2Color1x.value == "" && legend2Color2x.value == "") {
        stacked2Legend[0].style.display = "none";
        return stacked2lgdCode = "";
    } else {
        stacked2Legend[0].style.display = "block";
        return stacked2lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend2Color1x.value + '; border: 1px solid ' + legend2Color1x.value + '; color: ' + legend2Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend2Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend2Color2x.value + '; border: 1px solid ' + legend2Color2x.value + '; color: ' + legend2Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend2Text2.innerHTML + '</td></tr>';
    }
};
const legend2Color2 = document.getElementById("legend2Color2");
const legend2Color2x = document.getElementById("legend2Color2x");
legend2Color2x.oninput = function() {
    legend2Color2.style.color = legend2Color2x.value;
    legend2Color2.style.backgroundColor = legend2Color2x.value;
    legend2Color2.style.borderColor = legend2Color2x.value;
    if (legend2Text1x.value == "" && legend2Text2x.value == "" && legend2Color1x.value == "" && legend2Color2x.value == "") {
        stacked2Legend[0].style.display = "none";
        return stacked2lgdCode = "";
    } else {
        stacked2Legend[0].style.display = "block";
        return stacked2lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend2Color1x.value + '; border: 1px solid ' + legend2Color1x.value + '; color: ' + legend2Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend2Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend2Color2x.value + '; border: 1px solid ' + legend2Color2x.value + '; color: ' + legend2Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend2Text2.innerHTML + '</td></tr>';
    }
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
    stacked2Row1b.innerHTML = stacked2Text1a.value ? stacked2Text1a.value + "&nbsp;" : "";
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
    stacked2Row1c.innerHTML = stacked2Text1b.value ? stacked2Text1b.value + "&nbsp;" : "";
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
    stacked2Row2b.innerHTML = stacked2Text2a.value ? stacked2Text2a.value + "&nbsp;" : "";
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
    stacked2Row2c.innerHTML = stacked2Text2b.value ? stacked2Text2b.value + "&nbsp;" : "";
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
    stacked2Row3b.innerHTML = stacked2Text3a.value ? stacked2Text3a.value + "&nbsp;" : "";
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
    stacked2Row3c.innerHTML = stacked2Text3b.value ? stacked2Text3b.value + "&nbsp;" : "";
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
    stacked2Row4b.innerHTML = stacked2Text4a.value ? stacked2Text4a.value + "&nbsp;" : "";
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
    stacked2Row4c.innerHTML = stacked2Text4b.value ? stacked2Text4b.value + "&nbsp;" : "";
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
    stacked2Row5b.innerHTML = stacked2Text5a.value ? stacked2Text5a.value + "&nbsp;" : "";
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
    stacked2Row5c.innerHTML = stacked2Text5b.value ? stacked2Text5b.value + "&nbsp;" : "";
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
    stacked2Row6b.innerHTML = stacked2Text6a.value ? stacked2Text6a.value + "&nbsp;" : "";
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
    stacked2Row6c.innerHTML = stacked2Text6b.value ? stacked2Text6b.value + "&nbsp;" : "";
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
    stacked2Row7b.innerHTML = stacked2Text7a.value ? stacked2Text7a.value + "&nbsp;" : "";
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
    stacked2Row7c.innerHTML = stacked2Text7b.value ? stacked2Text7b.value + "&nbsp;" : "";
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
    stacked2Row8b.innerHTML = stacked2Text8a.value ? stacked2Text8a.value + "&nbsp;" : "";
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
    stacked2Row8c.innerHTML = stacked2Text8b.value ? stacked2Text8b.value + "&nbsp;" : "";
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
    stacked2Row9b.innerHTML = stacked2Text9a.value ? stacked2Text9a.value + "&nbsp;" : "";
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
    stacked2Row9c.innerHTML = stacked2Text9b.value ? stacked2Text9b.value + "&nbsp;" : "";
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
    stacked2Row10b.innerHTML = stacked2Text10a.value ? stacked2Text10a.value + "&nbsp;" : "";
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
    stacked2Row10c.innerHTML = stacked2Text10b.value ? stacked2Text10b.value + "&nbsp;" : "";
};
const stacked2Color10b = document.getElementById("stacked2Color10b");
stacked2Color10b.oninput = function() {
    stacked2Row10c.style.backgroundColor = stacked2Color10b.value;
};

// Stacked Chart II Height Adjustment
const stacked2rowArray = [stacked2Row1a, stacked2Row1b, stacked2Row1c, stacked2Row1d, stacked2Row2a, stacked2Row2b, stacked2Row2c, stacked2Row2d, stacked2Row3a, stacked2Row3b, stacked2Row3c, stacked2Row3d, stacked2Row4a, stacked2Row4b, stacked2Row4c, stacked2Row4d, stacked2Row5a, stacked2Row5b, stacked2Row5c, stacked2Row5d, stacked2Row6a, stacked2Row6b, stacked2Row6c, stacked2Row6d, stacked2Row7a, stacked2Row7b, stacked2Row7c, stacked2Row7d, stacked2Row8a, stacked2Row8b, stacked2Row8c, stacked2Row8d, stacked2Row9a, stacked2Row9b, stacked2Row9c, stacked2Row9d, stacked2Row10a, stacked2Row10b, stacked2Row10c, stacked2Row10d];
const stacked2inputArray = [stacked2Text1, stacked2Text2, stacked2Text3, stacked2Text4, stacked2Text5, stacked2Text6, stacked2Text7, stacked2Text8, stacked2Text9, stacked2Text10];
function stacked2BarHeight(x) {
    for (var i = 0; i < stacked2rowArray.length; i++) {
        if (stacked2inputArray[0].value.length <= 16 && stacked2inputArray[1].value.length <= 16 && stacked2inputArray[2].value.length <= 16 && stacked2inputArray[3].value.length <= 16 && stacked2inputArray[4].value.length <= 16 && stacked2inputArray[5].value.length <= 16 && stacked2inputArray[6].value.length <= 16 && stacked2inputArray[7].value.length <= 16 && stacked2inputArray[8].value.length <= 16 && stacked2inputArray[9].value.length <= 16) {
            // All labels must be <= 16 characters for the bar heights to be set at 31px
            stacked2rowArray[i].style.height = "31px";
            stacked2rowArray[i].height = "31";
        } else if (stacked2inputArray[x].value.length < 32 && stacked2inputArray[0].value.length < 32 && stacked2inputArray[1].value.length < 32 && stacked2inputArray[2].value.length < 32 && stacked2inputArray[3].value.length < 32 && stacked2inputArray[4].value.length < 32 && stacked2inputArray[5].value.length < 32 && stacked2inputArray[6].value.length < 32 && stacked2inputArray[7].value.length < 32 && stacked2inputArray[8].value.length < 32 && stacked2inputArray[9].value.length < 32) {
            // All labels must be < 32 characters and only one needs to be > 16 to set all bar heights at 40px
            stacked2rowArray[i].style.height = "40px";
            stacked2rowArray[i].height = "40";
        } else if (stacked2inputArray[0].value.length >= 32 || stacked2inputArray[1].value.length >= 32 || stacked2inputArray[2].value.length >= 32 || stacked2inputArray[3].value.length >= 32 || stacked2inputArray[4].value.length >= 32 || stacked2inputArray[5].value.length >= 32 || stacked2inputArray[6].value.length >= 32 || stacked2inputArray[7].value.length >= 32 || stacked2inputArray[8].value.length >= 32 || stacked2inputArray[9].value.length >= 32) {
            // Only one label needs to be >= 32 characters to set all bars heights to 54px
            stacked2rowArray[i].style.height = "54px";
            stacked2rowArray[i].height = "54";
        }
    }
};
stacked2inputArray[0].addEventListener("input", () => { stacked2BarHeight(0); });
stacked2inputArray[1].addEventListener("input", () => { stacked2BarHeight(1); });
stacked2inputArray[2].addEventListener("input", () => { stacked2BarHeight(2); });
stacked2inputArray[3].addEventListener("input", () => { stacked2BarHeight(3); });
stacked2inputArray[4].addEventListener("input", () => { stacked2BarHeight(4); });
stacked2inputArray[5].addEventListener("input", () => { stacked2BarHeight(5); });
stacked2inputArray[6].addEventListener("input", () => { stacked2BarHeight(6); });
stacked2inputArray[7].addEventListener("input", () => { stacked2BarHeight(7); });
stacked2inputArray[8].addEventListener("input", () => { stacked2BarHeight(8); });
stacked2inputArray[9].addEventListener("input", () => { stacked2BarHeight(9); });

// Stacked Chart II Focus/Blur Events
stacked2capText.addEventListener("focus", () => { stacked2Cap.style.textShadow = shadowColor; });
stacked2capText.addEventListener("blur", () => { stacked2Cap.style.textShadow = "none"; });
stacked2subText.addEventListener("focus", () => { stacked2Sub.style.textShadow = shadowColor; });
stacked2subText.addEventListener("blur", () => { stacked2Sub.style.textShadow = "none"; });
stacked2srcText.addEventListener("focus", () => { stacked2Source.style.textShadow = shadowColor; });
stacked2srcText.addEventListener("blur", () => { stacked2Source.style.textShadow = "none"; });
legend2Text1x.addEventListener("focus", () => { legend2Text1.style.textShadow = shadowColor; });
legend2Text1x.addEventListener("blur", () => { legend2Text1.style.textShadow = "none"; });
legend2Color1x.addEventListener("focus", () => { legend2Color1.style.boxShadow = barColorShadow; });
legend2Color1x.addEventListener("blur", () => { legend2Color1.style.boxShadow = "none"; });
legend2Text2x.addEventListener("focus", () => { legend2Text2.style.textShadow = shadowColor; });
legend2Text2x.addEventListener("blur", () => { legend2Text2.style.textShadow = "none"; });
legend2Color2x.addEventListener("focus", () => { legend2Color2.style.boxShadow = barColorShadow; });
legend2Color2x.addEventListener("blur", () => { legend2Color2.style.boxShadow = "none"; });

// Generate Stacked Chart II HTML Chart Logic
const stacked2Weight = document.getElementById("stacked2Weight");
const stacked2Button = document.getElementById("stacked2Button");
const stacked2Output = document.getElementById("stacked2Output");
stacked2Button.addEventListener("mouseenter", () => { stacked2Output.style.opacity = ".4"; stacked2Weight.style.opacity = ".4"; } );
stacked2Button.addEventListener("mouseleave", () => { stacked2Output.style.opacity = ""; stacked2Weight.style.opacity = ""; stacked2Output.style.borderColor = ""; stacked2Weight.style.color = ""; } );
stacked2Button.addEventListener("click", () => {
    if (rowsData5.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked2csCode + stacked2lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr>' + stacked2srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked2Output.textContent = chartCode;
        stacked2Weight.textContent = Math.ceil(stacked2Output.value.length / 1024) + 'KB';
    } else if (rowsData5.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked2csCode + stacked2lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr>' + stacked2srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked2Output.textContent = chartCode;
        stacked2Weight.textContent = Math.ceil(stacked2Output.value.length / 1024) + 'KB';
    } else if (rowsData5.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked2csCode + stacked2lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr>' + stacked2srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked2Output.textContent = chartCode;
        stacked2Weight.textContent = Math.ceil(stacked2Output.value.length / 1024) + 'KB';
    } else if (rowsData5.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked2csCode + stacked2lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr>' + stacked2srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked2Output.textContent = chartCode;
        stacked2Weight.textContent = Math.ceil(stacked2Output.value.length / 1024) + 'KB';
    } else if (rowsData5.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked2csCode + stacked2lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr>' + stacked2srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked2Output.textContent = chartCode;
        stacked2Weight.textContent = Math.ceil(stacked2Output.value.length / 1024) + 'KB';
    } else if (rowsData5.value === "6") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked2csCode + stacked2lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr>' + stacked2srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked2Output.textContent = chartCode;
        stacked2Weight.textContent = Math.ceil(stacked2Output.value.length / 1024) + 'KB';
    } else if (rowsData5.value === "7") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked2csCode + stacked2lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color7a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row7b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color7b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row7c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr>' + stacked2srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked2Output.textContent = chartCode;
        stacked2Weight.textContent = Math.ceil(stacked2Output.value.length / 1024) + 'KB';
    } else if (rowsData5.value === "8") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked2csCode + stacked2lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color7a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row7b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color7b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row7c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color8a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row8b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color8b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row8c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row8c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr>' + stacked2srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked2Output.textContent = chartCode;
        stacked2Weight.textContent = Math.ceil(stacked2Output.value.length / 1024) + 'KB';
    } else if (rowsData5.value === "9") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked2csCode + stacked2lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color7a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row7b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color7b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row7c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color8a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row8b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color8b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row8c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row8c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row9a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color9a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row9b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row9b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color9b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row9c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row9c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr>' + stacked2srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked2Output.textContent = chartCode;
        stacked2Weight.textContent = Math.ceil(stacked2Output.value.length / 1024) + 'KB';
    } else if (rowsData5.value === "10") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked2csCode + stacked2lgdCode +'<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row1c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row2c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row3c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row4c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row5c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row6c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color7a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row7b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color7b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row7c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color8a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row8b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color8b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row8c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row8c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row9a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color9a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row9b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row9b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color9b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row9c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row9c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row10a.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color10a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row10b.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row10b.innerHTML + '</td><td align="right" style="background-color: ' + stacked2Color10b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked2Row10c.style.width + '; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '">' + stacked2Row10c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: ' + stacked2Row1a.height + 'px;" height="' + stacked2Row1a.height + '"></td></tr></table> </td></tr>' + stacked2srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked2Output.textContent = chartCode;
        stacked2Weight.textContent = Math.ceil(stacked2Output.value.length / 1024) + 'KB';
    }
    stacked2Output.style.opacity = "";
    stacked2Weight.style.opacity = "";
    stacked2Output.style.borderColor = "#166dfc";
    stacked2Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(stacked2Output.value);
});

// Highlight stacked2Output Text
stacked2Output.addEventListener("click", () => {
    stacked2Output.select();
});