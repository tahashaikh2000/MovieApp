import { Component, OnInit, ViewEncapsulation,Inject } from '@angular/core';
// import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-moviedialog',
  templateUrl: './moviedialog.component.html',
  styleUrls: ['./moviedialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MoviedialogComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<MoviedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    closeDialog() {
      this.dialogRef.close('movie');
    }

  ngOnInit(): void {
  }

}
