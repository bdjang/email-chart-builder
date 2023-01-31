// Vertical Chart I Row Selection
const vert1AxisLine = document.getElementById("vert1AxisLine");
const vert1Width = document.getElementById("vert1Width");
const vert1Bars = document.getElementsByClassName("vert1Bars");
const vert1AxisLabel = document.getElementsByClassName("vert1AxisLabel");
const vert1Controls = document.getElementsByClassName("vert1Controls");
const rowsData14 = document.getElementById("rowsData14");
rowsData14.addEventListener("change", () => {
    for (var i = 0; i < vert1Controls.length; i++) {
        vert1Controls[i].style.display = "none";
        vert1Bars[i].style.display = "none";
        vert1AxisLabel[i].style.display = "none";
        for (var x = 0; x < rowsData14.value; x++) {
            vert1Controls[x].style.display = "";
            vert1Bars[x].style.display = "";
            vert1AxisLabel[x].style.display = "";
        }
    }
    vert1Width.style.maxWidth = rowsData14.value * 50 + 'px';
    vert1AxisLine.colSpan = rowsData14.value;
});

// Row 1 Customization Logic
const vert1Row1a = document.getElementById("vert1Row1a"); // Top vertical bar label
const vert1Text1a = document.getElementById("vert1Text1a");
vert1Text1a.oninput = function() {
    vert1Row1a.innerHTML = vert1Text1a.value;
};
const vert1Row1c = document.getElementById("vert1Row1c"); // Axis label
const vert1Text1c = document.getElementById("vert1Text1c");
vert1Text1c.oninput = function() {
    vert1Row1c.innerHTML = vert1Text1c.value;
};
const vert1Size1 = document.getElementById("vert1Size1");
vert1Size1.oninput = function() {
    vert1Row1b.height = ((Math.abs(vert1Size1.value) / 100) * 300);
};
const vert1Color1 = document.getElementById("vert1Color1");
vert1Color1.oninput = function() {
    vert1Row1b.style.backgroundColor = vert1Color1.value;
};

// Row 2 Customization Logic
const vert1Row2a = document.getElementById("vert1Row2a"); // Top vertical bar label
const vert1Text2a = document.getElementById("vert1Text2a");
vert1Text2a.oninput = function() {
    vert1Row2a.innerHTML = vert1Text2a.value;
};
const vert1Row2c = document.getElementById("vert1Row2c"); // Axis label
const vert1Text2c = document.getElementById("vert1Text2c");
vert1Text2c.oninput = function() {
    vert1Row2c.innerHTML = vert1Text2c.value;
};
const vert1Size2 = document.getElementById("vert1Size2");
vert1Size2.oninput = function() {
    vert1Row2b.height = ((Math.abs(vert1Size2.value) / 100) * 300);
};
const vert1Color2 = document.getElementById("vert1Color2");
vert1Color2.oninput = function() {
    vert1Row2b.style.backgroundColor = vert1Color2.value;
};

// Row 3 Customization Logic
const vert1Row3a = document.getElementById("vert1Row3a"); // Top vertical bar label
const vert1Text3a = document.getElementById("vert1Text3a");
vert1Text3a.oninput = function() {
    vert1Row3a.innerHTML = vert1Text3a.value;
};
const vert1Row3c = document.getElementById("vert1Row3c"); // Axis label
const vert1Text3c = document.getElementById("vert1Text3c");
vert1Text3c.oninput = function() {
    vert1Row3c.innerHTML = vert1Text3c.value;
};
const vert1Size3 = document.getElementById("vert1Size3");
vert1Size3.oninput = function() {
    vert1Row3b.height = ((Math.abs(vert1Size3.value) / 100) * 300);
};
const vert1Color3 = document.getElementById("vert1Color3");
vert1Color3.oninput = function() {
    vert1Row3b.style.backgroundColor = vert1Color3.value;
};

// Row 4 Customization Logic
const vert1Row4a = document.getElementById("vert1Row4a"); // Top vertical bar label
const vert1Text4a = document.getElementById("vert1Text4a");
vert1Text4a.oninput = function() {
    vert1Row4a.innerHTML = vert1Text4a.value;
};
const vert1Row4c = document.getElementById("vert1Row4c"); // Axis label
const vert1Text4c = document.getElementById("vert1Text4c");
vert1Text4c.oninput = function() {
    vert1Row4c.innerHTML = vert1Text4c.value;
};
const vert1Size4 = document.getElementById("vert1Size4");
vert1Size4.oninput = function() {
    vert1Row4b.height = ((Math.abs(vert1Size4.value) / 100) * 300);
};
const vert1Color4 = document.getElementById("vert1Color4");
vert1Color4.oninput = function() {
    vert1Row4b.style.backgroundColor = vert1Color4.value;
};

// Row 5 Customization Logic
const vert1Row5a = document.getElementById("vert1Row5a"); // Top vertical bar label
const vert1Text5a = document.getElementById("vert1Text5a");
vert1Text5a.oninput = function() {
    vert1Row5a.innerHTML = vert1Text5a.value;
};
const vert1Row5c = document.getElementById("vert1Row5c"); // Axis label
const vert1Text5c = document.getElementById("vert1Text5c");
vert1Text5c.oninput = function() {
    vert1Row5c.innerHTML = vert1Text5c.value;
};
const vert1Size5 = document.getElementById("vert1Size5");
vert1Size5.oninput = function() {
    vert1Row5b.height = ((Math.abs(vert1Size5.value) / 100) * 300);
};
const vert1Color5 = document.getElementById("vert1Color5");
vert1Color5.oninput = function() {
    vert1Row5b.style.backgroundColor = vert1Color5.value;
};

// Row 6 Customization Logic
const vert1Row6a = document.getElementById("vert1Row6a"); // Top vertical bar label
const vert1Text6a = document.getElementById("vert1Text6a");
vert1Text6a.oninput = function() {
    vert1Row6a.innerHTML = vert1Text6a.value;
};
const vert1Row6c = document.getElementById("vert1Row6c"); // Axis label
const vert1Text6c = document.getElementById("vert1Text6c");
vert1Text6c.oninput = function() {
    vert1Row6c.innerHTML = vert1Text6c.value;
};
const vert1Size6 = document.getElementById("vert1Size6");
vert1Size6.oninput = function() {
    vert1Row6b.height = ((Math.abs(vert1Size6.value) / 100) * 300);
};
const vert1Color6 = document.getElementById("vert1Color6");
vert1Color6.oninput = function() {
    vert1Row6b.style.backgroundColor = vert1Color6.value;
};

// Row 7 Customization Logic
const vert1Row7a = document.getElementById("vert1Row7a"); // Top vertical bar label
const vert1Text7a = document.getElementById("vert1Text7a");
vert1Text7a.oninput = function() {
    vert1Row7a.innerHTML = vert1Text7a.value;
};
const vert1Row7c = document.getElementById("vert1Row7c"); // Axis label
const vert1Text7c = document.getElementById("vert1Text7c");
vert1Text7c.oninput = function() {
    vert1Row7c.innerHTML = vert1Text7c.value;
};
const vert1Size7 = document.getElementById("vert1Size7");
vert1Size7.oninput = function() {
    vert1Row7b.height = ((Math.abs(vert1Size7.value) / 100) * 300);
};
const vert1Color7 = document.getElementById("vert1Color7");
vert1Color7.oninput = function() {
    vert1Row7b.style.backgroundColor = vert1Color7.value;
};

// Row 8 Customization Logic
const vert1Row8a = document.getElementById("vert1Row8a"); // Top vertical bar label
const vert1Text8a = document.getElementById("vert1Text8a");
vert1Text8a.oninput = function() {
    vert1Row8a.innerHTML = vert1Text8a.value;
};
const vert1Row8c = document.getElementById("vert1Row8c"); // Axis label
const vert1Text8c = document.getElementById("vert1Text8c");
vert1Text8c.oninput = function() {
    vert1Row8c.innerHTML = vert1Text8c.value;
};
const vert1Size8 = document.getElementById("vert1Size8");
vert1Size8.oninput = function() {
    vert1Row8b.height = ((Math.abs(vert1Size8.value) / 100) * 300);
};
const vert1Color8 = document.getElementById("vert1Color8");
vert1Color8.oninput = function() {
    vert1Row8b.style.backgroundColor = vert1Color8.value;
};

