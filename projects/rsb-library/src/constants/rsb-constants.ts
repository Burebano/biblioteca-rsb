export class RsbToastConstants
{
    static TYPE_INFO = 'info';
    static TYPE_WARNING = 'warning';
    static TYPE_ERROR = 'danger';
    static TYPE_SUCCESS = 'success';

    static TIMEOUT = 5000;
}

export class RsbBlockListConstants
{
    static PAGINATION_DEFAULT:number = 10;
}

export class RsbResolutionConstants
{
    static MOBILE:string = 'mobile';
    static TABLET:string = 'table';
    static WEB:string = 'web';

    static MOBILE_MIN:number = 0;
    static MOBILE_MAX:number = 568;

    static TABLET_MIN:number = 568;
    static TABLET_MAX:number = 992;

    static WEB_MIN:number = 992;
    static WEB_MAX:number = 9999;
}

export class RsbAccorionConstants
{
    static OPEN:string = 'open';
    static CLOSE:string = 'close';
}

export class RsbModalTypeConstants
{
    static CONFIRM:string = 'open';
    static INFO:string = 'info';
    static NO_BUTTONS:string = 'no-buttons';
}

export class RsbThemeConstants
{
    static THEME_DEFAULT:string = 'theme-default';
    static THEME_DARK:string = 'theme-dark';
}