import { botSpace } from './index.js';
import { shadowColor } from './index.js';
import { barColorShadow } from './index.js';

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

// Stacked Chart III Caption
let stacked3csCode = "";
const stacked3Legend = document.getElementsByClassName("stacked3Legend"); // Chart legend
const stacked3Cap = document.getElementById("stacked3Cap"); // Caption or chart title
const stacked3capText = document.getElementById("stacked3capText"); // Caption or chart title text
stacked3capText.oninput = function() {
    stacked3Cap.innerHTML = stacked3capText.value;
    if (stacked3capText.value == "" && stacked3subText.value == "") {
        return stacked3csCode = "";
    } else if (stacked3capText.value == "" && stacked3subText.value) {
        return stacked3csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + stacked3Sub.innerHTML + '</td> </tr>';
    } else if (stacked3capText.value && stacked3subText.value == "") {
        return stacked3csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; text-align: left;">' + stacked3Cap.innerHTML + '</caption>';
    } else if (stacked3capText.value && stacked3subText.value) {
        stacked3Cap.style.marginBottom = "4px";
        return stacked3csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + stacked3Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + stacked3Sub.innerHTML + '</td> </tr>';
    }
};
// Stacked Chart III Subtitle
const stacked3Sub = document.getElementById("stacked3Sub"); // Chart subtitle
const stacked3subText = document.getElementById("stacked3subText"); // Chart subtitle text
stacked3subText.oninput = function() {
    stacked3Sub.innerHTML = stacked3subText.value;
    if (stacked3subText.value == "" && stacked3capText.value == "") {
        return stacked3csCode = "";
    } else if (stacked3subText.value == "" && stacked3capText.value) {
        return stacked3csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; text-align: left;">' + stacked3Cap.innerHTML + '</caption>';
    } else if (stacked3subText.value && stacked3capText.value == "") {
        return stacked3csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; text-align: left;">' + stacked3Sub.innerHTML + '</td> </tr>';
    } else if (stacked3subText.value && stacked3capText.value) {
        stacked3Cap.style.marginBottom = "4px";
        return stacked3csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + stacked3Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; text-align: left;">' + stacked3Sub.innerHTML + '</td> </tr>';
    }
};
// Stacked Chart III Source
let stacked3srcCode = "";
const stacked3Source = document.getElementById("stacked3Source"); // Chart source
const stacked3srcText = document.getElementById("stacked3srcText"); // Chart source text
stacked3srcText.oninput = function() {
    stacked3Source.innerHTML = stacked3srcText.value;
    stacked3Source.style.paddingTop = stacked3srcText.value ? "20px" : "0";
    stacked3srcCode = stacked3srcText.value ? '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 20px; text-align: left;">' + stacked3Source.innerHTML + '</td></tr>' : "";
};

// Stacked III Chart Color Picker
const stacked3colorPickL = document.getElementById("stacked3colorPickL");
stacked3colorPickL.addEventListener("change", (evt) => {
    stacked3Row1b.style.backgroundColor = evt.detail.hex;
    stacked3Color1a.value = evt.detail.hex;
    stacked3Row2b.style.backgroundColor = evt.detail.hex;
    stacked3Color2a.value = evt.detail.hex;
    stacked3Row3b.style.backgroundColor = evt.detail.hex;
    stacked3Color3a.value = evt.detail.hex;
    stacked3Row4b.style.backgroundColor = evt.detail.hex;
    stacked3Color4a.value = evt.detail.hex;
    stacked3Row5b.style.backgroundColor = evt.detail.hex;
    stacked3Color5a.value = evt.detail.hex;
    stacked3Row6b.style.backgroundColor = evt.detail.hex;
    stacked3Color6a.value = evt.detail.hex;
    stacked3Row7b.style.backgroundColor = evt.detail.hex;
    stacked3Color7a.value = evt.detail.hex;
    stacked3Row8b.style.backgroundColor = evt.detail.hex;
    stacked3Color8a.value = evt.detail.hex;
    stacked3Row9b.style.backgroundColor = evt.detail.hex;
    stacked3Color9a.value = evt.detail.hex;
    stacked3Row10b.style.backgroundColor = evt.detail.hex;
    stacked3Color10a.value = evt.detail.hex;
    legend3Color1.style.color = evt.detail.hex;
    legend3Color1.style.backgroundColor = evt.detail.hex;
    legend3Color1.style.borderColor = evt.detail.hex;
    legend3Color1x.value = evt.detail.hex;
    legend3Color1x.value = evt.detail.hex;
    legend3Color1x.value = evt.detail.hex;
});
const stacked3colorPickC = document.getElementById("stacked3colorPickC");
stacked3colorPickC.addEventListener("change", (evt) => {
    stacked3Row1c.style.backgroundColor = evt.detail.hex;
    stacked3Color1b.value = evt.detail.hex;
    stacked3Row2c.style.backgroundColor = evt.detail.hex;
    stacked3Color2b.value = evt.detail.hex;
    stacked3Row3c.style.backgroundColor = evt.detail.hex;
    stacked3Color3b.value = evt.detail.hex;
    stacked3Row4c.style.backgroundColor = evt.detail.hex;
    stacked3Color4b.value = evt.detail.hex;
    stacked3Row5c.style.backgroundColor = evt.detail.hex;
    stacked3Color5b.value = evt.detail.hex;
    stacked3Row6c.style.backgroundColor = evt.detail.hex;
    stacked3Color6b.value = evt.detail.hex;
    stacked3Row7c.style.backgroundColor = evt.detail.hex;
    stacked3Color7b.value = evt.detail.hex;
    stacked3Row8c.style.backgroundColor = evt.detail.hex;
    stacked3Color8b.value = evt.detail.hex;
    stacked3Row9c.style.backgroundColor = evt.detail.hex;
    stacked3Color9b.value = evt.detail.hex;
    stacked3Row10c.style.backgroundColor = evt.detail.hex;
    stacked3Color10b.value = evt.detail.hex;
    legend3Color2.style.color = evt.detail.hex;
    legend3Color2.style.backgroundColor = evt.detail.hex;
    legend3Color2.style.borderColor = evt.detail.hex;
    legend3Color2x.value = evt.detail.hex;
    legend3Color2x.value = evt.detail.hex;
    legend3Color2x.value = evt.detail.hex;
});
const stacked3colorPickR = document.getElementById("stacked3colorPickR");
stacked3colorPickR.addEventListener("change", (evt) => {
    stacked3Row1d.style.backgroundColor = evt.detail.hex;
    stacked3Color1c.value = evt.detail.hex;
    stacked3Row2d.style.backgroundColor = evt.detail.hex;
    stacked3Color2c.value = evt.detail.hex;
    stacked3Row3d.style.backgroundColor = evt.detail.hex;
    stacked3Color3c.value = evt.detail.hex;
    stacked3Row4d.style.backgroundColor = evt.detail.hex;
    stacked3Color4c.value = evt.detail.hex;
    stacked3Row5d.style.backgroundColor = evt.detail.hex;
    stacked3Color5c.value = evt.detail.hex;
    stacked3Row6d.style.backgroundColor = evt.detail.hex;
    stacked3Color6c.value = evt.detail.hex;
    stacked3Row7d.style.backgroundColor = evt.detail.hex;
    stacked3Color7c.value = evt.detail.hex;
    stacked3Row8d.style.backgroundColor = evt.detail.hex;
    stacked3Color8c.value = evt.detail.hex;
    stacked3Row9d.style.backgroundColor = evt.detail.hex;
    stacked3Color9c.value = evt.detail.hex;
    stacked3Row10d.style.backgroundColor = evt.detail.hex;
    stacked3Color10c.value = evt.detail.hex;
    legend3Color3.style.color = evt.detail.hex;
    legend3Color3.style.backgroundColor = evt.detail.hex;
    legend3Color3.style.borderColor = evt.detail.hex;
    legend3Color3x.value = evt.detail.hex;
    legend3Color3x.value = evt.detail.hex;
    legend3Color3x.value = evt.detail.hex;
});

