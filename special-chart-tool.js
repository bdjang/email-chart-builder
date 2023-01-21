// Negative Chart Row Selection
const negativeBars = document.getElementsByClassName("negativeBars");
const negativeControls = document.getElementsByClassName("negativeControls");
const rowsData12 = document.getElementById("rowsData12");
rowsData12.addEventListener("change", () => {
    for (var i = 0; i < negativeControls.length; i++) {
        negativeControls[i].style.display = "none";
        negativeBars[i].style.display = "none";
        for (var x = 0; x < rowsData12.value; x++) {
            negativeControls[x].style.display = "block";
            negativeBars[x].style.display = "block";
        }
    }
});

// Negative Row Customization Logic
const negativeRow1a = document.getElementById("negativeRow1a");
const negativeRow1b = document.getElementById("negativeRow1b");
const negativeRow1c = document.getElementById("negativeRow1c");
const negativeRow2a = document.getElementById("negativeRow2a");
const negativeRow2b = document.getElementById("negativeRow2b");
const negativeRow2c = document.getElementById("negativeRow2c");
const negativeRow3a = document.getElementById("negativeRow3a");
const negativeRow3b = document.getElementById("negativeRow3b");
const negativeRow3c = document.getElementById("negativeRow3c");
const negativeRow4a = document.getElementById("negativeRow4a");
const negativeRow4b = document.getElementById("negativeRow4b");
const negativeRow4c = document.getElementById("negativeRow4c");
const negativeRow5a = document.getElementById("negativeRow5a");
const negativeRow5b = document.getElementById("negativeRow5b");
const negativeRow5c = document.getElementById("negativeRow5c");
const negativeRow6a = document.getElementById("negativeRow6a");
const negativeRow6b = document.getElementById("negativeRow6b");
const negativeRow6c = document.getElementById("negativeRow6c");
const negativeRow7a = document.getElementById("negativeRow7a");
const negativeRow7b = document.getElementById("negativeRow7b");
const negativeRow7c = document.getElementById("negativeRow7c");
const negativeRow8a = document.getElementById("negativeRow8a");
const negativeRow8b = document.getElementById("negativeRow8b");
const negativeRow8c = document.getElementById("negativeRow8c");
const negativeRow9a = document.getElementById("negativeRow9a");
const negativeRow9b = document.getElementById("negativeRow9b");
const negativeRow9c = document.getElementById("negativeRow9c");
const negativeRow10a = document.getElementById("negativeRow10a");
const negativeRow10b = document.getElementById("negativeRow10b");
const negativeRow10c = document.getElementById("negativeRow10c");

// Negative Row 1 Customization Logic
const negativeText1a = document.getElementById("negativeText1a");
negativeText1a.oninput = function() {
    if (negativeText1a.value == "") {
        negativeRow1a.innerHTML = negativeText1a.value;
    } else if (negativeText1a.value) {
        negativeRow1a.innerHTML = negativeText1a.value;
    }
};
const negativeSize1 = document.getElementById("negativeSize1");
negativeSize1.oninput = function() {
    negativeRow1b.style.width = ((75 - (Math.abs(negativeSize1.value)) * .75)) + "%";
    negativeRow1c.style.width = ((Math.abs(negativeSize1.value)) * .75) + "%";
};
const negativeText1b = document.getElementById("negativeText1b");
negativeText1b.oninput = function() {
    if (negativeText1b.value == "") {
        negativeRow1c.innerHTML = negativeText1b.value;
    } else if (negativeText1b.value) {
        negativeRow1c.innerHTML = "&nbsp;" + negativeText1b.value;
    }
};
const negativeLabel1b = document.getElementById("negativeLabel1b");
negativeLabel1b.addEventListener("click", () => {
    if (negativeText1b.value == "") {
        negativeRow1b.innerHTML = "";
        negativeRow1c.innerHTML = "";
    } else if (negativeText1b.value) {
        negativeRow1b.innerHTML = negativeText1b.value + "&nbsp;";
        negativeText1b.value = "";
        negativeRow1c.innerHTML = "";
    }
});
const negativeColor1 = document.getElementById("negativeColor1");
negativeColor1.oninput = function() {
    negativeRow1c.style.backgroundColor = negativeColor1.value;
};

// Negative Row 2 Customization Logic
const negativeText2a = document.getElementById("negativeText2a");
negativeText2a.oninput = function() {
    if (negativeText2a.value == "") {
        negativeRow2a.innerHTML = negativeText2a.value;
    } else if (negativeText2a.value) {
        negativeRow2a.innerHTML = negativeText2a.value;
    }
};
const negativeSize2 = document.getElementById("negativeSize2");
negativeSize2.oninput = function() {
    negativeRow2b.style.width = ((75 - (Math.abs(negativeSize2.value)) * .75)) + "%";
    negativeRow2c.style.width = ((Math.abs(negativeSize2.value)) * .75) + "%";
};
const negativeText2b = document.getElementById("negativeText2b");
negativeText2b.oninput = function() {
    if (negativeText2b.value == "") {
        negativeRow2c.innerHTML = negativeText2b.value;
    } else if (negativeText2b.value) {
        negativeRow2c.innerHTML = "&nbsp;" + negativeText2b.value;
    }
};
const negativeLabel2b = document.getElementById("negativeLabel2b");
negativeLabel2b.addEventListener("click", () => {
    if (negativeText2b.value == "") {
        negativeRow2b.innerHTML = "";
        negativeRow2c.innerHTML = "";
    } else if (negativeText2b.value) {
        negativeRow2b.innerHTML = negativeText2b.value + "&nbsp;";
        negativeText2b.value = "";
        negativeRow2c.innerHTML = "";
    }
});
const negativeColor2 = document.getElementById("negativeColor2");
negativeColor2.oninput = function() {
    negativeRow2c.style.backgroundColor = negativeColor2.value;
};

