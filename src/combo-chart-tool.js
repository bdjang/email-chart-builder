import { botSpace } from './index.js';
import { shadowColor } from './index.js';
import { barSizeShadow } from './index.js';
import { barColorShadow } from './index.js';

// Combo Chart I Row Selection
const combo1Bars = document.getElementsByClassName("combo1Bars");
const combo1Controls = document.getElementsByClassName("combo1Controls");
const rowsData7 = document.getElementById("rowsData7");
rowsData7.addEventListener("change", () => {
    for (var i = 0; i < combo1Controls.length; i++) {
        combo1Controls[i].style.display = "none";
        combo1Bars[i].style.display = "none";
        for (var x = 0; x < rowsData7.value; x++) {
            combo1Controls[x].style.display = "block";
            combo1Bars[x].style.display = "block";
        }
    }
});

// Combo Chart I Add Divider
const combo1DivNodes1 = document.querySelectorAll("tr.combo1Bars");
const combo1Div = document.getElementById("combo1Div");
window.addEventListener("load", () => { // Adds "none" to border-top on load
    for (var i = 1; i < combo1DivNodes1.length; i++) {
        combo1DivNodes1[i].firstElementChild.style.borderTop = "none";
    }
});
let combo1borderTop = "";
combo1Div.addEventListener("click", () => { // Toggles chart data bar dividers in chart preview
    for (var i = 1; i < combo1DivNodes1.length; i++) {
        combo1DivNodes1[i].firstElementChild.style.borderTop = combo1Div.checked ? "1px solid #e3e3e3" : "none";
    }
    combo1borderTop = combo1Div.checked ? "border-top: 1px solid #e3e3e3; " : ""; // Adds border-top to output code if checked
});

// Combo Chart I Caption
let combo1csCode = "";
const combo1Legend = document.getElementsByClassName("combo1Legend"); // Chart legend
const combo1Cap = document.getElementById("combo1Cap"); // Caption or chart title
const combo1capText = document.getElementById("combo1capText"); // Caption or chart title text
combo1capText.oninput = function() {
    combo1Cap.innerHTML = combo1capText.value;
    if (combo1capText.value == "" && combo1subText.value == "") {
        return combo1csCode = "";
    } else if (combo1capText.value == "" && combo1subText.value) {
        return combo1csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; text-align: left;">' + combo1Sub.innerHTML + '</td> </tr>';
    } else if (combo1capText.value && combo1subText.value == "") {
        return combo1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; text-align: left;">' + combo1Cap.innerHTML + '</caption>';
    } else if (combo1capText.value && combo1subText.value) {
        combo1Cap.style.marginBottom = "4px";
        return combo1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + combo1Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; text-align: left;">' + combo1Sub.innerHTML + '</td> </tr>';
    }
};
// Combo Chart I Subtitle
const combo1Sub = document.getElementById("combo1Sub"); // Chart subtitle
const combo1subText = document.getElementById("combo1subText"); // Chart subtitle text
combo1subText.oninput = function() {
    combo1Sub.innerHTML = combo1subText.value;
    if (combo1subText.value == "" && combo1capText.value == "") {
        return combo1csCode = "";
    } else if (combo1subText.value == "" && combo1capText.value) {
        combo1Cap.style.marginBottom = "0";
        return combo1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; text-align: left;">' + combo1Cap.innerHTML + '</caption>';
    } else if (combo1subText.value && combo1capText.value == "") {
        return combo1csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; text-align: left;">' + combo1Sub.innerHTML + '</td> </tr>';
    } else if (combo1subText.value && combo1capText.value) {
        combo1Cap.style.marginBottom = "4px";
        return combo1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + combo1Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; text-align: left;">' + combo1Sub.innerHTML + '</td> </tr>';
    }
};
// Combo Chart I Source
let combo1srcCode = "";
const combo1Source = document.getElementById("combo1Source"); // Chart source
const combo1srcText = document.getElementById("combo1srcText"); // Chart source text
combo1srcText.oninput = function() {
    combo1Source.innerHTML = combo1srcText.value;
    combo1Source.style.paddingTop = combo1srcText.value ? "10px" : "0";
    combo1srcCode = combo1srcText.value ? '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 10px; text-align: left;">' + combo1Source.innerHTML + '</td></tr>' : "";
};

// Combo I Chart Color Picker
const combo1colorPickT = document.getElementById("combo1colorPickT");
combo1colorPickT.addEventListener("change", (evt) => {
    combo1Row1b.style.backgroundColor = evt.detail.hex;
    combo1Color1t.value = evt.detail.hex;
    combo1Row2b.style.backgroundColor = evt.detail.hex;
    combo1Color2t.value = evt.detail.hex;
    combo1Row3b.style.backgroundColor = evt.detail.hex;
    combo1Color3t.value = evt.detail.hex;
    combo1Row4b.style.backgroundColor = evt.detail.hex;
    combo1Color4t.value = evt.detail.hex;
    combo1Row5b.style.backgroundColor = evt.detail.hex;
    combo1Color5t.value = evt.detail.hex;
    combo1Row6b.style.backgroundColor = evt.detail.hex;
    combo1Color6t.value = evt.detail.hex;
    legend4Color1.style.color = evt.detail.hex;
    legend4Color1.style.backgroundColor = evt.detail.hex;
    legend4Color1.style.borderColor = evt.detail.hex;
    legend4Color1x.value = evt.detail.hex;
    legend4Color1x.value = evt.detail.hex;
    legend4Color1x.value = evt.detail.hex;
});
const combo1colorPickB = document.getElementById("combo1colorPickB");
combo1colorPickB.addEventListener("change", (evt) => {
    combo1Row1y.style.backgroundColor = evt.detail.hex;
    combo1Color1b.value = evt.detail.hex;
    combo1Row2y.style.backgroundColor = evt.detail.hex;
    combo1Color2b.value = evt.detail.hex;
    combo1Row3y.style.backgroundColor = evt.detail.hex;
    combo1Color3b.value = evt.detail.hex;
    combo1Row4y.style.backgroundColor = evt.detail.hex;
    combo1Color4b.value = evt.detail.hex;
    combo1Row5y.style.backgroundColor = evt.detail.hex;
    combo1Color5b.value = evt.detail.hex;
    combo1Row6y.style.backgroundColor = evt.detail.hex;
    combo1Color6b.value = evt.detail.hex;
    legend4Color2.style.color = evt.detail.hex;
    legend4Color2.style.backgroundColor = evt.detail.hex;
    legend4Color2.style.borderColor = evt.detail.hex;
    legend4Color2x.value = evt.detail.hex;
    legend4Color2x.value = evt.detail.hex;
    legend4Color2x.value = evt.detail.hex;
});

// Combo Chart I Text/Color Legend
let combo1lgdCode = "";
const legend4Text1 = document.getElementById("legend4Text1");
const legend4Text1x = document.getElementById("legend4Text1x");
legend4Text1x.oninput = function() {
    legend4Text1.innerHTML = legend4Text1x.value;
    if (legend4Text1x.value == "" && legend4Text2x.value == "" && legend4Color1x.value == "" && legend4Color2x.value == "") {
        combo1Legend[0].style.display = "none";
        return combo1lgdCode = "";
    } else {
        combo1Legend[0].style.display = "block";
        return combo1lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend4Color1x.value + '; border: 1px solid ' + legend4Color1x.value + '; color: ' + legend4Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend4Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend4Color2x.value + '; border: 1px solid ' + legend4Color2x.value + '; color: ' + legend4Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend4Text2.innerHTML + '</td></tr>';
    }
};
const legend4Text2 = document.getElementById("legend4Text2");
const legend4Text2x = document.getElementById("legend4Text2x");
legend4Text2x.oninput = function() {
    legend4Text2.innerHTML = legend4Text2x.value;
    if (legend4Text1x.value == "" && legend4Text2x.value == "" && legend4Color1x.value == "" && legend4Color2x.value == "") {
        combo1Legend[0].style.display = "none";
        return combo1lgdCode = "";
    } else {
        combo1Legend[0].style.display = "block";
        return combo1lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend4Color1x.value + '; border: 1px solid ' + legend4Color1x.value + '; color: ' + legend4Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend4Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend4Color2x.value + '; border: 1px solid ' + legend4Color2x.value + '; color: ' + legend4Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend4Text2.innerHTML + '</td></tr>';
    }
};
const legend4Color1 = document.getElementById("legend4Color1");
const legend4Color1x = document.getElementById("legend4Color1x");
legend4Color1x.oninput = function() {
    legend4Color1.style.color = legend4Color1x.value;
    legend4Color1.style.backgroundColor = legend4Color1x.value;
    legend4Color1.style.borderColor = legend4Color1x.value;
    if (legend4Text1x.value == "" && legend4Text2x.value == "" && legend4Color1x.value == "" && legend4Color2x.value == "") {
        combo1Legend[0].style.display = "none";
        return combo1lgdCode = "";
    } else {
        combo1Legend[0].style.display = "block";
        return combo1lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend4Color1x.value + '; border: 1px solid ' + legend4Color1x.value + '; color: ' + legend4Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend4Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend4Color2x.value + '; border: 1px solid ' + legend4Color2x.value + '; color: ' + legend4Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend4Text2.innerHTML + '</td></tr>';
    }
};
const legend4Color2 = document.getElementById("legend4Color2");
const legend4Color2x = document.getElementById("legend4Color2x");
legend4Color2x.oninput = function() {
    legend4Color2.style.color = legend4Color2x.value;
    legend4Color2.style.backgroundColor = legend4Color2x.value;
    legend4Color2.style.borderColor = legend4Color2x.value;
    if (legend4Text1x.value == "" && legend4Text2x.value == "" && legend4Color1x.value == "" && legend4Color2x.value == "") {
        combo1Legend[0].style.display = "none";
        return combo1lgdCode = "";
    } else {
        combo1Legend[0].style.display = "block";
        return combo1lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend4Color1x.value + '; border: 1px solid ' + legend4Color1x.value + '; color: ' + legend4Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend4Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend4Color2x.value + '; border: 1px solid ' + legend4Color2x.value + '; color: ' + legend4Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend4Text2.innerHTML + '</td></tr>';
    }
};

// Combo Chart I Row Customization Logic
const combo1Row1a = document.getElementById("combo1Row1a");
const combo1Row1b = document.getElementById("combo1Row1b");
const combo1Row1c = document.getElementById("combo1Row1c");
const combo1Row1y = document.getElementById("combo1Row1y");
const combo1Row1z = document.getElementById("combo1Row1z");
const combo1Row2a = document.getElementById("combo1Row2a");
const combo1Row2b = document.getElementById("combo1Row2b");
const combo1Row2c = document.getElementById("combo1Row2c");
const combo1Row2y = document.getElementById("combo1Row2y");
const combo1Row2z = document.getElementById("combo1Row2z");
const combo1Row3a = document.getElementById("combo1Row3a");
const combo1Row3b = document.getElementById("combo1Row3b");
const combo1Row3c = document.getElementById("combo1Row3c");
const combo1Row3y = document.getElementById("combo1Row3y");
const combo1Row3z = document.getElementById("combo1Row3z");
const combo1Row4a = document.getElementById("combo1Row4a");
const combo1Row4b = document.getElementById("combo1Row4b");
const combo1Row4c = document.getElementById("combo1Row4c");
const combo1Row4y = document.getElementById("combo1Row4y");
const combo1Row4z = document.getElementById("combo1Row4z");
const combo1Row5a = document.getElementById("combo1Row5a");
const combo1Row5b = document.getElementById("combo1Row5b");
const combo1Row5c = document.getElementById("combo1Row5c");
const combo1Row5y = document.getElementById("combo1Row5y");
const combo1Row5z = document.getElementById("combo1Row5z");
const combo1Row6a = document.getElementById("combo1Row6a");
const combo1Row6b = document.getElementById("combo1Row6b");
const combo1Row6c = document.getElementById("combo1Row6c");
const combo1Row6y = document.getElementById("combo1Row6y");
const combo1Row6z = document.getElementById("combo1Row6z");

// Row 1 Customization Logic
const combo1Text1 = document.getElementById("combo1Text1");
combo1Text1.oninput = function() {
    if (combo1Text1.value == "") {
        combo1Row1a.innerHTML = combo1Text1.value;
    } else if (combo1Text1.value) {
        combo1Row1a.innerHTML = combo1Text1.value;
    }
};
const combo1Size1t = document.getElementById("combo1Size1t");
combo1Size1t.oninput = function() {
    combo1Row1b.style.width = ((Math.abs(combo1Size1t.value)) * .75) + "%";
    combo1Row1c.style.width = ((75 - (Math.abs(combo1Size1t.value)) * .75)) + "%";
};
const combo1Text1t = document.getElementById("combo1Text1t");
combo1Text1t.oninput = function() {
    combo1Row1c.innerHTML = combo1Text1t.value ? "&nbsp;" + combo1Text1t.value : "";
};
const combo1Label1t = document.getElementById("combo1Label1t");
combo1Label1t.addEventListener("click", () => {
    if (combo1Text1t.value == "") {
        combo1Row1b.innerHTML = "";
        combo1Row1c.innerHTML = "";
    } else if (combo1Text1t.value) {
        combo1Row1b.innerHTML = combo1Text1t.value + "&nbsp;";
        combo1Text1t.value = "";
        combo1Row1c.innerHTML = "";
    }
});
const combo1Color1t = document.getElementById("combo1Color1t");
combo1Color1t.oninput = function() {
    combo1Row1b.style.backgroundColor = combo1Color1t.value;
};
const combo1Size1b = document.getElementById("combo1Size1b");
combo1Size1b.oninput = function() {
    combo1Row1y.style.width = ((Math.abs(combo1Size1b.value)) * .75) + "%";
    combo1Row1z.style.width = ((75 - (Math.abs(combo1Size1b.value)) * .75)) + "%";
};
const combo1Text1b = document.getElementById("combo1Text1b");
combo1Text1b.oninput = function() {
    combo1Row1z.innerHTML = combo1Text1b.value ? "&nbsp;" + combo1Text1b.value : "";
};
const combo1Label1b = document.getElementById("combo1Label1b");
combo1Label1b.addEventListener("click", () => {
    if (combo1Text1b.value == "") {
        combo1Row1y.innerHTML = "";
        combo1Row1z.innerHTML = "";
    } else if (combo1Text1b.value) {
        combo1Row1y.innerHTML = combo1Text1b.value + "&nbsp;";
        combo1Text1b.value = "";
        combo1Row1z.innerHTML = "";
    }
});
const combo1Color1b = document.getElementById("combo1Color1b");
combo1Color1b.oninput = function() {
    combo1Row1y.style.backgroundColor = combo1Color1b.value;
};

