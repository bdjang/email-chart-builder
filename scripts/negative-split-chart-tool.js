"use strict";

// Negative I Chart Row Selection
const negative1Bars = document.getElementsByClassName("negative1Bars");
const negative1Controls = document.getElementsByClassName("negative1Controls");
const rowsData12 = document.getElementById("rowsData12");
rowsData12.addEventListener("change", () => {
    for (var i = 0; i < negative1Controls.length; i++) {
        negative1Controls[i].style.display = "none";
        negative1Bars[i].style.display = "none";
        for (var x = 0; x < rowsData12.value; x++) {
            negative1Controls[x].style.display = "block";
            negative1Bars[x].style.display = "block";
        }
    }
});

// Negative Chart I Add Divider
const negative1DivNodes1 = document.querySelectorAll("tr.negative1Bars");
const negative1Div = document.getElementById("negative1Div");
window.addEventListener("load", () => { // Adds "none" to border-top on load
    for (var i = 1; i < negative1DivNodes1.length; i++) {
        negative1DivNodes1[i].firstElementChild.style.borderTop = "none";
    }
});
let negative1borderTop = "";
negative1Div.addEventListener("click", () => { // Toggles chart data bar dividers in chart preview
    for (var i = 1; i < negative1DivNodes1.length; i++) {
        negative1DivNodes1[i].firstElementChild.style.borderTop = negative1Div.checked ? "1px solid #e3e3e3" : "none";
    }
    negative1borderTop = negative1Div.checked ? "border-top: 1px solid #e3e3e3; " : ""; // Adds border-top to output code if checked
});

// Negative Chart I Caption
let negative1TopBarSpace = "0 0 5px 0";
let negative1csCode = "";
const negative1Cap = document.getElementById("negative1Cap"); // Caption or chart title
const negative1capText = document.getElementById("negative1capText"); // Caption or chart title text
negative1capText.oninput = function() {
    negative1Cap.innerHTML = negative1capText.value;
    if (negative1capText.value == "" && negative1subText.value == "") {
        negative1Bars[0].firstElementChild.style.padding = "0 0 5px 0"; // Targets the first data bar below legend
        negative1TopBarSpace = "0 0 5px 0"; // Padding for first data bar below legend for output code
        negative1Cap.style.marginBottom = "0";
        return negative1csCode = "";
    } else if (negative1capText.value == "" && negative1subText.value) {
        negative1Bars[0].firstElementChild.style.padding = "20px 0 5px 0";
        negative1TopBarSpace = "20px 0 5px 0";
        negative1Cap.style.marginBottom = "0";
        return negative1csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + negative1Sub.innerHTML + '</td> </tr>';
    } else if (negative1capText.value && negative1subText.value == "") {
        negative1Bars[0].firstElementChild.style.padding = "0 0 5px 0";
        negative1TopBarSpace = "0 0 5px 0";
        negative1Cap.style.marginBottom = "20px";
        return negative1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + negative1Cap.innerHTML + '</caption>';
    } else if (negative1capText.value && negative1subText.value) {
        negative1Bars[0].firstElementChild.style.padding = "20px 0 5px 0";
        negative1TopBarSpace = "20px 0 5px 0";
        negative1Cap.style.marginBottom = "4px";
        return negative1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + negative1Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + negative1Sub.innerHTML + '</td> </tr>';
    }
};
// Negative Chart I Subtitle
const negative1Sub = document.getElementById("negative1Sub"); // Chart subtitle
const negative1subText = document.getElementById("negative1subText"); // Chart subtitle text
negative1subText.oninput = function() {
    negative1Sub.innerHTML = negative1subText.value;
    if (negative1subText.value == "" && negative1capText.value == "") {
        negative1Bars[0].firstElementChild.style.padding = "0 0 5px 0";
        negative1TopBarSpace = "0 0 5px 0";
        negative1Cap.style.marginBottom = "0";
        return negative1csCode = "";
    } else if (negative1subText.value == "" && negative1capText.value) {
        negative1Bars[0].firstElementChild.style.padding = "0 0 5px 0";
        negative1TopBarSpace = "0 0 5px 0";
        negative1Cap.style.marginBottom = "20px";
        return negative1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + negative1Cap.innerHTML + '</caption>';
    } else if (negative1subText.value && negative1capText.value == "") {
        negative1Bars[0].firstElementChild.style.padding = "20px 0 5px 0";
        negative1TopBarSpace = "20px 0 5px 0";
        negative1Cap.style.marginBottom = "0";
        return negative1csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + negative1Sub.innerHTML + '</td> </tr>';
    } else if (negative1subText.value && negative1capText.value) {
        negative1Bars[0].firstElementChild.style.padding = "20px 0 5px 0";
        negative1TopBarSpace = "20px 0 5px 0";
        negative1Cap.style.marginBottom = "4px";
        return negative1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + negative1Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + negative1Sub.innerHTML + '</td> </tr>';
    }
};
// Negative I Chart Source
let negative1srcCode = "";
const negative1Source = document.getElementById("negative1Source"); // Chart source
const negative1srcText = document.getElementById("negative1srcText"); // Chart source text
negative1srcText.oninput = function() {
    negative1Source.innerHTML = negative1srcText.value;
    negative1Source.style.paddingTop = negative1srcText.value ? "15px" : "0";
    negative1srcCode = negative1srcText.value ? '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 15px; text-align: left;">' + negative1Source.innerHTML + '</td></tr>' : "";
};

// Negative I Chart Color Picker
const negative1colorPick = document.getElementById("negative1colorPick");
negative1colorPick.addEventListener("change", (evt) => {
    negative1Row1c.style.backgroundColor = evt.detail.hex;
    negative1Color1.value = evt.detail.hex;
    negative1Row2c.style.backgroundColor = evt.detail.hex;
    negative1Color2.value = evt.detail.hex;
    negative1Row3c.style.backgroundColor = evt.detail.hex;
    negative1Color3.value = evt.detail.hex;
    negative1Row4c.style.backgroundColor = evt.detail.hex;
    negative1Color4.value = evt.detail.hex;
    negative1Row5c.style.backgroundColor = evt.detail.hex;
    negative1Color5.value = evt.detail.hex;
    negative1Row6c.style.backgroundColor = evt.detail.hex;
    negative1Color6.value = evt.detail.hex;
    negative1Row7c.style.backgroundColor = evt.detail.hex;
    negative1Color7.value = evt.detail.hex;
    negative1Row8c.style.backgroundColor = evt.detail.hex;
    negative1Color8.value = evt.detail.hex;
    negative1Row9c.style.backgroundColor = evt.detail.hex;
    negative1Color9.value = evt.detail.hex;
    negative1Row10c.style.backgroundColor = evt.detail.hex;
    negative1Color10.value = evt.detail.hex;
});

// Negative I Row Customization Logic
const negative1Row1a = document.getElementById("negative1Row1a");
const negative1Row1b = document.getElementById("negative1Row1b");
const negative1Row1c = document.getElementById("negative1Row1c");
const negative1Row2a = document.getElementById("negative1Row2a");
const negative1Row2b = document.getElementById("negative1Row2b");
const negative1Row2c = document.getElementById("negative1Row2c");
const negative1Row3a = document.getElementById("negative1Row3a");
const negative1Row3b = document.getElementById("negative1Row3b");
const negative1Row3c = document.getElementById("negative1Row3c");
const negative1Row4a = document.getElementById("negative1Row4a");
const negative1Row4b = document.getElementById("negative1Row4b");
const negative1Row4c = document.getElementById("negative1Row4c");
const negative1Row5a = document.getElementById("negative1Row5a");
const negative1Row5b = document.getElementById("negative1Row5b");
const negative1Row5c = document.getElementById("negative1Row5c");
const negative1Row6a = document.getElementById("negative1Row6a");
const negative1Row6b = document.getElementById("negative1Row6b");
const negative1Row6c = document.getElementById("negative1Row6c");
const negative1Row7a = document.getElementById("negative1Row7a");
const negative1Row7b = document.getElementById("negative1Row7b");
const negative1Row7c = document.getElementById("negative1Row7c");
const negative1Row8a = document.getElementById("negative1Row8a");
const negative1Row8b = document.getElementById("negative1Row8b");
const negative1Row8c = document.getElementById("negative1Row8c");
const negative1Row9a = document.getElementById("negative1Row9a");
const negative1Row9b = document.getElementById("negative1Row9b");
const negative1Row9c = document.getElementById("negative1Row9c");
const negative1Row10a = document.getElementById("negative1Row10a");
const negative1Row10b = document.getElementById("negative1Row10b");
const negative1Row10c = document.getElementById("negative1Row10c");

// Negative I Row 1 Customization Logic
const negative1Text1a = document.getElementById("negative1Text1a");
negative1Text1a.oninput = function() {
    negative1Row1a.innerHTML = negative1Text1a.value;
};
const negative1Size1 = document.getElementById("negative1Size1");
negative1Size1.oninput = function() {
    negative1Row1b.style.width = ((75 - (Math.abs(negative1Size1.value)) * .75)) + "%";
    negative1Row1c.style.width = ((Math.abs(negative1Size1.value)) * .75) + "%";
};
const negative1Text1b = document.getElementById("negative1Text1b");
negative1Text1b.oninput = function() {
    negative1Row1c.innerHTML = negative1Text1b.value ? "&nbsp;" + negative1Text1b.value : "";
};
const negative1Label1b = document.getElementById("negative1Label1b");
negative1Label1b.addEventListener("click", () => {
    if (negative1Text1b.value == "") {
        negative1Row1b.innerHTML = "";
        negative1Row1c.innerHTML = "";
    } else if (negative1Text1b.value) {
        negative1Row1b.innerHTML = negative1Text1b.value + "&nbsp;";
        negative1Text1b.value = "";
        negative1Row1c.innerHTML = "";
    }
});
const negative1Color1 = document.getElementById("negative1Color1");
negative1Color1.oninput = function() {
    negative1Row1c.style.backgroundColor = negative1Color1.value;
};

// Negative I Row 2 Customization Logic
const negative1Text2a = document.getElementById("negative1Text2a");
negative1Text2a.oninput = function() {
    negative1Row2a.innerHTML = negative1Text2a.value;
};
const negative1Size2 = document.getElementById("negative1Size2");
negative1Size2.oninput = function() {
    negative1Row2b.style.width = ((75 - (Math.abs(negative1Size2.value)) * .75)) + "%";
    negative1Row2c.style.width = ((Math.abs(negative1Size2.value)) * .75) + "%";
};
const negative1Text2b = document.getElementById("negative1Text2b");
negative1Text2b.oninput = function() {
    negative1Row2c.innerHTML = negative1Text2b.value ? "&nbsp;" + negative1Text2b.value : "";
};
const negative1Label2b = document.getElementById("negative1Label2b");
negative1Label2b.addEventListener("click", () => {
    if (negative1Text2b.value == "") {
        negative1Row2b.innerHTML = "";
        negative1Row2c.innerHTML = "";
    } else if (negative1Text2b.value) {
        negative1Row2b.innerHTML = negative1Text2b.value + "&nbsp;";
        negative1Text2b.value = "";
        negative1Row2c.innerHTML = "";
    }
});
const negative1Color2 = document.getElementById("negative1Color2");
negative1Color2.oninput = function() {
    negative1Row2c.style.backgroundColor = negative1Color2.value;
};

// Negative I Row 3 Customization Logic
const negative1Text3a = document.getElementById("negative1Text3a");
negative1Text3a.oninput = function() {
    negative1Row3a.innerHTML = negative1Text3a.value;
};
const negative1Size3 = document.getElementById("negative1Size3");
negative1Size3.oninput = function() {
    negative1Row3b.style.width = ((75 - (Math.abs(negative1Size3.value)) * .75)) + "%";
    negative1Row3c.style.width = ((Math.abs(negative1Size3.value)) * .75) + "%";
};
const negative1Text3b = document.getElementById("negative1Text3b");
negative1Text3b.oninput = function() {
    negative1Row3c.innerHTML = negative1Text3b.value ? "&nbsp;" + negative1Text3b.value : "";
};
const negative1Label3b = document.getElementById("negative1Label3b");
negative1Label3b.addEventListener("click", () => {
    if (negative1Text3b.value == "") {
        negative1Row3b.innerHTML = "";
        negative1Row3c.innerHTML = "";
    } else if (negative1Text3b.value) {
        negative1Row3b.innerHTML = negative1Text3b.value + "&nbsp;";
        negative1Text3b.value = "";
        negative1Row3c.innerHTML = "";
    }
});
const negative1Color3 = document.getElementById("negative1Color3");
negative1Color3.oninput = function() {
    negative1Row3c.style.backgroundColor = negative1Color3.value;
};

// Negative I Row 4 Customization Logic
const negative1Text4a = document.getElementById("negative1Text4a");
negative1Text4a.oninput = function() {
    negative1Row4a.innerHTML = negative1Text4a.value;
};
const negative1Size4 = document.getElementById("negative1Size4");
negative1Size4.oninput = function() {
    negative1Row4b.style.width = ((75 - (Math.abs(negative1Size4.value)) * .75)) + "%";
    negative1Row4c.style.width = ((Math.abs(negative1Size4.value)) * .75) + "%";
};
const negative1Text4b = document.getElementById("negative1Text4b");
negative1Text4b.oninput = function() {
    negative1Row4c.innerHTML = negative1Text4b.value ? "&nbsp;" + negative1Text4b.value : "";
};
const negative1Label4b = document.getElementById("negative1Label4b");
negative1Label4b.addEventListener("click", () => {
    if (negative1Text4b.value == "") {
        negative1Row4b.innerHTML = "";
        negative1Row4c.innerHTML = "";
    } else if (negative1Text4b.value) {
        negative1Row4b.innerHTML = negative1Text4b.value + "&nbsp;";
        negative1Text4b.value = "";
        negative1Row4c.innerHTML = "";
    }
});
const negative1Color4 = document.getElementById("negative1Color4");
negative1Color4.oninput = function() {
    negative1Row4c.style.backgroundColor = negative1Color4.value;
};

// Negative I Row 5 Customization Logic
const negative1Text5a = document.getElementById("negative1Text5a");
negative1Text5a.oninput = function() {
    negative1Row5a.innerHTML = negative1Text5a.value;
};
const negative1Size5 = document.getElementById("negative1Size5");
negative1Size5.oninput = function() {
    negative1Row5b.style.width = ((75 - (Math.abs(negative1Size5.value)) * .75)) + "%";
    negative1Row5c.style.width = ((Math.abs(negative1Size5.value)) * .75) + "%";
};
const negative1Text5b = document.getElementById("negative1Text5b");
negative1Text5b.oninput = function() {
    negative1Row5c.innerHTML = negative1Text5b.value ? "&nbsp;" + negative1Text5b.value : "";
};
const negative1Label5b = document.getElementById("negative1Label5b");
negative1Label5b.addEventListener("click", () => {
    if (negative1Text5b.value == "") {
        negative1Row5b.innerHTML = "";
        negative1Row5c.innerHTML = "";
    } else if (negative1Text5b.value) {
        negative1Row5b.innerHTML = negative1Text5b.value + "&nbsp;";
        negative1Text5b.value = "";
        negative1Row5c.innerHTML = "";
    }
});
const negative1Color5 = document.getElementById("negative1Color5");
negative1Color5.oninput = function() {
    negative1Row5c.style.backgroundColor = negative1Color5.value;
};