// Row 9 Customization Logic
const vert1Row9a = document.getElementById("vert1Row9a"); // Top vertical bar label
const vert1Text9a = document.getElementById("vert1Text9a");
vert1Text9a.oninput = function() {
    vert1Row9a.innerHTML = vert1Text9a.value;
};
const vert1Row9c = document.getElementById("vert1Row9c"); // Axis label
const vert1Text9c = document.getElementById("vert1Text9c");
vert1Text9c.oninput = function() {
    vert1Row9c.innerHTML = vert1Text9c.value;
};
const vert1Size9 = document.getElementById("vert1Size9");
vert1Size9.oninput = function() {
    vert1Row9b.height = ((Math.abs(vert1Size9.value) / 100) * 300);
};
const vert1Color9 = document.getElementById("vert1Color9");
vert1Color9.oninput = function() {
    vert1Row9b.style.backgroundColor = vert1Color9.value;
};

// Row 10 Customization Logic
const vert1Row10a = document.getElementById("vert1Row10a"); // Top vertical bar label
const vert1Text10a = document.getElementById("vert1Text10a");
vert1Text10a.oninput = function() {
    vert1Row10a.innerHTML = vert1Text10a.value;
};
const vert1Row10c = document.getElementById("vert1Row10c"); // Axis label
const vert1Text10c = document.getElementById("vert1Text10c");
vert1Text10c.oninput = function() {
    vert1Row10c.innerHTML = vert1Text10c.value;
};
const vert1Size10 = document.getElementById("vert1Size10");
vert1Size10.oninput = function() {
    vert1Row10b.height = ((Math.abs(vert1Size10.value) / 100) * 300);
};
const vert1Color10 = document.getElementById("vert1Color10");
vert1Color10.oninput = function() {
    vert1Row10b.style.backgroundColor = vert1Color10.value;
};

// Generate Vert1 HTML Chart Logic
const vert1Button = document.getElementById("vert1Button");
const vert1Output = document.getElementById("vert1Output");
vert1Button.addEventListener("click", () => {
    if (rowsData14.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData14.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row1c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    } else if (rowsData14.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row2b.height + '" style="background-color: ' + vert1Color2.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData14.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row1c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row2c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    } else if (rowsData14.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row2b.height + '" style="background-color: ' + vert1Color2.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row3b.height + '" style="background-color: ' + vert1Color3.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData14.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row1c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row2c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row3c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    } else if (rowsData14.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row2b.height + '" style="background-color: ' + vert1Color2.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row3b.height + '" style="background-color: ' + vert1Color3.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row4b.height + '" style="background-color: ' + vert1Color4.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData14.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row1c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row2c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row3c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row4c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    } else if (rowsData14.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row2b.height + '" style="background-color: ' + vert1Color2.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row3b.height + '" style="background-color: ' + vert1Color3.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row4b.height + '" style="background-color: ' + vert1Color4.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row5b.height + '" style="background-color: ' + vert1Color5.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData14.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row1c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row2c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row3c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row4c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row5c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    } else if (rowsData14.value === "6") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row2b.height + '" style="background-color: ' + vert1Color2.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row3b.height + '" style="background-color: ' + vert1Color3.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row4b.height + '" style="background-color: ' + vert1Color4.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row5b.height + '" style="background-color: ' + vert1Color5.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row6b.height + '" style="background-color: ' + vert1Color6.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData14.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row1c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row2c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row3c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row4c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row5c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row6c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    } else if (rowsData14.value === "7") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row2b.height + '" style="background-color: ' + vert1Color2.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row3b.height + '" style="background-color: ' + vert1Color3.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row4b.height + '" style="background-color: ' + vert1Color4.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row5b.height + '" style="background-color: ' + vert1Color5.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row6b.height + '" style="background-color: ' + vert1Color6.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row7b.height + '" style="background-color: ' + vert1Color7.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData14.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row1c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row2c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row3c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row4c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row5c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row6c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row7c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    } else if (rowsData14.value === "8") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row2b.height + '" style="background-color: ' + vert1Color2.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row3b.height + '" style="background-color: ' + vert1Color3.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row4b.height + '" style="background-color: ' + vert1Color4.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row5b.height + '" style="background-color: ' + vert1Color5.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row6b.height + '" style="background-color: ' + vert1Color6.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row7b.height + '" style="background-color: ' + vert1Color7.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row8a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row8b.height + '" style="background-color: ' + vert1Color8.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData14.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row1c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row2c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row3c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row4c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row5c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row6c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row7c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row8c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    } else if (rowsData14.value === "9") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row2b.height + '" style="background-color: ' + vert1Color2.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row3b.height + '" style="background-color: ' + vert1Color3.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row4b.height + '" style="background-color: ' + vert1Color4.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row5b.height + '" style="background-color: ' + vert1Color5.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row6b.height + '" style="background-color: ' + vert1Color6.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row7b.height + '" style="background-color: ' + vert1Color7.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row8a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row8b.height + '" style="background-color: ' + vert1Color8.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row9a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row9b.height + '" style="background-color: ' + vert1Color9.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData14.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row1c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row2c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row3c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row4c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row5c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row6c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row7c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row8c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row9c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    } else if (rowsData14.value === "10") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row2b.height + '" style="background-color: ' + vert1Color2.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row3b.height + '" style="background-color: ' + vert1Color3.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row4b.height + '" style="background-color: ' + vert1Color4.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row5b.height + '" style="background-color: ' + vert1Color5.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row6b.height + '" style="background-color: ' + vert1Color6.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row7b.height + '" style="background-color: ' + vert1Color7.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row8a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row8b.height + '" style="background-color: ' + vert1Color8.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row9a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row9b.height + '" style="background-color: ' + vert1Color9.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row10a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row10b.height + '" style="background-color: ' + vert1Color10.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData14.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row1c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row2c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row3c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row4c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row5c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row6c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row7c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row8c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row9c.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert1Row10c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    }
});
vert1Output.addEventListener("click", () => {
    vert1Output.select();
});

// Vertical Chart II Row Selection
const vert2AxisLine = document.getElementById("vert2AxisLine");
const vert2Width = document.getElementById("vert2Width");
const vert2Bars = document.getElementsByClassName("vert2Bars");
const vert2AxisLabel = document.getElementsByClassName("vert2AxisLabel");
const vert2Controls = document.getElementsByClassName("vert2Controls");
const rowsData15 = document.getElementById("rowsData15");
rowsData15.addEventListener("change", () => {
    for (var i = 0; i < vert2Controls.length; i++) {
        vert2Controls[i].style.display = "none";
        vert2Bars[i].style.display = "none";
        vert2AxisLabel[i].style.display = "none";
        for (var x = 0; x < rowsData15.value; x++) {
            vert2Controls[x].style.display = "";
            vert2Bars[x].style.display = "";
            vert2AxisLabel[x].style.display = "";
        }
    }
    vert2Width.style.maxWidth = rowsData15.value * 50 + 'px';
    vert2AxisLine.colSpan = rowsData15.value;
});

// Row 1 Customization Logic
const vert2Row1a = document.getElementById("vert2Row1a"); // Top vertical bar label
const vert2Text1a = document.getElementById("vert2Text1a");
vert2Text1a.oninput = function() {
    vert2Row1a.innerHTML = vert2Text1a.value;
};
const vert2Row1e = document.getElementById("vert2Row1e"); // Axis label
const vert2Text1e = document.getElementById("vert2Text1e");
vert2Text1e.oninput = function() {
    vert2Row1e.innerHTML = vert2Text1e.value;
};
const vert2Size1b = document.getElementById("vert2Size1b");
vert2Size1b.oninput = function() {
    vert2Row1b.height = ((Math.abs(vert2Size1b.value) / 100) * 300);
    vert2Size1b.max = Math.abs((100 - vert2Size1c.value - vert2Size1d.value));
    vert2Size1c.max = Math.abs((100 - vert2Size1d.value - vert2Size1b.value));
    vert2Size1d.max = Math.abs((100 - vert2Size1b.value - vert2Size1c.value));
};
const vert2Color1b = document.getElementById("vert2Color1b");
vert2Color1b.oninput = function() {
    vert2Row1b.style.backgroundColor = vert2Color1b.value;
};
const vert2Size1c = document.getElementById("vert2Size1c");
vert2Size1c.oninput = function() {
    vert2Row1c.height = ((Math.abs(vert2Size1c.value) / 100) * 300);
    vert2Size1b.max = Math.abs((100 - vert2Size1c.value - vert2Size1d.value));
    vert2Size1c.max = Math.abs((100 - vert2Size1d.value - vert2Size1b.value));
    vert2Size1d.max = Math.abs((100 - vert2Size1b.value - vert2Size1c.value));
};
const vert2Color1c = document.getElementById("vert2Color1c");
vert2Color1c.oninput = function() {
    vert2Row1c.style.backgroundColor = vert2Color1c.value;
};
const vert2Size1d = document.getElementById("vert2Size1d");
vert2Size1d.oninput = function() {
    vert2Row1d.height = ((Math.abs(vert2Size1d.value) / 100) * 300);
    vert2Size1b.max = Math.abs((100 - vert2Size1c.value - vert2Size1d.value));
    vert2Size1c.max = Math.abs((100 - vert2Size1d.value - vert2Size1b.value));
    vert2Size1d.max = Math.abs((100 - vert2Size1b.value - vert2Size1c.value));
};
const vert2Color1d = document.getElementById("vert2Color1d");
vert2Color1d.oninput = function() {
    vert2Row1d.style.backgroundColor = vert2Color1d.value;
};

