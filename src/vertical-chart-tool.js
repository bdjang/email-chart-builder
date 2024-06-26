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

// Vertical Chart I Caption
let vert1csCode = "";
const vert1Cap = document.getElementById("vert1Cap"); // Caption or chart title
const vert1capText = document.getElementById("vert1capText"); // Caption or chart title text
vert1capText.oninput = function() {
    vert1Cap.innerHTML = vert1capText.value;
    if (vert1capText.value == "" && vert1subText.value == "") {
        vert1Cap.style.marginBottom = "0";
        vert1Sub.style.marginBottom = "0";
        return vert1csCode = "";
    } else if (vert1capText.value == "" && vert1subText.value) {
        vert1Cap.style.marginBottom = "0";
        vert1Sub.style.marginBottom = "20px";
        return vert1csCode = '<div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert1Sub.innerHTML + '</div>';
    } else if (vert1capText.value && vert1subText.value == "") {
        vert1Cap.style.marginBottom = "20px";
        vert1Sub.style.marginBottom = "0";
        return vert1csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertCap">' + vert1Cap.innerHTML + '</div>';
    } else if (vert1capText.value && vert1subText.value) {
        vert1Cap.style.marginBottom = "4px";
        vert1Sub.style.marginBottom = "20px";
        return vert1csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: center;" class="chartVertCap">' + vert1Cap.innerHTML + '</div> <div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert1Sub.innerHTML + '</div>';
    }
};
// Vertical Chart I Subtitle
const vert1Sub = document.getElementById("vert1Sub"); // Caption or chart title
const vert1subText = document.getElementById("vert1subText"); // Caption or chart title text
vert1subText.oninput = function() {
    vert1Sub.innerHTML = vert1subText.value;
    if (vert1subText.value == "" && vert1capText.value == "" ) {
        vert1Sub.style.marginBottom = "0";
        vert1Cap.style.marginBottom = "0";
        return vert1csCode = "";
    } else if (vert1subText.value == "" && vert1capText.value) {
        vert1Sub.style.marginBottom = "0";
        vert1Cap.style.marginBottom = "20px";
        return vert1csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertCap">' + vert1Cap.innerHTML + '</div>';
    } else if (vert1subText.value && vert1capText.value == "") {
        vert1Sub.style.marginBottom = "20px";
        vert1Cap.style.marginBottom = "0";
        return vert1csCode = '<div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert1Sub.innerHTML + '</div>';
    } else if (vert1subText.value && vert1capText.value) {
        vert1Sub.style.marginBottom = "20px";
        vert1Cap.style.marginBottom = "4px";
        return vert1csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: center;" class="chartVertCap">' + vert1Cap.innerHTML + '</div> <div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert1Sub.innerHTML + '</div>';
    }
};
// Vertical Chart I Source
let vert1srcCode = "";
const vert1Source = document.getElementById("vert1Source"); // Chart source
const vert1srcText = document.getElementById("vert1srcText"); // Chart source text
vert1srcText.oninput = function() {
    vert1Source.innerHTML = vert1srcText.value;
    vert1Source.style.marginTop = vert1srcText.value ? "20px" : "0";
    vert1srcCode = vert1srcText.value ? '<div style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; margin: 20px 0; text-align: center;" class="chartVertSrc">' + vert1Source.innerHTML + '</div>' : "";
};