// Stacked Chart III Text/Color Legend
let stacked3lgdCode = "";
const legend3Text1 = document.getElementById("legend3Text1");
const legend3Text1x = document.getElementById("legend3Text1x");
legend3Text1x.oninput = function() {
    legend3Text1.innerHTML = legend3Text1x.value;
    if (legend3Text1x.value == "" && legend3Text2x.value == "" && legend3Text3x.value == "" && legend3Color1x.value == "" && legend3Color2x.value == "" && legend3Color3x.value == "") {
        stacked3Legend[0].style.display = "none";
        return stacked3lgdCode = "";
    } else {
        stacked3Legend[0].style.display = "block";
        return stacked3lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend3Color1x.value + '; border: 1px solid ' + legend3Color1x.value + '; color: ' + legend3Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend3Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color2x.value + '; border: 1px solid ' + legend3Color2x.value + '; color: ' + legend3Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend3Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color3x.value + '; border: 1px solid ' + legend3Color3x.value + '; color: ' + legend3Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend3Text3.innerHTML + '</td></tr>';
    }
};
const legend3Text2 = document.getElementById("legend3Text2");
const legend3Text2x = document.getElementById("legend3Text2x");
legend3Text2x.oninput = function() {
    legend3Text2.innerHTML = legend3Text2x.value;
    if (legend3Text1x.value == "" && legend3Text2x.value == "" && legend3Text3x.value == "" && legend3Color1x.value == "" && legend3Color2x.value == "" && legend3Color3x.value == "") {
        stacked3Legend[0].style.display = "none";
        return stacked3lgdCode = "";
    } else {
        stacked3Legend[0].style.display = "block";
        return stacked3lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend3Color1x.value + '; border: 1px solid ' + legend3Color1x.value + '; color: ' + legend3Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend3Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color2x.value + '; border: 1px solid ' + legend3Color2x.value + '; color: ' + legend3Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend3Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color3x.value + '; border: 1px solid ' + legend3Color3x.value + '; color: ' + legend3Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend3Text3.innerHTML + '</td></tr>';
    }
};
const legend3Text3 = document.getElementById("legend3Text3");
const legend3Text3x = document.getElementById("legend3Text3x");
legend3Text3x.oninput = function() {
    legend3Text3.innerHTML = legend3Text3x.value;
    if (legend3Text1x.value == "" && legend3Text2x.value == "" && legend3Text3x.value == "" && legend3Color1x.value == "" && legend3Color2x.value == "" && legend3Color3x.value == "") {
        stacked3Legend[0].style.display = "none";
        return stacked3lgdCode = "";
    } else {
        stacked3Legend[0].style.display = "block";
        return stacked3lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend3Color1x.value + '; border: 1px solid ' + legend3Color1x.value + '; color: ' + legend3Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend3Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color2x.value + '; border: 1px solid ' + legend3Color2x.value + '; color: ' + legend3Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend3Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color3x.value + '; border: 1px solid ' + legend3Color3x.value + '; color: ' + legend3Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend3Text3.innerHTML + '</td></tr>';
    }
};
const legend3Color1 = document.getElementById("legend3Color1");
const legend3Color1x = document.getElementById("legend3Color1x");
legend3Color1x.oninput = function() {
    legend3Color1.style.color = legend3Color1x.value;
    legend3Color1.style.backgroundColor = legend3Color1x.value;
    legend3Color1.style.borderColor = legend3Color1x.value;
    if (legend3Text1x.value == "" && legend3Text2x.value == "" && legend3Text3x.value == "" && legend3Color1x.value == "" && legend3Color2x.value == "" && legend3Color3x.value == "") {
        stacked3Legend[0].style.display = "none";
        return stacked3lgdCode = "";
    } else {
        stacked3Legend[0].style.display = "block";
        return stacked3lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend3Color1x.value + '; border: 1px solid ' + legend3Color1x.value + '; color: ' + legend3Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend3Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color2x.value + '; border: 1px solid ' + legend3Color2x.value + '; color: ' + legend3Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend3Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color3x.value + '; border: 1px solid ' + legend3Color3x.value + '; color: ' + legend3Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend3Text3.innerHTML + '</td></tr>';
    }
};
const legend3Color2 = document.getElementById("legend3Color2");
const legend3Color2x = document.getElementById("legend3Color2x");
legend3Color2x.oninput = function() {
    legend3Color2.style.color = legend3Color2x.value;
    legend3Color2.style.backgroundColor = legend3Color2x.value;
    legend3Color2.style.borderColor = legend3Color2x.value;
    if (legend3Text1x.value == "" && legend3Text2x.value == "" && legend3Text3x.value == "" && legend3Color1x.value == "" && legend3Color2x.value == "" && legend3Color3x.value == "") {
        stacked3Legend[0].style.display = "none";
        return stacked3lgdCode = "";
    } else {
        stacked3Legend[0].style.display = "block";
        return stacked3lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend3Color1x.value + '; border: 1px solid ' + legend3Color1x.value + '; color: ' + legend3Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend3Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color2x.value + '; border: 1px solid ' + legend3Color2x.value + '; color: ' + legend3Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend3Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color3x.value + '; border: 1px solid ' + legend3Color3x.value + '; color: ' + legend3Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend3Text3.innerHTML + '</td></tr>';
    }
};
const legend3Color3 = document.getElementById("legend3Color3");
const legend3Color3x = document.getElementById("legend3Color3x");
legend3Color3x.oninput = function() {
    legend3Color3.style.color = legend3Color3x.value;
    legend3Color3.style.backgroundColor = legend3Color3x.value;
    legend3Color3.style.borderColor = legend3Color3x.value;
    if (legend3Text1x.value == "" && legend3Text2x.value == "" && legend3Text3x.value == "" && legend3Color1x.value == "" && legend3Color2x.value == "" && legend3Color3x.value == "") {
        stacked3Legend[0].style.display = "none";
        return stacked3lgdCode = "";
    } else {
        stacked3Legend[0].style.display = "block";
        return stacked3lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend3Color1x.value + '; border: 1px solid ' + legend3Color1x.value + '; color: ' + legend3Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend3Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color2x.value + '; border: 1px solid ' + legend3Color2x.value + '; color: ' + legend3Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend3Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend3Color3x.value + '; border: 1px solid ' + legend3Color3x.value + '; color: ' + legend3Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend3Text3.innerHTML + '</td></tr>';
    }
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
    stacked3Row1b.innerHTML = stacked3Text1a.value ? stacked3Text1a.value + "&nbsp;" : "";
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
    stacked3Row1c.innerHTML = stacked3Text1b.value ? stacked3Text1b.value + "&nbsp;" : "";
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
    stacked3Row1d.innerHTML = stacked3Text1c.value ? stacked3Text1c.value + "&nbsp;" : "";
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
    stacked3Row2b.innerHTML = stacked3Text2a.value ? stacked3Text2a.value + "&nbsp;" : "";
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
    stacked3Row2c.innerHTML = stacked3Text2b.value ? stacked3Text2b.value + "&nbsp;" : "";
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
    stacked3Row2d.innerHTML = stacked3Text2c.value ? stacked3Text2c.value + "&nbsp;" : "";
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
    stacked3Row3b.innerHTML = stacked3Text3a.value ? stacked3Text3a.value + "&nbsp;" : "";
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
    stacked3Row3c.innerHTML = stacked3Text3b.value ? stacked3Text3b.value + "&nbsp;" : "";
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
    stacked3Row3d.innerHTML = stacked3Text3c.value ? stacked3Text3c.value + "&nbsp;" : "";
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
    stacked3Row4b.innerHTML = stacked3Text4a.value ? stacked3Text4a.value + "&nbsp;" : "";
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
    stacked3Row4c.innerHTML = stacked3Text4b.value ? stacked3Text4b.value + "&nbsp;" : "";
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
    stacked3Row4d.innerHTML = stacked3Text4c.value ? stacked3Text4c.value + "&nbsp;" : "";
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
    stacked3Row5b.innerHTML = stacked3Text5a.value ? stacked3Text5a.value + "&nbsp;" : "";
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
    stacked3Row5c.innerHTML = stacked3Text5b.value ? stacked3Text5b.value + "&nbsp;" : "";
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
    stacked3Row5d.innerHTML = stacked3Text5c.value ? stacked3Text5c.value + "&nbsp;" : "";
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
    stacked3Row6b.innerHTML = stacked3Text6a.value ? stacked3Text6a.value + "&nbsp;" : "";
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
    stacked3Row6c.innerHTML = stacked3Text6b.value ? stacked3Text6b.value + "&nbsp;" : "";
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
    stacked3Row6d.innerHTML = stacked3Text6c.value ? stacked3Text6c.value + "&nbsp;" : "";
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
    stacked3Row7b.innerHTML = stacked3Text7a.value ? stacked3Text7a.value + "&nbsp;" : "";
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
    stacked3Row7c.innerHTML = stacked3Text7b.value ? stacked3Text7b.value + "&nbsp;" : "";
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
    stacked3Row7d.innerHTML = stacked3Text7c.value ? stacked3Text7c.value + "&nbsp;" : "";
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
    stacked3Row8b.innerHTML = stacked3Text8a.value ? stacked3Text8a.value + "&nbsp;" : "";
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
    stacked3Row8c.innerHTML = stacked3Text8b.value ? stacked3Text8b.value + "&nbsp;" : "";
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
    stacked3Row8d.innerHTML = stacked3Text8c.value ? stacked3Text8c.value + "&nbsp;" : "";
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
    stacked3Row9b.innerHTML = stacked3Text9a.value ? stacked3Text9a.value + "&nbsp;" : "";
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
    stacked3Row9c.innerHTML = stacked3Text9b.value ? stacked3Text9b.value + "&nbsp;" : "";
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
    stacked3Row9d.innerHTML = stacked3Text9c.value ? stacked3Text9c.value + "&nbsp;" : "";
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
    stacked3Row10b.innerHTML = stacked3Text10a.value ? stacked3Text10a.value + "&nbsp;" : "";
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
    stacked3Row10c.innerHTML = stacked3Text10b.value ? stacked3Text10b.value + "&nbsp;" : "";
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
    stacked3Row10d.innerHTML = stacked3Text10c.value ? stacked3Text10c.value + "&nbsp;" : "";
};
const stacked3Color10c = document.getElementById("stacked3Color10c");
stacked3Color10c.oninput = function() {
    stacked3Row10d.style.backgroundColor = stacked3Color10c.value;
};