// Row 2 Customization Logic
const vert2Row2a = document.getElementById("vert2Row2a"); // Top vertical bar label
const vert2Text2a = document.getElementById("vert2Text2a");
vert2Text2a.oninput = function() {
    vert2Row2a.innerHTML = vert2Text2a.value;
};
const vert2Row2e = document.getElementById("vert2Row2e"); // Axis label
const vert2Text2e = document.getElementById("vert2Text2e");
vert2Text2e.oninput = function() {
    vert2Row2e.innerHTML = vert2Text2e.value;
};
const vert2Size2b = document.getElementById("vert2Size2b");
vert2Size2b.oninput = function() {
    vert2Row2b.height = ((Math.abs(vert2Size2b.value) / 100) * 300);
    vert2Size2b.max = Math.abs((100 - vert2Size2c.value - vert2Size2d.value));
    vert2Size2c.max = Math.abs((100 - vert2Size2d.value - vert2Size2b.value));
    vert2Size2d.max = Math.abs((100 - vert2Size2b.value - vert2Size2c.value));
};
const vert2Color2b = document.getElementById("vert2Color2b");
vert2Color2b.oninput = function() {
    vert2Row2b.style.backgroundColor = vert2Color2b.value;
};
const vert2Size2c = document.getElementById("vert2Size2c");
vert2Size2c.oninput = function() {
    vert2Row2c.height = ((Math.abs(vert2Size2c.value) / 100) * 300);
    vert2Size2b.max = Math.abs((100 - vert2Size2c.value - vert2Size2d.value));
    vert2Size2c.max = Math.abs((100 - vert2Size2d.value - vert2Size2b.value));
    vert2Size2d.max = Math.abs((100 - vert2Size2b.value - vert2Size2c.value));
};
const vert2Color2c = document.getElementById("vert2Color2c");
vert2Color2c.oninput = function() {
    vert2Row2c.style.backgroundColor = vert2Color2c.value;
};
const vert2Size2d = document.getElementById("vert2Size2d");
vert2Size2d.oninput = function() {
    vert2Row2d.height = ((Math.abs(vert2Size2d.value) / 100) * 300);
    vert2Size2b.max = Math.abs((100 - vert2Size2c.value - vert2Size2d.value));
    vert2Size2c.max = Math.abs((100 - vert2Size2d.value - vert2Size2b.value));
    vert2Size2d.max = Math.abs((100 - vert2Size2b.value - vert2Size2c.value));
};
const vert2Color2d = document.getElementById("vert2Color2d");
vert2Color2d.oninput = function() {
    vert2Row2d.style.backgroundColor = vert2Color2d.value;
};

// Row 3 Customization Logic
const vert2Row3a = document.getElementById("vert2Row3a"); // Top vertical bar label
const vert2Text3a = document.getElementById("vert2Text3a");
vert2Text3a.oninput = function() {
    vert2Row3a.innerHTML = vert2Text3a.value;
};
const vert2Row3e = document.getElementById("vert2Row3e"); // Axis label
const vert2Text3e = document.getElementById("vert2Text3e");
vert2Text3e.oninput = function() {
    vert2Row3e.innerHTML = vert2Text3e.value;
};
const vert2Size3b = document.getElementById("vert2Size3b");
vert2Size3b.oninput = function() {
    vert2Row3b.height = ((Math.abs(vert2Size3b.value) / 100) * 300);
    vert2Size3b.max = Math.abs((100 - vert2Size3c.value - vert2Size3d.value));
    vert2Size3c.max = Math.abs((100 - vert2Size3d.value - vert2Size3b.value));
    vert2Size3d.max = Math.abs((100 - vert2Size3b.value - vert2Size3c.value));
};
const vert2Color3b = document.getElementById("vert2Color3b");
vert2Color3b.oninput = function() {
    vert2Row3b.style.backgroundColor = vert2Color3b.value;
};
const vert2Size3c = document.getElementById("vert2Size3c");
vert2Size3c.oninput = function() {
    vert2Row3c.height = ((Math.abs(vert2Size3c.value) / 100) * 300);
    vert2Size3b.max = Math.abs((100 - vert2Size3c.value - vert2Size3d.value));
    vert2Size3c.max = Math.abs((100 - vert2Size3d.value - vert2Size3b.value));
    vert2Size3d.max = Math.abs((100 - vert2Size3b.value - vert2Size3c.value));
};
const vert2Color3c = document.getElementById("vert2Color3c");
vert2Color3c.oninput = function() {
    vert2Row3c.style.backgroundColor = vert2Color3c.value;
};
const vert2Size3d = document.getElementById("vert2Size3d");
vert2Size3d.oninput = function() {
    vert2Row3d.height = ((Math.abs(vert2Size3d.value) / 100) * 300);
    vert2Size3b.max = Math.abs((100 - vert2Size3c.value - vert2Size3d.value));
    vert2Size3c.max = Math.abs((100 - vert2Size3d.value - vert2Size3b.value));
    vert2Size3d.max = Math.abs((100 - vert2Size3b.value - vert2Size3c.value));
};
const vert2Color3d = document.getElementById("vert2Color3d");
vert2Color3d.oninput = function() {
    vert2Row3d.style.backgroundColor = vert2Color3d.value;
};

// Row 4 Customization Logic
const vert2Row4a = document.getElementById("vert2Row4a"); // Top vertical bar label
const vert2Text4a = document.getElementById("vert2Text4a");
vert2Text4a.oninput = function() {
    vert2Row4a.innerHTML = vert2Text4a.value;
};
const vert2Row4e = document.getElementById("vert2Row4e"); // Axis label
const vert2Text4e = document.getElementById("vert2Text4e");
vert2Text4e.oninput = function() {
    vert2Row4e.innerHTML = vert2Text4e.value;
};
const vert2Size4b = document.getElementById("vert2Size4b");
vert2Size4b.oninput = function() {
    vert2Row4b.height = ((Math.abs(vert2Size4b.value) / 100) * 300);
    vert2Size4b.max = Math.abs((100 - vert2Size4c.value - vert2Size4d.value));
    vert2Size4c.max = Math.abs((100 - vert2Size4d.value - vert2Size4b.value));
    vert2Size4d.max = Math.abs((100 - vert2Size4b.value - vert2Size4c.value));
};
const vert2Color4b = document.getElementById("vert2Color4b");
vert2Color4b.oninput = function() {
    vert2Row4b.style.backgroundColor = vert2Color4b.value;
};
const vert2Size4c = document.getElementById("vert2Size4c");
vert2Size4c.oninput = function() {
    vert2Row4c.height = ((Math.abs(vert2Size4c.value) / 100) * 300);
    vert2Size4b.max = Math.abs((100 - vert2Size4c.value - vert2Size4d.value));
    vert2Size4c.max = Math.abs((100 - vert2Size4d.value - vert2Size4b.value));
    vert2Size4d.max = Math.abs((100 - vert2Size4b.value - vert2Size4c.value));
};
const vert2Color4c = document.getElementById("vert2Color4c");
vert2Color4c.oninput = function() {
    vert2Row4c.style.backgroundColor = vert2Color4c.value;
};
const vert2Size4d = document.getElementById("vert2Size4d");
vert2Size4d.oninput = function() {
    vert2Row4d.height = ((Math.abs(vert2Size4d.value) / 100) * 300);
    vert2Size4b.max = Math.abs((100 - vert2Size4c.value - vert2Size4d.value));
    vert2Size4c.max = Math.abs((100 - vert2Size4d.value - vert2Size4b.value));
    vert2Size4d.max = Math.abs((100 - vert2Size4b.value - vert2Size4c.value));
};
const vert2Color4d = document.getElementById("vert2Color4d");
vert2Color4d.oninput = function() {
    vert2Row4d.style.backgroundColor = vert2Color4d.value;
};

