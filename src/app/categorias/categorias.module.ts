import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
ReactiveFormsModule
import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';

@NgModule({
  declarations: [CategoriaComponent],
  imports: [CommonModule, CategoriasRoutingModule, ReactiveFormsModule],
})
export class CategoriasModule {}