// Negative I Row 6 Customization Logic
const negative1Text6a = document.getElementById("negative1Text6a");
negative1Text6a.oninput = function() {
    negative1Row6a.innerHTML = negative1Text6a.value;
};
const negative1Size6 = document.getElementById("negative1Size6");
negative1Size6.oninput = function() {
    negative1Row6b.style.width = ((75 - (Math.abs(negative1Size6.value)) * .75)) + "%";
    negative1Row6c.style.width = ((Math.abs(negative1Size6.value)) * .75) + "%";
};
const negative1Text6b = document.getElementById("negative1Text6b");
negative1Text6b.oninput = function() {
    negative1Row6c.innerHTML = negative1Text6b.value ? "&nbsp;" + negative1Text6b.value : "";
};
const negative1Label6b = document.getElementById("negative1Label6b");
negative1Label6b.addEventListener("click", () => {
    if (negative1Text6b.value == "") {
        negative1Row6b.innerHTML = "";
        negative1Row6c.innerHTML = "";
    } else if (negative1Text6b.value) {
        negative1Row6b.innerHTML = negative1Text6b.value + "&nbsp;";
        negative1Text6b.value = "";
        negative1Row6c.innerHTML = "";
    }
});
const negative1Color6 = document.getElementById("negative1Color6");
negative1Color6.oninput = function() {
    negative1Row6c.style.backgroundColor = negative1Color6.value;
};

// Negative I Row 7 Customization Logic
const negative1Text7a = document.getElementById("negative1Text7a");
negative1Text7a.oninput = function() {
    negative1Row7a.innerHTML = negative1Text7a.value;
};
const negative1Size7 = document.getElementById("negative1Size7");
negative1Size7.oninput = function() {
    negative1Row7b.style.width = ((75 - (Math.abs(negative1Size7.value)) * .75)) + "%";
    negative1Row7c.style.width = ((Math.abs(negative1Size7.value)) * .75) + "%";
};
const negative1Text7b = document.getElementById("negative1Text7b");
negative1Text7b.oninput = function() {
    negative1Row7c.innerHTML = negative1Text7b.value ? "&nbsp;" + negative1Text7b.value : "";
};
const negative1Label7b = document.getElementById("negative1Label7b");
negative1Label7b.addEventListener("click", () => {
    if (negative1Text7b.value == "") {
        negative1Row7b.innerHTML = "";
        negative1Row7c.innerHTML = "";
    } else if (negative1Text7b.value) {
        negative1Row7b.innerHTML = negative1Text7b.value + "&nbsp;";
        negative1Text7b.value = "";
        negative1Row7c.innerHTML = "";
    }
});
const negative1Color7 = document.getElementById("negative1Color7");
negative1Color7.oninput = function() {
    negative1Row7c.style.backgroundColor = negative1Color7.value;
};

// Negative I Row 8 Customization Logic
const negative1Text8a = document.getElementById("negative1Text8a");
negative1Text8a.oninput = function() {
    negative1Row8a.innerHTML = negative1Text8a.value;
};
const negative1Size8 = document.getElementById("negative1Size8");
negative1Size8.oninput = function() {
    negative1Row8b.style.width = ((75 - (Math.abs(negative1Size8.value)) * .75)) + "%";
    negative1Row8c.style.width = ((Math.abs(negative1Size8.value)) * .75) + "%";
};
const negative1Text8b = document.getElementById("negative1Text8b");
negative1Text8b.oninput = function() {
    negative1Row8c.innerHTML = negative1Text8b.value ? "&nbsp;" + negative1Text8b.value : "";
};
const negative1Label8b = document.getElementById("negative1Label8b");
negative1Label8b.addEventListener("click", () => {
    if (negative1Text8b.value == "") {
        negative1Row8b.innerHTML = "";
        negative1Row8c.innerHTML = "";
    } else if (negative1Text8b.value) {
        negative1Row8b.innerHTML = negative1Text8b.value + "&nbsp;";
        negative1Text8b.value = "";
        negative1Row8c.innerHTML = "";
    }
});
const negative1Color8 = document.getElementById("negative1Color8");
negative1Color8.oninput = function() {
    negative1Row8c.style.backgroundColor = negative1Color8.value;
};

// Negative I Row 9 Customization Logic
const negative1Text9a = document.getElementById("negative1Text9a");
negative1Text9a.oninput = function() {
    negative1Row9a.innerHTML = negative1Text9a.value;
};
const negative1Size9 = document.getElementById("negative1Size9");
negative1Size9.oninput = function() {
    negative1Row9b.style.width = ((75 - (Math.abs(negative1Size9.value)) * .75)) + "%";
    negative1Row9c.style.width = ((Math.abs(negative1Size9.value)) * .75) + "%";
};
const negative1Text9b = document.getElementById("negative1Text9b");
negative1Text9b.oninput = function() {
    negative1Row9c.innerHTML = negative1Text9b.value ? "&nbsp;" + negative1Text9b.value : "";
};
const negative1Label9b = document.getElementById("negative1Label9b");
negative1Label9b.addEventListener("click", () => {
    if (negative1Text9b.value == "") {
        negative1Row9b.innerHTML = "";
        negative1Row9c.innerHTML = "";
    } else if (negative1Text9b.value) {
        negative1Row9b.innerHTML = negative1Text9b.value + "&nbsp;";
        negative1Text9b.value = "";
        negative1Row9c.innerHTML = "";
    }
});
const negative1Color9 = document.getElementById("negative1Color9");
negative1Color9.oninput = function() {
    negative1Row9c.style.backgroundColor = negative1Color9.value;
};

// Negative I Row 10 Customization Logic
const negative1Text10a = document.getElementById("negative1Text10a");
negative1Text10a.oninput = function() {
    negative1Row10a.innerHTML = negative1Text10a.value;
};
const negative1Size10 = document.getElementById("negative1Size10");
negative1Size10.oninput = function() {
    negative1Row10b.style.width = ((75 - (Math.abs(negative1Size10.value)) * .75)) + "%";
    negative1Row10c.style.width = ((Math.abs(negative1Size10.value)) * .75) + "%";
};
const negative1Text10b = document.getElementById("negative1Text10b");
negative1Text10b.oninput = function() {
    negative1Row10c.innerHTML = negative1Text10b.value ? "&nbsp;" + negative1Text10b.value : "";
};
const negative1Label10b = document.getElementById("negative1Label10b");
negative1Label10b.addEventListener("click", () => {
    if (negative1Text10b.value == "") {
        negative1Row10b.innerHTML = "";
        negative1Row10c.innerHTML = "";
    } else if (negative1Text10b.value) {
        negative1Row10b.innerHTML = negative1Text10b.value + "&nbsp;";
        negative1Text10b.value = "";
        negative1Row10c.innerHTML = "";
    }
});
const negative1Color10 = document.getElementById("negative1Color10");
negative1Color10.oninput = function() {
    negative1Row10c.style.backgroundColor = negative1Color10.value;
};

// Negative Chart I Height Adjustment
const negative1rowArray = [negative1Row1a, negative1Row1b, negative1Row1c, negative1Row2a, negative1Row2b, negative1Row2c, negative1Row3a, negative1Row3b, negative1Row3c, negative1Row4a, negative1Row4b, negative1Row4c, negative1Row5a, negative1Row5b, negative1Row5c, negative1Row6a, negative1Row6b, negative1Row6c, negative1Row7a, negative1Row7b, negative1Row7c, negative1Row8a, negative1Row8b, negative1Row8c, negative1Row9a, negative1Row9b, negative1Row9c, negative1Row10a, negative1Row10b, negative1Row10c];
const negative1inputArray = [negative1Text1a, negative1Text2a, negative1Text3a, negative1Text4a, negative1Text5a, negative1Text6a, negative1Text7a, negative1Text8a, negative1Text9a, negative1Text10a];
function negative1BarHeight(x) {
    for (var i = 0; i < negative1rowArray.length; i++) {
        if (negative1inputArray[0].value.length <= 16 && negative1inputArray[1].value.length <= 16 && negative1inputArray[2].value.length <= 16 && negative1inputArray[3].value.length <= 16 && negative1inputArray[4].value.length <= 16 && negative1inputArray[5].value.length <= 16 && negative1inputArray[6].value.length <= 16 && negative1inputArray[7].value.length <= 16 && negative1inputArray[8].value.length <= 16 && negative1inputArray[9].value.length <= 16) {
            // All labels must be <= 16 characters for the bar heights to be set at 28px
            negative1rowArray[i].style.height = "28px";
            negative1rowArray[i].height = "28";
        } else if (negative1inputArray[x].value.length < 32 && negative1inputArray[0].value.length < 32 && negative1inputArray[1].value.length < 32 && negative1inputArray[2].value.length < 32 && negative1inputArray[3].value.length < 32 && negative1inputArray[4].value.length < 32 && negative1inputArray[5].value.length < 32 && negative1inputArray[6].value.length < 32 && negative1inputArray[7].value.length < 32 && negative1inputArray[8].value.length < 32 && negative1inputArray[9].value.length < 32) {
            // All labels must be < 32 characters and only one needs to be > 16 to set all bar heights at 36px
            negative1rowArray[i].style.height = "36px";
            negative1rowArray[i].height = "36";
        } else if (negative1inputArray[0].value.length >= 32 || negative1inputArray[1].value.length >= 32 || negative1inputArray[2].value.length >= 32 || negative1inputArray[3].value.length >= 32 || negative1inputArray[4].value.length >= 32 || negative1inputArray[5].value.length >= 32 || negative1inputArray[6].value.length >= 32 || negative1inputArray[7].value.length >= 32 || negative1inputArray[8].value.length >= 32 || negative1inputArray[9].value.length >= 32) {
            // Only one label needs to be >= 32 characters to set all bars heights to 54px
            negative1rowArray[i].style.height = "54px";
            negative1rowArray[i].height = "54";
        }
    }
};
negative1inputArray[0].addEventListener("input", () => { negative1BarHeight(0); });
negative1inputArray[1].addEventListener("input", () => { negative1BarHeight(1); });
negative1inputArray[2].addEventListener("input", () => { negative1BarHeight(2); });
negative1inputArray[3].addEventListener("input", () => { negative1BarHeight(3); });
negative1inputArray[4].addEventListener("input", () => { negative1BarHeight(4); });
negative1inputArray[5].addEventListener("input", () => { negative1BarHeight(5); });
negative1inputArray[6].addEventListener("input", () => { negative1BarHeight(6); });
negative1inputArray[7].addEventListener("input", () => { negative1BarHeight(7); });
negative1inputArray[8].addEventListener("input", () => { negative1BarHeight(8); });
negative1inputArray[9].addEventListener("input", () => { negative1BarHeight(9); });

