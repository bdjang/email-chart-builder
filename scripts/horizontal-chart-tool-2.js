"use strict";

// Horizontal Chart IV Row Selection
const horiz4Bars = document.getElementsByClassName("horiz4Bars");
const horiz4Controls = document.getElementsByClassName("horiz4Controls");
const rowsData11 = document.getElementById("rowsData11");
rowsData11.addEventListener("change", () => {
    for (var i = 0; i < horiz4Controls.length; i++) {
        horiz4Controls[i].style.display = "none";
        horiz4Bars[i].style.display = "none";
        for (var x = 0; x < rowsData11.value; x++) {
            horiz4Controls[x].style.display = "block";
            horiz4Bars[x].style.display = "block";
        }
    }
});

// Horizontal Chart IV Add Divider
const horiz4DivNodes1 = document.querySelectorAll("tr.horiz4Bars");
const horiz4Div = document.getElementById("horiz4Div");
window.addEventListener("load", () => { // Adds "none" to border-top on load
    for (var i = 1; i < horiz4DivNodes1.length; i++) {
        horiz4DivNodes1[i].firstElementChild.style.borderTop = "none";
    }
});
let horiz4borderTop = "";
horiz4Div.addEventListener("click", () => { // Toggles chart data bar dividers in chart preview
    for (var i = 1; i < horiz4DivNodes1.length; i++) {
        horiz4DivNodes1[i].firstElementChild.style.borderTop = horiz4Div.checked ? "1px solid #e3e3e3" : "none";
    }
    horiz4borderTop = horiz4Div.checked ? "border-top: 1px solid #e3e3e3; " : ""; // Adds border-top to output code if checked
});

// Horizontal Chart IV Caption
let horiz4TopBarSpace = "0 0 4px 0";
let horiz4csCode = "";
const horiz4Cap = document.getElementById("horiz4Cap"); // Caption or chart title
const horiz4capText = document.getElementById("horiz4capText"); // Caption or chart title text
horiz4capText.oninput = function() {
    horiz4Cap.innerHTML = horiz4capText.value;
    if (horiz4capText.value == "" && horiz4subText.value == "") {
        horiz4Bars[0].firstElementChild.style.padding = "0 0 4px 0"; // Targets the first data bar below caption/subtit8e text
        horiz4TopBarSpace = "0 0 4px 0"; // Padding for first data bar below caption/subtitle text for outp8t code
        horiz4Cap.style.marginBottom = "0";
        return horiz4csCode = "";
    } else if (horiz4capText.value == "" && horiz4subText.value) {
        horiz4Bars[0].firstElementChild.style.padding = "20px 0 8px 0";
        horiz4TopBarSpace = "20px 0 8px 0";
        horiz4Cap.style.marginBottom = "0";
        return horiz4csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz4Sub.innerHTML + '</td> </tr>';
    } else if (horiz4capText.value && horiz4subText.value == "") {
        horiz4Bars[0].firstElementChild.style.padding= "0 0 8px 0";
        horiz4TopBarSpace= "0 0 8px 0";
        horiz4Cap.style.marginBottom = "20px";
        return horiz4csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + horiz4Cap.innerHTML + '</caption>';
    } else if (horiz4capText.value && horiz4subText.value) {
        horiz4Bars[0].firstElementChild.style.padding = "20px 0 8px 0";
        horiz4TopBarSpace = "20px 0 8px 0";
        horiz4Cap.style.marginBottom = "4px";
        return horiz4csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + horiz4Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz4Sub.innerHTML + '</td> </tr>';
    }
};
// Horizontal Chart IV Subtitle
const horiz4Sub = document.getElementById("horiz4Sub"); // Chart subtitle
const horiz4subText = document.getElementById("horiz4subText"); // Chart subtitle text
horiz4subText.oninput = function() {
    horiz4Sub.innerHTML = horiz4subText.value;
    if (horiz4subText.value == "" && horiz4capText.value == "") {
        horiz4Bars[0].firstElementChild.style.padding = "0 0 8px 0";
        horiz4TopBarSpace = "0 0 8px 0";
        horiz4Cap.style.marginBottom = "0";
        return horiz4csCode = "";
    } else if (horiz4subText.value == "" && horiz4capText.value) {
        horiz4Bars[0].firstElementChild.style.padding = "0 0 8px 0";
        horiz4TopBarSpace = "0 0 8px 0";
        horiz4Cap.style.marginBottom = "20px";
        return horiz4csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + horiz4Cap.innerHTML + '</caption>';
    } else if (horiz4subText.value && horiz4capText.value == "") {
        horiz4Bars[0].firstElementChild.style.padding = "20px 0 8px 0";
        horiz4TopBarSpace = "20px 0 8px 0";
        horiz4Cap.style.marginBottom = "0";
        return horiz4csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz4Sub.innerHTML + '</td> </tr>';
    } else if (horiz4subText.value && horiz4capText.value) {
        horiz4Bars[0].firstElementChild.style.padding = "20px 0 8px 0";
        horiz4TopBarSpace = "20px 0 8px 0";
        horiz4Cap.style.marginBottom = "4px";
        return horiz4csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + horiz4Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz4Sub.innerHTML + '</td> </tr>';
    }
};
// Horizontal Chart IV Source
let horiz4srcCode = "";
const horiz4Source = document.getElementById("horiz4Source"); // Chart source
const horiz4srcText = document.getElementById("horiz4srcText"); // Chart source text
horiz4srcText.oninput = function() {
    horiz4Source.innerHTML = horiz4srcText.value;
    horiz4Source.style.paddingTop = horiz4srcText.value ? "12px" : "0";
    horiz4srcCode = horiz4srcText.value ? '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 12px; text-align: left;">' + horiz4Source.innerHTML + '</td></tr>' : "";
};

// Horizontal Chart IV Color Picker
const horiz4colorPick = document.getElementById("horiz4colorPick");
horiz4colorPick.addEventListener("change", (evt) => {
    horiz4Row1b.style.backgroundColor = evt.detail.hex;
    horiz4Color1.value = evt.detail.hex;
    horiz4Row2b.style.backgroundColor = evt.detail.hex;
    horiz4Color2.value = evt.detail.hex;
    horiz4Row3b.style.backgroundColor = evt.detail.hex;
    horiz4Color3.value = evt.detail.hex;
    horiz4Row4b.style.backgroundColor = evt.detail.hex;
    horiz4Color4.value = evt.detail.hex;
    horiz4Row5b.style.backgroundColor = evt.detail.hex;
    horiz4Color5.value = evt.detail.hex;
    horiz4Row6b.style.backgroundColor = evt.detail.hex;
    horiz4Color6.value = evt.detail.hex;
    horiz4Row7b.style.backgroundColor = evt.detail.hex;
    horiz4Color7.value = evt.detail.hex;
    horiz4Row8b.style.backgroundColor = evt.detail.hex;
    horiz4Color8.value = evt.detail.hex;
    horiz4Row9b.style.backgroundColor = evt.detail.hex;
    horiz4Color9.value = evt.detail.hex;
    horiz4Row10b.style.backgroundColor = evt.detail.hex;
    horiz4Color10.value = evt.detail.hex;
});

// Horizontal Chart IV Row Customization Logic
const horiz4Row1a = document.getElementById("horiz4Row1a");
const horiz4Row1b = document.getElementById("horiz4Row1b");
const horiz4Row1c = document.getElementById("horiz4Row1c");
const horiz4Row2a = document.getElementById("horiz4Row2a");
const horiz4Row2b = document.getElementById("horiz4Row2b");
const horiz4Row2c = document.getElementById("horiz4Row2c");
const horiz4Row3a = document.getElementById("horiz4Row3a");
const horiz4Row3b = document.getElementById("horiz4Row3b");
const horiz4Row3c = document.getElementById("horiz4Row3c");
const horiz4Row4a = document.getElementById("horiz4Row4a");
const horiz4Row4b = document.getElementById("horiz4Row4b");
const horiz4Row4c = document.getElementById("horiz4Row4c");
const horiz4Row5a = document.getElementById("horiz4Row5a");
const horiz4Row5b = document.getElementById("horiz4Row5b");
const horiz4Row5c = document.getElementById("horiz4Row5c");
const horiz4Row6a = document.getElementById("horiz4Row6a");
const horiz4Row6b = document.getElementById("horiz4Row6b");
const horiz4Row6c = document.getElementById("horiz4Row6c");
const horiz4Row7a = document.getElementById("horiz4Row7a");
const horiz4Row7b = document.getElementById("horiz4Row7b");
const horiz4Row7c = document.getElementById("horiz4Row7c");
const horiz4Row8a = document.getElementById("horiz4Row8a");
const horiz4Row8b = document.getElementById("horiz4Row8b");
const horiz4Row8c = document.getElementById("horiz4Row8c");
const horiz4Row9a = document.getElementById("horiz4Row9a");
const horiz4Row9b = document.getElementById("horiz4Row9b");
const horiz4Row9c = document.getElementById("horiz4Row9c");
const horiz4Row10a = document.getElementById("horiz4Row10a");
const horiz4Row10b = document.getElementById("horiz4Row10b");
const horiz4Row10c = document.getElementById("horiz4Row10c");

// Row 1 Customization Logic
const horiz4Text1a = document.getElementById("horiz4Text1a");
horiz4Text1a.oninput = function() {
    horiz4Row1a.innerHTML = horiz4Text1a.value;
};
const horiz4Size1 = document.getElementById("horiz4Size1");
horiz4Size1.oninput = function() {
    horiz4Row1b.style.width = ((Math.abs(horiz4Size1.value)) * .75) + "%";
    horiz4Row1c.style.width = ((75 - (Math.abs(horiz4Size1.value)) * .75)) + "%";
};
const horiz4Text1b = document.getElementById("horiz4Text1b");
horiz4Text1b.oninput = function() {
    horiz4Row1c.innerHTML = horiz4Text1b.value ? "&nbsp;" + horiz4Text1b.value : "";
};
const horiz4Label1b = document.getElementById("horiz4Label1b");
horiz4Label1b.addEventListener("click", () => {
    if (horiz4Text1b.value == "") {
        horiz4Row1b.innerHTML = "";
        horiz4Row1c.innerHTML = "";
    } else if (horiz4Text1b.value) {
        horiz4Row1b.innerHTML = horiz4Text1b.value + "&nbsp;";
        horiz4Text1b.value = "";
        horiz4Row1c.innerHTML = "";
    }
});
const horiz4Color1 = document.getElementById("horiz4Color1");
horiz4Color1.oninput = function() {
    horiz4Row1b.style.backgroundColor = horiz4Color1.value;
};

// Row 2 Customization Logic
const horiz4Text2a = document.getElementById("horiz4Text2a");
horiz4Text2a.oninput = function() {
    horiz4Row2a.innerHTML = horiz4Text2a.value;
};
const horiz4Size2 = document.getElementById("horiz4Size2");
horiz4Size2.oninput = function() {
    horiz4Row2b.style.width = ((Math.abs(horiz4Size2.value)) * .75) + "%";
    horiz4Row2c.style.width = ((75 - (Math.abs(horiz4Size2.value)) * .75)) + "%";
};
const horiz4Text2b = document.getElementById("horiz4Text2b");
horiz4Text2b.oninput = function() {
    horiz4Row2c.innerHTML = horiz4Text2b.value ? "&nbsp;" + horiz4Text2b.value : "";
};
const horiz4Label2b = document.getElementById("horiz4Label2b");
horiz4Label2b.addEventListener("click", () => {
    if (horiz4Text2b.value == "") {
        horiz4Row2b.innerHTML = "";
        horiz4Row2c.innerHTML = "";
    } else if (horiz4Text2b.value) {
        horiz4Row2b.innerHTML = horiz4Text2b.value + "&nbsp;";
        horiz4Text2b.value = "";
        horiz4Row2c.innerHTML = "";
    }
});
const horiz4Color2 = document.getElementById("horiz4Color2");
horiz4Color2.oninput = function() {
    horiz4Row2b.style.backgroundColor = horiz4Color2.value;
};

