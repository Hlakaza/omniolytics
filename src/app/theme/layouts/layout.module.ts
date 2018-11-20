import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
// tslint:disable-next-line:max-line-length
import { AsideLeftMinimizeDefaultEnabledComponent } from '../pages/aside-left-minimize-default-enabled/aside-left-minimize-default-enabled.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { DefaultComponent } from '../pages/default/default.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { FooterComponent } from './footer/footer.component';
import { QuickSidebarComponent } from './quick-sidebar/quick-sidebar.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HrefPreventDefaultDirective } from '../../_directives/href-prevent-default.directive';
import { UnwrapTagDirective } from '../../_directives/unwrap-tag.directive';
import { TabsComponent } from './tabs/tabs.component';
import { ModalsComponent } from './modals/modals.component';
import { TabComponent } from './tabs/tab.component';

@NgModule({
    declarations: [
        LayoutComponent,
        AsideLeftMinimizeDefaultEnabledComponent,
        HeaderNavComponent,
        DefaultComponent,
        AsideNavComponent,
        FooterComponent,
        QuickSidebarComponent,
        ScrollTopComponent,
        TooltipsComponent,
        HrefPreventDefaultDirective,
        UnwrapTagDirective,
        TabsComponent,
        TabComponent,
        ModalsComponent,
    ],
    exports: [
        LayoutComponent,
        AsideLeftMinimizeDefaultEnabledComponent,
        HeaderNavComponent,
        DefaultComponent,
        AsideNavComponent,
        FooterComponent,
        QuickSidebarComponent,
        ScrollTopComponent,
        TooltipsComponent,
        TabsComponent,
        TabComponent,
        ModalsComponent,
        HrefPreventDefaultDirective,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class LayoutModule {
}
