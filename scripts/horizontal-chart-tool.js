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
        if (horiz1Div.checked == true) {
            horiz1DivNodes1[i].firstElementChild.style.borderTop = "1px solid #e3e3e3";
        } else if (horiz1Div.checked == false) {
            horiz1DivNodes1[i].firstElementChild.style.borderTop = "none";
        }
    }
    if (horiz1Div.checked == true) { // Adds border-top to output code if checked
        return horiz1borderTop = 'border-top: 1px solid #e3e3e3; ';
    } else if (horiz1Div.checked == false) {
        return horiz1borderTop = "";
    }
});



// Horizontal Chart I Caption
let horiz1TopBarSpace = ""; // 05.22.23: Adjusts spacing between caption/subtitle text and the first data bar; issue seen in Outlook Windows clients where padding-bottom added to a <td> will add the same spacing above it if the <td> is directly below a <caption> element. This issue is not seen when using margin-bottom however the spacing will no longer work in Outlook macOS clients. Believe this is an Outlook bug
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
    if (horiz1srcText.value == "") {
        horiz1Source.style.paddingTop = "0";
        return horiz1srcCode = "";
    } else if (horiz1srcText.value) {
        horiz1Source.style.paddingTop = "30px";
        return horiz1srcCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 30px; text-align: left;">' + horiz1Source.innerHTML + '</td></tr>';
    }
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
    if (horiz1Text1a.value == "") {
        horiz1Row1a.innerHTML = horiz1Text1a.value;
    } else if (horiz1Text1a.value) {
        horiz1Row1a.innerHTML = horiz1Text1a.value;
    }
    // 04.22.23: Consider simplifying this logic to the following
    // horiz1Row1a.innerHTML = horiz1Text1a.value;
};
const horiz1Size1 = document.getElementById("horiz1Size1");
horiz1Size1.oninput = function() {
    horiz1Row1b.style.width = ((Math.abs(horiz1Size1.value)) * .75) + "%";
    horiz1Row1c.style.width = ((75 - (Math.abs(horiz1Size1.value)) * .75)) + "%";
};
const horiz1Text1b = document.getElementById("horiz1Text1b");
horiz1Text1b.oninput = function() {
    if (horiz1Text1b.value == "") {
        horiz1Row1c.innerHTML = horiz1Text1b.value;
    } else if (horiz1Text1b.value) {
        horiz1Row1c.innerHTML = "&nbsp;" + horiz1Text1b.value;
    }
};
const horiz1Label1b = document.getElementById("horiz1Label1b");
// horiz1Label1b.addEventListener("mouseover", () => {
//     if (horiz1Text1b.value) { Changes inner data label text color to data bar color
//         horiz1Row1b.style.color = horiz1Color1.value;
//     }
//     horiz1Row1c.style.textShadow = -Math.abs(horiz1Text1b.value.length * 7.5) - 9 + "px 0 #558abb, 0 0 1em #444cf7"; Creates text-shadow to preview label text switch
// });
// horiz1Label1b.addEventListener("mouseleave", () => {
//     horiz1Row1b.style.color = "#000000";
//     horiz1Row1c.style.textShadow = "none";
// })
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
    if (horiz1Text2a.value == "") {
        horiz1Row2a.innerHTML = horiz1Text2a.value;
    } else if (horiz1Text2a.value) {
        horiz1Row2a.innerHTML = horiz1Text2a.value;
    }
};
const horiz1Size2 = document.getElementById("horiz1Size2");
horiz1Size2.oninput = function() {
    horiz1Row2b.style.width = ((Math.abs(horiz1Size2.value)) * .75) + "%";
    horiz1Row2c.style.width = ((75 - (Math.abs(horiz1Size2.value)) * .75)) + "%";
};
const horiz1Text2b = document.getElementById("horiz1Text2b");
horiz1Text2b.oninput = function() {
    if (horiz1Text2b.value == "") {
        horiz1Row2c.innerHTML = horiz1Text2b.value;
    } else if (horiz1Text2b.value) {
        horiz1Row2c.innerHTML = "&nbsp;" + horiz1Text2b.value;
    }
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
    if (horiz1Text3a.value == "") {
        horiz1Row3a.innerHTML = horiz1Text3a.value;
    } else if (horiz1Text3a.value) {
        horiz1Row3a.innerHTML = horiz1Text3a.value;
    }
};
const horiz1Size3 = document.getElementById("horiz1Size3");
horiz1Size3.oninput = function() {
    horiz1Row3b.style.width = ((Math.abs(horiz1Size3.value)) * .75) + "%";
    horiz1Row3c.style.width = ((75 - (Math.abs(horiz1Size3.value)) * .75)) + "%";
};
const horiz1Text3b = document.getElementById("horiz1Text3b");
horiz1Text3b.oninput = function() {
    if (horiz1Text3b.value == "") {
        horiz1Row3c.innerHTML = horiz1Text3b.value;
    } else if (horiz1Text3b.value) {
        horiz1Row3c.innerHTML = "&nbsp;" + horiz1Text3b.value;
    }
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
    if (horiz1Text4a.value == "") {
        horiz1Row4a.innerHTML = horiz1Text4a.value;
    } else if (horiz1Text4a.value) {
        horiz1Row4a.innerHTML = horiz1Text4a.value;
    }
};
const horiz1Size4 = document.getElementById("horiz1Size4");
horiz1Size4.oninput = function() {
    horiz1Row4b.style.width = ((Math.abs(horiz1Size4.value)) * .75) + "%";
    horiz1Row4c.style.width = ((75 - (Math.abs(horiz1Size4.value)) * .75)) + "%";
};
const horiz1Text4b = document.getElementById("horiz1Text4b");
horiz1Text4b.oninput = function() {
    if (horiz1Text4b.value == "") {
        horiz1Row4c.innerHTML = horiz1Text4b.value;
    } else if (horiz1Text4b.value) {
        horiz1Row4c.innerHTML = "&nbsp;" + horiz1Text4b.value;
    }
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
    if (horiz1Text5a.value == "") {
        horiz1Row5a.innerHTML = horiz1Text5a.value;
    } else if (horiz1Text5a.value) {
        horiz1Row5a.innerHTML = horiz1Text5a.value;
    }
};
const horiz1Size5 = document.getElementById("horiz1Size5");
horiz1Size5.oninput = function() {
    horiz1Row5b.style.width = ((Math.abs(horiz1Size5.value)) * .75) + "%";
    horiz1Row5c.style.width = ((75 - (Math.abs(horiz1Size5.value)) * .75)) + "%";
};
const horiz1Text5b = document.getElementById("horiz1Text5b");
horiz1Text5b.oninput = function() {
    if (horiz1Text5b.value == "") {
        horiz1Row5c.innerHTML = horiz1Text5b.value;
    } else if (horiz1Text5b.value) {
        horiz1Row5c.innerHTML = "&nbsp;" + horiz1Text5b.value;
    }
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
    if (horiz1Text6a.value == "") {
        horiz1Row6a.innerHTML = horiz1Text6a.value;
    } else if (horiz1Text6a.value) {
        horiz1Row6a.innerHTML = horiz1Text6a.value;
    }
};
const horiz1Size6 = document.getElementById("horiz1Size6");
horiz1Size6.oninput = function() {
    horiz1Row6b.style.width = ((Math.abs(horiz1Size6.value)) * .75) + "%";
    horiz1Row6c.style.width = ((75 - (Math.abs(horiz1Size6.value)) * .75)) + "%";
};
const horiz1Text6b = document.getElementById("horiz1Text6b");
horiz1Text6b.oninput = function() {
    if (horiz1Text6b.value == "") {
        horiz1Row6c.innerHTML = horiz1Text6b.value;
    } else if (horiz1Text6b.value) {
        horiz1Row6c.innerHTML = "&nbsp;" + horiz1Text6b.value;
    }
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
    if (horiz1Text7a.value == "") {
        horiz1Row7a.innerHTML = horiz1Text7a.value;
    } else if (horiz1Text7a.value) {
        horiz1Row7a.innerHTML = horiz1Text7a.value;
    }
};
const horiz1Size7 = document.getElementById("horiz1Size7");
horiz1Size7.oninput = function() {
    horiz1Row7b.style.width = ((Math.abs(horiz1Size7.value)) * .75) + "%";
    horiz1Row7c.style.width = ((75 - (Math.abs(horiz1Size7.value)) * .75)) + "%";
};
const horiz1Text7b = document.getElementById("horiz1Text7b");
horiz1Text7b.oninput = function() {
    if (horiz1Text7b.value == "") {
        horiz1Row7c.innerHTML = horiz1Text7b.value;
    } else if (horiz1Text7b.value) {
        horiz1Row7c.innerHTML = "&nbsp;" + horiz1Text7b.value;
    }
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
    if (horiz1Text8a.value == "") {
        horiz1Row8a.innerHTML = horiz1Text8a.value;
    } else if (horiz1Text8a.value) {
        horiz1Row8a.innerHTML = horiz1Text8a.value;
    }
};
const horiz1Size8 = document.getElementById("horiz1Size8");
horiz1Size8.oninput = function() {
    horiz1Row8b.style.width = ((Math.abs(horiz1Size8.value)) * .75) + "%";
    horiz1Row8c.style.width = ((75 - (Math.abs(horiz1Size8.value)) * .75)) + "%";
};
const horiz1Text8b = document.getElementById("horiz1Text8b");
horiz1Text8b.oninput = function() {
    if (horiz1Text8b.value == "") {
        horiz1Row8c.innerHTML = horiz1Text8b.value;
    } else if (horiz1Text8b.value) {
        horiz1Row8c.innerHTML = "&nbsp;" + horiz1Text8b.value;
    }
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
    if (horiz1Text9a.value == "") {
        horiz1Row9a.innerHTML = horiz1Text9a.value;
    } else if (horiz1Text9a.value) {
        horiz1Row9a.innerHTML = horiz1Text9a.value;
    }
};
const horiz1Size9 = document.getElementById("horiz1Size9");
horiz1Size9.oninput = function() {
    horiz1Row9b.style.width = ((Math.abs(horiz1Size9.value)) * .75) + "%";
    horiz1Row9c.style.width = ((75 - (Math.abs(horiz1Size9.value)) * .75)) + "%";
};
const horiz1Text9b = document.getElementById("horiz1Text9b");
horiz1Text9b.oninput = function() {
    if (horiz1Text9b.value == "") {
        horiz1Row9c.innerHTML = horiz1Text9b.value;
    } else if (horiz1Text9b.value) {
        horiz1Row9c.innerHTML = "&nbsp;" + horiz1Text9b.value;
    }
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
    if (horiz1Text10a.value == "") {
        horiz1Row10a.innerHTML = horiz1Text10a.value;
    } else if (horiz1Text10a.value) {
        horiz1Row10a.innerHTML = horiz1Text10a.value;
    }
};
const horiz1Size10 = document.getElementById("horiz1Size10");
horiz1Size10.oninput = function() {
    horiz1Row10b.style.width = ((Math.abs(horiz1Size10.value)) * .75) + "%";
    horiz1Row10c.style.width = ((75 - (Math.abs(horiz1Size10.value)) * .75)) + "%";
};
const horiz1Text10b = document.getElementById("horiz1Text10b");
horiz1Text10b.oninput = function() {
    if (horiz1Text10b.value == "") {
        horiz1Row10c.innerHTML = horiz1Text10b.value;
    } else if (horiz1Text10b.value) {
        horiz1Row10c.innerHTML = "&nbsp;" + horiz1Text10b.value;
    }
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
horiz1Size1.addEventListener("focus", () => {
    horiz1Row1b.style.boxShadow = barSizeShadow;
});
horiz1Size1.addEventListener("blur", () => {
    horiz1Row1b.style.boxShadow = "none";
});
horiz1Color1.addEventListener("focus", () => { horiz1Row1b.style.boxShadow = barColorShadow })
horiz1Color1.addEventListener("blur", () => { horiz1Row1b.style.boxShadow = "none"; })
horiz1Text1a.addEventListener("focus", () => { horiz1Row1a.style.textShadow = shadowColor; });
horiz1Text1a.addEventListener("blur", () => { horiz1Row1a.style.textShadow = "none"; });
horiz1Text1b.addEventListener("focus", () => { horiz1Row1c.style.textShadow = shadowColor; });
horiz1Text1b.addEventListener("blur", () => { horiz1Row1c.style.textShadow = "none"; });
horiz1Size2.addEventListener("focus", () => {
    horiz1Row2b.style.boxShadow = barSizeShadow;
});
horiz1Size2.addEventListener("blur", () => {
    horiz1Row2b.style.boxShadow = "none";
});
horiz1Color2.addEventListener("focus", () => { horiz1Row2b.style.boxShadow = barColorShadow })
horiz1Color2.addEventListener("blur", () => { horiz1Row2b.style.boxShadow = "none"; })
horiz1Text2a.addEventListener("focus", () => { horiz1Row2a.style.textShadow = shadowColor; });
horiz1Text2a.addEventListener("blur", () => { horiz1Row2a.style.textShadow = "none"; });
horiz1Text2b.addEventListener("focus", () => { horiz1Row2c.style.textShadow = shadowColor; });
horiz1Text2b.addEventListener("blur", () => { horiz1Row2c.style.textShadow = "none"; });
horiz1Size3.addEventListener("focus", () => {
    horiz1Row3b.style.boxShadow = barSizeShadow;
});
horiz1Size3.addEventListener("blur", () => {
    horiz1Row3b.style.boxShadow = "none";
});
horiz1Color3.addEventListener("focus", () => { horiz1Row3b.style.boxShadow = barColorShadow })
horiz1Color3.addEventListener("blur", () => { horiz1Row3b.style.boxShadow = "none"; })
horiz1Text3a.addEventListener("focus", () => { horiz1Row3a.style.textShadow = shadowColor; });
horiz1Text3a.addEventListener("blur", () => { horiz1Row3a.style.textShadow = "none"; });
horiz1Text3b.addEventListener("focus", () => { horiz1Row3c.style.textShadow = shadowColor; });
horiz1Text3b.addEventListener("blur", () => { horiz1Row3c.style.textShadow = "none"; });
horiz1Size4.addEventListener("focus", () => {
    horiz1Row4b.style.boxShadow = barSizeShadow;
});
horiz1Size4.addEventListener("blur", () => {
    horiz1Row4b.style.boxShadow = "none";
});
horiz1Color4.addEventListener("focus", () => { horiz1Row4b.style.boxShadow = barColorShadow })
horiz1Color4.addEventListener("blur", () => { horiz1Row4b.style.boxShadow = "none"; })
horiz1Text4a.addEventListener("focus", () => { horiz1Row4a.style.textShadow = shadowColor; });
horiz1Text4a.addEventListener("blur", () => { horiz1Row4a.style.textShadow = "none"; });
horiz1Text4b.addEventListener("focus", () => { horiz1Row4c.style.textShadow = shadowColor; });
horiz1Text4b.addEventListener("blur", () => { horiz1Row4c.style.textShadow = "none"; });
horiz1Size5.addEventListener("focus", () => {
    horiz1Row5b.style.boxShadow = barSizeShadow;
});
horiz1Size5.addEventListener("blur", () => {
    horiz1Row5b.style.boxShadow = "none";
});
horiz1Color5.addEventListener("focus", () => { horiz1Row5b.style.boxShadow = barColorShadow })
horiz1Color5.addEventListener("blur", () => { horiz1Row5b.style.boxShadow = "none"; })
horiz1Text5a.addEventListener("focus", () => { horiz1Row5a.style.textShadow = shadowColor; });
horiz1Text5a.addEventListener("blur", () => { horiz1Row5a.style.textShadow = "none"; });
horiz1Text5b.addEventListener("focus", () => { horiz1Row5c.style.textShadow = shadowColor; });
horiz1Text5b.addEventListener("blur", () => { horiz1Row5c.style.textShadow = "none"; });
horiz1Size6.addEventListener("focus", () => {
    horiz1Row6b.style.boxShadow = barSizeShadow;
});
horiz1Size6.addEventListener("blur", () => {
    horiz1Row6b.style.boxShadow = "none";
});
horiz1Color6.addEventListener("focus", () => { horiz1Row6b.style.boxShadow = barColorShadow })
horiz1Color6.addEventListener("blur", () => { horiz1Row6b.style.boxShadow = "none"; })
horiz1Text6a.addEventListener("focus", () => { horiz1Row6a.style.textShadow = shadowColor; });
horiz1Text6a.addEventListener("blur", () => { horiz1Row6a.style.textShadow = "none"; });
horiz1Text6b.addEventListener("focus", () => { horiz1Row6c.style.textShadow = shadowColor; });
horiz1Text6b.addEventListener("blur", () => { horiz1Row6c.style.textShadow = "none"; });
horiz1Size7.addEventListener("focus", () => {
    horiz1Row7b.style.boxShadow = barSizeShadow;
});
horiz1Size7.addEventListener("blur", () => {
    horiz1Row7b.style.boxShadow = "none";
});
horiz1Color7.addEventListener("focus", () => { horiz1Row7b.style.boxShadow = barColorShadow })
horiz1Color7.addEventListener("blur", () => { horiz1Row7b.style.boxShadow = "none"; })
horiz1Text7a.addEventListener("focus", () => { horiz1Row7a.style.textShadow = shadowColor; });
horiz1Text7a.addEventListener("blur", () => { horiz1Row7a.style.textShadow = "none"; });
horiz1Text7b.addEventListener("focus", () => { horiz1Row7c.style.textShadow = shadowColor; });
horiz1Text7b.addEventListener("blur", () => { horiz1Row7c.style.textShadow = "none"; });
horiz1Size8.addEventListener("focus", () => {
    horiz1Row8b.style.boxShadow = barSizeShadow;
});
horiz1Size8.addEventListener("blur", () => {
    horiz1Row8b.style.boxShadow = "none";
});
horiz1Color8.addEventListener("focus", () => { horiz1Row8b.style.boxShadow = barColorShadow })
horiz1Color8.addEventListener("blur", () => { horiz1Row8b.style.boxShadow = "none"; })
horiz1Text8a.addEventListener("focus", () => { horiz1Row8a.style.textShadow = shadowColor; });
horiz1Text8a.addEventListener("blur", () => { horiz1Row8a.style.textShadow = "none"; });
horiz1Text8b.addEventListener("focus", () => { horiz1Row8c.style.textShadow = shadowColor; });
horiz1Text8b.addEventListener("blur", () => { horiz1Row8c.style.textShadow = "none"; });
horiz1Size9.addEventListener("focus", () => {
    horiz1Row9b.style.boxShadow = barSizeShadow;
});
horiz1Size9.addEventListener("blur", () => {
    horiz1Row9b.style.boxShadow = "none";
});
horiz1Color9.addEventListener("focus", () => { horiz1Row9b.style.boxShadow = barColorShadow })
horiz1Color9.addEventListener("blur", () => { horiz1Row9b.style.boxShadow = "none"; })
horiz1Text9a.addEventListener("focus", () => { horiz1Row9a.style.textShadow = shadowColor; });
horiz1Text9a.addEventListener("blur", () => { horiz1Row9a.style.textShadow = "none"; });
horiz1Text9b.addEventListener("focus", () => { horiz1Row9c.style.textShadow = shadowColor; });
horiz1Text9b.addEventListener("blur", () => { horiz1Row9c.style.textShadow = "none"; });
horiz1Size10.addEventListener("focus", () => {
    horiz1Row10b.style.boxShadow = barSizeShadow;
});
horiz1Size10.addEventListener("blur", () => {
    horiz1Row10b.style.boxShadow = "none";
});
horiz1Color10.addEventListener("focus", () => { horiz1Row10b.style.boxShadow = barColorShadow })
horiz1Color10.addEventListener("blur", () => { horiz1Row10b.style.boxShadow = "none"; })
horiz1Text10a.addEventListener("focus", () => { horiz1Row10a.style.textShadow = shadowColor; });
horiz1Text10a.addEventListener("blur", () => { horiz1Row10a.style.textShadow = "none"; });
horiz1Text10b.addEventListener("focus", () => { horiz1Row10c.style.textShadow = shadowColor; });
horiz1Text10b.addEventListener("blur", () => { horiz1Row10c.style.textShadow = "none"; });

// Generate Horiz1 HTML Chart Logic
const horiz1Weight = document.getElementById("horiz1Weight");
const horiz1Button = document.getElementById("horiz1Button");
const horiz1Output = document.getElementById("horiz1Output");
horiz1Button.addEventListener("mouseenter", () => { horiz1Output.style.opacity = ".4"; horiz1Weight.style.opacity = ".4"; } );
horiz1Button.addEventListener("mouseleave", () => { horiz1Output.style.opacity = ""; horiz1Weight.style.opacity = ""; horiz1Output.style.borderColor = ""; horiz1Weight.style.color = ""; } );
horiz1Button.addEventListener("click", () => {
    if (rowsData1.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.innerHTML = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    } else if (rowsData1.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: 22px;" height="22">' + horiz1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: 22px;" height="22">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.innerHTML = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    } else if (rowsData1.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: 22px;" height="22">' + horiz1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: 22px;" height="22">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: 22px;" height="22">' + horiz1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: 22px;" height="22">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.innerHTML = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    } else if (rowsData1.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: 22px;" height="22">' + horiz1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: 22px;" height="22">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: 22px;" height="22">' + horiz1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: 22px;" height="22">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: 22px;" height="22">' + horiz1Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: 22px;" height="22">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.innerHTML = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    } else if (rowsData1.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: 22px;" height="22">' + horiz1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: 22px;" height="22">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: 22px;" height="22">' + horiz1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: 22px;" height="22">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: 22px;" height="22">' + horiz1Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: 22px;" height="22">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5b.style.width + '; height: 22px;" height="22">' + horiz1Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5c.style.width + '; height: 22px;" height="22">' + horiz1Row5c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.innerHTML = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    } else if (rowsData1.value === "6") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: 22px;" height="22">' + horiz1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: 22px;" height="22">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: 22px;" height="22">' + horiz1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: 22px;" height="22">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: 22px;" height="22">' + horiz1Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: 22px;" height="22">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5b.style.width + '; height: 22px;" height="22">' + horiz1Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5c.style.width + '; height: 22px;" height="22">' + horiz1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6b.style.width + '; height: 22px;" height="22">' + horiz1Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6c.style.width + '; height: 22px;" height="22">' + horiz1Row6c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.innerHTML = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    } else if (rowsData1.value === "7") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: 22px;" height="22">' + horiz1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: 22px;" height="22">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: 22px;" height="22">' + horiz1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: 22px;" height="22">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: 22px;" height="22">' + horiz1Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: 22px;" height="22">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5b.style.width + '; height: 22px;" height="22">' + horiz1Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5c.style.width + '; height: 22px;" height="22">' + horiz1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6b.style.width + '; height: 22px;" height="22">' + horiz1Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6c.style.width + '; height: 22px;" height="22">' + horiz1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7b.style.width + '; height: 22px;" height="22">' + horiz1Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7c.style.width + '; height: 22px;" height="22">' + horiz1Row7c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.innerHTML = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    } else if (rowsData1.value === "8") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: 22px;" height="22">' + horiz1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: 22px;" height="22">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: 22px;" height="22">' + horiz1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: 22px;" height="22">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: 22px;" height="22">' + horiz1Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: 22px;" height="22">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5b.style.width + '; height: 22px;" height="22">' + horiz1Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5c.style.width + '; height: 22px;" height="22">' + horiz1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6b.style.width + '; height: 22px;" height="22">' + horiz1Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6c.style.width + '; height: 22px;" height="22">' + horiz1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7b.style.width + '; height: 22px;" height="22">' + horiz1Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7c.style.width + '; height: 22px;" height="22">' + horiz1Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color8.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row8b.style.width + '; height: 22px;" height="22">' + horiz1Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row8c.style.width + '; height: 22px;" height="22">' + horiz1Row8c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.innerHTML = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    } else if (rowsData1.value === "9") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: 22px;" height="22">' + horiz1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: 22px;" height="22">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: 22px;" height="22">' + horiz1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: 22px;" height="22">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: 22px;" height="22">' + horiz1Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: 22px;" height="22">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5b.style.width + '; height: 22px;" height="22">' + horiz1Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5c.style.width + '; height: 22px;" height="22">' + horiz1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6b.style.width + '; height: 22px;" height="22">' + horiz1Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6c.style.width + '; height: 22px;" height="22">' + horiz1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7b.style.width + '; height: 22px;" height="22">' + horiz1Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7c.style.width + '; height: 22px;" height="22">' + horiz1Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color8.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row8b.style.width + '; height: 22px;" height="22">' + horiz1Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row8c.style.width + '; height: 22px;" height="22">' + horiz1Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color9.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row9b.style.width + '; height: 22px;" height="22">' + horiz1Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row9c.style.width + '; height: 22px;" height="22">' + horiz1Row9c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.innerHTML = chartCode;
        horiz1Weight.textContent = Math.ceil(horiz1Output.value.length / 1024) + 'KB';
    } else if (rowsData1.value === "10") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz1csCode + ' <tr> <td align="left" style="padding: ' + horiz1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: 22px;" height="22">' + horiz1Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: 22px;" height="22">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: 22px;" height="22">' + horiz1Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: 22px;" height="22">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: 22px;" height="22">' + horiz1Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: 22px;" height="22">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5b.style.width + '; height: 22px;" height="22">' + horiz1Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5c.style.width + '; height: 22px;" height="22">' + horiz1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6b.style.width + '; height: 22px;" height="22">' + horiz1Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6c.style.width + '; height: 22px;" height="22">' + horiz1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7b.style.width + '; height: 22px;" height="22">' + horiz1Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7c.style.width + '; height: 22px;" height="22">' + horiz1Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color8.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row8b.style.width + '; height: 22px;" height="22">' + horiz1Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row8c.style.width + '; height: 22px;" height="22">' + horiz1Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 3px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color9.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row9b.style.width + '; height: 22px;" height="22">' + horiz1Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row9c.style.width + '; height: 22px;" height="22">' + horiz1Row9c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz1borderTop + 'padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row10a.innerHTML + '</td><td align="right" style="background-color: ' + horiz1Color10.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row10b.style.width + '; height: 22px;" height="22">' + horiz1Row10b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row10c.style.width + '; height: 22px;" height="22">' + horiz1Row10c.innerHTML + '</td></tr></table> </td></tr>' + horiz1srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz1Output.innerHTML = chartCode;
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
let horiz2TopBarSpace = "";
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
        horiz2Bars[0].firstElementChild.style.padding = "30px 0 0 0";
        horiz2TopBarSpace = "30px 0 0 0";
        horiz2Cap.style.marginBottom = "0";
        return horiz2csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz2Sub.innerHTML + '</td> </tr>';
    } else if (horiz2capText.value && horiz2subText.value == "") {
        horiz2Bars[0].firstElementChild.style.padding = "0";
        horiz2TopBarSpace = "0";
        horiz2Cap.style.marginBottom = "30px";
        return horiz2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 30px; text-align: left;">' + horiz2Cap.innerHTML + '</caption>';
    } else if (horiz2capText.value && horiz2subText.value) {
        horiz2Bars[0].firstElementChild.style.padding = "30px 0 0 0";
        horiz2TopBarSpace = "30px 0 0 0";
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
        horiz2Cap.style.marginBottom = "30px";
        return horiz2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 30px; text-align: left;">' + horiz2Cap.innerHTML + '</caption>';
    } else if (horiz2subText.value && horiz2capText.value == "") {
        horiz2Bars[0].firstElementChild.style.padding = "30px 0 0 0";
        horiz2TopBarSpace = "30px 0 0 0";
        horiz2Cap.style.marginBottom = "0";
        return horiz2csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz2Sub.innerHTML + '</td> </tr>';
    } else if (horiz2subText.value && horiz2capText.value) {
        horiz2Bars[0].firstElementChild.style.padding = "30px 0 0 0";
        horiz2TopBarSpace = "30px 0 0 0";
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
    if (horiz2srcText.value == "") {
        horiz2Source.style.paddingTop = "0";
        return horiz2srcCode = "";
    } else if (horiz2srcText.value) {
        horiz2Source.style.paddingTop = "40px";
        return horiz2srcCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 40px; text-align: left;">' + horiz2Source.innerHTML + '</td></tr>';
    }
};

