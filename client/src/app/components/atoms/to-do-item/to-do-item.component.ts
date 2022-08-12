import { Component, HostBinding, Input, OnInit } from "@angular/core";
import { ToDo } from "src/app/pages/dashboard-page/dashboard-page.component";


@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.sass']
})
export class ToDoItemComponent implements OnInit{
  constructor(){
    this.#MAX_DESCRIPTION_LENGTH = 100
    this.#MAX_TITLE_LENGTH = 30
  }
  
  @Input() rawData: ToDo
  @HostBinding('class.completed') isItemCompleted: boolean = false;
  @HostBinding('class.late') isLate: boolean = false;

  displayDescription: string
  displayTitle: string
  displayCreatedAt: string
  displayUpdatedAt: string
  displayDeadlineAt: string
  displayCompletedAt: string | null

  #MAX_DESCRIPTION_LENGTH: number
  #MAX_TITLE_LENGTH: number

  #chopStrings(str:string, maximumLength: number){
    if(str.length > maximumLength){
      return str.substring(0, (maximumLength - 3)) + "..."
    }

    return str
  }

  #formatDate(date: Date){
    return date.toLocaleString("pt-br", {
      day:"2-digit",
      month:"2-digit",
      year:"numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  generateData(){
    this.displayDescription = this.#chopStrings(this.rawData.description, this.#MAX_DESCRIPTION_LENGTH)
    this.displayTitle = this.#chopStrings(this.rawData.title, this.#MAX_TITLE_LENGTH)
    this.displayCreatedAt = this.#formatDate(this.rawData.createdAt)
    this.displayDeadlineAt = this.#formatDate(this.rawData.deadlineAt)
    
    if(this.rawData.completedAt){
      this.displayCompletedAt = this.#formatDate(this.rawData.completedAt)
      
      this.isItemCompleted = true
      this.isLate = false
    }
    else if (this.rawData.deadlineAt.getTime() - Date.now() < 0){
      this.isLate = true
      this.isItemCompleted = false
    }
  }

  toggleCompletion(){
    if(this.rawData.completedAt){
      this.rawData.completedAt = null
      this.isItemCompleted = false
    }
    else {
      const currentTime = new Date()
      this.isItemCompleted = true
      this.rawData.completedAt = currentTime
    }

    this.generateData()
  }

  ngOnInit(): void {
    this.generateData()
  }
}