// Negative Chart I Focus/Blur Events
negative1capText.addEventListener("focus", () => { negative1Cap.style.textShadow = shadowColor; });
negative1capText.addEventListener("blur", () => { negative1Cap.style.textShadow = "none"; });
negative1subText.addEventListener("focus", () => { negative1Sub.style.textShadow = shadowColor; });
negative1subText.addEventListener("blur", () => { negative1Sub.style.textShadow = "none"; });
negative1srcText.addEventListener("focus", () => { negative1Source.style.textShadow = shadowColor; });
negative1srcText.addEventListener("blur", () => { negative1Source.style.textShadow = "none"; });
negative1Size1.addEventListener("focus", () => { negative1Row1c.style.boxShadow = barSizeShadow; });
negative1Size1.addEventListener("blur", () => { negative1Row1c.style.boxShadow = "none"; });
negative1Color1.addEventListener("focus", () => { negative1Row1c.style.boxShadow = barColorShadow; });
negative1Color1.addEventListener("blur", () => { negative1Row1c.style.boxShadow = "none"; });
negative1Text1a.addEventListener("focus", () => { negative1Row1a.style.textShadow = shadowColor; });
negative1Text1a.addEventListener("blur", () => { negative1Row1a.style.textShadow = "none"; });
negative1Text1b.addEventListener("focus", () => { negative1Row1c.style.textShadow = shadowColor; });
negative1Text1b.addEventListener("blur", () => { negative1Row1c.style.textShadow = "none"; });
negative1Size2.addEventListener("focus", () => { negative1Row2c.style.boxShadow = barSizeShadow; });
negative1Size2.addEventListener("blur", () => { negative1Row2c.style.boxShadow = "none"; });
negative1Color2.addEventListener("focus", () => { negative1Row2c.style.boxShadow = barColorShadow; });
negative1Color2.addEventListener("blur", () => { negative1Row2c.style.boxShadow = "none"; });
negative1Text2a.addEventListener("focus", () => { negative1Row2a.style.textShadow = shadowColor; });
negative1Text2a.addEventListener("blur", () => { negative1Row2a.style.textShadow = "none"; });
negative1Text2b.addEventListener("focus", () => { negative1Row2c.style.textShadow = shadowColor; });
negative1Text2b.addEventListener("blur", () => { negative1Row2c.style.textShadow = "none"; });
negative1Size3.addEventListener("focus", () => { negative1Row3c.style.boxShadow = barSizeShadow; });
negative1Size3.addEventListener("blur", () => { negative1Row3c.style.boxShadow = "none"; });
negative1Color3.addEventListener("focus", () => { negative1Row3c.style.boxShadow = barColorShadow; });
negative1Color3.addEventListener("blur", () => { negative1Row3c.style.boxShadow = "none"; });
negative1Text3a.addEventListener("focus", () => { negative1Row3a.style.textShadow = shadowColor; });
negative1Text3a.addEventListener("blur", () => { negative1Row3a.style.textShadow = "none"; });
negative1Text3b.addEventListener("focus", () => { negative1Row3c.style.textShadow = shadowColor; });
negative1Text3b.addEventListener("blur", () => { negative1Row3c.style.textShadow = "none"; });
negative1Size4.addEventListener("focus", () => { negative1Row4c.style.boxShadow = barSizeShadow; });
negative1Size4.addEventListener("blur", () => { negative1Row4c.style.boxShadow = "none"; });
negative1Color4.addEventListener("focus", () => { negative1Row4c.style.boxShadow = barColorShadow; });
negative1Color4.addEventListener("blur", () => { negative1Row4c.style.boxShadow = "none"; });
negative1Text4a.addEventListener("focus", () => { negative1Row4a.style.textShadow = shadowColor; });
negative1Text4a.addEventListener("blur", () => { negative1Row4a.style.textShadow = "none"; });
negative1Text4b.addEventListener("focus", () => { negative1Row4c.style.textShadow = shadowColor; });
negative1Text4b.addEventListener("blur", () => { negative1Row4c.style.textShadow = "none"; });
negative1Size5.addEventListener("focus", () => { negative1Row5c.style.boxShadow = barSizeShadow; });
negative1Size5.addEventListener("blur", () => { negative1Row5c.style.boxShadow = "none"; });
negative1Color5.addEventListener("focus", () => { negative1Row5c.style.boxShadow = barColorShadow; });
negative1Color5.addEventListener("blur", () => { negative1Row5c.style.boxShadow = "none"; });
negative1Text5a.addEventListener("focus", () => { negative1Row5a.style.textShadow = shadowColor; });
negative1Text5a.addEventListener("blur", () => { negative1Row5a.style.textShadow = "none"; });
negative1Text5b.addEventListener("focus", () => { negative1Row5c.style.textShadow = shadowColor; });
negative1Text5b.addEventListener("blur", () => { negative1Row5c.style.textShadow = "none"; });
negative1Size6.addEventListener("focus", () => { negative1Row6c.style.boxShadow = barSizeShadow; });
negative1Size6.addEventListener("blur", () => { negative1Row6c.style.boxShadow = "none"; });
negative1Color6.addEventListener("focus", () => { negative1Row6c.style.boxShadow = barColorShadow; });
negative1Color6.addEventListener("blur", () => { negative1Row6c.style.boxShadow = "none"; });
negative1Text6a.addEventListener("focus", () => { negative1Row6a.style.textShadow = shadowColor; });
negative1Text6a.addEventListener("blur", () => { negative1Row6a.style.textShadow = "none"; });
negative1Text6b.addEventListener("focus", () => { negative1Row6c.style.textShadow = shadowColor; });
negative1Text6b.addEventListener("blur", () => { negative1Row6c.style.textShadow = "none"; });
negative1Size7.addEventListener("focus", () => { negative1Row7c.style.boxShadow = barSizeShadow; });
negative1Size7.addEventListener("blur", () => { negative1Row7c.style.boxShadow = "none"; });
negative1Color7.addEventListener("focus", () => { negative1Row7c.style.boxShadow = barColorShadow; });
negative1Color7.addEventListener("blur", () => { negative1Row7c.style.boxShadow = "none"; });
negative1Text7a.addEventListener("focus", () => { negative1Row7a.style.textShadow = shadowColor; });
negative1Text7a.addEventListener("blur", () => { negative1Row7a.style.textShadow = "none"; });
negative1Text7b.addEventListener("focus", () => { negative1Row7c.style.textShadow = shadowColor; });
negative1Text7b.addEventListener("blur", () => { negative1Row7c.style.textShadow = "none"; });
negative1Size8.addEventListener("focus", () => { negative1Row8c.style.boxShadow = barSizeShadow; });
negative1Size8.addEventListener("blur", () => { negative1Row8c.style.boxShadow = "none"; });
negative1Color8.addEventListener("focus", () => { negative1Row8c.style.boxShadow = barColorShadow; });
negative1Color8.addEventListener("blur", () => { negative1Row8c.style.boxShadow = "none"; });
negative1Text8a.addEventListener("focus", () => { negative1Row8a.style.textShadow = shadowColor; });
negative1Text8a.addEventListener("blur", () => { negative1Row8a.style.textShadow = "none"; });
negative1Text8b.addEventListener("focus", () => { negative1Row8c.style.textShadow = shadowColor; });
negative1Text8b.addEventListener("blur", () => { negative1Row8c.style.textShadow = "none"; });
negative1Size9.addEventListener("focus", () => { negative1Row9c.style.boxShadow = barSizeShadow; });
negative1Size9.addEventListener("blur", () => { negative1Row9c.style.boxShadow = "none"; });
negative1Color9.addEventListener("focus", () => { negative1Row9c.style.boxShadow = barColorShadow; });
negative1Color9.addEventListener("blur", () => { negative1Row9c.style.boxShadow = "none"; });
negative1Text9a.addEventListener("focus", () => { negative1Row9a.style.textShadow = shadowColor; });
negative1Text9a.addEventListener("blur", () => { negative1Row9a.style.textShadow = "none"; });
negative1Text9b.addEventListener("focus", () => { negative1Row9c.style.textShadow = shadowColor; });
negative1Text9b.addEventListener("blur", () => { negative1Row9c.style.textShadow = "none"; });
negative1Size10.addEventListener("focus", () => { negative1Row10c.style.boxShadow = barSizeShadow; });
negative1Size10.addEventListener("blur", () => { negative1Row10c.style.boxShadow = "none"; });
negative1Color10.addEventListener("focus", () => { negative1Row10c.style.boxShadow = barColorShadow; });
negative1Color10.addEventListener("blur", () => { negative1Row10c.style.boxShadow = "none"; });
negative1Text10a.addEventListener("focus", () => { negative1Row10a.style.textShadow = shadowColor; });
negative1Text10a.addEventListener("blur", () => { negative1Row10a.style.textShadow = "none"; });
negative1Text10b.addEventListener("focus", () => { negative1Row10c.style.textShadow = shadowColor; });
negative1Text10b.addEventListener("blur", () => { negative1Row10c.style.textShadow = "none"; });

// Generate Negative I HTML Chart Logic
const negative1Weight = document.getElementById("negative1Weight");
const negative1Button = document.getElementById("negative1Button");
const negative1Output = document.getElementById("negative1Output");
negative1Button.addEventListener("mouseenter", () => { negative1Output.style.opacity = ".4"; negative1Weight.style.opacity = ".4"; } );
negative1Button.addEventListener("mouseleave", () => { negative1Output.style.opacity = ""; negative1Weight.style.opacity = ""; negative1Output.style.borderColor = ""; negative1Weight.style.color = ""; } );
negative1Button.addEventListener("click", () => {
    if (rowsData12.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative1csCode + ' <tr> <td align="left" style="padding: ' + negative1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr>' + negative1srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative1Output.textContent = chartCode;
        negative1Weight.textContent = Math.ceil(negative1Output.value.length / 1024) + 'KB';
    } else if (rowsData12.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative1csCode + ' <tr> <td align="left" style="padding: ' + negative1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2c.innerHTML + '</td></tr></table> </td></tr>' + negative1srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative1Output.textContent = chartCode;
        negative1Weight.textContent = Math.ceil(negative1Output.value.length / 1024) + 'KB';
    } else if (rowsData12.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative1csCode + ' <tr> <td align="left" style="padding: ' + negative1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3c.innerHTML + '</td></tr></table> </td></tr>' + negative1srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative1Output.textContent = chartCode;
        negative1Weight.textContent = Math.ceil(negative1Output.value.length / 1024) + 'KB';
    } else if (rowsData12.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative1csCode + ' <tr> <td align="left" style="padding: ' + negative1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4c.innerHTML + '</td></tr></table> </td></tr>' + negative1srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative1Output.textContent = chartCode;
        negative1Weight.textContent = Math.ceil(negative1Output.value.length / 1024) + 'KB';
    } else if (rowsData12.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative1csCode + ' <tr> <td align="left" style="padding: ' + negative1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row5a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row5c.innerHTML + '</td></tr></table> </td></tr>' + negative1srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative1Output.textContent = chartCode;
        negative1Weight.textContent = Math.ceil(negative1Output.value.length / 1024) + 'KB';
    } else if (rowsData12.value === "6") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative1csCode + ' <tr> <td align="left" style="padding: ' + negative1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row5a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row6a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row6c.innerHTML + '</td></tr></table> </td></tr>' + negative1srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative1Output.textContent = chartCode;
        negative1Weight.textContent = Math.ceil(negative1Output.value.length / 1024) + 'KB';
    } else if (rowsData12.value === "7") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative1csCode + ' <tr> <td align="left" style="padding: ' + negative1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row5a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row6a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row7a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row7b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row7b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row7c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row7c.innerHTML + '</td></tr></table> </td></tr>' + negative1srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative1Output.textContent = chartCode;
        negative1Weight.textContent = Math.ceil(negative1Output.value.length / 1024) + 'KB';
    } else if (rowsData12.value === "8") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative1csCode + ' <tr> <td align="left" style="padding: ' + negative1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row5a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row6a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row7a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row7b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row7b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row7c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row8a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row8b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row8b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row8c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row8c.innerHTML + '</td></tr></table> </td></tr>' + negative1srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative1Output.textContent = chartCode;
        negative1Weight.textContent = Math.ceil(negative1Output.value.length / 1024) + 'KB';
    } else if (rowsData12.value === "9") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative1csCode + ' <tr> <td align="left" style="padding: ' + negative1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row5a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row6a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row7a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row7b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row7b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row7c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row8a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row8b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row8b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row8c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row9a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row9b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row9b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row9c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row9c.innerHTML + '</td></tr></table> </td></tr>' + negative1srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative1Output.textContent = chartCode;
        negative1Weight.textContent = Math.ceil(negative1Output.value.length / 1024) + 'KB';
    } else if (rowsData12.value === "10") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative1csCode + ' <tr> <td align="left" style="padding: ' + negative1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row5a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row6a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row7a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row7b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row7b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row7c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row8a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row8b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row8b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row8c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row9a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row9b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row9b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row9c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row9c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative1borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row10a.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row10b.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row10b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color10.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row10c.style.width + '; height: ' + negative1Row1a.height + 'px;" height="' + negative1Row1a.height + '">' + negative1Row10c.innerHTML + '</td></tr></table> </td></tr>' + negative1srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative1Output.textContent = chartCode;
        negative1Weight.textContent = Math.ceil(negative1Output.value.length / 1024) + 'KB';
    }
    negative1Output.style.opacity = "";
    negative1Weight.style.opacity = "";
    negative1Output.style.borderColor = "#166dfc";
    negative1Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(negative1Output.value);
});
negative1Output.addEventListener("click", () => {
    negative1Output.select();
});

// Negative II Chart Row Selection
const negative2Bars = document.getElementsByClassName("negative2Bars");
const negative2Controls = document.getElementsByClassName("negative2Controls");
const rowsData13 = document.getElementById("rowsData13");
rowsData13.addEventListener("change", () => {
    for (var i = 0; i < negative2Controls.length; i++) {
        negative2Controls[i].style.display = "none";
        negative2Bars[i].style.display = "none";
        for (var x = 0; x < rowsData13.value; x++) {
            negative2Controls[x].style.display = "block";
            negative2Bars[x].style.display = "block";
        }
    }
});

// Negative Chart II Add Divider
const negative2DivNodes1 = document.querySelectorAll("tr.negative2Bars");
const negative2Div = document.getElementById("negative2Div");
window.addEventListener("load", () => { // Adds "none" to border-top on load
    for (var i = 1; i < negative2DivNodes1.length; i++) {
        negative2DivNodes1[i].firstElementChild.style.borderTop = "none";
    }
});
let negative2borderTop = "";
negative2Div.addEventListener("click", () => { // Toggles chart data bar dividers in chart preview
    for (var i = 1; i < negative2DivNodes1.length; i++) {
        negative2DivNodes1[i].firstElementChild.style.borderTop = negative2Div.checked ? "1px solid #e3e3e3" : "none";
    }
    negative2borderTop = negative2Div.checked ? "border-top: 1px solid #e3e3e3; " : ""; // Adds border-top to output code if checked
});

// Negative Chart II Caption
let negative2TopBarSpace = "0 0 5px 0";
let negative2csCode = "";
const negative2Cap = document.getElementById("negative2Cap"); // Caption or chart title
const negative2capText = document.getElementById("negative2capText"); // Caption or chart title text
negative2capText.oninput = function() {
    negative2Cap.innerHTML = negative2capText.value;
    if (negative2capText.value == "" && negative2subText.value == "") {
        negative2Bars[0].firstElementChild.style.padding = "0 0 5px 0"; // Targets the first data bar below legend
        negative2TopBarSpace = "0 0 5px 0"; // Padding for first data bar below legend for output code
        negative2Cap.style.marginBottom = "0";
        return negative2csCode = "";
    } else if (negative2capText.value == "" && negative2subText.value) {
        negative2Bars[0].firstElementChild.style.padding = "20px 0 5px 0";
        negative2TopBarSpace = "20px 0 5px 0";
        negative2Cap.style.marginBottom = "0";
        return negative2csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + negative2Sub.innerHTML + '</td> </tr>';
    } else if (negative2capText.value && negative2subText.value == "") {
        negative2Bars[0].firstElementChild.style.padding = "0 0 5px 0";
        negative2TopBarSpace = "0 0 5px 0";
        negative2Cap.style.marginBottom = "20px";
        return negative2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + negative2Cap.innerHTML + '</caption>';
    } else if (negative2capText.value && negative2subText.value) {
        negative2Bars[0].firstElementChild.style.padding = "20px 0 5px 0";
        negative2TopBarSpace = "20px 0 5px 0";
        negative2Cap.style.marginBottom = "4px";
        return negative2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + negative2Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + negative2Sub.innerHTML + '</td> </tr>';
    }
};
// Negative Chart II Subtitle
const negative2Sub = document.getElementById("negative2Sub"); // Chart subtitle
const negative2subText = document.getElementById("negative2subText"); // Chart subtitle text
negative2subText.oninput = function() {
    negative2Sub.innerHTML = negative2subText.value;
    if (negative2subText.value == "" && negative2capText.value == "") {
        negative2Bars[0].firstElementChild.style.padding = "0 0 5px 0";
        negative2TopBarSpace = "0 0 5px 0";
        negative2Cap.style.marginBottom = "0";
        return negative2csCode = "";
    } else if (negative2subText.value == "" && negative2capText.value) {
        negative2Bars[0].firstElementChild.style.padding = "0 0 5px 0";
        negative2TopBarSpace = "0 0 5px 0";
        negative2Cap.style.marginBottom = "20px";
        return negative2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + negative2Cap.innerHTML + '</caption>';
    } else if (negative2subText.value && negative2capText.value == "") {
        negative2Bars[0].firstElementChild.style.padding = "20px 0 5px 0";
        negative2TopBarSpace = "20px 0 5px 0";
        negative2Cap.style.marginBottom = "0";
        return negative2csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + negative2Sub.innerHTML + '</td> </tr>';
    } else if (negative2subText.value && negative2capText.value) {
        negative2Bars[0].firstElementChild.style.padding = "20px 0 5px 0";
        negative2TopBarSpace = "20px 0 5px 0";
        negative2Cap.style.marginBottom = "4px";
        return negative2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + negative2Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + negative2Sub.innerHTML + '</td> </tr>';
    }
};
// Negative II Chart Source
let negative2srcCode = "";
const negative2Source = document.getElementById("negative2Source"); // Chart source
const negative2srcText = document.getElementById("negative2srcText"); // Chart source text
negative2srcText.oninput = function() {
    negative2Source.innerHTML = negative2srcText.value;
    negative2Source.style.paddingTop = negative2srcText.value ? "15px" : "0";
    negative2srcCode = negative2srcText.value ? '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 15px; text-align: left;">' + negative2Source.innerHTML + '</td></tr>' : "";
};

