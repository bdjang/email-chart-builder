"use strict";

// Horizontal Chart I Row Selection
const horiz1Bars = document.getElementsByClassName("horiz1Bars");
const horiz1Controls = document.getElementsByClassName("horiz1Controls");
const rowsData1 = document.getElementById("rowsData1");
rowsData1.addEventListener("change", () => {
    for (var i = 0; i < horiz1Controls.length; i++) {
        horiz1Controls[i].style.display = "none";
        horiz1Bars[i].style.display = "none";
        for (var x = 0; x < rowsData1.value; x++) {
            horiz1Controls[x].style.display = "block";
            horiz1Bars[x].style.display = "block";
        }
    }
});

// Horizontal Chart I Add Divider
const horiz1DivNodes1 = document.querySelectorAll("tr.horiz1Bars");
const horiz1Div = document.getElementById("horiz1Div");
window.addEventListener("load", () => { // Adds "none" to border-top on load
    for (var i = 1; i < horiz1DivNodes1.length; i++) {
        horiz1DivNodes1[i].firstElementChild.style.borderTop = "none";
    }
});
let horiz1borderTop = "";
horiz1Div.addEventListener("click", () => { // Toggles chart data bar dividers in chart preview
    for (var i = 1; i < horiz1DivNodes1.length; i++) {
        horiz1DivNodes1[i].firstElementChild.style.borderTop = horiz1Div.checked ? "1px solid #e3e3e3" : "none";
    }
    horiz1borderTop = horiz1Div.checked ? "border-top: 1px solid #e3e3e3; " : ""; // Adds border-top to output code if checked
});



// Horizontal Chart I Caption
let horiz1TopBarSpace = "0 0 3px 0"; // 05.22.23: Adjusts spacing between caption/subtitle text and the first data bar; issue seen in Outlook Windows clients where padding-bottom added to a <td> will add the same spacing above it if the <td> is directly below a <caption> element. This issue is not seen when using margin-bottom however the spacing will no longer work in Outlook macOS clients. Believe this is an Outlook bug
let horiz1csCode = "";
const horiz1Cap = document.getElementById("horiz1Cap"); // Caption or chart title
const horiz1capText = document.getElementById("horiz1capText"); // Caption or chart title text
horiz1capText.oninput = function() {
    horiz1Cap.innerHTML = horiz1capText.value;
    if (horiz1capText.value == "" && horiz1subText.value == "") {
        horiz1Bars[0].firstElementChild.style.padding = "0 0 3px 0"; // Targets the first data bar below caption/subtitle text
        horiz1TopBarSpace = "0 0 3px 0"; // Padding for first data bar below caption/subtitle text for output code
        horiz1Cap.style.marginBottom = "0";
        return horiz1csCode = "";
    } else if (horiz1capText.value == "" && horiz1subText.value) {
        horiz1Bars[0].firstElementChild.style.padding = "20px 0 3px 0";
        horiz1TopBarSpace = "20px 0 3px 0";
        horiz1Cap.style.marginBottom = "0";
        return horiz1csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; text-align: left;">' + horiz1Sub.innerHTML + '</td> </tr>';
    } else if (horiz1capText.value && horiz1subText.value == "") {
        horiz1Bars[0].firstElementChild.style.padding = "0 0 3px 0";
        horiz1TopBarSpace = "0 0 3px 0";
        horiz1Cap.style.marginBottom = "20px";
        return horiz1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + horiz1Cap.innerHTML + '</caption>';
    } else if (horiz1capText.value && horiz1subText.value) {
        horiz1Bars[0].firstElementChild.style.padding = "20px 0 3px 0";
        horiz1TopBarSpace = "20px 0 3px 0";
        horiz1Cap.style.marginBottom = "4px";
        return horiz1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + horiz1Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; text-align: left;">' + horiz1Sub.innerHTML + '</td> </tr>';
    }
};
// Horizontal Chart I Subtitle
const horiz1Sub = document.getElementById("horiz1Sub"); // Chart subtitle
const horiz1subText = document.getElementById("horiz1subText"); // Chart subtitle text
horiz1subText.oninput = function() {
    horiz1Sub.innerHTML = horiz1subText.value;
    if (horiz1subText.value == "" && horiz1capText.value == "") {
        horiz1Bars[0].firstElementChild.style.padding = "0 0 3px 0";
        horiz1TopBarSpace = "0 0 3px 0";
        horiz1Cap.style.marginBottom = "0";
        return horiz1csCode = "";
    } else if (horiz1subText.value == "" && horiz1capText.value) {
        horiz1Bars[0].firstElementChild.style.padding = "0 0 3px 0";
        horiz1TopBarSpace = "0 0 3px 0";
        horiz1Cap.style.marginBottom = "20px";
        return horiz1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + horiz1Cap.innerHTML + '</caption>';
    } else if (horiz1subText.value && horiz1capText.value == "") {
        horiz1Bars[0].firstElementChild.style.padding = "20px 0 3px 0";
        horiz1TopBarSpace = "20px 0 3px 0";
        horiz1Cap.style.marginBottom = "0";
        return horiz1csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; text-align: left;">' + horiz1Sub.innerHTML + '</td> </tr>';
    } else if (horiz1subText.value && horiz1capText.value) {
        horiz1Bars[0].firstElementChild.style.padding = "20px 0 3px 0";
        horiz1TopBarSpace = "20px 0 3px 0";
        horiz1Cap.style.marginBottom = "4px";
        return horiz1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + horiz1Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; text-align: left;">' + horiz1Sub.innerHTML + '</td> </tr>';
    }
};
// Horizontal Chart I Source
let horiz1srcCode = "";
const horiz1Source = document.getElementById("horiz1Source"); // Chart source
const horiz1srcText = document.getElementById("horiz1srcText"); // Chart source text
horiz1srcText.oninput = function() {
    horiz1Source.innerHTML = horiz1srcText.value;
    horiz1Source.style.paddingTop = horiz1srcText.value ? "17px" : "0";
    horiz1srcCode = horiz1srcText.value ? '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 17px; text-align: left;">' + horiz1Source.innerHTML + '</td></tr>' : "";
};

// Horizontal Chart I Color Picker
const horiz1colorPick = document.getElementById("horiz1colorPick");
horiz1colorPick.addEventListener("change", (evt) => {
    horiz1Row1b.style.backgroundColor = evt.detail.hex;
    horiz1Color1.value = evt.detail.hex;
    horiz1Row2b.style.backgroundColor = evt.detail.hex;
    horiz1Color2.value = evt.detail.hex;
    horiz1Row3b.style.backgroundColor = evt.detail.hex;
    horiz1Color3.value = evt.detail.hex;
    horiz1Row4b.style.backgroundColor = evt.detail.hex;
    horiz1Color4.value = evt.detail.hex;
    horiz1Row5b.style.backgroundColor = evt.detail.hex;
    horiz1Color5.value = evt.detail.hex;
    horiz1Row6b.style.backgroundColor = evt.detail.hex;
    horiz1Color6.value = evt.detail.hex;
    horiz1Row7b.style.backgroundColor = evt.detail.hex;
    horiz1Color7.value = evt.detail.hex;
    horiz1Row8b.style.backgroundColor = evt.detail.hex;
    horiz1Color8.value = evt.detail.hex;
    horiz1Row9b.style.backgroundColor = evt.detail.hex;
    horiz1Color9.value = evt.detail.hex;
    horiz1Row10b.style.backgroundColor = evt.detail.hex;
    horiz1Color10.value = evt.detail.hex;
});

// Horizontal Chart I Row Customization Logic
const horiz1Row1a = document.getElementById("horiz1Row1a");
const horiz1Row1b = document.getElementById("horiz1Row1b");
const horiz1Row1c = document.getElementById("horiz1Row1c");
const horiz1Row2a = document.getElementById("horiz1Row2a");
const horiz1Row2b = document.getElementById("horiz1Row2b");
const horiz1Row2c = document.getElementById("horiz1Row2c");
const horiz1Row3a = document.getElementById("horiz1Row3a");
const horiz1Row3b = document.getElementById("horiz1Row3b");
const horiz1Row3c = document.getElementById("horiz1Row3c");
const horiz1Row4a = document.getElementById("horiz1Row4a");
const horiz1Row4b = document.getElementById("horiz1Row4b");
const horiz1Row4c = document.getElementById("horiz1Row4c");
const horiz1Row5a = document.getElementById("horiz1Row5a");
const horiz1Row5b = document.getElementById("horiz1Row5b");
const horiz1Row5c = document.getElementById("horiz1Row5c");
const horiz1Row6a = document.getElementById("horiz1Row6a");
const horiz1Row6b = document.getElementById("horiz1Row6b");
const horiz1Row6c = document.getElementById("horiz1Row6c");
const horiz1Row7a = document.getElementById("horiz1Row7a");
const horiz1Row7b = document.getElementById("horiz1Row7b");
const horiz1Row7c = document.getElementById("horiz1Row7c");
const horiz1Row8a = document.getElementById("horiz1Row8a");
const horiz1Row8b = document.getElementById("horiz1Row8b");
const horiz1Row8c = document.getElementById("horiz1Row8c");
const horiz1Row9a = document.getElementById("horiz1Row9a");
const horiz1Row9b = document.getElementById("horiz1Row9b");
const horiz1Row9c = document.getElementById("horiz1Row9c");
const horiz1Row10a = document.getElementById("horiz1Row10a");
const horiz1Row10b = document.getElementById("horiz1Row10b");
const horiz1Row10c = document.getElementById("horiz1Row10c");

// Row 1 Customization Logic
const horiz1Text1a = document.getElementById("horiz1Text1a");
horiz1Text1a.oninput = function() {
    horiz1Row1a.innerHTML = horiz1Text1a.value;
};
const horiz1Size1 = document.getElementById("horiz1Size1");
horiz1Size1.oninput = function() {
    horiz1Row1b.style.width = ((Math.abs(horiz1Size1.value)) * .75) + "%";
    horiz1Row1c.style.width = ((75 - (Math.abs(horiz1Size1.value)) * .75)) + "%";
};
const horiz1Text1b = document.getElementById("horiz1Text1b");
horiz1Text1b.oninput = function() {
    horiz1Row1c.innerHTML = horiz1Text1b.value ? "&nbsp;" + horiz1Text1b.value : "";
};
const horiz1Label1b = document.getElementById("horiz1Label1b");
horiz1Label1b.addEventListener("click", () => {
    horiz1Row1b.style.color = "#000000";
    if (horiz1Text1b.value == "") {
        horiz1Row1b.innerHTML = "";
        horiz1Row1c.innerHTML = "";
    } else if (horiz1Text1b.value) {
        horiz1Row1b.innerHTML = horiz1Text1b.value + "&nbsp;";
        horiz1Text1b.value = "";
        horiz1Row1c.innerHTML = "";
    }
});
const horiz1Color1 = document.getElementById("horiz1Color1");
horiz1Color1.oninput = function() {
    horiz1Row1b.style.backgroundColor = horiz1Color1.value;
};

// Row 2 Customization Logic
const horiz1Text2a = document.getElementById("horiz1Text2a");
horiz1Text2a.oninput = function() {
    horiz1Row2a.innerHTML = horiz1Text2a.value;
};
const horiz1Size2 = document.getElementById("horiz1Size2");
horiz1Size2.oninput = function() {
    horiz1Row2b.style.width = ((Math.abs(horiz1Size2.value)) * .75) + "%";
    horiz1Row2c.style.width = ((75 - (Math.abs(horiz1Size2.value)) * .75)) + "%";
};
const horiz1Text2b = document.getElementById("horiz1Text2b");
horiz1Text2b.oninput = function() {
    horiz1Row2c.innerHTML = horiz1Text2b.value ? "&nbsp;" + horiz1Text2b.value : "";
};
const horiz1Label2b = document.getElementById("horiz1Label2b");
horiz1Label2b.addEventListener("click", () => {
    if (horiz1Text2b.value == "") {
        horiz1Row2b.innerHTML = "";
        horiz1Row2c.innerHTML = "";
    } else if (horiz1Text2b.value) {
        horiz1Row2b.innerHTML = horiz1Text2b.value + "&nbsp;";
        horiz1Text2b.value = "";
        horiz1Row2c.innerHTML = "";
    }
});
const horiz1Color2 = document.getElementById("horiz1Color2");
horiz1Color2.oninput = function() {
    horiz1Row2b.style.backgroundColor = horiz1Color2.value;
};

// Row 3 Customization Logic
const horiz1Text3a = document.getElementById("horiz1Text3a");
horiz1Text3a.oninput = function() {
    horiz1Row3a.innerHTML = horiz1Text3a.value;
};
const horiz1Size3 = document.getElementById("horiz1Size3");
horiz1Size3.oninput = function() {
    horiz1Row3b.style.width = ((Math.abs(horiz1Size3.value)) * .75) + "%";
    horiz1Row3c.style.width = ((75 - (Math.abs(horiz1Size3.value)) * .75)) + "%";
};
const horiz1Text3b = document.getElementById("horiz1Text3b");
horiz1Text3b.oninput = function() {
    horiz1Row3c.innerHTML = horiz1Text3b.value ? "&nbsp;" + horiz1Text3b.value : "";
};
const horiz1Label3b = document.getElementById("horiz1Label3b");
horiz1Label3b.addEventListener("click", () => {
    if (horiz1Text3b.value == "") {
        horiz1Row3b.innerHTML = "";
        horiz1Row3c.innerHTML = "";
    } else if (horiz1Text3b.value) {
        horiz1Row3b.innerHTML = horiz1Text3b.value + "&nbsp;";
        horiz1Text3b.value = "";
        horiz1Row3c.innerHTML = "";
    }
});
const horiz1Color3 = document.getElementById("horiz1Color3");
horiz1Color3.oninput = function() {
    horiz1Row3b.style.backgroundColor = horiz1Color3.value;
};

// Row 4 Customization Logic
const horiz1Text4a = document.getElementById("horiz1Text4a");
horiz1Text4a.oninput = function() {
    horiz1Row4a.innerHTML = horiz1Text4a.value;
};
const horiz1Size4 = document.getElementById("horiz1Size4");
horiz1Size4.oninput = function() {
    horiz1Row4b.style.width = ((Math.abs(horiz1Size4.value)) * .75) + "%";
    horiz1Row4c.style.width = ((75 - (Math.abs(horiz1Size4.value)) * .75)) + "%";
};
const horiz1Text4b = document.getElementById("horiz1Text4b");
horiz1Text4b.oninput = function() {
    horiz1Row4c.innerHTML = horiz1Text4b.value ? "&nbsp;" + horiz1Text4b.value : "";
};
const horiz1Label4b = document.getElementById("horiz1Label4b");
horiz1Label4b.addEventListener("click", () => {
    if (horiz1Text4b.value == "") {
        horiz1Row4b.innerHTML = "";
        horiz1Row4c.innerHTML = "";
    } else if (horiz1Text4b.value) {
        horiz1Row4b.innerHTML = horiz1Text4b.value + "&nbsp;";
        horiz1Text4b.value = "";
        horiz1Row4c.innerHTML = "";
    }
});
const horiz1Color4 = document.getElementById("horiz1Color4");
horiz1Color4.oninput = function() {
    horiz1Row4b.style.backgroundColor = horiz1Color4.value;
};