// Row 3 Customization Logic
const horiz4Text3a = document.getElementById("horiz4Text3a");
horiz4Text3a.oninput = function() {
    horiz4Row3a.innerHTML = horiz4Text3a.value;
};
const horiz4Size3 = document.getElementById("horiz4Size3");
horiz4Size3.oninput = function() {
    horiz4Row3b.style.width = ((Math.abs(horiz4Size3.value)) * .75) + "%";
    horiz4Row3c.style.width = ((75 - (Math.abs(horiz4Size3.value)) * .75)) + "%";
};
const horiz4Text3b = document.getElementById("horiz4Text3b");
horiz4Text3b.oninput = function() {
    horiz4Row3c.innerHTML = horiz4Text3b.value ? "&nbsp;" + horiz4Text3b.value : "";
};
const horiz4Label3b = document.getElementById("horiz4Label3b");
horiz4Label3b.addEventListener("click", () => {
    if (horiz4Text3b.value == "") {
        horiz4Row3b.innerHTML = "";
        horiz4Row3c.innerHTML = "";
    } else if (horiz4Text3b.value) {
        horiz4Row3b.innerHTML = horiz4Text3b.value + "&nbsp;";
        horiz4Text3b.value = "";
        horiz4Row3c.innerHTML = "";
    }
});
const horiz4Color3 = document.getElementById("horiz4Color3");
horiz4Color3.oninput = function() {
    horiz4Row3b.style.backgroundColor = horiz4Color3.value;
};

// Row 4 Customization Logic
const horiz4Text4a = document.getElementById("horiz4Text4a");
horiz4Text4a.oninput = function() {
    horiz4Row4a.innerHTML = horiz4Text4a.value;
};
const horiz4Size4 = document.getElementById("horiz4Size4");
horiz4Size4.oninput = function() {
    horiz4Row4b.style.width = ((Math.abs(horiz4Size4.value)) * .75) + "%";
    horiz4Row4c.style.width = ((75 - (Math.abs(horiz4Size4.value)) * .75)) + "%";
};
const horiz4Text4b = document.getElementById("horiz4Text4b");
horiz4Text4b.oninput = function() {
    horiz4Row4c.innerHTML = horiz4Text4b.value ? "&nbsp;" + horiz4Text4b.value : "";
};
const horiz4Label4b = document.getElementById("horiz4Label4b");
horiz4Label4b.addEventListener("click", () => {
    if (horiz4Text4b.value == "") {
        horiz4Row4b.innerHTML = "";
        horiz4Row4c.innerHTML = "";
    } else if (horiz4Text4b.value) {
        horiz4Row4b.innerHTML = horiz4Text4b.value + "&nbsp;";
        horiz4Text4b.value = "";
        horiz4Row4c.innerHTML = "";
    }
});
const horiz4Color4 = document.getElementById("horiz4Color4");
horiz4Color4.oninput = function() {
    horiz4Row4b.style.backgroundColor = horiz4Color4.value;
};

// Row 5 Customization Logic
const horiz4Text5a = document.getElementById("horiz4Text5a");
horiz4Text5a.oninput = function() {
    horiz4Row5a.innerHTML = horiz4Text5a.value;
};
const horiz4Size5 = document.getElementById("horiz4Size5");
horiz4Size5.oninput = function() {
    horiz4Row5b.style.width = ((Math.abs(horiz4Size5.value)) * .75) + "%";
    horiz4Row5c.style.width = ((75 - (Math.abs(horiz4Size5.value)) * .75)) + "%";
};
const horiz4Text5b = document.getElementById("horiz4Text5b");
horiz4Text5b.oninput = function() {
    horiz4Row5c.innerHTML = horiz4Text5b.value ? "&nbsp;" + horiz4Text5b.value : "";
};
const horiz4Label5b = document.getElementById("horiz4Label5b");
horiz4Label5b.addEventListener("click", () => {
    if (horiz4Text5b.value == "") {
        horiz4Row5b.innerHTML = "";
        horiz4Row5c.innerHTML = "";
    } else if (horiz4Text5b.value) {
        horiz4Row5b.innerHTML = horiz4Text5b.value + "&nbsp;";
        horiz4Text5b.value = "";
        horiz4Row5c.innerHTML = "";
    }
});
const horiz4Color5 = document.getElementById("horiz4Color5");
horiz4Color5.oninput = function() {
    horiz4Row5b.style.backgroundColor = horiz4Color5.value;
};

// Row 6 Customization Logic
const horiz4Text6a = document.getElementById("horiz4Text6a");
horiz4Text6a.oninput = function() {
    horiz4Row6a.innerHTML = horiz4Text6a.value;
};
const horiz4Size6 = document.getElementById("horiz4Size6");
horiz4Size6.oninput = function() {
    horiz4Row6b.style.width = ((Math.abs(horiz4Size6.value)) * .75) + "%";
    horiz4Row6c.style.width = ((75 - (Math.abs(horiz4Size6.value)) * .75)) + "%";
};
const horiz4Text6b = document.getElementById("horiz4Text6b");
horiz4Text6b.oninput = function() {
    horiz4Row6c.innerHTML = horiz4Text6b.value ? "&nbsp;" + horiz4Text6b.value : "";
};
const horiz4Label6b = document.getElementById("horiz4Label6b");
horiz4Label6b.addEventListener("click", () => {
    if (horiz4Text6b.value == "") {
        horiz4Row6b.innerHTML = "";
        horiz4Row6c.innerHTML = "";
    } else if (horiz4Text6b.value) {
        horiz4Row6b.innerHTML = horiz4Text6b.value + "&nbsp;";
        horiz4Text6b.value = "";
        horiz4Row6c.innerHTML = "";
    }
});
const horiz4Color6 = document.getElementById("horiz4Color6");
horiz4Color6.oninput = function() {
    horiz4Row6b.style.backgroundColor = horiz4Color6.value;
};

// Row 7 Customization Logic
const horiz4Text7a = document.getElementById("horiz4Text7a");
horiz4Text7a.oninput = function() {
    horiz4Row7a.innerHTML = horiz4Text7a.value;
};
const horiz4Size7 = document.getElementById("horiz4Size7");
horiz4Size7.oninput = function() {
    horiz4Row7b.style.width = ((Math.abs(horiz4Size7.value)) * .75) + "%";
    horiz4Row7c.style.width = ((75 - (Math.abs(horiz4Size7.value)) * .75)) + "%";
};
const horiz4Text7b = document.getElementById("horiz4Text7b");
horiz4Text7b.oninput = function() {
    horiz4Row7c.innerHTML = horiz4Text7b.value ? "&nbsp;" + horiz4Text7b.value : "";
};
const horiz4Label7b = document.getElementById("horiz4Label7b");
horiz4Label7b.addEventListener("click", () => {
    if (horiz4Text7b.value == "") {
        horiz4Row7b.innerHTML = "";
        horiz4Row7c.innerHTML = "";
    } else if (horiz4Text7b.value) {
        horiz4Row7b.innerHTML = horiz4Text7b.value + "&nbsp;";
        horiz4Text7b.value = "";
        horiz4Row7c.innerHTML = "";
    }
});
const horiz4Color7 = document.getElementById("horiz4Color7");
horiz4Color7.oninput = function() {
    horiz4Row7b.style.backgroundColor = horiz4Color7.value;
};

// Row 8 Customization Logic
const horiz4Text8a = document.getElementById("horiz4Text8a");
horiz4Text8a.oninput = function() {
    horiz4Row8a.innerHTML = horiz4Text8a.value;
};
const horiz4Size8 = document.getElementById("horiz4Size8");
horiz4Size8.oninput = function() {
    horiz4Row8b.style.width = ((Math.abs(horiz4Size8.value)) * .75) + "%";
    horiz4Row8c.style.width = ((75 - (Math.abs(horiz4Size8.value)) * .75)) + "%";
};
const horiz4Text8b = document.getElementById("horiz4Text8b");
horiz4Text8b.oninput = function() {
    horiz4Row8c.innerHTML = horiz4Text8b.value ? "&nbsp;" + horiz4Text8b.value : "";
};
const horiz4Label8b = document.getElementById("horiz4Label8b");
horiz4Label8b.addEventListener("click", () => {
    if (horiz4Text8b.value == "") {
        horiz4Row8b.innerHTML = "";
        horiz4Row8c.innerHTML = "";
    } else if (horiz4Text8b.value) {
        horiz4Row8b.innerHTML = horiz4Text8b.value + "&nbsp;";
        horiz4Text8b.value = "";
        horiz4Row8c.innerHTML = "";
    }
});
const horiz4Color8 = document.getElementById("horiz4Color8");
horiz4Color8.oninput = function() {
    horiz4Row8b.style.backgroundColor = horiz4Color8.value;
};

// Row 9 Customization Logic
const horiz4Text9a = document.getElementById("horiz4Text9a");
horiz4Text9a.oninput = function() {
    horiz4Row9a.innerHTML = horiz4Text9a.value;
};
const horiz4Size9 = document.getElementById("horiz4Size9");
horiz4Size9.oninput = function() {
    horiz4Row9b.style.width = ((Math.abs(horiz4Size9.value)) * .75) + "%";
    horiz4Row9c.style.width = ((75 - (Math.abs(horiz4Size9.value)) * .75)) + "%";
};
const horiz4Text9b = document.getElementById("horiz4Text9b");
horiz4Text9b.oninput = function() {
    horiz4Row9c.innerHTML = horiz4Text9b.value ? "&nbsp;" + horiz4Text9b.value : "";
};
const horiz4Label9b = document.getElementById("horiz4Label9b");
horiz4Label9b.addEventListener("click", () => {
    if (horiz4Text9b.value == "") {
        horiz4Row9b.innerHTML = "";
        horiz4Row9c.innerHTML = "";
    } else if (horiz4Text9b.value) {
        horiz4Row9b.innerHTML = horiz4Text9b.value + "&nbsp;";
        horiz4Text9b.value = "";
        horiz4Row9c.innerHTML = "";
    }
});
const horiz4Color9 = document.getElementById("horiz4Color9");
horiz4Color9.oninput = function() {
    horiz4Row9b.style.backgroundColor = horiz4Color9.value;
};

