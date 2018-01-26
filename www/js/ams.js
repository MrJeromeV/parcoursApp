// JavaScript Document

//<script type="text/javascript">
var TabGG = Array();
var TabRatioGG = Array();
var TabRatioGGInit = Array ();
var TabDistIdGG = Array();

TabGG = ["AMS-GG0001","AMS-GG0002","AMS-GG0003","AMS-GG0004","AMS-GG0005","AMS-GG0006","AMS-GG0007","AMS-GG0008","AMS-GG0009","AMS-GG0010","AMS-GG0011","AMS-GG0012","AMS-GG0013","AMS-GG0014","AMS-GG0016","AMS-GG0017","AMS-GG0018","AMS-GG0019","AMS-GG0020","AMS-GG0021","AMS-GG0022","AMS-GG0023","AMS-GG0024","AMS-GG0025","AMS-GG0026","AMS-GG0027","AMS-GG0028","AMS-GG0029","AMS-GG0030","AMS-GG0031","AMS-GG0032","AMS-GG0034","AMS-GG0035","AMS-GG0036","AMS-GG0037","AMS-GG0038","AMS-GG0040","AMS-GG0041","AMS-GG0042","AMS-GG0043","AMS-GG0044","AMS-GG0045","AMS-GG0046","AMS-GG0047","AMS-GG0048","AMS-GG0049","AMS-GG0050","AMS-GG0051","AMS-GG0052","AMS-GG0053","AMS-GG0055","AMS-GG0056","AMS-GG0057","AMS-GG0058","AMS-GG0059","AMS-GG0060","AMS-GG0061","AMS-GG0062","AMS-GG0063","AMS-GG0064","AMS-GG0065","AMS-GG0066","AMS-GG0067","AMS-GG0068","AMS-GG0069","AMS-GG0070","AMS-GG0071","AMS-GG0072","AMS-GG0073","AMS-GG0074","AMS-GG0075","AMS-GG0076","AMS-GG0077","AMS-GG0078","AMS-GG0079","AMS-GG0080","AMS-GG0081","AMS-GG0082","AMS-GG0083","AMS-GG0084","AMS-GG0085","AMS-GG0086","AMS-GG0087","AMS-GG0088"];
TabRatioGGInit = [5.39,4.71,4.82,5.60,4.74,4.99,6.08,5.18,6.09,6.26,5.56,4.35,6.80,4.79,5.64,5.54,5.00,6.37,4.59,4.43,4.42,5.00,7.15,5.21,6.07,6.77,6.50,5.33,5.48,6.38,4.85,6.95,7.43,6.13,7.32,5.70,8.40,7.48,7.15,7.24,7.28,5.95,6.39,4.47,5.84,5.15,6.17,6.97,4.90,5.90,5.22,5.81,8.39,6.14,5.60,5.37,4.45,4.86,6.64,6.40,5.94,6.95,6.75,5.87,5.75,5.36,4.35,7.28,5.97,5.47,5.40,5.24,6.05,6.08,6.64,6.77,7.04,6.18,5.25,6.02,6.90,6.69,7.64,5.54];
TabRatioGG = [4.69,3.65,4.16,4.47,3.91,4.11,4.45,4.03,4.63,6.23,4.51,3.58,5.37,3.95,4.59,5.00,3.72,5.41,3.86,3.58,3.62,3.85,5.32,5.02,4.81,5.20,5.14,4.15,4.74,5.14,4.57,5.59,5.58,4.75,6.07,4.65,7.47,6.34,6.17,6.77,6.53,5.23,5.64,4.44,5.04,4.24,4.62,6.26,3.89,5.61,4.16,4.47,6.78,4.52,4.45,4.64,3.23,4.85,5.16,5.43,5.38,6.83,5.11,5.15,4.18,4.95,3.89,5.28,4.87,4.45,4.00,4.17,5.43,4.87,4.80,5.93,6.19,5.05,3.66,4.53,6.21,5.74,6.71,5.21];
TabDistIdGG = [33.4,31.0,32.2,32.9,31.6,32.1,32.9,31.9,33.3,37.1,33.0,30.8,35.0,31.7,33.2,34.2,31.2,35.1,31.5,30.8,30.9,31.5,34.9,34.2,33.7,34.7,34.5,32.2,33.6,34.5,33.2,35.6,35.5,33.6,36.7,33.4,40.0,37.3,36.9,38.4,37.8,34.7,35.7,32.8,34.3,32.4,33.3,37.2,31.5,35.6,32.2,32.9,38.4,33.0,32.9,33.3,30.0,33.8,34.5,35.2,35.1,38.5,34.4,34.5,32.2,34.1,31.5,34.8,33.9,32.9,31.8,32.2,35.2,33.9,33.7,36.4,37.0,34.3,31.0,33.0,37.0,35.9,38.2,34.7];

var TabMG = Array();
var TabRatioMG = Array();
var TabRatioMGInit = Array ();
var TabDistIdMG = Array();

TabMG = ["AMS-MG0001","AMS-MG0002","AMS-MG0003","AMS-MG0004","AMS-MG0005","AMS-MG0006","AMS-MG0007","AMS-MG0009","AMS-MG0011","AMS-MG0012","AMS-MG0014","AMS-MG0015","AMS-MG0017","AMS-MG0018","AMS-MG0019","AMS-MG0020","AMS-MG0021","AMS-MG0022","AMS-MG0024","AMS-MG0025","AMS-MG0026","AMS-MG0027","AMS-MG0028","AMS-MG0029","AMS-MG0030","AMS-MG0032","AMS-MG0033","AMS-MG0034","AMS-MG0035","AMS-MG0036","AMS-MG0037","AMS-MG0038","AMS-MG0039","AMS-MG0040","AMS-MG0041","AMS-MG0042","AMS-MG0043","AMS-MG0044","AMS-MG0045","AMS-MG0050","AMS-MG0051","AMS-MG0052","AMS-MG0053","AMS-MG0054","AMS-MG0055","AMS-MG0056","AMS-MG0059","AMS-MG0061","AMS-MG0062","AMS-MG0063","AMS-MG0064","AMS-MG0065","AMS-MG0066","AMS-MG0069","AMS-MG0071","AMS-MG0072","AMS-MG0074","AMS-MG0075","AMS-MG0076","AMS-MG0077","AMS-MG0078","AMS-MG0079","AMS-MG0080","AMS-MG0081","AMS-MG0082","AMS-MG0083","AMS-MG0084","AMS-MG0085","AMS-MG0086","AMS-MG0087","AMS-MG0088","AMS-MG0089","AMS-MG0090","AMS-MG0091","AMS-MG0092","AMS-MG0093","AMS-MG0094","AMS-MG0095","AMS-MG0096","AMS-MG0097","AMS-MG0098","AMS-MG0099","AMS-MG0100","AMS-MG0101","AMS-MG0102","AMS-MG0103","AMS-MG0104","AMS-MG0105","AMS-MG0106","AMS-MG0107","AMS-MG0108","AMS-MG0109","AMS-MG0110","AMS-MG0111","AMS-MG0112","AMS-MG0113","AMS-MG0114","AMS-MG0115","AMS-MG0116","AMS-MG0117","AMS-MG0118","AMS-MG0119","AMS-MG0120","AMS-MG0121","AMS-MG0122","AMS-MG0123","AMS-MG0124","AMS-MG0125","AMS-MG0126","AMS-MG0127","AMS-MG0128","AMS-MG0129","AMS-MG0130","AMS-MG0131","AMS-MG0132","AMS-MG0133","AMS-MG0134","AMS-MG0135","AMS-MG0136","AMS-MG0137","AMS-MG0138"];
TabRatioMGInit = [5.76,5.12,5.98,4.75,5.35,5.49,5.33,4.83,7.51,4.47,5.14,4.90,5.10,4.59,5.00,5.39,5.00,6.70,4.91,6.48,4.53,4.88,8.10,4.90,5.68,7.30,5.25,4.65,5.12,6.78,7.26,4.94,4.70,4.92,4.61,7.58,7.36,6.87,7.00,4.87,5.87,5.85,5.16,5.83,5.61,8.34,5.34,5.58,5.31,7.62,6.70,7.28,6.63,7.06,7.74,6.00,6.55,6.26,5.54,7.05,6.81,7.69,6.13,8.21,7.18,7.18,7.97,7.93,7.50,7.67,8.26,6.94,5.03,8.77,7.12,8.67,5.66,5.30,7.40,8.09,5.91,7.62,7.12,7.59,6.24,8.33,8.07,8.53,7.07,6.29,7.11,7.39,8.60,5.42,5.17,7.85,6.74,7.89,8.03,5.27,5.07,5.07,5.20,7.23,6.49,5.54,5.10,8.47,7.86,8.95,6.57,8.34,6.52,7.53,8.99,8.45,8.78,6.49,7.37,7.28,6.42];
TabRatioMG = [4.93,4.26,5.22,4.73,4.62,4.75,5.16,4.24,6.83,4.01,4.82,4.21,4.40,4.04,4.28,4.59,4.26,6.17,4.33,6.36,4.16,4.39,6.61,4.52,4.98,5.79,4.62,4.07,4.74,6.63,6.63,4.41,4.06,4.54,4.23,6.57,5.63,6.17,5.48,4.46,5.04,4.99,4.36,5.08,4.80,8.21,5.18,5.38,5.05,6.84,6.03,6.28,6.62,6.57,6.67,5.28,5.83,5.98,5.07,6.55,6.62,6.03,5.38,7.39,6.04,5.89,6.69,6.79,6.63,7.66,8.13,6.06,4.93,8.14,6.91,7.17,5.32,5.03,6.50,7.38,4.89,6.27,6.29,6.98,5.88,8.23,6.99,7.65,6.51,6.23,7.10,7.34,8.26,5.37,4.63,7.69,5.02,6.53,5.61,4.83,4.90,4.20,4.50,6.97,5.39,5.07,4.52,7.18,7.56,8.42,5.54,7.81,5.52,6.36,8.23,6.91,7.74,5.46,6.82,6.32,6.12];
TabDistIdMG = [23.3,21.0,24.3,22.6,22.3,22.7,24.1,21.0,29.7,20.2,22.9,20.9,21.5,20.3,21.1,22.2,21.1,27.5,21.3,28.1,20.7,21.5,28.9,21.9,23.5,26.2,22.3,20.4,22.7,29.0,29.0,21.6,20.4,22.0,21.0,28.8,25.6,27.5,25.1,21.7,23.7,23.5,21.4,23.8,22.9,34.3,24.2,24.8,23.7,29.7,27.0,27.8,29.0,28.8,29.1,24.5,26.3,26.8,23.8,28.7,29.0,27.0,24.8,31.5,27.0,26.5,29.2,29.5,29.0,32.4,34.0,27.0,23.3,34.0,30.0,30.8,24.6,23.6,28.6,31.5,23.2,27.8,27.9,30.2,26.5,34.4,30.2,32.4,28.6,27.7,30.6,31.4,34.5,24.8,22.3,32.6,23.6,28.7,25.6,23.0,23.2,20.9,21.9,30.1,24.9,23.8,21.9,30.9,32.1,35.0,25.4,33.0,25.3,28.1,34.3,30.0,32.7,25.1,29.6,28.0,27.3];

