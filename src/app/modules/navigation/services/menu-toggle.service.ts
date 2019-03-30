import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
 
@Injectable()
export class MenuToggleService {

  private menuToggledSource = new Subject();

  public menuToggled$ = this.menuToggledSource.asObservable();
  
  public toggle() {
    this.menuToggledSource.next();
  }
}