// Row 10 Customization Logic
const horiz4Text10a = document.getElementById("horiz4Text10a");
horiz4Text10a.oninput = function() {
    horiz4Row10a.innerHTML = horiz4Text10a.value;
};
const horiz4Size10 = document.getElementById("horiz4Size10");
horiz4Size10.oninput = function() {
    horiz4Row10b.style.width = ((Math.abs(horiz4Size10.value)) * .75) + "%";
    horiz4Row10c.style.width = ((75 - (Math.abs(horiz4Size10.value)) * .75)) + "%";
};
const horiz4Text10b = document.getElementById("horiz4Text10b");
horiz4Text10b.oninput = function() {
    horiz4Row10c.innerHTML = horiz4Text10b.value ? "&nbsp;" + horiz4Text10b.value : "";
};
const horiz4Label10b = document.getElementById("horiz4Label10b");
horiz4Label10b.addEventListener("click", () => {
    if (horiz4Text10b.value == "") {
        horiz4Row10b.innerHTML = "";
        horiz4Row10c.innerHTML = "";
    } else if (horiz4Text10b.value) {
        horiz4Row10b.innerHTML = horiz4Text10b.value + "&nbsp;";
        horiz4Text10b.value = "";
        horiz4Row10c.innerHTML = "";
    }
});
const horiz4Color10 = document.getElementById("horiz4Color10");
horiz4Color10.oninput = function() {
    horiz4Row10b.style.backgroundColor = horiz4Color10.value;
};

// Horizontal Chart IV Focus/Blur Events
horiz4capText.addEventListener("focus", () => { horiz4Cap.style.textShadow = shadowColor; });
horiz4capText.addEventListener("blur", () => { horiz4Cap.style.textShadow = "none"; });
horiz4subText.addEventListener("focus", () => { horiz4Sub.style.textShadow = shadowColor; });
horiz4subText.addEventListener("blur", () => { horiz4Sub.style.textShadow = "none"; });
horiz4srcText.addEventListener("focus", () => { horiz4Source.style.textShadow = shadowColor; });
horiz4srcText.addEventListener("blur", () => { horiz4Source.style.textShadow = "none"; });
horiz4Size1.addEventListener("focus", () => { horiz4Row1b.style.boxShadow = barSizeShadow; });
horiz4Size1.addEventListener("blur", () => { horiz4Row1b.style.boxShadow = "none"; });
horiz4Color1.addEventListener("focus", () => { horiz4Row1b.style.boxShadow = barColorShadow; });
horiz4Color1.addEventListener("blur", () => { horiz4Row1b.style.boxShadow = "none"; });
horiz4Text1a.addEventListener("focus", () => { horiz4Row1a.style.textShadow = shadowColor; });
horiz4Text1a.addEventListener("blur", () => { horiz4Row1a.style.textShadow = "none"; });
horiz4Text1b.addEventListener("focus", () => { horiz4Row1c.style.textShadow = shadowColor; });
horiz4Text1b.addEventListener("blur", () => { horiz4Row1c.style.textShadow = "none"; });
horiz4Size2.addEventListener("focus", () => { horiz4Row2b.style.boxShadow = barSizeShadow; });
horiz4Size2.addEventListener("blur", () => { horiz4Row2b.style.boxShadow = "none"; });
horiz4Color2.addEventListener("focus", () => { horiz4Row2b.style.boxShadow = barColorShadow; });
horiz4Color2.addEventListener("blur", () => { horiz4Row2b.style.boxShadow = "none"; });
horiz4Text2a.addEventListener("focus", () => { horiz4Row2a.style.textShadow = shadowColor; });
horiz4Text2a.addEventListener("blur", () => { horiz4Row2a.style.textShadow = "none"; });
horiz4Text2b.addEventListener("focus", () => { horiz4Row2c.style.textShadow = shadowColor; });
horiz4Text2b.addEventListener("blur", () => { horiz4Row2c.style.textShadow = "none"; });
horiz4Size3.addEventListener("focus", () => { horiz4Row3b.style.boxShadow = barSizeShadow; });
horiz4Size3.addEventListener("blur", () => { horiz4Row3b.style.boxShadow = "none"; });
horiz4Color3.addEventListener("focus", () => { horiz4Row3b.style.boxShadow = barColorShadow; });
horiz4Color3.addEventListener("blur", () => { horiz4Row3b.style.boxShadow = "none"; });
horiz4Text3a.addEventListener("focus", () => { horiz4Row3a.style.textShadow = shadowColor; });
horiz4Text3a.addEventListener("blur", () => { horiz4Row3a.style.textShadow = "none"; });
horiz4Text3b.addEventListener("focus", () => { horiz4Row3c.style.textShadow = shadowColor; });
horiz4Text3b.addEventListener("blur", () => { horiz4Row3c.style.textShadow = "none"; });
horiz4Size4.addEventListener("focus", () => { horiz4Row4b.style.boxShadow = barSizeShadow; });
horiz4Size4.addEventListener("blur", () => { horiz4Row4b.style.boxShadow = "none"; });
horiz4Color4.addEventListener("focus", () => { horiz4Row4b.style.boxShadow = barColorShadow; });
horiz4Color4.addEventListener("blur", () => { horiz4Row4b.style.boxShadow = "none"; });
horiz4Text4a.addEventListener("focus", () => { horiz4Row4a.style.textShadow = shadowColor; });
horiz4Text4a.addEventListener("blur", () => { horiz4Row4a.style.textShadow = "none"; });
horiz4Text4b.addEventListener("focus", () => { horiz4Row4c.style.textShadow = shadowColor; });
horiz4Text4b.addEventListener("blur", () => { horiz4Row4c.style.textShadow = "none"; });
horiz4Size5.addEventListener("focus", () => { horiz4Row5b.style.boxShadow = barSizeShadow; });
horiz4Size5.addEventListener("blur", () => { horiz4Row5b.style.boxShadow = "none"; });
horiz4Color5.addEventListener("focus", () => { horiz4Row5b.style.boxShadow = barColorShadow; });
horiz4Color5.addEventListener("blur", () => { horiz4Row5b.style.boxShadow = "none"; });
horiz4Text5a.addEventListener("focus", () => { horiz4Row5a.style.textShadow = shadowColor; });
horiz4Text5a.addEventListener("blur", () => { horiz4Row5a.style.textShadow = "none"; });
horiz4Text5b.addEventListener("focus", () => { horiz4Row5c.style.textShadow = shadowColor; });
horiz4Text5b.addEventListener("blur", () => { horiz4Row5c.style.textShadow = "none"; });
horiz4Size6.addEventListener("focus", () => { horiz4Row6b.style.boxShadow = barSizeShadow; });
horiz4Size6.addEventListener("blur", () => { horiz4Row6b.style.boxShadow = "none"; });
horiz4Color6.addEventListener("focus", () => { horiz4Row6b.style.boxShadow = barColorShadow; });
horiz4Color6.addEventListener("blur", () => { horiz4Row6b.style.boxShadow = "none"; });
horiz4Text6a.addEventListener("focus", () => { horiz4Row6a.style.textShadow = shadowColor; });
horiz4Text6a.addEventListener("blur", () => { horiz4Row6a.style.textShadow = "none"; });
horiz4Text6b.addEventListener("focus", () => { horiz4Row6c.style.textShadow = shadowColor; });
horiz4Text6b.addEventListener("blur", () => { horiz4Row6c.style.textShadow = "none"; });
horiz4Size7.addEventListener("focus", () => { horiz4Row7b.style.boxShadow = barSizeShadow; });
horiz4Size7.addEventListener("blur", () => { horiz4Row7b.style.boxShadow = "none"; });
horiz4Color7.addEventListener("focus", () => { horiz4Row7b.style.boxShadow = barColorShadow; });
horiz4Color7.addEventListener("blur", () => { horiz4Row7b.style.boxShadow = "none"; });
horiz4Text7a.addEventListener("focus", () => { horiz4Row7a.style.textShadow = shadowColor; });
horiz4Text7a.addEventListener("blur", () => { horiz4Row7a.style.textShadow = "none"; });
horiz4Text7b.addEventListener("focus", () => { horiz4Row7c.style.textShadow = shadowColor; });
horiz4Text7b.addEventListener("blur", () => { horiz4Row7c.style.textShadow = "none"; });
horiz4Size8.addEventListener("focus", () => { horiz4Row8b.style.boxShadow = barSizeShadow; });
horiz4Size8.addEventListener("blur", () => { horiz4Row8b.style.boxShadow = "none"; });
horiz4Color8.addEventListener("focus", () => { horiz4Row8b.style.boxShadow = barColorShadow; });
horiz4Color8.addEventListener("blur", () => { horiz4Row8b.style.boxShadow = "none"; });
horiz4Text8a.addEventListener("focus", () => { horiz4Row8a.style.textShadow = shadowColor; });
horiz4Text8a.addEventListener("blur", () => { horiz4Row8a.style.textShadow = "none"; });
horiz4Text8b.addEventListener("focus", () => { horiz4Row8c.style.textShadow = shadowColor; });
horiz4Text8b.addEventListener("blur", () => { horiz4Row8c.style.textShadow = "none"; });
horiz4Size9.addEventListener("focus", () => { horiz4Row9b.style.boxShadow = barSizeShadow; });
horiz4Size9.addEventListener("blur", () => { horiz4Row9b.style.boxShadow = "none"; });
horiz4Color9.addEventListener("focus", () => { horiz4Row9b.style.boxShadow = barColorShadow; });
horiz4Color9.addEventListener("blur", () => { horiz4Row9b.style.boxShadow = "none"; });
horiz4Text9a.addEventListener("focus", () => { horiz4Row9a.style.textShadow = shadowColor; });
horiz4Text9a.addEventListener("blur", () => { horiz4Row9a.style.textShadow = "none"; });
horiz4Text9b.addEventListener("focus", () => { horiz4Row9c.style.textShadow = shadowColor; });
horiz4Text9b.addEventListener("blur", () => { horiz4Row9c.style.textShadow = "none"; });
horiz4Size10.addEventListener("focus", () => { horiz4Row10b.style.boxShadow = barSizeShadow; });
horiz4Size10.addEventListener("blur", () => { horiz4Row10b.style.boxShadow = "none"; });
horiz4Color10.addEventListener("focus", () => { horiz4Row10b.style.boxShadow = barColorShadow; });
horiz4Color10.addEventListener("blur", () => { horiz4Row10b.style.boxShadow = "none"; });
horiz4Text10a.addEventListener("focus", () => { horiz4Row10a.style.textShadow = shadowColor; });
horiz4Text10a.addEventListener("blur", () => { horiz4Row10a.style.textShadow = "none"; });
horiz4Text10b.addEventListener("focus", () => { horiz4Row10c.style.textShadow = shadowColor; });
horiz4Text10b.addEventListener("blur", () => { horiz4Row10c.style.textShadow = "none"; });

