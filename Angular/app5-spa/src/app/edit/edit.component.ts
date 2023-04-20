import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  isEdit: boolean = true;
  editContact: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private formbuilder: FormBuilder,
    private cs: ContactService,
    private router: Router
  ) {
    this.isEdit = true;
    this.editContact = this.formbuilder.group({
      fname: new FormControl('', []),
      lname: new FormControl('', []),
      email: new FormControl('', []),
      password: new FormControl('', []),
      id: new FormControl(null, []),
    });
  }
  ngOnInit() {
    this.route.params.subscribe((res) => {
      console.log(res);
      this.cs.getSingleContact(res).subscribe((res) => {
        this.editContact.setValue(res);
      });
    });
  }

  updateContactDetails() {
    this.cs.updateContact(this.editContact.value).subscribe(() => {
      this.router.navigate(['contact']);
    });
  }
}