// Negative II Chart Color Picker
const negative2colorPick = document.getElementById("negative2colorPick");
negative2colorPick.addEventListener("change", (evt) => {
    negative2Row1c.style.backgroundColor = evt.detail.hex;
    negative2Color1.value = evt.detail.hex;
    negative2Row2c.style.backgroundColor = evt.detail.hex;
    negative2Color2.value = evt.detail.hex;
    negative2Row3c.style.backgroundColor = evt.detail.hex;
    negative2Color3.value = evt.detail.hex;
    negative2Row4c.style.backgroundColor = evt.detail.hex;
    negative2Color4.value = evt.detail.hex;
    negative2Row5c.style.backgroundColor = evt.detail.hex;
    negative2Color5.value = evt.detail.hex;
    negative2Row6c.style.backgroundColor = evt.detail.hex;
    negative2Color6.value = evt.detail.hex;
    negative2Row7c.style.backgroundColor = evt.detail.hex;
    negative2Color7.value = evt.detail.hex;
    negative2Row8c.style.backgroundColor = evt.detail.hex;
    negative2Color8.value = evt.detail.hex;
    negative2Row9c.style.backgroundColor = evt.detail.hex;
    negative2Color9.value = evt.detail.hex;
    negative2Row10c.style.backgroundColor = evt.detail.hex;
    negative2Color10.value = evt.detail.hex;
});

// Negative II Row Customization Logic
const negative2Row1a = document.getElementById("negative2Row1a");
const negative2Row1b = document.getElementById("negative2Row1b");
const negative2Row1c = document.getElementById("negative2Row1c");
const negative2Row2a = document.getElementById("negative2Row2a");
const negative2Row2b = document.getElementById("negative2Row2b");
const negative2Row2c = document.getElementById("negative2Row2c");
const negative2Row3a = document.getElementById("negative2Row3a");
const negative2Row3b = document.getElementById("negative2Row3b");
const negative2Row3c = document.getElementById("negative2Row3c");
const negative2Row4a = document.getElementById("negative2Row4a");
const negative2Row4b = document.getElementById("negative2Row4b");
const negative2Row4c = document.getElementById("negative2Row4c");
const negative2Row5a = document.getElementById("negative2Row5a");
const negative2Row5b = document.getElementById("negative2Row5b");
const negative2Row5c = document.getElementById("negative2Row5c");
const negative2Row6a = document.getElementById("negative2Row6a");
const negative2Row6b = document.getElementById("negative2Row6b");
const negative2Row6c = document.getElementById("negative2Row6c");
const negative2Row7a = document.getElementById("negative2Row7a");
const negative2Row7b = document.getElementById("negative2Row7b");
const negative2Row7c = document.getElementById("negative2Row7c");
const negative2Row8a = document.getElementById("negative2Row8a");
const negative2Row8b = document.getElementById("negative2Row8b");
const negative2Row8c = document.getElementById("negative2Row8c");
const negative2Row9a = document.getElementById("negative2Row9a");
const negative2Row9b = document.getElementById("negative2Row9b");
const negative2Row9c = document.getElementById("negative2Row9c");
const negative2Row10a = document.getElementById("negative2Row10a");
const negative2Row10b = document.getElementById("negative2Row10b");
const negative2Row10c = document.getElementById("negative2Row10c");

// Negative II Row 1 Customization Logic
const negative2Text1a = document.getElementById("negative2Text1a");
negative2Text1a.oninput = function() {
    negative2Row1a.innerHTML = "&nbsp;" + negative2Text1a.value;
};
const negative2Size1 = document.getElementById("negative2Size1");
negative2Size1.oninput = function() {
    negative2Row1b.style.width = ((75 - (Math.abs(negative2Size1.value)) * .75)) + "%";
    negative2Row1c.style.width = ((Math.abs(negative2Size1.value)) * .75) + "%";
};
const negative2Text1b = document.getElementById("negative2Text1b");
negative2Text1b.oninput = function() {
    negative2Row1c.innerHTML = negative2Text1b.value ? "&nbsp;" + negative2Text1b.value : "";
};
const negative2Label1b = document.getElementById("negative2Label1b");
negative2Label1b.addEventListener("click", () => {
    if (negative2Text1b.value == "") {
        negative2Row1b.innerHTML = "";
        negative2Row1c.innerHTML = "";
    } else if (negative2Text1b.value) {
        negative2Row1b.innerHTML = negative2Text1b.value + "&nbsp;";
        negative2Text1b.value = "";
        negative2Row1c.innerHTML = "";
    }
});
const negative2Color1 = document.getElementById("negative2Color1");
negative2Color1.oninput = function() {
    negative2Row1c.style.backgroundColor = negative2Color1.value;
};

// Negative II Row 2 Customization Logic
const negative2Text2a = document.getElementById("negative2Text2a");
negative2Text2a.oninput = function() {
    negative2Row2a.innerHTML = "&nbsp;" + negative2Text2a.value;
};
const negative2Size2 = document.getElementById("negative2Size2");
negative2Size2.oninput = function() {
    negative2Row2b.style.width = ((75 - (Math.abs(negative2Size2.value)) * .75)) + "%";
    negative2Row2c.style.width = ((Math.abs(negative2Size2.value)) * .75) + "%";
};
const negative2Text2b = document.getElementById("negative2Text2b");
negative2Text2b.oninput = function() {
    negative2Row2c.innerHTML = negative2Text2b.value ? "&nbsp;" + negative2Text2b.value : "";
};
const negative2Label2b = document.getElementById("negative2Label2b");
negative2Label2b.addEventListener("click", () => {
    if (negative2Text2b.value == "") {
        negative2Row2b.innerHTML = "";
        negative2Row2c.innerHTML = "";
    } else if (negative2Text2b.value) {
        negative2Row2b.innerHTML = negative2Text2b.value + "&nbsp;";
        negative2Text2b.value = "";
        negative2Row2c.innerHTML = "";
    }
});
const negative2Color2 = document.getElementById("negative2Color2");
negative2Color2.oninput = function() {
    negative2Row2c.style.backgroundColor = negative2Color2.value;
};

// Negative II Row 3 Customization Logic
const negative2Text3a = document.getElementById("negative2Text3a");
negative2Text3a.oninput = function() {
    negative2Row3a.innerHTML = "&nbsp;" + negative2Text3a.value;
};
const negative2Size3 = document.getElementById("negative2Size3");
negative2Size3.oninput = function() {
    negative2Row3b.style.width = ((75 - (Math.abs(negative2Size3.value)) * .75)) + "%";
    negative2Row3c.style.width = ((Math.abs(negative2Size3.value)) * .75) + "%";
};
const negative2Text3b = document.getElementById("negative2Text3b");
negative2Text3b.oninput = function() {
    negative2Row3c.innerHTML = negative2Text3b.value ? "&nbsp;" + negative2Text3b.value : "";
};
const negative2Label3b = document.getElementById("negative2Label3b");
negative2Label3b.addEventListener("click", () => {
    if (negative2Text3b.value == "") {
        negative2Row3b.innerHTML = "";
        negative2Row3c.innerHTML = "";
    } else if (negative2Text3b.value) {
        negative2Row3b.innerHTML = negative2Text3b.value + "&nbsp;";
        negative2Text3b.value = "";
        negative2Row3c.innerHTML = "";
    }
});
const negative2Color3 = document.getElementById("negative2Color3");
negative2Color3.oninput = function() {
    negative2Row3c.style.backgroundColor = negative2Color3.value;
};

// Negative II Row 4 Customization Logic
const negative2Text4a = document.getElementById("negative2Text4a");
negative2Text4a.oninput = function() {
    negative2Row4a.innerHTML = "&nbsp;" + negative2Text4a.value;
};
const negative2Size4 = document.getElementById("negative2Size4");
negative2Size4.oninput = function() {
    negative2Row4b.style.width = ((75 - (Math.abs(negative2Size4.value)) * .75)) + "%";
    negative2Row4c.style.width = ((Math.abs(negative2Size4.value)) * .75) + "%";
};
const negative2Text4b = document.getElementById("negative2Text4b");
negative2Text4b.oninput = function() {
    negative2Row4c.innerHTML = negative2Text4b.value ? "&nbsp;" + negative2Text4b.value : "";
};
const negative2Label4b = document.getElementById("negative2Label4b");
negative2Label4b.addEventListener("click", () => {
    if (negative2Text4b.value == "") {
        negative2Row4b.innerHTML = "";
        negative2Row4c.innerHTML = "";
    } else if (negative2Text4b.value) {
        negative2Row4b.innerHTML = negative2Text4b.value + "&nbsp;";
        negative2Text4b.value = "";
        negative2Row4c.innerHTML = "";
    }
});
const negative2Color4 = document.getElementById("negative2Color4");
negative2Color4.oninput = function() {
    negative2Row4c.style.backgroundColor = negative2Color4.value;
};

// Negative II Row 5 Customization Logic
const negative2Text5a = document.getElementById("negative2Text5a");
negative2Text5a.oninput = function() {
    negative2Row5a.innerHTML = "&nbsp;" + negative2Text5a.value;
};
const negative2Size5 = document.getElementById("negative2Size5");
negative2Size5.oninput = function() {
    negative2Row5b.style.width = ((75 - (Math.abs(negative2Size5.value)) * .75)) + "%";
    negative2Row5c.style.width = ((Math.abs(negative2Size5.value)) * .75) + "%";
};
const negative2Text5b = document.getElementById("negative2Text5b");
negative2Text5b.oninput = function() {
    negative2Row5c.innerHTML = negative2Text5b.value ? "&nbsp;" + negative2Text5b.value : "";
};
const negative2Label5b = document.getElementById("negative2Label5b");
negative2Label5b.addEventListener("click", () => {
    if (negative2Text5b.value == "") {
        negative2Row5b.innerHTML = "";
        negative2Row5c.innerHTML = "";
    } else if (negative2Text5b.value) {
        negative2Row5b.innerHTML = negative2Text5b.value + "&nbsp;";
        negative2Text5b.value = "";
        negative2Row5c.innerHTML = "";
    }
});
const negative2Color5 = document.getElementById("negative2Color5");
negative2Color5.oninput = function() {
    negative2Row5c.style.backgroundColor = negative2Color5.value;
};

// Negative II Row 6 Customization Logic
const negative2Text6a = document.getElementById("negative2Text6a");
negative2Text6a.oninput = function() {
    negative2Row6a.innerHTML = "&nbsp;" + negative2Text6a.value;
};
const negative2Size6 = document.getElementById("negative2Size6");
negative2Size6.oninput = function() {
    negative2Row6b.style.width = ((75 - (Math.abs(negative2Size6.value)) * .75)) + "%";
    negative2Row6c.style.width = ((Math.abs(negative2Size6.value)) * .75) + "%";
};
const negative2Text6b = document.getElementById("negative2Text6b");
negative2Text6b.oninput = function() {
    negative2Row6c.innerHTML = negative2Text6b.value ? "&nbsp;" + negative2Text6b.value : "";
};
const negative2Label6b = document.getElementById("negative2Label6b");
negative2Label6b.addEventListener("click", () => {
    if (negative2Text6b.value == "") {
        negative2Row6b.innerHTML = "";
        negative2Row6c.innerHTML = "";
    } else if (negative2Text6b.value) {
        negative2Row6b.innerHTML = negative2Text6b.value + "&nbsp;";
        negative2Text6b.value = "";
        negative2Row6c.innerHTML = "";
    }
});
const negative2Color6 = document.getElementById("negative2Color6");
negative2Color6.oninput = function() {
    negative2Row6c.style.backgroundColor = negative2Color6.value;
};

// Negative II Row 7 Customization Logic
const negative2Text7a = document.getElementById("negative2Text7a");
negative2Text7a.oninput = function() {
    negative2Row7a.innerHTML = "&nbsp;" + negative2Text7a.value;
};
const negative2Size7 = document.getElementById("negative2Size7");
negative2Size7.oninput = function() {
    negative2Row7b.style.width = ((75 - (Math.abs(negative2Size7.value)) * .75)) + "%";
    negative2Row7c.style.width = ((Math.abs(negative2Size7.value)) * .75) + "%";
};
const negative2Text7b = document.getElementById("negative2Text7b");
negative2Text7b.oninput = function() {
    negative2Row7c.innerHTML = negative2Text7b.value ? "&nbsp;" + negative2Text7b.value : "";
};
const negative2Label7b = document.getElementById("negative2Label7b");
negative2Label7b.addEventListener("click", () => {
    if (negative2Text7b.value == "") {
        negative2Row7b.innerHTML = "";
        negative2Row7c.innerHTML = "";
    } else if (negative2Text7b.value) {
        negative2Row7b.innerHTML = negative2Text7b.value + "&nbsp;";
        negative2Text7b.value = "";
        negative2Row7c.innerHTML = "";
    }
});
const negative2Color7 = document.getElementById("negative2Color7");
negative2Color7.oninput = function() {
    negative2Row7c.style.backgroundColor = negative2Color7.value;
};

// Negative II Row 8 Customization Logic
const negative2Text8a = document.getElementById("negative2Text8a");
negative2Text8a.oninput = function() {
    negative2Row8a.innerHTML = "&nbsp;" + negative2Text8a.value;
};
const negative2Size8 = document.getElementById("negative2Size8");
negative2Size8.oninput = function() {
    negative2Row8b.style.width = ((75 - (Math.abs(negative2Size8.value)) * .75)) + "%";
    negative2Row8c.style.width = ((Math.abs(negative2Size8.value)) * .75) + "%";
};
const negative2Text8b = document.getElementById("negative2Text8b");
negative2Text8b.oninput = function() {
    negative2Row8c.innerHTML = negative2Text8b.value ? "&nbsp;" + negative2Text8b.value : "";
};
const negative2Label8b = document.getElementById("negative2Label8b");
negative2Label8b.addEventListener("click", () => {
    if (negative2Text8b.value == "") {
        negative2Row8b.innerHTML = "";
        negative2Row8c.innerHTML = "";
    } else if (negative2Text8b.value) {
        negative2Row8b.innerHTML = negative2Text8b.value + "&nbsp;";
        negative2Text8b.value = "";
        negative2Row8c.innerHTML = "";
    }
});
const negative2Color8 = document.getElementById("negative2Color8");
negative2Color8.oninput = function() {
    negative2Row8c.style.backgroundColor = negative2Color8.value;
};

// Negative II Row 9 Customization Logic
const negative2Text9a = document.getElementById("negative2Text9a");
negative2Text9a.oninput = function() {
    negative2Row9a.innerHTML = "&nbsp;" + negative2Text9a.value;
};
const negative2Size9 = document.getElementById("negative2Size9");
negative2Size9.oninput = function() {
    negative2Row9b.style.width = ((75 - (Math.abs(negative2Size9.value)) * .75)) + "%";
    negative2Row9c.style.width = ((Math.abs(negative2Size9.value)) * .75) + "%";
};
const negative2Text9b = document.getElementById("negative2Text9b");
negative2Text9b.oninput = function() {
    negative2Row9c.innerHTML = negative2Text9b.value ? "&nbsp;" + negative2Text9b.value : "";
};
const negative2Label9b = document.getElementById("negative2Label9b");
negative2Label9b.addEventListener("click", () => {
    if (negative2Text9b.value == "") {
        negative2Row9b.innerHTML = "";
        negative2Row9c.innerHTML = "";
    } else if (negative2Text9b.value) {
        negative2Row9b.innerHTML = negative2Text9b.value + "&nbsp;";
        negative2Text9b.value = "";
        negative2Row9c.innerHTML = "";
    }
});
const negative2Color9 = document.getElementById("negative2Color9");
negative2Color9.oninput = function() {
    negative2Row9c.style.backgroundColor = negative2Color9.value;
};

