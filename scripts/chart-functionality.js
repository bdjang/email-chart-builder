// Drop Down Menu Logic
const charts = document.getElementsByClassName("charts");
const selectElement = document.getElementById("chartSelect");
selectElement.addEventListener("change", () => {
    for (var i = 0; i < charts.length; i++) {
        if (selectElement.value === "empty") {
            charts[i].style.display = "none";
        } else if (selectElement.value === (charts[selectElement.selectedIndex - 1].id)) {
            charts[i].style.display = "none";
            charts[selectElement.selectedIndex - 1].style.display = "block";
        }
        if (selectElement.selectedIndex >= 21 && selectElement.selectedIndex < 26) {
            chartEmoji.style.transform = "rotate(0deg)"; // For vertical bar charts
            chartEmoji.style.marginRight = "13px";
        } else if (selectElement.selectedIndex < 21) {
            chartEmoji.style.transform = "rotate(90deg)"; // For horizontal bar charts
            chartEmoji.style.marginRight = "19px";
        }
    }
});

// Chart Variables
const botSpace = `<div height="24" style="font-size: 24px; line-height: 24px;">&nbsp;</div>`; // Bottom spacing for non-vertical charts
const shadowColor = "0 0 10px #ffdf65, 0 0 10px #ffdf65, 0 0 10px #ffffff, 0 0 10px #ffffff"; // Chart text highlighting
const barSizeShadow = "-1px -1px 10px #ffdf65, -1px 1px 10px #ffdf65"; // Data bar size highlighting
const barColorShadow = "-1px -1px 10px #6585ff, -1px 1px 10px #6585ff, 0 0 10px #ffffff"; // Data bar color highlighting
const msoOpen = `<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]-->`;
const msoClose = "<!--[if mso 15 | mso 16]></td></tr></table><![endif]-->";

// Preview Dark Mode
const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");
const scrollBox = document.getElementsByClassName("scrollBox");
const textarea = document.getElementsByTagName("textarea");
const previewBox = document.querySelectorAll("div.charts td.previewBox");
const previewBoxVert1Label = document.querySelectorAll("div#vert1Chart td.previewBox table:nth-of-type(1) tr:nth-of-type(1) td"); // Top vertical bar label
const previewBoxVert2Label = document.querySelectorAll("div#vert2Chart td.previewBox table:nth-of-type(1) tr:nth-of-type(1) td"); // Top vertical bar label
const previewBoxVert3Label = document.querySelectorAll("div#vert3Chart td.previewBox table:nth-of-type(2) tr:nth-of-type(1) td"); // Bottom vertical bar label
const previewBoxVert4Label = document.querySelectorAll("div#vert4Chart td.previewBox table:nth-of-type(2) tr:nth-of-type(1) td"); // Bottom vertical bar label
const previewBoxVert5LabelTop = document.querySelectorAll("div#vert5Chart td.vert5Top table:nth-of-type(1) tr:nth-of-type(1) td"); // Top vertical bar label
const previewBoxVert5LabelBottom = document.querySelectorAll("div#vert5Chart td.vert5Bottom table:nth-of-type(2) tr:nth-of-type(1) td"); // Bottom vertical bar label
const horiz1BarsNodes1 = document.querySelectorAll("tr.horiz1Bars table.chartTable td:nth-of-type(1)");
const horiz1BarsNodes2 = document.querySelectorAll("tr.horiz1Bars table.chartTable td:nth-of-type(3)");
const horiz2BarsNodes3 = document.querySelectorAll("tr.horiz2Bars table.chartTable td:nth-of-type(3)");
const horiz3BarsNodes1 = document.querySelectorAll("tr.horiz3Bars table.chartTable td:nth-of-type(1)");
const horiz3BarsNodes3 = document.querySelectorAll("tr.horiz3Bars table.chartTable td:nth-of-type(3)");
const horiz4BarsNodes1 = document.querySelectorAll("tr.horiz4Bars table.chartTable td:nth-of-type(1)");
const horiz4BarsNodes2 = document.querySelectorAll("tr.horiz4Bars table.chartTable td:nth-of-type(3)");
const horiz5BarsNodes1 = document.querySelectorAll("tr.horiz5Bars table.chartTable td:nth-of-type(1)");
const horiz5BarsNodes2 = document.querySelectorAll("tr.horiz5Bars table.chartTable td:nth-of-type(3)");
const stacked1BarsNodes1 = document.querySelectorAll("tr.stacked1Bars table.chartTable td:nth-of-type(1)");
const stacked1BarsNodes3 = document.querySelectorAll("tr.stacked1Bars table.chartTable td:nth-of-type(3)");
const stacked1BarsNodes4 = document.querySelectorAll("tr.stacked1Bars table.chartTable td:nth-of-type(4)");
const stacked2BarsNodes1 = document.querySelectorAll("tr.stacked2Bars table.chartTable td:nth-of-type(1)");
const stacked2BarsNodes4 = document.querySelectorAll("tr.stacked2Bars table.chartTable td:nth-of-type(4)");
const stacked3BarsNodes1 = document.querySelectorAll("tr.stacked3Bars table.chartTable td:nth-of-type(1)");
const stacked4BarsNodes1 = document.querySelectorAll("tr.stacked4Bars table.chartTable td:nth-of-type(1)");
const stacked4BarsNodes5 = document.querySelectorAll("tr.stacked4Bars table.chartTable td:nth-of-type(5)");
const negative1BarsNodes1 = document.querySelectorAll("tr.negative1Bars table.chartTable td:nth-of-type(1)");
const negative1BarsNodes2 = document.querySelectorAll("tr.negative1Bars table.chartTable td:nth-of-type(2)");
const negative2BarsNodes1 = document.querySelectorAll("tr.negative2Bars table.chartTable td:nth-of-type(1)");
const negative2BarsNodes3 = document.querySelectorAll("tr.negative2Bars table.chartTable td:nth-of-type(3)");
const splitBarsNodes1 = document.querySelectorAll("tr.splitBars table.chartTable td:nth-of-type(1)");
const splitBarsNodes4 = document.querySelectorAll("tr.splitBars table.chartTable td:nth-of-type(4)");
const combo1BarsNodes1 = document.querySelectorAll("tr.combo1Bars table.chartTable td:nth-of-type(1)");
const combo1BarsNodes3 = document.querySelectorAll("tr.combo1Bars table.chartTable td:nth-of-type(3)");
const combo2BarsTNodes1 = document.querySelectorAll("tr.combo2BarsT table.chartTable tr:first-of-type td:nth-of-type(1)"); // Targets combo bar II title text
const combo2BarsTNodes2 = document.querySelectorAll("tr.combo2BarsT table.chartTable td:nth-of-type(2)"); // Targets top row 2nd td cell
const combo2BarsBNodes2 = document.querySelectorAll("tr.combo2BarsB table.chartTable td:nth-of-type(2)"); // Targets bottom row 2nd td cell
const combo3BarsTNodes1 = document.querySelectorAll("tr.combo3BarsT table.chartTable tr:first-of-type td:nth-of-type(1)");
const combo3BarsTNodes3 = document.querySelectorAll("tr.combo3BarsT table.chartTable td:nth-of-type(3)");
const combo3BarsBNodes3 = document.querySelectorAll("tr.combo3BarsB table.chartTable td:nth-of-type(3)");
const bodyEl = document.querySelectorAll("body");
const anchorTags = document.querySelectorAll("a"); // Targets all anchor link tags
const anchorCode = document.querySelectorAll("div#readme p code"); // Targets code element in anchor tag
const codeText = document.querySelectorAll("div#readme ul li code");

window.addEventListener("load", () => { // Adds "lightStyles" class to all relevant elements
    document.body.classList.add("lightStyles");
    prog1Row1a.classList.add("lightStyles");
    prog1Row2a.classList.add("lightStyles");
    prog1Row3a.classList.add("lightStyles");
    prog1Row4a.classList.add("lightStyles");
    prog1Row5a.classList.add("lightStyles");
    prog2Row1a.classList.add("lightStyles");
    prog2Row2a.classList.add("lightStyles");
    prog2Row3a.classList.add("lightStyles");
    prog2Row4a.classList.add("lightStyles");
    prog2Row5a.classList.add("lightStyles");
    prog3Row1a.classList.add("lightStyles");
    prog3Row2a.classList.add("lightStyles");
    prog3Row3a.classList.add("lightStyles");
    prog3Row4a.classList.add("lightStyles");
    prog3Row5a.classList.add("lightStyles");
    prog3Row1a.classList.add("lightStyles");
    prog3Row2a.classList.add("lightStyles");
    prog3Row3a.classList.add("lightStyles");
    prog3Row4a.classList.add("lightStyles");
    prog3Row5a.classList.add("lightStyles");
    prog4Row1a.classList.add("lightStyles");
    prog4Row2a.classList.add("lightStyles");
    prog4Row3a.classList.add("lightStyles");
    prog4Row4a.classList.add("lightStyles");
    prog4Row5a.classList.add("lightStyles");
    horiz1Cap.classList.add("lightStyles");
    horiz1Sub.classList.add("lightStylesCSS");
    horiz1Source.classList.add("lightStylesCSS");
    horiz2Cap.classList.add("lightStyles");
    horiz2Sub.classList.add("lightStylesCSS");
    horiz2Source.classList.add("lightStylesCSS");
    horiz3Cap.classList.add("lightStyles");
    horiz3Sub.classList.add("lightStylesCSS");
    horiz3Source.classList.add("lightStylesCSS");
    horiz4Cap.classList.add("lightStyles");
    horiz4Sub.classList.add("lightStylesCSS");
    horiz4Source.classList.add("lightStylesCSS");
    horiz5Cap.classList.add("lightStyles");
    horiz5Sub.classList.add("lightStylesCSS");
    horiz5Source.classList.add("lightStylesCSS");
    combo1Cap.classList.add("lightStyles");
    combo1Source.classList.add("lightStylesCSS");
    combo2Cap.classList.add("lightStyles");
    combo2Source.classList.add("lightStylesCSS");
    combo3Cap.classList.add("lightStyles");
    combo3Source.classList.add("lightStylesCSS");
    stacked1Cap.classList.add("lightStyles");
    stacked1Source.classList.add("lightStylesCSS");
    stacked2Cap.classList.add("lightStyles");
    stacked2Source.classList.add("lightStylesCSS");
    stacked3Cap.classList.add("lightStyles");
    stacked3Source.classList.add("lightStylesCSS");
    stacked4Cap.classList.add("lightStyles");
    stacked4Source.classList.add("lightStylesCSS");
    prog1Cap.classList.add("lightStyles");
    prog1Source.classList.add("lightStylesCSS");
    prog2Cap.classList.add("lightStyles");
    prog2Source.classList.add("lightStylesCSS");
    prog3Cap.classList.add("lightStyles");
    prog3Source.classList.add("lightStylesCSS");
    prog4Cap.classList.add("lightStyles");
    prog4Source.classList.add("lightStylesCSS");
    negative1Cap.classList.add("lightStyles");
    negative1Source.classList.add("lightStylesCSS");
    negative2Cap.classList.add("lightStyles");
    negative2Source.classList.add("lightStylesCSS");
    splitCap.classList.add("lightStyles");
    splitSource.classList.add("lightStylesCSS");
    vert1Cap.classList.add("lightStyles");
    vert1Source.classList.add("lightStylesCSS");
    vert2Cap.classList.add("lightStyles");
    vert2Source.classList.add("lightStylesCSS");
    vert3Cap.classList.add("lightStyles");
    vert3Source.classList.add("lightStylesCSS");
    vert4Cap.classList.add("lightStyles");
    vert4Source.classList.add("lightStylesCSS");
    vert5Cap.classList.add("lightStyles");
    vert5Source.classList.add("lightStylesCSS");
    for (var i = 0; i < scrollBox.length; i++) {
        scrollBox[i].classList.add("scrollBoxLight");
        textarea[i].classList.add("textareaLight");
        previewBox[i].classList.add("lightStyles");
    }
    for (var x = 0; x < horiz1Bars.length; x++) {
        horiz1BarsNodes1[x].classList.add("lightStyles");
        horiz1BarsNodes2[x].classList.add("lightStyles");
        horiz2BarsNodes3[x].classList.add("lightStyles");
        horiz3BarsNodes1[x].classList.add("lightStyles");
        horiz3BarsNodes3[x].classList.add("lightStyles");
        horiz4BarsNodes1[x].classList.add("lightStyles");
        horiz4BarsNodes2[x].classList.add("lightStyles");
        horiz5BarsNodes1[x].classList.add("lightStyles");
        horiz5BarsNodes2[x].classList.add("lightStyles");
        stacked1BarsNodes1[x].classList.add("lightStyles");
        stacked1BarsNodes4[x].classList.add("lightStyles");
        stacked2BarsNodes1[x].classList.add("lightStyles");
        stacked2BarsNodes4[x].classList.add("lightStyles");
        stacked3BarsNodes1[x].classList.add("lightStyles");
        stacked4BarsNodes1[x].classList.add("lightStyles");
        stacked4BarsNodes5[x].classList.add("lightStyles");
        negative1BarsNodes1[x].classList.add("lightStyles");
        negative1BarsNodes2[x].classList.add("lightStyles");
        negative2BarsNodes1[x].classList.add("lightStyles");
        negative2BarsNodes3[x].classList.add("lightStyles");
        splitBarsNodes1[x].classList.add("lightStyles");
        splitBarsNodes4[x].classList.add("lightStyles");
        previewBoxVert1Label[x].classList.add("lightStyles");
        previewBoxVert2Label[x].classList.add("lightStyles");
        previewBoxVert3Label[x].classList.add("lightStyles");
        previewBoxVert4Label[x].classList.add("lightStyles");
        previewBoxVert5LabelTop[x].classList.add("lightStyles");
        previewBoxVert5LabelBottom[x].classList.add("lightStyles");
    }
    for (var y = 0; y < combo1BarsNodes1.length; y++) {
        combo1BarsNodes1[y].classList.add("lightStyles");
        combo1BarsNodes3[y].classList.add("lightStyles");
    }
    for (var z = 0; z < combo2BarsTNodes1.length; z++) {
        combo2BarsTNodes1[z].classList.add("lightStyles");
        combo2BarsTNodes2[z].classList.add("lightStyles");
        combo2BarsBNodes2[z].classList.add("lightStyles");
        combo3BarsTNodes1[z].classList.add("lightStyles");
        combo3BarsTNodes3[z].classList.add("lightStyles");
        combo3BarsBNodes3[z].classList.add("lightStyles");
    }
});

