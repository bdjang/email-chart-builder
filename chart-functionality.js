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
    }
});

// Preview Dark Mode
const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");
const scrollBox = document.getElementsByClassName("scrollBox");
const textarea = document.getElementsByTagName("textarea");
const previewBox = document.querySelectorAll("div.charts td.previewBox");
const previewBoxVert1Label = document.querySelectorAll("div#vert1Chart td.previewBox table:nth-of-type(1) tr:nth-of-type(1) td"); // Top vertical bar label
const previewBoxVert2Label = document.querySelectorAll("div#vert2Chart td.previewBox table:nth-of-type(1) tr:nth-of-type(1) td"); // Top vertical bar label
const previewBoxVert3Label = document.querySelectorAll("div#vert3Chart td.previewBox table:nth-of-type(2) tr:nth-of-type(1) td"); // Bottom vertical bar label
const horiz1BarsNodes1 = document.querySelectorAll("tr.horiz1Bars table.chartMobile td:nth-of-type(1)");
const horiz1BarsNodes2 = document.querySelectorAll("tr.horiz1Bars table.chartMobile td:nth-of-type(3)");
const horiz2BarsNodes3 = document.querySelectorAll("tr.horiz2Bars table.chartMobile td:nth-of-type(3)");
const horiz3BarsNodes1 = document.querySelectorAll("tr.horiz3Bars table.chartMobile td:nth-of-type(1)");
const horiz3BarsNodes3 = document.querySelectorAll("tr.horiz3Bars table.chartMobile td:nth-of-type(3)");
const horiz4BarsNodes1 = document.querySelectorAll("tr.horiz4Bars table.chartMobile td:nth-of-type(1)");
const horiz4BarsNodes2 = document.querySelectorAll("tr.horiz4Bars table.chartMobile td:nth-of-type(3)");
const stacked1BarsNodes1 = document.querySelectorAll("tr.stacked1Bars table.chartMobile td:nth-of-type(1)");
const stacked1BarsNodes3 = document.querySelectorAll("tr.stacked1Bars table.chartMobile td:nth-of-type(3)");
const stacked1BarsNodes4 = document.querySelectorAll("tr.stacked1Bars table.chartMobile td:nth-of-type(4)");
const stacked2BarsNodes1 = document.querySelectorAll("tr.stacked2Bars table.chartMobile td:nth-of-type(1)");
const stacked2BarsNodes4 = document.querySelectorAll("tr.stacked2Bars table.chartMobile td:nth-of-type(4)");
const stacked3BarsNodes1 = document.querySelectorAll("tr.stacked3Bars table.chartMobile td:nth-of-type(1)");
const stacked4BarsNodes1 = document.querySelectorAll("tr.stacked4Bars table.chartMobile td:nth-of-type(1)");
const stacked4BarsNodes5 = document.querySelectorAll("tr.stacked4Bars table.chartMobile td:nth-of-type(5)");
const negative1BarsNodes1 = document.querySelectorAll("tr.negative1Bars table.chartMobile td:nth-of-type(1)");
const negative1BarsNodes2 = document.querySelectorAll("tr.negative1Bars table.chartMobile td:nth-of-type(2)");
const negative2BarsNodes1 = document.querySelectorAll("tr.negative2Bars table.chartMobile td:nth-of-type(1)");
const negative2BarsNodes3 = document.querySelectorAll("tr.negative2Bars table.chartMobile td:nth-of-type(3)");
const splitBarsNodes1 = document.querySelectorAll("tr.splitBars table.chartMobile td:nth-of-type(1)");
const splitBarsNodes4 = document.querySelectorAll("tr.splitBars table.chartMobile td:nth-of-type(4)");
const combo1BarsNodes1 = document.querySelectorAll("tr.combo1Bars table.chartMobile td:nth-of-type(1)");
const combo1BarsNodes3 = document.querySelectorAll("tr.combo1Bars table.chartMobile td:nth-of-type(3)");
const bodyEl = document.querySelectorAll("body");
document.addEventListener("keydown", () => {
    if (event.keyCode == 67 && document.activeElement == bodyEl[0]) {
        chartSelect.focus();
    }
    if (event.keyCode == 81) {
        chartSelect.blur();
        // document.activeElement == bodyEl[0];
    }
    if (event.keyCode == 68 && document.activeElement == bodyEl[0]) {
        chartSelect.blur();
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
        horiz4Source.classList.toggle("darkStyles");
        horiz4Source.classList.replace("lightStyles", "darkStyles");
        vert1AxisLine.classList.toggle("lightBorder");
        vert2AxisLine.classList.toggle("lightBorder");
        vert3AxisLine.classList.toggle("lightBorder");
        for (var i = 0; i < scrollBox.length; i++) {
            scrollBox[i].classList.toggle("darkStyles");
            scrollBox[i].classList.replace("lightStyles", "darkStyles");
            textarea[i].classList.toggle("darkStyles");
            textarea[i].classList.replace("lightStyles", "darkStyles");
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
        }
        for (var y = 0; y < combo1BarsNodes1.length; y++) {
            combo1BarsNodes1[y].classList.toggle("darkStyles");
            combo1BarsNodes1[y].classList.replace("lightStyles", "darkStyles");
            combo1BarsNodes3[y].classList.toggle("darkStyles");
            combo1BarsNodes3[y].classList.replace("lightStyles", "darkStyles");
            previewBoxVert1Label[y].classList.toggle("darkStyles");
            previewBoxVert1Label[y].classList.replace("lightStyles", "darkStyles");
            previewBoxVert2Label[y].classList.toggle("darkStyles");
            previewBoxVert2Label[y].classList.replace("lightStyles", "darkStyles");
            previewBoxVert3Label[y].classList.toggle("darkStyles");
            previewBoxVert3Label[y].classList.replace("lightStyles", "darkStyles");
        }
        if (lightMode.style.display == "none") {
            lightMode.style.display = "inline-block";
            darkMode.style.display = "none";
        } else if (lightMode.style.display == "inline-block") {
            lightMode.style.display = "none";
            darkMode.style.display = "inline-block";
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
    horiz4Source.classList.toggle("darkStyles");
    horiz4Source.classList.replace("lightStyles", "darkStyles");
    vert1AxisLine.classList.toggle("lightBorder");
    vert2AxisLine.classList.toggle("lightBorder");
    vert3AxisLine.classList.toggle("lightBorder");
    for (var i = 0; i < scrollBox.length; i++) {
        scrollBox[i].classList.toggle("darkStyles");
        scrollBox[i].classList.replace("lightStyles", "darkStyles");
        textarea[i].classList.toggle("darkStyles");
        textarea[i].classList.replace("lightStyles", "darkStyles");
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
    }
    for (var y = 0; y < combo1BarsNodes1.length; y++) {
        combo1BarsNodes1[y].classList.toggle("darkStyles");
        combo1BarsNodes1[y].classList.replace("lightStyles", "darkStyles");
        combo1BarsNodes3[y].classList.toggle("darkStyles");
        combo1BarsNodes3[y].classList.replace("lightStyles", "darkStyles");
        previewBoxVert1Label[y].classList.toggle("darkStyles");
        previewBoxVert1Label[y].classList.replace("lightStyles", "darkStyles");
        previewBoxVert2Label[y].classList.toggle("darkStyles");
        previewBoxVert2Label[y].classList.replace("lightStyles", "darkStyles");
        previewBoxVert3Label[y].classList.toggle("darkStyles");
        previewBoxVert3Label[y].classList.replace("lightStyles", "darkStyles");
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
    horiz4Source.classList.replace("darkStyles", "lightStyles");
    vert1AxisLine.classList.toggle("lightBorder");
    vert2AxisLine.classList.toggle("lightBorder");
    vert3AxisLine.classList.toggle("lightBorder");
    for (var i = 0; i < scrollBox.length; i++) {
        scrollBox[i].classList.replace("darkStyles", "lightStyles");
        textarea[i].classList.replace("darkStyles", "lightStyles");
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
    }
    for (var y = 0; y < combo1BarsNodes1.length; y++) {
        combo1BarsNodes1[y].classList.replace("darkStyles", "lightStyles");
        combo1BarsNodes3[y].classList.replace("darkStyles", "lightStyles");
        previewBoxVert1Label[y].classList.replace("darkStyles", "lightStyles");
        previewBoxVert2Label[y].classList.replace("darkStyles", "lightStyles");
        previewBoxVert3Label[y].classList.replace("darkStyles", "lightStyles");
    }
    darkMode.style.display = "inline-block";
    lightMode.style.display = "none";
});