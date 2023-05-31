// Progress Bar Chart I Selection
const prog1Bars = document.getElementsByClassName("prog1Bars");
const prog1Controls = document.getElementsByClassName("prog1Controls");
const rowsData8 = document.getElementById("rowsData8");
rowsData8.addEventListener("change", () => {
    for (var i = 0; i < prog1Controls.length; i++) {
        prog1Controls[i].style.display = "none";
        prog1Bars[i].style.display = "none";
        for (var x = 0; x < rowsData8.value; x++) {
            prog1Controls[x].style.display = "block";
            prog1Bars[x].style.display = "block";
        }
    }
});

// Progress Bar I Caption
let prog1TopBarSpace = "";
let prog1csCode = "";
const prog1Cap = document.getElementById("prog1Cap"); // Caption or chart title
const prog1capText = document.getElementById("prog1capText"); // Caption or chart title text
prog1capText.oninput = function() {
    prog1Cap.innerHTML = prog1capText.value;
    if (prog1capText.value == "" && prog1subText.value == "") {
        prog1Bars[0].firstElementChild.style.padding = "0"; // Targets the first data bar below caption/subtitle text
        prog1TopBarSpace = "0"; // Padding for first data bar below caption/subtitle text for output code
        prog1Cap.style.marginBottom = "0";
        return prog1csCode = "";
    } else if (prog1capText.value == "" && prog1subText.value) {
        prog1Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        prog1TopBarSpace = "20px 0 0 0";
        prog1Cap.style.marginBottom = "0";
        return prog1csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + prog1Sub.innerHTML + '</td> </tr>';
    } else if (prog1capText.value && prog1subText.value == "") {
        prog1Bars[0].firstElementChild.style.padding = "0";
        prog1TopBarSpace = "0";
        prog1Cap.style.marginBottom = "20px";
        return prog1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + prog1Cap.innerHTML + '</caption>';
    } else if (prog1capText.value && prog1subText.value) {
        prog1Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        prog1TopBarSpace = "20px 0 0 0";
        prog1Cap.style.marginBottom = "4px";
        return prog1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + prog1Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + prog1Sub.innerHTML + '</td> </tr>';
    }
};
// Progress Bar I Subtitle
const prog1Sub = document.getElementById("prog1Sub"); // Chart subtitle
const prog1subText = document.getElementById("prog1subText"); // Chart subtitle text
prog1subText.oninput = function() {
    prog1Sub.innerHTML = prog1subText.value;
    if (prog1subText.value == "" && prog1capText.value == "") {
        prog1Bars[0].firstElementChild.style.padding = "0";
        prog1TopBarSpace = "0";
        prog1Cap.style.marginBottom = "0";
        return prog1csCode = "";
    } else if (prog1subText.value == "" && prog1capText.value) {
        prog1Bars[0].firstElementChild.style.padding = "0";
        prog1TopBarSpace = "0";
        prog1Cap.style.marginBottom = "20px";
        return prog1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + prog1Cap.innerHTML + '</caption>';
    } else if (prog1subText.value && prog1capText.value == "") {
        prog1Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        prog1TopBarSpace = "20px 0 0 0";
        prog1Cap.style.marginBottom = "0";
        return prog1csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + prog1Sub.innerHTML + '</td> </tr>';
    } else if (prog1subText.value && prog1capText.value) {
        prog1Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        prog1TopBarSpace = "20px 0 0 0";
        prog1Cap.style.marginBottom = "4px";
        return prog1csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + prog1Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + prog1Sub.innerHTML + '</td> </tr>';
    }
};
// Progress Bar I Source
let prog1srcCode = "";
const prog1Source = document.getElementById("prog1Source"); // Chart source
const prog1srcText = document.getElementById("prog1srcText"); // Chart source text
prog1srcText.oninput = function() {
    prog1Source.innerHTML = prog1srcText.value;
    if (prog1srcText.value == "") {
        prog1Source.style.paddingTop = "0";
        return prog1srcCode = "";
    } else if (prog1srcText.value) {
        prog1Source.style.paddingTop = "40px";
        return prog1srcCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 40px; text-align: left;">' + prog1Source.innerHTML + '</td></tr>';
    }
};

// Progress Bar I Chart Color Picker
const prog1colorPick = document.getElementById("prog1colorPick");
prog1colorPick.addEventListener("change", (evt) => {
    prog1Row1b.style.backgroundColor = evt.detail.hex;
    prog1Color1.value = evt.detail.hex;
    prog1Row2b.style.backgroundColor = evt.detail.hex;
    prog1Color2.value = evt.detail.hex;
    prog1Row3b.style.backgroundColor = evt.detail.hex;
    prog1Color3.value = evt.detail.hex;
    prog1Row4b.style.backgroundColor = evt.detail.hex;
    prog1Color4.value = evt.detail.hex;
    prog1Row5b.style.backgroundColor = evt.detail.hex;
    prog1Color5.value = evt.detail.hex;
    prog1Row6b.style.backgroundColor = evt.detail.hex;
    prog1Color6.value = evt.detail.hex;
    prog1Row7b.style.backgroundColor = evt.detail.hex;
    prog1Color7.value = evt.detail.hex;
    prog1Row8b.style.backgroundColor = evt.detail.hex;
    prog1Color8.value = evt.detail.hex;
    prog1Row9b.style.backgroundColor = evt.detail.hex;
    prog1Color9.value = evt.detail.hex;
    prog1Row10b.style.backgroundColor = evt.detail.hex;
    prog1Color10.value = evt.detail.hex;
});

// Progress Bar Chart I Customization Logic
const prog1Row1a = document.getElementById("prog1Row1a");
const prog1Row1b = document.getElementById("prog1Row1b");
const prog1Row1c = document.getElementById("prog1Row1c");
const prog1Row2a = document.getElementById("prog1Row2a");
const prog1Row2b = document.getElementById("prog1Row2b");
const prog1Row2c = document.getElementById("prog1Row2c");
const prog1Row3a = document.getElementById("prog1Row3a");
const prog1Row3b = document.getElementById("prog1Row3b");
const prog1Row3c = document.getElementById("prog1Row3c");
const prog1Row4a = document.getElementById("prog1Row4a");
const prog1Row4b = document.getElementById("prog1Row4b");
const prog1Row4c = document.getElementById("prog1Row4c");
const prog1Row5a = document.getElementById("prog1Row5a");
const prog1Row5b = document.getElementById("prog1Row5b");
const prog1Row5c = document.getElementById("prog1Row5c");

// Progress Bar Row 1 Customization Logic
const prog1Text1a = document.getElementById("prog1Text1a");
prog1Text1a.oninput = function() {
    if (prog1Text1a.value == "") {
        prog1Row1a.innerHTML = prog1Text1a.value;
    } else if (prog1Text1a.value) {
        prog1Row1a.innerHTML = prog1Text1a.value;
    }
};
const prog1Size1 = document.getElementById("prog1Size1");
prog1Size1.oninput = function() {
    prog1Row1b.style.width = Math.abs(prog1Size1.value) + "%";
    prog1Row1c.style.width = 100 - (Math.abs(prog1Size1.value)) + "%";
};
const prog1Text1 = document.getElementById("prog1Text1");
prog1Text1.oninput = function() {
    if (prog1Text1.value == "") {
        prog1Row1c.innerHTML = prog1Text1.value;
    } else if (prog1Text1.value) {
        prog1Row1c.innerHTML = "&nbsp;" + prog1Text1.value;
    }
};
const prog1Label1 = document.getElementById("prog1Label1");
prog1Label1.addEventListener("click", () => {
    if (prog1Text1.value == "") {
        prog1Row1b.innerHTML = "";
        prog1Row1c.innerHTML = "";
    } else if (prog1Text1.value) {
        prog1Row1b.innerHTML = prog1Text1.value + "&nbsp;";
        prog1Text1.value = "";
        prog1Row1c.innerHTML = "";
    }
});
const prog1Color1 = document.getElementById("prog1Color1");
prog1Color1.oninput = function() {
    prog1Row1b.style.backgroundColor = prog1Color1.value;
};

// Progress Bar Row 2 Customization Logic
const prog1Text2a = document.getElementById("prog1Text2a");
prog1Text2a.oninput = function() {
    if (prog1Text2a.value == "") {
        prog1Row2a.innerHTML = prog1Text2a.value;
    } else if (prog1Text2a.value) {
        prog1Row2a.innerHTML = prog1Text2a.value;
    }
};
const prog1Size2 = document.getElementById("prog1Size2");
prog1Size2.oninput = function() {
    prog1Row2b.style.width = Math.abs(prog1Size2.value) + "%";
    prog1Row2c.style.width = 100 - (Math.abs(prog1Size2.value)) + "%";
};
const prog1Text2 = document.getElementById("prog1Text2");
prog1Text2.oninput = function() {
    if (prog1Text2.value == "") {
        prog1Row2c.innerHTML = prog1Text2.value;
    } else if (prog1Text2.value) {
        prog1Row2c.innerHTML = "&nbsp;" + prog1Text2.value;
    }
};
const prog1Label2 = document.getElementById("prog1Label2");
prog1Label2.addEventListener("click", () => {
    if (prog1Text2.value == "") {
        prog1Row2b.innerHTML = "";
        prog1Row2c.innerHTML = "";
    } else if (prog1Text2.value) {
        prog1Row2b.innerHTML = prog1Text2.value + "&nbsp;";
        prog1Text2.value = "";
        prog1Row2c.innerHTML = "";
    }
});
const prog1Color2 = document.getElementById("prog1Color2");
prog1Color2.oninput = function() {
    prog1Row2b.style.backgroundColor = prog1Color2.value;
};

// Progress Bar Row 3 Customization Logic
const prog1Text3a = document.getElementById("prog1Text3a");
prog1Text3a.oninput = function() {
    if (prog1Text3a.value == "") {
        prog1Row3a.innerHTML = prog1Text3a.value;
    } else if (prog1Text3a.value) {
        prog1Row3a.innerHTML = prog1Text3a.value;
    }
};
const prog1Size3 = document.getElementById("prog1Size3");
prog1Size3.oninput = function() {
    prog1Row3b.style.width = Math.abs(prog1Size3.value) + "%";
    prog1Row3c.style.width = 100 - (Math.abs(prog1Size3.value)) + "%";
};
const prog1Text3 = document.getElementById("prog1Text3");
prog1Text3.oninput = function() {
    if (prog1Text3.value == "") {
        prog1Row3c.innerHTML = prog1Text3.value;
    } else if (prog1Text3.value) {
        prog1Row3c.innerHTML = "&nbsp;" + prog1Text3.value;
    }
};
const prog1Label3 = document.getElementById("prog1Label3");
prog1Label3.addEventListener("click", () => {
    if (prog1Text3.value == "") {
        prog1Row3b.innerHTML = "";
        prog1Row3c.innerHTML = "";
    } else if (prog1Text3.value) {
        prog1Row3b.innerHTML = prog1Text3.value + "&nbsp;";
        prog1Text3.value = "";
        prog1Row3c.innerHTML = "";
    }
});
const prog1Color3 = document.getElementById("prog1Color3");
prog1Color3.oninput = function() {
    prog1Row3b.style.backgroundColor = prog1Color3.value;
};

// Progress Bar Row 4 Customization Logic
const prog1Text4a = document.getElementById("prog1Text4a");
prog1Text4a.oninput = function() {
    if (prog1Text4a.value == "") {
        prog1Row4a.innerHTML = prog1Text4a.value;
    } else if (prog1Text4a.value) {
        prog1Row4a.innerHTML = prog1Text4a.value;
    }
};
const prog1Size4 = document.getElementById("prog1Size4");
prog1Size4.oninput = function() {
    prog1Row4b.style.width = Math.abs(prog1Size4.value) + "%";
    prog1Row4c.style.width = 100 - (Math.abs(prog1Size4.value)) + "%";
};
const prog1Text4 = document.getElementById("prog1Text4");
prog1Text4.oninput = function() {
    if (prog1Text4.value == "") {
        prog1Row4c.innerHTML = prog1Text4.value;
    } else if (prog1Text4.value) {
        prog1Row4c.innerHTML = "&nbsp;" + prog1Text4.value;
    }
};
const prog1Label4 = document.getElementById("prog1Label4");
prog1Label4.addEventListener("click", () => {
    if (prog1Text4.value == "") {
        prog1Row4b.innerHTML = "";
        prog1Row4c.innerHTML = "";
    } else if (prog1Text4.value) {
        prog1Row4b.innerHTML = prog1Text4.value + "&nbsp;";
        prog1Text4.value = "";
        prog1Row4c.innerHTML = "";
    }
});
const prog1Color4 = document.getElementById("prog1Color4");
prog1Color4.oninput = function() {
    prog1Row4b.style.backgroundColor = prog1Color4.value;
};

// Progress Bar Row 5 Customization Logic
const prog1Text5a = document.getElementById("prog1Text5a");
prog1Text5a.oninput = function() {
    if (prog1Text5a.value == "") {
        prog1Row5a.innerHTML = prog1Text5a.value;
    } else if (prog1Text5a.value) {
        prog1Row5a.innerHTML = prog1Text5a.value;
    }
};
const prog1Size5 = document.getElementById("prog1Size5");
prog1Size5.oninput = function() {
    prog1Row5b.style.width = Math.abs(prog1Size5.value) + "%";
    prog1Row5c.style.width = 100 - (Math.abs(prog1Size5.value)) + "%";
};
const prog1Text5 = document.getElementById("prog1Text5");
prog1Text5.oninput = function() {
    if (prog1Text5.value == "") {
        prog1Row5c.innerHTML = prog1Text5.value;
    } else if (prog1Text5.value) {
        prog1Row5c.innerHTML = "&nbsp;" + prog1Text5.value;
    }
};
const prog1Label5 = document.getElementById("prog1Label5");
prog1Label5.addEventListener("click", () => {
    if (prog1Text5.value == "") {
        prog1Row5b.innerHTML = "";
        prog1Row5c.innerHTML = "";
    } else if (prog1Text5.value) {
        prog1Row5b.innerHTML = prog1Text5.value + "&nbsp;";
        prog1Text5.value = "";
        prog1Row5c.innerHTML = "";
    }
});
const prog1Color5 = document.getElementById("prog1Color5");
prog1Color5.oninput = function() {
    prog1Row5b.style.backgroundColor = prog1Color5.value;
};