// Horizontal Chart II Color Picker
const horiz2colorPick = document.getElementById("horiz2colorPick");
horiz2colorPick.addEventListener("change", (evt) => {
    horiz2Row1a.style.backgroundColor = evt.detail.hex;
    horiz2Row1b.style.backgroundColor = evt.detail.hex;
    horiz2Color1.value = evt.detail.hex;
    horiz2Row2a.style.backgroundColor = evt.detail.hex;
    horiz2Row2b.style.backgroundColor = evt.detail.hex;
    horiz2Color2.value = evt.detail.hex;
    horiz2Row3a.style.backgroundColor = evt.detail.hex;
    horiz2Row3b.style.backgroundColor = evt.detail.hex;
    horiz2Color3.value = evt.detail.hex;
    horiz2Row4a.style.backgroundColor = evt.detail.hex;
    horiz2Row4b.style.backgroundColor = evt.detail.hex;
    horiz2Color4.value = evt.detail.hex;
    horiz2Row5a.style.backgroundColor = evt.detail.hex;
    horiz2Row5b.style.backgroundColor = evt.detail.hex;
    horiz2Color5.value = evt.detail.hex;
    horiz2Row6a.style.backgroundColor = evt.detail.hex;
    horiz2Row6b.style.backgroundColor = evt.detail.hex;
    horiz2Color6.value = evt.detail.hex;
    horiz2Row7a.style.backgroundColor = evt.detail.hex;
    horiz2Row7b.style.backgroundColor = evt.detail.hex;
    horiz2Color7.value = evt.detail.hex;
    horiz2Row8a.style.backgroundColor = evt.detail.hex;
    horiz2Row8b.style.backgroundColor = evt.detail.hex;
    horiz2Color8.value = evt.detail.hex;
    horiz2Row9a.style.backgroundColor = evt.detail.hex;
    horiz2Row9b.style.backgroundColor = evt.detail.hex;
    horiz2Color9.value = evt.detail.hex;
    horiz2Row10a.style.backgroundColor = evt.detail.hex;
    horiz2Row10b.style.backgroundColor = evt.detail.hex;
    horiz2Color10.value = evt.detail.hex;
});

