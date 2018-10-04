import { Component, Input } from '@angular/core';
import { ServiceModel } from '../../model/service.model';

@Component({
    selector: 'service-card',
    templateUrl: './service-card.component.html'
})
export class ServiceCardComponent {
    @Input('data') data: ServiceModel;

    constructor() { }

}