var TabPG = Array();
var TabRatioPG = Array();
var TabRatioPGInit = Array ();
var TabDistIdPG = Array();

TabPG = ["AMS-PG0001","AMS-PG0002","AMS-PG0003","AMS-PG0004","AMS-PG0005","AMS-PG0006","AMS-PG0007","AMS-PG0009","AMS-PG0010","AMS-PG0011","AMS-PG0012","AMS-PG0013","AMS-PG0014","AMS-PG0015","AMS-PG0016","AMS-PG0017","AMS-PG0018","AMS-PG0019","AMS-PG0020","AMS-PG0021","AMS-PG0022","AMS-PG0023","AMS-PG0024","AMS-PG0025","AMS-PG0026","AMS-PG0027","AMS-PG0028","AMS-PG0029","AMS-PG0030","AMS-PG0031","AMS-PG0032","AMS-PG0033","AMS-PG0034","AMS-PG0035","AMS-PG0036","AMS-PG0037","AMS-PG0038","AMS-PG0039","AMS-PG0040","AMS-PG0042","AMS-PG0043","AMS-PG0044","AMS-PG0045","AMS-PG0049","AMS-PG0050","AMS-PG0051","AMS-PG0052","AMS-PG0053","AMS-PG0054","AMS-PG0055","AMS-PG0056","AMS-PG0057","AMS-PG0058","AMS-PG0059","AMS-PG0060","AMS-PG0061","AMS-PG0062","AMS-PG0063","AMS-PG0064","AMS-PG0065","AMS-PG0066","AMS-PG0067","AMS-PG0068","AMS-PG0069","AMS-PG0070","AMS-PG0071","AMS-PG0072","AMS-PG0073","AMS-PG0074","AMS-PG0075","AMS-PG0076","AMS-PG0077","AMS-PG0078","AMS-PG0079","AMS-PG0080","AMS-PG0081","AMS-PG0082","AMS-PG0083","AMS-PG0084","AMS-PG0085","AMS-PG0086","AMS-PG0087","AMS-PG0088","AMS-PG0089","AMS-PG0090","AMS-PG0091","AMS-PG0092","AMS-PG0093","AMS-PG0094","AMS-PG0095","AMS-PG0096","AMS-PG0097","AMS-PG0098","AMS-PG0099","AMS-PG0100","AMS-PG0101","AMS-PG0102","AMS-PG0103","AMS-PG0104","AMS-PG0105","AMS-PG0106","AMS-PG0107","AMS-PG0108","AMS-PG0109","AMS-PG0110","AMS-PG0111","AMS-PG0112","AMS-PG0113","AMS-PG0114","AMS-PG0116","AMS-PG0117","AMS-PG0118","AMS-PG0120","AMS-PG0121","AMS-PG0122","AMS-PG0123","AMS-PG0124","AMS-PG0125","AMS-PG0126","AMS-PG0127","AMS-PG0128","AMS-PG0129"];
TabRatioPGInit = [7.80,5.54,5.23,6.59,4.73,4.87,6.95,6.32,7.53,4.82,8.74,4.88,5.03,6.67,6.36,4.90,4.76,4.57,5.36,5.00,4.49,4.46,8.04,4.56,5.12,4.88,4.92,5.04,4.62,6.66,6.52,5.15,6.60,5.89,5.35,8.51,7.90,4.72,5.34,6.71,6.77,5.21,6.02,6.38,7.65,6.78,7.88,9.00,8.78,8.90,8.96,8.07,8.02,6.27,7.47,7.40,6.14,6.27,8.71,4.98,5.55,5.87,6.58,7.11,8.77,7.41,8.80,8.07,8.30,5.46,7.08,5.12,6.00,8.43,8.75,7.87,8.50,8.71,7.79,8.70,8.29,7.32,8.99,8.84,7.27,7.08,7.81,8.95,8.02,8.78,6.31,8.08,6.97,8.42,8.17,7.90,7.49,8.34,8.10,6.71,8.30,7.17,7.76,7.49,5.97,8.72,6.92,8.79,8.89,6.24,6.74,7.40,7.58,7.71,5.47,8.97,7.85,8.15,7.51,5.51,4.89,5.29];
TabRatioPG = [7.62,5.02,4.70,5.54,3.98,4.28,6.37,5.78,6.50,4.30,8.59,4.26,4.37,6.09,5.61,3.97,4.59,3.84,4.90,4.96,3.79,3.87,6.00,3.76,4.64,4.88,4.47,4.04,3.76,5.87,5.41,4.37,5.39,4.92,4.73,6.78,6.56,4.44,5.03,5.85,6.64,4.22,5.85,5.82,7.44,6.03,6.74,8.49,7.78,7.89,7.74,7.73,7.25,6.23,6.80,6.59,6.05,6.05,7.92,4.76,4.94,5.35,5.88,6.22,8.66,6.58,8.06,7.91,6.79,5.13,6.53,5.09,5.63,8.32,7.78,7.44,7.37,7.48,6.46,6.47,6.84,6.41,7.61,7.20,6.60,7.04,6.68,7.37,6.89,6.78,5.58,5.65,6.42,7.56,7.34,6.57,6.05,7.34,6.52,5.82,7.84,5.88,6.00,6.91,5.14,8.34,5.93,6.90,7.90,5.51,5.69,7.32,6.93,7.36,5.00,6.32,6.76,6.27,7.35,4.92,4.62,4.72];
TabDistIdPG = [22.9,17.6,16.9,18.6,15.4,16.0,20.3,19.1,20.6,16.1,24.8,16.0,16.2,19.8,18.8,15.4,16.7,15.1,17.3,17.4,15.0,15.2,19.6,15.0,16.8,17.3,16.4,15.6,15.0,19.3,18.4,16.2,18.3,17.4,17.0,21.2,20.7,16.4,17.6,19.3,20.9,15.9,19.3,19.2,22.5,19.6,21.1,24.6,23.2,23.4,23.1,23.1,22.1,20.0,21.2,20.8,19.7,19.7,23.5,17.0,17.4,18.2,19.3,20.0,25.0,20.8,23.8,23.5,21.2,17.8,20.6,17.7,18.8,24.3,23.2,22.5,22.4,22.6,20.5,20.5,21.3,20.4,22.9,22.0,20.8,21.7,21.0,22.4,21.4,21.2,18.7,18.9,20.4,22.7,22.3,20.7,19.7,22.3,20.6,19.2,23.3,19.3,19.6,21.4,17.8,24.3,19.4,21.4,23.4,18.6,18.9,22.3,21.5,22.3,17.5,20.2,21.1,20.1,22.3,17.4,16.8,17.0];

