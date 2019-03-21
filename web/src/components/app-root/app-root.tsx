import { Component } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-router useHash={true}>
          <ion-route url="/" component="ant-login" />
          <ion-route url="/list" component="ant-list" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
