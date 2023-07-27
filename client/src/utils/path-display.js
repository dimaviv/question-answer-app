import {ROUTE_LOGIN, ROUTE_OAUTH, ROUTE_SIGNUP} from './consts';

export function shouldDisplayHeader(pathname) {
    return ![ROUTE_LOGIN, ROUTE_SIGNUP, ROUTE_OAUTH].includes(pathname.replace(/^\/+/, ''));
}

export function shouldDisplayFooter(pathname) {
    return ![ROUTE_LOGIN, ROUTE_SIGNUP, ROUTE_OAUTH].includes(pathname.replace(/^\/+/, ''));
}

