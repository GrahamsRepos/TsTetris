"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var symbol = '\u2584'; //The blocks that make up the teromino
var whitespacesymbol = '.';
var speed = 400;
var score = 0;
var width = 10;
var height = 20;
//Tetrominos
var lTetromino = [
    [width, width + 1, width + 2, 2 * width],
    [1, width + 1, 2 * width + 1, 2 * width + 2],
    [width, width + 1, width + 2, 2],
    [0, 1, width + 1, 2 * width + 1]
];
var lmirrTetromino = [
    [width, width + 1, width + 2, 2 * width + 2],
    [1, 2, width + 1, 2 * width + 1],
    [0, width, width + 1, width + 2],
    [1, width + 1, 2 * width, 2 * width + 1]
];
var sTetromino = [
    [width + 1, width + 2, 2 * width, 2 * width + 1],
    [0, width, width + 1, 2 * width + 1],
    [width + 1, width + 2, 2 * width, 2 * width + 1],
    [0, width, width + 1, 2 * width + 1]
];
var zTetromino = [
    [width, width + 1, 2 * width + 1, 2 * width + 2],
    [1, width, width + 1, 2 * width],
    [width, width + 1, 2 * width + 1, 2 * width + 2],
    [1, width, width + 1, 2 * width]
];
var tTetromino = [
    [width, width + 1, width + 2, 2 * width + 1],
    [1, width + 1, width + 2, 2 * width + 1],
    [1, width, width + 1, width + 2],
    [1, width, width + 1, 2 * width + 1]
];
var oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
];
var iTetromino = [
    [2 * width, 2 * width + 1, 2 * width + 2, 2 * width + 3],
    [1, width + 1, 2 * width + 1, 3 * width + 1],
    [2 * width, 2 * width + 1, 2 * width + 2, 2 * width + 3],
    [1, width + 1, 2 * width + 1, 3 * width + 1]
];
var orientation = 0;
var tetrominoesREF = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino, lmirrTetromino, sTetromino];
var currentPosition = 0; //Math.abs(Math.floor(Math.random()*width-4));
var tetrominoIndex = 4; //Math.floor(Math.random() * tetrominoesREF.length);
var currentTetromino = tetrominoesREF[tetrominoIndex][orientation];
var currentColor = "\x1b[31m";
//--------------------------------------
//Console Tetris
//---------------------------------------
var noElements = width * height;
var array = [];
for (var i = 0; i < noElements; i++) {
    array.push(whitespacesymbol);
}
var printArray = function () {
    console.log('\n');
    var i = 0;
    var currRow = 0;
    while (i < noElements - 1) {
        var string = '';
        for (var ii = 0; ii < width; ii++) {
            if (ii < width - 1) {
                string += array[i + ii].toString() + ' ';
            }
            else {
                string += array[i + ii].toString();
            }
        }
        console.log('|' + string + '|');
        i += width;
        currRow += 1;
    }
    console.log('\n');
    console.log("score: " + score);
    //getMostRightPosition()
    // checkOverlapVertical();
};
var randomSelectTetromino = function () {
    tetrominoIndex = Math.floor(Math.random() * tetrominoesREF.length);
    currentTetromino = tetrominoesREF[tetrominoIndex][orientation];
    setRandomColor();
};
var draw = function () {
    //Checks if the tetromino overlaps with other tetrominos -- Create new tetramino and reset the position if it does
    currentTetromino.forEach(function (index, idx) {
        array[index + currentPosition] = "" + currentColor + symbol + "\u001B[0m";
        console.clear();
        printArray();
    });
    // currentPosition=Math.abs(Math.floor(Math.random()*width-4));
    // setRandomColor();
    // randomSelectTetromino();
    //Draw the new position;
};
//used to undraw the teramino before drawing the new position
var undraw = function () {
    currentTetromino.forEach(function (index) {
        array[index + currentPosition] = whitespacesymbol;
        console.clear();
        printArray();
    });
};
var setRandomColor = function () {
    var colors = ["\x1b[31m", '\x1b[34m', '\x1b[32m', '\x1b[36m'];
    currentColor = colors[Math.floor(Math.random() * colors.length)];
};
//--------------------------------------------------------------------------------------------------------------------
// Functions that are used to determine if the teromino can move , rotate , shift to it's next position or orientation
// --------------------------------------------------------------------------------------------------------------------
var checkOverlapVertical = function () {
    var hasOverlap = false;
    var currentTerominoMap = currentTetromino.map(function (index) { return (index + currentPosition); });
    currentTetromino.forEach(function (index, idx) {
        hasOverlap = !currentTerominoMap.includes(index + currentPosition + width) && (typeof array[index + currentPosition + width] === 'undefined' || array[index + currentPosition + width].toString().includes(symbol)) ? true : hasOverlap;
    });
    return hasOverlap;
};
var getMaxIndex = function () {
    return Math.max.apply(Math, currentTetromino) + currentPosition + width;
};
var checkCanRotateRight = function () {
    var checkZeroModulo = function (element) { return element % (width) === 0; };
    var moduloS = tetrominoesREF[tetrominoIndex][orientation < 3 ? orientation + 1 : 0].map(function (position) { return ((position + currentPosition) % width); });
    var maxModulos = Math.max.apply(Math, moduloS);
    var minModulos = Math.min.apply(Math, moduloS);
    return maxModulos - minModulos < 4;
    //return !tetrominoesREF[tetrominoIndex][orientation<3?orientation+1:0].map(position=>(position+currentPosition)).some(checkZeroModulo);
};
var checkCanRotateLeft = function () {
    var checkZeroModulo = function (element) { return element % width === 0; };
    return !tetrominoesREF[tetrominoIndex][orientation > 0 ? orientation - 1 : 3].map(function (position) { return (position + currentPosition); }).some(checkZeroModulo);
};
var canMoveRight = function () {
    var hasOverlap = false;
    var currentTerominoMap = currentTetromino.map(function (index) { return (index + currentPosition); });
    currentTetromino.forEach(function (index, idx) {
        hasOverlap = !currentTerominoMap.includes(index + currentPosition + 1) && (typeof array[index + currentPosition + 1] === 'undefined' || array[index + currentPosition + 1].toString().includes(symbol)) ? true : hasOverlap;
    });
    return !hasOverlap;
};
var canMoveLeft = function () {
    var hasOverlap = false;
    var currentTerominoMap = currentTetromino.map(function (index) { return (index + currentPosition); });
    currentTetromino.forEach(function (index, idx) {
        hasOverlap = !currentTerominoMap.includes(index + currentPosition - 1) && (typeof array[index + currentPosition - 1] === 'undefined' || array[index + currentPosition - 1].toString().includes(symbol)) ? true : hasOverlap;
    });
    return !hasOverlap;
};
var hasVerticalFill = function () {
    var hasVerticalFill = false;
    for (var i = 0; i < width; i++) {
        if (array[i].toString().includes(symbol)) {
            hasVerticalFill = true;
            break;
        }
    }
    return hasVerticalFill;
};
//---------------------------------------------------------------------
//Scoring Method - Checks for filled horizontal rows , removes the row from the array and updates the score
//----------------------------------------------------------------------
var checkForCompleteRowsAndScore = function () {
    for (var row = 0; row < height; row++) {
        var hasFullRow = true;
        for (var pos = row * width; pos < row * width + width; pos++) {
            if (array[pos].includes(whitespacesymbol)) {
                hasFullRow = false;
            }
        }
        if (hasFullRow) {
            score += 1;
            array.splice(row * width, width);
            for (var i = 0; i < width; i++) {
                array.unshift(whitespacesymbol);
            }
        }
    }
};
//Used to shift the teromino down
var moveDown = function () { return __awaiter(void 0, void 0, void 0, function () {
    var overlap;
    return __generator(this, function (_a) {
        overlap = checkOverlapVertical();
        if (getMaxIndex() < height * width && !checkOverlapVertical()) {
            undraw();
            currentPosition += width;
            draw();
            if (hasVerticalFill()) {
                clearInterval(timerID);
            }
        }
        else {
            currentPosition = Math.abs(Math.floor(Math.random() * width - 4));
            randomSelectTetromino();
            undraw();
            checkForCompleteRowsAndScore();
            draw();
        }
        return [2 /*return*/];
    });
}); };
var timerID = setInterval(moveDown, speed);
var started = true;
//Gets the current tetromino square closest to the right
var getMostRightPosition = function () {
    var maxIndex = 0;
    var maxModulo = 0;
    currentTetromino.forEach(function (position, index) {
        if ((position + currentPosition) % (width) > maxModulo) {
            maxModulo = (position + currentPosition) % (width);
            maxIndex = position + currentPosition;
        }
    });
    //console.log(maxModulo);
    //console.log(maxIndex);
    return maxModulo;
    // console.log(width+maxIndex);
};
var getMostLeftPosition = function () {
    var minIndex = 0;
    var minModulo = 9;
    currentTetromino.forEach(function (position, index) {
        if ((position + currentPosition) % (width) < minModulo) {
            minModulo = (position + currentPosition) % (width);
            minIndex = position + currentPosition;
        }
    });
    //console.log(minModulo);
    //console.log(minIndex);
    return minModulo;
    // console.log(width+maxIndex);
};
var keypress = require('keypress');
keypress(process.stdin);
var currentkey = '';
//listen for key press events
process.stdin.on('keypress', function (ch, key) {
    if (key && key.ctrl && key.name == 'c') {
        console.clear();
        process.stdin.pause();
        process.exit();
    }
    else if (key.name === 'up') {
        currentkey = key.name;
        if (checkCanRotateRight()) {
            undraw();
            if (orientation < 3) {
                orientation += 1;
            }
            else {
                orientation = 0;
            }
            currentTetromino = tetrominoesREF[tetrominoIndex][orientation];
            draw();
        }
    }
    else if (key.name === 'down') {
        if (checkCanRotateLeft()) {
            undraw();
            if (orientation > 0) {
                orientation = orientation - 1;
            }
            else {
                orientation = 3;
            }
            currentTetromino = tetrominoesREF[tetrominoIndex][orientation];
            draw();
        }
    }
    else if (key.name === 'right') {
        if (getMostRightPosition() < width - 1 && canMoveRight()) {
            undraw();
            currentPosition += 1;
            draw();
        }
    }
    else if (key.name === 'left') {
        if (getMostLeftPosition() > 0 && canMoveLeft()) {
            undraw();
            currentPosition -= 1;
            draw();
        }
    }
    else if (key.name = "p") {
        if (started) {
            clearInterval(timerID);
            started = false;
        }
        else {
            timerID = setInterval(moveDown, speed);
            started = true;
        }
    }
});
process.stdin.setRawMode(true);
process.stdin.resume();