// Row 5 Customization Logic
const vert2Row5a = document.getElementById("vert2Row5a"); // Top vertical bar label
const vert2Text5a = document.getElementById("vert2Text5a");
vert2Text5a.oninput = function() {
    vert2Row5a.innerHTML = vert2Text5a.value;
};
const vert2Row5e = document.getElementById("vert2Row5e"); // Axis label
const vert2Text5e = document.getElementById("vert2Text5e");
vert2Text5e.oninput = function() {
    vert2Row5e.innerHTML = vert2Text5e.value;
};
const vert2Size5b = document.getElementById("vert2Size5b");
vert2Size5b.oninput = function() {
    vert2Row5b.height = ((Math.abs(vert2Size5b.value) / 100) * 300);
    vert2Size5b.max = Math.abs((100 - vert2Size5c.value - vert2Size5d.value));
    vert2Size5c.max = Math.abs((100 - vert2Size5d.value - vert2Size5b.value));
    vert2Size5d.max = Math.abs((100 - vert2Size5b.value - vert2Size5c.value));
};
const vert2Color5b = document.getElementById("vert2Color5b");
vert2Color5b.oninput = function() {
    vert2Row5b.style.backgroundColor = vert2Color5b.value;
};
const vert2Size5c = document.getElementById("vert2Size5c");
vert2Size5c.oninput = function() {
    vert2Row5c.height = ((Math.abs(vert2Size5c.value) / 100) * 300);
    vert2Size5b.max = Math.abs((100 - vert2Size5c.value - vert2Size5d.value));
    vert2Size5c.max = Math.abs((100 - vert2Size5d.value - vert2Size5b.value));
    vert2Size5d.max = Math.abs((100 - vert2Size5b.value - vert2Size5c.value));
};
const vert2Color5c = document.getElementById("vert2Color5c");
vert2Color5c.oninput = function() {
    vert2Row5c.style.backgroundColor = vert2Color5c.value;
};
const vert2Size5d = document.getElementById("vert2Size5d");
vert2Size5d.oninput = function() {
    vert2Row5d.height = ((Math.abs(vert2Size5d.value) / 100) * 300);
    vert2Size5b.max = Math.abs((100 - vert2Size5c.value - vert2Size5d.value));
    vert2Size5c.max = Math.abs((100 - vert2Size5d.value - vert2Size5b.value));
    vert2Size5d.max = Math.abs((100 - vert2Size5b.value - vert2Size5c.value));
};
const vert2Color5d = document.getElementById("vert2Color5d");
vert2Color5d.oninput = function() {
    vert2Row5d.style.backgroundColor = vert2Color5d.value;
};

// Row 6 Customization Logic
const vert2Row6a = document.getElementById("vert2Row6a"); // Top vertical bar label
const vert2Text6a = document.getElementById("vert2Text6a");
vert2Text6a.oninput = function() {
    vert2Row6a.innerHTML = vert2Text6a.value;
};
const vert2Row6e = document.getElementById("vert2Row6e"); // Axis label
const vert2Text6e = document.getElementById("vert2Text6e");
vert2Text6e.oninput = function() {
    vert2Row6e.innerHTML = vert2Text6e.value;
};
const vert2Size6b = document.getElementById("vert2Size6b");
vert2Size6b.oninput = function() {
    vert2Row6b.height = ((Math.abs(vert2Size6b.value) / 100) * 300);
    vert2Size6b.max = Math.abs((100 - vert2Size6c.value - vert2Size6d.value));
    vert2Size6c.max = Math.abs((100 - vert2Size6d.value - vert2Size6b.value));
    vert2Size6d.max = Math.abs((100 - vert2Size6b.value - vert2Size6c.value));
};
const vert2Color6b = document.getElementById("vert2Color6b");
vert2Color6b.oninput = function() {
    vert2Row6b.style.backgroundColor = vert2Color6b.value;
};
const vert2Size6c = document.getElementById("vert2Size6c");
vert2Size6c.oninput = function() {
    vert2Row6c.height = ((Math.abs(vert2Size6c.value) / 100) * 300);
    vert2Size6b.max = Math.abs((100 - vert2Size6c.value - vert2Size6d.value));
    vert2Size6c.max = Math.abs((100 - vert2Size6d.value - vert2Size6b.value));
    vert2Size6d.max = Math.abs((100 - vert2Size6b.value - vert2Size6c.value));
};
const vert2Color6c = document.getElementById("vert2Color6c");
vert2Color6c.oninput = function() {
    vert2Row6c.style.backgroundColor = vert2Color6c.value;
};
const vert2Size6d = document.getElementById("vert2Size6d");
vert2Size6d.oninput = function() {
    vert2Row6d.height = ((Math.abs(vert2Size6d.value) / 100) * 300);
    vert2Size6b.max = Math.abs((100 - vert2Size6c.value - vert2Size6d.value));
    vert2Size6c.max = Math.abs((100 - vert2Size6d.value - vert2Size6b.value));
    vert2Size6d.max = Math.abs((100 - vert2Size6b.value - vert2Size6c.value));
};
const vert2Color6d = document.getElementById("vert2Color6d");
vert2Color6d.oninput = function() {
    vert2Row6d.style.backgroundColor = vert2Color6d.value;
};

// Row 7 Customization Logic
const vert2Row7a = document.getElementById("vert2Row7a"); // Top vertical bar label
const vert2Text7a = document.getElementById("vert2Text7a");
vert2Text7a.oninput = function() {
    vert2Row7a.innerHTML = vert2Text7a.value;
};
const vert2Row7e = document.getElementById("vert2Row7e"); // Axis label
const vert2Text7e = document.getElementById("vert2Text7e");
vert2Text7e.oninput = function() {
    vert2Row7e.innerHTML = vert2Text7e.value;
};
const vert2Size7b = document.getElementById("vert2Size7b");
vert2Size7b.oninput = function() {
    vert2Row7b.height = ((Math.abs(vert2Size7b.value) / 100) * 300);
    vert2Size7b.max = Math.abs((100 - vert2Size7c.value - vert2Size7d.value));
    vert2Size7c.max = Math.abs((100 - vert2Size7d.value - vert2Size7b.value));
    vert2Size7d.max = Math.abs((100 - vert2Size7b.value - vert2Size7c.value));
};
const vert2Color7b = document.getElementById("vert2Color7b");
vert2Color7b.oninput = function() {
    vert2Row7b.style.backgroundColor = vert2Color7b.value;
};
const vert2Size7c = document.getElementById("vert2Size7c");
vert2Size7c.oninput = function() {
    vert2Row7c.height = ((Math.abs(vert2Size7c.value) / 100) * 300);
    vert2Size7b.max = Math.abs((100 - vert2Size7c.value - vert2Size7d.value));
    vert2Size7c.max = Math.abs((100 - vert2Size7d.value - vert2Size7b.value));
    vert2Size7d.max = Math.abs((100 - vert2Size7b.value - vert2Size7c.value));
};
const vert2Color7c = document.getElementById("vert2Color7c");
vert2Color7c.oninput = function() {
    vert2Row7c.style.backgroundColor = vert2Color7c.value;
};
const vert2Size7d = document.getElementById("vert2Size7d");
vert2Size7d.oninput = function() {
    vert2Row7d.height = ((Math.abs(vert2Size7d.value) / 100) * 300);
    vert2Size7b.max = Math.abs((100 - vert2Size7c.value - vert2Size7d.value));
    vert2Size7c.max = Math.abs((100 - vert2Size7d.value - vert2Size7b.value));
    vert2Size7d.max = Math.abs((100 - vert2Size7b.value - vert2Size7c.value));
};
const vert2Color7d = document.getElementById("vert2Color7d");
vert2Color7d.oninput = function() {
    vert2Row7d.style.backgroundColor = vert2Color7d.value;
};