// Horizontal Chart II Row Customization Logic
const horiz2Row1a = document.getElementById("horiz2Row1a");
const horiz2Row1b = document.getElementById("horiz2Row1b");
const horiz2Row1c = document.getElementById("horiz2Row1c");
const horiz2Row2a = document.getElementById("horiz2Row2a");
const horiz2Row2b = document.getElementById("horiz2Row2b");
const horiz2Row2c = document.getElementById("horiz2Row2c");
const horiz2Row3a = document.getElementById("horiz2Row3a");
const horiz2Row3b = document.getElementById("horiz2Row3b");
const horiz2Row3c = document.getElementById("horiz2Row3c");
const horiz2Row4a = document.getElementById("horiz2Row4a");
const horiz2Row4b = document.getElementById("horiz2Row4b");
const horiz2Row4c = document.getElementById("horiz2Row4c");
const horiz2Row5a = document.getElementById("horiz2Row5a");
const horiz2Row5b = document.getElementById("horiz2Row5b");
const horiz2Row5c = document.getElementById("horiz2Row5c");
const horiz2Row6a = document.getElementById("horiz2Row6a");
const horiz2Row6b = document.getElementById("horiz2Row6b");
const horiz2Row6c = document.getElementById("horiz2Row6c");
const horiz2Row7a = document.getElementById("horiz2Row7a");
const horiz2Row7b = document.getElementById("horiz2Row7b");
const horiz2Row7c = document.getElementById("horiz2Row7c");
const horiz2Row8a = document.getElementById("horiz2Row8a");
const horiz2Row8b = document.getElementById("horiz2Row8b");
const horiz2Row8c = document.getElementById("horiz2Row8c");
const horiz2Row9a = document.getElementById("horiz2Row9a");
const horiz2Row9b = document.getElementById("horiz2Row9b");
const horiz2Row9c = document.getElementById("horiz2Row9c");
const horiz2Row10a = document.getElementById("horiz2Row10a");
const horiz2Row10b = document.getElementById("horiz2Row10b");
const horiz2Row10c = document.getElementById("horiz2Row10c");

// Row 1 Customization Logic
const horiz2Text1a = document.getElementById("horiz2Text1a");
horiz2Text1a.oninput = function() {
    if (horiz2Text1a.value == "") {
        horiz2Row1a.innerHTML = "&nbsp;" + horiz2Text1a.value;
    } else if (horiz2Text1a.value) {
        horiz2Row1a.innerHTML = "&nbsp;" + horiz2Text1a.value;
    }
};
const horiz2Size1 = document.getElementById("horiz2Size1");
horiz2Size1.oninput = function() {
    horiz2Row1b.style.width = ((Math.abs(horiz2Size1.value)) * .75) + "%";
    horiz2Row1c.style.width = ((75 - (Math.abs(horiz2Size1.value)) * .75)) + "%";
};
const horiz2Text1b = document.getElementById("horiz2Text1b");
horiz2Text1b.oninput = function() {
    if (horiz2Text1b.value == "") {
        horiz2Row1c.innerHTML = horiz2Text1b.value;
    } else if (horiz2Text1b.value) {
        horiz2Row1c.innerHTML = "&nbsp;" + horiz2Text1b.value;
    }
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
    horiz2Row1b.style.backgroundColor = horiz2Color1.value;
    horiz2Row1a.style.backgroundColor = horiz2Color1.value;
};

// Row 2 Customization Logic
const horiz2Text2a = document.getElementById("horiz2Text2a");
horiz2Text2a.oninput = function() {
    if (horiz2Text2a.value == "") {
        horiz2Row2a.innerHTML = "&nbsp;" + horiz2Text2a.value;
    } else if (horiz2Text2a.value) {
        horiz2Row2a.innerHTML = "&nbsp;" + horiz2Text2a.value;
    }
};
const horiz2Size2 = document.getElementById("horiz2Size2");
horiz2Size2.oninput = function() {
    horiz2Row2b.style.width = ((Math.abs(horiz2Size2.value)) * .75) + "%";
    horiz2Row2c.style.width = ((75 - (Math.abs(horiz2Size2.value)) * .75)) + "%";
};
const horiz2Text2b = document.getElementById("horiz2Text2b");
horiz2Text2b.oninput = function() {
    if (horiz2Text2b.value == "") {
        horiz2Row2c.innerHTML = horiz2Text2b.value;
    } else if (horiz2Text2b.value) {
        horiz2Row2c.innerHTML = "&nbsp;" + horiz2Text2b.value;
    }
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
    horiz2Row2b.style.backgroundColor = horiz2Color2.value;
    horiz2Row2a.style.backgroundColor = horiz2Color2.value;
};

// Row 3 Customization Logic
const horiz2Text3a = document.getElementById("horiz2Text3a");
horiz2Text3a.oninput = function() {
    if (horiz2Text3a.value == "") {
        horiz2Row3a.innerHTML = "&nbsp;" + horiz2Text3a.value;
    } else if (horiz2Text3a.value) {
        horiz2Row3a.innerHTML = "&nbsp;" + horiz2Text3a.value;
    }
};
const horiz2Size3 = document.getElementById("horiz2Size3");
horiz2Size3.oninput = function() {
    horiz2Row3b.style.width = ((Math.abs(horiz2Size3.value)) * .75) + "%";
    horiz2Row3c.style.width = ((75 - (Math.abs(horiz2Size3.value)) * .75)) + "%";
};
const horiz2Text3b = document.getElementById("horiz2Text3b");
horiz2Text3b.oninput = function() {
    if (horiz2Text3b.value == "") {
        horiz2Row3c.innerHTML = horiz2Text3b.value;
    } else if (horiz2Text3b.value) {
        horiz2Row3c.innerHTML = "&nbsp;" + horiz2Text3b.value;
    }
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
    horiz2Row3b.style.backgroundColor = horiz2Color3.value;
    horiz2Row3a.style.backgroundColor = horiz2Color3.value;
};

// Row 4 Customization Logic
const horiz2Text4a = document.getElementById("horiz2Text4a");
horiz2Text4a.oninput = function() {
    if (horiz2Text4a.value == "") {
        horiz2Row4a.innerHTML = "&nbsp;" + horiz2Text4a.value;
    } else if (horiz2Text4a.value) {
        horiz2Row4a.innerHTML = "&nbsp;" + horiz2Text4a.value;
    }
};
const horiz2Size4 = document.getElementById("horiz2Size4");
horiz2Size4.oninput = function() {
    horiz2Row4b.style.width = ((Math.abs(horiz2Size4.value)) * .75) + "%";
    horiz2Row4c.style.width = ((75 - (Math.abs(horiz2Size4.value)) * .75)) + "%";
};
const horiz2Text4b = document.getElementById("horiz2Text4b");
horiz2Text4b.oninput = function() {
    if (horiz2Text4b.value == "") {
        horiz2Row4c.innerHTML = horiz2Text4b.value;
    } else if (horiz2Text4b.value) {
        horiz2Row4c.innerHTML = "&nbsp;" + horiz2Text4b.value;
    }
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
    horiz2Row4b.style.backgroundColor = horiz2Color4.value;
    horiz2Row4a.style.backgroundColor = horiz2Color4.value;
};

// Row 5 Customization Logic
const horiz2Text5a = document.getElementById("horiz2Text5a");
horiz2Text5a.oninput = function() {
    if (horiz2Text5a.value == "") {
        horiz2Row5a.innerHTML = "&nbsp;" + horiz2Text5a.value;
    } else if (horiz2Text5a.value) {
        horiz2Row5a.innerHTML = "&nbsp;" + horiz2Text5a.value;
    }
};
const horiz2Size5 = document.getElementById("horiz2Size5");
horiz2Size5.oninput = function() {
    horiz2Row5b.style.width = ((Math.abs(horiz2Size5.value)) * .75) + "%";
    horiz2Row5c.style.width = ((75 - (Math.abs(horiz2Size5.value)) * .75)) + "%";
};
const horiz2Text5b = document.getElementById("horiz2Text5b");
horiz2Text5b.oninput = function() {
    if (horiz2Text5b.value == "") {
        horiz2Row5c.innerHTML = horiz2Text5b.value;
    } else if (horiz2Text5b.value) {
        horiz2Row5c.innerHTML = "&nbsp;" + horiz2Text5b.value;
    }
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
    horiz2Row5b.style.backgroundColor = horiz2Color5.value;
    horiz2Row5a.style.backgroundColor = horiz2Color5.value;
};

