//structuri de date
//
var matrAdiacenta = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];


function Tara(idContinent, idTara, numeTara, varfuri){
    this.idContinent = idContinent; // ca sa nu o mai caut in vectorul de continente
    this.idTara = idTara;
    this.idOcupant = 0;
    this.numeTara = numeTara;
    this.varfuri = varfuri;
    this.numarArmate = 0;
    this.deseneaza = function(){
        drawPoly(this.varfuri, "black", this.idTara);
    }
    this.ascunde = function(){
      hidePoly(this.idTara);
    }
}

var tara = new Array();
// tara[i] numele tarii i; e util atunci cand spun: tara i e atacata de jucatorul j din tara t
tara[0] = null;
tara[1] = new Tara(1, 1, "Alaska", [21, 123, 26, 114, 34, 118, 29, 106, 53, 99, 78, 108, 76, 142, 84, 144, 89, 159, 96, 163, 88, 174, 75, 152, 52, 144, 26, 164, 20, 161, 30, 152, 15, 138, 20, 131, 28, 131, 32, 127]);
tara[2] = new Tara(1, 2, "NorthWest Territory", [76, 142, 78, 108, 113, 105, 143, 117, 181, 111, 187, 91, 197, 87, 189, 106, 199, 115, 205, 112, 208, 123, 199, 125, 178, 146, 156, 146, 84, 144]);
tara[3] = new Tara(1, 3, "Alberta", [100, 196, 88, 174, 96, 163, 84, 144, 156, 146, 152, 196]);
tara[4] = new Tara(1, 4, "Ontario", [156, 146, 152, 196, 170, 198, 178, 198, 199, 219, 214, 214, 206, 210, 206, 187, 202, 175, 174, 158, 174, 152, 178, 146]);
tara[5] = new Tara(1, 5, "Greenland", [276, 162, 283, 138, 304, 128, 324, 100, 321, 85, 326, 70, 308, 73, 312, 64, 282, 59, 268, 71, 250, 75, 232, 84, 224, 100, 247, 104, 256, 119, 254, 134, 265, 156]);
tara[6] = new Tara(1, 6, "Eastern Canada", [266, 186, 246, 153, 242, 160, 236, 158, 236, 149, 221, 142, 215, 165, 209, 172, 206, 187, 206, 210, 213, 207, 214, 214, 228, 210, 235, 205, 240, 216, 238, 222, 242, 224, 252, 212, 245, 210, 244, 199, 232, 200, 242, 194]);
tara[7] = new Tara(1, 7, "Western United States", [170, 198, 170, 228, 149, 244, 144, 266, 104, 256, 94, 231, 100, 196, 152, 196]);
tara[8] = new Tara(1, 8, "Eastern United States", [235, 205, 214, 214, 199, 219, 178, 198, 170, 198, 170, 228, 149, 244, 144, 266, 150, 272, 162, 265, 192, 264, 197, 281, 203, 280, 202, 264, 220, 249, 216, 240, 230, 224, 240, 216]);
tara[9] = new Tara(1, 9, "Central America", [150, 272, 144, 266, 104, 256, 121, 293, 157, 326, 167, 306, 162, 303, 169, 290, 164, 287, 150, 294, 144, 286]);
tara[10] = new Tara(2, 10, "Venezuela", [157, 326, 168, 333, 165, 348, 188, 361, 196, 360, 196, 351, 201, 347, 208, 351, 213, 343, 225, 339, 229, 349, 242, 347, 250, 346, 256, 338, 238, 332, 222, 319, 195, 316, 171, 324]);
tara[11] = new Tara(2, 11, "Brazil", [255, 450, 266, 435, 269, 425, 286, 416, 295, 404, 297, 387, 310, 375, 306, 366, 272, 352, 259, 353, 261, 338, 256, 338, 250, 346, 242, 347, 229, 349, 225, 339, 213, 343, 208, 351, 201, 347, 196, 351, 196, 360, 188, 361, 178, 372, 196, 387, 209, 380, 236, 398, 250, 428, 244, 438]);
tara[12] = new Tara(2, 12, "Peru", [188, 361, 178, 372, 196, 387, 209, 380, 236, 398, 250, 428, 237, 432, 239, 426, 210, 416, 198, 406, 194, 408, 176, 397, 160, 372, 165, 348]);
tara[13] = new Tara(2, 13, "Argentina", [238, 526, 220, 518, 220, 492, 232, 469, 242, 464, 238, 454, 252, 456, 255, 450, 244, 438, 250, 428, 237, 432, 239, 426, 210, 416, 198, 406, 194, 408, 194, 506, 209, 523]);
tara[14] = new Tara(3, 14, "Great Britain", [330, 174, 321, 185, 330, 201, 320, 202, 314, 206, 316, 212, 307, 211, 305, 226, 311, 234, 327, 226, 338, 230, 326, 240, 356, 236, 362, 222, 348, 198, 336, 198, 346, 184, 340, 176]);
tara[15] = new Tara(3, 15, "Scandinavia", [380, 160, 384, 152, 390, 150, 412, 128, 409, 122, 437, 111, 453, 116, 449, 138, 453, 154, 450, 164, 430, 165, 434, 148, 429, 146, 421, 160, 425, 166, 414, 189, 405, 188, 397, 176, 392, 181, 385, 177]);
tara[16] = new Tara(3, 16, "Iceland", [326, 154, 333, 142, 345, 147, 360, 139, 372, 149, 372, 156, 350, 168, 333, 163, 336, 160]);
tara[17] = new Tara(3, 17, "Western Europe", [373, 234, 351, 248, 338, 249, 350, 264, 347, 273, 330, 270, 323, 277, 328, 285, 323, 302, 350, 314, 356, 314, 357, 308, 369, 298, 367, 283, 387, 275, 376, 275, 383, 267, 384, 251]);
tara[18] = new Tara(6, 18, "North Africa", [350, 314, 334, 348, 338, 364, 331, 374, 359, 408, 393, 402, 406, 416, 425, 416, 422, 403, 444, 389, 444, 364, 406, 347, 403, 336, 413, 320, 400, 306, 392, 304, 356, 314]);
tara[19] = new Tara(6, 19, "Central Africa", [406, 416, 401, 427, 415, 436, 442, 453, 461, 460, 464, 445, 466, 426, 478, 415, 477, 411, 457, 409, 444, 389, 422, 403, 425, 416]);
tara[20] = new Tara(6, 20, "South Africa", [415, 436, 411, 476, 433, 528, 458, 524, 477, 492, 478, 481, 493, 468, 490, 452, 479, 458, 479, 469, 473, 468, 473, 455, 464, 445, 464, 445, 461, 460, 442, 453]);
tara[21] = new Tara(3, 21, "Northern Europe", [396, 185, 394, 204, 385, 207, 373, 234, 384, 251, 406, 248, 408, 243, 419, 243, 419, 253, 428, 253, 428, 245, 436, 237, 432, 232, 442, 228, 446, 217, 443, 201, 433, 196, 421, 194, 401, 197, 405, 188]);
tara[22] = new Tara(3, 22, "Southern Europe", [400, 306, 392, 304, 390, 295, 400, 299, 400, 287, 387, 275, 378, 282, 376, 275, 383, 267, 384, 251, 406, 248, 408, 243, 419, 243, 419, 253, 428, 253, 428, 245, 436, 237, 441, 235, 449, 259, 446, 273, 440, 287, 436, 306, 426, 305, 423, 291, 411, 272, 403, 273, 417, 289, 413, 291, 409, 288, 409, 292]);
tara[23] = new Tara(3,23, "Russia", [449, 259, 459, 252, 467, 262, 474, 257, 483, 248, 477, 257, 494, 278, 514, 275, 516, 260, 506, 249, 506, 240, 511, 236, 506, 223, 510, 208, 531, 203, 538, 205, 547, 196, 542, 160, 549, 118, 533, 113, 522, 118, 517, 114, 475, 142, 456, 128, 482, 128, 480, 120, 453, 116, 449, 138, 453, 154, 450, 164, 441, 183, 434, 178, 431, 189, 433, 196, 443, 201, 446, 217, 442, 228, 432, 232, 436, 237, 441, 235]);
tara[24] = new Tara(6, 24, "Egipt", [480, 354, 449, 357, 444, 364, 406, 347, 403, 336, 413, 320, 432, 321, 473, 326, 466, 333]);
tara[25] = new Tara(6, 25, "East Africa", [480, 354, 449, 357, 444, 364, 444, 389, 457, 409, 477, 411, 478, 415, 466, 426, 464, 445, 473, 455, 473, 468, 479, 469, 479, 458, 490, 452, 487, 438, 519, 403, 525, 389, 501, 390]);
tara[26] = new Tara(4, 26, "Middle East", [473, 326, 475, 302, 466, 305, 444, 302, 440, 287, 446, 273, 455, 278, 463, 274, 477, 275, 485, 280, 494, 278, 514, 275, 524, 279, 530, 276, 537, 273, 551, 282, 559, 318, 547, 327, 534, 327, 525, 312, 519, 317, 532, 335, 539, 333, 549, 337, 550, 351, 527, 377, 506, 380, 502, 365]);
tara[27] = new Tara(4, 27, "Afganistan", [551, 282, 537, 273, 530, 276, 511, 236, 506, 223, 510, 208, 531, 203, 538, 205, 547, 196, 575, 221, 580, 217, 594, 229, 594, 244, 580, 258, 587, 266, 579, 274, 571, 269]);
tara[28] = new Tara(4, 28, "Ural", [594, 229, 580, 217, 575, 221, 547, 196, 542, 160, 549, 118, 542, 108, 547, 91, 556, 100, 553, 107, 559, 113, 559, 124, 553, 129, 563, 125, 575, 127, 581, 146, 593, 158, 596, 172, 588, 184, 590, 189, 596, 186, 607, 206]);
tara[29] = new Tara(4, 29, "Siberia", [607, 206, 596, 186, 590, 189, 588, 184, 596, 172, 593, 158, 581, 146, 575, 127, 566, 95, 619, 64, 631, 71, 621, 84, 633, 77, 654, 82, 656, 106, 645, 106, 637, 114, 650, 142, 648, 165, 635, 163, 622, 174, 628, 194, 629, 217, 616, 201]);
tara[30] = new Tara(4, 30, "Yakutsk", [650, 142, 637, 114, 645, 106, 656, 106, 654, 82, 665, 76, 686, 84, 704, 77, 720, 86, 708, 99, 714, 110, 710, 112, 694, 114, 682, 134]);
tara[31] = new Tara(4, 31, "Irkutsk", [650, 142, 682, 134, 681, 154, 694, 169, 700, 165, 710, 175, 706, 194, 691, 177, 678, 178, 676, 193, 628, 194, 622, 174, 635, 163, 648, 165]);
tara[32] = new Tara(4, 32, "Mongolia", [629, 217, 628, 194, 676, 193, 678, 178, 691, 177, 706, 194, 718, 210, 711, 220, 723, 234, 715, 244, 699, 225, 692, 233, 704, 238, 698, 245, 648, 240]);
tara[33] = new Tara(4, 33, "China", [698, 245, 648, 240, 629, 217, 616, 201, 607, 206, 594, 229, 594, 244, 580, 258, 587, 266, 598, 271, 601, 283, 614, 279, 642, 291, 660, 302, 670, 296, 679, 301, 683, 305, 707, 279, 709, 261]);
tara[34] = new Tara(4, 34, "India", [642, 291, 614, 279, 601, 283, 598, 271, 587, 266, 579, 274, 571, 269, 551, 282, 559, 318, 578, 335, 583, 331, 582, 350, 601, 387, 608, 366, 618, 315, 629, 307]);
tara[35] = new Tara(4, 35, "Southern Asia", [629, 307, 642, 291, 660, 302, 670, 296, 679, 301, 671, 308, 684, 321, 688, 332, 680, 350, 662, 336, 670, 356, 666, 359, 654, 341, 656, 336, 648, 325, 645, 328]);
tara[36] = new Tara(4, 36, "Kamchatka", [706, 194, 718, 210, 725, 195, 723, 160, 704, 154, 711, 138, 739, 137, 752, 122, 742, 149, 742, 149, 744, 158, 752, 169, 759, 168, 760, 146, 754, 138, 763, 131, 769, 132, 783, 117, 776, 112, 780, 106, 795, 115, 798, 103, 764, 85, 752, 88, 754, 92, 720, 86, 708, 99, 714, 110, 710, 112, 694, 114, 682, 134, 681, 154, 694, 169, 700, 165, 710, 175]);
tara[37] = new Tara(4, 37, "Japan", [744, 243, 769, 224, 764, 218, 766, 208, 762, 200, 755, 196, 753, 191, 765, 189, 773, 180, 768, 176, 757, 177, 752, 175, 748, 177, 753, 183, 748, 190, 752, 197, 748, 204, 753, 213, 738, 220, 726, 242, 738, 237, 737, 243]);
tara[38] = new Tara(5, 38, "Indonesia", [610, 379, 613, 375, 637, 389, 653, 382, 667, 363, 675, 370, 671, 378, 677, 387, 692, 385, 689, 396, 680, 400, 686, 411, 672, 413, 670, 398, 662, 406, 645, 402, 650, 412, 643, 420]);
tara[39] = new Tara(5, 39, "New Guinea", [757, 396, 745, 370, 716, 360, 708, 363, 696, 357, 693, 362, 702, 373, 714, 379, 712, 388, 735, 394, 738, 390]);
tara[40] = new Tara(5, 40, "Eastern Australia", [738, 501, 766, 497, 787, 451, 765, 433, 751, 405, 745, 424, 731, 420, 736, 410, 717, 409, 709, 421, 709, 454, 741, 454]);
tara[41] = new Tara(5, 41, "Western Australia", [738, 501, 741, 454, 709, 454, 709, 421, 690, 424, 656, 443, 653, 460, 658, 465, 657, 487, 665, 493, 692, 484, 717, 476]);
tara[42] = new Tara(6, 42, "Madagascar", [532, 454, 535, 468, 530, 476, 521, 501, 513, 511, 500, 512, 497, 500, 505, 477, 516, 470]);