// Row 8 Customization Logic
const vert2Row8a = document.getElementById("vert2Row8a"); // Top vertical bar label
const vert2Text8a = document.getElementById("vert2Text8a");
vert2Text8a.oninput = function() {
    vert2Row8a.innerHTML = vert2Text8a.value;
};
const vert2Row8e = document.getElementById("vert2Row8e"); // Axis label
const vert2Text8e = document.getElementById("vert2Text8e");
vert2Text8e.oninput = function() {
    vert2Row8e.innerHTML = vert2Text8e.value;
};
const vert2Size8b = document.getElementById("vert2Size8b");
vert2Size8b.oninput = function() {
    vert2Row8b.height = ((Math.abs(vert2Size8b.value) / 100) * 300);
    vert2Size8b.max = Math.abs((100 - vert2Size8c.value - vert2Size8d.value));
    vert2Size8c.max = Math.abs((100 - vert2Size8d.value - vert2Size8b.value));
    vert2Size8d.max = Math.abs((100 - vert2Size8b.value - vert2Size8c.value));
};
const vert2Color8b = document.getElementById("vert2Color8b");
vert2Color8b.oninput = function() {
    vert2Row8b.style.backgroundColor = vert2Color8b.value;
};
const vert2Size8c = document.getElementById("vert2Size8c");
vert2Size8c.oninput = function() {
    vert2Row8c.height = ((Math.abs(vert2Size8c.value) / 100) * 300);
    vert2Size8b.max = Math.abs((100 - vert2Size8c.value - vert2Size8d.value));
    vert2Size8c.max = Math.abs((100 - vert2Size8d.value - vert2Size8b.value));
    vert2Size8d.max = Math.abs((100 - vert2Size8b.value - vert2Size8c.value));
};
const vert2Color8c = document.getElementById("vert2Color8c");
vert2Color8c.oninput = function() {
    vert2Row8c.style.backgroundColor = vert2Color8c.value;
};
const vert2Size8d = document.getElementById("vert2Size8d");
vert2Size8d.oninput = function() {
    vert2Row8d.height = ((Math.abs(vert2Size8d.value) / 100) * 300);
    vert2Size8b.max = Math.abs((100 - vert2Size8c.value - vert2Size8d.value));
    vert2Size8c.max = Math.abs((100 - vert2Size8d.value - vert2Size8b.value));
    vert2Size8d.max = Math.abs((100 - vert2Size8b.value - vert2Size8c.value));
};
const vert2Color8d = document.getElementById("vert2Color8d");
vert2Color8d.oninput = function() {
    vert2Row8d.style.backgroundColor = vert2Color8d.value;
};

// Row 9 Customization Logic
const vert2Row9a = document.getElementById("vert2Row9a"); // Top vertical bar label
const vert2Text9a = document.getElementById("vert2Text9a");
vert2Text9a.oninput = function() {
    vert2Row9a.innerHTML = vert2Text9a.value;
};
const vert2Row9e = document.getElementById("vert2Row9e"); // Axis label
const vert2Text9e = document.getElementById("vert2Text9e");
vert2Text9e.oninput = function() {
    vert2Row9e.innerHTML = vert2Text9e.value;
};
const vert2Size9b = document.getElementById("vert2Size9b");
vert2Size9b.oninput = function() {
    vert2Row9b.height = ((Math.abs(vert2Size9b.value) / 100) * 300);
    vert2Size9b.max = Math.abs((100 - vert2Size9c.value - vert2Size9d.value));
    vert2Size9c.max = Math.abs((100 - vert2Size9d.value - vert2Size9b.value));
    vert2Size9d.max = Math.abs((100 - vert2Size9b.value - vert2Size9c.value));
};
const vert2Color9b = document.getElementById("vert2Color9b");
vert2Color9b.oninput = function() {
    vert2Row9b.style.backgroundColor = vert2Color9b.value;
};
const vert2Size9c = document.getElementById("vert2Size9c");
vert2Size9c.oninput = function() {
    vert2Row9c.height = ((Math.abs(vert2Size9c.value) / 100) * 300);
    vert2Size9b.max = Math.abs((100 - vert2Size9c.value - vert2Size9d.value));
    vert2Size9c.max = Math.abs((100 - vert2Size9d.value - vert2Size9b.value));
    vert2Size9d.max = Math.abs((100 - vert2Size9b.value - vert2Size9c.value));
};
const vert2Color9c = document.getElementById("vert2Color9c");
vert2Color9c.oninput = function() {
    vert2Row9c.style.backgroundColor = vert2Color9c.value;
};
const vert2Size9d = document.getElementById("vert2Size9d");
vert2Size9d.oninput = function() {
    vert2Row9d.height = ((Math.abs(vert2Size9d.value) / 100) * 300);
    vert2Size9b.max = Math.abs((100 - vert2Size9c.value - vert2Size9d.value));
    vert2Size9c.max = Math.abs((100 - vert2Size9d.value - vert2Size9b.value));
    vert2Size9d.max = Math.abs((100 - vert2Size9b.value - vert2Size9c.value));
};
const vert2Color9d = document.getElementById("vert2Color9d");
vert2Color9d.oninput = function() {
    vert2Row9d.style.backgroundColor = vert2Color9d.value;
};

// Row 10 Customization Logic
const vert2Row10a = document.getElementById("vert2Row10a"); // Top vertical bar label
const vert2Text10a = document.getElementById("vert2Text10a");
vert2Text10a.oninput = function() {
    vert2Row10a.innerHTML = vert2Text10a.value;
};
const vert2Row10e = document.getElementById("vert2Row10e"); // Axis label
const vert2Text10e = document.getElementById("vert2Text10e");
vert2Text10e.oninput = function() {
    vert2Row10e.innerHTML = vert2Text10e.value;
};
const vert2Size10b = document.getElementById("vert2Size10b");
vert2Size10b.oninput = function() {
    vert2Row10b.height = ((Math.abs(vert2Size10b.value) / 100) * 300);
    vert2Size10b.max = Math.abs((100 - vert2Size10c.value - vert2Size10d.value));
    vert2Size10c.max = Math.abs((100 - vert2Size10d.value - vert2Size10b.value));
    vert2Size10d.max = Math.abs((100 - vert2Size10b.value - vert2Size10c.value));
};
const vert2Color10b = document.getElementById("vert2Color10b");
vert2Color10b.oninput = function() {
    vert2Row10b.style.backgroundColor = vert2Color10b.value;
};
const vert2Size10c = document.getElementById("vert2Size10c");
vert2Size10c.oninput = function() {
    vert2Row10c.height = ((Math.abs(vert2Size10c.value) / 100) * 300);
    vert2Size10b.max = Math.abs((100 - vert2Size10c.value - vert2Size10d.value));
    vert2Size10c.max = Math.abs((100 - vert2Size10d.value - vert2Size10b.value));
    vert2Size10d.max = Math.abs((100 - vert2Size10b.value - vert2Size10c.value));
};
const vert2Color10c = document.getElementById("vert2Color10c");
vert2Color10c.oninput = function() {
    vert2Row10c.style.backgroundColor = vert2Color10c.value;
};
const vert2Size10d = document.getElementById("vert2Size10d");
vert2Size10d.oninput = function() {
    vert2Row10d.height = ((Math.abs(vert2Size10d.value) / 100) * 300);
    vert2Size10b.max = Math.abs((100 - vert2Size10c.value - vert2Size10d.value));
    vert2Size10c.max = Math.abs((100 - vert2Size10d.value - vert2Size10b.value));
    vert2Size10d.max = Math.abs((100 - vert2Size10b.value - vert2Size10c.value));
};
const vert2Color10d = document.getElementById("vert2Color10d");
vert2Color10d.oninput = function() {
    vert2Row10d.style.backgroundColor = vert2Color10d.value;
};

