import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getTasks(){
    return this._http.get('/tasks')
  }
  createTask(task){
    return this._http.post('/task', task)
  }
  updateTask(task){
    return this._http.put('/task', task);
  }

}