function Continent(nume, armate, cateTari){
   this.nume = nume;
   this.armate = armate;
   // cate armate castig daca am monopol asupra acestui continent
   this.cateTari = cateTari;
}

var continente = [null, new Continent("North America", 5, 9), new Continent("South America", 2, 4), new Continent("Europe", 3, 7), new Continent("Asia", 7,   12), new Continent("Australia", 2, 4), new Continent("Africa", 4, 6)];


function Jucator(nume, culoareStatus, codCuloarePiese){
  // culoare e un indice din vectorul de culori
  this.nume = nume;
  this.eliminat = 0; //daca e 0, nu e eliminat; altfel e al catalea a fost eliminat; la final fac un clasament :D
  this.culoareStatus = culoareStatus;
  this.codCuloarePiese = codCuloarePiese;
  this.cateTariACucerit = 0;
}

var nrJucatori = 2;
var jucatori = [new Jucator("Armata neutra", "#000000", "alb"), //armata neutra; scriu cu negru pt ca albul nu se vede...
                new Jucator("Jucator1", "#FF0000", "rosu"), 
                new Jucator("Jucator2", "#0000FF", "albastru"),  
                new Jucator("Jucator3", "#00FF00", "verde"), 
                new Jucator("Jucator4", "#f0f808", "galben"), 
                new Jucator("Jucator5", "#000000", "negru"), 
                new Jucator("Jucator6", "#8e1481", "mov")
               ]; 
