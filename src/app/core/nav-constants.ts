export enum OUTLETS {
    MODALS = 'modals',
    SETTINGS_SPACE = 'settingsSpace',
    MAIN_PLACE = 'mainPlace',
}

//

export enum PAGES_ROUTE {
    AUTH = 'auth',
    SIGNIN = 'signIn',
    REGISTER = 'register',
    FORGOT_PASSWORD = 'forgotPassword',
    RESET_PASSWORD = 'resetPassword',

    WORKSPACE = 'workspace',
}

export enum MODALS_ROUTE {
    ADD_PROJECT = 'addProject',
    ADD_LABEL = 'addLabel',
    ADD_FILTER = 'addFilter',
    SETTINGS = 'settings',
    QUICK_ADD = 'quickAdd',
}

export enum SETTINGS_ROUTE {
    ACCOUNT = 'account',
    GENERAL = 'general',
    ADVANCED = 'advanced',
    THEME = 'theme',

    CHANGE_EMAIL = 'changeEmail',
    CHANGE_PASSWORD = 'changePassword',
    DELETE_ACCOUNT = 'deleteAccount',
}

export enum MAIN_PLACE_ROUTE {
    TODAY = 'today',
    INBOX = 'inbox',
}
