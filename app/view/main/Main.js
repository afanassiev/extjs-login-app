/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('LoginApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'LoginApp.view.main.MainController',
        'LoginApp.view.main.MainModel',
        'LoginApp.view.main.List',
        'LoginApp.store.Todo'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list',
        items: [{
            xtype: 'button',
            text: 'Logout',
            margin: '10 0',
            handler: 'onClickButton'
        }]
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
        {
            title: 'Todo list',
            iconCls: 'fa-check',
            items: [
                {
                    xtype: 'mainlist',
                },
                {
                xtype: 'container',
                cls: 'todo-container',
                items: [{
                    xtype: 'textfield',
                    cls: 'todo-input',
                    emptyText: 'Type and press "Enter"!',
                    enableKeyEvents: true,
                    listeners: {
                        keypress: 'onTodoInputKeypress'
                    }
                }, {
                    xtype: 'dataview',
                    cls: 'todo-items',
                    reference: 'dataview',
                    bind: {
                        store: '{todoStore}'
                    },
                    itemTpl: [
                        '<div class="todo-item">',
                        '<input type="checkbox" <tpl if="completed">checked</tpl> class="todo-checkbox"> ',
                        '<span class="todo-text">{text}</span> ',
                        '<button type="button" class="todo-remove x-fa fa-times"></button>',
                        '</div>'
                    ],
                    listeners: {
                        itemclick: 'onTodoItemClick',
                        itemdblclick: 'onTodoItemDblClick'
                    }
                }, {
                    xtype: 'container',
                    cls: 'todo-footer',
                    layout: 'hbox',
                    hidden: true,
                    bind: {
                        hidden: '{!totalItems}'
                    },
                    items: [{
                        xtype: 'toolbar',
                        width: '100%',
                        defaults: {
                            listeners: {
                                click: 'onTodoFilterClick'
                            }
                        },
                        items: [{
                            xtype: 'tbtext',
                            bind: {
                                text: '{totalItems} total item(s)'
                            }
                        },
                            '->', {
                            itemId: 'clear',
                            cls: 'todo-clear-button',
                            text: 'Clear completed',
                            bind: {
                                hidden: '{!hasCompleted}'
                            }
                        }, {
                            itemId: 'all',
                            text: 'All'
                        }, {
                            itemId: 'active',
                            text: 'Active'
                        }, {
                            itemId: 'completed',
                            text: 'Completed'
                        }]
                    }]
                }]
            }]

        }, {
        title: 'About',
            iconCls: 'fa-question',
        bind: {
            html: '{about}'
        }
    }
]
});
