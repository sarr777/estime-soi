
import { Routes } from '@angular/router';

import { Accueil } from './pages/accueil/accueil';
import { Apropos } from './pages/apropos/apropos';
import { Conseils } from './pages/conseils/conseils';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
{ path: '', component: Accueil },
{ path: 'apropos', component: Apropos },
{ path: 'conseils', component: Conseils },
{ path: 'contact', component: Contact },
{ path: '**', redirectTo: '' }
];