// Negative II Row 10 Customization Logic
const negative2Text10a = document.getElementById("negative2Text10a");
negative2Text10a.oninput = function() {
    negative2Row10a.innerHTML = "&nbsp;" + negative2Text10a.value;
};
const negative2Size10 = document.getElementById("negative2Size10");
negative2Size10.oninput = function() {
    negative2Row10b.style.width = ((75 - (Math.abs(negative2Size10.value)) * .75)) + "%";
    negative2Row10c.style.width = ((Math.abs(negative2Size10.value)) * .75) + "%";
};
const negative2Text10b = document.getElementById("negative2Text10b");
negative2Text10b.oninput = function() {
    negative2Row10c.innerHTML = negative2Text10b.value ? "&nbsp;" + negative2Text10b.value : "";
};
const negative2Label10b = document.getElementById("negative2Label10b");
negative2Label10b.addEventListener("click", () => {
    if (negative2Text10b.value == "") {
        negative2Row10b.innerHTML = "";
        negative2Row10c.innerHTML = "";
    } else if (negative2Text10b.value) {
        negative2Row10b.innerHTML = negative2Text10b.value + "&nbsp;";
        negative2Text10b.value = "";
        negative2Row10c.innerHTML = "";
    }
});
const negative2Color10 = document.getElementById("negative2Color10");
negative2Color10.oninput = function() {
    negative2Row10c.style.backgroundColor = negative2Color10.value;
};

// Negative Chart II Height Adjustment
const negative2rowArray = [negative2Row1a, negative2Row1b, negative2Row1c, negative2Row2a, negative2Row2b, negative2Row2c, negative2Row3a, negative2Row3b, negative2Row3c, negative2Row4a, negative2Row4b, negative2Row4c, negative2Row5a, negative2Row5b, negative2Row5c, negative2Row6a, negative2Row6b, negative2Row6c, negative2Row7a, negative2Row7b, negative2Row7c, negative2Row8a, negative2Row8b, negative2Row8c, negative2Row9a, negative2Row9b, negative2Row9c, negative2Row10a, negative2Row10b, negative2Row10c];
const negative2inputArray = [negative2Text1a, negative2Text2a, negative2Text3a, negative2Text4a, negative2Text5a, negative2Text6a, negative2Text7a, negative2Text8a, negative2Text9a, negative2Text10a];
function negative2BarHeight(x) {
    for (var i = 0; i < negative2rowArray.length; i++) {
        if (negative2inputArray[0].value.length <= 16 && negative2inputArray[1].value.length <= 16 && negative2inputArray[2].value.length <= 16 && negative2inputArray[3].value.length <= 16 && negative2inputArray[4].value.length <= 16 && negative2inputArray[5].value.length <= 16 && negative2inputArray[6].value.length <= 16 && negative2inputArray[7].value.length <= 16 && negative2inputArray[8].value.length <= 16 && negative2inputArray[9].value.length <= 16) {
            // All labels must be <= 16 characters for the bar heights to be set at 28px
            negative2rowArray[i].style.height = "28px";
            negative2rowArray[i].height = "28";
        } else if (negative2inputArray[x].value.length < 32 && negative2inputArray[0].value.length < 32 && negative2inputArray[1].value.length < 32 && negative2inputArray[2].value.length < 32 && negative2inputArray[3].value.length < 32 && negative2inputArray[4].value.length < 32 && negative2inputArray[5].value.length < 32 && negative2inputArray[6].value.length < 32 && negative2inputArray[7].value.length < 32 && negative2inputArray[8].value.length < 32 && negative2inputArray[9].value.length < 32) {
            // All labels must be < 32 characters and only one needs to be > 16 to set all bar heights at 36px
            negative2rowArray[i].style.height = "36px";
            negative2rowArray[i].height = "36";
        } else if (negative2inputArray[0].value.length >= 32 || negative2inputArray[1].value.length >= 32 || negative2inputArray[2].value.length >= 32 || negative2inputArray[3].value.length >= 32 || negative2inputArray[4].value.length >= 32 || negative2inputArray[5].value.length >= 32 || negative2inputArray[6].value.length >= 32 || negative2inputArray[7].value.length >= 32 || negative2inputArray[8].value.length >= 32 || negative2inputArray[9].value.length >= 32) {
            // Only one label needs to be >= 32 characters to set all bars heights to 54px
            negative2rowArray[i].style.height = "54px";
            negative2rowArray[i].height = "54";
        }
    }
};
negative2inputArray[0].addEventListener("input", () => { negative2BarHeight(0); });
negative2inputArray[1].addEventListener("input", () => { negative2BarHeight(1); });
negative2inputArray[2].addEventListener("input", () => { negative2BarHeight(2); });
negative2inputArray[3].addEventListener("input", () => { negative2BarHeight(3); });
negative2inputArray[4].addEventListener("input", () => { negative2BarHeight(4); });
negative2inputArray[5].addEventListener("input", () => { negative2BarHeight(5); });
negative2inputArray[6].addEventListener("input", () => { negative2BarHeight(6); });
negative2inputArray[7].addEventListener("input", () => { negative2BarHeight(7); });
negative2inputArray[8].addEventListener("input", () => { negative2BarHeight(8); });
negative2inputArray[9].addEventListener("input", () => { negative2BarHeight(9); });

// Negative Chart II Focus/Blur Events
negative2capText.addEventListener("focus", () => { negative2Cap.style.textShadow = shadowColor; });
negative2capText.addEventListener("blur", () => { negative2Cap.style.textShadow = "none"; });
negative2subText.addEventListener("focus", () => { negative2Sub.style.textShadow = shadowColor; });
negative2subText.addEventListener("blur", () => { negative2Sub.style.textShadow = "none"; });
negative2srcText.addEventListener("focus", () => { negative2Source.style.textShadow = shadowColor; });
negative2srcText.addEventListener("blur", () => { negative2Source.style.textShadow = "none"; });
negative2Size1.addEventListener("focus", () => { negative2Row1c.style.boxShadow = barSizeShadow; });
negative2Size1.addEventListener("blur", () => { negative2Row1c.style.boxShadow = "none"; });
negative2Color1.addEventListener("focus", () => { negative2Row1c.style.boxShadow = barColorShadow; });
negative2Color1.addEventListener("blur", () => { negative2Row1c.style.boxShadow = "none"; });
negative2Text1a.addEventListener("focus", () => { negative2Row1a.style.textShadow = shadowColor; });
negative2Text1a.addEventListener("blur", () => { negative2Row1a.style.textShadow = "none"; });
negative2Text1b.addEventListener("focus", () => { negative2Row1c.style.textShadow = shadowColor; });
negative2Text1b.addEventListener("blur", () => { negative2Row1c.style.textShadow = "none"; });
negative2Size2.addEventListener("focus", () => { negative2Row2c.style.boxShadow = barSizeShadow; });
negative2Size2.addEventListener("blur", () => { negative2Row2c.style.boxShadow = "none"; });
negative2Color2.addEventListener("focus", () => { negative2Row2c.style.boxShadow = barColorShadow; });
negative2Color2.addEventListener("blur", () => { negative2Row2c.style.boxShadow = "none"; });
negative2Text2a.addEventListener("focus", () => { negative2Row2a.style.textShadow = shadowColor; });
negative2Text2a.addEventListener("blur", () => { negative2Row2a.style.textShadow = "none"; });
negative2Text2b.addEventListener("focus", () => { negative2Row2c.style.textShadow = shadowColor; });
negative2Text2b.addEventListener("blur", () => { negative2Row2c.style.textShadow = "none"; });
negative2Size3.addEventListener("focus", () => { negative2Row3c.style.boxShadow = barSizeShadow; });
negative2Size3.addEventListener("blur", () => { negative2Row3c.style.boxShadow = "none"; });
negative2Color3.addEventListener("focus", () => { negative2Row3c.style.boxShadow = barColorShadow; });
negative2Color3.addEventListener("blur", () => { negative2Row3c.style.boxShadow = "none"; });
negative2Text3a.addEventListener("focus", () => { negative2Row3a.style.textShadow = shadowColor; });
negative2Text3a.addEventListener("blur", () => { negative2Row3a.style.textShadow = "none"; });
negative2Text3b.addEventListener("focus", () => { negative2Row3c.style.textShadow = shadowColor; });
negative2Text3b.addEventListener("blur", () => { negative2Row3c.style.textShadow = "none"; });
negative2Size4.addEventListener("focus", () => { negative2Row4c.style.boxShadow = barSizeShadow; });
negative2Size4.addEventListener("blur", () => { negative2Row4c.style.boxShadow = "none"; });
negative2Color4.addEventListener("focus", () => { negative2Row4c.style.boxShadow = barColorShadow; });
negative2Color4.addEventListener("blur", () => { negative2Row4c.style.boxShadow = "none"; });
negative2Text4a.addEventListener("focus", () => { negative2Row4a.style.textShadow = shadowColor; });
negative2Text4a.addEventListener("blur", () => { negative2Row4a.style.textShadow = "none"; });
negative2Text4b.addEventListener("focus", () => { negative2Row4c.style.textShadow = shadowColor; });
negative2Text4b.addEventListener("blur", () => { negative2Row4c.style.textShadow = "none"; });
negative2Size5.addEventListener("focus", () => { negative2Row5c.style.boxShadow = barSizeShadow; });
negative2Size5.addEventListener("blur", () => { negative2Row5c.style.boxShadow = "none"; });
negative2Color5.addEventListener("focus", () => { negative2Row5c.style.boxShadow = barColorShadow; });
negative2Color5.addEventListener("blur", () => { negative2Row5c.style.boxShadow = "none"; });
negative2Text5a.addEventListener("focus", () => { negative2Row5a.style.textShadow = shadowColor; });
negative2Text5a.addEventListener("blur", () => { negative2Row5a.style.textShadow = "none"; });
negative2Text5b.addEventListener("focus", () => { negative2Row5c.style.textShadow = shadowColor; });
negative2Text5b.addEventListener("blur", () => { negative2Row5c.style.textShadow = "none"; });
negative2Size6.addEventListener("focus", () => { negative2Row6c.style.boxShadow = barSizeShadow; });
negative2Size6.addEventListener("blur", () => { negative2Row6c.style.boxShadow = "none"; });
negative2Color6.addEventListener("focus", () => { negative2Row6c.style.boxShadow = barColorShadow; });
negative2Color6.addEventListener("blur", () => { negative2Row6c.style.boxShadow = "none"; });
negative2Text6a.addEventListener("focus", () => { negative2Row6a.style.textShadow = shadowColor; });
negative2Text6a.addEventListener("blur", () => { negative2Row6a.style.textShadow = "none"; });
negative2Text6b.addEventListener("focus", () => { negative2Row6c.style.textShadow = shadowColor; });
negative2Text6b.addEventListener("blur", () => { negative2Row6c.style.textShadow = "none"; });
negative2Size7.addEventListener("focus", () => { negative2Row7c.style.boxShadow = barSizeShadow; });
negative2Size7.addEventListener("blur", () => { negative2Row7c.style.boxShadow = "none"; });
negative2Color7.addEventListener("focus", () => { negative2Row7c.style.boxShadow = barColorShadow; });
negative2Color7.addEventListener("blur", () => { negative2Row7c.style.boxShadow = "none"; });
negative2Text7a.addEventListener("focus", () => { negative2Row7a.style.textShadow = shadowColor; });
negative2Text7a.addEventListener("blur", () => { negative2Row7a.style.textShadow = "none"; });
negative2Text7b.addEventListener("focus", () => { negative2Row7c.style.textShadow = shadowColor; });
negative2Text7b.addEventListener("blur", () => { negative2Row7c.style.textShadow = "none"; });
negative2Size8.addEventListener("focus", () => { negative2Row8c.style.boxShadow = barSizeShadow; });
negative2Size8.addEventListener("blur", () => { negative2Row8c.style.boxShadow = "none"; });
negative2Color8.addEventListener("focus", () => { negative2Row8c.style.boxShadow = barColorShadow; });
negative2Color8.addEventListener("blur", () => { negative2Row8c.style.boxShadow = "none"; });
negative2Text8a.addEventListener("focus", () => { negative2Row8a.style.textShadow = shadowColor; });
negative2Text8a.addEventListener("blur", () => { negative2Row8a.style.textShadow = "none"; });
negative2Text8b.addEventListener("focus", () => { negative2Row8c.style.textShadow = shadowColor; });
negative2Text8b.addEventListener("blur", () => { negative2Row8c.style.textShadow = "none"; });
negative2Size9.addEventListener("focus", () => { negative2Row9c.style.boxShadow = barSizeShadow; });
negative2Size9.addEventListener("blur", () => { negative2Row9c.style.boxShadow = "none"; });
negative2Color9.addEventListener("focus", () => { negative2Row9c.style.boxShadow = barColorShadow; });
negative2Color9.addEventListener("blur", () => { negative2Row9c.style.boxShadow = "none"; });
negative2Text9a.addEventListener("focus", () => { negative2Row9a.style.textShadow = shadowColor; });
negative2Text9a.addEventListener("blur", () => { negative2Row9a.style.textShadow = "none"; });
negative2Text9b.addEventListener("focus", () => { negative2Row9c.style.textShadow = shadowColor; });
negative2Text9b.addEventListener("blur", () => { negative2Row9c.style.textShadow = "none"; });
negative2Size10.addEventListener("focus", () => { negative2Row10c.style.boxShadow = barSizeShadow; });
negative2Size10.addEventListener("blur", () => { negative2Row10c.style.boxShadow = "none"; });
negative2Color10.addEventListener("focus", () => { negative2Row10c.style.boxShadow = barColorShadow; });
negative2Color10.addEventListener("blur", () => { negative2Row10c.style.boxShadow = "none"; });
negative2Text10a.addEventListener("focus", () => { negative2Row10a.style.textShadow = shadowColor; });
negative2Text10a.addEventListener("blur", () => { negative2Row10a.style.textShadow = "none"; });
negative2Text10b.addEventListener("focus", () => { negative2Row10c.style.textShadow = shadowColor; });
negative2Text10b.addEventListener("blur", () => { negative2Row10c.style.textShadow = "none"; });