var TabPA = Array();
var TabRatioPA = Array();
var TabRatioPAInit = Array ();
var TabDistIdPA = Array();

TabPA = ["AMS-PA0001","AMS-PA0002","AMS-PA0003","AMS-PA0004","AMS-PA0005","AMS-PA0006","AMS-PA0007","AMS-PA0008","AMS-PA0009","AMS-PA0010","AMS-PA0011","AMS-PA0012","AMS-PA0014","AMS-PA0015","AMS-PA0016","AMS-PA0017","AMS-PA0018","AMS-PA0019","AMS-PA0020","AMS-PA0021","AMS-PA0022","AMS-PA0023","AMS-PA0024","AMS-PA0025","AMS-PA0026","AMS-PA0028","AMS-PA0029","AMS-PA0030","AMS-PA0031","AMS-PA0032","AMS-PA0033","AMS-PA0034","AMS-PA0035","AMS-PA0036","AMS-PA0037","AMS-PA0038","AMS-PA0039","AMS-PA0040","AMS-PA0041","AMS-PA0042","AMS-PA0043","AMS-PA0044","AMS-PA0045","AMS-PA0046","AMS-PA0047","AMS-PA0048","AMS-PA0049","AMS-PA0050","AMS-PA0051","AMS-PA0052","AMS-PA0053","AMS-PA0054","AMS-PA0055","AMS-PA0056","AMS-PA0057","AMS-PA0058","AMS-PA0059","AMS-PA0060","AMS-PA0061","AMS-PA0062","AMS-PA0063","AMS-PA0064","AMS-PA0065","AMS-PA0066","AMS-PA0067","AMS-PA0068","AMS-PA0069","AMS-PA0070","AMS-PA0071","AMS-PA0072","AMS-PA0073","AMS-PA0074","AMS-PA0075","AMS-PA0076","AMS-PA0077","AMS-PA0078","AMS-PA0079","AMS-PA0080","AMS-PA0081","AMS-PA0082","AMS-PA0083","AMS-PA0084","AMS-PA0085","AMS-PA0086","AMS-PA0087","AMS-PA0088","AMS-PA0089","AMS-PA0090","AMS-PA0091","AMS-PA0092","AMS-PA0093","AMS-PA0094","AMS-PA0095","AMS-PA0096","AMS-PA0097","AMS-PA0098","AMS-PA0099","AMS-PA0100","AMS-PA0101","AMS-PA0102","AMS-PA0103","AMS-PA0104","AMS-PA0105","AMS-PA0106","AMS-PA0107","AMS-PA0108","AMS-PA0109","AMS-PA0110","AMS-PA0111","AMS-PA0112","AMS-PA0113","AMS-PA0114","AMS-PA0115","AMS-PA0116","AMS-PA0117","AMS-PA0118","AMS-PA0119","AMS-PA0120","AMS-PA0121","AMS-PA0122","AMS-PA0123","AMS-PA0124","AMS-PA0125","AMS-PA0126","AMS-PA0127","AMS-PA0128","AMS-PA0129","AMS-PA0130","AMS-PA0131","AMS-PA0132","AMS-PA0133","AMS-PA0134","AMS-PA0135","AMS-PA0136","AMS-PA0137","AMS-PA0138","AMS-PA0139","AMS-PA0140","AMS-PA0141","AMS-PA0142","AMS-PA0143","AMS-PA0144","AMS-PA0145","AMS-PA0146","AMS-PA0147","AMS-PA0148","AMS-PA0149","AMS-PA0150","AMS-PA0151","AMS-PA0152","AMS-PA0153","AMS-PA0154","AMS-PA0155","AMS-PA0156","AMS-PA0157","AMS-PA0158","AMS-PA0159","AMS-PA0160","AMS-PA0161","AMS-PA0162","AMS-PA0163","AMS-PA0164","AMS-PA0165"];
TabRatioPAInit = [7.59,5.65,8.95,12.77,11.70,7.62,6.20,7.67,7.45,11.40,9.43,6.89,10.39,11.64,14.01,12.54,10.73,13.42,5.77,8.39,6.21,4.83,5.26,6.07,10.23,7.89,8.36,11.80,7.42,7.86,7.64,8.17,9.00,12.26,8.72,9.88,6.88,9.70,10.34,9.13,8.26,9.21,8.79,5.23,4.86,10.21,7.14,7.04,6.13,5.57,8.90,10.62,10.56,8.34,6.55,7.12,4.14,6.61,9.65,5.56,8.01,8.32,8.02,13.01,9.36,10.56,11.91,9.94,12.72,13.36,12.71,13.79,12.90,13.29,14.71,12.87,14.68,12.90,10.36,13.29,13.54,12.31,14.04,10.77,10.15,14.87,9.73,9.12,6.72,12.56,14.40,13.97,12.90,11.98,11.73,14.63,8.75,11.57,6.33,14.76,14.95,12.34,14.49,9.19,10.25,11.68,14.67,14.16,9.58,11.71,12.60,14.74,8.57,6.78,5.98,14.99,13.28,11.24,10.04,9.51,14.78,9.97,12.81,10.68,9.56,14.88,11.43,13.62,13.91,9.11,6.92,11.93,8.96,11.07,9.98,12.75,14.73,13.68,12.53,10.40,8.20,11.87,10.30,10.29,14.37,11.42,11.02,11.13,11.46,13.90,10.54,10.06,11.76,12.72,10.95,14.85,14.55,13.57,14.35,13.02,6.01,9.71,9.65];
TabRatioPA = [6.12,5.18,7.21,12.20,10.54,6.73,6.02,6.09,7.06,9.91,7.76,5.85,9.17,10.54,13.16,11.08,10.26,12.35,4.86,7.67,5.08,4.69,4.78,5.84,8.69,7.24,7.02,10.58,6.96,7.01,6.74,7.10,8.28,10.99,7.56,8.35,6.82,7.83,9.91,7.45,6.61,8.55,8.33,4.88,4.32,9.46,6.26,6.45,5.89,4.60,7.36,9.69,9.74,6.76,6.05,5.72,3.65,6.25,7.86,5.20,7.32,7.49,6.89,12.15,8.51,9.10,10.91,9.06,11.82,12.08,11.39,11.67,10.71,12.01,13.18,11.42,13.40,11.18,9.21,12.84,12.75,9.96,13.19,9.81,10.05,13.72,8.27,8.33,6.63,11.50,12.68,12.68,12.44,10.11,10.76,11.85,7.37,9.81,5.50,14.21,13.02,10.12,12.14,8.95,9.62,10.67,14.18,12.80,9.45,10.68,12.00,14.26,7.80,6.07,5.60,10.48,12.76,10.38,9.75,8.25,12.95,9.43,10.19,9.17,9.32,13.80,10.84,12.11,13.09,8.63,6.48,10.90,7.59,10.82,9.20,12.13,14.68,11.63,12.22,10.07,7.99,11.37,9.64,9.16,11.37,10.85,9.78,9.66,9.92,11.39,10.32,7.98,10.34,12.71,9.54,12.93,12.42,12.12,12.76,13.01,5.86,8.25,9.08];
TabDistIdPA = [7.2,6.4,8.2,12.7,11.2,7.8,7.1,7.2,8.1,10.7,8.7,7.0,10.0,11.2,13.6,11.7,11.0,12.9,6.1,8.6,6.3,5.9,6.0,7.0,9.6,8.3,8.0,11.3,8.0,8.0,7.8,8.1,9.2,11.7,8.5,9.3,7.9,8.8,10.7,8.4,7.7,9.4,9.25,6.1,5.6,10.3,7.4,7.5,7.0,5.9,8.4,10.5,10.5,7.8,7.2,6.9,5.0,7.4,8.8,6.4,8.3,8.5,7.9,12.7,9.4,9.9,11.6,9.9,12.4,12.6,12,12.3,11.4,12.6,13.6,12.0,13.8,11.8,10.0,13.3,13.2,10.7,13.6,10.6,10.8,14.1,9.2,9.2,7.7,12.1,13.2,13.2,13.0,10.9,11.4,12.4,8.4,10.6,6.7,14.6,13.5,10.9,12.7,9.8,10.4,11.4,14.5,13.3,10.3,11.4,12.6,14.6,8.8,7.2,6.8,11.2,13.3,11.1,10.5,9.2,13.4,10.2,10.9,10.0,10.1,14.2,11.5,12.7,13.6,9.5,7.6,11.6,8.6,11.5,10.0,12.7,15.0,12.2,12.8,10.8,8.9,12.0,10.4,10.0,12.0,11.5,10.5,10.4,10.7,12.0,11.0,8.9,11.0,13.2,10.3,13.4,13.0,12.7,13.3,13.5,7.0,9.2,9.9];

