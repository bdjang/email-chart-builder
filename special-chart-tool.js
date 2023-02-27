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
    if (negative1Text1b.value == "") {
        negative1Row1c.innerHTML = negative1Text1b.value;
    } else if (negative1Text1b.value) {
        negative1Row1c.innerHTML = "&nbsp;" + negative1Text1b.value;
    }
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
    if (negative1Text2b.value == "") {
        negative1Row2c.innerHTML = negative1Text2b.value;
    } else if (negative1Text2b.value) {
        negative1Row2c.innerHTML = "&nbsp;" + negative1Text2b.value;
    }
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
    if (negative1Text3b.value == "") {
        negative1Row3c.innerHTML = negative1Text3b.value;
    } else if (negative1Text3b.value) {
        negative1Row3c.innerHTML = "&nbsp;" + negative1Text3b.value;
    }
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
    if (negative1Text4b.value == "") {
        negative1Row4c.innerHTML = negative1Text4b.value;
    } else if (negative1Text4b.value) {
        negative1Row4c.innerHTML = "&nbsp;" + negative1Text4b.value;
    }
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
    if (negative1Text5b.value == "") {
        negative1Row5c.innerHTML = negative1Text5b.value;
    } else if (negative1Text5b.value) {
        negative1Row5c.innerHTML = "&nbsp;" + negative1Text5b.value;
    }
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
    if (negative1Text6b.value == "") {
        negative1Row6c.innerHTML = negative1Text6b.value;
    } else if (negative1Text6b.value) {
        negative1Row6c.innerHTML = "&nbsp;" + negative1Text6b.value;
    }
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
    if (negative1Text7b.value == "") {
        negative1Row7c.innerHTML = negative1Text7b.value;
    } else if (negative1Text7b.value) {
        negative1Row7c.innerHTML = "&nbsp;" + negative1Text7b.value;
    }
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
    if (negative1Text8b.value == "") {
        negative1Row8c.innerHTML = negative1Text8b.value;
    } else if (negative1Text8b.value) {
        negative1Row8c.innerHTML = "&nbsp;" + negative1Text8b.value;
    }
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
    if (negative1Text9b.value == "") {
        negative1Row9c.innerHTML = negative1Text9b.value;
    } else if (negative1Text9b.value) {
        negative1Row9c.innerHTML = "&nbsp;" + negative1Text9b.value;
    }
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
    if (negative1Text10b.value == "") {
        negative1Row10c.innerHTML = negative1Text10b.value;
    } else if (negative1Text10b.value) {
        negative1Row10c.innerHTML = "&nbsp;" + negative1Text10b.value;
    }
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

