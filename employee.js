class Employee {
	constructor (empName, empAge, empGender, deptName, designation) {
		this.empName = empName;
		this.empAge = empAge;
		this.empGender = empGender;
		this.deptName = deptName;
		this.designation = designation;
	}
	
	get employeeName() {
		return this.empName;
	}
	
	set employeeName(val) {
		this.empName = val;
	}
	
	get employeeAge() {
		return this.empAge;
	}
	
	set employeeAge(val) {
		this.empAge = val;
	}
	
	get employeeGender() {
		return this.empGender;
	}
	
	set employeeGender(val) {
		this.empGender = val;
	}
	
	get employeeDeptName() {
		return this.deptName;
	}
	
	set employeeDeptname(val) {
		this.deptName = val;
	}
	
	get employeeDesignation() {
		return this.designation;
	}
	
	set employeeDesignation(val) {
		this.designation = val;
	}
	
	printDetails() {
		console.log(`Employee name: ${this.empName}, age: ${this.empAge}, gender: ${this.empGender}, deptname: ${this.deptName}, designation: ${this.designation}`);
	}
	
	static printDesignationAndName(empClass) {
		for (var employee of empClass) {
			console.log(`Employee name: ${employee.empName}, designation: ${employee.designation}`);
		}
	}
	
}

const employee1 = new Employee("Vaibhav", 21, "Male", "Software", "Engineer");
const employee2 = new Employee("Kartik", 21, "Male", "IT", "Manager");

employee1.printDetails();
employee2.printDetails();


Employee.printDesignationAndName([employee1, employee2]);
