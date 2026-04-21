import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../lugares/lugar';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';
import { LugarService } from '../../lugares/lugar.service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
})
export class GaleriaComponent implements OnInit {
  lugares: Lugar[] = [];
  categoriasFiltro: Categoria[] = [];
  nomeFiltro: string = '';
  categoriaFiltro: string = '';

  constructor(
    private lugaresService: LugarService,
    private categoriasService: CategoriaService,
  ) {}

  ngOnInit(): void {
    this.categoriasService
      .listar()
      .subscribe((categorias) => (this.categoriasFiltro = categorias));

    this.lugaresService
      .listar()
      .subscribe((lugaresResposta) => (this.lugares = lugaresResposta));
  }

  getTotalEstrelas(lugar: Lugar): string {
    return (
      '&#9733;'.repeat(lugar.avaliacao ?? 0) +
      '&#9734'.repeat(5 - (lugar.avaliacao || 0))
    );
  }

  filtrar() {
    this.lugaresService
      .filtrar(this.nomeFiltro, this.categoriaFiltro)
      .subscribe((resultado) => (this.lugares = resultado));
  }
}