// Row 2 Customization Logic
const combo1Text2 = document.getElementById("combo1Text2");
combo1Text2.oninput = function() {
    if (combo1Text2.value == "") {
        combo1Row2a.innerHTML = combo1Text2.value;
    } else if (combo1Text2.value) {
        combo1Row2a.innerHTML = combo1Text2.value;
    }
};
const combo1Size2t = document.getElementById("combo1Size2t");
combo1Size2t.oninput = function() {
    combo1Row2b.style.width = ((Math.abs(combo1Size2t.value)) * .75) + "%";
    combo1Row2c.style.width = ((75 - (Math.abs(combo1Size2t.value)) * .75)) + "%";
};
const combo1Text2t = document.getElementById("combo1Text2t");
combo1Text2t.oninput = function() {
    combo1Row2c.innerHTML = combo1Text2t.value ? "&nbsp;" + combo1Text2t.value : "";
};
const combo1Label2t = document.getElementById("combo1Label2t");
combo1Label2t.addEventListener("click", () => {
    if (combo1Text2t.value == "") {
        combo1Row2b.innerHTML = "";
        combo1Row2c.innerHTML = "";
    } else if (combo1Text2t.value) {
        combo1Row2b.innerHTML = combo1Text2t.value + "&nbsp;";
        combo1Text2t.value = "";
        combo1Row2c.innerHTML = "";
    }
});
const combo1Color2t = document.getElementById("combo1Color2t");
combo1Color2t.oninput = function() {
    combo1Row2b.style.backgroundColor = combo1Color2t.value;
};
const combo1Size2b = document.getElementById("combo1Size2b");
combo1Size2b.oninput = function() {
    combo1Row2y.style.width = ((Math.abs(combo1Size2b.value)) * .75) + "%";
    combo1Row2z.style.width = ((75 - (Math.abs(combo1Size2b.value)) * .75)) + "%";
};
const combo1Text2b = document.getElementById("combo1Text2b");
combo1Text2b.oninput = function() {
    combo1Row2z.innerHTML = combo1Text2b.value ? "&nbsp;" + combo1Text2b.value : "";
};
const combo1Label2b = document.getElementById("combo1Label2b");
combo1Label2b.addEventListener("click", () => {
    if (combo1Text2b.value == "") {
        combo1Row2y.innerHTML = "";
        combo1Row2z.innerHTML = "";
    } else if (combo1Text2b.value) {
        combo1Row2y.innerHTML = combo1Text2b.value + "&nbsp;";
        combo1Text2b.value = "";
        combo1Row2z.innerHTML = "";
    }
});
const combo1Color2b = document.getElementById("combo1Color2b");
combo1Color2b.oninput = function() {
    combo1Row2y.style.backgroundColor = combo1Color2b.value;
};

// Row 3 Customization Logic
const combo1Text3 = document.getElementById("combo1Text3");
combo1Text3.oninput = function() {
    if (combo1Text3.value == "") {
        combo1Row3a.innerHTML = combo1Text3.value;
    } else if (combo1Text3.value) {
        combo1Row3a.innerHTML = combo1Text3.value;
    }
};
const combo1Size3t = document.getElementById("combo1Size3t");
combo1Size3t.oninput = function() {
    combo1Row3b.style.width = ((Math.abs(combo1Size3t.value)) * .75) + "%";
    combo1Row3c.style.width = ((75 - (Math.abs(combo1Size3t.value)) * .75)) + "%";
};
const combo1Text3t = document.getElementById("combo1Text3t");
combo1Text3t.oninput = function() {
    combo1Row3c.innerHTML = combo1Text3t.value ? "&nbsp;" + combo1Text3t.value : "";
};
const combo1Label3t = document.getElementById("combo1Label3t");
combo1Label3t.addEventListener("click", () => {
    if (combo1Text3t.value == "") {
        combo1Row3b.innerHTML = "";
        combo1Row3c.innerHTML = "";
    } else if (combo1Text3t.value) {
        combo1Row3b.innerHTML = combo1Text3t.value + "&nbsp;";
        combo1Text3t.value = "";
        combo1Row3c.innerHTML = "";
    }
});
const combo1Color3t = document.getElementById("combo1Color3t");
combo1Color3t.oninput = function() {
    combo1Row3b.style.backgroundColor = combo1Color3t.value;
};
const combo1Size3b = document.getElementById("combo1Size3b");
combo1Size3b.oninput = function() {
    combo1Row3y.style.width = ((Math.abs(combo1Size3b.value)) * .75) + "%";
    combo1Row3z.style.width = ((75 - (Math.abs(combo1Size3b.value)) * .75)) + "%";
};
const combo1Text3b = document.getElementById("combo1Text3b");
combo1Text3b.oninput = function() {
    combo1Row3z.innerHTML = combo1Text3b.value ? "&nbsp;" + combo1Text3b.value : "";
};
const combo1Label3b = document.getElementById("combo1Label3b");
combo1Label3b.addEventListener("click", () => {
    if (combo1Text3b.value == "") {
        combo1Row3y.innerHTML = "";
        combo1Row3z.innerHTML = "";
    } else if (combo1Text3b.value) {
        combo1Row3y.innerHTML = combo1Text3b.value + "&nbsp;";
        combo1Text3b.value = "";
        combo1Row3z.innerHTML = "";
    }
});
const combo1Color3b = document.getElementById("combo1Color3b");
combo1Color3b.oninput = function() {
    combo1Row3y.style.backgroundColor = combo1Color3b.value;
};

// Row 4 Customization Logic
const combo1Text4 = document.getElementById("combo1Text4");
combo1Text4.oninput = function() {
    if (combo1Text4.value == "") {
        combo1Row4a.innerHTML = combo1Text4.value;
    } else if (combo1Text4.value) {
        combo1Row4a.innerHTML = combo1Text4.value;
    }
};
const combo1Size4t = document.getElementById("combo1Size4t");
combo1Size4t.oninput = function() {
    combo1Row4b.style.width = ((Math.abs(combo1Size4t.value)) * .75) + "%";
    combo1Row4c.style.width = ((75 - (Math.abs(combo1Size4t.value)) * .75)) + "%";
};
const combo1Text4t = document.getElementById("combo1Text4t");
combo1Text4t.oninput = function() {
    combo1Row4c.innerHTML = combo1Text4t.value ? "&nbsp;" + combo1Text4t.value : "";
};
const combo1Label4t = document.getElementById("combo1Label4t");
combo1Label4t.addEventListener("click", () => {
    if (combo1Text4t.value == "") {
        combo1Row4b.innerHTML = "";
        combo1Row4c.innerHTML = "";
    } else if (combo1Text4t.value) {
        combo1Row4b.innerHTML = combo1Text4t.value + "&nbsp;";
        combo1Text4t.value = "";
        combo1Row4c.innerHTML = "";
    }
});
const combo1Color4t = document.getElementById("combo1Color4t");
combo1Color4t.oninput = function() {
    combo1Row4b.style.backgroundColor = combo1Color4t.value;
};
const combo1Size4b = document.getElementById("combo1Size4b");
combo1Size4b.oninput = function() {
    combo1Row4y.style.width = ((Math.abs(combo1Size4b.value)) * .75) + "%";
    combo1Row4z.style.width = ((75 - (Math.abs(combo1Size4b.value)) * .75)) + "%";
};
const combo1Text4b = document.getElementById("combo1Text4b");
combo1Text4b.oninput = function() {
    combo1Row4z.innerHTML = combo1Text4b.value ? "&nbsp;" + combo1Text4b.value : "";
};
const combo1Label4b = document.getElementById("combo1Label4b");
combo1Label4b.addEventListener("click", () => {
    if (combo1Text4b.value == "") {
        combo1Row4y.innerHTML = "";
        combo1Row4z.innerHTML = "";
    } else if (combo1Text4b.value) {
        combo1Row4y.innerHTML = combo1Text4b.value + "&nbsp;";
        combo1Text4b.value = "";
        combo1Row4z.innerHTML = "";
    }
});
const combo1Color4b = document.getElementById("combo1Color4b");
combo1Color4b.oninput = function() {
    combo1Row4y.style.backgroundColor = combo1Color4b.value;
};

// Row 5 Customization Logic
const combo1Text5 = document.getElementById("combo1Text5");
combo1Text5.oninput = function() {
    if (combo1Text5.value == "") {
        combo1Row5a.innerHTML = combo1Text5.value;
    } else if (combo1Text5.value) {
        combo1Row5a.innerHTML = combo1Text5.value;
    }
};
const combo1Size5t = document.getElementById("combo1Size5t");
combo1Size5t.oninput = function() {
    combo1Row5b.style.width = ((Math.abs(combo1Size5t.value)) * .75) + "%";
    combo1Row5c.style.width = ((75 - (Math.abs(combo1Size5t.value)) * .75)) + "%";
};
const combo1Text5t = document.getElementById("combo1Text5t");
combo1Text5t.oninput = function() {
    combo1Row5c.innerHTML = combo1Text5t.value ? "&nbsp;" + combo1Text5t.value : "";
};
const combo1Label5t = document.getElementById("combo1Label5t");
combo1Label5t.addEventListener("click", () => {
    if (combo1Text5t.value == "") {
        combo1Row5b.innerHTML = "";
        combo1Row5c.innerHTML = "";
    } else if (combo1Text5t.value) {
        combo1Row5b.innerHTML = combo1Text5t.value + "&nbsp;";
        combo1Text5t.value = "";
        combo1Row5c.innerHTML = "";
    }
});
const combo1Color5t = document.getElementById("combo1Color5t");
combo1Color5t.oninput = function() {
    combo1Row5b.style.backgroundColor = combo1Color5t.value;
};
const combo1Size5b = document.getElementById("combo1Size5b");
combo1Size5b.oninput = function() {
    combo1Row5y.style.width = ((Math.abs(combo1Size5b.value)) * .75) + "%";
    combo1Row5z.style.width = ((75 - (Math.abs(combo1Size5b.value)) * .75)) + "%";
};
const combo1Text5b = document.getElementById("combo1Text5b");
combo1Text5b.oninput = function() {
    combo1Row5z.innerHTML = combo1Text5b.value ? "&nbsp;" + combo1Text5b.value : "";
};
const combo1Label5b = document.getElementById("combo1Label5b");
combo1Label5b.addEventListener("click", () => {
    if (combo1Text5b.value == "") {
        combo1Row5y.innerHTML = "";
        combo1Row5z.innerHTML = "";
    } else if (combo1Text5b.value) {
        combo1Row5y.innerHTML = combo1Text5b.value + "&nbsp;";
        combo1Text5b.value = "";
        combo1Row5z.innerHTML = "";
    }
});
const combo1Color5b = document.getElementById("combo1Color5b");
combo1Color5b.oninput = function() {
    combo1Row5y.style.backgroundColor = combo1Color5b.value;
};

// Row 6 Customization Logic
const combo1Text6 = document.getElementById("combo1Text6");
combo1Text6.oninput = function() {
    if (combo1Text6.value == "") {
        combo1Row6a.innerHTML = combo1Text6.value;
    } else if (combo1Text6.value) {
        combo1Row6a.innerHTML = combo1Text6.value;
    }
};
const combo1Size6t = document.getElementById("combo1Size6t");
combo1Size6t.oninput = function() {
    combo1Row6b.style.width = ((Math.abs(combo1Size6t.value)) * .75) + "%";
    combo1Row6c.style.width = ((75 - (Math.abs(combo1Size6t.value)) * .75)) + "%";
};
const combo1Text6t = document.getElementById("combo1Text6t");
combo1Text6t.oninput = function() {
    combo1Row6c.innerHTML = combo1Text6t.value ? "&nbsp;" + combo1Text6t.value : "";
};
const combo1Label6t = document.getElementById("combo1Label6t");
combo1Label6t.addEventListener("click", () => {
    if (combo1Text6t.value == "") {
        combo1Row6b.innerHTML = "";
        combo1Row6c.innerHTML = "";
    } else if (combo1Text6t.value) {
        combo1Row6b.innerHTML = combo1Text6t.value + "&nbsp;";
        combo1Text6t.value = "";
        combo1Row6c.innerHTML = "";
    }
});
const combo1Color6t = document.getElementById("combo1Color6t");
combo1Color6t.oninput = function() {
    combo1Row6b.style.backgroundColor = combo1Color6t.value;
};
const combo1Size6b = document.getElementById("combo1Size6b");
combo1Size6b.oninput = function() {
    combo1Row6y.style.width = ((Math.abs(combo1Size6b.value)) * .75) + "%";
    combo1Row6z.style.width = ((75 - (Math.abs(combo1Size6t.value)) * .75)) + "%";
};
const combo1Text6b = document.getElementById("combo1Text6b");
combo1Text6b.oninput = function() {
    combo1Row6z.innerHTML = combo1Text6b.value ? "&nbsp;" + combo1Text6b.value : "";
};
const combo1Label6b = document.getElementById("combo1Label6b");
combo1Label6b.addEventListener("click", () => {
    if (combo1Text6b.value == "") {
        combo1Row6y.innerHTML = "";
        combo1Row6z.innerHTML = "";
    } else if (combo1Text6b.value) {
        combo1Row6y.innerHTML = combo1Text6b.value + "&nbsp;";
        combo1Text6b.value = "";
        combo1Row6z.innerHTML = "";
    }
});
const combo1Color6b = document.getElementById("combo1Color6b");
combo1Color6b.oninput = function() {
    combo1Row6y.style.backgroundColor = combo1Color6b.value;
};

// Combo Chart I Height Adjustment
const combo1rowArray = [combo1Row1a, combo1Row1b, combo1Row1c, combo1Row1x, combo1Row1y, combo1Row1z, combo1Row2a, combo1Row2b, combo1Row2c, combo1Row2x, combo1Row2y, combo1Row2z, combo1Row3a, combo1Row3b, combo1Row3c, combo1Row3x, combo1Row3y, combo1Row3z, combo1Row4a, combo1Row4b, combo1Row4c, combo1Row4x, combo1Row4y, combo1Row4z, combo1Row5a, combo1Row5b, combo1Row5c, combo1Row5x, combo1Row5y, combo1Row5z, combo1Row6a, combo1Row6b, combo1Row6c, combo1Row6x, combo1Row6y, combo1Row6z];
const combo1inputArray = [combo1Text1, combo1Text2, combo1Text3, combo1Text4, combo1Text5, combo1Text6];
function combo1BarHeight(x) {
    for (var i = 0; i < combo1rowArray.length; i++) {
        if (combo1inputArray[0].value.length <= 16 && combo1inputArray[1].value.length <= 16 && combo1inputArray[2].value.length <= 16 && combo1inputArray[3].value.length <= 16 && combo1inputArray[4].value.length <= 16 && combo1inputArray[5].value.length <= 16) {
            // All labels must be <= 16 characters for the bar heights to be set at 22px
            combo1rowArray[i].style.height = "22px";
            combo1rowArray[i].height = "22";
        } else if (combo1inputArray[x].value.length < 31 && combo1inputArray[0].value.length < 31 && combo1inputArray[1].value.length < 31 && combo1inputArray[2].value.length < 31 && combo1inputArray[3].value.length < 31 && combo1inputArray[4].value.length < 31 && combo1inputArray[5].value.length < 31) {
            // All labels must be < 31 characters and only one needs to be > 16 to set all bar heights at 30px
            combo1rowArray[i].style.height = "30px";
            combo1rowArray[i].height = "30";
        } else if (combo1inputArray[0].value.length >= 31 || combo1inputArray[1].value.length >= 31 || combo1inputArray[2].value.length >= 31 || combo1inputArray[3].value.length >= 31 || combo1inputArray[4].value.length >= 31 || combo1inputArray[5].value.length >= 31) {
            // Only one label needs to be >= 31 characters to set all bars heights to 54px
            combo1rowArray[i].style.height = "44px";
            combo1rowArray[i].height = "44";
        }
    }
};
combo1inputArray[0].addEventListener("input", () => { combo1BarHeight(0); });
combo1inputArray[1].addEventListener("input", () => { combo1BarHeight(1); });
combo1inputArray[2].addEventListener("input", () => { combo1BarHeight(2); });
combo1inputArray[3].addEventListener("input", () => { combo1BarHeight(3); });
combo1inputArray[4].addEventListener("input", () => { combo1BarHeight(4); });
combo1inputArray[5].addEventListener("input", () => { combo1BarHeight(5); });