// Generate Horiz4 HTML Chart Logic
const horiz4Weight = document.getElementById("horiz4Weight");
const horiz4Button = document.getElementById("horiz4Button");
const horiz4Output = document.getElementById("horiz4Output");
horiz4Button.addEventListener("mouseenter", () => { horiz4Output.style.opacity = ".4"; horiz4Weight.style.opacity = ".4"; } );
horiz4Button.addEventListener("mouseleave", () => { horiz4Output.style.opacity = ""; horiz4Weight.style.opacity = ""; horiz4Output.style.borderColor = ""; horiz4Weight.style.color = ""; } );
horiz4Button.addEventListener("click", () => {
    if (rowsData11.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.textContent = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    } else if (rowsData11.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2b.style.width + '; height: 54px;" height="54">' + horiz4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2c.style.width + '; height: 54px;" height="54">' + horiz4Row2c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.textContent = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    } else if (rowsData11.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2b.style.width + '; height: 54px;" height="54">' + horiz4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2c.style.width + '; height: 54px;" height="54">' + horiz4Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3b.style.width + '; height: 54px;" height="54">' + horiz4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3c.style.width + '; height: 54px;" height="54">' + horiz4Row3c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.textContent = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    } else if (rowsData11.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2b.style.width + '; height: 54px;" height="54">' + horiz4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2c.style.width + '; height: 54px;" height="54">' + horiz4Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3b.style.width + '; height: 54px;" height="54">' + horiz4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3c.style.width + '; height: 54px;" height="54">' + horiz4Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4b.style.width + '; height: 54px;" height="54">' + horiz4Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4c.style.width + '; height: 54px;" height="54">' + horiz4Row4c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.textContent = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    } else if (rowsData11.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2b.style.width + '; height: 54px;" height="54">' + horiz4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2c.style.width + '; height: 54px;" height="54">' + horiz4Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3b.style.width + '; height: 54px;" height="54">' + horiz4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3c.style.width + '; height: 54px;" height="54">' + horiz4Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4b.style.width + '; height: 54px;" height="54">' + horiz4Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4c.style.width + '; height: 54px;" height="54">' + horiz4Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5b.style.width + '; height: 54px;" height="54">' + horiz4Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5c.style.width + '; height: 54px;" height="54">' + horiz4Row5c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.textContent = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    } else if (rowsData11.value === "6") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2b.style.width + '; height: 54px;" height="54">' + horiz4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2c.style.width + '; height: 54px;" height="54">' + horiz4Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3b.style.width + '; height: 54px;" height="54">' + horiz4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3c.style.width + '; height: 54px;" height="54">' + horiz4Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4b.style.width + '; height: 54px;" height="54">' + horiz4Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4c.style.width + '; height: 54px;" height="54">' + horiz4Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5b.style.width + '; height: 54px;" height="54">' + horiz4Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5c.style.width + '; height: 54px;" height="54">' + horiz4Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6b.style.width + '; height: 54px;" height="54">' + horiz4Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6c.style.width + '; height: 54px;" height="54">' + horiz4Row6c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.textContent = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    } else if (rowsData11.value === "7") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2b.style.width + '; height: 54px;" height="54">' + horiz4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2c.style.width + '; height: 54px;" height="54">' + horiz4Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3b.style.width + '; height: 54px;" height="54">' + horiz4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3c.style.width + '; height: 54px;" height="54">' + horiz4Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4b.style.width + '; height: 54px;" height="54">' + horiz4Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4c.style.width + '; height: 54px;" height="54">' + horiz4Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5b.style.width + '; height: 54px;" height="54">' + horiz4Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5c.style.width + '; height: 54px;" height="54">' + horiz4Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6b.style.width + '; height: 54px;" height="54">' + horiz4Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6c.style.width + '; height: 54px;" height="54">' + horiz4Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row7b.style.width + '; height: 54px;" height="54">' + horiz4Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row7c.style.width + '; height: 54px;" height="54">' + horiz4Row7c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.textContent = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    } else if (rowsData11.value === "8") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2b.style.width + '; height: 54px;" height="54">' + horiz4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2c.style.width + '; height: 54px;" height="54">' + horiz4Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3b.style.width + '; height: 54px;" height="54">' + horiz4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3c.style.width + '; height: 54px;" height="54">' + horiz4Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4b.style.width + '; height: 54px;" height="54">' + horiz4Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4c.style.width + '; height: 54px;" height="54">' + horiz4Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5b.style.width + '; height: 54px;" height="54">' + horiz4Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5c.style.width + '; height: 54px;" height="54">' + horiz4Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6b.style.width + '; height: 54px;" height="54">' + horiz4Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6c.style.width + '; height: 54px;" height="54">' + horiz4Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row7b.style.width + '; height: 54px;" height="54">' + horiz4Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row7c.style.width + '; height: 54px;" height="54">' + horiz4Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color8.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row8b.style.width + '; height: 54px;" height="54">' + horiz4Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row8c.style.width + '; height: 54px;" height="54">' + horiz4Row8c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.textContent = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    } else if (rowsData11.value === "9") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2b.style.width + '; height: 54px;" height="54">' + horiz4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2c.style.width + '; height: 54px;" height="54">' + horiz4Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3b.style.width + '; height: 54px;" height="54">' + horiz4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3c.style.width + '; height: 54px;" height="54">' + horiz4Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4b.style.width + '; height: 54px;" height="54">' + horiz4Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4c.style.width + '; height: 54px;" height="54">' + horiz4Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5b.style.width + '; height: 54px;" height="54">' + horiz4Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5c.style.width + '; height: 54px;" height="54">' + horiz4Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6b.style.width + '; height: 54px;" height="54">' + horiz4Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6c.style.width + '; height: 54px;" height="54">' + horiz4Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row7b.style.width + '; height: 54px;" height="54">' + horiz4Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row7c.style.width + '; height: 54px;" height="54">' + horiz4Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color8.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row8b.style.width + '; height: 54px;" height="54">' + horiz4Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row8c.style.width + '; height: 54px;" height="54">' + horiz4Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color9.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row9b.style.width + '; height: 54px;" height="54">' + horiz4Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row9c.style.width + '; height: 54px;" height="54">' + horiz4Row9c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.textContent = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    } else if (rowsData11.value === "10") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2b.style.width + '; height: 54px;" height="54">' + horiz4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2c.style.width + '; height: 54px;" height="54">' + horiz4Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3b.style.width + '; height: 54px;" height="54">' + horiz4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3c.style.width + '; height: 54px;" height="54">' + horiz4Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4b.style.width + '; height: 54px;" height="54">' + horiz4Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4c.style.width + '; height: 54px;" height="54">' + horiz4Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5b.style.width + '; height: 54px;" height="54">' + horiz4Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5c.style.width + '; height: 54px;" height="54">' + horiz4Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6b.style.width + '; height: 54px;" height="54">' + horiz4Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6c.style.width + '; height: 54px;" height="54">' + horiz4Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row7b.style.width + '; height: 54px;" height="54">' + horiz4Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row7c.style.width + '; height: 54px;" height="54">' + horiz4Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color8.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row8b.style.width + '; height: 54px;" height="54">' + horiz4Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row8c.style.width + '; height: 54px;" height="54">' + horiz4Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color9.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row9b.style.width + '; height: 54px;" height="54">' + horiz4Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row9c.style.width + '; height: 54px;" height="54">' + horiz4Row9c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row10a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color10.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row10b.style.width + '; height: 54px;" height="54">' + horiz4Row10b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row10c.style.width + '; height: 54px;" height="54">' + horiz4Row10c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.textContent = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    }
    horiz4Output.style.opacity = "";
    horiz4Weight.style.opacity = "";
    horiz4Output.style.borderColor = "#166dfc";
    horiz4Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(horiz4Output.value);
});
horiz4Output.addEventListener("click", () => {
    horiz4Output.select();
});





// Horizontal Chart V Row Selection
const horiz5Bars = document.getElementsByClassName("horiz5Bars");
const horiz5Controls = document.getElementsByClassName("horiz5Controls");
const rowsData24 = document.getElementById("rowsData24");
rowsData24.addEventListener("change", () => {
    for (var i = 0; i < horiz5Controls.length; i++) {
        horiz5Controls[i].style.display = "none";
        horiz5Bars[i].style.display = "none";
        for (var x = 0; x < rowsData24.value; x++) {
            horiz5Controls[x].style.display = "block";
            horiz5Bars[x].style.display = "block";
        }
    }
});

// Horizontal Chart V Add Divider
const horiz5DivNodes1 = document.querySelectorAll("tr.horiz5Bars");
const horiz5Div = document.getElementById("horiz5Div");
window.addEventListener("load", () => { // Adds "none" to border-top on load
    for (var i = 1; i < horiz5DivNodes1.length; i++) {
        horiz5DivNodes1[i].firstElementChild.style.borderTop = "none";
    }
});
let horiz5borderTop = "";
horiz5Div.addEventListener("click", () => { // Toggles chart data bar dividers in chart preview
    for (var i = 1; i < horiz5DivNodes1.length; i++) {
        horiz5DivNodes1[i].firstElementChild.style.borderTop = horiz5Div.checked ? "1px solid #e3e3e3" : "none";
    }
    horiz5borderTop = horiz5Div.checked ? "border-top: 1px solid #e3e3e3; " : ""; // Adds border-top to output code if checked
});

// Horizontal Chart V Caption
let horiz5TopBarSpace = "0 0 8px 0";
let horiz5csCode = "";
const horiz5Cap = document.getElementById("horiz5Cap"); // Caption or chart title
const horiz5capText = document.getElementById("horiz5capText"); // Caption or chart title text
horiz5capText.oninput = function() {
    horiz5Cap.innerHTML = horiz5capText.value;
    if (horiz5capText.value == "" && horiz5subText.value == "") {
        horiz5Bars[0].firstElementChild.style.padding = "0 0 8px 0"; // Targets the first data bar below caption/subtitle text
        horiz5TopBarSpace = "0 0 8px 0"; // Padding for first data bar below caption/subtitle text for output code
        horiz5Cap.style.marginBottom = "0";
        return horiz5csCode = "";
    } else if (horiz5capText.value == "" && horiz5subText.value) {
        horiz5Bars[0].firstElementChild.style.padding = "20px 0 8px 0";
        horiz5TopBarSpace = "20px 0 8px 0";
        horiz5Cap.style.marginBottom = "0";
        return horiz5csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz5Sub.innerHTML + '</td> </tr>';
    } else if (horiz5capText.value && horiz5subText.value == "") {
        horiz5Bars[0].firstElementChild.style.padding = "0 0 8px 0";
        horiz5TopBarSpace = "0 0 8px 0";
        horiz5Cap.style.marginBottom = "20px";
        return horiz5csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + horiz5Cap.innerHTML + '</caption>';
    } else if (horiz5capText.value && horiz5subText.value) {
        horiz5Bars[0].firstElementChild.style.padding = "20px 0 8px 0";
        horiz5TopBarSpace = "20px 0 8px 0";
        horiz5Cap.style.marginBottom = "4px";
        return horiz5csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + horiz5Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz5Sub.innerHTML + '</td> </tr>';
    }
};
// Horizontal Chart V Subtitle
const horiz5Sub = document.getElementById("horiz5Sub"); // Chart subtitle
const horiz5subText = document.getElementById("horiz5subText"); // Chart subtitle text
horiz5subText.oninput = function() {
    horiz5Sub.innerHTML = horiz5subText.value;
    if (horiz5subText.value == "" && horiz5capText.value == "") {
        horiz5Bars[0].firstElementChild.style.padding = "0 0 8px 0";
        horiz5TopBarSpace = "0 0 8px 0";
        horiz5Cap.style.marginBottom = "0";
        return horiz5csCode = "";
    } else if (horiz5subText.value == "" && horiz5capText.value) {
        horiz5Bars[0].firstElementChild.style.padding = "0 0 8px 0";
        horiz5TopBarSpace = "0 0 8px 0";
        horiz5Cap.style.marginBottom = "20px";
        return horiz5csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + horiz5Cap.innerHTML + '</caption>';
    } else if (horiz5subText.value && horiz5capText.value == "") {
        horiz5Bars[0].firstElementChild.style.padding = "20px 0 8px 0";
        horiz5TopBarSpace = "20px 0 8px 0";
        horiz5Cap.style.marginBottom = "0";
        return horiz5csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz5Sub.innerHTML + '</td> </tr>';
    } else if (horiz5subText.value && horiz5capText.value) {
        horiz5Bars[0].firstElementChild.style.padding = "20px 0 8px 0";
        horiz5TopBarSpace = "20px 0 8px 0";
        horiz5Cap.style.marginBottom = "4px";
        return horiz5csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + horiz5Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz5Sub.innerHTML + '</td> </tr>';
    }
};
// Horizontal Chart V Source
let horiz5srcCode = "";
const horiz5Source = document.getElementById("horiz5Source"); // Chart source
const horiz5srcText = document.getElementById("horiz5srcText"); // Chart source text
horiz5srcText.oninput = function() {
    horiz5Source.innerHTML = horiz5srcText.value;
    horiz5Source.style.paddingTop = horiz5srcText.value ? "12px" : "0";
    horiz5srcCode = horiz5srcText.value ? '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 12px; text-align: left;">' + horiz5Source.innerHTML + '</td></tr>' : "";
};