// Stacked Chart III Height Adjustment
const stacked3rowArray = [stacked3Row1a, stacked3Row1b, stacked3Row1c, stacked3Row2a, stacked3Row2b, stacked3Row2c, stacked3Row3a, stacked3Row3b, stacked3Row3c, stacked3Row4a, stacked3Row4b, stacked3Row4c, stacked3Row5a, stacked3Row5b, stacked3Row5c, stacked3Row6a, stacked3Row6b, stacked3Row6c, stacked3Row7a, stacked3Row7b, stacked3Row7c, stacked3Row8a, stacked3Row8b, stacked3Row8c, stacked3Row9a, stacked3Row9b, stacked3Row9c, stacked3Row10a, stacked3Row10b, stacked3Row10c];
const stacked3inputArray = [stacked3Text1, stacked3Text2, stacked3Text3, stacked3Text4, stacked3Text5, stacked3Text6, stacked3Text7, stacked3Text8, stacked3Text9, stacked3Text10];
function stacked3BarHeight(x) {
    for (var i = 0; i < stacked3rowArray.length; i++) {
        if (stacked3inputArray[0].value.length <= 16 && stacked3inputArray[1].value.length <= 16 && stacked3inputArray[2].value.length <= 16 && stacked3inputArray[3].value.length <= 16 && stacked3inputArray[4].value.length <= 16 && stacked3inputArray[5].value.length <= 16 && stacked3inputArray[6].value.length <= 16 && stacked3inputArray[7].value.length <= 16 && stacked3inputArray[8].value.length <= 16 && stacked3inputArray[9].value.length <= 16) {
            // All labels must be <= 16 characters for the bar heights to be set at 28px
            stacked3rowArray[i].style.height = "28px";
            stacked3rowArray[i].height = "28";
        } else if (stacked3inputArray[x].value.length < 32 && stacked3inputArray[0].value.length < 32 && stacked3inputArray[1].value.length < 32 && stacked3inputArray[2].value.length < 32 && stacked3inputArray[3].value.length < 32 && stacked3inputArray[4].value.length < 32 && stacked3inputArray[5].value.length < 32 && stacked3inputArray[6].value.length < 32 && stacked3inputArray[7].value.length < 32 && stacked3inputArray[8].value.length < 32 && stacked3inputArray[9].value.length < 32) {
            // All labels must be < 32 characters and only one needs to be > 16 to set all bar heights at 36px
            stacked3rowArray[i].style.height = "36px";
            stacked3rowArray[i].height = "36";
        } else if (stacked3inputArray[0].value.length >= 32 || stacked3inputArray[1].value.length >= 32 || stacked3inputArray[2].value.length >= 32 || stacked3inputArray[3].value.length >= 32 || stacked3inputArray[4].value.length >= 32 || stacked3inputArray[5].value.length >= 32 || stacked3inputArray[6].value.length >= 32 || stacked3inputArray[7].value.length >= 32 || stacked3inputArray[8].value.length >= 32 || stacked3inputArray[9].value.length >= 32) {
            // Only one label needs to be >= 32 characters to set all bars heights to 54px
            stacked3rowArray[i].style.height = "54px";
            stacked3rowArray[i].height = "54";
        }
    }
};
stacked3inputArray[0].addEventListener("input", () => { stacked3BarHeight(0); });
stacked3inputArray[1].addEventListener("input", () => { stacked3BarHeight(1); });
stacked3inputArray[2].addEventListener("input", () => { stacked3BarHeight(2); });
stacked3inputArray[3].addEventListener("input", () => { stacked3BarHeight(3); });
stacked3inputArray[4].addEventListener("input", () => { stacked3BarHeight(4); });
stacked3inputArray[5].addEventListener("input", () => { stacked3BarHeight(5); });
stacked3inputArray[6].addEventListener("input", () => { stacked3BarHeight(6); });
stacked3inputArray[7].addEventListener("input", () => { stacked3BarHeight(7); });
stacked3inputArray[8].addEventListener("input", () => { stacked3BarHeight(8); });
stacked3inputArray[9].addEventListener("input", () => { stacked3BarHeight(9); });