// Negative Row 3 Customization Logic
const negativeText3a = document.getElementById("negativeText3a");
negativeText3a.oninput = function() {
    if (negativeText3a.value == "") {
        negativeRow3a.innerHTML = negativeText3a.value;
    } else if (negativeText3a.value) {
        negativeRow3a.innerHTML = negativeText3a.value;
    }
};
const negativeSize3 = document.getElementById("negativeSize3");
negativeSize3.oninput = function() {
    negativeRow3b.style.width = ((75 - (Math.abs(negativeSize3.value)) * .75)) + "%";
    negativeRow3c.style.width = ((Math.abs(negativeSize3.value)) * .75) + "%";
};
const negativeText3b = document.getElementById("negativeText3b");
negativeText3b.oninput = function() {
    if (negativeText3b.value == "") {
        negativeRow3c.innerHTML = negativeText3b.value;
    } else if (negativeText3b.value) {
        negativeRow3c.innerHTML = "&nbsp;" + negativeText3b.value;
    }
};
const negativeLabel3b = document.getElementById("negativeLabel3b");
negativeLabel3b.addEventListener("click", () => {
    if (negativeText3b.value == "") {
        negativeRow3b.innerHTML = "";
        negativeRow3c.innerHTML = "";
    } else if (negativeText3b.value) {
        negativeRow3b.innerHTML = negativeText3b.value + "&nbsp;";
        negativeText3b.value = "";
        negativeRow3c.innerHTML = "";
    }
});
const negativeColor3 = document.getElementById("negativeColor3");
negativeColor3.oninput = function() {
    negativeRow3c.style.backgroundColor = negativeColor3.value;
};

// Negative Row 4 Customization Logic
const negativeText4a = document.getElementById("negativeText4a");
negativeText4a.oninput = function() {
    if (negativeText4a.value == "") {
        negativeRow4a.innerHTML = negativeText4a.value;
    } else if (negativeText4a.value) {
        negativeRow4a.innerHTML = negativeText4a.value;
    }
};
const negativeSize4 = document.getElementById("negativeSize4");
negativeSize4.oninput = function() {
    negativeRow4b.style.width = ((75 - (Math.abs(negativeSize4.value)) * .75)) + "%";
    negativeRow4c.style.width = ((Math.abs(negativeSize4.value)) * .75) + "%";
};
const negativeText4b = document.getElementById("negativeText4b");
negativeText4b.oninput = function() {
    if (negativeText4b.value == "") {
        negativeRow4c.innerHTML = negativeText4b.value;
    } else if (negativeText4b.value) {
        negativeRow4c.innerHTML = "&nbsp;" + negativeText4b.value;
    }
};
const negativeLabel4b = document.getElementById("negativeLabel4b");
negativeLabel4b.addEventListener("click", () => {
    if (negativeText4b.value == "") {
        negativeRow4b.innerHTML = "";
        negativeRow4c.innerHTML = "";
    } else if (negativeText4b.value) {
        negativeRow4b.innerHTML = negativeText4b.value + "&nbsp;";
        negativeText4b.value = "";
        negativeRow4c.innerHTML = "";
    }
});
const negativeColor4 = document.getElementById("negativeColor4");
negativeColor4.oninput = function() {
    negativeRow4c.style.backgroundColor = negativeColor4.value;
};

// Negative Row 5 Customization Logic
const negativeText5a = document.getElementById("negativeText5a");
negativeText5a.oninput = function() {
    if (negativeText5a.value == "") {
        negativeRow5a.innerHTML = negativeText5a.value;
    } else if (negativeText5a.value) {
        negativeRow5a.innerHTML = negativeText5a.value;
    }
};
const negativeSize5 = document.getElementById("negativeSize5");
negativeSize5.oninput = function() {
    negativeRow5b.style.width = ((75 - (Math.abs(negativeSize5.value)) * .75)) + "%";
    negativeRow5c.style.width = ((Math.abs(negativeSize5.value)) * .75) + "%";
};
const negativeText5b = document.getElementById("negativeText5b");
negativeText5b.oninput = function() {
    if (negativeText5b.value == "") {
        negativeRow5c.innerHTML = negativeText5b.value;
    } else if (negativeText5b.value) {
        negativeRow5c.innerHTML = "&nbsp;" + negativeText5b.value;
    }
};
const negativeLabel5b = document.getElementById("negativeLabel5b");
negativeLabel5b.addEventListener("click", () => {
    if (negativeText5b.value == "") {
        negativeRow5b.innerHTML = "";
        negativeRow5c.innerHTML = "";
    } else if (negativeText5b.value) {
        negativeRow5b.innerHTML = negativeText5b.value + "&nbsp;";
        negativeText5b.value = "";
        negativeRow5c.innerHTML = "";
    }
});
const negativeColor5 = document.getElementById("negativeColor5");
negativeColor5.oninput = function() {
    negativeRow5c.style.backgroundColor = negativeColor5.value;
};

// Negative Row 6 Customization Logic
const negativeText6a = document.getElementById("negativeText6a");
negativeText6a.oninput = function() {
    if (negativeText6a.value == "") {
        negativeRow6a.innerHTML = negativeText6a.value;
    } else if (negativeText6a.value) {
        negativeRow6a.innerHTML = negativeText6a.value;
    }
};
const negativeSize6 = document.getElementById("negativeSize6");
negativeSize6.oninput = function() {
    negativeRow6b.style.width = ((75 - (Math.abs(negativeSize6.value)) * .75)) + "%";
    negativeRow6c.style.width = ((Math.abs(negativeSize6.value)) * .75) + "%";
};
const negativeText6b = document.getElementById("negativeText6b");
negativeText6b.oninput = function() {
    if (negativeText6b.value == "") {
        negativeRow6c.innerHTML = negativeText6b.value;
    } else if (negativeText6b.value) {
        negativeRow6c.innerHTML = "&nbsp;" + negativeText6b.value;
    }
};
const negativeLabel6b = document.getElementById("negativeLabel6b");
negativeLabel6b.addEventListener("click", () => {
    if (negativeText6b.value == "") {
        negativeRow6b.innerHTML = "";
        negativeRow6c.innerHTML = "";
    } else if (negativeText6b.value) {
        negativeRow6b.innerHTML = negativeText6b.value + "&nbsp;";
        negativeText6b.value = "";
        negativeRow6c.innerHTML = "";
    }
});
const negativeColor6 = document.getElementById("negativeColor6");
negativeColor6.oninput = function() {
    negativeRow6c.style.backgroundColor = negativeColor6.value;
};