// Generate Progress Bar HTML Logic
const prog1Weight = document.getElementById("prog1Weight");
const prog1Button = document.getElementById("prog1Button");
const prog1Output = document.getElementById("prog1Output");
prog1Button.addEventListener("mouseenter", () => { prog1Output.style.opacity = ".4"; prog1Weight.style.opacity = ".4"; } );
prog1Button.addEventListener("mouseleave", () => { prog1Output.style.opacity = ""; prog1Weight.style.opacity = ""; prog1Output.style.borderColor = ""; prog1Weight.style.color = ""; } );
prog1Button.addEventListener("click", () => {
    if (rowsData8.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog1csCode + ' <tr> <td align="left" style="padding: ' + prog1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog1Row1a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + prog1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1b.style.width + '; height: 28px;" height="28">' + prog1Row1b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1c.style.width + '; height: 28px;" height="28">' + prog1Row1c.innerHTML + '</td></tr></table> </td></tr>' + prog1srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog1Output.innerHTML = chartCode;
        prog1Weight.textContent = Math.ceil(prog1Output.value.length / 1024) + 'KB';
    } else if (rowsData8.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog1csCode + ' <tr> <td align="left" style="padding: ' + prog1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog1Row1a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + prog1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1b.style.width + '; height: 28px;" height="28">' + prog1Row1b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1c.style.width + '; height: 28px;" height="28">' + prog1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog1Row2a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + prog1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row2b.style.width + '; height: 28px;" height="28">' + prog1Row2b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row2c.style.width + '; height: 28px;" height="28">' + prog1Row2c.innerHTML + '</td></tr></table> </td></tr>' + prog1srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog1Output.innerHTML = chartCode;
        prog1Weight.textContent = Math.ceil(prog1Output.value.length / 1024) + 'KB';
    } else if (rowsData8.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog1csCode + ' <tr> <td align="left" style="padding: ' + prog1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog1Row1a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + prog1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1b.style.width + '; height: 28px;" height="28">' + prog1Row1b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1c.style.width + '; height: 28px;" height="28">' + prog1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog1Row2a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + prog1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row2b.style.width + '; height: 28px;" height="28">' + prog1Row2b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row2c.style.width + '; height: 28px;" height="28">' + prog1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog1Row3a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + prog1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row3b.style.width + '; height: 28px;" height="28">' + prog1Row3b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row3c.style.width + '; height: 28px;" height="28">' + prog1Row3c.innerHTML + '</td></tr></table> </td></tr>' + prog1srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog1Output.innerHTML = chartCode;
        prog1Weight.textContent = Math.ceil(prog1Output.value.length / 1024) + 'KB';
    } else if (rowsData8.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog1csCode + ' <tr> <td align="left" style="padding: ' + prog1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog1Row1a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + prog1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1b.style.width + '; height: 28px;" height="28">' + prog1Row1b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1c.style.width + '; height: 28px;" height="28">' + prog1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog1Row2a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + prog1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row2b.style.width + '; height: 28px;" height="28">' + prog1Row2b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row2c.style.width + '; height: 28px;" height="28">' + prog1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog1Row3a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + prog1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row3b.style.width + '; height: 28px;" height="28">' + prog1Row3b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row3c.style.width + '; height: 28px;" height="28">' + prog1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog1Row4a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + prog1Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row4b.style.width + '; height: 28px;" height="28">' + prog1Row4b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row4c.style.width + '; height: 28px;" height="28">' + prog1Row4c.innerHTML + '</td></tr></table> </td></tr>' + prog1srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog1Output.innerHTML = chartCode;
        prog1Weight.textContent = Math.ceil(prog1Output.value.length / 1024) + 'KB';
    } else if (rowsData8.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog1csCode + ' <tr> <td align="left" style="padding: ' + prog1TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog1Row1a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + prog1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1b.style.width + '; height: 28px;" height="28">' + prog1Row1b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1c.style.width + '; height: 28px;" height="28">' + prog1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog1Row2a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + prog1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row2b.style.width + '; height: 28px;" height="28">' + prog1Row2b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row2c.style.width + '; height: 28px;" height="28">' + prog1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog1Row3a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + prog1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row3b.style.width + '; height: 28px;" height="28">' + prog1Row3b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row3c.style.width + '; height: 28px;" height="28">' + prog1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog1Row4a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + prog1Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row4b.style.width + '; height: 28px;" height="28">' + prog1Row4b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row4c.style.width + '; height: 28px;" height="28">' + prog1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog1Row5a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="right" style="background-color: ' + prog1Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row5b.style.width + '; height: 28px;" height="28">' + prog1Row5b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row5c.style.width + '; height: 28px;" height="28">' + prog1Row5c.innerHTML + '</td></tr></table> </td></tr>' + prog1srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog1Output.innerHTML = chartCode;
        prog1Weight.textContent = Math.ceil(prog1Output.value.length / 1024) + 'KB';
    }
    prog1Output.style.opacity = "";
    prog1Weight.style.opacity = "";
    prog1Output.style.borderColor = "#166dfc";
    prog1Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(prog1Output.value);
});
prog1Output.addEventListener("click", () => {
    prog1Output.select();
});


// Progress Bar Chart II Selection
const prog2Bars = document.getElementsByClassName("prog2Bars");
const prog2Controls = document.getElementsByClassName("prog2Controls");
const rowsData9 = document.getElementById("rowsData9");
rowsData9.addEventListener("change", () => {
    for (var i = 0; i < prog2Controls.length; i++) {
        prog2Controls[i].style.display = "none";
        prog2Bars[i].style.display = "none";
        for (var x = 0; x < rowsData9.value; x++) {
            prog2Controls[x].style.display = "block";
            prog2Bars[x].style.display = "block";
        }
    }
});

// Progress Bar II Caption
let prog2TopBarSpace = "";
let prog2csCode = "";
const prog2Cap = document.getElementById("prog2Cap"); // Caption or chart title
const prog2capText = document.getElementById("prog2capText"); // Caption or chart title text
prog2capText.oninput = function() {
    prog2Cap.innerHTML = prog2capText.value;
    if (prog2capText.value == "" && prog2subText.value == "") {
        prog2Bars[0].firstElementChild.style.padding = "0"; // Targets the first data bar below caption/subtitle text
        prog2TopBarSpace = "0"; // Padding for first data bar below caption/subtitle text for output code
        prog2Cap.style.marginBottom = "0";
        return prog2csCode = "";
    } else if (prog2capText.value == "" && prog2subText.value) {
        prog2Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        prog2TopBarSpace = "20px 0 0 0";
        prog2Cap.style.marginBottom = "0";
        return prog2csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + prog2Sub.innerHTML + '</td> </tr>';
    } else if (prog2capText.value && prog2subText.value == "") {
        prog2Bars[0].firstElementChild.style.padding = "0";
        prog2TopBarSpace = "0";
        prog2Cap.style.marginBottom = "20px";
        return prog2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + prog2Cap.innerHTML + '</caption>';
    } else if (prog2capText.value && prog2subText.value) {
        prog2Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        prog2TopBarSpace = "20px 0 0 0";
        prog2Cap.style.marginBottom = "4px";
        return prog2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + prog2Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + prog2Sub.innerHTML + '</td> </tr>';
    }
};
// Progress Bar II Subtitle
const prog2Sub = document.getElementById("prog2Sub"); // Chart subtitle
const prog2subText = document.getElementById("prog2subText"); // Chart subtitle text
prog2subText.oninput = function() {
    prog2Sub.innerHTML = prog2subText.value;
    if (prog2subText.value == "" && prog2capText.value == "") {
        prog2Bars[0].firstElementChild.style.padding = "0";
        prog2TopBarSpace = "0";
        prog2Cap.style.marginBottom = "0";
        return prog2csCode = "";
    } else if (prog2subText.value == "" && prog2capText.value) {
        prog2Bars[0].firstElementChild.style.padding = "0";
        prog2TopBarSpace = "0";
        prog2Cap.style.marginBottom = "20px";
        return prog2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + prog2Cap.innerHTML + '</caption>';
    } else if (prog2subText.value && prog2capText.value == "") {
        prog2Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        prog2TopBarSpace = "20px 0 0 0";
        prog2Cap.style.marginBottom = "0";
        return prog2csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + prog2Sub.innerHTML + '</td> </tr>';
    } else if (prog2subText.value && prog2capText.value) {
        prog2Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        prog2TopBarSpace = "20px 0 0 0";
        prog2Cap.style.marginBottom = "4px";
        return prog2csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + prog2Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + prog2Sub.innerHTML + '</td> </tr>';
    }
};
// Progress Bar II Source
let prog2srcCode = "";
const prog2Source = document.getElementById("prog2Source"); // Chart source
const prog2srcText = document.getElementById("prog2srcText"); // Chart source text
prog2srcText.oninput = function() {
    prog2Source.innerHTML = prog2srcText.value;
    if (prog2srcText.value == "") {
        prog2Source.style.paddingTop = "0";
        return prog2srcCode = "";
    } else if (prog2srcText.value) {
        prog2Source.style.paddingTop = "40px";
        return prog2srcCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 40px; text-align: left;">' + prog2Source.innerHTML + '</td></tr>';
    }
};

// Progress Bar II Chart Color Picker
const prog2colorPick = document.getElementById("prog2colorPick");
prog2colorPick.addEventListener("change", (evt) => {
    prog2Row1b.style.backgroundColor = evt.detail.hex;
    prog2Color1.value = evt.detail.hex;
    prog2Row2b.style.backgroundColor = evt.detail.hex;
    prog2Color2.value = evt.detail.hex;
    prog2Row3b.style.backgroundColor = evt.detail.hex;
    prog2Color3.value = evt.detail.hex;
    prog2Row4b.style.backgroundColor = evt.detail.hex;
    prog2Color4.value = evt.detail.hex;
    prog2Row5b.style.backgroundColor = evt.detail.hex;
    prog2Color5.value = evt.detail.hex;
    prog2Row6b.style.backgroundColor = evt.detail.hex;
    prog2Color6.value = evt.detail.hex;
    prog2Row7b.style.backgroundColor = evt.detail.hex;
    prog2Color7.value = evt.detail.hex;
    prog2Row8b.style.backgroundColor = evt.detail.hex;
    prog2Color8.value = evt.detail.hex;
    prog2Row9b.style.backgroundColor = evt.detail.hex;
    prog2Color9.value = evt.detail.hex;
    prog2Row10b.style.backgroundColor = evt.detail.hex;
    prog2Color10.value = evt.detail.hex;
});

// Progress Bar Chart II Customization Logic
const prog2Row1a = document.getElementById("prog2Row1a");
const prog2Row1b = document.getElementById("prog2Row1b");
const prog2Row1c = document.getElementById("prog2Row1c");
const prog2Row2a = document.getElementById("prog2Row2a");
const prog2Row2b = document.getElementById("prog2Row2b");
const prog2Row2c = document.getElementById("prog2Row2c");
const prog2Row3a = document.getElementById("prog2Row3a");
const prog2Row3b = document.getElementById("prog2Row3b");
const prog2Row3c = document.getElementById("prog2Row3c");
const prog2Row4a = document.getElementById("prog2Row4a");
const prog2Row4b = document.getElementById("prog2Row4b");
const prog2Row4c = document.getElementById("prog2Row4c");
const prog2Row5a = document.getElementById("prog2Row5a");
const prog2Row5b = document.getElementById("prog2Row5b");
const prog2Row5c = document.getElementById("prog2Row5c");

// Progress Bar Row 1 Customization Logic
const prog2Text1a = document.getElementById("prog2Text1a");
prog2Text1a.oninput = function() {
    if (prog2Text1a.value == "") {
        prog2Row1a.innerHTML = prog2Text1a.value;
    } else if (prog2Text1a.value) {
        prog2Row1a.innerHTML = prog2Text1a.value;
    }
};
let prog2VML1b = "156.8"; // Actual progress bar width; not grey color bar
let prog2VML1bInset = "106.80";
let prog2VML1cInset = "156.80";
const prog2Size1 = document.getElementById("prog2Size1");
prog2Size1.oninput = function() {
    prog2Row1b.style.width = Math.abs(prog2Size1.value) + "%";
    prog2Row1c.style.width = 100 - (Math.abs(prog2Size1.value)) + "%";
    if (prog2Size1.value < 5) { // Remove front data bar curve to prevent bar overlap
        prog2Row1b.style.borderRadius = "30px 0 0 30px";
    } else if (prog2Size1.value > 5) {
        prog2Row1b.style.borderRadius = "15px";
    }
    if (prog2Size1.value < 3) { // Set values 1 - 3 as specific width
        prog2Row1b.style.width = 3 + "%";
        prog2Row1c.style.width = 97 + "%";
    }
    prog2VML1b = Math.max((Math.abs(prog2Size1.value / 100) * 560), 30).toFixed(2);
    prog2VML1bInset = Math.max(((Math.abs(prog2Size1.value / 100) * 560) - 50), 103).toFixed(2);
    prog2VML1cInset = Math.max((Math.abs(prog2Size1.value / 100) * 560), 30).toFixed(2);
    if (prog2Size1.value == 0) { // Define 0 value for data bar
        prog2Row1b.style.width = 0 + "%";
        prog2Row1c.style.width = 100 + "%";
        prog2VML1b = 0;
        prog2VML1bInset = 0;
        prog2VML1cInset = 0;
    }
};
const prog2Text1 = document.getElementById("prog2Text1");
prog2Text1.oninput = function() {
    if (prog2Text1.value == "") {
        prog2Row1c.innerHTML = prog2Text1.value;
    } else if (prog2Text1.value) {
        prog2Row1c.innerHTML = "&nbsp;" + prog2Text1.value;
    }
};
const prog2Label1 = document.getElementById("prog2Label1");
prog2Label1.addEventListener("click", () => {
    if (prog2Text1.value == "") {
        prog2Row1b.innerHTML = "";
        prog2Row1c.innerHTML = "";
    } else if (prog2Text1.value) {
        prog2Row1b.innerHTML = prog2Text1.value + "&nbsp;";
        prog2Text1.value = "";
        prog2Row1c.innerHTML = "";
    }
});
const prog2Color1 = document.getElementById("prog2Color1");
prog2Color1.oninput = function() {
    prog2Row1b.style.backgroundColor = prog2Color1.value;
};

