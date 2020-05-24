import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy
} from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenaveToggle = new EventEmitter<void>();
  isAuth = false;
  authSubcription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authSubcription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  onToggleSidenav() {
    this.sidenaveToggle.emit();
  }
  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubcription.unsubscribe();
  }
}
