/****************************************
  * Sort Functions
  ***************************************/

/* Notes on JavaScript sort algorithm:
	return 1, if you want b to come first
	return -1, if you want a to come first
	return 0, if both objects are the same
*/
  
  
  
/*
	sortByDepartmentAndEmployeeID
	
	Sort function to sort employees based on 
	department first and employee id second
	
	//alert("Employee A Department: " + a.department + ". Employee B Department: " + b.department);
	//var aDate = new Date(a.actualDate).getTime();
	//var bDate = new Date(b.actualDate).getTime();
*/
function sortByEmployeeId(a,b) {
	var results = 0;
	if (a.employeeId < b.employeeId) {
		return -1;
	} else if (a.employeeId > b.employeeId) {
		return 1;
	}
	return results;
}

function sortByDepartmentAndEmployeeId(a,b) {
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
}


function sortByActualDateStyleA(a,b) {
	var results = 0;
	if (new Date(a.actualDate) < new Date(b.actualDate)) {
		results = -1;
	} else if (new Date(a.actualDate) > new Date(b.actualDate)) {
		results = 1;
	}
	return results;
}

function sortByActualDateStyleB(a,b) {
	return (new Date(a.actualDate).getTime() - new Date(b.actualDate).getTime());
}

function OLDsortByDepartmentAndEmployeeId(a,b)
{
    if(a.department < b.department)
    {
        return 1;
    }
    else if(a.department > b.department)
    {
        return -1;
    }
    else if(a.employeeId < b.employeeId)
    {
        return 1;
    }
    else if(a.employeeId > b.employeeId)
    {
        return -1;
    }
	else if(new Date(a.actualDate) < new Date(b.actualDate))
    {
        return 1;
    }
    else if(new Date(a.actualDate) > new Date(b.actualDate))
    {
        return -1;
    }
    else
    {
        return 0;
    }
}
