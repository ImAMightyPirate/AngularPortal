import { Component, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { faCheck, faEye, faEyeSlash, faPencilAlt, faPlus, faSearch, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { DetailComponent } from './../detail/detail.component';

/* Table models */
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

/* Table models */
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.css']
})
export class MasterDetailComponent implements OnInit {

  faCheck = faCheck;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faPencilAlt = faPencilAlt;
  faPlus = faPlus;
  faSearch = faSearch;
  faTimes = faTimes;
  faTrashAlt = faTrashAlt;

  private isEditEnabled: boolean = true;

  /* Master pane buttons */
  private showViewButton: boolean;
  private showAddButton: boolean;
  private showEditButton: boolean;
  private showDeleteButton: boolean;

  /* Detail pane buttons */
  private showHideButton: boolean;
  private showConfirmButton: boolean;
  private showCancelButton: boolean;

  /* Table stuff */

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(false, []);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private bottomSheet: MatBottomSheet) { 
    this.showViewButton = true;

    if (this.isEditEnabled) {
      this.showAddButton = true;
      this.showEditButton = true;
      this.showDeleteButton = true;
    }
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onCheckboxChanged(row: PeriodicElement) {
    this.selection.toggle(row);
  }

  disabledRecordButton() : boolean {
    if (this.selection.selected.length === 1) {
      return false;
    }

    return true;
  }

  disabledAddButton() : boolean {
    return !this.isEditEnabled;
  }

  checkboxLabel(row: PeriodicElement): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  viewRecord(): void {
    this.bottomSheet.open(DetailComponent, {
      panelClass: 'bottom-sheet-panel'
    });
  }

}