// Horizontal Chart V Color Picker
const horiz5colorPick = document.getElementById("horiz5colorPick");
horiz5colorPick.addEventListener("change", (evt) => {
    horiz5Row1b.style.backgroundColor = evt.detail.hex;
    horiz5Color1.value = evt.detail.hex;
    horiz5Row2b.style.backgroundColor = evt.detail.hex;
    horiz5Color2.value = evt.detail.hex;
    horiz5Row3b.style.backgroundColor = evt.detail.hex;
    horiz5Color3.value = evt.detail.hex;
    horiz5Row4b.style.backgroundColor = evt.detail.hex;
    horiz5Color4.value = evt.detail.hex;
    horiz5Row5b.style.backgroundColor = evt.detail.hex;
    horiz5Color5.value = evt.detail.hex;
    horiz5Row6b.style.backgroundColor = evt.detail.hex;
    horiz5Color6.value = evt.detail.hex;
    horiz5Row7b.style.backgroundColor = evt.detail.hex;
    horiz5Color7.value = evt.detail.hex;
    horiz5Row8b.style.backgroundColor = evt.detail.hex;
    horiz5Color8.value = evt.detail.hex;
    horiz5Row9b.style.backgroundColor = evt.detail.hex;
    horiz5Color9.value = evt.detail.hex;
    horiz5Row10b.style.backgroundColor = evt.detail.hex;
    horiz5Color10.value = evt.detail.hex;
});

// Horizontal Chart V Row Customization Logic
const horiz5Row1a = document.getElementById("horiz5Row1a");
const horiz5Row1b = document.getElementById("horiz5Row1b");
const horiz5Row1c = document.getElementById("horiz5Row1c");
const horiz5Row2a = document.getElementById("horiz5Row2a");
const horiz5Row2b = document.getElementById("horiz5Row2b");
const horiz5Row2c = document.getElementById("horiz5Row2c");
const horiz5Row3a = document.getElementById("horiz5Row3a");
const horiz5Row3b = document.getElementById("horiz5Row3b");
const horiz5Row3c = document.getElementById("horiz5Row3c");
const horiz5Row4a = document.getElementById("horiz5Row4a");
const horiz5Row4b = document.getElementById("horiz5Row4b");
const horiz5Row4c = document.getElementById("horiz5Row4c");
const horiz5Row5a = document.getElementById("horiz5Row5a");
const horiz5Row5b = document.getElementById("horiz5Row5b");
const horiz5Row5c = document.getElementById("horiz5Row5c");
const horiz5Row6a = document.getElementById("horiz5Row6a");
const horiz5Row6b = document.getElementById("horiz5Row6b");
const horiz5Row6c = document.getElementById("horiz5Row6c");
const horiz5Row7a = document.getElementById("horiz5Row7a");
const horiz5Row7b = document.getElementById("horiz5Row7b");
const horiz5Row7c = document.getElementById("horiz5Row7c");
const horiz5Row8a = document.getElementById("horiz5Row8a");
const horiz5Row8b = document.getElementById("horiz5Row8b");
const horiz5Row8c = document.getElementById("horiz5Row8c");
const horiz5Row9a = document.getElementById("horiz5Row9a");
const horiz5Row9b = document.getElementById("horiz5Row9b");
const horiz5Row9c = document.getElementById("horiz5Row9c");
const horiz5Row10a = document.getElementById("horiz5Row10a");
const horiz5Row10b = document.getElementById("horiz5Row10b");
const horiz5Row10c = document.getElementById("horiz5Row10c");

// Row 1 Customization Logic
const horiz5Text1a = document.getElementById("horiz5Text1a");
horiz5Text1a.oninput = function() {
    if (horiz5Text1a.value.startsWith("http") && horiz5Text1a.value.endsWith(".png") || horiz5Text1a.value.endsWith(".jpg") || horiz5Text1a.value.endsWith(".gif")) {
        horiz5Row1a.innerHTML = `<img src="` + horiz5Text1a.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 32px;" alt="">`;
    } else {
        horiz5Row1a.innerHTML = horiz5Text1a.value;
    }
};
const horiz5Size1 = document.getElementById("horiz5Size1");
horiz5Size1.oninput = function() {
    horiz5Row1b.style.width = ((Math.abs(horiz5Size1.value)) * .75) + "%";
    horiz5Row1c.style.width = ((75 - (Math.abs(horiz5Size1.value)) * .75)) + "%";
};
const horiz5Text1b = document.getElementById("horiz5Text1b");
horiz5Text1b.oninput = function() {
    if (horiz5Text1b.value.startsWith("http") && horiz5Text1b.value.endsWith(".png") || horiz5Text1b.value.endsWith(".jpg") || horiz5Text1b.value.endsWith(".gif")) {
        horiz5Row1c.innerHTML = "&nbsp;" + `<img src="` + horiz5Text1b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">`;
    } else {
        horiz5Row1c.innerHTML = "&nbsp;" + horiz5Text1b.value;
    }
};
const horiz5Label1b = document.getElementById("horiz5Label1b");
horiz5Label1b.addEventListener("click", () => {
    if (horiz5Text1b.value == "") {
        horiz5Row1b.innerHTML = "";
        horiz5Row1c.innerHTML = "";
    } else if (horiz5Text1b.value.includes(".png") || horiz5Text1b.value.includes(".jpg") || horiz5Text1b.value.includes(".gif")) {
        horiz5Row1b.innerHTML = `<img src="` + horiz5Text1b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">` + "&nbsp;" ;
        horiz5Text1b.value = "";
        horiz5Row1c.innerHTML = "";
    } else if (horiz5Text1b.value) {
        horiz5Row1b.innerHTML = horiz5Text1b.value + "&nbsp;";
        horiz5Text1b.value = "";
        horiz5Row1c.innerHTML = "";
    }
});
const horiz5Color1 = document.getElementById("horiz5Color1");
horiz5Color1.oninput = function() {
    horiz5Row1b.style.backgroundColor = horiz5Color1.value;
};

// Row 2 Customization Logic
const horiz5Text2a = document.getElementById("horiz5Text2a");
horiz5Text2a.oninput = function() {
    if (horiz5Text2a.value.startsWith("http") && horiz5Text2a.value.endsWith(".png") || horiz5Text2a.value.endsWith(".jpg") || horiz5Text2a.value.endsWith(".gif")) {
        horiz5Row2a.innerHTML = `<img src="` + horiz5Text2a.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 32px;" alt="">`;
    } else {
        horiz5Row2a.innerHTML = horiz5Text2a.value;
    }
};
const horiz5Size2 = document.getElementById("horiz5Size2");
horiz5Size2.oninput = function() {
    horiz5Row2b.style.width = ((Math.abs(horiz5Size2.value)) * .75) + "%";
    horiz5Row2c.style.width = ((75 - (Math.abs(horiz5Size2.value)) * .75)) + "%";
};
const horiz5Text2b = document.getElementById("horiz5Text2b");
horiz5Text2b.oninput = function() {
    if (horiz5Text2b.value.startsWith("http") && horiz5Text2b.value.endsWith(".png") || horiz5Text2b.value.endsWith(".jpg") || horiz5Text2b.value.endsWith(".gif")) {
        horiz5Row2c.innerHTML = "&nbsp;" + `<img src="` + horiz5Text2b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">`;
    } else {
        horiz5Row2c.innerHTML = "&nbsp;" + horiz5Text2b.value;
    }
};
const horiz5Label2b = document.getElementById("horiz5Label2b");
horiz5Label2b.addEventListener("click", () => {
    if (horiz5Text2b.value == "") {
        horiz5Row2b.innerHTML = "";
        horiz5Row2c.innerHTML = "";
    } else if (horiz5Text2b.value.includes(".png") || horiz5Text2b.value.includes(".jpg") || horiz5Text2b.value.includes(".gif")) {
        horiz5Row2b.innerHTML = `<img src="` + horiz5Text2b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">` + "&nbsp;" ;
        horiz5Text2b.value = "";
        horiz5Row2c.innerHTML = "";
    } else if (horiz5Text2b.value) {
        horiz5Row2b.innerHTML = horiz5Text2b.value + "&nbsp;";
        horiz5Text2b.value = "";
        horiz5Row2c.innerHTML = "";
    }
});
const horiz5Color2 = document.getElementById("horiz5Color2");
horiz5Color2.oninput = function() {
    horiz5Row2b.style.backgroundColor = horiz5Color2.value;
};

// Row 3 Customization Logic
const horiz5Text3a = document.getElementById("horiz5Text3a");
horiz5Text3a.oninput = function() {
    if (horiz5Text3a.value.startsWith("http") && horiz5Text3a.value.endsWith(".png") || horiz5Text3a.value.endsWith(".jpg") || horiz5Text3a.value.endsWith(".gif")) {
        horiz5Row3a.innerHTML = `<img src="` + horiz5Text3a.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 32px;" alt="">`;
    } else {
        horiz5Row3a.innerHTML = horiz5Text3a.value;
    }
};
const horiz5Size3 = document.getElementById("horiz5Size3");
horiz5Size3.oninput = function() {
    horiz5Row3b.style.width = ((Math.abs(horiz5Size3.value)) * .75) + "%";
    horiz5Row3c.style.width = ((75 - (Math.abs(horiz5Size3.value)) * .75)) + "%";
};
const horiz5Text3b = document.getElementById("horiz5Text3b");
horiz5Text3b.oninput = function() {
    if (horiz5Text3b.value.startsWith("http") && horiz5Text3b.value.endsWith(".png") || horiz5Text3b.value.endsWith(".jpg") || horiz5Text3b.value.endsWith(".gif")) {
        horiz5Row3c.innerHTML = "&nbsp;" + `<img src="` + horiz5Text3b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">`;
    } else {
        horiz5Row3c.innerHTML = "&nbsp;" + horiz5Text3b.value;
    }
};
const horiz5Label3b = document.getElementById("horiz5Label3b");
horiz5Label3b.addEventListener("click", () => {
    if (horiz5Text3b.value == "") {
        horiz5Row3b.innerHTML = "";
        horiz5Row3c.innerHTML = "";
    } else if (horiz5Text3b.value.includes(".png") || horiz5Text3b.value.includes(".jpg") || horiz5Text3b.value.includes(".gif")) {
        horiz5Row3b.innerHTML = `<img src="` + horiz5Text3b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">` + "&nbsp;" ;
        horiz5Text3b.value = "";
        horiz5Row3c.innerHTML = "";
    } else if (horiz5Text3b.value) {
        horiz5Row3b.innerHTML = horiz5Text3b.value + "&nbsp;";
        horiz5Text3b.value = "";
        horiz5Row3c.innerHTML = "";
    }
});
const horiz5Color3 = document.getElementById("horiz5Color3");
horiz5Color3.oninput = function() {
    horiz5Row3b.style.backgroundColor = horiz5Color3.value;
};

