import { Component,EventEmitter,Output, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateService } from '../../services/state.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
searchControl = new FormControl("");
stateService = inject(StateService);
ngOnInit(){
  this.searchControl.valueChanges.pipe(debounceTime(250)).subscribe((value)=>{
    // console.log(value);
    this.stateService.searchSubject.next(value || "");
  })
}
}
