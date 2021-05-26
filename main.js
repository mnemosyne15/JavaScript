class Student {
    constructor(name, mark, gender, subjects) {
        this.name = name
        this.mark = mark
        this.gender = gender
        this.subjects = subjects
    }
}
//Tạo danh sách sinh viên của một lớp có 10 sinh viên
   var s1 = new Student('Dũng', 7, 0, [{title: 'toán', mark: 6}, {title: 'lý', mark: 6}])
   var s2 = new Student('yến', 8, 0, [{title: 'toán', mark: 7}, {title: 'lý', mark: 8}])
   var s3 = new Student('Nga', 9, 1, [{tiile: 'toán', mark: 8}, {title: 'lý', mark: 8}])
   var s4 = new Student('Thương', 9, 1, [{title: 'toán', mark: 8}, {title: 'lý', mark: 6}])
   var s5 = new Student('Hiền', 8, 1, [{title: 'toán', mark: 8}, {title: 'lý', mark: 8}])
   var s6 = new Student('Vy', 8, 0, [{title: 'toán', mark: 9}, {title: 'lý', mark: 6}])
   var s7 = new Student('Ý', 6, 1, [{title: 'toán', mark: 4}, {title: 'lý', mark: 9}])
   var s8 = new Student('Ngân', 6, 1, [{title: 'toán', mark: 5}, {title: 'lý', mark: 8}])
   var s9 = new Student('Toàn', 7, 0, [{title: 'toán', mark: 7}, {title: 'lý', mark: 5}])
   var s10 = new Student('Vân', 7, 0, [{title: 'toán', mark: 2}, {title: 'lý', mark: 0}])

let array = []
array.push(s1,s2,s3,s4,s5,s6,s7,s8,s9,s10)

var clone = [...array]

// Duyệt và ghép mảng lại với nhau
var sort = clone.reduce((init, value) => {
    var Diem =  [value.mark]
    return init.concat(Diem)
},[])

// Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ từ bé đến lớn
let sortDecrease = sort.sort((x,y) => {
    return x - y
})
console.log(sortDecrease)

// Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ từ lớn đến bé
let sortAscending = sort.sort((x,y) => {
    return y - x
})
console.log(sortAscending)

// Lọc ra danh sách sinh viên là nữ và có điểm tích luỹ lớn hơn 5.0
let studentFilter = clone.filter((value) => {
    return value.gender === 1 && value.mark > 5
})
console.log(studentFilter)

// Lọc ra danh sách sinh viên có điểm toán hoặc lý lớn hơn 8.0
let studentSubjects = clone.filter((value) => {
     return value.subjects[0].mark > 8 || value.subjects[1].mark > 8
})
console.log(studentSubjects)

// Duyệt và ghép mảng lại với nhau (subjects)
let subjectsMinMax = clone.reduce((init,value) => {
    const result = [value.subjects[0].mark]
    let n = init.concat(result)
    return n
}, [])
console.log(subjectsMinMax)

// Tìm sinh viên có điểm môn Toán cao nhất và thấp nhất
const subjectsMax = Math.max(...subjectsMinMax)
const subjectsMin = Math.min(...subjectsMinMax)
console.log(`
Sinh viên có điểm môn toán lớn nhất là: ${subjectsMax}
Sinh viên có điểm môn toán nhỏ nhất là: ${subjectsMin}
`)

// Xoá khỏi danh sách sinh viên có điểm tích luỹ là 0
let deleteStudent = clone.filter((value) => {
    return value.mark !== 0
})
console.log(deleteStudent)

// Thêm 03 sinh viên mới vào danh sách
var s11 = new Student('Tiến', 8, 0, [{title: 'toán', mark: 6}, {title: 'lý', mark: 6}])
var s12 = new Student('Hải', 7, 2, [{title: 'toán', mark: 7}, {title: 'lý', mark: 5}])
var s13 = new Student('Hùng', 9, 0, [{title: 'toán', mark: 8}, {title: 'lý', mark: 8}])