// piesele vor fi poze ale caror nume se va termina cu codul culorii
var armataNeutra = new Jucator("Armata Neutra" , "#DDDDDD", "alb");

function configurareJucatori(){
   // creez in div-ul zonaGenerata nrJucatori div-uri din clasa  
   var zonaGenerata = document.getElementById("zonaGenerata");
   var string = "";
   var jucator;
   var i;
   // pentru fiecare jucator mai concatenez un div la string
   // fiecare jucator are specifica o culoare de scris si border;
   // toti jucatorii vor avea un field : numeJuctor+i
   for(i = 1; i <= nrJucatori; i++){
      jucator = "<div id='promptJucator" + i 
                + "' class='promptJucator' style='border-color:"
                + jucatori[i].culoareStatus + "; color:"+jucatori[i].culoareStatus+";'>";
      jucator += "<div style='font-weight: bold; margin-top: 5px; margin-bottom: 5px; text-align: center; font-size: 20px;'>Player " + i + "</div>"; //adaug titlul de Jucator+i
      jucator += "<div style='display: block; margin-top: 10px; margin-bottom: 10px;'>Name:</div>"; //adaug "Numele:"
      jucator += "<input type='text' style='width: 140px;' maxlength='16' size='16' id='numeJucator" + i + "'>";
      jucator+= "</div>";
      string+=jucator;
   }
   zonaGenerata.innerHTML = string;
   document.getElementById("promptJucator1").style.display="block";
}

var pagCurenta = 1;

function next(){
   if(pagCurenta < nrJucatori){
       document.getElementById("promptJucator" + pagCurenta).style.display = "none";
       pagCurenta++;
       document.getElementById("promptJucator" + pagCurenta).style.display = "block";
   }
}

