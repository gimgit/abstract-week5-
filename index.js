
    function Student(name, age) {
      this._name = name;
      this.age = age;
    }
  
    // public method
    Student.prototype.sayHi = function () {
      console.log(`Hi!  my name is ${this._name}`);
    };
  
    // return constructo
  
  var me1 = new Student('Lee', '16');
  var me2 = new Student('Kim', '19');
  var me3 = new Student('Lim', '18');
  me1.sayHi(); // Hi! Lee.
  console.log(me2)
  console.log(me3) 
  // console.log(me instanceof Person)