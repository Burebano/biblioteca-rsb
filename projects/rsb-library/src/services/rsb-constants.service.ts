import { Injectable } from '@angular/core';
import { RsbResolutionConstants, RsbToastConstants, RsbBlockListConstants, RsbAccorionConstants } from './../constants/rsb-constants';
import { RsbModalTypeConstants, RsbThemeConstants } from '../constants/rsb-constants';

@Injectable({
  providedIn: 'root'
})
export class RsbConstantsService {

  RsbToastConstants = RsbToastConstants;
  RsbResolutionConstants = RsbResolutionConstants;
  RsbBlockListConstants = RsbBlockListConstants;
  RsbAccorionConstants = RsbAccorionConstants;
  RsbModalTypeConstants = RsbModalTypeConstants;
  RsbThemeConstants = RsbThemeConstants;

  constructor() { }

}
