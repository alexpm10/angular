import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './page/game/game.component';
import { FormsModule } from '@angular/forms';
import { BasketComponent } from './components/basket/basket.component';
import { StoresComponent } from './components/stores/stores.component';
import { DealsComponent } from './components/deals/deals.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [GameComponent, BasketComponent, StoresComponent, DealsComponent, LoaderComponent],
  imports: [CommonModule, FormsModule],
})
export class GameModule {}