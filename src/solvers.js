/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

var search = function(row, n, board, validator, cb) {
    // base case 
  if (row === n) {
    cb();
    return;
  }
  // step case
  for (var i = 0; i < n; i++) {
    board.togglePiece(row, i);
    if (!board[validator]()) {
      search(row+1, n, board, validator, cb);
    }
    board.togglePiece(row, i);
  }
};

window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  var solution = undefined; //fixme
  // solution will be a matrix that has 1 solution

  search(0, n, board, 'hasAnyRooksConflicts', function() {
    solution = board.rows().map(function(row) {
      return row.slice();
    }); 
  });
  // it will return a single N solution, how to optimize this
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  console.log('board..... ', board.rows());
  // if (n === 1) {
  //   return 1;
  // }
  var search = function(row, n) {
    // base case 
    if (row === n) {
      solutionCount++;
      return;
    }
    // step case
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyRooksConflicts()) {
        search(row+1, n);
      }
      board.togglePiece(row, i);
    }


  };
  search(0, n);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