// Generate Negative HTML Chart Logic
const negative2Weight = document.getElementById("negative2Weight");
const negative2Button = document.getElementById("negative2Button");
const negative2Output = document.getElementById("negative2Output");
negative2Button.addEventListener("mouseenter", () => { negative2Output.style.opacity = ".4"; negative2Weight.style.opacity = ".4"; } );
negative2Button.addEventListener("mouseleave", () => { negative2Output.style.opacity = ""; negative2Weight.style.opacity = ""; negative2Output.style.borderColor = ""; negative2Weight.style.color = ""; } );
negative2Button.addEventListener("click", () => {
    if (rowsData13.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative2csCode + ' <tr> <td align="left" style="padding: ' + negative2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr>' + negative2srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative2Output.textContent = chartCode;
        negative2Weight.textContent = Math.ceil(negative2Output.value.length / 1024) + 'KB';
    } else if (rowsData13.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative2csCode + ' <tr> <td align="left" style="padding: ' + negative2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2a.innerHTML + '</td></tr></table> </td></tr>' + negative2srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative2Output.textContent = chartCode;
        negative2Weight.textContent = Math.ceil(negative2Output.value.length / 1024) + 'KB';
    } else if (rowsData13.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative2csCode + ' <tr> <td align="left" style="padding: ' + negative2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3a.innerHTML + '</td></tr></table> </td></tr>' + negative2srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative2Output.textContent = chartCode;
        negative2Weight.textContent = Math.ceil(negative2Output.value.length / 1024) + 'KB';
    } else if (rowsData13.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative2csCode + ' <tr> <td align="left" style="padding: ' + negative2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4a.innerHTML + '</td></tr></table> </td></tr>' + negative2srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative2Output.textContent = chartCode;
        negative2Weight.textContent = Math.ceil(negative2Output.value.length / 1024) + 'KB';
    } else if (rowsData13.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative2csCode + ' <tr> <td align="left" style="padding: ' + negative2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row5c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row5a.innerHTML + '</td></tr></table> </td></tr>' + negative2srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative2Output.textContent = chartCode;
        negative2Weight.textContent = Math.ceil(negative2Output.value.length / 1024) + 'KB';
    } else if (rowsData13.value === "6") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative2csCode + ' <tr> <td align="left" style="padding: ' + negative2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row5c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row5a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6b.style.width + ' height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row6c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row6a.innerHTML + '</td></tr></table> </td></tr>' + negative2srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative2Output.textContent = chartCode;
        negative2Weight.textContent = Math.ceil(negative2Output.value.length / 1024) + 'KB';
    } else if (rowsData13.value === "7") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative2csCode + ' <tr> <td align="left" style="padding: ' + negative2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row5c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row5a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6b.style.width + ' height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row6c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row6a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row7b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row7b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row7c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row7c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row7a.innerHTML + '</td></tr></table> </td></tr>' + negative2srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative2Output.textContent = chartCode;
        negative2Weight.textContent = Math.ceil(negative2Output.value.length / 1024) + 'KB';
    } else if (rowsData13.value === "8") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative2csCode + ' <tr> <td align="left" style="padding: ' + negative2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row5c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row5a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6b.style.width + ' height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row6c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row6a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row7b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row7b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row7c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row7c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row7a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row8b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row8b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row8c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row8c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row8a.innerHTML + '</td></tr></table> </td></tr>' + negative2srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative2Output.textContent = chartCode;
        negative2Weight.textContent = Math.ceil(negative2Output.value.length / 1024) + 'KB';
    } else if (rowsData13.value === "9") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative2csCode + ' <tr> <td align="left" style="padding: ' + negative2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row5c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row5a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6b.style.width + ' height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row6c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row6a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row7b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row7b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row7c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row7c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row7a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row8b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row8b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row8c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row8c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row8a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row9b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row9b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row9c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row9c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row9a.innerHTML + '</td></tr></table> </td></tr>' + negative2srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative2Output.textContent = chartCode;
        negative2Weight.textContent = Math.ceil(negative2Output.value.length / 1024) + 'KB';
    } else if (rowsData13.value === "10") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + negative2csCode + ' <tr> <td align="left" style="padding: ' + negative2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row2a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row3a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row4a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row5c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row5a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6b.style.width + ' height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row6c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row6a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row7b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row7b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row7c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row7c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row7a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row8b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row8b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row8c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row8c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row8a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row9b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row9b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row9c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row9c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row9a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + negative2borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row10b.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row10b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color10.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row10c.style.width + '; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row10c.innerHTML + '</td><td align="right" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + negative2Row1a.height + 'px;" height="' + negative2Row1a.height + '">' + negative2Row10a.innerHTML + '</td></tr></table> </td></tr>' + negative2srcCode + ' </table> </td></tr></table> ' + botSpace;
        negative2Output.textContent = chartCode;
        negative2Weight.textContent = Math.ceil(negative2Output.value.length / 1024) + 'KB';
    }
    negative2Output.style.opacity = "";
    negative2Weight.style.opacity = "";
    negative2Output.style.borderColor = "#166dfc";
    negative2Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(negative2Output.value);
});
negative2Output.addEventListener("click", () => {
    negative2Output.select();
});

// Negative/Positive (Split) Chart Row Selection
const splitBars = document.getElementsByClassName("splitBars");
const splitControls = document.getElementsByClassName("splitControls");
const rowsData20 = document.getElementById("rowsData20");
rowsData20.addEventListener("change", () => {
    for (var i = 0; i < splitControls.length; i++) {
        splitControls[i].style.display = "none";
        splitBars[i].style.display = "none";
        for (var x = 0; x < rowsData20.value; x++) {
            splitControls[x].style.display = "block";
            splitBars[x].style.display = "block";
        }
    }
});

// Negative/Positive (Split) Caption
let splitTopBarSpace = "0";
let splitcsCode = "";
const splitCap = document.getElementById("splitCap"); // Caption or chart title
const splitcapText = document.getElementById("splitcapText"); // Caption or chart title text
splitcapText.oninput = function() {
    splitCap.innerHTML = splitcapText.value;
    if (splitcapText.value == "" && splitsubText.value == "") {
        splitBars[0].firstElementChild.style.padding = "0"; // Targets the first data bar below legend
        splitTopBarSpace = "0"; // Padding for first data bar below legend for output code
        splitCap.style.marginBottom = "0";
        return splitcsCode = "";
    } else if (splitcapText.value == "" && splitsubText.value) {
        splitBars[0].firstElementChild.style.padding = "20px 0 0 0";
        splitTopBarSpace = "20px 0 0 0";
        splitCap.style.marginBottom = "0";
        return splitcsCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; text-align: left;">' + splitSub.innerHTML + '</td> </tr>';
    } else if (splitcapText.value && splitsubText.value == "") {
        splitBars[0].firstElementChild.style.padding = "0";
        splitTopBarSpace = "0";
        splitCap.style.marginBottom = "20px";
        return splitcsCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + splitCap.innerHTML + '</caption>';
    } else if (splitcapText.value && splitsubText.value) {
        splitBars[0].firstElementChild.style.padding = "20px 0 0 0";
        splitTopBarSpace = "20px 0 0 0";
        splitCap.style.marginBottom = "4px";
        return splitcsCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + splitCap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; text-align: left;">' + splitSub.innerHTML + '</td> </tr>';
    }
};
// Negative/Positive (Split) Caption
const splitSub = document.getElementById("splitSub"); // Chart subtitle
const splitsubText = document.getElementById("splitsubText"); // Chart subtitle text
splitsubText.oninput = function() {
    splitSub.innerHTML = splitsubText.value;
    if (splitsubText.value == "" && splitcapText.value == "") {
        splitBars[0].firstElementChild.style.padding = "0";
        splitTopBarSpace = "0";
        splitCap.style.marginBottom = "0";
        return splitcsCode = "";
    } else if (splitsubText.value == "" && splitcapText.value) {
        splitBars[0].firstElementChild.style.padding = "0";
        splitTopBarSpace = "0";
        splitCap.style.marginBottom = "20px";
        return splitcsCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + splitCap.innerHTML + '</caption>';
    } else if (splitsubText.value && splitcapText.value == "") {
        splitBars[0].firstElementChild.style.padding = "20px 0 0 0";
        splitTopBarSpace = "20px 0 0 0";
        splitCap.style.marginBottom = "0";
        return splitcsCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; text-align: left;">' + splitSub.innerHTML + '</td> </tr>';
    } else if (splitsubText.value && splitcapText.value) {
        splitBars[0].firstElementChild.style.padding = "20px 0 0 0";
        splitTopBarSpace = "20px 0 0 0";
        splitCap.style.marginBottom = "4px";
        return splitcsCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + splitCap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; text-align: left;">' + splitSub.innerHTML + '</td> </tr>';
    }
};
// Negative/Positive (Split) Source
let splitsrcCode = "";
const splitSource = document.getElementById("splitSource"); // Chart source
const splitsrcText = document.getElementById("splitsrcText"); // Chart source text
splitsrcText.oninput = function() {
    splitSource.innerHTML = splitsrcText.value;
    splitSource.style.paddingTop = splitsrcText.value ? "20px" : "0";
    splitsrcCode = splitsrcText.value ? '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 20px; text-align: left;">' + splitSource.innerHTML + '</td></tr>' : "";
};

// Negative/Positive (Split) Chart Color Picker
const splitcolorPickN = document.getElementById("splitcolorPickN");
splitcolorPickN.addEventListener("change", (evt) => {
    row1b.style.backgroundColor = evt.detail.hex;
    rowColor1a.value = evt.detail.hex;
    row2b.style.backgroundColor = evt.detail.hex;
    rowColor2a.value = evt.detail.hex;
    row3b.style.backgroundColor = evt.detail.hex;
    rowColor3a.value = evt.detail.hex;
    row4b.style.backgroundColor = evt.detail.hex;
    rowColor4a.value = evt.detail.hex;
    row5b.style.backgroundColor = evt.detail.hex;
    rowColor5a.value = evt.detail.hex;
    row6b.style.backgroundColor = evt.detail.hex;
    rowColor6a.value = evt.detail.hex;
    row7b.style.backgroundColor = evt.detail.hex;
    rowColor7a.value = evt.detail.hex;
    row8b.style.backgroundColor = evt.detail.hex;
    rowColor8a.value = evt.detail.hex;
    row9b.style.backgroundColor = evt.detail.hex;
    rowColor9a.value = evt.detail.hex;
    row10b.style.backgroundColor = evt.detail.hex;
    rowColor10a.value = evt.detail.hex;
});
const splitcolorPickP = document.getElementById("splitcolorPickP");
splitcolorPickP.addEventListener("change", (evt) => {
    row1c.style.backgroundColor = evt.detail.hex;
    rowColor1b.value = evt.detail.hex;
    row2c.style.backgroundColor = evt.detail.hex;
    rowColor2b.value = evt.detail.hex;
    row3c.style.backgroundColor = evt.detail.hex;
    rowColor3b.value = evt.detail.hex;
    row4c.style.backgroundColor = evt.detail.hex;
    rowColor4b.value = evt.detail.hex;
    row5c.style.backgroundColor = evt.detail.hex;
    rowColor5b.value = evt.detail.hex;
    row6c.style.backgroundColor = evt.detail.hex;
    rowColor6b.value = evt.detail.hex;
    row7c.style.backgroundColor = evt.detail.hex;
    rowColor7b.value = evt.detail.hex;
    row8c.style.backgroundColor = evt.detail.hex;
    rowColor8b.value = evt.detail.hex;
    row9c.style.backgroundColor = evt.detail.hex;
    rowColor9b.value = evt.detail.hex;
    row10c.style.backgroundColor = evt.detail.hex;
    rowColor10b.value = evt.detail.hex;
});

// Split Chart Row Customization Logic
const row1a = document.getElementById("row1a");
const row1b = document.getElementById("row1b");
const row1c = document.getElementById("row1c");
const row1d = document.getElementById("row1d");
const row2a = document.getElementById("row2a");
const row2b = document.getElementById("row2b");
const row2c = document.getElementById("row2c");
const row2d = document.getElementById("row2d");
const row3a = document.getElementById("row3a");
const row3b = document.getElementById("row3b");
const row3c = document.getElementById("row3c");
const row3d = document.getElementById("row3d");
const row4a = document.getElementById("row4a");
const row4b = document.getElementById("row4b");
const row4c = document.getElementById("row4c");
const row4d = document.getElementById("row4d");
const row5a = document.getElementById("row5a");
const row5b = document.getElementById("row5b");
const row5c = document.getElementById("row5c");
const row5d = document.getElementById("row5d");
const row6a = document.getElementById("row6a");
const row6b = document.getElementById("row6b");
const row6c = document.getElementById("row6c");
const row6d = document.getElementById("row6d");
const row7a = document.getElementById("row7a");
const row7b = document.getElementById("row7b");
const row7c = document.getElementById("row7c");
const row7d = document.getElementById("row7d");
const row8a = document.getElementById("row8a");
const row8b = document.getElementById("row8b");
const row8c = document.getElementById("row8c");
const row8d = document.getElementById("row8d");
const row9a = document.getElementById("row9a");
const row9b = document.getElementById("row9b");
const row9c = document.getElementById("row9c");
const row9d = document.getElementById("row9d");
const row10a = document.getElementById("row10a");
const row10b = document.getElementById("row10b");
const row10c = document.getElementById("row10c");
const row10d = document.getElementById("row10d");

// Row 1 Customization Logic
const rowText1a = document.getElementById("rowText1a");
rowText1a.oninput = function() {
    if (rowText1a.value == "") {
        row1b.innerHTML = rowText1a.value;
    } else if (rowText1a.value) {
        row1b.innerHTML = "&nbsp;" + rowText1a.value;
    }
};
const rowSize1a = document.getElementById("rowSize1a");
rowSize1a.oninput = function() {
    row1a.style.width = ((100 - (Math.abs(rowSize1a.value))) / 2) + "%";
    row1b.style.width = (Math.abs(rowSize1a.value) / 2) + "%";
};
const row1aLabel = document.getElementById("row1aLabel");
row1aLabel.addEventListener("click", () => {
    row1b.innerHTML = "";
    if (rowText1a.value == "") {
        row1a.innerHTML = "";
    } else if (rowText1a.value) {
        row1a.innerHTML = rowText1a.value + "&nbsp;";
        rowText1a.value = "";
    }
});
const rowColor1a = document.getElementById("rowColor1a");
rowColor1a.oninput = function() {
    row1b.style.backgroundColor = rowColor1a.value;
};
const rowSize1b = document.getElementById("rowSize1b");
rowSize1b.oninput = function() {
    row1c.style.width = (Math.abs(rowSize1b.value) / 2) + "%";
    row1d.style.width = (Math.abs(rowSize1b.value - 100) / 2) + "%";
};
const rowText1b = document.getElementById("rowText1b");
rowText1b.oninput = function() {
    if (rowText1b.value == "") {
        row1d.innerHTML = rowText1b.value;
    } else if (rowText1b.value) {
        row1d.innerHTML = "&nbsp;" + rowText1b.value;
    }
};
const row1bLabel = document.getElementById("row1bLabel");
row1bLabel.addEventListener("click", () => {
    row1d.innerHTML = "";
    if (rowText1b.value == "") {
        row1c.innerHTML = "";
        rowText1b.value = "";
    } else if (rowText1b.value) {
        row1c.innerHTML = rowText1b.value + "&nbsp;";
        rowText1b.value = "";
    }
});
const rowColor1b = document.getElementById("rowColor1b");
rowColor1b.oninput = function() {
    row1c.style.backgroundColor = rowColor1b.value;
};