// Negative Row 7 Customization Logic
const negativeText7a = document.getElementById("negativeText7a");
negativeText7a.oninput = function() {
    if (negativeText7a.value == "") {
        negativeRow7a.innerHTML = negativeText7a.value;
    } else if (negativeText7a.value) {
        negativeRow7a.innerHTML = negativeText7a.value;
    }
};
const negativeSize7 = document.getElementById("negativeSize7");
negativeSize7.oninput = function() {
    negativeRow7b.style.width = ((75 - (Math.abs(negativeSize7.value)) * .75)) + "%";
    negativeRow7c.style.width = ((Math.abs(negativeSize7.value)) * .75) + "%";
};
const negativeText7b = document.getElementById("negativeText7b");
negativeText7b.oninput = function() {
    if (negativeText7b.value == "") {
        negativeRow7c.innerHTML = negativeText7b.value;
    } else if (negativeText7b.value) {
        negativeRow7c.innerHTML = "&nbsp;" + negativeText7b.value;
    }
};
const negativeLabel7b = document.getElementById("negativeLabel7b");
negativeLabel7b.addEventListener("click", () => {
    if (negativeText7b.value == "") {
        negativeRow7b.innerHTML = "";
        negativeRow7c.innerHTML = "";
    } else if (negativeText7b.value) {
        negativeRow7b.innerHTML = negativeText7b.value + "&nbsp;";
        negativeText7b.value = "";
        negativeRow7c.innerHTML = "";
    }
});
const negativeColor7 = document.getElementById("negativeColor7");
negativeColor7.oninput = function() {
    negativeRow7c.style.backgroundColor = negativeColor7.value;
};

// Negative Row 8 Customization Logic
const negativeText8a = document.getElementById("negativeText8a");
negativeText8a.oninput = function() {
    if (negativeText8a.value == "") {
        negativeRow8a.innerHTML = negativeText8a.value;
    } else if (negativeText8a.value) {
        negativeRow8a.innerHTML = negativeText8a.value;
    }
};
const negativeSize8 = document.getElementById("negativeSize8");
negativeSize8.oninput = function() {
    negativeRow8b.style.width = ((75 - (Math.abs(negativeSize8.value)) * .75)) + "%";
    negativeRow8c.style.width = ((Math.abs(negativeSize8.value)) * .75) + "%";
};
const negativeText8b = document.getElementById("negativeText8b");
negativeText8b.oninput = function() {
    if (negativeText8b.value == "") {
        negativeRow8c.innerHTML = negativeText8b.value;
    } else if (negativeText8b.value) {
        negativeRow8c.innerHTML = "&nbsp;" + negativeText8b.value;
    }
};
const negativeLabel8b = document.getElementById("negativeLabel8b");
negativeLabel8b.addEventListener("click", () => {
    if (negativeText8b.value == "") {
        negativeRow8b.innerHTML = "";
        negativeRow8c.innerHTML = "";
    } else if (negativeText8b.value) {
        negativeRow8b.innerHTML = negativeText8b.value + "&nbsp;";
        negativeText8b.value = "";
        negativeRow8c.innerHTML = "";
    }
});
const negativeColor8 = document.getElementById("negativeColor8");
negativeColor8.oninput = function() {
    negativeRow8c.style.backgroundColor = negativeColor8.value;
};

// Negative Row 9 Customization Logic
const negativeText9a = document.getElementById("negativeText9a");
negativeText9a.oninput = function() {
    if (negativeText9a.value == "") {
        negativeRow9a.innerHTML = negativeText9a.value;
    } else if (negativeText9a.value) {
        negativeRow9a.innerHTML = negativeText9a.value;
    }
};
const negativeSize9 = document.getElementById("negativeSize9");
negativeSize9.oninput = function() {
    negativeRow9b.style.width = ((75 - (Math.abs(negativeSize9.value)) * .75)) + "%";
    negativeRow9c.style.width = ((Math.abs(negativeSize9.value)) * .75) + "%";
};
const negativeText9b = document.getElementById("negativeText9b");
negativeText9b.oninput = function() {
    if (negativeText9b.value == "") {
        negativeRow9c.innerHTML = negativeText9b.value;
    } else if (negativeText9b.value) {
        negativeRow9c.innerHTML = "&nbsp;" + negativeText9b.value;
    }
};
const negativeLabel9b = document.getElementById("negativeLabel9b");
negativeLabel9b.addEventListener("click", () => {
    if (negativeText9b.value == "") {
        negativeRow9b.innerHTML = "";
        negativeRow9c.innerHTML = "";
    } else if (negativeText9b.value) {
        negativeRow9b.innerHTML = negativeText9b.value + "&nbsp;";
        negativeText9b.value = "";
        negativeRow9c.innerHTML = "";
    }
});
const negativeColor9 = document.getElementById("negativeColor9");
negativeColor9.oninput = function() {
    negativeRow9c.style.backgroundColor = negativeColor9.value;
};

