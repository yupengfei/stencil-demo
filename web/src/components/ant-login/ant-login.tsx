import { Component, State } from '@stencil/core';
// import { Rou } from '@ionic/core';

@Component({
    tag: 'ant-login',
    styleUrl: 'ant-login.css'
})
export class AntLogin {
    // @Prop() history: RouterHistory;

    @State() userName: string;
    @State() password: string;

    handleSubmit() {
        console.log(this.userName);
        console.log(this.password);

        let header = new Headers({ 'Content-Type': 'application/json' });

        let request = new Request("/login?username=" + this.userName + "&password=" + this.password, {
            method: 'GET',
            // body: JSON.stringify(obj),
            headers: header
        });
        fetch(request).then((res) => {
            res.json().then((result) => {
                console.log(result);
                if (result.ErrorCode != 0) {
                    this.presentToast(result.ErrorMsg);
                } else {
                    document.querySelector("ion-router").push("/list");
                }
            })
        })
    }

    async presentToast(msg: string) {
        const toastController = document.querySelector('ion-toast-controller');
        await toastController.componentOnReady();

        const toast = await toastController.create({
            message: msg,
            duration: 2000
        });
        return await toast.present();
    }

    handleUserNameChange(event) {
        this.userName = event.target.value;
    }

    handlePasswordChange(event) {
        this.password = event.target.value;
    }


    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>登录</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content padding>
            <ion-toast-controller></ion-toast-controller>
                <ion-item>

                    <ion-input type="text" placeholder="请输入用户名" value={this.userName} onInput={(event) => this.handleUserNameChange(event)} />
                </ion-item>
                <ion-item>

                    <ion-input type="password" placeholder="请输入密码" value={this.password} onInput={(event) => this.handlePasswordChange(event)} />
                </ion-item>
                {/* <div id="submit_button"> */}

                <ion-button onClick={() => this.handleSubmit()}>登录</ion-button>

                {/* </div> */}



            </ion-content>
        ];
    }
}