// Row 6 Customization Logic
const horiz2Text6a = document.getElementById("horiz2Text6a");
horiz2Text6a.oninput = function() {
    if (horiz2Text6a.value == "") {
        horiz2Row6a.innerHTML = "&nbsp;" + horiz2Text6a.value;
    } else if (horiz2Text6a.value) {
        horiz2Row6a.innerHTML = "&nbsp;" + horiz2Text6a.value;
    }
};
const horiz2Size6 = document.getElementById("horiz2Size6");
horiz2Size6.oninput = function() {
    horiz2Row6b.style.width = ((Math.abs(horiz2Size6.value)) * .75) + "%";
    horiz2Row6c.style.width = ((75 - (Math.abs(horiz2Size6.value)) * .75)) + "%";
};
const horiz2Text6b = document.getElementById("horiz2Text6b");
horiz2Text6b.oninput = function() {
    if (horiz2Text6b.value == "") {
        horiz2Row6c.innerHTML = horiz2Text6b.value;
    } else if (horiz2Text6b.value) {
        horiz2Row6c.innerHTML = "&nbsp;" + horiz2Text6b.value;
    }
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
    horiz2Row6b.style.backgroundColor = horiz2Color6.value;
    horiz2Row6a.style.backgroundColor = horiz2Color6.value;
};

// Row 7 Customization Logic
const horiz2Text7a = document.getElementById("horiz2Text7a");
horiz2Text7a.oninput = function() {
    if (horiz2Text7a.value == "") {
        horiz2Row7a.innerHTML = "&nbsp;" + horiz2Text7a.value;
    } else if (horiz2Text7a.value) {
        horiz2Row7a.innerHTML = "&nbsp;" + horiz2Text7a.value;
    }
};
const horiz2Size7 = document.getElementById("horiz2Size7");
horiz2Size7.oninput = function() {
    horiz2Row7b.style.width = ((Math.abs(horiz2Size7.value)) * .75) + "%";
    horiz2Row7c.style.width = ((75 - (Math.abs(horiz2Size7.value)) * .75)) + "%";
};
const horiz2Text7b = document.getElementById("horiz2Text7b");
horiz2Text7b.oninput = function() {
    if (horiz2Text7b.value == "") {
        horiz2Row7c.innerHTML = horiz2Text7b.value;
    } else if (horiz2Text7b.value) {
        horiz2Row7c.innerHTML = "&nbsp;" + horiz2Text7b.value;
    }
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
    horiz2Row7b.style.backgroundColor = horiz2Color7.value;
    horiz2Row7a.style.backgroundColor = horiz2Color7.value;
};

// Row 8 Customization Logic
const horiz2Text8a = document.getElementById("horiz2Text8a");
horiz2Text8a.oninput = function() {
    if (horiz2Text8a.value == "") {
        horiz2Row8a.innerHTML = "&nbsp;" + horiz2Text8a.value;
    } else if (horiz2Text8a.value) {
        horiz2Row8a.innerHTML = "&nbsp;" + horiz2Text8a.value;
    }
};
const horiz2Size8 = document.getElementById("horiz2Size8");
horiz2Size8.oninput = function() {
    horiz2Row8b.style.width = ((Math.abs(horiz2Size8.value)) * .75) + "%";
    horiz2Row8c.style.width = ((75 - (Math.abs(horiz2Size8.value)) * .75)) + "%";
};
const horiz2Text8b = document.getElementById("horiz2Text8b");
horiz2Text8b.oninput = function() {
    if (horiz2Text8b.value == "") {
        horiz2Row8c.innerHTML = horiz2Text8b.value;
    } else if (horiz2Text8b.value) {
        horiz2Row8c.innerHTML = "&nbsp;" + horiz2Text8b.value;
    }
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
    horiz2Row8b.style.backgroundColor = horiz2Color8.value;
    horiz2Row8a.style.backgroundColor = horiz2Color8.value;
};

// Row 9 Customization Logic
const horiz2Text9a = document.getElementById("horiz2Text9a");
horiz2Text9a.oninput = function() {
    if (horiz2Text9a.value == "") {
        horiz2Row9a.innerHTML = "&nbsp;" + horiz2Text9a.value;
    } else if (horiz2Text9a.value) {
        horiz2Row9a.innerHTML = "&nbsp;" + horiz2Text9a.value;
    }
};
const horiz2Size9 = document.getElementById("horiz2Size9");
horiz2Size9.oninput = function() {
    horiz2Row9b.style.width = ((Math.abs(horiz2Size9.value)) * .75) + "%";
    horiz2Row9c.style.width = ((75 - (Math.abs(horiz2Size9.value)) * .75)) + "%";
};
const horiz2Text9b = document.getElementById("horiz2Text9b");
horiz2Text9b.oninput = function() {
    if (horiz2Text9b.value == "") {
        horiz2Row9c.innerHTML = horiz2Text9b.value;
    } else if (horiz2Text9b.value) {
        horiz2Row9c.innerHTML = "&nbsp;" + horiz2Text9b.value;
    }
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
    horiz2Row9b.style.backgroundColor = horiz2Color9.value;
    horiz2Row9a.style.backgroundColor = horiz2Color9.value;
};

// Row 10 Customization Logic
const horiz2Text10a = document.getElementById("horiz2Text10a");
horiz2Text10a.oninput = function() {
    if (horiz2Text10a.value == "") {
        horiz2Row10a.innerHTML = "&nbsp;" + horiz2Text10a.value;
    } else if (horiz2Text10a.value) {
        horiz2Row10a.innerHTML = "&nbsp;" + horiz2Text10a.value;
    }
};
const horiz2Size10 = document.getElementById("horiz2Size10");
horiz2Size10.oninput = function() {
    horiz2Row10b.style.width = ((Math.abs(horiz2Size10.value)) * .75) + "%";
    horiz2Row10c.style.width = ((75 - (Math.abs(horiz2Size10.value)) * .75)) + "%";
};
const horiz2Text10b = document.getElementById("horiz2Text10b");
horiz2Text10b.oninput = function() {
    if (horiz2Text10b.value == "") {
        horiz2Row10c.innerHTML = horiz2Text10b.value;
    } else if (horiz2Text10b.value) {
        horiz2Row10c.innerHTML = "&nbsp;" + horiz2Text10b.value;
    }
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
    horiz2Row10b.style.backgroundColor = horiz2Color10.value;
    horiz2Row10a.style.backgroundColor = horiz2Color10.value;
};

// Generate Horiz2 HTML Chart Logic
const horiz2Weight = document.getElementById("horiz2Weight");
const horiz2Button = document.getElementById("horiz2Button");
const horiz2Output = document.getElementById("horiz2Output");
horiz2Button.addEventListener("mouseenter", () => { horiz2Output.style.opacity = ".4"; horiz2Weight.style.opacity = ".4"; } );
horiz2Button.addEventListener("mouseleave", () => { horiz2Output.style.opacity = ""; horiz2Weight.style.opacity = ""; horiz2Output.style.borderColor = ""; horiz2Weight.style.color = ""; } );
horiz2Button.addEventListener("click", () => {
    if (rowsData2.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.innerHTML = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    } else if (rowsData2.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: 31px;" height="31">' + horiz2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2c.style.width + '; height: 31px;" height="31">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.innerHTML = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    } else if (rowsData2.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: 31px;" height="31">' + horiz2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2c.style.width + '; height: 31px;" height="31">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: 31px;" height="31">' + horiz2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3c.style.width + '; height: 31px;" height="31">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.innerHTML = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    } else if (rowsData2.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: 31px;" height="31">' + horiz2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2c.style.width + '; height: 31px;" height="31">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: 31px;" height="31">' + horiz2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3c.style.width + '; height: 31px;" height="31">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: 31px;" height="31">' + horiz2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4c.style.width + '; height: 31px;" height="31">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.innerHTML = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    } else if (rowsData2.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: 31px;" height="31">' + horiz2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2c.style.width + '; height: 31px;" height="31">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: 31px;" height="31">' + horiz2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3c.style.width + '; height: 31px;" height="31">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: 31px;" height="31">' + horiz2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4c.style.width + '; height: 31px;" height="31">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5b.style.width + '; height: 31px;" height="31">' + horiz2Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5c.style.width + '; height: 31px;" height="31">' + horiz2Row5c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.innerHTML = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    } else if (rowsData2.value === "6") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: 31px;" height="31">' + horiz2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2c.style.width + '; height: 31px;" height="31">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: 31px;" height="31">' + horiz2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3c.style.width + '; height: 31px;" height="31">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: 31px;" height="31">' + horiz2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4c.style.width + '; height: 31px;" height="31">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5b.style.width + '; height: 31px;" height="31">' + horiz2Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5c.style.width + '; height: 31px;" height="31">' + horiz2Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6b.style.width + '; height: 31px;" height="31">' + horiz2Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6c.style.width + '; height: 31px;" height="31">' + horiz2Row6c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.innerHTML = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    } else if (rowsData2.value === "7") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: 31px;" height="31">' + horiz2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2c.style.width + '; height: 31px;" height="31">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: 31px;" height="31">' + horiz2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3c.style.width + '; height: 31px;" height="31">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: 31px;" height="31">' + horiz2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4c.style.width + '; height: 31px;" height="31">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5b.style.width + '; height: 31px;" height="31">' + horiz2Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5c.style.width + '; height: 31px;" height="31">' + horiz2Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6b.style.width + '; height: 31px;" height="31">' + horiz2Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6c.style.width + '; height: 31px;" height="31">' + horiz2Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7b.style.width + '; height: 31px;" height="31">' + horiz2Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7c.style.width + '; height: 31px;" height="31">' + horiz2Row7c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.innerHTML = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    } else if (rowsData2.value === "8") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: 31px;" height="31">' + horiz2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2c.style.width + '; height: 31px;" height="31">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: 31px;" height="31">' + horiz2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3c.style.width + '; height: 31px;" height="31">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: 31px;" height="31">' + horiz2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4c.style.width + '; height: 31px;" height="31">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5b.style.width + '; height: 31px;" height="31">' + horiz2Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5c.style.width + '; height: 31px;" height="31">' + horiz2Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6b.style.width + '; height: 31px;" height="31">' + horiz2Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6c.style.width + '; height: 31px;" height="31">' + horiz2Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7b.style.width + '; height: 31px;" height="31">' + horiz2Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7c.style.width + '; height: 31px;" height="31">' + horiz2Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row8b.style.width + '; height: 31px;" height="31">' + horiz2Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row8c.style.width + '; height: 31px;" height="31">' + horiz2Row8c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.innerHTML = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    } else if (rowsData2.value === "9") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: 31px;" height="31">' + horiz2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2c.style.width + '; height: 31px;" height="31">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: 31px;" height="31">' + horiz2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3c.style.width + '; height: 31px;" height="31">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: 31px;" height="31">' + horiz2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4c.style.width + '; height: 31px;" height="31">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5b.style.width + '; height: 31px;" height="31">' + horiz2Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5c.style.width + '; height: 31px;" height="31">' + horiz2Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6b.style.width + '; height: 31px;" height="31">' + horiz2Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6c.style.width + '; height: 31px;" height="31">' + horiz2Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7b.style.width + '; height: 31px;" height="31">' + horiz2Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7c.style.width + '; height: 31px;" height="31">' + horiz2Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row8b.style.width + '; height: 31px;" height="31">' + horiz2Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row8c.style.width + '; height: 31px;" height="31">' + horiz2Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row9b.style.width + '; height: 31px;" height="31">' + horiz2Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row9c.style.width + '; height: 31px;" height="31">' + horiz2Row9c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.innerHTML = chartCode;
        horiz2Weight.textContent = Math.ceil(horiz2Output.value.length / 1024) + 'KB';
    } else if (rowsData2.value === "10") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz2csCode + ' <tr> <td align="left" style="padding: ' + horiz2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1c.style.width + '; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: 31px;" height="31">' + horiz2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2c.style.width + '; height: 31px;" height="31">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: 31px;" height="31">' + horiz2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3c.style.width + '; height: 31px;" height="31">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: 31px;" height="31">' + horiz2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4c.style.width + '; height: 31px;" height="31">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5b.style.width + '; height: 31px;" height="31">' + horiz2Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5c.style.width + '; height: 31px;" height="31">' + horiz2Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6b.style.width + '; height: 31px;" height="31">' + horiz2Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6c.style.width + '; height: 31px;" height="31">' + horiz2Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7b.style.width + '; height: 31px;" height="31">' + horiz2Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7c.style.width + '; height: 31px;" height="31">' + horiz2Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row8b.style.width + '; height: 31px;" height="31">' + horiz2Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row8c.style.width + '; height: 31px;" height="31">' + horiz2Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row9b.style.width + '; height: 31px;" height="31">' + horiz2Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row9c.style.width + '; height: 31px;" height="31">' + horiz2Row9c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 6px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="background-color: ' + horiz2Color10.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row10a.innerHTML + '</td><td align="right" style="background-color: ' + horiz2Color10.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row10b.style.width + '; height: 31px;" height="31">' + horiz2Row10b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row10c.style.width + '; height: 31px;" height="31">' + horiz2Row10c.innerHTML + '</td></tr></table> </td></tr>' + horiz2srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz2Output.innerHTML = chartCode;
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
        if (horiz3Div.checked == true) {
            horiz3DivNodes1[i].firstElementChild.style.borderTop = "1px solid #e3e3e3";
        } else if (horiz3Div.checked == false) {
            horiz3DivNodes1[i].firstElementChild.style.borderTop = "none";
        }
    }
    if (horiz3Div.checked == true) { // Adds border-top to output code if checked
        return horiz3borderTop = 'border-top: 1px solid #e3e3e3; ';
    } else if (horiz3Div.checked == false) {
        return horiz3borderTop = "";
    }
});