// Progress Bar Row 2 Customization Logic
const prog2Text2a = document.getElementById("prog2Text2a");
prog2Text2a.oninput = function() {
    if (prog2Text2a.value == "") {
        prog2Row2a.innerHTML = prog2Text2a.value;
    } else if (prog2Text2a.value) {
        prog2Row2a.innerHTML = prog2Text2a.value;
    }
};
let prog2VML2b = "375.20"; // Actual progress bar width; not grey color bar
let prog2VML2bInset = "325.20";
let prog2VML2cInset = "375.20";
const prog2Size2 = document.getElementById("prog2Size2");
prog2Size2.oninput = function() {
    prog2Row2b.style.width = Math.abs(prog2Size2.value) + "%";
    prog2Row2c.style.width = 100 - (Math.abs(prog2Size2.value)) + "%";
    if (prog2Size2.value < 5) {
        prog2Row2b.style.borderRadius = "30px 0 0 30px";
    } else if (prog2Size2.value > 5) {
        prog2Row2b.style.borderRadius = "15px";
    }
    if (prog2Size2.value < 3) {
        prog2Row2b.style.width = 3 + "%";
        prog2Row2c.style.width = 97 + "%";
    }
    prog2VML2b = Math.max((Math.abs(prog2Size2.value / 100) * 560), 30).toFixed(2);
    prog2VML2bInset = Math.max(((Math.abs(prog2Size2.value / 100) * 560) - 50), 103).toFixed(2);
    prog2VML2cInset = Math.max((Math.abs(prog2Size2.value / 100) * 560), 30).toFixed(2);
    if (prog2Size2.value == 0) { // Define 0 value for data bar
        prog2Row2b.style.width = 0 + "%";
        prog2Row2c.style.width = 100 + "%";
        prog2VML2b = 0;
        prog2VML2bInset = 0;
        prog2VML2cInset = 0;
    }
};
const prog2Text2 = document.getElementById("prog2Text2");
prog2Text2.oninput = function() {
    if (prog2Text2.value == "") {
        prog2Row2c.innerHTML = prog2Text2.value;
    } else if (prog2Text2.value) {
        prog2Row2c.innerHTML = "&nbsp;" + prog2Text2.value;
    }
};
const prog2Label2 = document.getElementById("prog2Label2");
prog2Label2.addEventListener("click", () => {
    if (prog2Text2.value == "") {
        prog2Row2b.innerHTML = "";
        prog2Row2c.innerHTML = "";
    } else if (prog2Text2.value) {
        prog2Row2b.innerHTML = prog2Text2.value + "&nbsp;";
        prog2Text2.value = "";
        prog2Row2c.innerHTML = "";
    }
});
const prog2Color2 = document.getElementById("prog2Color2");
prog2Color2.oninput = function() {
    prog2Row2b.style.backgroundColor = prog2Color2.value;
};

// Progress Bar Row 3 Customization Logic
const prog2Text3a = document.getElementById("prog2Text3a");
prog2Text3a.oninput = function() {
    if (prog2Text3a.value == "") {
        prog2Row3a.innerHTML = prog2Text3a.value;
    } else if (prog2Text3a.value) {
        prog2Row3a.innerHTML = prog2Text3a.value;
    }
};
let prog2VML3b = "44.80"; // Actual progress bar width; not grey color bar
let prog2VML3bInset = "103";
let prog2VML3cInset = "44.80";
const prog2Size3 = document.getElementById("prog2Size3");
prog2Size3.oninput = function() {
    prog2Row3b.style.width = Math.abs(prog2Size3.value) + "%";
    prog2Row3c.style.width = 100 - (Math.abs(prog2Size3.value)) + "%";
    if (prog2Size3.value < 5) {
        prog2Row3b.style.borderRadius = "30px 0 0 30px";
    } else if (prog2Size3.value > 5) {
        prog2Row3b.style.borderRadius = "15px";
    }
    if (prog2Size3.value < 3) {
        prog2Row3b.style.width = 3 + "%";
        prog2Row3c.style.width = 97 + "%";
    }
    prog2VML3b = Math.max((Math.abs(prog2Size3.value / 100) * 560), 30).toFixed(2);
    prog2VML3bInset = Math.max(((Math.abs(prog2Size3.value / 100) * 560) - 50), 103).toFixed(2);
    prog2VML3cInset = Math.max((Math.abs(prog2Size3.value / 100) * 560), 30).toFixed(2);
    if (prog2Size3.value == 0) { // Define 0 value for data bar
        prog2Row3b.style.width = 0 + "%";
        prog2Row3c.style.width = 100 + "%";
        prog2VML3b = 0;
        prog2VML3bInset = 0;
        prog2VML3cInset = 0;
    }
};
const prog2Text3 = document.getElementById("prog2Text3");
prog2Text3.oninput = function() {
    if (prog2Text3.value == "") {
        prog2Row3c.innerHTML = prog2Text3.value;
    } else if (prog2Text3.value) {
        prog2Row3c.innerHTML = "&nbsp;" + prog2Text3.value;
    }
};
const prog2Label3 = document.getElementById("prog2Label3");
prog2Label3.addEventListener("click", () => {
    if (prog2Text3.value == "") {
        prog2Row3b.innerHTML = "";
        prog2Row3c.innerHTML = "";
    } else if (prog2Text3.value) {
        prog2Row3b.innerHTML = prog2Text3.value + "&nbsp;";
        prog2Text3.value = "";
        prog2Row3c.innerHTML = "";
    }
});
const prog2Color3 = document.getElementById("prog2Color3");
prog2Color3.oninput = function() {
    prog2Row3b.style.backgroundColor = prog2Color3.value;
};

// Progress Bar Row 4 Customization Logic
const prog2Text4a = document.getElementById("prog2Text4a");
prog2Text4a.oninput = function() {
    if (prog2Text4a.value == "") {
        prog2Row4a.innerHTML = prog2Text4a.value;
    } else if (prog2Text4a.value) {
        prog2Row4a.innerHTML = prog2Text4a.value;
    }
};
let prog2VML4b = "543.20"; // Actual progress bar width; not grey color bar
let prog2VML4bInset = "493.20";
let prog2VML4cInset = "543.20";
const prog2Size4 = document.getElementById("prog2Size4");
prog2Size4.oninput = function() {
    prog2Row4b.style.width = Math.abs(prog2Size4.value) + "%";
    prog2Row4c.style.width = 100 - (Math.abs(prog2Size4.value)) + "%";
    if (prog2Size4.value < 5) {
        prog2Row4b.style.borderRadius = "30px 0 0 30px";
    } else if (prog2Size4.value > 5) {
        prog2Row4b.style.borderRadius = "15px";
    }
    if (prog2Size4.value < 3) {
        prog2Row4b.style.width = 3 + "%";
        prog2Row4c.style.width = 97 + "%";
    }
    prog2VML4b = Math.max((Math.abs(prog2Size4.value / 100) * 560), 30).toFixed(2);
    prog2VML4bInset = Math.max(((Math.abs(prog2Size4.value / 100) * 560) - 50), 103).toFixed(2);
    prog2VML4cInset = Math.max((Math.abs(prog2Size4.value / 100) * 560), 30).toFixed(2);
    if (prog2Size4.value == 0) { // Define 0 value for data bar
        prog2Row4b.style.width = 0 + "%";
        prog2Row4c.style.width = 100 + "%";
        prog2VML4b = 0;
        prog2VML4bInset = 0;
        prog2VML4cInset = 0;
    }
};
const prog2Text4 = document.getElementById("prog2Text4");
prog2Text4.oninput = function() {
    if (prog2Text4.value == "") {
        prog2Row4c.innerHTML = prog2Text4.value;
    } else if (prog2Text4.value) {
        prog2Row4c.innerHTML = "&nbsp;" + prog2Text4.value;
    }
};
const prog2Label4 = document.getElementById("prog2Label4");
prog2Label4.addEventListener("click", () => {
    if (prog2Text4.value == "") {
        prog2Row4b.innerHTML = "";
        prog2Row4c.innerHTML = "";
    } else if (prog2Text4.value) {
        prog2Row4b.innerHTML = prog2Text4.value + "&nbsp;";
        prog2Text4.value = "";
        prog2Row4c.innerHTML = "";
    }
});
const prog2Color4 = document.getElementById("prog2Color4");
prog2Color4.oninput = function() {
    prog2Row4b.style.backgroundColor = prog2Color4.value;
};

// Progress Bar Row 5 Customization Logic
const prog2Text5a = document.getElementById("prog2Text5a");
prog2Text5a.oninput = function() {
    if (prog2Text5a.value == "") {
        prog2Row5a.innerHTML = prog2Text5a.value;
    } else if (prog2Text5a.value) {
        prog2Row5a.innerHTML = prog2Text5a.value;
    }
};
let prog2VML5b = "140"; // Actual progress bar width; not grey color bar
let prog2VML5bInset = "103";
let prog2VML5cInset = "140";
const prog2Size5 = document.getElementById("prog2Size5");
prog2Size5.oninput = function() {
    prog2Row5b.style.width = Math.abs(prog2Size5.value) + "%";
    prog2Row5c.style.width = 100 - (Math.abs(prog2Size5.value)) + "%";
    if (prog2Size5.value < 5) {
        prog2Row5b.style.borderRadius = "30px 0 0 30px";
    } else if (prog2Size5.value > 5) {
        prog2Row5b.style.borderRadius = "15px";
    }
    if (prog2Size5.value < 3) {
        prog2Row5b.style.width = 3 + "%";
        prog2Row5c.style.width = 97 + "%";
    }
    prog2VML5b = Math.max((Math.abs(prog2Size5.value / 100) * 560), 30).toFixed(2);
    prog2VML5bInset = Math.max(((Math.abs(prog2Size5.value / 100) * 560) - 50), 103).toFixed(2);
    prog2VML5cInset = Math.max((Math.abs(prog2Size5.value / 100) * 560), 30).toFixed(2);
    if (prog2Size5.value == 0) { // Define 0 value for data bar
        prog2Row5b.style.width = 0 + "%";
        prog2Row5c.style.width = 100 + "%";
        prog2VML5b = 0;
        prog2VML5bInset = 0;
        prog2VML5cInset = 0;
    }
};
const prog2Text5 = document.getElementById("prog2Text5");
prog2Text5.oninput = function() {
    if (prog2Text5.value == "") {
        prog2Row5c.innerHTML = prog2Text5.value;
    } else if (prog2Text5.value) {
        prog2Row5c.innerHTML = "&nbsp;" + prog2Text5.value;
    }
};
const prog2Label5 = document.getElementById("prog2Label5");
prog2Label5.addEventListener("click", () => {
    if (prog2Text5.value == "") {
        prog2Row5b.innerHTML = "";
        prog2Row5c.innerHTML = "";
    } else if (prog2Text5.value) {
        prog2Row5b.innerHTML = prog2Text5.value + "&nbsp;";
        prog2Text5.value = "";
        prog2Row5c.innerHTML = "";
    }
});
const prog2Color5 = document.getElementById("prog2Color5");
prog2Color5.oninput = function() {
    prog2Row5b.style.backgroundColor = prog2Color5.value;
};

// Generate Progress Bar HTML Logic
const prog2Weight = document.getElementById("prog2Weight");
const prog2Button = document.getElementById("prog2Button");
const prog2Output = document.getElementById("prog2Output");
prog2Button.addEventListener("mouseenter", () => { prog2Output.style.opacity = ".4"; prog2Weight.style.opacity = ".4"; } );
prog2Button.addEventListener("mouseleave", () => { prog2Output.style.opacity = ""; prog2Weight.style.opacity = ""; prog2Output.style.borderColor = ""; prog2Weight.style.color = ""; } );
prog2Button.addEventListener("click", () => {
    if (rowsData9.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog2csCode + ' <tr> <td align="left" style="padding: ' + prog2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog2Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML1cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML1b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color1.value + '" stroke="false"> <v:textbox inset="' + prog2VML1bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background-color: ' + prog2Color1.value + '; border-radius: ' + prog2Row1b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1b.style.width + '; height: 28px;" height="28">' + prog2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1c.style.width + '; height: 28px;" height="28">' + prog2Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog2srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog2Output.innerHTML = chartCode;
        prog2Weight.textContent = Math.ceil(prog2Output.value.length / 1024) + 'KB';
    } else if (rowsData9.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog2csCode + ' <tr> <td align="left" style="padding: ' + prog2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog2Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML1cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML1b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color1.value + '" stroke="false"> <v:textbox inset="' + prog2VML1bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background-color: ' + prog2Color1.value + '; border-radius: ' + prog2Row1b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1b.style.width + '; height: 28px;" height="28">' + prog2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1c.style.width + '; height: 28px;" height="28">' + prog2Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog2Row2a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML2cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row2c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML2b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color2.value + '" stroke="false"> <v:textbox inset="' + prog2VML2bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row2b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background-color: ' + prog2Color2.value + '; border-radius: ' + prog2Row2b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row2b.style.width + '; height: 28px;" height="28">' + prog2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row2c.style.width + '; height: 28px;" height="28">' + prog2Row2c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog2srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog2Output.innerHTML = chartCode;
        prog2Weight.textContent = Math.ceil(prog2Output.value.length / 1024) + 'KB';
    } else if (rowsData9.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog2csCode + ' <tr> <td align="left" style="padding: ' + prog2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog2Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML1cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML1b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color1.value + '" stroke="false"> <v:textbox inset="' + prog2VML1bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background-color: ' + prog2Color1.value + '; border-radius: ' + prog2Row1b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1b.style.width + '; height: 28px;" height="28">' + prog2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1c.style.width + '; height: 28px;" height="28">' + prog2Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog2Row2a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML2cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row2c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML2b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color2.value + '" stroke="false"> <v:textbox inset="' + prog2VML2bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row2b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background-color: ' + prog2Color2.value + '; border-radius: ' + prog2Row2b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row2b.style.width + '; height: 28px;" height="28">' + prog2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row2c.style.width + '; height: 28px;" height="28">' + prog2Row2c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog2Row3a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML3cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row3c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML3b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color3.value + '" stroke="false"> <v:textbox inset="' + prog2VML3bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row3b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background-color: ' + prog2Color3.value + '; border-radius: ' + prog2Row3b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row3b.style.width + '; height: 28px;" height="28">' + prog2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row3c.style.width + '; height: 28px;" height="28">' + prog2Row3c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog2srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog2Output.innerHTML = chartCode;
        prog2Weight.textContent = Math.ceil(prog2Output.value.length / 1024) + 'KB';
    } else if (rowsData9.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog2csCode + ' <tr> <td align="left" style="padding: ' + prog2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog2Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML1cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML1b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color1.value + '" stroke="false"> <v:textbox inset="' + prog2VML1bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background-color: ' + prog2Color1.value + '; border-radius: ' + prog2Row1b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1b.style.width + '; height: 28px;" height="28">' + prog2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1c.style.width + '; height: 28px;" height="28">' + prog2Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog2Row2a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML2cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row2c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML2b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color2.value + '" stroke="false"> <v:textbox inset="' + prog2VML2bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row2b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background-color: ' + prog2Color2.value + '; border-radius: ' + prog2Row2b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row2b.style.width + '; height: 28px;" height="28">' + prog2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row2c.style.width + '; height: 28px;" height="28">' + prog2Row2c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog2Row3a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML3cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row3c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML3b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color3.value + '" stroke="false"> <v:textbox inset="' + prog2VML3bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row3b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background-color: ' + prog2Color3.value + '; border-radius: ' + prog2Row3b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row3b.style.width + '; height: 28px;" height="28">' + prog2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row3c.style.width + '; height: 28px;" height="28">' + prog2Row3c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog2Row4a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML4cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row4c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML4b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color4.value + '" stroke="false"> <v:textbox inset="' + prog2VML4bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row4b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background-color: ' + prog2Color4.value + '; border-radius: ' + prog2Row4b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row4b.style.width + '; height: 28px;" height="28">' + prog2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row4c.style.width + '; height: 28px;" height="28">' + prog2Row4c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog2srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog2Output.innerHTML = chartCode;
        prog2Weight.textContent = Math.ceil(prog2Output.value.length / 1024) + 'KB';
    } else if (rowsData9.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog2csCode + ' <tr> <td align="left" style="padding: ' + prog2TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog2Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML1cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML1b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color1.value + '" stroke="false"> <v:textbox inset="' + prog2VML1bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background-color: ' + prog2Color1.value + '; border-radius: ' + prog2Row1b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1b.style.width + '; height: 28px;" height="28">' + prog2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1c.style.width + '; height: 28px;" height="28">' + prog2Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog2Row2a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML2cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row2c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML2b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color2.value + '" stroke="false"> <v:textbox inset="' + prog2VML2bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row2b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background-color: ' + prog2Color2.value + '; border-radius: ' + prog2Row2b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row2b.style.width + '; height: 28px;" height="28">' + prog2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row2c.style.width + '; height: 28px;" height="28">' + prog2Row2c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog2Row3a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML3cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row3c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML3b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color3.value + '" stroke="false"> <v:textbox inset="' + prog2VML3bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row3b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background-color: ' + prog2Color3.value + '; border-radius: ' + prog2Row3b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row3b.style.width + '; height: 28px;" height="28">' + prog2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row3c.style.width + '; height: 28px;" height="28">' + prog2Row3c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog2Row4a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML4cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row4c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML4b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color4.value + '" stroke="false"> <v:textbox inset="' + prog2VML4bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row4b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background-color: ' + prog2Color4.value + '; border-radius: ' + prog2Row4b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row4b.style.width + '; height: 28px;" height="28">' + prog2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row4c.style.width + '; height: 28px;" height="28">' + prog2Row4c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog2Row5a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML5cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row5c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML5b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color5.value + '" stroke="false"> <v:textbox inset="' + prog2VML5bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row5b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background-color: ' + prog2Color5.value + '; border-radius: ' + prog2Row5b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row5b.style.width + '; height: 28px;" height="28">' + prog2Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row5c.style.width + '; height: 28px;" height="28">' + prog2Row5c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog2srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog2Output.innerHTML = chartCode;
        prog2Weight.textContent = Math.ceil(prog2Output.value.length / 1024) + 'KB';
    }
    prog2Output.style.opacity = "";
    prog2Weight.style.opacity = "";
    prog2Output.style.borderColor = "#166dfc";
    prog2Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(prog2Output.value);
});
prog2Output.addEventListener("click", () => {
    prog2Output.select();
});

