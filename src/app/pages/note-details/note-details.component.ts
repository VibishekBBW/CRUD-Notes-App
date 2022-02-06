import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  note: Note;
  noteId: number;
  new: boolean;

  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    
    //check if we are creating a note or editing an exisiting one
    this.route.params.subscribe((params: Params) => {
      this.note = new Note();
      if(params['id']){
        this.note = this.notesService.get(params['id']);
        this.noteId = params['id'];
        this.new = false;
      } else {
        this.new = true;
      }
    })

    
  }

  onSubmit(form: NgForm){

    if(this.new){
      //Save the Note
      this.notesService.add(form.value);
      
    } else {
    //update the note
    this.notesService.update(this.noteId, form.value.title, form.value.body);    
    }
    this.router.navigateByUrl('/');
    
  }

  cancel(){
    this.router.navigateByUrl('/');
  }

}