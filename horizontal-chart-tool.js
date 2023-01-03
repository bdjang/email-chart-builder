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
horiz1Label1b.addEventListener("click", () => {
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
    horiz1Row1b.style.backgroundColor = "#" + horiz1Color1.value;
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
    horiz1Row2b.style.backgroundColor = "#" + horiz1Color2.value;
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
    horiz1Row3b.style.backgroundColor = "#" + horiz1Color3.value;
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
    horiz1Row4b.style.backgroundColor = "#" + horiz1Color4.value;
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
    horiz1Row5b.style.backgroundColor = "#" + horiz1Color5.value;
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
    horiz1Row6b.style.backgroundColor = "#" + horiz1Color6.value;
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
    horiz1Row7b.style.backgroundColor = "#" + horiz1Color7.value;
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
    horiz1Row8b.style.backgroundColor = "#" + horiz1Color8.value;
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
    horiz1Row9b.style.backgroundColor = "#" + horiz1Color9.value;
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
    horiz1Row10b.style.backgroundColor = "#" + horiz1Color10.value;
};

// Generate Horiz1 HTML Chart Logic
const horiz1Button = document.getElementById("horiz1Button");
const horiz1Output = document.getElementById("horiz1Output");
horiz1Button.addEventListener("click", () => {
    if (rowsData1.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz1Output.innerHTML = chartCode;
    } else if (rowsData1.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: 22px;" height="22">' + horiz1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: 22px;" height="22">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz1Output.innerHTML = chartCode;
    } else if (rowsData1.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: 22px;" height="22">' + horiz1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: 22px;" height="22">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: 22px;" height="22">' + horiz1Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: 22px;" height="22">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz1Output.innerHTML = chartCode;
    } else if (rowsData1.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: 22px;" height="22">' + horiz1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: 22px;" height="22">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: 22px;" height="22">' + horiz1Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: 22px;" height="22">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: 22px;" height="22">' + horiz1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: 22px;" height="22">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz1Output.innerHTML = chartCode;
    } else if (rowsData1.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: 22px;" height="22">' + horiz1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: 22px;" height="22">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: 22px;" height="22">' + horiz1Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: 22px;" height="22">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: 22px;" height="22">' + horiz1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: 22px;" height="22">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row5a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5b.style.width + '; height: 22px;" height="22">' + horiz1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5c.style.width + '; height: 22px;" height="22">' + horiz1Row5c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz1Output.innerHTML = chartCode;
    } else if (rowsData1.value === "6") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: 22px;" height="22">' + horiz1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: 22px;" height="22">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: 22px;" height="22">' + horiz1Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: 22px;" height="22">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: 22px;" height="22">' + horiz1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: 22px;" height="22">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row5a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5b.style.width + '; height: 22px;" height="22">' + horiz1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5c.style.width + '; height: 22px;" height="22">' + horiz1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row6a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6b.style.width + '; height: 22px;" height="22">' + horiz1Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6c.style.width + '; height: 22px;" height="22">' + horiz1Row6c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz1Output.innerHTML = chartCode;
    } else if (rowsData1.value === "7") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: 22px;" height="22">' + horiz1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: 22px;" height="22">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: 22px;" height="22">' + horiz1Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: 22px;" height="22">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: 22px;" height="22">' + horiz1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: 22px;" height="22">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row5a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5b.style.width + '; height: 22px;" height="22">' + horiz1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5c.style.width + '; height: 22px;" height="22">' + horiz1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row6a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6b.style.width + '; height: 22px;" height="22">' + horiz1Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6c.style.width + '; height: 22px;" height="22">' + horiz1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row7a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7b.style.width + '; height: 22px;" height="22">' + horiz1Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7c.style.width + '; height: 22px;" height="22">' + horiz1Row7c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz1Output.innerHTML = chartCode;
    } else if (rowsData1.value === "8") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: 22px;" height="22">' + horiz1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: 22px;" height="22">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: 22px;" height="22">' + horiz1Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: 22px;" height="22">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: 22px;" height="22">' + horiz1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: 22px;" height="22">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row5a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5b.style.width + '; height: 22px;" height="22">' + horiz1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5c.style.width + '; height: 22px;" height="22">' + horiz1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row6a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6b.style.width + '; height: 22px;" height="22">' + horiz1Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6c.style.width + '; height: 22px;" height="22">' + horiz1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row7a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7b.style.width + '; height: 22px;" height="22">' + horiz1Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7c.style.width + '; height: 22px;" height="22">' + horiz1Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row8a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color8.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row8b.style.width + '; height: 22px;" height="22">' + horiz1Row8b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row8c.style.width + '; height: 22px;" height="22">' + horiz1Row8c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz1Output.innerHTML = chartCode;
    } else if (rowsData1.value === "9") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: 22px;" height="22">' + horiz1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: 22px;" height="22">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: 22px;" height="22">' + horiz1Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: 22px;" height="22">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: 22px;" height="22">' + horiz1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: 22px;" height="22">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row5a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5b.style.width + '; height: 22px;" height="22">' + horiz1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5c.style.width + '; height: 22px;" height="22">' + horiz1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row6a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6b.style.width + '; height: 22px;" height="22">' + horiz1Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6c.style.width + '; height: 22px;" height="22">' + horiz1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row7a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7b.style.width + '; height: 22px;" height="22">' + horiz1Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7c.style.width + '; height: 22px;" height="22">' + horiz1Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row8a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color8.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row8b.style.width + '; height: 22px;" height="22">' + horiz1Row8b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row8c.style.width + '; height: 22px;" height="22">' + horiz1Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row9a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color9.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row9b.style.width + '; height: 22px;" height="22">' + horiz1Row9b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row9c.style.width + '; height: 22px;" height="22">' + horiz1Row9c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz1Output.innerHTML = chartCode;
    } else if (rowsData1.value === "10") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color1.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1b.style.width + '; height: 22px;" height="22">' + horiz1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row1c.style.width + '; height: 22px;" height="22">' + horiz1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color2.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2b.style.width + '; height: 22px;" height="22">' + horiz1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row2c.style.width + '; height: 22px;" height="22">' + horiz1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color3.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3b.style.width + '; height: 22px;" height="22">' + horiz1Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row3c.style.width + '; height: 22px;" height="22">' + horiz1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color4.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4b.style.width + '; height: 22px;" height="22">' + horiz1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row4c.style.width + '; height: 22px;" height="22">' + horiz1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row5a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color5.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5b.style.width + '; height: 22px;" height="22">' + horiz1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row5c.style.width + '; height: 22px;" height="22">' + horiz1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row6a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color6.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6b.style.width + '; height: 22px;" height="22">' + horiz1Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row6c.style.width + '; height: 22px;" height="22">' + horiz1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row7a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color7.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7b.style.width + '; height: 22px;" height="22">' + horiz1Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row7c.style.width + '; height: 22px;" height="22">' + horiz1Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row8a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color8.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row8b.style.width + '; height: 22px;" height="22">' + horiz1Row8b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row8c.style.width + '; height: 22px;" height="22">' + horiz1Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row9a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color9.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row9b.style.width + '; height: 22px;" height="22">' + horiz1Row9b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row9c.style.width + '; height: 22px;" height="22">' + horiz1Row9c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22">' + horiz1Row10a.innerHTML + '</td><td align="right" style="background-color: #' + horiz1Color10.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row10b.style.width + '; height: 22px;" height="22">' + horiz1Row10b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz1Row10c.style.width + '; height: 22px;" height="22">' + horiz1Row10c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz1Output.innerHTML = chartCode;
    }
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
    horiz2Row1b.style.backgroundColor = "#" + horiz2Color1.value;
    horiz2Row1a.style.backgroundColor = "#" + horiz2Color1.value;
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
    horiz2Row2b.style.backgroundColor = "#" + horiz2Color2.value;
    horiz2Row2a.style.backgroundColor = "#" + horiz2Color2.value;
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
    horiz2Row3b.style.backgroundColor = "#" + horiz2Color3.value;
    horiz2Row3a.style.backgroundColor = "#" + horiz2Color3.value;
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
    horiz2Row4b.style.backgroundColor = "#" + horiz2Color4.value;
    horiz2Row4a.style.backgroundColor = "#" + horiz2Color4.value;
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
    horiz2Row5b.style.backgroundColor = "#" + horiz2Color5.value;
    horiz2Row5a.style.backgroundColor = "#" + horiz2Color5.value;
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
    horiz2Row6b.style.backgroundColor = "#" + horiz2Color6.value;
    horiz2Row6a.style.backgroundColor = "#" + horiz2Color6.value;
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
    horiz2Row7b.style.backgroundColor = "#" + horiz2Color7.value;
    horiz2Row7a.style.backgroundColor = "#" + horiz2Color7.value;
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
    horiz2Row8b.style.backgroundColor = "#" + horiz2Color8.value;
    horiz2Row8a.style.backgroundColor = "#" + horiz2Color8.value;
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
    horiz2Row9b.style.backgroundColor = "#" + horiz2Color9.value;
    horiz2Row9a.style.backgroundColor = "#" + horiz2Color9.value;
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
    horiz2Row10b.style.backgroundColor = "#" + horiz2Color10.value;
    horiz2Row10a.style.backgroundColor = "#" + horiz2Color10.value;
};