// Generate Negative I HTML Chart Logic
const negative1Button = document.getElementById("negative1Button");
const negative1Output = document.getElementById("negative1Output");
negative1Button.addEventListener("click", () => {
    if (rowsData12.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: 28px;" height="28">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: 28px;" height="28">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative1Output.innerHTML = chartCode;
    } else if (rowsData12.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: 28px;" height="28">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: 28px;" height="28">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row2a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2b.style.width + '; height: 28px;" height="28">' + negative1Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2c.style.width + '; height: 28px;" height="28">' + negative1Row2c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative1Output.innerHTML = chartCode;
    } else if (rowsData12.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: 28px;" height="28">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: 28px;" height="28">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row2a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2b.style.width + '; height: 28px;" height="28">' + negative1Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2c.style.width + '; height: 28px;" height="28">' + negative1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row3a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3b.style.width + '; height: 28px;" height="28">' + negative1Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3c.style.width + '; height: 28px;" height="28">' + negative1Row3c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative1Output.innerHTML = chartCode;
    } else if (rowsData12.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: 28px;" height="28">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: 28px;" height="28">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row2a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2b.style.width + '; height: 28px;" height="28">' + negative1Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2c.style.width + '; height: 28px;" height="28">' + negative1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row3a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3b.style.width + '; height: 28px;" height="28">' + negative1Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3c.style.width + '; height: 28px;" height="28">' + negative1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row4a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4b.style.width + '; height: 28px;" height="28">' + negative1Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4c.style.width + '; height: 28px;" height="28">' + negative1Row4c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative1Output.innerHTML = chartCode;
    } else if (rowsData12.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: 28px;" height="28">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: 28px;" height="28">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row2a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2b.style.width + '; height: 28px;" height="28">' + negative1Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2c.style.width + '; height: 28px;" height="28">' + negative1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row3a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3b.style.width + '; height: 28px;" height="28">' + negative1Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3c.style.width + '; height: 28px;" height="28">' + negative1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row4a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4b.style.width + '; height: 28px;" height="28">' + negative1Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4c.style.width + '; height: 28px;" height="28">' + negative1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row5a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5b.style.width + '; height: 28px;" height="28">' + negative1Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5c.style.width + '; height: 28px;" height="28">' + negative1Row5c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative1Output.innerHTML = chartCode;
    } else if (rowsData12.value === "6") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: 28px;" height="28">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: 28px;" height="28">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row2a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2b.style.width + '; height: 28px;" height="28">' + negative1Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2c.style.width + '; height: 28px;" height="28">' + negative1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row3a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3b.style.width + '; height: 28px;" height="28">' + negative1Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3c.style.width + '; height: 28px;" height="28">' + negative1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row4a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4b.style.width + '; height: 28px;" height="28">' + negative1Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4c.style.width + '; height: 28px;" height="28">' + negative1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row5a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5b.style.width + '; height: 28px;" height="28">' + negative1Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5c.style.width + '; height: 28px;" height="28">' + negative1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row6a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6b.style.width + '; height: 28px;" height="28">' + negative1Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6c.style.width + '; height: 28px;" height="28">' + negative1Row6c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative1Output.innerHTML = chartCode;
    } else if (rowsData12.value === "7") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: 28px;" height="28">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: 28px;" height="28">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row2a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2b.style.width + '; height: 28px;" height="28">' + negative1Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2c.style.width + '; height: 28px;" height="28">' + negative1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row3a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3b.style.width + '; height: 28px;" height="28">' + negative1Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3c.style.width + '; height: 28px;" height="28">' + negative1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row4a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4b.style.width + '; height: 28px;" height="28">' + negative1Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4c.style.width + '; height: 28px;" height="28">' + negative1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row5a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5b.style.width + '; height: 28px;" height="28">' + negative1Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5c.style.width + '; height: 28px;" height="28">' + negative1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row6a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6b.style.width + '; height: 28px;" height="28">' + negative1Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6c.style.width + '; height: 28px;" height="28">' + negative1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row7a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row7b.style.width + '; height: 28px;" height="28">' + negative1Row7b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row7c.style.width + '; height: 28px;" height="28">' + negative1Row7c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative1Output.innerHTML = chartCode;
    } else if (rowsData12.value === "8") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: 28px;" height="28">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: 28px;" height="28">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row2a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2b.style.width + '; height: 28px;" height="28">' + negative1Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2c.style.width + '; height: 28px;" height="28">' + negative1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row3a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3b.style.width + '; height: 28px;" height="28">' + negative1Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3c.style.width + '; height: 28px;" height="28">' + negative1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row4a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4b.style.width + '; height: 28px;" height="28">' + negative1Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4c.style.width + '; height: 28px;" height="28">' + negative1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row5a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5b.style.width + '; height: 28px;" height="28">' + negative1Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5c.style.width + '; height: 28px;" height="28">' + negative1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row6a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6b.style.width + '; height: 28px;" height="28">' + negative1Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6c.style.width + '; height: 28px;" height="28">' + negative1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row7a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row7b.style.width + '; height: 28px;" height="28">' + negative1Row7b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row7c.style.width + '; height: 28px;" height="28">' + negative1Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row8a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row8b.style.width + '; height: 28px;" height="28">' + negative1Row8b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row8c.style.width + '; height: 28px;" height="28">' + negative1Row8c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative1Output.innerHTML = chartCode;
    } else if (rowsData12.value === "9") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: 28px;" height="28">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: 28px;" height="28">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row2a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2b.style.width + '; height: 28px;" height="28">' + negative1Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2c.style.width + '; height: 28px;" height="28">' + negative1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row3a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3b.style.width + '; height: 28px;" height="28">' + negative1Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3c.style.width + '; height: 28px;" height="28">' + negative1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row4a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4b.style.width + '; height: 28px;" height="28">' + negative1Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4c.style.width + '; height: 28px;" height="28">' + negative1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row5a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5b.style.width + '; height: 28px;" height="28">' + negative1Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5c.style.width + '; height: 28px;" height="28">' + negative1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row6a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6b.style.width + '; height: 28px;" height="28">' + negative1Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6c.style.width + '; height: 28px;" height="28">' + negative1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row7a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row7b.style.width + '; height: 28px;" height="28">' + negative1Row7b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row7c.style.width + '; height: 28px;" height="28">' + negative1Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row8a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row8b.style.width + '; height: 28px;" height="28">' + negative1Row8b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row8c.style.width + '; height: 28px;" height="28">' + negative1Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row9a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row9b.style.width + '; height: 28px;" height="28">' + negative1Row9b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row9c.style.width + '; height: 28px;" height="28">' + negative1Row9c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative1Output.innerHTML = chartCode;
    } else if (rowsData12.value === "10") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1b.style.width + '; height: 28px;" height="28">' + negative1Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row1c.style.width + '; height: 28px;" height="28">' + negative1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row2a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2b.style.width + '; height: 28px;" height="28">' + negative1Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row2c.style.width + '; height: 28px;" height="28">' + negative1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row3a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3b.style.width + '; height: 28px;" height="28">' + negative1Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row3c.style.width + '; height: 28px;" height="28">' + negative1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row4a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4b.style.width + '; height: 28px;" height="28">' + negative1Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row4c.style.width + '; height: 28px;" height="28">' + negative1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row5a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5b.style.width + '; height: 28px;" height="28">' + negative1Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row5c.style.width + '; height: 28px;" height="28">' + negative1Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row6a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6b.style.width + '; height: 28px;" height="28">' + negative1Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row6c.style.width + '; height: 28px;" height="28">' + negative1Row6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row7a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row7b.style.width + '; height: 28px;" height="28">' + negative1Row7b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row7c.style.width + '; height: 28px;" height="28">' + negative1Row7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row8a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row8b.style.width + '; height: 28px;" height="28">' + negative1Row8b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row8c.style.width + '; height: 28px;" height="28">' + negative1Row8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row9a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row9b.style.width + '; height: 28px;" height="28">' + negative1Row9b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row9c.style.width + '; height: 28px;" height="28">' + negative1Row9c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative1Row10a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row10b.style.width + '; height: 28px;" height="28">' + negative1Row10b.innerHTML + '</td><td align="left" style="background-color: ' + negative1Color10.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative1Row10c.style.width + '; height: 28px;" height="28">' + negative1Row10c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative1Output.innerHTML = chartCode;
    }
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
    if (negative2Text1b.value == "") {
        negative2Row1c.innerHTML = negative2Text1b.value;
    } else if (negative2Text1b.value) {
        negative2Row1c.innerHTML = "&nbsp;" + negative2Text1b.value;
    }
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
    if (negative2Text2b.value == "") {
        negative2Row2c.innerHTML = negative2Text2b.value;
    } else if (negative2Text2b.value) {
        negative2Row2c.innerHTML = "&nbsp;" + negative2Text2b.value;
    }
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
    if (negative2Text3b.value == "") {
        negative2Row3c.innerHTML = negative2Text3b.value;
    } else if (negative2Text3b.value) {
        negative2Row3c.innerHTML = "&nbsp;" + negative2Text3b.value;
    }
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
    if (negative2Text4b.value == "") {
        negative2Row4c.innerHTML = negative2Text4b.value;
    } else if (negative2Text4b.value) {
        negative2Row4c.innerHTML = "&nbsp;" + negative2Text4b.value;
    }
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
    if (negative2Text5b.value == "") {
        negative2Row5c.innerHTML = negative2Text5b.value;
    } else if (negative2Text5b.value) {
        negative2Row5c.innerHTML = "&nbsp;" + negative2Text5b.value;
    }
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
    if (negative2Text6b.value == "") {
        negative2Row6c.innerHTML = negative2Text6b.value;
    } else if (negative2Text6b.value) {
        negative2Row6c.innerHTML = "&nbsp;" + negative2Text6b.value;
    }
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
    if (negative2Text7b.value == "") {
        negative2Row7c.innerHTML = negative2Text7b.value;
    } else if (negative2Text7b.value) {
        negative2Row7c.innerHTML = "&nbsp;" + negative2Text7b.value;
    }
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
    if (negative2Text8b.value == "") {
        negative2Row8c.innerHTML = negative2Text8b.value;
    } else if (negative2Text8b.value) {
        negative2Row8c.innerHTML = "&nbsp;" + negative2Text8b.value;
    }
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
    if (negative2Text9b.value == "") {
        negative2Row9c.innerHTML = negative2Text9b.value;
    } else if (negative2Text9b.value) {
        negative2Row9c.innerHTML = "&nbsp;" + negative2Text9b.value;
    }
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
    if (negative2Text10b.value == "") {
        negative2Row10c.innerHTML = negative2Text10b.value;
    } else if (negative2Text10b.value) {
        negative2Row10c.innerHTML = "&nbsp;" + negative2Text10b.value;
    }
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

