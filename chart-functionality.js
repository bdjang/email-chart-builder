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
const negativeBarsNodes1 = document.querySelectorAll("tr.negativeBars table.chartMobile td:nth-of-type(1)");
const negativeBarsNodes2 = document.querySelectorAll("tr.negativeBars table.chartMobile td:nth-of-type(2)");
const combo1BarsNodes1 = document.querySelectorAll("tr.combo1Bars table.chartMobile td:nth-of-type(1)");
const combo1BarsNodes3 = document.querySelectorAll("tr.combo1Bars table.chartMobile td:nth-of-type(3)");
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
    horiz4Caption.classList.toggle("darkStyles");
    horiz4Caption.classList.replace("lightStyles", "darkStyles");
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
        negativeBarsNodes1[x].classList.toggle("darkStyles");
        negativeBarsNodes1[x].classList.replace("lightStyles", "darkStyles");
        negativeBarsNodes2[x].classList.toggle("darkStyles");
        negativeBarsNodes2[x].classList.replace("lightStyles", "darkStyles");
    }
    for (var y = 0; y < combo1BarsNodes1.length; y++) {
        combo1BarsNodes1[y].classList.toggle("darkStyles");
        combo1BarsNodes1[y].classList.replace("lightStyles", "darkStyles");
        combo1BarsNodes3[y].classList.toggle("darkStyles");
        combo1BarsNodes3[y].classList.replace("lightStyles", "darkStyles");
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
    horiz4Caption.classList.replace("darkStyles", "lightStyles");
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
        negativeBarsNodes1[x].classList.replace("darkStyles", "lightStyles");
        negativeBarsNodes2[x].classList.replace("darkStyles", "lightStyles");
    }
    for (var y = 0; y < combo1BarsNodes1.length; y++) {
        combo1BarsNodes1[y].classList.replace("darkStyles", "lightStyles");
        combo1BarsNodes3[y].classList.replace("darkStyles", "lightStyles");
    }
    darkMode.style.display = "inline-block";
    lightMode.style.display = "none";
});