// --------------- Recherche des Ã©lÃ©ments nÃ©cessaires au calcul des distances idÃ©ales --------- //
//	// Grands Gibiers
	// Recherche du nombre d'Ã©lÃ©ments dans le tableau des Grands Gibiers
	var NbreGG = TabGG.length;
	var i=0;
//
//	// Recherche des Ratio Min et Max
//	var RatioGGMin = TabRatioGG[0];
//	var RatioGGMax = 0;
//
//	for (var i=0; i<=NbreGG; i++)
//	{
//		if (TabRatioGG[i] < RatioGGMin)
//		{
//			RatioGGMin = TabRatioGG[i];
//		}
//		if (TabRatioGG[i]>RatioGGMax)
//		{
//			RatioGGMax = TabRatioGG[i];
//		}
//	}
//
//	// Calcul de la diffÃ©rence des ratios pour les Grands Gibiers
//	// 10 correspond au nombre de mÃ¨tres de l'intervalle dÃ©fini pour les GG : entre 30 et 40 m
//	var DiffRatioGG = (RatioGGMax-RatioGGMin)/10;
//
//	// Fin Grands Gibiers
//
//
//	// Moyens Gibiers
	// Recherche du nombre d'Ã©lÃ©ments dans le tableau des Moyens Gibiers
	var NbreMG = TabMG.length;
//
//	// Recherche des Ratio Min et Max
//	var RatioMGMin = TabRatioMG[0];
//	var RatioMGMax = 0;
//
//	for (i=0; i<=NbreMG; i++)
//	{
//		if (TabRatioMG[i] < RatioMGMin)
//		{
//			RatioMGMin = TabRatioMG[i];
//		}
//		if (TabRatioMG[i]>RatioMGMax)
//		{
//			RatioMGMax = TabRatioMG[i];
//		}
//	}
//
//
//	// Calcul de la diffÃ©rence des ratios pour les Moyens Gibiers
//	// 15 correspond au nombre de mÃ¨tres de l'intervalle dÃ©fini pour les MG : entre 20 et 35 m
//	var DiffRatioMG = (RatioMGMax-RatioMGMin)/15;
//
//	// Fin Moyens Gibiers
//
//
//	// Petits Gibiers
	// Recherche du nombre d'Ã©lÃ©ments dans le tableau des Petits Gibiers
	var NbrePG = TabPG.length;
//
//	// Recherche des Ratio Min et Max
//	var RatioPGMin = TabRatioPG[0];
//	var RatioPGMax = 0;
//
//	for (i=0; i<=NbrePG; i++)
//	{
//		if (TabRatioPG[i] < RatioPGMin)
//		{
//			RatioPGMin = TabRatioPG[i];
//		}
//		if (TabRatioPG[i]>RatioPGMax)
//		{
//			RatioPGMax = TabRatioPG[i];
//		}
//	}
//
//
//	// Calcul de la diffÃ©rence des ratios pour les Petits Gibiers
//	// 10 correspond au nombre de mÃ¨tres de l'intervalle dÃ©fini pour les PG : entre 15 et 25 m
//	var DiffRatioPG = (RatioPGMax-RatioPGMin)/10;
//
//	// Fin Petits Gibiers
//
//
//	// Petits Animaux
	// Recherche du nombre d'Ã©lÃ©ments dans le tableau des Petits Animaux
	var NbrePA = TabPA.length;
//
//	// Recherche des Ratio Min et Max
//	var RatioPAMin = TabRatioPA[0];
//	var RatioPAMax = 0;
//
//	for (i=0; i<=NbrePA; i++)
//	{
//		if (TabRatioPA[i] < RatioPAMin)
//		{
//			RatioPAMin = TabRatioPA[i];
//		}
//		if (TabRatioPA[i]>RatioPAMax)
//		{
//			RatioPAMax = TabRatioPA[i];
//		}
//	}
//
//
//	// Calcul de la diffÃ©rence des ratios pour les Patits Animaux
//	// 10 correspond au nombre de mÃ¨tres de l'intervalle dÃ©fini pour les PA : entre 5 et 15 m
//	var DiffRatioPA = (RatioPAMax-RatioPAMin)/10;
//
//	// Fin Petits Animaux
//
// --------------------------- Fin de la recherche ------------------------------//

function ChoixGG(NomBteGG)
{
	'use strict';
	// Effacement de la distance rÃ©elle
	document.getElementById("ChoixDist"+NomBteGG).value= "";

	// Recherche du rang du blasons GG sÃ©lectionnÃ©
	var i = 0 ;
	for (i=0; i<NbreGG; i++)
	{
		if (document.getElementById(NomBteGG).value === TabGG[i])
		{
			// Affichage de la vignette du blason sÃ©lectionnÃ©
			document.getElementById("IMG"+NomBteGG).src = "BlasonsVignettesCarrees/" + TabGG[i] + ".jpg";

			// Affichage du Ratio du blason sÃ©lectionnÃ©
			document.getElementById("Ratio-"+NomBteGG).value= TabRatioGGInit[i];
			// Calcul de la distance idÃ©ale
			//var DistIdGG = (30 + ((TabRatioGG[i]-RatioGGMin)/DiffRatioGG));
			// Affichage de la distance idÃ©ale
			//document.getElementById("Dist"+NomBteGG).value= ((Math.round(DistIdGG*10))/10) + " m";
			document.getElementById("Dist"+NomBteGG).value= TabDistIdGG[i] + " m";
		}
		if (document.getElementById(NomBteGG).value === "-")
		{
			//Mise Ã  blanc des zones
			document.getElementById("IMG"+NomBteGG).src= "BlasonsVignettesCarrees/Noir.jpg";
			document.getElementById("Ratio-"+NomBteGG).value= "";
			document.getElementById("Dist"+NomBteGG).value= "";
		}
	}
}


function ChoixMG(NomBteMG)
{
	'use strict';
	// Effacement de la distance rÃ©elle
	document.getElementById("ChoixDist"+NomBteMG).value= "";

	// Recherche du rang du blasons MG sÃ©lectionnÃ©
	var i = 0 ;
	for (i=0; i<NbreMG; i++)
	{
		if (document.getElementById(NomBteMG).value === TabMG[i])
		{
			// Affichage de la vignette du blason sÃ©lectionnÃ©
			document.getElementById("IMG"+NomBteMG).src= "BlasonsVignettesCarrees/" + TabMG[i] + ".jpg";


			// Affichage du Ratio du blason sÃ©lectionnÃ©
			document.getElementById("Ratio-"+NomBteMG).value= TabRatioMGInit[i];
			// Calcul de la distance idÃ©ale
			//var DistIdMG = (20 + ((TabRatioMG[i]-RatioMGMin)/DiffRatioMG));
			// Affichage de la distance idÃ©ale
			//document.getElementById("Dist"+NomBteMG).value= ((Math.round(DistIdMG*10))/10) + " m";
			document.getElementById("Dist"+NomBteMG).value= TabDistIdMG[i] + " m";
		}
		if (document.getElementById(NomBteMG).value === "-")
		{
			//Mise Ã  blanc des zones
			document.getElementById("IMG"+NomBteMG).src= "BlasonsVignettesCarrees/Noir.jpg";
			document.getElementById("Ratio-"+NomBteMG).value= "";
			document.getElementById("Dist"+NomBteMG).value= "";
			document.getElementById("ChoixDist"+NomBteMG).value= "";
		}
	}
}