// Generate Horiz2 HTML Chart Logic
const horiz2Button = document.getElementById("horiz2Button");
const horiz2Output = document.getElementById("horiz2Output");
horiz2Button.addEventListener("click", () => {
    if (rowsData2.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz2Output.innerHTML = chartCode;
    } else if (rowsData2.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: 31px;" height="31">' + horiz2Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz2Output.innerHTML = chartCode;
    } else if (rowsData2.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: 31px;" height="31">' + horiz2Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: 31px;" height="31">' + horiz2Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz2Output.innerHTML = chartCode;
    } else if (rowsData2.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: 31px;" height="31">' + horiz2Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: 31px;" height="31">' + horiz2Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: 31px;" height="31">' + horiz2Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz2Output.innerHTML = chartCode;
    } else if (rowsData2.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: 31px;" height="31">' + horiz2Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: 31px;" height="31">' + horiz2Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: 31px;" height="31">' + horiz2Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row5a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5b.style.width + '; height: 31px;" height="31">' + horiz2Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row5c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz2Output.innerHTML = chartCode;
    } else if (rowsData2.value === "6") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: 31px;" height="31">' + horiz2Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: 31px;" height="31">' + horiz2Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: 31px;" height="31">' + horiz2Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row5a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5b.style.width + '; height: 31px;" height="31">' + horiz2Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row6a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6b.style.width + '; height: 31px;" height="31">' + horiz2Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row6c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz2Output.innerHTML = chartCode;
    } else if (rowsData2.value === "7") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: 31px;" height="31">' + horiz2Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: 31px;" height="31">' + horiz2Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: 31px;" height="31">' + horiz2Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row5a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5b.style.width + '; height: 31px;" height="31">' + horiz2Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row6a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6b.style.width + '; height: 31px;" height="31">' + horiz2Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row7a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7b.style.width + '; height: 31px;" height="31">' + horiz2Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row7c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz2Output.innerHTML = chartCode;
    } else if (rowsData2.value === "8") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: 31px;" height="31">' + horiz2Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: 31px;" height="31">' + horiz2Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: 31px;" height="31">' + horiz2Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row5a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5b.style.width + '; height: 31px;" height="31">' + horiz2Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row6a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6b.style.width + '; height: 31px;" height="31">' + horiz2Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row7a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7b.style.width + '; height: 31px;" height="31">' + horiz2Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row8a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row8b.style.width + '; height: 31px;" height="31">' + horiz2Row8b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row8c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz2Output.innerHTML = chartCode;
    } else if (rowsData2.value === "9") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: 31px;" height="31">' + horiz2Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: 31px;" height="31">' + horiz2Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: 31px;" height="31">' + horiz2Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row5a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5b.style.width + '; height: 31px;" height="31">' + horiz2Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row6a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6b.style.width + '; height: 31px;" height="31">' + horiz2Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row7a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7b.style.width + '; height: 31px;" height="31">' + horiz2Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row8a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row8b.style.width + '; height: 31px;" height="31">' + horiz2Row8b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row9a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row9b.style.width + '; height: 31px;" height="31">' + horiz2Row9b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row9c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz2Output.innerHTML = chartCode;
    } else if (rowsData2.value === "10") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row1b.style.width + '; height: 31px;" height="31">' + horiz2Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row2b.style.width + '; height: 31px;" height="31">' + horiz2Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row3b.style.width + '; height: 31px;" height="31">' + horiz2Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row4b.style.width + '; height: 31px;" height="31">' + horiz2Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row5a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row5b.style.width + '; height: 31px;" height="31">' + horiz2Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row6a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row6b.style.width + '; height: 31px;" height="31">' + horiz2Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row7a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row7b.style.width + '; height: 31px;" height="31">' + horiz2Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row8a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row8b.style.width + '; height: 31px;" height="31">' + horiz2Row8b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row9a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row9b.style.width + '; height: 31px;" height="31">' + horiz2Row9b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row9c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #' + horiz2Color10.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 31px;" height="31">' + horiz2Row10a.innerHTML + '</td><td align="right" style="background-color: #' + horiz2Color10.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz2Row10b.style.width + '; height: 31px;" height="31">' + horiz2Row10b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 31px;" height="31">' + horiz2Row10c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz2Output.innerHTML = chartCode;
    }
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
    horiz3Row1b.style.backgroundColor = "#" + horiz3Color1.value;
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
    horiz3Row2b.style.backgroundColor = "#" + horiz3Color2.value;
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
    horiz3Row3b.style.backgroundColor = "#" + horiz3Color3.value;
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
    horiz3Row4b.style.backgroundColor = "#" + horiz3Color4.value;
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
    horiz3Row5b.style.backgroundColor = "#" + horiz3Color5.value;
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
    horiz3Row6b.style.backgroundColor = "#" + horiz3Color6.value;
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
    horiz3Row7b.style.backgroundColor = "#" + horiz3Color7.value;
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
    horiz3Row8b.style.backgroundColor = "#" + horiz3Color8.value;
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
    horiz3Row9b.style.backgroundColor = "#" + horiz3Color9.value;
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
    horiz3Row10b.style.backgroundColor = "#" + horiz3Color10.value;
};

