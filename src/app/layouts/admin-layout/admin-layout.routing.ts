import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { PaymentComponent } from '../../payment/payment.component';
import { DetailsPackComponent } from '../../details-pack/details-pack.component';
import { FormationComponent } from '../../formation/formation.component';
import { QuestionTestComponent } from '../../question-test/question-test.component';
import { PayementInterfaceComponent } from '../../payement-interface/payement-interface.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'Historiquepayement',       component: PaymentComponent },
    { path: 'DetailsPack',    component: DetailsPackComponent },
    { path: 'formation',    component: FormationComponent },
    { path: 'test',    component: QuestionTestComponent },
    { path: 'payement',    component: PayementInterfaceComponent }
];
