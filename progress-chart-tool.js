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
let prog1capCode = "";
const prog1Cap = document.getElementById("prog1Cap"); // Caption or chart title
const prog1capText = document.getElementById("prog1capText"); // Caption or chart title text
prog1capText.oninput = function() {
    prog1Cap.innerHTML = prog1capText.value;
    if (prog1capText.value == "") {
        prog1Cap.style.marginBottom = "0";
        return prog1capCode = "";
    } else if (prog1capText.value) {
        prog1Cap.style.marginBottom = "20px";
        return prog1capCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + prog1Cap.innerHTML + '</caption>';
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
        return prog1srcCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; padding-top: 40px; text-align: left;">' + prog1Source.innerHTML + '</td></tr>';
    }
};

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
const prog1Button = document.getElementById("prog1Button");
const prog1Output = document.getElementById("prog1Output");
prog1Button.addEventListener("click", () => {
    if (rowsData8.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog1capCode + ' <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog1Row1a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1b.style.width + '; height: 28px;" height="28">' + prog1Row1b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1c.style.width + '; height: 28px;" height="28">' + prog1Row1c.innerHTML + '</td></tr></table> </td></tr>' + prog1srcCode + ' </table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        prog1Output.innerHTML = chartCode;
    } else if (rowsData8.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog1capCode + ' <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog1Row1a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1b.style.width + '; height: 28px;" height="28">' + prog1Row1b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1c.style.width + '; height: 28px;" height="28">' + prog1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog1Row2a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row2b.style.width + '; height: 28px;" height="28">' + prog1Row2b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row2c.style.width + '; height: 28px;" height="28">' + prog1Row2c.innerHTML + '</td></tr></table> </td></tr>' + prog1srcCode + ' </table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        prog1Output.innerHTML = chartCode;
    } else if (rowsData8.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog1capCode + ' <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog1Row1a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1b.style.width + '; height: 28px;" height="28">' + prog1Row1b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1c.style.width + '; height: 28px;" height="28">' + prog1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog1Row2a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row2b.style.width + '; height: 28px;" height="28">' + prog1Row2b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row2c.style.width + '; height: 28px;" height="28">' + prog1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog1Row3a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row3b.style.width + '; height: 28px;" height="28">' + prog1Row3b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row3c.style.width + '; height: 28px;" height="28">' + prog1Row3c.innerHTML + '</td></tr></table> </td></tr>' + prog1srcCode + ' </table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        prog1Output.innerHTML = chartCode;
    } else if (rowsData8.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog1capCode + ' <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog1Row1a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1b.style.width + '; height: 28px;" height="28">' + prog1Row1b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1c.style.width + '; height: 28px;" height="28">' + prog1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog1Row2a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row2b.style.width + '; height: 28px;" height="28">' + prog1Row2b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row2c.style.width + '; height: 28px;" height="28">' + prog1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog1Row3a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row3b.style.width + '; height: 28px;" height="28">' + prog1Row3b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row3c.style.width + '; height: 28px;" height="28">' + prog1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog1Row4a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog1Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row4b.style.width + '; height: 28px;" height="28">' + prog1Row4b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row4c.style.width + '; height: 28px;" height="28">' + prog1Row4c.innerHTML + '</td></tr></table> </td></tr>' + prog1srcCode + ' </table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        prog1Output.innerHTML = chartCode;
    } else if (rowsData8.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog1capCode + ' <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog1Row1a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog1Color1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1b.style.width + '; height: 28px;" height="28">' + prog1Row1b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row1c.style.width + '; height: 28px;" height="28">' + prog1Row1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog1Row2a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog1Color2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row2b.style.width + '; height: 28px;" height="28">' + prog1Row2b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row2c.style.width + '; height: 28px;" height="28">' + prog1Row2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog1Row3a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog1Color3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row3b.style.width + '; height: 28px;" height="28">' + prog1Row3b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row3c.style.width + '; height: 28px;" height="28">' + prog1Row3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog1Row4a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog1Color4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row4b.style.width + '; height: 28px;" height="28">' + prog1Row4b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row4c.style.width + '; height: 28px;" height="28">' + prog1Row4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog1Row5a.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog1Color5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row5b.style.width + '; height: 28px;" height="28">' + prog1Row5b.innerHTML + '</td><td align="left" style="background-color: #e3e3e3; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog1Row5c.style.width + '; height: 28px;" height="28">' + prog1Row5c.innerHTML + '</td></tr></table> </td></tr>' + prog1srcCode + ' </table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        prog1Output.innerHTML = chartCode;
    }
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
let prog2capCode = "";
const prog2Cap = document.getElementById("prog2Cap"); // Caption or chart title
const prog2capText = document.getElementById("prog2capText"); // Caption or chart title text
prog2capText.oninput = function() {
    prog2Cap.innerHTML = prog2capText.value;
    if (prog2capText.value == "") {
        prog2Cap.style.marginBottom = "0";
        return prog2capCode = "";
    } else if (prog2capText.value) {
        prog2Cap.style.marginBottom = "20px";
        return prog2capCode = '<caption style="caption-side: top; color: #000000; font-family: Verdana, sans-serif; font-size: 16px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: left;">' + prog2Cap.innerHTML + '</caption>';
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
        return prog2srcCode = '<tr> <td style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; padding-top: 40px; text-align: left;">' + prog2Source.innerHTML + '</td></tr>';
    }
};

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
const prog2Button = document.getElementById("prog2Button");
const prog2Output = document.getElementById("prog2Output");
prog2Button.addEventListener("click", () => {
    if (rowsData9.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog2capCode + ' <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog2Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML1cInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML1b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color1.value + '" stroke="false"> <v:textbox inset="' + prog2VML1bInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1b.innerHTML + '</span> </v:textbox> </v:roundrect><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog2Color1.value + '; border-radius: ' + prog2Row1b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1b.style.width + '; height: 28px;" height="28">' + prog2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1c.style.width + '; height: 28px;" height="28">' + prog2Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog2srcCode + ' </table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        prog2Output.innerHTML = chartCode;
    } else if (rowsData9.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog2capCode + ' <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog2Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML1cInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML1b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color1.value + '" stroke="false"> <v:textbox inset="' + prog2VML1bInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1b.innerHTML + '</span> </v:textbox> </v:roundrect><div>&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog2Color1.value + '; border-radius: ' + prog2Row1b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1b.style.width + '; height: 28px;" height="28">' + prog2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1c.style.width + '; height: 28px;" height="28">' + prog2Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog2Row2a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML2cInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row2c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML2b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color2.value + '" stroke="false"> <v:textbox inset="' + prog2VML2bInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row2b.innerHTML + '</span> </v:textbox> </v:roundrect><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog2Color2.value + '; border-radius: ' + prog2Row2b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row2b.style.width + '; height: 28px;" height="28">' + prog2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row2c.style.width + '; height: 28px;" height="28">' + prog2Row2c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog2srcCode + ' </table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        prog2Output.innerHTML = chartCode;
    } else if (rowsData9.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog2capCode + ' <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog2Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML1cInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML1b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color1.value + '" stroke="false"> <v:textbox inset="' + prog2VML1bInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1b.innerHTML + '</span> </v:textbox> </v:roundrect><div>&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog2Color1.value + '; border-radius: ' + prog2Row1b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1b.style.width + '; height: 28px;" height="28">' + prog2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1c.style.width + '; height: 28px;" height="28">' + prog2Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog2Row2a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML2cInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row2c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML2b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color2.value + '" stroke="false"> <v:textbox inset="' + prog2VML2bInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row2b.innerHTML + '</span> </v:textbox> </v:roundrect><div>&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog2Color2.value + '; border-radius: ' + prog2Row2b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row2b.style.width + '; height: 28px;" height="28">' + prog2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row2c.style.width + '; height: 28px;" height="28">' + prog2Row2c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog2Row3a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML3cInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row3c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML3b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color3.value + '" stroke="false"> <v:textbox inset="' + prog2VML3bInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row3b.innerHTML + '</span> </v:textbox> </v:roundrect><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog2Color3.value + '; border-radius: ' + prog2Row3b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row3b.style.width + '; height: 28px;" height="28">' + prog2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row3c.style.width + '; height: 28px;" height="28">' + prog2Row3c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog2srcCode + ' </table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        prog2Output.innerHTML = chartCode;
    } else if (rowsData9.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog2capCode + ' <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog2Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML1cInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML1b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color1.value + '" stroke="false"> <v:textbox inset="' + prog2VML1bInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1b.innerHTML + '</span> </v:textbox> </v:roundrect><div>&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog2Color1.value + '; border-radius: ' + prog2Row1b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1b.style.width + '; height: 28px;" height="28">' + prog2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1c.style.width + '; height: 28px;" height="28">' + prog2Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog2Row2a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML2cInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row2c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML2b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color2.value + '" stroke="false"> <v:textbox inset="' + prog2VML2bInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row2b.innerHTML + '</span> </v:textbox> </v:roundrect><div>&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog2Color2.value + '; border-radius: ' + prog2Row2b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row2b.style.width + '; height: 28px;" height="28">' + prog2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row2c.style.width + '; height: 28px;" height="28">' + prog2Row2c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog2Row3a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML3cInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row3c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML3b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color3.value + '" stroke="false"> <v:textbox inset="' + prog2VML3bInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row3b.innerHTML + '</span> </v:textbox> </v:roundrect><div>&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog2Color3.value + '; border-radius: ' + prog2Row3b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row3b.style.width + '; height: 28px;" height="28">' + prog2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row3c.style.width + '; height: 28px;" height="28">' + prog2Row3c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog2Row4a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML4cInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row4c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML4b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color4.value + '" stroke="false"> <v:textbox inset="' + prog2VML4bInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row4b.innerHTML + '</span> </v:textbox> </v:roundrect><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog2Color4.value + '; border-radius: ' + prog2Row4b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row4b.style.width + '; height: 28px;" height="28">' + prog2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row4c.style.width + '; height: 28px;" height="28">' + prog2Row4c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog2srcCode + ' </table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        prog2Output.innerHTML = chartCode;
    } else if (rowsData9.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> ' + prog2capCode + ' <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog2Row1a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML1cInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML1b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color1.value + '" stroke="false"> <v:textbox inset="' + prog2VML1bInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row1b.innerHTML + '</span> </v:textbox> </v:roundrect><div>&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog2Color1.value + '; border-radius: ' + prog2Row1b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1b.style.width + '; height: 28px;" height="28">' + prog2Row1b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row1c.style.width + '; height: 28px;" height="28">' + prog2Row1c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog2Row2a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML2cInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row2c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML2b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color2.value + '" stroke="false"> <v:textbox inset="' + prog2VML2bInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row2b.innerHTML + '</span> </v:textbox> </v:roundrect><div>&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog2Color2.value + '; border-radius: ' + prog2Row2b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row2b.style.width + '; height: 28px;" height="28">' + prog2Row2b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row2c.style.width + '; height: 28px;" height="28">' + prog2Row2c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog2Row3a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML3cInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row3c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML3b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color3.value + '" stroke="false"> <v:textbox inset="' + prog2VML3bInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row3b.innerHTML + '</span> </v:textbox> </v:roundrect><div>&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog2Color3.value + '; border-radius: ' + prog2Row3b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row3b.style.width + '; height: 28px;" height="28">' + prog2Row3b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row3c.style.width + '; height: 28px;" height="28">' + prog2Row3c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog2Row4a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML4cInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row4c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML4b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color4.value + '" stroke="false"> <v:textbox inset="' + prog2VML4bInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row4b.innerHTML + '</span> </v:textbox> </v:roundrect><div>&nbsp;</div><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog2Color4.value + '; border-radius: ' + prog2Row4b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row4b.style.width + '; height: 28px;" height="28">' + prog2Row4b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row4c.style.width + '; height: 28px;" height="28">' + prog2Row4c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr><tr> <td align="left" style="padding: 14px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: auto; height: 28px;" height="28">' + prog2Row5a.innerHTML + '</td></tr></table><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: 560px; position: relative; z-index: 0;" arcsize="50%" fill="true" fillcolor="#e3e3e3" stroke="false"> <v:textbox inset="' + prog2VML5cInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row5c.innerHTML + '</span> </v:textbox> </v:roundrect> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="height: 28px; width: ' + prog2VML5b + 'px; position: relative; z-index: 1;" arcsize="50%" fill="true" fillcolor="' + prog2Color5.value + '" stroke="false"> <v:textbox inset="' + prog2VML5bInset + 'px, 0px, 0px, 0px"> <span style="font-family: Verdana, sans-serif; font-size: 14px; color: #000000;">' + prog2Row5b.innerHTML + '</span> </v:textbox> </v:roundrect><![endif]--><!--[if !mso]><!--> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #e3e3e3; border-radius: 15px;" class="chartMobile"> <tr> <td align="right" style="background-color: ' + prog2Color5.value + '; border-radius: ' + prog2Row5b.style.borderRadius + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row5b.style.width + '; height: 28px;" height="28">' + prog2Row5b.innerHTML + '</td><td align="left" style="color: #000000; font-weight: 400; font-size: 14px; font-family: Verdana, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + prog2Row5c.style.width + '; height: 28px;" height="28">' + prog2Row5c.innerHTML + '</td></tr></table> <!--<![endif]--> </td></tr>' + prog2srcCode + ' </table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        prog2Output.innerHTML = chartCode;
    }
});
prog2Output.addEventListener("click", () => {
    prog2Output.select();
});