// Row 5 Customization Logic
const horiz1Text5a = document.getElementById("horiz1Text5a");
horiz1Text5a.oninput = function() {
    horiz1Row5a.innerHTML = horiz1Text5a.value;
};
const horiz1Size5 = document.getElementById("horiz1Size5");
horiz1Size5.oninput = function() {
    horiz1Row5b.style.width = ((Math.abs(horiz1Size5.value)) * .75) + "%";
    horiz1Row5c.style.width = ((75 - (Math.abs(horiz1Size5.value)) * .75)) + "%";
};
const horiz1Text5b = document.getElementById("horiz1Text5b");
horiz1Text5b.oninput = function() {
    horiz1Row5c.innerHTML = horiz1Text5b.value ? "&nbsp;" + horiz1Text5b.value : "";
};
const horiz1Label5b = document.getElementById("horiz1Label5b");
horiz1Label5b.addEventListener("click", () => {
    if (horiz1Text5b.value == "") {
        horiz1Row5b.innerHTML = "";
        horiz1Row5c.innerHTML = "";
    } else if (horiz1Text5b.value) {
        horiz1Row5b.innerHTML = horiz1Text5b.value + "&nbsp;";
        horiz1Text5b.value = "";
        horiz1Row5c.innerHTML = "";
    }
});
const horiz1Color5 = document.getElementById("horiz1Color5");
horiz1Color5.oninput = function() {
    horiz1Row5b.style.backgroundColor = horiz1Color5.value;
};

// Row 6 Customization Logic
const horiz1Text6a = document.getElementById("horiz1Text6a");
horiz1Text6a.oninput = function() {
    horiz1Row6a.innerHTML = horiz1Text6a.value;
};
const horiz1Size6 = document.getElementById("horiz1Size6");
horiz1Size6.oninput = function() {
    horiz1Row6b.style.width = ((Math.abs(horiz1Size6.value)) * .75) + "%";
    horiz1Row6c.style.width = ((75 - (Math.abs(horiz1Size6.value)) * .75)) + "%";
};
const horiz1Text6b = document.getElementById("horiz1Text6b");
horiz1Text6b.oninput = function() {
    horiz1Row6c.innerHTML = horiz1Text6b.value ? "&nbsp;" + horiz1Text6b.value : "";
};
const horiz1Label6b = document.getElementById("horiz1Label6b");
horiz1Label6b.addEventListener("click", () => {
    if (horiz1Text6b.value == "") {
        horiz1Row6b.innerHTML = "";
        horiz1Row6c.innerHTML = "";
    } else if (horiz1Text6b.value) {
        horiz1Row6b.innerHTML = horiz1Text6b.value + "&nbsp;";
        horiz1Text6b.value = "";
        horiz1Row6c.innerHTML = "";
    }
});
const horiz1Color6 = document.getElementById("horiz1Color6");
horiz1Color6.oninput = function() {
    horiz1Row6b.style.backgroundColor = horiz1Color6.value;
};

// Row 7 Customization Logic
const horiz1Text7a = document.getElementById("horiz1Text7a");
horiz1Text7a.oninput = function() {
    horiz1Row7a.innerHTML = horiz1Text7a.value;
};
const horiz1Size7 = document.getElementById("horiz1Size7");
horiz1Size7.oninput = function() {
    horiz1Row7b.style.width = ((Math.abs(horiz1Size7.value)) * .75) + "%";
    horiz1Row7c.style.width = ((75 - (Math.abs(horiz1Size7.value)) * .75)) + "%";
};
const horiz1Text7b = document.getElementById("horiz1Text7b");
horiz1Text7b.oninput = function() {
    horiz1Row7c.innerHTML = horiz1Text7b.value ? "&nbsp;" + horiz1Text7b.value : "";
};
const horiz1Label7b = document.getElementById("horiz1Label7b");
horiz1Label7b.addEventListener("click", () => {
    if (horiz1Text7b.value == "") {
        horiz1Row7b.innerHTML = "";
        horiz1Row7c.innerHTML = "";
    } else if (horiz1Text7b.value) {
        horiz1Row7b.innerHTML = horiz1Text7b.value + "&nbsp;";
        horiz1Text7b.value = "";
        horiz1Row7c.innerHTML = "";
    }
});
const horiz1Color7 = document.getElementById("horiz1Color7");
horiz1Color7.oninput = function() {
    horiz1Row7b.style.backgroundColor = horiz1Color7.value;
};

// Row 8 Customization Logic
const horiz1Text8a = document.getElementById("horiz1Text8a");
horiz1Text8a.oninput = function() {
    horiz1Row8a.innerHTML = horiz1Text8a.value;
};
const horiz1Size8 = document.getElementById("horiz1Size8");
horiz1Size8.oninput = function() {
    horiz1Row8b.style.width = ((Math.abs(horiz1Size8.value)) * .75) + "%";
    horiz1Row8c.style.width = ((75 - (Math.abs(horiz1Size8.value)) * .75)) + "%";
};
const horiz1Text8b = document.getElementById("horiz1Text8b");
horiz1Text8b.oninput = function() {
    horiz1Row8c.innerHTML = horiz1Text8b.value ? "&nbsp;" + horiz1Text8b.value : "";
};
const horiz1Label8b = document.getElementById("horiz1Label8b");
horiz1Label8b.addEventListener("click", () => {
    if (horiz1Text8b.value == "") {
        horiz1Row8b.innerHTML = "";
        horiz1Row8c.innerHTML = "";
    } else if (horiz1Text8b.value) {
        horiz1Row8b.innerHTML = horiz1Text8b.value + "&nbsp;";
        horiz1Text8b.value = "";
        horiz1Row8c.innerHTML = "";
    }
});
const horiz1Color8 = document.getElementById("horiz1Color8");
horiz1Color8.oninput = function() {
    horiz1Row8b.style.backgroundColor = horiz1Color8.value;
};

// Row 9 Customization Logic
const horiz1Text9a = document.getElementById("horiz1Text9a");
horiz1Text9a.oninput = function() {
    horiz1Row9a.innerHTML = horiz1Text9a.value;
};
const horiz1Size9 = document.getElementById("horiz1Size9");
horiz1Size9.oninput = function() {
    horiz1Row9b.style.width = ((Math.abs(horiz1Size9.value)) * .75) + "%";
    horiz1Row9c.style.width = ((75 - (Math.abs(horiz1Size9.value)) * .75)) + "%";
};
const horiz1Text9b = document.getElementById("horiz1Text9b");
horiz1Text9b.oninput = function() {
    horiz1Row9c.innerHTML = horiz1Text9b.value ? "&nbsp;" + horiz1Text9b.value : "";
};
const horiz1Label9b = document.getElementById("horiz1Label9b");
horiz1Label9b.addEventListener("click", () => {
    if (horiz1Text9b.value == "") {
        horiz1Row9b.innerHTML = "";
        horiz1Row9c.innerHTML = "";
    } else if (horiz1Text9b.value) {
        horiz1Row9b.innerHTML = horiz1Text9b.value + "&nbsp;";
        horiz1Text9b.value = "";
        horiz1Row9c.innerHTML = "";
    }
});
const horiz1Color9 = document.getElementById("horiz1Color9");
horiz1Color9.oninput = function() {
    horiz1Row9b.style.backgroundColor = horiz1Color9.value;
};

// Row 10 Customization Logic
const horiz1Text10a = document.getElementById("horiz1Text10a");
horiz1Text10a.oninput = function() {
    horiz1Row10a.innerHTML = horiz1Text10a.value;
};
const horiz1Size10 = document.getElementById("horiz1Size10");
horiz1Size10.oninput = function() {
    horiz1Row10b.style.width = ((Math.abs(horiz1Size10.value)) * .75) + "%";
    horiz1Row10c.style.width = ((75 - (Math.abs(horiz1Size10.value)) * .75)) + "%";
};
const horiz1Text10b = document.getElementById("horiz1Text10b");
horiz1Text10b.oninput = function() {
    horiz1Row10c.innerHTML = horiz1Text10b.value ? "&nbsp;" + horiz1Text10b.value : "";
};
const horiz1Label10b = document.getElementById("horiz1Label10b");
horiz1Label10b.addEventListener("click", () => {
    if (horiz1Text10b.value == "") {
        horiz1Row10b.innerHTML = "";
        horiz1Row10c.innerHTML = "";
    } else if (horiz1Text10b.value) {
        horiz1Row10b.innerHTML = horiz1Text10b.value + "&nbsp;";
        horiz1Text10b.value = "";
        horiz1Row10c.innerHTML = "";
    }
});
const horiz1Color10 = document.getElementById("horiz1Color10");
horiz1Color10.oninput = function() {
    horiz1Row10b.style.backgroundColor = horiz1Color10.value;
};

// Horizontal Chart I Focus/Blur Events
horiz1capText.addEventListener("focus", () => { horiz1Cap.style.textShadow = shadowColor; });
horiz1capText.addEventListener("blur", () => { horiz1Cap.style.textShadow = "none"; });
horiz1subText.addEventListener("focus", () => { horiz1Sub.style.textShadow = shadowColor; });
horiz1subText.addEventListener("blur", () => { horiz1Sub.style.textShadow = "none"; });
horiz1srcText.addEventListener("focus", () => { horiz1Source.style.textShadow = shadowColor; });
horiz1srcText.addEventListener("blur", () => { horiz1Source.style.textShadow = "none"; });
horiz1Size1.addEventListener("focus", () => { horiz1Row1b.style.boxShadow = barSizeShadow; });
horiz1Size1.addEventListener("blur", () => { horiz1Row1b.style.boxShadow = "none"; });
horiz1Color1.addEventListener("focus", () => { horiz1Row1b.style.boxShadow = barColorShadow; });
horiz1Color1.addEventListener("blur", () => { horiz1Row1b.style.boxShadow = "none"; });
horiz1Text1a.addEventListener("focus", () => { horiz1Row1a.style.textShadow = shadowColor; });
horiz1Text1a.addEventListener("blur", () => { horiz1Row1a.style.textShadow = "none"; });
horiz1Text1b.addEventListener("focus", () => { horiz1Row1c.style.textShadow = shadowColor; });
horiz1Text1b.addEventListener("blur", () => { horiz1Row1c.style.textShadow = "none"; });
horiz1Size2.addEventListener("focus", () => { horiz1Row2b.style.boxShadow = barSizeShadow; });
horiz1Size2.addEventListener("blur", () => { horiz1Row2b.style.boxShadow = "none"; });
horiz1Color2.addEventListener("focus", () => { horiz1Row2b.style.boxShadow = barColorShadow; });
horiz1Color2.addEventListener("blur", () => { horiz1Row2b.style.boxShadow = "none"; });
horiz1Text2a.addEventListener("focus", () => { horiz1Row2a.style.textShadow = shadowColor; });
horiz1Text2a.addEventListener("blur", () => { horiz1Row2a.style.textShadow = "none"; });
horiz1Text2b.addEventListener("focus", () => { horiz1Row2c.style.textShadow = shadowColor; });
horiz1Text2b.addEventListener("blur", () => { horiz1Row2c.style.textShadow = "none"; });
horiz1Size3.addEventListener("focus", () => { horiz1Row3b.style.boxShadow = barSizeShadow; });
horiz1Size3.addEventListener("blur", () => { horiz1Row3b.style.boxShadow = "none"; });
horiz1Color3.addEventListener("focus", () => { horiz1Row3b.style.boxShadow = barColorShadow; });
horiz1Color3.addEventListener("blur", () => { horiz1Row3b.style.boxShadow = "none"; });
horiz1Text3a.addEventListener("focus", () => { horiz1Row3a.style.textShadow = shadowColor; });
horiz1Text3a.addEventListener("blur", () => { horiz1Row3a.style.textShadow = "none"; });
horiz1Text3b.addEventListener("focus", () => { horiz1Row3c.style.textShadow = shadowColor; });
horiz1Text3b.addEventListener("blur", () => { horiz1Row3c.style.textShadow = "none"; });
horiz1Size4.addEventListener("focus", () => { horiz1Row4b.style.boxShadow = barSizeShadow; });
horiz1Size4.addEventListener("blur", () => { horiz1Row4b.style.boxShadow = "none"; });
horiz1Color4.addEventListener("focus", () => { horiz1Row4b.style.boxShadow = barColorShadow; });
horiz1Color4.addEventListener("blur", () => { horiz1Row4b.style.boxShadow = "none"; });
horiz1Text4a.addEventListener("focus", () => { horiz1Row4a.style.textShadow = shadowColor; });
horiz1Text4a.addEventListener("blur", () => { horiz1Row4a.style.textShadow = "none"; });
horiz1Text4b.addEventListener("focus", () => { horiz1Row4c.style.textShadow = shadowColor; });
horiz1Text4b.addEventListener("blur", () => { horiz1Row4c.style.textShadow = "none"; });
horiz1Size5.addEventListener("focus", () => { horiz1Row5b.style.boxShadow = barSizeShadow; });
horiz1Size5.addEventListener("blur", () => { horiz1Row5b.style.boxShadow = "none"; });
horiz1Color5.addEventListener("focus", () => { horiz1Row5b.style.boxShadow = barColorShadow; });
horiz1Color5.addEventListener("blur", () => { horiz1Row5b.style.boxShadow = "none"; });
horiz1Text5a.addEventListener("focus", () => { horiz1Row5a.style.textShadow = shadowColor; });
horiz1Text5a.addEventListener("blur", () => { horiz1Row5a.style.textShadow = "none"; });
horiz1Text5b.addEventListener("focus", () => { horiz1Row5c.style.textShadow = shadowColor; });
horiz1Text5b.addEventListener("blur", () => { horiz1Row5c.style.textShadow = "none"; });
horiz1Size6.addEventListener("focus", () => { horiz1Row6b.style.boxShadow = barSizeShadow; });
horiz1Size6.addEventListener("blur", () => { horiz1Row6b.style.boxShadow = "none"; });
horiz1Color6.addEventListener("focus", () => { horiz1Row6b.style.boxShadow = barColorShadow; });
horiz1Color6.addEventListener("blur", () => { horiz1Row6b.style.boxShadow = "none"; });
horiz1Text6a.addEventListener("focus", () => { horiz1Row6a.style.textShadow = shadowColor; });
horiz1Text6a.addEventListener("blur", () => { horiz1Row6a.style.textShadow = "none"; });
horiz1Text6b.addEventListener("focus", () => { horiz1Row6c.style.textShadow = shadowColor; });
horiz1Text6b.addEventListener("blur", () => { horiz1Row6c.style.textShadow = "none"; });
horiz1Size7.addEventListener("focus", () => { horiz1Row7b.style.boxShadow = barSizeShadow; });
horiz1Size7.addEventListener("blur", () => { horiz1Row7b.style.boxShadow = "none"; });
horiz1Color7.addEventListener("focus", () => { horiz1Row7b.style.boxShadow = barColorShadow; });
horiz1Color7.addEventListener("blur", () => { horiz1Row7b.style.boxShadow = "none"; });
horiz1Text7a.addEventListener("focus", () => { horiz1Row7a.style.textShadow = shadowColor; });
horiz1Text7a.addEventListener("blur", () => { horiz1Row7a.style.textShadow = "none"; });
horiz1Text7b.addEventListener("focus", () => { horiz1Row7c.style.textShadow = shadowColor; });
horiz1Text7b.addEventListener("blur", () => { horiz1Row7c.style.textShadow = "none"; });
horiz1Size8.addEventListener("focus", () => { horiz1Row8b.style.boxShadow = barSizeShadow; });
horiz1Size8.addEventListener("blur", () => { horiz1Row8b.style.boxShadow = "none"; });
horiz1Color8.addEventListener("focus", () => { horiz1Row8b.style.boxShadow = barColorShadow; });
horiz1Color8.addEventListener("blur", () => { horiz1Row8b.style.boxShadow = "none"; });
horiz1Text8a.addEventListener("focus", () => { horiz1Row8a.style.textShadow = shadowColor; });
horiz1Text8a.addEventListener("blur", () => { horiz1Row8a.style.textShadow = "none"; });
horiz1Text8b.addEventListener("focus", () => { horiz1Row8c.style.textShadow = shadowColor; });
horiz1Text8b.addEventListener("blur", () => { horiz1Row8c.style.textShadow = "none"; });
horiz1Size9.addEventListener("focus", () => { horiz1Row9b.style.boxShadow = barSizeShadow; });
horiz1Size9.addEventListener("blur", () => { horiz1Row9b.style.boxShadow = "none"; });
horiz1Color9.addEventListener("focus", () => { horiz1Row9b.style.boxShadow = barColorShadow; });
horiz1Color9.addEventListener("blur", () => { horiz1Row9b.style.boxShadow = "none"; });
horiz1Text9a.addEventListener("focus", () => { horiz1Row9a.style.textShadow = shadowColor; });
horiz1Text9a.addEventListener("blur", () => { horiz1Row9a.style.textShadow = "none"; });
horiz1Text9b.addEventListener("focus", () => { horiz1Row9c.style.textShadow = shadowColor; });
horiz1Text9b.addEventListener("blur", () => { horiz1Row9c.style.textShadow = "none"; });
horiz1Size10.addEventListener("focus", () => { horiz1Row10b.style.boxShadow = barSizeShadow; });
horiz1Size10.addEventListener("blur", () => { horiz1Row10b.style.boxShadow = "none"; });
horiz1Color10.addEventListener("focus", () => { horiz1Row10b.style.boxShadow = barColorShadow; });
horiz1Color10.addEventListener("blur", () => { horiz1Row10b.style.boxShadow = "none"; });
horiz1Text10a.addEventListener("focus", () => { horiz1Row10a.style.textShadow = shadowColor; });
horiz1Text10a.addEventListener("blur", () => { horiz1Row10a.style.textShadow = "none"; });
horiz1Text10b.addEventListener("focus", () => { horiz1Row10c.style.textShadow = shadowColor; });
horiz1Text10b.addEventListener("blur", () => { horiz1Row10c.style.textShadow = "none"; });