// Stacked Chart III Focus/Blur Events
stacked3capText.addEventListener("focus", () => { stacked3Cap.style.textShadow = shadowColor; });
stacked3capText.addEventListener("blur", () => { stacked3Cap.style.textShadow = "none"; });
stacked3subText.addEventListener("focus", () => { stacked3Sub.style.textShadow = shadowColor; });
stacked3subText.addEventListener("blur", () => { stacked3Sub.style.textShadow = "none"; });
stacked3srcText.addEventListener("focus", () => { stacked3Source.style.textShadow = shadowColor; });
stacked3srcText.addEventListener("blur", () => { stacked3Source.style.textShadow = "none"; });
legend3Text1x.addEventListener("focus", () => { legend3Text1.style.textShadow = shadowColor; });
legend3Text1x.addEventListener("blur", () => { legend3Text1.style.textShadow = "none"; });
legend3Color1x.addEventListener("focus", () => { legend3Color1.style.boxShadow = barColorShadow; });
legend3Color1x.addEventListener("blur", () => { legend3Color1.style.boxShadow = "none"; });
legend3Text2x.addEventListener("focus", () => { legend3Text2.style.textShadow = shadowColor; });
legend3Text2x.addEventListener("blur", () => { legend3Text2.style.textShadow = "none"; });
legend3Color2x.addEventListener("focus", () => { legend3Color2.style.boxShadow = barColorShadow; });
legend3Color2x.addEventListener("blur", () => { legend3Color2.style.boxShadow = "none"; });
legend3Text3x.addEventListener("focus", () => { legend3Text3.style.textShadow = shadowColor; });
legend3Text3x.addEventListener("blur", () => { legend3Text3.style.textShadow = "none"; });
legend3Color3x.addEventListener("focus", () => { legend3Color3.style.boxShadow = barColorShadow; });
legend3Color3x.addEventListener("blur", () => { legend3Color3.style.boxShadow = "none"; });

// Generate Stacked Chart III HTML Chart Logic
const stacked3Weight = document.getElementById("stacked3Weight");
const stacked3Button = document.getElementById("stacked3Button");
const stacked3Output = document.getElementById("stacked3Output");
stacked3Button.addEventListener("mouseenter", () => { stacked3Output.style.opacity = ".4"; stacked3Weight.style.opacity = ".4"; } );
stacked3Button.addEventListener("mouseleave", () => { stacked3Output.style.opacity = ""; stacked3Weight.style.opacity = ""; stacked3Output.style.borderColor = ""; stacked3Weight.style.color = ""; } );
stacked3Button.addEventListener("click", () => {
    if (rowsData6.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked3csCode + stacked3lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr>' + stacked3srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked3Output.textContent = chartCode;
        stacked3Weight.textContent = Math.ceil(stacked3Output.value.length / 1024) + 'KB';
    } else if (rowsData6.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked3csCode + stacked3lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2d.innerHTML + '</td></tr></table> </td></tr>' + stacked3srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked3Output.textContent = chartCode;
        stacked3Weight.textContent = Math.ceil(stacked3Output.value.length / 1024) + 'KB';
    } else if (rowsData6.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked3csCode + stacked3lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3d.innerHTML + '</td></tr></table> </td></tr>' + stacked3srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked3Output.textContent = chartCode;
        stacked3Weight.textContent = Math.ceil(stacked3Output.value.length / 1024) + 'KB';
    } else if (rowsData6.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked3csCode + stacked3lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4d.innerHTML + '</td></tr></table> </td></tr>' + stacked3srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked3Output.textContent = chartCode;
        stacked3Weight.textContent = Math.ceil(stacked3Output.value.length / 1024) + 'KB';
    } else if (rowsData6.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked3csCode + stacked3lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5d.innerHTML + '</td></tr></table> </td></tr>' + stacked3srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked3Output.textContent = chartCode;
        stacked3Weight.textContent = Math.ceil(stacked3Output.value.length / 1024) + 'KB';
    } else if (rowsData6.value === "6") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked3csCode + stacked3lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6d.innerHTML + '</td></tr></table> </td></tr>' + stacked3srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked3Output.textContent = chartCode;
        stacked3Weight.textContent = Math.ceil(stacked3Output.value.length / 1024) + 'KB';
    } else if (rowsData6.value === "7") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked3csCode + stacked3lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row7c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row7d.innerHTML + '</td></tr></table> </td></tr>' + stacked3srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked3Output.textContent = chartCode;
        stacked3Weight.textContent = Math.ceil(stacked3Output.value.length / 1024) + 'KB';
    } else if (rowsData6.value === "8") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked3csCode + stacked3lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row7c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row7d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color8a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row8b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color8b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row8c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row8c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color8c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row8d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row8d.innerHTML + '</td></tr></table> </td></tr>' + stacked3srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked3Output.textContent = chartCode;
        stacked3Weight.textContent = Math.ceil(stacked3Output.value.length / 1024) + 'KB';
    } else if (rowsData6.value === "9") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked3csCode + stacked3lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row7c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row7d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color8a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row8b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color8b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row8c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row8c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color8c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row8d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row8d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row9a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color9a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row9b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row9b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color9b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row9c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row9c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color9c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row9d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row9d.innerHTML + '</td></tr></table> </td></tr>' + stacked3srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked3Output.textContent = chartCode;
        stacked3Weight.textContent = Math.ceil(stacked3Output.value.length / 1024) + 'KB';
    } else if (rowsData6.value === "10") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked3csCode + stacked3lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color1c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row1d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color2c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row2d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color3c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row3d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color4c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row4d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color5c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row5d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color6c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row6d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row7c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color7c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row7d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row7d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color8a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row8b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color8b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row8c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row8c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color8c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row8d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row8d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row9a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color9a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row9b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row9b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color9b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row9c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row9c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color9c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row9d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row9d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row10a.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color10a.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row10b.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row10b.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color10b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row10c.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row10c.innerHTML + '</td><td align="right" style="background-color: ' + stacked3Color10c.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked3Row10d.style.width + '; height: ' + stacked3Row1a.height + 'px;" height="' + stacked3Row1a.height + '">' + stacked3Row10d.innerHTML + '</td></tr></table> </td></tr>' + stacked3srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked3Output.textContent = chartCode;
        stacked3Weight.textContent = Math.ceil(stacked3Output.value.length / 1024) + 'KB';
    }
    stacked3Output.style.opacity = "";
    stacked3Weight.style.opacity = "";
    stacked3Output.style.borderColor = "#166dfc";
    stacked3Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(stacked3Output.value);
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

