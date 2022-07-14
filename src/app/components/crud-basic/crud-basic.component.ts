import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-basic',
  templateUrl: './crud-basic.component.html',
  styleUrls: ['./crud-basic.component.css']
})
export class CrudBasicComponent implements OnInit {
  user!: string;
  primaryData: any = [];
  displayUpdate: boolean = false;
  updatedData!: string;
  dataToBeEdited!: string;
  editedName!: string;
  dataId!: string;
  addOrEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {


  }

  addData(d: any) {
    // this.primaryData.push(d);
    if (d == null && d.replace(/\s+/g, ' ').trim() == null) {
      alert('Name cannot be blank');
    }
    else {
      this.primaryData.push(d);
    }
  }

  updateData(id: any) {
    // console.log(this.primaryData[id]);
    this.dataToBeEdited = this.primaryData[id];
    this.dataId = id;
    this.displayUpdate = true;

  }

  editData(data: any) {
    // console.log("Editing Data");
    console.log(data);
    this.primaryData[this.dataId] = this.user;
    // this.primaryData[this.dataId] = this.editedName;
  }

  deleteData(id: any) {
    if (confirm('Are You sure you want to delete ' + this.primaryData[id] + ' ?')) {
      this.primaryData.splice(id, 1);
    }
    console.log("Deleting Data");
  }

}