// Generate Vert2 HTML Chart Logic
const vert2Button = document.getElementById("vert2Button");
const vert2Output = document.getElementById("vert2Output");
vert2Button.addEventListener("click", () => {
    if (rowsData15.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData15.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row1e.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert2Output.innerHTML = chartCode;
    } else if (rowsData15.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row2b.height + '" style="background-color: ' + vert2Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2c.height + '" style="background-color: ' + vert2Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2d.height + '" style="background-color: ' + vert2Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData15.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row1e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row2e.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert2Output.innerHTML = chartCode;
    } else if (rowsData15.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row2b.height + '" style="background-color: ' + vert2Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2c.height + '" style="background-color: ' + vert2Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2d.height + '" style="background-color: ' + vert2Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row3b.height + '" style="background-color: ' + vert2Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3c.height + '" style="background-color: ' + vert2Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3d.height + '" style="background-color: ' + vert2Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData15.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row1e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row2e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row3e.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert2Output.innerHTML = chartCode;
    } else if (rowsData15.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row2b.height + '" style="background-color: ' + vert2Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2c.height + '" style="background-color: ' + vert2Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2d.height + '" style="background-color: ' + vert2Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row3b.height + '" style="background-color: ' + vert2Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3c.height + '" style="background-color: ' + vert2Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3d.height + '" style="background-color: ' + vert2Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row4b.height + '" style="background-color: ' + vert2Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4c.height + '" style="background-color: ' + vert2Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4d.height + '" style="background-color: ' + vert2Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData15.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row1e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row2e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row3e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row4e.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert2Output.innerHTML = chartCode;
    } else if (rowsData15.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row2b.height + '" style="background-color: ' + vert2Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2c.height + '" style="background-color: ' + vert2Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2d.height + '" style="background-color: ' + vert2Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row3b.height + '" style="background-color: ' + vert2Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3c.height + '" style="background-color: ' + vert2Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3d.height + '" style="background-color: ' + vert2Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row4b.height + '" style="background-color: ' + vert2Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4c.height + '" style="background-color: ' + vert2Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4d.height + '" style="background-color: ' + vert2Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row5b.height + '" style="background-color: ' + vert2Color5b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5c.height + '" style="background-color: ' + vert2Color5c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5d.height + '" style="background-color: ' + vert2Color5d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData15.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row1e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row2e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row3e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row4e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row5e.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert2Output.innerHTML = chartCode;
    } else if (rowsData15.value === "6") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row2b.height + '" style="background-color: ' + vert2Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2c.height + '" style="background-color: ' + vert2Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2d.height + '" style="background-color: ' + vert2Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row3b.height + '" style="background-color: ' + vert2Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3c.height + '" style="background-color: ' + vert2Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3d.height + '" style="background-color: ' + vert2Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row4b.height + '" style="background-color: ' + vert2Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4c.height + '" style="background-color: ' + vert2Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4d.height + '" style="background-color: ' + vert2Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row5b.height + '" style="background-color: ' + vert2Color5b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5c.height + '" style="background-color: ' + vert2Color5c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5d.height + '" style="background-color: ' + vert2Color5d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row6b.height + '" style="background-color: ' + vert2Color6b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6c.height + '" style="background-color: ' + vert2Color6c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6d.height + '" style="background-color: ' + vert2Color6d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData15.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row1e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row2e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row3e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row4e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row5e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row6e.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert2Output.innerHTML = chartCode;
    } else if (rowsData15.value === "7") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row2b.height + '" style="background-color: ' + vert2Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2c.height + '" style="background-color: ' + vert2Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2d.height + '" style="background-color: ' + vert2Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row3b.height + '" style="background-color: ' + vert2Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3c.height + '" style="background-color: ' + vert2Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3d.height + '" style="background-color: ' + vert2Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row4b.height + '" style="background-color: ' + vert2Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4c.height + '" style="background-color: ' + vert2Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4d.height + '" style="background-color: ' + vert2Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row5b.height + '" style="background-color: ' + vert2Color5b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5c.height + '" style="background-color: ' + vert2Color5c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5d.height + '" style="background-color: ' + vert2Color5d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row6b.height + '" style="background-color: ' + vert2Color6b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6c.height + '" style="background-color: ' + vert2Color6c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6d.height + '" style="background-color: ' + vert2Color6d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row7b.height + '" style="background-color: ' + vert2Color7b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row7c.height + '" style="background-color: ' + vert2Color7c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row7d.height + '" style="background-color: ' + vert2Color7d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData15.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row1e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row2e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row3e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row4e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row5e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row6e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row7e.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert2Output.innerHTML = chartCode;
    } else if (rowsData15.value === "8") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row2b.height + '" style="background-color: ' + vert2Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2c.height + '" style="background-color: ' + vert2Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2d.height + '" style="background-color: ' + vert2Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row3b.height + '" style="background-color: ' + vert2Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3c.height + '" style="background-color: ' + vert2Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3d.height + '" style="background-color: ' + vert2Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row4b.height + '" style="background-color: ' + vert2Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4c.height + '" style="background-color: ' + vert2Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4d.height + '" style="background-color: ' + vert2Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row5b.height + '" style="background-color: ' + vert2Color5b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5c.height + '" style="background-color: ' + vert2Color5c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5d.height + '" style="background-color: ' + vert2Color5d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row6b.height + '" style="background-color: ' + vert2Color6b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6c.height + '" style="background-color: ' + vert2Color6c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6d.height + '" style="background-color: ' + vert2Color6d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row7b.height + '" style="background-color: ' + vert2Color7b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row7c.height + '" style="background-color: ' + vert2Color7c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row7d.height + '" style="background-color: ' + vert2Color7d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row8a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row8b.height + '" style="background-color: ' + vert2Color8b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row8c.height + '" style="background-color: ' + vert2Color8c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row8d.height + '" style="background-color: ' + vert2Color8d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData15.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row1e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row2e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row3e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row4e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row5e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row6e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row7e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row8e.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert2Output.innerHTML = chartCode;
    } else if (rowsData15.value === "9") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row2b.height + '" style="background-color: ' + vert2Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2c.height + '" style="background-color: ' + vert2Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2d.height + '" style="background-color: ' + vert2Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row3b.height + '" style="background-color: ' + vert2Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3c.height + '" style="background-color: ' + vert2Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3d.height + '" style="background-color: ' + vert2Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row4b.height + '" style="background-color: ' + vert2Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4c.height + '" style="background-color: ' + vert2Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4d.height + '" style="background-color: ' + vert2Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row5b.height + '" style="background-color: ' + vert2Color5b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5c.height + '" style="background-color: ' + vert2Color5c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5d.height + '" style="background-color: ' + vert2Color5d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row6b.height + '" style="background-color: ' + vert2Color6b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6c.height + '" style="background-color: ' + vert2Color6c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6d.height + '" style="background-color: ' + vert2Color6d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row7b.height + '" style="background-color: ' + vert2Color7b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row7c.height + '" style="background-color: ' + vert2Color7c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row7d.height + '" style="background-color: ' + vert2Color7d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row8a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row8b.height + '" style="background-color: ' + vert2Color8b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row8c.height + '" style="background-color: ' + vert2Color8c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row8d.height + '" style="background-color: ' + vert2Color8d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row9a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row9b.height + '" style="background-color: ' + vert2Color9b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row9c.height + '" style="background-color: ' + vert2Color9c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row9d.height + '" style="background-color: ' + vert2Color9d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData15.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row1e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row2e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row3e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row4e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row5e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row6e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row7e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row8e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row9e.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert2Output.innerHTML = chartCode;
    } else if (rowsData15.value === "10") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row2b.height + '" style="background-color: ' + vert2Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2c.height + '" style="background-color: ' + vert2Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2d.height + '" style="background-color: ' + vert2Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row3b.height + '" style="background-color: ' + vert2Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3c.height + '" style="background-color: ' + vert2Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3d.height + '" style="background-color: ' + vert2Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row4b.height + '" style="background-color: ' + vert2Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4c.height + '" style="background-color: ' + vert2Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4d.height + '" style="background-color: ' + vert2Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row5b.height + '" style="background-color: ' + vert2Color5b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5c.height + '" style="background-color: ' + vert2Color5c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5d.height + '" style="background-color: ' + vert2Color5d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row6b.height + '" style="background-color: ' + vert2Color6b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6c.height + '" style="background-color: ' + vert2Color6c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6d.height + '" style="background-color: ' + vert2Color6d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row7b.height + '" style="background-color: ' + vert2Color7b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row7c.height + '" style="background-color: ' + vert2Color7c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row7d.height + '" style="background-color: ' + vert2Color7d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row8a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row8b.height + '" style="background-color: ' + vert2Color8b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row8c.height + '" style="background-color: ' + vert2Color8c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row8d.height + '" style="background-color: ' + vert2Color8d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row9a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row9b.height + '" style="background-color: ' + vert2Color9b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row9c.height + '" style="background-color: ' + vert2Color9c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row9d.height + '" style="background-color: ' + vert2Color9d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row10a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row10b.height + '" style="background-color: ' + vert2Color10b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row10c.height + '" style="background-color: ' + vert2Color10c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row10d.height + '" style="background-color: ' + vert2Color10d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td colspan="' + rowsData15.value + '" width="100%" style="border-top: 1px solid #000000; width: 100%;"></td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row1e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row2e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row3e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row4e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row5e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row6e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row7e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row8e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row9e.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 2px 0 8px; text-align: center;">' + vert2Row10e.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert2Output.innerHTML = chartCode;
    }
});
vert2Output.addEventListener("click", () => {
    vert2Output.select();
});

// Vertical Chart III Row Selection
const vert3AxisLine = document.getElementById("vert3AxisLine");
const vert3Width = document.getElementById("vert3Width");
const vert3Bars = document.getElementsByClassName("vert3Bars");
const vert3AxisLabel = document.getElementsByClassName("vert3AxisLabel");
const vert3Controls = document.getElementsByClassName("vert3Controls");
const rowsData16 = document.getElementById("rowsData16");
rowsData16.addEventListener("change", () => {
    for (var i = 0; i < vert3Controls.length; i++) {
        vert3Controls[i].style.display = "none";
        vert3Bars[i].style.display = "none";
        vert3AxisLabel[i].style.display = "none";
        for (var x = 0; x < rowsData16.value; x++) {
            vert3Controls[x].style.display = "";
            vert3Bars[x].style.display = "";
            vert3AxisLabel[x].style.display = "";
        }
    }
    vert3Width.style.maxWidth = rowsData16.value * 50 + 'px';
    vert3AxisLine.colSpan = rowsData16.value;
});

