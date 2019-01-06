import { Component, OnInit } from '@angular/core';
import { SongService } from '../../../core/services/song.service';
import { ISong } from '../../../../lib/models/song.interface';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  public song: ISong;

  constructor(
    private songService: SongService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.getSong();
  }

  public getSong(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.songService.getSong(id)
      .subscribe(song => this.song = song);
  }

}
