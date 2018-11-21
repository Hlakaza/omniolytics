import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/_guards/auth.guard';

const routes: Routes = [
    {
        'path': '',
        'component': ThemeComponent,
        'canActivate': [AuthGuard],
        'children': [
            /**
             * Omniolytics Routes
             */
            {
                'path': 'home',
                'loadChildren': '.\/pages\/default\/index\/index.module#IndexModule'
            },
            {
                'path': 'account-management',
                'loadChildren': '.\/pages\/default\/account-management\/account-management.module#AccountManagementModule'
            },
            {
                'path': 'trackbase',
                'loadChildren': '.\/pages\/default\/trackbase\/trackbase.module#TrackbaseModule'
            },
            {
                'path': 'trackit',
                'loadChildren': '.\/pages\/default\/trackit\/trackit.module#TrackitModule'
            },
            {
                'path': 'reports',
                'loadChildren': '.\/pages\/default\/reports\/reports.module#ReportsModule'
            },
            {
                'path': 'system-data',
                'loadChildren': '.\/pages\/default\/system-data\/system-data.module#SystemDataModule'
            },
            {
                'path': 'setup',
                'loadChildren': '.\/pages\/default\/setup\/setup.module#SetupModule'
            },
            {
                'path': 'profile',
                'loadChildren': '.\/pages\/default\/profile\/profile.module#ProfileModule'
            },
            /**
             * End Omniolytics Routes
             */
            {
                'path': 'header\/actions',
                'loadChildren': '.\/pages\/default\/header\/header-actions\/header-actions.module#HeaderActionsModule'
            },
            {
                'path': 'header\/profile',
                'loadChildren': '.\/pages\/default\/header\/header-profile\/header-profile.module#HeaderProfileModule'
            },
            {
                'path': '404',
                'loadChildren': '.\/pages\/default\/not-found\/not-found\/not-found.module#NotFoundModule'
            },
            {
                'path': '',
                'redirectTo': 'index',
                'pathMatch': 'full'
            }
        ]
    },
    {
        'path': 'snippets\/pages\/user\/login-1',
        'loadChildren': '.\/pages\/self-layout-blank\/snippets\/pages\/user\/user-login-1\/user-login-1.module#UserLogin1Module'
    },
    {
        'path': 'snippets\/pages\/errors\/error-1',
        'loadChildren': '.\/pages\/self-layout-blank\/snippets\/pages\/errors\/errors-error-1\/errors-error-1.module#ErrorsError1Module'
    },
    {
        'path': '**',
        'redirectTo': '404',
        'pathMatch': 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }
