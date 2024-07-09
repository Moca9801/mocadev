import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplashComponent } from './components/splash/splash.component';
import { MainComponent } from './layouts/main/main.component';
import { MainSmallDevicesComponent } from './layouts/main-small-devices/main-small-devices.component';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SplashComponent, MainComponent, MainSmallDevicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  title = 'mocadev';
  isLoading = false;
  breakpointSub:any = Subscription;
  isLargeScreen: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver){}

  ngOnInit() {
    /*setTimeout(() => {
      this.isLoading = false;
    }, 5000);*/

    this.breakpointSub = this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.XLarge])
      .subscribe((state: BreakpointState) => {
        this.isLargeScreen = state.matches;
      });
  }

  ngOnDestroy(): void {
    this.breakpointSub.unsubscribe();
  }
}