// Horizontal Chart I Height Adjustment
const horiz1rowArray = [horiz1Row1a, horiz1Row1b, horiz1Row1c, horiz1Row2a, horiz1Row2b, horiz1Row2c, horiz1Row3a, horiz1Row3b, horiz1Row3c, horiz1Row4a, horiz1Row4b, horiz1Row4c, horiz1Row5a, horiz1Row5b, horiz1Row5c, horiz1Row6a, horiz1Row6b, horiz1Row6c, horiz1Row7a, horiz1Row7b, horiz1Row7c, horiz1Row8a, horiz1Row8b, horiz1Row8c, horiz1Row9a, horiz1Row9b, horiz1Row9c, horiz1Row10a, horiz1Row10b, horiz1Row10c];
const horiz1inputArray = [horiz1Text1a, horiz1Text2a, horiz1Text3a, horiz1Text4a, horiz1Text5a, horiz1Text6a, horiz1Text7a, horiz1Text8a, horiz1Text9a, horiz1Text10a];
function horiz1BarHeight(x) {
    for (var i = 0; i < horiz1rowArray.length; i++) {
        if (horiz1inputArray[0].value.length <= 16 && horiz1inputArray[1].value.length <= 16 && horiz1inputArray[2].value.length <= 16 && horiz1inputArray[3].value.length <= 16 && horiz1inputArray[4].value.length <= 16 && horiz1inputArray[5].value.length <= 16 && horiz1inputArray[6].value.length <= 16 && horiz1inputArray[7].value.length <= 16 && horiz1inputArray[8].value.length <= 16 && horiz1inputArray[9].value.length <= 16) {
            // All labels must be <= 16 characters for the bar heights to be set at 22px
            horiz1rowArray[i].style.height = "22px";
            horiz1rowArray[i].height = "22";
        } else if (horiz1inputArray[x].value.length < 31 && horiz1inputArray[0].value.length < 31 && horiz1inputArray[1].value.length < 31 && horiz1inputArray[2].value.length < 31 && horiz1inputArray[3].value.length < 31 && horiz1inputArray[4].value.length < 31 && horiz1inputArray[5].value.length < 31 && horiz1inputArray[6].value.length < 31 && horiz1inputArray[7].value.length < 31 && horiz1inputArray[8].value.length < 31 && horiz1inputArray[9].value.length < 31) {
            // All labels must be < 31 characters and only one needs to be > 16 to set all bar heights at 30px
            horiz1rowArray[i].style.height = "30px";
            horiz1rowArray[i].height = "30";
        } else if (horiz1inputArray[0].value.length >= 31 || horiz1inputArray[1].value.length >= 31 || horiz1inputArray[2].value.length >= 31 || horiz1inputArray[3].value.length >= 31 || horiz1inputArray[4].value.length >= 31 || horiz1inputArray[5].value.length >= 31 || horiz1inputArray[6].value.length >= 31 || horiz1inputArray[7].value.length >= 31 || horiz1inputArray[8].value.length >= 31 || horiz1inputArray[9].value.length >= 31) {
            // Only one label needs to be >= 31 characters to set all bars heights to 44px
            horiz1rowArray[i].style.height = "44px";
            horiz1rowArray[i].height = "44";
        }
    }
};
horiz1inputArray[0].addEventListener("input", () => { horiz1BarHeight(0) });
horiz1inputArray[1].addEventListener("input", () => { horiz1BarHeight(1) });
horiz1inputArray[2].addEventListener("input", () => { horiz1BarHeight(2) });
horiz1inputArray[3].addEventListener("input", () => { horiz1BarHeight(3) });
horiz1inputArray[4].addEventListener("input", () => { horiz1BarHeight(4) });
horiz1inputArray[5].addEventListener("input", () => { horiz1BarHeight(5) });
horiz1inputArray[6].addEventListener("input", () => { horiz1BarHeight(6) });
horiz1inputArray[7].addEventListener("input", () => { horiz1BarHeight(7) });
horiz1inputArray[8].addEventListener("input", () => { horiz1BarHeight(8) });
horiz1inputArray[9].addEventListener("input", () => { horiz1BarHeight(9) });

// Generate Horiz1 HTML Chart Logic
const horiz1Weight = document.getElementById("horiz1Weight");
const horiz1Button = document.getElementById("horiz1Button");
const horiz1Output = document.getElementById("horiz1Output");
horiz1Button.addEventListener("mouseenter", () => { horiz1Output.style.opacity = ".4"; horiz1Weight.style.opacity = ".4"; } );
horiz1Button.addEventListener("mouseleave", () => { horiz1Output.style.opacity = ""; horiz1Weight.style.opacity = ""; horiz1Output.style.borderColor = ""; horiz1Weight.style.color = ""; } );
horiz1Button.addEventListener("click", () => {
    if (rowsData1.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        // 3.13.24: Switch from 'horiz1Output.innerHTML = chartCode;' to textContent in order to carry '&nbsp;' over in the chart output code. Issue seen in Windows where space was seen in chart tool but not after copying/pasting
        horiz1Output.textContent = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    } else if (rowsData1.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.textContent = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    } else if (rowsData1.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.textContent = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    } else if (rowsData1.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.textContent = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    } else if (rowsData1.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row5c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.textContent = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    } else if (rowsData1.value === "6") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row6c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.textContent = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    } else if (rowsData1.value === "7") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row7c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.textContent = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    } else if (rowsData1.value === "8") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color8.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row8b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row8c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row8c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.textContent = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    } else if (rowsData1.value === "9") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color8.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row8b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row8c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color9.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row9b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row9c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row9c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.textContent = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    } else if (rowsData1.value === "10") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color8.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row8b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row8c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color9.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row9b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row9c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row9c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row10a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color10.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row10b.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row10b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row10c.style.width + '; height: ' + horiz1Row1a.height + 'px;" height="' + horiz1Row1a.height + '">' + horiz1Row10c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.textContent = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    }
    horiz1Output.style.opacity = "";
    horiz1Weight.style.opacity = "";
    horiz1Output.style.borderColor = "#166dfc";
    horiz1Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(horiz1Output.value);
});
horiz1Output.addEventListener("click", () => {
    horiz1Output.select();
});


// Horizontal Chart II Row Selection
const horiz2Bars = document.getElementsByClassName("horiz2Bars");
const horiz2Controls = document.getElementsByClassName("horiz2Controls");
const rowsData2 = document.getElementById("rowsData2");
rowsData2.addEventListener("change", () => {
    for (var i = 0; i < horiz2Controls.length; i++) {
        horiz2Controls[i].style.display = "none";
        horiz2Bars[i].style.display = "none";
        for (var x = 0; x < rowsData2.value; x++) {
            horiz2Controls[x].style.display = "block";
            horiz2Bars[x].style.display = "block";
        }
    }
});

// Horizontal Chart II Caption
let horiz2TopBarSpace = "0";
let horiz2csCode = "";
const horiz2Cap = document.getElementById("horiz2Cap"); // Caption or chart title
const horiz2capText = document.getElementById("horiz2capText"); // Caption or chart title text
horiz2capText.oninput = function() {
    horiz2Cap.innerHTML = horiz2capText.value;
    if (horiz2capText.value == "" && horiz2subText.value == "") {
        horiz2Bars[0].firstElementChild.style.padding = "0"; // Targets the first data bar below caption/subtitle text
        horiz2TopBarSpace = "0"; // Padding for first data bar below caption/subtitle text for output code
        horiz2Cap.style.marginBottom = "0";
        return horiz2csCode = "";
    } else if (horiz2capText.value == "" && horiz2subText.value) {
        horiz2Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        horiz2TopBarSpace = "20px 0 0 0";
        horiz2Cap.style.marginBottom = "0";
        return horiz2csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz2Sub.innerHTML + '</td> </tr>';
    } else if (horiz2capText.value && horiz2subText.value == "") {
        horiz2Bars[0].firstElementChild.style.padding = "0";
        horiz2TopBarSpace = "0";
        horiz2Cap.style.marginBottom = "20px";
        return horiz2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + horiz2Cap.innerHTML + '</caption>';
    } else if (horiz2capText.value && horiz2subText.value) {
        horiz2Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        horiz2TopBarSpace = "20px 0 0 0";
        horiz2Cap.style.marginBottom = "4px";
        return horiz2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + horiz2Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz2Sub.innerHTML + '</td> </tr>';
    }
};
// Horizontal Chart II Subtitle
const horiz2Sub = document.getElementById("horiz2Sub"); // Chart subtitle
const horiz2subText = document.getElementById("horiz2subText"); // Chart subtitle text
horiz2subText.oninput = function() {
    horiz2Sub.innerHTML = horiz2subText.value;
    if (horiz2subText.value == "" && horiz2capText.value == "") {
        horiz2Bars[0].firstElementChild.style.padding = "0";
        horiz2TopBarSpace = "0";
        horiz2Cap.style.marginBottom = "0";
        return horiz2csCode = "";
    } else if (horiz2subText.value == "" && horiz2capText.value) {
        horiz2Bars[0].firstElementChild.style.padding = "0";
        horiz2TopBarSpace = "0";
        horiz2Cap.style.marginBottom = "20px";
        return horiz2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + horiz2Cap.innerHTML + '</caption>';
    } else if (horiz2subText.value && horiz2capText.value == "") {
        horiz2Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        horiz2TopBarSpace = "20px 0 0 0";
        horiz2Cap.style.marginBottom = "0";
        return horiz2csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz2Sub.innerHTML + '</td> </tr>';
    } else if (horiz2subText.value && horiz2capText.value) {
        horiz2Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        horiz2TopBarSpace = "20px 0 0 0";
        horiz2Cap.style.marginBottom = "4px";
        return horiz2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + horiz2Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz2Sub.innerHTML + '</td> </tr>';
    }
};
// Horizontal Chart II Source
let horiz2srcCode = "";
const horiz2Source = document.getElementById("horiz2Source"); // Chart source
const horiz2srcText = document.getElementById("horiz2srcText"); // Chart source text
horiz2srcText.oninput = function() {
    horiz2Source.innerHTML = horiz2srcText.value;
    horiz2Source.style.paddingTop = horiz2srcText.value ? "20px" : "0";
    horiz2srcCode = horiz2srcText.value ? '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 20px; text-align: left;">' + horiz2Source.innerHTML + '</td></tr>' : "";
};

// Horizontal Chart II Color Picker
const horiz2colorPick = document.getElementById("horiz2colorPick");
horiz2colorPick.addEventListener("change", (evt) => {
    horiz2Row1sp.style.backgroundColor = evt.detail.hex;
    horiz2Row1a.style.backgroundColor = evt.detail.hex;
    horiz2Row1b.style.backgroundColor = evt.detail.hex;
    horiz2Color1.value = evt.detail.hex;
    horiz2Row2sp.style.backgroundColor = evt.detail.hex;
    horiz2Row2a.style.backgroundColor = evt.detail.hex;
    horiz2Row2b.style.backgroundColor = evt.detail.hex;
    horiz2Color2.value = evt.detail.hex;
    horiz2Row3sp.style.backgroundColor = evt.detail.hex;
    horiz2Row3a.style.backgroundColor = evt.detail.hex;
    horiz2Row3b.style.backgroundColor = evt.detail.hex;
    horiz2Color3.value = evt.detail.hex;
    horiz2Row4sp.style.backgroundColor = evt.detail.hex;
    horiz2Row4a.style.backgroundColor = evt.detail.hex;
    horiz2Row4b.style.backgroundColor = evt.detail.hex;
    horiz2Color4.value = evt.detail.hex;
    horiz2Row5sp.style.backgroundColor = evt.detail.hex;
    horiz2Row5a.style.backgroundColor = evt.detail.hex;
    horiz2Row5b.style.backgroundColor = evt.detail.hex;
    horiz2Color5.value = evt.detail.hex;
    horiz2Row6sp.style.backgroundColor = evt.detail.hex;
    horiz2Row6a.style.backgroundColor = evt.detail.hex;
    horiz2Row6b.style.backgroundColor = evt.detail.hex;
    horiz2Color6.value = evt.detail.hex;
    horiz2Row7sp.style.backgroundColor = evt.detail.hex;
    horiz2Row7a.style.backgroundColor = evt.detail.hex;
    horiz2Row7b.style.backgroundColor = evt.detail.hex;
    horiz2Color7.value = evt.detail.hex;
    horiz2Row8sp.style.backgroundColor = evt.detail.hex;
    horiz2Row8a.style.backgroundColor = evt.detail.hex;
    horiz2Row8b.style.backgroundColor = evt.detail.hex;
    horiz2Color8.value = evt.detail.hex;
    horiz2Row9sp.style.backgroundColor = evt.detail.hex;
    horiz2Row9a.style.backgroundColor = evt.detail.hex;
    horiz2Row9b.style.backgroundColor = evt.detail.hex;
    horiz2Color9.value = evt.detail.hex;
    horiz2Row10sp.style.backgroundColor = evt.detail.hex;
    horiz2Row10a.style.backgroundColor = evt.detail.hex;
    horiz2Row10b.style.backgroundColor = evt.detail.hex;
    horiz2Color10.value = evt.detail.hex;
});