// Combo Chart I Focus/Blur Events
combo1capText.addEventListener("focus", () => { combo1Cap.style.textShadow = shadowColor; });
combo1capText.addEventListener("blur", () => { combo1Cap.style.textShadow = "none"; });
combo1subText.addEventListener("focus", () => { combo1Sub.style.textShadow = shadowColor; });
combo1subText.addEventListener("blur", () => { combo1Sub.style.textShadow = "none"; });
combo1srcText.addEventListener("focus", () => { combo1Source.style.textShadow = shadowColor; });
combo1srcText.addEventListener("blur", () => { combo1Source.style.textShadow = "none"; });
legend4Text1x.addEventListener("focus", () => { legend4Text1.style.textShadow = shadowColor; });
legend4Text1x.addEventListener("blur", () => { legend4Text1.style.textShadow = "none"; });
legend4Color1x.addEventListener("focus", () => { legend4Color1.style.boxShadow = barColorShadow; });
legend4Color1x.addEventListener("blur", () => { legend4Color1.style.boxShadow = "none"; });
legend4Text2x.addEventListener("focus", () => { legend4Text2.style.textShadow = shadowColor; });
legend4Text2x.addEventListener("blur", () => { legend4Text2.style.textShadow = "none"; });
legend4Color2x.addEventListener("focus", () => { legend4Color2.style.boxShadow = barColorShadow; });
legend4Color2x.addEventListener("blur", () => { legend4Color2.style.boxShadow = "none"; });
combo1Text1.addEventListener("focus", () => { combo1Row1a.style.textShadow = shadowColor; });
combo1Text1.addEventListener("blur", () => { combo1Row1a.style.textShadow = "none"; });
combo1Size1t.addEventListener("focus", () => { combo1Row1b.style.boxShadow = barSizeShadow; });
combo1Size1t.addEventListener("blur", () => { combo1Row1b.style.boxShadow = "none"; });
combo1Color1t.addEventListener("focus", () => { combo1Row1b.style.boxShadow = barColorShadow; });
combo1Color1t.addEventListener("blur", () => { combo1Row1b.style.boxShadow = "none"; });
combo1Text1t.addEventListener("focus", () => { combo1Row1c.style.textShadow = shadowColor; });
combo1Text1t.addEventListener("blur", () => { combo1Row1c.style.textShadow = "none"; });
combo1Size1b.addEventListener("focus", () => { combo1Row1y.style.boxShadow = barSizeShadow; });
combo1Size1b.addEventListener("blur", () => { combo1Row1y.style.boxShadow = "none"; });
combo1Color1b.addEventListener("focus", () => { combo1Row1y.style.boxShadow = barColorShadow; });
combo1Color1b.addEventListener("blur", () => { combo1Row1y.style.boxShadow = "none"; });
combo1Text1b.addEventListener("focus", () => { combo1Row1z.style.textShadow = shadowColor; });
combo1Text1b.addEventListener("blur", () => { combo1Row1z.style.textShadow = "none"; });
combo1Text2.addEventListener("focus", () => { combo1Row2a.style.textShadow = shadowColor; });
combo1Text2.addEventListener("blur", () => { combo1Row2a.style.textShadow = "none"; });
combo1Size2t.addEventListener("focus", () => { combo1Row2b.style.boxShadow = barSizeShadow; });
combo1Size2t.addEventListener("blur", () => { combo1Row2b.style.boxShadow = "none"; });
combo1Color2t.addEventListener("focus", () => { combo1Row2b.style.boxShadow = barColorShadow; });
combo1Color2t.addEventListener("blur", () => { combo1Row2b.style.boxShadow = "none"; });
combo1Text2t.addEventListener("focus", () => { combo1Row2c.style.textShadow = shadowColor; });
combo1Text2t.addEventListener("blur", () => { combo1Row2c.style.textShadow = "none"; });
combo1Size2b.addEventListener("focus", () => { combo1Row2y.style.boxShadow = barSizeShadow; });
combo1Size2b.addEventListener("blur", () => { combo1Row2y.style.boxShadow = "none"; });
combo1Color2b.addEventListener("focus", () => { combo1Row2y.style.boxShadow = barColorShadow; });
combo1Color2b.addEventListener("blur", () => { combo1Row2y.style.boxShadow = "none"; });
combo1Text2b.addEventListener("focus", () => { combo1Row2z.style.textShadow = shadowColor; });
combo1Text2b.addEventListener("blur", () => { combo1Row2z.style.textShadow = "none"; });
combo1Text3.addEventListener("focus", () => { combo1Row3a.style.textShadow = shadowColor; });
combo1Text3.addEventListener("blur", () => { combo1Row3a.style.textShadow = "none"; });
combo1Size3t.addEventListener("focus", () => { combo1Row3b.style.boxShadow = barSizeShadow; });
combo1Size3t.addEventListener("blur", () => { combo1Row3b.style.boxShadow = "none"; });
combo1Color3t.addEventListener("focus", () => { combo1Row3b.style.boxShadow = barColorShadow; });
combo1Color3t.addEventListener("blur", () => { combo1Row3b.style.boxShadow = "none"; });
combo1Text3t.addEventListener("focus", () => { combo1Row3c.style.textShadow = shadowColor; });
combo1Text3t.addEventListener("blur", () => { combo1Row3c.style.textShadow = "none"; });
combo1Size3b.addEventListener("focus", () => { combo1Row3y.style.boxShadow = barSizeShadow; });
combo1Size3b.addEventListener("blur", () => { combo1Row3y.style.boxShadow = "none"; });
combo1Color3b.addEventListener("focus", () => { combo1Row3y.style.boxShadow = barColorShadow; });
combo1Color3b.addEventListener("blur", () => { combo1Row3y.style.boxShadow = "none"; });
combo1Text3b.addEventListener("focus", () => { combo1Row3z.style.textShadow = shadowColor; });
combo1Text3b.addEventListener("blur", () => { combo1Row3z.style.textShadow = "none"; });
combo1Text4.addEventListener("focus", () => { combo1Row4a.style.textShadow = shadowColor; });
combo1Text4.addEventListener("blur", () => { combo1Row4a.style.textShadow = "none"; });
combo1Size4t.addEventListener("focus", () => { combo1Row4b.style.boxShadow = barSizeShadow; });
combo1Size4t.addEventListener("blur", () => { combo1Row4b.style.boxShadow = "none"; });
combo1Color4t.addEventListener("focus", () => { combo1Row4b.style.boxShadow = barColorShadow; });
combo1Color4t.addEventListener("blur", () => { combo1Row4b.style.boxShadow = "none"; });
combo1Text4t.addEventListener("focus", () => { combo1Row4c.style.textShadow = shadowColor; });
combo1Text4t.addEventListener("blur", () => { combo1Row4c.style.textShadow = "none"; });
combo1Size4b.addEventListener("focus", () => { combo1Row4y.style.boxShadow = barSizeShadow; });
combo1Size4b.addEventListener("blur", () => { combo1Row4y.style.boxShadow = "none"; });
combo1Color4b.addEventListener("focus", () => { combo1Row4y.style.boxShadow = barColorShadow; });
combo1Color4b.addEventListener("blur", () => { combo1Row4y.style.boxShadow = "none"; });
combo1Text4b.addEventListener("focus", () => { combo1Row4z.style.textShadow = shadowColor; });
combo1Text4b.addEventListener("blur", () => { combo1Row4z.style.textShadow = "none"; });
combo1Text5.addEventListener("focus", () => { combo1Row5a.style.textShadow = shadowColor; });
combo1Text5.addEventListener("blur", () => { combo1Row5a.style.textShadow = "none"; });
combo1Size5t.addEventListener("focus", () => { combo1Row5b.style.boxShadow = barSizeShadow; });
combo1Size5t.addEventListener("blur", () => { combo1Row5b.style.boxShadow = "none"; });
combo1Color5t.addEventListener("focus", () => { combo1Row5b.style.boxShadow = barColorShadow; });
combo1Color5t.addEventListener("blur", () => { combo1Row5b.style.boxShadow = "none"; });
combo1Text5t.addEventListener("focus", () => { combo1Row5c.style.textShadow = shadowColor; });
combo1Text5t.addEventListener("blur", () => { combo1Row5c.style.textShadow = "none"; });
combo1Size5b.addEventListener("focus", () => { combo1Row5y.style.boxShadow = barSizeShadow; });
combo1Size5b.addEventListener("blur", () => { combo1Row5y.style.boxShadow = "none"; });
combo1Color5b.addEventListener("focus", () => { combo1Row5y.style.boxShadow = barColorShadow; });
combo1Color5b.addEventListener("blur", () => { combo1Row5y.style.boxShadow = "none"; });
combo1Text5b.addEventListener("focus", () => { combo1Row5z.style.textShadow = shadowColor; });
combo1Text5b.addEventListener("blur", () => { combo1Row5z.style.textShadow = "none"; });
combo1Text6.addEventListener("focus", () => { combo1Row6a.style.textShadow = shadowColor; });
combo1Text6.addEventListener("blur", () => { combo1Row6a.style.textShadow = "none"; });
combo1Size6t.addEventListener("focus", () => { combo1Row6b.style.boxShadow = barSizeShadow; });
combo1Size6t.addEventListener("blur", () => { combo1Row6b.style.boxShadow = "none"; });
combo1Color6t.addEventListener("focus", () => { combo1Row6b.style.boxShadow = barColorShadow; });
combo1Color6t.addEventListener("blur", () => { combo1Row6b.style.boxShadow = "none"; });
combo1Text6t.addEventListener("focus", () => { combo1Row6c.style.textShadow = shadowColor; });
combo1Text6t.addEventListener("blur", () => { combo1Row6c.style.textShadow = "none"; });
combo1Size6b.addEventListener("focus", () => { combo1Row6y.style.boxShadow = barSizeShadow; });
combo1Size6b.addEventListener("blur", () => { combo1Row6y.style.boxShadow = "none"; });
combo1Color6b.addEventListener("focus", () => { combo1Row6y.style.boxShadow = barColorShadow; });
combo1Color6b.addEventListener("blur", () => { combo1Row6y.style.boxShadow = "none"; });
combo1Text6b.addEventListener("focus", () => { combo1Row6z.style.textShadow = shadowColor; });
combo1Text6b.addEventListener("blur", () => { combo1Row6z.style.textShadow = "none"; });

// Generate Combo1 HTML Chart Logic
const combo1Weight = document.getElementById("combo1Weight");
const combo1Button = document.getElementById("combo1Button");
const combo1Output = document.getElementById("combo1Output");
combo1Button.addEventListener("mouseenter", () => { combo1Output.style.opacity = ".4"; combo1Weight.style.opacity = ".4"; } );
combo1Button.addEventListener("mouseleave", () => { combo1Output.style.opacity = ""; combo1Weight.style.opacity = ""; combo1Output.style.borderColor = ""; combo1Weight.style.color = ""; } );
combo1Button.addEventListener("click", () => {
    if (rowsData7.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + combo1csCode + combo1lgdCode + '<tr> <td align="left" style="padding: 20px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color1t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1z.innerHTML + '</td></tr></table> </td></tr>' + combo1srcCode + ' </table> </td></tr></table> ' + botSpace;
        combo1Output.textContent = chartCode;
        combo1Weight.textContent = Math.ceil(combo1Output.value.length / 1024) + 'KB';
    } else if (rowsData7.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + combo1csCode + combo1lgdCode + '<tr> <td align="left" style="padding: 20px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color1t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + combo1borderTop + 'padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color2t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2z.innerHTML + '</td></tr></table> </td></tr>' + combo1srcCode + ' </table> </td></tr></table> ' + botSpace;
        combo1Output.textContent = chartCode;
        combo1Weight.textContent = Math.ceil(combo1Output.value.length / 1024) + 'KB';
    } else if (rowsData7.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + combo1csCode + combo1lgdCode + '<tr> <td align="left" style="padding: 20px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color1t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + combo1borderTop + 'padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color2t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + combo1borderTop + 'padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color3t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3z.innerHTML + '</td></tr></table> </td></tr>' + combo1srcCode + ' </table> </td></tr></table> ' + botSpace;
        combo1Output.textContent = chartCode;
        combo1Weight.textContent = Math.ceil(combo1Output.value.length / 1024) + 'KB';
    } else if (rowsData7.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + combo1csCode + combo1lgdCode + '<tr> <td align="left" style="padding: 20px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color1t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + combo1borderTop + 'padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color2t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + combo1borderTop + 'padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color3t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + combo1borderTop + 'padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color4t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row4c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row4y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row4z.innerHTML + '</td></tr></table> </td></tr>' + combo1srcCode + ' </table> </td></tr></table> ' + botSpace;
        combo1Output.textContent = chartCode;
        combo1Weight.textContent = Math.ceil(combo1Output.value.length / 1024) + 'KB';
    } else if (rowsData7.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + combo1csCode + combo1lgdCode + '<tr> <td align="left" style="padding: 20px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color1t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + combo1borderTop + 'padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color2t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + combo1borderTop + 'padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color3t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + combo1borderTop + 'padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color4t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row4c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row4y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row4z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + combo1borderTop + 'padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color5t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row5c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row5y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row5z.innerHTML + '</td></tr></table> </td></tr>' + combo1srcCode + ' </table> </td></tr></table> ' + botSpace;
        combo1Output.textContent = chartCode;
        combo1Weight.textContent = Math.ceil(combo1Output.value.length / 1024) + 'KB';
    } else if (rowsData7.value === "6") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + combo1csCode + combo1lgdCode + '<tr> <td align="left" style="padding: 20px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color1t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + combo1borderTop + 'padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color2t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + combo1borderTop + 'padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color3t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row3z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + combo1borderTop + 'padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color4t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row4c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row4y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row4z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + combo1borderTop + 'padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color5t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row5c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row5y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row5z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + combo1borderTop + 'padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color6t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row6b.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row6c.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row6c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '"></td><td align="right" style="background-color: ' + combo1Color6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row6y.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row6y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row6z.style.width + '; height: ' + combo1Row1a.height + 'px;" height="' + combo1Row1a.height + '">' + combo1Row6z.innerHTML + '</td></tr></table> </td></tr>' + combo1srcCode + ' </table> </td></tr></table> ' + botSpace;
        combo1Output.textContent = chartCode;
        combo1Weight.textContent = Math.ceil(combo1Output.value.length / 1024) + 'KB';
    }
    combo1Output.style.opacity = "";
    combo1Weight.style.opacity = "";
    combo1Output.style.borderColor = "#166dfc";
    combo1Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(combo1Output.value);
});
combo1Output.addEventListener("click", () => {
    combo1Output.select();
});



// Combo Chart II Row Selection
const combo2BarsT = document.getElementsByClassName("combo2BarsT"); // Title + Top Bar
const combo2BarsB = document.getElementsByClassName("combo2BarsB"); // Bottom Bar
const combo2Controls = document.getElementsByClassName("combo2Controls");
const rowsData19 = document.getElementById("rowsData19");
rowsData19.addEventListener("change", () => {
    for (var i = 0; i < combo2Controls.length; i++) {
        combo2Controls[i].style.display = "none";
        for (var x = 0; x < rowsData19.value; x++) {
            combo2Controls[x].style.display = "block";
        }
    }
    for (var i = 0; i < combo2BarsT.length; i++) {
        combo2BarsT[i].style.display = "none";
        combo2BarsB[i].style.display = "none";
        for (var x = 0; x < rowsData19.value; x++) {
            combo2BarsT[x].style.display = "block";
            combo2BarsB[x].style.display = "block";
        }
    }
});