// Row 1 Customization Logic
const vert3Row1a = document.getElementById("vert3Row1a"); // Axis label
const vert3Text1a = document.getElementById("vert3Text1a");
vert3Text1a.oninput = function() {
    vert3Row1a.innerHTML = vert3Text1a.value;
};
const vert3Row1c = document.getElementById("vert3Row1c"); // Bottom vertical bar label
const vert3Text1c = document.getElementById("vert3Text1c");
vert3Text1c.oninput = function() {
    vert3Row1c.innerHTML = vert3Text1c.value;
};
const vert3Size1 = document.getElementById("vert3Size1");
vert3Size1.oninput = function() {
    vert3Row1b.height = ((Math.abs(vert3Size1.value) / 100) * 300);
};
const vert3Color1 = document.getElementById("vert3Color1");
vert3Color1.oninput = function() {
    vert3Row1b.style.backgroundColor = vert3Color1.value;
};

// Row 2 Customization Logic
const vert3Row2a = document.getElementById("vert3Row2a"); // Axis label
const vert3Text2a = document.getElementById("vert3Text2a");
vert3Text2a.oninput = function() {
    vert3Row2a.innerHTML = vert3Text2a.value;
};
const vert3Row2c = document.getElementById("vert3Row2c"); // Bottom vertical bar label
const vert3Text2c = document.getElementById("vert3Text2c");
vert3Text2c.oninput = function() {
    vert3Row2c.innerHTML = vert3Text2c.value;
};
const vert3Size2 = document.getElementById("vert3Size2");
vert3Size2.oninput = function() {
    vert3Row2b.height = ((Math.abs(vert3Size2.value) / 100) * 300);
};
const vert3Color2 = document.getElementById("vert3Color2");
vert3Color2.oninput = function() {
    vert3Row2b.style.backgroundColor = vert3Color2.value;
};

// Row 3 Customization Logic
const vert3Row3a = document.getElementById("vert3Row3a"); // Axis label
const vert3Text3a = document.getElementById("vert3Text3a");
vert3Text3a.oninput = function() {
    vert3Row3a.innerHTML = vert3Text3a.value;
};
const vert3Row3c = document.getElementById("vert3Row3c"); // Bottom vertical bar label
const vert3Text3c = document.getElementById("vert3Text3c");
vert3Text3c.oninput = function() {
    vert3Row3c.innerHTML = vert3Text3c.value;
};
const vert3Size3 = document.getElementById("vert3Size3");
vert3Size3.oninput = function() {
    vert3Row3b.height = ((Math.abs(vert3Size3.value) / 100) * 300);
};
const vert3Color3 = document.getElementById("vert3Color3");
vert3Color3.oninput = function() {
    vert3Row3b.style.backgroundColor = vert3Color3.value;
};

// Row 4 Customization Logic
const vert3Row4a = document.getElementById("vert3Row4a"); // Axis label
const vert3Text4a = document.getElementById("vert3Text4a");
vert3Text4a.oninput = function() {
    vert3Row4a.innerHTML = vert3Text4a.value;
};
const vert3Row4c = document.getElementById("vert3Row4c"); // Bottom vertical bar label
const vert3Text4c = document.getElementById("vert3Text4c");
vert3Text4c.oninput = function() {
    vert3Row4c.innerHTML = vert3Text4c.value;
};
const vert3Size4 = document.getElementById("vert3Size4");
vert3Size4.oninput = function() {
    vert3Row4b.height = ((Math.abs(vert3Size4.value) / 100) * 300);
};
const vert3Color4 = document.getElementById("vert3Color4");
vert3Color4.oninput = function() {
    vert3Row4b.style.backgroundColor = vert3Color4.value;
};

// Row 5 Customization Logic
const vert3Row5a = document.getElementById("vert3Row5a"); // Axis label
const vert3Text5a = document.getElementById("vert3Text5a");
vert3Text5a.oninput = function() {
    vert3Row5a.innerHTML = vert3Text5a.value;
};
const vert3Row5c = document.getElementById("vert3Row5c"); // Bottom vertical bar label
const vert3Text5c = document.getElementById("vert3Text5c");
vert3Text5c.oninput = function() {
    vert3Row5c.innerHTML = vert3Text5c.value;
};
const vert3Size5 = document.getElementById("vert3Size5");
vert3Size5.oninput = function() {
    vert3Row5b.height = ((Math.abs(vert3Size5.value) / 100) * 300);
};
const vert3Color5 = document.getElementById("vert3Color5");
vert3Color5.oninput = function() {
    vert3Row5b.style.backgroundColor = vert3Color5.value;
};

// Row 6 Customization Logic
const vert3Row6a = document.getElementById("vert3Row6a"); // Axis label
const vert3Text6a = document.getElementById("vert3Text6a");
vert3Text6a.oninput = function() {
    vert3Row6a.innerHTML = vert3Text6a.value;
};
const vert3Row6c = document.getElementById("vert3Row6c"); // Bottom vertical bar label
const vert3Text6c = document.getElementById("vert3Text6c");
vert3Text6c.oninput = function() {
    vert3Row6c.innerHTML = vert3Text6c.value;
};
const vert3Size6 = document.getElementById("vert3Size6");
vert3Size6.oninput = function() {
    vert3Row6b.height = ((Math.abs(vert3Size6.value) / 100) * 300);
};
const vert3Color6 = document.getElementById("vert3Color6");
vert3Color6.oninput = function() {
    vert3Row6b.style.backgroundColor = vert3Color6.value;
};

// Row 7 Customization Logic
const vert3Row7a = document.getElementById("vert3Row7a"); // Axis label
const vert3Text7a = document.getElementById("vert3Text7a");
vert3Text7a.oninput = function() {
    vert3Row7a.innerHTML = vert3Text7a.value;
};
const vert3Row7c = document.getElementById("vert3Row7c"); // Bottom vertical bar label
const vert3Text7c = document.getElementById("vert3Text7c");
vert3Text7c.oninput = function() {
    vert3Row7c.innerHTML = vert3Text7c.value;
};
const vert3Size7 = document.getElementById("vert3Size7");
vert3Size7.oninput = function() {
    vert3Row7b.height = ((Math.abs(vert3Size7.value) / 100) * 300);
};
const vert3Color7 = document.getElementById("vert3Color7");
vert3Color7.oninput = function() {
    vert3Row7b.style.backgroundColor = vert3Color7.value;
};

// Row 8 Customization Logic
const vert3Row8a = document.getElementById("vert3Row8a"); // Axis label
const vert3Text8a = document.getElementById("vert3Text8a");
vert3Text8a.oninput = function() {
    vert3Row8a.innerHTML = vert3Text8a.value;
};
const vert3Row8c = document.getElementById("vert3Row8c"); // Bottom vertical bar label
const vert3Text8c = document.getElementById("vert3Text8c");
vert3Text8c.oninput = function() {
    vert3Row8c.innerHTML = vert3Text8c.value;
};
const vert3Size8 = document.getElementById("vert3Size8");
vert3Size8.oninput = function() {
    vert3Row8b.height = ((Math.abs(vert3Size8.value) / 100) * 300);
};
const vert3Color8 = document.getElementById("vert3Color8");
vert3Color8.oninput = function() {
    vert3Row8b.style.backgroundColor = vert3Color8.value;
};

// Row 9 Customization Logic
const vert3Row9a = document.getElementById("vert3Row9a"); // Axis label
const vert3Text9a = document.getElementById("vert3Text9a");
vert3Text9a.oninput = function() {
    vert3Row9a.innerHTML = vert3Text9a.value;
};
const vert3Row9c = document.getElementById("vert3Row9c"); // Bottom vertical bar label
const vert3Text9c = document.getElementById("vert3Text9c");
vert3Text9c.oninput = function() {
    vert3Row9c.innerHTML = vert3Text9c.value;
};
const vert3Size9 = document.getElementById("vert3Size9");
vert3Size9.oninput = function() {
    vert3Row9b.height = ((Math.abs(vert3Size9.value) / 100) * 300);
};
const vert3Color9 = document.getElementById("vert3Color9");
vert3Color9.oninput = function() {
    vert3Row9b.style.backgroundColor = vert3Color9.value;
};

// Row 10 Customization Logic
const vert3Row10a = document.getElementById("vert3Row10a"); // Axis label
const vert3Text10a = document.getElementById("vert3Text10a");
vert3Text10a.oninput = function() {
    vert3Row10a.innerHTML = vert3Text10a.value;
};
const vert3Row10c = document.getElementById("vert3Row10c"); // Bottom vertical bar label
const vert3Text10c = document.getElementById("vert3Text10c");
vert3Text10c.oninput = function() {
    vert3Row10c.innerHTML = vert3Text10c.value;
};
const vert3Size10 = document.getElementById("vert3Size10");
vert3Size10.oninput = function() {
    vert3Row10b.height = ((Math.abs(vert3Size10.value) / 100) * 300);
};
const vert3Color10 = document.getElementById("vert3Color10");
vert3Color10.oninput = function() {
    vert3Row10b.style.backgroundColor = vert3Color10.value;
};

