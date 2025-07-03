import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  newTask: string = '';
  tasks: { text: string, isEditing: boolean }[] = [];

  // Add Task
  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ text: this.newTask.trim(), isEditing: false });
      this.newTask = '';
    }
  }

  // Delete Task
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  // Edit Task
  startEdit(index: number) {
    this.tasks[index].isEditing = true;
  }

  // Save Edited Task
  saveTask(index: number, editedText: string) {
    if (editedText.trim()) {
      this.tasks[index].text = editedText.trim();
    }
    this.tasks[index].isEditing = false;
  }
}