function prev(){
  if(pagCurenta > 1){
      document.getElementById("promptJucator"+pagCurenta).style.display="none";
      pagCurenta--;
      document.getElementById("promptJucator"+pagCurenta).style.display="block";
   }
}

var jucatorCurent;

function amTerminatConfigurarea(){
    // am terminat de setat numele jucatorilor; acum dau cu zarul pentru fiecare; cine are maxim incepe;
    // jocul continua la dreapta, circular;
    // utilizator.display = none; si dupa aia scriu direct in promptBackground ordine de joc
    var nume;
    var i;
    for(i = 1; i <= nrJucatori; i++){
      nume = document.getElementById("numeJucator" + i).value;
      //scot spatiile goale de la inceput si sfarsit
      if(nume != ""){ // daca chiar nu a setat nimic pentru nume, nu-l schimb
        // poate sa seteze spatii goale daca vrea; se poate face aici o functie oricat de complexa pt validare
        jucatori[i].nume = nume;
      }
    }
    // acum dau cu zarul, pentru fiecare;
    var valZar = new Array();
    for(i = 1; i <= nrJucatori; i++){
       valZar[i] = Math.floor(Math.random()*6 + 1); // o valoare de la 1 la 6
    }
    // vad unde se afla primul maxim (adica daca mai multi au atins maximul, il consider pe primul)
    var ind, max;
    ind = 1;
    max = valZar[1];
    for(i = 2; i <= nrJucatori; i++){
      if(max<valZar[i]){
         max = valZar[i];
         ind = i;
      }
    }
    jucatorCurent = ind;
    // jucator+ind incepe primul; afiseaza ordinea
    document.getElementById("utilizator").style.display = 'none';
    // creez acum un tabel in care afisez ordinea; fiecare user e numit dupa numele nou si scris cu culoarea sa
    string = "<table id='tabelUtilizatori' style='background-color: #DDDDDD; text-align: center; position: relative; margin-left: auto; margin-right: auto; margin-top: 300px;'>";
    string +="<tr>"+"<td style='width: 50px;'>Nr. crt</td>"+"<td style='width: 100px;'>Player's name</td>"+"<td style='width: 50px;'>Dice</td>"+"</tr>";
    var nr = 1;
    for(i = ind; i <= nrJucatori; i++){ 
      //cate o linie in tabel pentru fiecare jucator
      string +="<tr style='color:"+ jucatori[i].culoareStatus +";'>" + "<td>" + nr++ + "</td>" + "<td>" + jucatori[i].nume +"</td>"+"<td>" + valZar[i] + "</td>" + "</tr>";
    }
    
    for(i = 1; i < ind; i++){ 
      //cate o linie in tabel pentru fiecare jucator
      string +="<tr style='color:"+ jucatori[i].culoareStatus +";'>" + "<td>" + nr++ + "</td>" + "<td>" + jucatori[i].nume +"</td>"+"<td>" + valZar[i] + "</td>" + "</tr>";
    }
    // afisez si butonul de "incepe jocul"
    string += "<tr><td colspan='3'><input type='button' value='Incepe jocul' onclick='incepeJocul();'></td></tr>";
    string+="</table>";
    document.getElementById("promptBackground").innerHTML = string;
}

var ETAPA_JOC, TURA;

function updateArmate(){
   var i;
   for(i = 1; i <= 42; i++){
      document.getElementById("numar" + i).innerHTML = tara[i].numarArmate;
      document.getElementById("numar" + i).style.borderColor = jucatori[tara[i].idOcupant].culoareStatus;
      document.getElementById("numar" + i).style.color = jucatori[tara[i].idOcupant].culoareStatus;
   }
}

function incepeJocul(){
   updateArmate();
   document.getElementById("player1").style.color = jucatori[1].culoareStatus;
   document.getElementById("player2").style.color = jucatori[2].culoareStatus;
  
   //document.getElementById("utilizator").style.display = "none";
   document.getElementById("promptBackground").style.display = "none";
   //GAME SETUP :D
   document.getElementById("gameStatus").innerHTML = "Game Setup - Placing resources";
   document.getElementById("game").innerHTML = "Game Setup - Placing resources";
   ETAPA_JOC = 1; // Game Setup
   TURA = 1; // asezare; tine a cata tura din cadrul etapei de joc curenta
   document.getElementById("turnStatus").style.color = jucatori[jucatorCurent].culoareStatus;
   document.getElementById("player" + jucatorCurent).style.borderColor = jucatori[jucatorCurent].culoareStatus;
   document.getElementById("turnStatus").innerHTML = "starts player " + jucatori[jucatorCurent].nume + "<br>";
   // player1 si payer 2 trebuie sa bag numele jucatorilor
   document.getElementById("player1").innerHTML = jucatori[1].nume;
   document.getElementById("player2").innerHTML = jucatori[2].nume;

}

function nextPlayer(){
  // stim ca sunt doar doi jucatori, si ca atunci cand il elimin pe unul celalalt castiga;
  // deci nu mai trebuie sa verific ca imediat urmatorul jucator e viu
  document.getElementById("player" + jucatorCurent).style.borderColor = "#000000";
  jucatorCurent++;
  if(jucatorCurent > nrJucatori) jucatorCurent = 1;
  document.getElementById("player" + jucatorCurent).style.borderColor = jucatori[jucatorCurent].culoareStatus;
}

var mutare = 1;