// Combo Chart II Caption
let combo2csCode = "";
const combo2Legend = document.getElementsByClassName("combo2Legend"); // Chart legend
const combo2Cap = document.getElementById("combo2Cap"); // Caption or chart title
const combo2capText = document.getElementById("combo2capText"); // Caption or chart title text
combo2capText.oninput = function() {
    combo2Cap.innerHTML = combo2capText.value;
    if (combo2capText.value == "" && combo2subText.value == "") {
        return combo2csCode = "";
    } else if (combo2capText.value == "" && combo2subText.value) {
        return combo2csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + combo2Sub.innerHTML + '</td> </tr>';
    } else if (combo2capText.value && combo2subText.value == "") {
        return combo2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; text-align: left;">' + combo2Cap.innerHTML + '</caption>';
    } else if (combo2capText.value && combo2subText.value) {
        combo2Cap.style.marginBottom = "4px";
        return combo2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + combo2Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + combo2Sub.innerHTML + '</td> </tr>';
    }
};
// Combo Chart II Subtitle
const combo2Sub = document.getElementById("combo2Sub"); // Chart subtitle
const combo2subText = document.getElementById("combo2subText"); // Chart subtitle text
combo2subText.oninput = function() {
    combo2Sub.innerHTML = combo2subText.value;
    if (combo2subText.value == "" && combo2capText.value == "") {
        return combo2csCode = "";
    } else if (combo2subText.value == "" && combo2capText.value) {
        combo2Cap.style.marginBottom = "0";
        return combo2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; text-align: left;">' + combo2Cap.innerHTML + '</caption>';
    } else if (combo2subText.value && combo2capText.value == "") {
        return combo2csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + combo2Sub.innerHTML + '</td> </tr>';
    } else if (combo2subText.value && combo2capText.value) {
        combo2Cap.style.marginBottom = "4px";
        return combo2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + combo2Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + combo2Sub.innerHTML + '</td> </tr>';
    }
};
// Combo Chart II Source
let combo2srcCode = "";
const combo2Source = document.getElementById("combo2Source"); // Chart source
const combo2srcText = document.getElementById("combo2srcText"); // Chart source text
combo2srcText.oninput = function() {
    combo2Source.innerHTML = combo2srcText.value;
    combo2Source.style.paddingTop = combo2srcText.value ? "20px" : "0";
    combo2srcCode = combo2srcText.value ? '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 20px; text-align: left;">' + combo2Source.innerHTML + '</td></tr>' : "";
};

// Combo II Chart Color Picker
const combo2colorPickT = document.getElementById("combo2colorPickT");
combo2colorPickT.addEventListener("change", (evt) => {
    combo2Row1b.style.backgroundColor = evt.detail.hex;
    combo2Color1t.value = evt.detail.hex;
    combo2Row2b.style.backgroundColor = evt.detail.hex;
    combo2Color2t.value = evt.detail.hex;
    combo2Row3b.style.backgroundColor = evt.detail.hex;
    combo2Color3t.value = evt.detail.hex;
    combo2Row4b.style.backgroundColor = evt.detail.hex;
    combo2Color4t.value = evt.detail.hex;
    combo2Row5b.style.backgroundColor = evt.detail.hex;
    combo2Color5t.value = evt.detail.hex;
    legend8Color1.style.color = evt.detail.hex;
    legend8Color1.style.backgroundColor = evt.detail.hex;
    legend8Color1.style.borderColor = evt.detail.hex;
    legend8Color1x.value = evt.detail.hex;
    legend8Color1x.value = evt.detail.hex;
    legend8Color1x.value = evt.detail.hex;
});
const combo2colorPickB = document.getElementById("combo2colorPickB");
combo2colorPickB.addEventListener("change", (evt) => {
    combo2Row1y.style.backgroundColor = evt.detail.hex;
    combo2Color1b.value = evt.detail.hex;
    combo2Row2y.style.backgroundColor = evt.detail.hex;
    combo2Color2b.value = evt.detail.hex;
    combo2Row3y.style.backgroundColor = evt.detail.hex;
    combo2Color3b.value = evt.detail.hex;
    combo2Row4y.style.backgroundColor = evt.detail.hex;
    combo2Color4b.value = evt.detail.hex;
    combo2Row5y.style.backgroundColor = evt.detail.hex;
    combo2Color5b.value = evt.detail.hex;
    legend8Color2.style.color = evt.detail.hex;
    legend8Color2.style.backgroundColor = evt.detail.hex;
    legend8Color2.style.borderColor = evt.detail.hex;
    legend8Color2x.value = evt.detail.hex;
    legend8Color2x.value = evt.detail.hex;
    legend8Color2x.value = evt.detail.hex;
});

// Combo Chart II Text/Color Legend
let combo2lgdCode = "";
const legend8Text1 = document.getElementById("legend8Text1");
const legend8Text1x = document.getElementById("legend8Text1x");
legend8Text1x.oninput = function() {
    legend8Text1.innerHTML = legend8Text1x.value;
    if (legend8Text1x.value == "" && legend8Text2x.value == "" && legend8Color1x.value == "" && legend8Color2x.value == "") {
        combo2Legend[0].style.display = "none";
        return combo2lgdCode = "";
    } else {
        combo2Legend[0].style.display = "block";
        return combo2lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend8Color1x.value + '; border: 1px solid ' + legend8Color1x.value + '; color: ' + legend8Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend8Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend8Color2x.value + '; border: 1px solid ' + legend8Color2x.value + '; color: ' + legend8Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend8Text2.innerHTML + '</td></tr>';
    }
};
const legend8Text2 = document.getElementById("legend8Text2");
const legend8Text2x = document.getElementById("legend8Text2x");
legend8Text2x.oninput = function() {
    legend8Text2.innerHTML = legend8Text2x.value;
    if (legend8Text1x.value == "" && legend8Text2x.value == "" && legend8Color1x.value == "" && legend8Color2x.value == "") {
        combo2Legend[0].style.display = "none";
        return combo2lgdCode = "";
    } else {
        combo2Legend[0].style.display = "block";
        return combo2lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend8Color1x.value + '; border: 1px solid ' + legend8Color1x.value + '; color: ' + legend8Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend8Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend8Color2x.value + '; border: 1px solid ' + legend8Color2x.value + '; color: ' + legend8Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend8Text2.innerHTML + '</td></tr>';
    }
};
const legend8Color1 = document.getElementById("legend8Color1");
const legend8Color1x = document.getElementById("legend8Color1x");
legend8Color1x.oninput = function() {
    legend8Color1.style.color = legend8Color1x.value;
    legend8Color1.style.backgroundColor = legend8Color1x.value;
    legend8Color1.style.borderColor = legend8Color1x.value;
    if (legend8Text1x.value == "" && legend8Text2x.value == "" && legend8Color1x.value == "" && legend8Color2x.value == "") {
        combo2Legend[0].style.display = "none";
        return combo2lgdCode = "";
    } else {
        combo2Legend[0].style.display = "block";
        return combo2lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend8Color1x.value + '; border: 1px solid ' + legend8Color1x.value + '; color: ' + legend8Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend8Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend8Color2x.value + '; border: 1px solid ' + legend8Color2x.value + '; color: ' + legend8Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend8Text2.innerHTML + '</td></tr>';
    }
};
const legend8Color2 = document.getElementById("legend8Color2");
const legend8Color2x = document.getElementById("legend8Color2x");
legend8Color2x.oninput = function() {
    legend8Color2.style.color = legend8Color2x.value;
    legend8Color2.style.backgroundColor = legend8Color2x.value;
    legend8Color2.style.borderColor = legend8Color2x.value;
    if (legend8Text1x.value == "" && legend8Text2x.value == "" && legend8Color1x.value == "" && legend8Color2x.value == "") {
        combo2Legend[0].style.display = "none";
        return combo2lgdCode = "";
    } else {
        combo2Legend[0].style.display = "block";
        return combo2lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend8Color1x.value + '; border: 1px solid ' + legend8Color1x.value + '; color: ' + legend8Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend8Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend8Color2x.value + '; border: 1px solid ' + legend8Color2x.value + '; color: ' + legend8Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend8Text2.innerHTML + '</td></tr>';
    }
};

// Combo Chart II Row Customization Logic
const combo2Row1a = document.getElementById("combo2Row1a");
const combo2Row1b = document.getElementById("combo2Row1b");
const combo2Row1c = document.getElementById("combo2Row1c");
const combo2Row1y = document.getElementById("combo2Row1y");
const combo2Row1z = document.getElementById("combo2Row1z");
const combo2Row2a = document.getElementById("combo2Row2a");
const combo2Row2b = document.getElementById("combo2Row2b");
const combo2Row2c = document.getElementById("combo2Row2c");
const combo2Row2y = document.getElementById("combo2Row2y");
const combo2Row2z = document.getElementById("combo2Row2z");
const combo2Row3a = document.getElementById("combo2Row3a");
const combo2Row3b = document.getElementById("combo2Row3b");
const combo2Row3c = document.getElementById("combo2Row3c");
const combo2Row3y = document.getElementById("combo2Row3y");
const combo2Row3z = document.getElementById("combo2Row3z");
const combo2Row4a = document.getElementById("combo2Row4a");
const combo2Row4b = document.getElementById("combo2Row4b");
const combo2Row4c = document.getElementById("combo2Row4c");
const combo2Row4y = document.getElementById("combo2Row4y");
const combo2Row4z = document.getElementById("combo2Row4z");
const combo2Row5a = document.getElementById("combo2Row5a");
const combo2Row5b = document.getElementById("combo2Row5b");
const combo2Row5c = document.getElementById("combo2Row5c");
const combo2Row5y = document.getElementById("combo2Row5y");
const combo2Row5z = document.getElementById("combo2Row5z");

// Row 1 Customization Logic
const combo2Text1 = document.getElementById("combo2Text1");
combo2Text1.oninput = function() {
    if (combo2Text1.value == "") {
        combo2Row1a.innerHTML = combo2Text1.value;
    } else if (combo2Text1.value) {
        combo2Row1a.innerHTML = combo2Text1.value;
    }
};
const combo2Size1t = document.getElementById("combo2Size1t");
combo2Size1t.oninput = function() {
    combo2Row1b.style.width = Math.abs(combo2Size1t.value) + "%";
    combo2Row1c.style.width = 100 - (Math.abs(combo2Size1t.value)) + "%";
};
const combo2Text1t = document.getElementById("combo2Text1t");
combo2Text1t.oninput = function() {
    combo2Row1c.innerHTML = combo2Text1t.value ? "&nbsp;" + combo2Text1t.value : "";
};
const combo2Label1t = document.getElementById("combo2Label1t");
combo2Label1t.addEventListener("click", () => {
    if (combo2Text1t.value == "") {
        combo2Row1b.innerHTML = "";
        combo2Row1c.innerHTML = "";
    } else if (combo2Text1t.value) {
        combo2Row1b.innerHTML = combo2Text1t.value + "&nbsp;";
        combo2Text1t.value = "";
        combo2Row1c.innerHTML = "";
    }
});
const combo2Color1t = document.getElementById("combo2Color1t");
combo2Color1t.oninput = function() {
    combo2Row1b.style.backgroundColor = combo2Color1t.value;
};
const combo2Size1b = document.getElementById("combo2Size1b");
combo2Size1b.oninput = function() {
    combo2Row1y.style.width = Math.abs(combo2Size1b.value) + "%";
    combo2Row1z.style.width = 100 - (Math.abs(combo2Size1b.value)) + "%";
};
const combo2Text1b = document.getElementById("combo2Text1b");
combo2Text1b.oninput = function() {
    combo2Row1z.innerHTML = combo2Text1b.value ? "&nbsp;" + combo2Text1b.value : "";
};
const combo2Label1b = document.getElementById("combo2Label1b");
combo2Label1b.addEventListener("click", () => {
    if (combo2Text1b.value == "") {
        combo2Row1y.innerHTML = "";
        combo2Row1z.innerHTML = "";
    } else if (combo2Text1b.value) {
        combo2Row1y.innerHTML = combo2Text1b.value + "&nbsp;";
        combo2Text1b.value = "";
        combo2Row1z.innerHTML = "";
    }
});
const combo2Color1b = document.getElementById("combo2Color1b");
combo2Color1b.oninput = function() {
    combo2Row1y.style.backgroundColor = combo2Color1b.value;
};

// Row 2 Customization Logic
const combo2Text2 = document.getElementById("combo2Text2");
combo2Text2.oninput = function() {
    if (combo2Text2.value == "") {
        combo2Row2a.innerHTML = combo2Text2.value;
    } else if (combo2Text2.value) {
        combo2Row2a.innerHTML = combo2Text2.value;
    }
};
const combo2Size2t = document.getElementById("combo2Size2t");
combo2Size2t.oninput = function() {
    combo2Row2b.style.width = Math.abs(combo2Size2t.value) + "%";
    combo2Row2c.style.width = 100 - (Math.abs(combo2Size2t.value)) + "%";
};
const combo2Text2t = document.getElementById("combo2Text2t");
combo2Text2t.oninput = function() {
    combo2Row2c.innerHTML = combo2Text2t.value ? "&nbsp;" + combo2Text2t.value : "";
};
const combo2Label2t = document.getElementById("combo2Label2t");
combo2Label2t.addEventListener("click", () => {
    if (combo2Text2t.value == "") {
        combo2Row2b.innerHTML = "";
        combo2Row2c.innerHTML = "";
    } else if (combo2Text2t.value) {
        combo2Row2b.innerHTML = combo2Text2t.value + "&nbsp;";
        combo2Text2t.value = "";
        combo2Row2c.innerHTML = "";
    }
});
const combo2Color2t = document.getElementById("combo2Color2t");
combo2Color2t.oninput = function() {
    combo2Row2b.style.backgroundColor = combo2Color2t.value;
};
const combo2Size2b = document.getElementById("combo2Size2b");
combo2Size2b.oninput = function() {
    combo2Row2y.style.width = Math.abs(combo2Size2b.value) + "%";
    combo2Row2z.style.width = 100 - (Math.abs(combo2Size2b.value)) + "%";
};
const combo2Text2b = document.getElementById("combo2Text2b");
combo2Text2b.oninput = function() {
    combo2Row2z.innerHTML = combo2Text2b.value ? "&nbsp;" + combo2Text2b.value : "";
};
const combo2Label2b = document.getElementById("combo2Label2b");
combo2Label2b.addEventListener("click", () => {
    if (combo2Text2b.value == "") {
        combo2Row2y.innerHTML = "";
        combo2Row2z.innerHTML = "";
    } else if (combo2Text2b.value) {
        combo2Row2y.innerHTML = combo2Text2b.value + "&nbsp;";
        combo2Text2b.value = "";
        combo2Row2z.innerHTML = "";
    }
});
const combo2Color2b = document.getElementById("combo2Color2b");
combo2Color2b.oninput = function() {
    combo2Row2y.style.backgroundColor = combo2Color2b.value;
};

// Row 3 Customization Logic
const combo2Text3 = document.getElementById("combo2Text3");
combo2Text3.oninput = function() {
    if (combo2Text3.value == "") {
        combo2Row3a.innerHTML = combo2Text3.value;
    } else if (combo2Text3.value) {
        combo2Row3a.innerHTML = combo2Text3.value;
    }
};
const combo2Size3t = document.getElementById("combo2Size3t");
combo2Size3t.oninput = function() {
    combo2Row3b.style.width = Math.abs(combo2Size3t.value) + "%";
    combo2Row3c.style.width = 100 - (Math.abs(combo2Size3t.value)) + "%";
};
const combo2Text3t = document.getElementById("combo2Text3t");
combo2Text3t.oninput = function() {
    combo2Row3c.innerHTML = combo2Text3t.value ? "&nbsp;" + combo2Text3t.value : "";
};
const combo2Label3t = document.getElementById("combo2Label3t");
combo2Label3t.addEventListener("click", () => {
    if (combo2Text3t.value == "") {
        combo2Row3b.innerHTML = "";
        combo2Row3c.innerHTML = "";
    } else if (combo2Text3t.value) {
        combo2Row3b.innerHTML = combo2Text3t.value + "&nbsp;";
        combo2Text3t.value = "";
        combo2Row3c.innerHTML = "";
    }
});
const combo2Color3t = document.getElementById("combo2Color3t");
combo2Color3t.oninput = function() {
    combo2Row3b.style.backgroundColor = combo2Color3t.value;
};
const combo2Size3b = document.getElementById("combo2Size3b");
combo2Size3b.oninput = function() {
    combo2Row3y.style.width = Math.abs(combo2Size3b.value) + "%";
    combo2Row3z.style.width = 100 - (Math.abs(combo2Size3b.value)) + "%";
};
const combo2Text3b = document.getElementById("combo2Text3b");
combo2Text3b.oninput = function() {
    combo2Row3z.innerHTML = combo2Text3b.value ? "&nbsp;" + combo2Text3b.value : "";
};
const combo2Label3b = document.getElementById("combo2Label3b");
combo2Label3b.addEventListener("click", () => {
    if (combo2Text3b.value == "") {
        combo2Row3y.innerHTML = "";
        combo2Row3z.innerHTML = "";
    } else if (combo2Text3b.value) {
        combo2Row3y.innerHTML = combo2Text3b.value + "&nbsp;";
        combo2Text3b.value = "";
        combo2Row3z.innerHTML = "";
    }
});
const combo2Color3b = document.getElementById("combo2Color3b");
combo2Color3b.oninput = function() {
    combo2Row3y.style.backgroundColor = combo2Color3b.value;
};