// Negative Row 10 Customization Logic
const negativeText10a = document.getElementById("negativeText10a");
negativeText10a.oninput = function() {
    if (negativeText10a.value == "") {
        negativeRow10a.innerHTML = negativeText10a.value;
    } else if (negativeText10a.value) {
        negativeRow10a.innerHTML = negativeText10a.value;
    }
};
const negativeSize10 = document.getElementById("negativeSize10");
negativeSize10.oninput = function() {
    negativeRow10b.style.width = ((75 - (Math.abs(negativeSize10.value)) * .75)) + "%";
    negativeRow10c.style.width = ((Math.abs(negativeSize10.value)) * .75) + "%";
};
const negativeText10b = document.getElementById("negativeText10b");
negativeText10b.oninput = function() {
    if (negativeText10b.value == "") {
        negativeRow10c.innerHTML = negativeText10b.value;
    } else if (negativeText10b.value) {
        negativeRow10c.innerHTML = "&nbsp;" + negativeText10b.value;
    }
};
const negativeLabel10b = document.getElementById("negativeLabel10b");
negativeLabel10b.addEventListener("click", () => {
    if (negativeText10b.value == "") {
        negativeRow10b.innerHTML = "";
        negativeRow10c.innerHTML = "";
    } else if (negativeText10b.value) {
        negativeRow10b.innerHTML = negativeText10b.value + "&nbsp;";
        negativeText10b.value = "";
        negativeRow10c.innerHTML = "";
    }
});
const negativeColor10 = document.getElementById("negativeColor10");
negativeColor10.oninput = function() {
    negativeRow10c.style.backgroundColor = negativeColor10.value;
};