// Horizontal Chart II Row Customization Logic
const horiz2Row1sp = document.getElementById("horiz2Row1sp");
const horiz2Row1a = document.getElementById("horiz2Row1a");
const horiz2Row1b = document.getElementById("horiz2Row1b");
const horiz2Row1c = document.getElementById("horiz2Row1c");
const horiz2Row2sp = document.getElementById("horiz2Row2sp");
const horiz2Row2a = document.getElementById("horiz2Row2a");
const horiz2Row2b = document.getElementById("horiz2Row2b");
const horiz2Row2c = document.getElementById("horiz2Row2c");
const horiz2Row3sp = document.getElementById("horiz2Row3sp");
const horiz2Row3a = document.getElementById("horiz2Row3a");
const horiz2Row3b = document.getElementById("horiz2Row3b");
const horiz2Row3c = document.getElementById("horiz2Row3c");
const horiz2Row4sp = document.getElementById("horiz2Row4sp");
const horiz2Row4a = document.getElementById("horiz2Row4a");
const horiz2Row4b = document.getElementById("horiz2Row4b");
const horiz2Row4c = document.getElementById("horiz2Row4c");
const horiz2Row5sp = document.getElementById("horiz2Row5sp");
const horiz2Row5a = document.getElementById("horiz2Row5a");
const horiz2Row5b = document.getElementById("horiz2Row5b");
const horiz2Row5c = document.getElementById("horiz2Row5c");
const horiz2Row6sp = document.getElementById("horiz2Row6sp");
const horiz2Row6a = document.getElementById("horiz2Row6a");
const horiz2Row6b = document.getElementById("horiz2Row6b");
const horiz2Row6c = document.getElementById("horiz2Row6c");
const horiz2Row7sp = document.getElementById("horiz2Row7sp");
const horiz2Row7a = document.getElementById("horiz2Row7a");
const horiz2Row7b = document.getElementById("horiz2Row7b");
const horiz2Row7c = document.getElementById("horiz2Row7c");
const horiz2Row8sp = document.getElementById("horiz2Row8sp");
const horiz2Row8a = document.getElementById("horiz2Row8a");
const horiz2Row8b = document.getElementById("horiz2Row8b");
const horiz2Row8c = document.getElementById("horiz2Row8c");
const horiz2Row9sp = document.getElementById("horiz2Row9sp");
const horiz2Row9a = document.getElementById("horiz2Row9a");
const horiz2Row9b = document.getElementById("horiz2Row9b");
const horiz2Row9c = document.getElementById("horiz2Row9c");
const horiz2Row10sp = document.getElementById("horiz2Row10sp");
const horiz2Row10a = document.getElementById("horiz2Row10a");
const horiz2Row10b = document.getElementById("horiz2Row10b");
const horiz2Row10c = document.getElementById("horiz2Row10c");

// Row 1 Customization Logic
const horiz2Text1a = document.getElementById("horiz2Text1a");
horiz2Text1a.oninput = function() {
    horiz2Row1a.innerHTML = horiz2Text1a.value;
};
const horiz2Size1 = document.getElementById("horiz2Size1");
horiz2Size1.oninput = function() {
    horiz2Row1b.style.width = ((Math.abs(horiz2Size1.value)) * .75) + "%";
    horiz2Row1c.style.width = ((75 - (Math.abs(horiz2Size1.value)) * .75)) + "%";
};
const horiz2Text1b = document.getElementById("horiz2Text1b");
horiz2Text1b.oninput = function() {
    horiz2Row1c.innerHTML = horiz2Text1b.value ? "&nbsp;" + horiz2Text1b.value : "";
};
const horiz2Label1b = document.getElementById("horiz2Label1b");
horiz2Label1b.addEventListener("click", () => {
    if (horiz2Text1b.value == "") {
        horiz2Row1b.innerHTML = "";
        horiz2Row1c.innerHTML = "";
    } else if (horiz2Text1b.value) {
        horiz2Row1b.innerHTML = horiz2Text1b.value + "&nbsp;";
        horiz2Text1b.value = "";
        horiz2Row1c.innerHTML = "";
    }
});
const horiz2Color1 = document.getElementById("horiz2Color1");
horiz2Color1.oninput = function() {
    horiz2Row1sp.style.backgroundColor = horiz2Color1.value;
    horiz2Row1b.style.backgroundColor = horiz2Color1.value;
    horiz2Row1a.style.backgroundColor = horiz2Color1.value;
};

// Row 2 Customization Logic
const horiz2Text2a = document.getElementById("horiz2Text2a");
horiz2Text2a.oninput = function() {
    horiz2Row2a.innerHTML = horiz2Text2a.value;
};
const horiz2Size2 = document.getElementById("horiz2Size2");
horiz2Size2.oninput = function() {
    horiz2Row2b.style.width = ((Math.abs(horiz2Size2.value)) * .75) + "%";
    horiz2Row2c.style.width = ((75 - (Math.abs(horiz2Size2.value)) * .75)) + "%";
};
const horiz2Text2b = document.getElementById("horiz2Text2b");
horiz2Text2b.oninput = function() {
    horiz2Row2c.innerHTML = horiz2Text2b.value ? "&nbsp;" + horiz2Text2b.value : "";
};
const horiz2Label2b = document.getElementById("horiz2Label2b");
horiz2Label2b.addEventListener("click", () => {
    if (horiz2Text2b.value == "") {
        horiz2Row2b.innerHTML = "";
        horiz2Row2c.innerHTML = "";
    } else if (horiz2Text2b.value) {
        horiz2Row2b.innerHTML = horiz2Text2b.value + "&nbsp;";
        horiz2Text2b.value = "";
        horiz2Row2c.innerHTML = "";
    }
});
const horiz2Color2 = document.getElementById("horiz2Color2");
horiz2Color2.oninput = function() {
    horiz2Row2sp.style.backgroundColor = horiz2Color2.value;
    horiz2Row2b.style.backgroundColor = horiz2Color2.value;
    horiz2Row2a.style.backgroundColor = horiz2Color2.value;
};

// Row 3 Customization Logic
const horiz2Text3a = document.getElementById("horiz2Text3a");
horiz2Text3a.oninput = function() {
    horiz2Row3a.innerHTML = horiz2Text3a.value;
};
const horiz2Size3 = document.getElementById("horiz2Size3");
horiz2Size3.oninput = function() {
    horiz2Row3b.style.width = ((Math.abs(horiz2Size3.value)) * .75) + "%";
    horiz2Row3c.style.width = ((75 - (Math.abs(horiz2Size3.value)) * .75)) + "%";
};
const horiz2Text3b = document.getElementById("horiz2Text3b");
horiz2Text3b.oninput = function() {
    horiz2Row3c.innerHTML = horiz2Text3b.value ? "&nbsp;" + horiz2Text3b.value : "";
};
const horiz2Label3b = document.getElementById("horiz2Label3b");
horiz2Label3b.addEventListener("click", () => {
    if (horiz2Text3b.value == "") {
        horiz2Row3b.innerHTML = "";
        horiz2Row3c.innerHTML = "";
    } else if (horiz2Text3b.value) {
        horiz2Row3b.innerHTML = horiz2Text3b.value + "&nbsp;";
        horiz2Text3b.value = "";
        horiz2Row3c.innerHTML = "";
    }
});
const horiz2Color3 = document.getElementById("horiz2Color3");
horiz2Color3.oninput = function() {
    horiz2Row3sp.style.backgroundColor = horiz2Color3.value;
    horiz2Row3b.style.backgroundColor = horiz2Color3.value;
    horiz2Row3a.style.backgroundColor = horiz2Color3.value;
};

// Row 4 Customization Logic
const horiz2Text4a = document.getElementById("horiz2Text4a");
horiz2Text4a.oninput = function() {
    horiz2Row4a.innerHTML = horiz2Text4a.value;
};
const horiz2Size4 = document.getElementById("horiz2Size4");
horiz2Size4.oninput = function() {
    horiz2Row4b.style.width = ((Math.abs(horiz2Size4.value)) * .75) + "%";
    horiz2Row4c.style.width = ((75 - (Math.abs(horiz2Size4.value)) * .75)) + "%";
};
const horiz2Text4b = document.getElementById("horiz2Text4b");
horiz2Text4b.oninput = function() {
    horiz2Row4c.innerHTML = horiz2Text4b.value ? "&nbsp;" + horiz2Text4b.value : "";
};
const horiz2Label4b = document.getElementById("horiz2Label4b");
horiz2Label4b.addEventListener("click", () => {
    if (horiz2Text4b.value == "") {
        horiz2Row4b.innerHTML = "";
        horiz2Row4c.innerHTML = "";
    } else if (horiz2Text4b.value) {
        horiz2Row4b.innerHTML = horiz2Text4b.value + "&nbsp;";
        horiz2Text4b.value = "";
        horiz2Row4c.innerHTML = "";
    }
});
const horiz2Color4 = document.getElementById("horiz2Color4");
horiz2Color4.oninput = function() {
    horiz2Row4sp.style.backgroundColor = horiz2Color4.value;
    horiz2Row4b.style.backgroundColor = horiz2Color4.value;
    horiz2Row4a.style.backgroundColor = horiz2Color4.value;
};

// Row 5 Customization Logic
const horiz2Text5a = document.getElementById("horiz2Text5a");
horiz2Text5a.oninput = function() {
    horiz2Row5a.innerHTML = horiz2Text5a.value;
};
const horiz2Size5 = document.getElementById("horiz2Size5");
horiz2Size5.oninput = function() {
    horiz2Row5b.style.width = ((Math.abs(horiz2Size5.value)) * .75) + "%";
    horiz2Row5c.style.width = ((75 - (Math.abs(horiz2Size5.value)) * .75)) + "%";
};
const horiz2Text5b = document.getElementById("horiz2Text5b");
horiz2Text5b.oninput = function() {
    horiz2Row5c.innerHTML = horiz2Text5b.value ? "&nbsp;" + horiz2Text5b.value : "";
};
const horiz2Label5b = document.getElementById("horiz2Label5b");
horiz2Label5b.addEventListener("click", () => {
    if (horiz2Text5b.value == "") {
        horiz2Row5b.innerHTML = "";
        horiz2Row5c.innerHTML = "";
    } else if (horiz2Text5b.value) {
        horiz2Row5b.innerHTML = horiz2Text5b.value + "&nbsp;";
        horiz2Text5b.value = "";
        horiz2Row5c.innerHTML = "";
    }
});
const horiz2Color5 = document.getElementById("horiz2Color5");
horiz2Color5.oninput = function() {
    horiz2Row5sp.style.backgroundColor = horiz2Color5.value;
    horiz2Row5b.style.backgroundColor = horiz2Color5.value;
    horiz2Row5a.style.backgroundColor = horiz2Color5.value;
};

// Row 6 Customization Logic
const horiz2Text6a = document.getElementById("horiz2Text6a");
horiz2Text6a.oninput = function() {
    horiz2Row6a.innerHTML = horiz2Text6a.value;
};
const horiz2Size6 = document.getElementById("horiz2Size6");
horiz2Size6.oninput = function() {
    horiz2Row6b.style.width = ((Math.abs(horiz2Size6.value)) * .75) + "%";
    horiz2Row6c.style.width = ((75 - (Math.abs(horiz2Size6.value)) * .75)) + "%";
};
const horiz2Text6b = document.getElementById("horiz2Text6b");
horiz2Text6b.oninput = function() {
    horiz2Row6c.innerHTML = horiz2Text6b.value ? "&nbsp;" + horiz2Text6b.value : "";
};
const horiz2Label6b = document.getElementById("horiz2Label6b");
horiz2Label6b.addEventListener("click", () => {
    if (horiz2Text6b.value == "") {
        horiz2Row6b.innerHTML = "";
        horiz2Row6c.innerHTML = "";
    } else if (horiz2Text6b.value) {
        horiz2Row6b.innerHTML = horiz2Text6b.value + "&nbsp;";
        horiz2Text6b.value = "";
        horiz2Row6c.innerHTML = "";
    }
});
const horiz2Color6 = document.getElementById("horiz2Color6");
horiz2Color6.oninput = function() {
    horiz2Row6sp.style.backgroundColor = horiz2Color6.value;
    horiz2Row6b.style.backgroundColor = horiz2Color6.value;
    horiz2Row6a.style.backgroundColor = horiz2Color6.value;
};

// Row 7 Customization Logic
const horiz2Text7a = document.getElementById("horiz2Text7a");
horiz2Text7a.oninput = function() {
    horiz2Row7a.innerHTML = horiz2Text7a.value;
};
const horiz2Size7 = document.getElementById("horiz2Size7");
horiz2Size7.oninput = function() {
    horiz2Row7b.style.width = ((Math.abs(horiz2Size7.value)) * .75) + "%";
    horiz2Row7c.style.width = ((75 - (Math.abs(horiz2Size7.value)) * .75)) + "%";
};
const horiz2Text7b = document.getElementById("horiz2Text7b");
horiz2Text7b.oninput = function() {
    horiz2Row7c.innerHTML = horiz2Text7b.value ? "&nbsp;" + horiz2Text7b.value : "";
};
const horiz2Label7b = document.getElementById("horiz2Label7b");
horiz2Label7b.addEventListener("click", () => {
    if (horiz2Text7b.value == "") {
        horiz2Row7b.innerHTML = "";
        horiz2Row7c.innerHTML = "";
    } else if (horiz2Text7b.value) {
        horiz2Row7b.innerHTML = horiz2Text7b.value + "&nbsp;";
        horiz2Text7b.value = "";
        horiz2Row7c.innerHTML = "";
    }
});
const horiz2Color7 = document.getElementById("horiz2Color7");
horiz2Color7.oninput = function() {
    horiz2Row7sp.style.backgroundColor = horiz2Color7.value;
    horiz2Row7b.style.backgroundColor = horiz2Color7.value;
    horiz2Row7a.style.backgroundColor = horiz2Color7.value;
};