// Row 4 Customization Logic
const combo2Text4 = document.getElementById("combo2Text4");
combo2Text4.oninput = function() {
    if (combo2Text4.value == "") {
        combo2Row4a.innerHTML = combo2Text4.value;
    } else if (combo2Text4.value) {
        combo2Row4a.innerHTML = combo2Text4.value;
    }
};
const combo2Size4t = document.getElementById("combo2Size4t");
combo2Size4t.oninput = function() {
    combo2Row4b.style.width = Math.abs(combo2Size4t.value) + "%";
    combo2Row4c.style.width = 100 - (Math.abs(combo2Size4t.value)) + "%";
};
const combo2Text4t = document.getElementById("combo2Text4t");
combo2Text4t.oninput = function() {
    combo2Row4c.innerHTML = combo2Text4t.value ? "&nbsp;" + combo2Text4t.value : "";
};
const combo2Label4t = document.getElementById("combo2Label4t");
combo2Label4t.addEventListener("click", () => {
    if (combo2Text4t.value == "") {
        combo2Row4b.innerHTML = "";
        combo2Row4c.innerHTML = "";
    } else if (combo2Text4t.value) {
        combo2Row4b.innerHTML = combo2Text4t.value + "&nbsp;";
        combo2Text4t.value = "";
        combo2Row4c.innerHTML = "";
    }
});
const combo2Color4t = document.getElementById("combo2Color4t");
combo2Color4t.oninput = function() {
    combo2Row4b.style.backgroundColor = combo2Color4t.value;
};
const combo2Size4b = document.getElementById("combo2Size4b");
combo2Size4b.oninput = function() {
    combo2Row4y.style.width = Math.abs(combo2Size4b.value) + "%";
    combo2Row4z.style.width = 100 - (Math.abs(combo2Size4b.value)) + "%";
};
const combo2Text4b = document.getElementById("combo2Text4b");
combo2Text4b.oninput = function() {
    combo2Row4z.innerHTML = combo2Text4b.value ? "&nbsp;" + combo2Text4b.value : "";
};
const combo2Label4b = document.getElementById("combo2Label4b");
combo2Label4b.addEventListener("click", () => {
    if (combo2Text4b.value == "") {
        combo2Row4y.innerHTML = "";
        combo2Row4z.innerHTML = "";
    } else if (combo2Text4b.value) {
        combo2Row4y.innerHTML = combo2Text4b.value + "&nbsp;";
        combo2Text4b.value = "";
        combo2Row4z.innerHTML = "";
    }
});
const combo2Color4b = document.getElementById("combo2Color4b");
combo2Color4b.oninput = function() {
    combo2Row4y.style.backgroundColor = combo2Color4b.value;
};

// Row 5 Customization Logic
const combo2Text5 = document.getElementById("combo2Text5");
combo2Text5.oninput = function() {
    if (combo2Text5.value == "") {
        combo2Row5a.innerHTML = combo2Text5.value;
    } else if (combo2Text5.value) {
        combo2Row5a.innerHTML = combo2Text5.value;
    }
};
const combo2Size5t = document.getElementById("combo2Size5t");
combo2Size5t.oninput = function() {
    combo2Row5b.style.width = Math.abs(combo2Size5t.value) + "%";
    combo2Row5c.style.width = 100 - (Math.abs(combo2Size5t.value)) + "%";
};
const combo2Text5t = document.getElementById("combo2Text5t");
combo2Text5t.oninput = function() {
    combo2Row5c.innerHTML = combo2Text5t.value ? "&nbsp;" + combo2Text5t.value : "";
};
const combo2Label5t = document.getElementById("combo2Label5t");
combo2Label5t.addEventListener("click", () => {
    if (combo2Text5t.value == "") {
        combo2Row5b.innerHTML = "";
        combo2Row5c.innerHTML = "";
    } else if (combo2Text5t.value) {
        combo2Row5b.innerHTML = combo2Text5t.value + "&nbsp;";
        combo2Text5t.value = "";
        combo2Row5c.innerHTML = "";
    }
});
const combo2Color5t = document.getElementById("combo2Color5t");
combo2Color5t.oninput = function() {
    combo2Row5b.style.backgroundColor = combo2Color5t.value;
};
const combo2Size5b = document.getElementById("combo2Size5b");
combo2Size5b.oninput = function() {
    combo2Row5y.style.width = Math.abs(combo2Size5b.value) + "%";
    combo2Row5z.style.width = 100 - (Math.abs(combo2Size5b.value)) + "%";
};
const combo2Text5b = document.getElementById("combo2Text5b");
combo2Text5b.oninput = function() {
    combo2Row5z.innerHTML = combo2Text5b.value ? "&nbsp;" + combo2Text5b.value : "";
};
const combo2Label5b = document.getElementById("combo2Label5b");
combo2Label5b.addEventListener("click", () => {
    if (combo2Text5b.value == "") {
        combo2Row5y.innerHTML = "";
        combo2Row5z.innerHTML = "";
    } else if (combo2Text5b.value) {
        combo2Row5y.innerHTML = combo2Text5b.value + "&nbsp;";
        combo2Text5b.value = "";
        combo2Row5z.innerHTML = "";
    }
});
const combo2Color5b = document.getElementById("combo2Color5b");
combo2Color5b.oninput = function() {
    combo2Row5y.style.backgroundColor = combo2Color5b.value;
};

// Combo Chart II Focus/Blur Events
combo2capText.addEventListener("focus", () => { combo2Cap.style.textShadow = shadowColor; });
combo2capText.addEventListener("blur", () => { combo2Cap.style.textShadow = "none"; });
combo2subText.addEventListener("focus", () => { combo2Sub.style.textShadow = shadowColor; });
combo2subText.addEventListener("blur", () => { combo2Sub.style.textShadow = "none"; });
combo2srcText.addEventListener("focus", () => { combo2Source.style.textShadow = shadowColor; });
combo2srcText.addEventListener("blur", () => { combo2Source.style.textShadow = "none"; });
legend8Text1x.addEventListener("focus", () => { legend8Text1.style.textShadow = shadowColor; });
legend8Text1x.addEventListener("blur", () => { legend8Text1.style.textShadow = "none"; });
legend8Color1x.addEventListener("focus", () => { legend8Color1.style.boxShadow = barColorShadow; });
legend8Color1x.addEventListener("blur", () => { legend8Color1.style.boxShadow = "none"; });
legend8Text2x.addEventListener("focus", () => { legend8Text2.style.textShadow = shadowColor; });
legend8Text2x.addEventListener("blur", () => { legend8Text2.style.textShadow = "none"; });
legend8Color2x.addEventListener("focus", () => { legend8Color2.style.boxShadow = barColorShadow; });
legend8Color2x.addEventListener("blur", () => { legend8Color2.style.boxShadow = "none"; });
combo2Text1.addEventListener("focus", () => { combo2Row1a.style.textShadow = shadowColor; });
combo2Text1.addEventListener("blur", () => { combo2Row1a.style.textShadow = "none"; });
combo2Size1t.addEventListener("focus", () => { combo2Row1b.style.boxShadow = barSizeShadow; });
combo2Size1t.addEventListener("blur", () => { combo2Row1b.style.boxShadow = "none"; });
combo2Color1t.addEventListener("focus", () => { combo2Row1b.style.boxShadow = barColorShadow; });
combo2Color1t.addEventListener("blur", () => { combo2Row1b.style.boxShadow = "none"; });
combo2Text1t.addEventListener("focus", () => { combo2Row1c.style.textShadow = shadowColor; });
combo2Text1t.addEventListener("blur", () => { combo2Row1c.style.textShadow = "none"; });
combo2Size1b.addEventListener("focus", () => { combo2Row1y.style.boxShadow = barSizeShadow; });
combo2Size1b.addEventListener("blur", () => { combo2Row1y.style.boxShadow = "none"; });
combo2Color1b.addEventListener("focus", () => { combo2Row1y.style.boxShadow = barColorShadow; });
combo2Color1b.addEventListener("blur", () => { combo2Row1y.style.boxShadow = "none"; });
combo2Text1b.addEventListener("focus", () => { combo2Row1z.style.textShadow = shadowColor; });
combo2Text1b.addEventListener("blur", () => { combo2Row1z.style.textShadow = "none"; });
combo2Text2.addEventListener("focus", () => { combo2Row2a.style.textShadow = shadowColor; });
combo2Text2.addEventListener("blur", () => { combo2Row2a.style.textShadow = "none"; });
combo2Size2t.addEventListener("focus", () => { combo2Row2b.style.boxShadow = barSizeShadow; });
combo2Size2t.addEventListener("blur", () => { combo2Row2b.style.boxShadow = "none"; });
combo2Color2t.addEventListener("focus", () => { combo2Row2b.style.boxShadow = barColorShadow; });
combo2Color2t.addEventListener("blur", () => { combo2Row2b.style.boxShadow = "none"; });
combo2Text2t.addEventListener("focus", () => { combo2Row2c.style.textShadow = shadowColor; });
combo2Text2t.addEventListener("blur", () => { combo2Row2c.style.textShadow = "none"; });
combo2Size2b.addEventListener("focus", () => { combo2Row2y.style.boxShadow = barSizeShadow; });
combo2Size2b.addEventListener("blur", () => { combo2Row2y.style.boxShadow = "none"; });
combo2Color2b.addEventListener("focus", () => { combo2Row2y.style.boxShadow = barColorShadow; });
combo2Color2b.addEventListener("blur", () => { combo2Row2y.style.boxShadow = "none"; });
combo2Text2b.addEventListener("focus", () => { combo2Row2z.style.textShadow = shadowColor; });
combo2Text2b.addEventListener("blur", () => { combo2Row2z.style.textShadow = "none"; });
combo2Text3.addEventListener("focus", () => { combo2Row3a.style.textShadow = shadowColor; });
combo2Text3.addEventListener("blur", () => { combo2Row3a.style.textShadow = "none"; });
combo2Size3t.addEventListener("focus", () => { combo2Row3b.style.boxShadow = barSizeShadow; });
combo2Size3t.addEventListener("blur", () => { combo2Row3b.style.boxShadow = "none"; });
combo2Color3t.addEventListener("focus", () => { combo2Row3b.style.boxShadow = barColorShadow; });
combo2Color3t.addEventListener("blur", () => { combo2Row3b.style.boxShadow = "none"; });
combo2Text3t.addEventListener("focus", () => { combo2Row3c.style.textShadow = shadowColor; });
combo2Text3t.addEventListener("blur", () => { combo2Row3c.style.textShadow = "none"; });
combo2Size3b.addEventListener("focus", () => { combo2Row3y.style.boxShadow = barSizeShadow; });
combo2Size3b.addEventListener("blur", () => { combo2Row3y.style.boxShadow = "none"; });
combo2Color3b.addEventListener("focus", () => { combo2Row3y.style.boxShadow = barColorShadow; });
combo2Color3b.addEventListener("blur", () => { combo2Row3y.style.boxShadow = "none"; });
combo2Text3b.addEventListener("focus", () => { combo2Row3z.style.textShadow = shadowColor; });
combo2Text3b.addEventListener("blur", () => { combo2Row3z.style.textShadow = "none"; });
combo2Text4.addEventListener("focus", () => { combo2Row4a.style.textShadow = shadowColor; });
combo2Text4.addEventListener("blur", () => { combo2Row4a.style.textShadow = "none"; });
combo2Size4t.addEventListener("focus", () => { combo2Row4b.style.boxShadow = barSizeShadow; });
combo2Size4t.addEventListener("blur", () => { combo2Row4b.style.boxShadow = "none"; });
combo2Color4t.addEventListener("focus", () => { combo2Row4b.style.boxShadow = barColorShadow; });
combo2Color4t.addEventListener("blur", () => { combo2Row4b.style.boxShadow = "none"; });
combo2Text4t.addEventListener("focus", () => { combo2Row4c.style.textShadow = shadowColor; });
combo2Text4t.addEventListener("blur", () => { combo2Row4c.style.textShadow = "none"; });
combo2Size4b.addEventListener("focus", () => { combo2Row4y.style.boxShadow = barSizeShadow; });
combo2Size4b.addEventListener("blur", () => { combo2Row4y.style.boxShadow = "none"; });
combo2Color4b.addEventListener("focus", () => { combo2Row4y.style.boxShadow = barColorShadow; });
combo2Color4b.addEventListener("blur", () => { combo2Row4y.style.boxShadow = "none"; });
combo2Text4b.addEventListener("focus", () => { combo2Row4z.style.textShadow = shadowColor; });
combo2Text4b.addEventListener("blur", () => { combo2Row4z.style.textShadow = "none"; });
combo2Text5.addEventListener("focus", () => { combo2Row5a.style.textShadow = shadowColor; });
combo2Text5.addEventListener("blur", () => { combo2Row5a.style.textShadow = "none"; });
combo2Size5t.addEventListener("focus", () => { combo2Row5b.style.boxShadow = barSizeShadow; });
combo2Size5t.addEventListener("blur", () => { combo2Row5b.style.boxShadow = "none"; });
combo2Color5t.addEventListener("focus", () => { combo2Row5b.style.boxShadow = barColorShadow; });
combo2Color5t.addEventListener("blur", () => { combo2Row5b.style.boxShadow = "none"; });
combo2Text5t.addEventListener("focus", () => { combo2Row5c.style.textShadow = shadowColor; });
combo2Text5t.addEventListener("blur", () => { combo2Row5c.style.textShadow = "none"; });
combo2Size5b.addEventListener("focus", () => { combo2Row5y.style.boxShadow = barSizeShadow; });
combo2Size5b.addEventListener("blur", () => { combo2Row5y.style.boxShadow = "none"; });
combo2Color5b.addEventListener("focus", () => { combo2Row5y.style.boxShadow = barColorShadow; });
combo2Color5b.addEventListener("blur", () => { combo2Row5y.style.boxShadow = "none"; });
combo2Text5b.addEventListener("focus", () => { combo2Row5z.style.textShadow = shadowColor; });
combo2Text5b.addEventListener("blur", () => { combo2Row5z.style.textShadow = "none"; });