// Generate Negative HTML Chart Logic
const negativeButton = document.getElementById("negativeButton");
const negativeOutput = document.getElementById("negativeOutput");
negativeButton.addEventListener("click", () => {
    if (rowsData12.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1b.style.width + '; height: 28px;" height="28">' + negativeRow1b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1c.style.width + '; height: 28px;" height="28">' + negativeRow1c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negativeOutput.innerHTML = chartCode;
    } else if (rowsData12.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1b.style.width + '; height: 28px;" height="28">' + negativeRow1b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1c.style.width + '; height: 28px;" height="28">' + negativeRow1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow2a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow2b.style.width + '; height: 28px;" height="28">' + negativeRow2b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow2c.style.width + '; height: 28px;" height="28">' + negativeRow2c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negativeOutput.innerHTML = chartCode;
    } else if (rowsData12.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1b.style.width + '; height: 28px;" height="28">' + negativeRow1b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1c.style.width + '; height: 28px;" height="28">' + negativeRow1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow2a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow2b.style.width + '; height: 28px;" height="28">' + negativeRow2b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow2c.style.width + '; height: 28px;" height="28">' + negativeRow2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow3a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow3b.style.width + '; height: 28px;" height="28">' + negativeRow3b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow3c.style.width + '; height: 28px;" height="28">' + negativeRow3c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negativeOutput.innerHTML = chartCode;
    } else if (rowsData12.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1b.style.width + '; height: 28px;" height="28">' + negativeRow1b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1c.style.width + '; height: 28px;" height="28">' + negativeRow1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow2a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow2b.style.width + '; height: 28px;" height="28">' + negativeRow2b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow2c.style.width + '; height: 28px;" height="28">' + negativeRow2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow3a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow3b.style.width + '; height: 28px;" height="28">' + negativeRow3b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow3c.style.width + '; height: 28px;" height="28">' + negativeRow3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow4a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow4b.style.width + '; height: 28px;" height="28">' + negativeRow4b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow4c.style.width + '; height: 28px;" height="28">' + negativeRow4c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negativeOutput.innerHTML = chartCode;
    } else if (rowsData12.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1b.style.width + '; height: 28px;" height="28">' + negativeRow1b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1c.style.width + '; height: 28px;" height="28">' + negativeRow1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow2a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow2b.style.width + '; height: 28px;" height="28">' + negativeRow2b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow2c.style.width + '; height: 28px;" height="28">' + negativeRow2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow3a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow3b.style.width + '; height: 28px;" height="28">' + negativeRow3b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow3c.style.width + '; height: 28px;" height="28">' + negativeRow3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow4a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow4b.style.width + '; height: 28px;" height="28">' + negativeRow4b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow4c.style.width + '; height: 28px;" height="28">' + negativeRow4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow5a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow5b.style.width + '; height: 28px;" height="28">' + negativeRow5b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow5c.style.width + '; height: 28px;" height="28">' + negativeRow5c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negativeOutput.innerHTML = chartCode;
    } else if (rowsData12.value === "6") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1b.style.width + '; height: 28px;" height="28">' + negativeRow1b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1c.style.width + '; height: 28px;" height="28">' + negativeRow1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow2a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow2b.style.width + '; height: 28px;" height="28">' + negativeRow2b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow2c.style.width + '; height: 28px;" height="28">' + negativeRow2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow3a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow3b.style.width + '; height: 28px;" height="28">' + negativeRow3b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow3c.style.width + '; height: 28px;" height="28">' + negativeRow3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow4a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow4b.style.width + '; height: 28px;" height="28">' + negativeRow4b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow4c.style.width + '; height: 28px;" height="28">' + negativeRow4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow5a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow5b.style.width + '; height: 28px;" height="28">' + negativeRow5b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow5c.style.width + '; height: 28px;" height="28">' + negativeRow5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow6a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow6b.style.width + '; height: 28px;" height="28">' + negativeRow6b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow6c.style.width + '; height: 28px;" height="28">' + negativeRow6c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negativeOutput.innerHTML = chartCode;
    } else if (rowsData12.value === "7") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1b.style.width + '; height: 28px;" height="28">' + negativeRow1b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1c.style.width + '; height: 28px;" height="28">' + negativeRow1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow2a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow2b.style.width + '; height: 28px;" height="28">' + negativeRow2b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow2c.style.width + '; height: 28px;" height="28">' + negativeRow2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow3a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow3b.style.width + '; height: 28px;" height="28">' + negativeRow3b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow3c.style.width + '; height: 28px;" height="28">' + negativeRow3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow4a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow4b.style.width + '; height: 28px;" height="28">' + negativeRow4b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow4c.style.width + '; height: 28px;" height="28">' + negativeRow4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow5a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow5b.style.width + '; height: 28px;" height="28">' + negativeRow5b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow5c.style.width + '; height: 28px;" height="28">' + negativeRow5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow6a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow6b.style.width + '; height: 28px;" height="28">' + negativeRow6b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow6c.style.width + '; height: 28px;" height="28">' + negativeRow6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow7a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow7b.style.width + '; height: 28px;" height="28">' + negativeRow7b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow7c.style.width + '; height: 28px;" height="28">' + negativeRow7c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negativeOutput.innerHTML = chartCode;
    } else if (rowsData12.value === "8") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1b.style.width + '; height: 28px;" height="28">' + negativeRow1b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1c.style.width + '; height: 28px;" height="28">' + negativeRow1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow2a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow2b.style.width + '; height: 28px;" height="28">' + negativeRow2b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow2c.style.width + '; height: 28px;" height="28">' + negativeRow2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow3a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow3b.style.width + '; height: 28px;" height="28">' + negativeRow3b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow3c.style.width + '; height: 28px;" height="28">' + negativeRow3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow4a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow4b.style.width + '; height: 28px;" height="28">' + negativeRow4b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow4c.style.width + '; height: 28px;" height="28">' + negativeRow4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow5a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow5b.style.width + '; height: 28px;" height="28">' + negativeRow5b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow5c.style.width + '; height: 28px;" height="28">' + negativeRow5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow6a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow6b.style.width + '; height: 28px;" height="28">' + negativeRow6b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow6c.style.width + '; height: 28px;" height="28">' + negativeRow6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow7a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow7b.style.width + '; height: 28px;" height="28">' + negativeRow7b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow7c.style.width + '; height: 28px;" height="28">' + negativeRow7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow8a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow8b.style.width + '; height: 28px;" height="28">' + negativeRow8b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow8c.style.width + '; height: 28px;" height="28">' + negativeRow8c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negativeOutput.innerHTML = chartCode;
    } else if (rowsData12.value === "9") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1b.style.width + '; height: 28px;" height="28">' + negativeRow1b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1c.style.width + '; height: 28px;" height="28">' + negativeRow1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow2a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow2b.style.width + '; height: 28px;" height="28">' + negativeRow2b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow2c.style.width + '; height: 28px;" height="28">' + negativeRow2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow3a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow3b.style.width + '; height: 28px;" height="28">' + negativeRow3b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow3c.style.width + '; height: 28px;" height="28">' + negativeRow3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow4a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow4b.style.width + '; height: 28px;" height="28">' + negativeRow4b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow4c.style.width + '; height: 28px;" height="28">' + negativeRow4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow5a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow5b.style.width + '; height: 28px;" height="28">' + negativeRow5b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow5c.style.width + '; height: 28px;" height="28">' + negativeRow5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow6a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow6b.style.width + '; height: 28px;" height="28">' + negativeRow6b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow6c.style.width + '; height: 28px;" height="28">' + negativeRow6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow7a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow7b.style.width + '; height: 28px;" height="28">' + negativeRow7b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow7c.style.width + '; height: 28px;" height="28">' + negativeRow7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow8a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow8b.style.width + '; height: 28px;" height="28">' + negativeRow8b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow8c.style.width + '; height: 28px;" height="28">' + negativeRow8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow9a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow9b.style.width + '; height: 28px;" height="28">' + negativeRow9b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow9c.style.width + '; height: 28px;" height="28">' + negativeRow9c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negativeOutput.innerHTML = chartCode;
    } else if (rowsData12.value === "10") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #c4c4c4; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow1a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1b.style.width + '; height: 28px;" height="28">' + negativeRow1b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor1.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow1c.style.width + '; height: 28px;" height="28">' + negativeRow1c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow2a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow2b.style.width + '; height: 28px;" height="28">' + negativeRow2b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor2.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow2c.style.width + '; height: 28px;" height="28">' + negativeRow2c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow3a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow3b.style.width + '; height: 28px;" height="28">' + negativeRow3b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor3.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow3c.style.width + '; height: 28px;" height="28">' + negativeRow3c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow4a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow4b.style.width + '; height: 28px;" height="28">' + negativeRow4b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor4.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow4c.style.width + '; height: 28px;" height="28">' + negativeRow4c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow5a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow5b.style.width + '; height: 28px;" height="28">' + negativeRow5b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor5.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow5c.style.width + '; height: 28px;" height="28">' + negativeRow5c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow6a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow6b.style.width + '; height: 28px;" height="28">' + negativeRow6b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor6.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow6c.style.width + '; height: 28px;" height="28">' + negativeRow6c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow7a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow7b.style.width + '; height: 28px;" height="28">' + negativeRow7b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor7.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow7c.style.width + '; height: 28px;" height="28">' + negativeRow7c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow8a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow8b.style.width + '; height: 28px;" height="28">' + negativeRow8b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor8.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow8c.style.width + '; height: 28px;" height="28">' + negativeRow8c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow9a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow9b.style.width + '; height: 28px;" height="28">' + negativeRow9b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor9.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow9c.style.width + '; height: 28px;" height="28">' + negativeRow9c.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 5px 0 5px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 28px;" height="28">' + negativeRow10a.innerHTML + '</td><td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow10b.style.width + '; height: 28px;" height="28">' + negativeRow10b.innerHTML + '</td><td align="left" style="background-color: ' + negativeColor10.value + '; color: #000000; font-weight: 400; font-size: 14px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + negativeRow10c.style.width + '; height: 28px;" height="28">' + negativeRow10c.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        negativeOutput.innerHTML = chartCode;
    }
});
negativeOutput.addEventListener("click", () => {
    negativeOutput.select();
});

