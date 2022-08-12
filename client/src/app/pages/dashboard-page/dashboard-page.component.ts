import { Component } from "@angular/core";
import { faker } from '@faker-js/faker';

export class ToDo {

  constructor(exceeeded=false){
    this.userId = "c79d872a-012a-4a6f-ae10-2cb080409c4a"
    this.title = faker.name.jobArea()
    this.description = faker.lorem.paragraph()

    if(exceeeded){
      const sameDate = faker.date.recent()
      
      this.completedAt = null
      this.createdAt = sameDate
      this.deadlineAt = faker.date.past()
      this.updatedAt = sameDate
    }
    else{
      if (Math.round(Math.random())){
        const sameDate = faker.date.recent()
        
        this.completedAt = sameDate
        this.createdAt = sameDate
        this.deadlineAt = sameDate
        this.updatedAt = sameDate
      }
      else {
        const sameDate = faker.date.past()
  
        this.updatedAt = sameDate
        this.completedAt = null
        this.deadlineAt = faker.date.future()
        this.createdAt = sameDate
      }
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
    this.isModalOpened = false
    this.isModalCreating = false

    this.itemList = []

    this.itemList.push(new ToDo(true))
    
    for(let i = 0; i < 14; i++){
      this.itemList.push(new ToDo())
    }
  }

  itemList: Array<ToDo>
  isModalOpened: boolean
  isModalCreating: boolean

  toggleModal(forCreation: boolean){
    if (!this.isModalOpened) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "visible"

    if (forCreation) this.isModalCreating = true
    else this.isModalCreating = false

    this.isModalOpened = !this.isModalOpened
  }
}