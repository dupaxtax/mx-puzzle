function cellularAutomata(g, x, y, s) {
	//inputs size of grid, x pos of red box, y pos of red box, size of red box
	//default first row is 1,0,0,0,0,0,0,0,etc.

// try a do while loop here
	for(var i = 0; i < (g - 1); ++i) {
		if(i === 0) {
			var rows = [1];
			for(var l = 0; l < g - 1; ++l) {
				rows.push(0);
			}

			var grid = [rows];
		}
		var r = grid[i];
		var newRow = [];
		var left = 0;
		var right = 0;

		for(var j = 0; j < g; ++j) {
			//when j = 0 left is 0
			left =r[j - 1];
			if (j === 0) {
				left = 0;
			}
			// when j = g -1 right is 0
			right = r[j + 1];
			if (j === (g - 1)) {
				right = 0;
			}
			newRow.push(calcNewValue(r[j], left, right));
		}
		grid.push(newRow);
	}

	console.log(grid);
	return calcAnswer(grid, x, y, s);
}

function calcNewValue(r, left, right) {
	if(r === 1) {
		//black
		if(right === 1) {
			return 0;
		} else {
			return 1;
		}
	} else {
		//white
		if (right === left) {
			return 1;
		} else {
			return 0;
		}
	}
}

function calcAnswer(grid, x, y, s) {
	var significantValues = [];
	var retVal = 0;
	for(var i = 0; i < grid.length; ++i) {
		if(i < (x)) {
			continue;
		} else if (i >= (y-1) && i < ((y-1) + s)) {
			if(grid[i][x-1] === 1) {
				significantValues.push(1);
			} else {
				significantValues.push(0);
			}
		}
	}
	
	console.log(significantValues);

	//calculate total
	for(var j = 0; j < significantValues.length; ++j) {
		if(significantValues[j] === 1) {
			retVal = retVal + (2 ** j);
		}
	}
	return retVal;
}