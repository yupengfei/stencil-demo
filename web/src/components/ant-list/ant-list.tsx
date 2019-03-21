import { Component, State } from '@stencil/core';

@Component({
    tag: 'ant-list'
})
export class AntList {

    @State() contentList: any[] = [];

    componentDidLoad() {
        let header = new Headers({ 'Content-Type': 'application/json' });

        let request = new Request("/getList", {
            method: 'GET',
            // body: JSON.stringify(obj),
            headers: header
        });
        fetch(request).then((res) => {
            res.json().then((result) => {
                console.log(result);
                if (result.ErrorCode == 0)
                    this.contentList = result.Result;
            })
        })
    }
    render() {
        return (
            <ion-list>
                {
                    this.contentList.map(value =>
                        <ion-item>

                            <ion-label text-wrap>
                                <ion-text>
                                    <h1>{value.Title}</h1>
                                </ion-text>
                                <ion-text>
                                    <p>{value.Content}</p>
                                </ion-text>
                            </ion-label>
                        </ion-item>
                    )
                }
            </ion-list>
        )
    }
}
