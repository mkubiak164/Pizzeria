import {Component, Input, OnInit} from '@angular/core';
import {Pasta} from '../../models/pasta';
import {ActivatedRoute} from '@angular/router';
import {PastasService} from '../pastas.service';

@Component({
  selector: 'app-pasta-detail',
  templateUrl: './pasta-detail.component.html',
  styleUrls: ['./pasta-detail.component.css']
})
export class PastaDetailComponent implements OnInit {

  @Input() pasta: Pasta;

  constructor(
    private route: ActivatedRoute,
    private pastaService: PastasService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pastaService.getPasta(id).subscribe(
      res => this.pasta = res
    );
  }

}
