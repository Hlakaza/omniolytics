import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';

declare let mLayout: any;
@Component({
    selector: 'app-aside-nav',
    templateUrl: './aside-nav.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AsideNavComponent implements OnInit, AfterViewInit {
    navItems = [
        {
          'item': 'Dashboard',
          'link': 'home'
        },
        {
          'item': 'Setup',
          'link': 'setup'
        },
        {
          'item': 'Broiler Cycles',
          'link': 'broiler-cycles',
          // 'subItems': [
          //   { 'item': 'Sequence' },
          //   { 'item': 'Timeline' },
          //   { 'item': ' Action Plan' },
          //   { 'item': 'Checklist' },
          //   { 'item': ' SLA' },
          // ]
        },
        {
          'item': 'Insights',
          'link': 'trackit',
        },
        {
          'item': 'Admin Tool',
          'link': 'reports'
        }
        // ,{
        //   'item': 'User Profile',
        //   'link': 'profile'
        // },
        // {
        //   'item': 'System Data',
        //   'link': 'system-data'
        // },
        // {
        //   'item': 'Setup',
        //   'link': 'setup'
        // }
      ];

    constructor() {}
    ngOnInit() {

    }
    ngAfterViewInit() {
        mLayout.initAside();
        const menu = (<any>$('#m_aside_left')).mMenu();
        const item = $(menu).find('a[href="' + window.location.pathname + '"]').parent('.m-menu__item');
        (<any>$(menu).data('menu')).setActiveItem(item);
    }

}
