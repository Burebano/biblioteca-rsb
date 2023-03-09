import { RsbAction } from '../../../common/rsb-action';
export class RsbBlockItem<T>
{
    item:T;
    borderColor?:string;
    actions?:RsbAction<T>[];
}
