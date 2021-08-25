import { SettingService } from './../../services/setting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})
export class AccountSettingComponent implements OnInit {


  public links!: NodeListOf<Element>;

  constructor( private settingService: SettingService ) { }

  ngOnInit(): void {
    this.settingService.checkCurrencyTheme();
  }

  changeTheme( theme: string ){
    this.settingService.changeTheme( theme );
  }
}