// Row 8 Customization Logic
const horiz2Text8a = document.getElementById("horiz2Text8a");
horiz2Text8a.oninput = function() {
    horiz2Row8a.innerHTML = horiz2Text8a.value;
};
const horiz2Size8 = document.getElementById("horiz2Size8");
horiz2Size8.oninput = function() {
    horiz2Row8b.style.width = ((Math.abs(horiz2Size8.value)) * .75) + "%";
    horiz2Row8c.style.width = ((75 - (Math.abs(horiz2Size8.value)) * .75)) + "%";
};
const horiz2Text8b = document.getElementById("horiz2Text8b");
horiz2Text8b.oninput = function() {
    horiz2Row8c.innerHTML = horiz2Text8b.value ? "&nbsp;" + horiz2Text8b.value : "";
};
const horiz2Label8b = document.getElementById("horiz2Label8b");
horiz2Label8b.addEventListener("click", () => {
    if (horiz2Text8b.value == "") {
        horiz2Row8b.innerHTML = "";
        horiz2Row8c.innerHTML = "";
    } else if (horiz2Text8b.value) {
        horiz2Row8b.innerHTML = horiz2Text8b.value + "&nbsp;";
        horiz2Text8b.value = "";
        horiz2Row8c.innerHTML = "";
    }
});
const horiz2Color8 = document.getElementById("horiz2Color8");
horiz2Color8.oninput = function() {
    horiz2Row8sp.style.backgroundColor = horiz2Color8.value;
    horiz2Row8b.style.backgroundColor = horiz2Color8.value;
    horiz2Row8a.style.backgroundColor = horiz2Color8.value;
};

// Row 9 Customization Logic
const horiz2Text9a = document.getElementById("horiz2Text9a");
horiz2Text9a.oninput = function() {
    horiz2Row9a.innerHTML = horiz2Text9a.value;
};
const horiz2Size9 = document.getElementById("horiz2Size9");
horiz2Size9.oninput = function() {
    horiz2Row9b.style.width = ((Math.abs(horiz2Size9.value)) * .75) + "%";
    horiz2Row9c.style.width = ((75 - (Math.abs(horiz2Size9.value)) * .75)) + "%";
};
const horiz2Text9b = document.getElementById("horiz2Text9b");
horiz2Text9b.oninput = function() {
    horiz2Row9c.innerHTML = horiz2Text9b.value ? "&nbsp;" + horiz2Text9b.value : "";
};
const horiz2Label9b = document.getElementById("horiz2Label9b");
horiz2Label9b.addEventListener("click", () => {
    if (horiz2Text9b.value == "") {
        horiz2Row9b.innerHTML = "";
        horiz2Row9c.innerHTML = "";
    } else if (horiz2Text9b.value) {
        horiz2Row9b.innerHTML = horiz2Text9b.value + "&nbsp;";
        horiz2Text9b.value = "";
        horiz2Row9c.innerHTML = "";
    }
});
const horiz2Color9 = document.getElementById("horiz2Color9");
horiz2Color9.oninput = function() {
    horiz2Row9sp.style.backgroundColor = horiz2Color9.value;
    horiz2Row9b.style.backgroundColor = horiz2Color9.value;
    horiz2Row9a.style.backgroundColor = horiz2Color9.value;
};

// Row 10 Customization Logic
const horiz2Text10a = document.getElementById("horiz2Text10a");
horiz2Text10a.oninput = function() {
    horiz2Row10a.innerHTML = horiz2Text10a.value;
};
const horiz2Size10 = document.getElementById("horiz2Size10");
horiz2Size10.oninput = function() {
    horiz2Row10b.style.width = ((Math.abs(horiz2Size10.value)) * .75) + "%";
    horiz2Row10c.style.width = ((75 - (Math.abs(horiz2Size10.value)) * .75)) + "%";
};
const horiz2Text10b = document.getElementById("horiz2Text10b");
horiz2Text10b.oninput = function() {
    horiz2Row10c.innerHTML = horiz2Text10b.value ? "&nbsp;" + horiz2Text10b.value : "";
};
const horiz2Label10b = document.getElementById("horiz2Label10b");
horiz2Label10b.addEventListener("click", () => {
    if (horiz2Text10b.value == "") {
        horiz2Row10b.innerHTML = "";
        horiz2Row10c.innerHTML = "";
    } else if (horiz2Text10b.value) {
        horiz2Row10b.innerHTML = horiz2Text10b.value + "&nbsp;";
        horiz2Text10b.value = "";
        horiz2Row10c.innerHTML = "";
    }
});
const horiz2Color10 = document.getElementById("horiz2Color10");
horiz2Color10.oninput = function() {
    horiz2Row10sp.style.backgroundColor = horiz2Color10.value;
    horiz2Row10b.style.backgroundColor = horiz2Color10.value;
    horiz2Row10a.style.backgroundColor = horiz2Color10.value;
};

// Horizontal Chart II Focus/Blur Events
horiz2capText.addEventListener("focus", () => { horiz2Cap.style.textShadow = shadowColor; });
horiz2capText.addEventListener("blur", () => { horiz2Cap.style.textShadow = "none"; });
horiz2subText.addEventListener("focus", () => { horiz2Sub.style.textShadow = shadowColor; });
horiz2subText.addEventListener("blur", () => { horiz2Sub.style.textShadow = "none"; });
horiz2srcText.addEventListener("focus", () => { horiz2Source.style.textShadow = shadowColor; });
horiz2srcText.addEventListener("blur", () => { horiz2Source.style.textShadow = "none"; });
horiz2Size1.addEventListener("focus", () => { horiz2Row1b.style.boxShadow = barSizeShadow; });
horiz2Size1.addEventListener("blur", () => { horiz2Row1b.style.boxShadow = "none"; });
horiz2Color1.addEventListener("focus", () => { horiz2Row1a.style.boxShadow = barColorShadow; horiz2Row1b.style.boxShadow = barColorShadow; });
horiz2Color1.addEventListener("blur", () => { horiz2Row1a.style.boxShadow = "none"; horiz2Row1b.style.boxShadow = "none"; })
horiz2Text1a.addEventListener("focus", () => { horiz2Row1a.style.textShadow = shadowColor; });
horiz2Text1a.addEventListener("blur", () => { horiz2Row1a.style.textShadow = "none"; });
horiz2Text1b.addEventListener("focus", () => { horiz2Row1c.style.textShadow = shadowColor; });
horiz2Text1b.addEventListener("blur", () => { horiz2Row1c.style.textShadow = "none"; });
horiz2Size2.addEventListener("focus", () => { horiz2Row2b.style.boxShadow = barSizeShadow; });
horiz2Size2.addEventListener("blur", () => { horiz2Row2b.style.boxShadow = "none"; });
horiz2Color2.addEventListener("focus", () => { horiz2Row2a.style.boxShadow = barColorShadow; horiz2Row2b.style.boxShadow = barColorShadow; });
horiz2Color2.addEventListener("blur", () => { horiz2Row2a.style.boxShadow = "none"; horiz2Row2b.style.boxShadow = "none"; })
horiz2Text2a.addEventListener("focus", () => { horiz2Row2a.style.textShadow = shadowColor; });
horiz2Text2a.addEventListener("blur", () => { horiz2Row2a.style.textShadow = "none"; });
horiz2Text2b.addEventListener("focus", () => { horiz2Row2c.style.textShadow = shadowColor; });
horiz2Text2b.addEventListener("blur", () => { horiz2Row2c.style.textShadow = "none"; });
horiz2Size3.addEventListener("focus", () => { horiz2Row3b.style.boxShadow = barSizeShadow; });
horiz2Size3.addEventListener("blur", () => { horiz2Row3b.style.boxShadow = "none"; });
horiz2Color3.addEventListener("focus", () => { horiz2Row3a.style.boxShadow = barColorShadow; horiz2Row3b.style.boxShadow = barColorShadow; });
horiz2Color3.addEventListener("blur", () => { horiz2Row3a.style.boxShadow = "none"; horiz2Row3b.style.boxShadow = "none"; })
horiz2Text3a.addEventListener("focus", () => { horiz2Row3a.style.textShadow = shadowColor; });
horiz2Text3a.addEventListener("blur", () => { horiz2Row3a.style.textShadow = "none"; });
horiz2Text3b.addEventListener("focus", () => { horiz2Row3c.style.textShadow = shadowColor; });
horiz2Text3b.addEventListener("blur", () => { horiz2Row3c.style.textShadow = "none"; });
horiz2Size4.addEventListener("focus", () => { horiz2Row4b.style.boxShadow = barSizeShadow; });
horiz2Size4.addEventListener("blur", () => { horiz2Row4b.style.boxShadow = "none"; });
horiz2Color4.addEventListener("focus", () => { horiz2Row4a.style.boxShadow = barColorShadow; horiz2Row4b.style.boxShadow = barColorShadow; });
horiz2Color4.addEventListener("blur", () => { horiz2Row4a.style.boxShadow = "none"; horiz2Row4b.style.boxShadow = "none"; })
horiz2Text4a.addEventListener("focus", () => { horiz2Row4a.style.textShadow = shadowColor; });
horiz2Text4a.addEventListener("blur", () => { horiz2Row4a.style.textShadow = "none"; });
horiz2Text4b.addEventListener("focus", () => { horiz2Row4c.style.textShadow = shadowColor; });
horiz2Text4b.addEventListener("blur", () => { horiz2Row4c.style.textShadow = "none"; });
horiz2Size5.addEventListener("focus", () => { horiz2Row5b.style.boxShadow = barSizeShadow; });
horiz2Size5.addEventListener("blur", () => { horiz2Row5b.style.boxShadow = "none"; });
horiz2Color5.addEventListener("focus", () => { horiz2Row5a.style.boxShadow = barColorShadow; horiz2Row5b.style.boxShadow = barColorShadow; });
horiz2Color5.addEventListener("blur", () => { horiz2Row5a.style.boxShadow = "none"; horiz2Row5b.style.boxShadow = "none"; })
horiz2Text5a.addEventListener("focus", () => { horiz2Row5a.style.textShadow = shadowColor; });
horiz2Text5a.addEventListener("blur", () => { horiz2Row5a.style.textShadow = "none"; });
horiz2Text5b.addEventListener("focus", () => { horiz2Row5c.style.textShadow = shadowColor; });
horiz2Text5b.addEventListener("blur", () => { horiz2Row5c.style.textShadow = "none"; });
horiz2Size6.addEventListener("focus", () => { horiz2Row6b.style.boxShadow = barSizeShadow; });
horiz2Size6.addEventListener("blur", () => { horiz2Row6b.style.boxShadow = "none"; });
horiz2Color6.addEventListener("focus", () => { horiz2Row6a.style.boxShadow = barColorShadow; horiz2Row6b.style.boxShadow = barColorShadow; });
horiz2Color6.addEventListener("blur", () => { horiz2Row6a.style.boxShadow = "none"; horiz2Row6b.style.boxShadow = "none"; })
horiz2Text6a.addEventListener("focus", () => { horiz2Row6a.style.textShadow = shadowColor; });
horiz2Text6a.addEventListener("blur", () => { horiz2Row6a.style.textShadow = "none"; });
horiz2Text6b.addEventListener("focus", () => { horiz2Row6c.style.textShadow = shadowColor; });
horiz2Text6b.addEventListener("blur", () => { horiz2Row6c.style.textShadow = "none"; });
horiz2Size7.addEventListener("focus", () => { horiz2Row7b.style.boxShadow = barSizeShadow; });
horiz2Size7.addEventListener("blur", () => { horiz2Row7b.style.boxShadow = "none"; });
horiz2Color7.addEventListener("focus", () => { horiz2Row7a.style.boxShadow = barColorShadow; horiz2Row7b.style.boxShadow = barColorShadow; });
horiz2Color7.addEventListener("blur", () => { horiz2Row7a.style.boxShadow = "none"; horiz2Row7b.style.boxShadow = "none"; })
horiz2Text7a.addEventListener("focus", () => { horiz2Row7a.style.textShadow = shadowColor; });
horiz2Text7a.addEventListener("blur", () => { horiz2Row7a.style.textShadow = "none"; });
horiz2Text7b.addEventListener("focus", () => { horiz2Row7c.style.textShadow = shadowColor; });
horiz2Text7b.addEventListener("blur", () => { horiz2Row7c.style.textShadow = "none"; });
horiz2Size8.addEventListener("focus", () => { horiz2Row8b.style.boxShadow = barSizeShadow; });
horiz2Size8.addEventListener("blur", () => { horiz2Row8b.style.boxShadow = "none"; });
horiz2Color8.addEventListener("focus", () => { horiz2Row8a.style.boxShadow = barColorShadow; horiz2Row8b.style.boxShadow = barColorShadow; });
horiz2Color8.addEventListener("blur", () => { horiz2Row8a.style.boxShadow = "none"; horiz2Row8b.style.boxShadow = "none"; })
horiz2Text8a.addEventListener("focus", () => { horiz2Row8a.style.textShadow = shadowColor; });
horiz2Text8a.addEventListener("blur", () => { horiz2Row8a.style.textShadow = "none"; });
horiz2Text8b.addEventListener("focus", () => { horiz2Row8c.style.textShadow = shadowColor; });
horiz2Text8b.addEventListener("blur", () => { horiz2Row8c.style.textShadow = "none"; });
horiz2Size9.addEventListener("focus", () => { horiz2Row9b.style.boxShadow = barSizeShadow; });
horiz2Size9.addEventListener("blur", () => { horiz2Row9b.style.boxShadow = "none"; });
horiz2Color9.addEventListener("focus", () => { horiz2Row9a.style.boxShadow = barColorShadow; horiz2Row9b.style.boxShadow = barColorShadow; });
horiz2Color9.addEventListener("blur", () => { horiz2Row9a.style.boxShadow = "none"; horiz2Row9b.style.boxShadow = "none"; })
horiz2Text9a.addEventListener("focus", () => { horiz2Row9a.style.textShadow = shadowColor; });
horiz2Text9a.addEventListener("blur", () => { horiz2Row9a.style.textShadow = "none"; });
horiz2Text9b.addEventListener("focus", () => { horiz2Row9c.style.textShadow = shadowColor; });
horiz2Text9b.addEventListener("blur", () => { horiz2Row9c.style.textShadow = "none"; });
horiz2Size10.addEventListener("focus", () => { horiz2Row10b.style.boxShadow = barSizeShadow; });
horiz2Size10.addEventListener("blur", () => { horiz2Row10b.style.boxShadow = "none"; });
horiz2Color10.addEventListener("focus", () => { horiz2Row10a.style.boxShadow = barColorShadow; horiz2Row10b.style.boxShadow = barColorShadow; });
horiz2Color10.addEventListener("blur", () => { horiz2Row10a.style.boxShadow = "none"; horiz2Row10b.style.boxShadow = "none"; })
horiz2Text10a.addEventListener("focus", () => { horiz2Row10a.style.textShadow = shadowColor; });
horiz2Text10a.addEventListener("blur", () => { horiz2Row10a.style.textShadow = "none"; });
horiz2Text10b.addEventListener("focus", () => { horiz2Row10c.style.textShadow = shadowColor; });
horiz2Text10b.addEventListener("blur", () => { horiz2Row10c.style.textShadow = "none"; });

