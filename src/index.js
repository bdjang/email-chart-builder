import '../css/styles.css';
import './chart-functionality.js';
import './horizontal-chart-tool-01.js';
import './horizontal-chart-tool-02.js';
import './progress-chart-tool.js';
import './negative-split-chart-tool.js';
import './combo-chart-tool.js';
import './stacked-chart-tool-01.js';
import './stacked-chart-tool-02.js';
import './vertical-chart-tool.js';

// Global Chart Variables
export const botSpace = `<div height="24" style="font-size: 24px; line-height: 24px;">&nbsp;</div>`; // Bottom spacing for non-vertical charts
export const shadowColor = "0 0 10px #ffdf65, 0 0 10px #ffdf65, 0 0 10px #ffffff, 0 0 10px #ffffff"; // Chart text highlighting
export const barSizeShadow = "-1px -1px 10px #ffdf65, -1px 1px 10px #ffdf65"; // Data bar size highlighting
export const barColorShadow = "-1px -1px 10px #6585ff, -1px 1px 10px #6585ff, 0 0 10px #ffffff"; // Data bar color highlighting
export const imgDropShadow = "drop-shadow(0 0 8px #ffdf65) drop-shadow(0 0 8px #ffdf65) drop-shadow(0 0 8px #ffffff)"; // Image drop-shadow
export const msoOpen = `<!--[if mso 15 | mso 16]><table align="center" border="0" cellpadding="0" cellspacing="0" width="600"><tr><td><![endif]-->`;
export const msoClose = "<!--[if mso 15 | mso 16]></td></tr></table><![endif]-->";
export const horiz1Bars = document.getElementsByClassName("horiz1Bars");