// Negative/Positive (Split) Chart Row Selection
const splitBars = document.getElementsByClassName("splitBars");
const splitControls = document.getElementsByClassName("splitControls");
const rowsData = document.getElementById("rowsData");
rowsData.addEventListener("change", () => {
    for (var i = 0; i < splitControls.length; i++) {
        splitControls[i].style.display = "none";
        splitBars[i].style.display = "none";
        for (var x = 0; x < rowsData.value; x++) {
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
    if (rowsData.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    } else if (rowsData.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    } else if (rowsData.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    } else if (rowsData.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    } else if (rowsData.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5a.style.width + '; height: 22px;" height="22">' + row5a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor5a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5b.style.width + '; height: 22px;" height="22">' + row5b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5c.style.width + '; height: 22px;" height="22">' + row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5d.style.width + '; height: 22px;" height="22">' + row5d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    } else if (rowsData.value === "6") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5a.style.width + '; height: 22px;" height="22">' + row5a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor5a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5b.style.width + '; height: 22px;" height="22">' + row5b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5c.style.width + '; height: 22px;" height="22">' + row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5d.style.width + '; height: 22px;" height="22">' + row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6a.style.width + '; height: 22px;" height="22">' + row6a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor6a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6b.style.width + '; height: 22px;" height="22">' + row6b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6c.style.width + '; height: 22px;" height="22">' + row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6d.style.width + '; height: 22px;" height="22">' + row6d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    } else if (rowsData.value === "7") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5a.style.width + '; height: 22px;" height="22">' + row5a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor5a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5b.style.width + '; height: 22px;" height="22">' + row5b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5c.style.width + '; height: 22px;" height="22">' + row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5d.style.width + '; height: 22px;" height="22">' + row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6a.style.width + '; height: 22px;" height="22">' + row6a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor6a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6b.style.width + '; height: 22px;" height="22">' + row6b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6c.style.width + '; height: 22px;" height="22">' + row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6d.style.width + '; height: 22px;" height="22">' + row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7a.style.width + '; height: 22px;" height="22">' + row7a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor7a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7b.style.width + '; height: 22px;" height="22">' + row7b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7c.style.width + '; height: 22px;" height="22">' + row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7d.style.width + '; height: 22px;" height="22">' + row7d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    } else if (rowsData.value === "8") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5a.style.width + '; height: 22px;" height="22">' + row5a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor5a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5b.style.width + '; height: 22px;" height="22">' + row5b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5c.style.width + '; height: 22px;" height="22">' + row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5d.style.width + '; height: 22px;" height="22">' + row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6a.style.width + '; height: 22px;" height="22">' + row6a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor6a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6b.style.width + '; height: 22px;" height="22">' + row6b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6c.style.width + '; height: 22px;" height="22">' + row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6d.style.width + '; height: 22px;" height="22">' + row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7a.style.width + '; height: 22px;" height="22">' + row7a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor7a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7b.style.width + '; height: 22px;" height="22">' + row7b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7c.style.width + '; height: 22px;" height="22">' + row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7d.style.width + '; height: 22px;" height="22">' + row7d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8a.style.width + '; height: 22px;" height="22">' + row8a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor8a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8b.style.width + '; height: 22px;" height="22">' + row8b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor8b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8c.style.width + '; height: 22px;" height="22">' + row8c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8d.style.width + '; height: 22px;" height="22">' + row8d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    } else if (rowsData.value === "9") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5a.style.width + '; height: 22px;" height="22">' + row5a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor5a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5b.style.width + '; height: 22px;" height="22">' + row5b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5c.style.width + '; height: 22px;" height="22">' + row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5d.style.width + '; height: 22px;" height="22">' + row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6a.style.width + '; height: 22px;" height="22">' + row6a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor6a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6b.style.width + '; height: 22px;" height="22">' + row6b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6c.style.width + '; height: 22px;" height="22">' + row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6d.style.width + '; height: 22px;" height="22">' + row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7a.style.width + '; height: 22px;" height="22">' + row7a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor7a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7b.style.width + '; height: 22px;" height="22">' + row7b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7c.style.width + '; height: 22px;" height="22">' + row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7d.style.width + '; height: 22px;" height="22">' + row7d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8a.style.width + '; height: 22px;" height="22">' + row8a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor8a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8b.style.width + '; height: 22px;" height="22">' + row8b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor8b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8c.style.width + '; height: 22px;" height="22">' + row8c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8d.style.width + '; height: 22px;" height="22">' + row8d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9a.style.width + '; height: 22px;" height="22">' + row9a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor9a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9b.style.width + '; height: 22px;" height="22">' + row9b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor9b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9c.style.width + '; height: 22px;" height="22">' + row9c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9d.style.width + '; height: 22px;" height="22">' + row9d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    } else if (rowsData.value === "10") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 640px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1a.style.width + '; height: 22px;" height="22">' + row1a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor1a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1b.style.width + '; height: 22px;" height="22">' + row1b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor1b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1c.style.width + '; height: 22px;" height="22">' + row1c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row1d.style.width + '; height: 22px;" height="22">' + row1d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2a.style.width + '; height: 22px;" height="22">' + row2a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor2a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2b.style.width + '; height: 22px;" height="22">' + row2b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor2b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2c.style.width + '; height: 22px;" height="22">' + row2c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row2d.style.width + '; height: 22px;" height="22">' + row2d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3a.style.width + '; height: 22px;" height="22">' + row3a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor3a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3b.style.width + '; height: 22px;" height="22">' + row3b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor3b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3c.style.width + '; height: 22px;" height="22">' + row3c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row3d.style.width + '; height: 22px;" height="22">' + row3d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4a.style.width + '; height: 22px;" height="22">' + row4a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor4a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4b.style.width + '; height: 22px;" height="22">' + row4b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor4b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4c.style.width + '; height: 22px;" height="22">' + row4c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row4d.style.width + '; height: 22px;" height="22">' + row4d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5a.style.width + '; height: 22px;" height="22">' + row5a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor5a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5b.style.width + '; height: 22px;" height="22">' + row5b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor5b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5c.style.width + '; height: 22px;" height="22">' + row5c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row5d.style.width + '; height: 22px;" height="22">' + row5d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6a.style.width + '; height: 22px;" height="22">' + row6a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor6a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6b.style.width + '; height: 22px;" height="22">' + row6b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor6b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6c.style.width + '; height: 22px;" height="22">' + row6c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row6d.style.width + '; height: 22px;" height="22">' + row6d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7a.style.width + '; height: 22px;" height="22">' + row7a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor7a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7b.style.width + '; height: 22px;" height="22">' + row7b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor7b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7c.style.width + '; height: 22px;" height="22">' + row7c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row7d.style.width + '; height: 22px;" height="22">' + row7d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8a.style.width + '; height: 22px;" height="22">' + row8a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor8a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8b.style.width + '; height: 22px;" height="22">' + row8b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor8b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8c.style.width + '; height: 22px;" height="22">' + row8c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row8d.style.width + '; height: 22px;" height="22">' + row8d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9a.style.width + '; height: 22px;" height="22">' + row9a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor9a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9b.style.width + '; height: 22px;" height="22">' + row9b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor9b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9c.style.width + '; height: 22px;" height="22">' + row9c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row9d.style.width + '; height: 22px;" height="22">' + row9d.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="padding: 1px 0 0 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="right" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row10a.style.width + '; height: 22px;" height="22">' + row10a.innerHTML + '</td><td align="left" style="background-color: ' + rowColor10a.value + '; border-right: 1px solid #000000; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row10b.style.width + '; height: 22px;" height="22">' + row10b.innerHTML + '</td><td align="right" style="background-color: ' + rowColor10b.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row10c.style.width + '; height: 22px;" height="22">' + row10c.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + row10d.style.width + '; height: 22px;" height="22">' + row10d.innerHTML + '</td></tr></table> </td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        splitOutput.innerHTML = chartCode;
    }
});

