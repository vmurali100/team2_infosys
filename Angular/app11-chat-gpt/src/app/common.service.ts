import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  api_url = 'https://openai80.p.rapidapi.com/images/generations';
  constructor(private _http: HttpClient) {}

  getImageFromAI(imageName: string) {
    let headers = new HttpHeaders();
    const options = {
      method: 'POST',
      url: 'https://openai80.p.rapidapi.com/images/generations',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'IXEUAUo6gSmshyDa71pLNljSwKHRp1xt8bqjsn089SWjJ1GyuX',
        'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
      },
      data:`{"prompt":""}`
    };
      let imageObj ={
        prompt:imageName,
        n:10
      }
      // const data= '{"prompt":"A cute baby sea otter","n":2}'
      const data= JSON.stringify(imageObj)

    headers = headers
      .set('Content-Type', 'application/json; charset=utf-8')
      .set(
        'X-RapidAPI-Key',
        'IXEUAUo6gSmshyDa71pLNljSwKHRp1xt8bqjsn089SWjJ1GyuX'
      )
      .set('X-RapidAPI-Host', 'openai80.p.rapidapi.com');

    return this._http.post(this.api_url,data, {
      headers
    });
  }
}