// Progress Bar Chart III Selection
const prog3Bars = document.getElementsByClassName("prog3Bars");
const prog3Controls = document.getElementsByClassName("prog3Controls");
const rowsData22 = document.getElementById("rowsData22");
rowsData22.addEventListener("change", () => {
    for (var i = 0; i < prog3Controls.length; i++) {
        prog3Controls[i].style.display = "none";
        prog3Bars[i].style.display = "none";
        for (var x = 0; x < rowsData22.value; x++) {
            prog3Controls[x].style.display = "block";
            prog3Bars[x].style.display = "block";
        }
    }
});

// Progress Bar III Caption
let prog3TopBarSpace = "";
let prog3csCode = "";
const prog3Cap = document.getElementById("prog3Cap"); // Caption or chart title
const prog3capText = document.getElementById("prog3capText"); // Caption or chart title text
prog3capText.oninput = function() {
    prog3Cap.innerHTML = prog3capText.value;
    if (prog3capText.value == "" && prog3subText.value == "") {
        prog3Bars[0].firstElementChild.style.padding = "0"; // Targets the first data bar below caption/subtitle text
        prog3TopBarSpace = "0"; // Padding for first data bar below caption/subtitle text for output code
        prog3Cap.style.marginBottom = "0";
        return prog3csCode = "";
    } else if (prog3capText.value == "" && prog3subText.value) {
        prog3Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        prog3TopBarSpace = "20px 0 0 0";
        prog3Cap.style.marginBottom = "0";
        return prog3csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + prog3Sub.innerHTML + '</td> </tr>';
    } else if (prog3capText.value && prog3subText.value == "") {
        prog3Bars[0].firstElementChild.style.padding = "0";
        prog3TopBarSpace = "0";
        prog3Cap.style.marginBottom = "20px";
        return prog3csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + prog3Cap.innerHTML + '</caption>';
    } else if (prog3capText.value && prog3subText.value) {
        prog3Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        prog3TopBarSpace = "20px 0 0 0";
        prog3Cap.style.marginBottom = "4px";
        return prog3csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + prog3Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + prog3Sub.innerHTML + '</td> </tr>';
    }
};
// Progress Bar III Subtitle
const prog3Sub = document.getElementById("prog3Sub"); // Chart subtitle
const prog3subText = document.getElementById("prog3subText"); // Chart subtitle text
prog3subText.oninput = function() {
    prog3Sub.innerHTML = prog3subText.value;
    if (prog3subText.value == "" && prog3capText.value == "") {
        prog3Bars[0].firstElementChild.style.padding = "0";
        prog3TopBarSpace = "0";
        prog3Cap.style.marginBottom = "0";
        return prog3csCode = "";
    } else if (prog3subText.value == "" && prog3capText.value) {
        prog3Bars[0].firstElementChild.style.padding = "0";
        prog3TopBarSpace = "0";
        prog3Cap.style.marginBottom = "20px";
        return prog3csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + prog3Cap.innerHTML + '</caption>';
    } else if (prog3subText.value && prog3capText.value == "") {
        prog3Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        prog3TopBarSpace = "20px 0 0 0";
        prog3Cap.style.marginBottom = "0";
        return prog3csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + prog3Sub.innerHTML + '</td> </tr>';
    } else if (prog3subText.value && prog3capText.value) {
        prog3Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        prog3TopBarSpace = "20px 0 0 0";
        prog3Cap.style.marginBottom = "4px";
        return prog3csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + prog3Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + prog3Sub.innerHTML + '</td> </tr>';
    }
};
// Progress Bar III Source
let prog3srcCode = "";
const prog3Source = document.getElementById("prog3Source"); // Chart source
const prog3srcText = document.getElementById("prog3srcText"); // Chart source text
prog3srcText.oninput = function() {
    prog3Source.innerHTML = prog3srcText.value;
    if (prog3srcText.value == "") {
        prog3Source.style.paddingTop = "0";
        return prog3srcCode = "";
    } else if (prog3srcText.value) {
        prog3Source.style.paddingTop = "40px";
        return prog3srcCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 40px; text-align: left;">' + prog3Source.innerHTML + '</td></tr>';
    }
};

// Progress Bar III Chart Color Picker
const prog3colorPickFB = document.getElementById("prog3colorPickFB");
prog3colorPickFB.addEventListener("change", (evt) => {
    prog3Row1b.style.backgroundColor = evt.detail.hex;
    prog3Row1b.style.background = 'linear-gradient(90deg, ' + prog3Color1a.value + ', ' + prog3Color1b.value + ')';
    prog3Color1a.value = evt.detail.hex;
    prog3Row2b.style.backgroundColor = evt.detail.hex;
    prog3Row2b.style.background = 'linear-gradient(90deg, ' + prog3Color2a.value + ', ' + prog3Color2b.value + ')';
    prog3Color2a.value = evt.detail.hex;
    prog3Row3b.style.backgroundColor = evt.detail.hex;
    prog3Row3b.style.background = 'linear-gradient(90deg, ' + prog3Color3a.value + ', ' + prog3Color3b.value + ')';
    prog3Color3a.value = evt.detail.hex;
    prog3Row4b.style.backgroundColor = evt.detail.hex;
    prog3Row4b.style.background = 'linear-gradient(90deg, ' + prog3Color4a.value + ', ' + prog3Color4b.value + ')';
    prog3Color4a.value = evt.detail.hex;
    prog3Row5b.style.backgroundColor = evt.detail.hex;
    prog3Row5b.style.background = 'linear-gradient(90deg, ' + prog3Color5a.value + ', ' + prog3Color5b.value + ')';
    prog3Color5a.value = evt.detail.hex;
});
const prog3colorPickLG = document.getElementById("prog3colorPickLG");
prog3colorPickLG.addEventListener("change", (evt) => {
    prog3Row1b.style.backgroundColor = evt.detail.hex;
    prog3Row1b.style.background = 'linear-gradient(90deg, ' + prog3Color1a.value + ', ' + prog3Color1b.value + ')';
    prog3Color1b.value = evt.detail.hex;
    prog3Row2b.style.backgroundColor = evt.detail.hex;
    prog3Row2b.style.background = 'linear-gradient(90deg, ' + prog3Color2a.value + ', ' + prog3Color2b.value + ')';
    prog3Color2b.value = evt.detail.hex;
    prog3Row3b.style.backgroundColor = evt.detail.hex;
    prog3Row3b.style.background = 'linear-gradient(90deg, ' + prog3Color3a.value + ', ' + prog3Color3b.value + ')';
    prog3Color3b.value = evt.detail.hex;
    prog3Row4b.style.backgroundColor = evt.detail.hex;
    prog3Row4b.style.background = 'linear-gradient(90deg, ' + prog3Color4a.value + ', ' + prog3Color4b.value + ')';
    prog3Color4b.value = evt.detail.hex;
    prog3Row5b.style.backgroundColor = evt.detail.hex;
    prog3Row5b.style.background = 'linear-gradient(90deg, ' + prog3Color5a.value + ', ' + prog3Color5b.value + ')';
    prog3Color5b.value = evt.detail.hex;
});

// Progress Bar Chart III Customization Logic
const prog3Row1a = document.getElementById("prog3Row1a");
const prog3Row1b = document.getElementById("prog3Row1b");
const prog3Row1c = document.getElementById("prog3Row1c");
const prog3Row2a = document.getElementById("prog3Row2a");
const prog3Row2b = document.getElementById("prog3Row2b");
const prog3Row2c = document.getElementById("prog3Row2c");
const prog3Row3a = document.getElementById("prog3Row3a");
const prog3Row3b = document.getElementById("prog3Row3b");
const prog3Row3c = document.getElementById("prog3Row3c");
const prog3Row4a = document.getElementById("prog3Row4a");
const prog3Row4b = document.getElementById("prog3Row4b");
const prog3Row4c = document.getElementById("prog3Row4c");
const prog3Row5a = document.getElementById("prog3Row5a");
const prog3Row5b = document.getElementById("prog3Row5b");
const prog3Row5c = document.getElementById("prog3Row5c");

// Progress Bar Row 1 Customization Logic
const prog3Text1a = document.getElementById("prog3Text1a");
prog3Text1a.oninput = function() {
    if (prog3Text1a.value == "") {
        prog3Row1a.innerHTML = prog3Text1a.value;
    } else if (prog3Text1a.value) {
        prog3Row1a.innerHTML = prog3Text1a.value;
    }
};
let prog3VML1b = "156.8"; // Actual progress bar width; not grey color bar
let prog3VML1bInset = "106.80";
let prog3VML1cInset = "156.80";
const prog3Size1 = document.getElementById("prog3Size1");
prog3Size1.oninput = function() {
    prog3Row1b.style.width = Math.abs(prog3Size1.value) + "%";
    prog3Row1c.style.width = 100 - (Math.abs(prog3Size1.value)) + "%";
    prog3VML1b = Math.max((Math.abs(prog3Size1.value / 100) * 560), 30).toFixed(2);
    prog3VML1bInset = Math.max(((Math.abs(prog3Size1.value / 100) * 560) - 50), 103).toFixed(2);
    prog3VML1cInset = Math.max((Math.abs(prog3Size1.value / 100) * 560), 30).toFixed(2);
    if (prog3Size1.value == 0) { // Define 0 value for data bar
        prog3Row1b.style.width = 0 + "%";
        prog3Row1c.style.width = 100 + "%";
        prog3VML1b = 0;
        prog3VML1bInset = 0;
        prog3VML1cInset = 0;
    }
};
const prog3Text1 = document.getElementById("prog3Text1");
prog3Text1.oninput = function() {
    if (prog3Text1.value == "") {
        prog3Row1c.innerHTML = prog3Text1.value;
    } else if (prog3Text1.value) {
        prog3Row1c.innerHTML = "&nbsp;" + prog3Text1.value;
    }
};
const prog3Label1 = document.getElementById("prog3Label1");
prog3Label1.addEventListener("click", () => {
    if (prog3Text1.value == "") {
        prog3Row1b.innerHTML = "";
        prog3Row1c.innerHTML = "";
    } else if (prog3Text1.value) {
        prog3Row1b.innerHTML = prog3Text1.value + "&nbsp;";
        prog3Text1.value = "";
        prog3Row1c.innerHTML = "";
    }
});
const prog3Color1a = document.getElementById("prog3Color1a");
prog3Color1a.oninput = function() {
    prog3Row1b.style.backgroundColor = prog3Color1a.value;
    prog3Row1b.style.background = 'linear-gradient(90deg, ' + prog3Color1a.value + ', ' + prog3Color1b.value + ')';
};
const prog3Color1b = document.getElementById("prog3Color1b");
prog3Color1b.oninput = function() {
    prog3Row1b.style.background = 'linear-gradient(90deg, ' + prog3Color1a.value + ', ' + prog3Color1b.value + ')';
};

