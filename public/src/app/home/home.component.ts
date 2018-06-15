import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// @ViewChild(Alert) alert;
export class HomeComponent implements OnInit {
  
  task = {
    title: "",
    description: ""
  }
  message : {
    status: string,
    message: string
  }
  editing: Boolean = false;
  toEdit = {
    _id: "",
    title: "",
    description: ""
  }
  tasks = []

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getTasks()
  }
  create(){
    this.message = {status: "", message: ""};
    this._httpService.createTask(this.task).subscribe(data => {
      if(data['message']=="Success"){
        this.task = {title: "", description: ""};
        this.message.status="success";
        this.message.message = "Your task was successfully created!";
      }
      else {
        this.message.status="error";
        this.message.message = "Sorry, your task could not be created."
      }
    })
  }
  getTasks(){
    this._httpService.getTasks().subscribe(data=>{
      if(data['message']=="Success"){
        this.tasks = data['tasks']
      }
      else {
        console.log("trouble fetching tasks")
      }
    })
  }
  editTask(task){
    this.editing = true;
    this.toEdit = {_id: task._id, title: task.title, description: task.description}
    

  }
  updateTask(){
    this._httpService.updateTask(this.toEdit).subscribe(data => {
      if(data['message']=="Success"){
        console.log("message")
        this.getTasks();
      }
    })
  }
}