function ChoixPG(NomBtePG)
{
	'use strict';
	// Effacement de la distance rÃ©elle
	document.getElementById("ChoixDist"+NomBtePG).value= "";

	// Recherche du rang du blasons PG sÃ©lectionnÃ©
	var i = 0 ;
	for (i=0; i<NbrePG; i++)

	{
		if (document.getElementById(NomBtePG).value === TabPG[i])
		{
			// Affichage de la vignette du blason sÃ©lectionnÃ©
			document.getElementById("IMG"+NomBtePG).src= "BlasonsVignettesCarrees/" + TabPG[i] + ".jpg";

			// Affichage du Ratio du blason sÃ©lectionnÃ©
			document.getElementById("Ratio-"+NomBtePG).value= TabRatioPGInit[i];
			// Calcul de la distance idÃ©ale
			//var DistIdPG = (15 + ((TabRatioPG[i]-RatioPGMin)/DiffRatioPG));
			// Affichage de la distance idÃ©ale
			//document.getElementById("Dist"+NomBtePG).value= ((Math.round(DistIdPG*10))/10) + " m";
			document.getElementById("Dist"+NomBtePG).value= TabDistIdPG[i] + " m";
		}
		if (document.getElementById(NomBtePG).value === "-")
		{
			//Mise Ã  blanc des zones
			document.getElementById("IMG"+NomBtePG).src= "BlasonsVignettesCarrees/Noir.jpg";
			document.getElementById("Ratio-"+NomBtePG).value= "";
			document.getElementById("Dist"+NomBtePG).value= "";
			document.getElementById("ChoixDist"+NomBtePG).value= "";
		}
	}
}

function ChoixPA(NomBtePA)
{
	'use strict';
	// Effacement de la distance rÃ©elle
	document.getElementById("ChoixDist"+NomBtePA).value= "";

	// Recherche du rang du blasons PA sÃ©lectionnÃ©
	var i = 0 ;
	for (i=0; i<NbrePA; i++)
	{
		if (document.getElementById(NomBtePA).value === TabPA[i])
		{
			// Affichage de la vignette du blason sÃ©lectionnÃ©
			document.getElementById("IMG"+NomBtePA).src= "BlasonsVignettesCarrees/" + TabPA[i] + ".jpg";

			// Affichage du Ratio du blason sÃ©lectionnÃ©
			document.getElementById("Ratio-"+NomBtePA).value= TabRatioPAInit[i];
			// Calcul de la distance idÃ©ale
			//var DistIdPA = (5 + ((TabRatioPA[i]-RatioPAMin)/DiffRatioPA));
			// Affichage de la distance idÃ©ale
			//document.getElementById("Dist"+NomBtePA).value= ((Math.round(DistIdPA*10))/10) + " m";
			document.getElementById("Dist"+NomBtePA).value= TabDistIdPA[i] + " m";
		}
		if (document.getElementById(NomBtePA).value === "-")
		{
			//Mise Ã  blanc des zones
			document.getElementById("IMG"+NomBtePA).src= "BlasonsVignettesCarrees/Noir.jpg";
			document.getElementById("Ratio-"+NomBtePA).value= "";
			document.getElementById("Dist"+NomBtePA).value= "";
			document.getElementById("ChoixDist"+NomBtePA).value= "";}
	}
}