// Progress Bar Row 2 Customization Logic
const prog3Text2a = document.getElementById("prog3Text2a");
prog3Text2a.oninput = function() {
    if (prog3Text2a.value == "") {
        prog3Row2a.innerHTML = prog3Text2a.value;
    } else if (prog3Text2a.value) {
        prog3Row2a.innerHTML = prog3Text2a.value;
    }
};
let prog3VML2b = "375.20"; // Actual progress bar width; not grey color bar
let prog3VML2bInset = "325.20";
let prog3VML2cInset = "375.20";
const prog3Size2 = document.getElementById("prog3Size2");
prog3Size2.oninput = function() {
    prog3Row2b.style.width = Math.abs(prog3Size2.value) + "%";
    prog3Row2c.style.width = 100 - (Math.abs(prog3Size2.value)) + "%";
    prog3VML2b = Math.max((Math.abs(prog3Size2.value / 100) * 560), 30).toFixed(2);
    prog3VML2bInset = Math.max(((Math.abs(prog3Size2.value / 100) * 560) - 50), 103).toFixed(2);
    prog3VML2cInset = Math.max((Math.abs(prog3Size2.value / 100) * 560), 30).toFixed(2);
    if (prog3Size2.value == 0) { // Define 0 value for data bar
        prog3Row2b.style.width = 0 + "%";
        prog3Row2c.style.width = 100 + "%";
        prog3VML2b = 0;
        prog3VML2bInset = 0;
        prog3VML2cInset = 0;
    }
};
const prog3Text2 = document.getElementById("prog3Text2");
prog3Text2.oninput = function() {
    if (prog3Text2.value == "") {
        prog3Row2c.innerHTML = prog3Text2.value;
    } else if (prog3Text2.value) {
        prog3Row2c.innerHTML = "&nbsp;" + prog3Text2.value;
    }
};
const prog3Label2 = document.getElementById("prog3Label2");
prog3Label2.addEventListener("click", () => {
    if (prog3Text2.value == "") {
        prog3Row2b.innerHTML = "";
        prog3Row2c.innerHTML = "";
    } else if (prog3Text2.value) {
        prog3Row2b.innerHTML = prog3Text2.value + "&nbsp;";
        prog3Text2.value = "";
        prog3Row2c.innerHTML = "";
    }
});
const prog3Color2a = document.getElementById("prog3Color2a");
prog3Color2a.oninput = function() {
    prog3Row2b.style.backgroundColor = prog3Color2a.value;
    prog3Row2b.style.background = 'linear-gradient(90deg, ' + prog3Color2a.value + ', ' + prog3Color2b.value + ')';
};
const prog3Color2b = document.getElementById("prog3Color2b");
prog3Color2b.oninput = function() {
    prog3Row2b.style.background = 'linear-gradient(90deg, ' + prog3Color2a.value + ', ' + prog3Color2b.value + ')';
};

// Progress Bar Row 3 Customization Logic
const prog3Text3a = document.getElementById("prog3Text3a");
prog3Text3a.oninput = function() {
    if (prog3Text3a.value == "") {
        prog3Row3a.innerHTML = prog3Text3a.value;
    } else if (prog3Text3a.value) {
        prog3Row3a.innerHTML = prog3Text3a.value;
    }
};
let prog3VML3b = "44.80"; // Actual progress bar width; not grey color bar
let prog3VML3bInset = "103";
let prog3VML3cInset = "44.80";
const prog3Size3 = document.getElementById("prog3Size3");
prog3Size3.oninput = function() {
    prog3Row3b.style.width = Math.abs(prog3Size3.value) + "%";
    prog3Row3c.style.width = 100 - (Math.abs(prog3Size3.value)) + "%";
    prog3VML3b = Math.max((Math.abs(prog3Size3.value / 100) * 560), 30).toFixed(2);
    prog3VML3bInset = Math.max(((Math.abs(prog3Size3.value / 100) * 560) - 50), 103).toFixed(2);
    prog3VML3cInset = Math.max((Math.abs(prog3Size3.value / 100) * 560), 30).toFixed(2);
    if (prog3Size3.value == 0) { // Define 0 value for data bar
        prog3Row3b.style.width = 0 + "%";
        prog3Row3c.style.width = 100 + "%";
        prog3VML3b = 0;
        prog3VML3bInset = 0;
        prog3VML3cInset = 0;
    }
};
const prog3Text3 = document.getElementById("prog3Text3");
prog3Text3.oninput = function() {
    if (prog3Text3.value == "") {
        prog3Row3c.innerHTML = prog3Text3.value;
    } else if (prog3Text3.value) {
        prog3Row3c.innerHTML = "&nbsp;" + prog3Text3.value;
    }
};
const prog3Label3 = document.getElementById("prog3Label3");
prog3Label3.addEventListener("click", () => {
    if (prog3Text3.value == "") {
        prog3Row3b.innerHTML = "";
        prog3Row3c.innerHTML = "";
    } else if (prog3Text3.value) {
        prog3Row3b.innerHTML = prog3Text3.value + "&nbsp;";
        prog3Text3.value = "";
        prog3Row3c.innerHTML = "";
    }
});
const prog3Color3a = document.getElementById("prog3Color3a");
prog3Color3a.oninput = function() {
    prog3Row3b.style.backgroundColor = prog3Color3a.value;
    prog3Row3b.style.background = 'linear-gradient(90deg, ' + prog3Color3a.value + ', ' + prog3Color3b.value + ')';
};
const prog3Color3b = document.getElementById("prog3Color3b");
prog3Color3b.oninput = function() {
    prog3Row3b.style.background = 'linear-gradient(90deg, ' + prog3Color3a.value + ', ' + prog3Color3b.value + ')';
};

// Progress Bar Row 4 Customization Logic
const prog3Text4a = document.getElementById("prog3Text4a");
prog3Text4a.oninput = function() {
    if (prog3Text4a.value == "") {
        prog3Row4a.innerHTML = prog3Text4a.value;
    } else if (prog3Text4a.value) {
        prog3Row4a.innerHTML = prog3Text4a.value;
    }
};
let prog3VML4b = "543.20"; // Actual progress bar width; not grey color bar
let prog3VML4bInset = "493.20";
let prog3VML4cInset = "543.20";
const prog3Size4 = document.getElementById("prog3Size4");
prog3Size4.oninput = function() {
    prog3Row4b.style.width = Math.abs(prog3Size4.value) + "%";
    prog3Row4c.style.width = 100 - (Math.abs(prog3Size4.value)) + "%";
    prog3VML4b = Math.max((Math.abs(prog3Size4.value / 100) * 560), 30).toFixed(2);
    prog3VML4bInset = Math.max(((Math.abs(prog3Size4.value / 100) * 560) - 50), 103).toFixed(2);
    prog3VML4cInset = Math.max((Math.abs(prog3Size4.value / 100) * 560), 30).toFixed(2);
    if (prog3Size4.value == 0) { // Define 0 value for data bar
        prog3Row4b.style.width = 0 + "%";
        prog3Row4c.style.width = 100 + "%";
        prog3VML4b = 0;
        prog3VML4bInset = 0;
        prog3VML4cInset = 0;
    }
};
const prog3Text4 = document.getElementById("prog3Text4");
prog3Text4.oninput = function() {
    if (prog3Text4.value == "") {
        prog3Row4c.innerHTML = prog3Text4.value;
    } else if (prog3Text4.value) {
        prog3Row4c.innerHTML = "&nbsp;" + prog3Text4.value;
    }
};
const prog3Label4 = document.getElementById("prog3Label4");
prog3Label4.addEventListener("click", () => {
    if (prog3Text4.value == "") {
        prog3Row4b.innerHTML = "";
        prog3Row4c.innerHTML = "";
    } else if (prog3Text4.value) {
        prog3Row4b.innerHTML = prog3Text4.value + "&nbsp;";
        prog3Text4.value = "";
        prog3Row4c.innerHTML = "";
    }
});
const prog3Color4a = document.getElementById("prog3Color4a");
prog3Color4a.oninput = function() {
    prog3Row4b.style.backgroundColor = prog3Color4a.value;
    prog3Row4b.style.background = 'linear-gradient(90deg, ' + prog3Color4a.value + ', ' + prog3Color4b.value + ')';
};
const prog3Color4b = document.getElementById("prog3Color4b");
prog3Color4b.oninput = function() {
    prog3Row4b.style.background = 'linear-gradient(90deg, ' + prog3Color4a.value + ', ' + prog3Color4b.value + ')';
};

// Progress Bar Row 5 Customization Logic
const prog3Text5a = document.getElementById("prog3Text5a");
prog3Text5a.oninput = function() {
    if (prog3Text5a.value == "") {
        prog3Row5a.innerHTML = prog3Text5a.value;
    } else if (prog3Text5a.value) {
        prog3Row5a.innerHTML = prog3Text5a.value;
    }
};
let prog3VML5b = "140"; // Actual progress bar width; not grey color bar
let prog3VML5bInset = "103";
let prog3VML5cInset = "140";
const prog3Size5 = document.getElementById("prog3Size5");
prog3Size5.oninput = function() {
    prog3Row5b.style.width = Math.abs(prog3Size5.value) + "%";
    prog3Row5c.style.width = 100 - (Math.abs(prog3Size5.value)) + "%";
    prog3VML5b = Math.max((Math.abs(prog3Size5.value / 100) * 560), 30).toFixed(2);
    prog3VML5bInset = Math.max(((Math.abs(prog3Size5.value / 100) * 560) - 50), 103).toFixed(2);
    prog3VML5cInset = Math.max((Math.abs(prog3Size5.value / 100) * 560), 30).toFixed(2);
    if (prog3Size5.value == 0) { // Define 0 value for data bar
        prog3Row5b.style.width = 0 + "%";
        prog3Row5c.style.width = 100 + "%";
        prog3VML5b = 0;
        prog3VML5bInset = 0;
        prog3VML5cInset = 0;
    }
};
const prog3Text5 = document.getElementById("prog3Text5");
prog3Text5.oninput = function() {
    if (prog3Text5.value == "") {
        prog3Row5c.innerHTML = prog3Text5.value;
    } else if (prog3Text5.value) {
        prog3Row5c.innerHTML = "&nbsp;" + prog3Text5.value;
    }
};
const prog3Label5 = document.getElementById("prog3Label5");
prog3Label5.addEventListener("click", () => {
    if (prog3Text5.value == "") {
        prog3Row5b.innerHTML = "";
        prog3Row5c.innerHTML = "";
    } else if (prog3Text5.value) {
        prog3Row5b.innerHTML = prog3Text5.value + "&nbsp;";
        prog3Text5.value = "";
        prog3Row5c.innerHTML = "";
    }
});
const prog3Color5a = document.getElementById("prog3Color5a");
prog3Color5a.oninput = function() {
    prog3Row5b.style.backgroundColor = prog3Color5a.value;
    prog3Row5b.style.background = 'linear-gradient(90deg, ' + prog3Color5a.value + ', ' + prog3Color5b.value + ')';
};
const prog3Color5b = document.getElementById("prog3Color5b");
prog3Color5b.oninput = function() {
    prog3Row5b.style.background = 'linear-gradient(90deg, ' + prog3Color5a.value + ', ' + prog3Color5b.value + ')';
};