// Generate Combo2 HTML Chart Logic
const combo2Weight = document.getElementById("combo2Weight");
const combo2Button = document.getElementById("combo2Button");
const combo2Output = document.getElementById("combo2Output");
combo2Button.addEventListener("mouseenter", () => { combo2Output.style.opacity = ".4"; combo2Weight.style.opacity = ".4"; } );
combo2Button.addEventListener("mouseleave", () => { combo2Output.style.opacity = ""; combo2Weight.style.opacity = ""; combo2Output.style.borderColor = ""; combo2Weight.style.color = ""; } );
combo2Button.addEventListener("click", () => {
    if (rowsData19.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + combo2csCode + combo2lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="2" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo2Row1a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1b.style.width + '; height: 22px;" height="22">' + combo2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1c.style.width + '; height: 22px;" height="22">' + combo2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + combo2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1y.style.width + '; height: 22px;" height="22">' + combo2Row1y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1z.style.width + '; height: 22px;" height="22">' + combo2Row1z.innerHTML + '</td></tr></table> </td></tr>' + combo2srcCode + ' </table> </td></tr></table> ' + botSpace;
        combo2Output.textContent = chartCode;
        combo2Weight.textContent = Math.ceil(combo2Output.value.length / 1024) + 'KB';
    } else if (rowsData19.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + combo2csCode + combo2lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="2" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo2Row1a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1b.style.width + '; height: 22px;" height="22">' + combo2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1c.style.width + '; height: 22px;" height="22">' + combo2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + combo2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1y.style.width + '; height: 22px;" height="22">' + combo2Row1y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1z.style.width + '; height: 22px;" height="22">' + combo2Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 22px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="2" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo2Row2a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color2t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2b.style.width + '; height: 22px;" height="22">' + combo2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2c.style.width + '; height: 22px;" height="22">' + combo2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + combo2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2y.style.width + '; height: 22px;" height="22">' + combo2Row2y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2z.style.width + '; height: 22px;" height="22">' + combo2Row2z.innerHTML + '</td></tr></table> </td></tr>' + combo2srcCode + ' </table> </td></tr></table> ' + botSpace;
        combo2Output.textContent = chartCode;
        combo2Weight.textContent = Math.ceil(combo2Output.value.length / 1024) + 'KB';
    } else if (rowsData19.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + combo2csCode + combo2lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="2" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo2Row1a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1b.style.width + '; height: 22px;" height="22">' + combo2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1c.style.width + '; height: 22px;" height="22">' + combo2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + combo2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1y.style.width + '; height: 22px;" height="22">' + combo2Row1y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1z.style.width + '; height: 22px;" height="22">' + combo2Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 22px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="2" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo2Row2a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color2t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2b.style.width + '; height: 22px;" height="22">' + combo2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2c.style.width + '; height: 22px;" height="22">' + combo2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + combo2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2y.style.width + '; height: 22px;" height="22">' + combo2Row2y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2z.style.width + '; height: 22px;" height="22">' + combo2Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 22px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="2" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo2Row3a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color3t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3b.style.width + '; height: 22px;" height="22">' + combo2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3c.style.width + '; height: 22px;" height="22">' + combo2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + combo2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3y.style.width + '; height: 22px;" height="22">' + combo2Row3y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3z.style.width + '; height: 22px;" height="22">' + combo2Row3z.innerHTML + '</td></tr></table> </td></tr>' + combo2srcCode + ' </table> </td></tr></table> ' + botSpace;
        combo2Output.textContent = chartCode;
        combo2Weight.textContent = Math.ceil(combo2Output.value.length / 1024) + 'KB';
    } else if (rowsData19.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + combo2csCode + combo2lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="2" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo2Row1a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1b.style.width + '; height: 22px;" height="22">' + combo2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1c.style.width + '; height: 22px;" height="22">' + combo2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + combo2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1y.style.width + '; height: 22px;" height="22">' + combo2Row1y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1z.style.width + '; height: 22px;" height="22">' + combo2Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 22px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="2" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo2Row2a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color2t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2b.style.width + '; height: 22px;" height="22">' + combo2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2c.style.width + '; height: 22px;" height="22">' + combo2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + combo2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2y.style.width + '; height: 22px;" height="22">' + combo2Row2y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2z.style.width + '; height: 22px;" height="22">' + combo2Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 22px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="2" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo2Row3a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color3t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3b.style.width + '; height: 22px;" height="22">' + combo2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3c.style.width + '; height: 22px;" height="22">' + combo2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + combo2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3y.style.width + '; height: 22px;" height="22">' + combo2Row3y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3z.style.width + '; height: 22px;" height="22">' + combo2Row3z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 22px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="2" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo2Row4a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color4t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row4b.style.width + '; height: 22px;" height="22">' + combo2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row4c.style.width + '; height: 22px;" height="22">' + combo2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + combo2Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row4y.style.width + '; height: 22px;" height="22">' + combo2Row4y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row4z.style.width + '; height: 22px;" height="22">' + combo2Row4z.innerHTML + '</td></tr></table> </td></tr>' + combo2srcCode + ' </table> </td></tr></table> ' + botSpace;
        combo2Output.textContent = chartCode;
        combo2Weight.textContent = Math.ceil(combo2Output.value.length / 1024) + 'KB';
    } else if (rowsData19.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + combo2csCode + combo2lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="2" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo2Row1a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1b.style.width + '; height: 22px;" height="22">' + combo2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1c.style.width + '; height: 22px;" height="22">' + combo2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + combo2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1y.style.width + '; height: 22px;" height="22">' + combo2Row1y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1z.style.width + '; height: 22px;" height="22">' + combo2Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 22px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="2" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo2Row2a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color2t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2b.style.width + '; height: 22px;" height="22">' + combo2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2c.style.width + '; height: 22px;" height="22">' + combo2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + combo2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2y.style.width + '; height: 22px;" height="22">' + combo2Row2y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2z.style.width + '; height: 22px;" height="22">' + combo2Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 22px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="2" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo2Row3a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color3t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3b.style.width + '; height: 22px;" height="22">' + combo2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3c.style.width + '; height: 22px;" height="22">' + combo2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + combo2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3y.style.width + '; height: 22px;" height="22">' + combo2Row3y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3z.style.width + '; height: 22px;" height="22">' + combo2Row3z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 22px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="2" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo2Row4a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color4t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row4b.style.width + '; height: 22px;" height="22">' + combo2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row4c.style.width + '; height: 22px;" height="22">' + combo2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + combo2Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row4y.style.width + '; height: 22px;" height="22">' + combo2Row4y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row4z.style.width + '; height: 22px;" height="22">' + combo2Row4z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 22px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="2" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo2Row5a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color5t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row5b.style.width + '; height: 22px;" height="22">' + combo2Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row5c.style.width + '; height: 22px;" height="22">' + combo2Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + combo2Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row5y.style.width + '; height: 22px;" height="22">' + combo2Row5y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row5z.style.width + '; height: 22px;" height="22">' + combo2Row5z.innerHTML + '</td></tr></table> </td></tr>' + combo2srcCode + ' </table> </td></tr></table> ' + botSpace;
        combo2Output.textContent = chartCode;
        combo2Weight.textContent = Math.ceil(combo2Output.value.length / 1024) + 'KB';
    }
    combo2Output.style.opacity = "";
    combo2Weight.style.opacity = "";
    combo2Output.style.borderColor = "#166dfc";
    combo2Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(combo2Output.value);
});
combo2Output.addEventListener("click", () => {
    combo2Output.select();
});




// Combo Chart III Row Selection
const combo3BarsT = document.getElementsByClassName("combo3BarsT"); // Title + Top Bar
const combo3BarsB = document.getElementsByClassName("combo3BarsB"); // Bottom Bar
const combo3Controls = document.getElementsByClassName("combo3Controls");
const rowsData23 = document.getElementById("rowsData23");
rowsData23.addEventListener("change", () => {
    for (var i = 0; i < combo3Controls.length; i++) {
        combo3Controls[i].style.display = "none";
        for (var x = 0; x < rowsData23.value; x++) {
            combo3Controls[x].style.display = "block";
        }
    }
    for (var i = 0; i < combo3BarsT.length; i++) {
        combo3BarsT[i].style.display = "none";
        combo3BarsB[i].style.display = "none";
        for (var x = 0; x < rowsData23.value; x++) {
            combo3BarsT[x].style.display = "block";
            combo3BarsB[x].style.display = "block";
        }
    }
});

// Combo Chart III Caption
let combo3TopBarSpace = "0";
let combo3csCode = "";
const combo3Cap = document.getElementById("combo3Cap"); // Caption or chart title
const combo3capText = document.getElementById("combo3capText"); // Caption or chart title text
combo3capText.oninput = function() {
    combo3Cap.innerHTML = combo3capText.value;
    if (combo3capText.value == "" && combo3subText.value == "") {
        combo3BarsT[0].firstElementChild.style.padding = "0"; // Targets the first data bar below legend
        combo3TopBarSpace = "0"; // Padding for first data bar below legend for output code
        combo3Cap.style.marginBottom = "0";
        return combo3csCode = "";
    } else if (combo3capText.value == "" && combo3subText.value) {
        combo3BarsT[0].firstElementChild.style.padding = "20px 0 0 0";
        combo3TopBarSpace = "20px 0 0 0";
        combo3Cap.style.marginBottom = "0";
        return combo3csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + combo3Sub.innerHTML + '</td> </tr>';
    } else if (combo3capText.value && combo3subText.value == "") {
        combo3BarsT[0].firstElementChild.style.padding = "0";
        combo3TopBarSpace = "0";
        combo3Cap.style.marginBottom = "20px";
        return combo3csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + combo3Cap.innerHTML + '</caption>';
    } else if (combo3capText.value && combo3subText.value) {
        combo3BarsT[0].firstElementChild.style.padding = "20px 0 0 0";
        combo3TopBarSpace = "20px 0 0 0";
        combo3Cap.style.marginBottom = "4px";
        return combo3csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + combo3Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + combo3Sub.innerHTML + '</td> </tr>';
    }
};
// Combo Chart III Subtitle
const combo3Sub = document.getElementById("combo3Sub"); // Chart subtitle
const combo3subText = document.getElementById("combo3subText"); // Chart subtitle text
combo3subText.oninput = function() {
    combo3Sub.innerHTML = combo3subText.value;
    if (combo3subText.value == "" && combo3capText.value == "") {
        combo3BarsT[0].firstElementChild.style.padding = "0";
        combo3TopBarSpace = "0";
        combo3Cap.style.marginBottom = "0";
        return combo3csCode = "";
    } else if (combo3subText.value == "" && combo3capText.value) {
        combo3BarsT[0].firstElementChild.style.padding = "0";
        combo3TopBarSpace = "0";
        combo3Cap.style.marginBottom = "20px";
        return combo3csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + combo3Cap.innerHTML + '</caption>';
    } else if (combo3subText.value && combo3capText.value == "") {
        combo3BarsT[0].firstElementChild.style.padding = "20px 0 0 0";
        combo3TopBarSpace = "20px 0 0 0";
        combo3Cap.style.marginBottom = "0";
        return combo3csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + combo3Sub.innerHTML + '</td> </tr>';
    } else if (combo3subText.value && combo3capText.value) {
        combo3BarsT[0].firstElementChild.style.padding = "20px 0 0 0";
        combo3TopBarSpace = "20px 0 0 0";
        combo3Cap.style.marginBottom = "4px";
        return combo3csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + combo3Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + combo3Sub.innerHTML + '</td> </tr>';
    }
};
// Combo Chart II Source
let combo3srcCode = "";
const combo3Source = document.getElementById("combo3Source"); // Chart source
const combo3srcText = document.getElementById("combo3srcText"); // Chart source text
combo3srcText.oninput = function() {
    combo3Source.innerHTML = combo3srcText.value;
    combo3Source.style.paddingTop = combo3srcText.value ? "20px" : "0";
    combo3srcCode = combo3srcText.value ? '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 20px; text-align: left;">' + combo3Source.innerHTML + '</td></tr>' : "";
};

// Combo III Chart Color Picker
const combo3colorPickT = document.getElementById("combo3colorPickT");
combo3colorPickT.addEventListener("change", (evt) => {
    combo3Row1tsp.style.backgroundColor = evt.detail.hex;
    combo3Row1b.style.backgroundColor = evt.detail.hex;
    combo3Row1c.style.backgroundColor = evt.detail.hex;
    combo3Color1t.value = evt.detail.hex;
    combo3Row2tsp.style.backgroundColor = evt.detail.hex;
    combo3Row2b.style.backgroundColor = evt.detail.hex;
    combo3Row2c.style.backgroundColor = evt.detail.hex;
    combo3Color2t.value = evt.detail.hex;
    combo3Row3tsp.style.backgroundColor = evt.detail.hex;
    combo3Row3b.style.backgroundColor = evt.detail.hex;
    combo3Row3c.style.backgroundColor = evt.detail.hex;
    combo3Color3t.value = evt.detail.hex;
    combo3Row4tsp.style.backgroundColor = evt.detail.hex;
    combo3Row4b.style.backgroundColor = evt.detail.hex;
    combo3Row4c.style.backgroundColor = evt.detail.hex;
    combo3Color4t.value = evt.detail.hex;
    combo3Row5tsp.style.backgroundColor = evt.detail.hex;
    combo3Row5b.style.backgroundColor = evt.detail.hex;
    combo3Row5c.style.backgroundColor = evt.detail.hex;
    combo3Color5t.value = evt.detail.hex;
});
const combo3colorPickB = document.getElementById("combo3colorPickB");
combo3colorPickB.addEventListener("change", (evt) => {
    combo3Row1bsp.style.backgroundColor = evt.detail.hex;
    combo3Row1x.style.backgroundColor = evt.detail.hex;
    combo3Row1y.style.backgroundColor = evt.detail.hex;
    combo3Color1b.value = evt.detail.hex;
    combo3Row2bsp.style.backgroundColor = evt.detail.hex;
    combo3Row2x.style.backgroundColor = evt.detail.hex;
    combo3Row2y.style.backgroundColor = evt.detail.hex;
    combo3Color2b.value = evt.detail.hex;
    combo3Row3bsp.style.backgroundColor = evt.detail.hex;
    combo3Row3x.style.backgroundColor = evt.detail.hex;
    combo3Row3y.style.backgroundColor = evt.detail.hex;
    combo3Color3b.value = evt.detail.hex;
    combo3Row4bsp.style.backgroundColor = evt.detail.hex;
    combo3Row4x.style.backgroundColor = evt.detail.hex;
    combo3Row4y.style.backgroundColor = evt.detail.hex;
    combo3Color4b.value = evt.detail.hex;
    combo3Row5bsp.style.backgroundColor = evt.detail.hex;
    combo3Row5x.style.backgroundColor = evt.detail.hex;
    combo3Row5y.style.backgroundColor = evt.detail.hex;
    combo3Color5b.value = evt.detail.hex;
});

// Combo Chart II Row Customization Logic
const combo3Row1tsp = document.getElementById("combo3Row1tsp");
const combo3Row1a = document.getElementById("combo3Row1a");
const combo3Row1b = document.getElementById("combo3Row1b");
const combo3Row1c = document.getElementById("combo3Row1c");
const combo3Row1d = document.getElementById("combo3Row1d");
const combo3Row1bsp = document.getElementById("combo3Row1bsp");
const combo3Row1x = document.getElementById("combo3Row1x");
const combo3Row1y = document.getElementById("combo3Row1y");
const combo3Row1z = document.getElementById("combo3Row1z");
const combo3Row2tsp = document.getElementById("combo3Row2tsp");
const combo3Row2a = document.getElementById("combo3Row2a");
const combo3Row2b = document.getElementById("combo3Row2b");
const combo3Row2c = document.getElementById("combo3Row2c");
const combo3Row2d = document.getElementById("combo3Row2d");
const combo3Row2bsp = document.getElementById("combo3Row2bsp");
const combo3Row2x = document.getElementById("combo3Row2x");
const combo3Row2y = document.getElementById("combo3Row2y");
const combo3Row2z = document.getElementById("combo3Row2z");
const combo3Row3tsp = document.getElementById("combo3Row3tsp");
const combo3Row3a = document.getElementById("combo3Row3a");
const combo3Row3b = document.getElementById("combo3Row3b");
const combo3Row3c = document.getElementById("combo3Row3c");
const combo3Row3d = document.getElementById("combo3Row3d");
const combo3Row3bsp = document.getElementById("combo3Row3bsp");
const combo3Row3x = document.getElementById("combo3Row3x");
const combo3Row3y = document.getElementById("combo3Row3y");
const combo3Row3z = document.getElementById("combo3Row3z");
const combo3Row4tsp = document.getElementById("combo3Row4tsp");
const combo3Row4a = document.getElementById("combo3Row4a");
const combo3Row4b = document.getElementById("combo3Row4b");
const combo3Row4c = document.getElementById("combo3Row4c");
const combo3Row4d = document.getElementById("combo3Row4d");
const combo3Row4bsp = document.getElementById("combo3Row4bsp");
const combo3Row4x = document.getElementById("combo3Row4x");
const combo3Row4y = document.getElementById("combo3Row4y");
const combo3Row4z = document.getElementById("combo3Row4z");
const combo3Row5tsp = document.getElementById("combo3Row5tsp");
const combo3Row5a = document.getElementById("combo3Row5a");
const combo3Row5b = document.getElementById("combo3Row5b");
const combo3Row5c = document.getElementById("combo3Row5c");
const combo3Row5d = document.getElementById("combo3Row5d");
const combo3Row5bsp = document.getElementById("combo3Row5bsp");
const combo3Row5x = document.getElementById("combo3Row5x");
const combo3Row5y = document.getElementById("combo3Row5y");
const combo3Row5z = document.getElementById("combo3Row5z");