function CalculCoeff(NumParcours)
{
	'use strict';
	// Calcul de l'intervalle du coefficient de difficultÃ©
	var ValMinCD = document.getElementById("CoeffDiffMin").value;
	//ValMinCD = parseFloat(ValMinCD);
	var ValMaxCD = document.getElementById("CoeffDiffMax").value;
	//ValMaxCD = parseFloat(ValMaxCD);

	var IntCD = parseFloat(ValMaxCD) - parseFloat(ValMinCD);

	// VÃ©rification du remplissage de tous les blasons
	switch (NumParcours)
	{
		case ("Parcours1") :
			if (document.getElementById("GG1").value==="-" || document.getElementById("GG2").value==="-" || document.getElementById("GG3").value==="-" || document.getElementById("GG4").value==="-" || document.getElementById("MG1").value==="-" || document.getElementById("MG2").value==="-" || document.getElementById("MG3").value==="-" || document.getElementById("MG4").value==="-" || document.getElementById("MG5").value==="-" || document.getElementById("MG6").value==="-" || document.getElementById("MG7").value==="-" || document.getElementById("PG1").value==="-" || document.getElementById("PG2").value==="-" || document.getElementById("PG3").value==="-" || document.getElementById("PG4").value==="-" || document.getElementById("PG5").value==="-" || document.getElementById("PG6").value==="-" || document.getElementById("PA1").value==="-" || document.getElementById("PA2").value==="-" || document.getElementById("PA3").value==="-" || document.getElementById("PA4").value==="-")
			{

				alert ("Le calcul ne peut Ãªtre effectuÃ© qu'une fois tous les blasons (21 cibles) sÃ©lectionnÃ©s.");
				break ;
			}
			else
			{
				// Total des Rations
				var RatiosP1 = parseFloat(document.getElementById("Ratio-GG1").value) + parseFloat(document.getElementById("Ratio-GG2").value) + parseFloat(document.getElementById("Ratio-GG3").value) + parseFloat(document.getElementById("Ratio-GG4").value) + parseFloat(document.getElementById("Ratio-MG1").value) + parseFloat(document.getElementById("Ratio-MG2").value) + parseFloat(document.getElementById("Ratio-MG3").value) + parseFloat(document.getElementById("Ratio-MG4").value) + parseFloat(document.getElementById("Ratio-MG5").value) + parseFloat(document.getElementById("Ratio-MG6").value) + parseFloat(document.getElementById("Ratio-MG7").value) + parseFloat(document.getElementById("Ratio-PG1").value) + parseFloat(document.getElementById("Ratio-PG2").value) + parseFloat(document.getElementById("Ratio-PG3").value) + parseFloat(document.getElementById("Ratio-PG4").value) + parseFloat(document.getElementById("Ratio-PG5").value) + parseFloat(document.getElementById("Ratio-PG6").value) + parseFloat(document.getElementById("Ratio-PA1").value) + parseFloat(document.getElementById("Ratio-PA2").value) + parseFloat(document.getElementById("Ratio-PA3").value) + parseFloat(document.getElementById("Ratio-PA4").value);
				// Total des distances idÃ©ales
				var DistP1 = (Math.round((parseFloat(document.getElementById("DistGG1").value) + parseFloat(document.getElementById("DistGG2").value) + parseFloat(document.getElementById("DistGG3").value) + parseFloat(document.getElementById("DistGG4").value) + parseFloat(document.getElementById("DistMG1").value) + parseFloat(document.getElementById("DistMG2").value) + parseFloat(document.getElementById("DistMG3").value) + parseFloat(document.getElementById("DistMG4").value) + parseFloat(document.getElementById("DistMG5").value) + parseFloat(document.getElementById("DistMG6").value) + parseFloat(document.getElementById("DistMG7").value) + parseFloat(document.getElementById("DistPG1").value) + parseFloat(document.getElementById("DistPG2").value) + parseFloat(document.getElementById("DistPG3").value) + parseFloat(document.getElementById("DistPG4").value) + parseFloat(document.getElementById("DistPG5").value) + parseFloat(document.getElementById("DistPG6").value) + parseFloat(document.getElementById("DistPA1").value) + parseFloat(document.getElementById("DistPA2").value) + parseFloat(document.getElementById("DistPA3").value) + parseFloat(document.getElementById("DistPA4").value))*100)/100);
				// Affichage des distances idÃ©ales
				document.getElementById("TotDistId1").value = DistP1;

				// Si les distances rÃ©elles ne sont pas saisies, on affiche les distances idÃ©ales
				for (i=1;i<5;i++)
				{
					if (document.getElementById("ChoixDistGG"+i).value==="")
					{
						document.getElementById("ChoixDistGG"+i).value=document.getElementById("DistGG"+i).value;
					}
				}
				for (i=1;i<8;i++)
				{
					if (document.getElementById("ChoixDistMG"+i).value==="")
					{
						document.getElementById("ChoixDistMG"+i).value=document.getElementById("DistMG"+i).value;
					}
				}
				for (i=1;i<7;i++)
				{
					if (document.getElementById("ChoixDistPG"+i).value==="")
					{
						document.getElementById("ChoixDistPG"+i).value=document.getElementById("DistPG"+i).value;
					}
				}
				for (i=1;i<9;i++)
				{
					if (document.getElementById("ChoixDistPA"+i).value==="")
					{
						document.getElementById("ChoixDistPA"+i).value=document.getElementById("DistPA"+i).value;
					}
				}

				// Total des distances rÃ©elles
				var DistRP1 = (Math.round((parseFloat(document.getElementById("ChoixDistGG1").value) + parseFloat(document.getElementById("ChoixDistGG2").value) + parseFloat(document.getElementById("ChoixDistGG3").value) + parseFloat(document.getElementById("ChoixDistGG4").value) + parseFloat(document.getElementById("ChoixDistMG1").value) + parseFloat(document.getElementById("ChoixDistMG2").value) + parseFloat(document.getElementById("ChoixDistMG3").value) + parseFloat(document.getElementById("ChoixDistMG4").value) + parseFloat(document.getElementById("ChoixDistMG5").value) + parseFloat(document.getElementById("ChoixDistMG6").value) + parseFloat(document.getElementById("ChoixDistMG7").value) + parseFloat(document.getElementById("ChoixDistPG1").value) + parseFloat(document.getElementById("ChoixDistPG2").value) + parseFloat(document.getElementById("ChoixDistPG3").value) + parseFloat(document.getElementById("ChoixDistPG4").value) + parseFloat(document.getElementById("ChoixDistPG5").value) + parseFloat(document.getElementById("ChoixDistPG6").value) + parseFloat(document.getElementById("ChoixDistPA1").value) + parseFloat(document.getElementById("ChoixDistPA2").value) + parseFloat(document.getElementById("ChoixDistPA3").value) + parseFloat(document.getElementById("ChoixDistPA4").value))*100)/100);
				// Affichage des distances rÃ©elles
				document.getElementById("TotDistSel1").value = DistRP1;

				//Calcul coeff diff IdÃ©al
				var CId1 = (Math.round((DistP1/RatiosP1)*100))/100;
				// Affichage coeff diff IdÃ©al
				document.getElementById("CoeffDiffId1").value = CId1;
				// Determination du % du coeff idÃ©al
				var PctId1 = (Math.round(((CId1 - (parseFloat(ValMinCD)))*100)/(IntCD))*100)/100;

				// Affichage du % du coeff
				if (parseFloat(PctId1) < 33.33)
				{
					document.getElementById("PropCDId1").src = "Images Site/CoeffDiff1.png";
				}
				if (parseFloat(PctId1) > 33.33 && parseFloat(PctId1) < 66.66)
				{
					document.getElementById("PropCDId1").src = "Images Site/CoeffDiff2.png";
				}
				if (parseFloat(PctId1) > 66.66)
				{
					document.getElementById("PropCDId1").src = "Images Site/CoeffDiff3.png";
				}
				document.getElementById("PropCDId1").width = ((parseFloat(PctId1)*294)/100);


				//Calcul coeff diff rÃ©el
				var CR1 = (Math.round((DistRP1/RatiosP1)*100))/100;
				// Affichage coeff diff rÃ©el
				document.getElementById("CoeffDiffSel1").value = CR1;
				// DÃ©termination du % du coeff rÃ©el
				var PctR1 = (Math.round(((CR1 - parseFloat(ValMinCD))*100)/IntCD)*100)/100;
				// Affichage du % du coeff
				if (parseFloat(PctR1) < 33.33)
				{
					document.getElementById("PropCDSel1").src = "Images Site/CoeffDiff1.png";
				}
				if (parseFloat(PctR1) > 33.33 && parseFloat(PctR1) < 66.66)
				{
					document.getElementById("PropCDSel1").src = "Images Site/CoeffDiff2.png";
				}
				if (parseFloat(PctR1) > 66.66)
				{
					document.getElementById("PropCDSel1").src = "Images Site/CoeffDiff3.png";
				}
				document.getElementById("PropCDSel1").width = ((parseFloat(PctR1)*294)/100);

				// Message d'avertissement si la fourchette des distances n'est pas respectÃ©e
				if (parseFloat(DistP1) < 525 || parseFloat(DistP1) > 550)
				{
					if (parseFloat(DistRP1) < 525 || parseFloat(DistRP1) > 550)
					{
						document.getElementById("RemarqueP1").value = "ATTENTION ! Le cumul des distances proposÃ©es et/ou selectionnÃ©es n'entre pas dans la fourchette 525-550 m. imposÃ©e. Vous devriez changer certains blasons ou adapter lÃ©gÃ¨rement les distances afin de respecter la rÃ¨gle.";
						document.getElementById("RemarqueP1").style.color = "#F00";
					}
					else
					{
						document.getElementById("RemarqueP1").value = "Le cumul des distances proposÃ©es n'entre pas dans la fourchette 525-550 m. imposÃ©e. Les modifications apportÃ©es permettent de valider votre choix.";
						document.getElementById("RemarqueP1").style.color = "#66CC66";
						document.getElementById("BPDF").disabled = false;
						document.getElementById('BPDF').className="BoutonPlusMoins";
				}
				}
				else
				{
					if (parseFloat(DistRP1) < 525 || parseFloat(DistRP1) > 550)
					{
						document.getElementById("RemarqueP1").value = "ATTENTION ! Le cumul des distances selectionnÃ©es n'entre pas dans la fourchette 525-550 m. imposÃ©e. Vous devriez adapter lÃ©gÃ¨rement les distances ou conserver les distances proposÃ©es afin de respecter la rÃ¨gle.";
						document.getElementById("RemarqueP1").style.color = "#F00";
					}
					else
					{
						document.getElementById("RemarqueP1").value = "La fourchette 525-550 m. imposÃ©e est respectÃ©e Ã  la fois par les distances proposÃ©es et les distances sÃ©lectionnÃ©es.";
						document.getElementById("RemarqueP1").style.color = "#66CC66";
						document.getElementById("BPDF").disabled = false;
						document.getElementById('BPDF').className="BoutonPlusMoins";
					}
				}
				break;

			}
			break;
		case ("Parcours2") :
			if (document.getElementById("GG5").value==="-" || document.getElementById("GG6").value==="-" || document.getElementById("GG7").value==="-" || document.getElementById("GG8").value==="-" || document.getElementById("MG8").value==="-" || document.getElementById("MG9").value==="-" || document.getElementById("MG10").value==="-" || document.getElementById("MG11").value==="-" || document.getElementById("MG12").value==="-" || document.getElementById("MG13").value==="-" || document.getElementById("MG14").value==="-" || document.getElementById("PG7").value==="-" || document.getElementById("PG8").value==="-" || document.getElementById("PG9").value==="-" || document.getElementById("PG10").value==="-" || document.getElementById("PG11").value==="-" || document.getElementById("PG12").value==="-" || document.getElementById("PA9").value==="-" || document.getElementById("PA10").value==="-" || document.getElementById("PA11").value==="-" || document.getElementById("PA12").value==="-")
			{
				alert ("Le calcul ne peut Ãªtre effectuÃ© qu'une fois tous les blasons (21 cibles) sÃ©lectionnÃ©s.");
				break ;
			}
			else
			{
				// Total des Ratios
				var RatiosP2 = parseFloat(document.getElementById("Ratio-GG5").value) + parseFloat(document.getElementById("Ratio-GG6").value) + parseFloat(document.getElementById("Ratio-GG7").value) + parseFloat(document.getElementById("Ratio-GG8").value) + parseFloat(document.getElementById("Ratio-MG8").value) + parseFloat(document.getElementById("Ratio-MG9").value) + parseFloat(document.getElementById("Ratio-MG10").value) + parseFloat(document.getElementById("Ratio-MG11").value) + parseFloat(document.getElementById("Ratio-MG12").value) + parseFloat(document.getElementById("Ratio-MG13").value) + parseFloat(document.getElementById("Ratio-MG14").value) + parseFloat(document.getElementById("Ratio-PG7").value) + parseFloat(document.getElementById("Ratio-PG8").value) + parseFloat(document.getElementById("Ratio-PG9").value) + parseFloat(document.getElementById("Ratio-PG10").value) + parseFloat(document.getElementById("Ratio-PG11").value) + parseFloat(document.getElementById("Ratio-PG12").value) + parseFloat(document.getElementById("Ratio-PA9").value) + parseFloat(document.getElementById("Ratio-PA10").value) + parseFloat(document.getElementById("Ratio-PA11").value) + parseFloat(document.getElementById("Ratio-PA12").value);
				// Total des distances idÃ©ales
				var DistP2 = (Math.round((parseFloat(document.getElementById("DistGG5").value) + parseFloat(document.getElementById("DistGG6").value) + parseFloat(document.getElementById("DistGG7").value) + parseFloat(document.getElementById("DistGG8").value) + parseFloat(document.getElementById("DistMG8").value) + parseFloat(document.getElementById("DistMG9").value) + parseFloat(document.getElementById("DistMG10").value) + parseFloat(document.getElementById("DistMG11").value) + parseFloat(document.getElementById("DistMG12").value) + parseFloat(document.getElementById("DistMG13").value) + parseFloat(document.getElementById("DistMG14").value) + parseFloat(document.getElementById("DistPG7").value) + parseFloat(document.getElementById("DistPG8").value) + parseFloat(document.getElementById("DistPG9").value) + parseFloat(document.getElementById("DistPG10").value) + parseFloat(document.getElementById("DistPG11").value) + parseFloat(document.getElementById("DistPG12").value) + parseFloat(document.getElementById("DistPA9").value) + parseFloat(document.getElementById("DistPA10").value) + parseFloat(document.getElementById("DistPA11").value) + parseFloat(document.getElementById("DistPA12").value))*100)/100);
				// Affichage des distances idÃ©ales
				document.getElementById("TotDistId2").value = DistP2;


				// Si les distances rÃ©elles ne sont pas saisies, on affiche les distances idÃ©ales
				for (i=5;i<9;i++)
				{
					if (document.getElementById("ChoixDistGG"+i).value==="")
					{
						document.getElementById("ChoixDistGG"+i).value=document.getElementById("DistGG"+i).value;
					}
				}
				for (i=8;i<15;i++)
				{
					if (document.getElementById("ChoixDistMG"+i).value==="")
					{
						document.getElementById("ChoixDistMG"+i).value=document.getElementById("DistMG"+i).value;
					}
				}
				for (i=6;i<13;i++)
				{
					if (document.getElementById("ChoixDistPG"+i).value==="")
					{
						document.getElementById("ChoixDistPG"+i).value=document.getElementById("DistPG"+i).value;
					}
				}
				for (i=9;i<17;i++)
				{
					if (document.getElementById("ChoixDistPA"+i).value==="")
					{
						document.getElementById("ChoixDistPA"+i).value=document.getElementById("DistPA"+i).value;
					}
				}

				// Total des distances rÃ©elles
				var DistRP2 = (Math.round((parseFloat(document.getElementById("ChoixDistGG5").value) + parseFloat(document.getElementById("ChoixDistGG6").value) + parseFloat(document.getElementById("ChoixDistGG7").value) + parseFloat(document.getElementById("ChoixDistGG8").value) + parseFloat(document.getElementById("ChoixDistMG8").value) + parseFloat(document.getElementById("ChoixDistMG9").value) + parseFloat(document.getElementById("ChoixDistMG10").value) + parseFloat(document.getElementById("ChoixDistMG11").value) + parseFloat(document.getElementById("ChoixDistMG12").value) + parseFloat(document.getElementById("ChoixDistMG13").value) + parseFloat(document.getElementById("ChoixDistMG14").value) + parseFloat(document.getElementById("ChoixDistPG7").value) + parseFloat(document.getElementById("ChoixDistPG8").value) + parseFloat(document.getElementById("ChoixDistPG9").value) + parseFloat(document.getElementById("ChoixDistPG10").value) + parseFloat(document.getElementById("ChoixDistPG11").value) + parseFloat(document.getElementById("ChoixDistPG12").value) + parseFloat(document.getElementById("ChoixDistPA9").value) + parseFloat(document.getElementById("ChoixDistPA10").value) + parseFloat(document.getElementById("ChoixDistPA11").value) + parseFloat(document.getElementById("ChoixDistPA12").value))*100)/100);
				// Affichage des distances rÃ©elles
				document.getElementById("TotDistSel2").value = DistRP2;

				//Calcul coeff diff IdÃ©al
				var CId2 = (Math.round((DistP2/RatiosP2)*100))/100;
				// Affichage coeff diff IdÃ©al
				document.getElementById("CoeffDiffId2").value = CId2;
				// DÃ©termination du % du coeff idÃ©al
				var PctId2 = (Math.round(((CId2 - parseFloat(ValMinCD))*100)/IntCD)*100)/100;
				// Affichage du % du coeff
				if (parseFloat(PctId2) < 33.33)
				{
					document.getElementById("PropCDId2").src = "Images Site/CoeffDiff1.png";
				}
				if (parseFloat(PctId2) > 33.33 && parseFloat(PctId2) < 66.66)
				{
					document.getElementById("PropCDId2").src = "Images Site/CoeffDiff2.png";
				}
				if (parseFloat(PctId2) > 66.66)
				{
					document.getElementById("PropCDId2").src = "Images Site/CoeffDiff3.png";
				}
				document.getElementById("PropCDId2").width = ((parseFloat(PctId2)*294)/100);


				//Calcul coeff diff rÃ©el
				var CR2 = (Math.round((DistRP2/RatiosP2)*100))/100;
				// Affichage coeff diff rÃ©el
				document.getElementById("CoeffDiffSel2").value = CR2;
				// DÃ©termination du % du coeff rÃ©el
				var PctR2 = (Math.round(((CR2- parseFloat(ValMinCD))*100)/IntCD)*100)/100;
				// Affichage du % du coeff
				if (parseFloat(PctR2) < 33.33)
				{
					document.getElementById("PropCDSel2").src = "Images Site/CoeffDiff1.png";
				}
				if (parseFloat(PctR2) > 33.33 && parseFloat(PctR2) < 66.66)
				{
					document.getElementById("PropCDSel2").src = "Images Site/CoeffDiff2.png";
				}
				if (parseFloat(PctR2) > 66.66)
				{
					document.getElementById("PropCDSel2").src = "Images Site/CoeffDiff3.png";
				}
				document.getElementById("PropCDSel2").width = ((parseFloat(PctR2)*294)/100);


				// Message d'avertissement si la fourchette des distances n'est pas respectÃ©e
				if (parseFloat(DistP2) < 525 || parseFloat(DistP2) > 550)
				{
					if (parseFloat(DistRP2) < 525 || parseFloat(DistRP2) > 550)
					{
						document.getElementById("RemarqueP2").value = "ATTENTION ! Le cumul des distances proposÃ©es et/ou selectionnÃ©es n'entre pas dans la fourchette 525-550 m. imposÃ©e. Vous devriez changer certains blasons ou adapter lÃ©gÃ¨rement les distances afin de respecter la rÃ¨gle.";
						document.getElementById("RemarqueP2").style.color = "#F00";
					}
					else
					{
						document.getElementById("RemarqueP2").value = "Le cumul des distances proposÃ©es n'entre pas dans la fourchette 525-550 m. imposÃ©e. Les modifications apportÃ©es permettent de valider votre choix.";
						document.getElementById("RemarqueP2").style.color = "#66CC66";
						document.getElementById("BPDF").disabled = false;
						document.getElementById('BPDF').className="BoutonPlusMoins";
					}
				}
				else
				{
					if (parseFloat(DistRP2) < 525 || parseFloat(DistRP2) > 550)
					{
						document.getElementById("RemarqueP2").value = "ATTENTION ! Le cumul des distances selectionnÃ©es n'entre pas dans la fourchette 525-550 m. imposÃ©e. Vous devriez adapter lÃ©gÃ¨rement les distances ou conserver les distances proposÃ©es afin de respecter la rÃ¨gle.";
						document.getElementById("RemarqueP2").style.color = "#F00";
					}
					else
					{
						document.getElementById("RemarqueP2").value = "La fourchette 525-550 m. imposÃ©e est respectÃ©e Ã  la fois par les distances proposÃ©es et les distances sÃ©lectionnÃ©es.";
						document.getElementById("RemarqueP2").style.color = "#66CC66";
						document.getElementById("BPDF").disabled = false;
						document.getElementById('BPDF').className="BoutonPlusMoins";
					}
				}
				break;
			}

	}
}