// Row 2 Customization Logic
const rowText2a = document.getElementById("rowText2a");
rowText2a.oninput = function() {
    if (rowText2a.value == "") {
        row2b.innerHTML = rowText2a.value;
    } else if (rowText2a.value) {
        row2b.innerHTML = "&nbsp;" + rowText2a.value;
    }
};
const rowSize2a = document.getElementById("rowSize2a");
rowSize2a.oninput = function() {
    row2a.style.width = ((100 - (Math.abs(rowSize2a.value))) / 2) + "%";
    row2b.style.width = (Math.abs(rowSize2a.value) / 2) + "%";
};
const row2aLabel = document.getElementById("row2aLabel");
row2aLabel.addEventListener("click", () => {
    row2b.innerHTML = "";
    if (rowText2a.value == "") {
        row2a.innerHTML = "";
    } else if (rowText2a.value) {
        row2a.innerHTML = rowText2a.value + "&nbsp;";
        rowText2a.value = "";
    }
});
const rowColor2a = document.getElementById("rowColor2a");
rowColor2a.oninput = function() {
    row2b.style.backgroundColor = rowColor2a.value;
};
const rowSize2b = document.getElementById("rowSize2b");
rowSize2b.oninput = function() {
    row2c.style.width = (Math.abs(rowSize2b.value) / 2) + "%";
    row2d.style.width = (Math.abs(rowSize2b.value - 100) / 2) + "%";
};
const rowText2b = document.getElementById("rowText2b");
rowText2b.oninput = function() {
    if (rowText2b.value == "") {
        row2d.innerHTML = rowText2b.value;
    } else if (rowText2b.value) {
        row2d.innerHTML = "&nbsp;" + rowText2b.value;
    }
};
const row2bLabel = document.getElementById("row2bLabel");
row2bLabel.addEventListener("click", () => {
    row2d.innerHTML = "";
    if (rowText2b.value == "") {
        row2c.innerHTML = "";
        rowText2b.value = "";
    } else if (rowText2b.value) {
        row2c.innerHTML = rowText2b.value + "&nbsp;";
        rowText2b.value = "";
    }
});
const rowColor2b = document.getElementById("rowColor2b");
rowColor2b.oninput = function() {
    row2c.style.backgroundColor = rowColor2b.value;
};

// Row 3 Customization Logic
const rowText3a = document.getElementById("rowText3a");
rowText3a.oninput = function() {
    if (rowText3a.value == "") {
        row3b.innerHTML = rowText3a.value;
    } else if (rowText3a.value) {
        row3b.innerHTML = "&nbsp;" + rowText3a.value;
    }
};
const rowSize3a = document.getElementById("rowSize3a");
rowSize3a.oninput = function() {
    row3a.style.width = ((100 - (Math.abs(rowSize3a.value))) / 2) + "%";
    row3b.style.width = (Math.abs(rowSize3a.value) / 2) + "%";
};
const row3aLabel = document.getElementById("row3aLabel");
row3aLabel.addEventListener("click", () => {
    row3b.innerHTML = "";
    if (rowText3a.value == "") {
        row3a.innerHTML = "";
    } else if (rowText3a.value) {
        row3a.innerHTML = rowText3a.value + "&nbsp;";
        rowText3a.value = "";
    }
});
const rowColor3a = document.getElementById("rowColor3a");
rowColor3a.oninput = function() {
    row3b.style.backgroundColor = rowColor3a.value;
};
const rowSize3b = document.getElementById("rowSize3b");
rowSize3b.oninput = function() {
    row3c.style.width = (Math.abs(rowSize3b.value) / 2) + "%";
    row3d.style.width = (Math.abs(rowSize3b.value - 100) / 2) + "%";
};
const rowText3b = document.getElementById("rowText3b");
rowText3b.oninput = function() {
    if (rowText3b.value == "") {
        row3d.innerHTML = rowText3b.value;
    } else if (rowText3b.value) {
        row3d.innerHTML = "&nbsp;" + rowText3b.value;
    }
};
const row3bLabel = document.getElementById("row3bLabel");
row3bLabel.addEventListener("click", () => {
    row3d.innerHTML = "";
    if (rowText3b.value == "") {
        row3c.innerHTML = "";
        rowText3b.value = "";
    } else if (rowText3b.value) {
        row3c.innerHTML = rowText3b.value + "&nbsp;";
        rowText3b.value = "";
    }
});
const rowColor3b = document.getElementById("rowColor3b");
rowColor3b.oninput = function() {
    row3c.style.backgroundColor = rowColor3b.value;
};

// Row 4 Customization Logic
const rowText4a = document.getElementById("rowText4a");
rowText4a.oninput = function() {
    if (rowText4a.value == "") {
        row4b.innerHTML = rowText4a.value;
    } else if (rowText4a.value) {
        row4b.innerHTML = "&nbsp;" + rowText4a.value;
    }
};
const rowSize4a = document.getElementById("rowSize4a");
rowSize4a.oninput = function() {
    row4a.style.width = ((100 - (Math.abs(rowSize4a.value))) / 2) + "%";
    row4b.style.width = (Math.abs(rowSize4a.value) / 2) + "%";
};
const row4aLabel = document.getElementById("row4aLabel");
row4aLabel.addEventListener("click", () => {
    row4b.innerHTML = "";
    if (rowText4a.value == "") {
        row4a.innerHTML = "";
    } else if (rowText4a.value) {
        row4a.innerHTML = rowText4a.value + "&nbsp;";
        rowText4a.value = "";
    }
});
const rowColor4a = document.getElementById("rowColor4a");
rowColor4a.oninput = function() {
    row4b.style.backgroundColor = rowColor4a.value;
};
const rowSize4b = document.getElementById("rowSize4b");
rowSize4b.oninput = function() {
    row4c.style.width = (Math.abs(rowSize4b.value) / 2) + "%";
    row4d.style.width = (Math.abs(rowSize4b.value - 100) / 2) + "%";
};
const rowText4b = document.getElementById("rowText4b");
rowText4b.oninput = function() {
    if (rowText4b.value == "") {
        row4d.innerHTML = rowText4b.value;
    } else if (rowText4b.value) {
        row4d.innerHTML = "&nbsp;" + rowText4b.value;
    }
};
const row4bLabel = document.getElementById("row4bLabel");
row4bLabel.addEventListener("click", () => {
    row4d.innerHTML = "";
    if (rowText4b.value == "") {
        row4c.innerHTML = "";
        rowText4b.value = "";
    } else if (rowText4b.value) {
        row4c.innerHTML = rowText4b.value + "&nbsp;";
        rowText4b.value = "";
    }
});
const rowColor4b = document.getElementById("rowColor4b");
rowColor4b.oninput = function() {
    row4c.style.backgroundColor = rowColor4b.value;
};

// Row 5 Customization Logic
const rowText5a = document.getElementById("rowText5a");
rowText5a.oninput = function() {
    if (rowText5a.value == "") {
        row5b.innerHTML = rowText5a.value;
    } else if (rowText5a.value) {
        row5b.innerHTML = "&nbsp;" + rowText5a.value;
    }
};
const rowSize5a = document.getElementById("rowSize5a");
rowSize5a.oninput = function() {
    row5a.style.width = ((100 - (Math.abs(rowSize5a.value))) / 2) + "%";
    row5b.style.width = (Math.abs(rowSize5a.value) / 2) + "%";
};
const row5aLabel = document.getElementById("row5aLabel");
row5aLabel.addEventListener("click", () => {
    row5b.innerHTML = "";
    if (rowText5a.value == "") {
        row5a.innerHTML = "";
    } else if (rowText5a.value) {
        row5a.innerHTML = rowText5a.value + "&nbsp;";
        rowText5a.value = "";
    }
});
const rowColor5a = document.getElementById("rowColor5a");
rowColor5a.oninput = function() {
    row5b.style.backgroundColor = rowColor5a.value;
};
const rowSize5b = document.getElementById("rowSize5b");
rowSize5b.oninput = function() {
    row5c.style.width = (Math.abs(rowSize5b.value) / 2) + "%";
    row5d.style.width = (Math.abs(rowSize5b.value - 100) / 2) + "%";
};
const rowText5b = document.getElementById("rowText5b");
rowText5b.oninput = function() {
    if (rowText5b.value == "") {
        row5d.innerHTML = rowText5b.value;
    } else if (rowText5b.value) {
        row5d.innerHTML = "&nbsp;" + rowText5b.value;
    }
};
const row5bLabel = document.getElementById("row5bLabel");
row5bLabel.addEventListener("click", () => {
    row5d.innerHTML = "";
    if (rowText5b.value == "") {
        row5c.innerHTML = "";
        rowText5b.value = "";
    } else if (rowText5b.value) {
        row5c.innerHTML = rowText5b.value + "&nbsp;";
        rowText5b.value = "";
    }
});
const rowColor5b = document.getElementById("rowColor5b");
rowColor5b.oninput = function() {
    row5c.style.backgroundColor = rowColor5b.value;
};

// Row 6 Customization Logic
const rowText6a = document.getElementById("rowText6a");
rowText6a.oninput = function() {
    if (rowText6a.value == "") {
        row6b.innerHTML = rowText6a.value;
    } else if (rowText6a.value) {
        row6b.innerHTML = "&nbsp;" + rowText6a.value;
    }
};
const rowSize6a = document.getElementById("rowSize6a");
rowSize6a.oninput = function() {
    row6a.style.width = ((100 - (Math.abs(rowSize6a.value))) / 2) + "%";
    row6b.style.width = (Math.abs(rowSize6a.value) / 2) + "%";
};
const row6aLabel = document.getElementById("row6aLabel");
row6aLabel.addEventListener("click", () => {
    row6b.innerHTML = "";
    if (rowText6a.value == "") {
        row6a.innerHTML = "";
    } else if (rowText6a.value) {
        row6a.innerHTML = rowText6a.value + "&nbsp;";
        rowText6a.value = "";
    }
});
const rowColor6a = document.getElementById("rowColor6a");
rowColor6a.oninput = function() {
    row6b.style.backgroundColor = rowColor6a.value;
};
const rowSize6b = document.getElementById("rowSize6b");
rowSize6b.oninput = function() {
    row6c.style.width = (Math.abs(rowSize6b.value) / 2) + "%";
    row6d.style.width = (Math.abs(rowSize6b.value - 100) / 2) + "%";
};
const rowText6b = document.getElementById("rowText6b");
rowText6b.oninput = function() {
    if (rowText6b.value == "") {
        row6d.innerHTML = rowText6b.value;
    } else if (rowText6b.value) {
        row6d.innerHTML = "&nbsp;" + rowText6b.value;
    }
};
const row6bLabel = document.getElementById("row6bLabel");
row6bLabel.addEventListener("click", () => {
    row6d.innerHTML = "";
    if (rowText6b.value == "") {
        row6c.innerHTML = "";
        rowText6b.value = "";
    } else if (rowText6b.value) {
        row6c.innerHTML = rowText6b.value + "&nbsp;";
        rowText6b.value = "";
    }
});
const rowColor6b = document.getElementById("rowColor6b");
rowColor6b.oninput = function() {
    row6c.style.backgroundColor = rowColor6b.value;
};

// Row 7 Customization Logic
const rowText7a = document.getElementById("rowText7a");
rowText7a.oninput = function() {
    if (rowText7a.value == "") {
        row7b.innerHTML = rowText7a.value;
    } else if (rowText7a.value) {
        row7b.innerHTML = "&nbsp;" + rowText7a.value;
    }
};
const rowSize7a = document.getElementById("rowSize7a");
rowSize7a.oninput = function() {
    row7a.style.width = ((100 - (Math.abs(rowSize7a.value))) / 2) + "%";
    row7b.style.width = (Math.abs(rowSize7a.value) / 2) + "%";
};
const row7aLabel = document.getElementById("row7aLabel");
row7aLabel.addEventListener("click", () => {
    row7b.innerHTML = "";
    if (rowText7a.value == "") {
        row7a.innerHTML = "";
    } else if (rowText7a.value) {
        row7a.innerHTML = rowText7a.value + "&nbsp;";
        rowText7a.value = "";
    }
});
const rowColor7a = document.getElementById("rowColor7a");
rowColor7a.oninput = function() {
    row7b.style.backgroundColor = rowColor7a.value;
};
const rowSize7b = document.getElementById("rowSize7b");
rowSize7b.oninput = function() {
    row7c.style.width = (Math.abs(rowSize7b.value) / 2) + "%";
    row7d.style.width = (Math.abs(rowSize7b.value - 100) / 2) + "%";
};
const rowText7b = document.getElementById("rowText7b");
rowText7b.oninput = function() {
    if (rowText7b.value == "") {
        row7d.innerHTML = rowText7b.value;
    } else if (rowText7b.value) {
        row7d.innerHTML = "&nbsp;" + rowText7b.value;
    }
};
const row7bLabel = document.getElementById("row7bLabel");
row7bLabel.addEventListener("click", () => {
    row7d.innerHTML = "";
    if (rowText7b.value == "") {
        row7c.innerHTML = "";
        rowText7b.value = "";
    } else if (rowText7b.value) {
        row7c.innerHTML = rowText7b.value + "&nbsp;";
        rowText7b.value = "";
    }
});
const rowColor7b = document.getElementById("rowColor7b");
rowColor7b.oninput = function() {
    row7c.style.backgroundColor = rowColor7b.value;
};

// Row 8 Customization Logic
const rowText8a = document.getElementById("rowText8a");
rowText8a.oninput = function() {
    if (rowText8a.value == "") {
        row8b.innerHTML = rowText8a.value;
    } else if (rowText8a.value) {
        row8b.innerHTML = "&nbsp;" + rowText8a.value;
    }
};
const rowSize8a = document.getElementById("rowSize8a");
rowSize8a.oninput = function() {
    row8a.style.width = ((100 - (Math.abs(rowSize8a.value))) / 2) + "%";
    row8b.style.width = (Math.abs(rowSize8a.value) / 2) + "%";
};
const row8aLabel = document.getElementById("row8aLabel");
row8aLabel.addEventListener("click", () => {
    row8b.innerHTML = "";
    if (rowText8a.value == "") {
        row8a.innerHTML = "";
    } else if (rowText8a.value) {
        row8a.innerHTML = rowText8a.value + "&nbsp;";
        rowText8a.value = "";
    }
});
const rowColor8a = document.getElementById("rowColor8a");
rowColor8a.oninput = function() {
    row8b.style.backgroundColor = rowColor8a.value;
};
const rowSize8b = document.getElementById("rowSize8b");
rowSize8b.oninput = function() {
    row8c.style.width = (Math.abs(rowSize8b.value) / 2) + "%";
    row8d.style.width = (Math.abs(rowSize8b.value - 100) / 2) + "%";
};
const rowText8b = document.getElementById("rowText8b");
rowText8b.oninput = function() {
    if (rowText8b.value == "") {
        row8d.innerHTML = rowText8b.value;
    } else if (rowText8b.value) {
        row8d.innerHTML = "&nbsp;" + rowText8b.value;
    }
};
const row8bLabel = document.getElementById("row8bLabel");
row8bLabel.addEventListener("click", () => {
    row8d.innerHTML = "";
    if (rowText8b.value == "") {
        row8c.innerHTML = "";
        rowText8b.value = "";
    } else if (rowText8b.value) {
        row8c.innerHTML = rowText8b.value + "&nbsp;";
        rowText8b.value = "";
    }
});
const rowColor8b = document.getElementById("rowColor8b");
rowColor8b.oninput = function() {
    row8c.style.backgroundColor = rowColor8b.value;
};

