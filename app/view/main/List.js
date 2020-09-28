Ext.define('LoginApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'LoginApp.store.Todo'
    ],

    title: 'ToDo List',

    store: {
        type: 'todo'
    }
});
