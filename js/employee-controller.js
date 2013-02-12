/*
 *	Employee Controller
 *	
 *	Used to manage employee objects
 */
 
 function employeeController() {
 
	this.data = null;
	this.originalData = null;
 
	this.loadArray = function(arr) {
		this.data = arr;
		this.originalData = arr.slice(); // copy array
	}
	
	this.reset = function() {
		this.data = this.originalData.slice(); // copy array
	}

	this.sort = function() {
		this.data.sort();
	}
	
	this.reverse = function() {
		this.data.reverse();
	}
	
	this.sortByEmployeeId = function() {
		this.data.sort(function(a,b) {
			var results = 0;
			if (a.employeeId < b.employeeId) {
				return -1;
			} else if (a.employeeId > b.employeeId) {
				return 1;
			}
			return results;
		});
	}

	this.sortByDepartmentAndEmployeeId = function() {
		this.data.sort(function(a,b) {
			var results = 0;
			
			// sort by department
			if (a.department < b.department) {
				results = -1;
			} else if (a.department > b.department) {
				results = 1;
			}
			
			// sort by employeeId within department
			if (results == 0) {
				if (a.employeeId < b.employeeId) {
					results = -1;
				} else if (a.employeeId > b.employeeId) {
					results = 1;
				}
			}
			
			return results;
		});
	}

	this.sortByActualDateStyleA = function() {
		this.data.sort(function(a,b) {
			var results = 0;
			if (new Date(a.actualDate) < new Date(b.actualDate)) {
				results = -1;
			} else if (new Date(a.actualDate) > new Date(b.actualDate)) {
				results = 1;
			}
			return results;
		});
	}

	this.sortByActualDateStyleB = function() {
		this.data.sort(function(a,b) {
			return (new Date(a.actualDate).getTime() - new Date(b.actualDate).getTime());
		});
	}
	
	this.dumpEmployees = function() {
	
		var arr = this.data;
		var level = 0;
		var dumped_text = "";
		if(!level) level = 0;

		//The padding given at the beginning of the line.
		var level_padding = "";
		for(var j=0;j<level+1;j++) level_padding += "    ";

		if(typeof(arr) == 'object') { //Array/Hashes/Objects 
			for(var item in arr) {
				var value = arr[item];
				
				if(typeof(value) == 'object') { //If it is an array,
					dumped_text += level_padding + "'" + item + "' ...\n";
					dumped_text += dump(value,level+1);
				} else {
					dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
				}
			}
		} else { //Stings/Chars/Numbers etc.
			dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
		}
		return dumped_text;
	}
}