// Generate Progress Bar HTML Logic
const prog3Weight = document.getElementById("prog3Weight");
const prog3Button = document.getElementById("prog3Button");
const prog3Output = document.getElementById("prog3Output");
prog3Button.addEventListener("mouseenter", () => { prog3Output.style.opacity = ".4"; prog3Weight.style.opacity = ".4"; } );
prog3Button.addEventListener("mouseleave", () => { prog3Output.style.opacity = ""; prog3Weight.style.opacity = ""; prog3Output.style.borderColor = ""; prog3Weight.style.color = ""; } );
prog3Button.addEventListener("click", () => {
    if (rowsData22.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog3csCode + ' <tr> <td align="left" style="padding: ' + prog3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog3Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog3VML1cInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row1c.innerHTML + '</span> </v:textbox> </v:rect> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog3VML1b + 'px; position: relative; z-index: 1;" fill="true" fillcolor="' + prog3Color1a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog3Color1b.value + '" color2="' + prog3Color1a.value + '" angle="90" /> <v:textbox inset="' + prog3VML1bInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row1b.innerHTML + '</span> </v:textbox> </v:rect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3;"> <tr> <td align="right" style="background: ' + prog3Row1b.style.background + '; background-color: ' + prog3Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row1b.style.width + '; height: 28px;" height="28">' + prog3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row1c.style.width + '; height: 28px;" height="28">' + prog3Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog3srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog3Output.innerHTML = chartCode;
        prog3Weight.textContent = Math.ceil(prog3Output.value.length / 1024) + 'KB';
    } else if (rowsData22.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog3csCode + ' <tr> <td align="left" style="padding: ' + prog3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog3Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog3VML1cInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row1c.innerHTML + '</span> </v:textbox> </v:rect> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog3VML1b + 'px; position: relative; z-index: 1;" fill="true" fillcolor="' + prog3Color1a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog3Color1b.value + '" color2="' + prog3Color1a.value + '" angle="90" /> <v:textbox inset="' + prog3VML1bInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row1b.innerHTML + '</span> </v:textbox> </v:rect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3;"> <tr> <td align="right" style="background: ' + prog3Row1b.style.background + '; background-color: ' + prog3Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row1b.style.width + '; height: 28px;" height="28">' + prog3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row1c.style.width + '; height: 28px;" height="28">' + prog3Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog3Row2a.innerHTML + '</td></tr></table><!--[if mso]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog3VML2cInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row2c.innerHTML + '</span> </v:textbox> </v:rect> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog3VML2b + 'px; position: relative; z-index: 1;" fill="true" fillcolor="' + prog3Color2a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog3Color2b.value + '" color2="' + prog3Color2a.value + '" angle="90" /> <v:textbox inset="' + prog3VML2bInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row2b.innerHTML + '</span> </v:textbox> </v:rect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3;"> <tr> <td align="right" style="background: ' + prog3Row2b.style.background + '; background-color: ' + prog3Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row2b.style.width + '; height: 28px;" height="28">' + prog3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row2c.style.width + '; height: 28px;" height="28">' + prog3Row2c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog3srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog3Output.innerHTML = chartCode;
        prog3Weight.textContent = Math.ceil(prog3Output.value.length / 1024) + 'KB';
    } else if (rowsData22.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog3csCode + ' <tr> <td align="left" style="padding: ' + prog3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog3Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog3VML1cInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row1c.innerHTML + '</span> </v:textbox> </v:rect> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog3VML1b + 'px; position: relative; z-index: 1;" fill="true" fillcolor="' + prog3Color1a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog3Color1b.value + '" color2="' + prog3Color1a.value + '" angle="90" /> <v:textbox inset="' + prog3VML1bInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row1b.innerHTML + '</span> </v:textbox> </v:rect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3;"> <tr> <td align="right" style="background: ' + prog3Row1b.style.background + '; background-color: ' + prog3Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row1b.style.width + '; height: 28px;" height="28">' + prog3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row1c.style.width + '; height: 28px;" height="28">' + prog3Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog3Row2a.innerHTML + '</td></tr></table><!--[if mso]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog3VML2cInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row2c.innerHTML + '</span> </v:textbox> </v:rect> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog3VML2b + 'px; position: relative; z-index: 1;" fill="true" fillcolor="' + prog3Color2a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog3Color2b.value + '" color2="' + prog3Color2a.value + '" angle="90" /> <v:textbox inset="' + prog3VML2bInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row2b.innerHTML + '</span> </v:textbox> </v:rect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3;"> <tr> <td align="right" style="background: ' + prog3Row2b.style.background + '; background-color: ' + prog3Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row2b.style.width + '; height: 28px;" height="28">' + prog3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row2c.style.width + '; height: 28px;" height="28">' + prog3Row2c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog3Row3a.innerHTML + '</td></tr></table><!--[if mso]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog3VML3cInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row3c.innerHTML + '</span> </v:textbox> </v:rect> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog3VML3b + 'px; position: relative; z-index: 1;" fill="true" fillcolor="' + prog3Color3a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog3Color3b.value + '" color2="' + prog3Color3a.value + '" angle="90" /> <v:textbox inset="' + prog3VML3bInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row3b.innerHTML + '</span> </v:textbox> </v:rect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3;"> <tr> <td align="right" style="background: ' + prog3Row3b.style.background + '; background-color: ' + prog3Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row3b.style.width + '; height: 28px;" height="28">' + prog3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row3c.style.width + '; height: 28px;" height="28">' + prog3Row3c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog3srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog3Output.innerHTML = chartCode;
        prog3Weight.textContent = Math.ceil(prog3Output.value.length / 1024) + 'KB';
    } else if (rowsData22.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog3csCode + ' <tr> <td align="left" style="padding: ' + prog3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog3Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog3VML1cInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row1c.innerHTML + '</span> </v:textbox> </v:rect> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog3VML1b + 'px; position: relative; z-index: 1;" fill="true" fillcolor="' + prog3Color1a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog3Color1b.value + '" color2="' + prog3Color1a.value + '" angle="90" /> <v:textbox inset="' + prog3VML1bInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row1b.innerHTML + '</span> </v:textbox> </v:rect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3;"> <tr> <td align="right" style="background: ' + prog3Row1b.style.background + '; background-color: ' + prog3Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row1b.style.width + '; height: 28px;" height="28">' + prog3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row1c.style.width + '; height: 28px;" height="28">' + prog3Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog3Row2a.innerHTML + '</td></tr></table><!--[if mso]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog3VML2cInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row2c.innerHTML + '</span> </v:textbox> </v:rect> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog3VML2b + 'px; position: relative; z-index: 1;" fill="true" fillcolor="' + prog3Color2a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog3Color2b.value + '" color2="' + prog3Color2a.value + '" angle="90" /> <v:textbox inset="' + prog3VML2bInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row2b.innerHTML + '</span> </v:textbox> </v:rect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3;"> <tr> <td align="right" style="background: ' + prog3Row2b.style.background + '; background-color: ' + prog3Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row2b.style.width + '; height: 28px;" height="28">' + prog3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row2c.style.width + '; height: 28px;" height="28">' + prog3Row2c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog3Row3a.innerHTML + '</td></tr></table><!--[if mso]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog3VML3cInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row3c.innerHTML + '</span> </v:textbox> </v:rect> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog3VML3b + 'px; position: relative; z-index: 1;" fill="true" fillcolor="' + prog3Color3a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog3Color3b.value + '" color2="' + prog3Color3a.value + '" angle="90" /> <v:textbox inset="' + prog3VML3bInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row3b.innerHTML + '</span> </v:textbox> </v:rect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3;"> <tr> <td align="right" style="background: ' + prog3Row3b.style.background + '; background-color: ' + prog3Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row3b.style.width + '; height: 28px;" height="28">' + prog3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row3c.style.width + '; height: 28px;" height="28">' + prog3Row3c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog3Row4a.innerHTML + '</td></tr></table><!--[if mso]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog3VML4cInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row4c.innerHTML + '</span> </v:textbox> </v:rect> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog3VML4b + 'px; position: relative; z-index: 1;" fill="true" fillcolor="' + prog3Color4a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog3Color4b.value + '" color2="' + prog3Color4a.value + '" angle="90" /> <v:textbox inset="' + prog3VML4bInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row4b.innerHTML + '</span> </v:textbox> </v:rect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3;"> <tr> <td align="right" style="background: ' + prog3Row4b.style.background + '; background-color: ' + prog3Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row4b.style.width + '; height: 28px;" height="28">' + prog3Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row4c.style.width + '; height: 28px;" height="28">' + prog3Row4c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog3srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog3Output.innerHTML = chartCode;
        prog3Weight.textContent = Math.ceil(prog3Output.value.length / 1024) + 'KB';
    } else if (rowsData22.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog3csCode + ' <tr> <td align="left" style="padding: ' + prog3TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog3Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog3VML1cInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row1c.innerHTML + '</span> </v:textbox> </v:rect> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog3VML1b + 'px; position: relative; z-index: 1;" fill="true" fillcolor="' + prog3Color1a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog3Color1b.value + '" color2="' + prog3Color1a.value + '" angle="90" /> <v:textbox inset="' + prog3VML1bInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row1b.innerHTML + '</span> </v:textbox> </v:rect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3;"> <tr> <td align="right" style="background: ' + prog3Row1b.style.background + '; background-color: ' + prog3Color1a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row1b.style.width + '; height: 28px;" height="28">' + prog3Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row1c.style.width + '; height: 28px;" height="28">' + prog3Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog3Row2a.innerHTML + '</td></tr></table><!--[if mso]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog3VML2cInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row2c.innerHTML + '</span> </v:textbox> </v:rect> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog3VML2b + 'px; position: relative; z-index: 1;" fill="true" fillcolor="' + prog3Color2a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog3Color2b.value + '" color2="' + prog3Color2a.value + '" angle="90" /> <v:textbox inset="' + prog3VML2bInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row2b.innerHTML + '</span> </v:textbox> </v:rect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3;"> <tr> <td align="right" style="background: ' + prog3Row2b.style.background + '; background-color: ' + prog3Color2a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row2b.style.width + '; height: 28px;" height="28">' + prog3Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row2c.style.width + '; height: 28px;" height="28">' + prog3Row2c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog3Row3a.innerHTML + '</td></tr></table><!--[if mso]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog3VML3cInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row3c.innerHTML + '</span> </v:textbox> </v:rect> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog3VML3b + 'px; position: relative; z-index: 1;" fill="true" fillcolor="' + prog3Color3a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog3Color3b.value + '" color2="' + prog3Color3a.value + '" angle="90" /> <v:textbox inset="' + prog3VML3bInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row3b.innerHTML + '</span> </v:textbox> </v:rect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3;"> <tr> <td align="right" style="background: ' + prog3Row3b.style.background + '; background-color: ' + prog3Color3a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row3b.style.width + '; height: 28px;" height="28">' + prog3Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row3c.style.width + '; height: 28px;" height="28">' + prog3Row3c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog3Row4a.innerHTML + '</td></tr></table><!--[if mso]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog3VML4cInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row4c.innerHTML + '</span> </v:textbox> </v:rect> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog3VML4b + 'px; position: relative; z-index: 1;" fill="true" fillcolor="' + prog3Color4a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog3Color4b.value + '" color2="' + prog3Color4a.value + '" angle="90" /> <v:textbox inset="' + prog3VML4bInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row4b.innerHTML + '</span> </v:textbox> </v:rect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3;"> <tr> <td align="right" style="background: ' + prog3Row4b.style.background + '; background-color: ' + prog3Color4a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row4b.style.width + '; height: 28px;" height="28">' + prog3Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row4c.style.width + '; height: 28px;" height="28">' + prog3Row4c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog3Row5a.innerHTML + '</td></tr></table><!--[if mso]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog3VML5cInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row5c.innerHTML + '</span> </v:textbox> </v:rect> <v:rect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog3VML5b + 'px; position: relative; z-index: 1;" fill="true" fillcolor="' + prog3Color5a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog3Color5b.value + '" color2="' + prog3Color5a.value + '" angle="90" /> <v:textbox inset="' + prog3VML5bInset + 'px, 5px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog3Row5b.innerHTML + '</span> </v:textbox> </v:rect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3;"> <tr> <td align="right" style="background: ' + prog3Row5b.style.background + '; background-color: ' + prog3Color5a.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row5b.style.width + '; height: 28px;" height="28">' + prog3Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog3Row5c.style.width + '; height: 28px;" height="28">' + prog3Row5c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog3srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog3Output.innerHTML = chartCode;
        prog3Weight.textContent = Math.ceil(prog3Output.value.length / 1024) + 'KB';
    }
    prog3Output.style.opacity = "";
    prog3Weight.style.opacity = "";
    prog3Output.style.borderColor = "#166dfc";
    prog3Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(prog3Output.value);
});
prog3Output.addEventListener("click", () => {
    prog3Output.select();
});

// Progress Bar Chart IV Selection
const prog4Bars = document.getElementsByClassName("prog4Bars");
const prog4Controls = document.getElementsByClassName("prog4Controls");
const rowsData21 = document.getElementById("rowsData21");
rowsData21.addEventListener("change", () => {
    for (var i = 0; i < prog4Controls.length; i++) {
        prog4Controls[i].style.display = "none";
        prog4Bars[i].style.display = "none";
        for (var x = 0; x < rowsData21.value; x++) {
            prog4Controls[x].style.display = "block";
            prog4Bars[x].style.display = "block";
        }
    }
});

// Progress Bar IV Caption
let prog4TopBarSpace = "";
let prog4csCode = "";
const prog4Cap = document.getElementById("prog4Cap"); // Caption or chart title
const prog4capText = document.getElementById("prog4capText"); // Caption or chart title text
prog4capText.oninput = function() {
    prog4Cap.innerHTML = prog4capText.value;
    if (prog4capText.value == "" && prog4subText.value == "") {
        prog4Bars[0].firstElementChild.style.padding = "0"; // Targets the first data bar below caption/subtitle text
        prog4TopBarSpace = "0"; // Padding for first data bar below caption/subtitle text for output code
        prog4Cap.style.marginBottom = "0";
        return prog4csCode = "";
    } else if (prog4capText.value == "" && prog4subText.value) {
        prog4Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        prog4TopBarSpace = "20px 0 0 0";
        prog4Cap.style.marginBottom = "0";
        return prog4csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + prog4Sub.innerHTML + '</td> </tr>';
    } else if (prog4capText.value && prog4subText.value == "") {
        prog4Bars[0].firstElementChild.style.padding = "0";
        prog4TopBarSpace = "0";
        prog4Cap.style.marginBottom = "20px";
        return prog4csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + prog4Cap.innerHTML + '</caption>';
    } else if (prog4capText.value && prog4subText.value) {
        prog4Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        prog4TopBarSpace = "20px 0 0 0";
        prog4Cap.style.marginBottom = "4px";
        return prog4csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + prog4Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + prog4Sub.innerHTML + '</td> </tr>';
    }
};
// Progress Bar IV Subtitle
const prog4Sub = document.getElementById("prog4Sub"); // Chart subtitle
const prog4subText = document.getElementById("prog4subText"); // Chart subtitle text
prog4subText.oninput = function() {
    prog4Sub.innerHTML = prog4subText.value;
    if (prog4subText.value == "" && prog4capText.value == "") {
        prog4Bars[0].firstElementChild.style.padding = "0";
        prog4TopBarSpace = "0";
        prog4Cap.style.marginBottom = "0";
        return prog4csCode = "";
    } else if (prog4subText.value == "" && prog4capText.value) {
        prog4Bars[0].firstElementChild.style.padding = "0";
        prog4TopBarSpace = "0";
        prog4Cap.style.marginBottom = "20px";
        return prog4csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + prog4Cap.innerHTML + '</caption>';
    } else if (prog4subText.value && prog4capText.value == "") {
        prog4Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        prog4TopBarSpace = "20px 0 0 0";
        prog4Cap.style.marginBottom = "0";
        return prog4csCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + prog4Sub.innerHTML + '</td> </tr>';
    } else if (prog4subText.value && prog4capText.value) {
        prog4Bars[0].firstElementChild.style.padding = "20px 0 0 0";
        prog4TopBarSpace = "20px 0 0 0";
        prog4Cap.style.marginBottom = "4px";
        return prog4csCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: left;">' + prog4Cap.innerHTML + '</caption> <tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 14px; line-height: normal; text-align: left;">' + prog4Sub.innerHTML + '</td> </tr>';
    }
};
// Progress Bar IV Source
let prog4srcCode = "";
const prog4Source = document.getElementById("prog4Source"); // Chart source
const prog4srcText = document.getElementById("prog4srcText"); // Chart source text
prog4srcText.oninput = function() {
    prog4Source.innerHTML = prog4srcText.value;
    if (prog4srcText.value == "") {
        prog4Source.style.paddingTop = "0";
        return prog4srcCode = "";
    } else if (prog4srcText.value) {
        prog4Source.style.paddingTop = "40px";
        return prog4srcCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; padding-top: 40px; text-align: left;">' + prog4Source.innerHTML + '</td></tr>';
    }
};