// Generate Negative HTML Chart Logic
const negative2Button = document.getElementById("negative2Button");
const negative2Output = document.getElementById("negative2Output");
negative2Button.addEventListener("click", () => {
    if (rowsData13.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: 28px;" height="28">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: 28px;" height="28">' + negative2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative2Output.innerHTML = chartCode;
    } else if (rowsData13.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: 28px;" height="28">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: 28px;" height="28">' + negative2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2b.style.width + '; height: 28px;" height="28">' + negative2Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2c.style.width + '; height: 28px;" height="28">' + negative2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row2a.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative2Output.innerHTML = chartCode;
    } else if (rowsData13.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: 28px;" height="28">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: 28px;" height="28">' + negative2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2b.style.width + '; height: 28px;" height="28">' + negative2Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2c.style.width + '; height: 28px;" height="28">' + negative2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row2a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3b.style.width + '; height: 28px;" height="28">' + negative2Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3c.style.width + '; height: 28px;" height="28">' + negative2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row3a.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative2Output.innerHTML = chartCode;
    } else if (rowsData13.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: 28px;" height="28">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: 28px;" height="28">' + negative2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2b.style.width + '; height: 28px;" height="28">' + negative2Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2c.style.width + '; height: 28px;" height="28">' + negative2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row2a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3b.style.width + '; height: 28px;" height="28">' + negative2Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3c.style.width + '; height: 28px;" height="28">' + negative2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row3a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4b.style.width + '; height: 28px;" height="28">' + negative2Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4c.style.width + '; height: 28px;" height="28">' + negative2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row4a.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative2Output.innerHTML = chartCode;
    } else if (rowsData13.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: 28px;" height="28">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: 28px;" height="28">' + negative2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2b.style.width + '; height: 28px;" height="28">' + negative2Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2c.style.width + '; height: 28px;" height="28">' + negative2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row2a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3b.style.width + '; height: 28px;" height="28">' + negative2Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3c.style.width + '; height: 28px;" height="28">' + negative2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row3a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4b.style.width + '; height: 28px;" height="28">' + negative2Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4c.style.width + '; height: 28px;" height="28">' + negative2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row4a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5b.style.width + '; height: 28px;" height="28">' + negative2Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5c.style.width + '; height: 28px;" height="28">' + negative2Row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row5a.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative2Output.innerHTML = chartCode;
    } else if (rowsData13.value === "6") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: 28px;" height="28">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: 28px;" height="28">' + negative2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2b.style.width + '; height: 28px;" height="28">' + negative2Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2c.style.width + '; height: 28px;" height="28">' + negative2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row2a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3b.style.width + '; height: 28px;" height="28">' + negative2Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3c.style.width + '; height: 28px;" height="28">' + negative2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row3a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4b.style.width + '; height: 28px;" height="28">' + negative2Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4c.style.width + '; height: 28px;" height="28">' + negative2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row4a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5b.style.width + '; height: 28px;" height="28">' + negative2Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5c.style.width + '; height: 28px;" height="28">' + negative2Row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row5a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6b.style.width + ' height: 28px;" height="28">' + negative2Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6c.style.width + '; height: 28px;" height="28">' + negative2Row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row6a.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative2Output.innerHTML = chartCode;
    } else if (rowsData13.value === "7") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: 28px;" height="28">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: 28px;" height="28">' + negative2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2b.style.width + '; height: 28px;" height="28">' + negative2Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2c.style.width + '; height: 28px;" height="28">' + negative2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row2a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3b.style.width + '; height: 28px;" height="28">' + negative2Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3c.style.width + '; height: 28px;" height="28">' + negative2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row3a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4b.style.width + '; height: 28px;" height="28">' + negative2Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4c.style.width + '; height: 28px;" height="28">' + negative2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row4a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5b.style.width + '; height: 28px;" height="28">' + negative2Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5c.style.width + '; height: 28px;" height="28">' + negative2Row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row5a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6b.style.width + ' height: 28px;" height="28">' + negative2Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6c.style.width + '; height: 28px;" height="28">' + negative2Row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row6a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row7b.style.width + '; height: 28px;" height="28">' + negative2Row7b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row7c.style.width + '; height: 28px;" height="28">' + negative2Row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row7a.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative2Output.innerHTML = chartCode;
    } else if (rowsData13.value === "8") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: 28px;" height="28">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: 28px;" height="28">' + negative2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2b.style.width + '; height: 28px;" height="28">' + negative2Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2c.style.width + '; height: 28px;" height="28">' + negative2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row2a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3b.style.width + '; height: 28px;" height="28">' + negative2Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3c.style.width + '; height: 28px;" height="28">' + negative2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row3a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4b.style.width + '; height: 28px;" height="28">' + negative2Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4c.style.width + '; height: 28px;" height="28">' + negative2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row4a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5b.style.width + '; height: 28px;" height="28">' + negative2Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5c.style.width + '; height: 28px;" height="28">' + negative2Row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row5a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6b.style.width + ' height: 28px;" height="28">' + negative2Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6c.style.width + '; height: 28px;" height="28">' + negative2Row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row6a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row7b.style.width + '; height: 28px;" height="28">' + negative2Row7b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row7c.style.width + '; height: 28px;" height="28">' + negative2Row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row7a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row8b.style.width + '; height: 28px;" height="28">' + negative2Row8b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row8c.style.width + '; height: 28px;" height="28">' + negative2Row8c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row8a.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative2Output.innerHTML = chartCode;
    } else if (rowsData13.value === "9") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: 28px;" height="28">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: 28px;" height="28">' + negative2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2b.style.width + '; height: 28px;" height="28">' + negative2Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2c.style.width + '; height: 28px;" height="28">' + negative2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row2a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3b.style.width + '; height: 28px;" height="28">' + negative2Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3c.style.width + '; height: 28px;" height="28">' + negative2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row3a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4b.style.width + '; height: 28px;" height="28">' + negative2Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4c.style.width + '; height: 28px;" height="28">' + negative2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row4a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5b.style.width + '; height: 28px;" height="28">' + negative2Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5c.style.width + '; height: 28px;" height="28">' + negative2Row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row5a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6b.style.width + ' height: 28px;" height="28">' + negative2Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6c.style.width + '; height: 28px;" height="28">' + negative2Row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row6a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row7b.style.width + '; height: 28px;" height="28">' + negative2Row7b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row7c.style.width + '; height: 28px;" height="28">' + negative2Row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row7a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row8b.style.width + '; height: 28px;" height="28">' + negative2Row8b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row8c.style.width + '; height: 28px;" height="28">' + negative2Row8c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row8a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row9b.style.width + '; height: 28px;" height="28">' + negative2Row9b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row9c.style.width + '; height: 28px;" height="28">' + negative2Row9c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row9a.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative2Output.innerHTML = chartCode;
    } else if (rowsData13.value === "10") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1b.style.width + '; height: 28px;" height="28">' + negative2Row1b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row1c.style.width + '; height: 28px;" height="28">' + negative2Row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row1a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2b.style.width + '; height: 28px;" height="28">' + negative2Row2b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row2c.style.width + '; height: 28px;" height="28">' + negative2Row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row2a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3b.style.width + '; height: 28px;" height="28">' + negative2Row3b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row3c.style.width + '; height: 28px;" height="28">' + negative2Row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row3a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4b.style.width + '; height: 28px;" height="28">' + negative2Row4b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row4c.style.width + '; height: 28px;" height="28">' + negative2Row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row4a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5b.style.width + '; height: 28px;" height="28">' + negative2Row5b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row5c.style.width + '; height: 28px;" height="28">' + negative2Row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row5a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6b.style.width + ' height: 28px;" height="28">' + negative2Row6b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row6c.style.width + '; height: 28px;" height="28">' + negative2Row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row6a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row7b.style.width + '; height: 28px;" height="28">' + negative2Row7b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row7c.style.width + '; height: 28px;" height="28">' + negative2Row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row7a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row8b.style.width + '; height: 28px;" height="28">' + negative2Row8b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row8c.style.width + '; height: 28px;" height="28">' + negative2Row8c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row8a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row9b.style.width + '; height: 28px;" height="28">' + negative2Row9b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row9c.style.width + '; height: 28px;" height="28">' + negative2Row9c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row9a.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row10b.style.width + '; height: 28px;" height="28">' + negative2Row10b.innerHTML + '</td><td align="left" style="background-color: ' + negative2Color10.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negative2Row10c.style.width + '; height: 28px;" height="28">' + negative2Row10c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negative2Row10a.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negative2Output.innerHTML = chartCode;
    }
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