// Row 1 Customization Logic
const combo3Text1 = document.getElementById("combo3Text1"); // Combo bar title text (not caption)
combo3Text1.oninput = function() {
    if (combo3Text1.value == "") {
        combo3Row1a.innerHTML = combo3Text1.value;
    } else if (combo3Text1.value) {
        combo3Row1a.innerHTML = combo3Text1.value;
    }
};
const combo3Size1t = document.getElementById("combo3Size1t");
combo3Size1t.oninput = function() {
    combo3Row1c.style.width = ((Math.abs(combo3Size1t.value)) * .75) + "%";
    combo3Row1d.style.width = ((75 - (Math.abs(combo3Size1t.value)) * .75))+ "%";
};
const combo3Text1tf = document.getElementById("combo3Text1tf"); // Top combo bar front label text
combo3Text1tf.oninput = function() {
    if (combo3Text1tf.value == "") {
        combo3Row1b.innerHTML = combo3Text1tf.value;
    } else if (combo3Text1tf.value) {
        combo3Row1b.innerHTML = combo3Text1tf.value;
    }
};
const combo3Text1te = document.getElementById("combo3Text1te"); // Top combo bar end label text
combo3Text1te.oninput = function() {
    if (combo3Text1te.value == "") {
        combo3Row1d.innerHTML = combo3Text1te.value;
    } else if (combo3Text1te.value) {
        combo3Row1d.innerHTML = "&nbsp;" + combo3Text1te.value;
    }
};
const combo3Label1te = document.getElementById("combo3Label1te"); // Top combo bar end label click logic
combo3Label1te.addEventListener("click", () => {
    if (combo3Text1te.value == "") {
        combo3Row1c.innerHTML = "";
        combo3Row1d.innerHTML = "";
    } else if (combo3Text1te.value) {
        combo3Row1c.innerHTML = combo3Text1te.value + "&nbsp;";
        combo3Text1te.value = "";
        combo3Row1d.innerHTML = "";
    }
});
const combo3Color1t = document.getElementById("combo3Color1t");
combo3Color1t.oninput = function() {
    combo3Row1tsp.style.backgroundColor = combo3Color1t.value;
    combo3Row1b.style.backgroundColor = combo3Color1t.value;
    combo3Row1c.style.backgroundColor = combo3Color1t.value;
};
const combo3Size1b = document.getElementById("combo3Size1b");
combo3Size1b.oninput = function() {
    combo3Row1y.style.width = ((Math.abs(combo3Size1b.value)) * .75) + "%";
    combo3Row1z.style.width = ((75 - (Math.abs(combo3Size1b.value)) * .75))+ "%";
};
const combo3Text1bf = document.getElementById("combo3Text1bf"); // Bottom combo bar front label text
combo3Text1bf.oninput = function() {
    if (combo3Text1bf.value == "") {
        combo3Row1x.innerHTML = combo3Text1bf.value;
    } else if (combo3Text1bf.value) {
        combo3Row1x.innerHTML = combo3Text1bf.value;
    }
};
const combo3Text1be = document.getElementById("combo3Text1be"); // Bottom combo bar end label text
combo3Text1be.oninput = function() {
    if (combo3Text1be.value == "") {
        combo3Row1z.innerHTML = combo3Text1be.value;
    } else if (combo3Text1be.value) {
        combo3Row1z.innerHTML = "&nbsp;" + combo3Text1be.value;
    }
};
const combo3Label1be = document.getElementById("combo3Label1be"); // Bottom combo bar end label click logic
combo3Label1be.addEventListener("click", () => {
    if (combo3Text1be.value == "") {
        combo3Row1y.innerHTML = "";
        combo3Row1z.innerHTML = "";
    } else if (combo3Text1be.value) {
        combo3Row1y.innerHTML = combo3Text1be.value + "&nbsp;";
        combo3Text1be.value = "";
        combo3Row1z.innerHTML = "";
    }
});
const combo3Color1b = document.getElementById("combo3Color1b");
combo3Color1b.oninput = function() {
    combo3Row1bsp.style.backgroundColor = combo3Color1b.value;
    combo3Row1x.style.backgroundColor = combo3Color1b.value;
    combo3Row1y.style.backgroundColor = combo3Color1b.value;
};

// Row 2 Customization Logic
const combo3Text2 = document.getElementById("combo3Text2"); // Combo bar title text (not caption)
combo3Text2.oninput = function() {
    if (combo3Text2.value == "") {
        combo3Row2a.innerHTML = combo3Text2.value;
    } else if (combo3Text2.value) {
        combo3Row2a.innerHTML = combo3Text2.value;
    }
};
const combo3Size2t = document.getElementById("combo3Size2t");
combo3Size2t.oninput = function() {
    combo3Row2c.style.width = ((Math.abs(combo3Size2t.value)) * .75) + "%";
    combo3Row2d.style.width = ((75 - (Math.abs(combo3Size2t.value)) * .75))+ "%";
};
const combo3Text2tf = document.getElementById("combo3Text2tf"); // Top combo bar front label text
combo3Text2tf.oninput = function() {
    if (combo3Text2tf.value == "") {
        combo3Row2b.innerHTML = combo3Text2tf.value;
    } else if (combo3Text2tf.value) {
        combo3Row2b.innerHTML = combo3Text2tf.value;
    }
};
const combo3Text2te = document.getElementById("combo3Text2te"); // Top combo bar end label text
combo3Text2te.oninput = function() {
    if (combo3Text2te.value == "") {
        combo3Row2d.innerHTML = combo3Text2te.value;
    } else if (combo3Text2te.value) {
        combo3Row2d.innerHTML = "&nbsp;" + combo3Text2te.value;
    }
};
const combo3Label2te = document.getElementById("combo3Label2te"); // Top combo bar end label click logic
combo3Label2te.addEventListener("click", () => {
    if (combo3Text2te.value == "") {
        combo3Row2c.innerHTML = "";
        combo3Row2d.innerHTML = "";
    } else if (combo3Text2te.value) {
        combo3Row2c.innerHTML = combo3Text2te.value + "&nbsp;";
        combo3Text2te.value = "";
        combo3Row2d.innerHTML = "";
    }
});
const combo3Color2t = document.getElementById("combo3Color2t");
combo3Color2t.oninput = function() {
    combo3Row2tsp.style.backgroundColor = combo3Color2t.value;
    combo3Row2b.style.backgroundColor = combo3Color2t.value;
    combo3Row2c.style.backgroundColor = combo3Color2t.value;
};
const combo3Size2b = document.getElementById("combo3Size2b");
combo3Size2b.oninput = function() {
    combo3Row2y.style.width = ((Math.abs(combo3Size2b.value)) * .75) + "%";
    combo3Row2z.style.width = ((75 - (Math.abs(combo3Size2b.value)) * .75))+ "%";
};
const combo3Text2bf = document.getElementById("combo3Text2bf"); // Bottom combo bar front label text
combo3Text2bf.oninput = function() {
    if (combo3Text2bf.value == "") {
        combo3Row2x.innerHTML = combo3Text2bf.value;
    } else if (combo3Text2bf.value) {
        combo3Row2x.innerHTML = combo3Text2bf.value;
    }
};
const combo3Text2be = document.getElementById("combo3Text2be"); // Bottom combo bar end label text
combo3Text2be.oninput = function() {
    if (combo3Text2be.value == "") {
        combo3Row2z.innerHTML = combo3Text2be.value;
    } else if (combo3Text2be.value) {
        combo3Row2z.innerHTML = "&nbsp;" + combo3Text2be.value;
    }
};
const combo3Label2be = document.getElementById("combo3Label2be"); // Bottom combo bar end label click logic
combo3Label2be.addEventListener("click", () => {
    if (combo3Text2be.value == "") {
        combo3Row2y.innerHTML = "";
        combo3Row2z.innerHTML = "";
    } else if (combo3Text2be.value) {
        combo3Row2y.innerHTML = combo3Text2be.value + "&nbsp;";
        combo3Text2be.value = "";
        combo3Row2z.innerHTML = "";
    }
});
const combo3Color2b = document.getElementById("combo3Color2b");
combo3Color2b.oninput = function() {
    combo3Row2bsp.style.backgroundColor = combo3Color2b.value;
    combo3Row2x.style.backgroundColor = combo3Color2b.value;
    combo3Row2y.style.backgroundColor = combo3Color2b.value;
};

// Row 3 Customization Logic
const combo3Text3 = document.getElementById("combo3Text3"); // Combo bar title text (not caption)
combo3Text3.oninput = function() {
    if (combo3Text3.value == "") {
        combo3Row3a.innerHTML = combo3Text3.value;
    } else if (combo3Text3.value) {
        combo3Row3a.innerHTML = combo3Text3.value;
    }
};
const combo3Size3t = document.getElementById("combo3Size3t");
combo3Size3t.oninput = function() {
    combo3Row3c.style.width = ((Math.abs(combo3Size3t.value)) * .75) + "%";
    combo3Row3d.style.width = ((75 - (Math.abs(combo3Size3t.value)) * .75))+ "%";
};
const combo3Text3tf = document.getElementById("combo3Text3tf"); // Top combo bar front label text
combo3Text3tf.oninput = function() {
    if (combo3Text3tf.value == "") {
        combo3Row3b.innerHTML = combo3Text3tf.value;
    } else if (combo3Text3tf.value) {
        combo3Row3b.innerHTML = combo3Text3tf.value;
    }
};
const combo3Text3te = document.getElementById("combo3Text3te"); // Top combo bar end label text
combo3Text3te.oninput = function() {
    if (combo3Text3te.value == "") {
        combo3Row3d.innerHTML = combo3Text3te.value;
    } else if (combo3Text3te.value) {
        combo3Row3d.innerHTML = "&nbsp;" + combo3Text3te.value;
    }
};
const combo3Label3te = document.getElementById("combo3Label3te"); // Top combo bar end label click logic
combo3Label3te.addEventListener("click", () => {
    if (combo3Text3te.value == "") {
        combo3Row3c.innerHTML = "";
        combo3Row3d.innerHTML = "";
    } else if (combo3Text3te.value) {
        combo3Row3c.innerHTML = combo3Text3te.value + "&nbsp;";
        combo3Text3te.value = "";
        combo3Row3d.innerHTML = "";
    }
});
const combo3Color3t = document.getElementById("combo3Color3t");
combo3Color3t.oninput = function() {
    combo3Row3tsp.style.backgroundColor = combo3Color3t.value;
    combo3Row3b.style.backgroundColor = combo3Color3t.value;
    combo3Row3c.style.backgroundColor = combo3Color3t.value;
};
const combo3Size3b = document.getElementById("combo3Size3b");
combo3Size3b.oninput = function() {
    combo3Row3y.style.width = ((Math.abs(combo3Size3b.value)) * .75) + "%";
    combo3Row3z.style.width = ((75 - (Math.abs(combo3Size3b.value)) * .75))+ "%";
};
const combo3Text3bf = document.getElementById("combo3Text3bf"); // Bottom combo bar front label text
combo3Text3bf.oninput = function() {
    if (combo3Text3bf.value == "") {
        combo3Row3x.innerHTML = combo3Text3bf.value;
    } else if (combo3Text3bf.value) {
        combo3Row3x.innerHTML = combo3Text3bf.value;
    }
};
const combo3Text3be = document.getElementById("combo3Text3be"); // Bottom combo bar end label text
combo3Text3be.oninput = function() {
    if (combo3Text3be.value == "") {
        combo3Row3z.innerHTML = combo3Text3be.value;
    } else if (combo3Text3be.value) {
        combo3Row3z.innerHTML = "&nbsp;" + combo3Text3be.value;
    }
};
const combo3Label3be = document.getElementById("combo3Label3be"); // Bottom combo bar end label click logic
combo3Label3be.addEventListener("click", () => {
    if (combo3Text3be.value == "") {
        combo3Row3y.innerHTML = "";
        combo3Row3z.innerHTML = "";
    } else if (combo3Text3be.value) {
        combo3Row3y.innerHTML = combo3Text3be.value + "&nbsp;";
        combo3Text3be.value = "";
        combo3Row3z.innerHTML = "";
    }
});
const combo3Color3b = document.getElementById("combo3Color3b");
combo3Color3b.oninput = function() {
    combo3Row3bsp.style.backgroundColor = combo3Color3b.value;
    combo3Row3x.style.backgroundColor = combo3Color3b.value;
    combo3Row3y.style.backgroundColor = combo3Color3b.value;
};

// Row 4 Customization Logic
const combo3Text4 = document.getElementById("combo3Text4"); // Combo bar title text (not caption)
combo3Text4.oninput = function() {
    if (combo3Text4.value == "") {
        combo3Row4a.innerHTML = combo3Text4.value;
    } else if (combo3Text4.value) {
        combo3Row4a.innerHTML = combo3Text4.value;
    }
};
const combo3Size4t = document.getElementById("combo3Size4t");
combo3Size4t.oninput = function() {
    combo3Row4c.style.width = ((Math.abs(combo3Size4t.value)) * .75) + "%";
    combo3Row4d.style.width = ((75 - (Math.abs(combo3Size4t.value)) * .75))+ "%";
};
const combo3Text4tf = document.getElementById("combo3Text4tf"); // Top combo bar front label text
combo3Text4tf.oninput = function() {
    if (combo3Text4tf.value == "") {
        combo3Row4b.innerHTML = combo3Text4tf.value;
    } else if (combo3Text4tf.value) {
        combo3Row4b.innerHTML = combo3Text4tf.value;
    }
};
const combo3Text4te = document.getElementById("combo3Text4te"); // Top combo bar end label text
combo3Text4te.oninput = function() {
    if (combo3Text4te.value == "") {
        combo3Row4d.innerHTML = combo3Text4te.value;
    } else if (combo3Text4te.value) {
        combo3Row4d.innerHTML = "&nbsp;" + combo3Text4te.value;
    }
};
const combo3Label4te = document.getElementById("combo3Label4te"); // Top combo bar end label click logic
combo3Label4te.addEventListener("click", () => {
    if (combo3Text4te.value == "") {
        combo3Row4c.innerHTML = "";
        combo3Row4d.innerHTML = "";
    } else if (combo3Text4te.value) {
        combo3Row4c.innerHTML = combo3Text4te.value + "&nbsp;";
        combo3Text4te.value = "";
        combo3Row4d.innerHTML = "";
    }
});
const combo3Color4t = document.getElementById("combo3Color4t");
combo3Color4t.oninput = function() {
    combo3Row4tsp.style.backgroundColor = combo3Color4t.value;
    combo3Row4b.style.backgroundColor = combo3Color4t.value;
    combo3Row4c.style.backgroundColor = combo3Color4t.value;
};
const combo3Size4b = document.getElementById("combo3Size4b");
combo3Size4b.oninput = function() {
    combo3Row4y.style.width = ((Math.abs(combo3Size4b.value)) * .75) + "%";
    combo3Row4z.style.width = ((75 - (Math.abs(combo3Size4b.value)) * .75))+ "%";
};
const combo3Text4bf = document.getElementById("combo3Text4bf"); // Bottom combo bar front label text
combo3Text4bf.oninput = function() {
    if (combo3Text4bf.value == "") {
        combo3Row4x.innerHTML = combo3Text4bf.value;
    } else if (combo3Text4bf.value) {
        combo3Row4x.innerHTML = combo3Text4bf.value;
    }
};
const combo3Text4be = document.getElementById("combo3Text4be"); // Bottom combo bar end label text
combo3Text4be.oninput = function() {
    if (combo3Text4be.value == "") {
        combo3Row4z.innerHTML = combo3Text4be.value;
    } else if (combo3Text4be.value) {
        combo3Row4z.innerHTML = "&nbsp;" + combo3Text4be.value;
    }
};
const combo3Label4be = document.getElementById("combo3Label4be"); // Bottom combo bar end label click logic
combo3Label4be.addEventListener("click", () => {
    if (combo3Text4be.value == "") {
        combo3Row4y.innerHTML = "";
        combo3Row4z.innerHTML = "";
    } else if (combo3Text4be.value) {
        combo3Row4y.innerHTML = combo3Text4be.value + "&nbsp;";
        combo3Text4be.value = "";
        combo3Row4z.innerHTML = "";
    }
});
const combo3Color4b = document.getElementById("combo3Color4b");
combo3Color4b.oninput = function() {
    combo3Row4bsp.style.backgroundColor = combo3Color4b.value;
    combo3Row4x.style.backgroundColor = combo3Color4b.value;
    combo3Row4y.style.backgroundColor = combo3Color4b.value;
};