// Row 9 Customization Logic
const rowText9a = document.getElementById("rowText9a");
rowText9a.oninput = function() {
    if (rowText9a.value == "") {
        row9b.innerHTML = rowText9a.value;
    } else if (rowText9a.value) {
        row9b.innerHTML = "&nbsp;" + rowText9a.value;
    }
};
const rowSize9a = document.getElementById("rowSize9a");
rowSize9a.oninput = function() {
    row9a.style.width = ((100 - (Math.abs(rowSize9a.value))) / 2) + "%";
    row9b.style.width = (Math.abs(rowSize9a.value) / 2) + "%";
};
const row9aLabel = document.getElementById("row9aLabel");
row9aLabel.addEventListener("click", () => {
    row9b.innerHTML = "";
    if (rowText9a.value == "") {
        row9a.innerHTML = "";
    } else if (rowText9a.value) {
        row9a.innerHTML = rowText9a.value + "&nbsp;";
        rowText9a.value = "";
    }
});
const rowColor9a = document.getElementById("rowColor9a");
rowColor9a.oninput = function() {
    row9b.style.backgroundColor = rowColor9a.value;
};
const rowSize9b = document.getElementById("rowSize9b");
rowSize9b.oninput = function() {
    row9c.style.width = (Math.abs(rowSize9b.value) / 2) + "%";
    row9d.style.width = (Math.abs(rowSize9b.value - 100) / 2) + "%";
};
const rowText9b = document.getElementById("rowText9b");
rowText9b.oninput = function() {
    if (rowText9b.value == "") {
        row9d.innerHTML = rowText9b.value;
    } else if (rowText9b.value) {
        row9d.innerHTML = "&nbsp;" + rowText9b.value;
    }
};
const row9bLabel = document.getElementById("row9bLabel");
row9bLabel.addEventListener("click", () => {
    row9d.innerHTML = "";
    if (rowText9b.value == "") {
        row9c.innerHTML = "";
        rowText9b.value = "";
    } else if (rowText9b.value) {
        row9c.innerHTML = rowText9b.value + "&nbsp;";
        rowText9b.value = "";
    }
});
const rowColor9b = document.getElementById("rowColor9b");
rowColor9b.oninput = function() {
    row9c.style.backgroundColor = rowColor9b.value;
};

// Row 10 Customization Logic
const rowText10a = document.getElementById("rowText10a");
rowText10a.oninput = function() {
    if (rowText10a.value == "") {
        row10b.innerHTML = rowText10a.value;
    } else if (rowText10a.value) {
        row10b.innerHTML = "&nbsp;" + rowText10a.value;
    }
};
const rowSize10a = document.getElementById("rowSize10a");
rowSize10a.oninput = function() {
    row10a.style.width = ((100 - (Math.abs(rowSize10a.value))) / 2) + "%";
    row10b.style.width = (Math.abs(rowSize10a.value) / 2) + "%";
};
const row10aLabel = document.getElementById("row10aLabel");
row10aLabel.addEventListener("click", () => {
    row10b.innerHTML = "";
    if (rowText10a.value == "") {
        row10a.innerHTML = "";
    } else if (rowText10a.value) {
        row10a.innerHTML = rowText10a.value + "&nbsp;";
        rowText10a.value = "";
    }
});
const rowColor10a = document.getElementById("rowColor10a");
rowColor10a.oninput = function() {
    row10b.style.backgroundColor = rowColor10a.value;
};
const rowSize10b = document.getElementById("rowSize10b");
rowSize10b.oninput = function() {
    row10c.style.width = (Math.abs(rowSize10b.value) / 2) + "%";
    row10d.style.width = (Math.abs(rowSize10b.value - 100) / 2) + "%";
};
const rowText10b = document.getElementById("rowText10b");
rowText10b.oninput = function() {
    if (rowText10b.value == "") {
        row10d.innerHTML = rowText10b.value;
    } else if (rowText10b.value) {
        row10d.innerHTML = "&nbsp;" + rowText10b.value;
    }
};
const row10bLabel = document.getElementById("row10bLabel");
row10bLabel.addEventListener("click", () => {
    row10d.innerHTML = "";
    if (rowText10b.value == "") {
        row10c.innerHTML = "";
        rowText10b.value = "";
    } else if (rowText10b.value) {
        row10c.innerHTML = rowText10b.value + "&nbsp;";
        rowText10b.value = "";
    }
});
const rowColor10b = document.getElementById("rowColor10b");
rowColor10b.oninput = function() {
    row10c.style.backgroundColor = rowColor10b.value;
};

// Split Chart Focus/Blur Events
splitcapText.addEventListener("focus", () => { splitCap.style.textShadow = shadowColor; });
splitcapText.addEventListener("blur", () => { splitCap.style.textShadow = "none"; });
splitsubText.addEventListener("focus", () => { splitSub.style.textShadow = shadowColor; });
splitsubText.addEventListener("blur", () => { splitSub.style.textShadow = "none"; });
splitsrcText.addEventListener("focus", () => { splitSource.style.textShadow = shadowColor; });
splitsrcText.addEventListener("blur", () => { splitSource.style.textShadow = "none"; });

// Generate Split HTML Chart Logic
const splitWeight = document.getElementById("splitWeight");
const splitButton = document.getElementById("splitButton");
const splitOutput = document.getElementById("splitOutput");
splitButton.addEventListener("mouseenter", () => { splitOutput.style.opacity = ".4"; splitWeight.style.opacity = ".4"; } );
splitButton.addEventListener("mouseleave", () => { splitOutput.style.opacity = ""; splitWeight.style.opacity = ""; splitOutput.style.borderColor = ""; splitWeight.style.color = ""; } );
splitButton.addEventListener("click", () => {
    if (rowsData20.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + splitcsCode + ' <tr> <td align="left" style="padding: ' + splitTopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr>' + splitsrcCode + ' </table> </td></tr></table> ' + botSpace;
        splitOutput.textContent = chartCode;
        splitWeight.textContent = Math.ceil(splitOutput.value.length / 1024) + 'KB';
    } else if (rowsData20.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + splitcsCode + ' <tr> <td align="left" style="padding: ' + splitTopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr>' + splitsrcCode + ' </table> </td></tr></table> ' + botSpace;
        splitOutput.textContent = chartCode;
        splitWeight.textContent = Math.ceil(splitOutput.value.length / 1024) + 'KB';
    } else if (rowsData20.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + splitcsCode + ' <tr> <td align="left" style="padding: ' + splitTopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr>' + splitsrcCode + ' </table> </td></tr></table> ' + botSpace;
        splitOutput.textContent = chartCode;
        splitWeight.textContent = Math.ceil(splitOutput.value.length / 1024) + 'KB';
    } else if (rowsData20.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + splitcsCode + ' <tr> <td align="left" style="padding: ' + splitTopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr>' + splitsrcCode + ' </table> </td></tr></table> ' + botSpace;
        splitOutput.textContent = chartCode;
        splitWeight.textContent = Math.ceil(splitOutput.value.length / 1024) + 'KB';
    } else if (rowsData20.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + splitcsCode + ' <tr> <td align="left" style="padding: ' + splitTopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5a.style.width + '; height: 22px;" height="22">' + row5a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor5a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5b.style.width + '; height: 22px;" height="22">' + row5b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5c.style.width + '; height: 22px;" height="22">' + row5c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5d.style.width + '; height: 22px;" height="22">' + row5d.innerHTML + '</td></tr></table> </td></tr>' + splitsrcCode + ' </table> </td></tr></table> ' + botSpace;
        splitOutput.textContent = chartCode;
        splitWeight.textContent = Math.ceil(splitOutput.value.length / 1024) + 'KB';
    } else if (rowsData20.value === "6") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + splitcsCode + ' <tr> <td align="left" style="padding: ' + splitTopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5a.style.width + '; height: 22px;" height="22">' + row5a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor5a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5b.style.width + '; height: 22px;" height="22">' + row5b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5c.style.width + '; height: 22px;" height="22">' + row5c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5d.style.width + '; height: 22px;" height="22">' + row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6a.style.width + '; height: 22px;" height="22">' + row6a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor6a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6b.style.width + '; height: 22px;" height="22">' + row6b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6c.style.width + '; height: 22px;" height="22">' + row6c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6d.style.width + '; height: 22px;" height="22">' + row6d.innerHTML + '</td></tr></table> </td></tr>' + splitsrcCode + ' </table> </td></tr></table> ' + botSpace;
        splitOutput.textContent = chartCode;
        splitWeight.textContent = Math.ceil(splitOutput.value.length / 1024) + 'KB';
    } else if (rowsData20.value === "7") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + splitcsCode + ' <tr> <td align="left" style="padding: ' + splitTopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5a.style.width + '; height: 22px;" height="22">' + row5a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor5a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5b.style.width + '; height: 22px;" height="22">' + row5b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5c.style.width + '; height: 22px;" height="22">' + row5c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5d.style.width + '; height: 22px;" height="22">' + row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6a.style.width + '; height: 22px;" height="22">' + row6a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor6a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6b.style.width + '; height: 22px;" height="22">' + row6b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6c.style.width + '; height: 22px;" height="22">' + row6c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6d.style.width + '; height: 22px;" height="22">' + row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7a.style.width + '; height: 22px;" height="22">' + row7a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor7a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7b.style.width + '; height: 22px;" height="22">' + row7b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7c.style.width + '; height: 22px;" height="22">' + row7c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7d.style.width + '; height: 22px;" height="22">' + row7d.innerHTML + '</td></tr></table> </td></tr>' + splitsrcCode + ' </table> </td></tr></table> ' + botSpace;
        splitOutput.textContent = chartCode;
        splitWeight.textContent = Math.ceil(splitOutput.value.length / 1024) + 'KB';
    } else if (rowsData20.value === "8") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + splitcsCode + ' <tr> <td align="left" style="padding: ' + splitTopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5a.style.width + '; height: 22px;" height="22">' + row5a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor5a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5b.style.width + '; height: 22px;" height="22">' + row5b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5c.style.width + '; height: 22px;" height="22">' + row5c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5d.style.width + '; height: 22px;" height="22">' + row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6a.style.width + '; height: 22px;" height="22">' + row6a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor6a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6b.style.width + '; height: 22px;" height="22">' + row6b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6c.style.width + '; height: 22px;" height="22">' + row6c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6d.style.width + '; height: 22px;" height="22">' + row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7a.style.width + '; height: 22px;" height="22">' + row7a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor7a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7b.style.width + '; height: 22px;" height="22">' + row7b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7c.style.width + '; height: 22px;" height="22">' + row7c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7d.style.width + '; height: 22px;" height="22">' + row7d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8a.style.width + '; height: 22px;" height="22">' + row8a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor8a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8b.style.width + '; height: 22px;" height="22">' + row8b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor8b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8c.style.width + '; height: 22px;" height="22">' + row8c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8d.style.width + '; height: 22px;" height="22">' + row8d.innerHTML + '</td></tr></table> </td></tr>' + splitsrcCode + ' </table> </td></tr></table> ' + botSpace;
        splitOutput.textContent = chartCode;
        splitWeight.textContent = Math.ceil(splitOutput.value.length / 1024) + 'KB';
    } else if (rowsData20.value === "9") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + splitcsCode + ' <tr> <td align="left" style="padding: ' + splitTopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5a.style.width + '; height: 22px;" height="22">' + row5a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor5a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5b.style.width + '; height: 22px;" height="22">' + row5b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5c.style.width + '; height: 22px;" height="22">' + row5c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5d.style.width + '; height: 22px;" height="22">' + row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6a.style.width + '; height: 22px;" height="22">' + row6a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor6a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6b.style.width + '; height: 22px;" height="22">' + row6b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6c.style.width + '; height: 22px;" height="22">' + row6c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6d.style.width + '; height: 22px;" height="22">' + row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7a.style.width + '; height: 22px;" height="22">' + row7a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor7a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7b.style.width + '; height: 22px;" height="22">' + row7b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7c.style.width + '; height: 22px;" height="22">' + row7c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7d.style.width + '; height: 22px;" height="22">' + row7d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8a.style.width + '; height: 22px;" height="22">' + row8a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor8a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8b.style.width + '; height: 22px;" height="22">' + row8b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor8b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8c.style.width + '; height: 22px;" height="22">' + row8c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8d.style.width + '; height: 22px;" height="22">' + row8d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9a.style.width + '; height: 22px;" height="22">' + row9a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor9a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9b.style.width + '; height: 22px;" height="22">' + row9b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor9b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9c.style.width + '; height: 22px;" height="22">' + row9c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9d.style.width + '; height: 22px;" height="22">' + row9d.innerHTML + '</td></tr></table> </td></tr>' + splitsrcCode + ' </table> </td></tr></table> ' + botSpace;
        splitOutput.textContent = chartCode;
        splitWeight.textContent = Math.ceil(splitOutput.value.length / 1024) + 'KB';
    } else if (rowsData20.value === "10") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + splitcsCode + ' <tr> <td align="left" style="padding: ' + splitTopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5a.style.width + '; height: 22px;" height="22">' + row5a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor5a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5b.style.width + '; height: 22px;" height="22">' + row5b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5c.style.width + '; height: 22px;" height="22">' + row5c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5d.style.width + '; height: 22px;" height="22">' + row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6a.style.width + '; height: 22px;" height="22">' + row6a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor6a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6b.style.width + '; height: 22px;" height="22">' + row6b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6c.style.width + '; height: 22px;" height="22">' + row6c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6d.style.width + '; height: 22px;" height="22">' + row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7a.style.width + '; height: 22px;" height="22">' + row7a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor7a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7b.style.width + '; height: 22px;" height="22">' + row7b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7c.style.width + '; height: 22px;" height="22">' + row7c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7d.style.width + '; height: 22px;" height="22">' + row7d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8a.style.width + '; height: 22px;" height="22">' + row8a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor8a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8b.style.width + '; height: 22px;" height="22">' + row8b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor8b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8c.style.width + '; height: 22px;" height="22">' + row8c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8d.style.width + '; height: 22px;" height="22">' + row8d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9a.style.width + '; height: 22px;" height="22">' + row9a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor9a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9b.style.width + '; height: 22px;" height="22">' + row9b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor9b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9c.style.width + '; height: 22px;" height="22">' + row9c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9d.style.width + '; height: 22px;" height="22">' + row9d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row10a.style.width + '; height: 22px;" height="22">' + row10a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor10a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row10b.style.width + '; height: 22px;" height="22">' + row10b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor10b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row10c.style.width + '; height: 22px;" height="22">' + row10c.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row10d.style.width + '; height: 22px;" height="22">' + row10d.innerHTML + '</td></tr></table> </td></tr>' + splitsrcCode + ' </table> </td></tr></table> ' + botSpace;
        splitOutput.textContent = chartCode;
        splitWeight.textContent = Math.ceil(splitOutput.value.length / 1024) + 'KB';
    }
    splitOutput.style.opacity = "";
    splitWeight.style.opacity = "";
    splitOutput.style.borderColor = "#166dfc";
    splitWeight.style.color = "#166dfc";
    navigator.clipboard.writeText(splitOutput.value);
});

// Highlight splitOutput Text
splitOutput.addEventListener("click", () => {
    splitOutput.select();
});