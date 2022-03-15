import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ThyButtonModule } from 'ngx-tethys/button';
import { ThyLayoutModule } from 'ngx-tethys/layout';
import { ThyMenuModule } from 'ngx-tethys/menu';
import { ThyIconModule } from 'ngx-tethys/icon';
import { ThyFormModule, THY_FORM_CONFIG } from 'ngx-tethys/form';
import { ThyInputModule } from 'ngx-tethys/input';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TethysComponentsModule } from '@tethys/pro';
import { ThyStepperModule } from 'ngx-tethys/stepper';
import { ThySharedModule } from 'ngx-tethys/shared';

const TETHYS_MODULES = [
    ThyLayoutModule,
    ThyButtonModule,
    ThyMenuModule,
    ThyIconModule,
    ThyFormModule,
    ThyInputModule,
    ThyStepperModule,
    ThySharedModule
];
const PRO_MODULES = [TethysComponentsModule];

@NgModule({
    declarations: [SidebarComponent],
    imports: [CommonModule, FormsModule, RouterModule, ...TETHYS_MODULES, ...PRO_MODULES],
    exports: [CommonModule, FormsModule, RouterModule, ...TETHYS_MODULES, ...PRO_MODULES, SidebarComponent],
    providers: [
        {
            provide: THY_FORM_CONFIG,
            useValue: {
                layout: 'vertical',
                footerAlign: 'right'
            }
        }
    ]
})
export class SharedModule {}