document.addEventListener("keydown", () => {
    if (event.keyCode == 82 && document.activeElement == bodyEl[0]) { // r
        chartSelect.blur();
        chartSelect.focus();
    }
    if (event.keyCode == 84 && document.activeElement == bodyEl[0]) { // t
        chartSelect.blur();
        chartSelect.focus();
    }
    if (event.keyCode == 68 && document.body.classList.contains("lightStyles")) { // d
        if (document.activeElement == bodyEl[0] || document.activeElement == selectElement) {
            chartSelect.blur();
            document.body.classList.replace("lightStyles", "darkStyles");
            prog1Row1a.classList.replace("lightStyles", "darkStyles");
            prog1Row2a.classList.replace("lightStyles", "darkStyles");
            prog1Row3a.classList.replace("lightStyles", "darkStyles");
            prog1Row4a.classList.replace("lightStyles", "darkStyles");
            prog1Row5a.classList.replace("lightStyles", "darkStyles");
            prog2Row1a.classList.replace("lightStyles", "darkStyles");
            prog2Row2a.classList.replace("lightStyles", "darkStyles");
            prog2Row3a.classList.replace("lightStyles", "darkStyles");
            prog2Row4a.classList.replace("lightStyles", "darkStyles");
            prog2Row5a.classList.replace("lightStyles", "darkStyles");
            prog3Row1a.classList.replace("lightStyles", "darkStyles");
            prog3Row2a.classList.replace("lightStyles", "darkStyles");
            prog3Row3a.classList.replace("lightStyles", "darkStyles");
            prog3Row4a.classList.replace("lightStyles", "darkStyles");
            prog3Row5a.classList.replace("lightStyles", "darkStyles");
            prog4Row1a.classList.replace("lightStyles", "darkStyles");
            prog4Row2a.classList.replace("lightStyles", "darkStyles");
            prog4Row3a.classList.replace("lightStyles", "darkStyles");
            prog4Row4a.classList.replace("lightStyles", "darkStyles");
            prog4Row5a.classList.replace("lightStyles", "darkStyles");
            horiz1Cap.classList.replace("lightStyles", "darkStyles");
            horiz1Sub.classList.replace("lightStylesCSS", "darkStyles");
            horiz1Source.classList.replace("lightStylesCSS", "darkStyles");
            horiz2Cap.classList.replace("lightStyles", "darkStyles");
            horiz2Sub.classList.replace("lightStylesCSS", "darkStyles");
            horiz2Source.classList.replace("lightStylesCSS", "darkStyles");
            horiz3Cap.classList.replace("lightStyles", "darkStyles");
            horiz3Sub.classList.replace("lightStylesCSS", "darkStyles");
            horiz3Source.classList.replace("lightStylesCSS", "darkStyles");
            horiz4Cap.classList.replace("lightStyles", "darkStyles");
            horiz4Sub.classList.replace("lightStylesCSS", "darkStyles");
            horiz4Source.classList.replace("lightStylesCSS", "darkStyles");
            horiz5Cap.classList.replace("lightStyles", "darkStyles");
            horiz5Sub.classList.replace("lightStylesCSS", "darkStyles");
            horiz5Source.classList.replace("lightStylesCSS", "darkStyles");
            combo1Cap.classList.replace("lightStyles", "darkStyles");
            combo1Source.classList.replace("lightStylesCSS", "darkStyles");
            combo2Cap.classList.replace("lightStyles", "darkStyles");
            combo2Source.classList.replace("lightStylesCSS", "darkStyles");
            combo3Cap.classList.replace("lightStyles", "darkStyles");
            combo3Source.classList.replace("lightStylesCSS", "darkStyles");
            stacked1Cap.classList.replace("lightStyles", "darkStyles");
            stacked1Source.classList.replace("lightStylesCSS", "darkStyles");
            stacked2Cap.classList.replace("lightStyles", "darkStyles");
            stacked2Source.classList.replace("lightStylesCSS", "darkStyles");
            stacked3Cap.classList.replace("lightStyles", "darkStyles");
            stacked3Source.classList.replace("lightStylesCSS", "darkStyles");
            stacked4Cap.classList.replace("lightStyles", "darkStyles");
            stacked4Source.classList.replace("lightStylesCSS", "darkStyles");
            prog1Cap.classList.replace("lightStyles", "darkStyles");
            prog1Source.classList.replace("lightStylesCSS", "darkStyles");
            prog2Cap.classList.replace("lightStyles", "darkStyles");
            prog2Source.classList.replace("lightStylesCSS", "darkStyles");
            prog3Cap.classList.replace("lightStyles", "darkStyles");
            prog3Source.classList.replace("lightStylesCSS", "darkStyles");
            prog4Cap.classList.replace("lightStyles", "darkStyles");
            prog4Source.classList.replace("lightStylesCSS", "darkStyles");
            negative1Cap.classList.replace("lightStyles", "darkStyles");
            negative1Source.classList.replace("lightStylesCSS", "darkStyles");
            negative2Cap.classList.replace("lightStyles", "darkStyles");
            negative2Source.classList.replace("lightStylesCSS", "darkStyles");
            splitCap.classList.replace("lightStyles", "darkStyles");
            splitSource.classList.replace("lightStylesCSS", "darkStyles");
            vert1Cap.classList.replace("lightStyles", "darkStyles");
            vert1Source.classList.replace("lightStylesCSS", "darkStyles");
            vert2Cap.classList.replace("lightStyles", "darkStyles");
            vert2Source.classList.replace("lightStylesCSS", "darkStyles");
            vert3Cap.classList.replace("lightStyles", "darkStyles");
            vert3Source.classList.replace("lightStylesCSS", "darkStyles");
            vert4Cap.classList.replace("lightStyles", "darkStyles");
            vert4Source.classList.replace("lightStylesCSS", "darkStyles");
            vert5Cap.classList.replace("lightStyles", "darkStyles");
            vert5Source.classList.replace("lightStylesCSS", "darkStyles");
            vert1AxisLine.classList.toggle("lightBorder");
            vert2AxisLine.classList.toggle("lightBorder");
            vert3AxisLine.classList.toggle("lightBorder");
            vert4AxisLine.classList.toggle("lightBorder");
            vert5AxisLine.classList.toggle("lightBorder");
            for (var i = 0; i < scrollBox.length; i++) {
                scrollBox[i].classList.replace("scrollBoxLight", "darkStyles");
                textarea[i].classList.replace("textareaLight", "darkStyles");
                previewBox[i].classList.replace("lightStyles", "darkStyles");
            }
            for (var x = 0; x < horiz1Bars.length; x++) {
                horiz1BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
                horiz1BarsNodes2[x].classList.replace("lightStyles", "darkStyles");
                horiz2BarsNodes3[x].classList.replace("lightStyles", "darkStyles");
                horiz3BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
                horiz3BarsNodes3[x].classList.replace("lightStyles", "darkStyles");
                horiz4BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
                horiz4BarsNodes2[x].classList.replace("lightStyles", "darkStyles");
                horiz5BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
                horiz5BarsNodes2[x].classList.replace("lightStyles", "darkStyles");
                stacked1BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
                stacked1BarsNodes4[x].classList.replace("lightStyles", "darkStyles");
                stacked2BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
                stacked2BarsNodes4[x].classList.replace("lightStyles", "darkStyles");
                stacked3BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
                stacked4BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
                stacked4BarsNodes5[x].classList.replace("lightStyles", "darkStyles");
                stacked1BarsNodes3[x].classList.toggle("darkBorder");
                negative1BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
                negative1BarsNodes2[x].classList.replace("lightStyles", "darkStyles");
                negative2BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
                negative2BarsNodes3[x].classList.replace("lightStyles", "darkStyles");
                splitBarsNodes1[x].classList.replace("lightStyles", "darkStyles");
                splitBarsNodes4[x].classList.replace("lightStyles", "darkStyles");
                previewBoxVert1Label[x].classList.replace("lightStyles", "darkStyles");
                previewBoxVert2Label[x].classList.replace("lightStyles", "darkStyles");
                previewBoxVert3Label[x].classList.replace("lightStyles", "darkStyles");
                previewBoxVert4Label[x].classList.replace("lightStyles", "darkStyles");
                previewBoxVert5LabelTop[x].classList.replace("lightStyles", "darkStyles");
                previewBoxVert5LabelBottom[x].classList.replace("lightStyles", "darkStyles");
            }
            for (var y = 0; y < combo1BarsNodes1.length; y++) {
                combo1BarsNodes1[y].classList.replace("lightStyles", "darkStyles");
                combo1BarsNodes3[y].classList.replace("lightStyles", "darkStyles");
            }
            for (var z = 0; z < combo2BarsTNodes1.length; z++) {
                combo2BarsTNodes1[z].classList.replace("lightStyles", "darkStyles");
                combo2BarsTNodes2[z].classList.replace("lightStyles", "darkStyles");
                combo2BarsBNodes2[z].classList.replace("lightStyles", "darkStyles");
                combo3BarsTNodes1[z].classList.replace("lightStyles", "darkStyles");
                combo3BarsTNodes3[z].classList.replace("lightStyles", "darkStyles");
                combo3BarsBNodes3[z].classList.replace("lightStyles", "darkStyles");
            }
            if (lightMode.style.display == "none") {
                lightMode.style.display = "inline-block";
                darkMode.style.display = "none";
            } else if (lightMode.style.display == "inline-block") {
                lightMode.style.display = "none";
                darkMode.style.display = "inline-block";
            }
            for (var a = 0; a < codeText.length; a++) {
                codeText[a].style.color = "#ff2424";
            }
            for (var b = 0; b < anchorTags.length; b++) { // Targets all anchor link tags
                anchorTags[b].style.color = "#0099ff";
                anchorCode[0].style.color = "#0099ff";
            }
        }
    } else if (event.keyCode == 68 && document.body.classList.contains("darkStyles")) {
        if (document.activeElement == bodyEl[0] || document.activeElement == selectElement) {
            chartSelect.blur();
            document.body.classList.replace("darkStyles", "lightStyles");
            prog1Row1a.classList.replace("darkStyles", "lightStyles");
            prog1Row2a.classList.replace("darkStyles", "lightStyles");
            prog1Row3a.classList.replace("darkStyles", "lightStyles");
            prog1Row4a.classList.replace("darkStyles", "lightStyles");
            prog1Row5a.classList.replace("darkStyles", "lightStyles");
            prog2Row1a.classList.replace("darkStyles", "lightStyles");
            prog2Row2a.classList.replace("darkStyles", "lightStyles");
            prog2Row3a.classList.replace("darkStyles", "lightStyles");
            prog2Row4a.classList.replace("darkStyles", "lightStyles");
            prog2Row5a.classList.replace("darkStyles", "lightStyles");
            prog3Row1a.classList.replace("darkStyles", "lightStyles");
            prog3Row2a.classList.replace("darkStyles", "lightStyles");
            prog3Row3a.classList.replace("darkStyles", "lightStyles");
            prog3Row4a.classList.replace("darkStyles", "lightStyles");
            prog3Row5a.classList.replace("darkStyles", "lightStyles");
            prog4Row1a.classList.replace("darkStyles", "lightStyles");
            prog4Row2a.classList.replace("darkStyles", "lightStyles");
            prog4Row3a.classList.replace("darkStyles", "lightStyles");
            prog4Row4a.classList.replace("darkStyles", "lightStyles");
            prog4Row5a.classList.replace("darkStyles", "lightStyles");
            horiz1Cap.classList.replace("darkStyles", "lightStyles");
            horiz1Sub.classList.replace("darkStyles", "lightStylesCSS");
            horiz1Source.classList.replace("darkStyles", "lightStylesCSS");
            horiz2Cap.classList.replace("darkStyles", "lightStyles");
            horiz2Sub.classList.replace("darkStyles", "lightStylesCSS");
            horiz2Source.classList.replace("darkStyles", "lightStylesCSS");
            horiz3Cap.classList.replace("darkStyles", "lightStyles");
            horiz3Sub.classList.replace("darkStyles", "lightStylesCSS");
            horiz3Source.classList.replace("darkStyles", "lightStylesCSS");
            horiz4Cap.classList.replace("darkStyles", "lightStyles");
            horiz4Sub.classList.replace("darkStyles", "lightStylesCSS");
            horiz4Source.classList.replace("darkStyles", "lightStylesCSS");
            horiz5Cap.classList.replace("darkStyles", "lightStyles");
            horiz5Sub.classList.replace("darkStyles", "lightStylesCSS");
            horiz5Source.classList.replace("darkStyles", "lightStylesCSS");
            combo1Cap.classList.replace("darkStyles", "lightStyles");
            combo1Source.classList.replace("darkStyles", "lightStylesCSS");
            combo2Cap.classList.replace("darkStyles", "lightStyles");
            combo2Source.classList.replace("darkStyles", "lightStylesCSS");
            combo3Cap.classList.replace("darkStyles", "lightStyles");
            combo3Source.classList.replace("darkStyles", "lightStylesCSS");
            stacked1Cap.classList.replace("darkStyles", "lightStyles");
            stacked1Source.classList.replace("darkStyles", "lightStylesCSS");
            stacked2Cap.classList.replace("darkStyles", "lightStyles");
            stacked2Source.classList.replace("darkStyles", "lightStylesCSS");
            stacked3Cap.classList.replace("darkStyles", "lightStyles");
            stacked3Source.classList.replace("darkStyles", "lightStylesCSS");
            stacked4Cap.classList.replace("darkStyles", "lightStyles");
            stacked4Source.classList.replace("darkStyles", "lightStylesCSS");
            prog1Cap.classList.replace("darkStyles", "lightStyles");
            prog1Source.classList.replace("darkStyles", "lightStylesCSS");
            prog2Cap.classList.replace("darkStyles", "lightStyles");
            prog2Source.classList.replace("darkStyles", "lightStylesCSS");
            prog3Cap.classList.replace("darkStyles", "lightStyles");
            prog3Source.classList.replace("darkStyles", "lightStylesCSS");
            prog4Cap.classList.replace("darkStyles", "lightStyles");
            prog4Source.classList.replace("darkStyles", "lightStylesCSS");
            negative1Cap.classList.replace("darkStyles", "lightStyles");
            negative1Source.classList.replace("darkStyles", "lightStylesCSS");
            negative2Cap.classList.replace("darkStyles", "lightStyles");
            negative2Source.classList.replace("darkStyles", "lightStylesCSS");
            splitCap.classList.replace("darkStyles", "lightStyles");
            splitSource.classList.replace("darkStyles", "lightStylesCSS");
            vert1Cap.classList.replace("darkStyles", "lightStyles");
            vert1Source.classList.replace("darkStyles", "lightStylesCSS");
            vert2Cap.classList.replace("darkStyles", "lightStyles");
            vert2Source.classList.replace("darkStyles", "lightStylesCSS");
            vert3Cap.classList.replace("darkStyles", "lightStyles");
            vert3Source.classList.replace("darkStyles", "lightStylesCSS");
            vert4Cap.classList.replace("darkStyles", "lightStyles");
            vert4Source.classList.replace("darkStyles", "lightStylesCSS");
            vert5Cap.classList.replace("darkStyles", "lightStyles");
            vert5Source.classList.replace("darkStyles", "lightStylesCSS");
            vert1AxisLine.classList.toggle("lightBorder");
            vert2AxisLine.classList.toggle("lightBorder");
            vert3AxisLine.classList.toggle("lightBorder");
            vert4AxisLine.classList.toggle("lightBorder");
            vert5AxisLine.classList.toggle("lightBorder");
            for (var i = 0; i < scrollBox.length; i++) {
                scrollBox[i].classList.replace("darkStyles", "scrollBoxLight");
                textarea[i].classList.replace("darkStyles", "textareaLight");
                previewBox[i].classList.replace("darkStyles", "lightStyles");
            }
            for (var x = 0; x < horiz1Bars.length; x++) {
                horiz1BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
                horiz1BarsNodes2[x].classList.replace("darkStyles", "lightStyles");
                horiz2BarsNodes3[x].classList.replace("darkStyles", "lightStyles");
                horiz3BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
                horiz3BarsNodes3[x].classList.replace("darkStyles", "lightStyles");
                horiz4BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
                horiz4BarsNodes2[x].classList.replace("darkStyles", "lightStyles");
                horiz5BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
                horiz5BarsNodes2[x].classList.replace("darkStyles", "lightStyles");
                stacked1BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
                stacked1BarsNodes4[x].classList.replace("darkStyles", "lightStyles");
                stacked2BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
                stacked2BarsNodes4[x].classList.replace("darkStyles", "lightStyles");
                stacked3BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
                stacked4BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
                stacked4BarsNodes5[x].classList.replace("darkStyles", "lightStyles");
                stacked1BarsNodes3[x].classList.toggle("darkBorder");
                negative1BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
                negative1BarsNodes2[x].classList.replace("darkStyles", "lightStyles");
                negative2BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
                negative2BarsNodes3[x].classList.replace("darkStyles", "lightStyles");
                splitBarsNodes1[x].classList.replace("darkStyles", "lightStyles");
                splitBarsNodes4[x].classList.replace("darkStyles", "lightStyles");
                previewBoxVert1Label[x].classList.replace("darkStyles", "lightStyles");
                previewBoxVert2Label[x].classList.replace("darkStyles", "lightStyles");
                previewBoxVert3Label[x].classList.replace("darkStyles", "lightStyles");
                previewBoxVert4Label[x].classList.replace("darkStyles", "lightStyles");
                previewBoxVert5LabelTop[x].classList.replace("darkStyles", "lightStyles");
                previewBoxVert5LabelBottom[x].classList.replace("darkStyles", "lightStyles");
            }
            for (var y = 0; y < combo1BarsNodes1.length; y++) {
                combo1BarsNodes1[y].classList.replace("darkStyles", "lightStyles");
                combo1BarsNodes3[y].classList.replace("darkStyles", "lightStyles");
            }
            for (var z = 0; z < combo2BarsTNodes1.length; z++) {
                combo2BarsTNodes1[z].classList.replace("darkStyles", "lightStyles");
                combo2BarsTNodes2[z].classList.replace("darkStyles", "lightStyles");
                combo2BarsBNodes2[z].classList.replace("darkStyles", "lightStyles");
                combo3BarsTNodes1[z].classList.replace("darkStyles", "lightStyles");
                combo3BarsTNodes3[z].classList.replace("darkStyles", "lightStyles");
                combo3BarsBNodes3[z].classList.replace("darkStyles", "lightStyles");
            }
            if (lightMode.style.display == "none") {
                lightMode.style.display = "inline-block";
                darkMode.style.display = "none";
            } else if (lightMode.style.display == "inline-block") {
                lightMode.style.display = "none";
                darkMode.style.display = "inline-block";
            }
            for (var a = 0; a < codeText.length; a++) {
                codeText[a].style.color = "#de0d0d";
            }
            for (var b = 0; b < anchorTags.length; b++) { // Targets all anchor link tags
                anchorTags[b].style.color = "#166dfc";
                anchorCode[0].style.color = "#166dfc";
            }
        }
    }
});
darkMode.addEventListener("click", () => {
    document.body.classList.toggle("darkStyles");
    document.body.classList.replace("lightStyles", "darkStyles");
    prog1Row1a.classList.toggle("darkStyles");
    prog1Row1a.classList.replace("lightStyles", "darkStyles");
    prog1Row2a.classList.toggle("darkStyles");
    prog1Row2a.classList.replace("lightStyles", "darkStyles");
    prog1Row3a.classList.toggle("darkStyles");
    prog1Row3a.classList.replace("lightStyles", "darkStyles");
    prog1Row4a.classList.toggle("darkStyles");
    prog1Row4a.classList.replace("lightStyles", "darkStyles");
    prog1Row5a.classList.toggle("darkStyles");
    prog1Row5a.classList.replace("lightStyles", "darkStyles");
    prog2Row1a.classList.toggle("darkStyles");
    prog2Row1a.classList.replace("lightStyles", "darkStyles");
    prog2Row2a.classList.toggle("darkStyles");
    prog2Row2a.classList.replace("lightStyles", "darkStyles");
    prog2Row3a.classList.toggle("darkStyles");
    prog2Row3a.classList.replace("lightStyles", "darkStyles");
    prog2Row4a.classList.toggle("darkStyles");
    prog2Row4a.classList.replace("lightStyles", "darkStyles");
    prog2Row5a.classList.toggle("darkStyles");
    prog2Row5a.classList.replace("lightStyles", "darkStyles");
    prog3Row1a.classList.toggle("darkStyles");
    prog3Row1a.classList.replace("lightStyles", "darkStyles");
    prog3Row2a.classList.toggle("darkStyles");
    prog3Row2a.classList.replace("lightStyles", "darkStyles");
    prog3Row3a.classList.toggle("darkStyles");
    prog3Row3a.classList.replace("lightStyles", "darkStyles");
    prog3Row4a.classList.toggle("darkStyles");
    prog3Row4a.classList.replace("lightStyles", "darkStyles");
    prog3Row5a.classList.toggle("darkStyles");
    prog3Row5a.classList.replace("lightStyles", "darkStyles");
    prog4Row1a.classList.toggle("darkStyles");
    prog4Row1a.classList.replace("lightStyles", "darkStyles");
    prog4Row2a.classList.toggle("darkStyles");
    prog4Row2a.classList.replace("lightStyles", "darkStyles");
    prog4Row3a.classList.toggle("darkStyles");
    prog4Row3a.classList.replace("lightStyles", "darkStyles");
    prog4Row4a.classList.toggle("darkStyles");
    prog4Row4a.classList.replace("lightStyles", "darkStyles");
    prog4Row5a.classList.toggle("darkStyles");
    prog4Row5a.classList.replace("lightStyles", "darkStyles");
    horiz1Cap.classList.toggle("darkStyles");
    horiz1Cap.classList.replace("lightStyles", "darkStyles");
    horiz1Sub.classList.toggle("darkStyles");
    horiz1Sub.classList.replace("lightStylesCSS", "darkStyles");
    horiz1Source.classList.toggle("darkStyles");
    horiz1Source.classList.replace("lightStylesCSS", "darkStyles");
    horiz2Cap.classList.toggle("darkStyles");
    horiz2Cap.classList.replace("lightStyles", "darkStyles");
    horiz2Sub.classList.toggle("darkStyles");
    horiz2Sub.classList.replace("lightStylesCSS", "darkStyles");
    horiz2Source.classList.toggle("darkStyles");
    horiz2Source.classList.replace("lightStylesCSS", "darkStyles");
    horiz3Cap.classList.toggle("darkStyles");
    horiz3Cap.classList.replace("lightStyles", "darkStyles");
    horiz3Sub.classList.toggle("darkStyles");
    horiz3Sub.classList.replace("lightStylesCSS", "darkStyles");
    horiz3Source.classList.toggle("darkStyles");
    horiz3Source.classList.replace("lightStylesCSS", "darkStyles");
    horiz4Cap.classList.toggle("darkStyles");
    horiz4Cap.classList.replace("lightStyles", "darkStyles");
    horiz4Sub.classList.toggle("darkStyles");
    horiz4Sub.classList.replace("lightStylesCSS", "darkStyles");
    horiz4Source.classList.toggle("darkStyles");
    horiz4Source.classList.replace("lightStylesCSS", "darkStyles");
    horiz5Cap.classList.toggle("darkStyles");
    horiz5Cap.classList.replace("lightStyles", "darkStyles");
    horiz5Sub.classList.toggle("darkStyles");
    horiz5Sub.classList.replace("lightStylesCSS", "darkStyles");
    horiz5Source.classList.toggle("darkStyles");
    horiz5Source.classList.replace("lightStylesCSS", "darkStyles");
    combo1Cap.classList.toggle("darkStyles");
    combo1Cap.classList.replace("lightStyles", "darkStyles");
    combo1Source.classList.toggle("darkStyles");
    combo1Source.classList.replace("lightStylesCSS", "darkStyles");
    combo2Cap.classList.toggle("darkStyles");
    combo2Cap.classList.replace("lightStyles", "darkStyles");
    combo2Source.classList.toggle("darkStyles");
    combo2Source.classList.replace("lightStylesCSS", "darkStyles");
    combo3Cap.classList.toggle("darkStyles");
    combo3Cap.classList.replace("lightStyles", "darkStyles");
    combo3Source.classList.toggle("darkStyles");
    combo3Source.classList.replace("lightStylesCSS", "darkStyles");
    stacked1Cap.classList.toggle("darkStyles");
    stacked1Cap.classList.replace("lightStyles", "darkStyles");
    stacked1Source.classList.toggle("darkStyles");
    stacked1Source.classList.replace("lightStylesCSS", "darkStyles");
    stacked2Cap.classList.toggle("darkStyles");
    stacked2Cap.classList.replace("lightStyles", "darkStyles");
    stacked2Source.classList.toggle("darkStyles");
    stacked2Source.classList.replace("lightStylesCSS", "darkStyles");
    stacked3Cap.classList.toggle("darkStyles");
    stacked3Cap.classList.replace("lightStyles", "darkStyles");
    stacked3Source.classList.toggle("darkStyles");
    stacked3Source.classList.replace("lightStylesCSS", "darkStyles");
    stacked4Cap.classList.toggle("darkStyles");
    stacked4Cap.classList.replace("lightStyles", "darkStyles");
    stacked4Source.classList.toggle("darkStyles");
    stacked4Source.classList.replace("lightStylesCSS", "darkStyles");
    prog1Cap.classList.toggle("darkStyles");
    prog1Cap.classList.replace("lightStyles", "darkStyles");
    prog1Source.classList.toggle("darkStyles");
    prog1Source.classList.replace("lightStylesCSS", "darkStyles");
    prog2Cap.classList.toggle("darkStyles");
    prog2Cap.classList.replace("lightStyles", "darkStyles");
    prog2Source.classList.toggle("darkStyles");
    prog2Source.classList.replace("lightStylesCSS", "darkStyles");
    prog3Cap.classList.toggle("darkStyles");
    prog3Cap.classList.replace("lightStyles", "darkStyles");
    prog3Source.classList.toggle("darkStyles");
    prog3Source.classList.replace("lightStylesCSS", "darkStyles");
    prog4Cap.classList.toggle("darkStyles");
    prog4Cap.classList.replace("lightStyles", "darkStyles");
    prog4Source.classList.toggle("darkStyles");
    prog4Source.classList.replace("lightStylesCSS", "darkStyles");
    negative1Cap.classList.toggle("darkStyles");
    negative1Cap.classList.replace("lightStyles", "darkStyles");
    negative1Source.classList.toggle("darkStyles");
    negative1Source.classList.replace("lightStylesCSS", "darkStyles");
    negative2Cap.classList.toggle("darkStyles");
    negative2Cap.classList.replace("lightStyles", "darkStyles");
    negative2Source.classList.toggle("darkStyles");
    negative2Source.classList.replace("lightStylesCSS", "darkStyles");
    splitCap.classList.toggle("darkStyles");
    splitCap.classList.replace("lightStyles", "darkStyles");
    splitSource.classList.toggle("darkStyles");
    splitSource.classList.replace("lightStylesCSS", "darkStyles");
    vert1Cap.classList.toggle("darkStyles");
    vert1Cap.classList.replace("lightStyles", "darkStyles");
    vert1Source.classList.toggle("darkStyles");
    vert1Source.classList.replace("lightStylesCSS", "darkStyles");
    vert2Cap.classList.toggle("darkStyles");
    vert2Cap.classList.replace("lightStyles", "darkStyles");
    vert2Source.classList.toggle("darkStyles");
    vert2Source.classList.replace("lightStylesCSS", "darkStyles");
    vert3Cap.classList.toggle("darkStyles");
    vert3Cap.classList.replace("lightStyles", "darkStyles");
    vert3Source.classList.toggle("darkStyles");
    vert3Source.classList.replace("lightStylesCSS", "darkStyles");
    vert4Cap.classList.toggle("darkStyles");
    vert4Cap.classList.replace("lightStyles", "darkStyles");
    vert4Source.classList.toggle("darkStyles");
    vert4Source.classList.replace("lightStylesCSS", "darkStyles");
    vert5Cap.classList.toggle("darkStyles");
    vert5Cap.classList.replace("lightStyles", "darkStyles");
    vert5Source.classList.toggle("darkStyles");
    vert5Source.classList.replace("lightStylesCSS", "darkStyles");
    vert1AxisLine.classList.toggle("lightBorder");
    vert2AxisLine.classList.toggle("lightBorder");
    vert3AxisLine.classList.toggle("lightBorder");
    vert4AxisLine.classList.toggle("lightBorder");
    vert5AxisLine.classList.toggle("lightBorder");
    for (var i = 0; i < scrollBox.length; i++) {
        scrollBox[i].classList.toggle("darkStyles");
        scrollBox[i].classList.replace("scrollBoxLight", "darkStyles");
        textarea[i].classList.toggle("darkStyles");
        textarea[i].classList.replace("textareaLight", "darkStyles");
        previewBox[i].classList.toggle("darkStyles");
        previewBox[i].classList.replace("lightStyles", "darkStyles");
    }
    for (var x = 0; x < horiz1Bars.length; x++) {
        horiz1BarsNodes1[x].classList.toggle("darkStyles");
        horiz1BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
        horiz1BarsNodes2[x].classList.toggle("darkStyles");
        horiz1BarsNodes2[x].classList.replace("lightStyles", "darkStyles");
        horiz2BarsNodes3[x].classList.toggle("darkStyles");
        horiz2BarsNodes3[x].classList.replace("lightStyles", "darkStyles");
        horiz3BarsNodes1[x].classList.toggle("darkStyles");
        horiz3BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
        horiz3BarsNodes3[x].classList.toggle("darkStyles");
        horiz3BarsNodes3[x].classList.replace("lightStyles", "darkStyles");
        horiz4BarsNodes1[x].classList.toggle("darkStyles");
        horiz4BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
        horiz4BarsNodes2[x].classList.toggle("darkStyles");
        horiz4BarsNodes2[x].classList.replace("lightStyles", "darkStyles");
        horiz5BarsNodes1[x].classList.toggle("darkStyles");
        horiz5BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
        horiz5BarsNodes2[x].classList.toggle("darkStyles");
        horiz5BarsNodes2[x].classList.replace("lightStyles", "darkStyles");
        stacked1BarsNodes1[x].classList.toggle("darkStyles");
        stacked1BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
        stacked1BarsNodes4[x].classList.toggle("darkStyles");
        stacked1BarsNodes4[x].classList.replace("lightStyles", "darkStyles");
        stacked2BarsNodes1[x].classList.toggle("darkStyles");
        stacked2BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
        stacked2BarsNodes4[x].classList.toggle("darkStyles");
        stacked2BarsNodes4[x].classList.replace("lightStyles", "darkStyles");
        stacked3BarsNodes1[x].classList.toggle("darkStyles");
        stacked3BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
        stacked4BarsNodes1[x].classList.toggle("darkStyles");
        stacked4BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
        stacked4BarsNodes5[x].classList.toggle("darkStyles");
        stacked4BarsNodes5[x].classList.replace("lightStyles", "darkStyles");
        stacked1BarsNodes3[x].classList.toggle("darkBorder");
        negative1BarsNodes1[x].classList.toggle("darkStyles");
        negative1BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
        negative1BarsNodes2[x].classList.toggle("darkStyles");
        negative1BarsNodes2[x].classList.replace("lightStyles", "darkStyles");
        negative2BarsNodes1[x].classList.toggle("darkStyles");
        negative2BarsNodes1[x].classList.replace("lightStyles", "darkStyles");
        negative2BarsNodes3[x].classList.toggle("darkStyles");
        negative2BarsNodes3[x].classList.replace("lightStyles", "darkStyles");
        splitBarsNodes1[x].classList.toggle("darkStyles");
        splitBarsNodes1[x].classList.replace("lightStyles", "darkStyles");
        splitBarsNodes4[x].classList.toggle("darkStyles");
        splitBarsNodes4[x].classList.replace("lightStyles", "darkStyles");
        previewBoxVert1Label[x].classList.toggle("darkStyles");
        previewBoxVert1Label[x].classList.replace("lightStyles", "darkStyles");
        previewBoxVert2Label[x].classList.toggle("darkStyles");
        previewBoxVert2Label[x].classList.replace("lightStyles", "darkStyles");
        previewBoxVert3Label[x].classList.toggle("darkStyles");
        previewBoxVert3Label[x].classList.replace("lightStyles", "darkStyles");
        previewBoxVert4Label[x].classList.toggle("darkStyles");
        previewBoxVert4Label[x].classList.replace("lightStyles", "darkStyles");
        previewBoxVert5LabelTop[x].classList.toggle("darkStyles");
        previewBoxVert5LabelTop[x].classList.replace("lightStyles", "darkStyles");
        previewBoxVert5LabelBottom[x].classList.toggle("darkStyles");
        previewBoxVert5LabelBottom[x].classList.replace("lightStyles", "darkStyles");
    }
    for (var y = 0; y < combo1BarsNodes1.length; y++) {
        combo1BarsNodes1[y].classList.toggle("darkStyles");
        combo1BarsNodes1[y].classList.replace("lightStyles", "darkStyles");
        combo1BarsNodes3[y].classList.toggle("darkStyles");
        combo1BarsNodes3[y].classList.replace("lightStyles", "darkStyles");
    }
    for (var z = 0; z < combo2BarsTNodes1.length; z++) {
        combo2BarsTNodes1[z].classList.toggle("darkStyles");
        combo2BarsTNodes1[z].classList.replace("lightStyles", "darkStyles");
        combo2BarsTNodes2[z].classList.toggle("darkStyles");
        combo2BarsTNodes2[z].classList.replace("lightStyles", "darkStyles");
        combo2BarsBNodes2[z].classList.toggle("darkStyles");
        combo2BarsBNodes2[z].classList.replace("lightStyles", "darkStyles");
        combo3BarsTNodes1[z].classList.toggle("darkStyles");
        combo3BarsTNodes1[z].classList.replace("lightStyles", "darkStyles");
        combo3BarsTNodes3[z].classList.toggle("darkStyles");
        combo3BarsTNodes3[z].classList.replace("lightStyles", "darkStyles");
        combo3BarsBNodes3[z].classList.toggle("darkStyles");
        combo3BarsBNodes3[z].classList.replace("lightStyles", "darkStyles");
    }
    for (var a = 0; a < codeText.length; a++) {
        codeText[a].style.color = "#ff2424";
    }
    for (var b = 0; b < anchorTags.length; b++) { // Targets all anchor link tags
        anchorTags[b].style.color = "#0099ff";
        anchorCode[0].style.color = "#0099ff";
    }
    darkMode.style.display = "none";
    lightMode.style.display = "inline-block";
});
lightMode.addEventListener("click", () => {
    document.body.classList.replace("darkStyles", "lightStyles");
    prog1Row1a.classList.replace("darkStyles", "lightStyles");
    prog1Row2a.classList.replace("darkStyles", "lightStyles");
    prog1Row3a.classList.replace("darkStyles", "lightStyles");
    prog1Row4a.classList.replace("darkStyles", "lightStyles");
    prog1Row5a.classList.replace("darkStyles", "lightStyles");
    prog2Row1a.classList.replace("darkStyles", "lightStyles");
    prog2Row2a.classList.replace("darkStyles", "lightStyles");
    prog2Row3a.classList.replace("darkStyles", "lightStyles");
    prog2Row4a.classList.replace("darkStyles", "lightStyles");
    prog2Row5a.classList.replace("darkStyles", "lightStyles");
    prog3Row1a.classList.replace("darkStyles", "lightStyles");
    prog3Row2a.classList.replace("darkStyles", "lightStyles");
    prog3Row3a.classList.replace("darkStyles", "lightStyles");
    prog3Row4a.classList.replace("darkStyles", "lightStyles");
    prog3Row5a.classList.replace("darkStyles", "lightStyles");
    prog4Row1a.classList.replace("darkStyles", "lightStyles");
    prog4Row2a.classList.replace("darkStyles", "lightStyles");
    prog4Row3a.classList.replace("darkStyles", "lightStyles");
    prog4Row4a.classList.replace("darkStyles", "lightStyles");
    prog4Row5a.classList.replace("darkStyles", "lightStyles");
    horiz1Cap.classList.replace("darkStyles", "lightStyles");
    horiz1Sub.classList.replace("darkStyles", "lightStylesCSS");
    horiz1Source.classList.replace("darkStyles", "lightStylesCSS");
    horiz2Cap.classList.replace("darkStyles", "lightStyles");
    horiz2Sub.classList.replace("darkStyles", "lightStylesCSS");
    horiz2Source.classList.replace("darkStyles", "lightStylesCSS");
    horiz3Cap.classList.replace("darkStyles", "lightStyles");
    horiz3Sub.classList.replace("darkStyles", "lightStylesCSS");
    horiz3Source.classList.replace("darkStyles", "lightStylesCSS");
    horiz4Cap.classList.replace("darkStyles", "lightStyles");
    horiz4Sub.classList.replace("darkStyles", "lightStylesCSS");
    horiz4Source.classList.replace("darkStyles", "lightStylesCSS");
    horiz5Cap.classList.replace("darkStyles", "lightStyles");
    horiz5Sub.classList.replace("darkStyles", "lightStylesCSS");
    horiz5Source.classList.replace("darkStyles", "lightStylesCSS");
    combo1Cap.classList.replace("darkStyles", "lightStyles");
    combo1Source.classList.replace("darkStyles", "lightStylesCSS");
    combo2Cap.classList.replace("darkStyles", "lightStyles");
    combo2Source.classList.replace("darkStyles", "lightStylesCSS");
    combo3Cap.classList.replace("darkStyles", "lightStyles");
    combo3Source.classList.replace("darkStyles", "lightStylesCSS");
    stacked1Cap.classList.replace("darkStyles", "lightStyles");
    stacked1Source.classList.replace("darkStyles", "lightStylesCSS");
    stacked2Cap.classList.replace("darkStyles", "lightStyles");
    stacked2Source.classList.replace("darkStyles", "lightStylesCSS");
    stacked3Cap.classList.replace("darkStyles", "lightStyles");
    stacked3Source.classList.replace("darkStyles", "lightStylesCSS");
    stacked4Cap.classList.replace("darkStyles", "lightStyles");
    stacked4Source.classList.replace("darkStyles", "lightStylesCSS");
    prog1Cap.classList.replace("darkStyles", "lightStyles");
    prog1Source.classList.replace("darkStyles", "lightStylesCSS");
    prog2Cap.classList.replace("darkStyles", "lightStyles");
    prog2Source.classList.replace("darkStyles", "lightStylesCSS");
    prog3Cap.classList.replace("darkStyles", "lightStyles");
    prog3Source.classList.replace("darkStyles", "lightStylesCSS");
    prog4Cap.classList.replace("darkStyles", "lightStyles");
    prog4Source.classList.replace("darkStyles", "lightStylesCSS");
    negative1Cap.classList.replace("darkStyles", "lightStyles");
    negative1Source.classList.replace("darkStyles", "lightStylesCSS");
    negative2Cap.classList.replace("darkStyles", "lightStyles");
    negative2Source.classList.replace("darkStyles", "lightStylesCSS");
    splitCap.classList.replace("darkStyles", "lightStyles");
    splitSource.classList.replace("darkStyles", "lightStylesCSS");
    vert1Cap.classList.replace("darkStyles", "lightStyles");
    vert1Source.classList.replace("darkStyles", "lightStylesCSS");
    vert2Cap.classList.replace("darkStyles", "lightStyles");
    vert2Source.classList.replace("darkStyles", "lightStylesCSS");
    vert3Cap.classList.replace("darkStyles", "lightStyles");
    vert3Source.classList.replace("darkStyles", "lightStylesCSS");
    vert4Cap.classList.replace("darkStyles", "lightStyles");
    vert4Source.classList.replace("darkStyles", "lightStylesCSS");
    vert5Cap.classList.replace("darkStyles", "lightStyles");
    vert5Source.classList.replace("darkStyles", "lightStylesCSS");
    vert1AxisLine.classList.toggle("lightBorder");
    vert2AxisLine.classList.toggle("lightBorder");
    vert3AxisLine.classList.toggle("lightBorder");
    vert4AxisLine.classList.toggle("lightBorder");
    vert5AxisLine.classList.toggle("lightBorder");
    for (var i = 0; i < scrollBox.length; i++) {
        scrollBox[i].classList.replace("darkStyles", "scrollBoxLight");
        textarea[i].classList.replace("darkStyles", "textareaLight");
        previewBox[i].classList.replace("darkStyles", "lightStyles");
    }
    for (var x = 0; x < horiz1Bars.length; x++) {
        horiz1BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
        horiz1BarsNodes2[x].classList.replace("darkStyles", "lightStyles");
        horiz2BarsNodes3[x].classList.replace("darkStyles", "lightStyles");
        horiz3BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
        horiz3BarsNodes3[x].classList.replace("darkStyles", "lightStyles");
        horiz4BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
        horiz4BarsNodes2[x].classList.replace("darkStyles", "lightStyles");
        horiz5BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
        horiz5BarsNodes2[x].classList.replace("darkStyles", "lightStyles");
        stacked1BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
        stacked1BarsNodes4[x].classList.replace("darkStyles", "lightStyles");
        stacked2BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
        stacked2BarsNodes4[x].classList.replace("darkStyles", "lightStyles");
        stacked3BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
        stacked4BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
        stacked4BarsNodes5[x].classList.replace("darkStyles", "lightStyles");
        stacked1BarsNodes3[x].classList.toggle("darkBorder");
        negative1BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
        negative1BarsNodes2[x].classList.replace("darkStyles", "lightStyles");
        negative2BarsNodes1[x].classList.replace("darkStyles", "lightStyles");
        negative2BarsNodes3[x].classList.replace("darkStyles", "lightStyles");
        splitBarsNodes1[x].classList.replace("darkStyles", "lightStyles");
        splitBarsNodes4[x].classList.replace("darkStyles", "lightStyles");
        previewBoxVert1Label[x].classList.replace("darkStyles", "lightStyles");
        previewBoxVert2Label[x].classList.replace("darkStyles", "lightStyles");
        previewBoxVert3Label[x].classList.replace("darkStyles", "lightStyles");
        previewBoxVert4Label[x].classList.replace("darkStyles", "lightStyles");
        previewBoxVert5LabelTop[x].classList.replace("darkStyles", "lightStyles");
        previewBoxVert5LabelBottom[x].classList.replace("darkStyles", "lightStyles");
    }
    for (var y = 0; y < combo1BarsNodes1.length; y++) {
        combo1BarsNodes1[y].classList.replace("darkStyles", "lightStyles");
        combo1BarsNodes3[y].classList.replace("darkStyles", "lightStyles");
    }
    for (var z = 0; z < combo2BarsTNodes1.length; z++) {
        combo2BarsTNodes1[z].classList.replace("darkStyles", "lightStyles");
        combo2BarsTNodes2[z].classList.replace("darkStyles", "lightStyles");
        combo2BarsBNodes2[z].classList.replace("darkStyles", "lightStyles");
        combo3BarsTNodes1[z].classList.replace("darkStyles", "lightStyles");
        combo3BarsTNodes3[z].classList.replace("darkStyles", "lightStyles");
        combo3BarsBNodes3[z].classList.replace("darkStyles", "lightStyles");
    }
    for (var a = 0; a < codeText.length; a++) {
        codeText[a].style.color = "#de0d0d";
    }
    for (var b = 0; b < anchorTags.length; b++) { // Targets all anchor link tags
        anchorTags[b].style.color = "#166dfc";
        anchorCode[0].style.color = "#166dfc";
    }
    darkMode.style.display = "inline-block";
    lightMode.style.display = "none";
});