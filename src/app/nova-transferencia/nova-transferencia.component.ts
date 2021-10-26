import { Router } from '@angular/router';
import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() atTransfer = new EventEmitter<any>();

  valor: number = 12;
  destino: number = 222;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    const emitValue = {
      valor: this.valor,
      destino: this.destino
    }
    this.service.adicionar(emitValue).subscribe(resultado => {
      this.limparCampos();
      this.router.navigateByUrl('extrato')
    }, error => console.error(error));
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
