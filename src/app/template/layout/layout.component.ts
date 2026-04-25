import { Component, OnInit } from '@angular/core';
import { LayoutProps } from './layoutprops';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AuthgoogleService } from '../../authgoogle.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  props: LayoutProps = { titulo: '', subtitulo: '' };

  constructor(
    private router: Router,
    private activaredRoute: ActivatedRoute,
    private loginService: AuthgoogleService,
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(() => this.activaredRoute.firstChild !== null),
        map(() => this.obterPropriedadeLayout()),
      )
      .subscribe((props: LayoutProps) => (this.props = props));
  }

  obterPropriedadeLayout(): LayoutProps {
    let rotaFilha = this.activaredRoute.firstChild;
    while (rotaFilha?.firstChild) {
      rotaFilha = rotaFilha.firstChild;
    }

    return rotaFilha?.snapshot.data as LayoutProps;
  }

  logout(): void {
    this.loginService.logout();
  }
}