function apasatTara(idTara){
   // tara[idTara].deseneaza(jucatori[jucatorCurent].culoareStatus);
    //  vad in ce etapa de joc sunt: Game Setup = 1, Play = 2
    if(ETAPA_JOC == 1){
       // 1<=TURA<=28 => asezare
       if(1<=TURA && TURA<=28){
         // daca tara apasata e libera, o marchez ca a lui
         // scriu si in turnStatus ce s-a mai intamplat
         if(tara[idTara].idOcupant == 0){
           // il colorez pe cel al carui rand este
           document.getElementById("infoJoc").style.color = jucatori[jucatorCurent].culoareStatus;
           document.getElementById("infoJoc").innerHTML = Math.floor((TURA+1)/2) +"/14";
           document.getElementById("turnStatus").style.color = jucatori[jucatorCurent].culoareStatus;
           tara[idTara].idOcupant = jucatorCurent;
           tara[idTara].numarArmate = 1;
           document.getElementById("turnStatus").innerHTML = "you just occupied " + tara[idTara].numeTara  + "<br>";
           jucatori[jucatorCurent].cateTariACucerit++;
           // tara[idTara].deseneaza(jucatori[jucatorCurent].culoareStatus);
           nextPlayer();
           TURA++;
           if(TURA>28){
             document.getElementById("infoJoc").innerHTML = "";
             document.getElementById("gameStatus").innerHTML = "Game Setup - Consolidation";
             document.getElementById("game").innerHTML = "Game Setup - Consolidation";
           }
          } //altfel ii ignor click-ul
       }else{
           if(29<=TURA && TURA<=80){ //=> consolidare
              if(tara[idTara].idOcupant == jucatorCurent){
                 document.getElementById("infoJoc").style.color = jucatori[jucatorCurent].culoareStatus;
                 document.getElementById("infoJoc").innerHTML = (Math.floor((TURA - 25)/4)*2 - 1) + " si " +  (Math.floor((TURA - 25)/4)*2) + "/26";
                 document.getElementById("turnStatus").style.color = jucatori[jucatorCurent].culoareStatus;
                 document.getElementById("turnStatus").innerHTML = "you added an army on " + tara[idTara].numeTara  + "<br>";
                 tara[idTara].numarArmate++; 
                 TURA++;
                 mutare++;
                 if(mutare == 3){nextPlayer(); mutare = 1;} // fiecare jucator face doua consolidari/ tura lui
                 if(TURA>80){
                    // in primul rand, in toate libere bag cate o armata neutra; mai sunt exact 14 libere
                    document.getElementById("infoJoc").innerHTML = "";
                    for(i = 1; i <= 42; i++)
                      if(tara[i].idOcupant == 0){
                        tara[i].numarArmate = 1;
                      }

                    document.getElementById("gameStatus").innerHTML = "Game Setup - Buffer";
                    document.getElementById("game").innerHTML = "Game Setup - Buffer";
                 }
              }// altfel ii ignor click-ul
           }else{
              if(TURA <= 106){ // => buffer; fiecare jucator adauga un buffer odata pe tura
                 // poate sa apese doar pe zone libere, cu idOcupant = 0;
                 if(tara[idTara].idOcupant == 0){
                   document.getElementById("infoJoc").style.color = jucatori[jucatorCurent].culoareStatus;
                   document.getElementById("infoJoc").innerHTML = Math.floor((TURA - 79)/2) + "/13";
                   tara[idTara].numarArmate++;
                   TURA++;
                   nextPlayer();
                   if(TURA > 106){
                     document.getElementById("gameStatus").innerHTML = "PLAY - Consolidation";
                     document.getElementById("game").innerHTML = "PLAY - Consolidation";
                     ETAPA_JOC = 2;
                     // da-i un numar de armate de plasat
                     document.getElementById("infoJoc").style.color = jucatori[jucatorCurent].culoareStatus;
                     armate = continenteIntregi(jucatorCurent); // return suma
                     armate += jucatori[jucatorCurent].cateTariACucerit;
                     mutare = armate;
                     document.getElementById("infoJoc").innerHTML =  (armate - mutare + 1) + "/" + armate;
                     document.getElementById("turnStatus").innerHTML = "you received " + armate  + " more armies for consolidation<br>";
                     document.getElementById("turnStatus").style.color = jucatori[jucatorCurent].culoareStatus;
                     subetapa = 1;
                   }
                 } // altfel ii ignor click-ul
              }
           }
       }
     
    }else{ //game play
      // incepe sa faca click pe zone de-ale lui
     if(subetapa == 1){
       // asezare armate/ cate a primit 
        if(tara[idTara].idOcupant == jucatorCurent){
          document.getElementById("infoJoc").style.color = jucatori[jucatorCurent].culoareStatus;
          mutare--;
          document.getElementById("infoJoc").innerHTML =  (armate - mutare + 1) + "/" + armate; // mutare= cate mutari mai am de facut
          // adaug o armata la tara asta
          tara[idTara].numarArmate++;
          if(mutare == 0){
              subetapa = 2;
              click1Valid = 0;
              click2Valid = 0;
              document.getElementById("gameStatus").innerHTML = "PLAY - you may attack";
              document.getElementById("game").innerHTML = "PLAY - you may attack";
//            nextPlayer();
              document.getElementById("infoJoc").style.color = jucatori[jucatorCurent].culoareStatus;
              document.getElementById("infoJoc").innerHTML =  "";
              // daca vrea sa sara peste etapa asta, e suf sa apese linkul pass
              document.getElementById("PASS").style.display = "block"; // mutare= cate mutari mai am de facut
              document.getElementById("PASS").innerHTML = "PASS - skip attack"; // mutare= cate mutari mai am de facut
              document.getElementById("PASS").onclick = function(){passA();}; // mutare= cate mutari mai am de facut
              // daca vrea sa anuleze, apasa PASS care cheama passF();
//            mutare += continenteIntregi(jucatorCurent); // return suma
//            mutare += jucatori[jucatorCurent].cateTariACucerit;
//            armate = mutare;
//            document.getElementById("infoJoc").innerHTML =  armate + "/" + armate;
//            document.getElementById("turnStatus").innerHTML = "ai primit " + mutare  + " armate pentru consolidare<br>";
//            document.getElementById("turnStatus").style.color = jucatori[jucatorCurent].culoareStatus;
          }
        } // daca nu => nu e click valid; nu pot adauga o armata decat la ceva de-al meu
     }else{
        if(subetapa == 2){ // eventual ataca
       if(click1Valid == 0){ // acum fac primul click pt atac; aici trebuie sa am macar 2 armate
            if(tara[idTara].idOcupant == jucatorCurent && tara[idTara].numarArmate > 1){ 
              // primul click trebuie sa fie pe o tara de-a mea
              // si sa am macar doua armate acolo
               tara[idTara].deseneaza();
               click1Valid = 1;
               idTara1 = idTara;
            }// altfel ignor clickul
          }else{
             // primul click a fost valid
             //deci asta a fost al doilea click
             // daca si asta e valid => fac atacul
             // daca asta nu e valid,ii ignor mutarea; pt ca la un mom dat s-ar putea sa-mi aleg ca prima tara (cea din care atac), ceva ce nu are vecini; si atunci ce fac? ma blochez? sau trebuia eu sa validaz asta dinainte? nu, doar ii anulez mutarea cu prima ocazie cand da click pe ceva, ce va fi invalid
             if(tara[idTara].idOcupant != jucatorCurent && matrAdiacenta[idTara1][idTara] == 1){ 
               // aici trebuie sa fac click pe ceva ce nu e al meu
               // dar e adiacent cu prima tara
                
                idTara2 = idTara;
                tara[idTara].deseneaza();
                alert(tara[idTara1].numeTara + " attacks " + tara[idTara2].numeTara);
                // AICI IMI TREBUIE UN PROMPT SPECIAL: 
                //  in functie de cate armate are fiecare se da cu un anumit numar de zaruri; daca aici e armata neutra
                // => alte reguli..........
                //
                var xmax, ymax; // cu cate zaruri maxim poate sa dea fiecare
                xmax =  tara[idTara1].numarArmate - 1;
                if(xmax>3)xmax = 3;
                ymax =  tara[idTara2].numarArmate;
                if(ymax>=2)ymax = 2;
                
                //zarx[] si zary[] globale, tin exact ce zaruri au dat fiecare 
                zarx = new Array();
                zary = new Array();
                var i;
                // x si y sunt globale; cu cate zaruri alege fiecare sa dea
                // radio button, si isi alege
                // interfata1
                // cuCateZaruriDaFiecare
                
                document.getElementById("promptBackground").style.display = "block";
                document.getElementById("promptBackground").innerHTML = "<div id='cuCateZaruriDaFiecare'></div><div id='zaruri'></div>";
                document.getElementById("cuCateZaruriDaFiecare").style.display = "block";
                var linie = "";
                linie += "<div style='font-weight: bold; position: relative; margin-left: auto; margin-right: auto; margin-bottom: 10px; margin-top:20px;'>" + tara[idTara1].numeTara + " vs "+tara[idTara2].numeTara+"</div>";// tara1 vs tara2
               // pt xmax
               var i;

               linie += "No. of dices for player "+jucatori[tara[idTara1].idOcupant].nume+"<br><br><input type='radio' checked='checked' name='grup1' id='grup1_zar1'>1<br>"; // setul 1 de radiobutoane
               for(i = 2; i <= xmax; i++){
                 linie += "<input type='radio' name='grup1' id='grup1_zar"+i+"'>"+i+"<br>"; // setul 1 de radiobutoane
               }
               // pt ymax
               linie += "No. of dices for player "+jucatori[tara[idTara2].idOcupant].nume+"<br><br><input type='radio' checked='checked' name='grup2' id='grup2_zar1'>1<br>"; // setul 2 de radiobutoane
               for(i = 2; i <= ymax; i++){
                 linie += "<input type='radio' name='grup2' id='grup2_zar"+i+"'>"+i+"<br>"; // setul 2 de radiobutoane
               }
               // un buton de ok
               // cand apas pe el => OKZaruri();
                linie+= "<br><input type='button' value='Am ales numarul de zaruri!' onclick='OKZaruri(" + xmax + ", " + ymax + ")'>";
                document.getElementById("cuCateZaruriDaFiecare").innerHTML = linie;
                // SFARSIT ALGORITM
                // acum pregatesc etapa urmatoare
                subetapa = 3;
                click1Valid = 0;
                document.getElementById("gameStatus").innerHTML = "PLAY - relocation";
                document.getElementById("game").innerHTML = "PLAY - relocation";
                document.getElementById("infoJoc").style.color = jucatori[jucatorCurent].culoareStatus;
                document.getElementById("infoJoc").innerHTML =  "";
                document.getElementById("PASS").innerHTML = "PASS - skipe relocation"; // mutare= cate mutari mai am de facut
                document.getElementById("PASS").onclick = function(){passR();}; // mutare= cate mutari mai am de facut
                // PASSredistribuire
              }else{
                // din diverse motive, al doilea click e invalid => il dezactivez si pe primul
                click1Valid = 0;
                tara[idTara1].ascunde();
             }
          }
        }else{ 
          //REDISTRIBUIRE
         //subetapa 3;
          //redistribuire de armate
          // apas pe o tara de-a mea => idTara1
          // apas pe o tara de-a mea adiacenta cu prima => idTara2
          if(click1Valid == 0){ //primul click
             if(tara[idTara].idOcupant == jucatorCurent && tara[idTara].numarArmate > 1){ // trebuie sa fie un click pe o tara de-a mea cu cel putin doua armate
                 click1Valid = 1;
                 idTara1 = idTara;
                 tara[idTara1].deseneaza();
             }// altfel il ignor
          }else{// e al doilea click
             if(tara[idTara].idOcupant == jucatorCurent && matrAdiacenta[idTara1][idTara] == 1){ //tot o tara de-a mea, adiacenta cu prima
                idTara2 = idTara;
                tara[idTara2].deseneaza();
                var inNouaTara = -1;
                do{
                   inNouaTara = parseInt(prompt("How many armies would you like to move from "+tara[idTara1].numeTara+" to "+ tara[idTara2].numeTara + " (between 0 and " + (tara[idTara1].numarArmate - 1)+")" ,"1"));
                   if(isNaN(inNouaTara) || (inNouaTara<0 || inNouaTara>=tara[idTara1].numarArmate)){
                      inNouaTara = -1;
                   }else{
                      // in caz ca a bagat un double...
                      inNouaTara = Math.floor(inNouaTara);
                   }
                }while(inNouaTara == -1);
                tara[idTara2].numarArmate += inNouaTara;
                tara[idTara1].numarArmate -= inNouaTara;
                // acum pregatesc terenul pentru urmatorul player
                // printre altele, ar trebui sa ascund primul desen
                tara[idTara1].ascunde();
                tara[idTara2].ascunde();
                nextPlayer();
                document.getElementById("infoJoc").style.color = jucatori[jucatorCurent].culoareStatus;
                document.getElementById("infoJoc").innerHTML =  "";
                mutare = continenteIntregi(jucatorCurent); // return suma
                mutare += jucatori[jucatorCurent].cateTariACucerit;
                armate = mutare;
                document.getElementById("infoJoc").innerHTML =  "0 /" + armate;
                document.getElementById("turnStatus").innerHTML = "you just received " + mutare  + " armies for consolidation<br>";
                document.getElementById("turnStatus").style.color = jucatori[jucatorCurent].culoareStatus;
                document.getElementById("game").innerHTML = "Play - consolidation";
                subetapa = 1;
                document.getElementById("PASS").style.display = "none"; 
              }else{
               //ii anulez mutarea/ adica ii anulez si primul click
               click1Valid = 0;
               tara[idTara1].ascunde();
             }
          }
        
        }
     }
     
    }
   updateArmate();
}  