// Highlight splitOutput Text
splitOutput.addEventListener("click", () => {
    splitOutput.select();
});









// Combo Chart Row Selection
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

// Horizontal Chart III Add Divider
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

// Combo Chart Text/Color Legend
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
};
const legend4Color2 = document.getElementById("legend4Color2");
const legend4Color2x = document.getElementById("legend4Color2x");
legend4Color2x.oninput = function() {
    legend4Color2.style.color = legend4Color2x.value;
    legend4Color2.style.backgroundColor = legend4Color2x.value;
};

// Combo Chart Row Customization Logic
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
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color1t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1b.style.width + '; height: 22px;" height="22">' + combo1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1c.style.width + '; height: 22px;" height="22">' + combo1Row1c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color1b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1y.style.width +'; height: 22px;" height="22">' + combo1Row1y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1z.style.width + '; height: 22px;" height="22">' + combo1Row1z.innerHTML + '</td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend4Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend4Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend4Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend4Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend4Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend4Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        combo1Output.innerHTML = chartCode;
    } else if (rowsData7.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color1t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1b.style.width + '; height: 22px;" height="22">' + combo1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1c.style.width + '; height: 22px;" height="22">' + combo1Row1c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color1b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1y.style.width +'; height: 22px;" height="22">' + combo1Row1y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1z.style.width + '; height: 22px;" height="22">' + combo1Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[1].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color2t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2b.style.width + '; height: 22px;" height="22">' + combo1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2c.style.width + '; height: 22px;" height="22">' + combo1Row2c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color2b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2y.style.width +'; height: 22px;" height="22">' + combo1Row2y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2z.style.width + '; height: 22px;" height="22">' + combo1Row2z.innerHTML + '</td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend4Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend4Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend4Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend4Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend4Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend4Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        combo1Output.innerHTML = chartCode;
    } else if (rowsData7.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color1t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1b.style.width + '; height: 22px;" height="22">' + combo1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1c.style.width + '; height: 22px;" height="22">' + combo1Row1c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color1b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1y.style.width +'; height: 22px;" height="22">' + combo1Row1y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1z.style.width + '; height: 22px;" height="22">' + combo1Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[1].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color2t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2b.style.width + '; height: 22px;" height="22">' + combo1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2c.style.width + '; height: 22px;" height="22">' + combo1Row2c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color2b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2y.style.width +'; height: 22px;" height="22">' + combo1Row2y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2z.style.width + '; height: 22px;" height="22">' + combo1Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[2].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color3t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3b.style.width + '; height: 22px;" height="22">' + combo1Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3c.style.width + '; height: 22px;" height="22">' + combo1Row3c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color3b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3y.style.width + '; height: 22px;" height="22">' + combo1Row3y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3z.style.width + '; height: 22px;" height="22">' + combo1Row3z.innerHTML + '</td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend4Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend4Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend4Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend4Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend4Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend4Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        combo1Output.innerHTML = chartCode;
    } else if (rowsData7.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color1t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1b.style.width + '; height: 22px;" height="22">' + combo1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1c.style.width + '; height: 22px;" height="22">' + combo1Row1c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color1b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1y.style.width +'; height: 22px;" height="22">' + combo1Row1y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1z.style.width + '; height: 22px;" height="22">' + combo1Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[1].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color2t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2b.style.width + '; height: 22px;" height="22">' + combo1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2c.style.width + '; height: 22px;" height="22">' + combo1Row2c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color2b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2y.style.width +'; height: 22px;" height="22">' + combo1Row2y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2z.style.width + '; height: 22px;" height="22">' + combo1Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[2].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color3t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3b.style.width + '; height: 22px;" height="22">' + combo1Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3c.style.width + '; height: 22px;" height="22">' + combo1Row3c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color3b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3y.style.width + '; height: 22px;" height="22">' + combo1Row3y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3z.style.width + '; height: 22px;" height="22">' + combo1Row3z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[3].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color4t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4b.style.width + '; height: 22px;" height="22">' + combo1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4c.style.width + '; height: 22px;" height="22">' + combo1Row4c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color4b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4y.style.width + '; height: 22px;" height="22">' + combo1Row4y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4z.style.width + '; height: 22px;" height="22">' + combo1Row4z.innerHTML + '</td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend4Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend4Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend4Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend4Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend4Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend4Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        combo1Output.innerHTML = chartCode;
    } else if (rowsData7.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color1t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1b.style.width + '; height: 22px;" height="22">' + combo1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1c.style.width + '; height: 22px;" height="22">' + combo1Row1c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color1b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1y.style.width +'; height: 22px;" height="22">' + combo1Row1y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1z.style.width + '; height: 22px;" height="22">' + combo1Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[1].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color2t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2b.style.width + '; height: 22px;" height="22">' + combo1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2c.style.width + '; height: 22px;" height="22">' + combo1Row2c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color2b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2y.style.width +'; height: 22px;" height="22">' + combo1Row2y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2z.style.width + '; height: 22px;" height="22">' + combo1Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[2].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color3t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3b.style.width + '; height: 22px;" height="22">' + combo1Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3c.style.width + '; height: 22px;" height="22">' + combo1Row3c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color3b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3y.style.width + '; height: 22px;" height="22">' + combo1Row3y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3z.style.width + '; height: 22px;" height="22">' + combo1Row3z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[3].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color4t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4b.style.width + '; height: 22px;" height="22">' + combo1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4c.style.width + '; height: 22px;" height="22">' + combo1Row4c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color4b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4y.style.width + '; height: 22px;" height="22">' + combo1Row4y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4z.style.width + '; height: 22px;" height="22">' + combo1Row4z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[4].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color5t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5b.style.width + '; height: 22px;" height="22">' + combo1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5c.style.width + '; height: 22px;" height="22">' + combo1Row5c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color5b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5y.style.width + '; height: 22px;" height="22">' + combo1Row5y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5z.style.width + '; height: 22px;" height="22">' + combo1Row5z.innerHTML + '</td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend4Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend4Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend4Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend4Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend4Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend4Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        combo1Output.innerHTML = chartCode;
    } else if (rowsData7.value === "6") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;"> <tr> <td align="left" valign="top" bgcolor="#ffffff" style="background-color: #ffffff; border: 1px solid #e3e3e3; margin: 0; padding: 20px; width: 100%;"> <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="left" style="padding: 0 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row1a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color1t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1b.style.width + '; height: 22px;" height="22">' + combo1Row1b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1c.style.width + '; height: 22px;" height="22">' + combo1Row1c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color1b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1y.style.width +'; height: 22px;" height="22">' + combo1Row1y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row1z.style.width + '; height: 22px;" height="22">' + combo1Row1z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[1].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row2a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color2t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2b.style.width + '; height: 22px;" height="22">' + combo1Row2b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2c.style.width + '; height: 22px;" height="22">' + combo1Row2c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color2b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2y.style.width +'; height: 22px;" height="22">' + combo1Row2y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row2z.style.width + '; height: 22px;" height="22">' + combo1Row2z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[2].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row3a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color3t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3b.style.width + '; height: 22px;" height="22">' + combo1Row3b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3c.style.width + '; height: 22px;" height="22">' + combo1Row3c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color3b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3y.style.width + '; height: 22px;" height="22">' + combo1Row3y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row3z.style.width + '; height: 22px;" height="22">' + combo1Row3z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[3].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row4a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color4t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4b.style.width + '; height: 22px;" height="22">' + combo1Row4b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4c.style.width + '; height: 22px;" height="22">' + combo1Row4c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color4b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4y.style.width + '; height: 22px;" height="22">' + combo1Row4y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row4z.style.width + '; height: 22px;" height="22">' + combo1Row4z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[4].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row5a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color5t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5b.style.width + '; height: 22px;" height="22">' + combo1Row5b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5c.style.width + '; height: 22px;" height="22">' + combo1Row5c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color5b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5y.style.width + '; height: 22px;" height="22">' + combo1Row5y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row5z.style.width + '; height: 22px;" height="22">' + combo1Row5z.innerHTML + '</td></tr></table> </td></tr><tr> <td align="left" style="border-top: ' + combo1DivNodes1[5].firstElementChild.style.borderTop + '; padding: 10px 0 10px 0;"> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; vertical-align: bottom; width: 25%; height: 22px;" height="22">' + combo1Row6a.innerHTML + '</td><td align="right" style="background-color: ' + combo1Color6t.value + '; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row6b.style.width + '; height: 22px;" height="22">' + combo1Row6b.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row6c.style.width + '; height: 22px;" height="22">' + combo1Row6c.innerHTML + '</td></tr></table> <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" class="chartMobile"> <tr> <td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: 25%; height: 22px;" height="22"></td><td align="right" style="background-color: ' + combo1Color6b.value +'; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row6y.style.width + '; height: 22px;" height="22">' + combo1Row6y.innerHTML + '</td><td align="left" style="background-color: #ffffff; color: #000000; font-weight: 400; font-size: 12px; font-family: Courier, sans-serif; line-height: normal; margin: 0; padding: 0; width: ' + combo1Row6z.style.width + '; height: 22px;" height="22">' + combo1Row6z.innerHTML + '</td></tr></table> </td></tr></table> <div style="font-family: Courier; font-size: 14px; margin: 40px 0 0 0; text-align: center;"><span style="background-color: ' + legend4Color1x.value + '; border: 1px solid #c4c4c4; color: ' + legend4Color1x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend4Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend4Color2x.value + '; border: 1px solid #c4c4c4; color: ' + legend4Color2x.value + '; font-family: Courier; font-size: 18px; vertical-align: middle;">&nbsp;&nbsp;</span> ' + legend4Text2.innerHTML + '</div></td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        combo1Output.innerHTML = chartCode;
    }
});
combo1Output.addEventListener("click", () => {
    combo1Output.select();
});