// Stacked Chart IV Caption
let stacked4csCode = "";
const stacked4Legend = document.getElementsByClassName("stacked4Legend"); // Chart legend
const stacked4Cap = document.getElementById("stacked4Cap"); // Caption or chart title
const stacked4capText = document.getElementById("stacked4capText"); // Caption or chart title text
stacked4capText.oninput = function() {
    stacked4Cap.innerHTML = stacked4capText.value;
    if (stacked4capText.value == "" && stacked4subText.value == "") {
        return stacked4csCode = "";
    } else if (stacked4capText.value == "" && stacked4subText.value) {
        return stacked4csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + stacked4Sub.innerHTML + '</td> </tr>';
    } else if (stacked4capText.value && stacked4subText.value == "") {
        return stacked4csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; text-align: left;">' + stacked4Cap.innerHTML + '</caption>';
    } else if (stacked4capText.value && stacked4subText.value) {
        stacked4Cap.style.marginBottom = "4px";
        return stacked4csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + stacked4Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + stacked4Sub.innerHTML + '</td> </tr>';
    }
};
// Stacked Chart IV Subtitle
const stacked4Sub = document.getElementById("stacked4Sub"); // Chart subtitle
const stacked4subText = document.getElementById("stacked4subText"); // Chart subtitle text
stacked4subText.oninput = function() {
    stacked4Sub.innerHTML = stacked4subText.value;
    if (stacked4subText.value == "" && stacked4capText.value == "") {
        return stacked4csCode = "";
    } else if (stacked4subText.value == "" && stacked4capText.value) {
        return stacked4csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; text-align: left;">' + stacked4Cap.innerHTML + '</caption>';
    } else if (stacked4subText.value && stacked4capText.value == "") {
        return stacked4csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + stacked4Sub.innerHTML + '</td> </tr>';
    } else if (stacked4subText.value && stacked4capText.value) {
        stacked4Cap.style.marginBottom = "4px";
        return stacked4csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + stacked4Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + stacked4Sub.innerHTML + '</td> </tr>';
    }
};
// Stacked Chart IV Source
let stacked4srcCode = "";
const stacked4Source = document.getElementById("stacked4Source"); // Chart source
const stacked4srcText = document.getElementById("stacked4srcText"); // Chart source text
stacked4srcText.oninput = function() {
    stacked4Source.innerHTML = stacked4srcText.value;
    stacked4Source.style.paddingTop = stacked4srcText.value ? "20px" : "0";
    stacked4srcCode = stacked4srcText.value ? '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 20px; text-align: left;">' + stacked4Source.innerHTML + '</td></tr>' : "";
};

// Stacked IV Chart Color Picker
const stacked4colorPickL = document.getElementById("stacked4colorPickL");
stacked4colorPickL.addEventListener("change", (evt) => {
    stacked4Row1b.style.backgroundColor = evt.detail.hex;
    stacked4Color1a.value = evt.detail.hex;
    stacked4Row2b.style.backgroundColor = evt.detail.hex;
    stacked4Color2a.value = evt.detail.hex;
    stacked4Row3b.style.backgroundColor = evt.detail.hex;
    stacked4Color3a.value = evt.detail.hex;
    stacked4Row4b.style.backgroundColor = evt.detail.hex;
    stacked4Color4a.value = evt.detail.hex;
    stacked4Row5b.style.backgroundColor = evt.detail.hex;
    stacked4Color5a.value = evt.detail.hex;
    stacked4Row6b.style.backgroundColor = evt.detail.hex;
    stacked4Color6a.value = evt.detail.hex;
    stacked4Row7b.style.backgroundColor = evt.detail.hex;
    stacked4Color7a.value = evt.detail.hex;
    stacked4Row8b.style.backgroundColor = evt.detail.hex;
    stacked4Color8a.value = evt.detail.hex;
    stacked4Row9b.style.backgroundColor = evt.detail.hex;
    stacked4Color9a.value = evt.detail.hex;
    stacked4Row10b.style.backgroundColor = evt.detail.hex;
    stacked4Color10a.value = evt.detail.hex;
    legend5Color1.style.color = evt.detail.hex;
    legend5Color1.style.backgroundColor = evt.detail.hex;
    legend5Color1.style.borderColor = evt.detail.hex;
    legend5Color1x.value = evt.detail.hex;
    legend5Color1x.value = evt.detail.hex;
    legend5Color1x.value = evt.detail.hex;
});
const stacked4colorPickC = document.getElementById("stacked4colorPickC");
stacked4colorPickC.addEventListener("change", (evt) => {
    stacked4Row1c.style.backgroundColor = evt.detail.hex;
    stacked4Color1b.value = evt.detail.hex;
    stacked4Row2c.style.backgroundColor = evt.detail.hex;
    stacked4Color2b.value = evt.detail.hex;
    stacked4Row3c.style.backgroundColor = evt.detail.hex;
    stacked4Color3b.value = evt.detail.hex;
    stacked4Row4c.style.backgroundColor = evt.detail.hex;
    stacked4Color4b.value = evt.detail.hex;
    stacked4Row5c.style.backgroundColor = evt.detail.hex;
    stacked4Color5b.value = evt.detail.hex;
    stacked4Row6c.style.backgroundColor = evt.detail.hex;
    stacked4Color6b.value = evt.detail.hex;
    stacked4Row7c.style.backgroundColor = evt.detail.hex;
    stacked4Color7b.value = evt.detail.hex;
    stacked4Row8c.style.backgroundColor = evt.detail.hex;
    stacked4Color8b.value = evt.detail.hex;
    stacked4Row9c.style.backgroundColor = evt.detail.hex;
    stacked4Color9b.value = evt.detail.hex;
    stacked4Row10c.style.backgroundColor = evt.detail.hex;
    stacked4Color10b.value = evt.detail.hex;
    legend5Color2.style.color = evt.detail.hex;
    legend5Color2.style.backgroundColor = evt.detail.hex;
    legend5Color2.style.borderColor = evt.detail.hex;
    legend5Color2x.value = evt.detail.hex;
    legend5Color2x.value = evt.detail.hex;
    legend5Color2x.value = evt.detail.hex;
});
const stacked4colorPickR = document.getElementById("stacked4colorPickR");
stacked4colorPickR.addEventListener("change", (evt) => {
    stacked4Row1d.style.backgroundColor = evt.detail.hex;
    stacked4Color1c.value = evt.detail.hex;
    stacked4Row2d.style.backgroundColor = evt.detail.hex;
    stacked4Color2c.value = evt.detail.hex;
    stacked4Row3d.style.backgroundColor = evt.detail.hex;
    stacked4Color3c.value = evt.detail.hex;
    stacked4Row4d.style.backgroundColor = evt.detail.hex;
    stacked4Color4c.value = evt.detail.hex;
    stacked4Row5d.style.backgroundColor = evt.detail.hex;
    stacked4Color5c.value = evt.detail.hex;
    stacked4Row6d.style.backgroundColor = evt.detail.hex;
    stacked4Color6c.value = evt.detail.hex;
    stacked4Row7d.style.backgroundColor = evt.detail.hex;
    stacked4Color7c.value = evt.detail.hex;
    stacked4Row8d.style.backgroundColor = evt.detail.hex;
    stacked4Color8c.value = evt.detail.hex;
    stacked4Row9d.style.backgroundColor = evt.detail.hex;
    stacked4Color9c.value = evt.detail.hex;
    stacked4Row10d.style.backgroundColor = evt.detail.hex;
    stacked4Color10c.value = evt.detail.hex;
    legend5Color3.style.color = evt.detail.hex;
    legend5Color3.style.backgroundColor = evt.detail.hex;
    legend5Color3.style.borderColor = evt.detail.hex;
    legend5Color3x.value = evt.detail.hex;
    legend5Color3x.value = evt.detail.hex;
    legend5Color3x.value = evt.detail.hex;
});

