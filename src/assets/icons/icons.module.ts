import { NgModule } from '@angular/core';
 
import { FeatherModule } from 'angular-feather';
import { Edit2, Plus, Trash } from 'angular-feather/icons';

const icons = {
    Edit2,
    Plus,
    Trash
};

@NgModule({ imports: [FeatherModule.pick(icons)],
    exports: [FeatherModule]
})

export class IconsModule {}