// Horizontal Chart II Height Adjustment
const horiz2rowArray = [horiz2Row1a, horiz2Row1b, horiz2Row1c, horiz2Row2a, horiz2Row2b, horiz2Row2c, horiz2Row3a, horiz2Row3b, horiz2Row3c, horiz2Row4a, horiz2Row4b, horiz2Row4c, horiz2Row5a, horiz2Row5b, horiz2Row5c, horiz2Row6a, horiz2Row6b, horiz2Row6c, horiz2Row7a, horiz2Row7b, horiz2Row7c, horiz2Row8a, horiz2Row8b, horiz2Row8c, horiz2Row9a, horiz2Row9b, horiz2Row9c, horiz2Row10a, horiz2Row10b, horiz2Row10c];
const horiz2inputArray = [horiz2Text1a, horiz2Text2a, horiz2Text3a, horiz2Text4a, horiz2Text5a, horiz2Text6a, horiz2Text7a, horiz2Text8a, horiz2Text9a, horiz2Text10a];
function horiz2BarHeight(x) {
    for (var i = 0; i < horiz2rowArray.length; i++) {
        if (horiz2inputArray[0].value.length <= 16 && horiz2inputArray[1].value.length <= 16 && horiz2inputArray[2].value.length <= 16 && horiz2inputArray[3].value.length <= 16 && horiz2inputArray[4].value.length <= 16 && horiz2inputArray[5].value.length <= 16 && horiz2inputArray[6].value.length <= 16 && horiz2inputArray[7].value.length <= 16 && horiz2inputArray[8].value.length <= 16 && horiz2inputArray[9].value.length <= 16) {
            // All labels must be <= 16 characters for the bar heights to be set at 31px
            horiz2rowArray[i].style.height = "31px";
            horiz2rowArray[i].height = "31";
        } else if (horiz2inputArray[x].value.length < 32 && horiz2inputArray[0].value.length < 32 && horiz2inputArray[1].value.length < 32 && horiz2inputArray[2].value.length < 32 && horiz2inputArray[3].value.length < 32 && horiz2inputArray[4].value.length < 32 && horiz2inputArray[5].value.length < 32 && horiz2inputArray[6].value.length < 32 && horiz2inputArray[7].value.length < 32 && horiz2inputArray[8].value.length < 32 && horiz2inputArray[9].value.length < 32) {
            // All labels must be < 32 characters and only one needs to be > 16 to set all bar heights at 44px
            horiz2rowArray[i].style.height = "44px";
            horiz2rowArray[i].height = "44";
        } else if (horiz2inputArray[0].value.length >= 32 || horiz2inputArray[1].value.length >= 32 || horiz2inputArray[2].value.length >= 32 || horiz2inputArray[3].value.length >= 32 || horiz2inputArray[4].value.length >= 32 || horiz2inputArray[5].value.length >= 32 || horiz2inputArray[6].value.length >= 32 || horiz2inputArray[7].value.length >= 32 || horiz2inputArray[8].value.length >= 32 || horiz2inputArray[9].value.length >= 32) {
            // Only one label needs to be >= 32 characters to set all bars heights to 67px
            horiz2rowArray[i].style.height = "67px";
            horiz2rowArray[i].height = "67";
        }
    }
};
horiz2inputArray[0].addEventListener("input", () => { horiz2BarHeight(0); });
horiz2inputArray[1].addEventListener("input", () => { horiz2BarHeight(1); });
horiz2inputArray[2].addEventListener("input", () => { horiz2BarHeight(2); });
horiz2inputArray[3].addEventListener("input", () => { horiz2BarHeight(3); });
horiz2inputArray[4].addEventListener("input", () => { horiz2BarHeight(4); });
horiz2inputArray[5].addEventListener("input", () => { horiz2BarHeight(5); });
horiz2inputArray[6].addEventListener("input", () => { horiz2BarHeight(6); });
horiz2inputArray[7].addEventListener("input", () => { horiz2BarHeight(7); });
horiz2inputArray[8].addEventListener("input", () => { horiz2BarHeight(8); });
horiz2inputArray[9].addEventListener("input", () => { horiz2BarHeight(9); });

// Generate Horiz2 HTML Chart Logic
const horiz2Weight = document.getElementById("horiz2Weight");
const horiz2Button = document.getElementById("horiz2Button");
const horiz2Output = document.getElementById("horiz2Output");
horiz2Button.addEventListener("mouseenter", () => { horiz2Output.style.opacity = ".4"; horiz2Weight.style.opacity = ".4"; } );
horiz2Button.addEventListener("mouseleave", () => { horiz2Output.style.opacity = ""; horiz2Weight.style.opacity = ""; horiz2Output.style.borderColor = ""; horiz2Weight.style.color = ""; } );
horiz2Button.addEventListener("click", () => {
    if (rowsData2.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color1.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.textContent = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    } else if (rowsData2.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color1.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color2.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.textContent = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    } else if (rowsData2.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color1.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color2.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color3.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.textContent = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    } else if (rowsData2.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color1.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color2.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color3.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color4.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.textContent = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    } else if (rowsData2.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color1.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color2.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color3.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color4.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color5.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row5c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.textContent = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    } else if (rowsData2.value === "6") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color1.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color2.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color3.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color4.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color5.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color6.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row6c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.textContent = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    } else if (rowsData2.value === "7") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color1.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color2.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color3.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color4.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color5.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color6.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color7.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row7c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.textContent = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    } else if (rowsData2.value === "8") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color1.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color2.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color3.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color4.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color5.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color6.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color7.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color8.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row8b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row8c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row8c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.textContent = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    } else if (rowsData2.value === "9") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color1.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color2.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color3.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color4.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color5.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color6.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color7.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color8.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row8b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row8c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color9.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row9b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row9c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row9c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.textContent = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    } else if (rowsData2.value === "10") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color1.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color2.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color3.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color4.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color5.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color6.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color7.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color8.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row8b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row8c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color9.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row9b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row9c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row9c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="background-color: ' + horiz2Color10.value + '; width: 1%;">&nbsp;</td> <td align="left" style="background-color: ' + horiz2Color10.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 24%; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row10a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color10.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row10b.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row10b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row10c.style.width + '; height: ' + horiz2Row1a.height + 'px;" height="' + horiz2Row1a.height + '">' + horiz2Row10c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.textContent = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    }
    horiz2Output.style.opacity = "";
    horiz2Weight.style.opacity = "";
    horiz2Output.style.borderColor = "#166dfc";
    horiz2Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(horiz2Output.value);
});
horiz2Output.addEventListener("click", () => {
    horiz2Output.select();
});




// Horizontal Chart III Row Selection
const horiz3Bars = document.getElementsByClassName("horiz3Bars");
const horiz3Controls = document.getElementsByClassName("horiz3Controls");
const rowsData3 = document.getElementById("rowsData3");
rowsData3.addEventListener("change", () => {
    for (var i = 0; i < horiz3Controls.length; i++) {
        horiz3Controls[i].style.display = "none";
        horiz3Bars[i].style.display = "none";
        for (var x = 0; x < rowsData3.value; x++) {
            horiz3Controls[x].style.display = "block";
            horiz3Bars[x].style.display = "block";
        }
    }
});

// Horizontal Chart III Add Divider
const horiz3DivNodes1 = document.querySelectorAll("tr.horiz3Bars");
const horiz3Div = document.getElementById("horiz3Div");
window.addEventListener("load", () => { // Adds "none" to border-top on load
    for (var i = 1; i < horiz3DivNodes1.length; i++) {
        horiz3DivNodes1[i].firstElementChild.style.borderTop = "none";
    }
});
let horiz3borderTop = "";
horiz3Div.addEventListener("click", () => { // Toggles chart data bar dividers in chart preview
    for (var i = 1; i < horiz3DivNodes1.length; i++) {
        horiz3DivNodes1[i].firstElementChild.style.borderTop = horiz3Div.checked ? "1px solid #e3e3e3" : "none";
    }
    horiz3borderTop = horiz3Div.checked ? "border-top: 1px solid #e3e3e3; " : ""; // Adds border-top to output code if checked
});

// Horizontal Chart III Caption
let horiz3TopBarSpace = "0 0 5px 0";
let horiz3csCode = "";
const horiz3Cap = document.getElementById("horiz3Cap"); // Caption or chart title
const horiz3capText = document.getElementById("horiz3capText"); // Caption or chart title text
horiz3capText.oninput = function() {
    horiz3Cap.innerHTML = horiz3capText.value;
    if (horiz3capText.value == "" && horiz3subText.value == "") {
        horiz3Bars[0].firstElementChild.style.padding = "0 0 5px 0"; // Targets the first data bar below caption/subtitle text
        horiz3TopBarSpace = "0 0 5px 0"; // Padding for first data bar below caption/subtitle text for output code
        horiz3Cap.style.marginBottom = "0";
        return horiz3csCode = "";
    } else if (horiz3capText.value == "" && horiz3subText.value) {
        horiz3Bars[0].firstElementChild.style.padding = "20px 0 5px 0";
        horiz3TopBarSpace = "20px 0 5px 0";
        horiz3Cap.style.marginBottom = "0";
        return horiz3csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz3Sub.innerHTML + '</td> </tr>';
    } else if (horiz3capText.value && horiz3subText.value == "") {
        horiz3Bars[0].firstElementChild.style.padding = "0 0 5px 0";
        horiz3TopBarSpace = "0 0 5px 0";
        horiz3Cap.style.marginBottom = "20px";
        return horiz3csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + horiz3Cap.innerHTML + '</caption>';
    } else if (horiz3capText.value && horiz3subText.value) {
        horiz3Bars[0].firstElementChild.style.padding = "20px 0 5px 0";
        horiz3TopBarSpace = "20px 0 5px 0";
        horiz3Cap.style.marginBottom = "4px";
        return horiz3csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + horiz3Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz3Sub.innerHTML + '</td> </tr>';
    }
};
// Horizontal Chart III Subtitle
const horiz3Sub = document.getElementById("horiz3Sub"); // Chart subtitle
const horiz3subText = document.getElementById("horiz3subText"); // Chart subtitle text
horiz3subText.oninput = function() {
    horiz3Sub.innerHTML = horiz3subText.value;
    if (horiz3subText.value == "" && horiz3capText.value == "") {
        horiz3Bars[0].firstElementChild.style.padding = "0 0 5px 0";
        horiz3TopBarSpace = "0 0 5px 0";
        horiz3Cap.style.marginBottom = "0";
        return horiz3csCode = "";
    } else if (horiz3subText.value == "" && horiz3capText.value) {
        horiz3Bars[0].firstElementChild.style.padding = "0 0 5px 0";
        horiz3TopBarSpace = "0 0 5px 0";
        horiz3Cap.style.marginBottom = "20px";
        return horiz3csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + horiz3Cap.innerHTML + '</caption>';
    } else if (horiz3subText.value && horiz3capText.value == "") {
        horiz3Bars[0].firstElementChild.style.padding = "20px 0 5px 0";
        horiz3TopBarSpace = "20px 0 5px 0";
        horiz3Cap.style.marginBottom = "0";
        return horiz3csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz3Sub.innerHTML + '</td> </tr>';
    } else if (horiz3subText.value && horiz3capText.value) {
        horiz3Bars[0].firstElementChild.style.padding = "20px 0 5px 0";
        horiz3TopBarSpace = "20px 0 5px 0";
        horiz3Cap.style.marginBottom = "4px";
        return horiz3csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + horiz3Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz3Sub.innerHTML + '</td> </tr>';
    }
};
// Horizontal Chart III Source
let horiz3srcCode = "";
const horiz3Source = document.getElementById("horiz3Source"); // Chart source
const horiz3srcText = document.getElementById("horiz3srcText"); // Chart source text
horiz3srcText.oninput = function() {
    horiz3Source.innerHTML = horiz3srcText.value;
    horiz3Source.style.paddingTop = horiz3srcText.value ? "20px" : "0";
    horiz3srcCode = horiz3srcText.value ? '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 20px; text-align: left;">' + horiz3Source.innerHTML + '</td></tr>' : "";
};

// Horizontal Chart III Color Picker
const horiz3colorPick = document.getElementById("horiz3colorPick");
horiz3colorPick.addEventListener("change", (evt) => {
    horiz3Row1b.style.backgroundColor = evt.detail.hex;
    horiz3Color1.value = evt.detail.hex;
    horiz3Row2b.style.backgroundColor = evt.detail.hex;
    horiz3Color2.value = evt.detail.hex;
    horiz3Row3b.style.backgroundColor = evt.detail.hex;
    horiz3Color3.value = evt.detail.hex;
    horiz3Row4b.style.backgroundColor = evt.detail.hex;
    horiz3Color4.value = evt.detail.hex;
    horiz3Row5b.style.backgroundColor = evt.detail.hex;
    horiz3Color5.value = evt.detail.hex;
    horiz3Row6b.style.backgroundColor = evt.detail.hex;
    horiz3Color6.value = evt.detail.hex;
    horiz3Row7b.style.backgroundColor = evt.detail.hex;
    horiz3Color7.value = evt.detail.hex;
    horiz3Row8b.style.backgroundColor = evt.detail.hex;
    horiz3Color8.value = evt.detail.hex;
    horiz3Row9b.style.backgroundColor = evt.detail.hex;
    horiz3Color9.value = evt.detail.hex;
    horiz3Row10b.style.backgroundColor = evt.detail.hex;
    horiz3Color10.value = evt.detail.hex;
});

// Horizontal Chart I Row Customization Logic
const horiz3Row1a = document.getElementById("horiz3Row1a");
const horiz3Row1b = document.getElementById("horiz3Row1b");
const horiz3Row1c = document.getElementById("horiz3Row1c");
const horiz3Row2a = document.getElementById("horiz3Row2a");
const horiz3Row2b = document.getElementById("horiz3Row2b");
const horiz3Row2c = document.getElementById("horiz3Row2c");
const horiz3Row3a = document.getElementById("horiz3Row3a");
const horiz3Row3b = document.getElementById("horiz3Row3b");
const horiz3Row3c = document.getElementById("horiz3Row3c");
const horiz3Row4a = document.getElementById("horiz3Row4a");
const horiz3Row4b = document.getElementById("horiz3Row4b");
const horiz3Row4c = document.getElementById("horiz3Row4c");
const horiz3Row5a = document.getElementById("horiz3Row5a");
const horiz3Row5b = document.getElementById("horiz3Row5b");
const horiz3Row5c = document.getElementById("horiz3Row5c");
const horiz3Row6a = document.getElementById("horiz3Row6a");
const horiz3Row6b = document.getElementById("horiz3Row6b");
const horiz3Row6c = document.getElementById("horiz3Row6c");
const horiz3Row7a = document.getElementById("horiz3Row7a");
const horiz3Row7b = document.getElementById("horiz3Row7b");
const horiz3Row7c = document.getElementById("horiz3Row7c");
const horiz3Row8a = document.getElementById("horiz3Row8a");
const horiz3Row8b = document.getElementById("horiz3Row8b");
const horiz3Row8c = document.getElementById("horiz3Row8c");
const horiz3Row9a = document.getElementById("horiz3Row9a");
const horiz3Row9b = document.getElementById("horiz3Row9b");
const horiz3Row9c = document.getElementById("horiz3Row9c");
const horiz3Row10a = document.getElementById("horiz3Row10a");
const horiz3Row10b = document.getElementById("horiz3Row10b");
const horiz3Row10c = document.getElementById("horiz3Row10c");

