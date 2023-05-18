//Вам потрібно зробити конструктор сутності "Студент".
//Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. 
//І є можливість отримати вік студента та його середній бал – це методи.
//Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, 
//спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, 
//щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, 
//коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, 
//щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – ​​методи.
//Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), 
//і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", 
//якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
//Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) 
//і показати використання цих методів.


class Student {
    constructor (firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(null);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }

        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }

    present() {
        const emptyIndex = this.attendance.findIndex((status) => status === null);

        if (emptyIndex !== -1) {
            this.attendance[emptyIndex] = true;
        } else {
            console.log('Максимальна кількість записів про відвідування досягнута');
        }
    }

    absent() {
        const emptyIndex = this.attendance.findIndex((status) => status === null);

        if (emptyIndex !== -1) {
            this.attendance[emptyIndex] = false
        } else {
            console.log('Максимальна кількість записів про відвідування досягнута');
        }
    }

    summary() {
        const averageGrade = this.getAverageGrade();
        const attendanceRatio = this.attendance.filter((status) => status === true).length / this.attendance.length;

        if (averageGrade > 90 && attendanceRatio > 0.9) {
            return 'Молодець!';
        } else if (averageGrade > 90 || attendanceRatio > 0.9) {
            return 'Добре, але можна краще';
        } else {
            return 'Редиска!';
        }
    }
}


const student1 = new Student ('Jhon', 'Doe', 2000)
student1.grades = [80, 85, 90, 95];
student1.present();
student1.absent();

const student2 = new Student ('Marry', 'Werner', 2001);
student2.grades = [90, 92, 88, 91];
student2.present();
student2.absent();


const student3 = new Student ('Alex', 'Fox', 1999);
student3.grades = [95, 97, 92, 98];
student3.absent();
student3.present();


console.log(student1.summary());
console.log(student2.summary());
console.log(student3.summary());