import { Component } from "@angular/core";
import { faker } from '@faker-js/faker';

export class ToDo {

  constructor(){
    this.userId = "c79d872a-012a-4a6f-ae10-2cb080409c4a"
    this.title = faker.name.jobArea()
    this.description = faker.lorem.paragraph()

    if (Math.round(Math.random())){
      const sameDate = faker.date.recent()

      this.completedAt = sameDate
      this.createdAt = sameDate
      this.deadlineAt = sameDate
      this.updatedAt = sameDate
    }
    else {
      console.log("SEM DATAA")
      const sameDate = faker.date.past()

      this.updatedAt = sameDate
      this.completedAt = null
      this.deadlineAt = faker.date.future()
      this.createdAt = sameDate
    }
  }
  
  userId: string
  title: string
  description: string
  completedAt: Date | null
  deadlineAt: Date
  createdAt: Date
  updatedAt: Date
}


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardPageComponent {
  constructor(){
    this.itemList = []
    for(let i = 0; i < 14; i++){
      this.itemList.push(new ToDo())
    }
  }

  itemList: Array<ToDo>
}