// Horizontal Chart III Caption
let horiz3TopBarSpace = "";
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
        horiz3Bars[0].firstElementChild.style.padding = "30px 0 5px 0";
        horiz3TopBarSpace = "30px 0 5px 0";
        horiz3Cap.style.marginBottom = "0";
        return horiz3csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz3Sub.innerHTML + '</td> </tr>';
    } else if (horiz3capText.value && horiz3subText.value == "") {
        horiz3Bars[0].firstElementChild.style.padding = "0";
        horiz3TopBarSpace = "0";
        horiz3Cap.style.marginBottom = "30px";
        return horiz3csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 30px; text-align: left;">' + horiz3Cap.innerHTML + '</caption>';
    } else if (horiz3capText.value && horiz3subText.value) {
        horiz3Bars[0].firstElementChild.style.padding = "30px 0 5px 0";
        horiz3TopBarSpace = "30px 0 5px 0";
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
        horiz3Cap.style.marginBottom = "30px";
        return horiz3csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 30px; text-align: left;">' + horiz3Cap.innerHTML + '</caption>';
    } else if (horiz3subText.value && horiz3capText.value == "") {
        horiz3Bars[0].firstElementChild.style.padding = "30px 0 5px 0";
        horiz3TopBarSpace = "30px 0 5px 0";
        horiz3Cap.style.marginBottom = "0";
        return horiz3csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz3Sub.innerHTML + '</td> </tr>';
    } else if (horiz3subText.value && horiz3capText.value) {
        horiz3Bars[0].firstElementChild.style.padding = "30px 0 5px 0";
        horiz3TopBarSpace = "30px 0 5px 0";
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
    if (horiz3srcText.value == "") {
        horiz3Source.style.paddingTop = "0";
        return horiz3srcCode = "";
    } else if (horiz3srcText.value) {
        horiz3Source.style.paddingTop = "40px";
        return horiz3srcCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 40px; text-align: left;">' + horiz3Source.innerHTML + '</td></tr>';
    }
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
    if (horiz3Text1a.value == "") {
        horiz3Row1a.innerHTML = horiz3Text1a.value;
    } else if (horiz3Text1a.value) {
        horiz3Row1a.innerHTML = horiz3Text1a.value;
    }
};
const horiz3Size1 = document.getElementById("horiz3Size1");
horiz3Size1.oninput = function() {
    horiz3Row1b.style.width = ((Math.abs(horiz3Size1.value)) * .75) + "%";
    horiz3Row1c.style.width = ((75 - (Math.abs(horiz3Size1.value)) * .75)) + "%";
};
const horiz3Text1b = document.getElementById("horiz3Text1b");
horiz3Text1b.oninput = function() {
    if (horiz3Text1b.value == "") {
        horiz3Row1c.innerHTML = horiz3Text1b.value;
    } else if (horiz3Text1b.value) {
        horiz3Row1c.innerHTML = "&nbsp;" + horiz3Text1b.value;
    }
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
    if (horiz3Text2a.value == "") {
        horiz3Row2a.innerHTML = horiz3Text2a.value;
    } else if (horiz3Text2a.value) {
        horiz3Row2a.innerHTML = horiz3Text2a.value;
    }
};
const horiz3Size2 = document.getElementById("horiz3Size2");
horiz3Size2.oninput = function() {
    horiz3Row2b.style.width = ((Math.abs(horiz3Size2.value)) * .75) + "%";
    horiz3Row2c.style.width = ((75 - (Math.abs(horiz3Size2.value)) * .75)) + "%";
};
const horiz3Text2b = document.getElementById("horiz3Text2b");
horiz3Text2b.oninput = function() {
    if (horiz3Text2b.value == "") {
        horiz3Row2c.innerHTML = horiz3Text2b.value;
    } else if (horiz3Text2b.value) {
        horiz3Row2c.innerHTML = "&nbsp;" + horiz3Text2b.value;
    }
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
    if (horiz3Text3a.value == "") {
        horiz3Row3a.innerHTML = horiz3Text3a.value;
    } else if (horiz3Text3a.value) {
        horiz3Row3a.innerHTML = horiz3Text3a.value;
    }
};
const horiz3Size3 = document.getElementById("horiz3Size3");
horiz3Size3.oninput = function() {
    horiz3Row3b.style.width = ((Math.abs(horiz3Size3.value)) * .75) + "%";
    horiz3Row3c.style.width = ((75 - (Math.abs(horiz3Size3.value)) * .75)) + "%";
};
const horiz3Text3b = document.getElementById("horiz3Text3b");
horiz3Text3b.oninput = function() {
    if (horiz3Text3b.value == "") {
        horiz3Row3c.innerHTML = horiz3Text3b.value;
    } else if (horiz3Text3b.value) {
        horiz3Row3c.innerHTML = "&nbsp;" + horiz3Text3b.value;
    }
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
    if (horiz3Text4a.value == "") {
        horiz3Row4a.innerHTML = horiz3Text4a.value;
    } else if (horiz3Text4a.value) {
        horiz3Row4a.innerHTML = horiz3Text4a.value;
    }
};
const horiz3Size4 = document.getElementById("horiz3Size4");
horiz3Size4.oninput = function() {
    horiz3Row4b.style.width = ((Math.abs(horiz3Size4.value)) * .75) + "%";
    horiz3Row4c.style.width = ((75 - (Math.abs(horiz3Size4.value)) * .75)) + "%";
};
const horiz3Text4b = document.getElementById("horiz3Text4b");
horiz3Text4b.oninput = function() {
    if (horiz3Text4b.value == "") {
        horiz3Row4c.innerHTML = horiz3Text4b.value;
    } else if (horiz3Text4b.value) {
        horiz3Row4c.innerHTML = "&nbsp;" + horiz3Text4b.value;
    }
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
    if (horiz3Text5a.value == "") {
        horiz3Row5a.innerHTML = horiz3Text5a.value;
    } else if (horiz3Text5a.value) {
        horiz3Row5a.innerHTML = horiz3Text5a.value;
    }
};
const horiz3Size5 = document.getElementById("horiz3Size5");
horiz3Size5.oninput = function() {
    horiz3Row5b.style.width = ((Math.abs(horiz3Size5.value)) * .75) + "%";
    horiz3Row5c.style.width = ((75 - (Math.abs(horiz3Size5.value)) * .75)) + "%";
};
const horiz3Text5b = document.getElementById("horiz3Text5b");
horiz3Text5b.oninput = function() {
    if (horiz3Text5b.value == "") {
        horiz3Row5c.innerHTML = horiz3Text5b.value;
    } else if (horiz3Text5b.value) {
        horiz3Row5c.innerHTML = "&nbsp;" + horiz3Text5b.value;
    }
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
    if (horiz3Text6a.value == "") {
        horiz3Row6a.innerHTML = horiz3Text6a.value;
    } else if (horiz3Text6a.value) {
        horiz3Row6a.innerHTML = horiz3Text6a.value;
    }
};
const horiz3Size6 = document.getElementById("horiz3Size6");
horiz3Size6.oninput = function() {
    horiz3Row6b.style.width = ((Math.abs(horiz3Size6.value)) * .75) + "%";
    horiz3Row6c.style.width = ((75 - (Math.abs(horiz3Size6.value)) * .75)) + "%";
};
const horiz3Text6b = document.getElementById("horiz3Text6b");
horiz3Text6b.oninput = function() {
    if (horiz3Text6b.value == "") {
        horiz3Row6c.innerHTML = horiz3Text6b.value;
    } else if (horiz3Text6b.value) {
        horiz3Row6c.innerHTML = "&nbsp;" + horiz3Text6b.value;
    }
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
    if (horiz3Text7a.value == "") {
        horiz3Row7a.innerHTML = horiz3Text7a.value;
    } else if (horiz3Text7a.value) {
        horiz3Row7a.innerHTML = horiz3Text7a.value;
    }
};
const horiz3Size7 = document.getElementById("horiz3Size7");
horiz3Size7.oninput = function() {
    horiz3Row7b.style.width = ((Math.abs(horiz3Size7.value)) * .75) + "%";
    horiz3Row7c.style.width = ((75 - (Math.abs(horiz3Size7.value)) * .75)) + "%";
};
const horiz3Text7b = document.getElementById("horiz3Text7b");
horiz3Text7b.oninput = function() {
    if (horiz3Text7b.value == "") {
        horiz3Row7c.innerHTML = horiz3Text7b.value;
    } else if (horiz3Text7b.value) {
        horiz3Row7c.innerHTML = "&nbsp;" + horiz3Text7b.value;
    }
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
    if (horiz3Text8a.value == "") {
        horiz3Row8a.innerHTML = horiz3Text8a.value;
    } else if (horiz3Text8a.value) {
        horiz3Row8a.innerHTML = horiz3Text8a.value;
    }
};
const horiz3Size8 = document.getElementById("horiz3Size8");
horiz3Size8.oninput = function() {
    horiz3Row8b.style.width = ((Math.abs(horiz3Size8.value)) * .75) + "%";
    horiz3Row8c.style.width = ((75 - (Math.abs(horiz3Size8.value)) * .75)) + "%";
};
const horiz3Text8b = document.getElementById("horiz3Text8b");
horiz3Text8b.oninput = function() {
    if (horiz3Text8b.value == "") {
        horiz3Row8c.innerHTML = horiz3Text8b.value;
    } else if (horiz3Text8b.value) {
        horiz3Row8c.innerHTML = "&nbsp;" + horiz3Text8b.value;
    }
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
    if (horiz3Text9a.value == "") {
        horiz3Row9a.innerHTML = horiz3Text9a.value;
    } else if (horiz3Text9a.value) {
        horiz3Row9a.innerHTML = horiz3Text9a.value;
    }
};
const horiz3Size9 = document.getElementById("horiz3Size9");
horiz3Size9.oninput = function() {
    horiz3Row9b.style.width = ((Math.abs(horiz3Size9.value)) * .75) + "%";
    horiz3Row9c.style.width = ((75 - (Math.abs(horiz3Size9.value)) * .75)) + "%";
};
const horiz3Text9b = document.getElementById("horiz3Text9b");
horiz3Text9b.oninput = function() {
    if (horiz3Text9b.value == "") {
        horiz3Row9c.innerHTML = horiz3Text9b.value;
    } else if (horiz3Text9b.value) {
        horiz3Row9c.innerHTML = "&nbsp;" + horiz3Text9b.value;
    }
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
    if (horiz3Text10a.value == "") {
        horiz3Row10a.innerHTML = horiz3Text10a.value;
    } else if (horiz3Text10a.value) {
        horiz3Row10a.innerHTML = horiz3Text10a.value;
    }
};
const horiz3Size10 = document.getElementById("horiz3Size10");
horiz3Size10.oninput = function() {
    horiz3Row10b.style.width = ((Math.abs(horiz3Size10.value)) * .75) + "%";
    horiz3Row10c.style.width = ((75 - (Math.abs(horiz3Size10.value)) * .75)) + "%";
};
const horiz3Text10b = document.getElementById("horiz3Text10b");
horiz3Text10b.oninput = function() {
    if (horiz3Text10b.value == "") {
        horiz3Row10c.innerHTML = horiz3Text10b.value;
    } else if (horiz3Text10b.value) {
        horiz3Row10c.innerHTML = "&nbsp;" + horiz3Text10b.value;
    }
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

// Generate Horiz3 HTML Chart Logic
const horiz3Weight = document.getElementById("horiz3Weight");
const horiz3Button = document.getElementById("horiz3Button");
const horiz3Output = document.getElementById("horiz3Output");
horiz3Button.addEventListener("mouseenter", () => { horiz3Output.style.opacity = ".4"; horiz3Weight.style.opacity = ".4"; } );
horiz3Button.addEventListener("mouseleave", () => { horiz3Output.style.opacity = ""; horiz3Weight.style.opacity = ""; horiz3Output.style.borderColor = ""; horiz3Weight.style.color = ""; } );
horiz3Button.addEventListener("click", () => {
    if (rowsData3.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.innerHTML = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    } else if (rowsData3.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: 28px;" height="28">' + horiz3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2c.style.width + '; height: 28px;" height="28">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.innerHTML = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    } else if (rowsData3.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: 28px;" height="28">' + horiz3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2c.style.width + '; height: 28px;" height="28">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: 28px;" height="28">' + horiz3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3c.style.width + '; height: 28px;" height="28">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.innerHTML = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    } else if (rowsData3.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: 28px;" height="28">' + horiz3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2c.style.width + '; height: 28px;" height="28">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: 28px;" height="28">' + horiz3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3c.style.width + '; height: 28px;" height="28">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: 28px;" height="28">' + horiz3Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4c.style.width + '; height: 28px;" height="28">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.innerHTML = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    } else if (rowsData3.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: 28px;" height="28">' + horiz3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2c.style.width + '; height: 28px;" height="28">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: 28px;" height="28">' + horiz3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3c.style.width + '; height: 28px;" height="28">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: 28px;" height="28">' + horiz3Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4c.style.width + '; height: 28px;" height="28">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5b.style.width + '; height: 28px;" height="28">' + horiz3Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5c.style.width + '; height: 28px;" height="28">' + horiz3Row5c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.innerHTML = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    } else if (rowsData3.value === "6") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: 28px;" height="28">' + horiz3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2c.style.width + '; height: 28px;" height="28">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: 28px;" height="28">' + horiz3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3c.style.width + '; height: 28px;" height="28">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: 28px;" height="28">' + horiz3Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4c.style.width + '; height: 28px;" height="28">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5b.style.width + '; height: 28px;" height="28">' + horiz3Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5c.style.width + '; height: 28px;" height="28">' + horiz3Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6b.style.width + '; height: 28px;" height="28">' + horiz3Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6c.style.width + '; height: 28px;" height="28">' + horiz3Row6c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.innerHTML = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    } else if (rowsData3.value === "7") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: 28px;" height="28">' + horiz3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2c.style.width + '; height: 28px;" height="28">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: 28px;" height="28">' + horiz3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3c.style.width + '; height: 28px;" height="28">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: 28px;" height="28">' + horiz3Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4c.style.width + '; height: 28px;" height="28">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5b.style.width + '; height: 28px;" height="28">' + horiz3Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5c.style.width + '; height: 28px;" height="28">' + horiz3Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6b.style.width + '; height: 28px;" height="28">' + horiz3Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6c.style.width + '; height: 28px;" height="28">' + horiz3Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7b.style.width + '; height: 28px;" height="28">' + horiz3Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7c.style.width + '; height: 28px;" height="28">' + horiz3Row7c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.innerHTML = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    } else if (rowsData3.value === "8") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: 28px;" height="28">' + horiz3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2c.style.width + '; height: 28px;" height="28">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: 28px;" height="28">' + horiz3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3c.style.width + '; height: 28px;" height="28">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: 28px;" height="28">' + horiz3Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4c.style.width + '; height: 28px;" height="28">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5b.style.width + '; height: 28px;" height="28">' + horiz3Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5c.style.width + '; height: 28px;" height="28">' + horiz3Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6b.style.width + '; height: 28px;" height="28">' + horiz3Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6c.style.width + '; height: 28px;" height="28">' + horiz3Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7b.style.width + '; height: 28px;" height="28">' + horiz3Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7c.style.width + '; height: 28px;" height="28">' + horiz3Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row8b.style.width + '; height: 28px;" height="28">' + horiz3Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row8c.style.width + '; height: 28px;" height="28">' + horiz3Row8c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.innerHTML = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    } else if (rowsData3.value === "9") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: 28px;" height="28">' + horiz3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2c.style.width + '; height: 28px;" height="28">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: 28px;" height="28">' + horiz3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3c.style.width + '; height: 28px;" height="28">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: 28px;" height="28">' + horiz3Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4c.style.width + '; height: 28px;" height="28">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5b.style.width + '; height: 28px;" height="28">' + horiz3Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5c.style.width + '; height: 28px;" height="28">' + horiz3Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6b.style.width + '; height: 28px;" height="28">' + horiz3Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6c.style.width + '; height: 28px;" height="28">' + horiz3Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7b.style.width + '; height: 28px;" height="28">' + horiz3Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7c.style.width + '; height: 28px;" height="28">' + horiz3Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row8b.style.width + '; height: 28px;" height="28">' + horiz3Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row8c.style.width + '; height: 28px;" height="28">' + horiz3Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row9b.style.width + '; height: 28px;" height="28">' + horiz3Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row9c.style.width + '; height: 28px;" height="28">' + horiz3Row9c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.innerHTML = chartCode;
        horiz3Weight.textContent = Math.ceil(horiz3Output.value.length / 1024) + 'KB';
    } else if (rowsData3.value === "10") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz3csCode + ' <tr> <td align="left" style="padding: ' + horiz3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1c.style.width + '; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: 28px;" height="28">' + horiz3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2c.style.width + '; height: 28px;" height="28">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: 28px;" height="28">' + horiz3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3c.style.width + '; height: 28px;" height="28">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: 28px;" height="28">' + horiz3Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4c.style.width + '; height: 28px;" height="28">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5b.style.width + '; height: 28px;" height="28">' + horiz3Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5c.style.width + '; height: 28px;" height="28">' + horiz3Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6b.style.width + '; height: 28px;" height="28">' + horiz3Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6c.style.width + '; height: 28px;" height="28">' + horiz3Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7b.style.width + '; height: 28px;" height="28">' + horiz3Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7c.style.width + '; height: 28px;" height="28">' + horiz3Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row8b.style.width + '; height: 28px;" height="28">' + horiz3Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row8c.style.width + '; height: 28px;" height="28">' + horiz3Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row9b.style.width + '; height: 28px;" height="28">' + horiz3Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row9c.style.width + '; height: 28px;" height="28">' + horiz3Row9c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz3borderTop + 'padding: 5px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row10a.innerHTML + '</td><td align="right" style="background-color: ' + horiz3Color10.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row10b.style.width + '; height: 28px;" height="28">' + horiz3Row10b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row10c.style.width + '; height: 28px;" height="28">' + horiz3Row10c.innerHTML + '</td></tr></table> </td></tr>' + horiz3srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz3Output.innerHTML = chartCode;
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
        if (horiz4Div.checked == true) {
            horiz4DivNodes1[i].firstElementChild.style.borderTop = "1px solid #e3e3e3";
        } else if (horiz4Div.checked == false) {
            horiz4DivNodes1[i].firstElementChild.style.borderTop = "none";
        }
    }
    if (horiz4Div.checked == true) { // Adds border-top to output code if checked
        return horiz4borderTop = 'border-top: 1px solid #e3e3e3; ';
    } else if (horiz4Div.checked == false) {
        return horiz4borderTop = "";
    }
});