// Generate Horiz3 HTML Chart Logic
const horiz3Button = document.getElementById("horiz3Button");
const horiz3Output = document.getElementById("horiz3Output");
horiz3Button.addEventListener("click", () => {
    if (rowsData3.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz3Output.innerHTML = chartCode;
    } else if (rowsData3.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: 28px;" height="28">' + horiz3Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz3Output.innerHTML = chartCode;
    } else if (rowsData3.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: 28px;" height="28">' + horiz3Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: 28px;" height="28">' + horiz3Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz3Output.innerHTML = chartCode;
    } else if (rowsData3.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: 28px;" height="28">' + horiz3Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: 28px;" height="28">' + horiz3Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: 28px;" height="28">' + horiz3Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz3Output.innerHTML = chartCode;
    } else if (rowsData3.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: 28px;" height="28">' + horiz3Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: 28px;" height="28">' + horiz3Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: 28px;" height="28">' + horiz3Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row5a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5b.style.width + '; height: 28px;" height="28">' + horiz3Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row5c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz3Output.innerHTML = chartCode;
    } else if (rowsData3.value === "6") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: 28px;" height="28">' + horiz3Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: 28px;" height="28">' + horiz3Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: 28px;" height="28">' + horiz3Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row5a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5b.style.width + '; height: 28px;" height="28">' + horiz3Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row6a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6b.style.width + '; height: 28px;" height="28">' + horiz3Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row6c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz3Output.innerHTML = chartCode;
    } else if (rowsData3.value === "7") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: 28px;" height="28">' + horiz3Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: 28px;" height="28">' + horiz3Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: 28px;" height="28">' + horiz3Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row5a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5b.style.width + '; height: 28px;" height="28">' + horiz3Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row6a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6b.style.width + '; height: 28px;" height="28">' + horiz3Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row7a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7b.style.width + '; height: 28px;" height="28">' + horiz3Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row7c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz3Output.innerHTML = chartCode;
    } else if (rowsData3.value === "8") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: 28px;" height="28">' + horiz3Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: 28px;" height="28">' + horiz3Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: 28px;" height="28">' + horiz3Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row5a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5b.style.width + '; height: 28px;" height="28">' + horiz3Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row6a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6b.style.width + '; height: 28px;" height="28">' + horiz3Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row7a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7b.style.width + '; height: 28px;" height="28">' + horiz3Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row8a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row8b.style.width + '; height: 28px;" height="28">' + horiz3Row8b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row8c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz3Output.innerHTML = chartCode;
    } else if (rowsData3.value === "9") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: 28px;" height="28">' + horiz3Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: 28px;" height="28">' + horiz3Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: 28px;" height="28">' + horiz3Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row5a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5b.style.width + '; height: 28px;" height="28">' + horiz3Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row6a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6b.style.width + '; height: 28px;" height="28">' + horiz3Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row7a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7b.style.width + '; height: 28px;" height="28">' + horiz3Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row8a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row8b.style.width + '; height: 28px;" height="28">' + horiz3Row8b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row9a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row9b.style.width + '; height: 28px;" height="28">' + horiz3Row9b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row9c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz3Output.innerHTML = chartCode;
    } else if (rowsData3.value === "10") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row1a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row1b.style.width + '; height: 28px;" height="28">' + horiz3Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row2a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row2b.style.width + '; height: 28px;" height="28">' + horiz3Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row3a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row3b.style.width + '; height: 28px;" height="28">' + horiz3Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row4a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row4b.style.width + '; height: 28px;" height="28">' + horiz3Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row5a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row5b.style.width + '; height: 28px;" height="28">' + horiz3Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row6a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row6b.style.width + '; height: 28px;" height="28">' + horiz3Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row7a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row7b.style.width + '; height: 28px;" height="28">' + horiz3Row7b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row8a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row8b.style.width + '; height: 28px;" height="28">' + horiz3Row8b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row9a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row9b.style.width + '; height: 28px;" height="28">' + horiz3Row9b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row9c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + horiz3Row10a.innerHTML + '</td><td align="right" style="background-color: #' + horiz3Color10.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + horiz3Row10b.style.width + '; height: 28px;" height="28">' + horiz3Row10b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + horiz3Row10c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        horiz3Output.innerHTML = chartCode;
    }
});
horiz3Output.addEventListener("click", () => {
    horiz3Output.select();
});