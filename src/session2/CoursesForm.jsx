import React, { Component } from 'react'
import Course from "./Models/Course";

export default class CoursesForm extends Component {

    componentWillMount() {
        this.tryInitFromCache();
    }

    tryInitFromCache() {
        try {
            let savedCoursesListJson = localStorage.getItem('coursesList');
            console.log(savedCoursesListJson);
            if (savedCoursesListJson !== undefined && savedCoursesListJson !== null) {
                let savedCoursesList = JSON.parse(savedCoursesListJson);
                if (savedCoursesList !== null && savedCoursesList.length > 0) {
                    this.setState({ coursesList: savedCoursesList });
                }
            }
        }
        catch{
            localStorage.setItem('coursesList',null);
            this.setState({coursesList:[]});
        }
    }

    state = {
        coursesList: [],
        course: new Course('', '', '', '', '', 0, 0)
    }

    changeInputVal = (event) => {
        let inputCourse = this.state.course;
        let key = event.target.name;
        let val = event.target.value;
        inputCourse[key] = val;

        this.setState({ course: inputCourse });

    }

    save = () => {
        let newCoursesList = this.state.coursesList;
        newCoursesList.push(this.state.course);
        window.localStorage.setItem('coursesList', JSON.stringify(this.state.coursesList));
        this.setState({ coursesList: newCoursesList,course:new Course('', '', '', '', '', 0, 0) });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-header bg-primary text-white text-bold">فرم مدیریت دوره های زمستانی</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="form-group col-sm-12">
                                    <label>دوره</label>
                                    <select className="form-control" name="title" placeholder="انتخاب کنید" onChange={this.changeInputVal}>
                                        <option>انتخاب کنید</option>
                                        <option>React</option>
                                        <option>Angular</option>
                                        <option>jQuery</option>
                                        <option>JavaScript</option>
                                    </select>
                                </div>
                                <div className="form-group col-sm-12">
                                    <label>مدرس</label>
                                    <select className="form-control" name="teacher" placeholder="انتخاب کنید" onChange={this.changeInputVal}>
                                        <option>انتخاب کنید</option>
                                        <option>مدرس 1</option>
                                        <option>مدرس 2</option>
                                        <option>مدرس 3</option>
                                    </select>
                                </div>
                                <div className="form-group col-sm-12">
                                    <label>کلاس</label>
                                    <select className="form-control" name="classRoom" placeholder="انتخاب کنید" onChange={this.changeInputVal}>
                                        <option>انتخاب کنید</option>
                                        <option>Class A</option>
                                        <option>Class B</option>
                                        <option>Class C</option>
                                        <option>Class D</option>
                                    </select>
                                </div>
                                <div className="form-group col-sm-12">
                                    <label>روزهای برگزاری</label>
                                    <input type="text" className="form-control" value={this.state.course.days} name="days" onChange={this.changeInputVal} />
                                </div>
                                <div className="form-group col-sm-12">
                                    <label>ساعات برگزاری</label>
                                    <input type="text" className="form-control" value={this.state.course.time} name="time" onChange={this.changeInputVal} />
                                </div>
                                <div className="form-group col-sm-12">
                                    <label>مدت زمان</label>
                                    <input type="number" className="form-control" value={this.state.course.hours} name="hours" onChange={this.changeInputVal} />
                                </div>
                                <div className="form-group col-sm-12">
                                    <label>هزینه دوره</label>
                                    <input type="number" className="form-control" value={this.state.course.price} name="price" onChange={this.changeInputVal} />
                                </div>
                                <div className="form-group col-sm-6">
                                    <button className="btn btn-success form-control" onClick={this.save}>ثبت</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-7">
                    <div className="card">
                        <div className="card-header bg-info text-white">لیست دوره ها</div>
                        <div className="card-body">
                            <table className="table table-responsive table-striped table-border">
                                <thead>
                                    <tr>
                                        <th>ردیف</th>
                                        <th>دوره</th>
                                        <th>مدرس</th>
                                        <th>کلاس</th>
                                        <th>روزهای برگزاری</th>
                                        <th>ساعات برگزاری</th>
                                        <th>مدت زمان</th>
                                        <th>هزینه دوره</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.coursesList.map((c, index) =>

                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{c.title}</td>
                                                <td>{c.teacher}</td>
                                                <td>{c.classRoom}</td>
                                                <td>{c.days}</td>
                                                <td>{c.time}</td>
                                                <td>{c.hours}</td>
                                                <td>{c.price}</td>
                                            </tr>

                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