// Generate Split HTML Chart Logic
const splitButton = document.getElementById("splitButton");
const splitOutput = document.getElementById("splitOutput");
splitButton.addEventListener("click", () => {
    if (rowsData20.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    } else if (rowsData20.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    } else if (rowsData20.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    } else if (rowsData20.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    } else if (rowsData20.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5a.style.width + '; height: 22px;" height="22">' + row5a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor5a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5b.style.width + '; height: 22px;" height="22">' + row5b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5c.style.width + '; height: 22px;" height="22">' + row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5d.style.width + '; height: 22px;" height="22">' + row5d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    } else if (rowsData20.value === "6") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5a.style.width + '; height: 22px;" height="22">' + row5a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor5a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5b.style.width + '; height: 22px;" height="22">' + row5b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5c.style.width + '; height: 22px;" height="22">' + row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5d.style.width + '; height: 22px;" height="22">' + row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6a.style.width + '; height: 22px;" height="22">' + row6a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor6a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6b.style.width + '; height: 22px;" height="22">' + row6b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6c.style.width + '; height: 22px;" height="22">' + row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6d.style.width + '; height: 22px;" height="22">' + row6d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    } else if (rowsData20.value === "7") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5a.style.width + '; height: 22px;" height="22">' + row5a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor5a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5b.style.width + '; height: 22px;" height="22">' + row5b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5c.style.width + '; height: 22px;" height="22">' + row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5d.style.width + '; height: 22px;" height="22">' + row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6a.style.width + '; height: 22px;" height="22">' + row6a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor6a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6b.style.width + '; height: 22px;" height="22">' + row6b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6c.style.width + '; height: 22px;" height="22">' + row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6d.style.width + '; height: 22px;" height="22">' + row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7a.style.width + '; height: 22px;" height="22">' + row7a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor7a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7b.style.width + '; height: 22px;" height="22">' + row7b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7c.style.width + '; height: 22px;" height="22">' + row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7d.style.width + '; height: 22px;" height="22">' + row7d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    } else if (rowsData20.value === "8") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5a.style.width + '; height: 22px;" height="22">' + row5a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor5a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5b.style.width + '; height: 22px;" height="22">' + row5b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5c.style.width + '; height: 22px;" height="22">' + row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5d.style.width + '; height: 22px;" height="22">' + row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6a.style.width + '; height: 22px;" height="22">' + row6a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor6a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6b.style.width + '; height: 22px;" height="22">' + row6b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6c.style.width + '; height: 22px;" height="22">' + row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6d.style.width + '; height: 22px;" height="22">' + row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7a.style.width + '; height: 22px;" height="22">' + row7a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor7a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7b.style.width + '; height: 22px;" height="22">' + row7b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7c.style.width + '; height: 22px;" height="22">' + row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7d.style.width + '; height: 22px;" height="22">' + row7d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8a.style.width + '; height: 22px;" height="22">' + row8a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor8a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8b.style.width + '; height: 22px;" height="22">' + row8b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor8b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8c.style.width + '; height: 22px;" height="22">' + row8c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8d.style.width + '; height: 22px;" height="22">' + row8d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    } else if (rowsData20.value === "9") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5a.style.width + '; height: 22px;" height="22">' + row5a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor5a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5b.style.width + '; height: 22px;" height="22">' + row5b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5c.style.width + '; height: 22px;" height="22">' + row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5d.style.width + '; height: 22px;" height="22">' + row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6a.style.width + '; height: 22px;" height="22">' + row6a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor6a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6b.style.width + '; height: 22px;" height="22">' + row6b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6c.style.width + '; height: 22px;" height="22">' + row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6d.style.width + '; height: 22px;" height="22">' + row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7a.style.width + '; height: 22px;" height="22">' + row7a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor7a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7b.style.width + '; height: 22px;" height="22">' + row7b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7c.style.width + '; height: 22px;" height="22">' + row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7d.style.width + '; height: 22px;" height="22">' + row7d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8a.style.width + '; height: 22px;" height="22">' + row8a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor8a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8b.style.width + '; height: 22px;" height="22">' + row8b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor8b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8c.style.width + '; height: 22px;" height="22">' + row8c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8d.style.width + '; height: 22px;" height="22">' + row8d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9a.style.width + '; height: 22px;" height="22">' + row9a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor9a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9b.style.width + '; height: 22px;" height="22">' + row9b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor9b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9c.style.width + '; height: 22px;" height="22">' + row9c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9d.style.width + '; height: 22px;" height="22">' + row9d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    } else if (rowsData20.value === "10") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5a.style.width + '; height: 22px;" height="22">' + row5a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor5a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5b.style.width + '; height: 22px;" height="22">' + row5b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5c.style.width + '; height: 22px;" height="22">' + row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5d.style.width + '; height: 22px;" height="22">' + row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6a.style.width + '; height: 22px;" height="22">' + row6a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor6a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6b.style.width + '; height: 22px;" height="22">' + row6b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6c.style.width + '; height: 22px;" height="22">' + row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6d.style.width + '; height: 22px;" height="22">' + row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7a.style.width + '; height: 22px;" height="22">' + row7a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor7a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7b.style.width + '; height: 22px;" height="22">' + row7b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7c.style.width + '; height: 22px;" height="22">' + row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7d.style.width + '; height: 22px;" height="22">' + row7d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8a.style.width + '; height: 22px;" height="22">' + row8a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor8a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8b.style.width + '; height: 22px;" height="22">' + row8b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor8b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8c.style.width + '; height: 22px;" height="22">' + row8c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8d.style.width + '; height: 22px;" height="22">' + row8d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9a.style.width + '; height: 22px;" height="22">' + row9a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor9a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9b.style.width + '; height: 22px;" height="22">' + row9b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor9b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9c.style.width + '; height: 22px;" height="22">' + row9c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9d.style.width + '; height: 22px;" height="22">' + row9d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row10a.style.width + '; height: 22px;" height="22">' + row10a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor10a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row10b.style.width + '; height: 22px;" height="22">' + row10b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor10b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row10c.style.width + '; height: 22px;" height="22">' + row10c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row10d.style.width + '; height: 22px;" height="22">' + row10d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    }
});