// Row 5 Customization Logic
const combo3Text5 = document.getElementById("combo3Text5"); // Combo bar title text (not caption)
combo3Text5.oninput = function() {
    if (combo3Text5.value == "") {
        combo3Row5a.innerHTML = combo3Text5.value;
    } else if (combo3Text5.value) {
        combo3Row5a.innerHTML = combo3Text5.value;
    }
};
const combo3Size5t = document.getElementById("combo3Size5t");
combo3Size5t.oninput = function() {
    combo3Row5c.style.width = ((Math.abs(combo3Size5t.value)) * .75) + "%";
    combo3Row5d.style.width = ((75 - (Math.abs(combo3Size5t.value)) * .75))+ "%";
};
const combo3Text5tf = document.getElementById("combo3Text5tf"); // Top combo bar front label text
combo3Text5tf.oninput = function() {
    if (combo3Text5tf.value == "") {
        combo3Row5b.innerHTML = combo3Text5tf.value;
    } else if (combo3Text5tf.value) {
        combo3Row5b.innerHTML = combo3Text5tf.value;
    }
};
const combo3Text5te = document.getElementById("combo3Text5te"); // Top combo bar end label text
combo3Text5te.oninput = function() {
    if (combo3Text5te.value == "") {
        combo3Row5d.innerHTML = combo3Text5te.value;
    } else if (combo3Text5te.value) {
        combo3Row5d.innerHTML = "&nbsp;" + combo3Text5te.value;
    }
};
const combo3Label5te = document.getElementById("combo3Label5te"); // Top combo bar end label click logic
combo3Label5te.addEventListener("click", () => {
    if (combo3Text5te.value == "") {
        combo3Row5c.innerHTML = "";
        combo3Row5d.innerHTML = "";
    } else if (combo3Text5te.value) {
        combo3Row5c.innerHTML = combo3Text5te.value + "&nbsp;";
        combo3Text5te.value = "";
        combo3Row5d.innerHTML = "";
    }
});
const combo3Color5t = document.getElementById("combo3Color5t");
combo3Color5t.oninput = function() {
    combo3Row5tsp.style.backgroundColor = combo3Color5t.value;
    combo3Row5b.style.backgroundColor = combo3Color5t.value;
    combo3Row5c.style.backgroundColor = combo3Color5t.value;
};
const combo3Size5b = document.getElementById("combo3Size5b");
combo3Size5b.oninput = function() {
    combo3Row5y.style.width = ((Math.abs(combo3Size5b.value)) * .75) + "%";
    combo3Row5z.style.width = ((75 - (Math.abs(combo3Size5b.value)) * .75))+ "%";
};
const combo3Text5bf = document.getElementById("combo3Text5bf"); // Bottom combo bar front label text
combo3Text5bf.oninput = function() {
    if (combo3Text5bf.value == "") {
        combo3Row5x.innerHTML = combo3Text5bf.value;
    } else if (combo3Text5bf.value) {
        combo3Row5x.innerHTML = combo3Text5bf.value;
    }
};
const combo3Text5be = document.getElementById("combo3Text5be"); // Bottom combo bar end label text
combo3Text5be.oninput = function() {
    if (combo3Text5be.value == "") {
        combo3Row5z.innerHTML = combo3Text5be.value;
    } else if (combo3Text5be.value) {
        combo3Row5z.innerHTML = "&nbsp;" + combo3Text5be.value;
    }
};
const combo3Label5be = document.getElementById("combo3Label5be"); // Bottom combo bar end label click logic
combo3Label5be.addEventListener("click", () => {
    if (combo3Text5be.value == "") {
        combo3Row5y.innerHTML = "";
        combo3Row5z.innerHTML = "";
    } else if (combo3Text5be.value) {
        combo3Row5y.innerHTML = combo3Text5be.value + "&nbsp;";
        combo3Text5be.value = "";
        combo3Row5z.innerHTML = "";
    }
});
const combo3Color5b = document.getElementById("combo3Color5b");
combo3Color5b.oninput = function() {
    combo3Row5bsp.style.backgroundColor = combo3Color5b.value;
    combo3Row5x.style.backgroundColor = combo3Color5b.value;
    combo3Row5y.style.backgroundColor = combo3Color5b.value;
};

// Combo Chart III Focus/Blur Events
combo3capText.addEventListener("focus", () => { combo3Cap.style.textShadow = shadowColor; });
combo3capText.addEventListener("blur", () => { combo3Cap.style.textShadow = "none"; });
combo3subText.addEventListener("focus", () => { combo3Sub.style.textShadow = shadowColor; });
combo3subText.addEventListener("blur", () => { combo3Sub.style.textShadow = "none"; });
combo3srcText.addEventListener("focus", () => { combo3Source.style.textShadow = shadowColor; });
combo3srcText.addEventListener("blur", () => { combo3Source.style.textShadow = "none"; });

// Generate Combo3 HTML Chart Logic
const combo3Weight = document.getElementById("combo3Weight");
const combo3Button = document.getElementById("combo3Button");
const combo3Output = document.getElementById("combo3Output");
combo3Button.addEventListener("mouseenter", () => { combo3Output.style.opacity = ".4"; combo3Weight.style.opacity = ".4"; } );
combo3Button.addEventListener("mouseleave", () => { combo3Output.style.opacity = ""; combo3Weight.style.opacity = ""; combo3Output.style.borderColor = ""; combo3Weight.style.color = ""; } );
combo3Button.addEventListener("click", () => {
    if (rowsData23.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + combo3csCode + ' <tr> <td align="left" style="padding: ' + combo3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="4" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo3Row1a.innerHTML + '</td></tr><tr> <td style="background-color: ' + combo3Color1t.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1c.style.width + '; height: 31px;" height="31">' + combo3Row1c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1d.style.width + '; height: 31px;" height="31">' + combo3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + combo3Color1b.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row1x.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1y.style.width + '; height: 31px;" height="31">' + combo3Row1y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1z.style.width + '; height: 31px;" height="31">' + combo3Row1z.innerHTML + '</td></tr></table> </td></tr>' + combo3srcCode + ' </table> </td></tr></table> ' + botSpace;
        combo3Output.textContent = chartCode;
        combo3Weight.textContent = Math.ceil(combo3Output.value.length / 1024) + 'KB';
    } else if (rowsData23.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + combo3csCode + ' <tr> <td align="left" style="padding: ' + combo3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="4" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo3Row1a.innerHTML + '</td></tr><tr> <td style="background-color: ' + combo3Color1t.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1c.style.width + '; height: 31px;" height="31">' + combo3Row1c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1d.style.width + '; height: 31px;" height="31">' + combo3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + combo3Color1b.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row1x.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1y.style.width + '; height: 31px;" height="31">' + combo3Row1y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1z.style.width + '; height: 31px;" height="31">' + combo3Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 30px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="4" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo3Row2a.innerHTML + '</td></tr><tr> <td style="background-color: ' + combo3Color2t.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color2t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color2t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row2c.style.width + '; height: 31px;" height="31">' + combo3Row2c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row2d.style.width + '; height: 31px;" height="31">' + combo3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + combo3Color2b.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row2x.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row2y.style.width + '; height: 31px;" height="31">' + combo3Row2y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row2z.style.width + '; height: 31px;" height="31">' + combo3Row2z.innerHTML + '</td></tr></table> </td></tr>' + combo3srcCode + ' </table> </td></tr></table> ' + botSpace;
        combo3Output.textContent = chartCode;
        combo3Weight.textContent = Math.ceil(combo3Output.value.length / 1024) + 'KB';
    } else if (rowsData23.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + combo3csCode + ' <tr> <td align="left" style="padding: ' + combo3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="4" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo3Row1a.innerHTML + '</td></tr><tr> <td style="background-color: ' + combo3Color1t.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1c.style.width + '; height: 31px;" height="31">' + combo3Row1c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1d.style.width + '; height: 31px;" height="31">' + combo3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + combo3Color1b.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row1x.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1y.style.width + '; height: 31px;" height="31">' + combo3Row1y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1z.style.width + '; height: 31px;" height="31">' + combo3Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 30px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="4" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo3Row2a.innerHTML + '</td></tr><tr> <td style="background-color: ' + combo3Color2t.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color2t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color2t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row2c.style.width + '; height: 31px;" height="31">' + combo3Row2c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row2d.style.width + '; height: 31px;" height="31">' + combo3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + combo3Color2b.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row2x.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row2y.style.width + '; height: 31px;" height="31">' + combo3Row2y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row2z.style.width + '; height: 31px;" height="31">' + combo3Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 30px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="4" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo3Row3a.innerHTML + '</td></tr><tr> <td style="background-color: ' + combo3Color3t.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color3t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color3t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row3c.style.width + '; height: 31px;" height="31">' + combo3Row3c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row3d.style.width + '; height: 31px;" height="31">' + combo3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + combo3Color3b.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row3x.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row3y.style.width + '; height: 31px;" height="31">' + combo3Row3y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row3z.style.width + '; height: 31px;" height="31">' + combo3Row3z.innerHTML + '</td></tr></table> </td></tr>' + combo3srcCode + ' </table> </td></tr></table> ' + botSpace;
        combo3Output.textContent = chartCode;
        combo3Weight.textContent = Math.ceil(combo3Output.value.length / 1024) + 'KB';
    } else if (rowsData23.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + combo3csCode + ' <tr> <td align="left" style="padding: ' + combo3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="4" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo3Row1a.innerHTML + '</td></tr><tr> <td style="background-color: ' + combo3Color1t.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1c.style.width + '; height: 31px;" height="31">' + combo3Row1c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1d.style.width + '; height: 31px;" height="31">' + combo3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + combo3Color1b.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row1x.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1y.style.width + '; height: 31px;" height="31">' + combo3Row1y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1z.style.width + '; height: 31px;" height="31">' + combo3Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 30px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="4" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo3Row2a.innerHTML + '</td></tr><tr> <td style="background-color: ' + combo3Color2t.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color2t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color2t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row2c.style.width + '; height: 31px;" height="31">' + combo3Row2c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row2d.style.width + '; height: 31px;" height="31">' + combo3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + combo3Color2b.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row2x.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row2y.style.width + '; height: 31px;" height="31">' + combo3Row2y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row2z.style.width + '; height: 31px;" height="31">' + combo3Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 30px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="4" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo3Row3a.innerHTML + '</td></tr><tr> <td style="background-color: ' + combo3Color3t.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color3t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color3t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row3c.style.width + '; height: 31px;" height="31">' + combo3Row3c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row3d.style.width + '; height: 31px;" height="31">' + combo3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + combo3Color3b.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row3x.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row3y.style.width + '; height: 31px;" height="31">' + combo3Row3y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row3z.style.width + '; height: 31px;" height="31">' + combo3Row3z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 30px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="4" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo3Row4a.innerHTML + '</td></tr><tr> <td style="background-color: ' + combo3Color4t.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color4t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row4b.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color4t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row4c.style.width + '; height: 31px;" height="31">' + combo3Row4c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row4d.style.width + '; height: 31px;" height="31">' + combo3Row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + combo3Color4b.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row4x.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row4y.style.width + '; height: 31px;" height="31">' + combo3Row4y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row4z.style.width + '; height: 31px;" height="31">' + combo3Row4z.innerHTML + '</td></tr></table> </td></tr>' + combo3srcCode + ' </table> </td></tr></table> ' + botSpace;
        combo3Output.textContent = chartCode;
        combo3Weight.textContent = Math.ceil(combo3Output.value.length / 1024) + 'KB';
    } else if (rowsData23.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + combo3csCode + ' <tr> <td align="left" style="padding: ' + combo3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="4" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo3Row1a.innerHTML + '</td></tr><tr> <td style="background-color: ' + combo3Color1t.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1c.style.width + '; height: 31px;" height="31">' + combo3Row1c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1d.style.width + '; height: 31px;" height="31">' + combo3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + combo3Color1b.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row1x.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1y.style.width + '; height: 31px;" height="31">' + combo3Row1y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row1z.style.width + '; height: 31px;" height="31">' + combo3Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 30px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="4" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo3Row2a.innerHTML + '</td></tr><tr> <td style="background-color: ' + combo3Color2t.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color2t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color2t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row2c.style.width + '; height: 31px;" height="31">' + combo3Row2c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row2d.style.width + '; height: 31px;" height="31">' + combo3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + combo3Color2b.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row2x.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row2y.style.width + '; height: 31px;" height="31">' + combo3Row2y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row2z.style.width + '; height: 31px;" height="31">' + combo3Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 30px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="4" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo3Row3a.innerHTML + '</td></tr><tr> <td style="background-color: ' + combo3Color3t.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color3t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color3t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row3c.style.width + '; height: 31px;" height="31">' + combo3Row3c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row3d.style.width + '; height: 31px;" height="31">' + combo3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + combo3Color3b.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row3x.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row3y.style.width + '; height: 31px;" height="31">' + combo3Row3y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row3z.style.width + '; height: 31px;" height="31">' + combo3Row3z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 30px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="4" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo3Row4a.innerHTML + '</td></tr><tr> <td style="background-color: ' + combo3Color4t.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color4t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row4b.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color4t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row4c.style.width + '; height: 31px;" height="31">' + combo3Row4c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row4d.style.width + '; height: 31px;" height="31">' + combo3Row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + combo3Color4b.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row4x.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row4y.style.width + '; height: 31px;" height="31">' + combo3Row4y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row4z.style.width + '; height: 31px;" height="31">' + combo3Row4z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 30px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="4" align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 20px;" height="20">' + combo3Row5a.innerHTML + '</td></tr><tr> <td style="background-color: ' + combo3Color5t.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color5t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row5b.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color5t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row5c.style.width + '; height: 31px;" height="31">' + combo3Row5c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row5d.style.width + '; height: 31px;" height="31">' + combo3Row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 2px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + combo3Color5b.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + combo3Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: 31px;" height="31">' + combo3Row5x.innerHTML + '</td><td align="right" style="background-color: ' + combo3Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row5y.style.width + '; height: 31px;" height="31">' + combo3Row5y.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo3Row5z.style.width + '; height: 31px;" height="31">' + combo3Row5z.innerHTML + '</td></tr></table> </td></tr><tr>' + combo3srcCode + ' </table> </td></tr></table> ' + botSpace;
        combo3Output.textContent = chartCode;
        combo3Weight.textContent = Math.ceil(combo3Output.value.length / 1024) + 'KB';
    }
    combo3Output.style.opacity = "";
    combo3Weight.style.opacity = "";
    combo3Output.style.borderColor = "#166dfc";
    combo3Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(combo3Output.value);
});
combo3Output.addEventListener("click", () => {
    combo3Output.select();
});