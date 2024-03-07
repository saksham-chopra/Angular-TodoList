import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  addTask(task: string) {
    return this.httpClient.post("http://localhost:3000/tasks", {
      title: task
    });
  }

  getAllTasks() {
    return this.httpClient.get("http://localhost:3000/tasks");
  }
  updateTask(task:any){
    return this.httpClient.put("http://localhost:3000/tasks/"+task.id,task)
  }
}