// Stacked Chart IV Text/Color Legend
let stacked4lgdCode = "";
const legend5Text1 = document.getElementById("legend5Text1");
const legend5Text1x = document.getElementById("legend5Text1x");
legend5Text1x.oninput = function() {
    legend5Text1.innerHTML = legend5Text1x.value;
    if (legend5Text1x.value == "" && legend5Text2x.value == "" && legend5Text3x.value == "" && legend5Color1x.value == "" && legend5Color2x.value == "" && legend5Color3x.value == "") {
        stacked4Legend[0].style.display = "none";
        return stacked4lgdCode = "";
    } else {
        stacked4Legend[0].style.display = "block";
        return stacked4lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend5Color1x.value + '; border: 1px solid ' + legend5Color1x.value + '; color: ' + legend5Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend5Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color2x.value + '; border: 1px solid ' + legend5Color2x.value + '; color: ' + legend5Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend5Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color3x.value + '; border: 1px solid ' + legend5Color3x.value + '; color: ' + legend5Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend5Text3.innerHTML + '</td></tr>';
    }
};
const legend5Text2 = document.getElementById("legend5Text2");
const legend5Text2x = document.getElementById("legend5Text2x");
legend5Text2x.oninput = function() {
    legend5Text2.innerHTML = legend5Text2x.value;
    if (legend5Text1x.value == "" && legend5Text2x.value == "" && legend5Text3x.value == "" && legend5Color1x.value == "" && legend5Color2x.value == "" && legend5Color3x.value == "") {
        stacked4Legend[0].style.display = "none";
        return stacked4lgdCode = "";
    } else {
        stacked4Legend[0].style.display = "block";
        return stacked4lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend5Color1x.value + '; border: 1px solid ' + legend5Color1x.value + '; color: ' + legend5Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend5Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color2x.value + '; border: 1px solid ' + legend5Color2x.value + '; color: ' + legend5Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend5Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color3x.value + '; border: 1px solid ' + legend5Color3x.value + '; color: ' + legend5Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend5Text3.innerHTML + '</td></tr>';
    }
};
const legend5Text3 = document.getElementById("legend5Text3");
const legend5Text3x = document.getElementById("legend5Text3x");
legend5Text3x.oninput = function() {
    legend5Text3.innerHTML = legend5Text3x.value;
    if (legend5Text1x.value == "" && legend5Text2x.value == "" && legend5Text3x.value == "" && legend5Color1x.value == "" && legend5Color2x.value == "" && legend5Color3x.value == "") {
        stacked4Legend[0].style.display = "none";
        return stacked4lgdCode = "";
    } else {
        stacked4Legend[0].style.display = "block";
        return stacked4lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend5Color1x.value + '; border: 1px solid ' + legend5Color1x.value + '; color: ' + legend5Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend5Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color2x.value + '; border: 1px solid ' + legend5Color2x.value + '; color: ' + legend5Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend5Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color3x.value + '; border: 1px solid ' + legend5Color3x.value + '; color: ' + legend5Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend5Text3.innerHTML + '</td></tr>';
    }
};
const legend5Color1 = document.getElementById("legend5Color1");
const legend5Color1x = document.getElementById("legend5Color1x");
legend5Color1x.oninput = function() {
    legend5Color1.style.color = legend5Color1x.value;
    legend5Color1.style.backgroundColor = legend5Color1x.value;
    legend5Color1.style.borderColor = legend5Color1x.value;
    if (legend5Text1x.value == "" && legend5Text2x.value == "" && legend5Text3x.value == "" && legend5Color1x.value == "" && legend5Color2x.value == "" && legend5Color3x.value == "") {
        stacked4Legend[0].style.display = "none";
        return stacked4lgdCode = "";
    } else {
        stacked4Legend[0].style.display = "block";
        return stacked4lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend5Color1x.value + '; border: 1px solid ' + legend5Color1x.value + '; color: ' + legend5Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend5Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color2x.value + '; border: 1px solid ' + legend5Color2x.value + '; color: ' + legend5Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend5Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color3x.value + '; border: 1px solid ' + legend5Color3x.value + '; color: ' + legend5Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend5Text3.innerHTML + '</td></tr>';
    }
};
const legend5Color2 = document.getElementById("legend5Color2");
const legend5Color2x = document.getElementById("legend5Color2x");
legend5Color2x.oninput = function() {
    legend5Color2.style.color = legend5Color2x.value;
    legend5Color2.style.backgroundColor = legend5Color2x.value;
    legend5Color2.style.borderColor = legend5Color2x.value;
    if (legend5Text1x.value == "" && legend5Text2x.value == "" && legend5Text3x.value == "" && legend5Color1x.value == "" && legend5Color2x.value == "" && legend5Color3x.value == "") {
        stacked4Legend[0].style.display = "none";
        return stacked4lgdCode = "";
    } else {
        stacked4Legend[0].style.display = "block";
        return stacked4lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend5Color1x.value + '; border: 1px solid ' + legend5Color1x.value + '; color: ' + legend5Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend5Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color2x.value + '; border: 1px solid ' + legend5Color2x.value + '; color: ' + legend5Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend5Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color3x.value + '; border: 1px solid ' + legend5Color3x.value + '; color: ' + legend5Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend5Text3.innerHTML + '</td></tr>';
    }
};
const legend5Color3 = document.getElementById("legend5Color3");
const legend5Color3x = document.getElementById("legend5Color3x");
legend5Color3x.oninput = function() {
    legend5Color3.style.color = legend5Color3x.value;
    legend5Color3.style.backgroundColor = legend5Color3x.value;
    legend5Color3.style.borderColor = legend5Color3x.value;
    if (legend5Text1x.value == "" && legend5Text2x.value == "" && legend5Text3x.value == "" && legend5Color1x.value == "" && legend5Color2x.value == "" && legend5Color3x.value == "") {
        stacked4Legend[0].style.display = "none";
        return stacked4lgdCode = "";
    } else {
        stacked4Legend[0].style.display = "block";
        return stacked4lgdCode = '<tr> <td style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; padding: 20px 0 0 0; text-align: left;"><span style="background-color: ' + legend5Color1x.value + '; border: 1px solid ' + legend5Color1x.value + '; color: ' + legend5Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend5Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color2x.value + '; border: 1px solid ' + legend5Color2x.value + '; color: ' + legend5Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend5Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend5Color3x.value + '; border: 1px solid ' + legend5Color3x.value + '; color: ' + legend5Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend5Text3.innerHTML + '</td></tr>';
    }
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
    stacked4Row1b.innerHTML = stacked4Text1a.value ? stacked4Text1a.value + "&nbsp;" : "";
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
    stacked4Row1c.innerHTML = stacked4Text1b.value ? stacked4Text1b.value + "&nbsp;" : "";
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
    stacked4Row1d.innerHTML = stacked4Text1c.value ? stacked4Text1c.value + "&nbsp;" : "";
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
    stacked4Row2b.innerHTML = stacked4Text2a.value ? stacked4Text2a.value + "&nbsp;" : "";
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
    stacked4Row2c.innerHTML = stacked4Text2b.value ? stacked4Text2b.value + "&nbsp;" : "";
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
    stacked4Row2d.innerHTML = stacked4Text2c.value ? stacked4Text2c.value + "&nbsp;" : "";
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
    stacked4Row3b.innerHTML = stacked4Text3a.value ? stacked4Text3a.value + "&nbsp;" : "";
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
    stacked4Row3c.innerHTML = stacked4Text3b.value ? stacked4Text3b.value + "&nbsp;" : "";
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
    stacked4Row3d.innerHTML = stacked4Text3c.value ? stacked4Text3c.value + "&nbsp;" : "";
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
    stacked4Row4b.innerHTML = stacked4Text4a.value ? stacked4Text4a.value + "&nbsp;" : "";
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
    stacked4Row4c.innerHTML = stacked4Text4b.value ? stacked4Text4b.value + "&nbsp;" : "";
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
    stacked4Row4d.innerHTML = stacked4Text4c.value ? stacked4Text4c.value + "&nbsp;" : "";
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
    stacked4Row5b.innerHTML = stacked4Text5a.value ? stacked4Text5a.value + "&nbsp;" : "";
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
    stacked4Row5c.innerHTML = stacked4Text5b.value ? stacked4Text5b.value + "&nbsp;" : "";
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
    stacked4Row5d.innerHTML = stacked4Text5c.value ? stacked4Text5c.value + "&nbsp;" : "";
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
    stacked4Row6b.innerHTML = stacked4Text6a.value ? stacked4Text6a.value + "&nbsp;" : "";
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
    stacked4Row6c.innerHTML = stacked4Text6b.value ? stacked4Text6b.value + "&nbsp;" : "";
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
    stacked4Row6d.innerHTML = stacked4Text6c.value ? stacked4Text6c.value + "&nbsp;" : "";
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
    stacked4Row7b.innerHTML = stacked4Text7a.value ? stacked4Text7a.value + "&nbsp;" : "";
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
    stacked4Row7c.innerHTML = stacked4Text7b.value ? stacked4Text7b.value + "&nbsp;" : "";
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
    stacked4Row7d.innerHTML = stacked4Text7c.value ? stacked4Text7c.value + "&nbsp;" : "";
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
    stacked4Row8b.innerHTML = stacked4Text8a.value ? stacked4Text8a.value + "&nbsp;" : "";
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
    stacked4Row8c.innerHTML = stacked4Text8b.value ? stacked4Text8b.value + "&nbsp;" : "";
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
    stacked4Row8d.innerHTML = stacked4Text8c.value ? stacked4Text8c.value + "&nbsp;" : "";
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
    stacked4Row9b.innerHTML = stacked4Text9a.value ? stacked4Text9a.value + "&nbsp;" : "";
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
    stacked4Row9c.innerHTML = stacked4Text9b.value ? stacked4Text9b.value + "&nbsp;" : "";
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
    stacked4Row9d.innerHTML = stacked4Text9c.value ? stacked4Text9c.value + "&nbsp;" : "";
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
    stacked4Row10b.innerHTML = stacked4Text10a.value ? stacked4Text10a.value + "&nbsp;" : "";
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
    stacked4Row10c.innerHTML = stacked4Text10b.value ? stacked4Text10b.value + "&nbsp;" : "";
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
    stacked4Row10d.innerHTML = stacked4Text10c.value ? stacked4Text10c.value + "&nbsp;" : "";
};
const stacked4Color10c = document.getElementById("stacked4Color10c");
stacked4Color10c.oninput = function() {
    stacked4Row10d.style.backgroundColor = stacked4Color10c.value;
};

