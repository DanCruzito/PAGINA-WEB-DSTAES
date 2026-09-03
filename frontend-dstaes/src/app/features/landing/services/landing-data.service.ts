import { Injectable } from '@angular/core';
import { landing_page_info } from '../../../shared/data/landing_page_info';

@Injectable({
  providedIn: 'root',
})
export class LandingDataService {
  data = landing_page_info;
}