function Effacement1()
{
	'use strict';
	document.getElementById('CoeffDiffId1').value="";
	document.getElementById('CoeffDiffSel1').value="";
	document.getElementById('TotDistId1').value="";
	document.getElementById('TotDistSel1').value="";

	// DÃ©sactivation du bouton PDF si le deuxiÃ¨me demi-parcours n'est pas rempli
	if (document.getElementById('CoeffDiffId2').value==="")
		{
			document.getElementById('BPDF').disabled="disabled";
			document.getElementById('BPDF').className="BoutonPlusMoinsEnfonce";
		}
}

function Effacement2()
{
	'use strict';
	document.getElementById('CoeffDiffId2').value="";
	document.getElementById('CoeffDiffSel2').value="";
	document.getElementById('TotDistId2').value="";
	document.getElementById('TotDistSel2').value="";

	// DÃ©sactivation du bouton PDF si le premier demi-parcours n'est pas rempli
	if (document.getElementById('CoeffDiffId1').value==="")
		{
			document.getElementById('BPDF').disabled="disabled";
			document.getElementById('BPDF').className="BoutonPlusMoinsEnfonce";
		}
}

function TestDistGG(GG)
{
	'use strict';
	if (parseFloat(document.getElementById("ChoixDist" + GG).value)>=30 && parseFloat(document.getElementById("ChoixDist" + GG).value)<=40)
	{
		document.getElementById("ChoixDist" + GG).value = (parseFloat(document.getElementById("ChoixDist" + GG).value) + " m");
	}
	else
	{
		alert ("La distance du pas rouge Ã  la cible doit Ãªtre comprise entre 30 m et 40 m pour les Grands Gibiers");
		document.getElementById("ChoixDist" + GG).value = "";
	}
}
function TestDistMG(MG)
{
	'use strict';
	if (parseFloat(document.getElementById("ChoixDist" + MG).value)>=20 && parseFloat(document.getElementById("ChoixDist" + MG).value)<=35)
	{
		document.getElementById("ChoixDist" + MG).value = (parseFloat(document.getElementById("ChoixDist" + MG).value) + " m");
	}
	else
	{
		alert ("La distance du pas rouge Ã  la cible doit Ãªtre comprise entre 20 m et 35 m pour les Moyens Gibiers");
		document.getElementById("ChoixDist" + MG).value = "";
	}
}
function TestDistPG(PG)
{
	'use strict';
	if (parseFloat(document.getElementById("ChoixDist" + PG).value)>=15 && parseFloat(document.getElementById("ChoixDist" + PG).value)<=25)
	{
		document.getElementById("ChoixDist" + PG).value = (parseFloat(document.getElementById("ChoixDist" + PG).value) + " m");
	}
	else
	{
		alert ("La distance du pas rouge Ã  la cible doit Ãªtre comprise entre 15 m et 25 m pour les Petits Gibiers");
		document.getElementById("ChoixDist" + PG).value = "";
	}
}
function TestDistPA(PA)
{
	'use strict';
	if (parseFloat(document.getElementById("ChoixDist" + PA).value)>=5 && parseFloat(document.getElementById("ChoixDist" + PA).value)<=15)
	{
		document.getElementById("ChoixDistGG" + PA).value = (parseFloat(document.getElementById("ChoixDistGG" + PA).value) + " m");
	}
	else
	{
		alert ("La distance du pas rouge Ã  la cible doit Ãªtre comprise entre 5 m et 15 m pour les Petits Animaux");
		document.getElementById("ChoixDist" + PA).value = "";
	}
}

