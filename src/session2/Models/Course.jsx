export default class Course{
    
    /**
     * 
     * @param {String} title 
     * @param {String} teacher 
     * @param {String} classRoom 
     * @param {String} days 
     * @param {String} time 
     * @param {Number} hours 
     * @param {Number} price 
     */
    constructor(title,teacher,classRoom,days,time,hours,price){
        this.title = title;
        this.teacher = teacher;
        this.classRoom = classRoom;
        this.days = days;
        this.time = time;
        this.hours = hours;
        this.price = price;
    }

}