// Progress Bar IV Chart Color Picker
const prog4colorPickFB = document.getElementById("prog4colorPickFB");
prog4colorPickFB.addEventListener("change", (evt) => {
    prog4Row1b.style.backgroundColor = evt.detail.hex;
    prog4Row1b.style.background = 'linear-gradient(90deg, ' + prog4Color1a.value + ', ' + prog4Color1b.value + ')';
    prog4Color1a.value = evt.detail.hex;
    prog4Row2b.style.backgroundColor = evt.detail.hex;
    prog4Row2b.style.background = 'linear-gradient(90deg, ' + prog4Color2a.value + ', ' + prog4Color2b.value + ')';
    prog4Color2a.value = evt.detail.hex;
    prog4Row3b.style.backgroundColor = evt.detail.hex;
    prog4Row3b.style.background = 'linear-gradient(90deg, ' + prog4Color3a.value + ', ' + prog4Color3b.value + ')';
    prog4Color3a.value = evt.detail.hex;
    prog4Row4b.style.backgroundColor = evt.detail.hex;
    prog4Row4b.style.background = 'linear-gradient(90deg, ' + prog4Color4a.value + ', ' + prog4Color4b.value + ')';
    prog4Color4a.value = evt.detail.hex;
    prog4Row5b.style.backgroundColor = evt.detail.hex;
    prog4Row5b.style.background = 'linear-gradient(90deg, ' + prog4Color5a.value + ', ' + prog4Color5b.value + ')';
    prog4Color5a.value = evt.detail.hex;
});
const prog4colorPickLG = document.getElementById("prog4colorPickLG");
prog4colorPickLG.addEventListener("change", (evt) => {
    prog4Row1b.style.backgroundColor = evt.detail.hex;
    prog4Row1b.style.background = 'linear-gradient(90deg, ' + prog4Color1a.value + ', ' + prog4Color1b.value + ')';
    prog4Color1b.value = evt.detail.hex;
    prog4Row2b.style.backgroundColor = evt.detail.hex;
    prog4Row2b.style.background = 'linear-gradient(90deg, ' + prog4Color2a.value + ', ' + prog4Color2b.value + ')';
    prog4Color2b.value = evt.detail.hex;
    prog4Row3b.style.backgroundColor = evt.detail.hex;
    prog4Row3b.style.background = 'linear-gradient(90deg, ' + prog4Color3a.value + ', ' + prog4Color3b.value + ')';
    prog4Color3b.value = evt.detail.hex;
    prog4Row4b.style.backgroundColor = evt.detail.hex;
    prog4Row4b.style.background = 'linear-gradient(90deg, ' + prog4Color4a.value + ', ' + prog4Color4b.value + ')';
    prog4Color4b.value = evt.detail.hex;
    prog4Row5b.style.backgroundColor = evt.detail.hex;
    prog4Row5b.style.background = 'linear-gradient(90deg, ' + prog4Color5a.value + ', ' + prog4Color5b.value + ')';
    prog4Color5b.value = evt.detail.hex;
});

// Progress Bar Chart IV Customization Logic
const prog4Row1a = document.getElementById("prog4Row1a");
const prog4Row1b = document.getElementById("prog4Row1b");
const prog4Row1c = document.getElementById("prog4Row1c");
const prog4Row2a = document.getElementById("prog4Row2a");
const prog4Row2b = document.getElementById("prog4Row2b");
const prog4Row2c = document.getElementById("prog4Row2c");
const prog4Row3a = document.getElementById("prog4Row3a");
const prog4Row3b = document.getElementById("prog4Row3b");
const prog4Row3c = document.getElementById("prog4Row3c");
const prog4Row4a = document.getElementById("prog4Row4a");
const prog4Row4b = document.getElementById("prog4Row4b");
const prog4Row4c = document.getElementById("prog4Row4c");
const prog4Row5a = document.getElementById("prog4Row5a");
const prog4Row5b = document.getElementById("prog4Row5b");
const prog4Row5c = document.getElementById("prog4Row5c");

// Progress Bar Row 1 Customization Logic
const prog4Text1a = document.getElementById("prog4Text1a");
prog4Text1a.oninput = function() {
    if (prog4Text1a.value == "") {
        prog4Row1a.innerHTML = prog4Text1a.value;
    } else if (prog4Text1a.value) {
        prog4Row1a.innerHTML = prog4Text1a.value;
    }
};
let prog4VML1b = "156.8"; // Actual progress bar width; not grey color bar
let prog4VML1bInset = "106.80";
let prog4VML1cInset = "156.80";
const prog4Size1 = document.getElementById("prog4Size1");
prog4Size1.oninput = function() {
    prog4Row1b.style.width = Math.abs(prog4Size1.value) + "%";
    prog4Row1c.style.width = 100 - (Math.abs(prog4Size1.value)) + "%";
    if (prog4Size1.value < 5) { // Remove front data bar curve to prevent bar overlap
        prog4Row1b.style.borderRadius = "30px 0 0 30px";
    } else if (prog4Size1.value > 5) {
        prog4Row1b.style.borderRadius = "15px";
    }
    if (prog4Size1.value < 3) { // Set values 1 - 3 as specific width
        prog4Row1b.style.width = 3 + "%";
        prog4Row1c.style.width = 97 + "%";
    }
    prog4VML1b = Math.max((Math.abs(prog4Size1.value / 100) * 560), 30).toFixed(2);
    prog4VML1bInset = Math.max(((Math.abs(prog4Size1.value / 100) * 560) - 50), 103).toFixed(2);
    prog4VML1cInset = Math.max((Math.abs(prog4Size1.value / 100) * 560), 30).toFixed(2);
    if (prog4Size1.value == 0) { // Define 0 value for data bar
        prog4Row1b.style.width = 0 + "%";
        prog4Row1c.style.width = 100 + "%";
        prog4VML1b = 0;
        prog4VML1bInset = 0;
        prog4VML1cInset = 0;
    }
};
const prog4Text1 = document.getElementById("prog4Text1");
prog4Text1.oninput = function() {
    if (prog4Text1.value == "") {
        prog4Row1c.innerHTML = prog4Text1.value;
    } else if (prog4Text1.value) {
        prog4Row1c.innerHTML = "&nbsp;" + prog4Text1.value;
    }
};
const prog4Label1 = document.getElementById("prog4Label1");
prog4Label1.addEventListener("click", () => {
    if (prog4Text1.value == "") {
        prog4Row1b.innerHTML = "";
        prog4Row1c.innerHTML = "";
    } else if (prog4Text1.value) {
        prog4Row1b.innerHTML = prog4Text1.value + "&nbsp;";
        prog4Text1.value = "";
        prog4Row1c.innerHTML = "";
    }
});
const prog4Color1a = document.getElementById("prog4Color1a");
prog4Color1a.oninput = function() {
    prog4Row1b.style.backgroundColor = prog4Color1a.value;
    prog4Row1b.style.background = 'linear-gradient(90deg, ' + prog4Color1a.value + ', ' + prog4Color1b.value + ')';
};
const prog4Color1b = document.getElementById("prog4Color1b");
prog4Color1b.oninput = function() {
    prog4Row1b.style.background = 'linear-gradient(90deg, ' + prog4Color1a.value + ', ' + prog4Color1b.value + ')';
};

// Progress Bar Row 2 Customization Logic
const prog4Text2a = document.getElementById("prog4Text2a");
prog4Text2a.oninput = function() {
    if (prog4Text2a.value == "") {
        prog4Row2a.innerHTML = prog4Text2a.value;
    } else if (prog4Text2a.value) {
        prog4Row2a.innerHTML = prog4Text2a.value;
    }
};
let prog4VML2b = "375.20"; // Actual progress bar width; not grey color bar
let prog4VML2bInset = "325.20";
let prog4VML2cInset = "375.20";
const prog4Size2 = document.getElementById("prog4Size2");
prog4Size2.oninput = function() {
    prog4Row2b.style.width = Math.abs(prog4Size2.value) + "%";
    prog4Row2c.style.width = 100 - (Math.abs(prog4Size2.value)) + "%";
    if (prog4Size2.value < 5) {
        prog4Row2b.style.borderRadius = "30px 0 0 30px";
    } else if (prog4Size2.value > 5) {
        prog4Row2b.style.borderRadius = "15px";
    }
    if (prog4Size2.value < 3) {
        prog4Row2b.style.width = 3 + "%";
        prog4Row2c.style.width = 97 + "%";
    }
    prog4VML2b = Math.max((Math.abs(prog4Size2.value / 100) * 560), 30).toFixed(2);
    prog4VML2bInset = Math.max(((Math.abs(prog4Size2.value / 100) * 560) - 50), 103).toFixed(2);
    prog4VML2cInset = Math.max((Math.abs(prog4Size2.value / 100) * 560), 30).toFixed(2);
    if (prog4Size2.value == 0) { // Define 0 value for data bar
        prog4Row2b.style.width = 0 + "%";
        prog4Row2c.style.width = 100 + "%";
        prog4VML2b = 0;
        prog4VML2bInset = 0;
        prog4VML2cInset = 0;
    }
};
const prog4Text2 = document.getElementById("prog4Text2");
prog4Text2.oninput = function() {
    if (prog4Text2.value == "") {
        prog4Row2c.innerHTML = prog4Text2.value;
    } else if (prog4Text2.value) {
        prog4Row2c.innerHTML = "&nbsp;" + prog4Text2.value;
    }
};
const prog4Label2 = document.getElementById("prog4Label2");
prog4Label2.addEventListener("click", () => {
    if (prog4Text2.value == "") {
        prog4Row2b.innerHTML = "";
        prog4Row2c.innerHTML = "";
    } else if (prog4Text2.value) {
        prog4Row2b.innerHTML = prog4Text2.value + "&nbsp;";
        prog4Text2.value = "";
        prog4Row2c.innerHTML = "";
    }
});
const prog4Color2a = document.getElementById("prog4Color2a");
prog4Color2a.oninput = function() {
    prog4Row2b.style.backgroundColor = prog4Color2a.value;
    prog4Row2b.style.background = 'linear-gradient(90deg, ' + prog4Color2a.value + ', ' + prog4Color2b.value + ')';
};
const prog4Color2b = document.getElementById("prog4Color2b");
prog4Color2b.oninput = function() {
    prog4Row2b.style.background = 'linear-gradient(90deg, ' + prog4Color2a.value + ', ' + prog4Color2b.value + ')';
};

// Progress Bar Row 3 Customization Logic
const prog4Text3a = document.getElementById("prog4Text3a");
prog4Text3a.oninput = function() {
    if (prog4Text3a.value == "") {
        prog4Row3a.innerHTML = prog4Text3a.value;
    } else if (prog4Text3a.value) {
        prog4Row3a.innerHTML = prog4Text3a.value;
    }
};
let prog4VML3b = "44.80"; // Actual progress bar width; not grey color bar
let prog4VML3bInset = "103";
let prog4VML3cInset = "44.80";
const prog4Size3 = document.getElementById("prog4Size3");
prog4Size3.oninput = function() {
    prog4Row3b.style.width = Math.abs(prog4Size3.value) + "%";
    prog4Row3c.style.width = 100 - (Math.abs(prog4Size3.value)) + "%";
    if (prog4Size3.value < 5) {
        prog4Row3b.style.borderRadius = "30px 0 0 30px";
    } else if (prog4Size3.value > 5) {
        prog4Row3b.style.borderRadius = "15px";
    }
    if (prog4Size3.value < 3) {
        prog4Row3b.style.width = 3 + "%";
        prog4Row3c.style.width = 97 + "%";
    }
    prog4VML3b = Math.max((Math.abs(prog4Size3.value / 100) * 560), 30).toFixed(2);
    prog4VML3bInset = Math.max(((Math.abs(prog4Size3.value / 100) * 560) - 50), 103).toFixed(2);
    prog4VML3cInset = Math.max((Math.abs(prog4Size3.value / 100) * 560), 30).toFixed(2);
    if (prog4Size3.value == 0) { // Define 0 value for data bar
        prog4Row3b.style.width = 0 + "%";
        prog4Row3c.style.width = 100 + "%";
        prog4VML3b = 0;
        prog4VML3bInset = 0;
        prog4VML3cInset = 0;
    }
};
const prog4Text3 = document.getElementById("prog4Text3");
prog4Text3.oninput = function() {
    if (prog4Text3.value == "") {
        prog4Row3c.innerHTML = prog4Text3.value;
    } else if (prog4Text3.value) {
        prog4Row3c.innerHTML = "&nbsp;" + prog4Text3.value;
    }
};
const prog4Label3 = document.getElementById("prog4Label3");
prog4Label3.addEventListener("click", () => {
    if (prog4Text3.value == "") {
        prog4Row3b.innerHTML = "";
        prog4Row3c.innerHTML = "";
    } else if (prog4Text3.value) {
        prog4Row3b.innerHTML = prog4Text3.value + "&nbsp;";
        prog4Text3.value = "";
        prog4Row3c.innerHTML = "";
    }
});
const prog4Color3a = document.getElementById("prog4Color3a");
prog4Color3a.oninput = function() {
    prog4Row3b.style.backgroundColor = prog4Color3a.value;
    prog4Row3b.style.background = 'linear-gradient(90deg, ' + prog4Color3a.value + ', ' + prog4Color3b.value + ')';
};
const prog4Color3b = document.getElementById("prog4Color3b");
prog4Color3b.oninput = function() {
    prog4Row3b.style.background = 'linear-gradient(90deg, ' + prog4Color3a.value + ', ' + prog4Color3b.value + ')';
};

// Progress Bar Row 4 Customization Logic
const prog4Text4a = document.getElementById("prog4Text4a");
prog4Text4a.oninput = function() {
    if (prog4Text4a.value == "") {
        prog4Row4a.innerHTML = prog4Text4a.value;
    } else if (prog4Text4a.value) {
        prog4Row4a.innerHTML = prog4Text4a.value;
    }
};
let prog4VML4b = "543.20"; // Actual progress bar width; not grey color bar
let prog4VML4bInset = "493.20";
let prog4VML4cInset = "543.20";
const prog4Size4 = document.getElementById("prog4Size4");
prog4Size4.oninput = function() {
    prog4Row4b.style.width = Math.abs(prog4Size4.value) + "%";
    prog4Row4c.style.width = 100 - (Math.abs(prog4Size4.value)) + "%";
    if (prog4Size4.value < 5) {
        prog4Row4b.style.borderRadius = "30px 0 0 30px";
    } else if (prog4Size4.value > 5) {
        prog4Row4b.style.borderRadius = "15px";
    }
    if (prog4Size4.value < 3) {
        prog4Row4b.style.width = 3 + "%";
        prog4Row4c.style.width = 97 + "%";
    }
    prog4VML4b = Math.max((Math.abs(prog4Size4.value / 100) * 560), 30).toFixed(2);
    prog4VML4bInset = Math.max(((Math.abs(prog4Size4.value / 100) * 560) - 50), 103).toFixed(2);
    prog4VML4cInset = Math.max((Math.abs(prog4Size4.value / 100) * 560), 30).toFixed(2);
    if (prog4Size4.value == 0) { // Define 0 value for data bar
        prog4Row4b.style.width = 0 + "%";
        prog4Row4c.style.width = 100 + "%";
        prog4VML4b = 0;
        prog4VML4bInset = 0;
        prog4VML4cInset = 0;
    }
};
const prog4Text4 = document.getElementById("prog4Text4");
prog4Text4.oninput = function() {
    if (prog4Text4.value == "") {
        prog4Row4c.innerHTML = prog4Text4.value;
    } else if (prog4Text4.value) {
        prog4Row4c.innerHTML = "&nbsp;" + prog4Text4.value;
    }
};
const prog4Label4 = document.getElementById("prog4Label4");
prog4Label4.addEventListener("click", () => {
    if (prog4Text4.value == "") {
        prog4Row4b.innerHTML = "";
        prog4Row4c.innerHTML = "";
    } else if (prog4Text4.value) {
        prog4Row4b.innerHTML = prog4Text4.value + "&nbsp;";
        prog4Text4.value = "";
        prog4Row4c.innerHTML = "";
    }
});
const prog4Color4a = document.getElementById("prog4Color4a");
prog4Color4a.oninput = function() {
    prog4Row4b.style.backgroundColor = prog4Color4a.value;
    prog4Row4b.style.background = 'linear-gradient(90deg, ' + prog4Color4a.value + ', ' + prog4Color4b.value + ')';
};
const prog4Color4b = document.getElementById("prog4Color4b");
prog4Color4b.oninput = function() {
    prog4Row4b.style.background = 'linear-gradient(90deg, ' + prog4Color4a.value + ', ' + prog4Color4b.value + ')';
};