// Vertical Chart I Color Picker
const vert1colorPick = document.getElementById("vert1colorPick");
vert1colorPick.addEventListener("change", (evt) => {
    vert1Row1b.style.backgroundColor = evt.detail.hex;
    vert1Color1.value = evt.detail.hex;
    vert1Row2b.style.backgroundColor = evt.detail.hex;
    vert1Color2.value = evt.detail.hex;
    vert1Row3b.style.backgroundColor = evt.detail.hex;
    vert1Color3.value = evt.detail.hex;
    vert1Row4b.style.backgroundColor = evt.detail.hex;
    vert1Color4.value = evt.detail.hex;
    vert1Row5b.style.backgroundColor = evt.detail.hex;
    vert1Color5.value = evt.detail.hex;
    vert1Row6b.style.backgroundColor = evt.detail.hex;
    vert1Color6.value = evt.detail.hex;
    vert1Row7b.style.backgroundColor = evt.detail.hex;
    vert1Color7.value = evt.detail.hex;
    vert1Row8b.style.backgroundColor = evt.detail.hex;
    vert1Color8.value = evt.detail.hex;
    vert1Row9b.style.backgroundColor = evt.detail.hex;
    vert1Color9.value = evt.detail.hex;
    vert1Row10b.style.backgroundColor = evt.detail.hex;
    vert1Color10.value = evt.detail.hex;
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
const vert1Weight = document.getElementById("vert1Weight");
const vert1Button = document.getElementById("vert1Button");
const vert1Output = document.getElementById("vert1Output");
vert1Button.addEventListener("mouseenter", () => { vert1Output.style.opacity = ".4"; vert1Weight.style.opacity = ".4"; } );
vert1Button.addEventListener("mouseleave", () => { vert1Output.style.opacity = ""; vert1Weight.style.opacity = ""; vert1Output.style.borderColor = ""; vert1Weight.style.color = ""; } );
vert1Button.addEventListener("click", () => {
    if (rowsData14.value === "1") {
        const chartCode = '' + vert1csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData14.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row1c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert1srcCode + '';
        vert1Output.textContent = chartCode;
        vert1Weight.textContent = Math.ceil(vert1Output.value.length / 1024) + 'KB';
    } else if (rowsData14.value === "2") {
        const chartCode = '' + vert1csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row2b.height + '" style="background-color: ' + vert1Color2.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData14.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row1c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row2c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert1srcCode + '';
        vert1Output.textContent = chartCode;
        vert1Weight.textContent = Math.ceil(vert1Output.value.length / 1024) + 'KB';
    } else if (rowsData14.value === "3") {
        const chartCode = '' + vert1csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row2b.height + '" style="background-color: ' + vert1Color2.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row3b.height + '" style="background-color: ' + vert1Color3.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData14.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row1c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row2c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row3c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert1srcCode + '';
        vert1Output.textContent = chartCode;
        vert1Weight.textContent = Math.ceil(vert1Output.value.length / 1024) + 'KB';
    } else if (rowsData14.value === "4") {
        const chartCode = '' + vert1csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row2b.height + '" style="background-color: ' + vert1Color2.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row3b.height + '" style="background-color: ' + vert1Color3.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row4b.height + '" style="background-color: ' + vert1Color4.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData14.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row1c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row2c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row3c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row4c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert1srcCode + '';
        vert1Output.textContent = chartCode;
        vert1Weight.textContent = Math.ceil(vert1Output.value.length / 1024) + 'KB';
    } else if (rowsData14.value === "5") {
        const chartCode = '' + vert1csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row2b.height + '" style="background-color: ' + vert1Color2.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row3b.height + '" style="background-color: ' + vert1Color3.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row4b.height + '" style="background-color: ' + vert1Color4.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row5b.height + '" style="background-color: ' + vert1Color5.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData14.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row1c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row2c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row3c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row4c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row5c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert1srcCode + '';
        vert1Output.textContent = chartCode;
        vert1Weight.textContent = Math.ceil(vert1Output.value.length / 1024) + 'KB';
    } else if (rowsData14.value === "6") {
        const chartCode = '' + vert1csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row2b.height + '" style="background-color: ' + vert1Color2.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row3b.height + '" style="background-color: ' + vert1Color3.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row4b.height + '" style="background-color: ' + vert1Color4.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row5b.height + '" style="background-color: ' + vert1Color5.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row6b.height + '" style="background-color: ' + vert1Color6.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData14.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row1c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row2c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row3c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row4c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row5c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row6c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert1srcCode + '';
        vert1Output.textContent = chartCode;
        vert1Weight.textContent = Math.ceil(vert1Output.value.length / 1024) + 'KB';
    } else if (rowsData14.value === "7") {
        const chartCode = '' + vert1csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row2b.height + '" style="background-color: ' + vert1Color2.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row3b.height + '" style="background-color: ' + vert1Color3.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row4b.height + '" style="background-color: ' + vert1Color4.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row5b.height + '" style="background-color: ' + vert1Color5.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row6b.height + '" style="background-color: ' + vert1Color6.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row7b.height + '" style="background-color: ' + vert1Color7.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData14.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row1c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row2c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row3c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row4c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row5c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row6c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row7c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert1srcCode + '';
        vert1Output.textContent = chartCode;
        vert1Weight.textContent = Math.ceil(vert1Output.value.length / 1024) + 'KB';
    } else if (rowsData14.value === "8") {
        const chartCode = '' + vert1csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row2b.height + '" style="background-color: ' + vert1Color2.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row3b.height + '" style="background-color: ' + vert1Color3.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row4b.height + '" style="background-color: ' + vert1Color4.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row5b.height + '" style="background-color: ' + vert1Color5.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row6b.height + '" style="background-color: ' + vert1Color6.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row7b.height + '" style="background-color: ' + vert1Color7.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row8a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row8b.height + '" style="background-color: ' + vert1Color8.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData14.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row1c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row2c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row3c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row4c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row5c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row6c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row7c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row8c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert1srcCode + '';
        vert1Output.textContent = chartCode;
        vert1Weight.textContent = Math.ceil(vert1Output.value.length / 1024) + 'KB';
    } else if (rowsData14.value === "9") {
        const chartCode = '' + vert1csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row2b.height + '" style="background-color: ' + vert1Color2.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row3b.height + '" style="background-color: ' + vert1Color3.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row4b.height + '" style="background-color: ' + vert1Color4.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row5b.height + '" style="background-color: ' + vert1Color5.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row6b.height + '" style="background-color: ' + vert1Color6.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row7b.height + '" style="background-color: ' + vert1Color7.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row8a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row8b.height + '" style="background-color: ' + vert1Color8.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row9a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row9b.height + '" style="background-color: ' + vert1Color9.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData14.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row1c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row2c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row3c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row4c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row5c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row6c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row7c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row8c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row9c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert1srcCode + '';
        vert1Output.textContent = chartCode;
        vert1Weight.textContent = Math.ceil(vert1Output.value.length / 1024) + 'KB';
    } else if (rowsData14.value === "10") {
        const chartCode = '' + vert1csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert1Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert1Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row1b.height + '" style="background-color: ' + vert1Color1.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row2b.height + '" style="background-color: ' + vert1Color2.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row3b.height + '" style="background-color: ' + vert1Color3.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row4b.height + '" style="background-color: ' + vert1Color4.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row5b.height + '" style="background-color: ' + vert1Color5.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row6b.height + '" style="background-color: ' + vert1Color6.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row7b.height + '" style="background-color: ' + vert1Color7.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row8a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row8b.height + '" style="background-color: ' + vert1Color8.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row9a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row9b.height + '" style="background-color: ' + vert1Color9.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert1Row10a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert1Row10b.height + '" style="background-color: ' + vert1Color10.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData14.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row1c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row2c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row3c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row4c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row5c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row6c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row7c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row8c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row9c.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert1Row10c.innerHTML + '</td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert1srcCode + '';
        vert1Output.textContent = chartCode;
        vert1Weight.textContent = Math.ceil(vert1Output.value.length / 1024) + 'KB';
    }
    vert1Output.style.opacity = "";
    vert1Weight.style.opacity = "";
    vert1Output.style.borderColor = "#166dfc";
    vert1Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(vert1Output.value);
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

// Vertical Chart II Caption
let vert2csCode = "";
const vert2Cap = document.getElementById("vert2Cap"); // Caption or chart title
const vert2capText = document.getElementById("vert2capText"); // Caption or chart title text
vert2capText.oninput = function() {
    vert2Cap.innerHTML = vert2capText.value;
    if (vert2capText.value == "" && vert2subText.value == "") {
        vert2Cap.style.marginBottom = "0";
        vert2Sub.style.marginBottom = "0";
        return vert2csCode = "";
    } else if (vert2capText.value == "" && vert2subText.value) {
        vert2Cap.style.marginBottom = "0";
        vert2Sub.style.marginBottom = "20px";
        return vert2csCode = '<div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert2Sub.innerHTML + '</div>';
    } else if (vert2capText.value && vert2subText.value == "") {
        vert2Cap.style.marginBottom = "20px";
        vert2Sub.style.marginBottom = "0";
        return vert2csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertCap">' + vert2Cap.innerHTML + '</div>';
    } else if (vert2capText.value && vert2subText.value) {
        vert2Cap.style.marginBottom = "4px";
        vert2Sub.style.marginBottom = "20px";
        return vert2csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: center;" class="chartVertCap">' + vert2Cap.innerHTML + '</div> <div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert2Sub.innerHTML + '</div>';
    }
};
// Vertical Chart II Subtitle
const vert2Sub = document.getElementById("vert2Sub"); // Caption or chart title
const vert2subText = document.getElementById("vert2subText"); // Caption or chart title text
vert2subText.oninput = function() {
    vert2Sub.innerHTML = vert2subText.value;
    if (vert2subText.value == "" && vert2capText.value == "" ) {
        vert2Sub.style.marginBottom = "0";
        vert2Cap.style.marginBottom = "0";
        return vert2csCode = "";
    } else if (vert2subText.value == "" && vert2capText.value) {
        vert2Sub.style.marginBottom = "0";
        vert2Cap.style.marginBottom = "20px";
        return vert2csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertCap">' + vert2Cap.innerHTML + '</div>';
    } else if (vert2subText.value && vert2capText.value == "") {
        vert2Sub.style.marginBottom = "20px";
        vert2Cap.style.marginBottom = "0";
        return vert2csCode = '<div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert2Sub.innerHTML + '</div>';
    } else if (vert2subText.value && vert2capText.value) {
        vert2Sub.style.marginBottom = "20px";
        vert2Cap.style.marginBottom = "4px";
        return vert2csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: center;" class="chartVertCap">' + vert2Cap.innerHTML + '</div> <div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert2Sub.innerHTML + '</div>';
    }
};
// Vertical Chart II Source
let vert2srcCode = "";
const vert2Source = document.getElementById("vert2Source"); // Chart source
const vert2srcText = document.getElementById("vert2srcText"); // Chart source text
vert2srcText.oninput = function() {
    vert2Source.innerHTML = vert2srcText.value;
    vert2Source.style.marginTop = vert2srcText.value ? "20px" : "0";
    vert2srcCode = vert2srcText.value ? '<div style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; margin: 20px 0; text-align: center;" class="chartVertSrc">' + vert2Source.innerHTML + '</div>' : "";
};

// Vertical Chart II Color Picker
const vert2colorPickD = document.getElementById("vert2colorPickD");
vert2colorPickD.addEventListener("change", (evt) => {
    vert2Row1d.style.backgroundColor = evt.detail.hex;
    vert2Color1d.value = evt.detail.hex;
    vert2Row2d.style.backgroundColor = evt.detail.hex;
    vert2Color2d.value = evt.detail.hex;
    vert2Row3d.style.backgroundColor = evt.detail.hex;
    vert2Color3d.value = evt.detail.hex;
    vert2Row4d.style.backgroundColor = evt.detail.hex;
    vert2Color4d.value = evt.detail.hex;
    vert2Row5d.style.backgroundColor = evt.detail.hex;
    vert2Color5d.value = evt.detail.hex;
    vert2Row6d.style.backgroundColor = evt.detail.hex;
    vert2Color6d.value = evt.detail.hex;
    vert2Row7d.style.backgroundColor = evt.detail.hex;
    vert2Color7d.value = evt.detail.hex;
    vert2Row8d.style.backgroundColor = evt.detail.hex;
    vert2Color8d.value = evt.detail.hex;
    vert2Row9d.style.backgroundColor = evt.detail.hex;
    vert2Color9d.value = evt.detail.hex;
    vert2Row10d.style.backgroundColor = evt.detail.hex;
    vert2Color10d.value = evt.detail.hex;
    legend6Color3.style.color = evt.detail.hex;
    legend6Color3.style.backgroundColor = evt.detail.hex;
    legend6Color3.style.borderColor = evt.detail.hex;
    legend6Color3x.value = evt.detail.hex;
    legend6Color3x.value = evt.detail.hex;
    legend6Color3x.value = evt.detail.hex;
});
const vert2colorPickC = document.getElementById("vert2colorPickC");
vert2colorPickC.addEventListener("change", (evt) => {
    vert2Row1c.style.backgroundColor = evt.detail.hex;
    vert2Color1c.value = evt.detail.hex;
    vert2Row2c.style.backgroundColor = evt.detail.hex;
    vert2Color2c.value = evt.detail.hex;
    vert2Row3c.style.backgroundColor = evt.detail.hex;
    vert2Color3c.value = evt.detail.hex;
    vert2Row4c.style.backgroundColor = evt.detail.hex;
    vert2Color4c.value = evt.detail.hex;
    vert2Row5c.style.backgroundColor = evt.detail.hex;
    vert2Color5c.value = evt.detail.hex;
    vert2Row6c.style.backgroundColor = evt.detail.hex;
    vert2Color6c.value = evt.detail.hex;
    vert2Row7c.style.backgroundColor = evt.detail.hex;
    vert2Color7c.value = evt.detail.hex;
    vert2Row8c.style.backgroundColor = evt.detail.hex;
    vert2Color8c.value = evt.detail.hex;
    vert2Row9c.style.backgroundColor = evt.detail.hex;
    vert2Color9c.value = evt.detail.hex;
    vert2Row10c.style.backgroundColor = evt.detail.hex;
    vert2Color10c.value = evt.detail.hex;
    legend6Color2.style.color = evt.detail.hex;
    legend6Color2.style.backgroundColor = evt.detail.hex;
    legend6Color2.style.borderColor = evt.detail.hex;
    legend6Color2x.value = evt.detail.hex;
    legend6Color2x.value = evt.detail.hex;
    legend6Color2x.value = evt.detail.hex;
});
const vert2colorPickB = document.getElementById("vert2colorPickB");
vert2colorPickB.addEventListener("change", (evt) => {
    vert2Row1b.style.backgroundColor = evt.detail.hex;
    vert2Color1b.value = evt.detail.hex;
    vert2Row2b.style.backgroundColor = evt.detail.hex;
    vert2Color2b.value = evt.detail.hex;
    vert2Row3b.style.backgroundColor = evt.detail.hex;
    vert2Color3b.value = evt.detail.hex;
    vert2Row4b.style.backgroundColor = evt.detail.hex;
    vert2Color4b.value = evt.detail.hex;
    vert2Row5b.style.backgroundColor = evt.detail.hex;
    vert2Color5b.value = evt.detail.hex;
    vert2Row6b.style.backgroundColor = evt.detail.hex;
    vert2Color6b.value = evt.detail.hex;
    vert2Row7b.style.backgroundColor = evt.detail.hex;
    vert2Color7b.value = evt.detail.hex;
    vert2Row8b.style.backgroundColor = evt.detail.hex;
    vert2Color8b.value = evt.detail.hex;
    vert2Row9b.style.backgroundColor = evt.detail.hex;
    vert2Color9b.value = evt.detail.hex;
    vert2Row10b.style.backgroundColor = evt.detail.hex;
    vert2Color10b.value = evt.detail.hex;
    legend6Color1.style.color = evt.detail.hex;
    legend6Color1.style.backgroundColor = evt.detail.hex;
    legend6Color1.style.borderColor = evt.detail.hex;
    legend6Color1x.value = evt.detail.hex;
    legend6Color1x.value = evt.detail.hex;
    legend6Color1x.value = evt.detail.hex;
});

// Vertical Chart II Text/Color Legend
const legend6Text1 = document.getElementById("legend6Text1");
const legend6Text1x = document.getElementById("legend6Text1x");
legend6Text1x.oninput = function() {
    legend6Text1.innerHTML = legend6Text1x.value;
};
const legend6Text2 = document.getElementById("legend6Text2");
const legend6Text2x = document.getElementById("legend6Text2x");
legend6Text2x.oninput = function() {
    legend6Text2.innerHTML = legend6Text2x.value;
};
const legend6Text3 = document.getElementById("legend6Text3");
const legend6Text3x = document.getElementById("legend6Text3x");
legend6Text3x.oninput = function() {
    legend6Text3.innerHTML = legend6Text3x.value;
};
const legend6Color1 = document.getElementById("legend6Color1");
const legend6Color1x = document.getElementById("legend6Color1x");
legend6Color1x.oninput = function() {
    legend6Color1.style.color = legend6Color1x.value;
    legend6Color1.style.backgroundColor = legend6Color1x.value;
    legend6Color1.style.borderColor = legend6Color1x.value;
};
const legend6Color2 = document.getElementById("legend6Color2");
const legend6Color2x = document.getElementById("legend6Color2x");
legend6Color2x.oninput = function() {
    legend6Color2.style.color = legend6Color2x.value;
    legend6Color2.style.backgroundColor = legend6Color2x.value;
    legend6Color2.style.borderColor = legend6Color2x.value;
};
const legend6Color3 = document.getElementById("legend6Color3");
const legend6Color3x = document.getElementById("legend6Color3x");
legend6Color3x.oninput = function() {
    legend6Color3.style.color = legend6Color3x.value;
    legend6Color3.style.backgroundColor = legend6Color3x.value;
    legend6Color3.style.borderColor = legend6Color3x.value;
};

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
const vert2Weight = document.getElementById("vert2Weight");
const vert2Button = document.getElementById("vert2Button");
const vert2Output = document.getElementById("vert2Output");
vert2Button.addEventListener("mouseenter", () => { vert2Output.style.opacity = ".4"; vert2Weight.style.opacity = ".4"; } );
vert2Button.addEventListener("mouseleave", () => { vert2Output.style.opacity = ""; vert2Weight.style.opacity = ""; vert2Output.style.borderColor = ""; vert2Weight.style.color = ""; } );
vert2Button.addEventListener("click", () => {
    if (rowsData15.value === "1") {
        const chartCode = '' + vert2csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend6Color1x.value + '; border: 1px solid ' + legend6Color1x.value + '; color: ' + legend6Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color2x.value + '; border: 1px solid ' + legend6Color2x.value + '; color: ' + legend6Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color3x.value + '; border: 1px solid ' + legend6Color3x.value + '; color: ' + legend6Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData15.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row1e.innerHTML + '</td></tr></table><!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert2srcCode + '';
        vert2Output.textContent = chartCode;
        vert2Weight.textContent = Math.ceil(vert2Output.value.length / 1024) + 'KB';
    } else if (rowsData15.value === "2") {
        const chartCode = '' + vert2csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend6Color1x.value + '; border: 1px solid ' + legend6Color1x.value + '; color: ' + legend6Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color2x.value + '; border: 1px solid ' + legend6Color2x.value + '; color: ' + legend6Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color3x.value + '; border: 1px solid ' + legend6Color3x.value + '; color: ' + legend6Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row2b.height + '" style="background-color: ' + vert2Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2c.height + '" style="background-color: ' + vert2Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2d.height + '" style="background-color: ' + vert2Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData15.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row1e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row2e.innerHTML + '</td></tr></table><!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert2srcCode + '';
        vert2Output.textContent = chartCode;
        vert2Weight.textContent = Math.ceil(vert2Output.value.length / 1024) + 'KB';
    } else if (rowsData15.value === "3") {
        const chartCode = '' + vert2csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend6Color1x.value + '; border: 1px solid ' + legend6Color1x.value + '; color: ' + legend6Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color2x.value + '; border: 1px solid ' + legend6Color2x.value + '; color: ' + legend6Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color3x.value + '; border: 1px solid ' + legend6Color3x.value + '; color: ' + legend6Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row2b.height + '" style="background-color: ' + vert2Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2c.height + '" style="background-color: ' + vert2Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2d.height + '" style="background-color: ' + vert2Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row3b.height + '" style="background-color: ' + vert2Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3c.height + '" style="background-color: ' + vert2Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3d.height + '" style="background-color: ' + vert2Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData15.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row1e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row2e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row3e.innerHTML + '</td></tr></table><!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert2srcCode + '';
        vert2Output.textContent = chartCode;
        vert2Weight.textContent = Math.ceil(vert2Output.value.length / 1024) + 'KB';
    } else if (rowsData15.value === "4") {
        const chartCode = '' + vert2csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend6Color1x.value + '; border: 1px solid ' + legend6Color1x.value + '; color: ' + legend6Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color2x.value + '; border: 1px solid ' + legend6Color2x.value + '; color: ' + legend6Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color3x.value + '; border: 1px solid ' + legend6Color3x.value + '; color: ' + legend6Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row2b.height + '" style="background-color: ' + vert2Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2c.height + '" style="background-color: ' + vert2Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2d.height + '" style="background-color: ' + vert2Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row3b.height + '" style="background-color: ' + vert2Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3c.height + '" style="background-color: ' + vert2Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3d.height + '" style="background-color: ' + vert2Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row4b.height + '" style="background-color: ' + vert2Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4c.height + '" style="background-color: ' + vert2Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4d.height + '" style="background-color: ' + vert2Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData15.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row1e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row2e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row3e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row4e.innerHTML + '</td></tr></table><!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert2srcCode + '';
        vert2Output.textContent = chartCode;
        vert2Weight.textContent = Math.ceil(vert2Output.value.length / 1024) + 'KB';
    } else if (rowsData15.value === "5") {
        const chartCode = '' + vert2csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend6Color1x.value + '; border: 1px solid ' + legend6Color1x.value + '; color: ' + legend6Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color2x.value + '; border: 1px solid ' + legend6Color2x.value + '; color: ' + legend6Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color3x.value + '; border: 1px solid ' + legend6Color3x.value + '; color: ' + legend6Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row2b.height + '" style="background-color: ' + vert2Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2c.height + '" style="background-color: ' + vert2Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2d.height + '" style="background-color: ' + vert2Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row3b.height + '" style="background-color: ' + vert2Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3c.height + '" style="background-color: ' + vert2Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3d.height + '" style="background-color: ' + vert2Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row4b.height + '" style="background-color: ' + vert2Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4c.height + '" style="background-color: ' + vert2Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4d.height + '" style="background-color: ' + vert2Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row5b.height + '" style="background-color: ' + vert2Color5b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5c.height + '" style="background-color: ' + vert2Color5c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5d.height + '" style="background-color: ' + vert2Color5d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData15.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row1e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row2e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row3e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row4e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row5e.innerHTML + '</td></tr></table><!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert2srcCode + '';
        vert2Output.textContent = chartCode;
        vert2Weight.textContent = Math.ceil(vert2Output.value.length / 1024) + 'KB';
    } else if (rowsData15.value === "6") {
        const chartCode = '' + vert2csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend6Color1x.value + '; border: 1px solid ' + legend6Color1x.value + '; color: ' + legend6Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color2x.value + '; border: 1px solid ' + legend6Color2x.value + '; color: ' + legend6Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color3x.value + '; border: 1px solid ' + legend6Color3x.value + '; color: ' + legend6Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row2b.height + '" style="background-color: ' + vert2Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2c.height + '" style="background-color: ' + vert2Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2d.height + '" style="background-color: ' + vert2Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row3b.height + '" style="background-color: ' + vert2Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3c.height + '" style="background-color: ' + vert2Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3d.height + '" style="background-color: ' + vert2Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row4b.height + '" style="background-color: ' + vert2Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4c.height + '" style="background-color: ' + vert2Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4d.height + '" style="background-color: ' + vert2Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row5b.height + '" style="background-color: ' + vert2Color5b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5c.height + '" style="background-color: ' + vert2Color5c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5d.height + '" style="background-color: ' + vert2Color5d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row6b.height + '" style="background-color: ' + vert2Color6b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6c.height + '" style="background-color: ' + vert2Color6c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6d.height + '" style="background-color: ' + vert2Color6d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData15.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row1e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row2e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row3e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row4e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row5e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row6e.innerHTML + '</td></tr></table><!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert2srcCode + '';
        vert2Output.textContent = chartCode;
        vert2Weight.textContent = Math.ceil(vert2Output.value.length / 1024) + 'KB';
    } else if (rowsData15.value === "7") {
        const chartCode = '' + vert2csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend6Color1x.value + '; border: 1px solid ' + legend6Color1x.value + '; color: ' + legend6Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color2x.value + '; border: 1px solid ' + legend6Color2x.value + '; color: ' + legend6Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color3x.value + '; border: 1px solid ' + legend6Color3x.value + '; color: ' + legend6Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row2b.height + '" style="background-color: ' + vert2Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2c.height + '" style="background-color: ' + vert2Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2d.height + '" style="background-color: ' + vert2Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row3b.height + '" style="background-color: ' + vert2Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3c.height + '" style="background-color: ' + vert2Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3d.height + '" style="background-color: ' + vert2Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row4b.height + '" style="background-color: ' + vert2Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4c.height + '" style="background-color: ' + vert2Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4d.height + '" style="background-color: ' + vert2Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row5b.height + '" style="background-color: ' + vert2Color5b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5c.height + '" style="background-color: ' + vert2Color5c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5d.height + '" style="background-color: ' + vert2Color5d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row6b.height + '" style="background-color: ' + vert2Color6b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6c.height + '" style="background-color: ' + vert2Color6c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6d.height + '" style="background-color: ' + vert2Color6d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row7b.height + '" style="background-color: ' + vert2Color7b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row7c.height + '" style="background-color: ' + vert2Color7c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row7d.height + '" style="background-color: ' + vert2Color7d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData15.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row1e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row2e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row3e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row4e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row5e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row6e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row7e.innerHTML + '</td></tr></table><!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert2srcCode + '';
        vert2Output.textContent = chartCode;
        vert2Weight.textContent = Math.ceil(vert2Output.value.length / 1024) + 'KB';
    } else if (rowsData15.value === "8") {
        const chartCode = '' + vert2csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend6Color1x.value + '; border: 1px solid ' + legend6Color1x.value + '; color: ' + legend6Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color2x.value + '; border: 1px solid ' + legend6Color2x.value + '; color: ' + legend6Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color3x.value + '; border: 1px solid ' + legend6Color3x.value + '; color: ' + legend6Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row2b.height + '" style="background-color: ' + vert2Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2c.height + '" style="background-color: ' + vert2Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2d.height + '" style="background-color: ' + vert2Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row3b.height + '" style="background-color: ' + vert2Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3c.height + '" style="background-color: ' + vert2Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3d.height + '" style="background-color: ' + vert2Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row4b.height + '" style="background-color: ' + vert2Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4c.height + '" style="background-color: ' + vert2Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4d.height + '" style="background-color: ' + vert2Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row5b.height + '" style="background-color: ' + vert2Color5b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5c.height + '" style="background-color: ' + vert2Color5c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5d.height + '" style="background-color: ' + vert2Color5d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row6b.height + '" style="background-color: ' + vert2Color6b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6c.height + '" style="background-color: ' + vert2Color6c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6d.height + '" style="background-color: ' + vert2Color6d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row7b.height + '" style="background-color: ' + vert2Color7b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row7c.height + '" style="background-color: ' + vert2Color7c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row7d.height + '" style="background-color: ' + vert2Color7d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row8a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row8b.height + '" style="background-color: ' + vert2Color8b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row8c.height + '" style="background-color: ' + vert2Color8c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row8d.height + '" style="background-color: ' + vert2Color8d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData15.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row1e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row2e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row3e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row4e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row5e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row6e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row7e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row8e.innerHTML + '</td></tr></table><!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert2srcCode + '';
        vert2Output.textContent = chartCode;
        vert2Weight.textContent = Math.ceil(vert2Output.value.length / 1024) + 'KB';
    } else if (rowsData15.value === "9") {
        const chartCode = '' + vert2csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend6Color1x.value + '; border: 1px solid ' + legend6Color1x.value + '; color: ' + legend6Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color2x.value + '; border: 1px solid ' + legend6Color2x.value + '; color: ' + legend6Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color3x.value + '; border: 1px solid ' + legend6Color3x.value + '; color: ' + legend6Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row2b.height + '" style="background-color: ' + vert2Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2c.height + '" style="background-color: ' + vert2Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2d.height + '" style="background-color: ' + vert2Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row3b.height + '" style="background-color: ' + vert2Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3c.height + '" style="background-color: ' + vert2Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3d.height + '" style="background-color: ' + vert2Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row4b.height + '" style="background-color: ' + vert2Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4c.height + '" style="background-color: ' + vert2Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4d.height + '" style="background-color: ' + vert2Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row5b.height + '" style="background-color: ' + vert2Color5b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5c.height + '" style="background-color: ' + vert2Color5c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5d.height + '" style="background-color: ' + vert2Color5d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row6b.height + '" style="background-color: ' + vert2Color6b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6c.height + '" style="background-color: ' + vert2Color6c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6d.height + '" style="background-color: ' + vert2Color6d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row7b.height + '" style="background-color: ' + vert2Color7b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row7c.height + '" style="background-color: ' + vert2Color7c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row7d.height + '" style="background-color: ' + vert2Color7d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row8a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row8b.height + '" style="background-color: ' + vert2Color8b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row8c.height + '" style="background-color: ' + vert2Color8c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row8d.height + '" style="background-color: ' + vert2Color8d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row9a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row9b.height + '" style="background-color: ' + vert2Color9b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row9c.height + '" style="background-color: ' + vert2Color9c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row9d.height + '" style="background-color: ' + vert2Color9d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData15.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row1e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row2e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row3e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row4e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row5e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row6e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row7e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row8e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row9e.innerHTML + '</td></tr></table><!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert2srcCode + '';
        vert2Output.textContent = chartCode;
        vert2Weight.textContent = Math.ceil(vert2Output.value.length / 1024) + 'KB';
    } else if (rowsData15.value === "10") {
        const chartCode = '' + vert2csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend6Color1x.value + '; border: 1px solid ' + legend6Color1x.value + '; color: ' + legend6Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color2x.value + '; border: 1px solid ' + legend6Color2x.value + '; color: ' + legend6Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend6Color3x.value + '; border: 1px solid ' + legend6Color3x.value + '; color: ' + legend6Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend6Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert2Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert2Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row1b.height + '" style="background-color: ' + vert2Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1c.height + '" style="background-color: ' + vert2Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row1d.height + '" style="background-color: ' + vert2Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row2b.height + '" style="background-color: ' + vert2Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2c.height + '" style="background-color: ' + vert2Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row2d.height + '" style="background-color: ' + vert2Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row3b.height + '" style="background-color: ' + vert2Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3c.height + '" style="background-color: ' + vert2Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row3d.height + '" style="background-color: ' + vert2Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row4b.height + '" style="background-color: ' + vert2Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4c.height + '" style="background-color: ' + vert2Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row4d.height + '" style="background-color: ' + vert2Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row5b.height + '" style="background-color: ' + vert2Color5b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5c.height + '" style="background-color: ' + vert2Color5c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row5d.height + '" style="background-color: ' + vert2Color5d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row6b.height + '" style="background-color: ' + vert2Color6b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6c.height + '" style="background-color: ' + vert2Color6c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row6d.height + '" style="background-color: ' + vert2Color6d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row7b.height + '" style="background-color: ' + vert2Color7b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row7c.height + '" style="background-color: ' + vert2Color7c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row7d.height + '" style="background-color: ' + vert2Color7d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row8a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row8b.height + '" style="background-color: ' + vert2Color8b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row8c.height + '" style="background-color: ' + vert2Color8c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row8d.height + '" style="background-color: ' + vert2Color8d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row9a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row9b.height + '" style="background-color: ' + vert2Color9b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row9c.height + '" style="background-color: ' + vert2Color9c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row9d.height + '" style="background-color: ' + vert2Color9d.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; max-width: 35px; padding: 0; text-align: center; white-space: nowrap;">' + vert2Row10a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert2Row10b.height + '" style="background-color: ' + vert2Color10b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row10c.height + '" style="background-color: ' + vert2Color10c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert2Row10d.height + '" style="background-color: ' + vert2Color10d.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData15.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row1e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row2e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row3e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row4e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row5e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row6e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row7e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row8e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row9e.innerHTML + '</td><td height="10" valign="top" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 2px 0 8px; text-align: center; vertical-align: top;">' + vert2Row10e.innerHTML + '</td></tr></table><!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert2srcCode + '';
        vert2Output.textContent = chartCode;
        vert2Weight.textContent = Math.ceil(vert2Output.value.length / 1024) + 'KB';
    }
    vert2Output.style.opacity = "";
    vert2Weight.style.opacity = "";
    vert2Output.style.borderColor = "#166dfc";
    vert2Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(vert2Output.value);
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

// Vertical Chart III Caption
let vert3csCode = "";
const vert3Cap = document.getElementById("vert3Cap"); // Caption or chart title
const vert3capText = document.getElementById("vert3capText"); // Caption or chart title text
vert3capText.oninput = function() {
    vert3Cap.innerHTML = vert3capText.value;
    if (vert3capText.value == "" && vert3subText.value == "") {
        vert3Cap.style.marginBottom = "0";
        vert3Sub.style.marginBottom = "0";
        return vert3csCode = "";
    } else if (vert3capText.value == "" && vert3subText.value) {
        vert3Cap.style.marginBottom = "0";
        vert3Sub.style.marginBottom = "20px";
        return vert3csCode = '<div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert3Sub.innerHTML + '</div>';
    } else if (vert3capText.value && vert3subText.value == "") {
        vert3Cap.style.marginBottom = "20px";
        vert3Sub.style.marginBottom = "0";
        return vert3csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertCap">' + vert3Cap.innerHTML + '</div>';
    } else if (vert3capText.value && vert3subText.value) {
        vert3Cap.style.marginBottom = "4px";
        vert3Sub.style.marginBottom = "20px";
        return vert3csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: center;" class="chartVertCap">' + vert3Cap.innerHTML + '</div> <div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert3Sub.innerHTML + '</div>';
    }
};
// Vertical Chart III Subtitle
const vert3Sub = document.getElementById("vert3Sub"); // Caption or chart title
const vert3subText = document.getElementById("vert3subText"); // Caption or chart title text
vert3subText.oninput = function() {
    vert3Sub.innerHTML = vert3subText.value;
    if (vert3subText.value == "" && vert3capText.value == "" ) {
        vert3Sub.style.marginBottom = "0";
        vert3Cap.style.marginBottom = "0";
        return vert3csCode = "";
    } else if (vert3subText.value == "" && vert3capText.value) {
        vert3Sub.style.marginBottom = "0";
        vert3Cap.style.marginBottom = "20px";
        return vert3csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertCap">' + vert3Cap.innerHTML + '</div>';
    } else if (vert3subText.value && vert3capText.value == "") {
        vert3Sub.style.marginBottom = "20px";
        vert3Cap.style.marginBottom = "0";
        return vert3csCode = '<div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert3Sub.innerHTML + '</div>';
    } else if (vert3subText.value && vert3capText.value) {
        vert3Sub.style.marginBottom = "20px";
        vert3Cap.style.marginBottom = "4px";
        return vert3csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: center;" class="chartVertCap">' + vert3Cap.innerHTML + '</div> <div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert3Sub.innerHTML + '</div>';
    }
};
// Vertical Chart III Source
let vert3srcCode = "";
const vert3Source = document.getElementById("vert3Source"); // Chart source
const vert3srcText = document.getElementById("vert3srcText"); // Chart source text
vert3srcText.oninput = function() {
    vert3Source.innerHTML = vert3srcText.value;
    vert3Source.style.marginTop = vert3srcText.value ? "20px" : "0";
    vert3srcCode = vert3srcText.value ? '<div style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; margin: 20px 0; text-align: center;" class="chartVertSrc">' + vert3Source.innerHTML + '</div>' : "";
};

// Vertical Chart III Color Picker
const vert3colorPick = document.getElementById("vert3colorPick");
vert3colorPick.addEventListener("change", (evt) => {
    vert3Row1b.style.backgroundColor = evt.detail.hex;
    vert3Color1.value = evt.detail.hex;
    vert3Row2b.style.backgroundColor = evt.detail.hex;
    vert3Color2.value = evt.detail.hex;
    vert3Row3b.style.backgroundColor = evt.detail.hex;
    vert3Color3.value = evt.detail.hex;
    vert3Row4b.style.backgroundColor = evt.detail.hex;
    vert3Color4.value = evt.detail.hex;
    vert3Row5b.style.backgroundColor = evt.detail.hex;
    vert3Color5.value = evt.detail.hex;
    vert3Row6b.style.backgroundColor = evt.detail.hex;
    vert3Color6.value = evt.detail.hex;
    vert3Row7b.style.backgroundColor = evt.detail.hex;
    vert3Color7.value = evt.detail.hex;
    vert3Row8b.style.backgroundColor = evt.detail.hex;
    vert3Color8.value = evt.detail.hex;
    vert3Row9b.style.backgroundColor = evt.detail.hex;
    vert3Color9.value = evt.detail.hex;
    vert3Row10b.style.backgroundColor = evt.detail.hex;
    vert3Color10.value = evt.detail.hex;
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
const vert3Weight = document.getElementById("vert3Weight");
const vert3Button = document.getElementById("vert3Button");
const vert3Output = document.getElementById("vert3Output");
vert3Button.addEventListener("mouseenter", () => { vert3Output.style.opacity = ".4"; vert3Weight.style.opacity = ".4"; } );
vert3Button.addEventListener("mouseleave", () => { vert3Output.style.opacity = ""; vert3Weight.style.opacity = ""; vert3Output.style.borderColor = ""; vert3Weight.style.color = ""; } );
vert3Button.addEventListener("click", () => {
    if (rowsData16.value === "1") {
        const chartCode = '' + vert3csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> valign="bottom" <td height="10" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0  vertical-align: bottom;2px; text-align: center;">' + vert3Row1a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert3srcCode + '';
        vert3Output.textContent = chartCode;
        vert3Weight.textContent = Math.ceil(vert3Output.value.length / 1024) + 'KB';
    } else if (rowsData16.value === "2") {
        const chartCode = '' + vert3csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row1a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row2a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row2b.height + '" style="background-color: ' + vert3Color2.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row2c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert3srcCode + '';
        vert3Output.textContent = chartCode;
        vert3Weight.textContent = Math.ceil(vert3Output.value.length / 1024) + 'KB';
    } else if (rowsData16.value === "3") {
        const chartCode = '' + vert3csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row1a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row2a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row3a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row2b.height + '" style="background-color: ' + vert3Color2.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row2c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row3b.height + '" style="background-color: ' + vert3Color3.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row3c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert3srcCode + '';
        vert3Output.textContent = chartCode;
        vert3Weight.textContent = Math.ceil(vert3Output.value.length / 1024) + 'KB';
    } else if (rowsData16.value === "4") {
        const chartCode = '' + vert3csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row1a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row2a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row3a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row4a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row2b.height + '" style="background-color: ' + vert3Color2.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row2c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row3b.height + '" style="background-color: ' + vert3Color3.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row3c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row4b.height + '" style="background-color: ' + vert3Color4.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row4c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert3srcCode + '';
        vert3Output.textContent = chartCode;
        vert3Weight.textContent = Math.ceil(vert3Output.value.length / 1024) + 'KB';
    } else if (rowsData16.value === "5") {
        const chartCode = '' + vert3csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row1a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row2a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row3a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row4a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row5a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row2b.height + '" style="background-color: ' + vert3Color2.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row2c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row3b.height + '" style="background-color: ' + vert3Color3.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row3c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row4b.height + '" style="background-color: ' + vert3Color4.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row4c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row5b.height + '" style="background-color: ' + vert3Color5.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row5c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert3srcCode + '';
        vert3Output.textContent = chartCode;
        vert3Weight.textContent = Math.ceil(vert3Output.value.length / 1024) + 'KB';
    } else if (rowsData16.value === "6") {
        const chartCode = '' + vert3csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row1a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row2a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row3a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row4a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row5a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row6a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row2b.height + '" style="background-color: ' + vert3Color2.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row2c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row3b.height + '" style="background-color: ' + vert3Color3.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row3c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row4b.height + '" style="background-color: ' + vert3Color4.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row4c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row5b.height + '" style="background-color: ' + vert3Color5.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row5c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row6b.height + '" style="background-color: ' + vert3Color6.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row6c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert3srcCode + '';
        vert3Output.textContent = chartCode;
        vert3Weight.textContent = Math.ceil(vert3Output.value.length / 1024) + 'KB';
    } else if (rowsData16.value === "7") {
        const chartCode = '' + vert3csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row1a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row2a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row3a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row4a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row5a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row6a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row7a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row2b.height + '" style="background-color: ' + vert3Color2.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row2c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row3b.height + '" style="background-color: ' + vert3Color3.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row3c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row4b.height + '" style="background-color: ' + vert3Color4.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row4c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row5b.height + '" style="background-color: ' + vert3Color5.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row5c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row6b.height + '" style="background-color: ' + vert3Color6.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row6c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row7b.height + '" style="background-color: ' + vert3Color7.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row7c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert3srcCode + '';
        vert3Output.textContent = chartCode;
        vert3Weight.textContent = Math.ceil(vert3Output.value.length / 1024) + 'KB';
    } else if (rowsData16.value === "8") {
        const chartCode = '' + vert3csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row1a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row2a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row3a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row4a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row5a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row6a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row7a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row8a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row2b.height + '" style="background-color: ' + vert3Color2.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row2c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row3b.height + '" style="background-color: ' + vert3Color3.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row3c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row4b.height + '" style="background-color: ' + vert3Color4.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row4c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row5b.height + '" style="background-color: ' + vert3Color5.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row5c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row6b.height + '" style="background-color: ' + vert3Color6.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row6c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row7b.height + '" style="background-color: ' + vert3Color7.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row7c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row8b.height + '" style="background-color: ' + vert3Color8.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row8c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert3srcCode + '';
        vert3Output.textContent = chartCode;
        vert3Weight.textContent = Math.ceil(vert3Output.value.length / 1024) + 'KB';
    } else if (rowsData16.value === "9") {
        const chartCode = '' + vert3csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row1a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row2a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row3a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row4a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row5a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row6a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row7a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row8a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row9a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row2b.height + '" style="background-color: ' + vert3Color2.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row2c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row3b.height + '" style="background-color: ' + vert3Color3.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row3c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row4b.height + '" style="background-color: ' + vert3Color4.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row4c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row5b.height + '" style="background-color: ' + vert3Color5.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row5c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row6b.height + '" style="background-color: ' + vert3Color6.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row6c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row7b.height + '" style="background-color: ' + vert3Color7.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row7c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row8b.height + '" style="background-color: ' + vert3Color8.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row8c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row9b.height + '" style="background-color: ' + vert3Color9.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row9c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert3srcCode + '';
        vert3Output.textContent = chartCode;
        vert3Weight.textContent = Math.ceil(vert3Output.value.length / 1024) + 'KB';
    } else if (rowsData16.value === "10") {
        const chartCode = '' + vert3csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert3Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert3Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row1a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row2a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row3a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row4a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row5a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row6a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row7a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row8a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row9a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert3Row10a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData16.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row1b.height + '" style="background-color: ' + vert3Color1.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row1c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row2b.height + '" style="background-color: ' + vert3Color2.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row2c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row3b.height + '" style="background-color: ' + vert3Color3.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row3c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row4b.height + '" style="background-color: ' + vert3Color4.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row4c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row5b.height + '" style="background-color: ' + vert3Color5.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row5c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row6b.height + '" style="background-color: ' + vert3Color6.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row6c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row7b.height + '" style="background-color: ' + vert3Color7.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row7c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row8b.height + '" style="background-color: ' + vert3Color8.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row8c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row9b.height + '" style="background-color: ' + vert3Color9.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row9c.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert3Row10b.height + '" style="background-color: ' + vert3Color10.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert3Row10c.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert3srcCode + '';
        vert3Output.textContent = chartCode;
        vert3Weight.textContent = Math.ceil(vert3Output.value.length / 1024) + 'KB';
    }
    vert3Output.style.opacity = "";
    vert3Weight.style.opacity = "";
    vert3Output.style.borderColor = "#166dfc";
    vert3Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(vert3Output.value);
});
vert3Output.addEventListener("click", () => {
    vert3Output.select();
});

// Vertical Chart IV Row Selection
const vert4AxisLine = document.getElementById("vert4AxisLine");
const vert4Width = document.getElementById("vert4Width");
const vert4Bars = document.getElementsByClassName("vert4Bars");
const vert4AxisLabel = document.getElementsByClassName("vert4AxisLabel");
const vert4Controls = document.getElementsByClassName("vert4Controls");
const rowsData17 = document.getElementById("rowsData17");
rowsData17.addEventListener("change", () => {
    for (var i = 0; i < vert4Controls.length; i++) {
        vert4Controls[i].style.display = "none";
        vert4Bars[i].style.display = "none";
        vert4AxisLabel[i].style.display = "none";
        for (var x = 0; x < rowsData17.value; x++) {
            vert4Controls[x].style.display = "";
            vert4Bars[x].style.display = "";
            vert4AxisLabel[x].style.display = "";
        }
    }
    vert4Width.style.maxWidth = rowsData17.value * 50 + 'px';
    vert4AxisLine.colSpan = rowsData17.value;
});

// Vertical Chart IV Caption
let vert4csCode = "";
const vert4Cap = document.getElementById("vert4Cap"); // Caption or chart title
const vert4capText = document.getElementById("vert4capText"); // Caption or chart title text
vert4capText.oninput = function() {
    vert4Cap.innerHTML = vert4capText.value;
    if (vert4capText.value == "" && vert4subText.value == "") {
        vert4Cap.style.marginBottom = "0";
        vert4Sub.style.marginBottom = "0";
        return vert4csCode = "";
    } else if (vert4capText.value == "" && vert4subText.value) {
        vert4Cap.style.marginBottom = "0";
        vert4Sub.style.marginBottom = "20px";
        return vert4csCode = '<div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert4Sub.innerHTML + '</div>';
    } else if (vert4capText.value && vert4subText.value == "") {
        vert4Cap.style.marginBottom = "20px";
        vert4Sub.style.marginBottom = "0";
        return vert4csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertCap">' + vert4Cap.innerHTML + '</div>';
    } else if (vert4capText.value && vert4subText.value) {
        vert4Cap.style.marginBottom = "4px";
        vert4Sub.style.marginBottom = "20px";
        return vert4csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: center;" class="chartVertCap">' + vert4Cap.innerHTML + '</div> <div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert4Sub.innerHTML + '</div>';
    }
};
// Vertical Chart IV Subtitle
const vert4Sub = document.getElementById("vert4Sub"); // Caption or chart title
const vert4subText = document.getElementById("vert4subText"); // Caption or chart title text
vert4subText.oninput = function() {
    vert4Sub.innerHTML = vert4subText.value;
    if (vert4subText.value == "" && vert4capText.value == "" ) {
        vert4Sub.style.marginBottom = "0";
        vert4Cap.style.marginBottom = "0";
        return vert4csCode = "";
    } else if (vert4subText.value == "" && vert4capText.value) {
        vert4Sub.style.marginBottom = "0";
        vert4Cap.style.marginBottom = "20px";
        return vert4csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertCap">' + vert4Cap.innerHTML + '</div>';
    } else if (vert4subText.value && vert4capText.value == "") {
        vert4Sub.style.marginBottom = "20px";
        vert4Cap.style.marginBottom = "0";
        return vert4csCode = '<div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert4Sub.innerHTML + '</div>';
    } else if (vert4subText.value && vert4capText.value) {
        vert4Sub.style.marginBottom = "20px";
        vert4Cap.style.marginBottom = "4px";
        return vert4csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: center;" class="chartVertCap">' + vert4Cap.innerHTML + '</div> <div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert4Sub.innerHTML + '</div>';
    }
};
// Vertical Chart IV Source
let vert4srcCode = "";
const vert4Source = document.getElementById("vert4Source"); // Chart source
const vert4srcText = document.getElementById("vert4srcText"); // Chart source text
vert4srcText.oninput = function() {
    vert4Source.innerHTML = vert4srcText.value;
    vert4Source.style.marginTop = vert4srcText.value ? "20px" : "0";
    vert4srcCode = vert4srcText.value ? '<div style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; margin: 20px 0; text-align: center;" class="chartVertSrc">' + vert4Source.innerHTML + '</div>' : "";
};

// Vertical Chart IV Color Picker
const vert4colorPickD = document.getElementById("vert4colorPickD");
vert4colorPickD.addEventListener("change", (evt) => {
    vert4Row1d.style.backgroundColor = evt.detail.hex;
    vert4Color1d.value = evt.detail.hex;
    vert4Row2d.style.backgroundColor = evt.detail.hex;
    vert4Color2d.value = evt.detail.hex;
    vert4Row3d.style.backgroundColor = evt.detail.hex;
    vert4Color3d.value = evt.detail.hex;
    vert4Row4d.style.backgroundColor = evt.detail.hex;
    vert4Color4d.value = evt.detail.hex;
    vert4Row5d.style.backgroundColor = evt.detail.hex;
    vert4Color5d.value = evt.detail.hex;
    vert4Row6d.style.backgroundColor = evt.detail.hex;
    vert4Color6d.value = evt.detail.hex;
    vert4Row7d.style.backgroundColor = evt.detail.hex;
    vert4Color7d.value = evt.detail.hex;
    vert4Row8d.style.backgroundColor = evt.detail.hex;
    vert4Color8d.value = evt.detail.hex;
    vert4Row9d.style.backgroundColor = evt.detail.hex;
    vert4Color9d.value = evt.detail.hex;
    vert4Row10d.style.backgroundColor = evt.detail.hex;
    vert4Color10d.value = evt.detail.hex;
    legend7Color3.style.color = evt.detail.hex;
    legend7Color3.style.backgroundColor = evt.detail.hex;
    legend7Color3.style.borderColor = evt.detail.hex;
    legend7Color3x.value = evt.detail.hex;
    legend7Color3x.value = evt.detail.hex;
    legend7Color3x.value = evt.detail.hex;
});
const vert4colorPickC = document.getElementById("vert4colorPickC");
vert4colorPickC.addEventListener("change", (evt) => {
    vert4Row1c.style.backgroundColor = evt.detail.hex;
    vert4Color1c.value = evt.detail.hex;
    vert4Row2c.style.backgroundColor = evt.detail.hex;
    vert4Color2c.value = evt.detail.hex;
    vert4Row3c.style.backgroundColor = evt.detail.hex;
    vert4Color3c.value = evt.detail.hex;
    vert4Row4c.style.backgroundColor = evt.detail.hex;
    vert4Color4c.value = evt.detail.hex;
    vert4Row5c.style.backgroundColor = evt.detail.hex;
    vert4Color5c.value = evt.detail.hex;
    vert4Row6c.style.backgroundColor = evt.detail.hex;
    vert4Color6c.value = evt.detail.hex;
    vert4Row7c.style.backgroundColor = evt.detail.hex;
    vert4Color7c.value = evt.detail.hex;
    vert4Row8c.style.backgroundColor = evt.detail.hex;
    vert4Color8c.value = evt.detail.hex;
    vert4Row9c.style.backgroundColor = evt.detail.hex;
    vert4Color9c.value = evt.detail.hex;
    vert4Row10c.style.backgroundColor = evt.detail.hex;
    vert4Color10c.value = evt.detail.hex;
    legend7Color2.style.color = evt.detail.hex;
    legend7Color2.style.backgroundColor = evt.detail.hex;
    legend7Color2.style.borderColor = evt.detail.hex;
    legend7Color2x.value = evt.detail.hex;
    legend7Color2x.value = evt.detail.hex;
    legend7Color2x.value = evt.detail.hex;
});
const vert4colorPickB = document.getElementById("vert4colorPickB");
vert4colorPickB.addEventListener("change", (evt) => {
    vert4Row1b.style.backgroundColor = evt.detail.hex;
    vert4Color1b.value = evt.detail.hex;
    vert4Row2b.style.backgroundColor = evt.detail.hex;
    vert4Color2b.value = evt.detail.hex;
    vert4Row3b.style.backgroundColor = evt.detail.hex;
    vert4Color3b.value = evt.detail.hex;
    vert4Row4b.style.backgroundColor = evt.detail.hex;
    vert4Color4b.value = evt.detail.hex;
    vert4Row5b.style.backgroundColor = evt.detail.hex;
    vert4Color5b.value = evt.detail.hex;
    vert4Row6b.style.backgroundColor = evt.detail.hex;
    vert4Color6b.value = evt.detail.hex;
    vert4Row7b.style.backgroundColor = evt.detail.hex;
    vert4Color7b.value = evt.detail.hex;
    vert4Row8b.style.backgroundColor = evt.detail.hex;
    vert4Color8b.value = evt.detail.hex;
    vert4Row9b.style.backgroundColor = evt.detail.hex;
    vert4Color9b.value = evt.detail.hex;
    vert4Row10b.style.backgroundColor = evt.detail.hex;
    vert4Color10b.value = evt.detail.hex;
    legend7Color1.style.color = evt.detail.hex;
    legend7Color1.style.backgroundColor = evt.detail.hex;
    legend7Color1.style.borderColor = evt.detail.hex;
    legend7Color1x.value = evt.detail.hex;
    legend7Color1x.value = evt.detail.hex;
    legend7Color1x.value = evt.detail.hex;
});

// Vertical Chart IV Text/Color Legend
const legend7Text1 = document.getElementById("legend7Text1");
const legend7Text1x = document.getElementById("legend7Text1x");
legend7Text1x.oninput = function() {
    legend7Text1.innerHTML = legend7Text1x.value;
};
const legend7Text2 = document.getElementById("legend7Text2");
const legend7Text2x = document.getElementById("legend7Text2x");
legend7Text2x.oninput = function() {
    legend7Text2.innerHTML = legend7Text2x.value;
};
const legend7Text3 = document.getElementById("legend7Text3");
const legend7Text3x = document.getElementById("legend7Text3x");
legend7Text3x.oninput = function() {
    legend7Text3.innerHTML = legend7Text3x.value;
};
const legend7Color1 = document.getElementById("legend7Color1");
const legend7Color1x = document.getElementById("legend7Color1x");
legend7Color1x.oninput = function() {
    legend7Color1.style.color = legend7Color1x.value;
    legend7Color1.style.backgroundColor = legend7Color1x.value;
    legend7Color1.style.borderColor = legend7Color1x.value;
};
const legend7Color2 = document.getElementById("legend7Color2");
const legend7Color2x = document.getElementById("legend7Color2x");
legend7Color2x.oninput = function() {
    legend7Color2.style.color = legend7Color2x.value;
    legend7Color2.style.backgroundColor = legend7Color2x.value;
    legend7Color2.style.borderColor = legend7Color2x.value;
};
const legend7Color3 = document.getElementById("legend7Color3");
const legend7Color3x = document.getElementById("legend7Color3x");
legend7Color3x.oninput = function() {
    legend7Color3.style.color = legend7Color3x.value;
    legend7Color3.style.backgroundColor = legend7Color3x.value;
    legend7Color3.style.borderColor = legend7Color3x.value;
};

// Row 1 Customization Logic
const vert4Row1a = document.getElementById("vert4Row1a"); // Axis label
const vert4Text1a = document.getElementById("vert4Text1a");
vert4Text1a.oninput = function() {
    vert4Row1a.innerHTML = vert4Text1a.value;
};
const vert4Row1e = document.getElementById("vert4Row1e"); // Bottom vertical bar label
const vert4Text1e = document.getElementById("vert4Text1e");
vert4Text1e.oninput = function() {
    vert4Row1e.innerHTML = vert4Text1e.value;
};
const vert4Size1b = document.getElementById("vert4Size1b");
vert4Size1b.oninput = function() {
    vert4Row1b.height = ((Math.abs(vert4Size1b.value) / 100) * 300);
    vert4Size1b.min = (-(100 - (Math.abs(vert4Size1c.value)) - (Math.abs(vert4Size1d.value))));
    vert4Size1c.min = (-(100 - (Math.abs(vert4Size1d.value)) - (Math.abs(vert4Size1b.value))));
    vert4Size1d.min = (-(100 - (Math.abs(vert4Size1b.value)) - (Math.abs(vert4Size1c.value))));
};
const vert4Color1b = document.getElementById("vert4Color1b");
vert4Color1b.oninput = function() {
    vert4Row1b.style.backgroundColor = vert4Color1b.value;
};
const vert4Size1c = document.getElementById("vert4Size1c");
vert4Size1c.oninput = function() {
    vert4Row1c.height = ((Math.abs(vert4Size1c.value) / 100) * 300);
    vert4Size1b.min = (-(100 - (Math.abs(vert4Size1c.value)) - (Math.abs(vert4Size1d.value))));
    vert4Size1c.min = (-(100 - (Math.abs(vert4Size1d.value)) - (Math.abs(vert4Size1b.value))));
    vert4Size1d.min = (-(100 - (Math.abs(vert4Size1b.value)) - (Math.abs(vert4Size1c.value))));
};
const vert4Color1c = document.getElementById("vert4Color1c");
vert4Color1c.oninput = function() {
    vert4Row1c.style.backgroundColor = vert4Color1c.value;
};
const vert4Size1d = document.getElementById("vert4Size1d");
vert4Size1d.oninput = function() {
    vert4Row1d.height = ((Math.abs(vert4Size1d.value) / 100) * 300);
    vert4Size1b.min = (-(100 - (Math.abs(vert4Size1c.value)) - (Math.abs(vert4Size1d.value))));
    vert4Size1c.min = (-(100 - (Math.abs(vert4Size1d.value)) - (Math.abs(vert4Size1b.value))));
    vert4Size1d.min = (-(100 - (Math.abs(vert4Size1b.value)) - (Math.abs(vert4Size1c.value))));
};
const vert4Color1d = document.getElementById("vert4Color1d");
vert4Color1d.oninput = function() {
    vert4Row1d.style.backgroundColor = vert4Color1d.value;
};

// Row 2 Customization Logic
const vert4Row2a = document.getElementById("vert4Row2a"); // Axis label
const vert4Text2a = document.getElementById("vert4Text2a");
vert4Text2a.oninput = function() {
    vert4Row2a.innerHTML = vert4Text2a.value;
};
const vert4Row2e = document.getElementById("vert4Row2e"); // Bottom vertical bar label
const vert4Text2e = document.getElementById("vert4Text2e");
vert4Text2e.oninput = function() {
    vert4Row2e.innerHTML = vert4Text2e.value;
};
const vert4Size2b = document.getElementById("vert4Size2b");
vert4Size2b.oninput = function() {
    vert4Row2b.height = ((Math.abs(vert4Size2b.value) / 100) * 300);
    vert4Size2b.min = (-(100 - (Math.abs(vert4Size2c.value)) - (Math.abs(vert4Size2d.value))));
    vert4Size2c.min = (-(100 - (Math.abs(vert4Size2d.value)) - (Math.abs(vert4Size2b.value))));
    vert4Size2d.min = (-(100 - (Math.abs(vert4Size2b.value)) - (Math.abs(vert4Size2c.value))));
};
const vert4Color2b = document.getElementById("vert4Color2b");
vert4Color2b.oninput = function() {
    vert4Row2b.style.backgroundColor = vert4Color2b.value;
};
const vert4Size2c = document.getElementById("vert4Size2c");
vert4Size2c.oninput = function() {
    vert4Row2c.height = ((Math.abs(vert4Size2c.value) / 100) * 300);
    vert4Size2b.min = (-(100 - (Math.abs(vert4Size2c.value)) - (Math.abs(vert4Size2d.value))));
    vert4Size2c.min = (-(100 - (Math.abs(vert4Size2d.value)) - (Math.abs(vert4Size2b.value))));
    vert4Size2d.min = (-(100 - (Math.abs(vert4Size2b.value)) - (Math.abs(vert4Size2c.value))));
};
const vert4Color2c = document.getElementById("vert4Color2c");
vert4Color2c.oninput = function() {
    vert4Row2c.style.backgroundColor = vert4Color2c.value;
};
const vert4Size2d = document.getElementById("vert4Size2d");
vert4Size2d.oninput = function() {
    vert4Row2d.height = ((Math.abs(vert4Size2d.value) / 100) * 300);
    vert4Size2b.min = (-(100 - (Math.abs(vert4Size2c.value)) - (Math.abs(vert4Size2d.value))));
    vert4Size2c.min = (-(100 - (Math.abs(vert4Size2d.value)) - (Math.abs(vert4Size2b.value))));
    vert4Size2d.min = (-(100 - (Math.abs(vert4Size2b.value)) - (Math.abs(vert4Size2c.value))));
};
const vert4Color2d = document.getElementById("vert4Color2d");
vert4Color2d.oninput = function() {
    vert4Row2d.style.backgroundColor = vert4Color2d.value;
};

// Row 3 Customization Logic
const vert4Row3a = document.getElementById("vert4Row3a"); // Axis label
const vert4Text3a = document.getElementById("vert4Text3a");
vert4Text3a.oninput = function() {
    vert4Row3a.innerHTML = vert4Text3a.value;
};
const vert4Row3e = document.getElementById("vert4Row3e"); // Bottom vertical bar label
const vert4Text3e = document.getElementById("vert4Text3e");
vert4Text3e.oninput = function() {
    vert4Row3e.innerHTML = vert4Text3e.value;
};
const vert4Size3b = document.getElementById("vert4Size3b");
vert4Size3b.oninput = function() {
    vert4Row3b.height = ((Math.abs(vert4Size3b.value) / 100) * 300);
    vert4Size3b.min = (-(100 - (Math.abs(vert4Size3c.value)) - (Math.abs(vert4Size3d.value))));
    vert4Size3c.min = (-(100 - (Math.abs(vert4Size3d.value)) - (Math.abs(vert4Size3b.value))));
    vert4Size3d.min = (-(100 - (Math.abs(vert4Size3b.value)) - (Math.abs(vert4Size3c.value))));
};
const vert4Color3b = document.getElementById("vert4Color3b");
vert4Color3b.oninput = function() {
    vert4Row3b.style.backgroundColor = vert4Color3b.value;
};
const vert4Size3c = document.getElementById("vert4Size3c");
vert4Size3c.oninput = function() {
    vert4Row3c.height = ((Math.abs(vert4Size3c.value) / 100) * 300);
    vert4Size3b.min = (-(100 - (Math.abs(vert4Size3c.value)) - (Math.abs(vert4Size3d.value))));
    vert4Size3c.min = (-(100 - (Math.abs(vert4Size3d.value)) - (Math.abs(vert4Size3b.value))));
    vert4Size3d.min = (-(100 - (Math.abs(vert4Size3b.value)) - (Math.abs(vert4Size3c.value))));
};
const vert4Color3c = document.getElementById("vert4Color3c");
vert4Color3c.oninput = function() {
    vert4Row3c.style.backgroundColor = vert4Color3c.value;
};
const vert4Size3d = document.getElementById("vert4Size3d");
vert4Size3d.oninput = function() {
    vert4Row3d.height = ((Math.abs(vert4Size3d.value) / 100) * 300);
    vert4Size3b.min = (-(100 - (Math.abs(vert4Size3c.value)) - (Math.abs(vert4Size3d.value))));
    vert4Size3c.min = (-(100 - (Math.abs(vert4Size3d.value)) - (Math.abs(vert4Size3b.value))));
    vert4Size3d.min = (-(100 - (Math.abs(vert4Size3b.value)) - (Math.abs(vert4Size3c.value))));
};
const vert4Color3d = document.getElementById("vert4Color3d");
vert4Color3d.oninput = function() {
    vert4Row3d.style.backgroundColor = vert4Color3d.value;
};

// Row 4 Customization Logic
const vert4Row4a = document.getElementById("vert4Row4a"); // Axis label
const vert4Text4a = document.getElementById("vert4Text4a");
vert4Text4a.oninput = function() {
    vert4Row4a.innerHTML = vert4Text4a.value;
};
const vert4Row4e = document.getElementById("vert4Row4e"); // Bottom vertical bar label
const vert4Text4e = document.getElementById("vert4Text4e");
vert4Text4e.oninput = function() {
    vert4Row4e.innerHTML = vert4Text4e.value;
};
const vert4Size4b = document.getElementById("vert4Size4b");
vert4Size4b.oninput = function() {
    vert4Row4b.height = ((Math.abs(vert4Size4b.value) / 100) * 300);
    vert4Size4b.min = (-(100 - (Math.abs(vert4Size4c.value)) - (Math.abs(vert4Size4d.value))));
    vert4Size4c.min = (-(100 - (Math.abs(vert4Size4d.value)) - (Math.abs(vert4Size4b.value))));
    vert4Size4d.min = (-(100 - (Math.abs(vert4Size4b.value)) - (Math.abs(vert4Size4c.value))));
};
const vert4Color4b = document.getElementById("vert4Color4b");
vert4Color4b.oninput = function() {
    vert4Row4b.style.backgroundColor = vert4Color4b.value;
};
const vert4Size4c = document.getElementById("vert4Size4c");
vert4Size4c.oninput = function() {
    vert4Row4c.height = ((Math.abs(vert4Size4c.value) / 100) * 300);
    vert4Size4b.min = (-(100 - (Math.abs(vert4Size4c.value)) - (Math.abs(vert4Size4d.value))));
    vert4Size4c.min = (-(100 - (Math.abs(vert4Size4d.value)) - (Math.abs(vert4Size4b.value))));
    vert4Size4d.min = (-(100 - (Math.abs(vert4Size4b.value)) - (Math.abs(vert4Size4c.value))));
};
const vert4Color4c = document.getElementById("vert4Color4c");
vert4Color4c.oninput = function() {
    vert4Row4c.style.backgroundColor = vert4Color4c.value;
};
const vert4Size4d = document.getElementById("vert4Size4d");
vert4Size4d.oninput = function() {
    vert4Row4d.height = ((Math.abs(vert4Size4d.value) / 100) * 300);
    vert4Size4b.min = (-(100 - (Math.abs(vert4Size4c.value)) - (Math.abs(vert4Size4d.value))));
    vert4Size4c.min = (-(100 - (Math.abs(vert4Size4d.value)) - (Math.abs(vert4Size4b.value))));
    vert4Size4d.min = (-(100 - (Math.abs(vert4Size4b.value)) - (Math.abs(vert4Size4c.value))));
};
const vert4Color4d = document.getElementById("vert4Color4d");
vert4Color4d.oninput = function() {
    vert4Row4d.style.backgroundColor = vert4Color4d.value;
};

// Row 5 Customization Logic
const vert4Row5a = document.getElementById("vert4Row5a"); // Axis label
const vert4Text5a = document.getElementById("vert4Text5a");
vert4Text5a.oninput = function() {
    vert4Row5a.innerHTML = vert4Text5a.value;
};
const vert4Row5e = document.getElementById("vert4Row5e"); // Bottom vertical bar label
const vert4Text5e = document.getElementById("vert4Text5e");
vert4Text5e.oninput = function() {
    vert4Row5e.innerHTML = vert4Text5e.value;
};
const vert4Size5b = document.getElementById("vert4Size5b");
vert4Size5b.oninput = function() {
    vert4Row5b.height = ((Math.abs(vert4Size5b.value) / 100) * 300);
    vert4Size5b.min = (-(100 - (Math.abs(vert4Size5c.value)) - (Math.abs(vert4Size5d.value))));
    vert4Size5c.min = (-(100 - (Math.abs(vert4Size5d.value)) - (Math.abs(vert4Size5b.value))));
    vert4Size5d.min = (-(100 - (Math.abs(vert4Size5b.value)) - (Math.abs(vert4Size5c.value))));
};
const vert4Color5b = document.getElementById("vert4Color5b");
vert4Color5b.oninput = function() {
    vert4Row5b.style.backgroundColor = vert4Color5b.value;
};
const vert4Size5c = document.getElementById("vert4Size5c");
vert4Size5c.oninput = function() {
    vert4Row5c.height = ((Math.abs(vert4Size5c.value) / 100) * 300);
    vert4Size5b.min = (-(100 - (Math.abs(vert4Size5c.value)) - (Math.abs(vert4Size5d.value))));
    vert4Size5c.min = (-(100 - (Math.abs(vert4Size5d.value)) - (Math.abs(vert4Size5b.value))));
    vert4Size5d.min = (-(100 - (Math.abs(vert4Size5b.value)) - (Math.abs(vert4Size5c.value))));
};
const vert4Color5c = document.getElementById("vert4Color5c");
vert4Color5c.oninput = function() {
    vert4Row5c.style.backgroundColor = vert4Color5c.value;
};
const vert4Size5d = document.getElementById("vert4Size5d");
vert4Size5d.oninput = function() {
    vert4Row5d.height = ((Math.abs(vert4Size5d.value) / 100) * 300);
    vert4Size5b.min = (-(100 - (Math.abs(vert4Size5c.value)) - (Math.abs(vert4Size5d.value))));
    vert4Size5c.min = (-(100 - (Math.abs(vert4Size5d.value)) - (Math.abs(vert4Size5b.value))));
    vert4Size5d.min = (-(100 - (Math.abs(vert4Size5b.value)) - (Math.abs(vert4Size5c.value))));
};
const vert4Color5d = document.getElementById("vert4Color5d");
vert4Color5d.oninput = function() {
    vert4Row5d.style.backgroundColor = vert4Color5d.value;
};

// Row 6 Customization Logic
const vert4Row6a = document.getElementById("vert4Row6a"); // Axis label
const vert4Text6a = document.getElementById("vert4Text6a");
vert4Text6a.oninput = function() {
    vert4Row6a.innerHTML = vert4Text6a.value;
};
const vert4Row6e = document.getElementById("vert4Row6e"); // Bottom vertical bar label
const vert4Text6e = document.getElementById("vert4Text6e");
vert4Text6e.oninput = function() {
    vert4Row6e.innerHTML = vert4Text6e.value;
};
const vert4Size6b = document.getElementById("vert4Size6b");
vert4Size6b.oninput = function() {
    vert4Row6b.height = ((Math.abs(vert4Size6b.value) / 100) * 300);
    vert4Size6b.min = (-(100 - (Math.abs(vert4Size6c.value)) - (Math.abs(vert4Size6d.value))));
    vert4Size6c.min = (-(100 - (Math.abs(vert4Size6d.value)) - (Math.abs(vert4Size6b.value))));
    vert4Size6d.min = (-(100 - (Math.abs(vert4Size6b.value)) - (Math.abs(vert4Size6c.value))));
};
const vert4Color6b = document.getElementById("vert4Color6b");
vert4Color6b.oninput = function() {
    vert4Row6b.style.backgroundColor = vert4Color6b.value;
};
const vert4Size6c = document.getElementById("vert4Size6c");
vert4Size6c.oninput = function() {
    vert4Row6c.height = ((Math.abs(vert4Size6c.value) / 100) * 300);
    vert4Size6b.min = (-(100 - (Math.abs(vert4Size6c.value)) - (Math.abs(vert4Size6d.value))));
    vert4Size6c.min = (-(100 - (Math.abs(vert4Size6d.value)) - (Math.abs(vert4Size6b.value))));
    vert4Size6d.min = (-(100 - (Math.abs(vert4Size6b.value)) - (Math.abs(vert4Size6c.value))));
};
const vert4Color6c = document.getElementById("vert4Color6c");
vert4Color6c.oninput = function() {
    vert4Row6c.style.backgroundColor = vert4Color6c.value;
};
const vert4Size6d = document.getElementById("vert4Size6d");
vert4Size6d.oninput = function() {
    vert4Row6d.height = ((Math.abs(vert4Size6d.value) / 100) * 300);
    vert4Size6b.min = (-(100 - (Math.abs(vert4Size6c.value)) - (Math.abs(vert4Size6d.value))));
    vert4Size6c.min = (-(100 - (Math.abs(vert4Size6d.value)) - (Math.abs(vert4Size6b.value))));
    vert4Size6d.min = (-(100 - (Math.abs(vert4Size6b.value)) - (Math.abs(vert4Size6c.value))));
};
const vert4Color6d = document.getElementById("vert4Color6d");
vert4Color6d.oninput = function() {
    vert4Row6d.style.backgroundColor = vert4Color6d.value;
};

// Row 7 Customization Logic
const vert4Row7a = document.getElementById("vert4Row7a"); // Axis label
const vert4Text7a = document.getElementById("vert4Text7a");
vert4Text7a.oninput = function() {
    vert4Row7a.innerHTML = vert4Text7a.value;
};
const vert4Row7e = document.getElementById("vert4Row7e"); // Bottom vertical bar label
const vert4Text7e = document.getElementById("vert4Text7e");
vert4Text7e.oninput = function() {
    vert4Row7e.innerHTML = vert4Text7e.value;
};
const vert4Size7b = document.getElementById("vert4Size7b");
vert4Size7b.oninput = function() {
    vert4Row7b.height = ((Math.abs(vert4Size7b.value) / 100) * 300);
    vert4Size7b.min = (-(100 - (Math.abs(vert4Size7c.value)) - (Math.abs(vert4Size7d.value))));
    vert4Size7c.min = (-(100 - (Math.abs(vert4Size7d.value)) - (Math.abs(vert4Size7b.value))));
    vert4Size7d.min = (-(100 - (Math.abs(vert4Size7b.value)) - (Math.abs(vert4Size7c.value))));
};
const vert4Color7b = document.getElementById("vert4Color7b");
vert4Color7b.oninput = function() {
    vert4Row7b.style.backgroundColor = vert4Color7b.value;
};
const vert4Size7c = document.getElementById("vert4Size7c");
vert4Size7c.oninput = function() {
    vert4Row7c.height = ((Math.abs(vert4Size7c.value) / 100) * 300);
    vert4Size7b.min = (-(100 - (Math.abs(vert4Size7c.value)) - (Math.abs(vert4Size7d.value))));
    vert4Size7c.min = (-(100 - (Math.abs(vert4Size7d.value)) - (Math.abs(vert4Size7b.value))));
    vert4Size7d.min = (-(100 - (Math.abs(vert4Size7b.value)) - (Math.abs(vert4Size7c.value))));
};
const vert4Color7c = document.getElementById("vert4Color7c");
vert4Color7c.oninput = function() {
    vert4Row7c.style.backgroundColor = vert4Color7c.value;
};
const vert4Size7d = document.getElementById("vert4Size7d");
vert4Size7d.oninput = function() {
    vert4Row7d.height = ((Math.abs(vert4Size7d.value) / 100) * 300);
    vert4Size7b.min = (-(100 - (Math.abs(vert4Size7c.value)) - (Math.abs(vert4Size7d.value))));
    vert4Size7c.min = (-(100 - (Math.abs(vert4Size7d.value)) - (Math.abs(vert4Size7b.value))));
    vert4Size7d.min = (-(100 - (Math.abs(vert4Size7b.value)) - (Math.abs(vert4Size7c.value))));
};
const vert4Color7d = document.getElementById("vert4Color7d");
vert4Color7d.oninput = function() {
    vert4Row7d.style.backgroundColor = vert4Color7d.value;
};

// Row 8 Customization Logic
const vert4Row8a = document.getElementById("vert4Row8a"); // Axis label
const vert4Text8a = document.getElementById("vert4Text8a");
vert4Text8a.oninput = function() {
    vert4Row8a.innerHTML = vert4Text8a.value;
};
const vert4Row8e = document.getElementById("vert4Row8e"); // Bottom vertical bar label
const vert4Text8e = document.getElementById("vert4Text8e");
vert4Text8e.oninput = function() {
    vert4Row8e.innerHTML = vert4Text8e.value;
};
const vert4Size8b = document.getElementById("vert4Size8b");
vert4Size8b.oninput = function() {
    vert4Row8b.height = ((Math.abs(vert4Size8b.value) / 100) * 300);
    vert4Size8b.min = (-(100 - (Math.abs(vert4Size8c.value)) - (Math.abs(vert4Size8d.value))));
    vert4Size8c.min = (-(100 - (Math.abs(vert4Size8d.value)) - (Math.abs(vert4Size8b.value))));
    vert4Size8d.min = (-(100 - (Math.abs(vert4Size8b.value)) - (Math.abs(vert4Size8c.value))));
};
const vert4Color8b = document.getElementById("vert4Color8b");
vert4Color8b.oninput = function() {
    vert4Row8b.style.backgroundColor = vert4Color8b.value;
};
const vert4Size8c = document.getElementById("vert4Size8c");
vert4Size8c.oninput = function() {
    vert4Row8c.height = ((Math.abs(vert4Size8c.value) / 100) * 300);
    vert4Size8b.min = (-(100 - (Math.abs(vert4Size8c.value)) - (Math.abs(vert4Size8d.value))));
    vert4Size8c.min = (-(100 - (Math.abs(vert4Size8d.value)) - (Math.abs(vert4Size8b.value))));
    vert4Size8d.min = (-(100 - (Math.abs(vert4Size8b.value)) - (Math.abs(vert4Size8c.value))));
};
const vert4Color8c = document.getElementById("vert4Color8c");
vert4Color8c.oninput = function() {
    vert4Row8c.style.backgroundColor = vert4Color8c.value;
};
const vert4Size8d = document.getElementById("vert4Size8d");
vert4Size8d.oninput = function() {
    vert4Row8d.height = ((Math.abs(vert4Size8d.value) / 100) * 300);
    vert4Size8b.min = (-(100 - (Math.abs(vert4Size8c.value)) - (Math.abs(vert4Size8d.value))));
    vert4Size8c.min = (-(100 - (Math.abs(vert4Size8d.value)) - (Math.abs(vert4Size8b.value))));
    vert4Size8d.min = (-(100 - (Math.abs(vert4Size8b.value)) - (Math.abs(vert4Size8c.value))));
};
const vert4Color8d = document.getElementById("vert4Color8d");
vert4Color8d.oninput = function() {
    vert4Row8d.style.backgroundColor = vert4Color8d.value;
};

// Row 9 Customization Logic
const vert4Row9a = document.getElementById("vert4Row9a"); // Axis label
const vert4Text9a = document.getElementById("vert4Text9a");
vert4Text9a.oninput = function() {
    vert4Row9a.innerHTML = vert4Text9a.value;
};
const vert4Row9e = document.getElementById("vert4Row9e"); // Bottom vertical bar label
const vert4Text9e = document.getElementById("vert4Text9e");
vert4Text9e.oninput = function() {
    vert4Row9e.innerHTML = vert4Text9e.value;
};
const vert4Size9b = document.getElementById("vert4Size9b");
vert4Size9b.oninput = function() {
    vert4Row9b.height = ((Math.abs(vert4Size9b.value) / 100) * 300);
    vert4Size9b.min = (-(100 - (Math.abs(vert4Size9c.value)) - (Math.abs(vert4Size9d.value))));
    vert4Size9c.min = (-(100 - (Math.abs(vert4Size9d.value)) - (Math.abs(vert4Size9b.value))));
    vert4Size9d.min = (-(100 - (Math.abs(vert4Size9b.value)) - (Math.abs(vert4Size9c.value))));
};
const vert4Color9b = document.getElementById("vert4Color9b");
vert4Color9b.oninput = function() {
    vert4Row9b.style.backgroundColor = vert4Color9b.value;
};
const vert4Size9c = document.getElementById("vert4Size9c");
vert4Size9c.oninput = function() {
    vert4Row9c.height = ((Math.abs(vert4Size9c.value) / 100) * 300);
    vert4Size9b.min = (-(100 - (Math.abs(vert4Size9c.value)) - (Math.abs(vert4Size9d.value))));
    vert4Size9c.min = (-(100 - (Math.abs(vert4Size9d.value)) - (Math.abs(vert4Size9b.value))));
    vert4Size9d.min = (-(100 - (Math.abs(vert4Size9b.value)) - (Math.abs(vert4Size9c.value))));
};
const vert4Color9c = document.getElementById("vert4Color9c");
vert4Color9c.oninput = function() {
    vert4Row9c.style.backgroundColor = vert4Color9c.value;
};
const vert4Size9d = document.getElementById("vert4Size9d");
vert4Size9d.oninput = function() {
    vert4Row9d.height = ((Math.abs(vert4Size9d.value) / 100) * 300);
    vert4Size9b.min = (-(100 - (Math.abs(vert4Size9c.value)) - (Math.abs(vert4Size9d.value))));
    vert4Size9c.min = (-(100 - (Math.abs(vert4Size9d.value)) - (Math.abs(vert4Size9b.value))));
    vert4Size9d.min = (-(100 - (Math.abs(vert4Size9b.value)) - (Math.abs(vert4Size9c.value))));
};
const vert4Color9d = document.getElementById("vert4Color9d");
vert4Color9d.oninput = function() {
    vert4Row9d.style.backgroundColor = vert4Color9d.value;
};

// Row 10 Customization Logic
const vert4Row10a = document.getElementById("vert4Row10a"); // Axis label
const vert4Text10a = document.getElementById("vert4Text10a");
vert4Text10a.oninput = function() {
    vert4Row10a.innerHTML = vert4Text10a.value;
};
const vert4Row10e = document.getElementById("vert4Row10e"); // Bottom vertical bar label
const vert4Text10e = document.getElementById("vert4Text10e");
vert4Text10e.oninput = function() {
    vert4Row10e.innerHTML = vert4Text10e.value;
};
const vert4Size10b = document.getElementById("vert4Size10b");
vert4Size10b.oninput = function() {
    vert4Row10b.height = ((Math.abs(vert4Size10b.value) / 100) * 300);
    vert4Size10b.min = (-(100 - (Math.abs(vert4Size10c.value)) - (Math.abs(vert4Size10d.value))));
    vert4Size10c.min = (-(100 - (Math.abs(vert4Size10d.value)) - (Math.abs(vert4Size10b.value))));
    vert4Size10d.min = (-(100 - (Math.abs(vert4Size10b.value)) - (Math.abs(vert4Size10c.value))));
};
const vert4Color10b = document.getElementById("vert4Color10b");
vert4Color10b.oninput = function() {
    vert4Row10b.style.backgroundColor = vert4Color10b.value;
};
const vert4Size10c = document.getElementById("vert4Size10c");
vert4Size10c.oninput = function() {
    vert4Row10c.height = ((Math.abs(vert4Size10c.value) / 100) * 300);
    vert4Size10b.min = (-(100 - (Math.abs(vert4Size10c.value)) - (Math.abs(vert4Size10d.value))));
    vert4Size10c.min = (-(100 - (Math.abs(vert4Size10d.value)) - (Math.abs(vert4Size10b.value))));
    vert4Size10d.min = (-(100 - (Math.abs(vert4Size10b.value)) - (Math.abs(vert4Size10c.value))));
};
const vert4Color10c = document.getElementById("vert4Color10c");
vert4Color10c.oninput = function() {
    vert4Row10c.style.backgroundColor = vert4Color10c.value;
};
const vert4Size10d = document.getElementById("vert4Size10d");
vert4Size10d.oninput = function() {
    vert4Row10d.height = ((Math.abs(vert4Size10d.value) / 100) * 300);
    vert4Size10b.min = (-(100 - (Math.abs(vert4Size10c.value)) - (Math.abs(vert4Size10d.value))));
    vert4Size10c.min = (-(100 - (Math.abs(vert4Size10d.value)) - (Math.abs(vert4Size10b.value))));
    vert4Size10d.min = (-(100 - (Math.abs(vert4Size10b.value)) - (Math.abs(vert4Size10c.value))));
};
const vert4Color10d = document.getElementById("vert4Color10d");
vert4Color10d.oninput = function() {
    vert4Row10d.style.backgroundColor = vert4Color10d.value;
};

// Generate Vert4 HTML Chart Logic
const vert4Weight = document.getElementById("vert4Weight");
const vert4Button = document.getElementById("vert4Button");
const vert4Output = document.getElementById("vert4Output");
vert4Button.addEventListener("mouseenter", () => { vert4Output.style.opacity = ".4"; vert4Weight.style.opacity = ".4"; } );
vert4Button.addEventListener("mouseleave", () => { vert4Output.style.opacity = ""; vert4Weight.style.opacity = ""; vert4Output.style.borderColor = ""; vert4Weight.style.color = ""; } );
vert4Button.addEventListener("click", () => {
    if (rowsData17.value === "1") {
        const chartCode = '' + vert4csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend7Color1x.value + '; border: 1px solid ' + legend7Color1x.value + '; color: ' + legend7Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color2x.value + '; border: 1px solid ' + legend7Color2x.value + '; color: ' + legend7Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color3x.value + '; border: 1px solid ' + legend7Color3x.value + '; color: ' + legend7Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert4Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert4Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row1a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData17.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row1b.height + '" style="background-color: ' + vert4Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row1e.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert4srcCode + '';
        vert4Output.textContent = chartCode;
        vert4Weight.textContent = Math.ceil(vert4Output.value.length / 1024) + 'KB';
    } else if (rowsData17.value === "2") {
        const chartCode = '' + vert4csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend7Color1x.value + '; border: 1px solid ' + legend7Color1x.value + '; color: ' + legend7Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color2x.value + '; border: 1px solid ' + legend7Color2x.value + '; color: ' + legend7Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color3x.value + '; border: 1px solid ' + legend7Color3x.value + '; color: ' + legend7Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert4Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert4Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row1a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row2a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData17.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row1b.height + '" style="background-color: ' + vert4Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row1e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row2b.height + '" style="background-color: ' + vert4Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row2c.height + '" style="background-color: ' + vert4Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row2c.height + '" style="background-color: ' + vert4Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row2e.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert4srcCode + '';
        vert4Output.textContent = chartCode;
        vert4Weight.textContent = Math.ceil(vert4Output.value.length / 1024) + 'KB';
    } else if (rowsData17.value === "3") {
        const chartCode = '' + vert4csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend7Color1x.value + '; border: 1px solid ' + legend7Color1x.value + '; color: ' + legend7Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color2x.value + '; border: 1px solid ' + legend7Color2x.value + '; color: ' + legend7Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color3x.value + '; border: 1px solid ' + legend7Color3x.value + '; color: ' + legend7Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert4Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert4Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row1a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row2a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row3a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData17.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row1b.height + '" style="background-color: ' + vert4Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row1e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row2b.height + '" style="background-color: ' + vert4Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row2c.height + '" style="background-color: ' + vert4Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row2c.height + '" style="background-color: ' + vert4Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row2e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row3b.height + '" style="background-color: ' + vert4Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row3c.height + '" style="background-color: ' + vert4Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row3c.height + '" style="background-color: ' + vert4Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row3e.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert4srcCode + '';
        vert4Output.textContent = chartCode;
        vert4Weight.textContent = Math.ceil(vert4Output.value.length / 1024) + 'KB';
    } else if (rowsData17.value === "4") {
        const chartCode = '' + vert4csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend7Color1x.value + '; border: 1px solid ' + legend7Color1x.value + '; color: ' + legend7Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color2x.value + '; border: 1px solid ' + legend7Color2x.value + '; color: ' + legend7Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color3x.value + '; border: 1px solid ' + legend7Color3x.value + '; color: ' + legend7Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert4Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert4Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row1a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row2a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row3a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row4a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData17.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row1b.height + '" style="background-color: ' + vert4Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row1e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row2b.height + '" style="background-color: ' + vert4Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row2c.height + '" style="background-color: ' + vert4Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row2c.height + '" style="background-color: ' + vert4Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row2e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row3b.height + '" style="background-color: ' + vert4Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row3c.height + '" style="background-color: ' + vert4Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row3c.height + '" style="background-color: ' + vert4Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row3e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row4b.height + '" style="background-color: ' + vert4Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row4c.height + '" style="background-color: ' + vert4Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row4c.height + '" style="background-color: ' + vert4Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row4e.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert4srcCode + '';
        vert4Output.textContent = chartCode;
        vert4Weight.textContent = Math.ceil(vert4Output.value.length / 1024) + 'KB';
    } else if (rowsData17.value === "5") {
        const chartCode = '' + vert4csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend7Color1x.value + '; border: 1px solid ' + legend7Color1x.value + '; color: ' + legend7Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color2x.value + '; border: 1px solid ' + legend7Color2x.value + '; color: ' + legend7Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color3x.value + '; border: 1px solid ' + legend7Color3x.value + '; color: ' + legend7Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert4Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert4Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row1a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row2a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row3a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row4a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row5a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData17.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row1b.height + '" style="background-color: ' + vert4Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row1e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row2b.height + '" style="background-color: ' + vert4Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row2c.height + '" style="background-color: ' + vert4Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row2c.height + '" style="background-color: ' + vert4Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row2e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row3b.height + '" style="background-color: ' + vert4Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row3c.height + '" style="background-color: ' + vert4Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row3c.height + '" style="background-color: ' + vert4Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row3e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row4b.height + '" style="background-color: ' + vert4Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row4c.height + '" style="background-color: ' + vert4Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row4c.height + '" style="background-color: ' + vert4Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row4e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row5b.height + '" style="background-color: ' + vert4Color5b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row5c.height + '" style="background-color: ' + vert4Color5c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row5c.height + '" style="background-color: ' + vert4Color5d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row5e.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert4srcCode + '';
        vert4Output.textContent = chartCode;
        vert4Weight.textContent = Math.ceil(vert4Output.value.length / 1024) + 'KB';
    } else if (rowsData17.value === "6") {
        const chartCode = '' + vert4csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend7Color1x.value + '; border: 1px solid ' + legend7Color1x.value + '; color: ' + legend7Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color2x.value + '; border: 1px solid ' + legend7Color2x.value + '; color: ' + legend7Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color3x.value + '; border: 1px solid ' + legend7Color3x.value + '; color: ' + legend7Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert4Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert4Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row1a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row2a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row3a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row4a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row5a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row6a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData17.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row1b.height + '" style="background-color: ' + vert4Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row1e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row2b.height + '" style="background-color: ' + vert4Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row2c.height + '" style="background-color: ' + vert4Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row2c.height + '" style="background-color: ' + vert4Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row2e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row3b.height + '" style="background-color: ' + vert4Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row3c.height + '" style="background-color: ' + vert4Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row3c.height + '" style="background-color: ' + vert4Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row3e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row4b.height + '" style="background-color: ' + vert4Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row4c.height + '" style="background-color: ' + vert4Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row4c.height + '" style="background-color: ' + vert4Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row4e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row5b.height + '" style="background-color: ' + vert4Color5b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row5c.height + '" style="background-color: ' + vert4Color5c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row5c.height + '" style="background-color: ' + vert4Color5d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row5e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row6b.height + '" style="background-color: ' + vert4Color6b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row6c.height + '" style="background-color: ' + vert4Color6c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row6c.height + '" style="background-color: ' + vert4Color6d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row6e.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert4srcCode + '';
        vert4Output.textContent = chartCode;
        vert4Weight.textContent = Math.ceil(vert4Output.value.length / 1024) + 'KB';
    } else if (rowsData17.value === "7") {
        const chartCode = '' + vert4csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend7Color1x.value + '; border: 1px solid ' + legend7Color1x.value + '; color: ' + legend7Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color2x.value + '; border: 1px solid ' + legend7Color2x.value + '; color: ' + legend7Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color3x.value + '; border: 1px solid ' + legend7Color3x.value + '; color: ' + legend7Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert4Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert4Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row1a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row2a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row3a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row4a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row5a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row6a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row7a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData17.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row1b.height + '" style="background-color: ' + vert4Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row1e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row2b.height + '" style="background-color: ' + vert4Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row2c.height + '" style="background-color: ' + vert4Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row2c.height + '" style="background-color: ' + vert4Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row2e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row3b.height + '" style="background-color: ' + vert4Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row3c.height + '" style="background-color: ' + vert4Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row3c.height + '" style="background-color: ' + vert4Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row3e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row4b.height + '" style="background-color: ' + vert4Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row4c.height + '" style="background-color: ' + vert4Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row4c.height + '" style="background-color: ' + vert4Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row4e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row5b.height + '" style="background-color: ' + vert4Color5b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row5c.height + '" style="background-color: ' + vert4Color5c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row5c.height + '" style="background-color: ' + vert4Color5d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row5e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row6b.height + '" style="background-color: ' + vert4Color6b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row6c.height + '" style="background-color: ' + vert4Color6c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row6c.height + '" style="background-color: ' + vert4Color6d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row6e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row7b.height + '" style="background-color: ' + vert4Color7b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row7c.height + '" style="background-color: ' + vert4Color7c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row7c.height + '" style="background-color: ' + vert4Color7d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row7e.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert4srcCode + '';
        vert4Output.textContent = chartCode;
        vert4Weight.textContent = Math.ceil(vert4Output.value.length / 1024) + 'KB';
    } else if (rowsData17.value === "8") {
        const chartCode = '' + vert4csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend7Color1x.value + '; border: 1px solid ' + legend7Color1x.value + '; color: ' + legend7Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color2x.value + '; border: 1px solid ' + legend7Color2x.value + '; color: ' + legend7Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color3x.value + '; border: 1px solid ' + legend7Color3x.value + '; color: ' + legend7Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert4Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert4Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row1a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row2a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row3a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row4a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row5a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row6a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row7a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row8a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData17.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row1b.height + '" style="background-color: ' + vert4Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row1e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row2b.height + '" style="background-color: ' + vert4Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row2c.height + '" style="background-color: ' + vert4Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row2c.height + '" style="background-color: ' + vert4Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row2e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row3b.height + '" style="background-color: ' + vert4Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row3c.height + '" style="background-color: ' + vert4Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row3c.height + '" style="background-color: ' + vert4Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row3e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row4b.height + '" style="background-color: ' + vert4Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row4c.height + '" style="background-color: ' + vert4Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row4c.height + '" style="background-color: ' + vert4Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row4e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row5b.height + '" style="background-color: ' + vert4Color5b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row5c.height + '" style="background-color: ' + vert4Color5c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row5c.height + '" style="background-color: ' + vert4Color5d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row5e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row6b.height + '" style="background-color: ' + vert4Color6b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row6c.height + '" style="background-color: ' + vert4Color6c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row6c.height + '" style="background-color: ' + vert4Color6d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row6e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row7b.height + '" style="background-color: ' + vert4Color7b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row7c.height + '" style="background-color: ' + vert4Color7c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row7c.height + '" style="background-color: ' + vert4Color7d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row7e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row8b.height + '" style="background-color: ' + vert4Color8b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row8c.height + '" style="background-color: ' + vert4Color8c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row8c.height + '" style="background-color: ' + vert4Color8d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row8e.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert4srcCode + '';
        vert4Output.textContent = chartCode;
        vert4Weight.textContent = Math.ceil(vert4Output.value.length / 1024) + 'KB';
    } else if (rowsData17.value === "9") {
        const chartCode = '' + vert4csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend7Color1x.value + '; border: 1px solid ' + legend7Color1x.value + '; color: ' + legend7Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color2x.value + '; border: 1px solid ' + legend7Color2x.value + '; color: ' + legend7Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color3x.value + '; border: 1px solid ' + legend7Color3x.value + '; color: ' + legend7Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert4Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert4Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row1a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row2a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row3a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row4a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row5a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row6a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row7a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row8a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row9a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData17.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row1b.height + '" style="background-color: ' + vert4Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row1e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row2b.height + '" style="background-color: ' + vert4Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row2c.height + '" style="background-color: ' + vert4Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row2c.height + '" style="background-color: ' + vert4Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row2e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row3b.height + '" style="background-color: ' + vert4Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row3c.height + '" style="background-color: ' + vert4Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row3c.height + '" style="background-color: ' + vert4Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row3e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row4b.height + '" style="background-color: ' + vert4Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row4c.height + '" style="background-color: ' + vert4Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row4c.height + '" style="background-color: ' + vert4Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row4e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row5b.height + '" style="background-color: ' + vert4Color5b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row5c.height + '" style="background-color: ' + vert4Color5c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row5c.height + '" style="background-color: ' + vert4Color5d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row5e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row6b.height + '" style="background-color: ' + vert4Color6b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row6c.height + '" style="background-color: ' + vert4Color6c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row6c.height + '" style="background-color: ' + vert4Color6d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row6e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row7b.height + '" style="background-color: ' + vert4Color7b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row7c.height + '" style="background-color: ' + vert4Color7c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row7c.height + '" style="background-color: ' + vert4Color7d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row7e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row8b.height + '" style="background-color: ' + vert4Color8b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row8c.height + '" style="background-color: ' + vert4Color8c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row8c.height + '" style="background-color: ' + vert4Color8d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row8e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row9b.height + '" style="background-color: ' + vert4Color9b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row9c.height + '" style="background-color: ' + vert4Color9c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row9c.height + '" style="background-color: ' + vert4Color9d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row9e.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert4srcCode + '';
        vert4Output.textContent = chartCode;
        vert4Weight.textContent = Math.ceil(vert4Output.value.length / 1024) + 'KB';
    } else if (rowsData17.value === "10") {
        const chartCode = '' + vert4csCode + '<div class="chartVertLegend" style="font-family: Verdana, sans-serif; font-size: 11px; margin: 0 0 20px 0; text-align: center;"><span style="background-color: ' + legend7Color1x.value + '; border: 1px solid ' + legend7Color1x.value + '; color: ' + legend7Color1x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text1.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color2x.value + '; border: 1px solid ' + legend7Color2x.value + '; color: ' + legend7Color2x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text2.innerHTML + '&nbsp;&nbsp;|&nbsp;&nbsp;<span style="background-color: ' + legend7Color3x.value + '; border: 1px solid ' + legend7Color3x.value + '; color: ' + legend7Color3x.value + '; font-family: Verdana, sans-serif; font-size: 12px; vertical-align: middle;">&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;' + legend7Text3.innerHTML + '</div><!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert4Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert4Width.style.maxWidth + '; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row1a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row2a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row3a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row4a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row5a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row6a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row7a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row8a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row9a.innerHTML + '</td><td height="10" valign="bottom" style="font-family: Verdana, sans-serif; font-size: 12px; line-height: normal; margin: 0; padding: 8px 0 2px; text-align: center; vertical-align: bottom;">' + vert4Row10a.innerHTML + '</td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData17.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row1b.height + '" style="background-color: ' + vert4Color1b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row1c.height + '" style="background-color: ' + vert4Color1d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row1e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row2b.height + '" style="background-color: ' + vert4Color2b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row2c.height + '" style="background-color: ' + vert4Color2c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row2c.height + '" style="background-color: ' + vert4Color2d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row2e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row3b.height + '" style="background-color: ' + vert4Color3b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row3c.height + '" style="background-color: ' + vert4Color3c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row3c.height + '" style="background-color: ' + vert4Color3d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row3e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row4b.height + '" style="background-color: ' + vert4Color4b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row4c.height + '" style="background-color: ' + vert4Color4c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row4c.height + '" style="background-color: ' + vert4Color4d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row4e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row5b.height + '" style="background-color: ' + vert4Color5b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row5c.height + '" style="background-color: ' + vert4Color5c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row5c.height + '" style="background-color: ' + vert4Color5d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row5e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row6b.height + '" style="background-color: ' + vert4Color6b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row6c.height + '" style="background-color: ' + vert4Color6c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row6c.height + '" style="background-color: ' + vert4Color6d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row6e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row7b.height + '" style="background-color: ' + vert4Color7b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row7c.height + '" style="background-color: ' + vert4Color7c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row7c.height + '" style="background-color: ' + vert4Color7d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row7e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row8b.height + '" style="background-color: ' + vert4Color8b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row8c.height + '" style="background-color: ' + vert4Color8c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row8c.height + '" style="background-color: ' + vert4Color8d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row8e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row9b.height + '" style="background-color: ' + vert4Color9b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row9c.height + '" style="background-color: ' + vert4Color9c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row9c.height + '" style="background-color: ' + vert4Color9d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row9e.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert4Row10b.height + '" style="background-color: ' + vert4Color10b.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row10c.height + '" style="background-color: ' + vert4Color10c.value + '; margin: 0; padding: 0;"></td></tr><tr> <td width="35" height="' + vert4Row10c.height + '" style="background-color: ' + vert4Color10d.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert4Row10e.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert4srcCode + '';
        vert4Output.textContent = chartCode;
        vert4Weight.textContent = Math.ceil(vert4Output.value.length / 1024) + 'KB';
    }
    vert4Output.style.opacity = "";
    vert4Weight.style.opacity = "";
    vert4Output.style.borderColor = "#166dfc";
    vert4Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(vert4Output.value);
});
vert4Output.addEventListener("click", () => {
    vert4Output.select();
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

// Vertical Chart V Caption
let vert5csCode = "";
const vert5Cap = document.getElementById("vert5Cap"); // Caption or chart title
const vert5capText = document.getElementById("vert5capText"); // Caption or chart title text
vert5capText.oninput = function() {
    vert5Cap.innerHTML = vert5capText.value;
    if (vert5capText.value == "" && vert5subText.value == "") {
        vert5Cap.style.marginBottom = "0";
        vert5Sub.style.marginBottom = "0";
        return vert5csCode = "";
    } else if (vert5capText.value == "" && vert5subText.value) {
        vert5Cap.style.marginBottom = "0";
        vert5Sub.style.marginBottom = "20px";
        return vert5csCode = '<div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert5Sub.innerHTML + '</div>';
    } else if (vert5capText.value && vert5subText.value == "") {
        vert5Cap.style.marginBottom = "20px";
        vert5Sub.style.marginBottom = "0";
        return vert5csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertCap">' + vert5Cap.innerHTML + '</div>';
    } else if (vert5capText.value && vert5subText.value) {
        vert5Cap.style.marginBottom = "4px";
        vert5Sub.style.marginBottom = "20px";
        return vert5csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: center;" class="chartVertCap">' + vert5Cap.innerHTML + '</div> <div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert5Sub.innerHTML + '</div>';
    }
};
// Vertical Chart V Subtitle
const vert5Sub = document.getElementById("vert5Sub"); // Caption or chart title
const vert5subText = document.getElementById("vert5subText"); // Caption or chart title text
vert5subText.oninput = function() {
    vert5Sub.innerHTML = vert5subText.value;
    if (vert5subText.value == "" && vert5capText.value == "" ) {
        vert5Sub.style.marginBottom = "0";
        vert5Cap.style.marginBottom = "0";
        return vert5csCode = "";
    } else if (vert5subText.value == "" && vert5capText.value) {
        vert5Sub.style.marginBottom = "0";
        vert5Cap.style.marginBottom = "20px";
        return vert5csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertCap">' + vert5Cap.innerHTML + '</div>';
    } else if (vert5subText.value && vert5capText.value == "") {
        vert5Sub.style.marginBottom = "20px";
        vert5Cap.style.marginBottom = "0";
        return vert5csCode = '<div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert5Sub.innerHTML + '</div>';
    } else if (vert5subText.value && vert5capText.value) {
        vert5Sub.style.marginBottom = "20px";
        vert5Cap.style.marginBottom = "4px";
        return vert5csCode = '<div style="color: #000000; font-family: Verdana, sans-serif; font-size: 14px; font-weight: 600; line-height: normal; margin-bottom: 4px; text-align: center;" class="chartVertCap">' + vert5Cap.innerHTML + '</div> <div style="color: #666666; font-family: Verdana, sans-serif; font-size: 12px; font-weight: 300; line-height: normal; margin-bottom: 20px; text-align: center;" class="chartVertSub">' + vert5Sub.innerHTML + '</div>';
    }
};
// Vertical Chart V Source
let vert5srcCode = "";
const vert5Source = document.getElementById("vert5Source"); // Chart source
const vert5srcText = document.getElementById("vert5srcText"); // Chart source text
vert5srcText.oninput = function() {
    vert5Source.innerHTML = vert5srcText.value;
    vert5Source.style.marginTop = vert5srcText.value ? "20px" : "0";
    vert5srcCode = vert5srcText.value ? '<div style="color: #666666; font-family: Verdana, sans-serif; font-size: 11px; line-height: normal; margin: 20px 0; text-align: center;" class="chartVertSrc">' + vert5Source.innerHTML + '</div>' : "";
};

// Vertical Chart V Color Picker
const vert5colorPickT = document.getElementById("vert5colorPickT");
vert5colorPickT.addEventListener("change", (evt) => {
    vert5Row1b.style.backgroundColor = evt.detail.hex;
    vert5Color1b.value = evt.detail.hex;
    vert5Row2b.style.backgroundColor = evt.detail.hex;
    vert5Color2b.value = evt.detail.hex;
    vert5Row3b.style.backgroundColor = evt.detail.hex;
    vert5Color3b.value = evt.detail.hex;
    vert5Row4b.style.backgroundColor = evt.detail.hex;
    vert5Color4b.value = evt.detail.hex;
    vert5Row5b.style.backgroundColor = evt.detail.hex;
    vert5Color5b.value = evt.detail.hex;
    vert5Row6b.style.backgroundColor = evt.detail.hex;
    vert5Color6b.value = evt.detail.hex;
    vert5Row7b.style.backgroundColor = evt.detail.hex;
    vert5Color7b.value = evt.detail.hex;
    vert5Row8b.style.backgroundColor = evt.detail.hex;
    vert5Color8b.value = evt.detail.hex;
    vert5Row9b.style.backgroundColor = evt.detail.hex;
    vert5Color9b.value = evt.detail.hex;
    vert5Row10b.style.backgroundColor = evt.detail.hex;
    vert5Color10b.value = evt.detail.hex;
});
const vert5colorPickB = document.getElementById("vert5colorPickB");
vert5colorPickB.addEventListener("change", (evt) => {
    vert5Row1c.style.backgroundColor = evt.detail.hex;
    vert5Color1c.value = evt.detail.hex;
    vert5Row2c.style.backgroundColor = evt.detail.hex;
    vert5Color2c.value = evt.detail.hex;
    vert5Row3c.style.backgroundColor = evt.detail.hex;
    vert5Color3c.value = evt.detail.hex;
    vert5Row4c.style.backgroundColor = evt.detail.hex;
    vert5Color4c.value = evt.detail.hex;
    vert5Row5c.style.backgroundColor = evt.detail.hex;
    vert5Color5c.value = evt.detail.hex;
    vert5Row6c.style.backgroundColor = evt.detail.hex;
    vert5Color6c.value = evt.detail.hex;
    vert5Row7c.style.backgroundColor = evt.detail.hex;
    vert5Color7c.value = evt.detail.hex;
    vert5Row8c.style.backgroundColor = evt.detail.hex;
    vert5Color8c.value = evt.detail.hex;
    vert5Row9c.style.backgroundColor = evt.detail.hex;
    vert5Color9c.value = evt.detail.hex;
    vert5Row10c.style.backgroundColor = evt.detail.hex;
    vert5Color10c.value = evt.detail.hex;
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

// Top Row 2 Customization Logic
const vert5Row2a = document.getElementById("vert5Row2a"); // Axis label
const vert5Text2a = document.getElementById("vert5Text2a");
vert5Text2a.oninput = function() {
    vert5Row2a.innerHTML = vert5Text2a.value;
};
const vert5Size2b = document.getElementById("vert5Size2b");
vert5Size2b.oninput = function() {
    vert5Row2b.height = ((Math.abs(vert5Size2b.value) / 100) * 150);
};
const vert5Color2b = document.getElementById("vert5Color2b");
vert5Color2b.oninput = function() {
    vert5Row2b.style.backgroundColor = vert5Color2b.value;
};
// Bottom Row 2 Customization Logic
const vert5Row2d = document.getElementById("vert5Row2d"); // Bottom vertical bar label
const vert5Text2d = document.getElementById("vert5Text2d");
vert5Text2d.oninput = function() {
    vert5Row2d.innerHTML = vert5Text2d.value;
};
const vert5Size2c = document.getElementById("vert5Size2c");
vert5Size2c.oninput = function() {
    vert5Row2c.height = ((Math.abs(vert5Size2c.value) / 100) * 150);
};
const vert5Color2c = document.getElementById("vert5Color2c");
vert5Color2c.oninput = function() {
    vert5Row2c.style.backgroundColor = vert5Color2c.value;
};

// Top Row 3 Customization Logic
const vert5Row3a = document.getElementById("vert5Row3a"); // Axis label
const vert5Text3a = document.getElementById("vert5Text3a");
vert5Text3a.oninput = function() {
    vert5Row3a.innerHTML = vert5Text3a.value;
};
const vert5Size3b = document.getElementById("vert5Size3b");
vert5Size3b.oninput = function() {
    vert5Row3b.height = ((Math.abs(vert5Size3b.value) / 100) * 150);
};
const vert5Color3b = document.getElementById("vert5Color3b");
vert5Color3b.oninput = function() {
    vert5Row3b.style.backgroundColor = vert5Color3b.value;
};
// Bottom Row 3 Customization Logic
const vert5Row3d = document.getElementById("vert5Row3d"); // Bottom vertical bar label
const vert5Text3d = document.getElementById("vert5Text3d");
vert5Text3d.oninput = function() {
    vert5Row3d.innerHTML = vert5Text3d.value;
};
const vert5Size3c = document.getElementById("vert5Size3c");
vert5Size3c.oninput = function() {
    vert5Row3c.height = ((Math.abs(vert5Size3c.value) / 100) * 150);
};
const vert5Color3c = document.getElementById("vert5Color3c");
vert5Color3c.oninput = function() {
    vert5Row3c.style.backgroundColor = vert5Color3c.value;
};

// Top Row 4 Customization Logic
const vert5Row4a = document.getElementById("vert5Row4a"); // Axis label
const vert5Text4a = document.getElementById("vert5Text4a");
vert5Text4a.oninput = function() {
    vert5Row4a.innerHTML = vert5Text4a.value;
};
const vert5Size4b = document.getElementById("vert5Size4b");
vert5Size4b.oninput = function() {
    vert5Row4b.height = ((Math.abs(vert5Size4b.value) / 100) * 150);
};
const vert5Color4b = document.getElementById("vert5Color4b");
vert5Color4b.oninput = function() {
    vert5Row4b.style.backgroundColor = vert5Color4b.value;
};
// Bottom Row 4 Customization Logic
const vert5Row4d = document.getElementById("vert5Row4d"); // Bottom vertical bar label
const vert5Text4d = document.getElementById("vert5Text4d");
vert5Text4d.oninput = function() {
    vert5Row4d.innerHTML = vert5Text4d.value;
};
const vert5Size4c = document.getElementById("vert5Size4c");
vert5Size4c.oninput = function() {
    vert5Row4c.height = ((Math.abs(vert5Size4c.value) / 100) * 150);
};
const vert5Color4c = document.getElementById("vert5Color4c");
vert5Color4c.oninput = function() {
    vert5Row4c.style.backgroundColor = vert5Color4c.value;
};

// Top Row 5 Customization Logic
const vert5Row5a = document.getElementById("vert5Row5a"); // Axis label
const vert5Text5a = document.getElementById("vert5Text5a");
vert5Text5a.oninput = function() {
    vert5Row5a.innerHTML = vert5Text5a.value;
};
const vert5Size5b = document.getElementById("vert5Size5b");
vert5Size5b.oninput = function() {
    vert5Row5b.height = ((Math.abs(vert5Size5b.value) / 100) * 150);
};
const vert5Color5b = document.getElementById("vert5Color5b");
vert5Color5b.oninput = function() {
    vert5Row5b.style.backgroundColor = vert5Color5b.value;
};
// Bottom Row 5 Customization Logic
const vert5Row5d = document.getElementById("vert5Row5d"); // Bottom vertical bar label
const vert5Text5d = document.getElementById("vert5Text5d");
vert5Text5d.oninput = function() {
    vert5Row5d.innerHTML = vert5Text5d.value;
};
const vert5Size5c = document.getElementById("vert5Size5c");
vert5Size5c.oninput = function() {
    vert5Row5c.height = ((Math.abs(vert5Size5c.value) / 100) * 150);
};
const vert5Color5c = document.getElementById("vert5Color5c");
vert5Color5c.oninput = function() {
    vert5Row5c.style.backgroundColor = vert5Color5c.value;
};

// Top Row 6 Customization Logic
const vert5Row6a = document.getElementById("vert5Row6a"); // Axis label
const vert5Text6a = document.getElementById("vert5Text6a");
vert5Text6a.oninput = function() {
    vert5Row6a.innerHTML = vert5Text6a.value;
};
const vert5Size6b = document.getElementById("vert5Size6b");
vert5Size6b.oninput = function() {
    vert5Row6b.height = ((Math.abs(vert5Size6b.value) / 100) * 150);
};
const vert5Color6b = document.getElementById("vert5Color6b");
vert5Color6b.oninput = function() {
    vert5Row6b.style.backgroundColor = vert5Color6b.value;
};
// Bottom Row 6 Customization Logic
const vert5Row6d = document.getElementById("vert5Row6d"); // Bottom vertical bar label
const vert5Text6d = document.getElementById("vert5Text6d");
vert5Text6d.oninput = function() {
    vert5Row6d.innerHTML = vert5Text6d.value;
};
const vert5Size6c = document.getElementById("vert5Size6c");
vert5Size6c.oninput = function() {
    vert5Row6c.height = ((Math.abs(vert5Size6c.value) / 100) * 150);
};
const vert5Color6c = document.getElementById("vert5Color6c");
vert5Color6c.oninput = function() {
    vert5Row6c.style.backgroundColor = vert5Color6c.value;
};

// Top Row 7 Customization Logic
const vert5Row7a = document.getElementById("vert5Row7a"); // Axis label
const vert5Text7a = document.getElementById("vert5Text7a");
vert5Text7a.oninput = function() {
    vert5Row7a.innerHTML = vert5Text7a.value;
};
const vert5Size7b = document.getElementById("vert5Size7b");
vert5Size7b.oninput = function() {
    vert5Row7b.height = ((Math.abs(vert5Size7b.value) / 100) * 150);
};
const vert5Color7b = document.getElementById("vert5Color7b");
vert5Color7b.oninput = function() {
    vert5Row7b.style.backgroundColor = vert5Color7b.value;
};
// Bottom Row 7 Customization Logic
const vert5Row7d = document.getElementById("vert5Row7d"); // Bottom vertical bar label
const vert5Text7d = document.getElementById("vert5Text7d");
vert5Text7d.oninput = function() {
    vert5Row7d.innerHTML = vert5Text7d.value;
};
const vert5Size7c = document.getElementById("vert5Size7c");
vert5Size7c.oninput = function() {
    vert5Row7c.height = ((Math.abs(vert5Size7c.value) / 100) * 150);
};
const vert5Color7c = document.getElementById("vert5Color7c");
vert5Color7c.oninput = function() {
    vert5Row7c.style.backgroundColor = vert5Color7c.value;
};

// Top Row 8 Customization Logic
const vert5Row8a = document.getElementById("vert5Row8a"); // Axis label
const vert5Text8a = document.getElementById("vert5Text8a");
vert5Text8a.oninput = function() {
    vert5Row8a.innerHTML = vert5Text8a.value;
};
const vert5Size8b = document.getElementById("vert5Size8b");
vert5Size8b.oninput = function() {
    vert5Row8b.height = ((Math.abs(vert5Size8b.value) / 100) * 150);
};
const vert5Color8b = document.getElementById("vert5Color8b");
vert5Color8b.oninput = function() {
    vert5Row8b.style.backgroundColor = vert5Color8b.value;
};
// Bottom Row 8 Customization Logic
const vert5Row8d = document.getElementById("vert5Row8d"); // Bottom vertical bar label
const vert5Text8d = document.getElementById("vert5Text8d");
vert5Text8d.oninput = function() {
    vert5Row8d.innerHTML = vert5Text8d.value;
};
const vert5Size8c = document.getElementById("vert5Size8c");
vert5Size8c.oninput = function() {
    vert5Row8c.height = ((Math.abs(vert5Size8c.value) / 100) * 150);
};
const vert5Color8c = document.getElementById("vert5Color8c");
vert5Color8c.oninput = function() {
    vert5Row8c.style.backgroundColor = vert5Color8c.value;
};

// Top Row 9 Customization Logic
const vert5Row9a = document.getElementById("vert5Row9a"); // Axis label
const vert5Text9a = document.getElementById("vert5Text9a");
vert5Text9a.oninput = function() {
    vert5Row9a.innerHTML = vert5Text9a.value;
};
const vert5Size9b = document.getElementById("vert5Size9b");
vert5Size9b.oninput = function() {
    vert5Row9b.height = ((Math.abs(vert5Size9b.value) / 100) * 150);
};
const vert5Color9b = document.getElementById("vert5Color9b");
vert5Color9b.oninput = function() {
    vert5Row9b.style.backgroundColor = vert5Color9b.value;
};
// Bottom Row 9 Customization Logic
const vert5Row9d = document.getElementById("vert5Row9d"); // Bottom vertical bar label
const vert5Text9d = document.getElementById("vert5Text9d");
vert5Text9d.oninput = function() {
    vert5Row9d.innerHTML = vert5Text9d.value;
};
const vert5Size9c = document.getElementById("vert5Size9c");
vert5Size9c.oninput = function() {
    vert5Row9c.height = ((Math.abs(vert5Size9c.value) / 100) * 150);
};
const vert5Color9c = document.getElementById("vert5Color9c");
vert5Color9c.oninput = function() {
    vert5Row9c.style.backgroundColor = vert5Color9c.value;
};

// Top Row 10 Customization Logic
const vert5Row10a = document.getElementById("vert5Row10a"); // Axis label
const vert5Text10a = document.getElementById("vert5Text10a");
vert5Text10a.oninput = function() {
    vert5Row10a.innerHTML = vert5Text10a.value;
};
const vert5Size10b = document.getElementById("vert5Size10b");
vert5Size10b.oninput = function() {
    vert5Row10b.height = ((Math.abs(vert5Size10b.value) / 100) * 150);
};
const vert5Color10b = document.getElementById("vert5Color10b");
vert5Color10b.oninput = function() {
    vert5Row10b.style.backgroundColor = vert5Color10b.value;
};
// Bottom Row 10 Customization Logic
const vert5Row10d = document.getElementById("vert5Row10d"); // Bottom vertical bar label
const vert5Text10d = document.getElementById("vert5Text10d");
vert5Text10d.oninput = function() {
    vert5Row10d.innerHTML = vert5Text10d.value;
};
const vert5Size10c = document.getElementById("vert5Size10c");
vert5Size10c.oninput = function() {
    vert5Row10c.height = ((Math.abs(vert5Size10c.value) / 100) * 150);
};
const vert5Color10c = document.getElementById("vert5Color10c");
vert5Color10c.oninput = function() {
    vert5Row10c.style.backgroundColor = vert5Color10c.value;
};

// Generate Vert5 HTML Chart Logic
const vert5Weight = document.getElementById("vert5Weight");
const vert5Button = document.getElementById("vert5Button");
const vert5Output = document.getElementById("vert5Output");
vert5Button.addEventListener("mouseenter", () => { vert5Output.style.opacity = ".4"; vert5Weight.style.opacity = ".4"; } );
vert5Button.addEventListener("mouseleave", () => { vert5Output.style.opacity = ""; vert5Weight.style.opacity = ""; vert5Output.style.borderColor = ""; vert5Weight.style.color = ""; } );
vert5Button.addEventListener("click", () => {
    if (rowsData18.value === "1") {
        const chartCode = '' + vert5csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert5Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert5Width.style.maxWidth + '; min-height: 350px; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1b.height + '" style="background-color: ' + vert5Color1b.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData18.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1c.height + '" style="background-color: ' + vert5Color1c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1d.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert5srcCode + '';
        vert5Output.textContent = chartCode;
        vert5Weight.textContent = Math.ceil(vert5Output.value.length / 1024) + 'KB';
    } else if (rowsData18.value === "2") {
        const chartCode = '' + vert5csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert5Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert5Width.style.maxWidth + '; min-height: 350px; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1b.height + '" style="background-color: ' + vert5Color1b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row2b.height + '" style="background-color: ' + vert5Color2b.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData18.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1c.height + '" style="background-color: ' + vert5Color1c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row2c.height + '" style="background-color: ' + vert5Color2c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row2d.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert5srcCode + '';
        vert5Output.textContent = chartCode;
        vert5Weight.textContent = Math.ceil(vert5Output.value.length / 1024) + 'KB';
    } else if (rowsData18.value === "3") {
        const chartCode = '' + vert5csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert5Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert5Width.style.maxWidth + '; min-height: 350px; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1b.height + '" style="background-color: ' + vert5Color1b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row2b.height + '" style="background-color: ' + vert5Color2b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row3b.height + '" style="background-color: ' + vert5Color3b.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData18.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1c.height + '" style="background-color: ' + vert5Color1c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row2c.height + '" style="background-color: ' + vert5Color2c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row2d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row3c.height + '" style="background-color: ' + vert5Color3c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row3d.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert5srcCode + '';
        vert5Output.textContent = chartCode;
        vert5Weight.textContent = Math.ceil(vert5Output.value.length / 1024) + 'KB';
    } else if (rowsData18.value === "4") {
        const chartCode = '' + vert5csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert5Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert5Width.style.maxWidth + '; min-height: 350px; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1b.height + '" style="background-color: ' + vert5Color1b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row2b.height + '" style="background-color: ' + vert5Color2b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row3b.height + '" style="background-color: ' + vert5Color3b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row4b.height + '" style="background-color: ' + vert5Color4b.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData18.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1c.height + '" style="background-color: ' + vert5Color1c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row2c.height + '" style="background-color: ' + vert5Color2c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row2d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row3c.height + '" style="background-color: ' + vert5Color3c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row3d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row4c.height + '" style="background-color: ' + vert5Color4c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row4d.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert5srcCode + '';
        vert5Output.textContent = chartCode;
        vert5Weight.textContent = Math.ceil(vert5Output.value.length / 1024) + 'KB';
    } else if (rowsData18.value === "5") {
        const chartCode = '' + vert5csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert5Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert5Width.style.maxWidth + '; min-height: 350px; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1b.height + '" style="background-color: ' + vert5Color1b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row2b.height + '" style="background-color: ' + vert5Color2b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row3b.height + '" style="background-color: ' + vert5Color3b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row4b.height + '" style="background-color: ' + vert5Color4b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row5b.height + '" style="background-color: ' + vert5Color5b.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData18.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1c.height + '" style="background-color: ' + vert5Color1c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row2c.height + '" style="background-color: ' + vert5Color2c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row2d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row3c.height + '" style="background-color: ' + vert5Color3c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row3d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row4c.height + '" style="background-color: ' + vert5Color4c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row4d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row5c.height + '" style="background-color: ' + vert5Color5c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row5d.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert5srcCode + '';
        vert5Output.textContent = chartCode;
        vert5Weight.textContent = Math.ceil(vert5Output.value.length / 1024) + 'KB';
    } else if (rowsData18.value === "6") {
        const chartCode = '' + vert5csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert5Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert5Width.style.maxWidth + '; min-height: 350px; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1b.height + '" style="background-color: ' + vert5Color1b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row2b.height + '" style="background-color: ' + vert5Color2b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row3b.height + '" style="background-color: ' + vert5Color3b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row4b.height + '" style="background-color: ' + vert5Color4b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row5b.height + '" style="background-color: ' + vert5Color5b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row6b.height + '" style="background-color: ' + vert5Color6b.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData18.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1c.height + '" style="background-color: ' + vert5Color1c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row2c.height + '" style="background-color: ' + vert5Color2c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row2d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row3c.height + '" style="background-color: ' + vert5Color3c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row3d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row4c.height + '" style="background-color: ' + vert5Color4c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row4d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row5c.height + '" style="background-color: ' + vert5Color5c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row5d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row6c.height + '" style="background-color: ' + vert5Color6c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row6d.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert5srcCode + '';
        vert5Output.textContent = chartCode;
        vert5Weight.textContent = Math.ceil(vert5Output.value.length / 1024) + 'KB';
    } else if (rowsData18.value === "7") {
        const chartCode = '' + vert5csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert5Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert5Width.style.maxWidth + '; min-height: 350px; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1b.height + '" style="background-color: ' + vert5Color1b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row2b.height + '" style="background-color: ' + vert5Color2b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row3b.height + '" style="background-color: ' + vert5Color3b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row4b.height + '" style="background-color: ' + vert5Color4b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row5b.height + '" style="background-color: ' + vert5Color5b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row6b.height + '" style="background-color: ' + vert5Color6b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row7b.height + '" style="background-color: ' + vert5Color7b.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData18.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1c.height + '" style="background-color: ' + vert5Color1c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row2c.height + '" style="background-color: ' + vert5Color2c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row2d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row3c.height + '" style="background-color: ' + vert5Color3c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row3d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row4c.height + '" style="background-color: ' + vert5Color4c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row4d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row5c.height + '" style="background-color: ' + vert5Color5c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row5d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row6c.height + '" style="background-color: ' + vert5Color6c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row6d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row7c.height + '" style="background-color: ' + vert5Color7c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row7d.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert5srcCode + '';
        vert5Output.textContent = chartCode;
        vert5Weight.textContent = Math.ceil(vert5Output.value.length / 1024) + 'KB';
    } else if (rowsData18.value === "8") {
        const chartCode = '' + vert5csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert5Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert5Width.style.maxWidth + '; min-height: 350px; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1b.height + '" style="background-color: ' + vert5Color1b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row2b.height + '" style="background-color: ' + vert5Color2b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row3b.height + '" style="background-color: ' + vert5Color3b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row4b.height + '" style="background-color: ' + vert5Color4b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row5b.height + '" style="background-color: ' + vert5Color5b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row6b.height + '" style="background-color: ' + vert5Color6b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row7b.height + '" style="background-color: ' + vert5Color7b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row8a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row8b.height + '" style="background-color: ' + vert5Color8b.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData18.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1c.height + '" style="background-color: ' + vert5Color1c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row2c.height + '" style="background-color: ' + vert5Color2c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row2d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row3c.height + '" style="background-color: ' + vert5Color3c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row3d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row4c.height + '" style="background-color: ' + vert5Color4c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row4d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row5c.height + '" style="background-color: ' + vert5Color5c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row5d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row6c.height + '" style="background-color: ' + vert5Color6c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row6d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row7c.height + '" style="background-color: ' + vert5Color7c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row7d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row8c.height + '" style="background-color: ' + vert5Color8c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row8d.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert5srcCode + '';
        vert5Output.textContent = chartCode;
        vert5Weight.textContent = Math.ceil(vert5Output.value.length / 1024) + 'KB';
    } else if (rowsData18.value === "9") {
        const chartCode = '' + vert5csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert5Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert5Width.style.maxWidth + '; min-height: 350px; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1b.height + '" style="background-color: ' + vert5Color1b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row2b.height + '" style="background-color: ' + vert5Color2b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row3b.height + '" style="background-color: ' + vert5Color3b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row4b.height + '" style="background-color: ' + vert5Color4b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row5b.height + '" style="background-color: ' + vert5Color5b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row6b.height + '" style="background-color: ' + vert5Color6b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row7b.height + '" style="background-color: ' + vert5Color7b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row8a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row8b.height + '" style="background-color: ' + vert5Color8b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row9a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row9b.height + '" style="background-color: ' + vert5Color9b.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData18.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1c.height + '" style="background-color: ' + vert5Color1c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row2c.height + '" style="background-color: ' + vert5Color2c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row2d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row3c.height + '" style="background-color: ' + vert5Color3c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row3d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row4c.height + '" style="background-color: ' + vert5Color4c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row4d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row5c.height + '" style="background-color: ' + vert5Color5c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row5d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row6c.height + '" style="background-color: ' + vert5Color6c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row6d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row7c.height + '" style="background-color: ' + vert5Color7c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row7d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row8c.height + '" style="background-color: ' + vert5Color8c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row8d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row9c.height + '" style="background-color: ' + vert5Color9c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row9d.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert5srcCode + '';
        vert5Output.textContent = chartCode;
        vert5Weight.textContent = Math.ceil(vert5Output.value.length / 1024) + 'KB';
    } else if (rowsData18.value === "10") {
        const chartCode = '' + vert5csCode + '<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="' + vert5Width.style.maxWidth + '"><tr><td><![endif]--> <table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" height="350" style="border: 1px solid #c4c4c4; max-width: ' + vert5Width.style.maxWidth + '; min-height: 350px; margin: 0 auto; padding: 0;" class="chartVertMobile"> <tr> <td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1b.height + '" style="background-color: ' + vert5Color1b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row2a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row2b.height + '" style="background-color: ' + vert5Color2b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row3a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row3b.height + '" style="background-color: ' + vert5Color3b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row4a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row4b.height + '" style="background-color: ' + vert5Color4b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row5a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row5b.height + '" style="background-color: ' + vert5Color5b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row6a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row6b.height + '" style="background-color: ' + vert5Color6b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row7a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row7b.height + '" style="background-color: ' + vert5Color7b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row8a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row8b.height + '" style="background-color: ' + vert5Color8b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row9a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row9b.height + '" style="background-color: ' + vert5Color9b.value + '; margin: 0; padding: 0;"></td></tr></table> </td><td width="50" valign="bottom" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row10a.innerHTML + '</td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row10b.height + '" style="background-color: ' + vert5Color10b.value + '; margin: 0; padding: 0;"></td></tr></table> </td></tr><tr height="0"> <td class="chartVertAxis" colspan="' + rowsData18.value + '" height="0" width="100%" style="border-top: 1px solid #111111; font-size: 0; height: 0; line-height: 0; width: 100%;">&nbsp;</td></tr><tr> <td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row1c.height + '" style="background-color: ' + vert5Color1c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row1d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row2c.height + '" style="background-color: ' + vert5Color2c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row2d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row3c.height + '" style="background-color: ' + vert5Color3c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row3d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row4c.height + '" style="background-color: ' + vert5Color4c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row4d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row5c.height + '" style="background-color: ' + vert5Color5c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row5d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row6c.height + '" style="background-color: ' + vert5Color6c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row6d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row7c.height + '" style="background-color: ' + vert5Color7c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row7d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row8c.height + '" style="background-color: ' + vert5Color8c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row8d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row9c.height + '" style="background-color: ' + vert5Color9c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row9d.innerHTML + '</td></tr></table> </td><td width="50" valign="top" align="center"> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td width="35" height="' + vert5Row10c.height + '" style="background-color: ' + vert5Color10c.value + '; margin: 0; padding: 0;"></td></tr></table> <table role="presentation" border="0" cellspacing="0" cellpadding="0"> <tr> <td style="color: #000000; font-family: Verdana, sans-serif; font-weight: 500; font-size: 11px; line-height: normal; mso-line-height-rule: exactly; margin: 0; padding: 0; text-align: center; white-space: nowrap;">' + vert5Row10d.innerHTML + '</td></tr></table> </td></tr></table> <!--[if mso 15 | mso 16]></td></tr></table><![endif]-->' + vert5srcCode + '';
        vert5Output.textContent = chartCode;
        vert5Weight.textContent = Math.ceil(vert5Output.value.length / 1024) + 'KB';
    }
    vert5Output.style.opacity = "";
    vert5Weight.style.opacity = "";
    vert5Output.style.borderColor = "#166dfc";
    vert5Weight.style.color = "#166dfc";
    navigator.clipboard.writeText(vert5Output.value);
});
vert5Output.addEventListener("click", () => {
    vert5Output.select();
});