// Stacked Chart IV Height Adjustment
const stacked4rowArray = [stacked4Row1a, stacked4Row1b, stacked4Row1c, stacked4Row2a, stacked4Row2b, stacked4Row2c, stacked4Row3a, stacked4Row3b, stacked4Row3c, stacked4Row4a, stacked4Row4b, stacked4Row4c, stacked4Row5a, stacked4Row5b, stacked4Row5c, stacked4Row6a, stacked4Row6b, stacked4Row6c, stacked4Row7a, stacked4Row7b, stacked4Row7c, stacked4Row8a, stacked4Row8b, stacked4Row8c, stacked4Row9a, stacked4Row9b, stacked4Row9c, stacked4Row10a, stacked4Row10b, stacked4Row10c];
const stacked4inputArray = [stacked4Text1, stacked4Text2, stacked4Text3, stacked4Text4, stacked4Text5, stacked4Text6, stacked4Text7, stacked4Text8, stacked4Text9, stacked4Text10];
function stacked4BarHeight(x) {
    for (var i = 0; i < stacked4rowArray.length; i++) {
        if (stacked4inputArray[0].value.length <= 16 && stacked4inputArray[1].value.length <= 16 && stacked4inputArray[2].value.length <= 16 && stacked4inputArray[3].value.length <= 16 && stacked4inputArray[4].value.length <= 16 && stacked4inputArray[5].value.length <= 16 && stacked4inputArray[6].value.length <= 16 && stacked4inputArray[7].value.length <= 16 && stacked4inputArray[8].value.length <= 16 && stacked4inputArray[9].value.length <= 16) {
            // All labels must be <= 16 characters for the bar heights to be set at 28px
            stacked4rowArray[i].style.height = "28px";
            stacked4rowArray[i].height = "28";
        } else if (stacked4inputArray[x].value.length < 32 && stacked4inputArray[0].value.length < 32 && stacked4inputArray[1].value.length < 32 && stacked4inputArray[2].value.length < 32 && stacked4inputArray[3].value.length < 32 && stacked4inputArray[4].value.length < 32 && stacked4inputArray[5].value.length < 32 && stacked4inputArray[6].value.length < 32 && stacked4inputArray[7].value.length < 32 && stacked4inputArray[8].value.length < 32 && stacked4inputArray[9].value.length < 32) {
            // All labels must be < 32 characters and only one needs to be > 16 to set all bar heights at 36px
            stacked4rowArray[i].style.height = "36px";
            stacked4rowArray[i].height = "36";
        } else if (stacked4inputArray[0].value.length >= 32 || stacked4inputArray[1].value.length >= 32 || stacked4inputArray[2].value.length >= 32 || stacked4inputArray[3].value.length >= 32 || stacked4inputArray[4].value.length >= 32 || stacked4inputArray[5].value.length >= 32 || stacked4inputArray[6].value.length >= 32 || stacked4inputArray[7].value.length >= 32 || stacked4inputArray[8].value.length >= 32 || stacked4inputArray[9].value.length >= 32) {
            // Only one label needs to be >= 32 characters to set all bars heights to 54px
            stacked4rowArray[i].style.height = "54px";
            stacked4rowArray[i].height = "54";
        }
    }
};
stacked4inputArray[0].addEventListener("input", () => { stacked4BarHeight(0); });
stacked4inputArray[1].addEventListener("input", () => { stacked4BarHeight(1); });
stacked4inputArray[2].addEventListener("input", () => { stacked4BarHeight(2); });
stacked4inputArray[3].addEventListener("input", () => { stacked4BarHeight(3); });
stacked4inputArray[4].addEventListener("input", () => { stacked4BarHeight(4); });
stacked4inputArray[5].addEventListener("input", () => { stacked4BarHeight(5); });
stacked4inputArray[6].addEventListener("input", () => { stacked4BarHeight(6); });
stacked4inputArray[7].addEventListener("input", () => { stacked4BarHeight(7); });
stacked4inputArray[8].addEventListener("input", () => { stacked4BarHeight(8); });
stacked4inputArray[9].addEventListener("input", () => { stacked4BarHeight(9); });