var click1Valid, idTara1, idTara2;
var x = 0, y = 0;// cu cate zaruri alege fiecare sa dea
var zarx, zary; // ce zaruri au dat


function OKZaruri(xmax, ymax){ 
   var pierdut1 = 0, pierdut2 = 0;
   // parcurg primul set ca sa vad ce e selectat
   var i;
   for(i = 1; i <= xmax; i++){
     if(document.getElementById("grup1_zar"+i).checked){
        x = i; break;
     }
   }
   for(i = 1; i <= ymax; i++){
     if(document.getElementById("grup2_zar"+i).checked){
        y = i; break;
     }
   }
   // document.getElementById("cuCateZaruriDaFiecare").innerHTML = "";
   document.getElementById("cuCateZaruriDaFiecare").style.display = "none";
   document.getElementById("zaruri").style.display = "block";
   //pentru primul dau cu x zaruri
   for(i = 1;i <= x; i++){
      zarx[i] = Math.floor(Math.random() * 6 + 1);
   }
   //pentru al doilea cu y zaruri
   for(i = 1;i <= y; i++){
      zary[i] = Math.floor(Math.random() * 6 + 1);
   }
   sorteaza(zarx, x);
   sorteaza(zary, y);
   // aici, in "zaruri" fac un tabel cu rezultatele si cele 3 butoane: "Ataca alta tara", "Continua atacul", "Opreste"
   var linie = "";
          document.getElementById("PASS").onclick = function(){passR();}; // mutare= cate mutari mai am de facut
   linie = "<table rules='all' style='text-align: center; position: relative; margin-left: auto; margin-right: auto; margin-top: 20px;'><tr><td>" + tara[idTara1].numeTara + "</td><td>" + tara[idTara2].numeTara + "</td></tr>";
   if(x<y){
      for(i = 1; i <= y; i++){
        if(i<=x){
         linie += "<tr><td>"+ zarx[i]  +"</td><td>" + zary[i] + "</td></tr>";
         if(zarx[i]>zary[i]){
           pierdut2++;
         }else{
           pierdut1++;
         }
        }else{
         linie += "<tr><td>---</td><td>" + zary[i] + "</td></tr>";
        }
      }
   }else{
      for(i = 1; i <= x; i++){
        if(i<=y){
         linie += "<tr><td>"+ zarx[i]  +"</td><td>" + zary[i] + "</td></tr>";
         if(zarx[i]>zary[i]){
           pierdut2++;
         }else{
           pierdut1++;
         }
        }else{
         linie += "<tr><td>" + zarx[i] + "</td><td>---</td></tr>";
        }
      }
   }
   //concluzii
   linie += "</table><br>";
   linie += "<b>Conclusions:</b></br><br>";
   linie += tara[idTara1].numeTara+" lost " + pierdut1 +" territories;<br>";
   linie += tara[idTara2].numeTara+" lost " + pierdut2 +" territories;<br>";
   tara[idTara1].numarArmate -= pierdut1;
   tara[idTara2].numarArmate -= pierdut2;
  // adaug si butoanele
   linie += "<input type='button' style='margin-top: 10px;' onclick='atacaAltaTara()' value='Ataca alta tara!'>";
   if(tara[idTara1].numarArmate >= 2 && tara[idTara2].numarArmate > 0){ 
     // tara care ataca sa mai aiba macar 2 armate
     // si tara atacata sa nu fie deja cucerita
      linie += "<input type='button' style='margin-top: 10px;' onclick='continuaAtacul("+idTara2+")' value='Attack again!!'>";
   }
   linie += "<input type='button' style='margin-top: 10px;' onclick='opresteAtacul()' value='Stop attack!'>";
   document.getElementById("zaruri").innerHTML = linie;

   if(tara[idTara2].numarArmate == 0){ //cel atacat s-ar putea sa fi ajuns pe 0
       jucatori[tara[idTara2].idOcupant].cateTariACucerit--;
       jucatori[tara[idTara1].idOcupant].cateTariACucerit++;
      // daca era ultima tara a celui atacat => a castigat atacantul; altfel doar ii ocup teritoriul
      if(jucatori[tara[idTara2].idOcupant].cateTariACucerit == 0){
         //ai castigat
         aiCastigat(tara[idTara1].idOcupant);
      }else{
      //AICI VA TREBUI SA FAC O REDISTRIBUIRE; NU PUN NEAPARAT 1 ARMATA IN ZONA NOU CUCERITA, POT PUNE MAI MULTE
      var inNouaTara = -1;
      do{
         inNouaTara = parseInt(prompt("How many armies would you like to move from "+tara[idTara1].numeTara+" to "+ tara[idTara2].numeTara + " (intre 1 si " + (tara[idTara1].numarArmate - 1)+")" ,"1"));
         if(isNaN(inNouaTara) || (inNouaTara<1 || inNouaTara>=tara[idTara1].numarArmate)){
            inNouaTara = -1;
         }else{
            // in caz ca a bagat un double...
            inNouaTara = Math.floor(inNouaTara);
         }
      }while(inNouaTara == -1);
      tara[idTara2].numarArmate = inNouaTara;
      tara[idTara2].idOcupant = jucatorCurent;
      tara[idTara1].numarArmate -= inNouaTara;
      // daca am ajuns aici, ar trebui sa mai redesenez odata "cuCateZaruriDaFiecare"
      //
   }
      document.getElementById("numar"+idTara2).style.borderColor=jucatori[jucatorCurent].culoareStatus;
   }
   updateArmate();
   
}