// Row 1 Customization Logic
const horiz3Text1a = document.getElementById("horiz3Text1a");
horiz3Text1a.oninput = function() {
    horiz3Row1a.innerHTML = horiz3Text1a.value;
};
const horiz3Size1 = document.getElementById("horiz3Size1");
horiz3Size1.oninput = function() {
    horiz3Row1b.style.width = ((Math.abs(horiz3Size1.value)) * .75) + "%";
    horiz3Row1c.style.width = ((75 - (Math.abs(horiz3Size1.value)) * .75)) + "%";
};
const horiz3Text1b = document.getElementById("horiz3Text1b");
horiz3Text1b.oninput = function() {
    horiz3Row1c.innerHTML = horiz3Text1b.value ? "&nbsp;" + horiz3Text1b.value : "";
};
const horiz3Label1b = document.getElementById("horiz3Label1b");
horiz3Label1b.addEventListener("click", () => {
    if (horiz3Text1b.value == "") {
        horiz3Row1b.innerHTML = "";
        horiz3Row1c.innerHTML = "";
    } else if (horiz3Text1b.value) {
        horiz3Row1b.innerHTML = horiz3Text1b.value + "&nbsp;";
        horiz3Text1b.value = "";
        horiz3Row1c.innerHTML = "";
    }
});
const horiz3Color1 = document.getElementById("horiz3Color1");
horiz3Color1.oninput = function() {
    horiz3Row1b.style.backgroundColor = horiz3Color1.value;
};

// Row 2 Customization Logic
const horiz3Text2a = document.getElementById("horiz3Text2a");
horiz3Text2a.oninput = function() {
    horiz3Row2a.innerHTML = horiz3Text2a.value;
};
const horiz3Size2 = document.getElementById("horiz3Size2");
horiz3Size2.oninput = function() {
    horiz3Row2b.style.width = ((Math.abs(horiz3Size2.value)) * .75) + "%";
    horiz3Row2c.style.width = ((75 - (Math.abs(horiz3Size2.value)) * .75)) + "%";
};
const horiz3Text2b = document.getElementById("horiz3Text2b");
horiz3Text2b.oninput = function() {
    horiz3Row2c.innerHTML = horiz3Text2b.value ? "&nbsp;" + horiz3Text2b.value : "";
};
const horiz3Label2b = document.getElementById("horiz3Label2b");
horiz3Label2b.addEventListener("click", () => {
    if (horiz3Text2b.value == "") {
        horiz3Row2b.innerHTML = "";
        horiz3Row2c.innerHTML = "";
    } else if (horiz3Text2b.value) {
        horiz3Row2b.innerHTML = horiz3Text2b.value + "&nbsp;";
        horiz3Text2b.value = "";
        horiz3Row2c.innerHTML = "";
    }
});
const horiz3Color2 = document.getElementById("horiz3Color2");
horiz3Color2.oninput = function() {
    horiz3Row2b.style.backgroundColor = horiz3Color2.value;
};

// Row 3 Customization Logic
const horiz3Text3a = document.getElementById("horiz3Text3a");
horiz3Text3a.oninput = function() {
    horiz3Row3a.innerHTML = horiz3Text3a.value;
};
const horiz3Size3 = document.getElementById("horiz3Size3");
horiz3Size3.oninput = function() {
    horiz3Row3b.style.width = ((Math.abs(horiz3Size3.value)) * .75) + "%";
    horiz3Row3c.style.width = ((75 - (Math.abs(horiz3Size3.value)) * .75)) + "%";
};
const horiz3Text3b = document.getElementById("horiz3Text3b");
horiz3Text3b.oninput = function() {
    horiz3Row3c.innerHTML = horiz3Text3b.value ? "&nbsp;" + horiz3Text3b.value : "";
};
const horiz3Label3b = document.getElementById("horiz3Label3b");
horiz3Label3b.addEventListener("click", () => {
    if (horiz3Text3b.value == "") {
        horiz3Row3b.innerHTML = "";
        horiz3Row3c.innerHTML = "";
    } else if (horiz3Text3b.value) {
        horiz3Row3b.innerHTML = horiz3Text3b.value + "&nbsp;";
        horiz3Text3b.value = "";
        horiz3Row3c.innerHTML = "";
    }
});
const horiz3Color3 = document.getElementById("horiz3Color3");
horiz3Color3.oninput = function() {
    horiz3Row3b.style.backgroundColor = horiz3Color3.value;
};

// Row 4 Customization Logic
const horiz3Text4a = document.getElementById("horiz3Text4a");
horiz3Text4a.oninput = function() {
    horiz3Row4a.innerHTML = horiz3Text4a.value;
};
const horiz3Size4 = document.getElementById("horiz3Size4");
horiz3Size4.oninput = function() {
    horiz3Row4b.style.width = ((Math.abs(horiz3Size4.value)) * .75) + "%";
    horiz3Row4c.style.width = ((75 - (Math.abs(horiz3Size4.value)) * .75)) + "%";
};
const horiz3Text4b = document.getElementById("horiz3Text4b");
horiz3Text4b.oninput = function() {
    horiz3Row4c.innerHTML = horiz3Text4b.value ? "&nbsp;" + horiz3Text4b.value : "";
};
const horiz3Label4b = document.getElementById("horiz3Label4b");
horiz3Label4b.addEventListener("click", () => {
    if (horiz3Text4b.value == "") {
        horiz3Row4b.innerHTML = "";
        horiz3Row4c.innerHTML = "";
    } else if (horiz3Text4b.value) {
        horiz3Row4b.innerHTML = horiz3Text4b.value + "&nbsp;";
        horiz3Text4b.value = "";
        horiz3Row4c.innerHTML = "";
    }
});
const horiz3Color4 = document.getElementById("horiz3Color4");
horiz3Color4.oninput = function() {
    horiz3Row4b.style.backgroundColor = horiz3Color4.value;
};

// Row 5 Customization Logic
const horiz3Text5a = document.getElementById("horiz3Text5a");
horiz3Text5a.oninput = function() {
    horiz3Row5a.innerHTML = horiz3Text5a.value;
};
const horiz3Size5 = document.getElementById("horiz3Size5");
horiz3Size5.oninput = function() {
    horiz3Row5b.style.width = ((Math.abs(horiz3Size5.value)) * .75) + "%";
    horiz3Row5c.style.width = ((75 - (Math.abs(horiz3Size5.value)) * .75)) + "%";
};
const horiz3Text5b = document.getElementById("horiz3Text5b");
horiz3Text5b.oninput = function() {
    horiz3Row5c.innerHTML = horiz3Text5b.value ? "&nbsp;" + horiz3Text5b.value : "";
};
const horiz3Label5b = document.getElementById("horiz3Label5b");
horiz3Label5b.addEventListener("click", () => {
    if (horiz3Text5b.value == "") {
        horiz3Row5b.innerHTML = "";
        horiz3Row5c.innerHTML = "";
    } else if (horiz3Text5b.value) {
        horiz3Row5b.innerHTML = horiz3Text5b.value + "&nbsp;";
        horiz3Text5b.value = "";
        horiz3Row5c.innerHTML = "";
    }
});
const horiz3Color5 = document.getElementById("horiz3Color5");
horiz3Color5.oninput = function() {
    horiz3Row5b.style.backgroundColor = horiz3Color5.value;
};

// Row 6 Customization Logic
const horiz3Text6a = document.getElementById("horiz3Text6a");
horiz3Text6a.oninput = function() {
    horiz3Row6a.innerHTML = horiz3Text6a.value;
};
const horiz3Size6 = document.getElementById("horiz3Size6");
horiz3Size6.oninput = function() {
    horiz3Row6b.style.width = ((Math.abs(horiz3Size6.value)) * .75) + "%";
    horiz3Row6c.style.width = ((75 - (Math.abs(horiz3Size6.value)) * .75)) + "%";
};
const horiz3Text6b = document.getElementById("horiz3Text6b");
horiz3Text6b.oninput = function() {
    horiz3Row6c.innerHTML = horiz3Text6b.value ? "&nbsp;" + horiz3Text6b.value : "";
};
const horiz3Label6b = document.getElementById("horiz3Label6b");
horiz3Label6b.addEventListener("click", () => {
    if (horiz3Text6b.value == "") {
        horiz3Row6b.innerHTML = "";
        horiz3Row6c.innerHTML = "";
    } else if (horiz3Text6b.value) {
        horiz3Row6b.innerHTML = horiz3Text6b.value + "&nbsp;";
        horiz3Text6b.value = "";
        horiz3Row6c.innerHTML = "";
    }
});
const horiz3Color6 = document.getElementById("horiz3Color6");
horiz3Color6.oninput = function() {
    horiz3Row6b.style.backgroundColor = horiz3Color6.value;
};

// Row 7 Customization Logic
const horiz3Text7a = document.getElementById("horiz3Text7a");
horiz3Text7a.oninput = function() {
    horiz3Row7a.innerHTML = horiz3Text7a.value;
};
const horiz3Size7 = document.getElementById("horiz3Size7");
horiz3Size7.oninput = function() {
    horiz3Row7b.style.width = ((Math.abs(horiz3Size7.value)) * .75) + "%";
    horiz3Row7c.style.width = ((75 - (Math.abs(horiz3Size7.value)) * .75)) + "%";
};
const horiz3Text7b = document.getElementById("horiz3Text7b");
horiz3Text7b.oninput = function() {
    horiz3Row7c.innerHTML = horiz3Text7b.value ? "&nbsp;" + horiz3Text7b.value : "";
};
const horiz3Label7b = document.getElementById("horiz3Label7b");
horiz3Label7b.addEventListener("click", () => {
    if (horiz3Text7b.value == "") {
        horiz3Row7b.innerHTML = "";
        horiz3Row7c.innerHTML = "";
    } else if (horiz3Text7b.value) {
        horiz3Row7b.innerHTML = horiz3Text7b.value + "&nbsp;";
        horiz3Text7b.value = "";
        horiz3Row7c.innerHTML = "";
    }
});
const horiz3Color7 = document.getElementById("horiz3Color7");
horiz3Color7.oninput = function() {
    horiz3Row7b.style.backgroundColor = horiz3Color7.value;
};

// Row 8 Customization Logic
const horiz3Text8a = document.getElementById("horiz3Text8a");
horiz3Text8a.oninput = function() {
    horiz3Row8a.innerHTML = horiz3Text8a.value;
};
const horiz3Size8 = document.getElementById("horiz3Size8");
horiz3Size8.oninput = function() {
    horiz3Row8b.style.width = ((Math.abs(horiz3Size8.value)) * .75) + "%";
    horiz3Row8c.style.width = ((75 - (Math.abs(horiz3Size8.value)) * .75)) + "%";
};
const horiz3Text8b = document.getElementById("horiz3Text8b");
horiz3Text8b.oninput = function() {
    horiz3Row8c.innerHTML = horiz3Text8b.value ? "&nbsp;" + horiz3Text8b.value : "";
};
const horiz3Label8b = document.getElementById("horiz3Label8b");
horiz3Label8b.addEventListener("click", () => {
    if (horiz3Text8b.value == "") {
        horiz3Row8b.innerHTML = "";
        horiz3Row8c.innerHTML = "";
    } else if (horiz3Text8b.value) {
        horiz3Row8b.innerHTML = horiz3Text8b.value + "&nbsp;";
        horiz3Text8b.value = "";
        horiz3Row8c.innerHTML = "";
    }
});
const horiz3Color8 = document.getElementById("horiz3Color8");
horiz3Color8.oninput = function() {
    horiz3Row8b.style.backgroundColor = horiz3Color8.value;
};

// Row 9 Customization Logic
const horiz3Text9a = document.getElementById("horiz3Text9a");
horiz3Text9a.oninput = function() {
    horiz3Row9a.innerHTML = horiz3Text9a.value;
};
const horiz3Size9 = document.getElementById("horiz3Size9");
horiz3Size9.oninput = function() {
    horiz3Row9b.style.width = ((Math.abs(horiz3Size9.value)) * .75) + "%";
    horiz3Row9c.style.width = ((75 - (Math.abs(horiz3Size9.value)) * .75)) + "%";
};
const horiz3Text9b = document.getElementById("horiz3Text9b");
horiz3Text9b.oninput = function() {
    horiz3Row9c.innerHTML = horiz3Text9b.value ? "&nbsp;" + horiz3Text9b.value : "";
};
const horiz3Label9b = document.getElementById("horiz3Label9b");
horiz3Label9b.addEventListener("click", () => {
    if (horiz3Text9b.value == "") {
        horiz3Row9b.innerHTML = "";
        horiz3Row9c.innerHTML = "";
    } else if (horiz3Text9b.value) {
        horiz3Row9b.innerHTML = horiz3Text9b.value + "&nbsp;";
        horiz3Text9b.value = "";
        horiz3Row9c.innerHTML = "";
    }
});
const horiz3Color9 = document.getElementById("horiz3Color9");
horiz3Color9.oninput = function() {
    horiz3Row9b.style.backgroundColor = horiz3Color9.value;
};

// Row 10 Customization Logic
const horiz3Text10a = document.getElementById("horiz3Text10a");
horiz3Text10a.oninput = function() {
    horiz3Row10a.innerHTML = horiz3Text10a.value;
};
const horiz3Size10 = document.getElementById("horiz3Size10");
horiz3Size10.oninput = function() {
    horiz3Row10b.style.width = ((Math.abs(horiz3Size10.value)) * .75) + "%";
    horiz3Row10c.style.width = ((75 - (Math.abs(horiz3Size10.value)) * .75)) + "%";
};
const horiz3Text10b = document.getElementById("horiz3Text10b");
horiz3Text10b.oninput = function() {
    horiz3Row10c.innerHTML = horiz3Text10b.value ? "&nbsp;" + horiz3Text10b.value : "";
};
const horiz3Label10b = document.getElementById("horiz3Label10b");
horiz3Label10b.addEventListener("click", () => {
    if (horiz3Text10b.value == "") {
        horiz3Row10b.innerHTML = "";
        horiz3Row10c.innerHTML = "";
    } else if (horiz3Text10b.value) {
        horiz3Row10b.innerHTML = horiz3Text10b.value + "&nbsp;";
        horiz3Text10b.value = "";
        horiz3Row10c.innerHTML = "";
    }
});
const horiz3Color10 = document.getElementById("horiz3Color10");
horiz3Color10.oninput = function() {
    horiz3Row10b.style.backgroundColor = horiz3Color10.value;
};