// Stacked Chart IV Focus/Blur Events
stacked4capText.addEventListener("focus", () => { stacked4Cap.style.textShadow = shadowColor; });
stacked4capText.addEventListener("blur", () => { stacked4Cap.style.textShadow = "none"; });
stacked4subText.addEventListener("focus", () => { stacked4Sub.style.textShadow = shadowColor; });
stacked4subText.addEventListener("blur", () => { stacked4Sub.style.textShadow = "none"; });
stacked4srcText.addEventListener("focus", () => { stacked4Source.style.textShadow = shadowColor; });
stacked4srcText.addEventListener("blur", () => { stacked4Source.style.textShadow = "none"; });
legend5Text1x.addEventListener("focus", () => { legend5Text1.style.textShadow = shadowColor; });
legend5Text1x.addEventListener("blur", () => { legend5Text1.style.textShadow = "none"; });
legend5Color1x.addEventListener("focus", () => { legend5Color1.style.boxShadow = barColorShadow; });
legend5Color1x.addEventListener("blur", () => { legend5Color1.style.boxShadow = "none"; });
legend5Text2x.addEventListener("focus", () => { legend5Text2.style.textShadow = shadowColor; });
legend5Text2x.addEventListener("blur", () => { legend5Text2.style.textShadow = "none"; });
legend5Color2x.addEventListener("focus", () => { legend5Color2.style.boxShadow = barColorShadow; });
legend5Color2x.addEventListener("blur", () => { legend5Color2.style.boxShadow = "none"; });
legend5Text3x.addEventListener("focus", () => { legend5Text3.style.textShadow = shadowColor; });
legend5Text3x.addEventListener("blur", () => { legend5Text3.style.textShadow = "none"; });
legend5Color3x.addEventListener("focus", () => { legend5Color3.style.boxShadow = barColorShadow; });
legend5Color3x.addEventListener("blur", () => { legend5Color3.style.boxShadow = "none"; });

// Generate Stacked Chart IV HTML Chart Logic
const stacked4Weight = document.getElementById("stacked4Weight");
const stacked4Button = document.getElementById("stacked4Button");
const stacked4Output = document.getElementById("stacked4Output");
stacked4Button.addEventListener("mouseenter", () => { stacked4Output.style.opacity = ".4"; stacked4Weight.style.opacity = ".4"; } );
stacked4Button.addEventListener("mouseleave", () => { stacked4Output.style.opacity = ""; stacked4Weight.style.opacity = ""; stacked4Output.style.borderColor = ""; stacked4Weight.style.color = ""; } );
stacked4Button.addEventListener("click", () => {
    if (rowsData10.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked4csCode + stacked4lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr>' + stacked4srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked4Output.textContent = chartCode;
        stacked4Weight.textContent = Math.ceil(stacked4Output.value.length / 1024) + 'KB';
    } else if (rowsData10.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked4csCode + stacked4lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr>' + stacked4srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked4Output.textContent = chartCode;
        stacked4Weight.textContent = Math.ceil(stacked4Output.value.length / 1024) + 'KB';
    } else if (rowsData10.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked4csCode + stacked4lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr>' + stacked4srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked4Output.textContent = chartCode;
        stacked4Weight.textContent = Math.ceil(stacked4Output.value.length / 1024) + 'KB';
    } else if (rowsData10.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked4csCode + stacked4lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr>' + stacked4srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked4Output.textContent = chartCode;
        stacked4Weight.textContent = Math.ceil(stacked4Output.value.length / 1024) + 'KB';
    } else if (rowsData10.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked4csCode + stacked4lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr>' + stacked4srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked4Output.textContent = chartCode;
        stacked4Weight.textContent = Math.ceil(stacked4Output.value.length / 1024) + 'KB';
    } else if (rowsData10.value === "6") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked4csCode + stacked4lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr>' + stacked4srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked4Output.textContent = chartCode;
        stacked4Weight.textContent = Math.ceil(stacked4Output.value.length / 1024) + 'KB';
    } else if (rowsData10.value === "7") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked4csCode + stacked4lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row7c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row7d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr>' + stacked4srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked4Output.textContent = chartCode;
        stacked4Weight.textContent = Math.ceil(stacked4Output.value.length / 1024) + 'KB';
    } else if (rowsData10.value === "8") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked4csCode + stacked4lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row7c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row7d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color8a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row8b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color8b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row8c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row8c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color8c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row8d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row8d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr>' + stacked4srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked4Output.textContent = chartCode;
        stacked4Weight.textContent = Math.ceil(stacked4Output.value.length / 1024) + 'KB';
    } else if (rowsData10.value === "9") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked4csCode + stacked4lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row7c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row7d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color8a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row8b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color8b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row8c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row8c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color8c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row8d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row8d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row9a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color9a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row9b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row9b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color9b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row9c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row9c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color9c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row9d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row9d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr>' + stacked4srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked4Output.textContent = chartCode;
        stacked4Weight.textContent = Math.ceil(stacked4Output.value.length / 1024) + 'KB';
    } else if (rowsData10.value === "10") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + stacked4csCode + stacked4lgdCode + '<tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color1c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row1d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row1d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color2c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row2d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row2d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color3c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row3d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row3d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color4c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row4d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row4d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color5c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row5d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row5d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color6c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row6d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row6d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row7a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row7b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row7c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color7c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row7d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row7d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row8a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color8a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row8b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row8b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color8b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row8c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row8c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color8c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row8d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row8d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row9a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color9a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row9b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row9b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color9b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row9c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row9c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color9c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row9d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row9d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row10a.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color10a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row10b.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row10b.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color10b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row10c.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row10c.innerHTML + '</td><td align="right" style="background-color: ' + stacked4Color10c.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + stacked4Row10d.style.width + '; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '">' + stacked4Row10d.innerHTML + '</td><td style="background-color: #ffffff; margin: 0; padding: 0; width: auto; height: ' + stacked4Row1a.height + 'px;" height="' + stacked4Row1a.height + '"></td></tr></table> </td></tr>' + stacked4srcCode + ' </table> </td></tr></table> ' + botSpace;
        stacked4Output.textContent = chartCode;
        stacked4Weight.textContent = Math.ceil(stacked4Output.value.length / 1024) + 'KB';
    }
    stacked4Output.style.opacity = "";
    stacked4Weight.style.opacity = "";
    stacked4Output.style.borderColor = "#166dfc";
    stacked4Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(stacked4Output.value);
});

// Highlight stacked4Output Text
stacked4Output.addEventListener("click", () => {
    stacked4Output.select();
});