function aiCastigat(idJucator){
   document.getElementById("promptBackground").style.display = "block";
   alert(jucatori[idJucator].nume+" won!!");
}

function sorteaza(vector, n){
  var i;
  var count = new Array(7);
  for(i = 1; i <7; i++){
     count[i] = 0;
  }
  for(i = 1; i <= n; i++){
    count[vector[i]]++; 
  }
  var ind = 1;
  for(i = 6; i > 0; i--){
    while(count[i] > 0){
       vector[ind++] = i;
       count[i]--;
    }
  }
}

function atacaAltaTara(){
     document.getElementById("zaruri").style.display = "none";
     document.getElementById("promptBackground").style.display = "none";
     subetapa = 2;
     click1Valid = 0; tara[idTara1].ascunde();
     click2Valid = 0; tara[idTara2].ascunde();
     document.getElementById("gameStatus").innerHTML = "PLAY - you may attack";
     document.getElementById("game").innerHTML = "PLAY - you may attack";
     document.getElementById("infoJoc").style.color = jucatori[jucatorCurent].culoareStatus;
     document.getElementById("infoJoc").innerHTML =  "";
     document.getElementById("PASS").innerHTML = "PASS - skip attack"; // mutare= cate mutari mai am de facut
     document.getElementById("PASS").onclick = function(){passA();}; // mutare= cate mutari mai am de facut
     // PASSredistribuire
 }