// Row 4 Customization Logic
const horiz5Text4a = document.getElementById("horiz5Text4a");
horiz5Text4a.oninput = function() {
    if (horiz5Text4a.value.startsWith("http") && horiz5Text4a.value.endsWith(".png") || horiz5Text4a.value.endsWith(".jpg") || horiz5Text4a.value.endsWith(".gif")) {
        horiz5Row4a.innerHTML = `<img src="` + horiz5Text4a.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 32px;" alt="">`;
    } else {
        horiz5Row4a.innerHTML = horiz5Text4a.value;
    }
};
const horiz5Size4 = document.getElementById("horiz5Size4");
horiz5Size4.oninput = function() {
    horiz5Row4b.style.width = ((Math.abs(horiz5Size4.value)) * .75) + "%";
    horiz5Row4c.style.width = ((75 - (Math.abs(horiz5Size4.value)) * .75)) + "%";
};
const horiz5Text4b = document.getElementById("horiz5Text4b");
horiz5Text4b.oninput = function() {
    if (horiz5Text4b.value.startsWith("http") && horiz5Text4b.value.endsWith(".png") || horiz5Text4b.value.endsWith(".jpg") || horiz5Text4b.value.endsWith(".gif")) {
        horiz5Row4c.innerHTML = "&nbsp;" + `<img src="` + horiz5Text4b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">`;
    } else {
        horiz5Row4c.innerHTML = "&nbsp;" + horiz5Text4b.value;
    }
};
const horiz5Label4b = document.getElementById("horiz5Label4b");
horiz5Label4b.addEventListener("click", () => {
    if (horiz5Text4b.value == "") {
        horiz5Row4b.innerHTML = "";
        horiz5Row4c.innerHTML = "";
    } else if (horiz5Text4b.value.includes(".png") || horiz5Text4b.value.includes(".jpg") || horiz5Text4b.value.includes(".gif")) {
        horiz5Row4b.innerHTML = `<img src="` + horiz5Text4b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">` + "&nbsp;" ;
        horiz5Text4b.value = "";
        horiz5Row4c.innerHTML = "";
    } else if (horiz5Text4b.value) {
        horiz5Row4b.innerHTML = horiz5Text4b.value + "&nbsp;";
        horiz5Text4b.value = "";
        horiz5Row4c.innerHTML = "";
    }
});
const horiz5Color4 = document.getElementById("horiz5Color4");
horiz5Color4.oninput = function() {
    horiz5Row4b.style.backgroundColor = horiz5Color4.value;
};

// Row 5 Customization Logic
const horiz5Text5a = document.getElementById("horiz5Text5a");
horiz5Text5a.oninput = function() {
    if (horiz5Text5a.value.startsWith("http") && horiz5Text5a.value.endsWith(".png") || horiz5Text5a.value.endsWith(".jpg") || horiz5Text5a.value.endsWith(".gif")) {
        horiz5Row5a.innerHTML = `<img src="` + horiz5Text5a.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 32px;" alt="">`;
    } else {
        horiz5Row5a.innerHTML = horiz5Text5a.value;
    }
};
const horiz5Size5 = document.getElementById("horiz5Size5");
horiz5Size5.oninput = function() {
    horiz5Row5b.style.width = ((Math.abs(horiz5Size5.value)) * .75) + "%";
    horiz5Row5c.style.width = ((75 - (Math.abs(horiz5Size5.value)) * .75)) + "%";
};
const horiz5Text5b = document.getElementById("horiz5Text5b");
horiz5Text5b.oninput = function() {
    if (horiz5Text5b.value.startsWith("http") && horiz5Text5b.value.endsWith(".png") || horiz5Text5b.value.endsWith(".jpg") || horiz5Text5b.value.endsWith(".gif")) {
        horiz5Row5c.innerHTML = "&nbsp;" + `<img src="` + horiz5Text5b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">`;
    } else {
        horiz5Row5c.innerHTML = "&nbsp;" + horiz5Text5b.value;
    }
};
const horiz5Label5b = document.getElementById("horiz5Label5b");
horiz5Label5b.addEventListener("click", () => {
    if (horiz5Text5b.value == "") {
        horiz5Row5b.innerHTML = "";
        horiz5Row5c.innerHTML = "";
    } else if (horiz5Text5b.value.includes(".png") || horiz5Text5b.value.includes(".jpg") || horiz5Text5b.value.includes(".gif")) {
        horiz5Row5b.innerHTML = `<img src="` + horiz5Text5b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">` + "&nbsp;" ;
        horiz5Text5b.value = "";
        horiz5Row5c.innerHTML = "";
    } else if (horiz5Text5b.value) {
        horiz5Row5b.innerHTML = horiz5Text5b.value + "&nbsp;";
        horiz5Text5b.value = "";
        horiz5Row5c.innerHTML = "";
    }
});
const horiz5Color5 = document.getElementById("horiz5Color5");
horiz5Color5.oninput = function() {
    horiz5Row5b.style.backgroundColor = horiz5Color5.value;
};

// Row 6 Customization Logic
const horiz5Text6a = document.getElementById("horiz5Text6a");
horiz5Text6a.oninput = function() {
    if (horiz5Text6a.value.startsWith("http") && horiz5Text6a.value.endsWith(".png") || horiz5Text6a.value.endsWith(".jpg") || horiz5Text6a.value.endsWith(".gif")) {
        horiz5Row6a.innerHTML = `<img src="` + horiz5Text6a.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 32px;" alt="">`;
    } else {
        horiz5Row6a.innerHTML = horiz5Text6a.value;
    }
};
const horiz5Size6 = document.getElementById("horiz5Size6");
horiz5Size6.oninput = function() {
    horiz5Row6b.style.width = ((Math.abs(horiz5Size6.value)) * .75) + "%";
    horiz5Row6c.style.width = ((75 - (Math.abs(horiz5Size6.value)) * .75)) + "%";
};
const horiz5Text6b = document.getElementById("horiz5Text6b");
horiz5Text6b.oninput = function() {
    if (horiz5Text6b.value.startsWith("http") && horiz5Text6b.value.endsWith(".png") || horiz5Text6b.value.endsWith(".jpg") || horiz5Text6b.value.endsWith(".gif")) {
        horiz5Row6c.innerHTML = "&nbsp;" + `<img src="` + horiz5Text6b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">`;
    } else {
        horiz5Row6c.innerHTML = "&nbsp;" + horiz5Text6b.value;
    }
};
const horiz5Label6b = document.getElementById("horiz5Label6b");
horiz5Label6b.addEventListener("click", () => {
    if (horiz5Text6b.value == "") {
        horiz5Row6b.innerHTML = "";
        horiz5Row6c.innerHTML = "";
    } else if (horiz5Text6b.value.includes(".png") || horiz5Text6b.value.includes(".jpg") || horiz5Text6b.value.includes(".gif")) {
        horiz5Row6b.innerHTML = `<img src="` + horiz5Text6b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">` + "&nbsp;" ;
        horiz5Text6b.value = "";
        horiz5Row6c.innerHTML = "";
    } else if (horiz5Text6b.value) {
        horiz5Row6b.innerHTML = horiz5Text6b.value + "&nbsp;";
        horiz5Text6b.value = "";
        horiz5Row6c.innerHTML = "";
    }
});
const horiz5Color6 = document.getElementById("horiz5Color6");
horiz5Color6.oninput = function() {
    horiz5Row6b.style.backgroundColor = horiz5Color6.value;
};

// Row 7 Customization Logic
const horiz5Text7a = document.getElementById("horiz5Text7a");
horiz5Text7a.oninput = function() {
    if (horiz5Text7a.value.startsWith("http") && horiz5Text7a.value.endsWith(".png") || horiz5Text7a.value.endsWith(".jpg") || horiz5Text7a.value.endsWith(".gif")) {
        horiz5Row7a.innerHTML = `<img src="` + horiz5Text7a.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 32px;" alt="">`;
    } else {
        horiz5Row7a.innerHTML = horiz5Text7a.value;
    }
};
const horiz5Size7 = document.getElementById("horiz5Size7");
horiz5Size7.oninput = function() {
    horiz5Row7b.style.width = ((Math.abs(horiz5Size7.value)) * .75) + "%";
    horiz5Row7c.style.width = ((75 - (Math.abs(horiz5Size7.value)) * .75)) + "%";
};
const horiz5Text7b = document.getElementById("horiz5Text7b");
horiz5Text7b.oninput = function() {
    if (horiz5Text7b.value.startsWith("http") && horiz5Text7b.value.endsWith(".png") || horiz5Text7b.value.endsWith(".jpg") || horiz5Text7b.value.endsWith(".gif")) {
        horiz5Row7c.innerHTML = "&nbsp;" + `<img src="` + horiz5Text7b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">`;
    } else {
        horiz5Row7c.innerHTML = "&nbsp;" + horiz5Text7b.value;
    }
};
const horiz5Label7b = document.getElementById("horiz5Label7b");
horiz5Label7b.addEventListener("click", () => {
    if (horiz5Text7b.value == "") {
        horiz5Row7b.innerHTML = "";
        horiz5Row7c.innerHTML = "";
    } else if (horiz5Text7b.value.includes(".png") || horiz5Text7b.value.includes(".jpg") || horiz5Text7b.value.includes(".gif")) {
        horiz5Row7b.innerHTML = `<img src="` + horiz5Text7b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">` + "&nbsp;" ;
        horiz5Text7b.value = "";
        horiz5Row7c.innerHTML = "";
    } else if (horiz5Text7b.value) {
        horiz5Row7b.innerHTML = horiz5Text7b.value + "&nbsp;";
        horiz5Text7b.value = "";
        horiz5Row7c.innerHTML = "";
    }
});
const horiz5Color7 = document.getElementById("horiz5Color7");
horiz5Color7.oninput = function() {
    horiz5Row7b.style.backgroundColor = horiz5Color7.value;
};

// Row 8 Customization Logic
const horiz5Text8a = document.getElementById("horiz5Text8a");
horiz5Text8a.oninput = function() {
    if (horiz5Text8a.value.startsWith("http") && horiz5Text8a.value.endsWith(".png") || horiz5Text8a.value.endsWith(".jpg") || horiz5Text8a.value.endsWith(".gif")) {
        horiz5Row8a.innerHTML = `<img src="` + horiz5Text8a.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 32px;" alt="">`;
    } else {
        horiz5Row8a.innerHTML = horiz5Text8a.value;
    }
};
const horiz5Size8 = document.getElementById("horiz5Size8");
horiz5Size8.oninput = function() {
    horiz5Row8b.style.width = ((Math.abs(horiz5Size8.value)) * .75) + "%";
    horiz5Row8c.style.width = ((75 - (Math.abs(horiz5Size8.value)) * .75)) + "%";
};
const horiz5Text8b = document.getElementById("horiz5Text8b");
horiz5Text8b.oninput = function() {
    if (horiz5Text8b.value.startsWith("http") && horiz5Text8b.value.endsWith(".png") || horiz5Text8b.value.endsWith(".jpg") || horiz5Text8b.value.endsWith(".gif")) {
        horiz5Row8c.innerHTML = "&nbsp;" + `<img src="` + horiz5Text8b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">`;
    } else {
        horiz5Row8c.innerHTML = "&nbsp;" + horiz5Text8b.value;
    }
};
const horiz5Label8b = document.getElementById("horiz5Label8b");
horiz5Label8b.addEventListener("click", () => {
    if (horiz5Text8b.value == "") {
        horiz5Row8b.innerHTML = "";
        horiz5Row8c.innerHTML = "";
    } else if (horiz5Text8b.value.includes(".png") || horiz5Text8b.value.includes(".jpg") || horiz5Text8b.value.includes(".gif")) {
        horiz5Row8b.innerHTML = `<img src="` + horiz5Text8b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">` + "&nbsp;" ;
        horiz5Text8b.value = "";
        horiz5Row8c.innerHTML = "";
    } else if (horiz5Text8b.value) {
        horiz5Row8b.innerHTML = horiz5Text8b.value + "&nbsp;";
        horiz5Text8b.value = "";
        horiz5Row8c.innerHTML = "";
    }
});
const horiz5Color8 = document.getElementById("horiz5Color8");
horiz5Color8.oninput = function() {
    horiz5Row8b.style.backgroundColor = horiz5Color8.value;
};