// Horizontal Chart III Focus/Blur Events
horiz3capText.addEventListener("focus", () => { horiz3Cap.style.textShadow = shadowColor; });
horiz3capText.addEventListener("blur", () => { horiz3Cap.style.textShadow = "none"; });
horiz3subText.addEventListener("focus", () => { horiz3Sub.style.textShadow = shadowColor; });
horiz3subText.addEventListener("blur", () => { horiz3Sub.style.textShadow = "none"; });
horiz3srcText.addEventListener("focus", () => { horiz3Source.style.textShadow = shadowColor; });
horiz3srcText.addEventListener("blur", () => { horiz3Source.style.textShadow = "none"; });
horiz3Size1.addEventListener("focus", () => { horiz3Row1b.style.boxShadow = barSizeShadow; });
horiz3Size1.addEventListener("blur", () => { horiz3Row1b.style.boxShadow = "none"; });
horiz3Color1.addEventListener("focus", () => { horiz3Row1b.style.boxShadow = barColorShadow; });
horiz3Color1.addEventListener("blur", () => { horiz3Row1b.style.boxShadow = "none"; });
horiz3Text1a.addEventListener("focus", () => { horiz3Row1a.style.textShadow = shadowColor; });
horiz3Text1a.addEventListener("blur", () => { horiz3Row1a.style.textShadow = "none"; });
horiz3Text1b.addEventListener("focus", () => { horiz3Row1c.style.textShadow = shadowColor; });
horiz3Text1b.addEventListener("blur", () => { horiz3Row1c.style.textShadow = "none"; });
horiz3Size2.addEventListener("focus", () => { horiz3Row2b.style.boxShadow = barSizeShadow; });
horiz3Size2.addEventListener("blur", () => { horiz3Row2b.style.boxShadow = "none"; });
horiz3Color2.addEventListener("focus", () => { horiz3Row2b.style.boxShadow = barColorShadow; });
horiz3Color2.addEventListener("blur", () => { horiz3Row2b.style.boxShadow = "none"; });
horiz3Text2a.addEventListener("focus", () => { horiz3Row2a.style.textShadow = shadowColor; });
horiz3Text2a.addEventListener("blur", () => { horiz3Row2a.style.textShadow = "none"; });
horiz3Text2b.addEventListener("focus", () => { horiz3Row2c.style.textShadow = shadowColor; });
horiz3Text2b.addEventListener("blur", () => { horiz3Row2c.style.textShadow = "none"; });
horiz3Size3.addEventListener("focus", () => { horiz3Row3b.style.boxShadow = barSizeShadow; });
horiz3Size3.addEventListener("blur", () => { horiz3Row3b.style.boxShadow = "none"; });
horiz3Color3.addEventListener("focus", () => { horiz3Row3b.style.boxShadow = barColorShadow; });
horiz3Color3.addEventListener("blur", () => { horiz3Row3b.style.boxShadow = "none"; });
horiz3Text3a.addEventListener("focus", () => { horiz3Row3a.style.textShadow = shadowColor; });
horiz3Text3a.addEventListener("blur", () => { horiz3Row3a.style.textShadow = "none"; });
horiz3Text3b.addEventListener("focus", () => { horiz3Row3c.style.textShadow = shadowColor; });
horiz3Text3b.addEventListener("blur", () => { horiz3Row3c.style.textShadow = "none"; });
horiz3Size4.addEventListener("focus", () => { horiz3Row4b.style.boxShadow = barSizeShadow; });
horiz3Size4.addEventListener("blur", () => { horiz3Row4b.style.boxShadow = "none"; });
horiz3Color4.addEventListener("focus", () => { horiz3Row4b.style.boxShadow = barColorShadow; });
horiz3Color4.addEventListener("blur", () => { horiz3Row4b.style.boxShadow = "none"; });
horiz3Text4a.addEventListener("focus", () => { horiz3Row4a.style.textShadow = shadowColor; });
horiz3Text4a.addEventListener("blur", () => { horiz3Row4a.style.textShadow = "none"; });
horiz3Text4b.addEventListener("focus", () => { horiz3Row4c.style.textShadow = shadowColor; });
horiz3Text4b.addEventListener("blur", () => { horiz3Row4c.style.textShadow = "none"; });
horiz3Size5.addEventListener("focus", () => { horiz3Row5b.style.boxShadow = barSizeShadow; });
horiz3Size5.addEventListener("blur", () => { horiz3Row5b.style.boxShadow = "none"; });
horiz3Color5.addEventListener("focus", () => { horiz3Row5b.style.boxShadow = barColorShadow; });
horiz3Color5.addEventListener("blur", () => { horiz3Row5b.style.boxShadow = "none"; });
horiz3Text5a.addEventListener("focus", () => { horiz3Row5a.style.textShadow = shadowColor; });
horiz3Text5a.addEventListener("blur", () => { horiz3Row5a.style.textShadow = "none"; });
horiz3Text5b.addEventListener("focus", () => { horiz3Row5c.style.textShadow = shadowColor; });
horiz3Text5b.addEventListener("blur", () => { horiz3Row5c.style.textShadow = "none"; });
horiz3Size6.addEventListener("focus", () => { horiz3Row6b.style.boxShadow = barSizeShadow; });
horiz3Size6.addEventListener("blur", () => { horiz3Row6b.style.boxShadow = "none"; });
horiz3Color6.addEventListener("focus", () => { horiz3Row6b.style.boxShadow = barColorShadow; });
horiz3Color6.addEventListener("blur", () => { horiz3Row6b.style.boxShadow = "none"; });
horiz3Text6a.addEventListener("focus", () => { horiz3Row6a.style.textShadow = shadowColor; });
horiz3Text6a.addEventListener("blur", () => { horiz3Row6a.style.textShadow = "none"; });
horiz3Text6b.addEventListener("focus", () => { horiz3Row6c.style.textShadow = shadowColor; });
horiz3Text6b.addEventListener("blur", () => { horiz3Row6c.style.textShadow = "none"; });
horiz3Size7.addEventListener("focus", () => { horiz3Row7b.style.boxShadow = barSizeShadow; });
horiz3Size7.addEventListener("blur", () => { horiz3Row7b.style.boxShadow = "none"; });
horiz3Color7.addEventListener("focus", () => { horiz3Row7b.style.boxShadow = barColorShadow; });
horiz3Color7.addEventListener("blur", () => { horiz3Row7b.style.boxShadow = "none"; });
horiz3Text7a.addEventListener("focus", () => { horiz3Row7a.style.textShadow = shadowColor; });
horiz3Text7a.addEventListener("blur", () => { horiz3Row7a.style.textShadow = "none"; });
horiz3Text7b.addEventListener("focus", () => { horiz3Row7c.style.textShadow = shadowColor; });
horiz3Text7b.addEventListener("blur", () => { horiz3Row7c.style.textShadow = "none"; });
horiz3Size8.addEventListener("focus", () => { horiz3Row8b.style.boxShadow = barSizeShadow; });
horiz3Size8.addEventListener("blur", () => { horiz3Row8b.style.boxShadow = "none"; });
horiz3Color8.addEventListener("focus", () => { horiz3Row8b.style.boxShadow = barColorShadow; });
horiz3Color8.addEventListener("blur", () => { horiz3Row8b.style.boxShadow = "none"; });
horiz3Text8a.addEventListener("focus", () => { horiz3Row8a.style.textShadow = shadowColor; });
horiz3Text8a.addEventListener("blur", () => { horiz3Row8a.style.textShadow = "none"; });
horiz3Text8b.addEventListener("focus", () => { horiz3Row8c.style.textShadow = shadowColor; });
horiz3Text8b.addEventListener("blur", () => { horiz3Row8c.style.textShadow = "none"; });
horiz3Size9.addEventListener("focus", () => { horiz3Row9b.style.boxShadow = barSizeShadow; });
horiz3Size9.addEventListener("blur", () => { horiz3Row9b.style.boxShadow = "none"; });
horiz3Color9.addEventListener("focus", () => { horiz3Row9b.style.boxShadow = barColorShadow; });
horiz3Color9.addEventListener("blur", () => { horiz3Row9b.style.boxShadow = "none"; });
horiz3Text9a.addEventListener("focus", () => { horiz3Row9a.style.textShadow = shadowColor; });
horiz3Text9a.addEventListener("blur", () => { horiz3Row9a.style.textShadow = "none"; });
horiz3Text9b.addEventListener("focus", () => { horiz3Row9c.style.textShadow = shadowColor; });
horiz3Text9b.addEventListener("blur", () => { horiz3Row9c.style.textShadow = "none"; });
horiz3Size10.addEventListener("focus", () => { horiz3Row10b.style.boxShadow = barSizeShadow; });
horiz3Size10.addEventListener("blur", () => { horiz3Row10b.style.boxShadow = "none"; });
horiz3Color10.addEventListener("focus", () => { horiz3Row10b.style.boxShadow = barColorShadow; });
horiz3Color10.addEventListener("blur", () => { horiz3Row10b.style.boxShadow = "none"; });
horiz3Text10a.addEventListener("focus", () => { horiz3Row10a.style.textShadow = shadowColor; });
horiz3Text10a.addEventListener("blur", () => { horiz3Row10a.style.textShadow = "none"; });
horiz3Text10b.addEventListener("focus", () => { horiz3Row10c.style.textShadow = shadowColor; });
horiz3Text10b.addEventListener("blur", () => { horiz3Row10c.style.textShadow = "none"; });

// Horizontal Chart III Height Adjustment
const horiz3rowArray = [horiz3Row1a, horiz3Row1b, horiz3Row1c, horiz3Row2a, horiz3Row2b, horiz3Row2c, horiz3Row3a, horiz3Row3b, horiz3Row3c, horiz3Row4a, horiz3Row4b, horiz3Row4c, horiz3Row5a, horiz3Row5b, horiz3Row5c, horiz3Row6a, horiz3Row6b, horiz3Row6c, horiz3Row7a, horiz3Row7b, horiz3Row7c, horiz3Row8a, horiz3Row8b, horiz3Row8c, horiz3Row9a, horiz3Row9b, horiz3Row9c, horiz3Row10a, horiz3Row10b, horiz3Row10c];
const horiz3inputArray = [horiz3Text1a, horiz3Text2a, horiz3Text3a, horiz3Text4a, horiz3Text5a, horiz3Text6a, horiz3Text7a, horiz3Text8a, horiz3Text9a, horiz3Text10a];
function horiz3BarHeight(x) {
    for (var i = 0; i < horiz3rowArray.length; i++) {
        if (horiz3inputArray[0].value.length <= 16 && horiz3inputArray[1].value.length <= 16 && horiz3inputArray[2].value.length <= 16 && horiz3inputArray[3].value.length <= 16 && horiz3inputArray[4].value.length <= 16 && horiz3inputArray[5].value.length <= 16 && horiz3inputArray[6].value.length <= 16 && horiz3inputArray[7].value.length <= 16 && horiz3inputArray[8].value.length <= 16 && horiz3inputArray[9].value.length <= 16) {
            // All labels must be <= 16 characters for the bar heights to be set at 28px
            horiz3rowArray[i].style.height = "28px";
            horiz3rowArray[i].height = "28";
        } else if (horiz3inputArray[x].value.length < 32 && horiz3inputArray[0].value.length < 32 && horiz3inputArray[1].value.length < 32 && horiz3inputArray[2].value.length < 32 && horiz3inputArray[3].value.length < 32 && horiz3inputArray[4].value.length < 32 && horiz3inputArray[5].value.length < 32 && horiz3inputArray[6].value.length < 32 && horiz3inputArray[7].value.length < 32 && horiz3inputArray[8].value.length < 32 && horiz3inputArray[9].value.length < 32) {
            // All labels must be < 32 characters and only one needs to be > 16 to set all bar heights at 36px
            horiz3rowArray[i].style.height = "36px";
            horiz3rowArray[i].height = "36";
        } else if (horiz3inputArray[0].value.length >= 32 || horiz3inputArray[1].value.length >= 32 || horiz3inputArray[2].value.length >= 32 || horiz3inputArray[3].value.length >= 32 || horiz3inputArray[4].value.length >= 32 || horiz3inputArray[5].value.length >= 32 || horiz3inputArray[6].value.length >= 32 || horiz3inputArray[7].value.length >= 32 || horiz3inputArray[8].value.length >= 32 || horiz3inputArray[9].value.length >= 32) {
            // Only one label needs to be >= 32 characters to set all bars heights to 54px
            horiz3rowArray[i].style.height = "54px";
            horiz3rowArray[i].height = "54";
        }
    }
};
horiz3inputArray[0].addEventListener("input", () => { horiz3BarHeight(0); });
horiz3inputArray[1].addEventListener("input", () => { horiz3BarHeight(1); });
horiz3inputArray[2].addEventListener("input", () => { horiz3BarHeight(2); });
horiz3inputArray[3].addEventListener("input", () => { horiz3BarHeight(3); });
horiz3inputArray[4].addEventListener("input", () => { horiz3BarHeight(4); });
horiz3inputArray[5].addEventListener("input", () => { horiz3BarHeight(5); });
horiz3inputArray[6].addEventListener("input", () => { horiz3BarHeight(6); });
horiz3inputArray[7].addEventListener("input", () => { horiz3BarHeight(7); });
horiz3inputArray[8].addEventListener("input", () => { horiz3BarHeight(8); });
horiz3inputArray[9].addEventListener("input", () => { horiz3BarHeight(9); });

// Generate Horiz3 HTML Chart Logic
const horiz3Weight = document.getElementById("horiz3Weight");
const horiz3Button = document.getElementById("horiz3Button");
const horiz3Output = document.getElementById("horiz3Output");
horiz3Button.addEventListener("mouseenter", () => { horiz3Output.style.opacity = ".4"; horiz3Weight.style.opacity = ".4"; } );
horiz3Button.addEventListener("mouseleave", () => { horiz3Output.style.opacity = ""; horiz3Weight.style.opacity = ""; horiz3Output.style.borderColor = ""; horiz3Weight.style.color = ""; } );
horiz3Button.addEventListener("click", () => {
    if (rowsData3.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.textContent = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    } else if (rowsData3.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.textContent = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    } else if (rowsData3.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.textContent = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    } else if (rowsData3.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.textContent = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    } else if (rowsData3.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row5c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.textContent = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    } else if (rowsData3.value === "6") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row6c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.textContent = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    } else if (rowsData3.value === "7") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row7c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.textContent = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    } else if (rowsData3.value === "8") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row8b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row8c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row8c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.textContent = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    } else if (rowsData3.value === "9") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row8b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row8c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row9b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row9c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row9c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.textContent = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    } else if (rowsData3.value === "10") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row8b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row8c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row9b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row9c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row9c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row10a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color10.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row10b.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row10b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row10c.style.width + '; height: ' + horiz3Row1a.height + 'px;" height="' + horiz3Row1a.height + '">' + horiz3Row10c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.textContent = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    }
    horiz3Output.style.opacity = "";
    horiz3Weight.style.opacity = "";
    horiz3Output.style.borderColor = "#166dfc";
    horiz3Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(horiz3Output.value);
});
horiz3Output.addEventListener("click", () => {
    horiz3Output.select();
});