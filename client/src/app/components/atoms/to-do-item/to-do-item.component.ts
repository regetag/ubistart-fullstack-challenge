import { Component, Input, OnInit } from "@angular/core";
import { ToDo } from "src/app/pages/dashboard-page/dashboard-page.component";


@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.sass']
})
export class ToDoItemComponent implements OnInit{
  constructor(){
    // this.rawData.
  }

  @Input() rawData: ToDo

  displayDescription: string
  displayTitle: string
  displayCreatedAt: string
  displayUpdatedAt: string
  displayDeadlineAt: string
  displayCompletedAt: string | null


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
    })
  }

  ngOnInit(): void {
    const MAX_DESCRIPTION_LENGTH = 80
    const MAX_TITLE_LENGTH = 30

    this.displayDescription = this.#chopStrings(this.rawData.description, MAX_DESCRIPTION_LENGTH)
    this.displayTitle = this.#chopStrings(this.rawData.title, MAX_TITLE_LENGTH)
    this.displayCreatedAt = this.#formatDate(this.rawData.createdAt)
    this.displayCompletedAt = this.rawData.completedAt ? this.#formatDate(this.rawData.completedAt) : null

  }
}