// Row 9 Customization Logic
const horiz5Text9a = document.getElementById("horiz5Text9a");
horiz5Text9a.oninput = function() {
    if (horiz5Text9a.value.startsWith("http") && horiz5Text9a.value.endsWith(".png") || horiz5Text9a.value.endsWith(".jpg") || horiz5Text9a.value.endsWith(".gif")) {
        horiz5Row9a.innerHTML = `<img src="` + horiz5Text9a.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 32px;" alt="">`;
    } else {
        horiz5Row9a.innerHTML = horiz5Text9a.value;
    }
};
const horiz5Size9 = document.getElementById("horiz5Size9");
horiz5Size9.oninput = function() {
    horiz5Row9b.style.width = ((Math.abs(horiz5Size9.value)) * .75) + "%";
    horiz5Row9c.style.width = ((75 - (Math.abs(horiz5Size9.value)) * .75)) + "%";
};
const horiz5Text9b = document.getElementById("horiz5Text9b");
horiz5Text9b.oninput = function() {
    if (horiz5Text9b.value.startsWith("http") && horiz5Text9b.value.endsWith(".png") || horiz5Text9b.value.endsWith(".jpg") || horiz5Text9b.value.endsWith(".gif")) {
        horiz5Row9c.innerHTML = "&nbsp;" + `<img src="` + horiz5Text9b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">`;
    } else {
        horiz5Row9c.innerHTML = "&nbsp;" + horiz5Text9b.value;
    }
};
const horiz5Label9b = document.getElementById("horiz5Label9b");
horiz5Label9b.addEventListener("click", () => {
    if (horiz5Text9b.value == "") {
        horiz5Row9b.innerHTML = "";
        horiz5Row9c.innerHTML = "";
    } else if (horiz5Text9b.value.includes(".png") || horiz5Text9b.value.includes(".jpg") || horiz5Text9b.value.includes(".gif")) {
        horiz5Row9b.innerHTML = `<img src="` + horiz5Text9b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">` + "&nbsp;" ;
        horiz5Text9b.value = "";
        horiz5Row9c.innerHTML = "";
    } else if (horiz5Text9b.value) {
        horiz5Row9b.innerHTML = horiz5Text9b.value + "&nbsp;";
        horiz5Text9b.value = "";
        horiz5Row9c.innerHTML = "";
    }
});
const horiz5Color9 = document.getElementById("horiz5Color9");
horiz5Color9.oninput = function() {
    horiz5Row9b.style.backgroundColor = horiz5Color9.value;
};

// Row 10 Customization Logic
const horiz5Text10a = document.getElementById("horiz5Text10a");
horiz5Text10a.oninput = function() {
    if (horiz5Text10a.value.startsWith("http") && horiz5Text10a.value.endsWith(".png") || horiz5Text10a.value.endsWith(".jpg") || horiz5Text10a.value.endsWith(".gif")) {
        horiz5Row10a.innerHTML = `<img src="` + horiz5Text10a.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 32px;" alt="">`;
    } else {
        horiz5Row10a.innerHTML = horiz5Text10a.value;
    }
};
const horiz5Size10 = document.getElementById("horiz5Size10");
horiz5Size10.oninput = function() {
    horiz5Row10b.style.width = ((Math.abs(horiz5Size10.value)) * .75) + "%";
    horiz5Row10c.style.width = ((75 - (Math.abs(horiz5Size10.value)) * .75)) + "%";
};
const horiz5Text10b = document.getElementById("horiz5Text10b");
horiz5Text10b.oninput = function() {
    if (horiz5Text10b.value.startsWith("http") && horiz5Text10b.value.endsWith(".png") || horiz5Text10b.value.endsWith(".jpg") || horiz5Text10b.value.endsWith(".gif")) {
        horiz5Row10c.innerHTML = "&nbsp;" + `<img src="` + horiz5Text10b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">`;
    } else {
        horiz5Row10c.innerHTML = "&nbsp;" + horiz5Text10b.value;
    }
};
const horiz5Label10b = document.getElementById("horiz5Label10b");
horiz5Label10b.addEventListener("click", () => {
    if (horiz5Text10b.value == "") {
        horiz5Row10b.innerHTML = "";
        horiz5Row10c.innerHTML = "";
    } else if (horiz5Text10b.value.includes(".png") || horiz5Text10b.value.includes(".jpg") || horiz5Text10b.value.includes(".gif")) {
        horiz5Row10b.innerHTML = `<img src="` + horiz5Text10b.value + `" width="auto" height="32" border="0" valign="middle" style="width: auto; height: 26px;" alt="">` + "&nbsp;" ;
        horiz5Text10b.value = "";
        horiz5Row10c.innerHTML = "";
    } else if (horiz5Text10b.value) {
        horiz5Row10b.innerHTML = horiz5Text10b.value + "&nbsp;";
        horiz5Text10b.value = "";
        horiz5Row10c.innerHTML = "";
    }
});
const horiz5Color10 = document.getElementById("horiz5Color10");
horiz5Color10.oninput = function() {
    horiz5Row10b.style.backgroundColor = horiz5Color10.value;
};

// Horizontal Chart V Focus/Blur Events
horiz5capText.addEventListener("focus", () => { horiz5Cap.style.textShadow = shadowColor; });
horiz5capText.addEventListener("blur", () => { horiz5Cap.style.textShadow = "none"; });
horiz5subText.addEventListener("focus", () => { horiz5Sub.style.textShadow = shadowColor; });
horiz5subText.addEventListener("blur", () => { horiz5Sub.style.textShadow = "none"; });
horiz5srcText.addEventListener("focus", () => { horiz5Source.style.textShadow = shadowColor; });
horiz5srcText.addEventListener("blur", () => { horiz5Source.style.textShadow = "none"; });
horiz5Size1.addEventListener("focus", () => { horiz5Row1b.style.boxShadow = barSizeShadow; });
horiz5Size1.addEventListener("blur", () => { horiz5Row1b.style.boxShadow = "none"; });
horiz5Color1.addEventListener("focus", () => { horiz5Row1b.style.boxShadow = barColorShadow; });
horiz5Color1.addEventListener("blur", () => { horiz5Row1b.style.boxShadow = "none"; });
horiz5Text1a.addEventListener("focus", () => { horiz5Row1a.firstChild.style.filter = imgDropShadow; });
horiz5Text1a.addEventListener("blur", () => { horiz5Row1a.firstChild.style.filter = "none"; });
horiz5Text1b.addEventListener("focus", () => { horiz5Row1c.style.textShadow = shadowColor; });
horiz5Text1b.addEventListener("blur", () => { horiz5Row1c.style.textShadow = "none"; });
horiz5Size2.addEventListener("focus", () => { horiz5Row2b.style.boxShadow = barSizeShadow; });
horiz5Size2.addEventListener("blur", () => { horiz5Row2b.style.boxShadow = "none"; });
horiz5Color2.addEventListener("focus", () => { horiz5Row2b.style.boxShadow = barColorShadow; });
horiz5Color2.addEventListener("blur", () => { horiz5Row2b.style.boxShadow = "none"; });
horiz5Text2a.addEventListener("focus", () => { horiz5Row2a.firstChild.style.filter = imgDropShadow; });
horiz5Text2a.addEventListener("blur", () => { horiz5Row2a.firstChild.style.filter = "none"; });
horiz5Text2b.addEventListener("focus", () => { horiz5Row2c.style.textShadow = shadowColor; });
horiz5Text2b.addEventListener("blur", () => { horiz5Row2c.style.textShadow = "none"; });
horiz5Size3.addEventListener("focus", () => { horiz5Row3b.style.boxShadow = barSizeShadow; });
horiz5Size3.addEventListener("blur", () => { horiz5Row3b.style.boxShadow = "none"; });
horiz5Color3.addEventListener("focus", () => { horiz5Row3b.style.boxShadow = barColorShadow; });
horiz5Color3.addEventListener("blur", () => { horiz5Row3b.style.boxShadow = "none"; });
horiz5Text3a.addEventListener("focus", () => { horiz5Row3a.firstChild.style.filter = imgDropShadow; });
horiz5Text3a.addEventListener("blur", () => { horiz5Row3a.firstChild.style.filter = "none"; });
horiz5Text3b.addEventListener("focus", () => { horiz5Row3c.style.textShadow = shadowColor; });
horiz5Text3b.addEventListener("blur", () => { horiz5Row3c.style.textShadow = "none"; });
horiz5Size4.addEventListener("focus", () => { horiz5Row4b.style.boxShadow = barSizeShadow; });
horiz5Size4.addEventListener("blur", () => { horiz5Row4b.style.boxShadow = "none"; });
horiz5Color4.addEventListener("focus", () => { horiz5Row4b.style.boxShadow = barColorShadow; });
horiz5Color4.addEventListener("blur", () => { horiz5Row4b.style.boxShadow = "none"; });
horiz5Text4a.addEventListener("focus", () => { horiz5Row4a.firstChild.style.filter = imgDropShadow; });
horiz5Text4a.addEventListener("blur", () => { horiz5Row4a.firstChild.style.filter = "none"; });
horiz5Text4b.addEventListener("focus", () => { horiz5Row4c.style.textShadow = shadowColor; });
horiz5Text4b.addEventListener("blur", () => { horiz5Row4c.style.textShadow = "none"; });
horiz5Size5.addEventListener("focus", () => { horiz5Row5b.style.boxShadow = barSizeShadow; });
horiz5Size5.addEventListener("blur", () => { horiz5Row5b.style.boxShadow = "none"; });
horiz5Color5.addEventListener("focus", () => { horiz5Row5b.style.boxShadow = barColorShadow; });
horiz5Color5.addEventListener("blur", () => { horiz5Row5b.style.boxShadow = "none"; });
horiz5Text5a.addEventListener("focus", () => { horiz5Row5a.firstChild.style.filter = imgDropShadow; });
horiz5Text5a.addEventListener("blur", () => { horiz5Row5a.firstChild.style.filter = "none"; });
horiz5Text5b.addEventListener("focus", () => { horiz5Row5c.style.textShadow = shadowColor; });
horiz5Text5b.addEventListener("blur", () => { horiz5Row5c.style.textShadow = "none"; });
horiz5Size6.addEventListener("focus", () => { horiz5Row6b.style.boxShadow = barSizeShadow; });
horiz5Size6.addEventListener("blur", () => { horiz5Row6b.style.boxShadow = "none"; });
horiz5Color6.addEventListener("focus", () => { horiz5Row6b.style.boxShadow = barColorShadow; });
horiz5Color6.addEventListener("blur", () => { horiz5Row6b.style.boxShadow = "none"; });
horiz5Text6a.addEventListener("focus", () => { horiz5Row6a.firstChild.style.filter = imgDropShadow; });
horiz5Text6a.addEventListener("blur", () => { horiz5Row6a.firstChild.style.filter = "none"; });
horiz5Text6b.addEventListener("focus", () => { horiz5Row6c.style.textShadow = shadowColor; });
horiz5Text6b.addEventListener("blur", () => { horiz5Row6c.style.textShadow = "none"; });
horiz5Size7.addEventListener("focus", () => { horiz5Row7b.style.boxShadow = barSizeShadow; });
horiz5Size7.addEventListener("blur", () => { horiz5Row7b.style.boxShadow = "none"; });
horiz5Color7.addEventListener("focus", () => { horiz5Row7b.style.boxShadow = barColorShadow; });
horiz5Color7.addEventListener("blur", () => { horiz5Row7b.style.boxShadow = "none"; });
horiz5Text7a.addEventListener("focus", () => { horiz5Row7a.firstChild.style.filter = imgDropShadow; });
horiz5Text7a.addEventListener("blur", () => { horiz5Row7a.firstChild.style.filter = "none"; });
horiz5Text7b.addEventListener("focus", () => { horiz5Row7c.style.textShadow = shadowColor; });
horiz5Text7b.addEventListener("blur", () => { horiz5Row7c.style.textShadow = "none"; });
horiz5Size8.addEventListener("focus", () => { horiz5Row8b.style.boxShadow = barSizeShadow; });
horiz5Size8.addEventListener("blur", () => { horiz5Row8b.style.boxShadow = "none"; });
horiz5Color8.addEventListener("focus", () => { horiz5Row8b.style.boxShadow = barColorShadow; });
horiz5Color8.addEventListener("blur", () => { horiz5Row8b.style.boxShadow = "none"; });
horiz5Text8a.addEventListener("focus", () => { horiz5Row8a.firstChild.style.filter = imgDropShadow; });
horiz5Text8a.addEventListener("blur", () => { horiz5Row8a.firstChild.style.filter = "none"; });
horiz5Text8b.addEventListener("focus", () => { horiz5Row8c.style.textShadow = shadowColor; });
horiz5Text8b.addEventListener("blur", () => { horiz5Row8c.style.textShadow = "none"; });
horiz5Size9.addEventListener("focus", () => { horiz5Row9b.style.boxShadow = barSizeShadow; });
horiz5Size9.addEventListener("blur", () => { horiz5Row9b.style.boxShadow = "none"; });
horiz5Color9.addEventListener("focus", () => { horiz5Row9b.style.boxShadow = barColorShadow; });
horiz5Color9.addEventListener("blur", () => { horiz5Row9b.style.boxShadow = "none"; });
horiz5Text9a.addEventListener("focus", () => { horiz5Row9a.firstChild.style.filter = imgDropShadow; });
horiz5Text9a.addEventListener("blur", () => { horiz5Row9a.firstChild.style.filter = "none"; });
horiz5Text9b.addEventListener("focus", () => { horiz5Row9c.style.textShadow = shadowColor; });
horiz5Text9b.addEventListener("blur", () => { horiz5Row9c.style.textShadow = "none"; });
horiz5Size10.addEventListener("focus", () => { horiz5Row10b.style.boxShadow = barSizeShadow; });
horiz5Size10.addEventListener("blur", () => { horiz5Row10b.style.boxShadow = "none"; });
horiz5Color10.addEventListener("focus", () => { horiz5Row10b.style.boxShadow = barColorShadow; });
horiz5Color10.addEventListener("blur", () => { horiz5Row10b.style.boxShadow = "none"; });
horiz5Text10a.addEventListener("focus", () => { horiz5Row10a.firstChild.style.filter = imgDropShadow; });
horiz5Text10a.addEventListener("blur", () => { horiz5Row10a.firstChild.style.filter = "none"; });
horiz5Text10b.addEventListener("focus", () => { horiz5Row10c.style.textShadow = shadowColor; });
horiz5Text10b.addEventListener("blur", () => { horiz5Row10c.style.textShadow = "none"; });

