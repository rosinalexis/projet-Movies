import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  movie = null;
  imageBaseUrl = environment.images;

  constructor(private router: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const id =  this.router.snapshot.paramMap.get('id');
    this.movieService.getMoviesDetails(id).subscribe((res)=> {
      console.log(res);
      this.movie = res;
    })
  }

  openHomepage(){
    window.open(this.movie.homepage);
  }

}