// Highlight splitOutput Text
splitOutput.addEventListener("click", () => {
    splitOutput.select();
});

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
combo1Div.addEventListener("click", () => { // Toggles chart data bar dividers
    for (var i = 1; i < combo1DivNodes1.length; i++) {
        if (combo1Div.checked == true) {
            combo1DivNodes1[i].firstElementChild.style.borderTop = "1px solid #e3e3e3";
        } else if (combo1Div.checked == false) {
            combo1DivNodes1[i].firstElementChild.style.borderTop = "none";
        }
    }
});

// Combo Chart I Text/Color Legend
const legend4Text1 = document.getElementById("legend4Text1");
const legend4Text1x = document.getElementById("legend4Text1x");
legend4Text1x.oninput = function() {
    legend4Text1.innerHTML = legend4Text1x.value;
};
const legend4Text2 = document.getElementById("legend4Text2");
const legend4Text2x = document.getElementById("legend4Text2x");
legend4Text2x.oninput = function() {
    legend4Text2.innerHTML = legend4Text2x.value;
};
const legend4Color1 = document.getElementById("legend4Color1");
const legend4Color1x = document.getElementById("legend4Color1x");
legend4Color1x.oninput = function() {
    legend4Color1.style.color = legend4Color1x.value;
    legend4Color1.style.backgroundColor = legend4Color1x.value;
    legend4Color1.style.borderColor = legend4Color1x.value;
};
const legend4Color2 = document.getElementById("legend4Color2");
const legend4Color2x = document.getElementById("legend4Color2x");
legend4Color2x.oninput = function() {
    legend4Color2.style.color = legend4Color2x.value;
    legend4Color2.style.backgroundColor = legend4Color2x.value;
    legend4Color2.style.borderColor = legend4Color2x.value;
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
    if (combo1Text1t.value == "") {
        combo1Row1c.innerHTML = combo1Text1t.value;
    } else if (combo1Text1t.value) {
        combo1Row1c.innerHTML = "&nbsp;" + combo1Text1t.value;
    }
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
    if (combo1Text1b.value == "") {
        combo1Row1z.innerHTML = combo1Text1b.value;
    } else if (combo1Text1b.value) {
        combo1Row1z.innerHTML = "&nbsp;" + combo1Text1b.value;
    }
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
    if (combo1Text2t.value == "") {
        combo1Row2c.innerHTML = combo1Text2t.value;
    } else if (combo1Text2t.value) {
        combo1Row2c.innerHTML = "&nbsp;" + combo1Text2t.value;
    }
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
    if (combo1Text2b.value == "") {
        combo1Row2z.innerHTML = combo1Text2b.value;
    } else if (combo1Text2b.value) {
        combo1Row2z.innerHTML = "&nbsp;" + combo1Text2b.value;
    }
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
    if (combo1Text3t.value == "") {
        combo1Row3c.innerHTML = combo1Text3t.value;
    } else if (combo1Text3t.value) {
        combo1Row3c.innerHTML = "&nbsp;" + combo1Text3t.value;
    }
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
    if (combo1Text3b.value == "") {
        combo1Row3z.innerHTML = combo1Text3b.value;
    } else if (combo1Text3b.value) {
        combo1Row3z.innerHTML = "&nbsp;" + combo1Text3b.value;
    }
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
    if (combo1Text4t.value == "") {
        combo1Row4c.innerHTML = combo1Text4t.value;
    } else if (combo1Text4t.value) {
        combo1Row4c.innerHTML = "&nbsp;" + combo1Text4t.value;
    }
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
    if (combo1Text4b.value == "") {
        combo1Row4z.innerHTML = combo1Text4b.value;
    } else if (combo1Text4b.value) {
        combo1Row4z.innerHTML = "&nbsp;" + combo1Text4b.value;
    }
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
    if (combo1Text5t.value == "") {
        combo1Row5c.innerHTML = combo1Text5t.value;
    } else if (combo1Text5t.value) {
        combo1Row5c.innerHTML = "&nbsp;" + combo1Text5t.value;
    }
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
    if (combo1Text5b.value == "") {
        combo1Row5z.innerHTML = combo1Text5b.value;
    } else if (combo1Text5b.value) {
        combo1Row5z.innerHTML = "&nbsp;" + combo1Text5b.value;
    }
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
    if (combo1Text6t.value == "") {
        combo1Row6c.innerHTML = combo1Text6t.value;
    } else if (combo1Text6t.value) {
        combo1Row6c.innerHTML = "&nbsp;" + combo1Text6t.value;
    }
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
    if (combo1Text6b.value == "") {
        combo1Row6z.innerHTML = combo1Text6b.value;
    } else if (combo1Text6b.value) {
        combo1Row6z.innerHTML = "&nbsp;" + combo1Text6b.value;
    }
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

// Generate Combo1 HTML Chart Logic
const combo1Button = document.getElementById("combo1Button");
const combo1Output = document.getElementById("combo1Output");
combo1Button.addEventListener("click", () => {
    if (rowsData7.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <div style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0 0 20px 0; text-align: left;"><span style="background-color: ' + legend4Color1x.value + '; border: 1px solid ' + legend4Color1x.value + '; color: ' + legend4Color1x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend4Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend4Color2x.value + '; border: 1px solid ' + legend4Color2x.value + '; color: ' + legend4Color2x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend4Text2.innerHTML + '</div><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color1t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1b.style.width + '; height: 22px;" height="22">' + combo1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1c.style.width + '; height: 22px;" height="22">' + combo1Row1c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1y.style.width +'; height: 22px;" height="22">' + combo1Row1y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1z.style.width + '; height: 22px;" height="22">' + combo1Row1z.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        combo1Output.innerHTML = chartCode;
    } else if (rowsData7.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <div style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0 0 20px 0; text-align: left;"><span style="background-color: ' + legend4Color1x.value + '; border: 1px solid ' + legend4Color1x.value + '; color: ' + legend4Color1x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend4Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend4Color2x.value + '; border: 1px solid ' + legend4Color2x.value + '; color: ' + legend4Color2x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend4Text2.innerHTML + '</div><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color1t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1b.style.width + '; height: 22px;" height="22">' + combo1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1c.style.width + '; height: 22px;" height="22">' + combo1Row1c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1y.style.width +'; height: 22px;" height="22">' + combo1Row1y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1z.style.width + '; height: 22px;" height="22">' + combo1Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[1].firstElementChild.style.borderTop + '; padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color2t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2b.style.width + '; height: 22px;" height="22">' + combo1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2c.style.width + '; height: 22px;" height="22">' + combo1Row2c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color2b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2y.style.width +'; height: 22px;" height="22">' + combo1Row2y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2z.style.width + '; height: 22px;" height="22">' + combo1Row2z.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        combo1Output.innerHTML = chartCode;
    } else if (rowsData7.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <div style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0 0 20px 0; text-align: left;"><span style="background-color: ' + legend4Color1x.value + '; border: 1px solid ' + legend4Color1x.value + '; color: ' + legend4Color1x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend4Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend4Color2x.value + '; border: 1px solid ' + legend4Color2x.value + '; color: ' + legend4Color2x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend4Text2.innerHTML + '</div><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color1t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1b.style.width + '; height: 22px;" height="22">' + combo1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1c.style.width + '; height: 22px;" height="22">' + combo1Row1c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1y.style.width +'; height: 22px;" height="22">' + combo1Row1y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1z.style.width + '; height: 22px;" height="22">' + combo1Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[1].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color2t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2b.style.width + '; height: 22px;" height="22">' + combo1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2c.style.width + '; height: 22px;" height="22">' + combo1Row2c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color2b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2y.style.width +'; height: 22px;" height="22">' + combo1Row2y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2z.style.width + '; height: 22px;" height="22">' + combo1Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[2].firstElementChild.style.borderTop + '; padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color3t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3b.style.width + '; height: 22px;" height="22">' + combo1Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3c.style.width + '; height: 22px;" height="22">' + combo1Row3c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color3b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3y.style.width + '; height: 22px;" height="22">' + combo1Row3y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3z.style.width + '; height: 22px;" height="22">' + combo1Row3z.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        combo1Output.innerHTML = chartCode;
    } else if (rowsData7.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <div style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0 0 20px 0; text-align: left;"><span style="background-color: ' + legend4Color1x.value + '; border: 1px solid ' + legend4Color1x.value + '; color: ' + legend4Color1x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend4Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend4Color2x.value + '; border: 1px solid ' + legend4Color2x.value + '; color: ' + legend4Color2x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend4Text2.innerHTML + '</div><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color1t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1b.style.width + '; height: 22px;" height="22">' + combo1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1c.style.width + '; height: 22px;" height="22">' + combo1Row1c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1y.style.width +'; height: 22px;" height="22">' + combo1Row1y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1z.style.width + '; height: 22px;" height="22">' + combo1Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[1].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color2t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2b.style.width + '; height: 22px;" height="22">' + combo1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2c.style.width + '; height: 22px;" height="22">' + combo1Row2c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color2b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2y.style.width +'; height: 22px;" height="22">' + combo1Row2y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2z.style.width + '; height: 22px;" height="22">' + combo1Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[2].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color3t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3b.style.width + '; height: 22px;" height="22">' + combo1Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3c.style.width + '; height: 22px;" height="22">' + combo1Row3c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color3b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3y.style.width + '; height: 22px;" height="22">' + combo1Row3y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3z.style.width + '; height: 22px;" height="22">' + combo1Row3z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[3].firstElementChild.style.borderTop + '; padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color4t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4b.style.width + '; height: 22px;" height="22">' + combo1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4c.style.width + '; height: 22px;" height="22">' + combo1Row4c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color4b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4y.style.width + '; height: 22px;" height="22">' + combo1Row4y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4z.style.width + '; height: 22px;" height="22">' + combo1Row4z.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        combo1Output.innerHTML = chartCode;
    } else if (rowsData7.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <div style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0 0 20px 0; text-align: left;"><span style="background-color: ' + legend4Color1x.value + '; border: 1px solid ' + legend4Color1x.value + '; color: ' + legend4Color1x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend4Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend4Color2x.value + '; border: 1px solid ' + legend4Color2x.value + '; color: ' + legend4Color2x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend4Text2.innerHTML + '</div><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color1t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1b.style.width + '; height: 22px;" height="22">' + combo1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1c.style.width + '; height: 22px;" height="22">' + combo1Row1c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1y.style.width +'; height: 22px;" height="22">' + combo1Row1y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1z.style.width + '; height: 22px;" height="22">' + combo1Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[1].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color2t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2b.style.width + '; height: 22px;" height="22">' + combo1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2c.style.width + '; height: 22px;" height="22">' + combo1Row2c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color2b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2y.style.width +'; height: 22px;" height="22">' + combo1Row2y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2z.style.width + '; height: 22px;" height="22">' + combo1Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[2].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color3t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3b.style.width + '; height: 22px;" height="22">' + combo1Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3c.style.width + '; height: 22px;" height="22">' + combo1Row3c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color3b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3y.style.width + '; height: 22px;" height="22">' + combo1Row3y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3z.style.width + '; height: 22px;" height="22">' + combo1Row3z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[3].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color4t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4b.style.width + '; height: 22px;" height="22">' + combo1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4c.style.width + '; height: 22px;" height="22">' + combo1Row4c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color4b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4y.style.width + '; height: 22px;" height="22">' + combo1Row4y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4z.style.width + '; height: 22px;" height="22">' + combo1Row4z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[4].firstElementChild.style.borderTop + '; padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color5t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5b.style.width + '; height: 22px;" height="22">' + combo1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5c.style.width + '; height: 22px;" height="22">' + combo1Row5c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color5b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5y.style.width + '; height: 22px;" height="22">' + combo1Row5y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5z.style.width + '; height: 22px;" height="22">' + combo1Row5z.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        combo1Output.innerHTML = chartCode;
    } else if (rowsData7.value === "6") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <div style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0 0 20px 0; text-align: left;"><span style="background-color: ' + legend4Color1x.value + '; border: 1px solid ' + legend4Color1x.value + '; color: ' + legend4Color1x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend4Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend4Color2x.value + '; border: 1px solid ' + legend4Color2x.value + '; color: ' + legend4Color2x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend4Text2.innerHTML + '</div><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color1t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1b.style.width + '; height: 22px;" height="22">' + combo1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1c.style.width + '; height: 22px;" height="22">' + combo1Row1c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1y.style.width +'; height: 22px;" height="22">' + combo1Row1y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1z.style.width + '; height: 22px;" height="22">' + combo1Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[1].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color2t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2b.style.width + '; height: 22px;" height="22">' + combo1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2c.style.width + '; height: 22px;" height="22">' + combo1Row2c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color2b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2y.style.width +'; height: 22px;" height="22">' + combo1Row2y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2z.style.width + '; height: 22px;" height="22">' + combo1Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[2].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color3t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3b.style.width + '; height: 22px;" height="22">' + combo1Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3c.style.width + '; height: 22px;" height="22">' + combo1Row3c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color3b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3y.style.width + '; height: 22px;" height="22">' + combo1Row3y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3z.style.width + '; height: 22px;" height="22">' + combo1Row3z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[3].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color4t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4b.style.width + '; height: 22px;" height="22">' + combo1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4c.style.width + '; height: 22px;" height="22">' + combo1Row4c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color4b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4y.style.width + '; height: 22px;" height="22">' + combo1Row4y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4z.style.width + '; height: 22px;" height="22">' + combo1Row4z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[4].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color5t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5b.style.width + '; height: 22px;" height="22">' + combo1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5c.style.width + '; height: 22px;" height="22">' + combo1Row5c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color5b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5y.style.width + '; height: 22px;" height="22">' + combo1Row5y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5z.style.width + '; height: 22px;" height="22">' + combo1Row5z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[5].firstElementChild.style.borderTop + '; padding: 10px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color6t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row6b.style.width + '; height: 22px;" height="22">' + combo1Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row6c.style.width + '; height: 22px;" height="22">' + combo1Row6c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color6b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row6y.style.width + '; height: 22px;" height="22">' + combo1Row6y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row6z.style.width + '; height: 22px;" height="22">' + combo1Row6z.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        combo1Output.innerHTML = chartCode;
    }
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

// Combo Chart II Text/Color Legend
const legend8Text1 = document.getElementById("legend8Text1");
const legend8Text1x = document.getElementById("legend8Text1x");
legend8Text1x.oninput = function() {
    legend8Text1.innerHTML = legend8Text1x.value;
};
const legend8Text2 = document.getElementById("legend8Text2");
const legend8Text2x = document.getElementById("legend8Text2x");
legend8Text2x.oninput = function() {
    legend8Text2.innerHTML = legend8Text2x.value;
};
const legend8Color1 = document.getElementById("legend8Color1");
const legend8Color1x = document.getElementById("legend8Color1x");
legend8Color1x.oninput = function() {
    legend8Color1.style.color = legend8Color1x.value;
    legend8Color1.style.backgroundColor = legend8Color1x.value;
    legend8Color1.style.borderColor = legend8Color1x.value;
};
const legend8Color2 = document.getElementById("legend8Color2");
const legend8Color2x = document.getElementById("legend8Color2x");
legend8Color2x.oninput = function() {
    legend8Color2.style.color = legend8Color2x.value;
    legend8Color2.style.backgroundColor = legend8Color2x.value;
    legend8Color2.style.borderColor = legend8Color2x.value;
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
const combo2Row6a = document.getElementById("combo2Row6a");
const combo2Row6b = document.getElementById("combo2Row6b");
const combo2Row6c = document.getElementById("combo2Row6c");
const combo2Row6y = document.getElementById("combo2Row6y");
const combo2Row6z = document.getElementById("combo2Row6z");

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
    if (combo2Text1t.value == "") {
        combo2Row1c.innerHTML = combo2Text1t.value;
    } else if (combo2Text1t.value) {
        combo2Row1c.innerHTML = "&nbsp;" + combo2Text1t.value;
    }
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
    if (combo2Text1b.value == "") {
        combo2Row1z.innerHTML = combo2Text1b.value;
    } else if (combo2Text1b.value) {
        combo2Row1z.innerHTML = "&nbsp;" + combo2Text1b.value;
    }
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
    if (combo2Text2t.value == "") {
        combo2Row2c.innerHTML = combo2Text2t.value;
    } else if (combo2Text2t.value) {
        combo2Row2c.innerHTML = "&nbsp;" + combo2Text2t.value;
    }
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
    if (combo2Text2b.value == "") {
        combo2Row2z.innerHTML = combo2Text2b.value;
    } else if (combo2Text2b.value) {
        combo2Row2z.innerHTML = "&nbsp;" + combo2Text2b.value;
    }
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
    if (combo2Text3t.value == "") {
        combo2Row3c.innerHTML = combo2Text3t.value;
    } else if (combo2Text3t.value) {
        combo2Row3c.innerHTML = "&nbsp;" + combo2Text3t.value;
    }
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
    if (combo2Text3b.value == "") {
        combo2Row3z.innerHTML = combo2Text3b.value;
    } else if (combo2Text3b.value) {
        combo2Row3z.innerHTML = "&nbsp;" + combo2Text3b.value;
    }
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
    if (combo2Text4t.value == "") {
        combo2Row4c.innerHTML = combo2Text4t.value;
    } else if (combo2Text4t.value) {
        combo2Row4c.innerHTML = "&nbsp;" + combo2Text4t.value;
    }
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
    if (combo2Text4b.value == "") {
        combo2Row4z.innerHTML = combo2Text4b.value;
    } else if (combo2Text4b.value) {
        combo2Row4z.innerHTML = "&nbsp;" + combo2Text4b.value;
    }
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
    if (combo2Text5t.value == "") {
        combo2Row5c.innerHTML = combo2Text5t.value;
    } else if (combo2Text5t.value) {
        combo2Row5c.innerHTML = "&nbsp;" + combo2Text5t.value;
    }
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
    if (combo2Text5b.value == "") {
        combo2Row5z.innerHTML = combo2Text5b.value;
    } else if (combo2Text5b.value) {
        combo2Row5z.innerHTML = "&nbsp;" + combo2Text5b.value;
    }
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

// Generate Combo2 HTML Chart Logic
const combo2Button = document.getElementById("combo2Button");
const combo2Output = document.getElementById("combo2Output");
combo2Button.addEventListener("click", () => {
    if (rowsData19.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <div style="font-family: Verdana, sans-serif; font-size: 12px; margin: 0 0 20px 0; text-align: left;"><span style="background-color: ' + legend8Color1x.value + '; border: 1px solid ' + legend8Color1x.value + '; color: ' + legend8Color1x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend8Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend8Color2x.value + '; border: 1px solid ' + legend8Color2x.value + '; color: ' + legend8Color2x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend8Text2.innerHTML + '</div><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td colspan="2" align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22">' + combo2Row1a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1b.style.width + '; height: 22px;" height="22">' + combo2Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1c.style.width + '; height: 22px;" height="22">' + combo2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + combo2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1y.style.width + '; height: 22px;" height="22">' + combo2Row1y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1z.style.width + '; height: 22px;" height="22">' + combo2Row1z.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        combo2Output.innerHTML = chartCode;
    } else if (rowsData19.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <div style="font-family: Verdana, sans-serif; font-size: 12px; margin: 0 0 20px 0; text-align: left;"><span style="background-color: ' + legend8Color1x.value + '; border: 1px solid ' + legend8Color1x.value + '; color: ' + legend8Color1x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend8Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend8Color2x.value + '; border: 1px solid ' + legend8Color2x.value + '; color: ' + legend8Color2x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend8Text2.innerHTML + '</div><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td colspan="2" align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22">' + combo2Row1a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1b.style.width + '; height: 22px;" height="22">' + combo2Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1c.style.width + '; height: 22px;" height="22">' + combo2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + combo2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1y.style.width + '; height: 22px;" height="22">' + combo2Row1y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1z.style.width + '; height: 22px;" height="22">' + combo2Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td colspan="2" align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22">' + combo2Row2a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color2t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2b.style.width + '; height: 22px;" height="22">' + combo2Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2c.style.width + '; height: 22px;" height="22">' + combo2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + combo2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2y.style.width + '; height: 22px;" height="22">' + combo2Row2y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2z.style.width + '; height: 22px;" height="22">' + combo2Row2z.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        combo2Output.innerHTML = chartCode;
    } else if (rowsData19.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <div style="font-family: Verdana, sans-serif; font-size: 12px; margin: 0 0 20px 0; text-align: left;"><span style="background-color: ' + legend8Color1x.value + '; border: 1px solid ' + legend8Color1x.value + '; color: ' + legend8Color1x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend8Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend8Color2x.value + '; border: 1px solid ' + legend8Color2x.value + '; color: ' + legend8Color2x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend8Text2.innerHTML + '</div><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td colspan="2" align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22">' + combo2Row1a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1b.style.width + '; height: 22px;" height="22">' + combo2Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1c.style.width + '; height: 22px;" height="22">' + combo2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + combo2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1y.style.width + '; height: 22px;" height="22">' + combo2Row1y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1z.style.width + '; height: 22px;" height="22">' + combo2Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td colspan="2" align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22">' + combo2Row2a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color2t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2b.style.width + '; height: 22px;" height="22">' + combo2Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2c.style.width + '; height: 22px;" height="22">' + combo2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + combo2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2y.style.width + '; height: 22px;" height="22">' + combo2Row2y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2z.style.width + '; height: 22px;" height="22">' + combo2Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td colspan="2" align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22">' + combo2Row3a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color3t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3b.style.width + '; height: 22px;" height="22">' + combo2Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3c.style.width + '; height: 22px;" height="22">' + combo2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + combo2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3y.style.width + '; height: 22px;" height="22">' + combo2Row3y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3z.style.width + '; height: 22px;" height="22">' + combo2Row3z.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        combo2Output.innerHTML = chartCode;
    } else if (rowsData19.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <div style="font-family: Verdana, sans-serif; font-size: 12px; margin: 0 0 20px 0; text-align: left;"><span style="background-color: ' + legend8Color1x.value + '; border: 1px solid ' + legend8Color1x.value + '; color: ' + legend8Color1x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend8Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend8Color2x.value + '; border: 1px solid ' + legend8Color2x.value + '; color: ' + legend8Color2x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend8Text2.innerHTML + '</div><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td colspan="2" align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22">' + combo2Row1a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1b.style.width + '; height: 22px;" height="22">' + combo2Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1c.style.width + '; height: 22px;" height="22">' + combo2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + combo2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1y.style.width + '; height: 22px;" height="22">' + combo2Row1y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1z.style.width + '; height: 22px;" height="22">' + combo2Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td colspan="2" align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22">' + combo2Row2a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color2t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2b.style.width + '; height: 22px;" height="22">' + combo2Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2c.style.width + '; height: 22px;" height="22">' + combo2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + combo2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2y.style.width + '; height: 22px;" height="22">' + combo2Row2y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2z.style.width + '; height: 22px;" height="22">' + combo2Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td colspan="2" align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22">' + combo2Row3a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color3t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3b.style.width + '; height: 22px;" height="22">' + combo2Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3c.style.width + '; height: 22px;" height="22">' + combo2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + combo2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3y.style.width + '; height: 22px;" height="22">' + combo2Row3y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3z.style.width + '; height: 22px;" height="22">' + combo2Row3z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td colspan="2" align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22">' + combo2Row4a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color4t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row4b.style.width + '; height: 22px;" height="22">' + combo2Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row4c.style.width + '; height: 22px;" height="22">' + combo2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + combo2Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row4y.style.width + '; height: 22px;" height="22">' + combo2Row4y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row4z.style.width + '; height: 22px;" height="22">' + combo2Row4z.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        combo2Output.innerHTML = chartCode;
    } else if (rowsData19.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <div style="font-family: Verdana, sans-serif; font-size: 12px; margin: 0 0 20px 0; text-align: left;"><span style="background-color: ' + legend8Color1x.value + '; border: 1px solid ' + legend8Color1x.value + '; color: ' + legend8Color1x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend8Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend8Color2x.value + '; border: 1px solid ' + legend8Color2x.value + '; color: ' + legend8Color2x.value + '; font-family: Courier, serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;</span>&nbsp;' + legend8Text2.innerHTML + '</div><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td colspan="2" align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22">' + combo2Row1a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color1t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1b.style.width + '; height: 22px;" height="22">' + combo2Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1c.style.width + '; height: 22px;" height="22">' + combo2Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + combo2Color1b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1y.style.width + '; height: 22px;" height="22">' + combo2Row1y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row1z.style.width + '; height: 22px;" height="22">' + combo2Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td colspan="2" align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22">' + combo2Row2a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color2t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2b.style.width + '; height: 22px;" height="22">' + combo2Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2c.style.width + '; height: 22px;" height="22">' + combo2Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + combo2Color2b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2y.style.width + '; height: 22px;" height="22">' + combo2Row2y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row2z.style.width + '; height: 22px;" height="22">' + combo2Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td colspan="2" align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22">' + combo2Row3a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color3t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3b.style.width + '; height: 22px;" height="22">' + combo2Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3c.style.width + '; height: 22px;" height="22">' + combo2Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + combo2Color3b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3y.style.width + '; height: 22px;" height="22">' + combo2Row3y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row3z.style.width + '; height: 22px;" height="22">' + combo2Row3z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td colspan="2" align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22">' + combo2Row4a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color4t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row4b.style.width + '; height: 22px;" height="22">' + combo2Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row4c.style.width + '; height: 22px;" height="22">' + combo2Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + combo2Color4b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row4y.style.width + '; height: 22px;" height="22">' + combo2Row4y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row4z.style.width + '; height: 22px;" height="22">' + combo2Row4z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td colspan="2" align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 22px;" height="22">' + combo2Row5a.innerHTML + '</td></tr><tr> <td align="right" style="background-color: ' + combo2Color5t.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row5b.style.width + '; height: 22px;" height="22">' + combo2Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row5c.style.width + '; height: 22px;" height="22">' + combo2Row5c.innerHTML + '</td></tr></table> </td></tr><tr> <td style="padding: 3px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + combo2Color5b.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row5y.style.width + '; height: 22px;" height="22">' + combo2Row5y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo2Row5z.style.width + '; height: 22px;" height="22">' + combo2Row5z.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        combo2Output.innerHTML = chartCode;
    }
});
combo2Output.addEventListener("click", () => {
    combo2Output.select();
});