// Generate Horiz5 HTML Chart Logic
const horiz5Weight = document.getElementById("horiz5Weight");
const horiz5Button = document.getElementById("horiz5Button");
const horiz5Output = document.getElementById("horiz5Output");
horiz5Button.addEventListener("mouseenter", () => { horiz5Output.style.opacity = ".4"; horiz5Weight.style.opacity = ".4"; } );
horiz5Button.addEventListener("mouseleave", () => { horiz5Output.style.opacity = ""; horiz5Weight.style.opacity = ""; horiz5Output.style.borderColor = ""; horiz5Weight.style.color = ""; } );
horiz5Button.addEventListener("click", () => {
    if (rowsData24.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.textContent = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    } else if (rowsData24.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2b.style.width + '; height: 34px;" height="34">' + horiz5Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2c.style.width + '; height: 34px;" height="34">' + horiz5Row2c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.textContent = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    } else if (rowsData24.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2b.style.width + '; height: 34px;" height="34">' + horiz5Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2c.style.width + '; height: 34px;" height="34">' + horiz5Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3b.style.width + '; height: 34px;" height="34">' + horiz5Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3c.style.width + '; height: 34px;" height="34">' + horiz5Row3c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.textContent = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    } else if (rowsData24.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2b.style.width + '; height: 34px;" height="34">' + horiz5Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2c.style.width + '; height: 34px;" height="34">' + horiz5Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3b.style.width + '; height: 34px;" height="34">' + horiz5Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3c.style.width + '; height: 34px;" height="34">' + horiz5Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4b.style.width + '; height: 34px;" height="34">' + horiz5Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4c.style.width + '; height: 34px;" height="34">' + horiz5Row4c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.textContent = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    } else if (rowsData24.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2b.style.width + '; height: 34px;" height="34">' + horiz5Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2c.style.width + '; height: 34px;" height="34">' + horiz5Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3b.style.width + '; height: 34px;" height="34">' + horiz5Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3c.style.width + '; height: 34px;" height="34">' + horiz5Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4b.style.width + '; height: 34px;" height="34">' + horiz5Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4c.style.width + '; height: 34px;" height="34">' + horiz5Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5b.style.width + '; height: 34px;" height="34">' + horiz5Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5c.style.width + '; height: 34px;" height="34">' + horiz5Row5c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.textContent = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    } else if (rowsData24.value === "6") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2b.style.width + '; height: 34px;" height="34">' + horiz5Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2c.style.width + '; height: 34px;" height="34">' + horiz5Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3b.style.width + '; height: 34px;" height="34">' + horiz5Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3c.style.width + '; height: 34px;" height="34">' + horiz5Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4b.style.width + '; height: 34px;" height="34">' + horiz5Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4c.style.width + '; height: 34px;" height="34">' + horiz5Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5b.style.width + '; height: 34px;" height="34">' + horiz5Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5c.style.width + '; height: 34px;" height="34">' + horiz5Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6b.style.width + '; height: 34px;" height="34">' + horiz5Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6c.style.width + '; height: 34px;" height="34">' + horiz5Row6c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.textContent = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    } else if (rowsData24.value === "7") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2b.style.width + '; height: 34px;" height="34">' + horiz5Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2c.style.width + '; height: 34px;" height="34">' + horiz5Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3b.style.width + '; height: 34px;" height="34">' + horiz5Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3c.style.width + '; height: 34px;" height="34">' + horiz5Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4b.style.width + '; height: 34px;" height="34">' + horiz5Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4c.style.width + '; height: 34px;" height="34">' + horiz5Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5b.style.width + '; height: 34px;" height="34">' + horiz5Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5c.style.width + '; height: 34px;" height="34">' + horiz5Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6b.style.width + '; height: 34px;" height="34">' + horiz5Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6c.style.width + '; height: 34px;" height="34">' + horiz5Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row7b.style.width + '; height: 34px;" height="34">' + horiz5Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row7c.style.width + '; height: 34px;" height="34">' + horiz5Row7c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.textContent = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    } else if (rowsData24.value === "8") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2b.style.width + '; height: 34px;" height="34">' + horiz5Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2c.style.width + '; height: 34px;" height="34">' + horiz5Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3b.style.width + '; height: 34px;" height="34">' + horiz5Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3c.style.width + '; height: 34px;" height="34">' + horiz5Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4b.style.width + '; height: 34px;" height="34">' + horiz5Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4c.style.width + '; height: 34px;" height="34">' + horiz5Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5b.style.width + '; height: 34px;" height="34">' + horiz5Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5c.style.width + '; height: 34px;" height="34">' + horiz5Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6b.style.width + '; height: 34px;" height="34">' + horiz5Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6c.style.width + '; height: 34px;" height="34">' + horiz5Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row7b.style.width + '; height: 34px;" height="34">' + horiz5Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row7c.style.width + '; height: 34px;" height="34">' + horiz5Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row8b.style.width + '; height: 34px;" height="34">' + horiz5Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row8c.style.width + '; height: 34px;" height="34">' + horiz5Row8c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.textContent = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    } else if (rowsData24.value === "9") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2b.style.width + '; height: 34px;" height="34">' + horiz5Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2c.style.width + '; height: 34px;" height="34">' + horiz5Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3b.style.width + '; height: 34px;" height="34">' + horiz5Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3c.style.width + '; height: 34px;" height="34">' + horiz5Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4b.style.width + '; height: 34px;" height="34">' + horiz5Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4c.style.width + '; height: 34px;" height="34">' + horiz5Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5b.style.width + '; height: 34px;" height="34">' + horiz5Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5c.style.width + '; height: 34px;" height="34">' + horiz5Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6b.style.width + '; height: 34px;" height="34">' + horiz5Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6c.style.width + '; height: 34px;" height="34">' + horiz5Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row7b.style.width + '; height: 34px;" height="34">' + horiz5Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row7c.style.width + '; height: 34px;" height="34">' + horiz5Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row8b.style.width + '; height: 34px;" height="34">' + horiz5Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row8c.style.width + '; height: 34px;" height="34">' + horiz5Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row9b.style.width + '; height: 34px;" height="34">' + horiz5Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row9c.style.width + '; height: 34px;" height="34">' + horiz5Row9c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.textContent = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    } else if (rowsData24.value === "10") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2b.style.width + '; height: 34px;" height="34">' + horiz5Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2c.style.width + '; height: 34px;" height="34">' + horiz5Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3b.style.width + '; height: 34px;" height="34">' + horiz5Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3c.style.width + '; height: 34px;" height="34">' + horiz5Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4b.style.width + '; height: 34px;" height="34">' + horiz5Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4c.style.width + '; height: 34px;" height="34">' + horiz5Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5b.style.width + '; height: 34px;" height="34">' + horiz5Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5c.style.width + '; height: 34px;" height="34">' + horiz5Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6b.style.width + '; height: 34px;" height="34">' + horiz5Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6c.style.width + '; height: 34px;" height="34">' + horiz5Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row7b.style.width + '; height: 34px;" height="34">' + horiz5Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row7c.style.width + '; height: 34px;" height="34">' + horiz5Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row8b.style.width + '; height: 34px;" height="34">' + horiz5Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row8c.style.width + '; height: 34px;" height="34">' + horiz5Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row9b.style.width + '; height: 34px;" height="34">' + horiz5Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row9c.style.width + '; height: 34px;" height="34">' + horiz5Row9c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row10a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color10.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row10b.style.width + '; height: 34px;" height="34">' + horiz5Row10b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row10c.style.width + '; height: 34px;" height="34">' + horiz5Row10c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.textContent = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    }
    horiz5Output.style.opacity = "";
    horiz5Weight.style.opacity = "";
    horiz5Output.style.borderColor = "#166dfc";
    horiz5Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(horiz5Output.value);
});
horiz5Output.addEventListener("click", () => {
    horiz5Output.select();
});