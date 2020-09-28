/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('LoginApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    stores: {
        todoStore: {
            fields: [
                { name: 'id' },
                { name: 'text', type: 'string' },
                { name: 'completed', type: 'boolean', defaultValue: false }
            ],
            listeners: {
                update: 'onStoreUpdate',
                add: 'onStoreAdd',
                remove: 'onStoreRemove'
            }
        }
    },

    data: {
        name: 'Login / Todo App',
        hasCompleted: false,
        totalItems: 0, 
        about: 'Simple app created on Sencha Ext Js 7.0.0. You can login/logout and manage a simple tasks (add, remove and filter). It is my first experience with Ext Js. You are welcome!'
    }

});