function RecupParamPDF()
{
	'use strict';
	// RecupÃ©ration des Ã©lÃ©ments concernant les Grands Gibiers
	var $URL = "PDF.php?";
	for (i=1; i<9; i++)
		{
			$URL = $URL+"RefGG"+i+"="+document.getElementById("GG"+i).value + "&DRGG"+i+"="+ document.getElementById("ChoixDistGG"+i).value+"&";
			//$URL = $URL+"RefGG"+i+"="+document.getElementById("GG"+i).value + "&IMGGG"+i+"="+ document.getElementById("IMGGG"+i).src +  "&RatioGG"+i+"="+ document.getElementById("Ratio-GG"+i).value +  "&DIGG"+i+"="+ document.getElementById("DistGG"+i).value + "&DRGG"+i+"="+ document.getElementById("ChoixDistGG"+i).value+"&";
		}

	for (i=1; i<15; i++)
		{
			$URL = $URL+"RefMG"+i+"="+document.getElementById("MG"+i).value + "&DRMG"+i+"="+ document.getElementById("ChoixDistMG"+i).value+"&";
			//$URL = $URL+"RefMG"+i+"="+document.getElementById("MG"+i).value + "&IMGMG"+i+"="+ document.getElementById("IMGMG"+i).src +  "&RatioMG"+i+"="+ document.getElementById("Ratio-MG"+i).value +  "&DIMG"+i+"="+ document.getElementById("DistMG"+i).value + "&DRMG"+i+"="+ document.getElementById("ChoixDistMG"+i).value+"&";
		}

	for (i=1; i<13; i++)
		{
			$URL = $URL+"RefPG"+i+"="+document.getElementById("PG"+i).value + "&DRPG"+i+"="+ document.getElementById("ChoixDistPG"+i).value+"&";
			//$URL = $URL+"RefPG"+i+"="+document.getElementById("PG"+i).value + "&IMGPG"+i+"="+ document.getElementById("IMGPG"+i).src +  "&RatioPG"+i+"="+ document.getElementById("Ratio-PG"+i).value +  "&DIPG"+i+"="+ document.getElementById("DistPG"+i).value + "&DRPG"+i+"="+ document.getElementById("ChoixDistPG"+i).value+"&";
		}

		for (i=1; i<17; i++)
		{
			$URL = $URL+"RefPA"+i+"="+document.getElementById("PA"+i).value + "&DRPA"+i+"="+ document.getElementById("ChoixDistPA"+i).value+"&";
			//$URL = $URL+"RefPA"+i+"="+document.getElementById("PA"+i).value + "&IMGPA"+i+"="+ document.getElementById("IMGPA"+i).src +  "&RatioPA"+i+"="+ document.getElementById("Ratio-PA"+i).value +  "&DIPA"+i+"="+ document.getElementById("DistPA"+i).value + "&DRPA"+i+"="+ document.getElementById("ChoixDistPA"+i).value+"&";
		}
	//alert($URL);
		var $Ligne1 = "CoÃ©fficient de difficultÃ© AMS : min = "+ document.getElementById("CDMin").value+" max = "+document.getElementById("CDMax").value;
	//alert ($Ligne1);
		var $CDP1id = document.getElementById("CoeffDiffId1").value;
		//var $CDP1id = "A partir des distances idÃ©ales : "+document.getElementById("CoeffDiffId1").value;
	//alert ($CDP1id);
		var $CDP1r = document.getElementById("CoeffDiffSel1").value;
		//var $CDP1r = "A partir des distances rÃ©elles : "+document.getElementById("CoeffDiffSel1").value;
	//alert ($CDP1r);
		var $TotDP1id = document.getElementById("TotDistId1").value;
		//var $TotDP1id = "A partir des distances idÃ©ales : "+document.getElementById("TotDistId1").value;
	//alert ($TotDP1id);
		var $TotDP1r = document.getElementById("TotDistSel1").value;
		//var $TotDP1r = "A partir des distances rÃ©elles : "+document.getElementById("TotDistSel1").value;
	//alert ($TotDP1r);
		var $CDP2id = document.getElementById("CoeffDiffId2").value;
		//var $CDP2id = "A partir des distances idÃ©ales : "+document.getElementById("CoeffDiffId2").value;
	//alert ($CDP2id);
		var $CDP2r = document.getElementById("CoeffDiffSel2").value;
		//var $CDP2r = "A partir des distances rÃ©elles : "+document.getElementById("CoeffDiffSel2").value;
	//alert ($CDP2r);
		var $TotDP2id = document.getElementById("TotDistId2").value;
		//var $TotDP2id = "A partir des distances idÃ©ales : "+document.getElementById("TotDistId2").value;
	//alert ($TotDP2id);
		var $TotDP2r = document.getElementById("TotDistSel2").value;
		//var $TotDP2r = "A partir des distances rÃ©elles : "+document.getElementById("TotDistSel2").value;
	//alert ($TotDP2r);

	// vÃ©rification de l'existence des deux demi-parcours
	var $P2 = 0;
	if (document.getElementById('CoeffDiffId1').value!=="" && document.getElementById('CoeffDiffId2').value==="")
		{
			$P2 = 1;
		}
	if (document.getElementById('CoeffDiffId2').value!=="" && document.getElementById('CoeffDiffId1').value==="")
		{
			$P2 = 2;
		}
	$URL = $URL+"CDId1="+$CDP1id+"&CDR1="+$CDP1r+"&TotDistId1="+$TotDP1id+"&TotDistR1="+$TotDP1r+"&CDId2="+$CDP2id+"&CDR2="+$CDP2r+"&TotDistId2="+$TotDP2id+"&TotDistR2="+$TotDP2r+"&Ligne1="+$Ligne1+"&P2="+$P2;

	//alert($URL);
	open($URL,"TESTERIC","","");
}

//</script>
