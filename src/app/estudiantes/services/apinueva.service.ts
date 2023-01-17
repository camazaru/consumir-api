import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY } from '@angular/cdk/overlay/overlay-directives';

@Injectable({
  providedIn: 'root'
})
export class ApinuevaService {

  constructor(private http: HttpClient) { 
    
  }

  getUsers(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/users')

    
    
  }
}