// Horizontal Chart IV Caption
let horiz4TopBarSpace = "";
let horiz4csCode = "";
const horiz4Cap = document.getElementById("horiz4Cap"); // Caption or chart title
const horiz4capText = document.getElementById("horiz4capText"); // Caption or chart title text
horiz4capText.oninput = function() {
    horiz4Cap.innerHTML = horiz4capText.value;
    if (horiz4capText.value == "" && horiz4subText.value == "") {
        horiz4Bars[0].firstElementChild.style.padding = "0 0 4px 0"; // Targets the first data bar below caption/subtitle text
        horiz4TopBarSpace = "0 0 4px 0"; // Padding for first data bar below caption/subtitle text for output code
        horiz4Cap.style.marginBottom = "0";
        return horiz4csCode = "";
    } else if (horiz4capText.value == "" && horiz4subText.value) {
        horiz4Bars[0].firstElementChild.style.padding = "30px 0 4px 0";
        horiz4TopBarSpace = "30px 0 4px 0";
        horiz4Cap.style.marginBottom = "0";
        return horiz4csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz4Sub.innerHTML + '</td> </tr>';
    } else if (horiz4capText.value && horiz4subText.value == "") {
        horiz4Bars[0].firstElementChild.style.padding = "0";
        horiz4TopBarSpace = "0";
        horiz4Cap.style.marginBottom = "30px";
        return horiz4csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 30px; text-align: left;">' + horiz4Cap.innerHTML + '</caption>';
    } else if (horiz4capText.value && horiz4subText.value) {
        horiz4Bars[0].firstElementChild.style.padding = "30px 0 4px 0";
        horiz4TopBarSpace = "30px 0 4px 0";
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
        horiz4Bars[0].firstElementChild.style.padding = "0 0 4px 0";
        horiz4TopBarSpace = "0 0 4px 0";
        horiz4Cap.style.marginBottom = "0";
        return horiz4csCode = "";
    } else if (horiz4subText.value == "" && horiz4capText.value) {
        horiz4Bars[0].firstElementChild.style.padding = "0 0 4px 0";
        horiz4TopBarSpace = "0 0 4px 0";
        horiz4Cap.style.marginBottom = "30px";
        return horiz4csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 30px; text-align: left;">' + horiz4Cap.innerHTML + '</caption>';
    } else if (horiz4subText.value && horiz4capText.value == "") {
        horiz4Bars[0].firstElementChild.style.padding = "30px 0 4px 0";
        horiz4TopBarSpace = "30px 0 4px 0";
        horiz4Cap.style.marginBottom = "0";
        return horiz4csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz4Sub.innerHTML + '</td> </tr>';
    } else if (horiz4subText.value && horiz4capText.value) {
        horiz4Bars[0].firstElementChild.style.padding = "30px 0 4px 0";
        horiz4TopBarSpace = "30px 0 4px 0";
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
    if (horiz4srcText.value == "") {
        horiz4Source.style.paddingTop = "0";
        return horiz4srcCode = "";
    } else if (horiz4srcText.value) {
        horiz4Source.style.paddingTop = "40px";
        return horiz4srcCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 40px; text-align: left;">' + horiz4Source.innerHTML + '</td></tr>';
    }
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
    if (horiz4Text1a.value == "") {
        horiz4Row1a.innerHTML = horiz4Text1a.value;
    } else if (horiz4Text1a.value) {
        horiz4Row1a.innerHTML = horiz4Text1a.value;
    }
};
const horiz4Size1 = document.getElementById("horiz4Size1");
horiz4Size1.oninput = function() {
    horiz4Row1b.style.width = ((Math.abs(horiz4Size1.value)) * .75) + "%";
    horiz4Row1c.style.width = ((75 - (Math.abs(horiz4Size1.value)) * .75)) + "%";
};
const horiz4Text1b = document.getElementById("horiz4Text1b");
horiz4Text1b.oninput = function() {
    if (horiz4Text1b.value == "") {
        horiz4Row1c.innerHTML = horiz4Text1b.value;
    } else if (horiz4Text1b.value) {
        horiz4Row1c.innerHTML = "&nbsp;" + horiz4Text1b.value;
    }
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
    if (horiz4Text2a.value == "") {
        horiz4Row2a.innerHTML = horiz4Text2a.value;
    } else if (horiz4Text2a.value) {
        horiz4Row2a.innerHTML = horiz4Text2a.value;
    }
};
const horiz4Size2 = document.getElementById("horiz4Size2");
horiz4Size2.oninput = function() {
    horiz4Row2b.style.width = ((Math.abs(horiz4Size2.value)) * .75) + "%";
    horiz4Row2c.style.width = ((75 - (Math.abs(horiz4Size2.value)) * .75)) + "%";
};
const horiz4Text2b = document.getElementById("horiz4Text2b");
horiz4Text2b.oninput = function() {
    if (horiz4Text2b.value == "") {
        horiz4Row2c.innerHTML = horiz4Text2b.value;
    } else if (horiz4Text2b.value) {
        horiz4Row2c.innerHTML = "&nbsp;" + horiz4Text2b.value;
    }
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
    if (horiz4Text3a.value == "") {
        horiz4Row3a.innerHTML = horiz4Text3a.value;
    } else if (horiz4Text3a.value) {
        horiz4Row3a.innerHTML = horiz4Text3a.value;
    }
};
const horiz4Size3 = document.getElementById("horiz4Size3");
horiz4Size3.oninput = function() {
    horiz4Row3b.style.width = ((Math.abs(horiz4Size3.value)) * .75) + "%";
    horiz4Row3c.style.width = ((75 - (Math.abs(horiz4Size3.value)) * .75)) + "%";
};
const horiz4Text3b = document.getElementById("horiz4Text3b");
horiz4Text3b.oninput = function() {
    if (horiz4Text3b.value == "") {
        horiz4Row3c.innerHTML = horiz4Text3b.value;
    } else if (horiz4Text3b.value) {
        horiz4Row3c.innerHTML = "&nbsp;" + horiz4Text3b.value;
    }
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
    if (horiz4Text4a.value == "") {
        horiz4Row4a.innerHTML = horiz4Text4a.value;
    } else if (horiz4Text4a.value) {
        horiz4Row4a.innerHTML = horiz4Text4a.value;
    }
};
const horiz4Size4 = document.getElementById("horiz4Size4");
horiz4Size4.oninput = function() {
    horiz4Row4b.style.width = ((Math.abs(horiz4Size4.value)) * .75) + "%";
    horiz4Row4c.style.width = ((75 - (Math.abs(horiz4Size4.value)) * .75)) + "%";
};
const horiz4Text4b = document.getElementById("horiz4Text4b");
horiz4Text4b.oninput = function() {
    if (horiz4Text4b.value == "") {
        horiz4Row4c.innerHTML = horiz4Text4b.value;
    } else if (horiz4Text4b.value) {
        horiz4Row4c.innerHTML = "&nbsp;" + horiz4Text4b.value;
    }
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
    if (horiz4Text5a.value == "") {
        horiz4Row5a.innerHTML = horiz4Text5a.value;
    } else if (horiz4Text5a.value) {
        horiz4Row5a.innerHTML = horiz4Text5a.value;
    }
};
const horiz4Size5 = document.getElementById("horiz4Size5");
horiz4Size5.oninput = function() {
    horiz4Row5b.style.width = ((Math.abs(horiz4Size5.value)) * .75) + "%";
    horiz4Row5c.style.width = ((75 - (Math.abs(horiz4Size5.value)) * .75)) + "%";
};
const horiz4Text5b = document.getElementById("horiz4Text5b");
horiz4Text5b.oninput = function() {
    if (horiz4Text5b.value == "") {
        horiz4Row5c.innerHTML = horiz4Text5b.value;
    } else if (horiz4Text5b.value) {
        horiz4Row5c.innerHTML = "&nbsp;" + horiz4Text5b.value;
    }
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
    if (horiz4Text6a.value == "") {
        horiz4Row6a.innerHTML = horiz4Text6a.value;
    } else if (horiz4Text6a.value) {
        horiz4Row6a.innerHTML = horiz4Text6a.value;
    }
};
const horiz4Size6 = document.getElementById("horiz4Size6");
horiz4Size6.oninput = function() {
    horiz4Row6b.style.width = ((Math.abs(horiz4Size6.value)) * .75) + "%";
    horiz4Row6c.style.width = ((75 - (Math.abs(horiz4Size6.value)) * .75)) + "%";
};
const horiz4Text6b = document.getElementById("horiz4Text6b");
horiz4Text6b.oninput = function() {
    if (horiz4Text6b.value == "") {
        horiz4Row6c.innerHTML = horiz4Text6b.value;
    } else if (horiz4Text6b.value) {
        horiz4Row6c.innerHTML = "&nbsp;" + horiz4Text6b.value;
    }
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
    if (horiz4Text7a.value == "") {
        horiz4Row7a.innerHTML = horiz4Text7a.value;
    } else if (horiz4Text7a.value) {
        horiz4Row7a.innerHTML = horiz4Text7a.value;
    }
};
const horiz4Size7 = document.getElementById("horiz4Size7");
horiz4Size7.oninput = function() {
    horiz4Row7b.style.width = ((Math.abs(horiz4Size7.value)) * .75) + "%";
    horiz4Row7c.style.width = ((75 - (Math.abs(horiz4Size7.value)) * .75)) + "%";
};
const horiz4Text7b = document.getElementById("horiz4Text7b");
horiz4Text7b.oninput = function() {
    if (horiz4Text7b.value == "") {
        horiz4Row7c.innerHTML = horiz4Text7b.value;
    } else if (horiz4Text7b.value) {
        horiz4Row7c.innerHTML = "&nbsp;" + horiz4Text7b.value;
    }
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
    if (horiz4Text8a.value == "") {
        horiz4Row8a.innerHTML = horiz4Text8a.value;
    } else if (horiz4Text8a.value) {
        horiz4Row8a.innerHTML = horiz4Text8a.value;
    }
};
const horiz4Size8 = document.getElementById("horiz4Size8");
horiz4Size8.oninput = function() {
    horiz4Row8b.style.width = ((Math.abs(horiz4Size8.value)) * .75) + "%";
    horiz4Row8c.style.width = ((75 - (Math.abs(horiz4Size8.value)) * .75)) + "%";
};
const horiz4Text8b = document.getElementById("horiz4Text8b");
horiz4Text8b.oninput = function() {
    if (horiz4Text8b.value == "") {
        horiz4Row8c.innerHTML = horiz4Text8b.value;
    } else if (horiz4Text8b.value) {
        horiz4Row8c.innerHTML = "&nbsp;" + horiz4Text8b.value;
    }
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
    if (horiz4Text9a.value == "") {
        horiz4Row9a.innerHTML = horiz4Text9a.value;
    } else if (horiz4Text9a.value) {
        horiz4Row9a.innerHTML = horiz4Text9a.value;
    }
};
const horiz4Size9 = document.getElementById("horiz4Size9");
horiz4Size9.oninput = function() {
    horiz4Row9b.style.width = ((Math.abs(horiz4Size9.value)) * .75) + "%";
    horiz4Row9c.style.width = ((75 - (Math.abs(horiz4Size9.value)) * .75)) + "%";
};
const horiz4Text9b = document.getElementById("horiz4Text9b");
horiz4Text9b.oninput = function() {
    if (horiz4Text9b.value == "") {
        horiz4Row9c.innerHTML = horiz4Text9b.value;
    } else if (horiz4Text9b.value) {
        horiz4Row9c.innerHTML = "&nbsp;" + horiz4Text9b.value;
    }
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
    if (horiz4Text10a.value == "") {
        horiz4Row10a.innerHTML = horiz4Text10a.value;
    } else if (horiz4Text10a.value) {
        horiz4Row10a.innerHTML = horiz4Text10a.value;
    }
};
const horiz4Size10 = document.getElementById("horiz4Size10");
horiz4Size10.oninput = function() {
    horiz4Row10b.style.width = ((Math.abs(horiz4Size10.value)) * .75) + "%";
    horiz4Row10c.style.width = ((75 - (Math.abs(horiz4Size10.value)) * .75)) + "%";
};
const horiz4Text10b = document.getElementById("horiz4Text10b");
horiz4Text10b.oninput = function() {
    if (horiz4Text10b.value == "") {
        horiz4Row10c.innerHTML = horiz4Text10b.value;
    } else if (horiz4Text10b.value) {
        horiz4Row10c.innerHTML = "&nbsp;" + horiz4Text10b.value;
    }
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

// Generate Horiz4 HTML Chart Logic
const horiz4Weight = document.getElementById("horiz4Weight");
const horiz4Button = document.getElementById("horiz4Button");
const horiz4Output = document.getElementById("horiz4Output");
horiz4Button.addEventListener("mouseenter", () => { horiz4Output.style.opacity = ".4"; horiz4Weight.style.opacity = ".4"; } );
horiz4Button.addEventListener("mouseleave", () => { horiz4Output.style.opacity = ""; horiz4Weight.style.opacity = ""; horiz4Output.style.borderColor = ""; horiz4Weight.style.color = ""; } );
horiz4Button.addEventListener("click", () => {
    if (rowsData11.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.innerHTML = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    } else if (rowsData11.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2b.style.width + '; height: 54px;" height="54">' + horiz4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2c.style.width + '; height: 54px;" height="54">' + horiz4Row2c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.innerHTML = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    } else if (rowsData11.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2b.style.width + '; height: 54px;" height="54">' + horiz4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2c.style.width + '; height: 54px;" height="54">' + horiz4Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3b.style.width + '; height: 54px;" height="54">' + horiz4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3c.style.width + '; height: 54px;" height="54">' + horiz4Row3c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.innerHTML = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    } else if (rowsData11.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2b.style.width + '; height: 54px;" height="54">' + horiz4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2c.style.width + '; height: 54px;" height="54">' + horiz4Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3b.style.width + '; height: 54px;" height="54">' + horiz4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3c.style.width + '; height: 54px;" height="54">' + horiz4Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4b.style.width + '; height: 54px;" height="54">' + horiz4Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4c.style.width + '; height: 54px;" height="54">' + horiz4Row4c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.innerHTML = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    } else if (rowsData11.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2b.style.width + '; height: 54px;" height="54">' + horiz4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2c.style.width + '; height: 54px;" height="54">' + horiz4Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3b.style.width + '; height: 54px;" height="54">' + horiz4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3c.style.width + '; height: 54px;" height="54">' + horiz4Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4b.style.width + '; height: 54px;" height="54">' + horiz4Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4c.style.width + '; height: 54px;" height="54">' + horiz4Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5b.style.width + '; height: 54px;" height="54">' + horiz4Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5c.style.width + '; height: 54px;" height="54">' + horiz4Row5c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.innerHTML = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    } else if (rowsData11.value === "6") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2b.style.width + '; height: 54px;" height="54">' + horiz4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2c.style.width + '; height: 54px;" height="54">' + horiz4Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3b.style.width + '; height: 54px;" height="54">' + horiz4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3c.style.width + '; height: 54px;" height="54">' + horiz4Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4b.style.width + '; height: 54px;" height="54">' + horiz4Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4c.style.width + '; height: 54px;" height="54">' + horiz4Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5b.style.width + '; height: 54px;" height="54">' + horiz4Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5c.style.width + '; height: 54px;" height="54">' + horiz4Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6b.style.width + '; height: 54px;" height="54">' + horiz4Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6c.style.width + '; height: 54px;" height="54">' + horiz4Row6c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.innerHTML = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    } else if (rowsData11.value === "7") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2b.style.width + '; height: 54px;" height="54">' + horiz4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2c.style.width + '; height: 54px;" height="54">' + horiz4Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3b.style.width + '; height: 54px;" height="54">' + horiz4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3c.style.width + '; height: 54px;" height="54">' + horiz4Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4b.style.width + '; height: 54px;" height="54">' + horiz4Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4c.style.width + '; height: 54px;" height="54">' + horiz4Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5b.style.width + '; height: 54px;" height="54">' + horiz4Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5c.style.width + '; height: 54px;" height="54">' + horiz4Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6b.style.width + '; height: 54px;" height="54">' + horiz4Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6c.style.width + '; height: 54px;" height="54">' + horiz4Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row7b.style.width + '; height: 54px;" height="54">' + horiz4Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row7c.style.width + '; height: 54px;" height="54">' + horiz4Row7c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.innerHTML = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    } else if (rowsData11.value === "8") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2b.style.width + '; height: 54px;" height="54">' + horiz4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2c.style.width + '; height: 54px;" height="54">' + horiz4Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3b.style.width + '; height: 54px;" height="54">' + horiz4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3c.style.width + '; height: 54px;" height="54">' + horiz4Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4b.style.width + '; height: 54px;" height="54">' + horiz4Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4c.style.width + '; height: 54px;" height="54">' + horiz4Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5b.style.width + '; height: 54px;" height="54">' + horiz4Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5c.style.width + '; height: 54px;" height="54">' + horiz4Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6b.style.width + '; height: 54px;" height="54">' + horiz4Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6c.style.width + '; height: 54px;" height="54">' + horiz4Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row7b.style.width + '; height: 54px;" height="54">' + horiz4Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row7c.style.width + '; height: 54px;" height="54">' + horiz4Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color8.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row8b.style.width + '; height: 54px;" height="54">' + horiz4Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row8c.style.width + '; height: 54px;" height="54">' + horiz4Row8c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.innerHTML = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    } else if (rowsData11.value === "9") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2b.style.width + '; height: 54px;" height="54">' + horiz4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2c.style.width + '; height: 54px;" height="54">' + horiz4Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3b.style.width + '; height: 54px;" height="54">' + horiz4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3c.style.width + '; height: 54px;" height="54">' + horiz4Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4b.style.width + '; height: 54px;" height="54">' + horiz4Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4c.style.width + '; height: 54px;" height="54">' + horiz4Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5b.style.width + '; height: 54px;" height="54">' + horiz4Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5c.style.width + '; height: 54px;" height="54">' + horiz4Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6b.style.width + '; height: 54px;" height="54">' + horiz4Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6c.style.width + '; height: 54px;" height="54">' + horiz4Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row7b.style.width + '; height: 54px;" height="54">' + horiz4Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row7c.style.width + '; height: 54px;" height="54">' + horiz4Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color8.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row8b.style.width + '; height: 54px;" height="54">' + horiz4Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row8c.style.width + '; height: 54px;" height="54">' + horiz4Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color9.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row9b.style.width + '; height: 54px;" height="54">' + horiz4Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row9c.style.width + '; height: 54px;" height="54">' + horiz4Row9c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.innerHTML = chartCode;
        horiz4Weight.textContent = Math.ceil(horiz4Output.value.length / 1024) + 'KB';
    } else if (rowsData11.value === "10") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz4csCode + ' <tr> <td align="left" style="padding: ' + horiz4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1b.style.width + '; height: 54px;" height="54">' + horiz4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row1c.style.width + '; height: 54px;" height="54">' + horiz4Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2b.style.width + '; height: 54px;" height="54">' + horiz4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row2c.style.width + '; height: 54px;" height="54">' + horiz4Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3b.style.width + '; height: 54px;" height="54">' + horiz4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row3c.style.width + '; height: 54px;" height="54">' + horiz4Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4b.style.width + '; height: 54px;" height="54">' + horiz4Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row4c.style.width + '; height: 54px;" height="54">' + horiz4Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5b.style.width + '; height: 54px;" height="54">' + horiz4Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row5c.style.width + '; height: 54px;" height="54">' + horiz4Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6b.style.width + '; height: 54px;" height="54">' + horiz4Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row6c.style.width + '; height: 54px;" height="54">' + horiz4Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row7b.style.width + '; height: 54px;" height="54">' + horiz4Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row7c.style.width + '; height: 54px;" height="54">' + horiz4Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color8.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row8b.style.width + '; height: 54px;" height="54">' + horiz4Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row8c.style.width + '; height: 54px;" height="54">' + horiz4Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color9.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row9b.style.width + '; height: 54px;" height="54">' + horiz4Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row9c.style.width + '; height: 54px;" height="54">' + horiz4Row9c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz4borderTop + 'padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 54px;" height="54">' + horiz4Row10a.innerHTML + '</td><td align="right" style="background-color: ' + horiz4Color10.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row10b.style.width + '; height: 54px;" height="54">' + horiz4Row10b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz4Row10c.style.width + '; height: 54px;" height="54">' + horiz4Row10c.innerHTML + '</td></tr></table> </td></tr>' + horiz4srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz4Output.innerHTML = chartCode;
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
        if (horiz5Div.checked == true) {
            horiz5DivNodes1[i].firstElementChild.style.borderTop = "1px solid #e3e3e3";
        } else if (horiz5Div.checked == false) {
            horiz5DivNodes1[i].firstElementChild.style.borderTop = "none";
        }
    }
    if (horiz5Div.checked == true) { // Adds border-top to output code if checked
        return horiz5borderTop = 'border-top: 1px solid #e3e3e3; ';
    } else if (horiz5Div.checked == false) {
        return horiz5borderTop = "";
    }
});

