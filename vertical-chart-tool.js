// Vertical Chart I Row Selection
const vert1Width = document.getElementById("vert1Width");
const vert1Bars = document.getElementsByClassName("vert1Bars");
const vert1LabelX = document.getElementsByClassName("vert1LabelX");
const vert1Controls = document.getElementsByClassName("vert1Controls");
const rowsData14 = document.getElementById("rowsData14");
rowsData14.addEventListener("change", () => {
    for (var i = 0; i < vert1Controls.length; i++) {
        vert1Controls[i].style.display = "none";
        vert1Bars[i].style.display = "none";
        vert1LabelX[i].style.display = "none";
        for (var x = 0; x < rowsData14.value; x++) {
            vert1Controls[x].style.display = "";
            vert1Bars[x].style.display = "";
            vert1LabelX[x].style.display = "";
        }
    }
    vert1Width.width = (rowsData14.value * 56 + 40);
});

// Row 1 Customization Logic
const vert1Row1a = document.getElementById("vert1Row1a"); // Top vertical bar label
const vert1Text1a = document.getElementById("vert1Text1a");
vert1Text1a.oninput = function() {
    vert1Row1a.innerHTML = vert1Text1a.value;
};
const vert1Row1c = document.getElementById("vert1Row1c"); // Bottom vertical bar label
const vert1Text1c = document.getElementById("vert1Text1c");
vert1Text1c.oninput = function() {
    vert1Row1c.innerHTML = vert1Text1c.value;
};
const vert1Size1 = document.getElementById("vert1Size1");
vert1Size1.oninput = function() {
    vert1Row1b.height = ((Math.abs(vert1Size1.value) / 100) * 273);
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
const vert1Row2c = document.getElementById("vert1Row2c"); // Bottom vertical bar label
const vert1Text2c = document.getElementById("vert1Text2c");
vert1Text2c.oninput = function() {
    vert1Row2c.innerHTML = vert1Text2c.value;
};
const vert1Size2 = document.getElementById("vert1Size2");
vert1Size2.oninput = function() {
    vert1Row2b.height = ((Math.abs(vert1Size2.value) / 100) * 273);
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
const vert1Row3c = document.getElementById("vert1Row3c"); // Bottom vertical bar label
const vert1Text3c = document.getElementById("vert1Text3c");
vert1Text3c.oninput = function() {
    vert1Row3c.innerHTML = vert1Text3c.value;
};
const vert1Size3 = document.getElementById("vert1Size3");
vert1Size3.oninput = function() {
    vert1Row3b.height = ((Math.abs(vert1Size3.value) / 100) * 273);
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
const vert1Row4c = document.getElementById("vert1Row4c"); // Bottom vertical bar label
const vert1Text4c = document.getElementById("vert1Text4c");
vert1Text4c.oninput = function() {
    vert1Row4c.innerHTML = vert1Text4c.value;
};
const vert1Size4 = document.getElementById("vert1Size4");
vert1Size4.oninput = function() {
    vert1Row4b.height = ((Math.abs(vert1Size4.value) / 100) * 273);
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
const vert1Row5c = document.getElementById("vert1Row5c"); // Bottom vertical bar label
const vert1Text5c = document.getElementById("vert1Text5c");
vert1Text5c.oninput = function() {
    vert1Row5c.innerHTML = vert1Text5c.value;
};
const vert1Size5 = document.getElementById("vert1Size5");
vert1Size5.oninput = function() {
    vert1Row5b.height = ((Math.abs(vert1Size5.value) / 100) * 273);
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
const vert1Row6c = document.getElementById("vert1Row6c"); // Bottom vertical bar label
const vert1Text6c = document.getElementById("vert1Text6c");
vert1Text6c.oninput = function() {
    vert1Row6c.innerHTML = vert1Text6c.value;
};
const vert1Size6 = document.getElementById("vert1Size6");
vert1Size6.oninput = function() {
    vert1Row6b.height = ((Math.abs(vert1Size6.value) / 100) * 273);
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
const vert1Row7c = document.getElementById("vert1Row7c"); // Bottom vertical bar label
const vert1Text7c = document.getElementById("vert1Text7c");
vert1Text7c.oninput = function() {
    vert1Row7c.innerHTML = vert1Text7c.value;
};
const vert1Size7 = document.getElementById("vert1Size7");
vert1Size7.oninput = function() {
    vert1Row7b.height = ((Math.abs(vert1Size7.value) / 100) * 273);
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
const vert1Row8c = document.getElementById("vert1Row8c"); // Bottom vertical bar label
const vert1Text8c = document.getElementById("vert1Text8c");
vert1Text8c.oninput = function() {
    vert1Row8c.innerHTML = vert1Text8c.value;
};
const vert1Size8 = document.getElementById("vert1Size8");
vert1Size8.oninput = function() {
    vert1Row8b.height = ((Math.abs(vert1Size8.value) / 100) * 273);
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
const vert1Row9c = document.getElementById("vert1Row9c"); // Bottom vertical bar label
const vert1Text9c = document.getElementById("vert1Text9c");
vert1Text9c.oninput = function() {
    vert1Row9c.innerHTML = vert1Text9c.value;
};
const vert1Size9 = document.getElementById("vert1Size9");
vert1Size9.oninput = function() {
    vert1Row9b.height = ((Math.abs(vert1Size9.value) / 100) * 273);
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
const vert1Row10c = document.getElementById("vert1Row10c"); // Bottom vertical bar label
const vert1Text10c = document.getElementById("vert1Text10c");
vert1Text10c.oninput = function() {
    vert1Row10c.innerHTML = vert1Text10c.value;
};
const vert1Size10 = document.getElementById("vert1Size10");
vert1Size10.oninput = function() {
    vert1Row10b.height = ((Math.abs(vert1Size10.value) / 100) * 273);
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
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="600" height="350" style="border: 1px solid #c4c4c4; margin: 0 auto; padding: 20px;"> <tr> <td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$4,234</td></tr><tr> <td width="38" height="82" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2013</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    } else if (rowsData14.value === "2") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="600" height="350" style="border: 1px solid #c4c4c4; margin: 0 auto; padding: 20px;"> <tr> <td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$4,234</td></tr><tr> <td width="38" height="82" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$11,234</td></tr><tr> <td width="38" height="214" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2013</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2014</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    } else if (rowsData14.value === "3") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="600" height="350" style="border: 1px solid #c4c4c4; margin: 0 auto; padding: 20px;"> <tr> <td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$4,234</td></tr><tr> <td width="38" height="82" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$11,234</td></tr><tr> <td width="38" height="214" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$13,123</td></tr><tr> <td width="38" height="250" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2013</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2014</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2015</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    } else if (rowsData14.value === "4") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="600" height="350" style="border: 1px solid #c4c4c4; margin: 0 auto; padding: 20px;"> <tr> <td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$4,234</td></tr><tr> <td width="38" height="82" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$11,234</td></tr><tr> <td width="38" height="214" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$13,123</td></tr><tr> <td width="38" height="250" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$7,108</td></tr><tr> <td width="38" height="135" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2013</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2014</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2015</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2016</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    } else if (rowsData14.value === "5") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="600" height="350" style="border: 1px solid #c4c4c4; margin: 0 auto; padding: 20px;"> <tr> <td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$4,234</td></tr><tr> <td width="38" height="82" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$11,234</td></tr><tr> <td width="38" height="214" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$13,123</td></tr><tr> <td width="38" height="250" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$7,108</td></tr><tr> <td width="38" height="135" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$9,583</td></tr><tr> <td width="38" height="183" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2013</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2014</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2015</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2016</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2017</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    } else if (rowsData14.value === "6") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="600" height="350" style="border: 1px solid #c4c4c4; margin: 0 auto; padding: 20px;"> <tr> <td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$4,234</td></tr><tr> <td width="38" height="82" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$11,234</td></tr><tr> <td width="38" height="214" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$13,123</td></tr><tr> <td width="38" height="250" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$7,108</td></tr><tr> <td width="38" height="135" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$9,583</td></tr><tr> <td width="38" height="183" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$10,019</td></tr><tr> <td width="38" height="191" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2013</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2014</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2015</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2016</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2017</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2018</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    } else if (rowsData14.value === "7") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="600" height="350" style="border: 1px solid #c4c4c4; margin: 0 auto; padding: 20px;"> <tr> <td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$4,234</td></tr><tr> <td width="38" height="82" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$11,234</td></tr><tr> <td width="38" height="214" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$13,123</td></tr><tr> <td width="38" height="250" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$7,108</td></tr><tr> <td width="38" height="135" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$9,583</td></tr><tr> <td width="38" height="183" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$10,019</td></tr><tr> <td width="38" height="191" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$9,863</td></tr><tr> <td width="38" height="188" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2013</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2014</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2015</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2016</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2017</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2018</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2019</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    } else if (rowsData14.value === "8") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="600" height="350" style="border: 1px solid #c4c4c4; margin: 0 auto; padding: 20px;"> <tr> <td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$4,234</td></tr><tr> <td width="38" height="82" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$11,234</td></tr><tr> <td width="38" height="214" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$13,123</td></tr><tr> <td width="38" height="250" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$7,108</td></tr><tr> <td width="38" height="135" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$9,583</td></tr><tr> <td width="38" height="183" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2013</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2014</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2015</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2016</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2017</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2018</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2019</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2020</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    } else if (rowsData14.value === "9") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="600" height="350" style="border: 1px solid #c4c4c4; margin: 0 auto; padding: 20px;"> <tr> <td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$4,234</td></tr><tr> <td width="38" height="82" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$11,234</td></tr><tr> <td width="38" height="214" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$13,123</td></tr><tr> <td width="38" height="250" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$7,108</td></tr><tr> <td width="38" height="135" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$9,583</td></tr><tr> <td width="38" height="183" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$10,019</td></tr><tr> <td width="38" height="191" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2013</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2014</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2015</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2016</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2017</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2018</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2019</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2020</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2021</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    } else if (rowsData14.value === "10") {
        const chartCode = '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="600" height="350" style="border: 1px solid #c4c4c4; margin: 0 auto; padding: 20px;"> <tr> <td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$4,234</td></tr><tr> <td width="38" height="82" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$11,234</td></tr><tr> <td width="38" height="214" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$13,123</td></tr><tr> <td width="38" height="250" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$7,108</td></tr><tr> <td width="38" height="135" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$9,583</td></tr><tr> <td width="38" height="183" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$10,019</td></tr><tr> <td width="38" height="191" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td><td width="56" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Courier, serif; font-weight: 500; font-size: 11px; line-height: 1.5em; margin: 0; max-width: 38px; padding: 0; text-align: center; white-space: nowrap;">$9,863</td></tr><tr> <td width="38" height="188" style="background-color: #000db8; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr> <td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2013</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2014</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2015</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2016</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2017</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2018</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2019</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2020</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2021</td><td height="10" style="font-family: Courier, serif; font-size: 12px; font-weight: 600; line-height: 1.5em; margin: 0; padding: 0; text-align: center;">2022</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->';
        vert1Output.innerHTML = chartCode;
    }
});
vert1Output.addEventListener("click", () => {
    vert1Output.select();
});