function continuaAtacul(idTara){
   subetapa = 2;
   document.getElementById("PASS").style.display = "block"; // mutare= cate mutari mai am de facut
   document.getElementById("zaruri").style.display="none";
   //document.getElementById("cuCateZaruriDaFiecare").style.display="block";
   click1Valid = 1;
   apasatTara(idTara);
}

function opresteAtacul(){
  //alert("opreste atacul!");
 document.getElementById("zaruri").style.display = "none";
 document.getElementById("promptBackground").style.display = "none";
 passA();
}

function passA(){ // sare atacul
   //alert("PASS");
   tara[idTara1].ascunde();
   if(idTara2 >= 1 && idTara2 <= 42)tara[idTara2].ascunde();
   click1Valid = 0;
   click2Valid = 0;
   subetapa = 3;
   document.getElementById("gameStatus").innerHTML = "PLAY - relocation";
   document.getElementById("game").innerHTML = "PLAY - relocation";
   document.getElementById("infoJoc").style.color = jucatori[jucatorCurent].culoareStatus;
   document.getElementById("infoJoc").innerHTML =  "";
   document.getElementById("PASS").innerHTML = "PASS - skip relocation"; // mutare= cate mutari mai am de facut
   document.getElementById("PASS").onclick = function(){passR();}; // mutare= cate mutari mai am de facut
   // PASSredistribuire
  }

function passR(){ // sare redistribuirea
      nextPlayer();
      document.getElementById("infoJoc").style.color = jucatori[jucatorCurent].culoareStatus;
      document.getElementById("infoJoc").innerHTML =  "";
      mutare = continenteIntregi(jucatorCurent); // return suma
      mutare += jucatori[jucatorCurent].cateTariACucerit;
      armate = mutare;
      document.getElementById("infoJoc").innerHTML =  armate + "/" + armate;
      document.getElementById("turnStatus").innerHTML = "you received " + mutare  + " armies for consolidation<br>";
      document.getElementById("turnStatus").style.color = jucatori[jucatorCurent].culoareStatus;
      document.getElementById("game").innerHTML = "Play - consolidation";
      subetapa = 1;
      document.getElementById("PASS").style.display = "none";  
 }

var subetapa; // 1,2,3 -> primesc carti, eventual atac
var armate;

function continenteIntregi(idJucator){
   var i;
   var rez = 0;
   var frecventa = new Array();
   frecventa[1] = frecventa[2] = frecventa[3] = frecventa[4] = frecventa[5] = frecventa[6] = 0;
   // parcurg tarile; la fiecare stiu din ce continent face parte
   for(i = 1; i <= 42; i++){
     if(tara[i].idOcupant == idJucator){
      frecventa[tara[i].idContinent]++;
     }
   }
   for(i=1;i<=6;i++){ // parcurg continentele
      if(frecventa[i] == continente[i].cateTari){
        rez += continente[i].armate;
      }
   }
   return rez;
}