// Horizontal Chart V Caption
let horiz5TopBarSpace = "";
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
        horiz5Bars[0].firstElementChild.style.padding = "30px 0 8px 0";
        horiz5TopBarSpace = "30px 0 8px 0";
        horiz5Cap.style.marginBottom = "0";
        return horiz5csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz5Sub.innerHTML + '</td> </tr>';
    } else if (horiz5capText.value && horiz5subText.value == "") {
        horiz5Bars[0].firstElementChild.style.padding = "0";
        horiz5TopBarSpace = "0";
        horiz5Cap.style.marginBottom = "30px";
        return horiz5csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 30px; text-align: left;">' + horiz5Cap.innerHTML + '</caption>';
    } else if (horiz5capText.value && horiz5subText.value) {
        horiz5Bars[0].firstElementChild.style.padding = "30px 0 8px 0";
        horiz5TopBarSpace = "30px 0 8px 0";
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
        horiz5Cap.style.marginBottom = "30px";
        return horiz5csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 30px; text-align: left;">' + horiz5Cap.innerHTML + '</caption>';
    } else if (horiz5subText.value && horiz5capText.value == "") {
        horiz5Bars[0].firstElementChild.style.padding = "30px 0 8px 0";
        horiz5TopBarSpace = "30px 0 8px 0";
        horiz5Cap.style.marginBottom = "0";
        return horiz5csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + horiz5Sub.innerHTML + '</td> </tr>';
    } else if (horiz5subText.value && horiz5capText.value) {
        horiz5Bars[0].firstElementChild.style.padding = "30px 0 8px 0";
        horiz5TopBarSpace = "30px 0 8px 0";
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
    if (horiz5srcText.value == "") {
        horiz5Source.style.paddingTop = "0";
        return horiz5srcCode = "";
    } else if (horiz5srcText.value) {
        horiz5Source.style.paddingTop = "40px";
        return horiz5srcCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 40px; text-align: left;">' + horiz5Source.innerHTML + '</td></tr>';
    }
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

// Generate Horiz5 HTML Chart Logic
const horiz5Weight = document.getElementById("horiz5Weight");
const horiz5Button = document.getElementById("horiz5Button");
const horiz5Output = document.getElementById("horiz5Output");
horiz5Button.addEventListener("mouseenter", () => { horiz5Output.style.opacity = ".4"; horiz5Weight.style.opacity = ".4"; } );
horiz5Button.addEventListener("mouseleave", () => { horiz5Output.style.opacity = ""; horiz5Weight.style.opacity = ""; horiz5Output.style.borderColor = ""; horiz5Weight.style.color = ""; } );
horiz5Button.addEventListener("click", () => {
    if (rowsData24.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.innerHTML = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    } else if (rowsData24.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2b.style.width + '; height: 34px;" height="34">' + horiz5Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2c.style.width + '; height: 34px;" height="34">' + horiz5Row2c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.innerHTML = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    } else if (rowsData24.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2b.style.width + '; height: 34px;" height="34">' + horiz5Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2c.style.width + '; height: 34px;" height="34">' + horiz5Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3b.style.width + '; height: 34px;" height="34">' + horiz5Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3c.style.width + '; height: 34px;" height="34">' + horiz5Row3c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.innerHTML = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    } else if (rowsData24.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2b.style.width + '; height: 34px;" height="34">' + horiz5Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2c.style.width + '; height: 34px;" height="34">' + horiz5Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3b.style.width + '; height: 34px;" height="34">' + horiz5Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3c.style.width + '; height: 34px;" height="34">' + horiz5Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4b.style.width + '; height: 34px;" height="34">' + horiz5Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4c.style.width + '; height: 34px;" height="34">' + horiz5Row4c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.innerHTML = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    } else if (rowsData24.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2b.style.width + '; height: 34px;" height="34">' + horiz5Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2c.style.width + '; height: 34px;" height="34">' + horiz5Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3b.style.width + '; height: 34px;" height="34">' + horiz5Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3c.style.width + '; height: 34px;" height="34">' + horiz5Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4b.style.width + '; height: 34px;" height="34">' + horiz5Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4c.style.width + '; height: 34px;" height="34">' + horiz5Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5b.style.width + '; height: 34px;" height="34">' + horiz5Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5c.style.width + '; height: 34px;" height="34">' + horiz5Row5c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.innerHTML = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    } else if (rowsData24.value === "6") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2b.style.width + '; height: 34px;" height="34">' + horiz5Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2c.style.width + '; height: 34px;" height="34">' + horiz5Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3b.style.width + '; height: 34px;" height="34">' + horiz5Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3c.style.width + '; height: 34px;" height="34">' + horiz5Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4b.style.width + '; height: 34px;" height="34">' + horiz5Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4c.style.width + '; height: 34px;" height="34">' + horiz5Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5b.style.width + '; height: 34px;" height="34">' + horiz5Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5c.style.width + '; height: 34px;" height="34">' + horiz5Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6b.style.width + '; height: 34px;" height="34">' + horiz5Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6c.style.width + '; height: 34px;" height="34">' + horiz5Row6c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.innerHTML = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    } else if (rowsData24.value === "7") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2b.style.width + '; height: 34px;" height="34">' + horiz5Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2c.style.width + '; height: 34px;" height="34">' + horiz5Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3b.style.width + '; height: 34px;" height="34">' + horiz5Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3c.style.width + '; height: 34px;" height="34">' + horiz5Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4b.style.width + '; height: 34px;" height="34">' + horiz5Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4c.style.width + '; height: 34px;" height="34">' + horiz5Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5b.style.width + '; height: 34px;" height="34">' + horiz5Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5c.style.width + '; height: 34px;" height="34">' + horiz5Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6b.style.width + '; height: 34px;" height="34">' + horiz5Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6c.style.width + '; height: 34px;" height="34">' + horiz5Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row7b.style.width + '; height: 34px;" height="34">' + horiz5Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row7c.style.width + '; height: 34px;" height="34">' + horiz5Row7c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.innerHTML = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    } else if (rowsData24.value === "8") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2b.style.width + '; height: 34px;" height="34">' + horiz5Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2c.style.width + '; height: 34px;" height="34">' + horiz5Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3b.style.width + '; height: 34px;" height="34">' + horiz5Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3c.style.width + '; height: 34px;" height="34">' + horiz5Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4b.style.width + '; height: 34px;" height="34">' + horiz5Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4c.style.width + '; height: 34px;" height="34">' + horiz5Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5b.style.width + '; height: 34px;" height="34">' + horiz5Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5c.style.width + '; height: 34px;" height="34">' + horiz5Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6b.style.width + '; height: 34px;" height="34">' + horiz5Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6c.style.width + '; height: 34px;" height="34">' + horiz5Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row7b.style.width + '; height: 34px;" height="34">' + horiz5Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row7c.style.width + '; height: 34px;" height="34">' + horiz5Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row8b.style.width + '; height: 34px;" height="34">' + horiz5Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row8c.style.width + '; height: 34px;" height="34">' + horiz5Row8c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.innerHTML = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    } else if (rowsData24.value === "9") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2b.style.width + '; height: 34px;" height="34">' + horiz5Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2c.style.width + '; height: 34px;" height="34">' + horiz5Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3b.style.width + '; height: 34px;" height="34">' + horiz5Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3c.style.width + '; height: 34px;" height="34">' + horiz5Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4b.style.width + '; height: 34px;" height="34">' + horiz5Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4c.style.width + '; height: 34px;" height="34">' + horiz5Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5b.style.width + '; height: 34px;" height="34">' + horiz5Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5c.style.width + '; height: 34px;" height="34">' + horiz5Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6b.style.width + '; height: 34px;" height="34">' + horiz5Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6c.style.width + '; height: 34px;" height="34">' + horiz5Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row7b.style.width + '; height: 34px;" height="34">' + horiz5Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row7c.style.width + '; height: 34px;" height="34">' + horiz5Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row8b.style.width + '; height: 34px;" height="34">' + horiz5Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row8c.style.width + '; height: 34px;" height="34">' + horiz5Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row9b.style.width + '; height: 34px;" height="34">' + horiz5Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row9c.style.width + '; height: 34px;" height="34">' + horiz5Row9c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.innerHTML = chartCode;
        horiz5Weight.textContent = Math.ceil(horiz5Output.value.length / 1024) + 'KB';
    } else if (rowsData24.value === "10") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + horiz5csCode + ' <tr> <td align="left" style="padding: ' + horiz5TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row1a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1b.style.width + '; height: 34px;" height="34">' + horiz5Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row1c.style.width + '; height: 34px;" height="34">' + horiz5Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row2a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2b.style.width + '; height: 34px;" height="34">' + horiz5Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row2c.style.width + '; height: 34px;" height="34">' + horiz5Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row3a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3b.style.width + '; height: 34px;" height="34">' + horiz5Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row3c.style.width + '; height: 34px;" height="34">' + horiz5Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row4a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4b.style.width + '; height: 34px;" height="34">' + horiz5Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row4c.style.width + '; height: 34px;" height="34">' + horiz5Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row5a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5b.style.width + '; height: 34px;" height="34">' + horiz5Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row5c.style.width + '; height: 34px;" height="34">' + horiz5Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row6a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6b.style.width + '; height: 34px;" height="34">' + horiz5Row6b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row6c.style.width + '; height: 34px;" height="34">' + horiz5Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row7a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row7b.style.width + '; height: 34px;" height="34">' + horiz5Row7b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row7c.style.width + '; height: 34px;" height="34">' + horiz5Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row8a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row8b.style.width + '; height: 34px;" height="34">' + horiz5Row8b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row8c.style.width + '; height: 34px;" height="34">' + horiz5Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 8px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row9a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row9b.style.width + '; height: 34px;" height="34">' + horiz5Row9b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row9c.style.width + '; height: 34px;" height="34">' + horiz5Row9c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="' + horiz5borderTop + 'padding: 8px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 34px;" height="34">' + horiz5Row10a.innerHTML + '</td><td align="right" style="background-color: ' + horiz5Color10.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row10b.style.width + '; height: 34px;" height="34">' + horiz5Row10b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz5Row10c.style.width + '; height: 34px;" height="34">' + horiz5Row10c.innerHTML + '</td></tr></table> </td></tr>' + horiz5srcCode + ' </table> </td></tr></table> ' + botSpace;
        horiz5Output.innerHTML = chartCode;
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