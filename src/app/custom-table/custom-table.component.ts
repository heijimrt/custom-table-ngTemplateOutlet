import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef
} from '@angular/core';
import { CustomTableContentDirective } from './directives/custom-table-content.directive';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  public columns: Array<{ header: string, key: string }> = [];
  @Input() public rows: any[] = [];
  @ContentChild(CustomTableContentDirective,{ read: TemplateRef })
  public tableContentDirective: any;

  ngOnInit() {
    this.columns = [
      {
        header: 'Column 1',
        key: 'column1'
      }
    ];
  }

}