// Progress Bar Row 5 Customization Logic
const prog4Text5a = document.getElementById("prog4Text5a");
prog4Text5a.oninput = function() {
    if (prog4Text5a.value == "") {
        prog4Row5a.innerHTML = prog4Text5a.value;
    } else if (prog4Text5a.value) {
        prog4Row5a.innerHTML = prog4Text5a.value;
    }
};
let prog4VML5b = "140"; // Actual progress bar width; not grey color bar
let prog4VML5bInset = "103";
let prog4VML5cInset = "140";
const prog4Size5 = document.getElementById("prog4Size5");
prog4Size5.oninput = function() {
    prog4Row5b.style.width = Math.abs(prog4Size5.value) + "%";
    prog4Row5c.style.width = 100 - (Math.abs(prog4Size5.value)) + "%";
    if (prog4Size5.value < 5) {
        prog4Row5b.style.borderRadius = "30px 0 0 30px";
    } else if (prog4Size5.value > 5) {
        prog4Row5b.style.borderRadius = "15px";
    }
    if (prog4Size5.value < 3) {
        prog4Row5b.style.width = 3 + "%";
        prog4Row5c.style.width = 97 + "%";
    }
    prog4VML5b = Math.max((Math.abs(prog4Size5.value / 100) * 560), 30).toFixed(2);
    prog4VML5bInset = Math.max(((Math.abs(prog4Size5.value / 100) * 560) - 50), 103).toFixed(2);
    prog4VML5cInset = Math.max((Math.abs(prog4Size5.value / 100) * 560), 30).toFixed(2);
    if (prog4Size5.value == 0) { // Define 0 value for data bar
        prog4Row5b.style.width = 0 + "%";
        prog4Row5c.style.width = 100 + "%";
        prog4VML5b = 0;
        prog4VML5bInset = 0;
        prog4VML5cInset = 0;
    }
};
const prog4Text5 = document.getElementById("prog4Text5");
prog4Text5.oninput = function() {
    if (prog4Text5.value == "") {
        prog4Row5c.innerHTML = prog4Text5.value;
    } else if (prog4Text5.value) {
        prog4Row5c.innerHTML = "&nbsp;" + prog4Text5.value;
    }
};
const prog4Label5 = document.getElementById("prog4Label5");
prog4Label5.addEventListener("click", () => {
    if (prog4Text5.value == "") {
        prog4Row5b.innerHTML = "";
        prog4Row5c.innerHTML = "";
    } else if (prog4Text5.value) {
        prog4Row5b.innerHTML = prog4Text5.value + "&nbsp;";
        prog4Text5.value = "";
        prog4Row5c.innerHTML = "";
    }
});
const prog4Color5a = document.getElementById("prog4Color5a");
prog4Color5a.oninput = function() {
    prog4Row5b.style.backgroundColor = prog4Color5a.value;
    prog4Row5b.style.background = 'linear-gradient(90deg, ' + prog4Color5a.value + ', ' + prog4Color5b.value + ')';
};
const prog4Color5b = document.getElementById("prog4Color5b");
prog4Color5b.oninput = function() {
    prog4Row5b.style.background = 'linear-gradient(90deg, ' + prog4Color5a.value + ', ' + prog4Color5b.value + ')';
};

// Generate Progress Bar HTML Logic
const prog4Weight = document.getElementById("prog4Weight");
const prog4Button = document.getElementById("prog4Button");
const prog4Output = document.getElementById("prog4Output");
prog4Button.addEventListener("mouseenter", () => { prog4Output.style.opacity = ".4"; prog4Weight.style.opacity = ".4"; } );
prog4Button.addEventListener("mouseleave", () => { prog4Output.style.opacity = ""; prog4Weight.style.opacity = ""; prog4Output.style.borderColor = ""; prog4Weight.style.color = ""; } );
prog4Button.addEventListener("click", () => {
    if (rowsData21.value === "1") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog4csCode + ' <tr> <td align="left" style="padding: ' + prog4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog4Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog4VML1cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row1c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog4VML1b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog4Color1a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog4Color1b.value + '" color2="' + prog4Color1a.value + '" angle="90" /> <v:textbox inset="' + prog4VML1bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row1b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background: ' + prog4Row1b.style.background + '; background-color: ' + prog4Color1a.value + '; border-radius: ' + prog4Row1b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row1b.style.width + '; height: 28px;" height="28">' + prog4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row1c.style.width + '; height: 28px;" height="28">' + prog4Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog4srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog4Output.innerHTML = chartCode;
        prog4Weight.textContent = Math.ceil(prog4Output.value.length / 1024) + 'KB';
    } else if (rowsData21.value === "2") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog4csCode + ' <tr> <td align="left" style="padding: ' + prog4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog4Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog4VML1cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row1c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog4VML1b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog4Color1a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog4Color1b.value + '" color2="' + prog4Color1a.value + '" angle="90" /> <v:textbox inset="' + prog4VML1bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row1b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background: ' + prog4Row1b.style.background + '; background-color: ' + prog4Color1a.value + '; border-radius: ' + prog4Row1b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row1b.style.width + '; height: 28px;" height="28">' + prog4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row1c.style.width + '; height: 28px;" height="28">' + prog4Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog4Row2a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog4VML2cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row2c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog4VML2b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog4Color2a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog4Color2b.value + '" color2="' + prog4Color2a.value + '" angle="90" /> <v:textbox inset="' + prog4VML2bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row2b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background: ' + prog4Row2b.style.background + '; background-color: ' + prog4Color2a.value + '; border-radius: ' + prog4Row2b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row2b.style.width + '; height: 28px;" height="28">' + prog4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row2c.style.width + '; height: 28px;" height="28">' + prog4Row2c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog4srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog4Output.innerHTML = chartCode;
        prog4Weight.textContent = Math.ceil(prog4Output.value.length / 1024) + 'KB';
    } else if (rowsData21.value === "3") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog4csCode + ' <tr> <td align="left" style="padding: ' + prog4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog4Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog4VML1cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row1c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog4VML1b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog4Color1a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog4Color1b.value + '" color2="' + prog4Color1a.value + '" angle="90" /> <v:textbox inset="' + prog4VML1bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row1b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background: ' + prog4Row1b.style.background + '; background-color: ' + prog4Color1a.value + '; border-radius: ' + prog4Row1b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row1b.style.width + '; height: 28px;" height="28">' + prog4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row1c.style.width + '; height: 28px;" height="28">' + prog4Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog4Row2a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog4VML2cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row2c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog4VML2b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog4Color2a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog4Color2b.value + '" color2="' + prog4Color2a.value + '" angle="90" /> <v:textbox inset="' + prog4VML2bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row2b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background: ' + prog4Row2b.style.background + '; background-color: ' + prog4Color2a.value + '; border-radius: ' + prog4Row2b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row2b.style.width + '; height: 28px;" height="28">' + prog4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row2c.style.width + '; height: 28px;" height="28">' + prog4Row2c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog4Row3a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog4VML3cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row3c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog4VML3b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog4Color3a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog4Color3b.value + '" color2="' + prog4Color3a.value + '" angle="90" /> <v:textbox inset="' + prog4VML3bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row3b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background: ' + prog4Row3b.style.background + '; background-color: ' + prog4Color3a.value + '; border-radius: ' + prog4Row3b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row3b.style.width + '; height: 28px;" height="28">' + prog4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row3c.style.width + '; height: 28px;" height="28">' + prog4Row3c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog4srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog4Output.innerHTML = chartCode;
        prog4Weight.textContent = Math.ceil(prog4Output.value.length / 1024) + 'KB';
    } else if (rowsData21.value === "4") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog4csCode + ' <tr> <td align="left" style="padding: ' + prog4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog4Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog4VML1cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row1c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog4VML1b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog4Color1a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog4Color1b.value + '" color2="' + prog4Color1a.value + '" angle="90" /> <v:textbox inset="' + prog4VML1bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row1b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background: ' + prog4Row1b.style.background + '; background-color: ' + prog4Color1a.value + '; border-radius: ' + prog4Row1b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row1b.style.width + '; height: 28px;" height="28">' + prog4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row1c.style.width + '; height: 28px;" height="28">' + prog4Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog4Row2a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog4VML2cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row2c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog4VML2b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog4Color2a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog4Color2b.value + '" color2="' + prog4Color2a.value + '" angle="90" /> <v:textbox inset="' + prog4VML2bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row2b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background: ' + prog4Row2b.style.background + '; background-color: ' + prog4Color2a.value + '; border-radius: ' + prog4Row2b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row2b.style.width + '; height: 28px;" height="28">' + prog4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row2c.style.width + '; height: 28px;" height="28">' + prog4Row2c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog4Row3a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog4VML3cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row3c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog4VML3b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog4Color3a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog4Color3b.value + '" color2="' + prog4Color3a.value + '" angle="90" /> <v:textbox inset="' + prog4VML3bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row3b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background: ' + prog4Row3b.style.background + '; background-color: ' + prog4Color3a.value + '; border-radius: ' + prog4Row3b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row3b.style.width + '; height: 28px;" height="28">' + prog4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row3c.style.width + '; height: 28px;" height="28">' + prog4Row3c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog4Row4a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog4VML4cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row4c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog4VML4b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog4Color4a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog4Color4b.value + '" color2="' + prog4Color4a.value + '" angle="90" /> <v:textbox inset="' + prog4VML4bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row4b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background: ' + prog4Row4b.style.background + '; background-color: ' + prog4Color4a.value + '; border-radius: ' + prog4Row4b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row4b.style.width + '; height: 28px;" height="28">' + prog4Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row4c.style.width + '; height: 28px;" height="28">' + prog4Row4c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog4srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog4Output.innerHTML = chartCode;
        prog4Weight.textContent = Math.ceil(prog4Output.value.length / 1024) + 'KB';
    } else if (rowsData21.value === "5") {
        const chartCode = '<table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" style="border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;" class="chartMobile"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog4csCode + ' <tr> <td align="left" style="padding: ' + prog4TopBarSpace + ';"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog4Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog4VML1cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row1c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog4VML1b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog4Color1a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog4Color1b.value + '" color2="' + prog4Color1a.value + '" angle="90" /> <v:textbox inset="' + prog4VML1bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row1b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background: ' + prog4Row1b.style.background + '; background-color: ' + prog4Color1a.value + '; border-radius: ' + prog4Row1b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row1b.style.width + '; height: 28px;" height="28">' + prog4Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row1c.style.width + '; height: 28px;" height="28">' + prog4Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog4Row2a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog4VML2cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row2c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog4VML2b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog4Color2a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog4Color2b.value + '" color2="' + prog4Color2a.value + '" angle="90" /> <v:textbox inset="' + prog4VML2bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row2b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background: ' + prog4Row2b.style.background + '; background-color: ' + prog4Color2a.value + '; border-radius: ' + prog4Row2b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row2b.style.width + '; height: 28px;" height="28">' + prog4Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row2c.style.width + '; height: 28px;" height="28">' + prog4Row2c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog4Row3a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog4VML3cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row3c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog4VML3b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog4Color3a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog4Color3b.value + '" color2="' + prog4Color3a.value + '" angle="90" /> <v:textbox inset="' + prog4VML3bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row3b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background: ' + prog4Row3b.style.background + '; background-color: ' + prog4Color3a.value + '; border-radius: ' + prog4Row3b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row3b.style.width + '; height: 28px;" height="28">' + prog4Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row3c.style.width + '; height: 28px;" height="28">' + prog4Row3c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog4Row4a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog4VML4cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row4c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog4VML4b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog4Color4a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog4Color4b.value + '" color2="' + prog4Color4a.value + '" angle="90" /> <v:textbox inset="' + prog4VML4bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row4b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background: ' + prog4Row4b.style.background + '; background-color: ' + prog4Color4a.value + '; border-radius: ' + prog4Row4b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row4b.style.width + '; height: 28px;" height="28">' + prog4Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row4c.style.width + '; height: 28px;" height="28">' + prog4Row4c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 20px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 24px;" height="24">' + prog4Row5a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog4VML5cInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row5c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog4VML5b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog4Color5a.value + '" stroke="false"> <v:fill type="gradient" color="' + prog4Color5b.value + '" color2="' + prog4Color5a.value + '" angle="90" /> <v:textbox inset="' + prog4VML5bInset + 'px, 1px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog4Row5b.innerHTML + '</span> </v:textbox> </v:roundrect><div height="10" style="font-size:10px;line-height:10px;">&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;"> <tr> <td align="right" style="background: ' + prog4Row5b.style.background + '; background-color: ' + prog4Color5a.value + '; border-radius: ' + prog4Row5b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row5b.style.width + '; height: 28px;" height="28">' + prog4Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog4Row5c.style.width + '; height: 28px;" height="28">' + prog4Row5c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog4srcCode + ' </table> </td></tr></table> ' + botSpace;
        prog4Output.innerHTML = chartCode;
        prog4Weight.textContent = Math.ceil(prog4Output.value.length / 1024) + 'KB';
    }
    prog4Output.style.opacity = "";
    prog4Weight.style.opacity = "";
    prog4Output.style.borderColor = "#166dfc";
    prog4Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(prog4Output.value);
});
prog4Output.addEventListener("click", () => {
    prog4Output.select();
});