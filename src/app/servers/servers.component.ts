import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = '';
  userName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  displayPassword = false;
  timeStamps = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  toggleDisplay() {
    this.displayPassword = !this.displayPassword;
    this.timeStamps.push(new Date());
  }

  onDisplayPassword() {
    this.displayPassword = true;
  }

  // onUpdateServerName(event: Event) {
  //   console.log(this.serverName);
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
  //
  // onUpdateUserName(event: Event) {
  //   this.userName = (<HTMLInputElement>event.target).value;
  // }

  onUserNameNotEmpty() {
    if (this.userName.length > 0) {
      return true;
    }
    return false;
  }

  onResetUserName() {
    this.userName = '';
  }
}
