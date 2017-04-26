import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers} from '@angular/http'
import { Observable } from 'rxjs/Observable'
import {PushNotificationBean} from './push.notification.model'

import 'rxjs/Rx';

@Injectable()
export class PushNotificationService {

    constructor(private http: Http)
    { }

    postLandAssetFutureData(data:any,registrationId : string[]): Promise<any> {

        let api1 = "https://fcm.googleapis.com/fcm/send";
        let body : PushNotificationBean = new PushNotificationBean();
        body.data = data;
        body.registration_ids = registrationId;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization' : 'key=AAAAUvGTivk:APA91bHfFfY-33JgVD_yHn3nsb5CHXoUQ3HN0LvDR-mjqEDNpxE4RDZtXbZVxxSEddmKJVuLip1jBN7a8qfd5_iqqgaxCLcui2zj87k3_rYRvfdkXX0WCmJlTHJxf24X8IaG28My2X1n'
        });
        let options = new RequestOptions({headers: headers});
        return this.http.post(api1, JSON.stringify(body), options).toPromise().then(response => {
         

        }).catch(error => {
            let details = error.json().messages;
            alert("Failure :" + details);
            return this.throwPromise(error);
        });

    }

    private throwPromise(error: any): Promise<any> {
        return Promise.reject(error);
    }
}