// Generate Vert3 HTML Chart Logic
const vert3Button = document.getElementById("vert3Button");
const vert3Output = document.getElementById("vert3Output");
vert3Button.addEventListener("click", () => {
    if (rowsData16.value === "1") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row1a.innerHTML + '</td></tr><tr> <td colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #000000; height: 0; width: 100%;"></td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert3Output.innerHTML = chartCode;
    } else if (rowsData16.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row1a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row2a.innerHTML + '</td></tr><tr> <td colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #000000; height: 0; width: 100%;"></td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row2b.height + '" style="background-color: ' + vert3Color2.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row2c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert3Output.innerHTML = chartCode;
    } else if (rowsData16.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row1a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row2a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row3a.innerHTML + '</td></tr><tr> <td colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #000000; height: 0; width: 100%;"></td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row2b.height + '" style="background-color: ' + vert3Color2.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row2c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row3b.height + '" style="background-color: ' + vert3Color3.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row3c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert3Output.innerHTML = chartCode;
    } else if (rowsData16.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row1a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row2a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row3a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row4a.innerHTML + '</td></tr><tr> <td colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #000000; height: 0; width: 100%;"></td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row2b.height + '" style="background-color: ' + vert3Color2.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row2c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row3b.height + '" style="background-color: ' + vert3Color3.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row3c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row4b.height + '" style="background-color: ' + vert3Color4.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row4c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert3Output.innerHTML = chartCode;
    } else if (rowsData16.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row1a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row2a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row3a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row4a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row5a.innerHTML + '</td></tr><tr> <td colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #000000; height: 0; width: 100%;"></td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row2b.height + '" style="background-color: ' + vert3Color2.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row2c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row3b.height + '" style="background-color: ' + vert3Color3.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row3c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row4b.height + '" style="background-color: ' + vert3Color4.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row4c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row5b.height + '" style="background-color: ' + vert3Color5.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row5c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert3Output.innerHTML = chartCode;
    } else if (rowsData16.value === "6") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row1a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row2a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row3a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row4a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row5a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row6a.innerHTML + '</td></tr><tr> <td colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #000000; height: 0; width: 100%;"></td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row2b.height + '" style="background-color: ' + vert3Color2.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row2c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row3b.height + '" style="background-color: ' + vert3Color3.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row3c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row4b.height + '" style="background-color: ' + vert3Color4.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row4c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row5b.height + '" style="background-color: ' + vert3Color5.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row5c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row6b.height + '" style="background-color: ' + vert3Color6.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row6c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert3Output.innerHTML = chartCode;
    } else if (rowsData16.value === "7") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row1a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row2a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row3a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row4a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row5a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row6a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row7a.innerHTML + '</td></tr><tr> <td colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #000000; height: 0; width: 100%;"></td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row2b.height + '" style="background-color: ' + vert3Color2.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row2c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row3b.height + '" style="background-color: ' + vert3Color3.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row3c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row4b.height + '" style="background-color: ' + vert3Color4.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row4c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row5b.height + '" style="background-color: ' + vert3Color5.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row5c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row6b.height + '" style="background-color: ' + vert3Color6.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row6c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row7b.height + '" style="background-color: ' + vert3Color7.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row7c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert3Output.innerHTML = chartCode;
    } else if (rowsData16.value === "8") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row1a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row2a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row3a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row4a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row5a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row6a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row7a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row8a.innerHTML + '</td></tr><tr> <td colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #000000; height: 0; width: 100%;"></td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row2b.height + '" style="background-color: ' + vert3Color2.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row2c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row3b.height + '" style="background-color: ' + vert3Color3.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row3c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row4b.height + '" style="background-color: ' + vert3Color4.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row4c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row5b.height + '" style="background-color: ' + vert3Color5.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row5c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row6b.height + '" style="background-color: ' + vert3Color6.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row6c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row7b.height + '" style="background-color: ' + vert3Color7.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row7c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row8b.height + '" style="background-color: ' + vert3Color8.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row8c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert3Output.innerHTML = chartCode;
    } else if (rowsData16.value === "9") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row1a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row2a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row3a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row4a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row5a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row6a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row7a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row8a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row9a.innerHTML + '</td></tr><tr> <td colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #000000; height: 0; width: 100%;"></td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row2b.height + '" style="background-color: ' + vert3Color2.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row2c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row3b.height + '" style="background-color: ' + vert3Color3.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row3c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row4b.height + '" style="background-color: ' + vert3Color4.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row4c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row5b.height + '" style="background-color: ' + vert3Color5.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row5c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row6b.height + '" style="background-color: ' + vert3Color6.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row6c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row7b.height + '" style="background-color: ' + vert3Color7.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row7c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row8b.height + '" style="background-color: ' + vert3Color8.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row8c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row9b.height + '" style="background-color: ' + vert3Color9.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row9c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert3Output.innerHTML = chartCode;
    } else if (rowsData16.value === "10") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row1a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row2a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row3a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row4a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row5a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row6a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row7a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row8a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row9a.innerHTML + '</td><td height="10" style="font-family: Courier, serif; font-size: 12px; margin: 0; padding: 8px 0 2px; text-align: center;">' + vert3Row10a.innerHTML + '</td></tr><tr> <td colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #000000; height: 0; width: 100%;"></td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row2b.height + '" style="background-color: ' + vert3Color2.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row2c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row3b.height + '" style="background-color: ' + vert3Color3.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row3c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row4b.height + '" style="background-color: ' + vert3Color4.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row4c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row5b.height + '" style="background-color: ' + vert3Color5.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row5c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row6b.height + '" style="background-color: ' + vert3Color6.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row6c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row7b.height + '" style="background-color: ' + vert3Color7.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row7c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row8b.height + '" style="background-color: ' + vert3Color8.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row8c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row9b.height + '" style="background-color: ' + vert3Color9.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row9c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row10b.height + '" style="background-color: ' + vert3Color10.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row10c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert3Output.innerHTML = chartCode;
    }
});
vert3Output.addEventListener("click", () => {
    vert3Output.select();
});

// Vertical Chart V Row Selection
const vert5AxisLine = document.getElementById("vert5AxisLine");
const vert5Width = document.getElementById("vert5Width");
const vert5Bars = document.getElementsByClassName("vert5Bars");
const vert5Top = document.getElementsByClassName("vert5Top");
const vert5Bottom = document.getElementsByClassName("vert5Bottom");
const vert5Controls = document.getElementsByClassName("vert5Controls");
const rowsData18 = document.getElementById("rowsData18");
rowsData18.addEventListener("change", () => {
    for (var i = 0; i < vert5Controls.length; i++) {
        vert5Controls[i].style.display = "none";
        vert5Top[i].style.display = "none";
        vert5Bottom[i].style.display = "none";
        for (var x = 0; x < rowsData18.value; x++) {
            vert5Controls[x].style.display = "";
            vert5Top[x].style.display = ""
            vert5Bottom[x].style.display = "";
        }
    }
    vert5Width.style.maxWidth = rowsData18.value * 50 + 'px';
    vert5AxisLine.colSpan = rowsData18.value;
});

// Top Row 1 Customization Logic
const vert5Row1a = document.getElementById("vert5Row1a"); // Axis label
const vert5Text1a = document.getElementById("vert5Text1a");
vert5Text1a.oninput = function() {
    vert5Row1a.innerHTML = vert5Text1a.value;
};
const vert5Size1b = document.getElementById("vert5Size1b");
vert5Size1b.oninput = function() {
    vert5Row1b.height = ((Math.abs(vert5Size1b.value) / 100) * 150);
};
const vert5Color1b = document.getElementById("vert5Color1b");
vert5Color1b.oninput = function() {
    vert5Row1b.style.backgroundColor = vert5Color1b.value;
};
// Bottom Row 1 Customization Logic
const vert5Row1d = document.getElementById("vert5Row1d"); // Bottom vertical bar label
const vert5Text1d = document.getElementById("vert5Text1d");
vert5Text1d.oninput = function() {
    vert5Row1d.innerHTML = vert5Text1d.value;
};
const vert5Size1c = document.getElementById("vert5Size1c");
vert5Size1c.oninput = function() {
    vert5Row1c.height = ((Math.abs(vert5Size1c.value) / 100) * 150);
};
const vert5Color1c = document.getElementById("vert5Color1c");
vert5Color1c.oninput = function() {
    vert5Row1c.style.backgroundColor = vert5Color1c.value;
};